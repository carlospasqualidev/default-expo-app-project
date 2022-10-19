// STYLES
import { Text } from '../Typography';
import * as styles from './styles';

export const Rating = () => (
  <styles.Container>
    <styles.Card>
      <styles.Content width="25%" alingItems="center" backgroundColor="red">
        <Text type="H1"> 4,5</Text>
      </styles.Content>
      <styles.Content width="75%" alingItems="flex-start" backgroundColor="blue">
        <Text type="H1"> 4,5</Text>
      </styles.Content>
    </styles.Card>
  </styles.Container>
);
