'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';

type Theme = 'dark' | 'light' | 'system';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<'code'>) {
  return (
    // @ts-expect-error - next-themes types are incomplete
    <ThemeProvider {...props}>{children}</ThemeProvider>
  );
}
