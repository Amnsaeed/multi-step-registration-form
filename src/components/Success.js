import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { colors, createTheme } from '@material-ui/core';
import { AppBar, Button, Box, Grid, Step, Stepper, StepLabel, StepIcon } from '@material-ui/core';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Typography from '@material-ui/core/Typography';



const theme = createTheme({
  palette: {
    primary: {
      main: '#B19CD7',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
  },
  // Add more customization here...
});

export class Success extends Component {

  render() {

    const { values }  = this.props; 
    const { step } = values;

    

    return (
     <ThemeProvider theme={theme}>
        <React.Fragment>



          <AppBar>

            <Typography>
                Success
            </Typography>

          </AppBar>

          <Box  style={{ minHeight: "85vh", display: "flex" ,flexDirection :"column", justifyContent: "center", alignItems: "center"}}> 
          <Grid container alignContent="center" alignItems="center" justifyContent="center" style={{ margin: 50, width: 200 }}>
            <Grid item>
              <Stepper 
              activeStep={step} alternativeLabel style={{ justifyContent: 'center', backgroundColor: "#f7f7f7", boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Step>
                  <StepLabel StepIconComponent={StepIcon}>
                    Account Setup
                  </StepLabel>
                </Step>
                <Step>
                  <StepLabel StepIconComponent={StepIcon}>
                    Personal Details
                  </StepLabel>
                </Step>
                <Step>
                  <StepLabel StepIconComponent={StepIcon}>
                    Professional Details
                  </StepLabel>
                </Step>
                <Step>
                  <StepLabel StepIconComponent={StepIcon}>
                    Confirm
                  </StepLabel>
                </Step>
                <Step>
                  <StepLabel StepIconComponent={StepIcon}>
                    Success
                  </StepLabel>
                </Step>
              </Stepper>

              <Box style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '45px', display: "flex", flexDirection: "column", width: "400px", justifyContent: "center", alignContent: "center", alignItems: "center", margin: "85px" }}>

                <h1>Thank You For Your Submission</h1>
                <p>You will receive an email with all the information you provided</p>

              </Box>
            </Grid>
          </Grid>


  
              </Box>
         

        </React.Fragment>

     </ThemeProvider>
    )
  }
}

export default Success;
