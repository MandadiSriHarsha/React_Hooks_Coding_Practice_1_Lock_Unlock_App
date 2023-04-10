import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LockImage = styled.img`
  width: 70%;
  max-width: 200px;
  margin: 0px 0px 0px 0px;
`

export const Text = styled.p`
  font-size: 22px;
  font-weight: 400;
  padding: 15px 10px 10px 10px;
  margin: 0px 0px 0px 0px;
  color: #ffffff;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const Button = styled.button`
  border: 0px solid;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  margin: 50px 10px 10px 10px;
  padding: 12px 15px 12px 15px;
  color: #ffffff;
  font-weight: 500;
  background-color: #06b6d4;
  font-size: 20px;
  width: 130px;
`
