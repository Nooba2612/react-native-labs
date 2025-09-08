import Screen5 from "@/app/Screen5";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Screen6 from "./Screen6";
import Screen7 from "./Screen7";
import Screen8 from "./Screen8";

const App = () => {
    return (
        <SafeAreaView style={styles.mainScreen}>
            <Screen8 />
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    resetCss: {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },
    mainScreen: {
        height: "100%",
        flex: 1
    },
});
