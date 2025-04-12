function App() {
  return (
    <>
      <div className="w-screen h-screen bg-cyan-700 flex p-30 items-center flex-col text-white gap-9">
        <h1 className="text-3xl">
          <span className="text-emerald-500">Webinar</span>.gg
        </h1>
        <div className="flex flex-col gap-7 justify-center items-center">
          <div className="font-bold text-xl">Verify Your Age</div>
          <div className="flex flex-col gap-7 justify-center items-center">
            <label htmlFor="">
              Please confirm your birth year.This data will not be stored.
            </label>
            <div className="flex flex-col justify-center items-center text-white w-4/6 gap-5">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Birth Year"
                className="border-0 outline-0 bg-gray-500 w-full rounded px-2 py-1"
              />
              <button className="font-bold bg-gray-300 text-white bold   border-0 outline-0 rounded  w-full px-2 py-1">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
