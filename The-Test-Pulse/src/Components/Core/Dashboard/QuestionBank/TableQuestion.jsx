import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function isUrl(str) {
  const urlRegex = /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]*[-A-Za-z0-9+&@#/%=~_|]$/
  return urlRegex.test(str)
}




export default function DataTable({ Questions }) {
  console.log(Questions);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Question</StyledTableCell>
            <StyledTableCell align="right">Options</StyledTableCell>
            <StyledTableCell align="right">Answer</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Questions &&
            Questions.map((Questions) => (
              <StyledTableRow key={Questions._id}>
                <StyledTableCell component="th" scope="row">
                {isUrl(Questions.questionText) ? (
    <img src={Questions.questionText} className="h-24" alt="Question Image" />
  ) : (
    Questions.questionText
  )}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {Questions.options.map((option) => (
                    <ul className=" list-disc flex   justify-end">
                      <li className="text-left">{option}</li>
                    </ul>
                  ))}
                </StyledTableCell>
                <StyledTableCell align="right">
                 <p className="text-caribbeangreen-500"> {Questions.answer}</p> 
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
