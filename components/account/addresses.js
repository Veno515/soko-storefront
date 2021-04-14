import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from 'react-phone-number-input/input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Draggable from 'react-draggable';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { red } from '@material-ui/core/colors';
import {useRouter}  from 'next/router';

const useStyles = makeStyles((theme) => ({
    enteraddress: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          marginTop: theme.spacing(-15),
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
      top: '46%',
      cursor: 'pointer',
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
    cardroot: {
        minWidth: 350,
        maxWidth: 350,
        marginRight: theme.spacing(2),
        '&:active': {
          border: '5px solid #1569C8',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(2),
        }
      },
      editanddelete: {
          display: 'flex',
          paddingTop: theme.spacing(4)
      },
      delete: {
          paddingLeft: theme.spacing(2),
          color: 'red',
          cursor: 'pointer'  
      },
      edit:{
        cursor: 'pointer'
      },
}));

function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }

const Addresses = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState()
    const [activeStep, setActiveStep] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
         <div>
                <div>
                    <div className={classes.enteraddress}>
                        <Card className={classes.cardroot} variant="outlined">
                            <div>
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    <strong>Shrey Karah</strong>
                                </Typography>
                                <Typography className={classes.address} color="textSecondary" variant="body1" component="p">
                                    Quench Ville, Plot 12 Nkrumah Rd Kampala, Uganda
                                </Typography>
                                <Typography className={classes.phonenum} variant="body1">
                                +256 76 633 4574
                                </Typography>
                                <div className={classes.editanddelete}>
                                    <Typography className={classes.edit} onClick={handleClickOpen}>Edit</Typography>
                                    <Typography className={classes.delete}>Delete</Typography>
                                </div>
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
        </div>
    )
}

export default Addresses;