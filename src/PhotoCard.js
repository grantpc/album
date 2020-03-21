import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function PhotoCard(props) {
  return (
    <div>
      <Card style={{ maxWidth: 345, marginRight: 10, marginTop: 10 }}>
        <CardActionArea>
          <CardMedia
            height="300"
            component="img"
            image={props.photo.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.photo.title}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              {props.photo.location}
            </Typography> */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button variant="contained" style={{ marginTop: 10 }}>
                Open
              </Button>
              <Button variant="contained" style={{ marginTop: 10 }}>
                Edit
              </Button>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
