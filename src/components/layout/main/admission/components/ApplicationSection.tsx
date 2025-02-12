"use client"
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DescriptionIcon from "@mui/icons-material/Description";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PaymentIcon from "@mui/icons-material/Payment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { StepIconProps } from "@mui/material/StepIcon";
import { StepData } from "@/types/admission.type";
import { ColorlibConnector } from "./line-connecter";
import { ColorlibStepIconRoot } from "./stepIcon";


function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className, icon } = props;

  const icons: StepData[] = [
    { label: "Application Form", icon: <DescriptionIcon /> },
    { label: "Required Documents", icon: <AttachFileIcon /> },
    { label: "Document Review", icon: <RateReviewIcon /> },
    // { label: "Admission Fee", icon: <PaymentIcon /> },
    { label: "Admission Confirmation", icon: <CheckCircleIcon /> },
  ];

  const currentStep = icons[Number(icon) - 1]; // Access the step data by icon index

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {currentStep.icon}
    </ColorlibStepIconRoot>
  );
}

const steps: StepData[] = [
  {
    label: "Application Form", icon: <DescriptionIcon />, list: [
      "Complete the online or physical application form with accurate data",
    ]

  },
  {
    label: "Requirements", icon: <AttachFileIcon />, list: [
      "Provide required details accurately ",
    ]
  },
  {
    label: "Review", icon: <RateReviewIcon />, list: [
      "The institution will review the submitted details ",
    ]
  },
  // { label: "Admission Fee", icon: <PaymentIcon /> ,list: [
  //   "If approved, pay the required admission or enrollment fee by visiting institution account section",
  // ]},
  {
    label: "Confirmation", icon: <CheckCircleIcon />, list: [
      "Once payment is verified, the institution issues an admission letter, confirming enrollment through email,text or phone",
    ]
  },
];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [completed, setCompleted] = React.useState<Record<number, boolean>>({});

  const totalSteps = (): number => steps.length;
  const isLastStep = (): boolean => activeStep === totalSteps() - 1;

  const handleNext = (): void => {
    if (isLastStep()) {
      setActiveStep(0); // Reset to first step if on last step
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <div className="flex flex-col max-md:w-full p-2 mt-16 gap-4">
      <div className="flex flex-col justify-center items-center text-center gap-8">
        <h1 className="text-3xl md:text-5xl text-red-700"> Application Procedure</h1>
        <p className="text-base md:text-xl text-[#1D1D1D]"> Every stage of our admissions process is aimed at identifying the aspects of your academic trajectory and personal ambitions</p>
      </div>

      <div className="">
        <Box sx={{ width: "100%", }}>
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
            {steps.map((step, index) => (
              <Step key={step.label} completed={completed[index]}>
                <StepLabel
                  StepIconComponent={ColorlibStepIcon}
                  onClick={handleStep(index)}
                  sx={{ cursor: "pointer",
                    fontSize: { xs: 12, sm: 18, md: 20, lg: 24 }, 
                   }}
                >
                  {step.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <div className=" flex flex-col items-center justify-center">
            {steps[activeStep].list?.map((item, index) => (
              <Typography
              sx={{
                mt: 2,
                mb: 1,
                py: 1,
                fontSize: { xs: 12, sm: 18, md: 20, lg: 24 }, 
                textAlign: "center", 
              }}
              key={index}
            >
              {item}
            </Typography>
            

            ))}

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                {isLastStep()}
                Next
              </Button>
            </Box>
          </div>
        </Box>
      </div>
    </div>
  );
}
