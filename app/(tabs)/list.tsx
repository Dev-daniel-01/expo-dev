import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
// import dataErrado from '@/constants/dataErrado.json'
import { Item } from '@/components/item'
import data from '@/constants/data';



export default function TabThreeScreen() {
  return (
   <>
      <View style={styles.center}>
        <Text>Terceira Pagina </Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList 
        style={styles.back} 
        data={data} 
        renderItem={({item}) => (
        <Item name={item.nome} age={item.idade} date={item.data} image={item.imagem}/>
        )}
        keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
   </>
  );
}

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    paddingVertical: 20
  },
  container: {
    flex: 1,
  },
  back: {
    paddingHorizontal: 20,
  }
})