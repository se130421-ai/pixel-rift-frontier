const STORAGE_KEY = "pixel_rift_save_v4";

const DROP_TABLES = {
  "슬라임": [
    { name: "슬라임 젤", rate: 0.7 },
    { name: "마나 물약", rate: 0.35 },
    { name: "작은 보석", rate: 0.15 }
  ],
  "늑대": [
    { name: "늑대 가죽", rate: 0.75 },
    { name: "약초", rate: 0.45 },
    { name: "날카로운 이빨", rate: 0.2 }
  ],
  "멧돼지": [
    { name: "멧돼지 고기", rate: 0.6 },
    { name: "가시 뿔", rate: 0.25 }
  ],
  "거미": [
    { name: "거미줄", rate: 0.7 },
    { name: "독 약초", rate: 0.3 }
  ],
  "오크": [
    { name: "오크 도끼", rate: 0.5 },
    { name: "무거운 철", rate: 0.35 }
  ],
  "박쥐": [
    { name: "박쥐 날개", rate: 0.6 },
    { name: "어두운 피", rate: 0.2 }
  ],
  "고블린": [
    { name: "고블린 단검", rate: 0.4 },
    { name: "기본 장신구", rate: 0.25 }
  ],
  "화염 정령": [
    { name: "화염 핵", rate: 0.7 },
    { name: "마력 보석", rate: 0.4 }
  ],
  "유령": [
    { name: "유령의 눈물", rate: 0.67 },
    { name: "해골 조각", rate: 0.25 }
  ],
  "병사": [
    { name: "병사 방패", rate: 0.45 },
    { name: "철 퀼", rate: 0.2 }
  ],
  "가시 수호자": [
    { name: "가시 심장", rate: 0.9 },
    { name: "수호자 갑옷 조각", rate: 0.7 }
  ],
  "어둠의 나무 정령": [
    { name: "정령의 뿌리", rate: 0.9 },
    { name: "검은 잎사귀", rate: 0.6 }
  ],
  "석화 괴물": [
    { name: "석화의 돌", rate: 0.85 },
    { name: "반짝이는 암석", rate: 0.5 }
  ],
  "모래왕": [
    { name: "모래왕 왕관 조각", rate: 0.9 },
    { name: "사막의 보석", rate: 0.7 }
  ],
  "진흙 여왕": [
    { name: "진흙 왕관", rate: 0.9 },
    { name: "독성 물방울", rate: 0.6 }
  ],
  "얼음 거인": [
    { name: "얼음 심장", rate: 0.9 },
    { name: "서리 장갑", rate: 0.6 }
  ],
  "서리 용": [
    { name: "서리 비늘", rate: 1.0 },
    { name: "얼음 정령 결정", rate: 0.7 }
  ],
  "정글 왕": [
    { name: "정글 왕의 무기", rate: 0.9 },
    { name: "우거진 나뭇잎", rate: 0.6 }
  ],
  "용암 군주": [
    { name: "용암 심장", rate: 1.0 },
    { name: "불꽃 보석", rate: 0.8 }
  ],
  "고대 기사장": [
    { name: "고대 기사장 검", rate: 1.0 },
    { name: "유적의 철제 갑옷", rate: 0.7 }
  ],
  "검은 기사장": [
    { name: "검은 기사장 투구", rate: 1.0 },
    { name: "어둠의 방패", rate: 0.8 }
  ],
  "천공의 폭군": [
    { name: "하늘의 왕관", rate: 1.0 },
    { name: "천공의 각인", rate: 0.9 }
  ]
};

