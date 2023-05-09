import React from "react";
import Logo from "../../images/logo.svg";
// import Hambugger from "../../images/icon-hamburger.svg";
const menuLinks = [
  { name: "HOW WE WORK", link: "#How_we_work" },
  { name: "BLOG", link: "#Blog" },
  { name: "ACCOUNT", link: "#Account" }
  
];
const Header = () => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <header className="grid place-items-center">
        <nav className="flex justify-between min-w-[80%]  py-7 ">
          <img className="py-2" src={Logo} alt="logo" />
          <div>
            <ul className="flex items-center gap-5 text-lg  ">
              {menuLinks.map((props) => (
                <li className="hover:text-gray-400">
                  <a href={props.link}>{props.name}</a>
                </li>
                
              ))}
              <button className="uppercase border-2 border-black px-6 py-2 hover:bg-gray-50 ">view plans</button>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
