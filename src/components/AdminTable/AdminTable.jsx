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

const fetchData = () =>
  axios.get(`${import.meta.env_VITE_BASE_URL}/api/FormDispaly`);

export default function AdminTable() {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["AdminTable"],
    queryFn: fetchData,
  });
  const rows = data?.data?.FormData;

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
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => navigate(`/student/${row._id}`)}
            >
              <TableCell component="th" scope="row">
                {row.NameStudent}
              </TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.DOB}</TableCell>
              <TableCell align="right">{row.StudentContacatNo}</TableCell>
              <TableCell align="right">{row.AdmissionCategory}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
