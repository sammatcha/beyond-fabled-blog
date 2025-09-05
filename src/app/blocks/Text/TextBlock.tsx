
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { Text as TextPayloadType } from "../../../../payload-types";
import { RichText } from "../../components/RichText/RichText";

// type TextBlockProps = {
//   content: SerializedEditorState | null
//   id?: string
// }

export default function TextBlock(props: {content: TextPayloadType['content'], id?: string}) {
  if (!props.content) {
    return null;
  }

  

  return (
    <div>
      <RichText data={props.content}/>
    </div>
  )
}