const JOBS = [
  { id: "swordmaster", name: "검사", hp: 180, mana: 0, stamina: 140, description: "근거리 전사, 스테미나 기반, 마나 없음", style: "melee" },
  { id: "ranger", name: "원거리", hp: 120, mana: 90, stamina: 110, description: "사거리 우위, 마나와 스테미나 둘 다 사용", style: "ranged" },
  { id: "assassin", name: "어쌔신", hp: 110, mana: 80, stamina: 150, description: "빠른 이동, 치명타, 기동형", style: "assassin" },
  { id: "tank", name: "탱커", hp: 220, mana: 0, stamina: 170, description: "방어형, 체력과 스테미나 중심", style: "tank" },
  { id: "mage", name: "마법사", hp: 100, mana: 200, stamina: 80, description: "광역 마법, 마나 중심", style: "magic" },
  { id: "cleric", name: "성직자", hp: 130, mana: 170, stamina: 90, description: "힐러, 방어 버프, 회복형", style: "heal" },
  { id: "berserker", name: "버서커", hp: 200, mana: 40, stamina: 160, description: "폭주형, 높은 공격력", style: "berserk" },
  { id: "druid", name: "드루이드", hp: 140, mana: 150, stamina: 120, description: "자연 마법, 회복과 방어", style: "nature" },
  { id: "witch", name: "마녀", hp: 115, mana: 180, stamina: 100, description: "디버프와 혼란형 마법", style: "hex" },
  { id: "paladin", name: "성기사", hp: 190, mana: 70, stamina: 150, description: "방패와 보호막 중심", style: "guardian" }
];

const MAPS = [
  { id: 1, name: "초원", levelMin: 1, levelMax: 10, boss: "가시 수호자", theme: "초반 지형, 약한 몹과 보스 주기", monsterTypes: ["슬라임", "늑대", "멧돼지", "괴물"] },
  { id: 2, name: "숲", levelMin: 8, levelMax: 18, boss: "어둠의 나무 정령", theme: "숲속 정글형 갱신 지형", monsterTypes: ["정령", "거미", "오크", "사슴"] },
  { id: 3, name: "동굴", levelMin: 15, levelMax: 25, boss: "석화 괴물", theme: "암석 지형, 근거리 몬스터 많음", monsterTypes: ["박쥐", "고블린", "돌거북", "골렘"] },
  { id: 4, name: "사막", levelMin: 22, levelMax: 32, boss: "모래왕", theme: "모래폭풍, 원거리 적 많음", monsterTypes: ["전갈", "모래도마뱀", "도적", "스켈레톤"] },
  { id: 5, name: "늪지", levelMin: 30, levelMax: 40, boss: "진흙 여왕", theme: "독성 늪, 방어형 몬스터 많음", monsterTypes: ["악어", "수렁 정령", "늪마귀", "독충"] },
  { id: 6, name: "산맥", levelMin: 38, levelMax: 48, boss: "얼음 거인", theme: "고지대, 탱커형 몹 많음", monsterTypes: ["곰", "산적", "눈사자", "돌덩이괴물"] },
  { id: 7, name: "설원", levelMin: 45, levelMax: 55, boss: "서리 용", theme: "서리 대지, 마법적 적 증가", monsterTypes: ["눈늑대", "얼음 정령", "눈사람", "서리마법사"] },
  { id: 8, name: "정글", levelMin: 52, levelMax: 62, boss: "정글 왕", theme: "밀림, 기동형 적 증가", monsterTypes: ["원숭이", "독사", "거미", "열대악어"] },
  { id: 9, name: "화산", levelMin: 60, levelMax: 72, boss: "용암 군주", theme: "화산 폭발, 화염 몹", monsterTypes: ["화염 정령", "불꽃 도마뱀", "용암 곤충", "불사조"] },
  { id: 10, name: "유적", levelMin: 70, levelMax: 82, boss: "고대 기사장", theme: "유적 전투, 골동품 병기", monsterTypes: ["유령", "미라", "기계병", "무덤사냥꾼"] },
  { id: 11, name: "성벽", levelMin: 85, levelMax: 100, boss: "검은 기사장", theme: "성벽 방어선, 탱커/보병 비중 증가", monsterTypes: ["병사", "마법사", "철갑 기사", "기병"] },
  { id: 12, name: "하늘섬", levelMin: 100, levelMax: 120, boss: "천공의 폭군", theme: "최종 맵, 고난도 보스존", monsterTypes: ["구름 정령", "비행 몬스터", "검은 천사", "하늘 악마"] }
];

const QUESTS = [
  { id: "q1", title: "초원 정리", goal: 10, progress: 0, reward: 200 },
  { id: "q2", title: "보스 처치", goal: 1, progress: 0, reward: 500 },
  { id: "q3", title: "특정 지형 클리어", goal: 1, progress: 0, reward: 400 }
];

