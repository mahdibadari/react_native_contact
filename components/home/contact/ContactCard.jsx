import {View, Text,TouchableOpacity, Image} from 'react-native'

import styles from './contact.style'

import { checkImageURL } from '../../../utils'

const ContactCard = ({ contact, handleNavigate }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>            
            <View style={styles.textContainer}>
                <Text style={styles.contactName} numberOfLines={1}>
                    {contact.firstName} {contact.lastName}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ContactCard