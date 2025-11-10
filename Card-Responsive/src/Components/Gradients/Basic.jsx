

const Basic = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* basic */}
      <div className="h-32 w-64 bg-linear-to-r  from-blue-500 to-purple-500"></div>

      {/* color gradient using (via) */}
      <div className="h-32 w-64 bg-linear-to-r from-pink-500 via-orange-500 to-yellow-500"> </div>

      {/* Gradient text */}

      <h1 className="text-4xl font-bold bg-linear-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Gradient Text</h1>


      {/* gradient border text */}

      {/* <div className="p-1 rounded-xl bg-linear-to-r from-indigo-500 to-pink-500">
        <div className="bg-white px-5 py-3 rounded-xl">
          Gradient Border Card
        </div>

      </div> */}

      {/* Gradient button hover animation */}

      


      <button className="px-6 py-3 text-white font-semibold rounded-lg bg-linear-to-r from-purple-500 to-blue-500
      hover:from-blue-500 hover:to-purple-500 transition duration-300
      ">
        Hover me
      </button>

      {/* gradient overlay on Image */}

      <div className="relative h-40 w-64 rounded-xl overflow-hidden">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/San_Diego_Comic-Con_2024_Masquerade_-_Cosplay_of_Batman_3.jpg" alt=""
         className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
        <p className="absolute bottom-2 left-2 text-white font-bold"> Gradient Overlay text</p>
      </div>

      {/*  Gradient shadow glow */}
      <div className="p-1 rounded-xl  bg-linear-to-r from-cyan-500 to-blue-600 shadow-lg  shadow-blue-500/50">
        <div className="bg-black text-white p-5 rounded-xl"> Glowing Gradient Card </div>
      </div>

    </div>
  )
}

export default Basic