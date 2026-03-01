'use client';

//import redux
import { useSelector, useDispatch } from "react-redux";
import { incrementAction,decrementAction,incrementByAmountAction } from "@/redux/slices/CounterSlice";

//import Material UI Components
import Button from "@mui/material/Button";

export default function ReduxCounterComponent()
{

    //read value from redux using [useSelector]
    const counterState = useSelector((store) => store.CounterReducer.value);

    //write value to redux using [useDispatch]
    const storeDispatch = useDispatch();

    return (
        <>

        <h3>Counter Component with Redux</h3>
        Result: {counterState}

        <br/><br/>


        <Button onClick={() => storeDispatch(incrementAction())}>Increment</Button>
        <Button onClick={() => storeDispatch(decrementAction())}>Decrement</Button>
        <Button onClick={() => storeDispatch(incrementByAmountAction({numberAmount:10}))}>Increment by 10</Button>
        
        </>
    );
}