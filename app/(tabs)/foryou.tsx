import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Liked from "../liked";
import Suggested from "../suggested";
import Featured from "../featured";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
  const theme = useColorScheme() ?? "light";
  return (
    <ThemedSafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        style={{
          flex: 1,
        }}
        screenOptions={{
          tabBarActiveTintColor: Colors[theme].tint,
          tabBarStyle: {
            backgroundColor: Colors[theme].background,
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors[theme].indicator,
            height: 5,
          },
        }}
      >
        <Tab.Screen name="Suggested" component={Suggested} />
        <Tab.Screen name="Liked" component={Liked} />
        <Tab.Screen name="Featured" component={Featured} />
      </Tab.Navigator>
    </ThemedSafeAreaView>
  );
}
