import { JSXConverters } from '@payloadcms/richtext-lexical/react'
import { SerializedHeadingNode } from '@payloadcms/richtext-lexical'


export const headingConverter: JSXConverters<SerializedHeadingNode> = {
  heading: ({ node, nodesToJSX }) => {
    const jsxChildren = nodesToJSX({ nodes: node.children })

    const headingClasses = {
      h1: 'md:text-3xl sm:text-lg ',
      h2: 'md:text-2xl sm:text-lg ',
      h3: 'md:text-xl sm:text-lg ',
      h4: 'md:text-lg sm:text-base',
      h5: 'md:text-base sm:text-sm ',
      h6: 'md:text-sm  font-thin',
    }

      const Tag = node.tag
    
      const heading = headingClasses[node.tag] || ''
      return <Tag className ={heading}>{jsxChildren}</Tag>
    
  }
}