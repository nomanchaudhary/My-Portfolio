import React from "react";
import Work from "../Components/Work";
import { eduDetails } from "../Details";
import { personalDetails, workDetails } from "../Details";

const About = () => {
  return (
    <div>
      <div className="container mx-auto pt-10 pb-10">
        <h1 data-aos="fade-right" data-aos-delay="300" className="text-2xl text-center md:text-3xl lg:text-6xl font-bold font-serif">
          About Me :
        </h1>
        <p className="text-md text-center mt-5 p-5">{personalDetails.about}</p>
      </div>
      <div>
        <h1 data-aos="fade-right" data-aos-delay="600" className="text-2xl text-center md:text-3xl lg:text-6xl font-bold font-serif pb-10">
          Work Experience :
        </h1>
        {workDetails.map(
          ({ Position, Company, Location, Type, Duration }, index) => (
            <Work
              key={index}
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          )
        )}
        <div className="mb-20">
          <h1 data-aos="fade-right" data-aos-delay="300" className="text-2xl text-center md:text-3xl lg:text-6xl font-bold font-serif mt-10">
            Education :
          </h1>
          {eduDetails.map(
            ({ Position, Company, Location, Type, Duration }, index) => (
              <Work
                key={index}
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
