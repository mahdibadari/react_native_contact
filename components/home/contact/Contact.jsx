import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./contact.style";
import { COLORS } from "../../../constants";
import ContactCard from "./ContactCard";
import contactsFetch from "../../../hook/contactFetch";

const Contact = () => {
  const router = useRouter();
  const { contactsData, isLoading, error } = contactsFetch("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Contacts</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          contactsData?.map((item) => (
            <ContactCard
              contact={item}
              key={`contact-${item.id}`}
              handleNavigate={() => router.push(`/contact-details/${item.id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Contact;
