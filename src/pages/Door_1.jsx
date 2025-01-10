import { Link } from "react-router-dom"

const Door_1 = () => {

    return(
        <div
        className="h-screen w-screen bg-[url('../img/AlaOeste.png')] bg-cover"

        >
            <h1
            className="absolute text-white top-20 font-serif left-10"
            >
                Ala Oeste
            </h1>
<Link
to={"/inside/door2"}
className="absolute bg-black top-[400px] right-[50px] text-gray-500 p-2 px-5 hover:text-white hover:scale-105"

> Vestíbulo
</Link>

<Link
to={"/inside"}
 className="absolute bg-black top-[400px] left-[50px] text-gray-500 p-2 px-5 hover:text-white hover:scale-105"

>Hall</Link>

        </div>
    )
}

export default Door_1