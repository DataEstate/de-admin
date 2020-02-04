import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import superagent from "superagent";

const useStyles = makeStyles(theme => ({
  cardContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  card: {
    marginBottom: "20px",
    flexGrow: 1,
    marginRight: "10px",
    width: "45%"
  },
  cardHeader: {
    fontSize: "22px"
  },
  cardSubheader: {
    fontSize: "14px"
  }
}));

export const Growcom = () => {
  const classes = useStyles();

  const baseUrl = "http://localhost:5000";
  const apiEndpoint = `${baseUrl}/businesses`;

  const [businesses, setBusinesses] = useState([]);

  const processBusinesses = businesses => {
    let activeBusinesses = businesses.filter(business => {
      return (
        business.status &&
        business.status === "ACTIVE" &&
        business.pbus.length > 0
      );
    });
    activeBusinesses.sort((a, b) =>
      a.org_name < b.org_name ? -1 : a.org_name > b.org_name ? 1 : 0
    );
    return activeBusinesses;
  };
  // On load
  useEffect(() => {
    superagent.get(apiEndpoint).end((err, res) => {
      if (res) {
        setBusinesses(processBusinesses(res.body));
        console.log(res.body);
      }
    });
  }, []);

  return (
    <div>
      <Typography variant="h2">Growcom Participants</Typography>
      <div className={classes.cardContainer}>
        {businesses.map(business => (
          <Card
            key={business.org_id}
            variant="outlined"
            className={classes.card}
          >
            <CardContent>
              <Typography variant="h3" className={classes.cardHeader}>
                {business.org_name}
              </Typography>
              <Typography variant="subtitle1">ABN: {business.abn}</Typography>
              {business.pbus.map((pbu, idx) => (
                <Typography
                  key={idx}
                  variant="h5"
                  className={classes.cardSubheader}
                >
                  {`${pbu.physical_address}, ${pbu.physical_locality}, ${pbu.physical_state_code}`}
                </Typography>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Growcom;
