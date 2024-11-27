import React, {useEffect, useState} from "react";
import config from "../config/config";

/**
 * 테스트 페이지
 */
const TestPage = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const baseUrl = config.baseURL;
        const apiUrl = baseUrl + `api/test`;

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