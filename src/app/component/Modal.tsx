import styled, {css} from 'styled-components';

const Modal = styled.div<{
    isOpen: boolean;
    width?: string;
    height?: string;
}>`
    position: absolute;
    top: 200px;
    // right: 0px;
    width: ${p => p.width || "200px"};
    height: ${p => p.height || "600px"};
    border-radius: 2px;
    border: 1px solid azure;
    background-color: azure;
    // z-index: -5;
    // opacity: 0;
    ${p => p.isOpen && css`
        z-index: 5;
        opacity: 90%;
        right: 80px;
        transition: opacity 1.5s, right 1s;
    `}
    ${p => p.isOpen == false && css`
        z-index: -5;
        opacity: 0;
        right: 0px;
        transition: opacity 1.5s, right 1s;
    `}
`;

export default Modal;