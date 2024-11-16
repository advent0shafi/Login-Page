import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div>
    <div className=" min-h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center w-full ">
        <div className="relative md:block hidden ">
          <Image
            src={"/mobile-phone.png"}
            alt=""
            width={380}
            height={580}
            className="w-full min-h-[620.14px] "
          />
          <div className="absolute top-[20px] right-[53px] ">
          <Image
            src={"/screen.png"}
            alt=""
            width={250}
            height={538}
            className="w-full max-h-[560px]  h-full"
          />
          </div>
        </div>
        <div></div>
        <div>
          <div className="w-[350px] h-[413px] border border-[#DBDBDB]">
            <div className="flex flex-col justify-start items-center">
              <div className="max-w-[175px] h-full">
                <Image
                  src={"/black-instgram.png"}
                  alt=""
                  width={175}
                  height={51}
                  className="object-contain mt-[47px]  w-full h-full "
                />
              </div>
              <form className="px-[40px] w-full h-full flex flex-col justify-center mt-[40px] ">
                <input
                  type="text"
                  className="w-full h-[38px] bg-[#FAFAFA] border text-[12px] px-[8px] py-[10px] rounded-[3px] text-[#737373]"
                  placeholder="Phone number, username, or email"
                />
                <input
                  type="text"
                  className="w-full h-[38px] bg-[#FAFAFA] border mt-[6px] text-[12px] px-[8px] py-[10px] rounded-[3px] text-[#737373]"
                  placeholder="Password"
                />
                <button className="mt-[14px] rounded-[8px] bg-[#0095F6] font-bold text-[14px] text-white py-[7px]">
                  log in
                </button>
                <div className="flex  w-full gap-[16px] mt-[22px] justify-center items-center ">
                  <div className="w-full h-px  bg-[#dbdbdb]" />
                  <div className="  text-neutral-500 text-[13px] font-bold  uppercase ">
                    or
                  </div>
                  <div className="w-full h-px  bg-[#dbdbdb]" />
                </div>
                <div className="mt-[30px] w-full flex gap-[8px] justify-center items-center">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_205_10705"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="21"
                      height="21"
                    >
                      <path
                        d="M20.5898 0.480469H0.589844V20.4805H20.5898V0.480469Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_205_10705)">
                      <path
                        d="M10.5898 0.480469C5.08984 0.480469 0.589844 4.98047 0.589844 10.4805C0.589844 15.4805 4.21484 19.6055 9.08984 20.3555V13.3555H6.58984V10.4805H9.08984V8.23047C9.08984 5.73047 10.5898 4.35547 12.8398 4.35547C13.9648 4.35547 15.0898 4.60547 15.0898 4.60547V7.10547H13.8398C12.5898 7.10547 12.2148 7.85547 12.2148 8.73047V10.4805H14.9648L14.4648 13.3555H12.0898V20.3555C16.9648 19.6055 20.5898 15.4805 20.5898 10.4805C20.5898 4.98047 16.0898 0.480469 10.5898 0.480469Z"
                        fill="#0095F6"
                      />
                    </g>
                  </svg>
                  <h3 className="text-[#0095F6] text-[14px] font-bold text-center ">
                    Log in with Facebook
                  </h3>
                </div>
                <div className="mt-[20px] text-center text-[#00376B] font-normal text-[14px] ">
                  Forgot password?
                </div>
              </form>
            </div>
          </div>
          <div className="w-[350px] h-[63px] border border-[#DBDBDB] mt-[10px]">
            <div className="mt-[20px] text-center text-[#000000] font-normal text-[14px] ">
              Forgot password?{" "}
              <span className="text-[#0095F6] text-[14px] font-bold text-center ">
                Sign up
              </span>
            </div>
          </div>
          <div className="py-[15px]">
            <h3 className="text-center text-[#000000] font-normal text-[14px]">
              Get the app.
            </h3>
          </div>
          <div className="flex items-center justify-center gap-[8px]">
            <Image
              src={"/playstore.png"}
              alt=""
              width={110}
              height={44}
              className="h-[44px] max-w-[110px]"
            />{" "}
             <Image
            src={"/mircroft.png"}
            alt=""
            width={134}
            height={44}
            className="h-[44px] max-w-[134px] "
          />
          </div>
         
        </div>
      </div>
     
    </div>
    <footer className="border-t borde py-6 text-center text-sm text-zinc-400">
        <nav className="mb-4 space-x-4">
          <Link className="hover:underline" href="#">
            Meta
          </Link>
          <Link className="hover:underline" href="#">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Blog
          </Link>
          <Link className="hover:underline" href="#">
            Jobs
          </Link>
          <Link className="hover:underline" href="#">
            Help
          </Link>
          <Link className="hover:underline" href="#">
            API
          </Link>
          <Link className="hover:underline" href="#">
            Privacy
          </Link>
          <Link className="hover:underline" href="#">
            Terms
          </Link>
          <Link className="hover:underline" href="#">
            Locations
          </Link>
          <Link className="hover:underline" href="#">
            Instagram Lite
          </Link>
          <Link className="hover:underline" href="#">
            Threads
          </Link>
          <Link className="hover:underline" href="#">
            Contact uploading and non-users
          </Link>
          <Link className="hover:underline" href="#">
            Meta Verified
          </Link>
        </nav>
        <div className="flex items-center justify-center gap-4">
          <select className="bg-transparent text-sm">
            <option>English (UK)</option>
          </select>
          <span>© 2024 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
}
