import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

// Create the  Top Tabs Navigator
const { Navigator } = createMaterialTopTabNavigator();
export const TopTabs = withLayoutContext(Navigator);

export default function HomeLayout() {
  const { colors, dark } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar 
        barStyle={dark ? "light-content" : "dark-content"} 
        backgroundColor={colors.card}
      />
      
      <TopTabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.text,
          tabBarIndicatorStyle: {
            backgroundColor: colors.primary,
            height: 3,
          },
          tabBarStyle: {
            backgroundColor: colors.card,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: colors.border,
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: "600",
            textTransform: "none",
            margin: 0,
          },
          tabBarItemStyle: {
            paddingVertical: 8,
            paddingHorizontal: 4,
            minHeight: 48,
          },
          tabBarScrollEnabled: false,
          tabBarIndicatorContainerStyle: {
            marginHorizontal: 16,
          },
          animationEnabled: true,
          swipeEnabled: Platform.OS === "ios",
          tabBarPressColor: "transparent",
        }}
      >
        <TopTabs.Screen
          name="daily"
          options={{
            title: "Daily",
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <MaterialIcons
                name="today"
                size={20}
                color={focused ? colors.primary : colors.text}
                style={styles.icon}
              />
            ),
          }}
        />
        <TopTabs.Screen
          name="monthly"
          options={{
            title: "Monthly",
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <MaterialIcons
                name="calendar-month"
                size={20}
                color={focused ? colors.primary : colors.text}
                style={styles.icon}
              />
            ),
          }}
        />
        <TopTabs.Screen
          name="calendar"
          options={{
            title: "Calendar",
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <MaterialIcons
                name="event"
                size={20}
                color={focused ? colors.primary : colors.text}
                style={styles.icon}
              />
            ),
          }}
        />
        <TopTabs.Screen
          name="calculator"
          options={{
            title: "Calculator",
            tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
              <MaterialIcons
                name="calculate"
                size={20}
                color={focused ? colors.primary : colors.text}
                style={styles.icon}
              />
            ),
          }}
        />
      </TopTabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    marginBottom: -2,
  },
});