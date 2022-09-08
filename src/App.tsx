import React from 'react';
import './App.css';
import { ButtonText } from './components/ButtonText';
import { CardInfo } from './components/CardInfo';
import { Counter } from './components/Counter';
import { DisplayCardInfo } from './components/DisplayCardInfo';
import { DropDown } from './components/DropDown';
import { SearchBar } from './components/SearchBar';
import { TextField } from './components/TextField';
import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';

const App:React.FC= ()=> {
  return (
    <div>
      {/* <Counter>
        {(count,setCount)=>(
          <div>
            {count}
            <button onClick={()=>{setCount(count+1)}}>+</button>
          </div>
        )}
      </Counter> */}
      <Container
      >
      <SearchBar/>
      
      <DisplayCardInfo/>
      </Container>
      
       

    </div>
  );
}

export default App;
