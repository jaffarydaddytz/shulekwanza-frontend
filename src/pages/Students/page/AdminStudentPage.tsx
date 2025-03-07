import { Box, Typography } from "@mui/joy";
import React from "react";
import { profilepicture } from "../../../assets";
import { useSelector } from "react-redux";

const AdminStudentPage = () => {
  const user = useSelector((state: any) => state.auth.user.user);
  const fname = user.fname;
  const lname = user.lname;
  const email = user.email;
  const role = user.role;
  console.log("fname", user.fname);
  console.log("lname", user.lname);

  return (
    <>
      <Box
        sx={{
          width: "230px",
          height: "100px",
          backgroundColor: "primary.400",
          borderRadius: 5,
          padding: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <img
          alt="logo"
          src={profilepicture}
          width={60}
          height={80}
          style={{ borderRadius: 4 }}
        />

        <Box>
          <Typography level="h4" sx={{ color: "white", fontSize: "16px" }}>
            {fname} {lname}
          </Typography>

          <Typography sx={{ color: "white", fontSize: "12px" }}>
            {" "}
            {email}
          </Typography>
          <Typography sx={{ color: "white", fontSize: "12px" }}>
            {" "}
            {role}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AdminStudentPage;
