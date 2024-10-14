import { SplitView } from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
import { useLikedWallpaper } from "@/hooks/useWallpaper";
import { StyleSheet, Text } from "react-native";

export default function Liked() {
  const wallpapers = useLikedWallpaper();
  return (
    <>
      <ThemedView style={styles.container}>
        <SplitView wallpapers={wallpapers} />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
