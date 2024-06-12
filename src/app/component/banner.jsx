import Image from "next/image";

const HomeBannerComponent = () => {
  return (
    <>
      <div className="relative z-10 min-h-[400px] md:h-[400px] c-xxl2:h-[650px] flex justify-end flex-col bg-gradient-to-r from-secondary-1 to-secondary-2 md:bg-none before:absolute before:h-1/2 before:bg-gradient-to-t before:from-neutral-1 before:to-transparent before:w-full before:bottom-0 before:left-0 before:opacity-50 pb-[60px] c-lg:pb-[155px]">
        <Image
          className="absolute top-0 h-full left-0 w-full object-cover -z-10 block"
          src={
            "https://images.ctfassets.net/szez98lehkfm/5JW37beiRtD1iJHeBv5Dv9/fad8515e1aaf0c315daa43065d756122/home_hro_desk.jpg"
          }
          alt="desktop banner"
          width="1440"
          height="560"
        />
        <div className="relative flex h-full">
          <div className="max-w-container mx-auto w-full relative z-10 text-center px-[24px] flex justify-center flex-col">
            <h1 className="text-white mb-custom-md text-heading-1 font-custom-extra-bold">
              Your future, your choice
            </h1>
            <p className="text-white text-para-md text-heading-5">
              Independent UK university rankings, course information and expert
              advice for every student
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeBannerComponent;
