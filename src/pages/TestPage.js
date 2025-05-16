import React, {useEffect, useState} from "react";

/**
 * 테스트 페이지
 */
const TestPage = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const apiUrl = process.env.BACKEND_URL + `/test`;

        fetch(apiUrl)
            .then(res => res.text())
            .then(message => setMessage(message))
            .catch(err => console.error)
    }, []);

    console.log("message: ", message);

    return (
        <div>
            <h1>테스트 페이지</h1>
            <p>백엔드 응답 테스트 문구: {message}</p>
        </div>
    );
}

export default TestPage;