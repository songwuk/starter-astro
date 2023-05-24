import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    presetRemToPx({
      baseFontSize: 16,
    }),
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ],
  shortcuts: [
    // you could still have object style
    {
      'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    },
  ]
})
