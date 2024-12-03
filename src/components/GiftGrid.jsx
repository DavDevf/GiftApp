import { GiftItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log({isLoading });

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading ? (<h2>Cargando..</h2>) : null 
      }

      <div className="card-grid">
        {images.map((image) => (
          <GiftItem
            key={image.id}
            {...image} // Esparcir propiedades
            // title={image.title}
            // image={image.url}
          />
        ))}
        <li>titulo</li>
      </div>
    </>
  );
};