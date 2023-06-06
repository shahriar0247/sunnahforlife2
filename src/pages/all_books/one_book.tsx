import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Text_field from "../../components/textfield";

export default function One_book({ navigation, children, one_collection }) {
	function onClickHandler() {
		navigation.navigate("All Hadiths", { current_name: one_collection['name'] });
	}

	return (
		<TouchableHighlight onPress={onClickHandler}>
			<View style={styles.one_book_container}>
				<Text_field> {children}</Text_field>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	one_book_container: {
		height: 40,
		width: "90%",
	},
});
