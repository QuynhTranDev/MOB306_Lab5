import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import MyWebView from './MyWebView';
import { useEffect, useState } from 'react';

export default function App() {

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      console.log('Start UseEffect')
      setLoading(false)
    }, 6000)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        
        <MyWebView />

        <ActivityIndicator animating = {isLoading}/>
      </View>
    </SafeAreaView>
  );
}



