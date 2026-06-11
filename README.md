**Step 1 — Extract**
Reads the main page file (`src/routes/index.tsx`) and extracts:
- Page title and description
- Hero heading and CTA
- Content section headings and body text
- FAQ questions and answers
- Final CTA content

**Step 2 — Map**
Maps extracted content to HubSpot module parameters:
- `rhs-hero.module`
- `rhs-content.module`
- `rhs-faq.module`
- `rhs-cta.module`

**Step 3 — Generate**
Outputs a complete HubSpot theme with:
- `require_css` directly in the landing page template
- Inline module parameters for HubSpot page editor compatibility
- Project-specific CSS at 100% scale

---

## Key Principles

- `require_css` goes directly in the landing page — not in base.html
- Content is passed as inline parameters — not hardcoded in modules
- One flexible module handles multiple content types
- Each project gets its own CSS file at 100% scale
- Extractor pulls content and structure — no JSX to HubL conversion

---

## Getting Started

### Requirements
- Node.js 18+
- A Lovable project downloaded as a zip

### Installation

```bash
git clone https://github.com/rvalleusa-ai/lovtohub-converter.git
cd lovtohub-converter
npm install
```

### Usage

1. Download your Lovable project as a zip and unzip it
2. Copy the project files into the `input/` folder:

```bash
cp -r ~/Downloads/your-lovable-project/* input/
```

3. Run the converter:

```bash
node index.js
```

4. Check the `output/` folder for your HubSpot theme files

---

## Output Structure