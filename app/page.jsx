import Link from "next/link";
import Navbar from "./components/navbar";
import Navscrool from "./components/navscrool";
import Premium from "./components/premium";

export default function Home() {
  return (
    <main className="flex">
      <div className="w-96">
        <Navbar />
      </div>
      <div className="container bg-stone-800 m-3 rounded-md	">
        <div className="flex w-full  justify-between">
          <Navscrool />
          <Premium />
        </div>
        <div>
          <div className="flex justify-between mx-5">
            <Link
              className=" font-bold text-white no-underline hover:underline"
              href=""
            >
              Listas seleccionadas
            </Link>
            <button className="text-white">Mostrar todos</button>
          </div>


          <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white group hover:shadow-xl transition duration-300 ease-in-out relative">
            <img
              className="m-5 flex"
              src="https://placekitten.com/640/480" // Reemplaza esta URL con la imagen de tu artista o álbum
              alt="Spotify Card"
            
            />
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:inline-block">
              Play
            </button>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Canciones mas escuchadas</div>
              <p className="text-gray-700 text-base">
                Tu actualizacion semanal de las...
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Etiqueta 1
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Etiqueta 2
              </span>
              {/* Agrega más etiquetas según sea necesario */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
