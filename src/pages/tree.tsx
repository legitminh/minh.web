import { createElement } from "react";
import { render } from "react-dom";
import Document from "next/document";

export default function Tree( props:{
    children: Array<string>;
}){
    let all_children  = Document.createElement("div");

    props.children.forEach(function(child : string) {
        
    } );
    return (
        {
        props.children.forEach(function(child : string) {
            //remder(<>Hello</>)
        });
        }
        // <> 
        // all_children
        // <div className="text-xs">
            
        // </div>
        // </>
    )
}