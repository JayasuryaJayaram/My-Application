//tsx file

import * as React from "react";
import styles from "./App.module.scss";
import {
  mergeClasses,
  makeStyles,
  tokens,
  shorthands,
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";
import { Card, Button } from "@fluentui/react-components";
const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    columnGap: "16px",
    rowGap: "36px",
  },

  title: {
    ...shorthands.margin(0, 0, "12px"),
  },

  card: {
    width: "300px",
    maxWidth: "100%",
    height: "fit-content",
  },

  flex: {
    // ...shorthands.gap("4px"),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  appIcon: {
    ...shorthands.borderRadius("4px"),
    height: "32px",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  cardFooter: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
  },
});

export default function App() {
  const style = useStyles();
  const handleClickCrmTicket = () => {
    window.open("https://forms.office.com/r/i15dT0utrv", "_blank");
  };
  const handleClickTms = () => {
    window.open(
      "https://quadra1.sharepoint.com/sites/spdev/TMS/SitePages/Home.aspx",
      "_blank"
    );
  };
  const handleClickTechCrm = () => {
    window.open("https://quadra1.sharepoint.com/sites/TechCRM#/", "_blank");
  };
  return (
    <section>
      <FluentProvider theme={webLightTheme}>
        <div
          style={{
            display: "flex",
            width: "100vw",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {/* 1st card */}
          <div className={styles.row} style={{ marginBottom: "10px" }}>
            <div className={styles.CrmTicketcolumn}>
              <Card className={styles.CrmTicketcard}>
                <header>
                  <img
                    src={require("../assets/CRM.png")}
                    alt="CRM Ticket logo"
                  />
                  <p className={styles.textCrm}>CRM Ticket</p>
                  <p className={styles.captionCrm}>Request your CRM ticket</p>
                </header>

                <footer className={mergeClasses(style.flex, style.cardFooter)}>
                  <Button
                    onClick={handleClickCrmTicket}
                    className={styles.CrmTicketbutton}
                  >
                    Request
                  </Button>
                </footer>
              </Card>
            </div>
            {/* 2nd card */}
            <div className={styles.Tmscolumn}>
              <Card className={styles.Tmscard}>
                <header>
                  <img src={require("../assets/TMS.png")} alt="TMS logo" />
                  <p className={styles.textTms}>TMS</p>
                  <p className={styles.captionTms}>Travel management system</p>
                </header>

                <footer className={mergeClasses(style.flex, style.cardFooter)}>
                  <button onClick={handleClickTms} className={styles.Tmsbutton}>
                    Open
                  </button>
                </footer>
              </Card>
            </div>
          </div>
          {/* 3rd card */}
          <Card
            style={{
              height: "188px",
              // width: "14.2%",
              borderTop: "7px solid #6a5fe7",
              paddingTop: "0px",
              paddingRight: "0px",
              width: "382px",
              marginTop: "6px",
            }}
          >
            <div className={styles.container}>
              <div style={{ width: "50%" }}>
                <header style={{ marginBottom: "1rem" }}>
                  <img
                    src={require("../assets/TCRM.png")}
                    className={styles.Techcrmlogo}
                    alt="Tech CRM logo"
                  />
                </header>
                <p className={styles.text}>Tech CRM</p>
                <p className={styles.caption}>
                  Log your customer <br /> activities here
                </p>

                <footer className={mergeClasses(style.flex, style.cardFooter)}>
                  <button
                    onClick={handleClickTechCrm}
                    className={styles.TechCrmbutton}
                  >
                    Open
                  </button>
                </footer>
              </div>
              <>
                <img
                  src={require("../assets/TCRM-2.png")}
                  className={styles.TechCrmImage}
                  alt="Laptop-image.png"
                />
              </>
            </div>
          </Card>
        </div>
      </FluentProvider>
    </section>
  );
}
