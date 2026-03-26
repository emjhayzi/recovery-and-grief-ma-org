(function () {
  const STORAGE_KEY = "design-lab-settings-v2";
  const STYLE_ID = "design-lab-live-overrides";
  const WATCH_INTERVAL_MS = 1500;
  const IS_FILE_PROTOCOL = window.location.protocol === "file:";

  const defaults = {
    page: "index.html",
    previewSize: "desktop",
    mainWeight: 170,
    companionWidth: 380,
    stageGap: 21,
    copyMaxWidth: 48,
    headingSize: 4.4,
    buttonsLayout: "row",
    lockHeroLines: false,
    stageColor: "#f0f0f0",
    veilColor: "#ffeedb",
    companionColor: "#fff6eb",
    accentColor: "#5ea7ae",
    textColor: "#525252",
    mutedColor: "#5e6a63",
    stageOpacity: 35,
    veilOpacity: 15,
    companionOpacity: 20,
    supportFillOpacity: 71
  };

  const pageLabels = {
    "index.html": "Landing Page",
    "about.html": "About",
    "connect.html": "Connect",
    "groups.html": "Groups",
    "whole-person.html": "Whole Person",
    "resources.html": "Resources",
    "help-others.html": "Help Others"
  };

  const controls = Array.from(document.querySelectorAll("[data-setting]"));
  const outputs = Array.from(document.querySelectorAll("[data-value-for]"));
  const previewFrame = document.getElementById("preview-frame");
  const previewShell = document.getElementById("preview-shell");
  const previewTitle = document.getElementById("preview-title");
  const cssOutput = document.getElementById("css-output");
  const statusNode = document.getElementById("lab-status");
  const copyButton = document.getElementById("copy-css");
  const resetButton = document.getElementById("reset-controls");
  const reloadButton = document.getElementById("reload-preview");

  let state = loadState();
  let watchTimer = null;
  let lastExternalSignature = "";
  let autoRefreshWarningShown = false;

  function loadState() {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
      return { ...defaults, ...saved };
    } catch (error) {
      return { ...defaults };
    }
  }

  function saveState() {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function hexToRgb(hex) {
    const value = hex.replace("#", "").trim();
    const normalized = value.length === 3
      ? value.split("").map((char) => char + char).join("")
      : value;
    const int = parseInt(normalized, 16);

    return {
      r: (int >> 16) & 255,
      g: (int >> 8) & 255,
      b: int & 255
    };
  }

  function rgba(hex, alpha) {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(2)})`;
  }

  function formatValue(key, value) {
    switch (key) {
      case "mainWeight":
        return `${(value / 100).toFixed(2)}fr`;
      case "companionWidth":
      case "stageGap":
        return `${value}px`;
      case "copyMaxWidth":
      case "headingSize":
        return `${value}rem`;
      case "stageOpacity":
      case "veilOpacity":
      case "companionOpacity":
      case "supportFillOpacity":
        return `${value}%`;
      default:
        return value;
    }
  }

  function syncControlsFromState() {
    controls.forEach((control) => {
      const key = control.dataset.setting;
      const value = state[key];

      if (control.type === "checkbox") {
        control.checked = Boolean(value);
      } else {
        control.value = value;
      }
    });
  }

  function syncOutputLabels() {
    outputs.forEach((output) => {
      const key = output.dataset.valueFor;
      output.value = formatValue(key, state[key]);
      output.textContent = formatValue(key, state[key]);
    });
  }

  function buildCss(settings) {
    const stageOpacity = settings.stageOpacity / 100;
    const veilOpacity = settings.veilOpacity / 100;
    const companionOpacity = settings.companionOpacity / 100;
    const supportFillOpacity = settings.supportFillOpacity / 100;
    const headingMin = Math.max(2.8, settings.headingSize * 0.62).toFixed(2);
    const headingMax = settings.headingSize.toFixed(2);
    const stageGap = `${settings.stageGap}px`;
    const buttonsDirection = settings.buttonsLayout === "row" ? "row" : "column";
    const buttonsWrap = settings.buttonsLayout === "row" ? "nowrap" : "wrap";
    const buttonsAlign = settings.buttonsLayout === "row" ? "center" : "flex-start";
    const buttonMin = settings.buttonsLayout === "row" ? "0" : "13.75rem";
    const headingWrap = settings.lockHeroLines ? "nowrap" : "normal";
    const mainTrack = (settings.mainWeight / 100).toFixed(2);

    return `/* Design Lab CSS overrides */
[data-page="home"] .hero-stage {
  grid-template-columns: minmax(0, ${mainTrack}fr) minmax(${settings.companionWidth}px, 0.64fr);
  gap: ${stageGap};
  background:
    linear-gradient(180deg, ${rgba(settings.stageColor, stageOpacity)} 0%, ${rgba(settings.stageColor, Math.max(0.2, stageOpacity - 0.04))} 100%),
    linear-gradient(135deg, ${rgba(settings.accentColor, 0.08)} 0%, ${rgba(settings.veilColor, 0.05)} 100%);
}

[data-page="home"] .hero-stage::before {
  background:
    radial-gradient(circle at 14% 14%, ${rgba(settings.accentColor, 0.12)}, transparent 28%),
    radial-gradient(circle at 86% 14%, ${rgba(settings.veilColor, 0.14)}, transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.06) 34%, rgba(255, 255, 255, 0.14) 100%);
}

