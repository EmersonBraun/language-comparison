# Algolia DocSearch Setup

This project is configured to use Algolia DocSearch for search functionality. To enable search, you need to:

## Option 1: Apply for Algolia DocSearch (Free for Open Source)

1. Visit [Algolia DocSearch](https://docsearch.algolia.com/)
2. Submit your site for indexing
3. Once approved, you'll receive:
   - `appId`
   - `apiKey` (search-only API key)
   - `indexName`

4. Update `docusaurus.config.ts`:

```typescript
algolia: {
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_SEARCH_API_KEY',
  indexName: 'your-index-name',
  contextualSearch: true,
  searchParameters: {},
  searchPagePath: 'search',
},
```

## Option 2: Use Your Own Algolia Account

1. Create an account at [Algolia](https://www.algolia.com/)
2. Create a new application
3. Create an index
4. Configure crawler or manually index your content
5. Get your credentials and update `docusaurus.config.ts` as above

## Option 3: Disable Search Temporarily

If you want to disable search temporarily, comment out or remove the `algolia` configuration block in `docusaurus.config.ts`. The search button will not appear in the navbar.

## Multi-language Support

For multi-language sites, you may want to create separate indices for each language:

- `language-comparison-en`
- `language-comparison-pt-BR`
- `language-comparison-es`

Then configure the search to use the appropriate index based on the current locale.


