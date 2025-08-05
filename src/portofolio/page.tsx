import Sidebar from "@/sideBar/page";

export default function Portofolio() {
  return (
    <>
      <nav className="absolute z-20 top-0 left-0">
        <Sidebar />
      </nav>

      <div className="titleDetailCryptoInfo pl-20 mb-5">
        <h2 className="text-white text-5xl">
          crypto<span className="text-blue-600">Info</span>
        </h2>
      </div>

      <div className="portofolio pl-20 mb-5 w-screen">
        <div className="portofolioBalance text-white p-5 bg-blue-950 w-[35%] ">
          <div className="flex justify-between">
            <h2>Portofolio Balance</h2>
            <div className="dayBalance">
              <h2>7 Days</h2>
            </div>
          </div>
          <div className="valueBalance flex justify-between items-center mt-5">
            <h2 className="text-4xl">$200.133.455</h2>
            <div className="myAset p-1 text-green-500">
              <h2>+2.68</h2>
            </div>
          </div>
        </div>

        <div className="historyAsset w-[35%] bg-blue-950 p-5 mt-10">
          <div className="tittleHistoryAsset flex justify-between text-white">
            <h2>Asset Balance</h2>
            <h2>List</h2>
          </div>
        </div>
      </div>
    </>
  );
}
