"use client";

/**
 * Sends a custom event to Google Analytics 4 (GA4).
 * Safely checks for the existence of window.gtag.
 *
 * @param {string} eventName - The name of the GA4 event (e.g. 'whatsapp_click')
 * @param {Object} [params] - Optional parameters to send with the event
 */
export function trackGAEvent(eventName, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
