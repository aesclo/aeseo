'use client'
import { useState } from "react";
import { ICON_DOWN_ARROW, ICON_SEO, ICON_UP_ARROW } from "../constants/icons";

export default function Sidenav() {

  const [isSEOBlock , setIsSEOBlock] = useState(false)


  return (
    <>
      <div className="bg-gray-200 h-screen p-4 ">

        {/* seo section */}
        <div className="bg-gray-300 cursor-pointer p-4 rounded-md" >
            {/* SEO button */}
          <div className="flex justify-between items-center" onClick={() => setIsSEOBlock(!isSEOBlock)}>
            <div className="flex items-center">
              <span className="mr-2">{ICON_SEO}</span> SEO
            </div>
            <span>{isSEOBlock ? ICON_UP_ARROW : ICON_DOWN_ARROW}</span>
          </div>
          {/* seo sub menu */}
          <div className={isSEOBlock ? `p-2 mt-4 block` : `p-2 mt-4 hidden`}>
            <p className="uppercase text-gray-500">link building</p>
            <div className=" text-gray-700 text-sm">
                <a href="#" className="block pt-2 ">Internal Links</a>
                <a href="#" className="block pt-2">External links</a>
                <a href="#" className="block pt-2">links audit</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
