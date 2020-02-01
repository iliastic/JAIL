
import React from 'react';
import styled from 'styled-components'
import { Image } from 'react-native';

const FacebookIcon = () => (
    <IconContainer
    >
        <Image source={require('../assets/facebooklogo.png')}></Image>
    </IconContainer>
);

const IconContainer = styled.View`
	width: 20px;
	height: 20px;
    position: absolute;
    bottom: 47px;
    left: 30px;
`;

export default FacebookIcon;