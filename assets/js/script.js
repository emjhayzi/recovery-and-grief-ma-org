const nav = document.querySelector(".site-nav");
const menuButton = document.querySelector(".menu-toggle");
const page = document.body.dataset.page;
const mobileNavQuery = window.matchMedia("(max-width: 760px)");
const navDropdown = document.querySelector(".nav-dropdown");

// ── Scroll to top button ────────────────────────────────────────────────────
(function () {
  const btn = document.createElement("button");
  btn.id = "scroll-top-btn";
  btn.setAttribute("aria-label", "Scroll to top");
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`;
  Object.assign(btn.style, {
    position:       "fixed",
    bottom:         "1.5rem",
    right:          "1.25rem",
    zIndex:         "999",
    width:          "2.75rem",
    height:         "2.75rem",
    borderRadius:   "50%",
    border:         "1px solid rgba(52,63,58,0.18)",
    background:     "rgba(255,253,250,0.72)",
    backdropFilter: "blur(10px)",
    color:          "rgba(47,58,52,0.55)",
    cursor:         "pointer",
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    opacity:        "0",
    transform:      "translateY(0.5rem)",
    transition:     "opacity 280ms ease, transform 280ms ease",
    pointerEvents:  "none",
    boxShadow:      "0 4px 16px rgba(47,58,52,0.1)",
  });
  document.body.appendChild(btn);

  let visible = false;
  window.addEventListener("scroll", () => {
    const shouldShow = window.scrollY > 300;
    if (shouldShow !== visible) {
      visible = shouldShow;
      btn.style.opacity      = visible ? "1"   : "0";
      btn.style.transform    = visible ? "translateY(0)" : "translateY(0.5rem)";
      btn.style.pointerEvents = visible ? "auto" : "none";
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
// ── End scroll to top ────────────────────────────────────────────────────────
const dropdownBtn = document.querySelector(".nav-dropdown-label");
const dropdownMenu = document.querySelector(".nav-dropdown-menu");
let navCloseTimer = null;

const clearNavCloseTimer = () => {
  if (navCloseTimer !== null) {
    window.clearTimeout(navCloseTimer);
    navCloseTimer = null;
  }
};

const setDropdownOpen = (open, { immediate = false } = {}) => {
  if (!navDropdown || !dropdownBtn || !dropdownMenu) {
    return;
  }

  if (mobileNavQuery.matches) {
    navDropdown.classList.remove("is-open");
    dropdownBtn.setAttribute("aria-expanded", "true");
    return;
  }

  dropdownBtn.setAttribute("aria-expanded", String(open));

  if (open) {
    navDropdown.classList.add("is-open");
    return;
  }

  if (immediate) {
    navDropdown.classList.remove("is-open");
    return;
  }

  navDropdown.classList.remove("is-open");
};

if (menuButton && nav) {
  const setNavOpen = (isOpen, { immediate = false } = {}) => {
    clearNavCloseTimer();
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("has-open-menu", mobileNavQuery.matches && isOpen);

    if (!mobileNavQuery.matches) {
      nav.classList.remove("is-open");
      nav.hidden = false;
      return;
    }

    if (isOpen) {
      nav.hidden = false;
      window.requestAnimationFrame(() => {
        nav.classList.add("is-open");
      });
      return;
    }

    nav.classList.remove("is-open");

    if (immediate) {
      nav.hidden = true;
      return;
    }

    navCloseTimer = window.setTimeout(() => {
      if (!nav.classList.contains("is-open")) {
        nav.hidden = true;
      }
    }, 260);
  };

  setNavOpen(false, { immediate: true });

  menuButton.addEventListener("click", () => {
    setNavOpen(!nav.classList.contains("is-open"));
  });

  [...nav.querySelectorAll("a")].forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileNavQuery.matches) {
        setNavOpen(false);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setNavOpen(false);
      menuButton.focus();
    }

    if (event.key === "Escape" && navDropdown?.classList.contains("is-open")) {
      setDropdownOpen(false, { immediate: true });
      dropdownBtn?.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      !mobileNavQuery.matches ||
      !nav.classList.contains("is-open") ||
      nav.contains(event.target) ||
      menuButton.contains(event.target)
    ) {
      return;
    }

    setNavOpen(false);
  });

  const syncNavForViewport = () => {
    if (!mobileNavQuery.matches) {
      setNavOpen(false, { immediate: true });
      setDropdownOpen(false, { immediate: true });
      nav.hidden = false;
      return;
    }

    nav.hidden = !nav.classList.contains("is-open");
    document.body.classList.toggle("has-open-menu", nav.classList.contains("is-open"));
    setDropdownOpen(false, { immediate: true });
  };

  if (typeof mobileNavQuery.addEventListener === "function") {
    mobileNavQuery.addEventListener("change", syncNavForViewport);
  } else if (typeof mobileNavQuery.addListener === "function") {
    mobileNavQuery.addListener(syncNavForViewport);
  }

  syncNavForViewport();
}

const navMap = {
  home: "index.html",
  "who-we-are": "who-we-are.html",
  "what-we-do": "what-we-do.html",
  connect: "connect.html",
  groups: "groups.html",
  "whole-person": "whole-person.html",
  "other-paths-to-recovery": "whole-person.html",
  resources: "resources.html",
  "help-others": "help-others.html",
};

const currentHref = navMap[page];

if (currentHref && nav) {
  [...nav.querySelectorAll("a")].forEach((link) => {
    if (link.getAttribute("href") === currentHref) {
      link.setAttribute("aria-current", "page");
    }
  });
}

const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const pageTransitionDuration = 320;
const pageTransitionStorageKey = "recovery-and-grief-page-transition";
const supportsViewTransitions =
  !reduceMotionQuery.matches &&
  typeof document.startViewTransition === "function" &&
  typeof CSS !== "undefined" &&
  typeof CSS.supports === "function" &&
  CSS.supports("view-transition-name: page-masthead");

const setTransitionName = (element, name) => {
  if (!element || reduceMotionQuery.matches) {
    return;
  }

  element.style.viewTransitionName = name;
};

const setupSharedElementTransitions = () => {
  setTransitionName(document.querySelector(".brand-shell"), "site-chrome");
  setTransitionName(document.querySelector(".page-hero, .hero-stage"), "page-masthead");

  const featureMedia = document.querySelector(
    [
      ".connect-band__image img",
      ".team-hero-collage__frame--primary img",
      ".path-feature-media",
      ".content-card.wide-card",
      ".hero-path-grid",
    ].join(", ")
  );

  setTransitionName(featureMedia, "page-feature-media");
};

const getStoredTransitionState = () => {
  try {
    return JSON.parse(sessionStorage.getItem(pageTransitionStorageKey) || "null");
  } catch {
    return null;
  }
};

const clearStoredTransitionState = () => {
  try {
    sessionStorage.removeItem(pageTransitionStorageKey);
  } catch {}
};

const setupPageTransitionFallback = () => {
  document.body.classList.remove("has-page-transition-fallback");

  if (reduceMotionQuery.matches || supportsViewTransitions) {
    clearStoredTransitionState();
    return;
  }

  // Create the overlay element once
  const overlay = document.createElement("div");
  overlay.className = "page-transition-overlay";
  document.body.appendChild(overlay);

  // If arriving from a transition, start covered then reveal
  const storedState = getStoredTransitionState();
  const isFreshTransition =
    storedState &&
    typeof storedState.timestamp === "number" &&
    Date.now() - storedState.timestamp < 1800;

  if (isFreshTransition) {
    overlay.classList.add("is-fading-in");
    document.documentElement.classList.remove("ptr-mask");

    // Wait for fonts + layout to fully settle before revealing
    const reveal = () => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          overlay.classList.remove("is-fading-in");
          overlay.classList.add("is-revealing");

          const cleanup = () => {
            overlay.classList.remove("is-revealing");
          };
          overlay.addEventListener("transitionend", cleanup, { once: true });
          window.setTimeout(cleanup, 1000);
        });
      });
    };

    // Hold overlay until fonts are ready + a minimum settle time
    const minDelay = new Promise((r) => window.setTimeout(r, 250));
    const fontsReady = document.fonts?.ready || Promise.resolve();
    Promise.all([minDelay, fontsReady]).then(reveal).catch(reveal);
  }

  // Safety: always remove ptr-mask even if transition state was stale
  document.documentElement.classList.remove("ptr-mask");

  clearStoredTransitionState();

  let isNavigating = false;

  document.addEventListener(
    "click",
    (event) => {
      const link = event.target.closest("a[href]");

      if (!link || isNavigating || event.defaultPrevented) {
        return;
      }

      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.target === "_blank" ||
        link.hasAttribute("download")
      ) {
        return;
      }

      const destination = new URL(link.href, window.location.href);
      const isPageNavigation =
        destination.pathname.endsWith(".html") || destination.pathname.endsWith("/");
      const isSamePageAnchor =
        destination.pathname === window.location.pathname &&
        destination.search === window.location.search &&
        Boolean(destination.hash);

      if (
        destination.origin !== window.location.origin ||
        !["http:", "https:"].includes(destination.protocol) ||
        !isPageNavigation ||
        isSamePageAnchor ||
        (destination.pathname === window.location.pathname &&
          destination.search === window.location.search) ||
        link.getAttribute("href")?.startsWith("#")
      ) {
        return;
      }

      isNavigating = true;
      event.preventDefault();

      try {
        sessionStorage.setItem(
          pageTransitionStorageKey,
          JSON.stringify({ timestamp: Date.now() })
        );
      } catch {}

      // Fade the overlay in (covers the page)
      overlay.classList.add("is-fading-out");

      // Navigate once fully faded
      const navigate = () => {
        window.location.assign(destination.href);
      };
      overlay.addEventListener("transitionend", navigate, { once: true });
      // Safety fallback in case transitionend doesn't fire
      window.setTimeout(navigate, 900);
    },
    true
  );

  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      overlay.classList.remove("is-fading-out");
      isNavigating = false;
    }
  });
};

const setupHomeMotion = () => {
  if (page !== "home" || reduceMotionQuery.matches) {
    return;
  }

  const homeSections = [...document.querySelectorAll(".home-section")];

  if (!homeSections.length) {
    return;
  }

  document.body.classList.add("has-motion-enhancements");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          "is-visible",
          entry.isIntersecting && entry.intersectionRatio > 0.2
        );
      });
    },
    {
      threshold: [0.05, 0.2, 0.45, 0.7],
      rootMargin: "-8% 0px -8% 0px",
    }
  );

  homeSections.forEach((section, index) => {
    if (index === 0) {
      section.classList.add("is-visible");
    }

    revealObserver.observe(section);
  });
};

const syncSiteNavWidth = () => {
  const siteNav = document.querySelector(".site-nav");

  if (!siteNav || mobileNavQuery.matches) {
    document.documentElement.style.removeProperty("--site-nav-width");
    return;
  }

  const { width } = siteNav.getBoundingClientRect();

  if (!width) {
    document.documentElement.style.removeProperty("--site-nav-width");
    return;
  }

  document.documentElement.style.setProperty("--site-nav-width", `${width}px`);
};

setupSharedElementTransitions();
setupPageTransitionFallback();
setupHomeMotion();
syncSiteNavWidth();

window.addEventListener("resize", syncSiteNavWidth);
window.addEventListener("load", syncSiteNavWidth);

if (document.fonts?.ready) {
  document.fonts.ready.then(syncSiteNavWidth).catch(() => {});
}

if (dropdownBtn && navDropdown && dropdownMenu) {
  dropdownBtn.addEventListener("click", (e) => {
    if (mobileNavQuery.matches) return;
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen(!navDropdown.classList.contains("is-open"));
  });

  document.addEventListener("click", (e) => {
    if (!navDropdown.contains(e.target)) {
      setDropdownOpen(false, { immediate: true });
    }
  });

  document.addEventListener("focusin", (e) => {
    if (!mobileNavQuery.matches && !navDropdown.contains(e.target)) {
      setDropdownOpen(false, { immediate: true });
    }
  });
}
