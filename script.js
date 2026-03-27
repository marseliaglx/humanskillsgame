const quests = [
  { id: 1, name: "Inversion", category: "Thinking", concept: "Ask how to guarantee failure, then avoid those things.", description: "Start from failure conditions first, then design around avoiding them.", example: "Onboarding: avoid no laptop, no introductions, etc.", origin: "Charlie Munger / Carl Jacobi", xp: 50, quizQuestion: "What is the core move in Inversion?", answers: ["List failure paths first and avoid them", "Assume success and skip risks", "Copy competitors blindly"], correctAnswer: 0 },
  { id: 2, name: "Second-Order Thinking", category: "Thinking", concept: "Ask 'and then what?' to see consequences behind consequences.", description: "Look beyond immediate effects and map downstream outcomes.", example: "Budget cut → docs degrade → new hires slow → burnout.", origin: "Howard Marks", xp: 50, quizQuestion: "Second-order thinking mainly helps you...", answers: ["See ripple effects over time", "Decide faster by ignoring context", "Avoid all risk completely"], correctAnswer: 0 },
  { id: 3, name: "The Map Is Not the Territory", category: "Thinking", concept: "Every model is a simplification. Go see the real thing.", description: "Metrics and diagrams are proxies, not reality itself.", example: "Dashboard says 94% freshness, but agents don't use the KB.", origin: "Alfred Korzybski", xp: 50, quizQuestion: "This framework warns that...", answers: ["Models can miss ground truth", "Data is always wrong", "Anecdotes beat evidence"], correctAnswer: 0 },
  { id: 4, name: "Hanlon's Razor", category: "Thinking", concept: "Don't assume malice when neglect is likelier.", description: "Interpret frustrating behavior with charitable realism first.", example: "Stakeholder changed request – probably overwhelmed, not undermining.", origin: "Robert J. Hanlon", xp: 50, quizQuestion: "Hanlon's Razor suggests you should first assume...", answers: ["Mistake or overload before bad intent", "Every delay is sabotage", "Silence means agreement"], correctAnswer: 0 },
  { id: 5, name: "The Empty Boat", category: "Thinking", concept: "Most workplace friction has no villain.", description: "Not every collision is personal; many are systemic.", example: "No reply for 3 days? They're drowning in inbox.", origin: "Zhuangzi", xp: 50, quizQuestion: "The Empty Boat helps reduce...", answers: ["Personalization of neutral events", "Need for communication", "Project planning"], correctAnswer: 0 },
  { id: 6, name: "The Cobra Effect", category: "Thinking", concept: "Good intentions + wrong incentives = worse problems.", description: "Badly designed rewards produce perverse outcomes.", example: "Support KPI 'resolution time' leads to ticket dumping.", origin: "Horst Siebert", xp: 50, quizQuestion: "The Cobra Effect is mainly about...", answers: ["Unintended consequences from incentives", "Fear of snakes in strategy", "Avoiding all KPIs"], correctAnswer: 0 },
  { id: 7, name: "Goodhart's Law", category: "Thinking", concept: "When a measure becomes a target, it stops being a good measure.", description: "Optimization pressure distorts indicators.", example: "Content output metric → quantity over quality.", origin: "Charles Goodhart", xp: 50, quizQuestion: "Goodhart's Law warns that metrics fail when...", answers: ["They become gamed targets", "They are tracked weekly", "They are qualitative"], correctAnswer: 0 },
  { id: 8, name: "The Decision Journal", category: "Decision", concept: "Track decisions, reasoning, and outcomes. Review quarterly.", description: "Record your thinking at decision time to compare with outcomes later.", example: "Journal showed the process was sound, timeline wrong.", origin: "Daniel Kahneman / Farnam Street", xp: 50, quizQuestion: "What is the primary psychological benefit of keeping a Decision Journal?", answers: ["Defeating hindsight bias", "Increasing meeting frequency", "Eliminating uncertainty"], correctAnswer: 0 },
  { id: 9, name: "Fear-Setting", category: "Decision", concept: "Define worst fears, prevention, and recovery plans.", description: "Make fear concrete and manageable by planning safeguards.", example: "Going freelance: define, prevent, repair.", origin: "Tim Ferriss / Seneca", xp: 50, quizQuestion: "What are the three active steps of Fear-Setting?", answers: ["Define, prevent, repair", "Dream, decide, do", "Guess, hope, react"], correctAnswer: 0 },
  { id: 10, name: "Pre-mortem", category: "Decision", concept: "Imagine the project failed. Write down what went wrong.", description: "Assume failure in advance to expose hidden risks early.", example: "Portal pre-mortem uncovered missing mobile support.", origin: "Gary Klein", xp: 50, quizQuestion: "When is the correct time to conduct a Pre-mortem?", answers: ["Before launch", "After project closure", "Only during crisis"], correctAnswer: 0 },
  { id: 11, name: "The Five Whys", category: "Decision", concept: "Ask 'why?' five times to reach root cause.", description: "Drill past symptoms until structural causes appear.", example: "Wrong info → outdated article → no review process.", origin: "Taiichi Ohno", xp: 50, quizQuestion: "What is the ultimate goal of using the Five Whys technique?", answers: ["Find the root cause", "Assign blame quickly", "Speed up reporting"], correctAnswer: 0 },
  { id: 12, name: "The 3-1-1 Method", category: "Decision", concept: "One problem, three solutions, one recommendation.", description: "Escalate with options and a clear point of view.", example: "Timeout: retry, batch, or support; recommend retry now.", origin: "Common practice", xp: 50, quizQuestion: "How should you present a critical software crash with 3-1-1?", answers: ["Problem + 3 options + 1 recommendation", "Only report impact", "Ask manager to choose everything"], correctAnswer: 0 },
  { id: 13, name: "DACI", category: "Decision", concept: "Driver, Approver, Contributors, Informed.", description: "Clarify who does work, who decides, who advises, and who is notified.", example: "KM drives, VP approves, SMEs contribute.", origin: "Intuit / Atlassian", xp: 50, quizQuestion: "In a strictly run DACI model, what is the maximum number of Approvers allowed?", answers: ["One", "Two", "Unlimited"], correctAnswer: 0 },
  { id: 14, name: "Bias for Action", category: "Decision", concept: "Most decisions are reversible. Decide fast, learn, adjust.", description: "Move quickly on reversible decisions; slow down on irreversible ones.", example: "Choose a tool quickly and iterate.", origin: "Jeff Bezos", xp: 50, quizQuestion: "A 14-day trial of a new PM tool is which decision type?", answers: ["Type 2 (two-way door)", "Type 1 (one-way door)", "Non-decision"], correctAnswer: 0 },
  { id: 15, name: "KWL", category: "Decision", concept: "What I Know, What I Wonder, What I Learned.", description: "Separate facts, assumptions, and validated learnings.", example: "Trial a tool and compare assumptions vs outcomes.", origin: "Donna Ogle", xp: 50, quizQuestion: "What does the 'W' in KWL stand for?", answers: ["Wonder", "Work", "Win"], correctAnswer: 0 },
  { id: 16, name: "The Personal README", category: "Communication", concept: "A one-page guide for how to work with you.", description: "Share your working style so teammates don't have to guess.", example: "Preferred hours, async style, feedback preferences.", origin: "Software README", xp: 50, quizQuestion: "What is the primary purpose of a Personal README?", answers: ["Clarify how to collaborate with you", "Promote your achievements", "Replace team onboarding"], correctAnswer: 0 },
  { id: 17, name: "FLIP It Email", category: "Communication", concept: "Put the ask first, context second.", description: "Lead with action request; support with brief context below.", example: "Action needed by Thursday; details below.", origin: "Common", xp: 50, quizQuestion: "How should a properly formatted FLIP It email begin?", answers: ["With the explicit ask/action", "With background story", "With greetings and no request"], correctAnswer: 0 },
  { id: 18, name: "The One-Pager", category: "Communication", concept: "Condense updates to one page.", description: "Force clarity by limiting updates to essentials.", example: "Status, decisions, risks.", origin: "General", xp: 50, quizQuestion: "Why is forcing a project update into one page effective?", answers: ["It forces clarity and brevity", "It removes accountability", "It avoids hard decisions"], correctAnswer: 0 },
  { id: 19, name: "The Weekly Update", category: "Communication", concept: "52 summaries become your annual review.", description: "Create a continuous log of impact and blockers.", example: "Done, in-progress, blockers, highlights.", origin: "General", xp: 50, quizQuestion: "What is the long-term career benefit of Weekly Updates?", answers: ["A searchable record of impact", "Fewer meetings forever", "Guaranteed promotion"], correctAnswer: 0 },
  { id: 20, name: "Skip-Level Meetings", category: "Communication", concept: "Align work to leadership priorities.", description: "Connect your work to strategic goals, not task trivia.", example: "Map project impact to cost-efficiency goals.", origin: "General", xp: 50, quizQuestion: "What is the most strategic topic in a skip-level meeting?", answers: ["How your work supports executive goals", "Daily ticket queue details", "Coworker performance rumors"], correctAnswer: 0 },
  { id: 21, name: "Blue/Green/Red Speakers", category: "Communication", concept: "Categorize meeting contributions by value.", description: "Manage meeting energy by elevating constructive input.", example: "Green contributes forward motion.", origin: "General", xp: 50, quizQuestion: "How should you handle a Red speaker blocking progress?", answers: ["Ask for specific changes needed to support", "Ignore them publicly", "End the meeting immediately"], correctAnswer: 0 },
  { id: 22, name: "The Teach-Back Method", category: "Communication", concept: "Ask others to explain it back.", description: "Verify understanding through re-explanation, not nods.", example: "Have teammate explain rollout process.", origin: "Healthcare AHRQ", xp: 50, quizQuestion: "What is a better alternative to asking 'Do you understand?'", answers: ["Ask them to walk through it back to you", "Repeat yourself louder", "Send one more long email"], correctAnswer: 0 },
  { id: 23, name: "Working Out Loud", category: "Communication", concept: "Make progress visible early.", description: "Share drafts early to invite feedback and avoid duplication.", example: "Share drafts before final version.", origin: "Bryce Williams", xp: 50, quizQuestion: "What is a major operational benefit of Working Out Loud?", answers: ["Early feedback and reduced duplicate work", "No need for reviews", "Complete privacy while building"], correctAnswer: 0 },
  { id: 24, name: "The ONE Thing", category: "Productivity", concept: "Find the one task that unlocks the rest.", description: "Prioritize the highest-leverage next action.", example: "Draft migration plan first.", origin: "Gary Keller", xp: 50, quizQuestion: "The ONE Thing asks you to prioritize...", answers: ["The highest-leverage task", "The easiest task", "The loudest request"], correctAnswer: 0 },
  { id: 25, name: "Energy-Based Scheduling", category: "Productivity", concept: "Schedule by energy peaks.", description: "Match cognitive load to your best mental hours.", example: "Deep work when attention is highest.", origin: "Daniel Pink", xp: 50, quizQuestion: "Energy-based scheduling improves output by...", answers: ["Aligning hard work with peak focus", "Eliminating calendars", "Working only mornings"], correctAnswer: 0 },
  { id: 26, name: "Parkinson's Law", category: "Productivity", concept: "Work expands to fill available time.", description: "Set tighter constraints to reduce bloat.", example: "Compress a 1-hour meeting to 25 minutes.", origin: "C.N. Parkinson", xp: 50, quizQuestion: "Parkinson's Law implies you should...", answers: ["Timebox aggressively", "Add more buffer everywhere", "Avoid deadlines"], correctAnswer: 0 },
  { id: 27, name: "The Two-Minute Rule", category: "Productivity", concept: "If it takes two minutes, do it now.", description: "Clear micro-tasks immediately to prevent cognitive clutter.", example: "Resolve tiny tasks immediately.", origin: "David Allen", xp: 50, quizQuestion: "The Two-Minute Rule is best for...", answers: ["Small tasks you can finish immediately", "Large projects", "Strategic planning sessions"], correctAnswer: 0 },
  { id: 28, name: "Breaking Down the Boxes", category: "Productivity", concept: "Small neglected tasks become large crises.", description: "Address maintenance debt before it compounds.", example: "Quick KB update prevents support issues.", origin: "General", xp: 50, quizQuestion: "This framework emphasizes that neglected small tasks...", answers: ["Compound into bigger failures", "Usually resolve themselves", "Should be delegated indefinitely"], correctAnswer: 0 },
  { id: 29, name: "Fire and Forget", category: "Productivity", concept: "Take ownership and deliver without micromanagement.", description: "Commit to outcomes with clear follow-through.", example: "Return with findings by Thursday.", origin: "Military / Management", xp: 50, quizQuestion: "Fire and Forget encourages you to...", answers: ["Own execution and report results", "Wait for constant approvals", "Avoid deadlines"], correctAnswer: 0 },
  { id: 30, name: "The Don't-Do-It List", category: "Productivity", concept: "Define what you refuse to do.", description: "Protect focus by setting explicit anti-rules.", example: "No publishing without review.", origin: "General", xp: 50, quizQuestion: "A Don't-Do-It list is mainly for...", answers: ["Preventing low-value behaviors", "Tracking completed tasks", "Estimating budgets"], correctAnswer: 0 },
  { id: 31, name: "Map Then Automate", category: "Productivity", concept: "Understand workflow before automating.", description: "Automating broken steps scales broken outcomes.", example: "Map process, then automate bottlenecks.", origin: "General", xp: 50, quizQuestion: "Why map a workflow before automation?", answers: ["To avoid scaling bad process design", "Because automation rarely works", "To delay decisions"], correctAnswer: 0 },
  { id: 32, name: "Kaizen", category: "Improvement", concept: "Small daily improvements compound.", description: "Steady incremental gains beat sporadic big pushes.", example: "Fix one friction point each week.", origin: "Toyota / Masaaki Imai", xp: 50, quizQuestion: "Kaizen is best described as...", answers: ["Continuous small improvements", "Periodic total overhauls", "One-time transformation"], correctAnswer: 0 },
  { id: 33, name: "Go to Gemba", category: "Improvement", concept: "Go where work happens and observe directly.", description: "Firsthand observation reveals issues reports miss.", example: "Sit with support agent and learn pain points.", origin: "Lean", xp: 50, quizQuestion: "Go to Gemba means you should...", answers: ["Observe work at its source", "Rely only on dashboards", "Delegate discovery entirely"], correctAnswer: 0 },
  { id: 34, name: "The Feedback Flywheel", category: "Improvement", concept: "Embed recurring feedback loops.", description: "Fast loops let teams correct course early.", example: "Collect feedback after every output.", origin: "General", xp: 50, quizQuestion: "A feedback flywheel creates value by...", answers: ["Turning feedback into continuous improvement", "Reducing communication", "Avoiding iteration"], correctAnswer: 0 },
  { id: 35, name: "The Experiment Log", category: "Improvement", concept: "Track hypothesis, action, and results.", description: "Document tests so learning compounds over time.", example: "Document outcomes of each test.", origin: "General", xp: 50, quizQuestion: "An Experiment Log should always capture...", answers: ["Hypothesis, action, and outcome", "Only final conclusions", "Only success stories"], correctAnswer: 0 },
  { id: 36, name: "Shu-Ha-Ri", category: "Improvement", concept: "Follow, adapt, transcend.", description: "Master rules, then evolve them intelligently.", example: "Start with rules, then innovate.", origin: "Aikido / Agile", xp: 50, quizQuestion: "In Shu-Ha-Ri, 'Ha' refers to...", answers: ["Adapting and breaking from strict form", "Blindly following rules", "Teaching others immediately"], correctAnswer: 0 },
  { id: 37, name: "Rapid Prototyping", category: "Improvement", concept: "Build rough, test fast, learn cheap.", description: "Use low-cost experiments to reduce uncertainty quickly.", example: "Pilot with a small cohort first.", origin: "Design thinking", xp: 50, quizQuestion: "Rapid prototyping primarily helps teams...", answers: ["Learn quickly with low-cost tests", "Avoid user feedback", "Finalize before testing"], correctAnswer: 0 },
  { id: 38, name: "Red Teaming & Dogfooding", category: "Improvement", concept: "Attack your own work and use it yourself.", description: "Pressure-test quality by simulating critics and real users.", example: "Dogfood onboarding checklist.", origin: "Military / Tech", xp: 50, quizQuestion: "Dogfooding means...", answers: ["Using your own product/process internally", "Sharing code publicly", "Hiring external auditors only"], correctAnswer: 0 },
  { id: 39, name: "Customer Journey Mapping", category: "Improvement", concept: "Map full user experience including friction.", description: "Visualize touchpoints to expose hidden pain.", example: "Identify hidden cancellation friction.", origin: "Design thinking", xp: 50, quizQuestion: "Journey mapping is most useful for finding...", answers: ["Friction across the end-to-end experience", "Only engineering defects", "Quarterly revenue forecasts"], correctAnswer: 0 },
  { id: 40, name: "The Johari Window", category: "Improvement", concept: "Expand overlap between self-view and external feedback.", description: "Use reflection + feedback to reduce blind spots.", example: "Use feedback to reveal blind spots.", origin: "Luft & Ingham", xp: 50, quizQuestion: "The Johari Window helps you improve by...", answers: ["Revealing blind spots through feedback", "Avoiding uncomfortable input", "Focusing only on strengths"], correctAnswer: 0 },
  { id: 41, name: "The Swipe File", category: "Career", concept: "Collect examples of excellent work.", description: "Build a personal library of high-quality patterns.", example: "Reuse high-clarity structures.", origin: "Gary Halbert", xp: 50, quizQuestion: "A Swipe File is best used to...", answers: ["Capture strong examples for reuse", "Store confidential data", "Track vacation plans"], correctAnswer: 0 },
  { id: 42, name: "The Parking Lot", category: "Career", concept: "Capture ideas not ready yet.", description: "Preserve ideas without derailing current focus.", example: "Revisit parked ideas monthly.", origin: "General", xp: 50, quizQuestion: "The Parking Lot method helps teams...", answers: ["Save off-scope ideas for later", "Cancel new ideas", "Force immediate action on everything"], correctAnswer: 0 },
  { id: 43, name: "The Work-Sharing Buddy", category: "Career", concept: "Use a trusted peer to review before stakeholders.", description: "Peer review catches flaws before high-stakes exposure.", example: "Catch flaws before executive review.", origin: "General", xp: 50, quizQuestion: "A Work-Sharing Buddy is most valuable for...", answers: ["Early quality feedback before stakeholder review", "Replacing managers", "Avoiding collaboration"], correctAnswer: 0 }
];

