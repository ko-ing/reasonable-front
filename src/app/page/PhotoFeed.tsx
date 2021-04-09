import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Upload from '../component/Upload';
import { getImageUrls } from '../util/api/photo';

const Test = styled.div`
    height: 3000px;
    width: 100vw;
`;

const Photo = styled.div<{
    url: string
}>`
    height: 32vw;
    width: 32vw;
    margin: 0px 2vw 2vw 0vw;
    background-color: black;
    background-image: url(${p => p.url});
    background-size: cover;
    background-position: center, center;
    background-repeat: no-repeat;
`;

const PhotoFeed = () => {
    const [photos, setPhotos] = useState<string[]>([]);
    useEffect(() => {
        getImageUrls()
            .then((res: any) => {
                console.log(res.data);
                setPhotos(res.data);
            })
    }, [])

    return (
        <>
            <Test>
                {photos.map(p => <Photo url={p}/>)}
            </Test>
            <Upload uploadType={"photo"}/>
        </>
    );
}

export default PhotoFeed;