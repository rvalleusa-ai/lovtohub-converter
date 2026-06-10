const extractor = require('./src/extractor');
const mapper = require('./src/mapper');
const generator = require('./src/generator');

async function convert() {
  console.log('🚀 LovToHub Converter Starting...');
  
  // Step 1: Extract content from Lovable project
  console.log('📦 Step 1: Extracting content...');
  const extracted = await extractor.extract();

  // Step 2: Map content to HubSpot module parameters
  console.log('🗺️  Step 2: Mapping to HubSpot modules...');
  const mapped = await mapper.map(extracted);

  // Step 3: Generate HubSpot theme files
  console.log('⚙️  Step 3: Generating HubSpot theme...');
  await generator.generate(mapped);

  console.log('✅ Done! Check the output/ folder.');
}

convert().catch(console.error);