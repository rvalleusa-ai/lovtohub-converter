const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');

async function extract() {
  const inputPath = path.join(__dirname, '../../input');
  
  console.log(`   Looking in: ${inputPath}`);
  
  const files = glob.sync('src/routes/index.{jsx,js,tsx,ts}', { 
    cwd: inputPath
  });

  console.log(`   Found ${files.length} files`);

  const extracted = {
    title: '',
    description: '',
    hero: {},
    sections: [],
    faqs: [],
    cta: {}
  };

  for (const file of files) {
    const fullPath = path.join(inputPath, file);
    const raw = await fs.readFile(fullPath, 'utf8');
    
    // Force space between all words split across lines
    const content = raw
      .split('\n')
      .map(line => line.trim())
      .join(' ');

    // Extract TITLE and DESCRIPTION constants
    const titleMatch = content.match(/const TITLE\s*=\s*["'`]([^"'`]+)["'`]/);
    const descMatch = content.match(/const DESCRIPTION\s*=\s*["'`]([^"'`]+)["'`]/);
    if (titleMatch) extracted.title = titleMatch[1];
    if (descMatch) extracted.description = descMatch[1];

    // Extract Hero content
    const h1Match = content.match(/<h1[^>]*>\s*([^<]+)\s*<\/h1>/);
    if (h1Match) extracted.hero.heading = h1Match[1].trim();

    // Extract FAQ array
    const faqMatch = content.match(/const faqs\s*=\s*\[([\s\S]*?)\];/);
    if (faqMatch) {
      const faqBlock = faqMatch[1];
      const questions = [...faqBlock.matchAll(/q:\s*["'`]([^"'`]+)["'`]/g)];
      const answers = [...faqBlock.matchAll(/a:\s*["'`]([^"'`]+)["'`]/g)];
      extracted.faqs = questions.map((q, i) => ({
        question: q[1],
        answer: answers[i] ? answers[i][1] : ''
      }));
    }

    // Extract all h2 sections with following paragraph
    const sectionMatches = [...content.matchAll(/<h2[^>]*>[\s\S]*?<\/h2>\s*(?:<p[^>]*>([\s\S]*?)<\/p>)?/g)];
    for (const match of sectionMatches) {
      const headingMatch = match[0].match(/<h2[^>]*>\s*(?:<span[^>]*>)?([^<]+)(?:<\/span>)?\s*<\/h2>/);
      const heading = headingMatch ? headingMatch[1].trim() : '';
      const bodyRaw = match[1] || '';
      const body = bodyRaw
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .trim();
      if (heading) {
        extracted.sections.push({ heading, body });
      }
    }

    // Extract Final CTA
    const ctaH2 = content.match(/function FinalCta[\s\S]*?<h2[^>]*>\s*([^<]+)\s*<\/h2>/);
    const ctaP = content.match(/function FinalCta[\s\S]*?<p[^>]*>\s*([^<]+)\s*/);
    if (ctaH2) extracted.cta.heading = ctaH2[1].trim();
    if (ctaP) extracted.cta.body = ctaP[1].trim();
  }

  console.log(`   Title: ${extracted.title ? '✅' : '❌'}`);
  console.log(`   Hero: ${extracted.hero.heading ? '✅' : '❌'}`);
  console.log(`   Sections found: ${extracted.sections.length}`);
  console.log(`   FAQs found: ${extracted.faqs.length}`);
  console.log(`   CTA: ${extracted.cta.heading ? '✅' : '❌'}`);

  return extracted;
}

module.exports = { extract };