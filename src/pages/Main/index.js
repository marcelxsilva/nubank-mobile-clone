import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from "react-native";
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from "~/components/Header";
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import { Container, Content, Card, CardHeader, Description, CardContent, Title, CardFooter, Annotation } from "./styles";

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event([
    {
      nativeEvent: {
        translationY: translateY,
      }
    }
  ],
    { useNativeDriver: true }
  )

  function onHandlerStatedChanged(event) {

  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStatedChanged}>
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-200, 0, 420],
                outputRange: [-20, 0, 420],
                extrapolate: 'clamp'
              }),
            }]
          }}>
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
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  )
}
