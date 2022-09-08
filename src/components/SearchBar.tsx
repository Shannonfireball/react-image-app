import React,{useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {setSearchTerm} from '../slice/SearchTerm'

import { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import {LoadSearch} from '../slice/LoadSearch'
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import { sizeHeight } from '@mui/system';


import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
interface SearchBarProps {

}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const SearchBar: React.FC<SearchBarProps> = ({}) => {
        const dispatch = useDispatch();
        const searchTerm = useSelector((state:RootState) => state.search);
        const loadedSearch= useSelector((state:RootState)=> state.searchLoad.search)

        const handelSearch = (event:any)=>{
          event.preventDefault()
          const userInput = event.target.value
          dispatch(setSearchTerm(userInput))
        } 
        const handelEnter = (event:any)=>{
        if(event.key==="Enter"){
          dispatch(LoadSearch(searchTerm))
        }
        }
        

          
        
        // console.log((loadedSearch as any).results[0].urls)

        
        return (
          <Stack sx={{
            '& > :not(style)': { m: 2, width: '95%' },
          }}>
          <Item>
          <Box
            sx={{
              '& > :not(style)': { m: 2, width: '90%' },
            }}  
          >
            
            <TextField InputProps={{endAdornment:(<Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} onClick={()=>dispatch(LoadSearch(searchTerm))} size="small" ><SearchIcon/></Button>)}} fullWidth onKeyDown={handelEnter} value={searchTerm} onChange={handelSearch} id="outlined-basic" label="search" variant="outlined" />
            
            
            
          </Box>
          </Item>
          </Stack>
          );
}



