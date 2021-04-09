import React from 'react';
import { Button, Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const ButtonNavLink = ({ buttonProps, children, ...rest }) => {
    return (
        <Button {...buttonProps}>
            <Link component={NavLink} {...rest}>
                {children}
            </Link>
        </Button>
    )
}

export default ButtonNavLink
