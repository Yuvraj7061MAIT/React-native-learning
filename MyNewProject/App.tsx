import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlashCards from './components/FlashCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlashCards/>
          <ElevatedCards/>
          <FancyCard/>
        </View>
      </ScrollView>

    </SafeAreaView>

  )
}

export default App