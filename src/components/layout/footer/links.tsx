import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { Mail,MapPin, Phone, Youtube } from "lucide-react";
import Link from "next/link";
import Head from "./Head";

const QuickLinks: string[] = ["Programs", "Events", "News & Updates", "Gallary","Policy"];
const GetToknow: string[] = [
  "About",
  "Admission",
  "Partner",
  "Facilities",
  "Terms and Condition",
];
export default function QuickLink() {
  return (
    <main className="bg-red-900 px-8" >
    <Head/>
    <div className="flex flex-row gap-96 justify-center p-4">
      <div className="space-y-4">
        <h1 className="text-white font-semibold">Quick Links</h1>
        <ul className="flex flex-col space-y-2">
          {QuickLinks.map((quicklink) => (
            <Link
              key={quicklink}
              href={`${quicklink
                .toLowerCase()
                .replace(/ & /, "")
              }`}
              className=" text-gray-300 font-medium hover:underline"
            >
              {quicklink}
            </Link>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <h1 className="text-white font-semibold">Get to Know us</h1>
        <ul className="flex flex-col space-y-2">
            {
                GetToknow.map((know) =>(
                    <Link 
                    key={know}
                    href={`${know
                      .toLowerCase()
                      .replace(/ /g,"-")
                    }`}
                    className="text-gray-300 font-medium hover:underline"
                    >
                        {know}
                    </Link>
                ))
            }
        </ul>
      </div>
      <div className="space-y-4">
        <h1 className="text-white font-semibold">
          Contact us
        </h1>
        <div className="flex items-center gap-6">
            <MapPin className="text-gray-300" />
            <p className="max-w-md text-gray-300">
              Kamalpokhari, Kathmandu, Nepal
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Phone className="text-gray-300" />
            <p className="max-w-md text-white text-wrap">
              <a href="tel:+9779865326884" className="text-gray-300 hover:underline">
                +977 9707861393
              </a> <br></br>
              <a href="tel:+9779865326884" className="text-gray-300 hover:underline">
                +977 9707861394
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
          <Mail className="text-gray-300" />
          <p className="max-w-md text-white text-wrap">
              <a href="mailto:info@DanpheLink.com" className="text-gray-300 hover:underline">
                info@DanpheLink.com
              </a>
              <br />
              <a href="mailto:support@DanpheLink.com" className="text-gray-300 hover:underline">
                support@DanpheLink.com
              </a>
            </p>
          </div>
          <div className="flex flex-row space-x-5">
          <LinkedIn className="text-gray-300 w-6 h-6"/>
          <YouTube className="text-gray-300 w-6 h-6"/>
          <Facebook className="text-gray-300 w-6 h-6"/>
          <Instagram className="text-gray-300 w-6 h-6"/>
          </div>
      </div>

    </div>
    </main>
  );
}
