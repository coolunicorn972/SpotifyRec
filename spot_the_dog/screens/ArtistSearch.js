// ArtistSearchScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { ListItem, CheckBox, Header } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const API_KEY = "3fc61de121a23cf824dfcf349dcfacf9";
const API_URL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;

const ArtistSearchScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [artists, setArtists] = useState([]);
  const [selectedArtists, setSelectedArtists] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setArtists(data?.artists?.artist || []))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const searchArtists = (text) => {
    setSearchText(text);
  };

  const toggleCheckBox = (artist) => {
    if (selectedArtists.includes(artist.name)) {
      setSelectedArtists(
        selectedArtists.filter((name) => name !== artist.name)
      );
    } else {
      setSelectedArtists([...selectedArtists, artist.name]);
    }
  };

  const goToArtistSongs = () => {
    if (selectedArtists.length > 0) {
      navigation.navigate("ArtistSongs", { artists: selectedArtists });
    } else {
      console.log("No selected artists");
    }
  };

  const renderItem = ({ item, index }) => (
    <ListItem
      key={item.mbid || item.name || index.toString()}
      bottomDivider
      containerStyle={styles.songItem}
    >
      <CheckBox
        checked={selectedArtists.includes(item.name)}
        onPress={() => toggleCheckBox(item)}
        checkedColor="#1DB954"
      />
      <ListItem.Content>
        <ListItem.Title style={styles.songTitle}>{item.name}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: "ArtistSearch",
          style: { color: "#1DB954", fontSize: 24, fontWeight: "bold" },
        }}
        rightComponent={{
          icon: "chevron-right",
          color: "#1DB954",
          onPress: goToArtistSongs,
          size: 36,
        }}
        containerStyle={{
          backgroundColor: "#121212",
          borderBottomWidth: 0,
        }}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search for an artist"
        placeholderTextColor="#B3B3B3"
        value={searchText}
        onChangeText={searchArtists}
      />
      <FlatList
        data={artists.filter((artist) =>
          artist.name.toLowerCase().includes(searchText.toLowerCase())
        )}
        keyExtractor={(item, index) =>
          item.mbid || item.name || index.toString()
        }
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "#B3B3B3",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  songItem: {
    backgroundColor: "#282828",
  },
  songTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default ArtistSearchScreen;
