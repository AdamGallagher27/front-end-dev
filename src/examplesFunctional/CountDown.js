
import {useState, useEffect} from 'react'

const CountDown = (props) => {

  const [count, setCount] = useState(props.startTime)


  useEffect(() => {
    let countID = setTimeout(() => {
      	setCount(count - 1)
    }, 1000)

    return () => clearTimeout(countID)

  }, [count])

  if(count > 0 ){
    return <h2>time remaining : {count}</h2>  
  }
  else {
    return <h2>Time up! </h2>
  }

  
}

export default CountDown