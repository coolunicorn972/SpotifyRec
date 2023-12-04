import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const actualSongsData = {
  english: [
    "Shape of You - Ed Sheeran",
    "Blinding Lights - The Weeknd",
    "Watermelon Sugar - Harry Styles",
    "Bad Romance - Lady Gaga",
    "Someone You Loved - Lewis Capaldi",
    "Uptown Funk - Mark Ronson ft. Bruno Mars",
    "Sucker - Jonas Brothers",
    "Dance Monkey - Tones and I",
    "Stitches - Shawn Mendes",
    "Happy - Pharrell Williams",
    "Rolling in the Deep - Adele",
    "Old Town Road - Lil Nas X ft. Billy Ray Cyrus",
    "Senorita - Shawn Mendes, Camila Cabello",
    "Waka Waka (This Time for Africa) - Shakira",
    "Can't Stop the Feeling! - Justin Timberlake",
    "Counting Stars - OneRepublic",
    "Wrecking Ball - Miley Cyrus",
    "Faded - Alan Walker",
    "Perfect - Ed Sheeran",
    "Say Something - Justin Timberlake ft. Chris Stapleton",
  ],
  spanish: [
    "Despacito - Luis Fonsi",
    "Bailando - Enrique Iglesias",
    "Vivir Mi Vida - Marc Anthony",
    "Felices los 4 - Maluma",
    "Te Boté - Nio García, Darell, Casper Mágico",
    "El Favor - Nicky Jam, Sech",
    "Tusa - Karol G, Nicki Minaj",
    "Baila Baila Baila - Ozuna",
    "Dákiti - Bad Bunny, Jhay Cortez",
    "La Modelo - Ozuna, Cardi B",
    "Vivir Bailando - Marc Anthony, Gente de Zona",
    "Adictiva - Daddy Yankee, Anuel AA",
    "Bella y Sensual - Romeo Santos, Daddy Yankee, Nicky Jam",
    "Echame La Culpa - Luis Fonsi, Demi Lovato",
    "Criminal - Natti Natasha, Ozuna",
    "Me Gusta - Shakira, Anuel AA",
    "Diles - Ozuna, Bad Bunny, Farruko, Arcángel",
    "Que Tire Pa Lante - Daddy Yankee",
    "El Anillo y la Flor - Luis Fonsi",
    "Si Tú la Ves - Nicky Jam, Wisin",
  ],
  french: [
    "Tous les mêmes - Stromae",
    "La vie en rose - Edith Piaf",
    "Je ne regrette rien - Edith Piaf",
    "Alors on danse - Stromae",
    "Formidable - Stromae",
    "Sous le ciel de Paris - Edith Piaf",
    "Ça plane pour moi - Plastic Bertrand",
    "Comme d'habitude - Claude François",
    "Les Champs-Élysées - Joe Dassin",
    "Dernière Danse - Indila",
    "Libérée, délivrée - Frozen (French version)",
    "J'ai deux amours - Josephine Baker",
    "Papaoutai - Stromae",
    "Non, je ne regrette rien - Edith Piaf",
    "Ne me quitte pas - Jacques Brel",
    "Le temps des cerises - Yves Montand",
    "L'Aigle Noir - Barbara",
    "Le Freak - Chic",
    "Sapés comme jamais - Maître Gims",
    "Eblouie par la nuit - Zaz",
  ],
  german: [
    "99 Luftballons - Nena",
    "Du Hast - Rammstein",
    "Ich Will - Rammstein",
    "Atemlos durch die Nacht - Helene Fischer",
    "Mädchen - Luciano",
    "Ohne Dich - Rammstein",
    "Engel - Rammstein",
    "Für Elise - Beethoven",
    "Narcotic - Liquido",
    "Ein Kompliment - Sportfreunde Stiller",
    "Westerland - Die Ärzte",
    "Einmal um die Welt - Cro",
    "Die immer lacht - Stereoact ft. Kerstin Ott",
    "Du - Peter Maffay",
    "Über den Wolken - Reinhard Mey",
    "Griechischer Wein - Udo Jürgens",
    "Major Tom - Peter Schilling",
    "Du triffst mitten ins Herz - Andrea Berg",
    "Skandal im Sperrbezirk - Spider Murphy Gang",
    "Wind of Change - Scorpions",
  ],
  // Add more actual songs for other languages
};

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Russian",
  "Chinese",
  "Japanese",
  "Korean",
  "Arabic",
  "Dutch",
  "Swedish",
  "Turkish",
  "Polish",
  "Greek",
  "Hebrew",
  "Hindi",
  "Bengali",
  "Thai",
  "Vietnamese",
  "Indonesian",
  "Malay",
  "Tagalog",
  "Swahili",
  "Farsi",
  "Urdu",
  "Czech",
  "Hungarian",
  "Romanian",
];

