import React, { useEffect, useState } from 'react';
import Context from './index';
import axios from 'axios';
import { BigImageApi, ImageLightApi, MasonryApi } from '../../api';

const GalleryProvider = (props) => {
    const [images, setImage] = useState([]);
    const [smallImages, setSmallImages] = useState([]);
    const [masonryImg, setMasonryImg] = useState([]);

    useEffect(() => {
        const getChartData = async () => {
            try {
                axios.get(ImageLightApi).then((response) => {
                    setImage(response.data.src);
                });

                axios.get(BigImageApi).then((response) => {
                    setSmallImages(response.data.src);
                });

                axios.get(MasonryApi).then((response) => {
                    setMasonryImg(response.data);
                });

            } catch (error) {
                console.log('cancelled', error);
            }
        };
        getChartData();
    }, [setImage, setSmallImages, setMasonryImg]);

    return (
        <Context.Provider
            value={{
                ...props,
                images,
                smallImages,
                masonryImg
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default GalleryProvider;