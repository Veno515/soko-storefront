import * as React from "react";
import { Button, makeStyles } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ThemeConsumer } from "styled-components";


// const CustomLeftArrow = ({ onClick }) => (
//   <i onClick={() => onClick()} className="custom-left-arrow" />
// );
// const CustomRightArrow = ({ onClick }) => {
//   return <i className="custom-right-arrow" onClick={() => onClick()} />;
// };

// const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
//   const { totalItems, currentSlide } = carouselState;
//   return (
//     <div className="custom-button-group">
//       <div>Current slide is {currentSlide}</div>
//       <button onClick={() => previous()}>Previous slide</button>
//       <button onClick={() => next()}>Next slide</button>
//       <button
//         onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
//       >
//         Go to a random slide
//       </button>
//     </div>
//   );
// };
const useStyles = makeStyles((theme) => ({
    carouselbuttons: {
        textAlign: 'center',
        position: 'relative',
    },
    nextbutton: {
        position: 'absolute',
        top:-400,
        right: theme.spacing(1),
        borderRadius: '100%',
        maxWidth: 10,
        minWidth: 10,
        maxHeight: 30
        },
    prevbutton: {
        position: 'absolute',
        top:-400,
        right: theme.spacing(7),
        borderRadius: '100%',
        maxWidth: 10,
        minWidth: 10,
        maxHeight: 30
        }
 }));

const CustomButtonGroupAsArrows = ({ next, previous, goToSlide, carouselState  }) => {
    const classes = useStyles();
    const { totalItems, currentSlide } = carouselState;
        return (
            <div
            className={classes.carouselbuttons}
            style={{
               
            }}
            >
                { currentSlide===0 && <Button className={classes.prevbutton} disabled><ChevronLeftIcon fontSize="large"/></Button>}
                { currentSlide!==0 &&<Button className={classes.prevbutton} onClick={() => previous()} color="primary" variant="contained"><ChevronLeftIcon fontSize="large"/></Button> }
                <Button className={classes.nextbutton} color="primary" variant="contained" onClick={next}><ChevronRightIcon fontSize="large"/></Button>
            </div>
        );
        };

export {
//   CustomLeftArrow,
//   CustomRightArrow,
//   CustomButtonGroup,
  CustomButtonGroupAsArrows,
};