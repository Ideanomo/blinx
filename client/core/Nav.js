import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import auth from './../auth/auth-helper';

const isActive = (history, path) => {
    if (history.location.pathname === path)
        return {color: '#ff4081'}
    else
        return {color: '#ffffff'}
}

const Nav = withRouter(({history}) => (
    <AppBar>
        <Toolbar>
            <Link to="/">
                <Button style={isActive(history, "/")}>Home</Button>
            </Link>

            {
            !auth.isAuthenticated() && (<span>
              <Link to="/signup">
                <Button style={isActive(history, "/signup")}>Sign up
                </Button>
              </Link>
              <Link to="/signin">
                <Button style={isActive(history, "/signin")}>Sign In
                </Button>
              </Link>
            </span>)
            }

            {
            auth.isAuthenticated() && (<span>
              <Button
                  color="inherit"
                  onClick={() => {
                  auth.clearSessionStorage(() => history.push('/'))
              }}>
                  Sign out
              </Button>
                <Link to="/dashboard">
                    <Button style={isActive(history, "/dashboard")}>Dashboard</Button>
                </Link>
            </span>)
            }

        </Toolbar>
    </AppBar>
));

export default Nav;