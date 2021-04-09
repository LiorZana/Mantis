import React from 'react';
import { AppBar, Toolbar, Box } from '@material-ui/core';
import { ButtonNavLink } from 'Components';

const Layout = ({ children }) => {
    return (
        <Box height='100%' style={{ backgroundColor: 'cornsilk'}}>
            <AppBar position='static'>
                <Toolbar>
                    <ButtonNavLink color='secondary' to='/' exact strict>
                        Home
                    </ButtonNavLink>
                    <ButtonNavLink color='secondary' to='/board' exact strict>
                        Board
                    </ButtonNavLink>
                    <ButtonNavLink buttonProps={{ style: { marginLeft: 'auto' } }} color='secondary' to='/' exact>
                        Nada
                    </ButtonNavLink>
                </Toolbar>
            </AppBar>
            <Box position='relative' display='flex' justifyContent='center' alignContent='center' alignItems='center'>
            {children}
            </Box>
            <footer>
                end
            </footer>
        </Box>
    )
}

export default Layout;
