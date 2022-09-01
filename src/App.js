import Values from "values.js";
import { useState } from "react";
import Color from "./Color";
import {
	App,
	ColorGrid,
	ColorHeader,
	SubmitButton,
	ColorTextInput,
	ColorInput,
	OrPartition,
} from "./AppStyle";

function ColorGenerator() {
	const [color, setColor] = useState("#f15025");
	const [colorList, setColorList] = useState(new Values("#f15025").all(10));
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		changeColorList();
	};

	const changeColorList = () => {
		try {
			setColorList(new Values(color).all(10));
			setError(false);
			document.querySelector("body").style.backgroundColor = `#${
				new Values(color).shade(70).hex
			}`;
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	const colorPicker = (value) => {
		console.log(value);
		setColor(value);
		changeColorList();
	};

	return (
		<App>
			<ColorHeader>
				<h1>Color Generator</h1>
				<form onSubmit={handleSubmit}>
					<ColorTextInput
						type="text"
						placeholder="#ffffff"
						value={color}
						onChange={(e) => setColor(e.target.value)}
						name="color"
					></ColorTextInput>
					<SubmitButton type="submit">Search</SubmitButton>
				</form>
				{/* Color picker if the user wants to use it */}
				<div>
					<OrPartition id="or">| OR |</OrPartition>
					<label htmlFor="color-picker">Pick a color</label>
					<ColorInput
						type="color"
						value={color}
						id="color-picker"
						onChange={(e) => colorPicker(e.target.value)}
					/>
				</div>
				{error && <span className="error">Error!</span>}
			</ColorHeader>
			<div>
				<ColorGrid>
					{colorList.map((el, i) => {
						return (
							<Color
								key={i}
								index={i}
								code={el.hex}
								type={el.type}
								weight={el.weight}
							/>
						);
					})}
				</ColorGrid>
			</div>
		</App>
	);
}

export default ColorGenerator;
