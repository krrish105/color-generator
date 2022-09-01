import styled from "styled-components";

const App = styled.div`
	max-width: 1600px;
	margin: 0 auto;
`;

const ColorGrid = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, auto);
	grid-template-rows: repeat(5, auto);
	box-shadow: 0 0 10px 0px white;
	margin-bottom: 42px;
	@media (min-width: 700px) {
		grid-template-columns: repeat(3, auto);
		grid-template-rows: repeat(4, auto);
	}
	@media (min-width: 1000px) {
		grid-template-columns: repeat(4, auto);
		grid-template-rows: repeat(4, auto);
	}
	@media (min-width: 1300px) {
		grid-template-columns: repeat(7, auto);
		grid-template-rows: repeat(3, auto);
	}
`;

const ColorHeader = styled.header`
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-bottom: 30px;
	margin-top: 20px;
	color: white;
	@media (min-width: 700px) {
		flex-direction: column;
	}
	@media (min-width: 1000px) {
		justify-content: flex-start;
	}
	@media (min-width: 1100px) {
		flex-direction: row;
	}
`;

const SubmitButton = styled.button`
	padding: 7px 30px;
	border-radius: 10px;
	background-color: var(--background);
	border: 2px solid gray;
	color: white;
	box-shadow: 0 2px 3px 0px white;
	width: 100%;
	cursor: pointer;
	transform: scale(1);
	transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 3px 0px white;
	}
	@media (min-width: 450px) {
		width: fit-content;
	}
`;

const ColorTextInput = styled.input`
	padding: 7px 0 7px 15px;
	font-size: 1.2rem;
	border-radius: 10px;
	width: 100%;
	@media (min-width: 450px) {
		width: fit-content;
	}
`;

const ColorInput = styled.input`
	width: 100px;
	padding: 2px 7px;
	cursor: pointer;
	margin-left: 15px;
	@media (max-width: 386px) {
		margin-top: 15px;
	}
`;

const OrPartition = styled.span`
	word-spacing: 0.6rem;
	display: block;
	margin: 0 auto;
	width: fit-content;
	margin-bottom: 15px;
	@media (min-width: 1100px) {
		display: inline;
		margin: 0 15px 0 0;
	}
`;

export {
	App,
	ColorGrid,
	ColorHeader,
	SubmitButton,
	ColorTextInput,
	ColorInput,
	OrPartition,
};
