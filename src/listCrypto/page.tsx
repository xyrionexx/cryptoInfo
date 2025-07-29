"use client";
import "./listCrypto.css";
import Sidebar from "@/sideBar/page";

const cryptoData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$800,000",
    change: -2.14,
    marketCap: "$1.25T",
    volume: "$65.43B",
    circulating: "19.3M",
    maxSupply: "21M",
    ath: "$69,000",
    atl: "$67",
    date: "20/16/2025",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$4,200",
    change: 1.85,
    marketCap: "$505B",
    volume: "$12.8B",
    circulating: "120.3M",
    maxSupply: "∞",
    ath: "$4,891",
    atl: "$0.43",
    date: "20/16/2025",
  },
];

export default function ListCrypto() {
  return (
    <>
      <div className="heroListCrypto relative w-screen h-screen flex">
        <div className="sideBar flex absolute left-0 top-0">
          <Sidebar />
        </div>
        <div className="listCrypto h-screen  ml-25 mt-2 ">
          <div className="titleCryptoInfo">
            <h2 className="logoCrypto text-5xl font-bold">
              crypto<span>Info</span>
            </h2>
          </div>
          <div className="dataListCrypto">
            <div className="parentMenu flex mt-20 justify-between text-white">
              <div className="menu ">
                <button className=" bg-blue-950 p-2 px-4 rounded-l-3xl">
                  HOME
                </button>
                <button className=" bg-blue-950 p-2 px-4">FAVORIT</button>
                <button className=" bg-blue-950 p-2 px-4 rounded-r-3xl">
                  HOT
                </button>
              </div>
              <div className="search mr-10 mb-10">
                <input type="text" placeholder="Search.." />
              </div>
            </div>
            <div className="cryptoDetail">
              {/* Desktop/Tablet Table View */}
              <div className="tableContainer">
                <table className="cryptoTable">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Symbol</th>
                      <th>Price USD</th>
                      <th>24h Change %</th>
                      <th>Market Cap USD</th>
                      <th>Volume 24h USD</th>
                      <th>Circulating Supply</th>
                      <th>Max Supply</th>
                      <th>ATH</th>
                      <th>ATL</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cryptoData.map((crypto, index) => (
                      <tr key={index}>
                        <td>
                          <div className="nameCell">
                            <span className="cryptoName">{crypto.name}</span>
                          </div>
                        </td>
                        <td>
                          <span className="symbol">{crypto.symbol}</span>
                        </td>
                        <td>
                          <span className="price">{crypto.price}</span>
                        </td>
                        <td>
                          <span
                            className={
                              crypto.change >= 0 ? "positive" : "negative"
                            }
                          >
                            {crypto.change >= 0 ? "+" : ""}
                            {crypto.change}%
                          </span>
                        </td>
                        <td>
                          <span className="marketCap">{crypto.marketCap}</span>
                        </td>
                        <td>
                          <span className="volume">{crypto.volume}</span>
                        </td>
                        <td>{crypto.circulating}</td>
                        <td>{crypto.maxSupply}</td>
                        <td>
                          <span className="ath">{crypto.ath}</span>
                        </td>
                        <td>
                          <span className="atl">{crypto.atl}</span>
                        </td>
                        <td>
                          <span className="date">{crypto.date}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="mobileCard">
                <div className="cardContainer">
                  {cryptoData.map((crypto, index) => (
                    <div key={index} className="cryptoCard">
                      <div className="cardHeader">
                        <div className="cardTitle">
                          <span className="cardName">{crypto.name}</span>
                          <span className="cardSymbol">{crypto.symbol}</span>
                        </div>
                        <span className="cardPrice">{crypto.price}</span>
                      </div>

                      <div className="cardGrid">
                        <div className="cardItem">
                          <span className="cardLabel">Market Cap</span>
                          <span className={`cardValue marketCap`}>
                            {crypto.marketCap}
                          </span>
                        </div>

                        <div className="cardItem">
                          <span className="cardLabel">Volume 24h</span>
                          <span className={`cardValue volume`}>
                            {crypto.volume}
                          </span>
                        </div>

                        <div className="cardItem">
                          <span className="cardLabel">ATH</span>
                          <span className={`cardValue ath`}>{crypto.ath}</span>
                        </div>

                        <div className="cardItem">
                          <span className="cardLabel">ATL</span>
                          <span className={`cardValue styles.atl`}>
                            {crypto.atl}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`cardChange ${
                          crypto.change >= 0 ? "positive" : "negative"
                        }`}
                      >
                        {crypto.change >= 0 ? "+" : ""}
                        {crypto.change}% (24h)
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
