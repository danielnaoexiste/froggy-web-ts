import type { FC } from "react";
import { useState } from "react";

import { FaBars } from "react-icons/fa";

import Icon from "../../assets/icon.png";

interface HeaderProps {
  href?: string;
}

export const Header: FC<HeaderProps> = ({ href = "#" }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header>
      <nav className="relative flex flex-wrap items-center justify-between p-2 bg-slate-600 mb-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="flex flex-1 leading-relaxed mr-4 py-2 whitespace-nowrap"
              href={href}
            >
              <img
                src={Icon}
                width={32}
                height={32}
                className="rounded-full mr-4"
              />
              <span className="text-brand text-2xl">Froggy</span>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center " +
              (navbarOpen ? "flex" : "hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm leading-snug text-white hover:opacity-75"
                  href="/docs"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">documentation</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm leading-snug text-white hover:opacity-75"
                  href="https://discord.gg/Dd4GyDVYTf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">support server</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
