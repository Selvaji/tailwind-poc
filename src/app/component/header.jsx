import Image from "next/image";

const HeaderComponent = () => {
  return (
    <>
      <div className="bg-blue-darkest sticky top-0 z-40">
        <div className="px-[40px] py-[8px] flex justify-between text-white">
          <a href="">
            <Image
              src={
                "https://images-dom.prod.aws.idp-connect.com/cug-cont/images/cug_logo.svg"
              }
              alt="cug logo"
              width={150}
              height={48}
            />
          </a>
          <nav className="text-small flex items-center font-custom-bold gap-[20px]">
            <li className="list-none">
              <a href="" className="flex gap-[4px]">
                League tables{" "}
                <span className="block py-[2px] px-[8px] bg-red-dark text-x-small rounded-[4px]">
                  NEW
                </span>
              </a>
            </li>
            <li className="list-none">
              <a href="" className="flex gap-[4px]">
                Subject Guide
              </a>
            </li>
            <li className="list-none">
              <a href="" className="flex gap-[4px]">
                Universities
              </a>
            </li>
            <li className="list-none">
              <a href="" className="flex gap-[4px]">
                Courses
              </a>
            </li>
            <li className="list-none">
              <a href="" className="flex gap-[4px]">
                Open days
              </a>
            </li>
            <li className="list-none">
              <a href="" className="flex gap-[4px]">
                Student advice
              </a>
            </li>
            <li className="list-none">
              <a
                href=""
                className="flex px-[16px] py-[8px] rounded-[8px] bg-blue-light"
              >
                Sign in
              </a>
            </li>
          </nav>
        </div>
      </div>
    </>
  );
};
export default HeaderComponent;
