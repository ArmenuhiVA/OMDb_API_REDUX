import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from '../state/counterSlice';





const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);
    return (
        <>
            <button onClick={() => dispatch(decrement())}>-</button>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
        </>
    )
}

export  {Counter}