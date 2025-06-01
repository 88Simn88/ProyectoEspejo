import React from "react";
import { useInventory } from "../context/InventoryContext";
import InventoryItem from "./InventoryItem";

const InventoryMenu = () => {
    const { inventory, removeItem } = useInventory()

    return(
        <div
        className="absolute top-32 right-4 bg-white shadow-lg rounded-lg p-4 min-w-[200px] max-w-sm"
        >
            <h2
            className="text-lg font-bold mb-2"
            >Inventario</h2>
            {inventory.length=== 0 ? (
                <p>El inventario está vacío</p>
            ):(
                <ul 
                className="bg-gray-300 rounded pt-2"
                >
                    {inventory.map((item, index) => (
                        <div
                        className="flex gap-2 items-center justify-center"
                        key={index}
                        >
                            <InventoryItem item={item} onRemove={removeItem} />

                        </div>
                        
                      /*   key={item.id}
                           <p
                           className="pb-2"
                           >
                            {item.name}
                            </p> 
                            <button
                            className="bg-lime-500 rounded p-1 mb-2"
                            >
                                Usar
                            </button>
                            <button
                            className="bg-red-500 rounded p-1 mb-2"
                            onClick={() => removeItem(item.id)}
                            >
                                Eliminar
                            </button> */
                        
                    ))}
                </ul>
            ) }
        </div>
    )
}

export default InventoryMenu