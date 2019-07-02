import styled from "styled-components";
import { primary, containerWidth } from "./variables";

export const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    color: black;
    height: 45px;
    padding: 0 15%;
    color:black;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    line-height: 45px;
    text-align: center;
    background: ${primary};
`;

export const Container = styled.div`
    max-width: ${containerWidth + 'px'};
    position: relative;
    margin: 0 auto;
`;