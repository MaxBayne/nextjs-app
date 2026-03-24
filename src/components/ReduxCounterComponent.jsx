'use client';

import { useSelector, useDispatch } from "react-redux";
import { incrementAction, decrementAction, incrementByAmountAction } from "@/redux/slices/CounterSlice";

export default function ReduxCounterComponent() {

  const counterState = useSelector((store) => store.CounterReducer.value);
  const storeDispatch = useDispatch();

  return (
    <>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Counter Component with Redux
      </h3>

      <p className="mt-1 text-gray-700 dark:text-gray-300">
        Result: <span className="font-bold">{counterState}</span>
      </p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => storeDispatch(incrementAction())}
          className="px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md transition-colors"
        >
          Increment
        </button>
        <button
          onClick={() => storeDispatch(decrementAction())}
          className="px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md transition-colors"
        >
          Decrement
        </button>
        <button
          onClick={() => storeDispatch(incrementByAmountAction({ numberAmount: 10 }))}
          className="px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md transition-colors"
        >
          Increment by 10
        </button>
      </div>
    </>
  );
}