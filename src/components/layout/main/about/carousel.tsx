import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from './card';

type GovernanceBody = {
    header: string;
    PersonCard: {
        name: string;
        role: string;
        image: string;
    }[];
};

const governanceSections: GovernanceBody[] = [
    {
        header: "Board of Directors",
        PersonCard: [
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            },
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            },
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            },
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            },
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            }
        ]
    },
    {
        header: "Advisor",
        PersonCard: [
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            },
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            },
            {
                name: "Mr. Sanjoy Bardhan",
                role: "Chairperson",
                image: "/images/about/bills.jpg"
            }
        ]
    },
];
const SliderComponent: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-full h-fit p-4">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1} 
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="w-full max-w-4xl mx-auto"
            >
                {governanceSections.map((section, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col justify-center items-center w-full h-fit">
                            <h2 className="text-xl font-bold mb-4 text-center">{section.header}</h2>
                            
                            <div className="flex flex-row gap-3 p-2 w-fit max-h-[340px] border border-red-500">
                                {section.PersonCard.map((person, personIndex) => (
                                    <Card
                                        key={personIndex}
                                        layout="governance"
                                        images={person.image}
                                        personName={person.name}
                                        designation={person.role}
                                    />
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderComponent;
