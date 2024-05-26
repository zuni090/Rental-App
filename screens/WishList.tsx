import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import rooms from '../Data/apartments';
import { WishListContext } from '../context/wishlistcontext';
import ApartmentsList from '../components/ApartmentsList';

function WishList() {
  const wishListContext = useContext(WishListContext);
  const wishListData = rooms.filter((room) => wishListContext.wishListIds.includes(room.id));

  return (
    <>
      <View style={styles.logoView}>
        <Image source={require("../assets/img.png")} style={styles.logo} />
      </View>
      <View style={styles.divider} />
      <View style={styles.container}>
        {wishListData.length > 0 ? (
          <ApartmentsList apartmentsListData={wishListData} title='My WishList' />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Your wishlist is empty</Text>
          </View>
        )}
      </View>
    </>
    
  );
}

export default WishList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo:{
    alignSelf:'center',
    height:100,
    width:100,
    resizeMode:'contain',
},
logoView:{
  height:'auto',
  width:"100%",
},
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd', // Divider color
    marginVertical: 0,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#576F72',
  },
});
