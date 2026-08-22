import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  deployment: {
    appId: '92856a1b81ffa60fcce7c3f7'
  },
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: 'production'
  }
})
