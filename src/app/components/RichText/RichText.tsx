'use client'
import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { converters } from './converters/index'
import { useEffect, useState } from 'react'



interface RichTextProps extends React.HTMLAttributes<HTMLDivElement> {
  data: SerializedEditorState
}

export function RichText({ data, ...props }: RichTextProps) {

const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true)
}, []); // Empty dependency array ensures this runs only once on mount

// check
if(!isClient){
  return null;
}
  return (
  
        <RichTextConverter
          data={data}
          converters={converters}
          {...props}
        />
   
   
  )
}


