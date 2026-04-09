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
const INTERNAL_TRANSITION_KEY = "rgInternalPageTransition";
const INTERNAL_ENTRY_CLASS = "is-page-entering";
const ENTRY_IMAGE_WAIT_TIMEOUT_MS = 700;
const cameFromInternalTransition = (() => {
  try {
    const shouldSkipEntry = window.sessionStorage.getItem(INTERNAL_TRANSITION_KEY) === "1";

    if (shouldSkipEntry) {
      window.sessionStorage.removeItem(INTERNAL_TRANSITION_KEY);
    }

    return shouldSkipEntry;
  } catch (error) {
    return false;
  }
})();

const waitForImageReady = (image) => {
  if (!image) {
    return Promise.resolve();
  }

  if (image.complete && image.naturalWidth > 0) {
    if (typeof image.decode === "function") {
      return image.decode().catch(() => {});
    }

    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const finish = () => {
      image.removeEventListener("load", finish);
      image.removeEventListener("error", finish);
      resolve();
    };

    image.addEventListener("load", finish, { once: true });
    image.addEventListener("error", finish, { once: true });
  });
};

const getCriticalEntryImages = () => {
  const topBoundary = window.innerHeight * 1.15;

  return [...document.querySelectorAll("main img")]
    .filter((image) => {
      const rect = image.getBoundingClientRect();

      return rect.top < topBoundary && rect.bottom > -48;
    })
    .slice(0, 2);
};

const waitForCriticalEntryImages = () => {
  const criticalImages = getCriticalEntryImages();

  if (!criticalImages.length) {
    return Promise.resolve();
  }

  return Promise.race([
    Promise.all(criticalImages.map(waitForImageReady)),
    new Promise((resolve) => {
      window.setTimeout(resolve, ENTRY_IMAGE_WAIT_TIMEOUT_MS);
    }),
  ]);
};

const setupPageTransitions = () => {
  if (reduceMotionQuery.matches) {
    return;
  }

  const links = [...document.querySelectorAll('a[href]')];

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const href = link.getAttribute("href");

      if (!href || href.startsWith("#") || link.target === "_blank" || link.hasAttribute("download")) {
        return;
      }

      const destination = new URL(link.href, window.location.href);
      const current = new URL(window.location.href);

      if (
        destination.origin !== current.origin ||
        destination.pathname === current.pathname && destination.hash ||
        !destination.pathname.endsWith(".html")
      ) {
        return;
      }

      event.preventDefault();
      try {
        window.sessionStorage.setItem(INTERNAL_TRANSITION_KEY, "1");
      } catch (error) {
        // Ignore storage errors and continue with the transition.
      }
      document.body.classList.add("is-page-exiting");
      window.setTimeout(() => {
        window.location.href = destination.href;
      }, 240);
    });
  });
};

const setupPageReveals = () => {
  if (reduceMotionQuery.matches || cameFromInternalTransition) {
    return;
  }

  const revealTargets = [
    ...document.querySelectorAll("main > *"),
    ...document.querySelectorAll(".site-footer"),
  ];

  revealTargets.forEach((element, index) => {
    element.classList.add("page-reveal");
    element.style.setProperty("--reveal-delay", `${80 + index * 70}ms`);
  });
};

const setupInternalEntryTransition = () => {
  if (reduceMotionQuery.matches || !cameFromInternalTransition) {
    document.documentElement.classList.remove(INTERNAL_ENTRY_CLASS);
    return;
  }

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      waitForCriticalEntryImages().finally(() => {
        document.documentElement.classList.remove(INTERNAL_ENTRY_CLASS);
      });
    });
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

setupInternalEntryTransition();
setupPageTransitions();
setupPageReveals();
setupHomeMotion();

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
