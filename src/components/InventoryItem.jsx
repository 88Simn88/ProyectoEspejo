// InventoryItem.jsx
import React from "react";
import { useModal } from "../context/ModalContext";
import ChestModal from "./ChestModal";

const InventoryItem = ({ item, onRemove }) => {
  const { openModal } = useModal();

  const handleUse = () => {
    if (item.name === "Cofre") {
      openModal(<ChestModal onClose={() => openModal(null)} />);
    }
  };

  return (
    <div
    
    >
      <span 
      className="font-bold p-2"
      >{item.name}</span>
      <button 
      className="bg-lime-500 rounded p-1 mb-2 "
      onClick={handleUse}>Usar</button>
      <button
      className="bg-red-500 rounded p-1 mb-2 mx-2"
      onClick={() => onRemove(item.name)}>Eliminar</button>
    </div>
  );
};

export default InventoryItem;
