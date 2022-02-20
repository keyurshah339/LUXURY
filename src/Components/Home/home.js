
import { useDataContext } from "../../Context/data-context";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import * as React from 'react';
import {Navigation} from '../../Components'



export const Home = () => {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '',
    imgPath:
      'https://www.spotthewatch.com/wp-content/uploads/2020/06/Luxury-men-watch.jpeg',
  },
  {
    label: '',
    imgPath:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-female-shoes-on-feet-royalty-free-image-912581410-1563805834.jpg?crop=1.00xw:0.752xh;0,0.127xh&resize=1200:*',
  },
  {
    label: '',
    imgPath:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/perfume-oils-1551376476.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*  ',
  },
  {
    label: '',
    imgPath:
      'https://www.vitruvien.com/images/shop-shirt-banner-new.jpg',
  },
];
  const { dispatch } = useDataContext();

  useEffect(() => {
    document.title = "LUXURY | HOME";
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
    <Navigation/>
    <div className="new">
      <h2 className="txt-header-1">
        ROAD TO {" "}
        <span className="secondary-txt">LUXURY</span>
      </h2>

      <div class="container" style={{display:'flex',justifyContent:'center'}}>

      <Box sx={{ maxWidth: 700  , flexGrow: 1 }}>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 300,
                  display: 'block',
                  maxWidth: 1300,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
         sx={{
          bgcolor: 'inherit',
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
</div>

      
      
      <div className="home-txt-desc">
        <p className="txt-desc primaryBg-txt">
          India first online Luxury brand store.Buy authentic prodcuts 
          with <b>LUXURY</b>. <p>We are the company India needs and deserves</p>
        </p>
        <NavLink to="/products">
          <button
            type="button"
            className="btn btn-solid button1 "
            onClick={() => dispatch({ type: "ROUTE", payload: "products" })}
          >
            Shop Now
          </button>
        </NavLink>
      </div>

      <h2 className="txt-header-2">
        Featured <span className="secondary-txt">Categories</span>
      </h2>
      
      <div className="cartegory-container">
        <NavLink to="/products">

        <div className="container-card pad" >
        <img
           onClick={() => dispatch({ type: "ROUTE", payload: "products" })}
          src="https://wallpaper.dog/large/981939.jpg"
          alt="Avatar"
          class="image"
        />
        <div className="overlay">
          <div className="text">SHIRTS</div>
        </div>
      </div>

        </NavLink>
        <NavLink to="/products">
        <div className="container-card">
        <img
           onClick={() => dispatch({ type: "ROUTE", payload: "products" })}
          src="https://i.pinimg.com/736x/40/2e/b3/402eb3cb42a9ba672fe98814ca8ffce1.jpg"
          alt="Avatar"
          class="image"
        />
        <div className="overlay">
          <div className="text">SHOES</div>
        </div>
      </div>
        
        </NavLink>
        <NavLink to="/products">
        <div className="container-card">
        <img
           onClick={() => dispatch({ type: "ROUTE", payload: "products" })}
          src="https://i.pinimg.com/736x/af/ae/65/afae65fda2ce52e1f73332641536fd64.jpg"
          alt="Avatar"
          class="image"
        />
        <div className="overlay">
          <div className="text">BAGS</div>
        </div>
      </div>
        </NavLink>
      </div>

      <footer className="footer">
        <h3 className="primary-txt">
        KEEP IN TOUCH
        </h3>
        <div>
         
         
          <a
            className="link primary-txt"
            href="https://www.linkedin.com/in/keyur-shah-899378202/"
          >
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>

          <a className="link primary-txt" href="https://github.com/keyurshah339">
            <i className="fab fa-github fa-lg"></i>
          </a>
        </div>
      </footer>
      </div>
    </>
  );
  
};
