import styled from 'styled-components/macro';
import { signOff, signUp } from '../../util/api/user';
import { deleteAccountIdFromCookie, deleteUserAuthFromCookie } from '../../util/cookie';

const LogobarWrapper = styled.div<{
    logoBarHeight: string
}>`
    position: relative;
    background-color: white;
    height: ${p => p.logoBarHeight};
    width: 100vw;
    border-bottom: 1px solid #cccccc;
    display: flex;
    justify-content: center;
`;

const Logout = styled.div`
    position: absolute;
    right: 15px;
    top: 12px;
    width: 20px;
    height: 20px;
    background: url("signoff.svg");
    &:hover {
        cursor: pointer;
    }
`;

const invokeSignOff = () => {
    signOff();
    deleteAccountIdFromCookie();
    deleteUserAuthFromCookie();
}

const Logo = styled.div`
    font-family: "GreatVibes";
    font-size: 30px;
    display: flex;
    align-items: flex-end;
    padding-top: 10px;
`;

const Logobar = ({
    logoBarHeight
} : {
    logoBarHeight: string
}) => {
    return (
        <>
            <LogobarWrapper logoBarHeight={logoBarHeight}>
                <Logo>Reasonable</Logo>
                <Logout
                    onClick={() => {
                        invokeSignOff();
                        window.location.reload();
                        //fixme 서버에서 세션 지우고 쿠키 지우라고 해야할 듯
                    }}
                />
            </LogobarWrapper>
        </>
    );
}

export default Logobar;