import React, {useEffect, useReducer, useState} from 'react';
import styles from './CovidDetails_Function.module.scss';

const initialCount = 0;
function ReducerCount(state, action){
  if(typeof state === undefined){
    return 0;
  }
  switch(action.type){
    case 'increment':
      return state+1;
    case 'decrement':
      return state-1;
    case 'reset':
      return initialCount;
    default:
      throw new console.error();
  }
}
function CovidDetails_Function() {
  const [count, SetCount] = useState(0);
  const [reducerCount, dispatch] = useReducer(ReducerCount, initialCount)
  useEffect(()=>{
    //document.title = 'Hehe haha'
  });
  
  return (
    <>
  <div className={styles.CovidDetails_Function}>
    CovidDetails_Function Component
    <button onClick={()=>{SetCount(count + 1); document.title = `Hehe haha ${count}` }}>Hit me!</button>
    <div>{count}</div>
    <div>{document.title}</div>
    <h2>using SetCount</h2>
    <button onClick={() => SetCount(initialCount)}>Reset</button>
    <button onClick={() => SetCount(prevCount => prevCount - 1)}>-</button>
    <button onClick={() => SetCount(prevCount => prevCount + 1)}>+</button>
  </div>
  <div>
    <h2>using ReducerCount {reducerCount}</h2>
    <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    <button onClick={() => dispatch({type: 'increment'})}>+</button>
  </div>
  </>)
};


CovidDetails_Function.propTypes = {};

CovidDetails_Function.defaultProps = {};

export default CovidDetails_Function;
