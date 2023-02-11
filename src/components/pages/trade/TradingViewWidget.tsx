// TradingViewWidget.js

import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise: any;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef<any>();

  const clearScriptRef = () => {
    onLoadScriptRef.current = null;
  };

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current(),
    );

    return clearScriptRef;

    function createWidget() {
      if (
        document.getElementById("tradingview_3af7b") &&
        "TradingView" in window
      ) {
        new (window as any).TradingView.widget({
          autosize: true,
          symbol: "UNISWAP3ETH:WETHUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: "tradingview_3af7b",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container h-full rounded-2xl">
      <div id="tradingview_3af7b" className="h-full rounded-2xl" />
    </div>
  );
}
