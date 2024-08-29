import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlashCards = () => {
    return (
        <View style={styles.container}>
            {/* First Flashcard */}
            <View style={[styles.card1, styles.card]}>
                <Text style={styles.cardText}>FlashCard 1</Text>
            </View>

            {/* Second Flashcard */}
            <View style={[styles.card2, styles.card]}>
                <Text style={styles.cardText}>FlashCard 2</Text>
            </View>

            {/* Third Flashcard */}
            <View style={[styles.card3, styles.card]}>
                <Text style={styles.cardText}>FlashCard 3</Text>
            </View>

            <View style={[styles.card3, styles.card]}>
                <Text style={styles.cardText}>FlashCard 3</Text>
            </View>
        </View>
        // Add more cards as needed...




    );
};

export default FlashCards;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',  // Arrange children in a row
        justifyContent: 'space-around',  // Distribute cards evenly
        alignItems: 'center',  // Align cards vertically centered
        padding: 16,
    },
    card :{
        width :'20%',
        height: 110,  // Height of each card
        borderRadius: 20  // Rounded corners

    },
    card1: {
        width: 100,  // Width of each card
        height: 110,  // Height of each card
        backgroundColor: 'red',
        borderRadius: 10,  // Rounded corners
        justifyContent: 'center',  // Center content horizontally
        alignItems: 'center',  // Center content vertically
        shadowColor: '#000',  // Shadow color
        shadowOffset: { width: 0, height: 2 },  // Shadow offset
        shadowOpacity: 0.2,  // Shadow opacity
        shadowRadius: 4,  // Shadow radius
        elevation: 5,  // Android shadow
        marginHorizontal: 10,  // Space between cards
    },
    card2: {
        width: 100,  // Width of each card
        height: 110,  // Height of each card
        backgroundColor: 'blue',
        borderRadius: 10,  // Rounded corners
        justifyContent: 'center',  // Center content horizontally
        alignItems: 'center',  // Center content vertically
        shadowColor: '#000',  // Shadow color
        shadowOffset: { width: 0, height: 2 },  // Shadow offset
        shadowOpacity: 0.2,  // Shadow opacity
        shadowRadius: 4,  // Shadow radius
        elevation: 5,  // Android shadow
        marginHorizontal: 10,  // Space between cards
    },
    card3: {
        width: 100,  // Width of each card
        height: 110,  // Height of each card
        backgroundColor: 'green',
        borderRadius: 10,  // Rounded corners
        justifyContent: 'center',  // Center content horizontally
        alignItems: 'center',  // Center content vertically
        shadowColor: '#000',  // Shadow color
        shadowOffset: { width: 0, height: 2 },  // Shadow offset
        shadowOpacity: 0.2,  // Shadow opacity
        shadowRadius: 4,  // Shadow radius
        elevation: 5,  // Android shadow
        marginHorizontal: 10,  // Space between cards
    },
    cardText: {
        fontSize: 18,  // Font size for card text
        color: '#333',  // Dark gray text color
    },
});
