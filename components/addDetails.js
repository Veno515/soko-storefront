import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from 'react-phone-number-input/input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Draggable from 'react-draggable';
import ReactCodeInput from 'react-verification-code-input';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { red } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Grid } from '@material-ui/core';
import {useRouter}  from 'next/router';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  steps: {
      fontWeight: 'bold'
  },
  phonenumcontainer: {
    margin: theme.spacing(1),
    width: '25ch',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  phonenumberinput: {
    minWidth: 400,
    minHeight: 60,
    [theme.breakpoints.down('sm')]: {
      maxHeight: 400,
      minWidth: 200,
    },
    color:'#808080',
    fontSize:'20px',
    border: '1px solid #808080',
  },
  loginbutton: {
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(2),
    },
    minWidth: 150,
    maxHeight: 60,
    backgroundColor: '#FADC5B',
  },
  disabledbutton: {
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(2),
    },
    minWidth: 150,
    maxHeight: 60,
  },
  logintext: {
    fontWeight: 'bold'
  },
  verifydialog: {
    padding: theme.spacing(2),
  },
  dialogheader: {
      fontWeight: 'bold',
      borderBottom: `1px solid ${theme.palette.divider}`,
      width: '100%',
      paddingBottom: theme.spacing(2)
  },
  dialogtext: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      width: 280,
      fontWeight: 'bold'
  },
  time: {
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'row'
  },
  timer: {
      paddingBottom: theme.spacing(2),
      paddiingTop: theme.spacing(2),
  },
  timetext: {
      marginLeft: theme.spacing(-14),
      paddingRight: theme.spacing(1),
      display: 'flex',
      flexDirection: 'row'
  },
  title: {
      fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardroot: {
    minWidth: 350,
    maxWidth: 350,
    marginRight: theme.spacing(2),
    '&:active': {
      border: '5px solid #1569C8',
    }
  },
  enteraddress: {
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      },
  },
  phonenum: {
      paddingTop: theme.spacing(3)
  },
  address: {
    paddingTop: theme.spacing(1)
  },
  addresscontainer: {
      position: 'relative',
      height: 200
  },
  addaddress: {
    color: '#1569C8',
    position: 'absolute',
    cursor: 'pointer',
    top: '46%',
    [theme.breakpoints.down('sm')]: {
      top: 100
    },
    left: '41%',
    transform: 'translate(-50%, -50%)',
  },
  active: {
      
      minWidth: 350,
      maxWidth: 350,
      marginRight: theme.spacing(2)
  },
  formfield: {
    width: '80%',
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    marginTop: theme.spacing(0),
    fontSize: '18px',
    border: '1px solid #D3D3D3'
  },
  multirowtextfield: {
    width: '80%',
    height: 120,
    padding: theme.spacing(1),
    margin: theme.spacing(4),
    fontSize: '18px',
  },
  formlabels: {
    marginLeft: theme.spacing(6),
  },
  errormessage: {
    fontWeight: 'bold',
    marginLeft: theme.spacing(6),
    marginTop: theme.spacing(-2),
    color: red[400],
  },
  editaddressbutton: {
    marginLeft: theme.spacing(1),
    minWidth: 250,
    minHeight: 50,
    backgroundColor:'#FADC5B',
    marginBottom: theme.spacing(2),
  },
 CTAbuttonstext: {
    fontWeight: 'bold'
  },
  in: {
    marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
  },
  form: {
    marginTop: theme.spacing(2),
  },
 
}));

function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }

