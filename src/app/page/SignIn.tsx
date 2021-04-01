import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled, {css} from 'styled-components/macro';
import { signIn, signUp, test } from '../util/api/user';
import { setAccountIdOnCookie, setUserAuthOnCookie, getUserAuthFromCookie} from '../util/cookie'



const SignUpWholeWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fcfcfc;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
`;

const LogoWrapper = styled.div`
    width: 100vw;
    height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.div`
    width: 80vw;
    height: 80vw;
    border-radius: 0 0 0 90vw;
    background-color: #19118f;
    position: absolute;
    right: 0px;
    top: 0px;
`;

const Logo2 = styled.div`
    width: 15vw;
    height: 30vw;
    border-radius: 0 15vw 15vw 0;
    background-color: #7d93dd;
    position: absolute;
    left: 0px;
    top: 60vw;
`;

const Title = styled.div`
    font-size: 35px;
    color: #1a65bb;
    /* mix-blend-mode: difference; */
`;

const LowerHalfWrapper = styled.div<{
    isSignInMode: boolean,
}>`
    height: ${p => p.isSignInMode ? "250px" : "90vh"};
    width: 100vw;
    /* position: fixed; */
    /* bottom: 0px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    ${p => !p.isSignInMode ? css`
        padding-top: 10vh;
    ` : `
        margin-bottom: 5vh;
    `}
`;

const Input = styled.input.attrs({
    required: true
})`
    /* background-color: #ffe4ec; */
    border: 1px solid #cccccc;
    border-radius: 5px;
    width: calc(80vw - 10px);
    height: 38px;
    text-align: left;
    padding: 0px 10px;
    margin-bottom: 10px;
    &:focus {
        outline: none;
        border: 1px solid;
    }
`;

const SubmitWrapper = styled.div`
    height: 40px;
    padding: 0px calc(10vw - 5px);
    width: 100vw;
    display: flex;
    justify-content: space-between;
`;

const Submit = styled.div<{
    left?: boolean,
    right?: boolean,
    selected: boolean,
}>`
    border: none;
    font-weight: 600;
    ${p => p.right && css`
        border-radius: 0px 5px 5px 0px;    
        width: 25vw;
    `}
    ${p => p.left && css`
        border-radius: 5px 0px 0px 5px;
        width: calc(55vw - 10px);
    `}
    ${p => p.selected 
        ? css`
            border: 2px solid #1a65bb;
            color: #1a65bb;
        ` 
        : css`
            background-color: #1a65bb;
            border: 2px solid #1a65bb;
            color: #f5eaec;
        `
    }

    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FindWrapper = styled.div`
    text-align: right;
    font-size: 13px;
    width: 100vw;
    padding: 0px 10vw;
`;

const SignIn = () => {
    const [mode, setMode] =  useState<"signIn" | "signUp">("signIn");
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    let history = useHistory();

    const isSignInMode = () => {
        return mode == "signIn";
    }

    const isSignUpMode = () => {
        return mode == "signUp";
    }

    const invokeSignIn = async () => {
        // TODO: validate and decrpyt pwd
        const data = {userAccountId: id, password};
        signIn(data)
            .then(res => {
                setAccountIdOnCookie(res.data.userAccountId);
                setUserAuthOnCookie(res.data.authorities);
                history.push("/calendar");
            })
            .catch(error => {
                //TODO: 로그인 실패시
            })
    }

    const invokeSignUp = async () => {
        // TODO: validate pwd with confirmpwd and decrpyt
        const data = {userAccountId: id, userName: name, password, email}
        const res = await signUp(data);
        console.log("res", res);
    }
    
    const checkPassword = () => {

    }

    const checkUserIdDuplicate =  () => {
        
    }

    return(
        <SignUpWholeWrapper>
            {isSignInMode() && (
                <LogoWrapper>
                {/* <Logo /> */}
                {/* <Logo2 /> */}
                <Title>Reasonable</Title>
                </LogoWrapper>
            )}
            <LowerHalfWrapper
                isSignInMode={isSignInMode()}
            >
                {isSignInMode() && (
                    <>
                        <Input
                            placeholder="ID"
                            onChange={e => {
                                setId(e.target.value);
                            }}
                        />
                        <Input
                            placeholder="Password" 
                            type="password"
                            onChange={e  => {
                                setPassword(e.target.value);
                            }}
                        />
                    </>)
                }
                {isSignUpMode() && (
                    <>
                        <Input
                            placeholder="ID"
                            onChange={e => {
                                setId(e.target.value);
                            }}
                        />
                        <Input
                            placeholder="Password" 
                            type="password"
                            onChange={e  => {
                                setPassword(e.target.value);
                            }}
                        />
                        <Input
                            placeholder="Confirm Password" 
                            type="password"
                            onChange={e  => {
                                setConfirmPassword(e.target.value);
                            }}
                        />  
                        <Input
                            placeholder="Name" 
                            onChange={e  => {
                                setName(e.target.value);
                            }}
                        />  
                        <Input
                            placeholder="email" 
                            onChange={e  => {
                                setEmail(e.target.value);
                            }}
                        />  
                    </>
                )}
                <SubmitWrapper>
                    <Submit 
                        selected={false} 
                        left
                        onClick={() => {
                            if (isSignUpMode()) {
                                invokeSignUp();
                            } else {
                                const confirm = window.confirm("회원가입 페이지로 이동하시겠습니까?");
                                if (confirm) {
                                    setMode("signUp");
                                }
                            }
                            
                        }}
                    >
                        Sign Up
                    </Submit>
                    <Submit
                        selected
                        right
                        onClick={() => {
                            if (isSignInMode()) {
                                invokeSignIn();
                            } else {
                                const confirm = window.confirm("로그인 페이지로 이동하시겠습니까?");
                                if (confirm) {
                                    setMode("signIn");
                                }
                            }
                        }}
                    >
                        Sign In
                    </Submit>
                </SubmitWrapper>
                {isSignInMode() && <FindWrapper>lost password? click <b onClick={()=>{alert("pop up for finding pwd")}}><u>here</u></b> to find!</FindWrapper>}
            </LowerHalfWrapper>
            
        </SignUpWholeWrapper>
    )
}

export default SignIn;