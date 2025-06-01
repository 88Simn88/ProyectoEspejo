import { Link } from "react-router-dom"
import { useState } from "react"
import { useInventory } from "../context/InventoryContext"
import { useModal } from "../context/ModalContext"

const Door_3 = () => {

  const { showModal } = useModal() // Usa el contexto del modal
  const { addItem } = useInventory() //Usa el contexto del inventario

  const items = {
    rug: {
      text: "Una Alfombra antigua...",
      next: "Lupa",
      buttonLabel: "Continuar"
    },
    Lupa: {
      text: "Encontraste una Lupa",
      item: { id: 1, name: "Lupa" },
      buttonLabel:"Recoger"
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
      /* onNext: () => {
        if (modalData.next) openModal(modalData.next)
      } */
        onNext: modalData.next ? () => openModal(modalData.next) : null,
        next: modalData.next
    })

  }



  return (
    <div
      className="h-screen w-screen bg-[url('../img/AlaEste.png')] bg-cover"

    >
      <h1 className="absolute top-20 text-white left-10 font-serif"
      > Ala Este </h1>

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

      <div
        className="absolute bg-transparent top-[220px] left-[570px] w-[200px] h-[158px] cursor-pointer"
        onClick={() => openModal("rug")}
      >

      </div>

    {/*   {activeModal && (
        <Modal
          text={items[activeModal].text}
          onClose={closeModal}
          onNext={() => {
            const next = items[activeModal].next
            if (next) openModal(next)
          }}
          item={items[activeModal].item}
          addItem={addItem}
        />
      )} */}
    </div>
  )
}
/* 
const Modal = ({ text, onClose, onNext, item, addItem }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
          <p className="mb-4">{text}</p>
          <div className="flex justify-end space-x-2">
            {item ? (
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  addItem(item);// Se añade al inventario usando el contexto
                  onClose();
                }}
              >
                Recoger {item.name}
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={onNext}
              >
                Continuar
              </button>
            )}
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
  }; */

export default Door_3