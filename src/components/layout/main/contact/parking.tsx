import { CheckCheck } from "lucide-react";

export default function Parking(){
    return(
        <div className="p-6 rounded-lg mx-auto shadow-md w-fit h-fit">
        <h2 className="text-4xl text-center font-semibold text-orange-600 mb-4">
         Parking  <span className="text-[#164561] ">Facilities </span>Available
        </h2>

        <p className="text-xl text-gray-800">
          We provide secure and convenient parking facilities for our
          partners. Enjoy hassle-free parking at designated areas.
        </p>

        <div className="mt-4">
          <h3 className="text-xl font-medium text-gray-800">Features:</h3>
          <ul className="mt-2 text-lg space-y-2">
            <li className="flex items-center">
              <CheckCheck className="text-green-500"/>
              <span className="ml-2">Dedicated Parking Spaces</span>
            </li>
            <li className="flex items-center">
            <CheckCheck className="text-green-500"/>
              <span className="ml-2">24/7 Security Monitoring</span>
            </li>
            <li className="flex items-center">
            <CheckCheck className="text-green-500"/>
              <span className="ml-2">Easy Access Near Bus Stops</span>
            </li>
            <li className="flex items-center">
            <CheckCheck className="text-green-500"/>
              <span className="ml-2">Well-Maintained Parking Areas</span>
            </li>
          </ul>
        </div>
        <p className="mt-4 text-xl text-gray-800">
          Our parking areas are designed to provide convenience and safety.
          Feel free to park your vehicle while you work with us!
        </p>
      </div>

    )
}