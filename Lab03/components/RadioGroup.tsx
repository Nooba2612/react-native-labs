import { Pressable, View, Text, StyleSheet } from "react-native";

type RadioOption = {
    id: string;
    label: string;
    value: string;
};

type RadioGroupProps = {
    options: RadioOption[];
    selected?: string;
    onChange: (id: string) => void;
};

function RadioGroup({ options, selected, onChange }: RadioGroupProps) {
    return (
        <View style={{ flexDirection: "row" }}>
            {options.map((opt) => (
                <Pressable key={opt.id} style={styles.radioRow} onPress={() => onChange(opt.id)}>
                    <View style={[styles.radioOuter, selected === opt.id && styles.radioOuterSelected]}>
                        {selected === opt.id && <View style={styles.radioInner} />}
                    </View>
                    <Text>{opt.label}</Text>
                </Pressable>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    radioRow: { flexDirection: "row", alignItems: "center", marginRight: 15 },
    radioOuter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#333",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
    },
    radioOuterSelected: { borderColor: "#e64d4d" },
    radioInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#e64d4d",
    },
});

export default RadioGroup;
