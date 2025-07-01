'use client'
import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { jsxConverter } from './converters/index'

type Props = {
  data: SerializedEditorState
} & React.HTMLAttributes<HTMLDivElement>

interface RichTextProps extends React.HTMLAttributes<HTMLDivElement> {
  data: SerializedEditorState
}

export function RichText(
  { data, ...props }: RichTextProps
) {
  return (
    <RichTextConverter
      data={data}
      converters={jsxConverter}
      {...props}
    />
  )
}
