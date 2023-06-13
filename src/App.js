import "./App.css";
import React, { useState, useEffect } from "react";
//import Table from "./components/Table";
import DataTable from "./components/Table";
function App() {
  const [tableData, setTableData] = useState([]);
  const getData = async function () {
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/64886eea8e4aa6225eadb7d2"
    );
    if (response.status === 200) {
      const actualData = await response.json();
      return actualData.record;
    } else {
      throw new Error("Data not found");
    }
  };
  useEffect(() => {
    getData().then((res) => {
      setTableData(res);
    });
    return () => {};
  }, [setTableData]);
  return (
    <>
      <div className="container">
        <DataTable tableData={tableData} />
      </div>
    </>
  );
}

export default App;
