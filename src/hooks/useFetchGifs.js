import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Un hook es una función que retorna algo

export const useFetchGifs = ( category ) => {
    
    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    
    const getImages = async () => {
        const newImages = await getGifs(category)
        setimages(newImages);
        setisLoading(false);
    }

    useEffect( () => {
        getImages()
    }, [] )

    return {
        images,
        isLoading
    }

}

