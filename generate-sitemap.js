// sitemap-generator.js
const { SitemapStream, streamToPromise } = require("sitemap");
const { createGzip } = require("zlib");
const fs = require("fs");

async function generateSitemap() {
	const sitemap = new SitemapStream({
		hostname: "https://alvalens.my.id/",
	});

	// Add URLs to your sitemap
	sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
	sitemap.write({ url: "/about", changefreq: "daily", priority: 0.9 });
	sitemap.write({ url: "/projects", changefreq: "daily", priority: 0.9 });
	sitemap.write({ url: "/projects/archive", changefreq: "daily", priority: 0.7 });

	sitemap.end();

	const sitemapXML = (await streamToPromise(sitemap)).toString();
	const gzippedSitemap = createGzip();

	fs.writeFileSync("./public/sitemap.xml.gz", sitemapXML);
}

generateSitemap();
