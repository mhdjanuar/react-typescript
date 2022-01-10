import React, { useState } from 'react';
import { incrementCounter } from '../../store/slices/counter';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Home: React.FC = () => {
  const { theCounter } = useAppSelector(state => state.counterSlice);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          ia-label="Increment value"
          onClick={() => {
            dispatch(incrementCounter());
          }}
        >
          +
        </button>
        <span>{theCounter}</span>
        <button aria-label="Decrement value" onClick={() => {}}>
          -
        </button>
      </div>
    </div>
  );
};

export default Home;
