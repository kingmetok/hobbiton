import React, { useState } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { withRouter } from 'react-router-dom';

function Header(props) {
  let [isLoggedIn, setLogIn] = useState(false);

  function LogIn() {
    setLogIn(true);
    changeRoute('/auth');
  }

  function changeRoute(path) {
    props.history.push(path);
  }

  function logOut() {
    setLogIn(false);
    changeRoute('/landing');
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
              <Button onClick={() => changeRoute('/dashboard')}>
                Dashboard
              </Button>
              <Button onClick={() => changeRoute('/scoreboard')}>
                Scoreboard
              </Button>
              <Button onClick={() => changeRoute('/profile')}>Profile</Button>
              <Button onClick={() => changeRoute('/achievements')}>
                Achievements
              </Button>
            </nav>
          )}
        </div>

        {!isLoggedIn && (
          <div className="authWrapper">
            <Button onClick={LogIn} color="primary" variant="outlined">
              Sign In
            </Button>
          </div>
        )}

        {isLoggedIn && (
          <div className="navigationWrapper">
            <div className="headerImageWrapper">
              <img className="headerImage" alt="" />
              <Button onClick={logOut}>
                <ExitToAppIcon children=""></ExitToAppIcon>logout
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default withRouter(Header);
