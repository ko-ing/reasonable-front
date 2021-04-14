import styled from  'styled-components/macro';
import moment, { Moment } from 'moment';
import { useEffect, useState } from 'react';
import { getImageUrlsByDate } from '../../util/api/photo';

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
    height: 100vw;
    border: 1px solid #cccccc;
    border-radius: 5px;
`;

const Photo = styled.div<{
    url:string
}>`
    width: 33%;
    height: 33%;
    background-color: black;
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
    const [photos, setPhotos] = useState<string[]>([]);

        

    const Sections: {name: string, content: any}[] = [{
        name: "일정",
        content: <></>
    }, {
        name: "게시글",
        content: <PostPhotoWrapper></PostPhotoWrapper>
    }, {
        name: "사진",
        content: <PostPhotoWrapper>{photos.map(p => <Photo url={p}/>)}</PostPhotoWrapper>
    }, {
        name: "통계",
        content: <></>
    }];

    useEffect(() => {
        getImageUrlsByDate(currentDate)
            .then((res:any) => {
                console.log(res, "res")
                setPhotos(res.data);
            })
    }, [currentDate])

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