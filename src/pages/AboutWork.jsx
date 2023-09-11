import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Stack,
  Box,
  Skeleton,
} from "@mui/material";

const backgroundImage =
  "data:image/jpeg;base64,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"; // Replace with your image URL

const cardStyle = {
  background: backgroundImage,
  backgroundSize: "cover",
  color: "white",
};

function AboutWork() {
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  }, []);
  return (
    <Container>
      <Stack direction={"row"} flexWrap={"wrap"}>
        {" "}
        {[1, 2, 3, 1, 1, 1, 1, 1, 4, 5].map(() => {
          return (
            <Box>
              {animate ? (
                <Skeleton
                  animation="wave"
                  width={"22rem"}
                  variant="rectangular"
                  height={"13rem"}
                  sx={{
                    marginLeft: "0.5rem",

                    marginRight: "10px",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                </Skeleton>
              ) : (
                <Card
                  sx={{
                    width: "23rem",
                    marginRight: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="Background Image"
                    height="140"
                    image={backgroundImage}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Admin Users
                    </Typography>
                    <Typography variant="body2">
                      This is very helpful dashboard for users
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}

export default AboutWork;
