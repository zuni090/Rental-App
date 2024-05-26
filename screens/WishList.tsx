import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import rooms from '../Data/apartments';
import { WishListContext } from '../context/wishlistcontext';
import ApartmentsList from '../components/ApartmentsList';

function WishList() {
  const wishListContext = useContext(WishListContext);
  const wishListData = rooms.filter((room) => wishListContext.wishListIds.includes(room.id));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Wishlist</Text>
      {wishListData.length > 0 ? (
        <ApartmentsList apartmentsListData={wishListData} />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your wishlist is empty</Text>
        </View>
      )}
    </View>
  );
}

export default WishList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
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
