import React, { useState } from 'react'
import firebase from '../../firebase.js'

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const LoginFunc = async (e) => {
        e.preventDefault();

        if (!(email && password)) {
            return alert("이메일 또는 비밀번호를 채워주세요!");
        }
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            alert("로그인을 했습니다.");
        } catch (err) {
            console.log(err);
            setErrorMsg("이메일과 비밀번호를 다시 한번 확인해주세요!");
        }
    }
    return (
        <div className='login__wrap'>
            <div className="login__header">
                <h2>Login</h2>
                <p>로그인</p>
            </div>
            <form className="login__form">
                <fieldset>
                    <legend className="blind">로그인 영역</legend>
                    <div>
                        <label htmlFor="yourEmail" className="required blind">이메일</label>
                        <input
                            type="email"
                            id="yourEmail"
                            name="yourEmail"
                            placeholder="이메일"
                            className="input__style"
                            autoComplete='off'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="yourPass" className="required blind">비밀번호</label>
                        <input
                            type="password"
                            id="yourPass"
                            name="yourPass"
                            placeholder="비밀번호"
                            className="input__style"
                            autoComplete="off"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                    </div>
                    <div>
                        {errorMsg !== "" && <p>{errorMsg}</p>}
                    </div>
                    <button type="submit" onClick={(e) => LoginFunc(e)} className="btn__style2 mt30">로그인</button>
                </fieldset>
            </form>
        </div>
    )
}

export default UserLogin