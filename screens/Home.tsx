import { useEffect } from 'react';
import * as Updates from 'expo-updates';
import ApartmentsList from '../components/ApartmentsList';
import apartmentsListData from '../Data/apartments';
import { Dimensions, StyleSheet, Text, View , Image } from 'react-native';

function Home() {
  // const [isUpdate, setUpdate] = useState(false);
  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          // ... notify user of update ...
          await Updates.reloadAsync();
        }
      } catch (e) {
        // handle or log error
      }
    };
    checkForUpdates();
  }, []);
  return (
    <>
    <View style={styles.logoview}>
        <Image source={require("../assets/img.png")} style={styles.logo} />
    </View>
    <View style={styles.divider} />
    <ApartmentsList apartmentsListData = {apartmentsListData} title = 'Find your stay!'/>
    </>
   
  );
}

export default Home;
const styles = StyleSheet.create({
  logo:{
    alignSelf:'center',
    height:100,
    width:100,
    resizeMode:'contain',
},
logoview:{
    height:'auto',
    width:"100%",
},
divider: {
  width: '100%',
  height: 1,
  backgroundColor: '#ddd', // Divider color
  marginVertical: 0,
},

});
