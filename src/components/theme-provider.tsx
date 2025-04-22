"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from 'next-themes/dist/index';

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  storageKey?: string;
}

const ThemeProvider = ({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  storageKey = "theme",
}: ThemeProviderProps) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      storageKey={storageKey}
    >
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
