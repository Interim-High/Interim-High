"use client";
import { useState } from "react";

function Policies() {
    type PolicyKey = "Privacy Policies" | "Technological Policies" | "Academic Integrity Policies" | "Student Handbook" | "Terms and Conditions";

    const [selectedPolicy, setSelectedPolicy] = useState<PolicyKey>("Privacy Policies");

    const policies: Record<PolicyKey, string> = {
        "Privacy Policies": "Privacy policy content ..",
        "Technological Policies": "Technological policy content ..",
        "Academic Integrity Policies": "Academic integrity content ...",
        "Student Handbook": "Student handbook content ...",
        "Terms and Conditions": "Terms and conditions content ..."
    };

    return (
        <div className="flex">
            <aside className="fixed left-0  z-40 w-64 h-full bg-gray-800 text-white shadow-lg">
                <div className="px-3 py-4 overflow-y-auto">
                    <h2 className="text-2xl text-center font-semibold mb-4">Policies</h2>
                    <ul className="space-y-2">
                        {Object.keys(policies).map((policy) => (
                            <li key={policy}>
                                <button
                                    className={`block p-3 rounded-md w-full text-left hover:bg-gray-700 transition ${
                                        selectedPolicy === policy ? "bg-gray-700" : ""
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

            <main className="flex-1 ml-64 p-8">
                <h1 className="text-5xl font-semibold text-center">{selectedPolicy}</h1>
                <p className="mt-6 text-lg text-gray-700">
                    {policies[selectedPolicy]}
                </p>
            </main>
        </div>
    );
}

export default Policies;