import React from "react";
import { Link } from "react-router-dom";

export default class About extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <h1>About 페이지 입니다</h1>
                {/* <h1>{`RootStore 값 ${}`}</h1> */}
                <Link to="/Home">Home로 이동</Link>
                <br></br>
                <Link to="/Test">Test로 이동</Link>
            </>
        );
    }
}
