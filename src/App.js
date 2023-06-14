import "./App.css";
import React, { useState, useEffect } from "react";
//import Table from "./components/Table";
import DataTable from "./components/Table";
function App() {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);
  const getData = async function () {
    const response = await fetch(
      "https://raw.githubusercontent.com/SanjotaH/medal-count-widget/main/medal.json"
    );
    if (response.status >= 200 && response.status < 400) {
      try {
        const actualData = await response.json();
        console.log(actualData);
        return actualData;
      } catch (error) {
        console.log(error);
        if (error) setError(error.message);
      }
    } else {
      throw new Error("Could'nt find the data. Server is down ");
      console.error("Could'nt find the data. Server is down ");
    }
  };
  useEffect(() => {
    getData()
      .then((res) => {
        setTableData(res);
      })
      .catch((err) => {
        console.log(err.message);
        if (err) setError(err.message);
      });
    return () => {};
  }, []);
  if (error) return <ErrorHandler error={error} />;
  return (
    <>
      <div className="container">
        <DataTable tableData={tableData} />
      </div>
    </>
  );
}
const ErrorHandler = (props) => {
  console.log(props);
  return (
    <>
      <div className="flex items-center justify-content">
        <div className="text-center">
          <h1>Error!</h1>
          <p className="text-danger">{props.error}</p>
        </div>
      </div>
    </>
  );
};
export default App;
