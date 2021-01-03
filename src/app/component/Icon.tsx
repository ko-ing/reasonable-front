import styled, { css } from 'styled-components';

const Icon = styled.div<{
    url: string, 
    width: string, 
    height: string, 
    padding?: string,
    margin?: string,
    hover?: boolean,
    hoverImage?: string,
}>`
    background-image: url(${p => p.url + ".svg"} );
    background-repeat: no-repeat;
    background-position: center;
    width: ${p => p.width};
    height: ${p => p.height};
    padding: ${p => p.padding};
    margin: ${p => p.margin};
    ${p => p.hover && css`
        &:hover {
            background-image: url(${p.hoverImage + ".svg"});
            cursor: pointer;
        }    
    `}
`;

export default Icon;