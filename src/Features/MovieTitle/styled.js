import styled, { css } from "styled-components";
import { Link } from "react-router";

export const TileLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const Tile = styled.article`
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.heather};

  display: grid;
  grid-template-rows: auto 1fr;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.03, 1.03);
    transition: 0.5s ease-out 0s;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
  }
`;

export const Poster = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.silver};

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    width: 114px;
    height: auto;
    margin-bottom: 0;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    justify-content: flex-start;
    gap: 8px;
  }
`;

export const DetailsBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;

export const Title = styled.h2`
  line-height: 1.3;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.black};
  font-size: 22px;
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    margin-top: 0;
    font-size: 16px;
  }
`;

export const AdditionalInfo = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: ${({ theme }) => theme.color.silver};
  margin: 8px 0;
  ${({ $hasRole }) =>
    !$hasRole &&
    css`
      & > span.bracket {
        display: none;
      }
    `}
  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    font-size: 14px;
    margin: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    & > span.bracket {
      display: none;
    }
    ${({ $hasYear }) => !$hasYear && "display: none;"}
    & > span.role {
      display: none;
    }
  }
`;

export const Tags = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.li`
  color: ${({ theme }) => theme.color.black};
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  background: ${({ theme }) => theme.color.mystic};

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    font-size: 10px;
    line-height: 11px;
    padding: 4px 8px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 0 0 0;
  max-width: 250px;
  line-height: 24px;

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    padding: 4px 0 0 0;
    gap: 7px;
  }
`;

export const StarIcon = styled.img`
  width: 22px;

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    width: 16px;
  }
`;

export const Rate = styled.span`
  font-size: 16px;
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    font-size: 13px;
  }
`;

export const Votes = styled.span`
  font-size: 16px;
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakPoint.small}) {
    font-size: 13px;
  }
`;