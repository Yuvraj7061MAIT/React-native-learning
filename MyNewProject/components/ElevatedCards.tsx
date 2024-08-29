import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingLine}>Elevated Cards</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}  // Hide the horizontal scrollbar for a cleaner look
        style={styles.scrollView}
      >
        {/* Elevated Cards */}
        <View style={styles.elevatedCard}>
          <Text style={styles.elevatedCardText}>Elevated Card 1</Text>
        </View>

        <View style={styles.elevatedCard}>
          <Text style={styles.elevatedCardText}>Elevated Card 2</Text>
        </View>

        <View style={styles.elevatedCard}>
          <Text style={styles.elevatedCardText}>Elevated Card 3</Text>
        </View>

        <View style={styles.elevatedCard}>
          <Text style={styles.elevatedCardText}>Elevated Card 4</Text>
        </View>

        <View style={styles.elevatedCard}>
          <Text style={styles.elevatedCardText}>Elevated Card 5</Text>
        </View>
        {/* Add more cards as needed... */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headingLine: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    paddingVertical: 10,  // Adds some padding to the top and bottom of the cards
  },
  elevatedCard: {
    width: 200,
    height: 150,
    backgroundColor: 'yellow',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 10,  // Adds space between each card
  },
  elevatedCardText: {
    fontSize: 18,
    color: '#333',
  },
});
