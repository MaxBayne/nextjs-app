export default function CalcTwoNumberReducer(currentResultState,action)
{
    //action type
    const {type,payload} = action || {}; 

    //action params
    const firstNumber = Number(payload?.firstNumber ?? 0);
    const secondNumber = Number(payload?.secondNumber ?? 0);

    switch (type) {
    case "add":
      return firstNumber + secondNumber;

    case "subtract":
      return firstNumber - secondNumber;

    case "multiply":
      return firstNumber * secondNumber;

    case "divide":
      return secondNumber === 0 ? 0 : firstNumber / secondNumber;

    default:
      return currentResultState; // ✅ REQUIRED
  }
}