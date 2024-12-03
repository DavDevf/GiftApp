import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories((newCategory) => [newC tegory]);
  };

  return (
    <>
      {/*Titulo*/}
      <h1>GiftApp</h1>

      {/*Input */}
      <AddCategory //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
        currentCategories={categories}
      />
        {
          categories.map((catergory) => (

            <GiftGrid key={catergory} 
            category={catergory} />
          ))

        }
    </>
  );
};
