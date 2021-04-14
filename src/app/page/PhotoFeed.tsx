import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import Upload from '../component/Upload';
import { getImageUrls } from '../util/api/photo';
import { setPhotos } from '../redux/photoAction';

const FeedWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
`;

const Photo = styled.div<{
    url: string
    hasMargin: boolean
}>`
    height: 33vw;
    width: 33vw;
    margin: 0px ${p => p.hasMargin ? "0.5vw 0.5vw" : "0vw 0vw"} 0vw;
    background-color: black;
    background-image: url(${p => p.url});
    background-size: cover;
    background-position: center, center;
    background-repeat: no-repeat;
`;

const BottomMargin = styled.div<{}>`
    width: 100vw;
    height: 40px;
`;

const PhotoFeed = () => {
    const photoStore = useSelector((state:any) => state.photoStore);

    return (
        <>
            <FeedWrapper>
                {photoStore.photos.map((p:any, i:number) => <Photo hasMargin={i%3!=2} url={p}/>)}
            </FeedWrapper>
            <Upload uploadType={"photo"}/>
            <BottomMargin />
        </>
    );
}

export default PhotoFeed;