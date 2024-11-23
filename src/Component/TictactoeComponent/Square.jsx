import React, { useState } from "react";

export default function Square({value,onSquareClick}) {

  return (
    <button
      className="square"
      style={{ height: "30px", width: "30px" }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
