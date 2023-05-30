import {useState} from 'react'

import {
  MainContainer,
  Container,
  Content,
  SecondContainer,
  Heading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')

  const ChangeName = event => {
    setCardName(event.target.value)
  }
  const ChangeNumber = event => {
    setCardNumber(event.target.value)
  }
  return (
    <MainContainer>
      <Container>
        <Heading>CREDIT CARD</Heading>
        <SecondContainer data-testid="creditCard">
          <Content>{cardNumber}</Content>
          <Content>CARDHOLDER NAME</Content>
          <Content>{cardName}</Content>
        </SecondContainer>
      </Container>
      <Container>
        <Heading>Payment Method</Heading>
        <Input onChange={ChangeName} placeholder="Card Number" alt="text" />
        <Input onChange={ChangeName} placeholder="Cardholder Name" alt="text" />
      </Container>
    </MainContainer>
  )
}

export default CreditCard
