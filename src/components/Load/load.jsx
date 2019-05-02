import React, { Component } from "react";
import { Loading, Container, Ball } from "../Main/Style";


class Load extends Component {
    render() { 
        return (  
            <>
            <Loading>
                <Container>
                    <Ball></Ball>
                    <Ball></Ball>
                    <Ball></Ball>
                    <Ball></Ball>
                    <Ball></Ball>
                    <Ball></Ball>
                    <Ball></Ball>
                    <Ball></Ball>
                    <Ball></Ball>
                </Container>
            </Loading> 
            </>
        );
    }
}
 
export default Load;