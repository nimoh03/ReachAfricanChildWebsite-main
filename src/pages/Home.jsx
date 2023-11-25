
import Image2 from "../assets/slider/Img2.png";
import Image3 from "../assets/slider/Img3.png";
import image4 from "../assets/slider/Img4.png";
import Image9 from "../assets/slider/Img9.png";
import icon1 from "../assets/white-1.png";
import icon2 from "../assets/2.png";
import icon3 from "../assets/3.png";
import icon4 from "../assets/4.png";
import treeIcon from "../assets/download.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const Home = () => {
  const [activeKey, setActiveKey] = useState("1");
  const onChange = (key) => {
    setActiveKey(key);
  };

  const items = [
    {
      key: "1",
      label: "Our Mission",
      children: (
        <div>
          <p>
            The mission of RACEEI is to make education more inclusive,
            accessible, relevant, and transformative (for both students and
            teachers) through training, support, and research; empowering every
            child with the tools of formal and non-formal education to the end
            that each child and teacher may be prepared to face the future with
            the confidence that comes with knowledge, skills, and values for a
            sustainable future.
          </p>
          <button className="rounded-full bg-red-800 text-white px-10 py-2.5 flex gap-1 items-center my-3">
            <span>Donate Now</span>
            <ArrowRightOutlined />
          </button>
        </div>
      ),
    },
    {
      key: "2",
      label: "Our Vision",
      children: (
        <div>
          <p>
            RACEEI envisions a world where every child, especially the girl
            child, can discover and maximize potential towards
            self-actualization and economic viability – and in turn give back to
            their communities. RACEEIplans to achieve this vision through a
            painstaking pursuit of these objectives: All children are
            essentially literate | have equal access to quality learning
            opportunities | achieve economic and social independence for every
            child through education | empower every girl child for future
            relevance through education | sustain good practices towards self
            and the environment
          </p>
          <button className="rounded-full bg-red-800 text-white px-10 py-2.5 flex gap-1 items-center my-3">
            <span>Donate Now</span>
            <ArrowRightOutlined />
          </button>
        </div>
      ),
    },
    {
      key: "3",
      label: "Our Goal",
      children: (
        <div>
          <p>
            Our goal is to empower over ten million (10 000 000) children with
            the necessary tool kit of education in its formal, non-formal forms
            by the year 2035. The Drive RACEEI is driven to serve and represent
            populations whose voices are least likely to be heard when policies
            are made and resources are allocated especially with respect to
            Quality Education. RACEEI therefore wants to contribute to helping
            first, the girl child; and the poor and vulnerable who live in the
            rural and impoverished metropolitan areas gain access to quality
            education and sustainable lifestyles that lead to improved and
            functional literacy, economic empowerment, a safer and sustainable
            environment, cooperation and peace. The target of REACH, therefore,
            are: AWARENESS, QUALITY EDUCATION and EMPOWERMENT.
          </p>
          <button className="rounded-full bg-red-800 text-white px-10 py-2.5 flex gap-1 items-center my-3">
            <span>Donate Now</span>
            <ArrowRightOutlined />
          </button>
        </div>
      ),
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="contain">
      <div className="grid lg:grid-cols-2 mt-22 gap-5 items-center my-5">
        <div className="col-span-1 px-5 lg:px-18">
          <span className="type-fruit decoration-violet-50"></span>
          <span className="raceei-heading text-red-800 text-7xl my-10 block">
            RACEEI
          </span>
          <p className="text-2xl about type-anime"></p>
          <p className="text-base my-10 w-full">
            Reach African Child is a community based and grassroots driven
            organization that works with teachers, educational institutions,
            governments, private organizations, student-teacher volunteers, and
            parents to ensure that every girl (70%) and boy (30%) within the
            ages 05 - 15 gains access to education (in its formal and non-formal
            forms), develops a lifelong love of learning, builds economic
            self-reliance and a healthy self-esteem with an eye to giving back
            to the community too.
          </p>
          <div className="flex gap-1 md:gap-5 my-10">
            <button className="rounded-full bg-red-800 text-white py-1.5 px-4 md:px-14 md:py-4 flex gap-1 items-center">
              <span>Donate Now</span>
              <ArrowRightOutlined />
            </button>
            <button className="rounded-full bg-custom-50 text-white py-1.5 px-4 md:px-14 md:py-4 flex gap-1 items-center hover:bg-red-800 transition-all duration-300 ease-in">
              <span>Become A Partner</span>
              <ArrowRightOutlined />
            </button>
          </div>
        </div>
        <div className="col-span-1 w-4/5 mx-auto">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={Image2}
                  className="d-block w-100 rounded-lg"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Image9}
                  className="d-block w-100 rounded-lg"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Image3}
                  className="d-block w-100 rounded-lg"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-5 items-center overflow-hidden">
        <div className="col-span-1 px-5 lg:px-0 lg:w-4/5 mx-auto my-4 md:my-0">
          <p className="text-custom-100 text-base my-3 font-semibold">
            Some of our Services
          </p>
          <h2 className="text-4xl my-3 about text-custom-50">What We Do</h2>
          <p className="text-custom-50 text-base my-3">
            REACH is a social enterprise that started operations in 2020, with
            an accelerated visibility in 2022.
          </p>
          <div>
            <button className="rounded-full bg-custom-50 text-white px-5 py-3 flex gap-2 items-center hover:bg-red-800 transition-all duration-300 ease-in">
              <span>Read More</span>
              <ArrowRightOutlined />
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <Slider {...sliderSettings}>
            <div className="card border-dotted border-1 border-custom-100  ">
              <div className="card-content  text-custom-50 hover:text-white">
                <div className="flex justify-center my-2">
                  <img src={icon1} alt="img" />
                </div>
                <p className="text-2xl font-bold my-3">Teacher Training</p>
                <p className="text-xs my-2">
                  RACEEI currently has a strong presence in the Northeast of
                  Nigeria , especially its villages , camps for internally
                  displaced persons and underserved schools.
                </p>
              </div>
            </div>
            <div className="card border-dotted border-1 border-custom-100">
              <div className="card-content text-custom-50 hover:text-white">
                <div className="flex justify-center my-2">
                  <img src={icon2} alt="image" />
                </div>

                <p className="text-xl font-bold my-3">
                  Accelerated Literacy And Numeracy Programs
                </p>
                <p className="text-xs my-2">
                  Partnership with the local authorities , government , private
                  organizations
                </p>
              </div>
            </div>
            <div className="card border-dotted border-1 border-custom-100 ">
              <div className="card-content text-custom-50 hover:text-white">
                <div className="flex justify-center my-2">
                  <img src={icon3} alt="image" />
                </div>

                <p className="text-2xl font-bold my-3">Sensitisation</p>
                <p className="text-xs my-2">
                  Community and hut to hut campaign and sensitisation on the
                  benefits of education , especially for the girl child
                </p>
              </div>
            </div>
            <div className="card border-dotted border-1 border-custom-100 ">
              <div className="card-content text-custom-50 hover:text-white">
                <div className="flex justify-center my-2">
                  <img src={icon4} alt="image" />
                </div>

                <p className="text-2xl font-bold my-3">Mentorship</p>
                <p className="text-xs my-2">
                  Counseling and Mentorship (for cases of learning difficulty
                  and child marriage)
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 px-4 my-10 items-center">
        <div className="col-span-1 md:px-5 hidden lg:block">
          <img
            src={image4}
            alt="image"
            className="rounded-xl md:w-4/5 mx-auto lg:w-4/5 px-2"
          />
        </div>
        <div className="col-span-1 sm:px-5 w-full lg:w-5/6 lg:px-2">
          <small className=" text-red-700 font-bold flex gap-1 my-3">
            <img src={treeIcon} style={{ width: 20 }} /> <span>About Us</span>
          </small>
          <p className="about text-4xl text-custom-50 my-3">RACEEI</p>
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
          <div className="flex gap-2 my-10">
            <button className="rounded-full bg-red-800 text-white px-3.5 py-2.5  flex gap-0.5 items-center  hover:bg-custom-50 transition-all duration-300 ease-in">
              <span>Donate Now</span>
              <ArrowRightOutlined />
            </button>
            <button className="rounded-full bg-red-800 text-white px-3.5 py-2.5 flex gap-0.5 items-center">
              <span>More About Us</span>
              <ArrowRightOutlined />
            </button>
          </div>
        </div>
      </div>
      <div className="bg flex justify-end items-center">
        <div className="sm:4/5 md:w-3/5 md:mx-auto lg:w-2/5  bg-custom-50 h-3/5 p-5 rounded-lg mx-4 z-0">
          <span className="text-white text-lg"> Our Mission</span>
          <h2 className="text-white about text-2xl my-3">
            Concern About Our Mission
          </h2>
          <Tabs 
            defaultActiveKey="1"
            activeKey={activeKey}
            items={items}
            onChange={onChange}
            animated={{ inkBar: true, tabPane: true }}
            size="large"
            style={{color:'whitesmoke'}}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
