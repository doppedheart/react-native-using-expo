import React, { useCallback, useRef } from "react";
import {
  StyleSheet,
  Image,
  Button,
  View,
  useColorScheme,
  Pressable,
  Text,
} from "react-native";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpaper";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

export function DownloadPicture({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const theme = useColorScheme() ?? "dark";
  return (
    <BottomSheet
      snapPoints={["99%"]}
      onClose={onClose}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image style={styles.image} source={{ uri: wallpaper.url }} />
        <View style={styles.topbar}>
          <Ionicons
            name={"close"}
            onPress={onClose}
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
        </View>
        <View style={styles.topbarLeft}>
          <Ionicons
            name={"heart"}
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
          <Ionicons
            name={"share"}
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
        </View>
        <ThemedText style={styles.title}>{wallpaper.title}</ThemedText>
        <DownloadButton url={wallpaper.url} />
      </BottomSheetView>
    </BottomSheet>
  );
}

const DownloadButton = ({ url }: { url: string }) => {
  const theme = useColorScheme();
  return (
    <Pressable
      onPress={async () => {
        let date = new Date().getTime();
        let fileUri = FileSystem.documentDirectory + `${date}.jpg`;
        try {
          await FileSystem.downloadAsync(url, fileUri);
          const response = await MediaLibrary.requestPermissionsAsync(true);
          if (response.granted) {
            MediaLibrary.createAssetAsync(fileUri);
            alert("Image saved");
          } else {
            console.error("permission not granted");
          }
        } catch (err) {
          console.log("F5 Err", err);
        }
      }}
      style={{
        backgroundColor: "black",
        borderRadius: 10,
        flexDirection: "row",
        margin: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons
        name={"download"}
        size={24}
        color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
      />
      <Text
        style={{
          fontSize: 20,
          color: "white",
          fontWeight: "600",
          marginLeft: 4,
        }}
      >
        Download
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: "60%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  topbar: {
    position: "absolute",
    padding: 10,
  },
  topbarLeft: {
    position: "absolute",
    flexDirection: "row",
    right: 0,
    padding: 10,
    justifyContent: "space-between",
  },
  title: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "600",
    marginTop: 10,
    padding: 10,
  },
});