const state = {
  playerName: "",
  selectedJobId: "swordmaster",
  selectedMapId: 1,
  unlockedMaps: [1],
  currentMap: 1,
  gold: 0,
  level: 1,
  player: null,
  activeMonster: null,
  inventory: [],
  bestiary: {},
  logs: [],
  monstersByMap: {},
  quests: JSON.parse(JSON.stringify(QUESTS)),
  turnCount: 0
};

function findJob(id) {
  return JOBS.find(j => j.id === id) || JOBS[0];
}

function findMap(id) {
  return MAPS.find(m => m.id === id) || MAPS[0];
}

function getDefaultPlayer() {
  const job = findJob(state.selectedJobId);
  return {
    name: state.playerName || "플레이어",
    level: 1,
    hp: job.hp,
    maxHp: job.hp,
    mana: job.mana,
    maxMana: job.mana,
    stamina: job.stamina,
    maxStamina: job.stamina,
    gold: 0,
    jobId: job.id
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    playerName: state.playerName,
    selectedJobId: state.selectedJobId,
    selectedMapId: state.selectedMapId,
    unlockedMaps: state.unlockedMaps,
    currentMap: state.currentMap,
    gold: state.gold,
    level: state.level,
    player: state.player,
    logs: state.logs,
    inventory: state.inventory,
    bestiary: state.bestiary,
    quests: state.quests,
    turnCount: state.turnCount
  }));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const saved = JSON.parse(raw);
    state.playerName = saved.playerName || "";
    state.selectedJobId = saved.selectedJobId || "swordmaster";
    state.selectedMapId = saved.selectedMapId || 1;
    state.unlockedMaps = Array.isArray(saved.unlockedMaps) ? saved.unlockedMaps : [1];
    state.currentMap = saved.currentMap || 1;
    state.gold = saved.gold || 0;
    state.level = saved.level || 1;
    state.player = saved.player || getDefaultPlayer();
    state.logs = saved.logs || [];
    state.inventory = saved.inventory || [];
    state.bestiary = saved.bestiary || {};
    state.quests = saved.quests || JSON.parse(JSON.stringify(QUESTS));
    state.turnCount = saved.turnCount || 0;
  } catch (e) {
    console.error("Load failed", e);
  }
}

function addLog(msg) {
  const stamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const item = `[${stamp}] ${msg}`;
  state.logs.unshift(item);
  state.logs = state.logs.slice(0, 30);
  const box = document.getElementById("battleLog");
  if (box) {
    box.innerHTML = state.logs.map(line => `<div>${line}</div>`).join("");
  }
}

function renderPlayer() {
  if (!state.player) {
    state.player = getDefaultPlayer();
  }
  const job = findJob(state.player.jobId || state.selectedJobId);
  const p = state.player;

  const playerHpText = document.getElementById("playerHpText");
  const playerManaText = document.getElementById("playerManaText");
  const playerStaminaText = document.getElementById("playerStaminaText");
  const playerLevel = document.getElementById("playerLevel");
  const selectedJobName = document.getElementById("selectedJobName");
  const playerBadge = document.getElementById("playerBadge");
  const goldBadge = document.getElementById("goldBadge");
  const hpBar = document.getElementById("playerHpBar");

  if (playerHpText) playerHpText.textContent = `${p.hp} / ${p.maxHp}`;
  if (playerManaText) playerManaText.textContent = `${p.mana} / ${p.maxMana}`;
  if (playerStaminaText) playerStaminaText.textContent = `${p.stamina} / ${p.maxStamina}`;
  if (playerLevel) playerLevel.textContent = String(p.level);
  if (selectedJobName) selectedJobName.textContent = job.name;
  if (playerBadge) playerBadge.textContent = `${state.playerName || "플레이어"} / ${job.name}`;
  if (goldBadge) goldBadge.textContent = `골드: ${state.gold}`;
  if (hpBar) hpBar.style.width = `${Math.max(0, (p.hp / p.maxHp) * 100)}%`;
}

