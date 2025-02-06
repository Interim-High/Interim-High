import Form from "./form";
import Map from "./map";
import Offices from "./offices";
import Parking from "./parking";

export default function MainContact() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <Offices />
        <Form />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-10 md:mt-20">
        <Parking />
        <Map />
      </div>
    </div>
  );
}
