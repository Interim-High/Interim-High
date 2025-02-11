"use client";
import { useState } from "react";
import { PanelLeftCloseIcon, PanelLeftOpenIcon } from "lucide-react";
import { contents } from "./Content";
import { Termscontents } from "./TermContent";

function Policies() {
  type PolicyKey = "Privacy Policies" | "Terms and Conditions";

  const [selectedPolicy, setSelectedPolicy] = useState<PolicyKey>("Privacy Policies");
  const [isOpen, setIsOpen] = useState(true);

  const policies: Record<PolicyKey, string> = {
    "Privacy Policies": "Privacy policy content ..",
    "Terms and Conditions": "Terms and conditions content ...",
  };

  return (
    <div className="flex relative">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 z-40 ${isOpen ? "w-64" : "w-0"} h-full bg-gray-800 text-white shadow-lg transition-width duration-200`}
      >
        <div className="px-3 py-4">
          <h2 className={`text-2xl text-center font-semibold mb-4 ${isOpen ? "" : "hidden"}`}>
            Policies
          </h2>
          <ul className="space-y-2">
            {Object.keys(policies).map((policy) => (
              <li key={policy}>
                <button
                  className={`block p-3 rounded-md w-full text-left ${isOpen ? "hover:bg-blue-900 transition" : ""}`}
                  onClick={() => setSelectedPolicy(policy as PolicyKey)}
                >
                  {isOpen ? policy : ""}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute top-4 ${isOpen ? "left-64" : "left-12"} p-2 text-black`}
      >
        {isOpen ? <PanelLeftOpenIcon size={20} /> : <PanelLeftCloseIcon size={20} />}
      </button>

      {/* Main Content */}
      <main className={`flex-1 p-8 ${isOpen ? "ml-64" : "ml-14"} transition-all duration-200`}>
        <h1 className="text-5xl font-semibold text-center text-orange-600">{selectedPolicy}</h1>

        {selectedPolicy === "Privacy Policies" && (
          <div>
            {contents.map((cont, index) => (
              <div key={index}>
                <p className="mt-4 text-lg text-gray-900">{cont.description}</p>
                {cont.Topic.map((topic, tIndex) => (
                  <div key={tIndex} className="mt-6">
                    <h2 className="font-bold text-lg">{topic.title}</h2>
                    <p className="text-lg text-gray-700">{topic.description}</p>

                    {/* Checking if topic.points exist before mapping */}
                    {topic.points && topic.points.length > 0 && (
                      <ul className="mt-4 list-disc list-inside px-7">
                        {topic.points.map((point, pIndex) => (
                          <li key={pIndex} className="mt-2">
                            <strong>{point.point_Title ? `${point.point_Title}: ` : ""}</strong>
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
                <p className="mt-4 text-lg text-gray-900">{cont.description}</p>
                {cont.Topic.map((topic, tIndex) => (
                  <div key={tIndex} className="mt-6">
                    <h2 className="font-bold text-lg">{topic.title}</h2>
                    <p className="text-lg text-gray-700">{topic.description}</p>

                    {/* Checking if topic.points exist before mapping */}
                    {topic.points && topic.points.length > 0 && (
                      <ul className="mt-4 list-disc list-inside px-7">
                        {topic.points.map((point, pIndex) => (
                          <li key={pIndex} className="mt-2">
                            <strong>{point.point_Title ? `${point.point_Title}: ` : ""}</strong>
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
