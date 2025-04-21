import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

// Reusable component for sort arrows
const SortArrows = ({ sortOrder }) => {
  return (
    <div className="h-fit">
      {sortOrder === "asc" && <IoMdArrowDropup fontSize={20} />}
      {sortOrder === "desc" && <IoMdArrowDropdown fontSize={20} />}
      {sortOrder === "neutral" && (
        <>
          <IoMdArrowDropup fontSize={20} />
          <IoMdArrowDropdown fontSize={20} className="-mt-2" />
        </>
      )}
    </div>
  );
};

function Table() {
  // Define table headers
  const headers = [
    { label: "Status", sortable: false, key: "status" },
    { label: "Title", sortable: true, key: "title" },
    { label: "Solution", sortable: false, key: "solution" },
    { label: "Tags", sortable: true, key: "tags" },
    { label: "Difficulty", sortable: true, key: "difficulty" },
    { label: "Frequency", sortable: true, key: "frequency" },
  ];

  // Example table data
  const [rows, setRows] = useState([
    {
      status: "Active",
      title: "Create a new user",
      solution: "Design",
      tags: ["Jee"],
      difficulty: "Easy",
      frequency: "High",
    },
    {
      status: "Inactive",
      title: "Fix bugs",
      solution: "Debugging",
      tags: ["Bugfix"],
      difficulty: "Hard",
      frequency: "Low",
    },
    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },
    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },    {
      status: "Active",
      title: "Optimize performance",
      solution: "Optimization",
      tags: ["Performance"],
      difficulty: "Medium",
      frequency: "Medium",
    },
  ]);

  // State to track sorting
  const [sortConfig, setSortConfig] = useState({ key: null, order: "neutral" });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Calculate the current rows to display
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < Math.ceil(rows.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Sorting function
  const handleSort = (key) => {
    let order = "neutral";

    if (sortConfig.key === key) {
      if (sortConfig.order === "neutral") order = "asc";
      else if (sortConfig.order === "asc") order = "desc";
      else order = "neutral";
    } else {
      order = "asc";
    }

    setSortConfig({ key, order });

    if (order === "neutral") {
      setRows([...rows]);
    } else {
      const sortedRows = [...rows].sort((a, b) => {
        if (a[key] < b[key]) return order === "asc" ? -1 : 1;
        if (a[key] > b[key]) return order === "asc" ? 1 : -1;
        return 0;
      });
      setRows(sortedRows);
    }
  };

  return (
    <div className="h-auto w-full mt-4">
      <table className="w-full">
        <thead className="bg-slate-200 sticky top-12 bg-white dark:bg-gray-800">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="py-3 px-6 text-left text-xs font-medium text-gray-500 tracking-wider cursor-pointer"
                onClick={() => header.sortable && handleSort(header.key)}
              >
                <div className="flex items-center">
                  {header.label}
                  {header.sortable && (
                    <SortArrows
                      sortOrder={
                        sortConfig.key === header.key ? sortConfig.order : "neutral"
                      }
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentRows.map((row, index) => (
            <tr className={`dark:border-none ${index%2 ===0 ?(' dark:bg-gray-900 bg-gray-50'):(' dark:bg-gray-800')}`} key={index}>
              <td className="py-4 px-6 text-sm dark:text-gray-200 text-gray-500">{row.status}</td>
              <td className="py-4 px-6 text-sm dark:text-gray-200 text-gray-500">{row.title}</td>
              <td className="py-4 px-6 text-sm dark:text-gray-200 text-gray-500">{row.solution}</td>
              <td className="py-4 px-6 text-sm">
                {row.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-2.5 text-xs p-1 rounded-full bg-green-500 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </td>
              <td className="py-4 px-6 text-sm dark:text-gray-200 text-gray-500">{row.difficulty}</td>
              <td className="py-4 px-6 text-sm dark:text-gray-200 text-gray-500">{row.frequency}</td>
            </tr>
            
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={headers.length}>
              <div className="flex justify-between text-gray-700 dark:text-gray-200 mt-4 items-center">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                  <ArrowLeft />
                </button>
                <span className="mx-2">
                  Showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, rows.length)} of {rows.length} entries
                </span>
                <button onClick={handleNextPage} disabled={currentPage === Math.ceil(rows.length / rowsPerPage)}>
                  <ArrowRight />
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