function renderJobs() {
  const list = document.getElementById("jobList");
  if (!list) return;
  list.innerHTML = "";
  JOBS.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card " + (job.id === state.selectedJobId ? "active" : "");
    card.innerHTML = `
      <div class="job-header">
        <strong>${job.name}</strong>
        <span class="badge">${job.style}</span>
      </div>
      <div class="small">${job.description}</div>
      <div class="stats-grid">
        <div class="stat-box"><strong>${job.hp}</strong><span>HP</span></div>
        <div class="stat-box"><strong>${job.mana}</strong><span>MP</span></div>
        <div class="stat-box"><strong>${job.stamina}</strong><span>SP</span></div>
      </div>
    `;
    card.addEventListener("click", () => {
      state.selectedJobId = job.id;
      state.player = getDefaultPlayer();
      state.player.jobId = job.id;
      renderJobs();
      renderPlayer();
      saveState();
      addLog(`${job.name} 직업을 선택했습니다.`);
    });
    list.appendChild(card);
  });
}

function renderMaps() {
  const list = document.getElementById("mapList");
  if (!list) return;
  list.innerHTML = "";
  MAPS.forEach(map => {
    const unlocked = state.unlockedMaps.includes(map.id);
    const card = document.createElement("div");
    card.className = "map-card " + (map.id === state.selectedMapId ? "active" : "");
    card.style.opacity = unlocked ? "1" : "0.45";
    card.innerHTML = `
      <div class="map-header">
        <strong>${map.name}</strong>
        <span class="badge">Lv ${map.levelMin}~${map.levelMax}</span>
      </div>
      <div class="small">${map.theme}</div>
      ${!unlocked ? "<div class='small'>잠금됨</div>" : ""}
    `;
    card.addEventListener("click", () => {
      if (!unlocked) {
        addLog(`${map.name}은 아직 잠겨 있습니다.`);
        return;
      }
      state.selectedMapId = map.id;
      state.currentMap = map.id;
      renderMaps();
      renderSelectedMapInfo();
      renderMonsterPool();
      addLog(`${map.name} 지형을 선택했습니다.`);
    });
    list.appendChild(card);
  });
}

function renderSelectedMapInfo() {
  const box = document.getElementById("selectedMapInfo");
  if (!box) return;
  const map = findMap(state.selectedMapId);
  box.innerHTML = `
    <div class="job-header">
      <strong>${map.name}</strong>
      <span class="badge">${map.boss}</span>
    </div>
    <div class="small">${map.theme}</div>
    <div class="small" style="margin-top:8px;">권장 레벨: ${map.levelMin} ~ ${map.levelMax}</div>
  `;
}

function generateMapMonsterPool(map, count = 50) {
  const names = ["붉은", "가시", "진흙", "어두운", "폭풍의", "고대의", "잿빛", "얼음", "화염", "은빛"];
  const suffix = ["늑대", "정령", "괴물", "도적", "기사", "병사", "박쥐", "무리", "소환사", "수호자"];
  const monsters = [];

  for (let i = 0; i < count - 1; i++) {
    const type = map.monsterTypes[i % map.monsterTypes.length];
    const level = Math.floor(map.levelMin + (Math.random() * (map.levelMax - map.levelMin + 1)));
    const hp = 30 + level * 8 + Math.floor(Math.random() * 30);

    monsters.push({
      id: `${map.id}-${i}`,
      name: `${names[i % names.length]} ${suffix[i % suffix.length]} ${i + 1}`,
      type,
      level,
      hp,
      maxHp: hp,
      atk: 8 + level * 2 + Math.floor(Math.random() * 10),
      def: 3 + level,
      isBoss: false,
      dead: false,
      respawnAt: 0
    });
  }

  const boss = {
    id: `${map.id}-boss`,
    name: map.boss,
    type: "보스",
    level: map.levelMax,
    hp: 220 + (map.levelMax * 18),
    maxHp: 220 + (map.levelMax * 18),
    atk: 30 + map.levelMax * 2,
    def: 12 + map.levelMax,
    isBoss: true,
    dead: false,
    respawnAt: 0
  };

  monsters.push(boss);
  return monsters;
}

