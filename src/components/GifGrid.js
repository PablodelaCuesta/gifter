import { useFetchGif } from "../hooks/useFetchGifs"
import { GifGridItem } from "./GifGridItem"

export const GifGrid = ({category }) => {

    const { data, loading} = useFetchGif( category )


    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            {loading && <div className="loader"></div>}

            <div className="card-grid">
                {
                    data.map( (img) => (
                        <GifGridItem 
                            key={ img.id }
                            img={ img }
                        />
                    ))
                }
            </div>
        </>
    )
}
