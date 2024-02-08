import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks, navSocialMediaLins } from "../constants";
import { logo, menu, close, my_logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handlScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handlScroll);
    return () => window.removeEventListener("scroll", handlScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX}
  w-full flex items-center py-5 fixed top-0 z-20 ${
    scrolled ? "bg-primary" : "bg-transparent"
  }`}
    >
      <div className="w-full flex gap-4 justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img
            src="https://lh3.googleusercontent.com/a/ACg8ocLBVuvSzon4k5P8VIRpFRsPHPGkVtnzMmAAM64Ye7NQOg=s288-c-no"
            alt="logo"
            className="rounded-full w-20  h-20 object-contain"
          /> */}
          <img
            src={my_logo}
            alt="logo"
            className="rounded-full w-12  h-12 object-contain"
          />
          <p className="text-white text-[18px] font-bold  cursor-pointer flex">
            HAMZA &nbsp;
            <span className=" text-[#915EFF]"> dev</span>
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              }
             hover:text-white text-[18px]
             font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <ul className="list-none hidden md:flex flex-row gap-8">
          {navSocialMediaLins.map((nav) => (
            <li
              key={nav.title}
              className=" flex items-center justify-center w-[34px] h-[34px]
            
            cursor-pointer"
              onClick={() => window.open(nav.link, "_blank")}
            >
              <img
                src={nav.img}
                alt={nav.title}
                className="flex items-center justify-center object-contain "
              />
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex "}
          p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px]
          z-10 rounded-xl`}
          >
            <div className="flex flex-col items-start justify-center ">
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px]
                ${active === nav.title ? "text-white" : "text-secondary"}`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}> {nav.title}</a>
                  </li>
                ))}
              </ul>
              <ul className="list-none mt-4 flex flex-wrap gap-4">
                {navSocialMediaLins.map((nav) => (
                  <li
                    key={nav.title}
                    className=" flex items-center justify-center w-[30px] h-[30px]
            
            cursor-pointer"
                    onClick={() => {
                      window.open(nav.link, "_blank");
                      setToggle(!toggle);
                    }}
                  >
                    <img
                      src={nav.img}
                      alt={nav.title}
                      className="flex items-center justify-center object-contain "
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
