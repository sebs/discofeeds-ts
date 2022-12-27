export interface FeedFinderStrategy {
  /**
   * Discovers the RSS feeds in an HTML page.
   * @param html The HTML content of the page.
   * @param onFeed A callback function that will be called for each discovered feed URL.
   */
  discover(html: string, onFeed: (feed: string) => void): string[];
}

export class DiscoFeeds implements FeedFinderStrategy {
  constructor(private strategy: FeedFinderStrategy) {}

  discover(html: string, onFeed: (feed: string) => void): string[] {
    return this.strategy.discover(html, onFeed);
  }
}