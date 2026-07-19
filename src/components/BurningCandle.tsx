import { useState, useEffect, useCallback, useRef } from 'react';

export default function BurningCandle() {
  const [isLit, setIsLit] = useState(true);
  const [isBlowing, setIsBlowing] = useState(false);
  const [isLighting, setIsLighting] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const candleRef = useRef<HTMLDivElement>(null);

  // Hide tooltip after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const toggleCandle = useCallback(() => {
    if (isBlowing || isLighting) return;

    if (isLit) {
      // Blow out
      setIsBlowing(true);
      setTimeout(() => {
        setIsLit(false);
        setIsBlowing(false);
        document.documentElement.classList.add('dark-theme');
      }, 600);
    } else {
      // Re-light
      setIsLighting(true);
      document.documentElement.classList.remove('dark-theme');
      setTimeout(() => {
        setIsLit(true);
        setIsLighting(false);
      }, 400);
    }
  }, [isLit, isBlowing, isLighting]);

  return (
    <div
      className="candle-fixture"
      ref={candleRef}
      onClick={toggleCandle}
      role="button"
      tabIndex={0}
      aria-label={isLit ? 'Blow out candle to enable dark theme' : 'Light candle to restore light theme'}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleCandle(); }}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="candle-tooltip">
          <span>Click to blow out</span>
          <div className="candle-tooltip-arrow" />
        </div>
      )}

      {/* Ambient glow on the wall */}
      {isLit && !isBlowing && (
        <div className="candle-wall-glow" />
      )}

      {/* The candle assembly */}
      <div className={`candle-assembly ${isLit ? 'candle-lit' : 'candle-out'} ${isBlowing ? 'candle-blowing' : ''} ${isLighting ? 'candle-lighting' : ''}`}>

        {/* Smoke puffs — visible when blowing out or when out */}
        <div className={`candle-smoke-container ${(isBlowing || !isLit) ? 'smoke-visible' : ''}`}>
          <div className="candle-smoke candle-smoke-1" />
          <div className="candle-smoke candle-smoke-2" />
          <div className="candle-smoke candle-smoke-3" />
        </div>

        {/* Flame assembly */}
        <div className={`candle-flame-container ${isLit && !isBlowing ? 'flame-active' : ''} ${isBlowing ? 'flame-dying' : ''}`}>
          {/* Outer glow */}
          <div className="candle-flame-glow" />
          {/* Main flame layers */}
          <div className="candle-flame candle-flame-outer" />
          <div className="candle-flame candle-flame-mid" />
          <div className="candle-flame candle-flame-inner" />
          {/* Sparks / embers */}
          <div className="candle-ember candle-ember-1" />
          <div className="candle-ember candle-ember-2" />
          <div className="candle-ember candle-ember-3" />
        </div>

        {/* Wick */}
        <div className="candle-wick" />

        {/* Wax body */}
        <div className="candle-wax-body">
          {/* Melted wax pool at top */}
          <div className="candle-wax-pool" />
          {/* Dripping wax */}
          <div className="candle-drip candle-drip-1" />
          <div className="candle-drip candle-drip-2" />
          <div className="candle-drip candle-drip-3" />
        </div>

        {/* Brass holder / saucer */}
        <div className="candle-holder">
          <div className="candle-holder-rim" />
          <div className="candle-holder-base" />
          <div className="candle-holder-saucer" />
        </div>
      </div>
    </div>
  );
}
