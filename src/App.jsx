import { useState } from 'react';
import './App.css';
import Number from "./Number.jsx";
import HeaderButton from "./HeaderButton.jsx";
import OperatorButton from './OperatorButton.jsx';

export default function App() {
  const [value, setValue] = useState("");

  function clean() {
    setValue("");
  }

  function back() {
    if (value.length !== 0) {
      setValue(value.substring(0, value.length - 1));
    }
  }

  function putOperator(operand) {
    if (value.match("[^0-9][0-9]+$") || value.length === 0) {
      return;
    }
    setValue(value + operand);
  }

  function result() {
    let first = "";
    let operator;
    let second = "";
    for (let i = 0; i < value.length; i++) {
      const actualChar = value.charAt(i);
      if (actualChar === "%" || actualChar === "÷" || actualChar === "x" || actualChar === "-" || actualChar === "+") {
        operator = actualChar;
        continue;
      }
      if (actualChar.match("[0-9|\.]+")) {
        if (operator === undefined) {
          first += actualChar;
        } else {
          second += actualChar;
        }
      }
    }
    if (!first.match("[0-9|\.]+") || !second.match("[0-9|\.]+")) {
      alert("El format és invàlid!!");
      return;
    }
    let result;
    const parsedFirst = parseFloat(first);
    const parsedSecond = parseFloat(second);
    switch (operator) {
      case "%": result = parsedFirst % parsedSecond; break;
      case "÷": result = parsedFirst / parsedSecond; break;
      case "x": result = parsedFirst * parsedSecond; break;
      case "-": result = parsedFirst - parsedSecond; break;
      case "+": result = parsedFirst + parsedSecond; break;
    }
    setValue(`${result}`);
  }

  return (
    <>
      <div className="calculadora-box">
        <div className="text-box">
          <p>{value}</p>
        </div>
        <HeaderButton task={clean} char={"C"} />
        <HeaderButton task={back} char={"←"} />
        <HeaderButton task={putOperator} optParam={"%"} char={"%"} />
        <OperatorButton task={putOperator} operator={"÷"}/>
        <Number updateFunction={setValue} value={value} number="7" />
        <Number updateFunction={setValue} value={value} number="8" />
        <Number updateFunction={setValue} value={value} number="9" />
        <OperatorButton task={putOperator} operator={"x"}/>
        <Number updateFunction={setValue} value={value} number="4" />
        <Number updateFunction={setValue} value={value} number="5" />
        <Number updateFunction={setValue} value={value} number="6" />
        <OperatorButton task={putOperator} operator={"-"}/>
        <Number updateFunction={setValue} value={value} number="1" />
        <Number updateFunction={setValue} value={value} number="2" />
        <Number updateFunction={setValue} value={value} number="3" />
        <OperatorButton task={putOperator} operator={"+"}/>
        <Number updateFunction={setValue} value={value} number="0" />
        <Number updateFunction={setValue} value={value} number="." />
        <OperatorButton task={result} operator={"="}/>
      </div>
    </>
  )
}