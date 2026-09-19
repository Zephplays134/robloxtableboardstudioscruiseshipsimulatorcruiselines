/*
 * Modern UI Add-on v3
 * Command palette, quick dock, fleet telemetry, and auto-applied preferences.
 * Preferences are intentionally local-only: no account or network call is needed.
 */
(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const PREFS_KEY = 'css-addon-preferences-v1';
  const FILTER_KEY = 'css-addon-fleet-filter-v1';
  const defaults = {
    autoApply: true,
    rememberFleet: true,
    showDetails: true,
    compactCards: false,
    reduceMotion: false
  };

  const state = {
    prefs: loadPreferences(),
    paletteItems: [],
    selectedIndex: 0,
    paletteOpen: false,
    liveCard: null,
    fleetObserver: null
  };

  function loadPreferences() {
    try {
      return { ...defaults, ...JSON.parse(localStorage.getItem(PREFS_KEY) || '{}') };
    } catch (_) {
      return { ...defaults };
    }
  }

  function savePreferences() {
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify(state.prefs));
    } catch (_) {
      // Private browsing can disable localStorage. The add-on still works for this visit.
    }
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function go(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: state.prefs.reduceMotion ? 'auto' : 'smooth' });
    state.paletteOpen = false;
    document.querySelector('.command-palette')?.classList.remove('open');
  }

  function sectionItems() {
    return $$('section[id]').map(section => ({
      title: (section.querySelector('.section-title')?.textContent || section.id)
        .replace(/\s+/g, ' ').trim(),
      id: section.id,
      category: 'Section'
    }));
  }

  function shipItems() {
    return $$('.ship-card').map(card => ({
      title: card.querySelector('h3')?.textContent.trim() || 'Ship',
      id: 'fleet',
      category: 'Ship',
      query: card.querySelector('h3')?.textContent.trim() || ''
    }));
  }

  function createStatusBar() {
    const status = element('div', 'modern-statusbar');
    status.setAttribute('role', 'status');
    status.innerHTML = '<span class="status-dot"></span><span>CSS Fleet Systems</span><span class="ui-kbd" data-auto-status>AUTO-APPLY ON</span>';
    document.body.append(status);
    window.setTimeout(() => status.classList.add('show'), 900);
    window.setTimeout(() => status.classList.remove('show'), 5200);
  }

  function createPalette() {
    const palette = element('div', 'command-palette');
    palette.setAttribute('role', 'dialog');
    palette.setAttribute('aria-label', 'Fleet command palette');
    palette.innerHTML = '<div class="command-box"><div class="command-heading"><span>COMMAND DECK</span><span class="command-hint">↑ ↓ navigate · Enter open · Esc close</span></div><input class="command-input" placeholder="Search sections, ships, features…" aria-label="Command search" autocomplete="off"><div class="command-results" role="listbox"></div></div>';
    document.body.append(palette);

    const input = $('.command-input', palette);
    const results = $('.command-results', palette);

    function filteredItems(query = '') {
      const all = [
        { title: 'Home', id: 'home', category: 'Navigation' },
        ...sectionItems(),
        ...shipItems()
      ];
      const needle = query.toLowerCase().trim();
      return all.filter(item => !needle || `${item.title} ${item.category}`.toLowerCase().includes(needle));
    }

    function render(query = '') {
      state.paletteItems = filteredItems(query);
      state.selectedIndex = Math.min(state.selectedIndex, Math.max(0, state.paletteItems.length - 1));
      results.replaceChildren();
      state.paletteItems.forEach((item, index) => {
        const button = element('button', `command-item${index === state.selectedIndex ? ' selected' : ''}`);
        button.type = 'button';
        button.setAttribute('role', 'option');
        button.setAttribute('aria-selected', String(index === state.selectedIndex));
        button.innerHTML = `<span class="command-icon">${item.category === 'Ship' ? '⚓' : item.category === 'Navigation' ? '⌂' : '✦'}</span><span>${item.title}</span><span class="command-category">${item.category}</span>`;
        button.addEventListener('mouseenter', () => {
          state.selectedIndex = index;
          render(input.value);
        });
        button.addEventListener('click', () => {
          if (item.category === 'Ship' && item.query) {
            go('fleet');
            window.setTimeout(() => {
              const search = $('#fleetSearch');
              if (search) {
                search.value = item.query;
                search.dispatchEvent(new Event('input', { bubbles: true }));
              }
            }, 50);
          } else {
            go(item.id);
          }
        });
        results.append(button);
      });
      if (!state.paletteItems.length) results.append(element('div', 'command-empty', 'No matching course found.'));
    }

    function openPalette() {
      state.paletteOpen = true;
      state.selectedIndex = 0;
      palette.classList.add('open');
      input.value = '';
      render();
      input.focus();
    }

    function closePalette() {
      state.paletteOpen = false;
      palette.classList.remove('open');
    }

    input.addEventListener('input', () => {
      state.selectedIndex = 0;
      render(input.value);
    });
    input.addEventListener('keydown', event => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        state.selectedIndex = Math.min(state.selectedIndex + 1, state.paletteItems.length - 1);
        render(input.value);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        state.selectedIndex = Math.max(state.selectedIndex - 1, 0);
        render(input.value);
      } else if (event.key === 'Enter') {
        event.preventDefault();
        results.querySelector('.command-item.selected')?.click();
      }
    });
    palette.addEventListener('click', event => {
      if (event.target === palette) closePalette();
    });

    window.openFleetCommandPalette = openPalette;
    window.closeFleetCommandPalette = closePalette;
    return { palette, openPalette, closePalette };
  }

  function createPreferences() {
    const backdrop = element('div', 'addon-preferences-backdrop');
    const panel = element('aside', 'addon-preferences');
    panel.setAttribute('aria-label', 'Fleet preferences');
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML = `
      <div class="addon-pref-header">
        <div><span class="addon-eyebrow">PERSONAL COMMAND DECK</span><h2>Auto-apply settings</h2><p>Keep your favorite fleet view ready every time you return.</p></div>
        <button class="addon-pref-close" type="button" aria-label="Close preferences">×</button>
      </div>
      <div class="addon-pref-list">
        <label class="addon-pref-row"><span><strong>Auto-apply on return</strong><small>Restore these settings automatically when the page opens.</small></span><input type="checkbox" data-pref="autoApply"></label>
        <label class="addon-pref-row"><span><strong>Remember fleet search</strong><small>Reapply the last line filter and ship search.</small></span><input type="checkbox" data-pref="rememberFleet"></label>
        <label class="addon-pref-row"><span><strong>Detailed ship cards</strong><small>Show decks, capacity, year, and feature metadata.</small></span><input type="checkbox" data-pref="showDetails"></label>
        <label class="addon-pref-row"><span><strong>Compact card layout</strong><small>Fit more of the registry on screen at once.</small></span><input type="checkbox" data-pref="compactCards"></label>
        <label class="addon-pref-row"><span><strong>Reduce motion</strong><small>Use calmer transitions and instant scrolling.</small></span><input type="checkbox" data-pref="reduceMotion"></label>
      </div>
      <div class="addon-pref-summary"><span class="status-dot"></span><span><strong>Saved locally</strong><small>No account or tracking required.</small></span></div>
      <button class="addon-reset" type="button">Reset preferences</button>
    `;
    document.body.append(backdrop, panel);

    const close = () => {
      panel.classList.remove('open');
      backdrop.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
    };
    const open = () => {
      panel.classList.add('open');
      backdrop.classList.add('open');
      panel.setAttribute('aria-hidden', 'false');
      $('.addon-pref-row input', panel)?.focus();
    };

    $$('[data-pref]', panel).forEach(input => {
      input.checked = Boolean(state.prefs[input.dataset.pref]);
      input.addEventListener('change', () => {
        state.prefs[input.dataset.pref] = input.checked;
        savePreferences();
        applyPreferences();
      });
    });
    $('.addon-pref-close', panel).addEventListener('click', close);
    backdrop.addEventListener('click', close);
    $('.addon-reset', panel).addEventListener('click', () => {
      state.prefs = { ...defaults };
      savePreferences();
      $$('[data-pref]', panel).forEach(input => { input.checked = state.prefs[input.dataset.pref]; });
      applyPreferences();
      showToast('Preferences reset — defaults applied');
    });

    window.openFleetPreferences = open;
    return { open, close };
  }

  function showToast(message) {
    let toast = $('#addonToast');
    if (!toast) {
      toast = element('div', 'addon-toast');
      toast.id = 'addonToast';
      document.body.append(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toast._timer);
    toast._timer = window.setTimeout(() => toast.classList.remove('show'), 2800);
  }

  function createDock(palette, preferences) {
    const dock = element('div', 'quick-dock');
    const actions = [
      ['⌘', 'Command palette', palette.open],
      ['↑', 'Back to top', () => go('home')],
      ['☼', 'Toggle theme', () => $('#themeToggle')?.click()],
      ['⚓', 'Fleet registry', () => go('fleet')],
      ['⚙', 'Auto-apply settings', preferences.open]
    ];
    actions.forEach(([icon, title, action]) => {
      const button = element('button', null, icon);
      button.type = 'button';
      button.title = title;
      button.setAttribute('aria-label', title);
      button.addEventListener('click', action);
      dock.append(button);
    });
    document.body.append(dock);
  }

  function createLiveCard() {
    const card = element('div', 'modern-live-card');
    card.setAttribute('aria-label', 'Live fleet telemetry');
    card.innerHTML = `
      <div class="live-copy"><div class="live-title"><span class="status-dot"></span> TABLEBOARD STUDIOS • FLEET STATUS</div><div class="live-sub" id="liveFleetSub">Preparing automatic details…</div><div class="live-metrics"><span><strong id="liveVisibleShips">—</strong><small>visible ships</small></span><span><strong id="liveTotalShips">—</strong><small>registry total</small></span><span><strong id="liveLines">—</strong><small>cruise lines</small></span></div></div>
      <div class="live-side"><div class="live-value">ONLINE</div><span class="live-updated" id="liveUpdated">Auto-applied</span></div>
    `;
    const fleet = document.getElementById('fleet');
    fleet?.querySelector('.container')?.prepend(card);
    state.liveCard = card;
  }

  function saveFleetFilter() {
    if (!state.prefs.rememberFleet) return;
    const search = $('#fleetSearch');
    const active = $('.f-btn.active');
    try {
      localStorage.setItem(FILTER_KEY, JSON.stringify({
        filter: active?.dataset.f || 'all',
        search: search?.value || ''
      }));
    } catch (_) { /* local-only enhancement; ignore storage failures */ }
  }

  function restoreFleetFilter() {
    if (!state.prefs.autoApply || !state.prefs.rememberFleet) return;
    let saved;
    try { saved = JSON.parse(localStorage.getItem(FILTER_KEY) || 'null'); } catch (_) { saved = null; }
    if (!saved) return;

    const filter = $$('.f-btn').find(button => button.dataset.f === saved.filter);
    const search = $('#fleetSearch');
    if (filter && !filter.classList.contains('active')) filter.click();
    if (search && saved.search) {
      search.value = saved.search;
      search.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }

  function updateTelemetry() {
    if (!state.liveCard) return;
    const visible = $$('.ship-card').length;
    const total = state.liveCard.dataset.total || visible;
    const lines = $$('.line-card').length || '—';
    const setText = (selector, value) => {
      const node = $(selector, state.liveCard);
      if (node && node.textContent !== String(value)) node.textContent = value;
    };
    setText('#liveVisibleShips', visible);
    setText('#liveTotalShips', total);
    setText('#liveLines', lines);
    setText('#liveFleetSub', state.prefs.autoApply
      ? 'Automatic details active • preferences applied locally'
      : 'Manual mode • open settings to enable auto-apply');
    setText('#liveUpdated', state.prefs.showDetails ? 'Details armed' : 'Summary mode');
    if (!state.liveCard.dataset.total) state.liveCard.dataset.total = visible;
  }

  function applyPreferences() {
    document.body.classList.toggle('addon-hide-details', !state.prefs.showDetails);
    document.body.classList.toggle('addon-compact', state.prefs.compactCards);
    document.body.classList.toggle('addon-reduced-motion', state.prefs.reduceMotion);
    const autoStatus = $('[data-auto-status]');
    if (autoStatus) autoStatus.textContent = state.prefs.autoApply ? 'AUTO-APPLY ON' : 'MANUAL MODE';
    updateTelemetry();
    if (state.prefs.autoApply) restoreFleetFilter();
  }

  function watchFleet() {
    const fleet = document.getElementById('fleet');
    const search = $('#fleetSearch');
    if (search) search.addEventListener('input', saveFleetFilter);
    $$('.f-btn').forEach(button => button.addEventListener('click', saveFleetFilter));
    if (!fleet) return;
    state.fleetObserver = new MutationObserver(updateTelemetry);
    state.fleetObserver.observe(fleet, { childList: true, subtree: true });
    updateTelemetry();
  }

  function initialize() {
    createStatusBar();
    const palette = createPalette();
    const preferences = createPreferences();
    createDock(palette, preferences);
    createLiveCard();

    document.addEventListener('keydown', event => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        palette.open();
      }
      if (event.key === 'Escape' && state.paletteOpen) palette.close();
    });

    // script.js renders the fleet in its own DOMContentLoaded listener first.
    document.addEventListener('DOMContentLoaded', () => {
      applyPreferences();
      watchFleet();
      restoreFleetFilter();
    }, { once: true });
  }

  initialize();
})();
