import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Head from "./Head";

const QUICK_LINKS = [
  "Programs",
  "Events",
  "News & Updates",
  // "Gallery",
  "Policy",
];

const GET_TO_KNOW = [
  "About",
  "Admission",
  "Achievements",
  "Partner",
  "Teams",
  // "Terms and Condition",
];

const SocialIcon = ({
  IconComponent,
  color = "000000",
}: {
  IconComponent: React.ElementType;
  color?: string;
}) => (
  <IconComponent
    className="text-gray-500 w-6 h-6"
    style={{
      borderColor: `#${color}`,
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e:React.MouseEvent<HTMLElement>) => {
      // e.currentTarget.style.borderColor = `#${color}`;
      e.currentTarget.style.color = `#${color}`;
    }}
    onMouseLeave={(e:React.MouseEvent<HTMLElement>) => {
      // e.currentTarget.style.borderColor = "gray";
      e.currentTarget.style.color = "gray";
    }}
  />
);


// const ContactItem = ({
//   Icon,
//   text,
//   isLink = false,
//   href,
// }: {
//   Icon: React.ElementType;
//   text: string;
//   isLink?: boolean;
//   href?: string;
// }) => (
//   <div className="flex items-center gap-6 py-2">
//     <Icon className="text-gray-500" />
//     <p className="max-w-md text-gray-500">
//       {isLink ? (
//         <a href={href} className="text-gray-500 hover:underline">
//           {text}
//         </a>
//       ) : (
//         text
//       )}
//     </p>
//   </div>
// );

const ContactItem = ({
  Icon,
  texts,
  isLink = false,
  hrefs,
}: {
  Icon: React.ElementType;
  texts: string[];
  isLink?: boolean;
  hrefs?: string[];
}) => (
  <div className="flex items-start gap-4 py-2 ">
   <div className="row-span-2 flex items-center">
      <Icon className="text-gray-500 w-6 h-6x my-1" />
    </div>
    <div className="flex flex-col h-fit my-1">
      {texts.map((text, index) =>
        isLink && hrefs ? (
          <Link
            key={index}
            href={hrefs[index]}
            className="text-gray-500 hover:underline"
          >
            {text}
          </Link>
        ) : (
          <p key={index} className="text-gray-500">
            {text}
          </p>
        )
      )}
    </div>
  </div>
);

const QuickLinkSection = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div className="">
    <h1 className="text-black font-semibold text-2xl py-1">{title}</h1>
    <ul className="flex flex-col space-y-2">
      {items.map((item) => (
        <Link
          key={item}
          href={`/${item.toLowerCase().replace(/ & /, "").replace(/ /g, "-")}`}
          className="text-gray-500 font-medium hover:underline "
        >
          {item}
        </Link>
      ))}
    </ul>
  </div>
);

