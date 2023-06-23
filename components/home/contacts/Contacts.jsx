import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./contacts.style";
import { COLORS, SIZES } from "../../../constants";
import ContactsCard from "./ContactsCard";
import contactsFetch from "../../../hook/contactFetch";

const Contacts = () => {
  const router = useRouter();
  const { contactsData, isLoading, error } = contactsFetch("");

  const [selectedContact, setSelectedContact] = useState();

  const handleCardPress = (item) => {
    router.push(`/contact-details//${item.id}`);
    setSelectedContact(item.id);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Contacts</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
             data={contactsData}
             renderItem={({ item }) => (
               <ContactsCard
                 item={item}
                 selectedContact={selectedContact}
                 handleCardPress={handleCardPress}
               />
             )}
             keyExtractor={(item) => item.id}
             contentContainerStyle={{ columnGap: SIZES.medium }}
             horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Contacts;