[data-page="home"] .hero-home .hero-copy {
  background:
    linear-gradient(180deg, ${rgba(settings.veilColor, veilOpacity)} 0%, ${rgba(settings.veilColor, Math.max(0.08, veilOpacity - 0.16))} 100%),
    linear-gradient(135deg, ${rgba(settings.accentColor, 0.05)} 0%, rgba(255, 255, 255, 0.02) 38%, ${rgba(settings.veilColor, 0.08)} 100%);
}

[data-page="home"] .hero-copy-inner {
  max-width: ${settings.copyMaxWidth}rem;
}

[data-page="home"] .hero-home .hero-copy .section-kicker,
[data-page="home"] .hero-home .hero-copy .hero-emphasis,
[data-page="home"] .hero-home .hero-support-band .support-kicker {
  color: ${settings.accentColor};
}

[data-page="home"] .hero-home .hero-copy h1,
[data-page="home"] .hero-home .hero-support-band .support-title,
[data-page="home"] .hero-home .support-item strong {
  color: ${settings.textColor};
}

[data-page="home"] .hero-home .hero-copy .hero-text,
[data-page="home"] .hero-home .support-item p,
[data-page="home"] .hero-home .hero-support-band .support-note {
  color: ${settings.mutedColor};
}

[data-page="home"] .hero-home .hero-copy h1 {
  max-width: none;
  font-size: clamp(${headingMin}rem, 5.5vw, ${headingMax}rem);
}

[data-page="home"] .hero-home .hero-copy .hero-line {
  white-space: ${headingWrap};
}

[data-page="home"] .hero-home .hero-copy .hero-text {
  max-width: none;
}

[data-page="home"] .hero-home .hero-actions {
  flex-direction: ${buttonsDirection};
  flex-wrap: ${buttonsWrap};
  align-items: ${buttonsAlign};
}

[data-page="home"] .hero-home .button {
  min-width: ${buttonMin};
  white-space: nowrap;
}

[data-page="home"] .hero-home .hero-support-band {
  width: min(100%, ${settings.companionWidth}px);
  background: linear-gradient(180deg, ${rgba(settings.companionColor, companionOpacity)} 0%, ${rgba(settings.companionColor, Math.max(0.16, companionOpacity - 0.08))} 100%);
}

[data-page="home"] .hero-home .support-item {
  background: linear-gradient(180deg, ${rgba("#ffffff", supportFillOpacity)} 0%, ${rgba(settings.companionColor, Math.max(0.12, supportFillOpacity - 0.08))} 100%);
}

