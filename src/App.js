import './App.css';
import Header from './components/Header';
import React, {useState} from 'react';

function App() {
  const [hii, hey] = useState(1);
                                   // hii = initial value , hey= Updated value  
  function inc(){
    hey(hii +1 )
  }

  function dec(){
    hey(hii -1 )
  }
  function m(){
    hey(hii * 2 )
  }
  function d(){
    hey(hii % 2 )
  }

  return (
    <div className="App">  
     <Header/>
     <div className='main'>
      <h1 className='heading'>{hii}</h1>
     <button className='btn' onClick={inc}>increment</button>
     <button className='btn' onClick={dec}>decrement</button>
     <button className='btn' onClick={m}>Multiplication</button>
     <button className='btn' onClick={d}>division</button>
       
     </div>
    </div>
     
  );
}
export default App;
