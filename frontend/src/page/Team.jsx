// import { mockDataTeam } from "../../constants/mockData";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../Constant/mockData";
import teamColumns from "../Constant/teamColumns";
import { tokens } from "../styles/theme";
import { useForm } from "react-hook-form";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {FormContainer, TextFieldElement} from 'react-hook-form-mui'
import Button from '@material-ui/core/Button';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = React.useState("connected");

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  // row - columns --> data display...
  return (
    <Box m="20px">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid xs={12} container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Box
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
            <FormContainer
                defaultValues={{name: ''}}
                onSuccess={data => onSubmit(data)}
            >
                <TextFieldElement name="name" label="Name" required/>
                <Grid container marginTop={2}>
                  <Button type="submit" variant="contained" color="primary">Search</Button>
                </Grid>

            </FormContainer>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        m="40px 0 0 0"
        height="70vh"
        // custom css for material ui
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.blueAccent[700],
            borderTop: "none",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid xs={12} container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <DataGrid
                  rows={mockDataTeam}
                  columns={teamColumns(colors)}
                  slots={{
                    footer: CustomFooterStatusComponent,
                  }}
                  slotProps={{
                    footer: { status },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Team;

export function CustomFooterStatusComponent(props) {
  return (
    <Box sx={{ p: 1, display: "flex" }}>
      <FiberManualRecordIcon
        fontSize="small"
        sx={{
          mr: 1,
          color: props.status === "connected" ? "#4caf50" : "#d9182e",
        }}
      />
      Status {props.status}
    </Box>
  );
}
