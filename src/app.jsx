import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Link,
  Route,
  Outlet,
} from "react-router-dom";

import resumepdf from "./assets/resume-roald-delacruz.pdf";

import MainComponent from "./components/MainComponent";
import ToggleThemButton from "./components/ToggleThemeButton";

import PagenotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import * as FaIcon from "react-icons/fa6";

import * as BIcon from "react-icons/bi";
import * as SIcon from "react-icons/si";

function Contents() {
  return (
    <>
      <header className="w-full p-4 border-b-2 ">
        <ul className="navbar gap-3 max-w-4xl mx-auto">
          <li>
            <h1 className="text-lg sm:text-xl font-semibold btn btn-neutral duration-100">
              <Link className="hidden sm:block" to={"/react-app-portfolio"}>
                Roald Dela Cruz
              </Link>
              <Link className="block sm:hidden" to={"/react-app-portfolio"}>
                RDC
              </Link>
            </h1>
          </li>
          {/* <li>
            <Link className="btn" to={"/react-app-portfolio/projects"}>
              Projects
            </Link>
          </li> */}
          <li>
            <a
              download={resumepdf}
              href={resumepdf}
              className="hidden sm:flex items-center gap-2 btn btn-primary w-fit"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume <FaIcon.FaDownload size={24} />
            </a>
            <a
              download={resumepdf}
              href={resumepdf}
              className="flex sm:hidden items-center gap-2 btn btn-primary w-fit"
              target="_blank"
              rel="noreferrer"
            >
              <FaIcon.FaDownload size={24} />
            </a>
          </li>
          <li>
            <ToggleThemButton />
          </li>
        </ul>
      </header>
      <MainComponent className={"max-w-4xl mx-auto flex flex-col gap-3 p-4"}>
        <Outlet />
      </MainComponent>
      <footer className="w-full p-6">
        <div className="max-w-4xl mx-auto ">
          <ul className="flex justify-center items-center gap-1 ">
            <li>
              <a
                className="flex items-center gap-1 text-slate-400 hover:text-slate-600 duration-300"
                href="#"
              >
                {" "}
                Facebook <FaIcon.FaFacebook />
              </a>
            </li>
            <li>|</li>
            <li>
              <a
                className="flex items-center gap-1 text-slate-400 hover:text-slate-600 duration-300"
                href="https://github.com/Roald2000"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <FaIcon.FaGithub />
              </a>
            </li>
          </ul>
          <br />
          <article
            className="group italic text-center text-xs sm:text-md tooltip tooltip-accent"
            data-tip={"Click to Copy"}
            onClick={() => {
              navigator.clipboard.writeText(
                document.getElementById("quote").textContent
              );
              alert("Content Copied to clipboard");
            }}
          >
            <span className="text-xl font-bold">&quot;</span>
            <span id="quote" className=" cursor-pointer">
              Daily Progress... fosters not perfection, but unwavering
              determination and resilience throughout life. While numerous
              individuals may persist and persevere, without embracing the
              essence of failure, no valuable lessons can be gleaned, thereby
              rendering all hardships futile.
            </span>
            <span className="text-xl font-bold">&quot;</span>
            <br />
            <span className="font-bold text-2xl">-- Me</span>
          </article>
        </div>
        <div className="divider"></div>
        <div className="flex items-center justify-center gap-3">
          <span>Made with </span>
          <div>
            <BIcon.BiLogoReact className="inline" size={32} />{" "}
            <BIcon.BiLogoTailwindCss className="inline" size={32} />{" "}
            <SIcon.SiDaisyui className="inline" size={32} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="react-app-portfolio" element={<Contents />}>
        <Route path="/react-app-portfolio" element={<Home />} />
        {/* <Route path="/react-app-portfolio/projects" element={<Projects />} /> */}
        <Route path="*" element={<PagenotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
