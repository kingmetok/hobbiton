import React from 'react';
import ContentBox from '../ContentBox/ContentBox';
import './LandingMainPage.css';
import landingSettings from '../../utils/landingSettings';
import Button from '@material-ui/core/Button';

import image1 from '../../img/1.jpg';
import image2 from '../../img/2.jpg';
import image3 from '../../img/3.jpg';
import image4 from '../../img/4.jpg';

export default function LandingMainPage() {
  return (
    <div className="mainWrapper">
      <ContentBox
        image={image1}
        text={landingSettings.text1}
        textStyle={landingSettings.textStyles1}
        wrapperStyle={landingSettings.wrapperStyles1}
      />
      <ContentBox
        image={image2}
        text={landingSettings.text2}
        textStyle={landingSettings.textStyles2}
        wrapperStyle={landingSettings.wrapperStyles2}
      />
      <ContentBox
        image={image3}
        text={landingSettings.text3}
        textStyle={landingSettings.textStyles3}
        wrapperStyle={landingSettings.wrapperStyles3}
      />
      <ContentBox
        image={image4}
        text={landingSettings.text4}
        textStyle={landingSettings.textStyles4}
        wrapperStyle={landingSettings.wrapperStyles4}
      />
      <div className="signupWrapper">
        <p className="signupText">Try it out! Its completely free</p>
        <Button color="secondary" variant="contained">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
