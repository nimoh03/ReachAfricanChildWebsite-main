import { Breadcrumb } from "antd";
import Image1 from "../assets/footer-news/1.jpg";
import Image2 from "../assets/footer-news/2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Logo2 from "../assets/logs.png";
const Footer = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-12">
        <div className="contact col-span-1 text-sm font-semibold text-custom-50 ">
          <h2 className="text-xl my-3">Contact Info</h2>
          <p className="my-2 flex items-center gap-1">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ color: "#f20202" }}
            />
            <span>LOCATION</span>
          </p>
          <p>
            Bekaji Housing Estate Circle, Off Bank Road, Jimeta-Yola, Adamawa
            State, Nigeria.
          </p>
          <h2 className="my-2 flex items-center gap-1">
            <FontAwesomeIcon icon={faPhoneAlt} style={{ color: "#e11919" }} />
            <span>CALL US</span>
          </h2>
          <p>+234 818 5800 547 +234 703 1165 369 +234 808 7246 919</p>
          <h2 className="my-2 flex items-center gap-1">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#f20707" }} />
            <span>EMAIL US</span>
          </h2>
          <p>info@reachafricanchild.org</p>
        </div>
        <div className="our-support col-span-1 text-sm font-semibold support-p">
          <h2 className="text-xl my-3">Our Support</h2>
          <p>Private Policies</p>
          <p>Donate Now</p>
          <p>Become A Volunteer</p>
          <p>Careers</p>
          <p>Contact Us</p>
          <p>Paid Programs</p>
          <p>Partnership</p>
        </div>
        <div className="our-services col-span-1 text-sm font-semibold support-p">
          <p className="text-xl my-3">Donate</p>
          <p>Sponsor</p>
          <p>Fundraise</p>
          <p>Volunteer</p>
          <p>Partner</p>
          <p>Jobs</p>
          <p>Form</p>
        </div>
        <div className="recent-news text-sm font-semibold">
          <div className="news flex gap-3 my-3">
            <div className="border-y-0 border-r-2 border-dotted pr-4">
              <img src={Image1} alt="image" />
            </div>
            <div>
              <span className="text-xs font-bold">
                Support About Poverty To Poor Family
              </span>
              <small className="block">Poor, 22 January</small>
            </div>
          </div>
          <div className="news flex gap-3">
            <div className="border-y-0 border-r-2 border-dotted pr-4">
              <img src={Image2} alt="image" />
            </div>
            <div>
              <span className="text-xs font-bold">
                {" "}
                Mostly Suffered School Boys Care
              </span>
              <small className="block">Health , 24 February</small>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-dotted border-custom-100 my-4 w-11/12 mx-auto"></div>
      <div className="grid grid-cols-3 lg:px-5 items-end sm:w-10/12 mx-auto">
        <div className="col-span-1">
          <img src={Logo2} alt="image" style={{ width: "130px" }} />
        </div>
        <div className="col-span-1 text-xs md:text-sm">
          Copyright 2023 RACEEI.Developed by{" "}
          <span className="text-custom-100 font-bold">Placid</span>
        </div>
        <div className="col-sapn-1 text-xs md:text-sm">
          Terms & Conditions | Privacy Policy
        </div>
      </div>
    </>
  );
};

export default Footer;