function getSteps(classes) {
 classes = useStyles();
  return [<Typography className={classes.steps} variant="h5">Account</Typography>,
         <Typography className={classes.steps} variant="h5">Delivery Address</Typography>, 
        <Typography className={classes.steps} variant="h5">Payment</Typography>];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Typography color="textSecondary">To place your order, log in by entering your 10 digit mobile number.</Typography>;
    case 1:
      return <Typography color="textSecondary">Select your delivery address from the existing one or add new one.</Typography>
      // {step === 2 && <Button>display me</Button>}
      ;
    case 2:
      return <Typography color="textSecondary">Select your payment method.</Typography>;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [value, setValue] = React.useState()
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const steps = getSteps();
  const router = useRouter();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const x= 1000000000000;

  return (
    <div className={classes.root}>
      <Grid container><Grid item sm={12} xs={12}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                    size="large"
                  >
                    Back
                  </Button>
                  {activeStep === 0 && 
                        <div>
                            <Typography color="textSecondary">Enter Mobile Number</Typography>
                            <div className={classes.phonenumcontainer}>
                                <Input
                                    required
                                    className={classes.phonenumberinput}
                                    // classes={{ focused: classes.inputFocused}}
                                    placeholder="Enter mobile number"
                                    country="UG"
                                    international
                                    withCountryCallingCode
                                    value={value}
                                    onChange={setValue}
                                    error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}/>
                                 { value  == null && <Button className={classes.disabledbutton} disabled variant="contained"><p className={classes.logintext}>Login</p></Button> }   
                                { value  < x && <Button className={classes.disabledbutton} disabled variant="contained"><p className={classes.logintext}>Login</p></Button> }
                                { value >= x && <Button color="primary" className={classes.loginbutton} onClick={handleClickOpen}><p className={classes.logintext}>Login</p></Button>}
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                    PaperComponent={PaperComponent}
                                    fullWidth='true'
                                    className={classes.verifydialog}
                                >
                                    <center>
                                        <DialogTitle id="alert-dialog-title"><Typography className={classes.dialogheader} variant="h5">Verify your number</Typography></DialogTitle>
                                        < CancelOutlinedIcon color="action" style={{float:'right', marginTop: '-57px', marginRight: '20px', cursor:'pointer'}} onClick={handleClose}/>
                                        <Typography className={classes.dialogtext} color="textSecondary">Please enter verification code sent via SMS to +256 76 633 4574 </Typography>
                                        <ReactCodeInput autoFocus="true" onComplete={() => {
                                                              handleNext();
                                                              handleClose();
                                                            }}/>
                                        <div className={classes.timer}>
                                            <CountdownCircleTimer
                                                isPlaying
                                                initialRemainingTime={60}
                                                duration={60}
                                                size="30"
                                                strokeWidth="1"
                                                colors={[
                                                    ['#C0C0C0', 0.4],
                                                    ['#778899', 0.4],
                                                    ['#1569C8', 0.2],
                                                ]}
                                                >
                                                {({ remainingTime, animatedColor }) => (
                                                    <div className={classes.time}>
                                                        <div className={classes.timetext}><Link href='#'>Resend code </Link> <div className={classes.in} style={{color: '#000'}}> in</div></div>
                                                    <Typography style={{ color: animatedColor }}>
                                                   {remainingTime}
                                                    </Typography> 
                                                    </div>
                                                )}
                                                </CountdownCircleTimer>
                                        </div>
                                    </center>
                                </Dialog>
                            </div>
                        </div>
                        
                  }
                  {activeStep === 1 && 
                  <div>
                    <div className={classes.enteraddress}>
                        <Card className={classes.cardroot} variant="outlined" onClick={handleNext}>
                            <div>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Shrey Karah
                                </Typography>
                                <Typography className={classes.address} color="textSecondary" variant="body1" component="p">
                                    Quench Ville, Plot 12 Nkrumah Rd Kampala, Uganda
                                </Typography>
                                <Typography className={classes.phonenum} variant="body1">
                                +256 76 633 4574
                                </Typography>
                            </CardContent>
                            </div>
                        </Card>
                    

                        <Card className={classes.cardroot} variant="outlined">
                            <CardContent className={classes.addresscontainer}>
                                <Typography name="addaddress" className={classes.addaddress} onClick={handleClickOpen}>+   Add New Address </Typography>
                            </CardContent>
                        </Card>
                    
                    <Dialog
                    defaultValue={handleClose}
                     open={open}
                     onClose={handleClose}
                     aria-labelledby="alert-dialog-title"
                     aria-describedby="alert-dialog-description"
                     PaperComponent={PaperComponent}
                     fullWidth='true'
                     className={classes.verifydialog}
                    >
                      <DialogTitle id="alert-dialog-title"><Typography className={classes.dialogheader} variant="h5">Edit Address</Typography></DialogTitle>
                      <CancelOutlinedIcon color="action" style={{marginLeft: '90%', marginTop: '-57px', marginRight: '20px', cursor:'pointer'}} onClick={handleClose}/>
                         <Formik
                        initialValues={{ name: '', phone: '', city: '', address: '' }}
                        validationSchema={Yup.object({
                          name: Yup.string()
                            .max(40, 'Must be 15 characters or less')
                            .required('Required'),
                          phone: Yup.number()
                          .min(10, 'Must be more than 10 characters'),
                          city: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                          address: Yup.string().max(50, 'Must be 20 characters or less')
                          .required('Required'),
                        })}
                        // onSubmit={(values, { setSubmitting }) => {
                        //   setTimeout(() => {
                        //     alert(JSON.stringify(values, null, 2));
                        //     setSubmitting(false);
                        //   }, 400);
                        // }}
                      >
                        <Form className={classes.form}>
                          <label className={classes.formlabels} htmlFor="name">Name</label><br/>
                          <Field placeholder="E.g John Doe" className={classes.formfield} name="name" type="text" /><br/>
                          <ErrorMessage className={classes.errormessage} name="name" /><br/>
                          <label className={classes.formlabels} htmlFor="phone">Mobile Number</label><br/>
                          <Input
                                    name="phone"
                                    required
                                    className={classes.formfield}
                                    // classes={{ focused: classes.inputFocused}}
                                    placeholder="Enter mobile number"
                                    country="UG"
                                    international
                                    withCountryCallingCode
                                    value={value}
                                    onChange={setValue}
                                    error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}/><br/>
                                    <ErrorMessage className={classes.errormessage} name="phone" /><br/>
                          <label className={classes.formlabels} htmlFor="city">City</label><br/>
                          <Field placeholder="E.g Kampala" className={classes.formfield} name="city" type="text" /><br/>
                          <ErrorMessage className={classes.errormessage} name="city" /><br/>
                          <label className={classes.formlabels} htmlFor="address">Address</label><br/>
                          <Field  
                            // multiline
                            // rows={4}
                            // variant="outlined"
                            placeholder="E.g Kalema Apartments, Plot 00 Johnson Rd, Room 24B" className={classes.multirowtextfield} name="address" type="text" /><br/>
                          <ErrorMessage className={classes.errormessage} name="address" /><br/>
                          {/* { <Button disabled>Add Address</Button>} */}
                          <center>
                          <Button className={classes.editaddressbutton} type="submit" size="large" color="primary" onClick={() => {
                            handleNext();
                            handleClose();
                          }}><Typography variant="h6" className={classes.CTAbuttonstext}>Edit Address</Typography></Button>
                          </center>
                        </Form>
                      </Formik>
                    </Dialog> 
                    </div>
                    </div>
                  }

                  {/* <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button> */}
                  {activeStep === 2 && 
                  <div>
                  <FormControl component="fieldset">
                     <RadioGroup
                      defaultValue="end"
                      name="radio-buttons-group"
                    >
                       <FormControlLabel value="end" control={<Radio color="primary" />} label="Cash on delivery" />
                    </RadioGroup>
                  </FormControl>
                  
                 
                      <Button className={classes.editaddressbutton} type="submit" size="large" color="primary" onClick={() => {
                            setTimeout(() => {router.push('/order-success')},1000)
                            handleNext();
                          }}><Typography variant="h6" className={classes.CTAbuttonstext}>Place Order</Typography></Button>
                          </div>
                          }
                  {/* </Button> */}
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          {/* <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button> */}
        </Paper>
      )}
      </Grid></Grid>
    </div>
  );
}
