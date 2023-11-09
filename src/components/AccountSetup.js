import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { colors, createTheme } from '@material-ui/core';
import { AppBar, Button, Box, Grid, Step, Stepper, StepLabel, StepIcon } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';





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
});

export class AccountSetup extends Component {
  continue = e => {
    e.preventDefault();
     this.props.nextStep();
  }

  render() {

    const { values, handleChange }  = this.props; 
    const { step } = values;
    const { userName, email, password, firstName, lastName, gender, bio, education, occupation, city} = values;

    return (
     <ThemeProvider theme={theme}>
        <React.Fragment>



          <AppBar>

            <Typography>
                Account Setup
            </Typography>

          </AppBar>

          <Box  style={{ minHeight: "85vh", display: "flex" ,flexDirection :"column", justifyContent: "center", alignItems: "center"}}> 
          <Grid container alignContent="center" alignItems="center" justifyContent="center" style={{ margin: 50, width: 200 }}>
            <Grid item>
              <Stepper step={step} alternativeLabel style={{ justifyContent: 'center', backgroundColor: "#f7f7f7", boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
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

              <Box style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '25px', display: "flex", flexDirection: "column", width: "200px", justifyContent: "center", alignContent: "center", alignItems: "center", margin: "85px" }}>
                <TextField 
                  label="UserName"
                  placeholder='Enter Your Username'
                  value={userName}
                  onChange={handleChange('userName')}
                  required
                />
                <br />
                <TextField 
                  label="Email"
                  placeholder='Enter Your Email'
                  value={email}
                  onChange={handleChange('email')}
                  required
                />
                <br />
                <TextField 
                  label="Password"
                  placeholder='( minimum 8 characters )'
                  value={password}
                  onChange={handleChange('password')}
                  type="password"
                  error={password.length > 0 && password.length < 8}
                  helperText={password.length > 0 && password.length < 8 ? 'Password must be minimum 8 characters' : ''}
                  required
                />
                <br />
                <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "20px" }}>
                  <Button
                    style={{ color: "white", backgroundColor: "#B19CD7", marginRight: "20px", fontSize: "13px" }}
                    onClick={this.continue}
                  >
                    Confirm
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>


  
              </Box>
         

        </React.Fragment>

     </ThemeProvider>
    )
  }
}

export default AccountSetup;
