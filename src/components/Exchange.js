import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Exchange1 from "./Exchange1";
import Exchange2 from "./Exchange2";
import Exchange3 from "./Exchange3";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://atlantabitdevs.org">
        Atlanta BitDevs
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Receive Address", "Save Txn Info"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Exchange1 />;
    case 1:
      return <Exchange2 />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Exchange() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" textShadow="1px 1px" noWrap>
            Real
          </Typography>
          <img
            src="/coinbase.webp"
            style={{ marginLeft: "5px", alignItems: "center", width: "100px" }}
          />

          <Typography variant="h6" color="inherit" textShadow="1px 1px" noWrap>
            .com
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 4 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Withdraw BTC
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 5, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                {activeStep < steps.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, mv: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                )}
              </Box>
            </React.Fragment>
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
