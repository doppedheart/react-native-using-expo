import { SplitView } from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
import { useSuggestedWallpaper } from "@/hooks/useWallpaper";
import { StyleSheet } from "react-native";

export default function Suggested() {
  const wallpapers = useSuggestedWallpaper();
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
