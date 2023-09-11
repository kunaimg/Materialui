import React, { Fragment, useEffect, useState } from "react";
import Drawer from "../componenets/StarterDrawer";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CountUp from "react-countup";

function Home() {
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  }, []);
  return (
    <Fragment>
      <Box sx={{ display: "flex" }}>
        <Drawer />
        <Box
          sx={{
            backgroundColor: "whitesmoke",
            width: "100%",
            paddingTop: "5rem",
            paddingLeft: "1rem",
          }}
        >
          <Grid container>
            {animate ? (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"24rem"}
                height={"9rem"}
                sx={{ marginTop: "0" }}
              >
                {" "}
              </Skeleton>
            ) : (
              <Grid item sx={{ marginLeft: "2rem", marginTop: "1rem" }}>
                <Card
                  sx={{
                    maxWidth: 345,
                    width: "24rem",
                    height: "9rem",
                    background:
                      "linear-gradient(45deg,#130f40 30%, #30336b 90%)",
                    color: "white",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <ChatBubbleIcon sx={{ marginBottom: "0.6rem" }} />
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        $ <CountUp end={500} delay={0.2} duration={2} />
                      </Typography>
                      <Typography variant="subtitle1">Total Earning</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            )}

            {animate ? (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"24rem"}
                height={"9rem"}
                sx={{ marginLeft: "0.5rem" }}
              >
                {" "}
              </Skeleton>
            ) : (
              <Grid item sx={{ marginLeft: "2rem", marginTop: "1rem" }}>
                <Card
                  sx={{
                    maxWidth: 345,
                    width: "24rem",
                    height: "9rem",
                    background:
                      "linear-gradient(45deg,#2ecc71 30%,#27ae60 90%)",
                    color: "white",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <ChatBubbleIcon sx={{ marginBottom: "0.6rem" }} />
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        $ <CountUp end={500} delay={0.2} duration={2} />
                      </Typography>
                      <Typography variant="subtitle1">Total Earning</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            )}

            <Grid item sx={{ marginLeft: "2rem", marginTop: "1rem" }}>
              {animate ? (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={"24rem"}
                  height={"5rem"}
                  sx={{ marginLeft: "0.5rem" }}
                >
                  {" "}
                </Skeleton>
              ) : (
                <Card
                  sx={{
                    maxWidth: 345,
                    width: "24rem",
                    height: "5rem",
                    background:
                      "linear-gradient(45deg,#2ecc71 30%,#27ae60 90%)",
                    color: "white",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Grid container>
                        <Grid item>
                          <ChatBubbleIcon
                            sx={{
                              marginTop: "1.2rem",
                              marginLeft: "0.4rem",
                            }}
                          />
                        </Grid>
                        <Grid item sx={{ marginLeft: "2rem" }}>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            $ <CountUp end={500} delay={0.2} duration={2} />
                          </Typography>
                          <Typography variant="subtitle1">
                            Total Income
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              )}

              {animate ? (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={"24rem"}
                  height={"5rem"}
                  sx={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}
                ></Skeleton>
              ) : (
                <Card
                  sx={{
                    maxWidth: 345,
                    width: "24rem",
                    height: "5rem",
                    background: "white",
                    color: "black",
                    marginTop: "1rem",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Grid container>
                        <Grid item>
                          <ChatBubbleIcon
                            sx={{
                              marginTop: "1.2rem",
                              marginLeft: "0.4rem",
                            }}
                          />
                        </Grid>
                        <Grid item sx={{ marginLeft: "2rem" }}>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            $ <CountUp end={500} delay={0.2} duration={2} />
                          </Typography>
                          <Typography variant="subtitle1">
                            Total Income
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              )}
            </Grid>
          </Grid>
          <Grid container>
            {animate ? (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"53vw"}
                height={"48vh"}
                sx={{ marginLeft: "0.5rem" }}
              >
                {" "}
              </Skeleton>
            ) : (
              <Grid
                item
                component={Paper}
                sx={{
                  marginLeft: "2rem",
                  marginTop: "1rem",
                  backgroundColor: "white",
                  height: "48vh",
                  width: "53vw",
                }}
              ></Grid>
            )}
            {animate ? (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"25vw"}
                height={"48vh"}
                sx={{ marginLeft: "6rem", marginTop: "1rem" }}
              ></Skeleton>
            ) : (
              <Grid
                item
                component={Paper}
                sx={{
                  marginLeft: "2rem",
                  marginTop: "1rem",
                  backgroundColor: "white",
                  height: "48vh",
                  width: "25vw",
                }}
              >
                <Box>
                  {" "}
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion disabled>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>Disabled Accordion</Typography>
                    </AccordionSummary>
                  </Accordion>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Home;
