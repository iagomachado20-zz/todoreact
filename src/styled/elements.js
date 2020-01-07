import styled from "styled-components";
import { primary, containerWidth, danger } from "./variables";

const handleColorType = color => {
    switch (color) {
      case "primary":
        return primary;
      case "danger":
        return danger;
      default:
        return "#000000b8";
    }
};

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


export const InputBigger = styled.input`
    height: 70px;
    background: white;
    outline: none;
    padding: 25px;
    border-radius: 5px;
    border: 2px solid transparent;
    box-sizing: border-box;
    font-size: 30px;
    font-weight: 400;
    transition: all 0.4s ease;
    color: #616161;
    &::placeholder {
        color: #ccc;
    }
    &:focus {
        border-color: rgb(106, 106, 144);
    }
`

export const Button = styled.button`
    height: 70px;
    padding: 0 40px;
    font-size: 22px;
    background: rgb(44, 44, 99);
    color: #ffffff;
    border: 0;
    border-top-right-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    outline: none;
    margin-left: -2px;
    transition: all 0.4s ease;
    border-bottom-right-radius: 5px;
    &:hover {
        opacity: 0.9;
    }
`;

export const ContainerAddTodo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    ${InputBigger} {
        width: 100%;
    }
`;

export const List = styled.ul`
    margin: 10px;
    padding: 0;
    font-size: 20px;
`;

export const Action = styled.button`
    height: 45px;
    padding: 0 15px;
    background: black;
    color: #fff;
    font-size: 15px;
    border: 0;
    font-weight: 500;
    border-radius: 5px;
    outline: none;
    transition: all 0.4s ease;
    background: ${({ color }) => handleColorType(color)};
    &:hover {
        transform: scale(1.05);
    }
`;

export const ListItem = styled.li`

   border-bottom: 2px solid #ccc;
   padding: 10px 5px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   list-style: none;
    span {
       font-weight: bold;
    }
    ${Action} {
        margin: 0 5px;
    }
`;



export const TitleList = styled.span`
    text-decoration: ${({ decoration }) => {
        if (decoration === 'risc') {
            return 'line-through'
        }
    }};
`;