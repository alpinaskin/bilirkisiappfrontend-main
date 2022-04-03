import { Card, CardContent } from "@mui/material";
import MainFormContainer from "src/views/cards/madditazminat-container/MainFormContainer";

const MaddiTazminat = () => {
  return (
    <Card>
      <CardContent sx={{ pt: (theme) => `${theme.spacing(2)} !important` }}>
        <MainFormContainer />
      </CardContent>
    </Card>
  );
};

export default MaddiTazminat;
