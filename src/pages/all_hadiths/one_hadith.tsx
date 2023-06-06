import { Text, View } from "react-native";

export default function One_hadith({text, reference, grade}){
    return(
        <View>
            <Text>{text}</Text>
            <Text>{reference}</Text>
            <Text>{grade}</Text>
        </View>
    )
}