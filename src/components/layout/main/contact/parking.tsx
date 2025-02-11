import { CheckCheck } from "lucide-react";

export default function Parking(){
    return(
        <div className="p-6 rounded-lg shadow-md w-fit h-fit">
        <h2 className="text-xl text-center font-semibold text-orange-600 mb-4">
          Parking Facilities Available
        </h2>

        <p className="text-gray-800">
          We provide secure and convenient parking facilities for our
          partners. Enjoy hassle-free parking at designated areas.
        </p>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">Features:</h3>
          <ul className="mt-2 space-y-2">
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
        <p className="mt-4 text-gray-800">
          Our parking areas are designed to provide convenience and safety.
          Feel free to park your vehicle while you work with us!
        </p>
      </div>

    )
}