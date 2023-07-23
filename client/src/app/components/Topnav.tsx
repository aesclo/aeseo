import { ICON_DOWN_ARROW } from "../constants/icons";

export default function Topnav() {
    return (
    <>
        <nav className="flex justify-between items-center px-4 py-2 bg-violet-700 text-white">
            <div>AeSEO</div>
            <div>
                <div className="flex items-center cursor-pointer font-bold px-3 py-1 rounded-md text-violet-700 border-violet-700 bg-violet-300">account<span className="ml-2 text-sm">{ICON_DOWN_ARROW}</span></div>
            </div>
        </nav>
    </>
    );
  }
  