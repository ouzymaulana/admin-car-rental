import { Breadcrumbs, Typography, Link, Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcr = () => {
  return (
    <Box my={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Typography color="text.primary">
          <strong>Dashboard</strong>
        </Typography>
        <Link underline="hover" color="inherit" href="/dashboard">
          Dashboard
        </Link>
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcr;
