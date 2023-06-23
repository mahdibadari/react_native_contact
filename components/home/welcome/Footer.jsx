import { View, Text, TouchableOpacity, Image, Linking, StyleSheet } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>   
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
