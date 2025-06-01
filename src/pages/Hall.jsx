import { useState } from "react"
import { Link } from "react-router-dom"

const Hall = () => {

const [isOpen, setIsOpen] = useState(false)

const toggleModal = () => {
    setIsOpen(!isOpen)
}

    return(
        <div 
        className="h-screen w-screen bg-[url('../img/Hall.png')] md:bg-cover"
        >
            <h1
            className="absolute top-20 left-10 text-2xl text-white "
            >
                Hall
            </h1>
            <span
            onClick={toggleModal}
            className="rounded-full bg-white text-black absolute top-20 left-24 p-2 cursor-pointer"
            >?</span>

            {
                isOpen && (
                    <div
                    className="bg-white absolute rounded top-[150px] z-10 p-2 left-10"
                    >
                     <h2 className="text-lg font-bold mb-2">Información</h2>
                     <p className="text-gray-700">
                        Entraste en la casa, tienes tres puertas para ir a buscar información
                        </p>
                    </div>
                )
            }

            <Link to={"/inside/door1"} 
            className="absolute bg-black top-[150px] left-[150px] text-gray-500 p-2 px-5 hover:text-white hover:scale-105
            font-serif"
            >Ala Oeste </Link>
            <Link to={"/inside/door2"}
            className="absolute bg-black top-[260px] left-[630px] text-gray-500 p-2 px-5 hover:text-white hover:scale-105
            font-serif"
            >Vestíbulo</Link>
            <Link to={"/inside/door3"}
            className="absolute bg-black top-[150px] right-[150px] text-gray-500 p-2 px-5 hover:text-white hover:scale-105
            font-serif"
            >Ala Este</Link>
        </div>
    )
}

export default Hall