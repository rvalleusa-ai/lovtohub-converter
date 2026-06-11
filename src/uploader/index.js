const hubspot = require('@hubspot/api-client');
const fs = require('fs-extra');
const path = require('path');

async function upload(accessToken) {
  const hubspotClient = new hubspot.Client({ accessToken });
  const outputPath = path.join(__dirname, '../../output');

  console.log('   Connecting to HubSpot...');

  // Upload CSS file
  const cssPath = path.join(outputPath, 'css', 'main.css');
  const cssContent = await fs.readFile(cssPath, 'utf8');

  await hubspotClient.cms.sourceCode.contentApi.createOrUpdate(
    'generated',
    'lovabletohub/css/main.css',
    { content: cssContent }
  );
  console.log('   ✅ main.css uploaded');

  // Upload landing page template
  const templatePath = path.join(outputPath, 'templates', 'landing-page.html');
  const templateContent = await fs.readFile(templatePath, 'utf8');

  await hubspotClient.cms.sourceCode.contentApi.createOrUpdate(
    'generated',
    'lovabletohub/templates/landing-page.html',
    { content: templateContent }
  );
  console.log('   ✅ landing-page.html uploaded');
}

module.exports = { upload };