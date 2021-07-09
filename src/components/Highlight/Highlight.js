import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import HighLightCard from "./HighLightCard";

function Highlight({ summary }) {
  return (
    <>
      <Grid container spacing={3}>
        {summary.map((item) => (
          <>
            <Grid item sm={4} xs={12}>
              <HighLightCard
                title={item.title}
                count={item.count}
                type={item.type}
              />
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}

export default Highlight;
