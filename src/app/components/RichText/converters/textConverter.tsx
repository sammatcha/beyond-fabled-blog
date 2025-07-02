 import { JSXConverters } from '@payloadcms/richtext-lexical/react'
import { SerializedTextNode } from '@payloadcms/richtext-lexical'
import { defaultColors } from '@payloadcms/richtext-lexical/client'

type StateValues = Record<string, {
  label: string;
  css: React.CSSProperties;
}>

type TextStateFeatureState = {
  color?: StateValues;
  background?: StateValues;
  size?: StateValues;
  fontWeight?: StateValues;
  underline?: StateValues;
  [key: string]: StateValues | undefined;
}


const colorState: TextStateFeatureState = {
  color: {
    ...defaultColors.text,
  },
  size: {
    'large': {
      label: 'Large Text',
      css: {
        'fontSize': 'large',
      },
    },
  },
  fontWeight: {
    'bolder': {
      label: 'Bolder',
      css: {
        'fontWeight': 'bolder',
      },
    },
  },
  background: {
    ...(defaultColors.background as Record<string, { label: string; css: React.CSSProperties }>),
  },
  underline: {
    'solid': {
      label: 'Solid',
      css: { 'textDecoration': 'underline', 'textUnderlineOffset': '4px' },
    },
    'dashed': {
      label: 'Dashed',
      css: {
        'textDecoration': 'underline dashed',
        'textUnderlineOffset': '4px',
      },
    },
    'red-line-through': {
      label: 'Red Line Through',
      css: {
        'textDecoration': 'line-through',
        'textDecorationStyle': 'dotted',
        'textDecorationColor': 'red',
      },
    },
  },
}

type ExtractAllColorKeys<T> = {
  [P in keyof T]: T[P] extends StateValues ? keyof T[P] : never
}[keyof T]

type ColorStateKeys = ExtractAllColorKeys<typeof colorState>


const IS_BOLD = 1
const IS_ITALIC = 2
const IS_STRIKETHROUGH = 4
const IS_UNDERLINE = 8
const IS_CODE = 16
const IS_SUBSCRIPT = 32
const IS_SUPERSCRIPT = 64

export const textConverter: JSXConverters<SerializedTextNode> = {
  text: ({ node }) => {

    const styles: React.CSSProperties = {}

    if (node.$) {
      Object.entries(colorState).forEach(([stateKey, stateValues]) => {
        const typedStateValues = stateValues as StateValues
        const stateValue = node.$ && (node.$[stateKey] as ColorStateKeys)

        if (stateValue && typedStateValues[stateValue]) {
          Object.assign(styles, typedStateValues[stateValue].css)
        }
      })
    }

    let text: React.ReactNode = node.text
    if (node.format & IS_BOLD) {
      text = <strong>{text}</strong>
    }
    if (node.format & IS_ITALIC) {
      text = <em>{text}</em>
    }
    if (node.format & IS_STRIKETHROUGH) {
      text = <span style={{ textDecoration: 'line-through' }}>{text}</span>
    }
    if (node.format & IS_UNDERLINE) {
      text = <span style={{ textDecoration: 'underline' }}>{text}</span>
    }
    if (node.format & IS_CODE) {
      text = <code>{text}</code>
    }
    if (node.format & IS_SUBSCRIPT) {
      text = <sub>{text}</sub>
    }
    if (node.format & IS_SUPERSCRIPT) {
      text = <sup>{text}</sup>
    }
    if (node.$) {
      text = <span style={styles}>{text}</span>
    }
    return text
  },
}