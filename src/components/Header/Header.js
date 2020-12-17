import React, { useState } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Header() {
  let [isLoggedIn, setLogIn] = useState(false);

  function toggleLogIn() {
    setLogIn(!isLoggedIn);
  }

  return (
    <header className="header">
      <div className="headerWrapper">
        <div className="logoWrapper">
          <h2 className="headerLogo">
            <span className="headerLogoPart">BE</span>BETTER
          </h2>
          {isLoggedIn && (
            <nav className="navigation">
              <Button>Dashboard</Button>
              <Button>Scoreboard</Button>
              <Button>Profile</Button>
              <Button>Achievements</Button>
            </nav>
          )}
        </div>

        {!isLoggedIn && (
          <div className="authWrapper">
            <Button onClick={toggleLogIn}>Sign In</Button>
            <Button color="primary" variant="outlined">
              Sign Up
            </Button>
          </div>
        )}

        {isLoggedIn && (
          <div className="navigationWrapper">
            <div className="headerImageWrapper">
              <img className="headerImage" alt="" />
              <Button onClick={toggleLogIn}>
                <ExitToAppIcon children=""></ExitToAppIcon>logout
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
