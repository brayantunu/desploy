export default function Premium() {
  return (
    <div className="flex ">
      <div className="flex mr-2">
        <button className="m-auto rounded-2xl bg-white px-4 py-1 font-bold">
          Descubrir Premium
        </button>
      </div>
      <div className="flex mr-2">
        <button className="m-auto rounded-2xl bg-slate-800 text-white px-4 py-1 font-bold">
          Instalar app
        </button>
      </div>
      <div className="flex rounded-full bg-slate-500 mr-2 m-auto p-2">
        <img  src="/campana.svg" width={25} alt="" />
      </div>
      <div className="flex rounded-full bg-slate-500 mr-2 m-auto p-2">
        <img src="/usuario.svg" alt="" width={25} />
      </div>
    </div>
  );
}
