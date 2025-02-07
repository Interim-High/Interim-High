import Image from "next/image";

interface BodyEventProps {
  title: string;
  description: string;
  imageSrc: string;
  isReverse?: boolean;
}

function BodyEvent({ title, description, imageSrc, isReverse = false }: BodyEventProps) {
  return (
    <div className={`grid grid-cols-2 gap-6 m-auto mt-20 w-[1240px] items-center justify-center p-10 xl:p-2`}>
      {isReverse ? (
        <>
          <div>
            <Image src={imageSrc} alt="event" width={614} height={414} />
          </div>
          <div className="space-y-4 ml-10 p-2">
            <h1 className="text-orange-600 text-4xl">{title}</h1>
            <p className="text-justify leading-relaxed text-gray-800 text-base">{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 mr-10 p-2">
            <h1 className="text-orange-600 text-4xl">{title}</h1>
            <p className="text-justify leading-relaxed text-gray-800 text-base">{description}</p>
          </div>
          <div>
            <Image src={imageSrc} alt="event" width={614} height={414} />
          </div>
        </>
      )}
    </div>
  );
}

export default BodyEvent;
