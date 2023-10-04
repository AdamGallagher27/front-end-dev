import { React, useState } from 'react'

const ClickyTwo = () => {

	let [clicked, setClicked] = useState(0)

	return (
		<div>
			<h1>Button has been pressed {clicked} times</h1>
			<button onClick={() => setClicked(clicked + 1)}>Plus</button>
			<button onClick={() => setClicked(clicked - 1)}>Minus</button>
		</div>
	)

}

export default ClickyTwo