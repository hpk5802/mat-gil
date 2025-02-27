import { NextResponse } from 'next/server';
import sitemap from '@/app/sitemap';

const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export async function GET() {
  const sitemapData = await sitemap();

  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  const urlSetStart = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const urlSetEnd = `</urlset>\n`;

  const urls = sitemapData
    .map((entry) => {
      return `<url>
      <loc>${entry.url}</loc>
      <lastmod>${formatDate(new Date())}</lastmod>
      <changefreq>${entry.changeFrequency}</changefreq>
      <priority>${entry.priority}</priority>
    </url>`;
    })
    .join('\n');

  const sitemapXML = xmlHeader + urlSetStart + urls + urlSetEnd;

  return NextResponse.json(sitemapXML, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
