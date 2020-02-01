import React from 'react';
import styled from 'styled-components';

const SocialButton = props => (

	<ButtonContainer
		onPress={props.onPress}
		backgroundColor={props.backgroundColor}
		border={props.border}
	>
		<ButtonText textColor={props.textColor}>{props.text}</ButtonText>
	</ButtonContainer>

);

const ButtonContainer = styled.TouchableOpacity`
	width: 340px;
	height: 61px;
	padding: 10px;
	margin-bottom: 24px;
	border-radius: 46px;
	border: ${props => props.border};
	box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
	background-color: ${props => props.backgroundColor};
`;

const ButtonText = styled.Text`
	font-size: 22px;
	color: ${props => props.textColor};
	text-align: center;
	line-height: 35px
`;

export default SocialButton;