"use client";

/**
 * Sends a custom event to Google Analytics 4 (GA4).
 * Safely checks for the existence of window.gtag.
 *
 * @param {string} eventName - The name of the GA4 event (e.g. 'whatsapp_click')
 * @param {Object} [params] - Optional parameters to send with the event
 */
export function trackGAEvent(eventName, params = {}) {
  console.log(`[GA4 Debug] trackGAEvent called: eventName="${eventName}"`, params);

  if (typeof window !== "undefined") {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
      console.log(`[GA4 Debug] Event "${eventName}" dispatched via window.gtag()`);
    } else if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params
      });
      console.log(`[GA4 Debug] window.gtag is not a function. Event "${eventName}" queued via dataLayer.`);
    } else {
      console.warn(`[GA4 Debug] Event "${eventName}" NOT sent. window.gtag is undefined and dataLayer is missing.`);
    }
  } else {
    console.warn(`[GA4 Debug] Event "${eventName}" NOT sent. window is undefined (Server Side).`);
  }
}
