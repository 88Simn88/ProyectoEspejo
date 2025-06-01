import React, { createContext, useState, useContext } from "react"

const InventoryContext = createContext()

export const InventoryProvider = ( { children }) => {
    const [inventory, setInventory] = useState([])

    const addItem = (item) => {
        setInventory((prev) => {
            if (!prev.some((i) => i.id === item.id)){
                return [...prev, item]
                }
                return prev
        })
    }

    const removeItem = (itemId) => {
        setInventory((prev) => prev.filter((item) => item.id !== itemId))
    }

    return(
        <InventoryContext.Provider value={{ inventory, addItem, removeItem}}>
            {children}
        </InventoryContext.Provider>
    )
}

export const useInventory = () => useContext(InventoryContext)