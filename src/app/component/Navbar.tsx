import { useState } from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { signOff } from '../util/api/user';

const NavMargin = styled.div<{
    logoBarHeight: string
}>`
    position: fixed;
    top: 0px;
    left: 60vw;
    z-index: 3;
    height: 100vh;
    width: 40vw;

    background: rgb(200,200,200,0.2);
`;

const NavbarWrapper = styled.div<{
    isOpen: boolean
    logoBarHeight: string
}>`
    position: fixed;
    top: 0px;
    z-index: 5;
    height: 100vh;
    width: 60vw;
    background: white;
    // border: 2px solid #dddddd;
    border-top:  1px solid #cccccc;
    border-right:  1px solid #cccccc;
    // border-radius: 20px 0px 0px 20px;
`;

const OpenCloseButton = styled.div<{
    isOpen: boolean
}>`
    position: fixed;
    z-index: 5;
    bottom: 20px;
    right: 20px;
    height: 20px;
    width: 20px;
    background-color: black;
`;

const NavEach = styled.div<{
    chosen: boolean
}>`
    // border-bottom: 1px solid #cccccc;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${p => p.chosen && "#e0f3ff"}
    /* & :hover {
        background-color: #e0f3ff;
    } */
`;

const NavTitle = styled.div`

`;

const SignOff = styled.div`

`;

const NavList: {title: string, image: string, route: string}[] = [{
    title: "캘린더",
    image: "",
    route: "/calendar"
}, {
    title: "게시글",
    image: "",
    route: "/posts"
}, {
    title: "사진",
    image: "",
    route: "/photos"
}, {
    title: "통계",
    image: "",
    route: "/stats"
}, {
    title: "내 정보",
    image: "",
    route: "/myInfo"
}]

const Navbar = ({
    logoBarHeight
} : {
    logoBarHeight: string
}) => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [chosen, setChosen] = useState<string>(history.location.pathname);

    return (
        <>
            <OpenCloseButton 
                isOpen={isOpen}
                onClick={()=>{
                    setIsOpen(!isOpen);
                }}
            />
            {isOpen && (
                <>
                    <NavbarWrapper 
                        isOpen={isOpen}
                        logoBarHeight={logoBarHeight}
                    >
                        {NavList.map(n => {
                            return (
                                <NavEach
                                    chosen={chosen==n.route}
                                    onClick={() => {
                                        setChosen(n.route)
                                        setIsOpen(false);
                                        history.push(n.route);
                                    }}
                                >
                                    {n.title}
                                    {n.image}
                                </NavEach>
                            )
                        })}
                    <SignOff
                        onClick={() => {
                            signOff();
                        }}
                    >
                        로그아웃
                    </SignOff>
                    </NavbarWrapper>
                    <NavMargin
                        logoBarHeight={logoBarHeight}
                        onClick={() => {
                            setIsOpen(false);
                        }}    
                    />
                </>
            )}
        </>
    );
}

export default Navbar;