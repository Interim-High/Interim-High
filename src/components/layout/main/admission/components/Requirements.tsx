import { StepData, StudentRequirements } from "@/types/admission.type";
import DescriptionIcon from "@mui/icons-material/Description";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import RateReviewIcon from "@mui/icons-material/RateReview";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export const Requirements: StudentRequirements[] = [
    {
        Studenttype: "National Students",
        details: {
            list: [
                "Applicants should have a fundamental understanding of computers. While a background in programming is preferred, it is not required.",
                "Applicants must ensure that all personal details are accurate.Any incomplete or incorrect information may result in disqualification.",
                "Admission depends on the availability of seats in the program.If applications exceed the available capacity, admission will be granted on a first - come, first - served basis.",
                "Admission will be confirmed only after the required admission fee is paid within the designated deadline."
            ],
        },
    },
    {
        Studenttype: "International Students",
        details: {
            list: [
                "Applicants should have a fundamental understanding of computers. While a background in programming is preferred, it is not required.",
                "Applicants must ensure that all personal details are accurate.Any incomplete or incorrect information may result in disqualification.",
                "Admission is dependent on seat availability in the chosen program, and in case of excess applications, preference will be given based on first come ,first served basis.",
                "Students must maintain a clean disciplinary record, and any history of misconduct, fraudulent activities may result in rejection.",
                "Admission will only be confirmed after the required tuition fees and other necessary charges are paid within the stipulated deadline."
            ],
        },
    },
];

 export const ApprovalCriterias: string[] = [
    "Applicants should have a basic understanding of computers. A foundation in programming is preferred but not required",
    "Applicants must provide accurate personal details. Any incomplete or incorrect information may result in disqualification",
    "Admission is subject to the availability of seats in the program. If the number of applications exceeds the available capacity, admission will be granted on a first-come, first-served basis",
    "Admission is only confirmed once the required admission fee is paid within the specified deadline."
];

 export const steps: StepData[] = [
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
      "Once All the requirements are fulfilled, the institution issues an admission letter, confirming enrollment through email,text or phone",
    ]
  },
];
