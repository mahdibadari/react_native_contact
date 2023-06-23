import {View, Text,TouchableOpacity, Image} from 'react-native'

import styles from './contacts.style'

import { checkImageURL } from '../../../utils'

const ContactsCard = ({ item, selectedContact, handleCardPress}) => {
    return (
        <TouchableOpacity
            style={styles.container(selectedContact, item)}
            onPress={() => handleCardPress(item)}
        >
            <TouchableOpacity style={styles.logoContainer(selectedContact, item)}>
                <Image 
                    source={{uri: checkImageURL(item.photo)
                        ? item.photo
                        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png'
                    }}
                    resizeMode="contain"
                    style={styles.logoImage}
                />
            </TouchableOpacity>
            <Text style={styles.companyName} numberOfLines={1}>{item.firstName} {item.lastName}</Text>

            <View style={styles.infoContainer}>
                <Text style={styles.jobName(selectedContact, item)} numberOfLines={1}>
                    {item.age} years old
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ContactsCard;