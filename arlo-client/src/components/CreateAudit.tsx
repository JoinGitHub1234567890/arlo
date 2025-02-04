import React, { useState } from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router-dom'
import FormButton from './Form/FormButton'
import { api } from './utilities'
import { ICreateAuditParams } from '../types'

const Button = styled(FormButton)`
  margin: 65px 0;
`

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  @media (min-width: 500px) {
    width: 400px;
  }
`

const CreateAudit = ({ history }: RouteComponentProps<ICreateAuditParams>) => {
  const [loading, setLoading] = useState(false)
  const onClick = async () => {
    setLoading(true)
    const { electionId } = await api('/election/new', {
      method: 'POST',
    })
    history.push(`/election/${electionId}`)
  }
  return (
    <Wrapper>
      <img height="50px" src="/arlo.png" alt="Arlo, by VotingWorks" />
      <Button
        type="button"
        intent="primary"
        fill
        large
        onClick={onClick}
        loading={loading}
        disabled={loading}
      >
        Create a New Audit
      </Button>
    </Wrapper>
  )
}

export default CreateAudit
