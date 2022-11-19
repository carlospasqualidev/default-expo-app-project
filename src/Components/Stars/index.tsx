/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Stars = ({ filled, maxCount }: { filled: number; maxCount: number }) => {
  const starsArray = [];

  for (let i = 0; i < maxCount; i++) {
    if (i < filled) starsArray[i] = 'fill';
    else starsArray[i] = '';
  }

  return (
    <>
      {starsArray.map((star, i) => {
        if (star === 'fill') {
          return (
            <MaterialCommunityIcons
              name="star"
              size={24}
              color="#ffc414"
              key={`stars${i}`}
            />
          );
        }
        return (
          <MaterialCommunityIcons
            name="star-outline"
            size={24}
            color="#ffc414"
            key={`stars${i}`}
          />
        );
      })}
    </>
  );
};
