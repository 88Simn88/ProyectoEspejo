import { Link } from "react-router-dom"
import { useModal } from "../context/ModalContext"
import { useInventory } from "../context/InventoryContext"

const Door_2 = () => {

     const { showModal } = useModal() // Usa el contexto del modal
          const { addItem } = useInventory() //Usa el contexto del inventario
        
          const items = {
            rug: {
              text: "Un extraño cuadro...",
              next: "Palabra",
              buttonLabel: "Continuar"
            },
            Palabra: {
              text: "Parece que hay algo pero no se ve muy bien...",
              item: { id: 3, name: "Palabra" },
              buttonLabel: "Usar Lupa"
            },
            table: {
              text: "una Mesa antigua con algunas cosas...",
              
            }
          }
        
          const openModal = (modalName) => {
            const modalData = items[modalName]
        
            if (!modalData) return
        
            showModal({
              text: modalData.text,
              item: modalData.item,
              addItem: addItem,
              buttonLabel: modalData.buttonLabel,//Pasa la etiqueta al botón
              /* onNext: () => {
                if (modalData.next) openModal(modalData.next)
              } */
                onNext: modalData.next ? () => openModal(modalData.next) : null,
                next: modalData.next
            })
        
          }

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

        {/*Objetos  */}

        <div
        className="absolute transparent cursor-pointer top-[290px] left-[440px] w-[50px] h-[50px]"
        onClick={() => openModal("rug")}
        ></div>

        <div
                className="absolute transparent cursor-pointer bottom-[110px] left-[520px] w-[300px] h-[90px]"
        onClick={() => openModal("table")}
        ></div>

        </div>
    )
}

export default Door_2