import styled from "styled-components";

const StyledButton = styled.a`
	max-width: 100%;
	box-shadow: 0 0 5px 1px ${props=>props.theme.colors.additionalText};
	margin: 20px 45px 0px 0px;
	font-weight: 700;
	text-align: center;
	padding: 10px 0px 10px 0px;
	display: block;
	font-size: ${props=>props.theme.sizes.fonts.contactsAdditional};
	&:hover{
		transition: all 0.4s ease 0s;
		transform: translate3d(0px,-2px,-2px);
		box-shadow: 0 3px 10px 0px ${props=>props.theme.colors.additionalText};
	}
`

const ContactButton = ({ children, link }) => {
	return(
		<StyledButton href={link}>{children}</StyledButton>
	);
}

export default ContactButton