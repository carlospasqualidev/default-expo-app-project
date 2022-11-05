import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  markerView: {
    flex: 1,
    backgroundColor: '#red',
  },
});

const initialRegion = {
  latitude: -28.6783,
  longitude: -49.3704,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export const Map = () => (
  <View style={styles.container}>
    <MapView style={styles.map} initialRegion={initialRegion}>
      <Marker
        coordinate={{
          latitude: -28.6783,
          longitude: -49.3704,
        }}
        pinColor="green"
        title="Teste"
        description="decrição"
      />
    </MapView>
  </View>
);
