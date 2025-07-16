import { JSXConverters } from '@payloadcms/richtext-lexical/react'
import { SerializedLinkNode } from '@payloadcms/richtext-lexical'


export const linkConverter: JSXConverters<SerializedLinkNode> = {
    link: ({node, nodesToJSX}) => {
       
        const {linkType, url} = node.fields
        const jsxChildren = nodesToJSX({ nodes: node.children });
       
        if(!url){
            return null
        }

        if (linkType === "custom"){
             return <a href={url} target='_blank' rel="noopener noreferrer" className={"underline text-sky-600 hover:text-sky-800 "}>{jsxChildren}</a>
             
        }else{
            return <a href={url}  className={" text-orange"}>{jsxChildren}</a>
        }
       
    }
}


