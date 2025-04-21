import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Search } from "@mui/icons-material";

// Mock data for quizzes
const quizzes = [
  { id: 1, title: "Quiz 1", questions: 10, date: new Date("2023-08-01") },
  { id: 2, title: "Quiz 2", questions: 15, date: new Date("2023-07-25") },
  { id: 3, title: "Quiz 3", questions: 20, date: new Date("2023-08-10") },
];

function InstructorQuizDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterDate, setFilterDate] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleDateChange = (event) => {
    setFilterDate(event.target.value);
  };

  const filteredQuizzes = quizzes
    .filter((quiz) => {
      return (
        quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!filterDate || quiz.date >= new Date(filterDate))
      );
    })
    .sort((a, b) => {
      return sortOrder === "asc" ? a.date - b.date : b.date - a.date;
    });

  return (
    <div className="mt-4 px-4">
      <div className="flex gap-2 mb-4">
        <Button variant="outlined">Add Quiz</Button>
        <Button variant="outlined">Add Question Bank</Button>
      </div>

      <div className="flex justify-between mb-4 gap-4">
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: <Search />,
          }}
        />
        <div>
          <TextField
            label="Sort by Date"
            variant="outlined"
            size="small"
            select
            value={sortOrder}
            onChange={handleSortChange}
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </TextField>

          <TextField
            label="Filter by Date"
            type="date"
            variant="outlined"
            size="small"
            value={filterDate}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Number of Questions</TableCell>
              <TableCell align="right">Date Created</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredQuizzes.map((quiz) => (
              <TableRow key={quiz.id}>
                <TableCell component="th" scope="row">
                  {quiz.title}
                </TableCell>
                <TableCell align="right">{quiz.questions}</TableCell>
                <TableCell align="right">
                  {quiz.date.toLocaleDateString()}
                </TableCell>
                <TableCell align="right">
                  <IconButton color="primary" aria-label="edit quiz">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" aria-label="delete quiz">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default InstructorQuizDashboard;
