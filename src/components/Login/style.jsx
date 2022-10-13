import styled from 'styled-components'

const LoginBox = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 260px;
    padding: 20px;
    background-color: rgb(108, 153, 192);
`
const InputBox = styled.div`
    margin-bottom: 25px;
    display: flex;
    flex-direction: row    
`
export { LoginBox, InputBox }
