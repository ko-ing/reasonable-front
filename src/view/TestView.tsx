import React from 'react';
import { post } from "../api/http";

const TestView = () => {
    return (
        <>
            <button onClick={async () => {
                const a = await post("/hello-calendar")
                alert(a);
                console.log(a);
            }}>
                Hello Worlda!
            </button>
        </>
    )
}