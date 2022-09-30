import styled from 'styled-components'

const Button = styled.button`
    width: ${(props) => (props.id === 'delBtn' ? '60px' : '90px')};
    height: ${(props) => (props.id === 'delBtn' ? '30px' : '40px')};
    border-radius: 4px;
    padding: ${(props) => (props.id === 'delBtn' ? '0' : '12px 23px')};
    color: #bac7e5;
    background-color: papayawhip;
    border-color: papayawhip;
    display: inline-block;
    line-height: ${(props) => (props.id === 'delBtn' ? '7px' : '1px')};
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #bac7e5;
    text-align: center;
    box-sizing: border-box;
    margin-left: ${(props) => (props.id === 'searchBtn' ? '20px' : 'auto')};
    margin-top: ${(props) => (props.id === 'delBtn' ? '0' : '10px')};
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
    width: ${(props) => (props.id === 'searchInput' ? '300px' : 'calc(86% - 10px)')};
`
const Label = styled.label`
    color: #bac7e5;
    text-align: right;
    margin-top: 10px;
    width: 14%;
    height: 40px;
    line-height: 40px;
`
const Div = styled.div`
    position: ${(props) => (props.id === 'loginBox' ? 'absolute' : '')};
    width: ${(props) => (props.id === 'loginBox' ? '500px' : '100%')};
    height: ${(props) => {
    if (props.id === 'loginBox') return '260px'
    if (props.id === 'ComContainer' || props.id === 'table') return '100%'
    return '60px'
  }};
    padding: ${(props) => (props.id === 'loginBox' ? '20px' : '')};
    display: ${(props) => (props.id === 'table' ? '' : 'flex')};
    background-color: ${(props) => (
    (props.id === 'box' || props.id === 'ComContainer' || props.id === 'table') ? '' : 'rgb(108, 153, 192)'
  )};
    margin: ${(props) => {
    if (props.id === 'box') return 'auto auto 30px auto'
    if (props.id === 'loginBox') return 'auto'
    if (props.id === 'inputBox') return 'auto auto 25px auto'
    return 'auto auto 20px auto'
  }};
    white-space: nowrap;
    top: ${(props) => (props.id === 'loginBox' ? '0' : '')};
    left: ${(props) => (props.id === 'loginBox' ? '0' : '')};
    right: ${(props) => (props.id === 'loginBox' ? '0' : '')};
    bottom: ${(props) => (props.id === 'loginBox' ? '0' : '')};
    flex-direction: ${(props) => {
    if (props.id === 'loginBox') return 'column'
    if (props.id === 'inputBox') return 'row'
    return ''
  }};
`
export {
  Button, Input, Label, Div
}
