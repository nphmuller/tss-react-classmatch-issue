"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

export default function MuiProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
