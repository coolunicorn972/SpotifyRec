// ArtistSongsScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ListItem, CheckBox, Button, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const ArtistSongsScreen = ({ route }) => {
  const navigation = useNavigation();
  const [songs, setSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch top songs for the first artist in the array
    if (route.params.artists && route.params.artists.length > 0) {
      fetchTopSongs(route.params.artists[0]);
    }
  }, [route.params.artists]);

  const fetchTopSongs = async (artist) => {
    try {
      const API_KEY = "3fc61de121a23cf824dfcf349dcfacf9";
      const response = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${API_KEY}&format=json`
      );

      const data = await response.json();
      if (response.ok) {
        const topSongs = data?.toptracks?.track || [];
        setSongs(topSongs);
      } else {
        console.error(
          "Error fetching top songs:",
          data?.message || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error fetching top songs:", error);
    }
  };

  const renderSongItem = ({ item }) => (
    <ListItem bottomDivider containerStyle={styles.songItem}>
      <CheckBox
        checked={selectedSongs.includes(item.name)}
        onPress={() => toggleSongSelection(item.name)}
        checkedColor="#1DB954"
      />
      <ListItem.Content>
        <ListItem.Title style={styles.songTitle}>{item.name}</ListItem.Title>
        <ListItem.Subtitle style={styles.artistName}>
          {item.artist.name}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  const toggleSongSelection = (songName) => {
    setSelectedSongs((prevSelectedSongs) =>
      prevSelectedSongs.includes(songName)
        ? prevSelectedSongs.filter((song) => song !== songName)
        : [...prevSelectedSongs, songName]
    );
  };

  const goToProfile = () => {
    navigation.navigate("Home", {
      selectedSongs,
      spotifyCredentials: {
        clientId: "4044d1f8ee084244b18600ef0212740e",
        clientSecret: "18fd588fcd604ccba44cca98bcaf2926",
      },
    });
  };

  const updateSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredSongs = songs.filter((song) =>
    song.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search songs..."
        onChangeText={updateSearch}
        value={searchQuery}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInput}
      />
      <Text style={styles.artistText}>
        Which of {route.params.artists[0]}
        {"'"}s songs do you love the most?
      </Text>
      <FlatList
        data={filteredSongs}
        keyExtractor={(item) => item.name}
        renderItem={renderSongItem}
      />
      <Button
        title="Next"
        onPress={goToProfile}
        containerStyle={styles.nextButtonContainer}
        buttonStyle={styles.nextButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#121212",
  },
  artistText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 15,
    marginTop: 20,
  },
  searchBarContainer: {
    backgroundColor: "#121212",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    paddingBottom: 10,
  },
  searchBarInput: {
    backgroundColor: "#1E1E1E",
    color: "#FFFFFF",
  },
  songItem: {
    backgroundColor: "#282828",
  },
  songTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  artistName: {
    color: "#B3B3B3",
  },
  nextButtonContainer: {
    alignSelf: "center",
    width: 200,
    marginTop: 20,
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: "#1DB954",
  },
});

export default ArtistSongsScreen;
