import { useState } from "react";
import { Link } from "@remix-run/react";
import { getTransLink, useCurrentLanguage } from "../utils/langs";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentLanguage } = useCurrentLanguage();

  return (
    <div className="relative bg-white border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 pt-12 pb-4">
            <Link prefetch="intent" to={getTransLink("/", currentLanguage)}>
              <span className="sr-only">Mindspace Journal</span>
              <div>
                <img
                  className="h-40 w-auto sm:h-28 md:h-32 lg:h-36 absolute top-0 left-0 mb-16"
                  src="https://t3.ftcdn.net/jpg/03/35/16/66/360_F_335166628_b2M3WgWbbZqxNHsRt6ZxHzk1dtCrWhVx.jpg"
                  alt="Mindspace Journal"
                />
                <span className="text-orange-500 text-3xl font-bold absolute top-14 left-28 tracking-wide hidden sm:block">
                  Mindspace Journal
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {openMenu && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 pl-1">
              <div className="flex items-center justify-start">
                <div>
                  <img
                    className="h-2 w-2 object-contain"
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