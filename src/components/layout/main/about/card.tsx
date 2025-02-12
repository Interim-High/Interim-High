import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

type CardProps = {
  title?: string;
  personName?: string;
  className?: string;
  description?: string;
  layout?: "achievement" | "program" | "governance" | "descriptionmodal";
  images?: string;
  skill?: string[];
  email?: string;
  designation?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Card = ({
  title,
  personName,
  images,
  className,
  email,
  description,
  designation,
  skill,
  layout = "achievement",
  onClick,
}: CardProps) => {
  return (
    <div>
      {layout === "achievement" && (
        <div className=" border border-black flex flex-col items-center justify-center  bg-stone-300 rounded-xl  h-auto ">
          <div className="relative overflow-hidden rounded-t-lg">
            {images && (
              <Image
                src={images}
                alt={title || "Achievement Image"}
                layout="fill"
                className="object-cover"
              />
            )}
          </div>
          <div className="w-full gap-2 p-2">
            <h1 className="text-lg text-center font-semibold">{title}</h1>
            <p className="text-sm text-gray-600 text-justify break-words line-clamp-5">
              {description}
            </p>
          </div>
          <div className="rounded-xl w-full text-center bg-orange-400 p-2">
            <Link href="/achievement-detail">Learn More</Link>
          </div>
        </div>
      )}

      {layout === "governance" && (
        <div className="flex flex-col items-center bg-[#EDEDED] justify-center overflow-hidden w-fit h-fit rounded-2xl gap-3 p-3">
          <div className="relative  overflow-hidden rounded-lg">
            {images && (
              <Image
                src={images}
                alt={personName || "Governance Image"}
                width={500}
                height={320}
                className=""
              />
            )}
          </div>
          <div className="w-full text-center gap-2 p-2">
            <h1 className="text-lg font-semibold">{personName}</h1>
            <h2 className="text-lg font-semibold text-slate-700">
              {designation}
            </h2>
          </div>
        </div>
      )}

      {layout === "descriptionmodal" && (
        <div className={className}>
          <div className="relative  lg:my-auto overflow-hidden">
            {images && (
              <Image
                src={images}
                alt={personName || "Modal Image"}
                fill
                className="object-cover brightness-100 contrast-100 saturate-150"
              />
            )}
            <div className="absolute inset-0 bg-black opacity-15"></div>
          </div>

          <div className="flex flex-col w-[700px] gap-4 p-4">
            <button onClick={onClick} className="ml-auto">
              <XIcon />
            </button>

            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold">{personName}</h1>
              <p className="text-xl font-light text-[#1D1D1D]">{designation}</p>
            </div>

            <Link
              href={`mailto:${email}`}
              className="flex flex-row items-center w-fit gap-2"
            >
              <MailOutlineOutlinedIcon
                fontSize="large"
                className="rounded-lg"
              />
              <p className="text-xl text-red-500 font-normal text-center">
                {email}
              </p>
            </Link>

            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-3xl font-semibold text-[#1D1D1D]">
                Overview
              </h1>
              <p className="text-lg text-justify font-normal break-words">
                {description}
              </p>
            </div>

            {Array.isArray(skill) && skill.length > 0 && (
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">
                  Skills & Certifications
                </h1>
                <div className="flex flex-wrap gap-2">
                  {skill.map((s, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 w-fit text-center p-2 px-4 rounded-3xl"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;
