const fs = require('fs-extra');
const path = require('path');

async function generate(mapped) {
  const outputPath = path.join(__dirname, '../../output');
  
  await fs.ensureDir(outputPath);
  await fs.ensureDir(path.join(outputPath, 'modules'));
  await fs.ensureDir(path.join(outputPath, 'templates'));
  await fs.ensureDir(path.join(outputPath, 'css'));

  console.log(`   Output folder: ${outputPath}`);

  await generateLandingPage(mapped, outputPath);
  await generateCSS(outputPath);

  console.log('   ✅ landing-page.html generated');
  console.log('   ✅ main.css generated');
}

async function generateLandingPage(mapped, outputPath) {
  let html = `<!--
  LovToHub Converter Output
  Title: ${mapped.title}
  Generated: ${new Date().toISOString()}
-->

{{ require_css(get_asset_url('../css/main.css')) }}

<div class="page-wrapper">
`;

  // Hero module
  if (mapped.hero) {
    html += `
  {%- module "hero"
      path="./modules/rhs-hero.module"
      heading="${mapped.hero.params.heading}"
      subheading="${mapped.hero.params.subheading}"
      cta_text="${mapped.hero.params.cta_text}"
      cta_url="${mapped.hero.params.cta_url}"
  -%}
`;
  }

  // Content sections
  for (const [i, section] of mapped.sections.entries()) {
    html += `
  {%- module "content_section_${i + 1}"
      path="./modules/rhs-content.module"
      heading="${section.params.heading}"
      body="${section.params.body}"
  -%}
`;
  }

  // FAQ module
  if (mapped.faq) {
    html += `
  {%- module "faq"
      path="./modules/rhs-faq.module"
      heading="${mapped.faq.params.heading}"
      items=${JSON.stringify(mapped.faq.params.items)}
  -%}
`;
  }

  // CTA module
  if (mapped.cta) {
    html += `
  {%- module "cta"
      path="./modules/rhs-cta.module"
      heading="${mapped.cta.params.heading}"
      body="${mapped.cta.params.body}"
      cta_text="${mapped.cta.params.cta_text}"
      cta_url="${mapped.cta.params.cta_url}"
  -%}
`;
  }

  html += `
</div>`;

  await fs.writeFile(
    path.join(outputPath, 'templates', 'landing-page.html'),
    html
  );
}

async function generateCSS(outputPath) {
  const css = `/*
  LovToHub Converter Output
  Generated: ${new Date().toISOString()}
  Scale: 100%
*/

/* Base Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Typography */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
  margin-bottom: 1rem;
}

/* Page Wrapper */
.page-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  padding: 80px 0;
  text-align: center;
  background: #0057b8;
  color: #fff;
}

.hero-section h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-section p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.85;
}

/* Content Section */
.content-section {
  padding: 60px 0;
}

.content-section h2 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
}

/* FAQ Section */
.faq-section {
  padding: 60px 0;
  background: #f9f9f9;
}

.faq-section h2 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}

.faq-item {
  border-bottom: 1px solid #e5e7eb;
  padding: 1.25rem 0;
}

.faq-item h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.faq-item p {
  font-size: 0.95rem;
  color: #6b7280;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  text-align: center;
  background: #0057b8;
  color: #fff;
}

.cta-section h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 14px 32px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.9;
}

.btn-primary {
  background: #0057b8;
  color: #fff;
}

.btn-white {
  background: #fff;
  color: #0057b8;
}
`;

  await fs.writeFile(
    path.join(outputPath, 'css', 'main.css'),
    css
  );
}

module.exports = { generate };