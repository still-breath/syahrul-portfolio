import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 sm:p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-start md:items-center justify-center md:justify-around gap-6 md:gap-0 flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[10px] sm:my-[15px]"
                >
                  {Icon && <Icon />}
                  <span className="text-[14px] sm:text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-4 mb-[20px] text-[14px] sm:text-[15px] text-center">
          &copy; Syahrul Fathoni A. {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
