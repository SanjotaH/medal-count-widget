import React from "react";
const flagOrder = [
  "USA",
  "NOR",
  "NED",
  "FRA",
  "SWE",
  "ITA",
  "CAN",
  "SUI",
  "RUS",
  "BLR",
  "GER",
  "AUT",
  "CHN",
];
const flagHeight = 17;

const getflagOrder = (code) => {
  const flagIndex = flagOrder.indexOf(code);
  const index = flagIndex > -1 ? flagIndex : 0;
  return index * flagHeight * -1;
};
const TableBody = ({ items }) => {
  //const sumValues = tableData;

  //console.log(sumValues());

  return (
    <tbody>
      {items.map((item, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td style={{ width: "25px" }}>
            <div
              style={{
                backgroundPosition: "0 " + getflagOrder(item.code) + "px",
              }}
              className="sprite"
            ></div>
          </td>
          <td style={{ textAlign: "left" }}>{item.code}</td>
          <td>{item.gold}</td>
          <td>{item.silver}</td>
          <td>{item.bronze}</td>
          <td>{item.gold + item.silver + item.bronze}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
