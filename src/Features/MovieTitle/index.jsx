import {
  TileLink,
  Tile,
  Title,
  Poster,
  AdditionalInfo,
  Tags,
  Tag,
  Rating,
  StarIcon,
  Rate,
  Votes,
  Details,
  DetailsBlock,
} from "./styled";
import noMovieImage from "../../../images/noMovieImage.svg";
import starIcon from "../../../images/starIcon.svg";
import { Genres } from "../genres";

export const MovieTile = ({
  poster,
  title,
  additionalInfo,
  id,
  genres,
  rate,
  voteCount,
  $hasYear,
  $hasRole,
}) => {
  const APIimage = "https://image.tmdb.org/t/p/w500/";
  const movieGenres = Genres.filter((genre) => genres.includes(genre.id));

  return (
    <TileLink to={`/movies/${id}`} key={id}>
      <Tile>
        <Poster src={poster ? `${APIimage}${poster}` : noMovieImage} alt="" />
        <Details>
          <DetailsBlock>
            <Title>{title}</Title>
            {additionalInfo ? (
              <AdditionalInfo $hasRole={$hasRole} $hasYear={$hasYear}>
                {additionalInfo}
              </AdditionalInfo>
            ) : null}
            <Tags>
              {movieGenres.map((genre) => (
                <Tag key={genre.id}>{genre.name}</Tag>
              ))}
            </Tags>
          </DetailsBlock>
          <Rating>
            <StarIcon src={starIcon} />
            <Rate>{rate ? rate.toString().replace(".", ",") : null}</Rate>
            <Votes>{voteCount} votes</Votes>
          </Rating>
        </Details>
      </Tile>
    </TileLink>
  );
};