function renderMonsterPool() {
  const list = document.getElementById("monsterList");
  if (!list) return;
  const map = findMap(state.selectedMapId);
  const monsters = state.monstersByMap[map.id] || generateMapMonsterPool(map, 50);
  state.monstersByMap[map.id] = monsters;

  list.innerHTML = "";
  monsters.slice(0, 10).forEach(monster => {
    const card = document.createElement("div");
    card.className = "monster-card";
    card.innerHTML = `
      <div class="monster-header">
        <strong>${monster.name}</strong>
        <span class="badge">${monster.isBoss ? "보스" : monster.type}</span>
      </div>
      <div class="small">HP ${monster.hp} / 레벨 ${monster.level}</div>
    `;
    list.appendChild(card);
  });

  const info = document.createElement("div");
  info.className = "small";
  info.textContent = `총 ${monsters.length}마리 풀 · 보스: ${monsters[monsters.length - 1].name}`;
  list.appendChild(info);
}

function renderMonsterState() {
  const monster = state.activeMonster;
  const panel = document.getElementById("monsterPanel");
  if (!panel) return;
  if (!monster) {
    panel.classList.add("hidden");
    return;
  }

  panel.classList.remove("hidden");
  document.getElementById("monsterName").textContent = monster.name;
  document.getElementById("monsterTypeBadge").textContent = monster.isBoss ? "보스" : monster.type;

  const reward = monster.isBoss ? 150 + monster.level * 18 : 30 + monster.level * 5;
  document.getElementById("monsterInfo").textContent = `Lv ${monster.level} / 보상 ${reward} 골드`;
  document.getElementById("monsterRespawn").textContent = monster.dead ? "리스폰 대기중" : "활성 상태";
  document.getElementById("monsterHpText").textContent = `${monster.hp} / ${monster.maxHp}`;

  const ratio = Math.max(0, (monster.hp / monster.maxHp) * 100);
  document.getElementById("monsterHpBar").style.width = `${ratio}%`;
}

function rollDrops(monsterName) {
  const table = DROP_TABLES[monsterName] || [];
  const picked = [];
  for (const item of table) {
    if (Math.random() <= item.rate) picked.push(item.name);
  }
  return picked.length ? picked : ["잡동사니 조각"];
}

function ensureBestiaryEntry(monster) {
  if (!state.bestiary[monster.id]) {
    state.bestiary[monster.id] = {
      id: monster.id,
      name: monster.name,
      type: monster.type,
      map: findMap(state.selectedMapId).name,
      kills: 0,
      firstSeen: new Date().toISOString(),
      drops: []
    };
  }
  state.bestiary[monster.id].kills += 1;
  state.bestiary[monster.id].map = findMap(state.selectedMapId).name;
}

function renderInventory() {
  const list = document.getElementById("inventoryList");
  if (!list) return;
  list.innerHTML = "";
  if (!state.inventory.length) {
    list.innerHTML = "<div class='small'>획득한 전리품이 없습니다.</div>";
    return;
  }
  state.inventory.forEach(item => {
    const row = document.createElement("div");
    row.className = "inventory-row";
    row.innerHTML = `<strong>${item}</strong><span class='small'>전리품</span>`;
    list.appendChild(row);
  });
}

function renderBestiary() {
  const list = document.getElementById("bestiaryList");
  if (!list) return;
  list.innerHTML = "";
  const entries = Object.values(state.bestiary);
  if (!entries.length) {
    list.innerHTML = "<div class='small'>아직 도감에 기록된 몬스터가 없습니다.</div>";
    return;
  }
  entries.forEach(entry => {
    const card = document.createElement("div");
    card.className = "bestiary-card";
    card.innerHTML = `
      <div class="monster-header">
        <strong>${entry.name}</strong>
        <span class="badge">${entry.type}</span>
      </div>
      <div class="small">처치 수: ${entry.kills}</div>
      <div class="small">맵: ${entry.map}</div>
      <div class="small">드랍: ${entry.drops.join(", ") || "없음"}</div>
    `;
    list.appendChild(card);
  });
}

