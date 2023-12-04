import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

const MyMapPage = () => {
  const personMarkerPath = "../../assets/personMarker.png";

  const friends = [
    {
      id: 1,
      fullName: "Alice Johnson",
      location: { latitude: 37.7749, longitude: -122.4194 },
      playlists: ["Happy Beats", "Dance Party Extravaganza"],
      profilePicture: require("../../assets/alice.jpg"), // Add the profile picture
    },
    {
      id: 2,
      fullName: "Bob Smith",
      location: { latitude: 40.7128, longitude: -74.006 },
      playlists: ["Chill Vibes", "Feel Good Jams"],
      profilePicture: require("../../assets/bob.jpg"), // Add the profile picture
    },
    {
      id: 3,
      fullName: "Charlie Davis",
      location: { latitude: 34.0522, longitude: -118.2437 },
      playlists: ["Funky Grooves", "Weekend Bangers"],
      profilePicture: require("../../assets/charlie.jpg"), // Add the profile picture
    },
  ];

  const [selectedFriend, setSelectedFriend] = useState(null);

  const openPopup = (friend) => {
    setSelectedFriend(friend);
  };

  const closePopup = () => {
    setSelectedFriend(null);
  };

  const renderCallout = (friend) => (
    <View style={styles.modalContainer}>
      <View style={styles.nameContainer}>
        <View style={styles.blueBox}>
          <Image source={friend.profilePicture} style={styles.profilePicture} />
          <Text style={styles.fullName}>{friend.fullName}</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.modalText}>
          Location: {friend.location.latitude}, {friend.location.longitude}
        </Text>
        <View style={styles.playlistsContainer}>
          <View style={styles.sharedPlaylistsContainer}>
            <Text style={styles.sharedPlaylists}>Shared Playlists:</Text>
            {friend.playlists.map((playlist, index) => (
              <View key={index} style={styles.playlistItemContainer}>
                <Text style={styles.playlistItem}>{playlist}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={closePopup} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Friends!</Text>
      <MapView style={styles.map}>
        {friends.map((friend) => (
          <Marker
            key={friend.id}
            coordinate={friend.location}
            onPress={() => openPopup(friend)}
          >
            <View style={styles.marker}>
              <Image
                source={require(personMarkerPath)}
                style={styles.personIcon}
              />
            </View>
          </Marker>
        ))}
      </MapView>
      <Modal
        visible={selectedFriend !== null}
        animationType="slide"
        transparent={true}
        onRequestClose={closePopup}
      >
        {selectedFriend && renderCallout(selectedFriend)}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    alignItems: "center",
  },
  personIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  modalContainer: {
    backgroundColor: "white", // Light gray background color
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    margin: 20,
    borderWidth: 1,
  },
  nameContainer: {
    marginBottom: 10,
    alignItems: "center",
  },
  blueBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center", // Center the text vertically
    alignItems: "center", // Center the text horizontally
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  fullName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  detailsContainer: {
    marginTop: 10,
  },
  playlistsContainer: {
    marginBottom: 10,
  },
  sharedPlaylistsContainer: {
    marginBottom: 5,
  },
  playlistItemContainer: {
    backgroundColor: "#3498db", // Pink background color
    borderRadius: 5,
    marginBottom: 5,
    padding: 5,
  },
  sharedPlaylists: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  playlistItem: {
    fontSize: 14,
    color: "white",
  },
  closeButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MyMapPage;
