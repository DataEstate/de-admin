import React, { useEffect, useState, useCallback } from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  ListItem,
  ListItemText
} from "@material-ui/core";
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
    width: "45%",
    padding: "16px",
    minHeight: "100px"
  },
  cardHeader: {
    fontSize: "22px"
  },
  cardSubheader: {
    fontSize: "14px"
  },
  inlineHeading: {
    fontWeight: "bold"
  }
}));

export const FairFarms = () => {
  const classes = useStyles();

  const baseUrl = "http://localhost:5005";
  const apiEndpoint = `${baseUrl}/businesses`;

  const [buyers, setBuyers] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  const processBusinesses = businesses => {
    let businessBuyers = [];
    let businessSuppliers = [];

    businesses.forEach(business => {
      if (business.status && business.status === "ACTIVE") {
        if (business.types.includes("BUYER")) {
          businessBuyers.push(business);
        }
        if (business.types.includes("SUPPLIER")) {
          businessSuppliers.push(business);
        }
      }
    });
    businessBuyers.sort((a, b) =>
      a.org_name < b.org_name ? -1 : a.org_name > b.org_name ? 1 : 0
    );
    businessSuppliers.sort((a, b) =>
      a.org_name < b.org_name ? -1 : a.org_name > b.org_name ? 1 : 0
    );
    setBuyers(businessBuyers);
    setSuppliers(businessSuppliers);
    console.log("Buyers: ", businessBuyers);
    console.log("Suppliers: ", businessSuppliers);
  };

  const getSuppliers = (orgId = "") => {
    if (orgId === "") {
      return [];
    } else {
      return suppliers.filter(supplier => {
        console.log(supplier);
        const supplierPbus = supplier.pbus;
        const matchedBuyerCount =
          supplierPbus && supplierPbus[0].suppliedTo
            ? supplierPbus[0].suppliedTo.filter(buyer => {
                return buyer.org_id === orgId;
              }).length
            : 0;
        return matchedBuyerCount > 0;
      });
    }
  };

  const renderSuppliers = (orgId = "") => {
    const businessSuppliers = getSuppliers(orgId);
    return (
      <div className="businessSuppliers">
        <Typography variant="body1">
          <span className={classes.inlineHeading}>Total Suppliers: </span>
          {` ${businessSuppliers.length}`}
        </Typography>
        {businessSuppliers.map((supplier, idx) => {
          return (
            <ListItem>
              <ListItemText
                primary={supplier.org_name}
                secondary={`PBU: ${supplier.pbus ? supplier.pbus[0].name : ""}`}
              />
            </ListItem>
          );
        })}
      </div>
    );
  };
  // On load
  useEffect(() => {
    superagent.get(apiEndpoint).end((err, res) => {
      if (res) {
        processBusinesses(res.body);
        console.log("Raw: ", res.body);
        console.log(buyers);
      }
    });
  }, []);

  return (
    <div>
      <Typography variant="h2">Fair Farms Participants</Typography>
      <div className={classes.cardContainer}>
        {buyers.map((buyer, idx) => (
          <Card key={buyer.org_id} variant="outlined" className={classes.card}>
            <Typography variant="h3" className={classes.cardHeader}>
              {buyer.org_name}
            </Typography>
            {renderSuppliers(buyer.org_id)}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FairFarms;

/**
 * {{businesses.map(business => (
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
        ))}}
 */
