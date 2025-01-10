import { Link } from "react-router-dom"

const Door_2 = () => {

    return(
        <div
        className="h-screen w-screen bg-[url('../img/vestibulo1.png')] bg-cover"
        >
            <h1
            className="absolute top-20 text-gray-700 font-serif bg-white px-7 left-10"
            >
                Vestíbulo
            </h1>

            <Link
            to={"/inside/door1"}
            className="absolute bg-black top-[200px] left-[50px] text-gray-500 p-2 px-5 hover:text-white hover:scale-105"

            >Ala Oeste</Link>
            <Link
            to={"/inside/door3"}
                        className="absolute bg-black top-[200px] right-[50px] text-gray-500 p-2 px-5 hover:text-white hover:scale-105"

            >Ala Este</Link>
            <Link
            to={"/inside"}
            className="absolute bg-black bottom-[100px] left-[50px] text-gray-500 p-2 px-5 hover:text-white hover:scale-105"

            > Hall</Link>
        </div>
    )
}

export default Door_2