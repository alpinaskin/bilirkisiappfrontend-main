import Grid from "@mui/material/Grid";
import CardMembership from "src/views/cards/CardMembership";

const Membership = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={10}>
        <CardMembership />
      </Grid>
    </Grid>
  );
};

export default Membership;
