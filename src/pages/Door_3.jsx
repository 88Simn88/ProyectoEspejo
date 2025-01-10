import { Link } from "react-router-dom"

const Door_3 = () => {

    return(
        <div
        className="h-screen w-screen bg-[url('../img/AlaEste.png')] bg-cover"

        >
            <h1
            className="absolute top-20 text-white left-10 font-serif"
            >
                Ala Este
            </h1>

            <Link
            to={"/inside/door2"}
            className="absolute bg-black top-[400px] left-[50px] text-gray-500 p-2 px-5 hover:text-white hover:scale-105"

            >
            Vestíbulo
            </Link>

            <Link
            to={"/inside"}
className="absolute bg-black top-[400px] right-[50px] text-gray-500 p-2 px-5 hover:text-white hover:scale-105"

            >Hall</Link>
        </div>
    )
}

export default Door_3