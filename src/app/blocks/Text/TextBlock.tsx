import type {Text } from "../../../../payload-types";
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';
import { RichText } from "@/app/components/RichText";
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'


type TextBlockProps = {
  content: SerializedEditorState | null
  id?: string
}

export default function TextBlock(props: TextBlockProps) {
  if (!props.content) {
    return null;
  }
  // const html = props.content ? convertLexicalToHTML({data:props.content}) : '';
  

  return (
    <div>
      <RichText data={props.content!}/>
    </div>
  )
}