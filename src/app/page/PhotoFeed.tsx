import React from 'react';
import styled from 'styled-components';
import Upload from '../component/Upload';

const Test = styled.div`
    height: 3000px;
    width: 100vw;
`;

const PhotoFeed = () => {
    return (
        <>
            <Test>PHOTO</Test>
            <Upload uploadType={"photo"}/>
        </>
    );
}

export default PhotoFeed;