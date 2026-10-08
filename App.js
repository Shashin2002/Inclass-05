
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [points, setPoints] = useState(0);

  const addPoint = () => {
    setPoints((previousPoints) => previousPoints + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#000000"
        barStyle="light-content"
      />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Picture */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://api.dicebear.com/9.x/avataaars/png?seed=Diluka",
            }}
            style={styles.avatar}
          />

          <View style={styles.verifiedIcon}>
            <Ionicons
              name="checkmark"
              size={29}
              color="#00D000"
            />
          </View>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* User Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailGroup}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Shashin</Text>
        </View>

        <View style={styles.detailGroup}>
          <Text style={styles.label}>Email</Text>

          <View style={styles.detailRow}>
            <Ionicons
              name="mail"
              size={16}
              color="#000"
            />
            <Text style={styles.iconText}>
              kpsspeiris.s@nsbm.ac.lk
            </Text>
          </View>
        </View>

        <View style={styles.detailGroup}>
          <Text style={styles.label}>Points</Text>

          <View style={styles.detailRow}>
            <Ionicons
              name="star"
              size={17}
              color="#000"
            />
            <Text style={styles.iconText}>{points}</Text>
          </View>
        </View>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={addPoint}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={25} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },

  header: {
    backgroundColor: "#000000",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  profileSection: {
    alignItems: "center",
    marginTop: 12,
    marginBottom: 7,
  },

  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FFFFFF",
  },

  verifiedIcon: {
    position: "absolute",
    right: 14,
    bottom: 16,
  },

  divider: {
    height: 1,
    backgroundColor: "#333333",
    marginHorizontal: 16,
  },

  detailsContainer: {
    paddingHorizontal: 16,
    paddingTop: 14,
  },

  detailGroup: {
    marginBottom: 22,
  },

  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },

  value: {
    fontSize: 14,
    color: "#222222",
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconText: {
    fontSize: 14,
    color: "#222222",
    marginLeft: 10,
  },

  floatingButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
