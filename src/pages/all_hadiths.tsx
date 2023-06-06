import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import One_hadith from "./all_hadiths/one_hadith";

export default function All_hadiths({route}) {
	const [all_hadiths, set_all_hadiths] = useState([]);

	const { current_name } = route.params;



	useEffect(() => {
		fetch_hadiths();
	}, []);

	async function fetch_hadiths() {
		const response = await fetch("http://localhost:5000/v1/collections/" + current_name + "/books/1/hadiths");
		const response_json = await response.json();
		console.log(response_json);
		set_all_hadiths(response_json);
	}
	var all_hadith_elements


	try {
		 all_hadith_elements= all_hadiths["data"].map(function (one_hadith) {
			console.log(one_hadith)
			return <One_hadith text={one_hadith['hadith'][0]['body']} reference={"ref"} grade={"grade"}></One_hadith>;
		});
	} catch (error) {
		all_hadith_elements = <View></View>
	}


	return (
		<View style={styles.container}>
			{all_hadith_elements}
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
