import routes from "@/routes/routes";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Button, Linking, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
function Screen7() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight: "bold", fontSize: 24 }}>LOGIN</Text>
            </View>
            <View style={styles.body}>
                <View>
                    <View style={styles.textInput}>
                        <Image
                            source={require("../assets/images/user-icon.png")}
                            style={{ width: 30, height: 30, marginRight: 20 }}
                        />
                        <TextInput
                            style={{ flex: 1, fontWeight: 500, fontSize: 16, color: "#000000" }}
                            placeholder="Name"
                        />
                    </View>
                    <View style={styles.textInput}>
                        <Image
                            source={require("../assets/images/lock-icon.png")}
                            style={{ width: 40, height: 40, marginRight: 10 }}
                        />
                        <TextInput
                            style={{ flex: 1, fontWeight: 500, fontSize: 16, color: "#000000" }}
                            placeholder="Password"
                            secureTextEntry
                        />
                        <Image
                            source={require("../assets/images/black-eye-icon.png")}
                            style={{ width: 50, height: 50 }}
                        />
                    </View>
                    <Pressable
                        style={({ pressed }) => [styles.button, { opacity: pressed ? 0.6 : 1 }]}
                        onPress={() => router.push(routes.screen8)}
                    >
                        <Text style={{ color: "#fff", textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
                            LOGIN
                        </Text>
                    </Pressable>

                    <Pressable style={({ pressed }) => [{marginTop: 50},{ opacity: pressed ? 0.6 : 1 }]}>
                        <Text style={{ color: "#000000", textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
                            CREATE ACCOUNT
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.footer}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgb(240,194,0)",
        flexDirection: "column",
        position: "relative",
    },
    header: {
        height: 60,
        marginVertical: 50,
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
        marginLeft: 100,
    },
    body: {
        flexDirection: "column",
        alignItems: "center",
    },
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        width: 350,
        height: 50,
        border: "1px solid #fff",
        backgroundColor: "#d3d3d365",
        marginVertical: 10,
        justifyContent: "center",
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        paddingVertical: 10,
        backgroundColor: "#000000",
        marginTop: 70,
    },
    textGroup: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 200,
    },
    text: {
        fontSize: 16,
        color: "#000",
        marginVertical: 10,
    },
});

export default Screen7;
