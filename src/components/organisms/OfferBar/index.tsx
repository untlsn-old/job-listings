import React from 'react';
import * as S from './style';
import OfferLeft from '~/components/molecules/OfferLeft';
import { OnlyID } from '~/types/only';
import { useOfferData } from '~/data/OfferData';
import { useFilters } from '~/data/Filters';

const OfferBar = ({ id }: OnlyID<number>) => {
  const { add } = useFilters();
  const data = useOfferData().getByID(id);
  const createdTags = data.tags
    .map(val => <S.Tag onClick={() => add(val)} key={val}>{val}</S.Tag>);
  const { logo: imgSrc, featured } = data.unshell;

  return (
    <S.Wrapper $selectBorder={featured}>
      <S.SubWrapper>
        <S.Image src={imgSrc} />
        <OfferLeft id={id} />
      </S.SubWrapper>
      <S.SubWrapper>
        {createdTags}
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default OfferBar;