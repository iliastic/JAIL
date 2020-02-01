
import React from 'react';
import styled from 'styled-components'
import { Image } from 'react-native';

const GmailIcon = () => (
    <IconContainer
    >
        <Image source={require('../assets/gmailLogo.png')}></Image>
    </IconContainer>
);

const IconContainer = styled.View`
	width: 20px;
	height: 20px;
    position: absolute;
    bottom: 130px;
    left: 30px;
`;

export default GmailIcon;