import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
];

const stream = new SitemapStream({ hostname: 'https://vertigoservis.cz' });

const sitemapPromise = streamToPromise(Readable.from(links).pipe(stream))
  .then(data => data.toString());

sitemapPromise.then(sitemap => {
  writeFileSync('dist/public/sitemap.xml', sitemap);
  console.log('✓ sitemap.xml generated successfully!');
}).catch(console.error);