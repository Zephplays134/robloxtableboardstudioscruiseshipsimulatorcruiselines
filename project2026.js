/* Project 2026 detector + teaser dashboard
 * Refreshes the public status snapshot every 5 seconds.
 * The snapshot is maintained by the GitHub Actions workflow when enabled.
 */
(() => {
  const REFRESH_MS = 5000;
  const STATUS_URL = 'project2026-status.json';

  const section = document.getElementById('project2026');
  if (!section) return;

  const state = {
    last: null,
    timer: null,
    busy: false
  };

  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));

  function badge(value, tone = 'neutral') {
    return '<span class="p26-badge p26-' + tone + '">' + esc(value) + '</span>';
  }

  function toneFor(value) {
    const v = String(value || '').toLowerCase();
    if (v.includes('yes') || v.includes('detected') || v.includes('confirmed')) return 'yes';
    if (v.includes('no') || v.includes('not')) return 'no';
    return 'neutral';
  }

  function render(data, sourceError = false) {
    state.last = data;
    const detected = data.project2026Detected ? 'YES — DETECTED' : 'NO — NOT DETECTED';
    const testing = data.testingStatus || 'Not publicly confirmed';
    const release = data.releaseStatus || 'To be announced';
    const updated = data.checkedAt ? new Date(data.checkedAt).toLocaleString() : 'Unknown';

    section.querySelector('#p26Detected').innerHTML = badge(detected, data.project2026Detected ? 'yes' : 'no');
    section.querySelector('#p26Testing').innerHTML = badge(testing, toneFor(testing));
    section.querySelector('#p26Release').innerHTML = badge(release, toneFor(release));
    section.querySelector('#p26Updated').textContent = updated;
    section.querySelector('#p26SourceState').textContent = sourceError
      ? 'Snapshot fetch failed — showing the last available result.'
      : 'Automatic monitor active • refresh interval: 5 seconds';

    const evidence = Array.isArray(data.evidence) ? data.evidence : [];
    section.querySelector('#p26Evidence').innerHTML = evidence.map(item => {
      const href = item.url || '#';
      return '<a class="p26-evidence" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' +
        '<span class="p26-evidence-dot"></span><span><strong>' + esc(item.title) +
        '</strong><small>' + esc(item.detail) + '</small></span><span class="p26-arrow">↗</span></a>';
    }).join('') || '<div class="p26-empty">No evidence items are currently available.</div>';

    const teasers = Array.isArray(data.teasers) ? data.teasers : [];
    section.querySelector('#p26Teasers').innerHTML = teasers.map((item, i) =>
      '<article class="p26-teaser">' +
        '<div class="p26-teaser-no">TEASER ' + String(i + 1).padStart(2, '0') + '</div>' +
        '<div class="p26-teaser-icon">' + esc(item.icon || '◈') + '</div>' +
        '<h3>' + esc(item.title) + '</h3>' +
        '<p>' + esc(item.detail) + '</p>' +
        '<span class="p26-teaser-meta">' + esc(item.meta || 'Public information') + '</span>' +
      '</article>'
    ).join('');

    section.querySelector('#p26Pulse').classList.toggle('p26-stale', !!sourceError);
  }

  async function check() {
    if (state.busy) return;
    state.busy = true;
    try {
      const response = await fetch(STATUS_URL + '?t=' + Date.now(), {
        cache: 'no-store',
        headers: { 'Accept': 'application/json' }
      });
      if (!response.ok) throw new Error('HTTP ' + response.status);
      render(await response.json(), false);
    } catch (error) {
      if (state.last) render(state.last, true);
    } finally {
      state.busy = false;
    }
  }

  check();
  state.timer = window.setInterval(check, REFRESH_MS);

  document.getElementById('p26Refresh')?.addEventListener('click', check);
  window.addEventListener('beforeunload', () => window.clearInterval(state.timer));
})();
