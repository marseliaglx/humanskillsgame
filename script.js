const quests = [
    { id: 1, name: "Inversion", category: "Thinking", concept: "Ask how to guarantee failure, then avoid those things.", example: "Onboarding: avoid no laptop, no introductions, etc.", origin: "Charlie Munger / Carl Jacobi", xp: 50 },
    { id: 2, name: "Second-Order Thinking", category: "Thinking", concept: "Ask 'and then what?' to see consequences behind consequences.", example: "Budget cut → docs degrade → new hires slow → burnout.", origin: "Howard Marks", xp: 50 },
    { id: 3, name: "The Map Is Not the Territory", category: "Thinking", concept: "Every model is a simplification. Go see the real thing.", example: "Dashboard says 94% freshness, but agents don't use the KB.", origin: "Alfred Korzybski", xp: 50 },
    { id: 4, name: "Hanlon's Razor", category: "Thinking", concept: "Don't assume malice when neglect is likelier.", example: "Stakeholder changed request – probably overwhelmed, not undermining.", origin: "Robert J. Hanlon", xp: 50 },
    { id: 5, name: "The Empty Boat", category: "Thinking", concept: "Most workplace friction has no villain.", example: "No reply for 3 days? They're drowning in inbox.", origin: "Zhuangzi", xp: 50 },
    { id: 6, name: "The Cobra Effect", category: "Thinking", concept: "Good intentions + wrong incentives = worse problems.", example: "Support KPI 'resolution time' leads to ticket dumping.", origin: "Horst Siebert", xp: 50 },
    { id: 7, name: "Goodhart's Law", category: "Thinking", concept: "When a measure becomes a target, it stops being a good measure.", example: "Content output metric → quantity over quality.", origin: "Charles Goodhart", xp: 50 },
    { id: 8, name: "The Decision Journal", category: "Decision", concept: "Track decisions, reasoning, and outcomes. Review quarterly.", example: "Journal showed the process was sound, timeline wrong.", origin: "Daniel Kahneman / Farnam Street", xp: 50 },
    { id: 9, name: "Fear-Setting", category: "Decision", concept: "Define worst fears, prevention, and recovery plans.", example: "Going freelance: define, prevent, repair.", origin: "Tim Ferriss / Seneca", xp: 50 },
    { id: 10, name: "Pre-mortem", category: "Decision", concept: "Imagine the project failed. Write down what went wrong.", example: "Portal pre-mortem uncovered missing mobile support.", origin: "Gary Klein", xp: 50 },
    { id: 11, name: "The Five Whys", category: "Decision", concept: "Ask 'why?' five times to reach root cause.", example: "Wrong info → outdated article → no review process.", origin: "Taiichi Ohno", xp: 50 },
    { id: 12, name: "The 3-1-1 Method", category: "Decision", concept: "One problem, three solutions, one recommendation.", example: "Timeout: retry, batch, or support; recommend retry now.", origin: "Common practice", xp: 50 },
    { id: 13, name: "DACI", category: "Decision", concept: "Driver, Approver, Contributors, Informed.", example: "KM drives, VP approves, SMEs contribute.", origin: "Intuit / Atlassian", xp: 50 },
    { id: 14, name: "Bias for Action", category: "Decision", concept: "Most decisions are reversible. Decide fast, learn, adjust.", example: "Choose a tool quickly and iterate.", origin: "Jeff Bezos", xp: 50 },
    { id: 15, name: "KWL", category: "Decision", concept: "What I Know, What I Wonder, What I Learned.", example: "Trial a tool and compare assumptions vs outcomes.", origin: "Donna Ogle", xp: 50 },
    { id: 16, name: "The Personal README", category: "Communication", concept: "A one-page guide for how to work with you.", example: "Preferred hours, async style, feedback preferences.", origin: "Software README", xp: 50 },
    { id: 17, name: "FLIP It Email", category: "Communication", concept: "Put the ask first, context second.", example: "Action needed by Thursday; details below.", origin: "Common", xp: 50 },
    { id: 18, name: "The One-Pager", category: "Communication", concept: "Condense updates to one page.", example: "Status, decisions, risks.", origin: "General", xp: 50 },
    { id: 19, name: "The Weekly Update", category: "Communication", concept: "52 summaries become your annual review.", example: "Done, in-progress, blockers, highlights.", origin: "General", xp: 50 },
    { id: 20, name: "Skip-Level Meetings", category: "Communication", concept: "Align work to leadership priorities.", example: "Map project impact to cost-efficiency goals.", origin: "General", xp: 50 },
    { id: 21, name: "Blue/Green/Red Speakers", category: "Communication", concept: "Categorize meeting contributions by value.", example: "Green contributes forward motion.", origin: "General", xp: 50 },
    { id: 22, name: "The Teach-Back Method", category: "Communication", concept: "Ask others to explain it back.", example: "Have teammate explain rollout process.", origin: "Healthcare AHRQ", xp: 50 },
    { id: 23, name: "Working Out Loud", category: "Communication", concept: "Make progress visible early.", example: "Share drafts before final version.", origin: "Bryce Williams", xp: 50 },
    { id: 24, name: "The ONE Thing", category: "Productivity", concept: "Find the one task that unlocks the rest.", example: "Draft migration plan first.", origin: "Gary Keller", xp: 50 },
    { id: 25, name: "Energy-Based Scheduling", category: "Productivity", concept: "Schedule by energy peaks.", example: "Deep work when attention is highest.", origin: "Daniel Pink", xp: 50 },
    { id: 26, name: "Parkinson's Law", category: "Productivity", concept: "Work expands to fill available time.", example: "Compress a 1-hour meeting to 25 minutes.", origin: "C.N. Parkinson", xp: 50 },
    { id: 27, name: "The Two-Minute Rule", category: "Productivity", concept: "If it takes two minutes, do it now.", example: "Resolve tiny tasks immediately.", origin: "David Allen", xp: 50 },
    { id: 28, name: "Breaking Down the Boxes", category: "Productivity", concept: "Small neglected tasks become large crises.", example: "Quick KB update prevents support issues.", origin: "General", xp: 50 },
    { id: 29, name: "Fire and Forget", category: "Productivity", concept: "Take ownership and deliver without micromanagement.", example: "Return with findings by Thursday.", origin: "Military / Management", xp: 50 },
    { id: 30, name: "The Don't-Do-It List", category: "Productivity", concept: "Define what you refuse to do.", example: "No publishing without review.", origin: "General", xp: 50 },
    { id: 31, name: "Map Then Automate", category: "Productivity", concept: "Understand workflow before automating.", example: "Map process, then automate bottlenecks.", origin: "General", xp: 50 },
    { id: 32, name: "Kaizen", category: "Improvement", concept: "Small daily improvements compound.", example: "Fix one friction point each week.", origin: "Toyota / Masaaki Imai", xp: 50 },
    { id: 33, name: "Go to Gemba", category: "Improvement", concept: "Go where work happens and observe directly.", example: "Sit with support agent and learn pain points.", origin: "Lean", xp: 50 },
    { id: 34, name: "The Feedback Flywheel", category: "Improvement", concept: "Embed recurring feedback loops.", example: "Collect feedback after every output.", origin: "General", xp: 50 },
    { id: 35, name: "The Experiment Log", category: "Improvement", concept: "Track hypothesis, action, and results.", example: "Document outcomes of each test.", origin: "General", xp: 50 },
    { id: 36, name: "Shu-Ha-Ri", category: "Improvement", concept: "Follow, adapt, transcend.", example: "Start with rules, then innovate.", origin: "Aikido / Agile", xp: 50 },
    { id: 37, name: "Rapid Prototyping", category: "Improvement", concept: "Build rough, test fast, learn cheap.", example: "Pilot with a small cohort first.", origin: "Design thinking", xp: 50 },
    { id: 38, name: "Red Teaming & Dogfooding", category: "Improvement", concept: "Attack your own work and use it yourself.", example: "Dogfood onboarding checklist.", origin: "Military / Tech", xp: 50 },
    { id: 39, name: "Customer Journey Mapping", category: "Improvement", concept: "Map full user experience including friction.", example: "Identify hidden cancellation friction.", origin: "Design thinking", xp: 50 },
    { id: 40, name: "The Johari Window", category: "Improvement", concept: "Expand overlap between self-view and external feedback.", example: "Use feedback to reveal blind spots.", origin: "Luft & Ingham", xp: 50 },
    { id: 41, name: "The Swipe File", category: "Career", concept: "Collect examples of excellent work.", example: "Reuse high-clarity structures.", origin: "Gary Halbert", xp: 50 },
    { id: 42, name: "The Parking Lot", category: "Career", concept: "Capture ideas not ready yet.", example: "Revisit parked ideas monthly.", origin: "General", xp: 50 },
    { id: 43, name: "The Work-Sharing Buddy", category: "Career", concept: "Use a trusted peer to review before stakeholders.", example: "Catch flaws before executive review.", origin: "General", xp: 50 }
];

