import { StyleSheet, Text } from "react-native"

export default function Text_field({children}){
    return (
        <Text style={styles.text}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    text:{
        fontFamily: "Arial",
        color: "white"
    }
})