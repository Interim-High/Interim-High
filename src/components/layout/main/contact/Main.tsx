import Form from "./form";
import Map from "./map";
import Offices from "./offices";
import Parking from "./parking";

export default function MainContact() {
  return (
    <div className="flex flex-col gap-10 mx-auto mt-16 mb-20 w-full">
      <div className="space-y-5">

     
      <div className="space-y-3">
        <h1 className="text-4xl text-orange-600 font-semibold text-center">
          Get in <span className="text-[#164561] ">Touch</span>
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-600">
          Start the Conversation, We’re Here for You!
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:p-10 gap-4 md:gap-20">

        <Form />
        <div className="flex flex-col gap-2">
          <Map />
          <Offices />

        </div>
        </div>
      </div>
      <Parking />

    </div>
  );
}
