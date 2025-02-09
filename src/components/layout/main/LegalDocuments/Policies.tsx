"use client";
import { Content } from "@/types/Content.type";
import { useState } from "react";

function Policies() {
  type PolicyKey =
    | "Privacy Policies"
    | "Terms and Conditions";

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
              point_description:
                "Name, email address, phone number,etc.",
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
          bullet: [
            "When required by law or legal process.",
          ],
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
