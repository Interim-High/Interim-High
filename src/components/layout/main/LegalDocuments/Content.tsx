import { Content } from "@/types/Content.type";

export  const contents: Content[] = [
    {
      description:
        "At Danphelink, we value the privacy of our students, staff, and other users of our services. This Privacy Policy outlines how we collect, use, and protect personal information when you interact with our website, mobile applications, or other services provided by Danphelink.",
      Topic: [
        {
          title: "Information We Collect",
          description:
            "We may collect the following types of personal information:",
          points: [
            {
              point_Title: "Personal Identification Information",
              point_description: "Name, email address, phone number,etc.",
            },
            {
              point_Title: "Educational Information",
              point_description:
                "Academic records, course enrollment, grades, etc.",
            },
          ],
        },
        {
          title: "How We Use Your Information",
          description:
            "We use the information we collect for the following purposes:",
          bullet: [
            "To provide educational services and communicate with students.",
            "To process payments for courses, exams, or other services.",
            "To improve our website and services.",
            "To send updates, newsletters, and promotional materials (with your consent).",
            "To comply with legal obligations and ensure the security of our systems.",
          ],
        },
        {
          title: "Sharing Your Information",
          description:
            "We do not share your personal information with third parties except:",
          bullet: ["When required by law or legal process."],
        },
        {
          title: "Data Retention",
          description:
            "We retain personal information as long as necessary for the purposes outlined in this policy or as required by law. You may request that we delete your data in accordance with applicable data protection laws.",
        },
        {
          title: "Security",
          description:
            "We take reasonable measures to protect your personal information, including encryption, access controls, and regular security assessments.",
        },
        {
          title: "Your Rights",
          description:
            "Depending on your location and applicable laws, you may have the following rights:",
          bullet: [
            "Access to your personal information.",
            "Correction of inaccurate or incomplete data.",
            "Deletion of your personal information.",
            "Objecting to the processing of your personal information.",
          ],
        },
      ],
    },
  ];
