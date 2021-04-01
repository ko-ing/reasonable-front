import { useState } from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

const MarginCloser = styled.div`
    
`;

const NavbarWrapper = styled.div<{
    isOpen: boolean
    logoBarHeight: string
}>`
    position: fixed;
    top: ${p => p.logoBarHeight};
    z-index: 5;

    height: calc(100vh - ${p => p.logoBarHeight});
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
    bottom: 20px;
    right: 20px;
    height: 20px;
    width: 20px;
    background-color: black;
`;

const NavEach = styled.div<{
    chosen: boolean
}>`
    border-bottom: 1px solid #cccccc;
    height: 70px;
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

const NavList: {title: string, image: string, route: string}[] = [{
    title: "Calendar",
    image: "",
    route: "/calendar"
}, {
    title: "Posts",
    image: "",
    route: "/posts"
}, {
    title: "Photos",
    image: "",
    route: "/photos"
}, {
    title: "Stats",
    image: "",
    route: "/stats"
}, {
    title: "My Info",
    image: "",
    route: "/myInfo"
}]

const Navbar = ({
    logoBarHeight
} : {
    logoBarHeight: string
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [chosen, setChosen] = useState<string>("");
    const history = useHistory();

    return (
        <>
            <OpenCloseButton 
                isOpen={isOpen}
                onClick={()=>{
                    setIsOpen(!isOpen);
                }}
            />
            {isOpen && (
                <NavbarWrapper 
                    isOpen={isOpen}
                    logoBarHeight={logoBarHeight}
                >
                    {NavList.map(n => {
                        return (
                            <NavEach
                                chosen={chosen==n.title}
                                onMouseDown={() => {setChosen(n.title)}}
                                onClick={() => {
                                    history.push(n.route);
                                    setIsOpen(false);
                                }}
                            >
                                {n.title}
                                {n.image}
                            </NavEach>
                        )
                    })}
                </NavbarWrapper>
            )}
        </>
    );
}

export default Navbar;