import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Menu from "./Menu";
// import mainVideo from "../media/mainloop.mp4";

const Header = () => {
    const [isExpanded, toggleExpansion] = useState(false);
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            wpgraphql {
            generalSettings {
                description
                title
            }
            }
        }
    `)

    const { title, description } = data.wpgraphql.generalSettings

    return(
        <div>
        <header className="bg-teal-700">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link className="flex items-center no-underline text-white" to="/">
          <svg
            className="fill-current h-8 mr-2 w-8"
            height="54"
            viewBox="0 0 54 54"
            width="54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-bold text-xl tracking-tight">
            {title}
          </span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <Menu />
        </nav>
      </div>
    </header>
            <Menu />
        </div>
    )
}

export default Header