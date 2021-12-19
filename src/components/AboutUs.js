import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-bootstrap/Carousel";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { CardContent } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.disabled,
    backgroundColor: "#334443",
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {/* <Box m={3}/> */}
      <Carousel fade>
        <Carousel.Item>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="About US"
                height="400"
                image="https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg"
                title="About Us"
              />
            </CardActionArea>
          </Card>
          <Carousel.Caption>About Us</Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Box m={5} />
      <Grid
        container
        component="main"
        spacing={3}
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardContent>
                Visiting physical sports stores is past now. The most practical
                and cost effective option now to buy sports equipment is to buy
                them online. When you buy sports goods online, you enjoy all the
                benefits of online shopping. You can buy all your favourite
                sports equipment from an online sports equipment store without
                worrying about factors such as receiving duplicate goods, fraud,
                over charging, unavailability of products, etc. However, all
                this is true only if you buy from the best online sports shop in
                India i.e. Sports Shop
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
      <Box m={5} />
      <Grid
        container
        component="main"
        spacing={3}
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Couriers"
                  height="200"
                  image="https://pickaface.net/gallery/avatar/72392886_170409_0055_2pg6mpd.png"
                  title="Couriers"
                />
              </CardActionArea>
              <CardContent>
                Manoj Kumar Thakur
                <Typography variant="body2" color="textSecondary" component="p">
                  Computer and Science Engineering
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia />
              </CardActionArea>
              <CardContent>
                Engineers, as practitioners of engineering, are professionals
                who invent, design, analyze, build and test machines, complex
                systems, structures, gadgets and materials to fulfill functional
                objectives and requirements while considering the limitations
                imposed by practicality, regulation, safety and cost.
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
      <Box m={3} />
      <Grid
        container
        component="main"
        spacing={3}
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Couriers"
                  height="200"
                  image="https://pickaface.net/gallery/avatar/20141125_181228_19_burakaaa.png"
                  title="Couriers"
                />
              </CardActionArea>
              <CardContent>
                Pratap
                <Typography variant="body2" color="textSecondary" component="p">
                  Computer and Science Engineering
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia />
              </CardActionArea>
              <CardContent>
                Engineers, as practitioners of engineering, are professionals
                who invent, design, analyze, build and test machines, complex
                systems, structures, gadgets and materials to fulfill functional
                objectives and requirements while considering the limitations
                imposed by practicality, regulation, safety and cost.
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
      <Box m={3} />
      <Grid
        container
        component="main"
        spacing={3}
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Couriers"
                  height="200"
                  image="https://pm1.narvii.com/7050/6824c090fe96496d7ccb2b9cff91d701cba98accr1-1080-1080v2_hq.jpg"
                  title="Couriers"
                />
              </CardActionArea>
              <CardContent>
                Shivani Patil
                <Typography variant="body2" color="textSecondary" component="p">
                  Electronics and Communication Engineering
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia />
              </CardActionArea>
              <CardContent>
                Engineers, as practitioners of engineering, are professionals
                who invent, design, analyze, build and test machines, complex
                systems, structures, gadgets and materials to fulfill functional
                objectives and requirements while considering the limitations
                imposed by practicality, regulation, safety and cost.
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
      <Box m={3} />
      <Grid
        container
        component="main"
        spacing={3}
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Couriers"
                  height="200"
                  image="https://pickaface.net/gallery/avatar/unr_handsomeboy_180407_1616_z233f.png"
                  title="Couriers"
                />
              </CardActionArea>
              <CardContent>
                Gudla Trimula
                <Typography variant="body2" color="textSecondary" component="p">
                  Computer and Science Engineering, Vel Tech Multi tech
                  Engineering College
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia />
              </CardActionArea>
              <CardContent>
                Engineers, as practitioners of engineering, are professionals
                who invent, design, analyze, build and test machines, complex
                systems, structures, gadgets and materials to fulfill functional
                objectives and requirements while considering the limitations
                imposed by practicality, regulation, safety and cost.
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
      <Box m={3} />
      <Grid
        container
        component="main"
        spacing={3}
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Couriers"
                  height="200"
                  image="https://pickaface.net/gallery/avatar/20160221_130710_2010_coolboy.png"
                  title="Couriers"
                />
              </CardActionArea>
              <CardContent>
                Akhil
                <Typography variant="body2" color="textSecondary" component="p">
                  Mechnaical Engineering,
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia />
              </CardActionArea>
              <CardContent>
                Engineers, as practitioners of engineering, are professionals
                who invent, design, analyze, build and test machines, complex
                systems, structures, gadgets and materials to fulfill functional
                objectives and requirements while considering the limitations
                imposed by practicality, regulation, safety and cost.
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
      <Box m={3} />t
      <Grid
        container
        component="main"
        spacing={3}
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Couriers"
                  height="200"
                  image="https://pickaface.net/gallery/avatar/20160221_130710_2010_coolboy.png"
                  title="Couriers"
                />
              </CardActionArea>
              <CardContent>
                Jagdish
                <Typography variant="body2" color="textSecondary" component="p">
                  Mechnaical Engineering,
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia />
              </CardActionArea>
              <CardContent>
                Engineers, as practitioners of engineering, are professionals
                who invent, design, analyze, build and test machines, complex
                systems, structures, gadgets and materials to fulfill functional
                objectives and requirements while considering the limitations
                imposed by practicality, regulation, safety and cost.
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
      <Box m={3} />
      <Box m={10} />
      <Footer />
    </div>
  );
}
