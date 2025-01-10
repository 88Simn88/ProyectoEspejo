import { useState } from "react"
import { Link } from "react-router-dom"



const Home = () => {

    const [showInfo, setShowInfo] = useState(false)

    const toggleInfo = () => {
        setShowInfo(!showInfo)
    }

    return(
        <div

        className="h-screen w-screen bg-[url('../img/mansion1.png')] bg-cover"

       /*  style={{
            backgroundImage: `url("/img/mansion1.png")`,
          }} */
          
        
        >
            <Link
            to={"/inside"}
            className="absolute top-[150px] left-[654px] bg-black p-2 px-7 text-3xl cursor-pointer
            hover:scale-105 hover:text-white font-serif text-gray-500"
            >
                Entrar
            </Link>

            <div
            onClick={toggleInfo}
            className="h-20 w-20 bg-transparent cursor-pointer absolute top-[258px] left-[480px]"
            ></div>


            {showInfo && (
                <div
                    className="absolute top-[280px] left-[190px] w-64 bg-white shadow-lg rounded-lg p-4 z-10"
                >
                    <h2 className="text-lg font-bold mb-2">Información</h2>
                    <p className="text-gray-700">

                       Una antigua ventana del siglo XVIII de madera muy dura y resistente.

                    </p>
                </div>
            )}
        </div>
    )
}

export default Home