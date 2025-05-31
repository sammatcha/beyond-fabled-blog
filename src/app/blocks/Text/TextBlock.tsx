import type {Text } from "../../../../payload-types";
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';
import { RichText } from '../../components/RichText';


export default function TextBlock(props: Text) {
    const html = props.content ? convertLexicalToHTML({data:props.content}) : '';
     console.log("TextBlock html", html);
    return(
        <div>
            {props.content && <div dangerouslySetInnerHTML={{__html: html}}/>}  
           
        </div>
    )
}

