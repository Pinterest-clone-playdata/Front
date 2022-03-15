import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { loginUser } from

function Signin(props) {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
            // onSubmit={onSubmitHandler}
            >
                <label>Pinterest SignIn</label>
                <label>Email</label>
                {/* <input type="email" value={Email} onChange={onEmailHandler} /> */}
                <label>비밀번호</label>
                {/* <input type="password" value={Password} onChange={onPasswordHandler} /> */}
                <br />
                <button type="submit">
                    가입
                </button>
            </form>
        </div>
    )
}

export default Signin