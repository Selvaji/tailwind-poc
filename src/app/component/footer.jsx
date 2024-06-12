import Image from "next/image";

const FooterComponent = () => {
  return (
    <>
      <div className="border-t-4 border-blue-light-2 py-[80px] bg-blue-dark">
        <div className="max-w-container mx-auto pb-[40px] border-white border-b">
          <div className="w-[544px] mx-auto flex flex-col text-white">
            <h3 className="font-custom-extra-bold text-heading-4 mb-[20px] text-center">
              Subscribe to our newsletter
            </h3>
            <p className=" mb-[20px] text-center">
              Get the latest updates with hints, tips and guidance for your
              journey to university - from application to enrolment.
            </p>
            <form>
              <input
                type="email"
                placeholder="Email address"
                className="px-[16px] py-[20px] w-full rounded-[4px] mb-[20px] font-custom-light"
              />
              <div className="flex gap-[8px] items-start text-small mb-[20px]">
                <input type="checkbox" id="terms" className="mt-[2px]" />
                <label htmlFor="terms">
                  I confirm I am over 16 and I agree to the{" "}
                  <a href="" className="text-white">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="" className="text-white">
                    Privacy Notice.
                  </a>
                </label>
              </div>
              <div className="flex justify-center">
                <button className="bg-blue-light px-[20px] py-[12px] font-custom-regular uppercase rounded-[4px] text-para mx-auto">
                  Subscribe now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="max-w-container mx-auto justify-center flex flex-col">
          <div className="flex gap-[24px] py-[40px] items-center justify-center">
            <a href="">
              <Image
                src={
                  "https://images-dom.prod.aws.idp-connect.com/cug-cont/images/facebook_icon.svg"
                }
                width={22}
                height={22}
                alt="facebook"
              />
            </a>
            <a href="">
              <Image
                src={
                  "https://images-dom.prod.aws.idp-connect.com/cug-cont/images/twitter_icon.svg"
                }
                width={22}
                height={22}
                alt="facebook"
              />
            </a>
            <a href="">
              <Image
                src={
                  "https://images-dom.prod.aws.idp-connect.com/cug-cont/images/instagram_icon.svg"
                }
                width={22}
                height={22}
                alt="facebook"
              />
            </a>
            <a href="">
              <Image
                src={
                  "https://images-dom.prod.aws.idp-connect.com/cug-cont/images/linkedin_icon.svg"
                }
                width={22}
                height={22}
                alt="facebook"
              />
            </a>
          </div>
          <ul className="flex gap-[40px]">
            <li>
              <a href="" className="text-white">
                About us
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                Contact us
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                Resources for sector
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                Clearing
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                Cookies
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                Privacy notice
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                Terms and conditions
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                Sitemap
              </a>
            </li>
          </ul>
          <p className="text-white text-center mt-[40px]">
            &copy; Complete University Guide Limited 2024
          </p>
        </div>
      </div>
    </>
  );
};
export default FooterComponent;
