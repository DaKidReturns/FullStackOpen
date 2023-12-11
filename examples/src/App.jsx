import { useState } from "react"

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick} >{text}</button>

const CounterApp = () => {
    const [counter, setCounter] = useState(0)
    console.log('rendering with counter value', counter)
    const incraseByOne = () => {
        setCounter(counter + 1)
    }
    const resetClicked = () => {
        setCounter(0)
    }
    const decraseByOne = () => {
        setCounter(counter - 1)
    }

    return <>
        <Display counter={counter} />
        <Button onClick={incraseByOne} text="plus" />
        <Button onClick={resetClicked} text="zero" />
        <Button onClick={decraseByOne} text="minus" />

    </>
}

const ComplexStateApp = () => {

    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })

    const handleLeftClicks = () => { setClicks({ ...clicks, left: clicks.left + 1 }) }
    const handleRightClicks = () => { setClicks({ ...clicks, right: clicks.right + 1 }) }
    return (
        <div>
            {clicks.left}
            <button onClick={handleLeftClicks}>left</button>
            <button onClick={handleRightClicks}>right</button>
            {clicks.right}
        </div>
    )
}

const ArrayApp = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }


    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}

            <p>{allClicks.join(' ')}</p>
        </div>
    )
}

const App = () => {
    return <>
        <CounterApp />
        <ComplexStateApp />
        <ArrayApp />
    </>
}

export default App
