import React, { useEffect, useState } from "react";
import { Principal } from "@dfinity/principal";
import { token } from "../../../declarations/token";

function Balance() {
  const [inputValue, setInput] = useState('');
  const [balance, setBalance] = useState('');
  const [symbol, setSymbol] = useState('');
  const [balanceIsDisplayed, displayBalance] = useState(false);
  
  async function handleClick() {
    const principal = Principal.fromText(inputValue);
    const result = await token.balanceOf(principal);
    setBalance(result.toLocaleString());
    setSymbol(await token.getSymbol());
    displayBalance(true);
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e) => setInput(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      {
        balanceIsDisplayed && <p>This account has a balance of {balance} {symbol}.</p>
      }
    </div>
  );
}

export default Balance;
