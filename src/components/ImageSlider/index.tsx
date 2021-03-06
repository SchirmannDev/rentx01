import React, { useState, useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';

import * as S from './styles';

import Bullet from '../Bullet';


interface Props {
  imagesUrl: {
    id: string;
    photo: string;

  }[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

const ImageSlider = ({ imagesUrl }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const index = info.viewableItems[0].index!;
    setImageIndex(index)
  });

  return (
    <S.Container>
      <S.ImageIndexes>
        {
          imagesUrl.map((item, index) => (
            <Bullet
              key={String(item.id)}
              active={index === imageIndex}
            />
          ))

        }
      </S.ImageIndexes>


      <FlatList
        data={imagesUrl}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <S.CarImageWrapper>
            <S.CarImage
              source={{ uri: item.photo }}
              resizeMode="contain"
            />
          </S.CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}

      />


    </S.Container>
  );
};

export default ImageSlider;
