import routes from "@/routes/routes";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Linking, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import RadioGroup from "../components/RadioGroup";

function Screen6() {
    const router = useRouter();

    const [selectedId, setSelectedId] = useState<string | undefined>();

    const radioButtons = [
        { id: "1", label: "Nam", value: "male" },
        { id: "2", label: "Nữ", value: "female" },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight: "bold", fontSize: 24 }}>REGISTER</Text>
            </View>
            <View style={styles.body}>
                <View>
                    <View style={styles.textInput}>
                        <TextInput
                            style={{ flex: 1, fontWeight: 500, fontSize: 16, color: "#696666" }}
                            placeholder="Name"
                        />
                    </View>
                    <View style={styles.textInput}>
                        <TextInput
                            style={{ flex: 1, fontWeight: 500, fontSize: 16, color: "#696666" }}
                            placeholder="Phone"
                        />
                    </View>
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
                            source={{uri:"https://raw.githubusercontent.com/Nooba2612/react-native-labs/master/Lab03/assets/images/black-eye-icon.png"}}
                            style={{ width: 50, height: 50 }}
                        />
                    </View>
                    <View style={styles.textInput}>
                        <TextInput
                            style={{ flex: 1, fontWeight: 500, fontSize: 16, color: "#696666" }}
                            placeholder="Birthday"
                        />
                    </View>
                    <RadioGroup
                      options={[
                        { id: "1", label: "Nam", value: "male" },
                        { id: "2", label: "Nữ", value: "female" },
                      ]}
                      selected={selectedId}
                      onChange={setSelectedId}
                    />
                    <Pressable
                        style={({ pressed }) => [styles.button, { opacity: pressed ? 0.6 : 1 }]}
                        onPress={() => router.push(routes.screen7)}
                    >
                        <Text style={{ color: "#fff", textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
                            REGISTER
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.textGroup}>
                    <Text style={styles.text}>When you agree to terms and conditions</Text>
                </View>
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

export default Screen6;
