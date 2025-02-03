import { useState } from "react";
import { Link, NavLink } from "@remix-run/react";
import { getTransLink, languages, useCurrentLanguage } from "../utils/langs";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const { currentLanguage, currentPath } = useCurrentLanguage();

  return (
    <div className="relative bg-white border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 pt-12 pb-4">
            <Link prefetch="intent" to={getTransLink("/", currentLanguage)}>
              <span className="sr-only">Storyblok</span>
              <img
                className="h-80 w-auto sm:h-32 absolute top-0 left-20 mb-16"
                src="https://t3.ftcdn.net/jpg/03/35/16/66/360_F_335166628_b2M3WgWbbZqxNHsRt6ZxHzk1dtCrWhVx.jpg"
                alt="Mindspace Journal"
              />
              <img
                className="h-80 w-auto sm:h-32 absolute top-0 left-20 mb-16 sm:hidden"
                src="https://t3.ftcdn.net/jpg/03/35/16/66/360_F_335166628_b2M3WgWbbZqxNHsRt6ZxHzk1dtCrWhVx.jpg"
                alt="Mindspace Journal"
              />
              <span class="text-orange-500 text-4xl font-bold absolute top-12 left-44 tracking-wide">Mindspace Journal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* <!--
        Mobile menu, show/hide based on mobile menu state.
      --> */}
      {openMenu && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://t3.ftcdn.net/jpg/03/35/16/66/360_F_335166628_b2M3WgWbbZqxNHsRt6ZxHzk1dtCrWhVx.jpg"
                    alt="Mindspace Journal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
