import { ChevronLeftIcon } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"
import Title from "../components/title"

function PageTwo() {
    
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get('titulo')
    const description = searchParams.get('descrição') 
    function volta() {
        navigate(-1)// volta uma pagina
    }

    return (
        <div className="bg-[#62748E] h-screen w-screen p-6">
            <div className="w-[500px] mx-auto space-y-7">
                <div className="flex  justify-center relative">
                    <button onClick={volta} className="text-white absolute left-0 top-0 bottom-0 cursor-pointer" >
                        <ChevronLeftIcon />
                    </button>

                    <Title>
                        detalhes da tarefa
                    </Title>
                </div>

                <div className="bg-[#90A1B9] rounded-[5px] p-5 space-y-2">
                    <h2 className="text-slate-600 font-semibold text-2xl">{title}</h2>
                    <p className="text-slate-600 text-[18px]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PageTwo