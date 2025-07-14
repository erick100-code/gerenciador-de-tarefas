import { CheckIcon, ChevronRightIcon, PackageMinusIcon } from "lucide-react"
import Btnico from "./icobtn"
import { useNavigate } from "react-router-dom"

function Tarefa({ tarefa, marcar, delet }) {
    const navigate = useNavigate()

    function naveg(task) {
        const param = new URLSearchParams()
        param.set('titulo', task.title)
        param.set('descrição', task.description)
        navigate(`pagina2/?${param}`)
    }

    return (
        <ul className="bg-[#E2E8F0] rounded-[5px] p-[20px] flex flex-col gap-[10px_0px]">
            {tarefa.map((indice) => (
                <li key={indice.id} className="flex gap-[0px_10px]">
                    <button 
                    className={`bg-[#90A1B9] rounded-[5px] text-white p-[10px] flex items-center gap-[0px_10px] w-full text-left ${indice.isCompleted && 'line-through'}`} onClick={() => marcar(indice.id)}
                    >
                        {indice.isCompleted && <CheckIcon className="text-[#00ff00]" />}
                        {indice.title}
                    </button>

                    <Btnico onClick={() => naveg(indice)}>
                        <ChevronRightIcon />
                    </Btnico>
            
                    <Btnico onClick={() => delet(indice.id)}>
                        <PackageMinusIcon />
                    </Btnico>
                </li>
            ))}
        </ul>
    )
}

export default Tarefa