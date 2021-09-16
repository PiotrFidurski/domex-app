import * as React from "react";
import { Link } from "react-router-dom";
import { useFetchHousesQuery } from "../state/houses/housesApiSlice";
import { Heading, PageContainer, Spinner } from "../styles";
import { House } from "./House";

interface Props {}

export const Houses: React.FC<Props> = () => {
  const { data, isLoading } = useFetchHousesQuery();

  if (isLoading)
    return (
      <PageContainer>
        <Spinner />
      </PageContainer>
    );

  if (!data?.results.length)
    return <PageContainer flexCol>no houses exist yet.</PageContainer>;

  return (
    <PageContainer flexCol>
      <Heading>Available Houses</Heading>
      {data!.results?.map((house) => (
        <Link
          to={`/houses/${house._id}`}
          key={house._id}
          style={{ textDecoration: "none" }}
        >
          <House house={house} />
        </Link>
      ))}
    </PageContainer>
  );
};
