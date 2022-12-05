import { StyleSheet, View, Image, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Modal, Stars, IconButton, Text } from '../../../../components';
import { sizes } from '../../../../styles';
import { useTheme } from '../../../../hooks';
import { IPlaceDetailsModal } from '../../types';
import { useAuthContext } from '../../../../hooks/auth/UseAuthContext';

export const ModalDetails = ({ hideModal, isOpen, placeData }: IPlaceDetailsModal) => {
  const theme = useTheme();
  const { setFavoriteLocal } = useAuthContext();
  const [place, setPlace] = useState(placeData);

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
      <SafeAreaView>
        <ScrollView>
          <Image
            style={styles.image}
            source={{
              uri: place.image,
            }}
          />
          <View style={styles.body}>
            <Text type="h5">{place.name}</Text>

            <View style={styles.stars}>
              <Stars filled={place.stars} maxCount={5} />
            </View>

            <View style={styles.buttonsContainer}>
              <IconButton
                icon="comment-arrow-right-outline"
                label="Como chegar"
                onPress={() => console.log('click')}
              />
              <IconButton
                icon={place.isFavorite ? 'heart' : 'heart-outline'}
                label="favoritar"
                onPress={() => {
                  setFavoriteLocal({ place });

                  setPlace({ ...place, isFavorite: !place.isFavorite });
                }}
              />
              <IconButton
                icon="car-outline"
                label="Chamar carro"
                onPress={() => console.log('click')}
              />
            </View>

            <Text type="p2">{place.description}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};
