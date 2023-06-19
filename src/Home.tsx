import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <h1>Home 페이지 입니다</h1>

                <Link to="/About">About로 이동</Link>
                <br></br>
                <Link to="/Test">Test로 이동</Link>
            </>
        );
    }
}