const Playlists = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [isPlaylistSaved, setIsPlaylistSaved] = useState(false);

  const handlePlay = (song) => {
    // Add logic to play the selected song
    console.log(`Playing: ${song}`);
  };

  const handleSavePlaylist = () => {
    // Add logic to save the playlist
    console.log(`Playlist saved for ${selectedLanguage} language.`);
    setIsPlaylistSaved(true);
    setTimeout(() => {
      setIsPlaylistSaved(false);
    }, 3000); // Display the message for 3 seconds
  };

  return (
    <View style={styles.container}>
      <View style={styles.languagePickerContainer}>
        <Text style={styles.label}>Select Language:</Text>
        <Picker
          selectedValue={selectedLanguage}
          style={{ ...styles.languagePicker, fontSize: 14 }} // Adjust the fontSize here
          itemStyle={styles.pickerItem}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        >
          {languages.map((language, index) => (
            <Picker.Item
              key={index}
              label={language}
              value={language.toLowerCase()}
            />
          ))}
        </Picker>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {actualSongsData[selectedLanguage.toLowerCase()].map((song, index) => (
          <TouchableOpacity
            key={index}
            style={styles.songItem}
            onPress={() => handlePlay(song)}
          >
            <Text style={styles.songText}>{song}</Text>
            <FontAwesome5
              name="play"
              size={20}
              color="white"
              style={styles.playIcon}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.savePlaylistButton}
        onPress={handleSavePlaylist}
      >
        <Text style={styles.savePlaylistButtonText}>Save Playlist</Text>
      </TouchableOpacity>

      {isPlaylistSaved && (
        <View style={styles.playlistSavedMessage}>
          <Text style={styles.playlistSavedMessageText}>Playlist saved!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#121212", // Dark background color
  },
  playlistSavedMessage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#1DB954", // Spotify Green
    padding: 8,
    alignItems: "center",
  },
  playlistSavedMessageText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Helvetica Neue", // Use a nicer font
  },
  languagePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginRight: 8,
    color: "white", // Text color
    fontFamily: "Helvetica Neue", // Use a nicer font
  },
  languagePicker: {
    flex: 1,
    color: "white", // Picker text color
    backgroundColor: "#1E1E1E", // Picker background color
  },
  pickerItem: {
    color: "white", // Picker item color
    fontFamily: "Helvetica Neue", // Use a nicer font
    fontSize: 15,
  },
  scrollContainer: {
    flex: 1,
  },
  songItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 8,
    backgroundColor: "#1E1E1E", // Song item background color
  },
  songText: {
    flex: 1,
    color: "white", // Song text color
    fontFamily: "Helvetica Neue", // Use a nicer font
  },
  playIcon: {
    marginLeft: 8,
  },
  savePlaylistButton: {
    backgroundColor: "#1DB954", // Spotify Green
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  savePlaylistButtonText: {
    color: "white", // Button text color
    fontSize: 18,
    fontFamily: "Helvetica Neue", // Use a nicer font
  },
});

export default Playlists;
