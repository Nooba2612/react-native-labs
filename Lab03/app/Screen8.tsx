import routes from "@/routes/routes";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Button, Linking, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
function Screen8() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight: "bold", fontSize: 24 }}>
                    <Image style={{ width: 150, height: 150 }} source={require("../assets/images/eye-icon.png")} />
                </Text>
            </View>
            <View style={styles.body}>
                <View>
                    <View style={styles.textInput}>
                        <Image
                            source={require("../assets/images/blue-user-icon.png")}
                            style={{ width: 40, height: 40, marginRight: 10 }}
                        />
                        <TextInput
                            style={{ flex: 1, fontWeight: 500, fontSize: 16, color: "#0000004b" }}
                            placeholder="Name"
                        />
                    </View>
                    <View style={styles.textInput}>
                        <Image
                            source={require("../assets/images/blue-lock-icon.png")}
                            style={{ width: 40, height: 40, marginRight: 10 }}
                        />
                        <TextInput
                            style={{ flex: 1, fontWeight: 500, fontSize: 16, color: "#0000004b" }}
                            placeholder="Password"
                            secureTextEntry
                        />
                    </View>
                    <Pressable
                        style={({ pressed }) => [styles.button, { opacity: pressed ? 0.6 : 1 }]}
                        onPress={() => router.push(routes.screen8)}
                    >
                        <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>LOGIN</Text>
                    </Pressable>

                    <View
                        style={{
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                        }}
                    >
                        <Pressable style={({ pressed }) => [{ marginTop: 50 }, { opacity: pressed ? 0.6 : 1 }]}>
                            <Text style={{ color: "#000000", fontSize: 20 }}>Register</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [{ marginTop: 50 }, { opacity: pressed ? 0.6 : 1 }]}>
                            <Text style={{ color: "#000000", fontSize: 20 }}>Forgot Password</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.divider}>
                    <View style={styles.line}></View>
                    <Text style={styles.text}>Other Login Methods</Text>
                    <View style={styles.line}></View>
                </View>
                <Image
                    source={require("../assets/images/button-group.png")}
                    style={{ width: 600, height: 90, resizeMode: "contain" }}
                />
                <View></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgb(255, 255, 255)",
        flexDirection: "column",
        position: "relative",
    },
    header: {
        height: 60,
        marginVertical: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
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
        marginVertical: 10,
        justifyContent: "center",
        padding: 20,
        paddingLeft: 0,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },
    button: {
        paddingVertical: 10,
        backgroundColor: "#386ffc",
        marginTop: 70,
        borderRadius: 10,
    },
    textGroup: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 200,
    },
    text: {
        fontSize: 20,
        color: "#000",
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    divider: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 30,
    },
    line: {
        height: 1,
        backgroundColor: "blue",
        flex: 1,
    },
});

export default Screen8;
