import React from 'react';
import ReactDOM from 'react-DOM';

import  HelloWorld, {Second} from './Components/HelloWorld';
import  HelloWorldClass from './Components/HelloWorldClass';

export default function App(){

  function buttonClicked(data)
  {
    alert('Hello '+data);
  }
  
  return (
    <div>
    <HelloWorld name='Priyanka' myFirstEvent = {buttonClicked}/>
    <Second />
    <HelloWorldClass firstName='Priyanka' lastName ='Gat' clickEvent = {buttonClicked} />
  </div>
  )

  
}