import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(""); // Estado para mostrar lo que el usuario escribe

  const handleClick = (value) => {
    setInput(input + value); // Se añade el valor presionado al input
  };

  const handleClear = () => {
    setInput(""); // Limpiar la pantalla
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // Evaluar la expresión matemática
    } catch (error) {
      setInput("Error"); // En caso de error (ejemplo: operación no válida)
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default App;
