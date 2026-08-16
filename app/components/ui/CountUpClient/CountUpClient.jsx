"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

/**
 * CountUpClient — Client island for animating numeric counters.
 * Renders the plain static value server-side, then hydrates to animate on scroll.
 *
 * @param {number} end - The target number to count up to
 * @param {number} decimals - Decimal places (default 0)
 * @param {number} duration - Animation duration in seconds
 * @param {string} staticValue - Fallback value shown before hydration
 */
export default function CountUpClient({ end, decimals = 0, duration = 2, staticValue }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp start={0} end={end} decimals={decimals} duration={duration} />
      ) : (
        staticValue ?? end
      )}
    </span>
  );
}