const STORAGE_KEY = "dailyQuestStateV3";
const LEGACY_STORAGE_KEYS = ["dailyQuestStateV2", "dailyQuestState"];

let currentQuest = null;
let xpBalance = 0;
let questState = "learning";
let selectedAnswer = null;
let activeTrial = null;

let state = {
  streak: 0,
  lastCompletionDate: null,
  spellbook: [],
  parkingLot: ""
};

function todayString() {
  return new Date().toISOString().split("T")[0];
}

function loadState() {
  const saved = [STORAGE_KEY, ...LEGACY_STORAGE_KEYS]
    .map((key) => localStorage.getItem(key))
    .find(Boolean);

  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    xpBalance = Number(parsed.xpBalance ?? parsed.totalXP ?? 0);
    state = {
      ...state,
      ...parsed,
      spellbook: parsed.spellbook || [],
      parkingLot: parsed.parkingLot || ""
    };
  } catch (error) {
    console.error("Failed to parse saved state", error);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, xpBalance }));
}

function getRandomQuest(excludeId = null) {
  const pool = quests.filter((q) => q.id !== excludeId);
  return pool[Math.floor(Math.random() * pool.length)] || quests[0];
}

function animateXp(from, to, duration = 700) {
  const start = performance.now();
  const total = Math.max(1, to - from);

  const step = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(from + total * eased);
    renderXp(value);
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

function renderXp(value = xpBalance) {
  const level = Math.floor(value / 500) + 1;
  document.getElementById("level").innerText = level;
  document.getElementById("totalXP").innerText = value;
  document.getElementById("streak").innerText = state.streak;

  const xpInCurrent = value % 500;
  document.getElementById("xpBar").style.width = `${(xpInCurrent / 500) * 100}%`;
  document.getElementById("xpText").innerText = `${xpInCurrent} / 500 XP`;
}

function buildTrial(quest) {
  const options = [...quest.answers].sort(() => Math.random() - 0.5);
  const correctAnswerText = quest.answers[quest.correctAnswer];

  activeTrial = {
    questId: quest.id,
    question: quest.quizQuestion,
    options,
    correctIndex: options.indexOf(correctAnswerText)
  };
}

function renderWisdomJourney(quest) {
  document.getElementById("questHeroCategory").innerText = `FRAMEWORK • ${todayString()}`;
  document.getElementById("questHeroName").innerText = quest.name;
  document.getElementById("questHeroConcept").innerText = quest.concept;

  document.getElementById("essenceBody").innerText = quest.description;
  document.getElementById("patternName").innerText = quest.name;
  document.getElementById("patternQuote").innerText = `“${quest.concept}”`;

  document.getElementById("originBody").innerText = `Takeaway: ${quest.example}`;
  document.getElementById("questCategory").innerText = quest.category;
  document.getElementById("questName").innerText = quest.name;
  document.getElementById("concept").innerHTML = `<strong>🧠 Concept:</strong> ${quest.concept}`;
  document.getElementById("example").innerHTML = `<strong>📖 Example:</strong> ${quest.example}`;
  document.getElementById("origin").innerHTML = `<strong>🏛️ Origin:</strong> ${quest.origin}`;

  const practiceCards = document.getElementById("practiceCards");
  practiceCards.innerHTML = "";
  [
    { title: "Visual Decision", text: "Turn this principle into one slide for your team this week." },
    { title: "Narrative Structure", text: `Use ${quest.name} in your next update or pitch.` },
    { title: "Logical Validation", text: "Run one important choice through this lens before acting." }
  ].forEach((item) => {
    const card = document.createElement("article");
    card.className = "bg-surface-container-low border border-slate-700 rounded-xl p-6";
    card.innerHTML = `<h3 class=\"font-headline text-2xl mb-3\">${item.title}</h3><p class=\"text-on-surface-variant\">${item.text}</p>`;
    practiceCards.appendChild(card);
  });
}

function handleWrongAnswer(button, feedbackEl) {
  button.classList.remove("shake");
  void button.offsetWidth;
  button.classList.add("shake", "wrong");
  feedbackEl.innerText = "Not quite. Try another option.";
}

function handleCorrectAnswer(button, feedbackEl) {
  button.classList.add("correct");
  feedbackEl.innerText = "Correct. Wisdom integrated.";

  document.querySelectorAll(".trial-option-btn").forEach((btn) => {
    btn.disabled = true;
    if (btn !== button) btn.style.opacity = "0.55";
  });

  const before = xpBalance;
  xpBalance += currentQuest.xp;
  questState = "completed";
  selectedAnswer = activeTrial.correctIndex;

  const today = todayString();
  if (state.lastCompletionDate === null) {
    state.streak = 1;
  } else {
    const last = new Date(state.lastCompletionDate);
    const diffDays = (new Date(today) - last) / 86400000;
    state.streak = diffDays === 1 ? state.streak + 1 : 1;
  }
  state.lastCompletionDate = today;

  animateXp(before, xpBalance);
  saveState();
}

function renderTrial() {
  buildTrial(currentQuest);
  const optionsDiv = document.getElementById("trialOptions");
  const feedbackEl = document.getElementById("trialFeedback");
  optionsDiv.innerHTML = "";
  feedbackEl.innerText = "";

  document.getElementById("trialQuestion").innerText = activeTrial.question;

  activeTrial.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "trial-option-btn";
    button.innerHTML = `<span class=\"font-label text-xs uppercase tracking-wider mr-3\">${String.fromCharCode(65 + index)}</span><span>${optionText}</span>`;

    button.addEventListener("click", () => {
      if (questState === "completed") return;
      selectedAnswer = index;
      const isCorrect = index === activeTrial.correctIndex;
      if (isCorrect) {
        handleCorrectAnswer(button, feedbackEl);
      } else {
        handleWrongAnswer(button, feedbackEl);
      }
    });

    optionsDiv.appendChild(button);
  });
}