function updateQuestProgress(kind, monster) {
  const quest = state.quests.find(q => q.id === "q1");
  if (quest && kind === "kill") {
    quest.progress += 1;
    if (quest.progress >= quest.goal) {
      state.gold += quest.reward;
      addLog(`퀘스트 완료: ${quest.title} 보상 ${quest.reward}골드 지급!`);
      quest.progress = quest.goal;
    }
  }

  const bossQuest = state.quests.find(q => q.id === "q2");
  if (bossQuest && monster && monster.isBoss) {
    bossQuest.progress += 1;
    if (bossQuest.progress >= bossQuest.goal) {
      state.gold += bossQuest.reward;
      addLog(`퀘스트 완료: ${bossQuest.title} 보상 ${bossQuest.reward}골드 지급!`);
      bossQuest.progress = bossQuest.goal;
    }
  }

  const mapQuest = state.quests.find(q => q.id === "q3");
  if (mapQuest && monster && monster.isBoss) {
    mapQuest.progress = 1;
    state.gold += mapQuest.reward;
    addLog(`퀘스트 완료: ${mapQuest.title} 보상 ${mapQuest.reward}골드 지급!`);
  }
}

function unlockNextMap() {
  const current = state.currentMap;
  const next = current + 1;
  if (next <= MAPS.length && !state.unlockedMaps.includes(next)) {
    state.unlockedMaps.push(next);
    addLog(`${findMap(next).name} 지형이 해금되었습니다!`);
  }
}

function bossPattern(monster, turn) {
  if (!monster || !monster.isBoss) return;

  if (turn % 3 === 0) {
    addLog(`${monster.name}이(가) 광역 공격을 사용합니다!`);
  } else if (turn % 3 === 1) {
    addLog(`${monster.name}이(가) 방어막을 쌓습니다.`);
  } else {
    addLog(`${monster.name}이(가) 돌진합니다!`);
  }
}

function spawnMonster() {
  const map = findMap(state.selectedMapId);
  const monsters = state.monstersByMap[map.id] || generateMapMonsterPool(map, 50);
  state.monstersByMap[map.id] = monsters;

  const alive = monsters.filter(m => !m.dead);
  if (!alive.length) {
    state.monstersByMap[map.id] = generateMapMonsterPool(map, 50);
    addLog(`${map.name}의 몬스터 풀을 초기화했습니다.`);
    return spawnMonster();
  }

  const selected = alive[Math.floor(Math.random() * alive.length)];
  state.activeMonster = selected;
  renderMonsterState();
  addLog(`${selected.name}이(가) 나타났습니다.`);
}

function attackMonster() {
  if (!state.activeMonster) {
    addLog("먼저 몬스터를 생성하세요.");
    return;
  }

  const monster = state.activeMonster;
  const player = state.player;
  const job = findJob(player.jobId || state.selectedJobId);

  state.turnCount += 1;
  if (monster.isBoss) {
    bossPattern(monster, state.turnCount);
  }

  let damage = 12 + player.level * 2 + Math.floor(Math.random() * 10);
  if (job.id === "swordmaster") damage += 18;
  if (job.id === "ranger") damage += 14;
  if (job.id === "assassin") damage += 20;
  if (job.id === "tank") damage += 10;
  if (job.id === "mage") damage += 22;
  if (job.id === "berserker") damage += 26;
  if (job.id === "paladin") damage += 16;

  monster.hp = Math.max(0, monster.hp - damage);
  addLog(`${job.name}이(가) ${monster.name}에게 ${damage}의 피해를 입혔습니다.`);

  if (monster.hp <= 0) {
    const reward = monster.isBoss ? 150 + monster.level * 18 : 30 + monster.level * 5;
    state.gold += reward;

    ensureBestiaryEntry(monster);

    const lootItems = rollDrops(monster.name);
    lootItems.forEach(item => {
      if (!state.inventory.includes(item)) state.inventory.push(item);
      if (!state.bestiary[monster.id].drops.includes(item)) {
        state.bestiary[monster.id].drops.push(item);
      }
    });

    addLog(`${monster.name} 처치! ${reward} 골드 획득! 전리품: ${lootItems.join(", ")}`);

    updateQuestProgress("kill", monster);

    if (monster.isBoss) {
      unlockNextMap();
    }

    monster.dead = true;
    monster.respawnAt = Date.now() + 120000;

    state.player.hp = Math.min(state.player.maxHp, state.player.hp + 12);
    state.player.stamina = Math.min(state.player.maxStamina, state.player.stamina + 20);
    state.player.mana = Math.min(state.player.maxMana, state.player.mana + 15);

    state.activeMonster = null;
    renderMonsterState();
    renderPlayer();
    renderInventory();
    renderBestiary();
    renderMaps();
    saveState();
    return;
  }

  const counter = Math.max(3, monster.atk - Math.floor(player.level * 0.8));
  player.hp = Math.max(0, player.hp - counter);
  addLog(`${monster.name}이(가) 반격하여 ${counter}의 피해를 입혔습니다.`);
  renderPlayer();

  if (player.hp <= 0) {
    player.hp = player.maxHp;
    player.mana = player.maxMana;
    player.stamina = player.maxStamina;
    state.gold = Math.max(0, state.gold - 25);
    addLog("전투에서 패배해 마을로 복귀했습니다. 25골드를 잃었습니다.");
  }

  saveState();
}

