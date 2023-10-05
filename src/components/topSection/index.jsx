

export function TopSection() {
  return (
    <div className="absolute w-full h-screen top-0 left-0 bg-[#1756dd32] flex flex-col text-center justify-center items-center p-t-[13%] z-[99]">
      <h1 className="m-0 text-[#fff] font-bold text-[80px]">Global Warming</h1>
      <h4 className="m-0 text-[#fff] font-bold text-[30px] mt-[8px]">Keep it cool for safe living</h4>
      <p className="m-0 text-white text-base font-medium leading-6 max-w-xs text-center">
        You can help us cool off our world and have it go back tobest
        state ever by donating to help fix our only world and our beloved EARTH!
        Be cool and let the earth be cool. Let the ice burgs to live. Globe is
        warming and will set to fire. Stop polluting, it will cost extra.
      </p>
      <button className="outline-none border-none bg-green-600 text-white text-xl font-bold rounded-lg px-8 py-2 mt-5 cursor-pointer border-2 border-transparent transition-all duration-350 ease-in-out hover:bg-transparent hover:border-green-600">
        Donate
      </button>
      {/* <MadeBy>
        <u>Made By:</u> Islem Maboud
      </MadeBy> */}
    </div>
  );
}
