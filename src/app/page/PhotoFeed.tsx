import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import Upload from '../component/Upload';
import { addPhotos, increasePage } from '../redux/photoAction';
import { getImageUrls } from '../util/api/photo';

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
    height: 60px;
`;

const PhotoFeed = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const photoStore = useSelector((state:any) => state.photoStore);
    const target = useRef<any>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const getImages = async () => {
            const res = await getImageUrls({page: photoStore.page, size: 15});
            dispatch(addPhotos(res.data));
        }
        if (isLoading) getImages();
    }, [photoStore.page])

    const onIntersect = async ([entry]:any) => {
        if (!entry.isIntersecting) return;
        dispatch(increasePage());
    }

    useEffect(() => {
        if (!target) return;
        setLoading(true);
        let observer = new IntersectionObserver(onIntersect, { threshold: 1 });
        observer.observe(target.current);
        return () => observer && observer.disconnect();
    }, [target]);
      
    return (
        <div>
            <FeedWrapper>
                {photoStore.photos.map((p:any, i:number) => <Photo hasMargin={i%3!=2} url={p.previewUrl}/>)}
            </FeedWrapper>
            <Upload uploadType={"photo"}/>
            <div ref={target} />
            <BottomMargin />
        </div>
    );
}

export default PhotoFeed;