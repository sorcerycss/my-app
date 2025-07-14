import React from "react";

function App() {
  return (
    <div className="app" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <header className="header">
        <a href="https://store.steampowered.com/" className="login">
          <i className=""></i>
          <span>Steam Log in</span>
        </a>
        <h1 className="title">Cases for Crypto</h1>
        <p className="subtitle">Subheading or description</p>
        <button className="btn" id="btn-browse">
          Browse cases
        </button>

        <div className="sell-crate">
          <label for="from">From:</label>
          <input name="from" id="from"></input>

          <select name="currency" id="currency-select">
            <option value="">Select currency</option>
            <option value="usdc">USDC</option>
            <option value="usdt">USDT</option>
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
            <option value="ltc">LTC</option>
            <option value="pol">POL</option>
          </select>
        </div>
      </header>

      <main class="main">
        <div className="container">
          <div className="crate">
            <h2>Case Name</h2>
            <p>0,00 ETH</p>
          </div>
          <div className="balance">
            <h2>Account Balance</h2>
            <p>0,00 ETH</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
