import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};


export const CounterSlice = createSlice(
{
  name: "CounterSlice",
  initialState:initialState,
  reducers: 
  {
    incrementAction: (state,action) => 
    {
        console.log(state,action);
        
      state.value += 1
    },
    decrementAction: (state,action) => 
    {
        console.log(state,action);

      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmountAction: (state, action) => 
    {
        console.log(state,action);

        const {numberAmount} = action.payload;

        state.value += numberAmount;
    },
  },
});

export const { incrementAction, decrementAction, incrementByAmountAction} = CounterSlice.actions;

export default CounterSlice.reducer;

