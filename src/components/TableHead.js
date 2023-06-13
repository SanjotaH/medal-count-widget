import React from "react";

const TableHead = ({ columns, requestSort, getClassNamesFor }) => {
  return (
    <thead>
      <tr>
        <th></th>
        <th></th>
        {columns.map((column) => {
          return (
            <>
              <th
                key={column.accessor}
                onClick={() => requestSort(column.accessor)}
                className={
                  getClassNamesFor(column.accessor) === column.accessor
                    ? column.accessor
                    : null
                }
              >
                {column.label}
              </th>
            </>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
