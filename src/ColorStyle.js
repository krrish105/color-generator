import styled from "styled-components";

const ColorElement = styled.li`
	list-style: none;
	padding: 50px;
	width: 100%;
	height: 220px;
	position: relative;
	cursor: pointer;
	transform: scale(1);
	transition: transform 0.3s ease-in-out;
	background-color: ${(props) => "#" + props.color};
	&:hover {
		transform: scale(1.06);
	}
	span {
		font-size: 1.1rem;
		color: black;
		filter: ${(props) => (props.num > 10 ? "contrast(10%)" : "contrast(68%)")};
		&:first-of-type {
			text-transform: none;
		}
	}
	div {
		position: absolute;
		top: 25px;
		left: 25px;
		display: flex;
		flex-direction: column;
		gap: 7px;
		text-transform: capitalize;
	}
`;

export default ColorElement;
