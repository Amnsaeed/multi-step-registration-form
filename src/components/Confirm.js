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

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
     this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
      this.props.prevStep();
  }
  render() {

    const { values, handleChange }  = this.props; 
    const { step } = values;
    const { userName, email, password, firstName, lastName, gender, bio, education, occupation, city} = values;
    console.log(step);

    return (
     <ThemeProvider theme={theme}>
        <React.Fragment>



          <AppBar>

            <Typography>
                Confirm
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

              <Box style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '45px', display: "flex", flexDirection: "column", width: "300px", justifyContent: "center", alignContent: "center", alignItems: "center", margin: "85px" }}>
                 <List>
                  <ListItem>
                    <ListItemText primary= "Username" secondary={userName}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary= "Email" secondary={email}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary= "First Name" secondary={firstName}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary= "Last Name" secondary={lastName}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary= "Gender" secondary={gender}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary= "Bio" secondary={bio}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary= "Education" secondary={education}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary= "Occupation" secondary={occupation}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary= "City" secondary={city}
                    />
                  </ListItem>
        
                </List>

                <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "20px" }}>
                  <Button
                    style={{ color: "white", backgroundColor: "#B19CD7", marginRight: "20px", fontSize: "13px" }}
                    onClick={this.continue}
                  >
                    Confirm & Continue
                  </Button>
                  <Button
                    style={{ color: "white", backgroundColor: "gray", fontSize: "13px" }}
                    onClick={this.back}
                  >
                    Back
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

export default Confirm;