function updateSpellbookButton() {
  const favBtn = document.getElementById("favoriteBtn");
  if (state.spellbook.includes(currentQuest.id)) {
    favBtn.innerHTML = "In Spellbook";
    favBtn.style.opacity = "0.7";
  } else {
    favBtn.innerHTML = "Add to Spellbook";
    favBtn.style.opacity = "1";
  }
}

function renderQuest() {
  renderWisdomJourney(currentQuest);
  renderTrial();
  updateSpellbookButton();
  renderXp();
}

function swapToNextQuest() {
  const previousId = currentQuest?.id ?? null;
  currentQuest = getRandomQuest(previousId);
  questState = "learning";
  selectedAnswer = null;
  renderQuest();
}

function toggleSpellbook() {
  if (state.spellbook.includes(currentQuest.id)) {
    state.spellbook = state.spellbook.filter((id) => id !== currentQuest.id);
  } else {
    state.spellbook.push(currentQuest.id);
  }
  saveState();
  updateSpellbookButton();
}

function renderSpellbook() {
  const list = document.getElementById("spellbookList");
  list.innerHTML = "";
  const bookmarked = quests.filter((q) => state.spellbook.includes(q.id));
  if (bookmarked.length === 0) {
    list.innerHTML = "<li>Your spellbook is empty. Add frameworks you love!</li>";
    return;
  }

  bookmarked.forEach((q) => {
    const li = document.createElement("li");
    li.innerHTML = `<span><strong>${q.name}</strong> – ${q.category}</span><span>⭐</span>`;
    list.appendChild(li);
  });
}

