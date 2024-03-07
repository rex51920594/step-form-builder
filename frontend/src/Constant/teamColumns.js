// import AdminPanelSettingsOutlinedIcon from "@material-ui/icons/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import SecurityOutlinedIcon from "@material-ui/icons/SecurityOutlined";
import { Box, Typography } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import { blue } from '@material-ui/core/colors';
import React, {useState, useEffect} from "react";
import { FormControlLabel, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MatEdit = ({ index }) => {

    const handleEditClick = () => {
        // some action
    }


    return <FormControlLabel
               control={
                   <IconButton color="secondary" component={Link} to="/" aria-label="back"  >
                       <EditIcon style={{ color: blue[500] }} />
                   </IconButton>
               }
           />
};

const teamColumns = (colors) => {
  return [
    { field: "id", headerName: "ID" },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 140,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <MatEdit index={params.row.id} />
          </div>
        );
      },
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundcolor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <SecurityOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
};

export default teamColumns;
