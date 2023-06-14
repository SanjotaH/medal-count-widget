import React from "react";

const TableHead = ({ columns, requestSort, getClassNamesFor }) => {
  return (
    <thead>
      <tr>
        <th></th>
        <th>Medals Count</th>
        {columns.map((column, index) => {
          return (
            <>
              <th
                key={index}
                onClick={() => requestSort(column.accessor)}
                className={
                  getClassNamesFor(column.accessor) === column.accessor
                    ? column.accessor
                    : null
                }
              >
                <span className={column.accessor}>
                  {column.label === "Total" ? "Total" : null}
                </span>
              </th>
            </>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
