# discofeed-ts

discofeed-ts is a Node.js module that can be used to discover RSS feed URLs in HTML content.

## Installation

To install discofeed-ts, run the following command:

```
npm install discofeed-ts
```

Usage

Here's an example of how to use discofeed-ts to discover RSS feed URLs in HTML content:

```typescript
import { discoverFeeds } from 'discofeed-ts';

const htmlContent = '...'; // HTML content to search for feed URLs
const feedUrls = discoverFeeds(htmlContent);
console.log(feedUrls); // Output: Array of discovered feed URLs
API
discoverFeeds(html: string): string[]
discoverFeeds is the main function of the discofeed-ts module. It takes an HTML string as input and returns an array of discovered RSS feed URLs.
```
## Contributing

Contributions to discofeed-ts are welcome! To contribute, please follow these steps:

* Fork the discofeed-ts repository
* Create a new branch for your changes
* Make your changes and write tests
* Run npm test to ensure that all tests pass
* Submit a pull request

## License

discofeed-ts is released under the MIT license. See the LICENSE file for more details.