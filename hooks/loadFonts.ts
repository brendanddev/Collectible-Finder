
/**
 * @file loadFonts.ts
 * @author Brendan Dileo, May 2025
 * Custom hook to load fonts
 */

import { useFonts } from "expo-font";

const useLoadFonts = () => {
    const [fontsLoaded] = useFonts({
        'Comic Font': require(''),
        'Comic Font 2': require(''),
        'Comic Font 3': require('')
    });
    return fontsLoaded;
};

export default useLoadFonts;

