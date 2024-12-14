import { useEffect } from 'react';

export const useThemeEffect = (theme: 'light' | 'dark') => {
  useEffect(() => {
    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        theme === 'dark' ? '#111827' : '#ffffff'
      );
    }

    // Update body background and text color
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);
};