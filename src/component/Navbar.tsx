import styled from 'styled-components';

const NavbarWrapper = styled.div`
    position: absolute;
    right: 10px;
    top: calc(50% - 120px);
    z-index: 5;
    height: 240px;
    width: 40px;
    background-color: white;
`;

const Navbar = () => {
    return (
        <NavbarWrapper>
        hey
        </NavbarWrapper>
    );
}

export default Navbar;