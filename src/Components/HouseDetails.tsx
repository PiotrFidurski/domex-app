import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useParams } from "react-router";
import { useFetchHouseQuery } from "../state/houses/housesApiSlice";
import * as S from "../styles";

interface Props {}

export const HouseDetails: React.FC<Props> = () => {
  const { houseId } = useParams<{ houseId: string }>();

  const { data, isLoading } = useFetchHouseQuery(houseId);

  if (isLoading && !data)
    return (
      <S.PageContainer>
        <S.Spinner />
      </S.PageContainer>
    );

  if (!data)
    return (
      <S.PageContainer>
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sorry this house is not available anymore
            </Typography>
          </CardContent>
        </Card>
      </S.PageContainer>
    );

  const house = data?.result;

  return (
    <S.PageContainer flexCol>
      <S.Heading>House Details</S.Heading>
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="140"
          image="/house.jpg"
          alt="house"
        />
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Label: {house.label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descritpion: {house.description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="caption" color="text.secondary">
              Address: {house.address}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="caption" color="text.secondary">
              Number of floors: {house.floorsNumber}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    </S.PageContainer>
  );
};
