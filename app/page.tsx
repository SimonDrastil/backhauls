import { listings } from '@/data/mockListings';
import { MarketplaceShell } from '@/components/marketplace-shell';

export default function HomePage() {
  return <MarketplaceShell listings={listings} />;
}
