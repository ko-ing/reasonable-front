import React from 'react';
import Navbar from "../layout/Navbar";
import styled from "styled-components";
import Icon from "../component/Icon"

const MainPageWholeWrapper = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: #17191c; */
    position: relative;
`;

const TopNavBar = styled.div<{}>`
  /* position: absolute; */
  /* top: 60px; */
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
`;

const TopRightMenu = styled.div<{}>`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    width: 90px;
    margin: 0px 10px;
`;

const MainPageTemplate = (props:any) => {
    return (
        <MainPageWholeWrapper>
            <TopNavBar>
                <Icon url="/main_logo_white" width="120px" height="50px" />
                {/* <TopRightMenu>
                    <Icon
                        url="/signup_white" 
                        width="25px" 
                        height="35px" 
                        hover={true}
                        hoverImage="/signup_white_hover"
                        onClick={() => {
                            alert("Test Successful");
                        }}
                    />
                    <Icon
                        url="/menu_white" 
                        width="28px" 
                        height="35px" 
                        hover={true}
                        hoverImage="/menu_white_hover"
                        onClick={() => {
                            alert("Test Successful");
                        }}
                    />
                </TopRightMenu> */}
            </TopNavBar>
            <Navbar />
        </MainPageWholeWrapper>
    );
}

export default MainPageTemplate;