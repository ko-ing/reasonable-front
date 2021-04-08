import styled from  'styled-components/macro';
import moment, { Moment } from 'moment';

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
    /* border: 1px solid #cccccc; */
    /* border-radius: 5px; */
`;

const Sections: {name: string, content: any}[] = [{
    name: "일정",
    content: <></>
}, {
    name: "게시글",
    content: <PostPhotoWrapper></PostPhotoWrapper>
}, {
    name: "사진",
    content: <PostPhotoWrapper>여기에 인스타 사진 피드 같은 느낌으로 사진 샤샤샥</PostPhotoWrapper>
}, {
    name: "통계",
    content: <></>
}];

const CurrentDayDetails = ({
    currentDate
}:{
    currentDate: Moment
}) => {
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