import { useState } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    


    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

   

    return (
        <div
            className="bg-black h-14 w-screen flex items-center pl-5 absolute font-serif"
        >
            <Link
                to={"/"}
                className="text-gray-500 font-bold hover:text-white"
            >El Misterio del Espejo
            </Link>
            <span
                onClick={toggleModal}
                className="bg-white ml-5 rounded-full p-2 cursor-pointer hover:scale-105"
            >
                ?
            </span>

            

            {/* Modal Desplegable */}

            {isOpen && (
                <div
                    className="absolute top-20 left-5 w-64 bg-white shadow-lg rounded-lg p-4 z-10"
                >
                    <h2 className="text-lg font-bold mb-2">Información</h2>
                    <p className="text-gray-700">

                        En una antigua mansión que perteneció a la familia Ardan, se ha perdido un artefacto invaluable: un espejo legendario conocido como el Espejo de Ardan. Este espejo tiene una historia oscura,
                        pues se dice que muestra no solo el reflejo de quien lo mira, sino también los secretos más profundos de su alma.


                    </p>
                </div>
            )}


          

        </div>
    )
}

export default NavBar