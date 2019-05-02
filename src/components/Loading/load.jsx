import React, { Component } from "./node_modules/react";
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