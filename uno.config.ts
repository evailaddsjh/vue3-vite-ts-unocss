// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'

export default defineConfig({
    // 快捷方式  可以自定义类名
    shortcuts: [
        ['flex-center-x', "flex items-center justify-center"],
        ['flex-center-y', "flex flex-col items-center justify-around"],
    ],
    // 主题  可以定义变量
    theme: {
        fontSize: {
            Ctitle: "5.5rem",
            Etitle: "2rem",
        }
    },
    rules: [
        [/^bgi-\[(.*)\]$/, ([, size]) => {
            return {
                "background-image": `url(${size})`,
                "background-size": "100% 100%",
                "background-repeat": "no-repeat",
            }
        }],
    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography()
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})