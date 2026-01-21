import { Image } from "expo-image";
import React, { useState } from "react";

import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
export default function Bmi() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("0.00");
  const [status, setStatus] = useState("การแปลผล");
  const handleCal = () => {
    Keyboard.dismiss();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (isNaN(h) || isNaN(w) || height === "" || weight === "") {
      alert("กรุณาป้อนค่าส่วนสูงและนํ้าหนักที่ถูกต้อง");
      setBmi("0.00");
      return;
    } else if (h === 0 || w === 0) {
      alert("ค่าส่วนสูงและนํ้าหนักต้องไม่เป็นศูนย์");
      setBmi("0.00");
      return;
    }
    const bmiValue = w / (h * h);
    setBmi(bmiValue.toFixed(2));
    if (bmiValue < 18.5) {
      setStatus("ผอม");
    } else if (bmiValue < 23) {
      setStatus("น้ําหนักปกติ");
    } else if (bmiValue < 25) {
      setStatus("อ้วนเล็กน้อย");
    } else if (bmiValue < 30) {
      setStatus("อ้วน");
    } else {
      setStatus("อ้วนมาก");
    }
  };
  const handleReset = () => {
    setHeight("");
    setWeight("");
    setBmi("0.00");
    setStatus("การแปลผล");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/bmi_logo.png")}
          style={styles.imglogo}
        />
        <View style={styles.cardInput}>
          <Text style={styles.labelInput}>ป้อนน้ำหนัก (กิโลกรัม)</Text>
          <TextInput
            placeholder="เช่น 70"
            keyboardType="numeric"
            style={[styles.textInput]}
            value={weight}
            onChangeText={setWeight}
          />

          <Text style={styles.labelInput}>ป้อนส่วนสูง (เซนติเมตร)</Text>
          <TextInput
            placeholder="เช่น 160"
            keyboardType="numeric"
            style={[styles.textInput]}
            value={height}
            onChangeText={setHeight}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: "#ff0000",
                  flex: 1,
                  marginRight: 10,
                },
              ]}
            >
              <Text style={styles.buttonText} onPress={handleReset}>
                รีเซ็ต
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: "#00cc00",
                  flex: 2,
                },
              ]}
            >
              <Text style={styles.buttonText} onPress={handleCal}>
                คํานวณ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardResult}>
          <Text style={[styles.textResult, { fontSize: 18 }]}>ผลลัพธ์ BMI</Text>
          <Text style={[styles.textResult, { fontSize: 24 }]}>{bmi}</Text>
          <Text style={[styles.textResult, { fontSize: 18 }]}>{status}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imglogo: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  cardInput: {
    marginTop: 20,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    opacity: 0.5,
  },
  labelInput: {
    fontFamily: "Kanit_400Regular",
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Kanit_400Regular",
    textAlign: "center",
  },
  cardResult: {
    marginTop: 20,
    width: "80%",
    backgroundColor: "#00eaff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    opacity: 0.5,
    alignItems: "center",
  },
  textResult: {
    marginTop: 10,
    fontFamily: "Kanit_700Bold",
    color: "#333",
  },
});
