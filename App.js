import All_books from "./src/pages/all_books";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "./src/globals/colors";
import All_hadiths from "./src/pages/all_hadiths";

const Stack = createNativeStackNavigator();

export default function App() {
	console.log(colors);
	return (
		<View style={styles.app_container}>
			<StatusBar style="auto" />

			<NavigationContainer style={styles.nav_container} theme={app_theme}>
				<Stack.Navigator>
					<Stack.Screen name="All Books" component={All_books} options={{ title: "All Books" }} />
					<Stack.Screen name="All Hadiths" component={All_hadiths} options={{ title: "All Hadiths" }} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}
const styles = StyleSheet.create({
	app_container: {
		width: "100%",
		height: "100%",
    backgroundColor: colors.background
	},
});

const app_theme = {
	colors: {
		// background: colors.background,
	},
};
