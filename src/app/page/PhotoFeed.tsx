import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Upload from '../component/Upload';
import { getImageUrls } from '../util/api/photo';

const FeedWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* height: 3000px; */
    width: 100vw;
`;

const Photo = styled.div<{
    url: string
}>`
    height: 32vw;
    width: 32vw;
    margin: 0px 1vw 1vw 0vw;
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
            <FeedWrapper>
                {photos.map(p => <Photo url={p}/>)}
            </FeedWrapper>
            <Upload uploadType={"photo"}/>
        </>
    );
}

export default PhotoFeed;