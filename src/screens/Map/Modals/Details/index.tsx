import { StyleSheet, View, Image } from 'react-native';
import { Modal, Stars, IconButton, Text } from '../../../../components';
import { sizes } from '../../../../styles';
import { useTheme } from '../../../../hooks';

export const ModalDetails = ({
  hideModal,
  isOpen,
}: {
  isOpen: boolean;
  hideModal: () => void;
}) => {
  const theme = useTheme();

  // #region STYLES
  const styles = StyleSheet.create({
    modal: {
      padding: sizes['lg-32'],
      paddingBottom: 132,
      alignContent: 'center',
      justifyContent: 'center',
    },
    content: {
      backgroundColor: theme.colors.background,
      borderRadius: sizes['sm-8'],
    },
    image: {
      height: 200,
      borderTopLeftRadius: sizes['sm-8'],
      borderTopRightRadius: sizes['sm-8'],
      marginBottom: sizes['sm-8'],
    },
    stars: {
      flexDirection: 'row',
      paddingRight: 2,
      marginBottom: sizes['sm-16'],
    },

    buttonsContainer: {
      flexDirection: 'row',
      minHeight: 40,
      justifyContent: 'space-around',
      marginBottom: sizes['sm-16'],
    },

    body: {
      justifyContent: 'center',
      paddingLeft: sizes['sm-8'],
      paddingRight: sizes['sm-8'],
      paddingBottom: sizes['sm-8'],
    },
  });

  return (
    <Modal
      isVisible={isOpen}
      hideModal={() => {
        hideModal();
      }}
    >
      <>
        <Image
          style={styles.image}
          source={{
            uri: 'https://static.significados.com.br/foto/verduras-e-legumes-0.jpg',
          }}
        />
        <View style={styles.body}>
          <Text type="h5">Mamma veg</Text>

          <View style={styles.stars}>
            <Stars filled={3} maxCount={5} />
          </View>

          <View style={styles.buttonsContainer}>
            <IconButton
              icon="comment-arrow-right-outline"
              label="Como chegar"
              onPress={() => console.log('click')}
            />
            <IconButton
              icon="heart-outline"
              label="favoritar"
              onPress={() => console.log('click')}
            />
            <IconButton
              icon="car-outline"
              label="Chamar carro"
              onPress={() => console.log('click')}
            />
          </View>

          <Text type="p2">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </Text>
        </View>
      </>
    </Modal>
  );
};
