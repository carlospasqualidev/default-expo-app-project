import { Modal as PaperModal } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import { sizes, useTheme } from '../../styles';

export const Modal = ({
  isVisible,
  hideModal,
  children,
}: {
  isVisible: boolean;
  hideModal: () => void;
  children: JSX.Element;
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
  // #endregion
  return (
    <PaperModal
      theme={{
        colors: {
          backdrop: 'transparent',
        },
      }}
      visible={isVisible}
      onDismiss={hideModal}
      style={styles.modal}
    >
      <View style={styles.content}>{children}</View>
    </PaperModal>
  );
};
