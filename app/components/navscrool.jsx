'use client'
import { useRouter } from "next/navigation"

export default function Navscrool(){
    const router = useRouter()

    return(
        <div>
            <button className="bg-sky-400 m-2 p-2 rounded-full" onClick={()=>
            router.push('/')
            }>
                <img src="/angulo-izquierdo.svg" alt="" width={25} />
            </button>

            <button className="bg-sky-400  p-2 rounded-full" onClick={()=>
            router.push('/')
            }>
                <img src="/angulo-derecho.svg" alt="" width={25} />
            </button>
        </div>

    )

}