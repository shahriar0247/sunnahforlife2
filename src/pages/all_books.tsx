import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import One_book from "./all_books/one_book";

export default function All_books() {
	const [all_collections, set_all_collections] = useState([]);

	useEffect(() => {
		fetch_collections();
	}, []);

	async function fetch_collections() {
		const response = await fetch("http://localhost:5000/v1/collections");
		const response_json = await response.json();
		console.log(response_json);
		set_all_collections(response_json);
	}
	var all_collection_elements


	try {
		 all_collection_elements= all_collections["data"].map(function (one_collection) {
			return <One_book>{one_collection["collection"][0]['title']}</One_book>;
		});
	} catch (error) {
		all_collection_elements = <View></View>
	}


	return (
		<View style={styles.container}>
			{all_collection_elements}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
