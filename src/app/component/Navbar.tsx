import { useState } from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { signOff } from '../util/api/user';

const NavbarWrapper = styled.div<{
    isOpen: boolean
    logoBarHeight: string
}>`
    height: 40px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    overflow: auto;
    background: white;
`;


const NavEach = styled.div<{
    chosen: boolean
}>`
    height: 40px;
    min-width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${p => p.chosen && "#e0f3ff"};
    margin-left: 10px;
    font-size: 14px;
    border-radius: 5px;
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
                    {/* <SignOff
                        onClick={() => {
                            signOff();
                        }}
                    >
                        로그아웃
                    </SignOff> */}
                    </NavbarWrapper>
                </>

        </>
    );
}

export default Navbar;