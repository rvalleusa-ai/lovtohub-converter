async function map(extracted) {
  console.log('   Mapping content to HubSpot module parameters...');

  const mapped = {
    title: extracted.title || 'Landing Page',
    description: extracted.description || '',
    hero: null,
    sections: [],
    faq: null,
    cta: null
  };

  // Map Hero
  if (extracted.hero && extracted.hero.heading) {
    mapped.hero = {
      module: 'rhs-hero.module',
      params: {
        heading: extracted.hero.heading,
        subheading: 'Improve patient outcomes. Expand access. Optimize resources.',
        cta_text: 'Contact Us',
        cta_url: '#contact'
      }
    };
  }

  // Map Content Sections
  for (const section of extracted.sections) {
    mapped.sections.push({
      module: 'rhs-content.module',
      params: {
        heading: section.heading,
        body: section.body || ''
      }
    });
  }

  // Map FAQ
  if (extracted.faqs && extracted.faqs.length > 0) {
    mapped.faq = {
      module: 'rhs-faq.module',
      params: {
        heading: 'Frequently Asked Questions',
        items: extracted.faqs
      }
    };
  }

  // Map CTA
  if (extracted.cta && extracted.cta.heading) {
    mapped.cta = {
      module: 'rhs-cta.module',
      params: {
        heading: extracted.cta.heading,
        body: extracted.cta.body || 'Contact us today.',
        cta_text: 'Contact Us',
        cta_url: '#contact'
      }
    };
  }

  console.log(`   Title: ${mapped.title ? '✅' : '❌'}`);
  console.log(`   Hero: ${mapped.hero ? '✅' : '❌'}`);
  console.log(`   Content sections: ${mapped.sections.length}`);
  console.log(`   FAQ: ${mapped.faq ? '✅' : '❌'}`);
  console.log(`   CTA: ${mapped.cta ? '✅' : '❌'}`);

  return mapped;
}

module.exports = { map };