import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SearchBar } from './SearchBar';
import { DropDown } from './DropDown';
interface ButtonProps {

}

export const ButtonText: React.FC<ButtonProps> = ({}) => {
        return (
            <>
            <SearchBar/>
            {/* <Button variant="outlined">Submit a photo</Button>
            <DropDown/> */}
            </>
        );
}


