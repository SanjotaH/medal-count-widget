import React, { useState, useEffect, useMemo } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const useSortableData = (items, config = { key: "gold" }) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sorter = (a, b) => {
    let sortOrder = sortConfig?.key;
    let tieBreaker = "gold";
    let comparison;
    if (sortOrder === "gold") {
      tieBreaker = "silver";
    }
    if (sortOrder === "total") {
      a.total = a.gold + a.silver + a.bronze;
      b.total = b.gold + b.silver + b.bronze;
    }
    comparison = b[sortOrder] - a[sortOrder];
    if (comparison !== 0) {
      return comparison;
    } else {
      return b[tieBreaker] - a[tieBreaker];
    }
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig?.key;
  };

  const sortedItems = React.useMemo(() => {
    return items.sort(sorter);
  }, [items, sortConfig]);

  const requestSort = (key) => {
    setSortConfig({ key });
  };

  return { items: sortedItems, requestSort, sortConfig, getClassNamesFor };
};
const DataTable = ({ tableData }) => {
  const { items, requestSort, sortConfig, getClassNamesFor } = useSortableData(
    tableData
  );

  const columns = [
    { label: "", accessor: "code" },
    { label: "Gold", accessor: "gold" },
    { label: "Silver", accessor: "silver" },
    { label: "Bronze", accessor: "bronze" },
    { label: "Total", accessor: "total" },
  ];
  return (
    <table className="table table-responsive table-medal-data">
      <caption>Medals Count of all the Countries</caption>
      <TableHead
        columns={columns}
        requestSort={requestSort}
        getClassNamesFor={getClassNamesFor}
      />
      <TableBody items={items} />
    </table>
  );
};

export default DataTable;
