import {
  Kanit_400Regular,
  Kanit_700Bold,
  useFonts,
} from "@expo-google-fonts/kanit";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="bmi"
        options={{
          title: "BMI Calculator",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#00eaff" },
          headerTitleStyle: {
            color: "white",
            fontSize: 20,
            fontFamily: "Kanit_700Bold",
          },
        }}
      />
    </Stack>
  );
}
