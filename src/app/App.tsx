import React from 'react';
import '../App.css';
import MainPageTemplate from "./template/MainPageTemplate";
import PageDefaultWrapper from "./template/PageDefaultWrapper";

const App = () => {
    return (
        <PageDefaultWrapper>
            <MainPageTemplate/>
        </PageDefaultWrapper>
    );
}

export default App;