function respawnMonsters() {
  const map = findMap(state.selectedMapId);
  const monsters = state.monstersByMap[map.id];
  if (!monsters) return;

  const now = Date.now();
  monsters.forEach(monster => {
    if (monster.dead && now >= monster.respawnAt) {
      monster.dead = false;
      monster.hp = monster.maxHp;
      monster.respawnAt = 0;
      addLog(`${monster.name}이(가) 2분 후 리스폰했습니다.`);
    }
  });
}

function renderQuestStatus() {
  const questBox = document.getElementById("questBox");
  if (!questBox) return;
  questBox.innerHTML = state.quests.map(q => {
    const ratio = Math.min(100, (q.progress / q.goal) * 100);
    return `
      <div class="inventory-row">
        <div>
          <strong>${q.title}</strong>
          <div class="small">${q.progress} / ${q.goal}</div>
        </div>
        <div class="small">${Math.round(ratio)}%</div>
      </div>
    `;
  }).join("");
}

function startGame() {
  const name = document.getElementById("playerNameInput").value.trim() || "플레이어";
  state.playerName = name;
  state.player = getDefaultPlayer();
  state.player.name = name;
  state.player.jobId = state.selectedJobId;
  state.gold = 0;

  renderPlayer();
  renderJobs();
  renderMaps();
  renderSelectedMapInfo();
  renderMonsterPool();
  renderInventory();
  renderBestiary();
  renderQuestStatus();

  addLog(`${name}님, ${findJob(state.selectedJobId).name} 직업으로 게임을 시작합니다.`);
  saveState();
}

function init() {
  loadState();

  if (!state.player) state.player = getDefaultPlayer();
  state.player.jobId = state.selectedJobId;

  if (!state.playerName) state.playerName = "플레이어";
  if (!state.unlockedMaps || !state.unlockedMaps.length) {
    state.unlockedMaps = [1];
  }

  renderJobs();
  renderMaps();
  renderSelectedMapInfo();
  renderPlayer();
  renderMonsterPool();
  renderInventory();
  renderBestiary();
  renderQuestStatus();

  document.getElementById("playerNameInput").value = state.playerName;

  if (state.logs.length) {
    document.getElementById("battleLog").innerHTML = state.logs.map(line => `<div>${line}</div>`).join("");
  } else {
    addLog("게임이 준비되었습니다. 직업을 고르고 지형을 선택하세요.");
  }

  document.getElementById("startGameBtn").addEventListener("click", startGame);
  document.getElementById("huntBtn").addEventListener("click", () => {
    spawnMonster();
  });
  document.getElementById("attackBtn").addEventListener("click", () => {
    attackMonster();
  });
  document.getElementById("saveBtn").addEventListener("click", () => {
    saveState();
    addLog("현재 상태를 저장했습니다.");
  });

  setInterval(() => {
    respawnMonsters();
    renderMonsterState();
  }, 1000);
}

init();
