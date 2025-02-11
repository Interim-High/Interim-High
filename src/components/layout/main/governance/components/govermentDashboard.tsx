"use client";
import React, { useState } from "react";
import SideNav from "./sidenav";
import { Governance } from "@/types/admission.type";
import Card from "../../about/card";
import { Button, Modal } from "flowbite-react"
import { XIcon } from "lucide-react";

const governance: Governance = {
  Director: [
    {
      name: "Vijay Amrit Chaudary", images: "/images/governance/danphelink/vijay.jpg", designation: "Operational Head",
      description: "With over a decade of experience in the industry, he has played a crucial role in driving innovation and excellence. His expertise spans across multiple domains, including strategic leadership, project management, and mentorship. Having worked with diverse teams, he has a proven track record of fostering collaboration and delivering impactful results. Passionate about continuous learning, he frequently engages in professional development programs and shares his knowledge through seminars and workshops.",
      //skills:["Motion graphics", "photoshop", "multimedia"],
      email: "vijay@danphelink.com.np"
    },
  ],

  Advisor: [
    {
      name: "Dharti Bimali", images: "/images/governance/danphelink/dharti.png", designation: "career Counselor",
      description: "Dharti Bimali is a versatile professional who excels both as a seasoned Web Developer and a dedicated Career Counselor. With a strong background in project management, Dharti effectively oversees the development of web applications, ensuring they meet client requirements and industry standards. Her technical skills complement her ability to provide insightful career counseling to students, guiding them through their academic and professional journeys. Dharti’s empathetic approach and deep understanding of career pathways make her a trusted advisor for many. Her dual roles enable her to contribute significantly to both technical projects and students' personal growth.",
      skills: ["Motion graphics", "photoshop", "multimedia"],
      email: "dhartii@danphelink.com.np"
    },
    {
      name: "Aarya Dahal", images: "/images/governance/danphelink/aarya.jpg", designation: "Cyber Security Advisor/ Student Counselor",
      description: "Aarya Dahal is an esteemed Cyber Security Advisor with extensive expertise in safeguarding digital assets and protecting against cyber threats. Her deep knowledge in the field of cyber security makes her an invaluable resource for organizations looking to strengthen their security measures. In addition to her technical role, Aarya is also a dedicated Student Counselor, providing guidance and support to students as they navigate their academic journeys. Her ability to blend technical expertise with compassionate counseling ensures that students receive holistic support. Aarya’s dual focus on security and student well-being underscores her commitment to making a positive impact in both domains.",
      skills: ["Motion graphics", "photoshop", "multimedia"],
      email: "aarya@danphelink.com.np"
    },
  ],

  Faculty: [
    {
      name: "Rajat Dauli", images: "/images/governance/danphelink/rajat.jpg", designation: "Animation and VFX Artist",
      description: "The Founder and Creative Director of Fourth Dimension Visual Effects Pvt. Ltd. (4DVFX Studios) is a highly creative professional with over 22 years of experience in digital and VFX projects for Film and Television. He has completed VFX for over 100 films and notable TV projects, including major blockbusters from reputed production houses. He has also handled Television Commercials and Corporate Films for major brands across India. In addition to VFX, he produced the first 3D animated weekly series in eastern India, Jenie Jindabad,for Zee Bangla. His strong business acumen has established 4DVFX Studios as a leading name in the industry.",
      skills: ["Software Expertise as in Maya, Blender, and After Effects",
        " Motion Mastery",
        " 3D Modeling & Texturing",
        " Creative Vision"],
      email: "info@4dvfxacademy.com"
    },
    {
      name: "Suman Gauchan", images: "/images/governance/danphelink/suman.jpg", designation: "Full Stack Developer",
      description: "Mr. Suman Gauchan is an accomplished JavaScript Engineer with over 5 years of experience building scalable, high-performing applications. Having worked on projects in healthcare, remittance, and streaming services, he excels in frontend and backend technologies, including React, Angular, Node.js, and AWS. Known for his expertise in crafting user-friendly interfaces and managing complex workflows, he brings real-world insights to the classroom. Mr. Suman is dedicated to mentoring future developers by making advanced concepts simple and actionable.",
      skills: ["ReactJs",
        "Angular",
        "NodeJs",
        "AWS"],
      email: "sumangauchan@gmail.com"
    },
    {
      name: "Gaurav Devkota", images: "/images/governance/danphelink/gaurav.jpg", designation: "Graphics Design Expert",
      description: "Mr. Gaurav Devkota is a seasoned graphic design professional with over four years of experience in crafting impactful visuals that elevate brand identities. His expertise lies in logo design, typography, packaging, and creating cohesive visual identities. With a proven track record in designing and executing campaigns that amplify brand presence and engage audiences effectively, Mr. Gaurav is committed to delivering creative solutions that leave a lasting impression. With extensive experience spanning industries such as education, hospitality, and consultancy, Mr. Gaurav excels at transforming concepts into visually compelling designs that connect with audiences.",
      skills: ["Creativity and Visual Ideation",
        "Proficiency in Design Tools",
        "Typography and Color Theory",
        "Communication and Collaboration"],
      email: "gauravdevkota289@gmail.com"
    },
    {
      name: "Kiran Kumar Shah", images: "/images/governance/danphelink/kiran.jpg", designation: "CyberGuard Pro Expert",
      description: "Mr. Kiran Kumar Shah is a seasoned expert with 15+ years of experience in AML/CFT, cybersecurity, audit, and compliance. Holding certifications like CAMS, CISA, and CISSP, he has led initiatives such as goAML implementation and advanced transaction monitoring using data science. He is known for his engaging workshops and training, including sessions for the Asian Development Bank, Mr. Shah equips professionals with practical skills to excel in financial crime prevention and cybersecurity.",
      skills: ["Cybersecurity Expertise",
        "Incident Response",
        "Technical Proficiency",
        "Teaching and Mentoring",
        "Problem-Solving"],
      email: "kiran.shah.acca@gmail.com"
    },
    {
      name: "Karishma Khadka", images: "/images/governance/danphelink/karishma.jpg", designation: "UI / UX Designer | Instructor",
      description: "From designing experiences to teaching them—shaping the next generation of UI/UX designers.",
      // skills: ["Motion graphics", "photoshop", "multimedia"],
      email: "karishmakhadka7@gmail.com"
    },
  ],

  // Professionals: [
  //   {
  //     name: "Shankar Kumar Yadav", images: "/images/governance/danphelink/krishna.jpg", designation: "Lead Developer/Technical Operations Coordinator",
  //     description: "Shankar Yadav is a dynamic and skilled Full Stack Developer, leading the development team with a focus on creating seamless and functional web applications. His technical prowess spans both front-end and back-end development, ensuring that all aspects of a project integrate perfectly. As the Technical Operations Coordinator, Shankar is responsible for managing the technical aspects of operations, ensuring that all systems and processes run smoothly. His ability to troubleshoot and optimize technical workflows enhances the overall efficiency of the team. Shankar's dedication to staying updated with the latest technologies and best practices makes him a pivotal figure in delivering high-quality technical solutions.",
  //     // skills:["Motion graphics", "photoshop", "multimedia"],
  //     email: "kryss@danphelink.com.np"
  //   },
  //   {
  //     name: "Kusum Katwal", images: "/images/governance/danphelink/kusum.jpg", designation: "Frontend Developer",
  //     description: "Kusum Katwal is a forward-thinking front-end developer who excels at crafting dynamic, visually captivating, and highly responsive web interfaces. With proficiency in modern technologies such as HTML, CSS, JavaScript, SCSS, Tailwind, Bootstrap, and ReactJS, she transforms designs into engaging, functional user experiences. Kusum combines creativity with technical expertise, ensuring every element—from layout to interaction—is meticulously crafted for seamless use. Renowned for her attention to detail and quality, she consistently delivers sleek, scalable web solutions that shine in both aesthetics and performance. Passionate about staying on the cutting edge, she continually explores emerging technologies and trends to stay ahead in the rapidly changing landscape of web development.",
  //     //skills:["Motion graphics", "photoshop", "multimedia"],
  //     email: "kusumkatwal74@gmail.com"
  //   },
  //   {
  //     name: "Aastha Mishra", images: "/images/governance/danphelink/aastha.jpg", designation: "Frontend Developer",
  //     description: "Aastha Mishra is an innovative front-end developer with a sharp focus on creating dynamic, visually stunning, and highly responsive web interfaces. With expertise in cutting-edge technologies like HTML, CSS, JavaScript, SCSS, Tailwind, Bootstrap, and ReactJS, she brings designs to life with seamless functionality and user-centric experiences. Her approach marries creativity with technical prowess, ensuring every detail—from layout to interaction—is polished and intuitive. Known for her commitment to quality, Aastha consistently delivers sleek, scalable solutions that stand out in both design and performance. Driven by a passion for innovation, she’s always exploring new technologies and trends to stay ahead in the fast-evolving world of web development.",
  //     //skills:["Motion graphics", "photoshop", "multimedia"],
  //     email: "aasthamishra175@gmail.com"
  //   },
  //   {
  //     name: "Sushant Khanal", images: "/images/governance/danphelink/sushant.jpg", designation: "Graphic Designer",
  //     description: "Sushant Khanal is a creative and technically proficient Multimedia Specialist, known for his ability to enhance both visual and audio elements of projects. His work encompasses a wide array of multimedia production, including graphic design, video editing, and audio engineering. Sushant’s creative approach and technical skills bring a unique perspective to the team, allowing him to create compelling multimedia content that stands out. His commitment to excellence and innovation is reflected in the high-quality output of his projects. Sushant’s passion for multimedia arts drives him to continually push the boundaries of creativity and technology.",
  //     //skills:["Motion graphics", "photoshop", "multimedia"],
  //     email: " sushant@danphelink.com.np"
  //   },
  //   {
  //     name: "Irfan Hussain", images: "/images/governance/danphelink/irfan.jpg", designation: "Multimedia Specialist",
  //     description: "Irfan Hussain is a highly skilled Multimedia Specialist with a broad range of expertise spanning various media formats. His ability to produce high-quality content is evident in his meticulous approach to multimedia production. Irfan’s work includes creating visually appealing graphics, engaging videos, and interactive media that capture the audience's attention. His innovative techniques and a keen eye for detail ensure that every project he undertakes is of the highest standard. Irfan’s dedication to continuous learning and adapting to new media trends keeps his work fresh and relevant, making him a valuable asset in the ever-evolving field of multimedia.",
  //     // skills:["Motion graphics", "photoshop", "multimedia"],
  //     email: "irfan@danhpelink.com.np"
  //   }
  // ],
};

