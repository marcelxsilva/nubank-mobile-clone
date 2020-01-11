import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code, Image, Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles';
import qrcode from '~/assets/qrcode.png';

export default function Menu() {
  return (
    <Container >
      <Code>
        <Image source={qrcode} />
      </Code>
      <Nav>
        <NavItem>
          <Icon name='help-outline' size={20} color='#fff' />
          <NavText>Me Ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name='person-outline' size={20} color='#fff' />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name='credit-card' size={20} color='#fff' />
          <NavText>Configurar Cartão</NavText>
        </NavItem>

        <NavItem>
          <Icon name='smartphone' size={20} color='#fff' />
          <NavText>Configuracoes do App</NavText>
        </NavItem>

      </Nav>
      <SignOutButton onPress={() => { }}>
        <SignOutButtonText>Sair do App</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