const STORAGE_KEY = "dailyQuestStateV3";
const LEGACY_STORAGE_KEYS = ["dailyQuestStateV2", "dailyQuestState"];

let currentQuest = null;
let xpBalance = 0;
let questState = "learning";
let selectedAnswer = null;

let state = {
    streak: 0,
    lastCompletionDate: null,
    spellbook: [],
    parkingLot: ""
};

let activeTrial = null;
const STORAGE_KEY = "dailyQuestStateV2";
const LEGACY_STORAGE_KEY = "dailyQuestState";

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
    if (saved) {
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
            console.error(error);
        }
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function todayString() {
    return new Date().toISOString().slice(0, 10);
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
    const correct = `Because ${quest.concept.toLowerCase()}`;
    const options = [
        correct,
        "Because speed is always more important than clarity.",
        "Because every problem has one fixed answer regardless of context."
    ].sort(() => Math.random() - 0.5);

    activeTrial = {
        questId: quest.id,
        question: quest.quizQuestion,
        options,
        correctIndex: quest.correctAnswer
    };
}

function renderWisdomJourney(quest) {
    document.getElementById("questHeroCategory").innerText = `FRAMEWORK • ${todayString()}`;
    document.getElementById("questHeroName").innerText = quest.name;
    document.getElementById("questHeroConcept").innerText = quest.concept;

    document.getElementById("essenceBody").innerHTML = quest.description;
    document.getElementById("patternName").innerText = quest.name;
    document.getElementById("patternQuote").innerText = `“${quest.concept}”`;

    document.getElementById("originBody").innerText = `Takeaway: ${quest.example}`;
    document.getElementById("questCategory").innerText = quest.category;
    document.getElementById("questName").innerText = quest.name;
    document.getElementById("concept").innerHTML = `<strong>🧠 Quote:</strong> ${quest.concept}`;
    document.getElementById("example").innerHTML = `<strong>📖 Takeaway:</strong> ${quest.example}`;
    document.getElementById("origin").innerHTML = `<strong>🏛️ Source:</strong> ${quest.origin}`;

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
        card.innerHTML = `<h3 class="font-headline text-2xl mb-3">${item.title}</h3><p class="text-on-surface-variant">${item.text}</p>`;
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

    const pdfButton = document.getElementById("downloadPdfBtn");
    pdfButton.classList.remove("hidden");
    requestAnimationFrame(() => {
        pdfButton.classList.remove("opacity-0");
        pdfButton.style.transform = "translateY(0)";
    });
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
        button.innerHTML = `<span class="font-label text-xs uppercase tracking-wider mr-3">${String.fromCharCode(65 + index)}</span><span>${optionText}</span>`;

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

    const pdfButton = document.getElementById("downloadPdfBtn");
    pdfButton.classList.add("hidden", "opacity-0");
    pdfButton.style.transform = "translateY(4px)";
}

function swapToNextQuest() {
    const container = document.getElementById("mainContentContainer");
    container.classList.add("content-fade-out");

    setTimeout(() => {
        const previousId = currentQuest?.id ?? null;
        currentQuest = getRandomQuest(previousId);
        questState = "learning";
        selectedAnswer = null;
        renderQuest();
        container.classList.remove("content-fade-out");
    }, 280);
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

function init() {
    loadState();
    renderQuest();

    document.getElementById("completeBtn").addEventListener("click", swapToNextQuest);
    document.getElementById("nextQuestBtn").addEventListener("click", swapToNextQuest);
    document.getElementById("beginDailyQuestBtn").addEventListener("click", () => {
        swapToNextQuest();
        document.getElementById("wisdomJourney").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("downloadPdfBtn").addEventListener("click", () => {
        window.print();
    });

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
