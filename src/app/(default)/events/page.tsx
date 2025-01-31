import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BodyEvent from "@/components/layout/main/event/body";
import HeroSection from "@/components/layout/main/event/Hero";

function EventPage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <BodyEvent
                title="Winter Carnival Fest"
                description="At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning.
                At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning.
                At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning."
                imageSrc="/images/events/events/Carnival.png"
                isReverse = {true}

            />

            <BodyEvent
                title="Insight into Coding profession"
                description="At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning.
                At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning.
                At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning."
                imageSrc="/images/events/events/Insight.png"
            />

            <BodyEvent
                title="Seminar on CG + 3D asset Creation"
                description="At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning.
                At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning.
                At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning."
                imageSrc="/images/events/events/Seminar.png"
                isReverse = {true}
            />

            <BodyEvent
                title="Academic Evaluation"
                description="At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning.
                At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning.
                At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning."
                imageSrc="/images/events/events/Academic.png"
            />

            <BodyEvent
                title="CyberSecurity Workshop"
                description="At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning.
                At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning.
                At our college, we offer workshops for hands-on skill development, seminars and guest lectures by industry experts, and hackathons that challenge students to solve real-world problems, fostering innovation and practical learning."
                imageSrc="/images/events/events/Workshop.png"
                isReverse = {true}
            />
            <Footer/>
        </div>
    )
}
export default EventPage;