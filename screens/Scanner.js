import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

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
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleSuccess}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title="tap to Scan again" onPress={() => setScanned(false)} />}
    </View>
  );
}
export default Scanner;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
