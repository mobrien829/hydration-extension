import React from "react";
import "./App.css";

const Table = ({ data }) => {
  const mapData = (array) => {
    return array.map((glass) => {
      console.log(glass);
      return (
        <tr>
          <td className="col1">{glass.glass}</td>
          <td className="col2">{glass.time}</td>
        </tr>
      );
    });
  };
  return (
    <table className="time-list">
      <thead>
        <tr>
          <th className="col1">Glass #</th>
          <th className="col2">Time</th>
        </tr>
      </thead>
      <tbody>{mapData(data)}</tbody>
    </table>
  );
};

export default Table;
