import React from 'react'

// import './App.css'

// function App() {
//   let [counter, setCounter] = useState(15)
//   const addValue = () => {
//     setCounter(counter + 1);

//   }

//   const removeValue = () => {
//     setCounter(counter - 1)
//   }
//   return (
//     <>
//       <h1>Code and React</h1>
//       <h2>Counter value: {counter}</h2>

//       <button onClick={addValue}>Add value
//         {counter}</button>
//       <br />
//       <button onClick={removeValue}>remove value{counter}</button>
//       <p>footer:
//         {counter}
//       </p>
//     </>
//   )
// }

// export default App



// function App() {

//   const [count, setCount]=useState(1);

//   const handlePlus =()=>{
//     setCount(count + 1 );
//   }

//    const handleMinus =()=>{
//     setCount(count - 1 );
//   }

//   const handleReset =()=>{
//      setCount(0)
//   }

//   return(
//     <div>
//       <p>This counter Website</p>
//       <div>
//          <button onClick={handlePlus}>+</button>
//          <p>The counter Value is: {count} </p>
//          <button onClick={handleMinus}>-</button>
//          <button onClick={handleReset}>Reset</button>
//       </div>
//     </div>
//   )
// }

export const App = () =>{
  return React.createElement("h1", null, "Hi, This is Khushi Singh")
}


{/* <h1>Hi, This is Khushi Singh</h1> */}



export default App;