function Governancesection() {
  const [selectedPage, setSelectedPage] = useState("Director");
  const [selectedPerson, setSelectedPerson] = useState<{
    name: string;
    images: string;
    designation: string;
    description: string;
    skills?: string[];
    email: string;
  } | null>(null);
  const handleClick = (person: typeof governance.Director[0]) => {
    setSelectedPerson(person);
  };


  return (
    <div className="flex flex-row gap-4 justify-center p-6">
      <div className="h-fit bg-white py-4">
        <SideNav onSelect={setSelectedPage} />
      </div>
      <div className="h-fit w-full p-10">
        <h1 className="text-4xl text-orange-500 font-bold">{selectedPage}</h1>
        <div className="mt-4 w-fit rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10">
          {selectedPage === "Director" && (
            <>
              <h2 className="col-span-full text-xl font-base">
                Our Board Members are highly trained and professionally experienced individuals who oversee the overall functioning of the institution. Their collective commitment to qualitative higher education, academic excellence, and student achievement helps guide every student in realizing their full educational potential.
              </h2>
              {governance.Director.map((person, index) => (
                <div key={index}
                  className="border-2  border-white bg-[#EDEDED] p-2 rounded-2xl cursor-pointer hover:scale-[1.01]"
                  onClick={() => handleClick(person)}
                >
                  <Card
                    layout="governance"
                    personName={person.name}
                    images={person.images}
                    designation={person.designation}
                  />
                </div>
              ))}
            </>
          )}

          {selectedPage === "Advisor" && (
            <>
              <h2 className="col-span-full text-xl font-normal ">Our Advisors provide valuable guidance and expertise, ensuring we stay on track to achieve our goals while facing the challenges of a rapidly changing world.</h2>
              {governance.Advisor.map((person, index) => (
                <div key={index}
                  className="border-2  border-white bg-[#EDEDED] p-2 rounded-2xl cursor-pointer hover:scale-[1.01]"
                  onClick={() => handleClick(person)} >
                  <Card
                    layout="governance"
                    personName={person.name}
                    images={person.images}
                    designation={person.designation}
                  />
                </div>
              ))}
            </>
          )}

          {selectedPage === "Faculty" && (
            <>
              <div className="col-span-full space-y-4 text-xl font-normal leading-normal">
                <p>
                  Our Faculty is dedicated to delivering top-tier education, shaping the future of our students with their knowledge, innovation, and passion for teaching.
                </p>
                <p>
                  Our teachers frequently attend various types of training organized by foremost academic organizations, national or international, and frequently interact, formally or informally, with professionals from various parts of the world either in Nepal itself or sometimes by traveling abroad themselves.
                </p>
              </div>
              {governance.Faculty.map((person, index) => (
                <div key={index}
                  className="border-2  border-white bg-[#EDEDED] p-2 rounded-2xl cursor-pointer hover:scale-[1.01]"
                  onClick={() => handleClick(person)} >
                  <Card
                    layout="governance"
                    personName={person.name}
                    images={person.images}
                    designation={person.designation}
                    email={person.email}
                  />
                </div>
              ))}
            </>
          )}

          {/* {selectedPage === "Professionals" && (
            <>
              <h2 className="col-span-full text-xl font-normal ">Our Staff plays a critical role in supporting our day-to-day operations, providing the essential services that help students thrive both academically and personally.</h2>
              {governance.Professionals.map((person, index) => (
                <div key={index}
                  className="border-2  border-white bg-[#EDEDED] p-2 rounded-2xl cursor-pointer hover:scale-[1.01]"
                  onClick={() => handleClick(person)} >
                  <Card
                    layout="governance"
                    personName={person.name}
                    images={person.images}
                    designation={person.designation}
                    email={person.email}
                  />
                </div>
              ))}
            </>
          )} */}
        </div>
      </div>

      {selectedPerson && (

        <Modal dismissible show={!!selectedPerson} onClose={() => setSelectedPerson(null)} className="flex mx-auto mt-24 z-[9999]  justify-center items-center h-fit w-fit">

          <Modal.Body className="backdrop-blur-md rounded-2xl" >

            <XIcon onClick={() => setSelectedPerson(null)} className="text-red-700 float-end" />
            <Card
              className="flex flex-row rounded-2xl p-4 w-fit gap-4 backdrop-blur-xl"
              layout={"descriptionmodal"}
              description={selectedPerson.description}
              images={selectedPerson.images}
              designation={selectedPerson.designation}
              personName={selectedPerson.name}
              skill={selectedPerson.skills}
              email={selectedPerson.email}
            />
          </Modal.Body>
        </Modal>

      )}

    </div>


  );
}

export default Governancesection;
