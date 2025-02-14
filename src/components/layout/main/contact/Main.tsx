import Form from "./form";
import Map from "./map";
import Offices from "./offices";
import Parking from "./parking";

export default function MainContact() {
  return (
    <div className="mx-auto mt-16 mb-16 w-full">
      <div className="flex flex-col md:flex-row justify-center md:p-10 gap-4 md:gap-20">
        <Form/>
        <div className="flex flex-col gap-2 ">
        <Map/>
        <Offices/>

        </div>
      </div>
        <Parking />
      
    </div>
  );
}
