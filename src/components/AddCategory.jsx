import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) =>{
        setInputValue(target.value);
    }

    //Actuliza la lista mediante enter
    const onSubmit = (ev) => { 
        ev.preventDefault();

        //impiden que se agregen palabras con menos de 2 caracteres  
         if(inputValue.trim().length <= 1)  return;

        // setCategories((category) =>[inputValue, ...category]);
        onNewCategory(inputValue.trim());

        //--Limpiar el inputValue--
        setInputValue('');
        
        
    }

  return (
    <form onSubmit={(ev => onSubmit(ev))}>
        <input 
        type="text"
        placeholder=""
        value={inputValue}
        onChange={(ev) => onInputChange(ev)}
        />
    </form>
  );
}
