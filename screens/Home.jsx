import axios from "axios";
import {
  View,
  Content,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
// import imagesPath from "../constants/imagesPath";

const Home = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    axios
      .get("https://628cc2b93df57e983ed5aaf0.mockapi.io/articles/")
      .then(({ data }) => {
        setItems(data);
      });
    // .catch((err) => {
    //   console.log(err);
    //   Alert.alert("Ошибка", "не удалось получить данные");
    // });
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropDown} onPress={handleOpen}>
        <Text style={styles.btnContainer}>Выберите магазин</Text>
        <Image
          style={{
            width: 40,
            height: 40,
            transform: [{ rotate: open ? "180deg" : "0deg" }],
          }}
          source={require("../assets/images/down-arrow.png")}
        />
      </TouchableOpacity>
      {open && (
        <View>
          {items.map((obj) => (
            <View key={obj.id}>
              <Text
                onPress={() =>
                  navigation.navigate("Scanner", {
                    name: obj.title,
                  })
                }
                style={styles.btnContainer}
              >
                {obj.title}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  dropDown: {
    flexDirection: "row",
    padding: 8,
    minHeight: 42,
    justifyContent: "space-between",
  },
  img: {
    width: 40,
    height: 40,
  },
  btnContainer: {
    fontSize: 30,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#b8251d",
    color: "#fff",
    margin: 5,
    fontWeight: "900",
  },
});
