"use client";

import { useState } from "react";
import { Phone, Clock, MapPin, ChevronDown, Map, ChevronUp } from "lucide-react";
import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import FadeUp from "../../ui/Motion/FadeUp";
import { trackGAEvent } from "../../ui/Analytics/track";
import styles from "./Branches.module.css";

export default function Branches() {
  const [activeBranchId, setActiveBranchId] = useState(1);
  const [expandedBranchIdMobile, setExpandedBranchIdMobile] = useState(null); // Mobile accordion starts collapsed by default

  const branchesData = [
    {
      id: 1,
      name: "Goldstone Fitness",
      branchName: "Kattigenahalli",
      status: "operational",
      badgeClass: styles.badgeOperational,
      badgeDot: "✔",
      address: "#No 62, KFC Building – 4th Floor, Dwaraka Nagar, Bagalur Main Road, Kattigenahalli, Bengaluru - 560064",
      phone: "+91 88674 41378",
      timings: "Mon-Sat: 5:00 AM - 10:00 PM | Sun: 7:00 AM - 11:00 AM, 4:00 PM - 9:00 PM",
      primaryBtnText: "Get Directions",
      primaryBtnHref: "https://maps.google.com/?q=13.121235938317112,77.61905111103125",
      secondaryBtnText: "Call Now",
      secondaryBtnHref: "tel:+918867441378",
      isOpeningSoon: false,
      mapEmbedSrc: "https://www.google.com/maps?q=13.121235938317112,77.61905111103125&output=embed",
      gymPhoto: "/images/gallery/gallery-1.webp",
    },
    {
      id: 2,
      name: "Goldstone Fitness",
      branchName: "Jakkur",
      status: "coming soon",
      badgeClass: styles.badgeUpcoming,
      badgeDot: "🟢",
      address: "No 4, Sai ram building - 1st floor, above Kotak Mahindra bank, K V Jairam road, MCECHS layout phase 2, jakkur layout, jakkur, banglore - 560064",
      phone: "+91 88674 41378",
      timings: "Opening Soon - October 2026",
      primaryBtnText: "View Location",
      primaryBtnHref: "https://maps.google.com/?q=13.072300729547326,77.60475883355028",
      secondaryBtnText: "Contact Us",
      secondaryBtnHref: "#contact",
      isOpeningSoon: true,
      mapEmbedSrc: "https://www.google.com/maps?q=13.072300729547326,77.60475883355028&output=embed",
      gymPhoto: "/logo/logo.svg",
    },
  ];

  const activeBranch = branchesData.find((b) => b.id === activeBranchId) || branchesData[0];

  return (
    <section id="branches" className={styles.branches} aria-labelledby="branches-heading">
      <Container>
        <FadeUp delay={0.1}>
          <div className={styles.heading}>
            <span>Find Your Gym</span>
            <h2 id="branches-heading">Train at a location that works for you</h2>
            <div className={styles.headingDivider}></div>
          </div>
        </FadeUp>

        {/* Desktop Layout - Horizontal Photo Cards & Map Panel */}
        <div className={styles.desktopLayout}>
          <div className={styles.tabsGrid}>
            {branchesData.map((branch) => {
              const isActive = activeBranchId === branch.id;
              return (
                <div
                  key={branch.id}
                  className={`${styles.tabCard} ${isActive ? styles.activeTab : ""}`}
                  onClick={() => setActiveBranchId(branch.id)}
                  role="tab"
                  aria-selected={isActive}
                >
                  <div className={styles.tabCardBody}>
                    {/* Gym Photo Column */}
                    <div className={`${styles.gymPhotoWrapper} ${branch.isOpeningSoon ? styles.logoPlaceholderWrapper : ""}`}>
                      <img
                        src={branch.gymPhoto}
                        alt={`${branch.branchName} ${branch.isOpeningSoon ? "Logo" : "Interior View"}`}
                        className={`${styles.gymPhoto} ${branch.isOpeningSoon ? styles.logoPlaceholder : ""}`}
                      />
                    </div>

                    {/* Text Details Column */}
                    <div className={styles.cardTextContent}>
                      <div className={styles.cardHeader}>
                        <div className={styles.branchTitle}>
                          <h3>{branch.name}</h3>
                          <p>{branch.branchName}</p>
                        </div>

                        <span className={`${styles.badge} ${branch.badgeClass}`}>
                          {branch.badgeDot === "🟢" ? (
                            <span className={styles.badgeDot} aria-hidden="true" />
                          ) : (
                            <span style={{ marginRight: "4px" }}>✔</span>
                          )}
                          {branch.status}
                        </span>
                      </div>

                      <div className={styles.tabDetails}>
                        <div className={styles.tabInfoItem}>
                          <div className={styles.iconWrapper}>
                            <MapPin size={15} aria-hidden="true" />
                          </div>
                          <div className={styles.infoText}>
                            {branch.address}
                          </div>
                        </div>

                        <div className={styles.tabInfoItem}>
                          <div className={styles.iconWrapper}>
                            <Phone size={15} aria-hidden="true" />
                          </div>
                          <div className={styles.infoText}>
                            <a 
                              href={`tel:${branch.phone.replace(/\s+/g, "")}`} 
                              className={styles.phoneLink}
                              onClick={() => trackGAEvent("phone_click", { branch: branch.branchName, location: "branches_card" })}
                            >
                              {branch.phone}
                            </a>
                          </div>
                        </div>

                        <div className={styles.tabInfoItem}>
                          <div className={styles.iconWrapper}>
                            {branch.isOpeningSoon ? (
                              <Map size={15} aria-hidden="true" />
                            ) : (
                              <Clock size={15} aria-hidden="true" />
                            )}
                          </div>
                          <div className={styles.infoText}>
                            {branch.timings}
                          </div>
                        </div>

                        <div className={styles.buttons}>
                          <Button
                            href={branch.primaryBtnHref}
                            target={branch.isOpeningSoon ? "_self" : "_blank"}
                            rel={branch.isOpeningSoon ? undefined : "noopener noreferrer"}
                            variant="primary"
                            className={`${styles.cardBtn} ${styles.primaryBtn}`}
                            onClick={() => trackGAEvent("directions_click", { branch: branch.branchName, location: "branches_primary" })}
                          >
                            {branch.primaryBtnText}
                          </Button>
                          <Button
                            href={branch.secondaryBtnHref}
                            variant="secondary"
                            className={`${styles.cardBtn} ${styles.secondaryBtn}`}
                            onClick={() => {
                              if (branch.secondaryBtnHref.startsWith("tel:")) {
                                trackGAEvent("phone_click", { branch: branch.branchName, location: "branches_secondary" });
                              }
                            }}
                          >
                            {branch.secondaryBtnText}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Large Map Panel matching the vertical height of both cards */}
          <div className={styles.mapPanel}>
            <div className={styles.mapWindowHeader}>
              <div className={styles.windowControls}>
                <span className={styles.ctrlClose} />
                <span className={styles.ctrlMinimize} />
                <span className={styles.ctrlMaximize} />
              </div>
              <div className={styles.windowAddressBar}>
                goldstonefitness.com/locations/{activeBranch.branchName.toLowerCase()}
              </div>
            </div>
            
            {/* Viewport container to stack map iframes with relative positioning */}
            <div style={{ position: "relative", flexGrow: 1, width: "100%", overflow: "hidden" }}>
              {branchesData.map((branch) => {
                const isMapActive = activeBranchId === branch.id;
                return (
                  <iframe
                    key={branch.id}
                    src={branch.mapEmbedSrc}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${branch.branchName} Location Map`}
                    className={`${styles.desktopIframe} ${isMapActive ? styles.iframeActive : styles.iframeInactive}`}
                  />
                );
              })}

              {/* Clickable Overlay Link covering the map */}
              <a
                href={activeBranch.primaryBtnHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapClickOverlay}
                aria-label="Open location in Google Maps"
                onClick={() => trackGAEvent("directions_click", { branch: activeBranch.branchName, location: "map_overlay_desktop" })}
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout - Map in the background, cards overlaying at the bottom */}
        <div className={styles.mobileLayout}>
          {/* Background Map Panel with stacked cross-fading maps */}
          <div className={styles.mobileMapPanel}>
            {branchesData.map((branch) => {
              const isMapActive = activeBranchId === branch.id;
              return (
                <iframe
                  key={branch.id}
                  src={branch.mapEmbedSrc}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${branch.branchName} Mobile Map`}
                  className={`${styles.mobileIframe} ${isMapActive ? styles.iframeActive : styles.iframeInactive}`}
                />
              );
            })}

            {/* Clickable Overlay Link covering the map */}
            <a
              href={activeBranch.primaryBtnHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapClickOverlay}
              aria-label="Open location in Google Maps"
              onClick={() => trackGAEvent("directions_click", { branch: activeBranch.branchName, location: "map_overlay_mobile" })}
            />
          </div>

          {/* Cards Overlay List */}
          <div className={styles.mobileCardsGrid}>
            {branchesData.map((branch, index) => {
              const isMobileActive = expandedBranchIdMobile === branch.id;
              return (
                <div
                  key={branch.id}
                  className={`${styles.mobileTabCard} ${isMobileActive ? styles.activeMobileTab : ""}`}
                  onClick={() => {
                    setActiveBranchId(branch.id);
                    setExpandedBranchIdMobile(expandedBranchIdMobile === branch.id ? null : branch.id);
                  }}
                >
                  <div className={styles.mobileCardHeader}>
                    <div className={styles.mobileBranchTitle}>
                      <h3>{index + 1}. {branch.name}</h3>
                      <p>{branch.branchName}</p>
                    </div>
                    
                    <span className={`${styles.badge} ${branch.badgeClass}`}>
                      {branch.status}
                    </span>
                  </div>

                  <div className={`${styles.mobileAddressWrapper} ${isMobileActive ? styles.addressExpanded : ""}`}>
                    <div className={styles.mobileAddressInner}>
                      <p className={styles.mobileAddress}>{branch.address}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}