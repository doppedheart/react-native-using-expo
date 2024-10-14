export interface Wallpaper {
  url: string;
  title: string;
}

export interface FullWallpaper extends Wallpaper {
  liked: boolean;
  suggested: boolean;
  library: boolean;
}
export function useLikedWallpaper(): FullWallpaper[] {
  const wallpapers = useWallpaper();
  return wallpapers.filter((wallpaper) => wallpaper.liked == true);
}
export function useSuggestedWallpaper(): FullWallpaper[] {
  const wallpapers = useWallpaper();
  return wallpapers.filter((wallpaper) => wallpaper.suggested == true);
}
export function useLibraryWallpaper(): FullWallpaper[] {
  const wallpapers = useWallpaper();
  return wallpapers.filter((wallpaper) => wallpaper.library == true);
}

export function useWallpaper(): FullWallpaper[] {
  return [
    {
      url: "https://ideogram.ai/assets/image/lossless/response/f0HMZmFAQ5GFZzKtQjbQoA",
      title: "flowers",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/6aRwlCikSr2-gDrebhVDmw",
      title: "Elef",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/image/lossless/response/_lyF_-KQR4Gd9DO60kuO-g",
      title: "Modern women",
      liked: true,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/Vwn5DBTPQWSAwe8Xc50ZFA",
      title: "Checkers",
      liked: false,
      suggested: true,
      library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/9TB6NZFxS3avXHRTnlfssw",
      title: "Catty",
      liked: false,
      suggested: true,
      library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/Ch_KSKlDTOi57CWN8LT_BQ",
      title: "Night bench",
      liked: true,
      suggested: false,
      library: false,
    },
  ];
}
