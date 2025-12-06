import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {muxInput} from 'sanity-plugin-mux-input'
import {schemaTypes} from './schemaTypes'
import {ExportReferralAction} from './.sanity/actions/ExportReferralAction.js'

export default defineConfig({
  name: 'default',
  title: 'FlowStateMeta',

  projectId: 'r96iva8u',
  dataset: 'production',

  plugins: [
    structureTool(),
    muxInput(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, {schemaType}) =>
      schemaType === 'referralCode' ? [ExportReferralAction, ...prev] : prev,
  },
})