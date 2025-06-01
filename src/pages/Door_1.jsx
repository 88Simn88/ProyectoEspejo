import { Link } from "react-router-dom"
import { useModal } from "../context/ModalContext"
import { useInventory } from "../context/InventoryContext"

const Door_1 = () => {

      const { showModal } = useModal() // Usa el contexto del modal
      const { addItem } = useInventory() //Usa el contexto del inventario
    
      const items = {
        rug: {
          text: "Una Cómoda con muchas cosas...",
          next: "Cofre",
          buttonLabel: "Continuar"
        },
        Cofre: {
          text: "Encontraste un Cofre, tiene algo adentro y parece que se abre con una palabra clave...",
          item: { id: 2, name: "Cofre" },
          buttonLabel: "Recoger"
        },
      }
    
      const openModal = (modalName) => {
        const modalData = items[modalName]
    
        if (!modalData) return
    
        showModal({
          text: modalData.text,
          item: modalData.item,
          addItem: addItem,
          buttonLabel: modalData.buttonLabel,
        /*   onNext: () => {
            if (modalData.next) openModal(modalData.next)
          } */
            onNext: modalData.next ? () => openModal(modalData.next) : null,
            next: modalData.next
        })
    
      }

     

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

{/* Objetos */}

<div
className="absolute transparent h-[130px] w-[220px] bottom-[20px] right-[50px] cursor-pointer"
onClick={() => openModal("rug")}
>

</div>



        </div>
    )
}

export default Door_1