import styled from 'styled-components';

const LogobarWrapper = styled.div<{
    logoBarHeight: string
}>`
    position: fixed;
    top: 0;
    z-index: 5;
    background-color: white;
    height: ${p => p.logoBarHeight};
    width: 100%;
    border-bottom: 1px solid #cccccc;
`;

const Buffer = styled.div<{
    logoBarHeight: string
}>`
    height: ${p => p.logoBarHeight};
    width: 100%;
`;

const Logobar = ({
    logoBarHeight
} : {
    logoBarHeight: string
}) => {
    return (
        <>
            <LogobarWrapper logoBarHeight={logoBarHeight} /> 
            <Buffer logoBarHeight={logoBarHeight} />
        </>
    );
}

export default Logobar;