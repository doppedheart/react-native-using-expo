import { SplitView } from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
import { useLibraryWallpaper } from "@/hooks/useWallpaper";
import { StyleSheet } from "react-native";

export default function Featured() {
  const wallpapers = useLibraryWallpaper();
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
