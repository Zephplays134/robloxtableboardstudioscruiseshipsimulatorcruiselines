const ship = document.getElementById('ship');
const throttle = document.getElementById('throttle');
const speedValue = document.getElementById('speed-value');
const moneyEl = document.getElementById('money');
const passEl = document.getElementById('passengers');
const fuelEl = document.getElementById('fuel');
const cargoEl = document.getElementById('cargo');
const destName = document.getElementById('dest-name');
const logEl = document.getElementById('log');

const ports = [
  { el: document.getElementById('port1'), x: 70, y: 80, name: 'Port Royal', goods: 15 },
  { el: document.getElementById('port2'), x: 760, y: 260, name: 'Sun Bay', goods: 10 },
  { el: document.getElementById('port3'), x: 680, y: 40, name: 'Coral Cove', goods: 20 },
  { el: document.getElementById('port4'), x: 220, y: 300, name: 'Castaway Key', goods: 12 },
];

let state = {
  x: 420, y: 180,
  angle: 0,
  speed: 0,
  targetSpeed: 0,
  fuel: 100,
  money: 0,
  passengers: 0,
  cargo: 0,
  destination: null,
  atPort: null,
  log: [],
  mouseDown: false,
};

function log(msg) {
  state.log.unshift(msg);
  if (state.log.length > 6) state.log.pop();
  logEl.innerHTML = state.log.map(m => `<div>⏺ ${m}</div>`).join('');
}

function updateHUD() {
  moneyEl.textContent = state.money;
  passEl.textContent = state.passengers;
  fuelEl.textContent = Math.round(state.fuel);
  cargoEl.textContent = state.cargo;
}

function moveShip(dt) {
  const diff = state.targetSpeed - state.speed;
  state.speed += diff * 0.02;
  if (Math.abs(state.speed) < 0.01) state.speed = 0;

  const rad = (state.angle * Math.PI) / 180;
  state.x += Math.cos(rad) * state.speed * dt * 0.05;
  state.y += Math.sin(rad) * state.speed * dt * 0.05;

  state.x = Math.max(10, Math.min(890, state.x));
  state.y = Math.max(10, Math.min(390, state.y));

  if (state.speed > 0.5) {
    state.fuel -= state.speed * 0.002 * dt;
    if (state.fuel < 0) state.fuel = 0;
  }

  updateHUD();
}

function checkPortArrival() {
  let at = null;
  for (const p of ports) {
    const dx = state.x - p.x;
    const dy = state.y - p.y;
    if (Math.sqrt(dx * dx + dy * dy) < 35) {
      at = p;
      break;
    }
  }

  for (const p of ports) {
    p.el.classList.toggle('at-port', p === at);
  }

  if (at && at !== state.atPort) {
    state.atPort = at;
    log(`Arrived at ${at.name}! ⚓`);
  } else if (!at && state.atPort) {
    log(`Departing from ${state.atPort.name}...`);
    state.atPort = null;
  }
}

function dock() {
  if (!state.atPort) {
    log('No port nearby to dock at!');
    return;
  }
  if (state.speed > 2) {
    log('Slow down before docking! ⚠️');
    return;
  }

  const p = state.atPort;
  const fare = Math.floor(20 + Math.random() * 40);
  const cargoVal = Math.floor(10 + Math.random() * p.goods);
  const pass = Math.floor(1 + Math.random() * 5);

  state.money += fare + cargoVal;
  state.passengers += pass;
  state.cargo += cargoVal;

  log(`Docked at ${p.name}! +$${fare + cargoVal}, +${pass} passengers, +${cargoVal} cargo`);

  if (state.destination === p) {
    state.destination = null;
    destName.textContent = '—';
    const bonus = Math.floor(30 + Math.random() * 50);
    state.money += bonus;
    log(`🎉 Destination reached! Bonus +$${bonus}!`);
  }

  state.targetSpeed = 0;
  throttle.value = 0;
  speedValue.textContent = '0';
  updateHUD();
}

function setDestination(port) {
  state.destination = port;
  destName.textContent = port.name;
  log(`Course set for ${port.name} 🧭`);
}

// Event listeners
throttle.addEventListener('input', () => {
  const val = parseFloat(throttle.value);
  state.targetSpeed = val * 0.08;
  speedValue.textContent = Math.round(state.targetSpeed * 10) / 10;
});

document.getElementById('btn-left').addEventListener('mousedown', () => { state.mouseDown = true; });
document.getElementById('btn-left').addEventListener('mouseup', () => { state.mouseDown = false; });
document.getElementById('btn-left').addEventListener('mouseleave', () => { state.mouseDown = false; });

document.getElementById('btn-right').addEventListener('mousedown', () => { state.mouseDown = true; });
document.getElementById('btn-right').addEventListener('mouseup', () => { state.mouseDown = false; });
document.getElementById('btn-right').addEventListener('mouseleave', () => { state.mouseDown = false; });

document.getElementById('btn-left').addEventListener('click', () => {
  if (state.speed > 0.5) {
    state.angle -= 15;
    log('Turning left...');
  }
});

document.getElementById('btn-right').addEventListener('click', () => {
  if (state.speed > 0.5) {
    state.angle += 15;
    log('Turning right...');
  }
});

document.getElementById('btn-dock').addEventListener('click', dock);

ports.forEach(p => {
  p.el.addEventListener('click', () => setDestination(p));
});

// Fuel refill at ports
setInterval(() => {
  if (state.atPort && state.fuel < 100) {
    state.fuel = Math.min(100, state.fuel + 5);
    updateHUD();
  }
}, 2000);

// Game loop
let lastTime = performance.now();
let autoLogTimer = 0;

function gameLoop(now) {
  const dt = Math.min((now - lastTime) / 16.67, 3);
  lastTime = now;

  moveShip(dt);
  checkPortArrival();

  // Apply rotation
  ship.style.transform = `rotate(${state.angle}deg)`;
  ship.style.left = `${state.x}px`;
  ship.style.bottom = `${state.y}px`;

  // Smoke particles when moving
  if (state.speed > 1 && Math.random() < 0.3) {
    const puff = document.createElement('div');
    puff.className = 'smoke';
    puff.style.right = `${-15 + Math.random() * 10}px`;
    ship.appendChild(puff);
    setTimeout(() => puff.remove(), 800);
  }

  // Auto log
  autoLogTimer += dt;
  if (autoLogTimer > 300 && state.speed > 0) {
    autoLogTimer = 0;
    const pct = Math.round((state.fuel / 100) * 100);
    if (pct < 20) log('⚠️ Low fuel! Find a port!');
  }

  // Game over check
  if (state.fuel <= 0 && state.speed > 0) {
    state.targetSpeed = 0;
    throttle.value = 0;
    speedValue.textContent = '0';
    log('❌ Out of fuel! Drifting...');
  }

  requestAnimationFrame(gameLoop);
}

// Start
updateHUD();
log('Welcome, Captain! ⛴️ Set sail and explore the islands.');
gameLoop(performance.now());
