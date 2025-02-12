import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Head from "./Head";

const QUICK_LINKS = [
  "Programs",
  "Events",
  "News & Updates",
  "Gallery",
  "Policy",
];

const GET_TO_KNOW = [
  "About",
  "Admission",
  "Partner",
  "Facilities",
  "Terms and Condition",
];

const SocialIcon = ({
  IconComponent,
}: {
  IconComponent: React.ElementType;
}) => <IconComponent className="text-gray-500 w-6 h-6" />;

const ContactItem = ({
  Icon,
  text,
  isLink = false,
  href,
}: {
  Icon: React.ElementType;
  text: string;
  isLink?: boolean;
  href?: string;
}) => (
  <div className="flex items-center gap-6 py-2">
    <Icon className="text-gray-500" />
    <p className="max-w-md text-gray-500">
      {isLink ? (
        <a href={href} className="text-gray-500 hover:underline">
          {text}
        </a>
      ) : (
        text
      )}
    </p>
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

          <ContactItem Icon={MapPin} text="Kamalpokhari, Kathmandu, Nepal" />

          <ContactItem
            Icon={Phone}
            text="+977 9707861393"
            isLink
            href="tel:+9779707861393"
          />
          <ContactItem
            Icon={Phone}
            text="+977 9707861394"
            isLink
            href="tel:+9779707861394"
          />

          <ContactItem
            Icon={Mail}
            text="info@DanpheLink.com"
            isLink
            href="mailto:info@DanpheLink.com"
          />
          <ContactItem
            Icon={Mail}
            text="support@DanpheLink.com"
            isLink
            href="mailto:support@DanpheLink.com"
          />

          <div className="flex justify-between pr-5 pt-4">
            <SocialIcon IconComponent={LinkedIn} />
            <SocialIcon IconComponent={YouTube} />
            <SocialIcon IconComponent={Facebook} />
            <SocialIcon IconComponent={Instagram} />
          </div>
        </div>
      </div>
    </main>
  );
}
