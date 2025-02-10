"use client";
import { Content } from "@/types/Content.type";
import { useState } from "react";

function Policies() {
  type PolicyKey = "Privacy Policies" | "Terms and Conditions";

  const [selectedPolicy, setSelectedPolicy] =
    useState<PolicyKey>("Privacy Policies");

  const contents: Content[] = [
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

  const Termscontents: Content[] = [
    {
      Topic: [
        {
          title: "Acceptance of Terms",
          description:
            "By enrolling in any courses or programs at Danphelink, students agree to comply with and be bound by the following terms and conditions.",
        },
        {
          title: "Eligibility for Enrollment",
          bullet: [
            "Students must meet the required eligibility criteria for the specific courses or programs.",
            "Proof of prior qualifications and identity may be required during the enrollment process.",
          ],
        },
        {
          title: "Course Materials and Intellectual Property",
          bullet: [
            "All materials provided during the course, including but not limited to lectures, notes, videos, and assignments, are the intellectual property of Danphelink.",
            "Students may use the materials for personal study purposes only and may not distribute or share them with third parties without permission.",
          ],
        },
        {
          title: "Code of Conduct",
          bullet: [
            "Students are expected to maintain a respectful and professional demeanor during classes and interactions with instructors and fellow students.",
            "Any form of harassment, bullying, or disruptive behavior will not be tolerated and may result in suspension or expulsion from the academy.",
          ],
        },
        {
          title: "Attendance and Participation",
          bullet: [
            "Regular attendance is expected for all courses. Students must meet the minimum attendance requirements as specified for each course.",
            "Active participation in lectures, discussions, and assignments is encouraged to ensure a fulfilling learning experience.",
          ],
        },
        {
          title: "Assessment and Grading",
          bullet: [
            "All assessments, including exams, quizzes, assignments, and projects, must be completed by students as per the deadlines specified.",
            "Grading criteria will be outlined at the start of each course, and students must meet the minimum grade requirements to pass the course.",
          ],
        },
        {
          title: "Certificates and Accreditation",
          bullet: [
            "Certificates of completion will be provided to students who successfully complete their courses and meet all required criteria.",
            "Danphelink does not guarantee any specific job placement or employment outcomes upon completion of courses.",
          ],
        },
        {
          title: "Termination of Enrollment",
          bullet: [
            "Danphelink reserves the right to terminate a student’s enrollment for reasons such as academic dishonesty or violation of the code of conduct.",
          ],
        },
        {
          title: "Liability",
          bullet: [
            "Danphelink is not liable for any personal injury, loss, or damage to property that may occur on the premises or during any academy-related activities.",
          ],
        },
        {
          title: "Changes to Terms",
          bullet: [
            "Danphelink reserves the right to modify or update these terms and conditions at any time. Students will be notified of any changes through official communication channels.",
          ],
        },
        {
          title: "Governing Law",
          description:
            "These terms and conditions shall be governed by and interpreted in accordance with the laws of Nepal.",
        },
        
      ],
    },
  ];
  const policies: Record<PolicyKey, string> = {
    "Privacy Policies": "Privacy policy content ..",
    "Terms and Conditions": "Terms and conditions content ...",
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="fixed left-0 z-40 w-64 h-full bg-gray-800 text-white shadow-lg">
        <div className="px-3 py-4 overflow-y-auto">
          <h2 className="text-2xl text-center font-semibold mb-4">Policies</h2>
          <ul className="space-y-2">
            {Object.keys(policies).map((policy) => (
              <li key={policy}>
                <button
                  className={`block p-3 rounded-md w-full text-left hover:bg-blue-900 transition ${
                    selectedPolicy === policy ? "bg-blue-900" : ""
                  }`}
                  onClick={() => setSelectedPolicy(policy as PolicyKey)}
                >
                  {policy}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <h1 className="text-5xl font-semibold text-center text-orange-600">
          {selectedPolicy}
        </h1>

        {selectedPolicy === "Privacy Policies" && (
          <div>
            {contents.map((cont, index) => (
              <div key={index}>
                <p className="mt-4 text-base text-gray-900">
                  {cont.description}
                </p>
                {cont.Topic.map((topic, tIndex) => (
                  <div key={tIndex} className="mt-6">
                    <h2 className="font-bold text-lg">{topic.title}</h2>
                    <p className="text-base text-gray-600">{topic.description}</p>

                    {/* Checking if topic.points exist before mapping */}
                    {topic.points && topic.points.length > 0 && (
                      <ul className="mt-4 list-disc list-inside px-7">
                        {topic.points.map((point, pIndex) => (
                          <li key={pIndex} className="mt-2">
                            <strong>
                              {point.point_Title
                                ? `${point.point_Title}: `
                                : ""}
                            </strong>
                            {point.point_description}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Checking if topic.bullet exists before rendering */}
                    {topic.bullet && (
                      <ul className="mt-2 list-disc list-inside px-7">
                        {topic.bullet.map((item, bIndex) => (
                          <li key={bIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        {selectedPolicy === "Terms and Conditions" && (
          <div>
            {Termscontents.map((cont, index) => (
              <div key={index}>
                <p className="mt-4 text-base text-gray-900">
                  {cont.description}
                </p>
                {cont.Topic.map((topic, tIndex) => (
                  <div key={tIndex} className="mt-6">
                    <h2 className="font-bold text-lg">{topic.title}</h2>
                    <p className="text-lg text-gray-600">{topic.description}</p>

                    {/* Checking if topic.points exist before mapping */}
                    {topic.points && topic.points.length > 0 && (
                      <ul className="mt-4 list-disc list-inside px-7">
                        {topic.points.map((point, pIndex) => (
                          <li key={pIndex} className="mt-2">
                            <strong>
                              {point.point_Title
                                ? `${point.point_Title}: `
                                : ""}
                            </strong>
                            {point.point_description}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Checking if topic.bullet exists before rendering */}
                    {topic.bullet && (
                      <ul className="mt-2 list-disc list-inside px-7">
                        {topic.bullet.map((item, bIndex) => (
                          <li key={bIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Policies;
