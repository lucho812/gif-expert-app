import { useState } from "react";
import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // setCategories(categories.concat('Naruto'));
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={ setCategories }
        //on: se usa cuando se emite algo, es muy común en los eventos
        onNewCategory={onAddCategory}
      />

      {/* Listado de Gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* <li>ABC</li> */}
      {/* Gif Item */}
    </>
  );
};
