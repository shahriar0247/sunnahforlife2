import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	const [all_collections, set_all_collections] = useState([]);

	async function fetch_collections() {
		const response = await fetch("http://localhost:5000/v1/collections");
		const response_json = await response.json();
		set_all_collections(response_json);
	}

	useEffect(() => {
		fetch_collections();
	}, []);

  try {
    var all_collection_elements = all_collections["data"].map(function (one_collection) {
      return (
        <View>
          <Text>{one_collection["name"]}</Text>
        </View>
      );
    });
  
  } catch (error) {
    var all_collection_elements = <View></View>
  }

  
	return (
		<View style={styles.container}>
			{all_collection_elements}
			<Text>sadsadad</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
