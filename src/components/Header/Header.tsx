import type { FC } from "react";
import { useMemo } from "react";
import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import Icon from "../../assets/icon.png";
import { useAuth } from "../../utils/useAuth";

export const Header: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { data, isLoading } = useAuth();

  const href = useMemo(() => {
    if (!isLoading) {
      return data ? "server-selection" : "/";
    }
    return "/";
  }, [data, isLoading]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-900/10">
      <nav className="relative flex flex-wrap items-center justify-between p-2 mb-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="flex flex-1 leading-relaxed mr-4 py-2 whitespace-nowrap"
              to={href}
            >
              <img
                src={Icon}
                width={32}
                height={32}
                className="rounded-full mr-4"
              />
              <span className="text-brand text-2xl">Froggy</span>
            </Link>
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
                <Link
                  className="px-3 py-2 flex items-center text-sm leading-snug text-white hover:opacity-75"
                  to="/docs"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">documentation</span>
                </Link>
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
