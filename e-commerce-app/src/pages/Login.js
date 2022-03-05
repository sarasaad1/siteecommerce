import React from 'react'
import styled from 'styled-components'
import mobile from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-color: #F0F0F0;
    display: flex;
    align-items: center;
    justify-content: center;    
`
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "70%"})}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #101010	;
  color: white;
  cursor: pointer;
  font-weight: 600;  
  ${mobile({ width: "30%"})}

  &:hover{
    background-color: #D0D0D0;
    }
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
  ${mobile({ fontSize: "10px"})}
`

export default function Login() {
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input placeholder="username" />
        <Input placeholder="password" />
        <Button>LOGIN</Button>
        <Link>DO NOT YOU REMEMBER THE PASSWORD ?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}
