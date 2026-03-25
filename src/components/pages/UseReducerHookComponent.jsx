
'use client';

//Import React Library
import * as React from "react";

//import reducer
import CalcTwoNumberReducer from "@/reducers/CalcTwoNumberReducer.js";

//import Material UI Components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function UseReducerHookComponent() 
{
  
  //create state for inputs
  const [inputNumber1, setInputNumber1] = React.useState("");
  const [inputNumber2, setInputNumber2] = React.useState("");

  //create reducer for logic
  const [result, dispatch] = React.useReducer(CalcTwoNumberReducer, 0);

  function handleAddNumbers() {
    dispatch({
      type: "add",
      payload: {
        firstNumber: inputNumber1,
        secondNumber: inputNumber2,
      },
    });
  }

  function handleSubtractNumbers() {
    dispatch({
      type: "subtract",
      payload: {
        firstNumber: inputNumber1,
        secondNumber: inputNumber2,
      },
    });
  }

  function handleMultiplyNumbers() {
    dispatch({
      type: "multiply",
      payload: {
        firstNumber: inputNumber1,
        secondNumber: inputNumber2,
      },
    });
  }

  function handleDivideNumbers() {
    dispatch({
      type: "divide",
      payload: {
        firstNumber: inputNumber1,
        secondNumber: inputNumber2,
      },
    });
  }

  return (
    <>
      <h3>Use Reducer Hook Component</h3>
      <p>UseReducer Used To Split Logic Outside Component</p>
      <TextField
        type="number"
        label="Number 1"
        value={inputNumber1}
        onChange={(e) => setInputNumber1(e.target.value)}
        margin="dense"
        variant="standard"
        fullWidth
        required
      />
      <TextField
        type="number"
        label="Number 2"
        value={inputNumber2}
        onChange={(e) => setInputNumber2(e.target.value)}
        margin="dense"
        variant="standard"
        fullWidth
        required
      />
      <br />
      <br />
      Results: &nbsp;
      <span style={{ color: "red" }}>{result}</span>
      <br />
      <br />
      <Button onClick={handleAddNumbers} variant="text">
        Add
      </Button>
      <Button onClick={handleSubtractNumbers} variant="text">
        Subtract
      </Button>
      <Button onClick={handleMultiplyNumbers} variant="text">
        Multiply
      </Button>
      <Button onClick={handleDivideNumbers} variant="text">
        Divide
      </Button>
    </>
  );
}
