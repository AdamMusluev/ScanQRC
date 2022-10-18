import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleSuccess = ({ type, data }) => {
    setScanned(true);
    alert(`${type}${Linking.openURL(`${data}`)} has been scanned`);
  };

  if (hasPermission === null || hasPermission === false) {
    return <Text>No access</Text>;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>ADAM</Text>
      </View>
      <BarCodeScanner
  
        onBarCodeScanned={scanned ? undefined : handleSuccess}
        style={StyleSheet.absoluteFillObject}
        />
      <BarcodeMask edgeColor="#fff" showAnimatedLine width={350} height={150} outerMaskOpacity={0.8} />
        {scanned && (
          <View style={styles.buttonContainer}> 
            <Button style={styles.button_1} title="tap to Scan again" onPress={() => setScanned(false)} />
          </View>
        )}
    </View>
  );
};
export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    width: 350,
    marginTop: 100,
  },
  button_1: {
    padding: 20,
    color: '#000'
  }
});
