import Link from "next/link";
import Buttoncrear from "./button-crear";
import Buttonpodcasts from "./button-podcats";
import Dropdown from "./dropdown";

export default function Navbar() {
  return (
    <div className="w-96 ">
      <ul className=" bg-neutral-500 rounded-2xl mt-2 ml-2">
        <li className="flex">
          <Link className="flex ml-6 mt-7 text-white" href="/">
            <img className="mr-5" src="/hogar.svg" alt="HOME" width={25} />
            Inicio
          </Link>
        </li>
        <li className="flex">
          <Link className="flex ml-6 mt-7 mb-7 text-white" href="/Buscar">
            <img className="mr-5" src="/busqueda.svg" alt="BUSCAR" width={25} />
            Buscar
          </Link>
        </li>
      </ul>

      <div className=" bg-neutral-500 h-screen rounded-2xl mt-2 ml-2">
        <div className="flex justify-between">
          <div className="flex">
            <img className="ml-5 mt-4" src="/menu.svg" alt="MENU" width={25} />
            <h3 className="text-white mt-4 ml-6">Tu biblioteca</h3>
          </div>
          <div>
            <Dropdown/>
          </div>
        </div>
        <div className="pb-3 mt-3">
          <div className="rounded-2xl m-2 bg-slate-400">
            <h3 className="ml-5 pt-3 font-bold text-white">
              Crea tu primera lista
            </h3>
            <p className="ml-5 pt-1">Es muy facil, y te echaremos una mano</p>
            <div className="ml-4 pt-1 pb-4">
              <Buttoncrear />
            </div>
          </div>
          <div className="rounded-2xl m-2 mt-7 bg-slate-400">
            <h3 className="ml-5 pt-3 font-bold text-white">
              Encuentra podcasts que quieras seguir
            </h3>
            <p className="ml-5 pt-1">
              Te avisaremos cuando salgan nuevos episodios
            </p>
            <div className="ml-4 pt-1 pb-4">
              <Buttonpodcasts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
