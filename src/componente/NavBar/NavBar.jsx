import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (<AppBar>
        <Toolbar sx={{ display:'flex', justifyContent:'space-around'}}>
            <Typography sx={{ color: 'white'}}>
                DRC-Shop
            </Typography>
            <Button sx={{color:'white'}}>
                Home
            </Button>
            <Button sx={{color:'white'}}>
                Categorias
                <Button>
                    
                </Button>
            </Button>
            <Button sx={{color:'white'}}>
                Productos
            </Button>
            <CartWidget/>
        </Toolbar>
    </AppBar>
    )
}
export default NavBar;