import React from "react";
import { Link } from "react-router-dom";

export default class Test extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <h1>Test 페이지 입니다</h1>
                <Link to="/Home">Home로 이동</Link>
                <br></br>
                <Link to="/About">About로 이동</Link>
            </>
        );
    }
}
