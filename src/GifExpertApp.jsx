import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (onNewCategory) => {
        if (categories.includes(onNewCategory)) return;

        // metodo 1 para agregar mas objetos a un array
        setCategories([onNewCategory, ...categories]);
        // console.log(onNewCategory);

        // metodo 2 para agregar mas objetos a un array
        // setCategories( cat => [...cat, "Valorant"]);
    };

  return (
      <>
          {/* titulo */}
          <h1>GifExpertApp</h1>

          {/* Input */}
          <AddCategory
              //   metodo 1 y 2
              // categories={categories} setCategories={setCategories}
              //  metodo 3
              onNewCategory={(value) => onAddCategory(value)}
          />

            {/* <button onClick={onAddCategory}>Agregar</button> */}
            {/* Listado de Gif */}
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
                ))
            }
      </>
  );
}
