import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Custom-Italic": require("../assets/fonts/Custom-Italic-VariableFont_wght.ttf"),
    Custom: require("../assets/fonts/Custom-VariableFont_wght.ttf"),
    "Custom-Bold": require("../assets/fonts/Custom-Bold.ttf"),
    "Custom-BoldItalic": require("../assets/fonts/Custom-BoldItalic.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Custom",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
