const extractor = require('./src/extractor');
const mapper = require('./src/mapper');
const generator = require('./src/generator');
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const RURAL_HEALTHCARE = path.join(process.env.HOME, 'Downloads/rural_health_solutions/rural-healthcare');
const OUTPUT = path.join(__dirname, 'output');

async function convert() {
  console.log('🚀 LovToHub Converter Starting...');

  // Step 1: Extract content from Lovable project
  console.log('📦 Step 1: Extracting content...');
  const extracted = await extractor.extract();

  // Step 2: Map content to HubSpot module parameters
  console.log('🗺️  Step 2: Mapping to HubSpot modules...');
  const mapped = await mapper.map(extracted);

  // Step 3: Copy entire rural-healthcare theme as base
  console.log('📋 Step 3: Copying rural-healthcare theme as base...');
  await fs.remove(OUTPUT);
  await fs.copy(RURAL_HEALTHCARE, OUTPUT);
  console.log('   ✅ rural-healthcare theme copied as base');

  // Step 4: Generate and replace landing page and CSS
  console.log('⚙️  Step 4: Generating HubSpot theme files...');
  await generator.generate(mapped);

  // Step 5: Upload to HubSpot
  console.log('☁️  Step 5: Uploading to HubSpot...');
  execSync('hs cms upload output/ lovabletohub', { stdio: 'inherit' });

  console.log('✅ Done! Check HubSpot Design Manager.');
}

convert().catch(console.error);