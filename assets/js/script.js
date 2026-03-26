const nav = document.querySelector(".site-nav");
const menuButton = document.querySelector(".menu-toggle");
const page = document.body.dataset.page;

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const navMap = {
  home: "index.html",
  about: "about.html",
  connect: "connect.html",
  groups: "groups.html",
  "whole-person": "whole-person.html",
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

const setupPageTransitionTargets = () => {
  if (cameFromInternalTransition) {
    return;
  }

  [...document.querySelectorAll("main, .site-footer")].forEach((element) => {
    element.classList.add("page-transition-target");
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

setupPageTransitionTargets();
setupPageTransitions();
setupPageReveals();
setupHomeMotion();
