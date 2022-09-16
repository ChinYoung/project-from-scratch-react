import styled from 'styled-components'

const Button = styled.button`
    width: 90px;
    height: 40px;
    border-radius: 4px;
    padding: 12px 23px;
    color: #bac7e5;
    background-color: papayawhip;
    border-color: papayawhip;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #bac7e5;
    text-align: center;
    box-sizing: border-box;
    margin-left: auto;
    margin-top: 10px;
    margin-right: 10px;
    font-size: 14px;
    :hover {
        border-color: #646cff;
        color: #646cff;
    }
`

const Input = styled.input`
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    width: calc(86% - 10px);
`
const Label = styled.label`
    color: #bac7e5;
    text-align: right;
    width: 14%;
    height: 40px;
    line-height: 40px;
`
export {
  Button, Input, Label
}
