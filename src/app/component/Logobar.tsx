import styled from 'styled-components/macro';

const LogobarWrapper = styled.div<{
    logoBarHeight: string
}>`
    background-color: white;
    height: ${p => p.logoBarHeight};
    width: 100vw;
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
            {/* <Buffer logoBarHeight={logoBarHeight} /> */}
        </>
    );
}

export default Logobar;