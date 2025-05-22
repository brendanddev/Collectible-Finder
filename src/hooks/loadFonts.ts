
/**
 * @file loadFonts.ts
 * @author Brendan Dileo, May 2025
 * Custom hook to load fonts
 */

import { useFonts } from "expo-font";

const useLoadFonts = () => {
    const [fontsLoaded] = useFonts({
        'Comic Font': require('../assets/fonts/comic1.otf'),
        'Comic Font 2': require('../assets/fonts/comic2.otf'),
        'Comic Font 3': require('../assets/fonts/comic3.otf')
    });
    return fontsLoaded;
};

export default useLoadFonts;

