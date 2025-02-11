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
                description="Our Winter Carnival Fest is an exciting celebration of creativity, culture, and fun. The event features thrilling competitions, interactive workshops, live performances, and games that bring students together to showcase their talents. It’s a perfect blend of learning, entertainment, and community spirit, providing an unforgettable experience for everyone involved."
                imageSrc="/images/events/events/Carnival.png"
                isReverse = {true}

            />

            <BodyEvent
                title="Insight into Coding profession"
                description="Our 'Insight into Coding Profession' session provided students with an in-depth look at the coding industry, guided by an expert instructor from Leapfrog. The session covered key trends, skills in demand, and career paths in coding, offering valuable insights into the rapidly evolving tech world. Students had the opportunity to interact with the instructor, ask questions, and gain real-world advice on how to build a successful career in coding."
                imageSrc="/images/events/events/Insight.png"
            />

            <BodyEvent
                title="Seminar on CG + 3D asset Creation"
                description="Our seminar on CG and 3D Asset Creation delved into the world of digital art and design, offering students a comprehensive understanding of the tools and techniques used in creating stunning 3D assets. Led by industry experts, the seminar covered everything from the basics of computer graphics to advanced modeling and rendering techniques. Students had the chance to explore practical applications of 3D design in gaming, animation, and visual effects, equipping them with the skills needed to excel in the creative industry."
                imageSrc="/images/events/events/Seminar.png"
                isReverse = {true}
            />

            <BodyEvent
                title="Academic Evaluation"
                description="Our Academic Evaluation process is designed to assess students' understanding, progress, and overall performance throughout their courses. It includes a combination of assignments, projects, exams, and presentations, ensuring a well-rounded approach to evaluating both theoretical knowledge and practical skills. This comprehensive evaluation system helps students identify their strengths and areas for improvement, providing valuable feedback to guide their academic growth and career development."
                imageSrc="/images/events/events/Academic.png"
            />

            <BodyEvent
                title="CyberSecurity Workshop"
                description="Our Cybersecurity Workshop provided students with hands-on experience and in-depth knowledge of digital security practices, ethical hacking, and the latest cybersecurity trends. Led by experts in the field, the workshop covered topics such as network security, data protection, and vulnerability assessment. Participants gained practical skills through real-world simulations, preparing them for a successful career in cybersecurity and empowering them to protect against evolving digital threats."
                imageSrc="/images/events/events/Workshop.png"
                isReverse = {true}
            />
            <Footer/>
        </div>
    )
}
export default EventPage;