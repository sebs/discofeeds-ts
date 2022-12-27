import { expect } from 'chai';
import { DomStrategy } from '../strategy/dom';

describe('DomStrategy', () => {
  let strategy: DomStrategy;

  beforeEach(() => {
    strategy = new DomStrategy();
  });

  it('should discover RSS feeds in an HTML page', () => {
    const html = '<html><head><link type="application/rss+xml" href="http://example.com/feed.xml" /></head><body></body></html>';
    let feedLinks: string[] = [];
    strategy.discover(html, (feed) => feedLinks.push(feed));
    expect(feedLinks).to.deep.equal(['http://example.com/feed.xml']);
  });

  it('should handle pages with no RSS feeds', () => {
    const html = '<html><head></head><body></body></html>';
    let feedLinks: string[] = [];
    strategy.discover(html, (feed) => feedLinks.push(feed));
    expect(feedLinks).to.be.empty;
  });
});