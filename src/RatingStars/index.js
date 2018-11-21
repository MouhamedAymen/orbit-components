// @flow
import * as React from "react";
import styled from "styled-components";

import StarEmpty from "../icons/StarEmpty";
import StarFull from "../icons/StarFull";
import defaultTokens from "../defaultTokens";
import MAX_STARS from "./consts";
import { ICON_COLORS, ICON_SIZES, FORMAT } from "../Icon/consts";

import type { Props } from "./index";

const StyledRatingStars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-shrink: 0;

  svg {
    flex-shrink: 0;
  }
`;

StyledRatingStars.defaultProps = {
  theme: defaultTokens,
};

const RatingStars = ({
  rating,
  size = ICON_SIZES.SMALL,
  dataTest,
  color = ICON_COLORS.PRIMARY,
  format = FORMAT.NORMAL,
}: Props) => {
  const ratingRounded = Math.round(rating);
  const starsCount = format === FORMAT.HOTEL ? ratingRounded : MAX_STARS;
  return (
    <StyledRatingStars data-test={dataTest} size={size}>
      {Array(...Array(starsCount)).map((_, index) => {
        const key = `star-${index}`;
        return index <= ratingRounded - 1 ? (
          <StarFull key={key} size={size} color={color} />
        ) : (
          <StarEmpty key={key} size={size} color={color} />
        );
      })}
    </StyledRatingStars>
  );
};

export default RatingStars;
