import {React, useState} from 'react'

const ClickyTwo = () => {

	let [clicked, setClicked] = useState(0)

	const handleClick = () => {
		console.log('clicked')
		setClicked(clicked + 1)
	}

	return (
		<div>
			<h1>Button has been pressed {clicked} times</h1>
			<button onClick={handleClick}>Click me</button>
		</div>
	)

}

export default ClickyTwo