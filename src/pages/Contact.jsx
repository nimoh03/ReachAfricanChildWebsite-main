import { NavLink } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Contact = () => {
  const position = [9.262977, 12.431467];

  return (
    <div>
      <div className="bg-black text-white font-sans">
        <div className="hero-section text-center py-32">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <div className="flex justify-center items-center">
            <NavLink to="/" className="text-white no-underline hover:underline">
              Home
            </NavLink>
            <div className="w-2 h-2 bg-red-500 rounded-full mx-4"></div>
            <NavLink
              to="/contact"
              className="text-white no-underline hover:underline"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 py-16 px-5">
        <div className="col-span-2 lg:col-span-1 value px-4 py-12 bg-custom-200 h-max ">
          <h2 className="text-2xl about text-white my-3">Quick Contact</h2>
          <p className="my-2 flex items-center gap-1">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-custom-300"
            />
            <span className="text-base font-semibold text-custom-300 my-2">
              Location
            </span>
          </p>
          <p>Bekaji Housing Estate Circle</p>
          <p>Off Bank Road</p>
          <p>Jimeta-Yola</p>
          <p>Adamawa State,</p>
          <p>Nigeria.</p>
          <h2 className="my-2 flex items-center gap-1">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-custom-300" />
            <span className="text-base font-semibold text-custom-300">
              CALL US
            </span>
          </h2>
          <p>+234 818 5800 547 +234 703 1165 369 +234 808 7246 919</p>
          <h2 className="my-2 flex items-center gap-1">
            <FontAwesomeIcon icon={faEnvelope} className="text-custom-300" />
            <span className="text-base font-semibold text-custom-300">
              EMAIL US
            </span>
          </h2>
          <p>info@reachafricanchild.org</p>
        </div>
    
        <div className="col-span-2 lg:col-span-2 border-dotted border-2 border-custom-100 px-5 py-3 font-semibold">
          <h2 className="text-custom-50 text-2xl">Let’s Talk!</h2>
          <p className="my-2">
            Contact us to get, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ainim
            veniam.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Name"
              className="border p-1 rounded bg-gray-100"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-1 rounded bg-gray-100"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border p-1 rounded bg-gray-100"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border p-1 rounded bg-gray-100"
            />
            <textarea
              name=""
              id=""
              cols="100"
              rows="5"
              className="col-span-2 border p-2"
              placeholder="Write Something"
            />
          </div>
          <div className="flex my-5">
            <input type="checkbox" /> I agree to the terms and privacy policy
          </div>
          <button className="rounded-full bg-red-800 text-white py-1.5 px-4 md:px-14 md:py-4 flex gap-1 items-center">
            <span>Contact Us</span>
            <ArrowRightOutlined />
          </button>
        </div>
      </div>
      <div className="w-full z-0">
          <MapContainer
            center={position}
            zoom={12}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>A marker on the map.</Popup>
            </Marker>
          </MapContainer>
        </div>
    </div>
  );
};

export default Contact;
