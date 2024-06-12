import Image from "next/image";

const ThreeCardComponent = () => {
  return (
    <>
      <div className="bg-blue-dark py-[40px]">
        <ul className="max-w-container mx-auto grid grid-cols-3 gap-[16px]">
          <li className="bg-white border-s-4 border-[#84d7dc] p-[16px] flex gap-[20px] items-start">
            <Image
              src={
                "https://images.ctfassets.net/szez98lehkfm/2X39f4yyTvJPRBjiGx8xYO/69a511fc25064061e91cd0c37fa2c6ab/crs_srch.svg"
              }
              width={42}
              height={64}
              alt="card 1"
            />
            <div className="">
              <h3 className="font-custom-bold text-heading-4 mb-[8px]">
                Find a course
              </h3>
              <p>
                Search by subject, course, or region to find the right course
                for you{" "}
              </p>
              <a
                href=""
                className="text-blue-light text-heading-6 mt-[8px] inline-block"
              >
                Get started
              </a>
            </div>
          </li>
          <li className="bg-white border-s-4 border-[#84d7dc] p-[16px] flex gap-[20px] items-start">
            <Image
              src={
                "https://images.ctfassets.net/szez98lehkfm/1xvOP884q602GocWm2Yrcv/cbb9d048d524c6f152ed453125373f35/univ_icon.svg"
              }
              width={42}
              height={64}
              alt="card 1"
            />
            <div className="">
              <h3 className="font-custom-bold text-heading-4 mb-[8px]">
                Find a University
              </h3>
              <p>
                Search for universities to find out about facilities, courses,
                and more{" "}
              </p>
              <a
                href=""
                className="text-blue-light text-heading-6 mt-[8px] inline-block"
              >
                Get started
              </a>
            </div>
          </li>
          <li className="bg-white border-s-4 border-[#84d7dc] p-[16px] flex gap-[20px] items-start">
            <Image
              src={
                "https://images.ctfassets.net/szez98lehkfm/1Rj62ZIu54DkTwaNHB5RmP/0fd2f964d662ced26a4ba5805bd4aaaa/open.svg"
              }
              width={42}
              height={64}
              alt="card 1"
            />
            <div className="">
              <h3 className="font-custom-bold text-heading-4 mb-[8px]">
                Find an open day
              </h3>
              <p>
                Search for and book open days to help you make the right choice{" "}
              </p>
              <a
                href=""
                className="text-blue-light text-heading-6 mt-[8px] inline-block"
              >
                Get started
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ThreeCardComponent;
