import React,{useEffect,useState} from 'react'

import {LoadPhotos} from '../slice/LoadPhotos'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'
import { CardInfo } from './CardInfo'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


interface DisplayCardInfoProps {

}

export const DisplayCardInfo: React.FC<DisplayCardInfoProps> = ({}) => {

    const photos = useSelector((state:RootState) => state.load.photos);
    const loadedSearch = useSelector((state:RootState)=>state.searchLoad.search);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(LoadPhotos())
      },[dispatch])
        console.log(loadedSearch)
        return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container   alignItems="center" justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 14 }}>
        {loadedSearch.length!==0?
        (loadedSearch as any).results.map((photo:any,index:any)=>{
          return(
            <Grid xs={1} sm={4} md={4} key={index}>
            <Item><CardInfo image={photo.urls.small} download={photo.urls.small_s3} /></Item>
            </Grid>
          )
        }):
        photos.map((photo:any,index:any)=>{
          return(
            <Grid xs={1} sm={4} md={4} key={index}>
            <Item><CardInfo image={photo.urls.small} download={photo.urls.small_s3} /></Item>
            </Grid>
          )
        })
        }
        </Grid>
        </Box>
        );
}