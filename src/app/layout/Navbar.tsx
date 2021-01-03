import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../component/Button';
import Modal from '../component/Modal';

const NavbarWholeWrapper = styled.div`
  height: 40vh;
  width: 52px;
  /* background-color: #282c34; */
  position: absolute;
  top: 30vh;
  right: 0px;
  border-top: 0.2px solid azure;
  border-bottom: 0.2px solid azure;
`;

const NavbarIcon = styled.div`
  
`;

const SignIn = styled(Button)`
    position: absolute;
    top: calc(30vh - 30px);
    right: 0px;
`;

const ModalClose = styled(Button)`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

const icons: iconInterface[] = [{
    src: ""
}, {
    src: ""
}]

interface iconInterface {
    src: string,
}

const Navbar = (props:any) => {
    const [isModalOpen, setModalOpen] = useState(false)

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            
            <SignIn
                height="20px"
                width="50px"
                backgroundColor="#282c34"
                fontColor="azure"
                fontSize="13px"
                borderRadius="1px"
                border="1px solid white"
                hover={true}
                hoverBackgroundColor="black"
                hoverWidth="100px"
                hoverTransform="translate(0%, -20%)"
                hoverTransition="0.4s ease-out"
                onClick={openModal}
            >
                Sign In
            </SignIn>
            <NavbarWholeWrapper>

            </NavbarWholeWrapper>
            <Modal
                isOpen={isModalOpen}
            >
                <ModalClose
                    height="20px"
                    width="20px"
                    // borderRadius="5px"
                    // border="1px solid gray"
                    fontColor="black"
                    fontSize="20px"
                    hover
                    onClick={closeModal}
                > x </ModalClose>
                
            </Modal>
            
        </>
    );
}

export default Navbar;