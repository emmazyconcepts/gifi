import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import logo from "../public/logo.svg";
import icon from "../public/hello.gif";
import loading from "../public/loading.svg";
import Head from "next/head";
import work from "../public/wo.svg";

// const inter = Inter({ subsets: ["latin"] });

const inter = Inter({ subsets: ["Chivo Mono"] });

export default function Home() {
  function scrollWin() {
    typeof window !== "undefined"
      ? window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
      : "";
  }
  return (
    <>
      <Head>
        <title>Gifijobs</title>
        <link rel="shortcut icon" href="../public/favicon.ico" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="block min-[1070px]:flex">
        <div className=" bg-[#D6CFFF] w-screen lg:h-screen ">
          <Image
            src={logo}
            alt="Picture of the logo "
            className="main-logo block top-5 left-[25px] absolute lg:top-[63px] lg:left-[75px]  "

            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />{" "}
          <div className=" grid place-items-center lg:h-screen">
            <Image
              src={work}
              alt="Picture of the logo "
              className=" mt-28 w-[50%] h-[50%]"

              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />{" "}
            <Image
              src={logo}
              alt="Picture of the logo "
              className=" lg:-mt-[150px]"

              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />{" "}
            <h1 className="down-text mt-10 mb-10 lg:-mt-[150px] lg:w-[490px] p-0 max-[1070px]:p-10 ">
              We're a tech startup aimed at providing swift & affordable
              services; domestic and professional. to consumers by linking
              qualified artisans closest to them.
            </h1>
          </div>
        </div>
        <div className=" bg-white w-screen sm:h-screen">
          <div className="flex flex-col min-h-screen justify-center p-16 ">
            <Image
              src={loading}
              alt="Picture of the loader "
              // className=" h-screen w-screen"

              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />{" "}
            <h1 className=" head-t sm:w-[347.93px] mt-10 mb-5 ">
              Get early access !
            </h1>
            <h2 className="head-d sm:w-[493.7px] mb-5">
              Be among the first to get the latest updates , launching and
              testing of our product.
            </h2>
            <div>
              {" "}
              <div className=" flex justify-between space-x-5  sm:space-x-0">
                <div className="field">
                  <label htmlFor="name">First name:</label>
                  <input
                    id="name"
                    type="text"
                    // onChange={handleChangename}
                    maxlength="25"
                    // value={username}
                    placeholder="First name"
                    className="block w-full p-3 input-border-radius input-color focus:outline-none border-2 mb-4 pl-5 text-[#2d2d2d]"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="name">Last name:</label>
                  <input
                    id="name"
                    type="text"
                    // onChange={handleChangename}
                    maxlength="25"
                    // value={username}
                    placeholder="Last name"
                    className="block w-full p-3 input-border-radius input-color focus:outline-none border-2 mb-4 pl-5 text-[#2d2d2d]"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="name">Email Address:</label>
                <input
                  id="name"
                  type="text"
                  // onChange={handleChangename}
                  // value=""
                  placeholder="Enter Your Email"
                  className="block w-full p-3 input-border-radius input-color focus:outline-none border-2 mb-4 pl-5 text-[#2d2d2d]"
                  required
                />
              </div>
              <button className="bg-[#803cef] w-full ">Join Waitlist</button>
              <div
                className="sy-whatshelp z-30 min-[1070px]:hidden"
                onClick={() => scrollWin()}
              >
                <svg class="arrow">
                  <path class="a1" d="M0 0 L30 22 L60 0"></path>
                  <path class="a2" d="M0 20 L30 42 L60 20"></path>
                  <path class="a3" d="M0 40 L30 62 L60 40"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
