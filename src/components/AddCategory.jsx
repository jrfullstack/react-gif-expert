import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
        // console.log(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        // trim para eliminar espacios delante y detrás de toda la frase, para validar
        // condición si tenemos mas de un carácter
        if (inputValue.trim().length <= 1) return;

        // método 1 pasándola el categories en las props
        // setCategories([inputValue, ...categories]);

        // método 2 sin pasarla categories en las props
        // setCategories((categories) => [inputValue, ...categories]);

        // método 3 mandar al padre el valor del input
        onNewCategory(inputValue.trim());

        // para limpiar después de enviar
        setInputValue("");
    };

    return (
        <div>
            <h3>Buscador de gifs</h3>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
        </div>
    );
};
