import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import Upload from '../component/Upload';
import { getImageUrls } from '../util/api/photo';
import { setPhotos } from '../redux/photoAction';

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
    const photoStore = useSelector((state:any) => state.photoStore);

    return (
        <>
            <FeedWrapper>
                {photoStore.photos.map((p:any) => <Photo url={p}/>)}
            </FeedWrapper>
            <Upload uploadType={"photo"}/>
        </>
    );
}

export default PhotoFeed;