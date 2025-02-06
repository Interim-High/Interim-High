import { MapPin, Phone, Mail } from "lucide-react";

export default function Offices() {
  return (
    <main className=" flex flex-col items-center max-w-2xl w-full mx-auto px-4 py-8 ">
      <h1 className="text-orange-600 text-center font-semibold text-4xl">
        Our Office
      </h1>
      <p className="text-center mb-8 text-gray-600">
        We are here to help and answer any questions you might have. We look
        forward to hearing from you soon.
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-between">
        {/* Main Office */}
        <div className="flex flex-col space-y-4 p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold">Main Office</h2>
          <div className="flex items-center gap-6">
            <MapPin className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 text-gray-700" />
            <p className="max-w-md text-wrap">
              2nd Floor, RemWork Kamalpokhari 01, Kathmandu, Nepal
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 text-gray-700" />
            <p>
              <a href="tel:+9779865326884" className="text-black hover:underline">
                +977 9707861393
              </a> <br></br>
              <a href="tel:+9779865326884" className="text-black hover:underline">
                +977 9707861394
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
          <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 text-gray-700" />
          <p>
              <a href="mailto:info@DanpheLink.com" className="text-black hover:underline">
                info@DanpheLink.com
              </a>
              <br />
              <a href="mailto:support@DanpheLink.com" className="text-black hover:underline">
                support@DanpheLink.com
              </a>
            </p>
          </div>
        </div>

        {/* Branch Office */}
        <div className="flex flex-col space-y-4 p-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold">Branch Office</h2>
          <div className="flex items-center gap-6">
            <MapPin className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 text-gray-700" />
            <p className="max-w-md text-wrap">
              AI Aryam Tower, AI Meena St, AI Zahiyah, Abu Dhabi, UAE
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 text-gray-700" />
            <p>
              <a href="tel:+971508765432" className="text-black hover:underline">
                +971 026228107
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 text-gray-700" />
            <p>
              <a href="mailto:training@arrownet.com" className="text-black hover:underline">
                training@arrownet.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
