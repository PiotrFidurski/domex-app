import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useDeleteHouseMutation } from "../state/houses/housesApiSlice";
import { House as HouseType } from "../state/types";

interface Props {
  house: HouseType;
}

export const House: React.FC<Props> = ({ house }) => {
  const [deleteHouse] = useDeleteHouseMutation();

  async function handleDelete() {
    await deleteHouse(house._id);
  }

  return (
    <Card sx={{ maxWidth: 500, marginBottom: "20px", width: "100%" }}>
      <CardMedia component="img" height="140" image="/house.jpg" alt="house" />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Label: {house.label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descritpion: {house.description}, click on a card for details.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="error"
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            handleDelete();
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
