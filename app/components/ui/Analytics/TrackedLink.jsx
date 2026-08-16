"use client";

import { trackGAEvent } from "./track";

/**
 * A simple <a> wrapper for Server Components that tracks clicks in GA4
 * without converting the parent component to a Client Component.
 */
export default function TrackedLink({ href, eventName, eventParams = {}, children, ...props }) {
  const handleClick = (e) => {
    trackGAEvent(eventName, eventParams);
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
