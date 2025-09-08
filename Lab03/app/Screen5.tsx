import routes from "@/routes/routes";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Button, Linking, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
function Screen5() {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight: "bold", fontSize: 24 }}>LOGIN</Text>
            </View>
            <View style={styles.body}>
                <View>
                    <View style={styles.textInput}>
                        <TextInput
                            style={{ flex: 1, fontWeight: 500, fontSize: 16, color: "#696666" }}
                            placeholder="Email"
                        />
                    </View>
                    <View style={styles.textInput}>
                        <TextInput
                            style={{ flex: 1, fontWeight: 500, fontSize: 16, color: "#696666" }}
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
                        onPress={() => router.push(routes.screen6)}
                    >
                        <Text style={{ color: "#fff", textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
                            LOGIN
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.textGroup}>
                    <Text style={styles.text}>When you agree to terms and conditions</Text>
                    <Pressable style={({ pressed }) => [styles.text, { color: "blue" }, pressed && { opacity: 0.6 }]}>
                        Forgot your password?
                    </Pressable>
                    <Text style={styles.text}>Or login with</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Image source={require("../assets/images/social-icon-group.png")} style={{ width: 340, height: 200 }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#d8efde",
        flexDirection: "column",
        position: "relative",
    },
    header: {
        height: 60,
        marginVertical: 50,
        alignItems: "center",
        justifyContent: "center",
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
        width: 300,
        height: 50,
        backgroundColor: "#d3d3d365",
        marginVertical: 10,
        justifyContent: "center",
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        paddingVertical: 10,
        backgroundColor: "#e64d4d",
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

export default Screen5;
