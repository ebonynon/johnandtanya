import React from "react";
import john from "./images/image-john.jpg";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  slide: {
    flexGrow: 1,
    align: "center",
  },
  right: {
    flexGrow: 1,
    align: "right",
    top: "50%",
    left: "50%",
    position: "relative",
    boxShadow: "10px 10px 5px #ccc",
  },
  slideX: {
    flexGrow: 1,
    align: "center",
    paddingTop: "5%",
  },
  img: {
    position: "relative",
  },
  john: {
    width: "auto",
    height: "auto",
    maxWidth: 1080,
    boxShadow: "10px 10px 5px #ccc",
    minWidth: 275,
    marginRight: 10,
    marginLeft: 10,
  },
  txt: {
    position: "relativ",
    zIndex: "2000",
    left: "20px",
    color: "#e6ee9c",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  flex: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
    flexDirection: "row",
    padding: 0,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.slideX} fixed>
        <Grid
          container
          spacing={3}
          className={classes.slide}
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} lg={12} className={classes.img}>
            <Card className={classes.john}>
              <CardActionArea className={classes.flex}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  image={john}
                  title="Contemplative Reptile"
                  style={{ maxHeight: 540, maxWidth: 540 }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="p"
                    className={classes.txt}
                  >
                    “ If you want to lay the best foundation possible I’d
                    recommend taking this course. The depth the instructors go
                    into is incredible. I now feel so confident about starting
                    up as a professional developer. ”
                  </Typography>
                  <br></br>
                  <Typography gutterBottom variant="h6" component="h2">
                    <b>John Tarkpor</b> 
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    color="secondary"
                  >
                    <i>Junior Front-end Developer</i>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
