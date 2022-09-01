import ColorElement from "./ColorStyle";

const Color = ({ index, code, type, weight }) => {
	const copyEvent = () => {
		navigator.clipboard.writeText(`#${code}`);
		const copyText = document.querySelectorAll(".copied-text");
		copyText[index].innerHTML = "Copied!";
		setTimeout(() => {
			copyText[index].innerHTML = "";
		}, 3000);
	};

	return (
		<ColorElement color={code} num={index} onClick={copyEvent}>
			<div>
				<span>#{code}</span>
				<span>{weight}%</span>
				<span>{type}</span>
				<span className="copied-text"></span>
			</div>
		</ColorElement>
	);
};
export default Color;
