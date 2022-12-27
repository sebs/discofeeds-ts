import { FeedFinderStrategy } from '../disco-feeds';
import { DOMParser } from '@xmldom/xmldom';
export class DomStrategy implements FeedFinderStrategy {
    public static readonly CONTENT_TYPE = 'text/html';
    public static readonly DOM_QUERY = 'link[type="application/rss+xml"]';
    public static readonly HREF_ATTR_NAME = 'href';

    discover(html: string, onFeed: (feed: string) => void): string[] {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, DomStrategy.CONTENT_TYPE);
      const links = doc.querySelectorAll(DomStrategy.DOM_QUERY);
      const feedLinks = Array.from(links).map((link) => link.getAttribute(DomStrategy.HREF_ATTR_NAME) || '');
      feedLinks.forEach((feedLink: string) => onFeed(feedLink));
      return feedLinks;
    }
}