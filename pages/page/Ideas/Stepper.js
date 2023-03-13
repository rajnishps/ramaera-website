import React, { Fragment } from "react";
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const StepperSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography>Basic Details</Typography>,
      icon: <DynamicFormIcon />,
    },
    {
      label: <Typography>Project Details</Typography>,
      icon: <AccountTreeIcon />,
    },
    {
      label: <Typography>Finish Details</Typography>,
      icon: <CheckCircleOutlineIcon />,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
  };

  return (
    <Fragment>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color:
                  activeStep >= index ? "darkorange" : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Fragment>
  );
};

export default StepperSteps;
