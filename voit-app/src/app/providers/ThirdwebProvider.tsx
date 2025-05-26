'use client';

import { ThirdwebProvider } from 'thirdweb/react';
import { polygon } from 'thirdweb/chains';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider
      activeChain={polygon}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
    >
      {children}
    </ThirdwebProvider>
  );
}