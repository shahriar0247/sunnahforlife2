import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Text_field from "../../components/textfield";

export default function One_book({children}){
    return (<View style={styles.one_book_container}>
       <Text_field> {children}</Text_field>
    </View>)
}

const styles = StyleSheet.create({
    one_book_container:{
        height: 40,
        width: "90%"
    }
})