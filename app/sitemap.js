import { createReadStream } from 'fs';
import { ServerResponse } from 'http';

const sitemapHandler = async (_, res = ServerResponse) => {
  const sitemap = createReadStream('./public/sitemap.xml.gz');
  res.setHeader('content-type', 'application/xml');
  res.setHeader('content-encoding', 'gzip');
  sitemap.pipe(res);
};

export default sitemapHandler;
