import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const showModal = (props) => setModals((prev) => [...prev, props]);

  const closeModal = (index) => {
    if (modals[index]?.onClose) {
      modals[index].onClose(); // Ejecutar función personalizada al cerrar
    }
    setModals((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}

      {modals.map((modalProps, index) => (
        <div
          key={index}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
            {/* Imagen opcional */}
            {modalProps.img && (
              <div className="mb-4">
                <img
                  src={modalProps.img}
                  alt="Modal content"
                  className="w-full h-auto rounded"
                />
              </div>
            )}

            {/* Texto opcional */}
            {modalProps.text && <p className="mb-4">{modalProps.text}</p>}

            {/* Componente personalizado */}
            {modalProps.content && <div className="mb-4">{modalProps.content}</div>}

            {/* Botones */}
            <div className="flex justify-end space-x-2">
            {modalProps.item ? (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => {
                    if (modalProps.buttonLabel === "Recoger") {
                      modalProps.addItem(modalProps.item);
                      
                    }
                    closeModal(index);
                  }}
                >{modalProps.buttonLabel === "Recoger"
                  ? `${modalProps.buttonLabel} ${modalProps.item.name}`
                  : modalProps.buttonLabel}


                </button>
              ) : (
                modalProps.next 
                && (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={modalProps.onNext}
                >
                   {modalProps.buttonLabel || "Continuar"}
                </button>
              )
            
            )}
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => closeModal(index)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>

      ))}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
