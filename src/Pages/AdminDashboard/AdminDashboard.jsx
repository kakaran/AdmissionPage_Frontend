import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AdminTable from "../../Components/AdminTable/AdminTable";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <main className="grid place-content-center">
        <AdminTable />
      </main>
    </>
  );
};

export default AdminDashboard;
