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
  console.log('   ✅ lovabletohub-landing.css generated');
}

async function generateLandingPage(mapped, outputPath) {
  const requireCss = '{{ require_css(get_asset_url("../css/lovabletohub-landing.css")) }}';

  let html = `<!--
  templateType: page
  isAvailableForNewContent: true
  label: LovToHub Landing Page
-->
{% extends "./layouts/base.html" %}

{% block body %}

${requireCss}

`;

  // Hero module
  if (mapped.hero) {
    html += `{%- module "hero"
    path="../modules/rhs-hero.module"
    heading="${mapped.hero.params.heading}"
    subheading="${mapped.hero.params.subheading}"
    cta_text="${mapped.hero.params.cta_text}"
    cta_url="${mapped.hero.params.cta_url}"
-%}

`;
  }

  // Content sections
  for (const [i, section] of mapped.sections.entries()) {
    const intro = section.params.body ? `<p>${section.params.body}</p>` : '';
    html += `{%- module "content_section_${i + 1}"
    path="../modules/rhs-content.module"
    heading="${section.params.heading}"
    intro="${intro}"
-%}

`;
  }

  // FAQ module
  if (mapped.faq) {
    html += `{%- module "faq"
    path="../modules/rhs-faq.module"
    heading="${mapped.faq.params.heading}"
    items=${JSON.stringify(mapped.faq.params.items)}
-%}

`;
  }

  // CTA module
  if (mapped.cta) {
    html += `{%- module "cta"
    path="../modules/rhs-cta.module"
    heading="${mapped.cta.params.heading}"
    intro="<p>${mapped.cta.params.body}</p>"
    cta_text="${mapped.cta.params.cta_text}"
    cta_url="${mapped.cta.params.cta_url}"
-%}

`;
  }

  html += `{% endblock body %}`;

  await fs.writeFile(
    path.join(outputPath, 'templates', 'landing-page.html'),
    html
  );
}

async function generateCSS(outputPath) {
  const css = `/*
  LovToHub Converter — lovabletohub-landing.css
  Scale: 100%
*/

/* ── Tokens ── */
:root {
  --color-hero:        #0b1f3a;
  --color-highlight:   #c0392b;
  --color-bg:          #ffffff;
  --color-bg-alt:      #f4f6f9;
  --color-fg:          #1a1a2e;
  --color-muted:       #5a6a7a;
  --color-border:      #dde3ea;
  --font-sans:         'Inter', system-ui, sans-serif;
  --radius:            6px;
  --max-w-narrow:      760px;
  --max-w-wide:        1100px;
  --section-py:        80px;
}

/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-fg);
  background: var(--color-bg);
}

h1, h2, h3, h4 {
  line-height: 1.25;
  font-weight: 700;
  margin-bottom: .75rem;
}

p { margin-bottom: 1rem; }
a { color: var(--color-highlight); }

/* ── Container ── */
.container-page {
  width: 100%;
  max-width: var(--max-w-wide);
  margin-inline: auto;
  padding-inline: 24px;
}

/* ── Hero ── */
.rhs-hero {
  position: relative;
  background: var(--color-hero);
  color: #fff;
  padding: var(--section-py) 0;
  text-align: center;
  overflow: hidden;
}

.rhs-hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #fff;
}

.rhs-hero .subheading {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: var(--color-highlight);
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.rhs-hero p {
  max-width: 680px;
  margin-inline: auto;
  opacity: .85;
  font-size: 1.05rem;
}

/* ── Buttons ── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  border-radius: var(--radius);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: opacity .2s;
}

.btn:hover { opacity: .88; }
.btn-primary { background: var(--color-highlight); color: #fff; }
.btn-outline  { border: 2px solid #fff; color: #fff; background: transparent; }

/* ── Content sections ── */
.rhs-section {
  padding: var(--section-py) 0;
}

.rhs-section--alt {
  background: var(--color-bg-alt);
}

.rhs-section h2 {
  font-size: clamp(1.4rem, 3vw, 2rem);
  text-align: center;
  margin-bottom: 1.5rem;
}

.rhs-section p {
  max-width: var(--max-w-narrow);
  margin-inline: auto;
  color: var(--color-muted);
  text-align: center;
}

/* ── FAQ ── */
.rhs-faq {
  padding: var(--section-py) 0;
  background: var(--color-bg-alt);
}

.rhs-faq h2 {
  font-size: clamp(1.4rem, 3vw, 2rem);
  text-align: center;
  margin-bottom: 2rem;
}

.faq-item {
  border-bottom: 1px solid var(--color-border);
  padding: 1.25rem 0;
}

.faq-item h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: .5rem;
}

.faq-item p {
  font-size: .95rem;
  color: var(--color-muted);
}

/* ── CTA ── */
.rhs-cta {
  padding: var(--section-py) 0;
  background: var(--color-hero);
  color: #fff;
  text-align: center;
}

.rhs-cta h2 {
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: #fff;
  margin-bottom: 1rem;
}

.rhs-cta p {
  opacity: .8;
  margin-bottom: 2rem;
  font-size: 1.05rem;
}
`;

  await fs.writeFile(
    path.join(outputPath, 'css', 'lovabletohub-landing.css'),
    css
  );
}

module.exports = { generate };