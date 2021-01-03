import styled, {css} from 'styled-components';

const Button = styled.div<{
    height: string;
    width: string;
    backgroundColor?: string;
    fontColor?: string;
    fontSize?: string;
    borderRadius?: string;
    border?: string;
    hover?: boolean;
    hoverBackgroundColor?: string;
    hoverWidth?: string;
    hoverTransform?: string;
    hoverTransition?: string;
}>`
    height: ${p => p.height};
    width: ${p => p.width};
    background-color: ${p => p.backgroundColor};
    color: ${p => p.fontColor || "10px"};
    font-size: ${p => p.fontSize};
    border-radius: ${p => p.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${p => p.border};
    ${p => p.hover && css`
        &:hover {
            cursor: pointer;
            background-color: ${p.hoverBackgroundColor || p.backgroundColor}
            transform: ${p.hoverTransform};
            transition: ${p.hoverTransition};
        }    
    `}
`;

export default Button;