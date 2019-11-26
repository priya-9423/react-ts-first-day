import React from 'react';

export default function HelloWorld(props){
  return (
  <div>
    <div>Hello {props.name}</div>
    <button onClick = {() => props.myFirstEvent(props.name)}> Click! </button>
  </div>
  )
}

export function Second(){
  return (
  <div>
    <div>Hello world second block!</div>
    <button > Click Second! </button>
  </div>
  )
}
