"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { I18nProviderClient, useCurrentLocale } from "@/locales/client";
import ThemeProvider from "@/components/Home/ThemeProvider";

export interface ProvidersProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProvidersProps) => {
  const locales = useCurrentLocale();
  return (
    <NextUIProvider>
      <I18nProviderClient locale={locales}>
        <ThemeProvider>{children}</ThemeProvider>
      </I18nProviderClient>
    </NextUIProvider>
  );
};

export default Provider;
