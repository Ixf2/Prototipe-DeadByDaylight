import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const SITE_URL = "http://localhost:5173"; 
const FEED_PATH = "/rss.xml";
const BLOG_BASE_PATH = "/home"; 


function escapeXml(str = "") {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const postsPath = path.join(__dirname, "..", "src", "content", "posts.json");
const outPath = path.join(__dirname, "..", "public", "rss.xml");


const posts = JSON.parse(fs.readFileSync(postsPath, "utf8"))
  .map(p => ({
    ...p,
    dateObj: new Date(p.date),
  }))
  .filter(p => !Number.isNaN(p.dateObj.getTime()))
  .sort((a, b) => b.dateObj - a.dateObj);

// 3) Construir items RSS
const itemsXml = posts.map(p => {
  const link = `${SITE_URL}${BLOG_BASE_PATH}/${p.slug}`;
  const pubDate = p.dateObj.toUTCString();

  return `
    <item>
      <title><![CDATA[${p.title ?? ""}]]></title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${p.description ?? ""}]]></description>
      ${p.author ? `<author>${escapeXml(p.author)}</author>` : ""}
    </item>
  `;
}).join("");

// 4) XML final
const now = new Date().toUTCString();
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml("DeadByDaylight")}</title>
    <link>${escapeXml(SITE_URL)}</link>
    <description>${escapeXml("Latest publications")}</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${escapeXml(SITE_URL + FEED_PATH)}" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>
`;

fs.writeFileSync(outPath, xml, "utf8");
console.log(`RSS generado: ${outPath} (${posts.length} items)`);