@media (max-width: 920px) {
  [data-page="home"] .hero-stage {
    grid-template-columns: 1fr;
  }

  [data-page="home"] .hero-home .hero-copy .hero-line {
    white-space: normal;
  }

  [data-page="home"] .hero-home .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  [data-page="home"] .hero-home .button,
  [data-page="home"] .hero-home .hero-support-band {
    width: 100%;
  }
}`;
  }

  function applyPreviewSize() {
    previewShell.dataset.previewSize = state.previewSize;
  }

  function setStatus(message) {
    statusNode.textContent = message;
  }

  function buildPreviewUrl(path) {
    const divider = path.includes("?") ? "&" : "?";
    return `${path}${divider}lab_preview=${Date.now()}`;
  }

  function hashString(input) {
    let hash = 0;

    for (let index = 0; index < input.length; index += 1) {
      hash = ((hash << 5) - hash) + input.charCodeAt(index);
      hash |= 0;
    }

    return String(hash);
  }

  function getWatchedPaths() {
    return [
      state.page,
      "assets/css/styles.css",
      "assets/js/script.js"
    ];
  }

  async function fetchSignaturePart(path) {
    const divider = path.includes("?") ? "&" : "?";
    const response = await fetch(`${path}${divider}lab_watch=${Date.now()}`, {
      cache: "no-store"
    });

    const text = await response.text();
    return `${path}:${hashString(text)}`;
  }

  async function captureExternalSignature() {
    const parts = await Promise.all(getWatchedPaths().map(fetchSignaturePart));
    return parts.join("|");
  }

  function injectOverrides() {
    const css = buildCss(state);
    cssOutput.value = css;

    try {
      const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
      if (!doc || !doc.head) {
        return;
      }

      let styleNode = doc.getElementById(STYLE_ID);
      if (!styleNode) {
        styleNode = doc.createElement("style");
        styleNode.id = STYLE_ID;
        doc.head.appendChild(styleNode);
      }

      styleNode.textContent = css;
      setStatus(IS_FILE_PROTOCOL
        ? "Live overrides are active. For auto-refresh on file edits, launch the lab through the local test server."
        : "Live overrides are active. Auto-refresh is watching for file changes.");
    } catch (error) {
      setStatus("Preview loaded, but live CSS injection needs the local test server or same-origin access.");
    }
  }

  function updatePreviewMeta() {
    previewTitle.textContent = pageLabels[state.page] || "Preview";
  }

  function applyState() {
    syncOutputLabels();
    applyPreviewSize();
    updatePreviewMeta();
    injectOverrides();
    saveState();
  }

  function reloadPreview(isAutomatic = false) {
    previewFrame.src = buildPreviewUrl(state.page);
    setStatus(isAutomatic
      ? "Change detected. Refreshing preview..."
      : "Refreshing preview...");
  }

  async function watchForExternalChanges(forceBaseline = false) {
    if (IS_FILE_PROTOCOL) {
      return;
    }

    if (document.hidden) {
      return;
    }

    try {
      const nextSignature = await captureExternalSignature();

      if (!lastExternalSignature || forceBaseline) {
        lastExternalSignature = nextSignature;
        return;
      }

      if (nextSignature !== lastExternalSignature) {
        lastExternalSignature = nextSignature;
        reloadPreview(true);
      }
    } catch (error) {
      if (!autoRefreshWarningShown) {
        setStatus("Live overrides are active. Auto-refresh works best through the local test server.");
        autoRefreshWarningShown = true;
      }
    }
  }

  function startWatching() {
    if (watchTimer) {
      window.clearInterval(watchTimer);
    }

    if (IS_FILE_PROTOCOL) {
      setStatus("Live overrides are active. For auto-refresh on file edits, launch the lab through the local test server.");
      return;
    }

    watchForExternalChanges(true);
    watchTimer = window.setInterval(watchForExternalChanges, WATCH_INTERVAL_MS);
  }

  function handleControlChange(event) {
    const control = event.currentTarget;
    const key = control.dataset.setting;

    if (!key) {
      return;
    }

    if (control.type === "checkbox") {
      state[key] = control.checked;
    } else if (control.type === "range") {
      state[key] = Number(control.value);
    } else {
      state[key] = control.value;
    }

    if (key === "page") {
      updatePreviewMeta();
      applyPreviewSize();
      saveState();
      lastExternalSignature = "";
      reloadPreview();
      startWatching();
      return;
    }

    applyState();
  }

  async function copyCss() {
    try {
      await navigator.clipboard.writeText(cssOutput.value);
      setStatus("CSS copied to your clipboard.");
    } catch (error) {
      cssOutput.focus();
      cssOutput.select();
      document.execCommand("copy");
      setStatus("CSS copied to your clipboard.");
    }
  }

  function resetState() {
    state = { ...defaults };
    syncControlsFromState();
    applyState();
    lastExternalSignature = "";
    reloadPreview();
    setStatus("Controls reset to the default lab state.");
  }

  controls.forEach((control) => {
    control.addEventListener("input", handleControlChange);
    control.addEventListener("change", handleControlChange);
  });

  previewFrame.addEventListener("load", () => {
    injectOverrides();
    watchForExternalChanges(true);
  });

  copyButton.addEventListener("click", copyCss);
  resetButton.addEventListener("click", resetState);
  reloadButton.addEventListener("click", reloadPreview);

  syncControlsFromState();
  applyState();
  startWatching();
  reloadPreview();
})();
