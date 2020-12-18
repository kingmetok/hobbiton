import React, { useState } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { withRouter } from 'react-router-dom';

function Header(props) {
  let [isLoggedIn, setLogIn] = useState(true);

  function LogIn() {
    changeRoute('/auth');
  }

  function changeRoute(path) {
    props.history.push(path);
  }

  function logOut() {
    changeRoute('/');
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
              <Button onClick={() => changeRoute('/account/dashboard')}>
                Dashboard
              </Button>
              <Button onClick={() => changeRoute('/account/profile')}>
                Profile
              </Button>
              <Button onClick={() => changeRoute('/account/achievements')}>
                Achievements
              </Button>
              <Button onClick={() => changeRoute('/account/scoreboard')}>
                Scoreboard
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
