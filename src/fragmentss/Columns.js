import React from "react";
import {useState} from "react";
import {Modal} from "./Modal";
export const Columns = () => { 
    var td = document.getElementsByTagName("td");
    var td_text = td.innerHTML;
    console.log(td_text);
    const [open,setOpen] = useState(false);
    return(
        <>    
            <td id="name">Samira</td>
            <td>
            <button onClick={() => setOpen(true)}>Open Model</button>
            <Modal
                message={document.getElementById("name").innerHTML}
                isOpen={open}
                onClose= {()=> setOpen(false)}
                
            /></td>
            </>
        )

}