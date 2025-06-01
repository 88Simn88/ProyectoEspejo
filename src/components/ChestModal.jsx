import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChestModal = ({ onClose }) => {
    const [input, setInput] = useState("")
    const navigate = useNavigate()
    const correctWord = "tesoro"

    const handleSubmit = () => {
        if(input === correctWord) {
            alert("Correcto! Has conseguido la llave para el siguiente nivel!")
            navigate("/inside/mainroom1")
        } else {
            alert("Palabra incorrecta, intenta de nuevo.")
        }
    }

    return (
        <div>
            <img src="" alt="Cofre" />
            <input type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe la palabra..."
            />
            <button
            onClick={handleSubmit}
            > Confirmar </button>
            <button onClick={onClose}>Cancelar</button>
        </div>
    )
}

export default ChestModal