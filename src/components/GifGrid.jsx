import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            {
                isLoading && <h2>Cargando...</h2>
            }

            <h1>{ category }</h1>

            <div className="card-grid">    
                {
                    images.map((image) => (
                        <GifItem 
                            key={image.id}
                            {...image} />
                    ))
                }
            </div>
        </>
    )

}

