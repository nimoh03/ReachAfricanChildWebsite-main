import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Modal } from "antd";
import "tooltipster/dist/css/tooltipster.bundle.min.css"; // Import the CSS
import { ArrowRightOutlined } from "@ant-design/icons";
import treeIcon from "../assets/download.png";
import Image9 from "../assets/slider/Img9.png";
import handsimg from "../assets/mission.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";
import Founded from "../assets/Anani.jpg";
import { useSpring, animated } from "react-spring";
import Badaki from "../assets/Team/Badaki.jpg";
import Musa1 from "../assets/Team/Musa1.jpg";
import Oluwafemi from "../assets/Team/Oluwafemi.jpg";
import Oluwaseyi from "../assets/Team/Oluwaseyi.jpg";

import {
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled,
  InstagramFilled,
} from "@ant-design/icons";
const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTab, setActiveTab] = useState(1);

  const options = {
    // Define hover options
    hover: true,
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);

    switch (tabNumber) {
      case 1:
        setZoomLevel(1);
        break;
      case 2:
        setZoomLevel(1.4);
        break;
      case 3:
        setZoomLevel(1.7);
        break;
      default:
        setZoomLevel(0);
    }
  };

  const [isHovered, setIsHovered] = useState(false);
  const iconSpring = useSpring({
    opacity: isHovered ? 1 : 0,
    config: { duration: 300 },
  });

  return (
    <div>
      <div className="bg-black text-white font-sans">
        <div className="hero-section text-center py-32">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <div className="flex justify-center items-center">
            <NavLink to="/" className="text-white no-underline hover:underline">
              Home
            </NavLink>
            <div className="w-2 h-2 bg-red-500 rounded-full mx-4"></div>
            <NavLink
              to="/about"
              className="text-white no-underline hover:underline"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 px-4 my-10 items-center">
        <div className="col-span-1 sm:px-5 w-full lg:w-5/6 lg:px-1 ms-auto">
          <small className=" text-red-700 font-bold flex gap-1 my-3">
            <img src={treeIcon} style={{ width: 20 }} /> <span>About Us</span>
          </small>
          <p className="about text-4xl text-custom-50 my-3">
            An International Independent Charity Organization
          </p>
          <p className="my-3 text-custom-100 font-semibold text-base">
            RACEEI is driven to serve and represent populations whose voices are
            least likely to be heard when policies are made and resources are
            allocated especially with respect to Quality Education.
          </p>
          <p className="text-sm text-custom-50">
            RACEEI as a Non-Government Organization focuses on bridging the
            illiteracy, gender, skills (hard and soft) – and (consequently), the
            employability gap existing in: marginalized and vulnerable
            populations, deeply rural communities, slums, villages, camps of the
            Internally Displaced Persons, remand homes, and semi urban settings.
            The organization is strongly committed to actualizing the
            Sustainable Development Goals 4 (Quality Education), 5 (Gender
            Equality), and 8 (Economic Empowerment) through its various
            intervention schemes, research, and policy. Through one of its major
            subdomains, Project ‘Quality Education for All’, RACEEI currently
            has a strong presence in the Northeast of Nigeria, especially its
            villages, camps for internally displaced persons, and underserved
            schools.
          </p>
        </div>
        <div className="col-span-1 md:px-5 w-4/5 mx-auto">
          <img
            src={Image9}
            alt="image"
            className="rounded-xl md:w-4/5 mx-auto lg:w-4/5"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-2 md:p-8 bg-cream items-center">
        <div className="md:w-1/2 overflow-hidden transition-transform duration-300 ease-in transform scale-0 md:scale-100 hidden md:block">
          <img
            className="w-full transition-transform duration-300 ease-in"
            src={handsimg}
            alt="Your Image"
            style={{ transform: `scale(${zoomLevel})` }}
          />
        </div>

        <div className="md:w-1/2 flex flex-col px-2 md:px-5">
          <h2 className="mt-20 text-custom-100 font-semibold flex gap-1">
            <FontAwesomeIcon icon={faBullseye} style={{ color: "#dd0808" }} />
            <span>Our Mission</span>
          </h2>
          <h2 className=" about text-4xl my-3">Concern About Our Mission</h2>
          <div className="flex space-x-4">
            <div
              className={`tab ${
                activeTab === 1 ? "text-red-500 font-semibold" : "text-black"
              }`}
              onClick={() => handleTabClick(1)}
            >
              Our Mission
            </div>
            <div
              className={`tab ${
                activeTab === 2 ? "text-red-500 font-semibold" : "text-black"
              }`}
              onClick={() => handleTabClick(2)}
            >
              Our Vision
            </div>
            <div
              className={`tab ${
                activeTab === 3 ? "text-red-500 font-semibold" : "text-black"
              }`}
              onClick={() => handleTabClick(3)}
            >
              Our Goal
            </div>
          </div>

          <div className="mt-4 h-max">
            {activeTab === 1 && (
              <div>
                <p className="font-semibold text-sm">
                  The mission of RACEEI is to make education more inclusive,
                  accessible, relevant, and transformative (for both students
                  and teachers) through training, support, and research;
                  empowering every child with the tools of formal and non-formal
                  education to the end that each child and teacher may be
                  prepared to face the future with the confidence that comes
                  with knowledge, skills, and values for a sustainable future.
                </p>
                <button className="rounded-full bg-red-800 text-white px-10 py-2.5 flex gap-1 items-center my-3">
                  <span>Donate Now</span>
                  <ArrowRightOutlined />
                </button>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <p className="font-semibold text-sm">
                  RACEEI envisions a world where every child, especially the
                  girl child, can discover and maximize potential towards
                  self-actualization and economic viability – and in turn give
                  back to their communities. RACEEIplans to achieve this vision
                  through a painstaking pursuit of these objectives: All
                  children are essentially literate | have equal access to
                  quality learning opportunities | achieve economic and social
                  independence for every child through education | empower every
                  girl child for future relevance through education | sustain
                  good practices towards self and the environment
                </p>
                <button className="rounded-full bg-red-800 text-white px-10 py-2.5 flex gap-1 items-center my-3">
                  <span>Donate Now</span>
                  <ArrowRightOutlined />
                </button>
              </div>
            )}
            {activeTab === 3 && (
              <div>
                <p className="font-semibold text-sm">
                  Our goal is to empower over ten million (10 000 000) children
                  with the necessary tool kit of education in its formal,
                  non-formal forms by the year 2035. The Drive RACEEI is driven
                  to serve and represent populations whose voices are least
                  likely to be heard when policies are made and resources are
                  allocated especially with respect to Quality Education. RACEEI
                  therefore wants to contribute to helping first, the girl
                  child; and the poor and vulnerable who live in the rural and
                  impoverished metropolitan areas gain access to quality
                  education and sustainable lifestyles that lead to improved and
                  functional literacy, economic empowerment, a safer and
                  sustainable environment, cooperation and peace. The target of
                  REACH, therefore, are: AWARENESS, QUALITY EDUCATION and
                  EMPOWERMENT.
                </p>
                <button className="rounded-full bg-red-800 text-white px-10 py-2.5 flex gap-1 items-center my-3">
                  <span>Donate Now</span>
                  <ArrowRightOutlined />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2">
          <div className="col-span-1 flex justify-center border-r-2 border-dotted h-max my-16 flex-col items-center">
            <img src={Founded} alt="founder image" className="rounded-full" />
            <p className="mt-3 font-bold">Oluwabunmi Anani</p>
            <span className="my-1 font-semibold">CEO</span>
          </div>
          <div className="col-spam-1 md:col-span-2 lg:px-10">
            <h2 className="text-center text-5xl my-10 about">Our Leadership</h2>
            <p className="font-semibold">
              I have seen a lot of young women my age who are not able to fend
              for themselves for lack of any kind of education in both its
              formal and non-formal sense. As a teacher who has been in the
              classroom for over fifteen years, I have taught students, girls
              especially, who had no hope of ever furthering their education
              beyond Grade 6 – and are either taken back to their villages or
              hounded as house helps to total strangers or relatives. These
              memories remain indelible in my mind – and have pushed me in this
              direction: to be a voice of advocacy and a hand of practical help
              to these vulnerable ones. Since 2012 when I stepped feet in
              Adamawa State, I have set my heart and hands on reaching: children
              whose parents cannot pay school fees or examination fees; young
              girls who are orphaned; out-of-school children in villages, low
              income and underserved communities; carried out regular mentoring
              sessions through the ‘Read to Lead’ I started at my place of
              employ and public schools in my community; donated books and other
              educational materials; mentored girls in the art of public
              speaking; collaborated to convene annual public speaking
              competitions for schools with laptops as prizes for the best three
              and a mix of Ipads and smartphones for the other seven winners –
              since 2014; enrolled and sponsored fifteen out-of-school children
              into schools; enrolled divorced child mothers into literacy and
              apprenticeship programs; convened life skills sensitisation in
              national values and the SDGs in schools and villages; and have
              utilized mass media to advantage in creating awareness on the
              benefits of education to children, especially the girl-child.
              These have led to the founding of our Non-Governmental
              Organisation, Reach African Child Educational Empowerment
              Initiative, formerly known as the Initiative for Educational
              Transformation (IET) prior to its certification by the Corporate
              Affairs Commis sion (CAC). Oluwabunmi Anani is a graduate of
              English Literature from the University of Lagos, Nigeria; and has
              been actively engaged in and outside the classroom for over
              fifteen years having started her teaching career since the age of
              sixteen (16), upon completing her secondary school education. She
              has taught through the following levels: kindergarten, nursery,
              primary, and now secondary (Lower Basic and Upper Basic). Beyond
              the confines of the classroom, Oluwabunmi Anani has interacted,
              engaged with, and taught children in deeply rural areas, slums,
              underserved schools, orphanages, camps for the internally
              displaced, communities that have suffered insurgent attacks. Out
              of school girls and child mothers are the major focus of her
              community outreaches.
            </p>
          </div>
        </div>
      </div>
      <div className="team px-5 py-28">
        <p className="text-custom-100 flex items-center gap-1 font-semibold text-base">
          <FontAwesomeIcon
            icon={faHandshakeAngle}
            style={{ color: "#d01628" }}
          />
          <span>Meet Our Team</span>
        </p>
        <h2 className="text-4xl text-custom-50 about mt-2 mb-12">
          Talented Team Behind RACEEI
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="team-card text-center shadow-lg col-span-1 sm:col-span-1 lg:col-span-1">
            <div className="w-full">
              <img src={Badaki} alt="image" />
            </div>
            <div className="py-4">
              <h2 className="text-2xl text-custom-50 font-bold about">
                Jude Badaki
              </h2>
              <p className="text-sm text-custom-100 font-semibold">
                Program Manager
              </p>
              <>
                <p
                  className="text-xs text-custom-100 font-extrabold"
                  onClick={showModal}
                >
                  Open Modal
                </p>
                <Modal
                  title="Basic Modal"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </>
            </div>
          </div>
          <div className="team-card text-center shadow-lg col-span-1 sm:col-span-1 lg:col-span-1">
            <div className="w-full">
              <img src={Musa1} alt="image" />
            </div>
            <div className="py-4">
              <h2 className="text-2xl text-custom-50 font-bold about">
                Imam Musa
              </h2>
              <p className="text-sm text-custom-100 font-semibold">
                Public Relations Officer
              </p>
              <>
                <p
                  className="text-xs text-custom-100 font-extrabold"
                  onClick={showModal}
                >
                  Open Modal
                </p>
                <Modal
                  title="Basic Modal"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </>
            </div>
          </div>
          <div className="team-card text-center shadow-lg col-span-1 sm:col-span-1 lg:col-span-1">
            <div className="w-full">
              <img src={Oluwaseyi} alt="image" />
            </div>
            <div className="py-4">
              <h2 className="text-2xl text-custom-50 font-bold about">
                Taiyelolu Oluwaseyi
              </h2>
              <p className="text-sm text-custom-100 font-semibold">
                Content Strategist
              </p>
              <>
                <p
                  className="text-xs text-custom-100 font-extrabold"
                  onClick={showModal}
                >
                  Open Modal
                </p>
                <Modal
                  title="Basic Modal"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </>
            </div>
          </div>
          <div className="team-card text-center shadow-lg col-span-1 sm:col-span-1 lg:col-span-1">
            <div className="w-full">
              <img src={Oluwafemi} alt="image" />
            </div>
            <div className="py-4">
              <h2 className="text-2xl text-custom-50 font-bold about">
                Emmanuel Oluwafemi
              </h2>
              <p className="text-sm text-custom-100 font-semibold">Media</p>
              <>
                <p
                  className="text-xs text-custom-100 font-extrabold"
                  onClick={showModal}
                >
                  Open Modal
                </p>
                <Modal
                  title="Basic Modal"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
