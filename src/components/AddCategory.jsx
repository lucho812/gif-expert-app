import { useState } from "react"

export const AddCategory = ( { onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) =>{
        setInputValue(event.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1){
            return;
        }
        // setCategories( categories => [...categories, inputValue] )
        onNewCategory(inputValue.trim())
        setInputValue('');
    }

    return (
        
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue}
                // onChange={ event => onInputChange(event) }
                // Esto es lo mismo que arriba
                onChange={ onInputChange }
            />
        </form>

    )
}
