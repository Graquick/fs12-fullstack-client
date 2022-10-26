import React, { ComponentState } from 'react'
import { ReactComponent as Left } from "figures/chevron-left.svg";
import { ReactComponent as Right } from "figures/chevron-right.svg";
import { previous, next } from 'features/carousel/carouselSlice';
import { useAppDispatch } from 'redux/hooks';

const Buttons = ({ count, setCount }: ComponentState) => {
    const dispatch = useAppDispatch()

  return (
    <div>
      {" "}
      <button onClick={() => dispatch(previous())} className="btn">
        <Left />
      </button>
      <button onClick={() => dispatch(next())} className="btn">
        <Right />
      </button>
    </div>
  );
};

export default Buttons