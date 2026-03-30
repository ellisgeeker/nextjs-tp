import { TradingStoreProvider } from "@/components/providers/trading-store-provider";
import { TradingWorkspace } from "@/components/trading/trading-workspace";

export default function ZustandExamplePage() {
  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <TradingStoreProvider
          initialState={{
            symbol: "BTCUSDT",
            lastPrice: 108_420,
            priceChangePct: 0.84,
            spreadBps: 1.8,
          }}
        >
          <TradingWorkspace />
        </TradingStoreProvider>
      </div>
    </div>
  );
}
