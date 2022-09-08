import React,{useState} from 'react'
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import { Button, CardActionArea, CardActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface CardInfoProps {
  image:any,
  download:any
}

export const CardInfo: React.FC<CardInfoProps> = ({image,download}) => {
    const [like,setLike]=useState(false);
    const handelLike = ()=>{
      like?setLike(false):setLike(true)
    }
    return (
        <Card sx={{ maxWidth: "100%" }}>
          <CardActionArea >
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="green iguana"
            />
          </CardActionArea >
          
            <Button size="small" onClick={handelLike} color="primary">
              {like?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </Button>
            {/* <Button size="small" color="primary">
              <AddIcon/>
            </Button> */}
            <Button href={download} size="small" color="primary">
              <FileDownloadIcon/>
            </Button>
          
        </Card>
      );
}


