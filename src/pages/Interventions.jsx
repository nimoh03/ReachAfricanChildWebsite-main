import { NavLink } from "react-router-dom";
import image from "../assets/Interventions/Sidikat1.png";
import image1 from "../assets/Interventions/Hajara.png";
import image2 from "../assets/Interventions/Sidikat.png";
import image3 from "../assets/Interventions/Sidikat2.png";
import image4 from "../assets/Interventions/Sidikat3.png";
import image5 from "../assets/Interventions/Sid.png";
const Interventions = () => {
  return (
    <div>
      <div className="bg-black text-white font-sans">
        <div className="hero-section text-center py-32">
          <h2 className="text-3xl font-bold mb-4">Intervention</h2>
          <div className="flex justify-center items-center">
            <NavLink to="/" className="text-white no-underline hover:underline">
              Home
            </NavLink>
            <div className="w-2 h-2 bg-red-500 rounded-full mx-4"></div>
            <NavLink
              to="/about"
              className="text-white no-underline hover:underline"
            >
              Interventions
            </NavLink>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 py-24 items-end">
        <div className="col-span-2 px-5">
          <h2 className="text-4xl font-seibold about my-3 text-custom-50">
            Our Interventions
          </h2>
          <p className="text-sm font-semibold">
            Like most girls in Northeast Nigeria, Sidikat, an eight-year old
            girl living in the rural part of Northeast Nigeria has never set
            foot in a school. She is orphaned, having lost her parents when they
            flee from an insurgent attack.
            <br /> <br />
            So, the best thing her community thinks is best for her is to be an
            errand girl. And when she is ten or eleven, she would be married off
            to an older man who they suppose can take care of her.
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1 w-3/6 pr-8 mx-auto py-8 lg:py-0">
          <img src={image1} alt="image" className="rounded-full w-full" />
        </div>
      </div>
      <div className="lg:py-5 bg-custom-200">
        <div className="grid lg:grid-cols-3 sm:py-8 lg:py-24  items-end">
          <div className="col-span-2 px-5">
            <h2 className="text-4xl font-seibold about my-3 text-custom-50">
              Our Interventions
            </h2>
            <p className="text-sm font-semibold text-white">
              Let’s talk about Hajarra, a child mother of sixteen with no
              education or skill. Hajarra is caught in the vicious web of
              illiteracy, ignorance, and poverty. Having no money, education,
              skill, or a husband, Hajarra is left with two boys who help out on
              her small farm Hajjara’s husband has left for town in serach of
              better economic conditions – and for two years now, nothing has
              been heard about him. <br /> <br />
              RACEEI to the rescue! Through the organisation’s sub initiative,
              Project ‘Quality Education for All’, Sidikat and Hajarra can now
              participate in the accelerated literacy and numeracy programm.
              While Sidikat now goes to a proper school, thanks to the
              sponsorship provided by RACEEI’s project ‘Quality Education for
              All’, Hajjara now sews for the community to earn a living – having
              been sponsored by RACEEI’s Project ‘Quality Education for All’
            </p>
          </div>
          <div className="col-span-3 lg:col-span-1 w-3/6 pr-8 lg:border-r-2 border-dotted mx-auto py-12">
            <img src={image2} alt="image" className="rounded-full w-full" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 px-4 gap-1">
          <div className="col-span-1 w-3/6 lg:w-4/6 px-2 mx-auto py-5">
            <img src={image} alt="image" className="rounded-full w-full" />
          </div>{" "}
          <div className="col-span-1 w-3/6 lg:w-4/6 px-2 mx-auto py-5">
            <img src={image3} alt="image" className="rounded-full w-full" />
          </div>{" "}
          <div className="col-span-1 w-4/6 lg:w-5/6 px-3 mx-auto py-5">
            <img src={image4} alt="image" className="rounded-full w-full" />
          </div>{" "}
          <div className="col-span-1 w-3/6 lg:w-4/6 px-2 mx-auto py-5">
            <img src={image5} alt="image" className="rounded-full w-full" />
          </div>
        </div>
        <div className=" text-white">
          <p className="p-5 font-bold">
            Here is Sidikat with friends like herself, happy! Together with the
            other RACEII beneficiaries, Sidikat is now in school, enrolled on
            scholarship. All thanks to RACEEI through the HH MSII SDG funded
            Project ‘Quality Education for All’ Initiative.
            <br />
            <br />
            Look at Hajarra! Now she sews clothes for her community in exchange
            for money. Her confidence is restored as her two boys can now go to
            school! All thanks, again, to the HH MSII SDG funded Project
            ‘Quality Education for All’ initiative under RACEEI.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 py-24 items-end">
        <div className="col-span-2 px-5">
          <h2 className="text-4xl font-seibold about my-3 text-custom-50">
            Our Interventions
          </h2>
          <p className="text-sm font-semibold">
            Like most girls in Northeast Nigeria, Sidikat, an eight-year old
            girl living in the rural part of Northeast Nigeria has never set
            foot in a school. She is orphaned, having lost her parents when they
            flee from an insurgent attack.
            <br /> <br />
            So, the best thing her community thinks is best for her is to be an
            errand girl. And when she is ten or eleven, she would be married off
            to an older man who they suppose can take care of her.
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1 w-3/6 pr-8 lg:border-r-2 border-dotted mx-auto py-8 lg:py-0">
          <img src={image1} alt="image" className="rounded-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Interventions;
