import Image from "next/image";

interface BodyEventProps {
  title: string;
  description: string;
  imageSrc: string;
  isReverse?: boolean;
}

function BodyEvent({
  title,
  description,
  imageSrc,
  isReverse = false,
}: BodyEventProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-auto xl:max-w-7xl md:max-w-4xl items-center justify-center p-10 xl:py-10">
      {isReverse ? (
        <>
          <div>
            <Image src={imageSrc} alt="event" width={614} height={414} />
          </div>
          <div className="space-y-4 p-2 md:order-1 order-2">
            <h1 className="text-orange-600 text-4xl">{title}</h1>
            <p className="text-justify leading-relaxed text-gray-800 text-base">
              {description}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="order-1 md:order-2">
            <Image src={imageSrc} alt="event" width={614} height={414} />
          </div>

          <div className="space-y-4 p-2 order-2 md:order-1">
            <h1 className="text-orange-600 text-4xl">{title}</h1>
            <p className="text-justify leading-relaxed text-gray-800 text-base">
              {description}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default BodyEvent;