export default function QuickLink() {
  
  return (
    // <main className="bg-red-900 px-8" >
    // <Head/>
    // <div className="flex xl:flex-row md:flex-row xl:gap-96 flex-col gap-20 justify-center p-4">
    //   <div className="space-y-4">
    //   <div className="space-y-4">
    //     <h1 className="text-white font-semibold">Quick Links</h1>
    //     <ul className="flex flex-col space-y-2">
    //       {QuickLinks.map((quicklink) => (
    //         <Link
    //           key={quicklink}
    //           href={`${quicklink
    //             .toLowerCase()
    //             .replace(/ & /, "")
    //           }`}
    //           className=" text-gray-300 font-medium hover:underline"
    //         >
    //           {quicklink}
    //         </Link>
    //       ))}
    //     </ul>
    //   </div>
    //   <div className="space-y-4">
    //     <h1 className="text-white font-semibold">Get to Know us</h1>
    //     <ul className="flex flex-col space-y-2">
    //         {
    //             GetToknow.map((know) =>(
    //                 <Link
    //                 <Link
    //                 key={know}
    //                 href={`${know
    //                   .toLowerCase()
    //                   .replace(/ /g,"-")
    //                 }`}
    //                 className="text-gray-300 font-medium hover:underline"
    //                 >
    //                     {know}
    //                 </Link>
    //             ))
    //         }
    //     </ul>
    //   </div>
    //   <div className="space-y-4">
    //     <h1 className="text-white font-semibold">
    //       Contact us
    //     </h1>
    //     <div className="flex items-center gap-6">
    //         <MapPin className="text-gray-300" />
    //         <p className="max-w-md text-gray-300">
    //           Kamalpokhari, Kathmandu, Nepal
    //         </p>
    //       </div>
    //       <div className="flex items-center gap-6">
    //         <Phone className="text-gray-300" />
    //         <p className="max-w-md text-white text-wrap">
    //           <Link href="tel:+9779865326884" className="text-gray-300 hover:underline">
    //             +977 9707861393
    //           </Link> <br></br>
    //           <Link href="tel:+9779865326884" className="text-gray-300 hover:underline">
    //             +977 9707861394
    //           </Link>
    //         </p>
    //       </div>
    //       <div className="flex items-center gap-6">
    //       <Mail className="text-gray-300" />
    //       <p className="max-w-md text-white text-wrap">
    //           <Link href="mailto:info@DanpheLink.com" className="text-gray-300 hover:underline">
    //             info@DanpheLink.com
    //           </Link>
    //           <br />
    //           <a href="mailto:support@DanpheLink.com" className="text-gray-300 hover:underline">
    //             support@DanpheLink.com
    //           </a>
    //         </p>
    //       </div>
    //       <div className="flex flex-row space-x-5">
    //       <LinkedIn className="text-gray-300 w-6 h-6"/>
    //       <YouTube className="text-gray-300 w-6 h-6"/>
    //       <Facebook className="text-gray-300 w-6 h-6"/>
    //       <Instagram className="text-gray-300 w-6 h-6"/>
    <main
      className="px-28 bg-gradient-to-tl from-[#D1D5DB ] to-[#FED7AA] text-white py-16 rounded-t-[50px] "
      style={{
        boxShadow:
          "0 -10px 15px -3px rgba(254, 215, 170, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Head />

      <div className="flex xl:flex-row md:flex-row flex-col gap-12 justify-between p-4 flex-wrap">
        <QuickLinkSection title="Quick Links" items={QUICK_LINKS} />

        <QuickLinkSection title="Get to Know Us" items={GET_TO_KNOW} />

        <div>
          <h1 className="text-2xl font-semibold text-black">Contact Us</h1>

          <ContactItem Icon={MapPin} texts = {["Kamalpokhari, Kathmandu, Nepal"]} />

          <ContactItem
            Icon={Phone}
            texts={["+977 9707861393", "+977 9707861394"]}
            isLink
            hrefs={["tel:+9779707861393", "tel:+9779707861394"]}
          />

          <ContactItem
            Icon={Mail}
            texts={["info@DanpheLink.com.np", "support@DanpheLink.com.np"]}
            isLink
            hrefs={[
              "mailto:info@DanpheLink.com.np",
              "mailto:support@DanpheLink.com.np",
            ]}
          />

          <div className="flex justify-between pr-5 pt-4">
         <Link href={"https://www.youtube.com/@Danphelink-o7s"}> <SocialIcon  IconComponent={LinkedIn} color="0077b5" /></Link> 
         <Link href={"https://www.linkedin.com/company/danphelink"}><SocialIcon IconComponent={YouTube} color="FF0000" /></Link> 
         <Link href={"https://www.facebook.com/danphelink"}><SocialIcon IconComponent={Facebook} color="1877F2" /></Link> 
         <Link href={"https://www.instagram.com/danphelink"}><SocialIcon IconComponent={Instagram} color="E1306C" /></Link> 
          </div>
        </div>
      </div>
    </main>
  );
}
