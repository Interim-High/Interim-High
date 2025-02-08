import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { Mail,MapPin, Phone, Youtube } from "lucide-react";
import Link from "next/link";

const QuickLinks: string[] = ["Programs", "Events", "News", "Gallary","Policy"];
const GetToknow: string[] = [
  "About",
  "Admission",
  "Partner",
  "Facilities",
  "Student Handbook",
  "Terms and Condition",
];
export default function QuickLink() {
  return (
    <main className="flex flex-row gap-40 justify-center p-8  bg-red-900">
      <div className="space-y-4">
        <h1 className="text-white font-semibold">Quick Links</h1>
        <ul className="flex flex-col space-y-2">
          {QuickLinks.map((quicklink) => (
            <Link
              key={quicklink}
              href={`${quicklink
                .toLowerCase()
              }`}
              className=" text-white font-medium hover:underline"
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
                    className="text-white font-medium hover:underline"
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
            <MapPin className="text-white" />
            <p className="max-w-md text-white">
              2nd Floor, Rem Work Kamalpokhari 01,
              Kathmandu, Nepal
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Phone className="text-white" />
            <p className="max-w-md text-white text-wrap">
              <a href="tel:+9779865326884" className="text-white hover:underline">
                +977 9707861393
              </a> <br></br>
              <a href="tel:+9779865326884" className="text-white hover:underline">
                +977 9707861394
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
          <Mail className="text-white" />
          <p className="max-w-md text-white text-wrap">
              <a href="mailto:info@DanpheLink.com" className="text-white hover:underline">
                info@DanpheLink.com
              </a>
              <br />
              <a href="mailto:support@DanpheLink.com" className="text-white hover:underline">
                support@DanpheLink.com
              </a>
            </p>
          </div>
          <div className="flex flex-row space-x-5">
          <LinkedIn className="text-white w-6 h-6"/>
          <YouTube className="text-white w-6 h-6"/>
          <Facebook className="text-white w-6 h-6"/>
          <Instagram className="text-white w-6 h-6"/>
          </div>
      </div>

    </main>
  );
}
