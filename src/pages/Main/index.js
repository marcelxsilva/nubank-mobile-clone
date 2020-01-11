import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from "~/components/Header";
import Tabs from '~/components/Tabs';

import { Container, Content, Card, CardHeader, Description, CardContent, Title, CardFooter, Annotation } from "./styles";

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name='attach-money' size={28} color='#333' />
            <Icon name='visibility-off' size={28} color='#333' />
          </CardHeader>
          <CardContent>
            <Title>Saldo Disponível</Title>
            <Description> R$ 272.385,09</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Tranferencia de R$ 629.00 recebida de Marcelo Silva hoje ás 11:57h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  )
}
