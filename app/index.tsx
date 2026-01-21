import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/bmi");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/bmi_logo.png")}
        style={styles.imglogo}
      />
      <Text style={[styles.appname, { fontSize: 40 }]}>BMI Calculator</Text>
      <Text style={[styles.appname, { fontSize: 20 }]}>
        Welcome to the BMI Calculator App!
      </Text>
      <ActivityIndicator size="large" color="white" style={{ marginTop: 20 }} />
    </View>
  );
}
const styles = StyleSheet.create({
  appname: {
    color: "white",
    marginTop: 10,
    fontFamily: "Kanit_700Bold",
  },
  imglogo: {
    width: 150,
    height: 150,
  },
  container: {
    flex: 1,
    backgroundColor: "#00eaff",
    alignItems: "center",
    justifyContent: "center",
  },
});
