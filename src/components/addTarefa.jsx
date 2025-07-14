import { useState } from "react"
import Inp from "./input"

function AddTarefa({ addtaf }) {
    const [title, mudat] = useState("")
    const [description, mudad] = useState("")

    return (
        <div className="bg-[#E2E8F0] rounded-[5px] p-6 space-y-5">
            <Inp 
                type="text"
                placeholder="digite o titulo"
                onChange={(event) => mudat(event.target.value)}
            />
            
            <Inp 
                type="text"
                placeholder="digite a descrição"
                onChange={(event) => mudad(event.target.value)}
            />  
            <button 
            className="bg-[#62748E] text-[white] rounded-[5px] font-bold w-full py-[10px] cursor-pointer" 
            onClick={() => {
                if (!title.trim() || !description.trim()) {
                    return window.alert('prencha todos os campos')
                }
                
                addtaf(title, description)
                document.getElementsByTagName('input')[0].value = ""
                document.getElementsByTagName('input')[1].value = ""
                mudat("")
                mudad("")
            }}>
                adicionar    
            </button>
        </div>
    )
}

export default AddTarefa