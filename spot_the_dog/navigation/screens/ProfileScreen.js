import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "Cute User",
    bio: "Hello, I am a cute user!",
    profilePicture: require("../../assets/cute-profile-pic.jpg"),
  });

  const [tags, setTags] = useState([
    "Cute",
    "Friendly",
    "Music Lover",
    "Traveler",
  ]);

  // Change followers and following to friends with a fixed count of 3
  const [friends, setFriends] = useState(3);

  const [isEditing, setIsEditing] = useState(false);
  const [newBio, setNewBio] = useState(userData.bio);
  const [addingTag, setAddingTag] = useState(false);
  const [newTag, setNewTag] = useState("");

  const [savedPlaylists, setSavedPlaylists] = useState([
    "Spanish Playlist",
    "French Playlist",
  ]);

  const addTag = () => {
    if (newTag.trim() !== "") {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
      setAddingTag(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Edit Bio Button */}
      <TouchableOpacity
        style={styles.editBioButton}
        onPress={() => setIsEditing((prev) => !prev)}
      >
        <Text style={styles.editBioButtonText}>
          {isEditing ? "Save Bio" : "Edit Bio"}
        </Text>
      </TouchableOpacity>

      {/* Profile Picture with white border */}
      <View style={styles.profilePictureContainer}>
        <Image source={userData.profilePicture} style={styles.profilePicture} />
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userName}>{userData.name}</Text>

        {/* Friends count instead of Followers and Following */}
        <View style={styles.friendsContainer}>
          <Text style={styles.friendsText}>{friends}</Text>
          <Text style={styles.friendsLabel}>Friends</Text>
        </View>

        {/* Tags */}
        <View style={styles.tagContainer}>
          {tags.map((tag, index) => (
            <TouchableOpacity key={index} style={styles.tagButton}>
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bio */}
        {isEditing ? (
          <TextInput
            style={styles.editBioInput}
            value={newBio}
            onChangeText={(text) => setNewBio(text)}
          />
        ) : (
          <Text style={styles.userBio}>{userData.bio}</Text>
        )}

        {/* Add Tag Button */}
        {!addingTag ? (
          <TouchableOpacity
            style={styles.addTagButton}
            onPress={() => setAddingTag(true)}
          >
            <Text style={styles.addTagButtonText}>+ Add Tag</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.addTagInputContainer}>
            <TextInput
              style={styles.addTagInput}
              placeholder="Enter Tag"
              value={newTag}
              onChangeText={(text) => setNewTag(text)}
            />
            <TouchableOpacity
              style={styles.addTagConfirmButton}
              onPress={addTag}
            >
              <Text style={styles.addTagConfirmButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Saved Playlists */}
        <View style={styles.savedPlaylistsContainer}>
          <Text style={styles.savedPlaylistsHeader}>Saved Playlists</Text>
          {savedPlaylists.map((playlist, index) => (
            <View key={index} style={styles.playlistItem}>
              <Text style={styles.playlistName}>{playlist}</Text>
              <TouchableOpacity style={styles.playlistMenuButton}>
                <Text style={styles.playlistMenuText}>...</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929", // Dark greyish-black
  },
  editBioButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  editBioButtonText: {
    color: "#292929", // Dark greyish-black
    fontSize: 18,
  },
  profilePictureContainer: {
    borderWidth: 5,
    borderColor: "#fff",
    borderRadius: 80,
    overflow: "hidden",
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  userInfo: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    width: "90%",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  friendsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  friendsText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
    color: "#1DB954",
  },
  friendsLabel: {
    fontSize: 16,
    color: "#444",
  },
  tagContainer: {
    flexDirection: "row",
    marginBottom: 10,
    flexWrap: "wrap",
  },
  tagButton: {
    backgroundColor: "#1DB954",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  tagText: {
    color: "#fff",
    fontSize: 12,
  },
  userBio: {
    fontSize: 16,
    textAlign: "center",
    color: "#444",
    marginBottom: 10,
  },
  editBioInput: {
    borderWidth: 1,
    borderColor: "#1DB954",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    width: "80%",
    color: "#444",
    marginBottom: 10,
  },
  addTagButton: {
    backgroundColor: "#1DB954",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  addTagButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  addTagInputContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  addTagInput: {
    borderWidth: 1,
    borderColor: "#1DB954",
    borderRadius: 8,
    paddingHorizontal: 10,
    width: "60%",
    color: "#444",
    marginRight: 10,
  },
  addTagConfirmButton: {
    backgroundColor: "#1DB954",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  addTagConfirmButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  savedPlaylistsContainer: {
    marginTop: 20,
    width: "100%",
  },
  savedPlaylistsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  playlistItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
    width: "100%",
  },
  playlistName: {
    fontSize: 16,
    color: "#444",
  },
  playlistMenuButton: {
    backgroundColor: "#1DB954",
    borderRadius: 12,
    padding: 5,
    width: 40,
    justifyContent: "center", // Aligns content vertically in the center
    alignItems: "center", // Aligns content horizontally in the center
  },

  playlistMenuText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProfilePage;
