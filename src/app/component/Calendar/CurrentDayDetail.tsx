import styled from  'styled-components/macro';
import moment, { Moment } from 'moment';
import { useEffect, useState } from 'react';
import { getImageUrlsByDate } from '../../util/api/photo';
import { useSelector } from 'react-redux';

const SplitLineWrapper = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
`;
const CurrentDate  = styled.div`
    font-size: 13px;
    color: #777777;
`;

const SplitLine = styled.div`
    width: 30vw;
    height: 1px;
    background-color: #e0e0e0;
`;

const SectionTitle = styled.div`
    height: 23px;
    width: 50px;
    font-size: 15px;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    margin-left: 15px;
    /* text-decoration: underline; */
`;

const UnderLine = styled.div`
    height: 1px;
    width: 30px;
    background-color: grey;
`;

const ContentWrapper = styled.div`
    padding: 10px 0px;
    /* height: 200px; */
    
`;

const PostPhotoWrapper = styled.div`
    width: 100vw;
    height: auto;
    /* border: 1px solid #cccccc; */
    /* border-radius: 5px; */
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
`;

const PhotoWrapper = styled.div`
    /* display: flex;
    justify-content: center; */
`;

const Photo = styled.div<{
    url:string
    hasMargin: boolean
}>`
    width: 33vw;
    height: 33vw;
    margin: 0px ${p => p.hasMargin ? "0.5vw 0.5vw" : "0vw 0vw"} 0vw;
    /* background-color: black; */
    background-image: url(${p => p.url});
    background-size: cover;
    background-position: center, center;
    background-repeat: no-repeat;
`;

const CurrentDayDetails = ({
    currentDate
}:{
    currentDate: Moment
}) => {
    const [photos, setPhotos] = useState<any[]>([]);
    const photoStore = useSelector((state:any) => state.photoStore);


    const Sections: {name: string, content: any}[] = [{
        name: "일정",
        content: <></>
    }, {
        name: "게시글",
        content: <PostPhotoWrapper></PostPhotoWrapper>
    }, {
        name: "사진",
        content: <PhotoWrapper><PostPhotoWrapper>{photos.map((p:any, i:number) => <Photo hasMargin={i%3!=2} url={p.previewUrl}/>)}</PostPhotoWrapper></PhotoWrapper>
    }, {
        name: "통계",
        content: <></>
    }];

    useEffect(() => {
        // console.log("photoStore", photoStore);
        
        // setPhotos(photoStore.photos.filter((p:any) => {
        //     console.log("abc", moment(p.takenAt).isSame(currentDate, "date"))    
        //     return moment(p.taken).isSame(currentDate, "date")
        // }));
        getImageUrlsByDate(currentDate)
            .then((res:any) => {
                console.log(res, "res")
                setPhotos(res.data);
            })
            
    }, [currentDate]);

    return  (
        <>
            <SplitLineWrapper>
                <SplitLine />
                <CurrentDate>{currentDate.format("yyyy-MM-DD")}</CurrentDate>
                <SplitLine />
            </SplitLineWrapper>
            {Sections.map(s => (
                <>
                    <SectionTitle>{s.name}<UnderLine /></SectionTitle>
                    <ContentWrapper>{s.content}</ContentWrapper>
                </>
            ))}
        </>
    );
}

export default CurrentDayDetails;