import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {


    const [ inputValue, setInputValue ] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        // Emite el evento
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue);
        setInputValue("");
    }


    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gif"
                value={ inputValue }
                onChange={ onInputChange }/>
        </form>
    );

}