function renderQuestLog() {
  const container = document.getElementById("questLogList");
  container.innerHTML = "";
  quests.forEach((q) => {
    const div = document.createElement("div");
    div.className = "quest-log-item" + (state.spellbook.includes(q.id) ? " completed" : "");
    div.innerHTML = `<span><strong>${q.name}</strong> (${q.category})</span><span>${state.spellbook.includes(q.id) ? "⭐ Bookmarked" : "—"}</span>`;
    container.appendChild(div);
  });
}

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModals() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.style.display = "none";
  });
}

function setupEvents() {
  document.getElementById("completeBtn").addEventListener("click", () => {
    document.getElementById("trialSection").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("submitTrialBtn").addEventListener("click", swapToNextQuest);
  document.getElementById("favoriteBtn").addEventListener("click", toggleSpellbook);

  document.getElementById("showSpellbookBtn").addEventListener("click", () => {
    renderSpellbook();
    openModal("spellbookModal");
  });

  document.getElementById("showParkingLotBtn").addEventListener("click", () => {
    document.getElementById("parkingLotText").value = state.parkingLot;
    openModal("parkingLotModal");
  });

  document.getElementById("showQuestLogBtn").addEventListener("click", () => {
    renderQuestLog();
    openModal("questLogModal");
  });

  document.getElementById("saveParkingLot").addEventListener("click", () => {
    state.parkingLot = document.getElementById("parkingLotText").value;
    saveState();
    closeModals();
  });

  document.querySelectorAll(".close").forEach((btn) => btn.addEventListener("click", closeModals));
  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) closeModals();
  });
}

function init() {
  loadState();
  currentQuest = getRandomQuest();
  renderQuest();
  setupEvents();
}

init();
