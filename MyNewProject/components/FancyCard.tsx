import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FancyCard</Text>
      <Image
        source={require('../assets/aosc.png')}  // Corrected the require syntax and path
        style={styles.cardImage}
      />
      {/* Poetry Box */}
      <View style={styles.poetryBox}>
        <Text style={styles.poetryText}>
          Ja chhod Diya Apne jivan ki dhara tere hathon mein{'\n'}
          Ab Dor pakad Kanha mere jivan ki apni hathon se{'\n'}
          Jo beet Gaya so beet Gaya tu Sundar kar mera jivan{'\n'}
          Ab to tere charanon mein main shish nava kar baitha hun{'\n'}
          He Kanha ab chhod Diya jivan ki dhara tere hathon mein{'\n'}
          Ab tu hi Sambhal jivan Ko mere Dor hai tere hathon mein
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  poetryBox: {
    backgroundColor: '#f5f5f5',  // Light grey background
    padding: 16,
    marginTop: 16,
    borderRadius: 10,
    width: '90%',  // Width of the poetry box
    shadowColor: '#000',  // Shadow color for the box
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,  // Elevation for Android shadow
  },
  poetryText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,  // Spacing between lines
    textAlign: 'center',  // Center the text
  },
});
