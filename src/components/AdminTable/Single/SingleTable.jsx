import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

const fetchData = () =>
  axios.get(`${process.env.REACT_APP_BASE_URL}/api/FormDispaly`);

export default function SingleTable() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["AdminTable", id],
    queryFn: fetchData,
    select: (data) => data.data.FormData.find((item) => item._id === id),
  });
  const Data = data?.data?.FormData;

  if (isError) {
    return <div>{error.response?.data?.message}</div>;
  }
  if (isLoading)
    return (
      <>
        <Skeleton animation="wave" width={700} height={30} />
        <Skeleton animation="wave" width={700} height={30} />
        <Skeleton animation="wave" width={700} height={30} />
      </>
    );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Student's Name
            </TableCell>
            <TableCell component="th" scope="row">
              {Data.NameStudent}
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Student's Email
            </TableCell>
            <TableCell component="th" scope="row">
              {Data.Email}
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Student's DOB
            </TableCell>
            <TableCell component="th" scope="row">
              {Data.DOB}
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Student's Contact Number
            </TableCell>
            <TableCell component="th" scope="row">
              {Data.StudentContacatNo}
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Student's Category
            </TableCell>
            <TableCell component="th" scope="row">
              {Data.Category}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
