import React from 'react'
import styled from 'styled-components'
import { api } from './utilities'

const HeaderContainer = styled.div`
  padding: 20px;
  text-align: center;
`
const ButtonBar = styled.div`
  display: inline-block;
  float: right;
`

const Button = styled.button`
  margin: 0 auto;
  border-radius: 5px;
  background: rgb(211, 211, 211);
  width: 155px;
  height: 30px;
  color: #000000;
  font-size: 0.4em;
  font-weight: 500;
`

const Header = () => {
  const reset = async () => {
    await api(`/audit/reset`, { method: 'POST' })

    // ugly but works
    window.location.reload()
  }

  return (
    <HeaderContainer>
      <img height="60px" src="/arlo.png" alt="Arlo, by VotingWorks" />
      <ButtonBar>
        <Button onClick={reset}>Clear & Restart</Button>
      </ButtonBar>
    </HeaderContainer>
  )
}

export default Header
