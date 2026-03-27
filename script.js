// Daily wisdom corpus
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

const state = {
    totalXP: 0,
    streak: 0,
    completedQuests: [],
    lastCompletionDate: null
};

let selectedOptionIndex = null;
let trial = null;

function loadState() {
    const saved = localStorage.getItem("dailyQuestStateV2");
    if (!saved) return;
    try {
        const parsed = JSON.parse(saved);
        Object.assign(state, parsed);
    } catch (e) {
        console.error("Failed to parse state", e);
    }
}

function saveState() {
    localStorage.setItem("dailyQuestStateV2", JSON.stringify(state));
}

function todayString() {
    return new Date().toISOString().slice(0, 10);
}

function getTodaysQuest() {
    const now = new Date();
    const yearStart = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - yearStart) / 86400000);
    return quests[dayOfYear % quests.length];
}

function alreadyCompletedToday(questId) {
    return state.completedQuests.some((q) => q.id === questId && q.date === todayString());
}

function updateProgress(quest) {
    if (alreadyCompletedToday(quest.id)) return;

    state.totalXP += quest.xp;
    state.completedQuests.push({ id: quest.id, date: todayString() });

    if (!state.lastCompletionDate) {
        state.streak = 1;
    } else {
        const days = (new Date(todayString()) - new Date(state.lastCompletionDate)) / 86400000;
        state.streak = days === 1 ? state.streak + 1 : 1;
    }
    state.lastCompletionDate = todayString();
    saveState();
}

function buildTrial(quest) {
    const correct = `It provides the minimum structure needed to form a recognizable pattern, just like ${quest.name}.`;
    const options = [
        correct,
        "It is always the mathematically most beautiful number.",
        "It simply signals that any list has ended."
    ];

    trial = {
        question: `Why is the third element critical in ${quest.name}?`,
        options,
        correctIndex: 0
    };
}

function renderPage() {
    const quest = getTodaysQuest();
    buildTrial(quest);

    document.title = `${quest.name} | The Shrine of Knowledge`;
    document.getElementById("patternCode").innerText = `Cognitive Patterns // ${String(quest.id).padStart(3, "0")}`;

    const words = quest.name.split(" ");
    document.getElementById("wisdomTitleMain").innerText = words.slice(0, -1).join(" ") || quest.name;
    document.getElementById("wisdomTitleAccent").innerText = words.length > 1 ? words[words.length - 1] : quest.name;

    document.getElementById("wisdomIntro").innerText = `${quest.concept} This pattern sharpens clarity and retention in high-stakes thinking.`;
    document.getElementById("essenceParagraphOne").innerText = `The essence of ${quest.name} is simple: ${quest.concept}`;
    document.getElementById("essenceParagraphTwo").innerText = `In practice, this looks like: ${quest.example}`;
    document.getElementById("latinQuoteTitle").innerText = quest.name;
    document.getElementById("latinQuoteBody").innerText = `“${quest.example}”`;
    document.getElementById("originNarrative").innerText = `${quest.name} is linked to ${quest.origin}. Use it as a pattern for practical judgment rather than abstract theory.`;

    const practiceCards = document.getElementById("practiceCards");
    practiceCards.innerHTML = "";
    [
        { icon: "grid_view", title: "Visual Design", body: `Represent ${quest.name} as a visible pattern in your next document.` },
        { icon: "auto_stories", title: "Narrative Structure", body: `Use ${quest.name} to structure your next update into memorable arcs.` },
        { icon: "psychology", title: "Logical Syllogism", body: `Apply ${quest.name} as a decision checkpoint before finalizing your choice.` }
    ].forEach((card) => {
        const el = document.createElement("article");
        el.className = "bg-surface-container p-10 transition-all duration-500 hover:bg-surface-container-high border-b-2 border-transparent hover:border-primary";
        el.innerHTML = `<span class=\"material-symbols-outlined text-secondary text-4xl mb-6\">${card.icon}</span><h3 class=\"font-serif text-2xl mb-4\">${card.title}</h3><p class=\"text-on-surface-variant text-sm leading-loose\">${card.body}</p>`;
        practiceCards.appendChild(el);
    });

    document.getElementById("trialQuestion").innerText = trial.question;
    const trialOptions = document.getElementById("trialOptions");
    trialOptions.innerHTML = "";
    ["A", "B", "C"].forEach((letter, idx) => {
        const button = document.createElement("button");
        button.className = "trial-option w-full p-6 text-left border border-white/10 hover:border-primary transition-colors flex items-center gap-6";
        button.dataset.index = String(idx);
        button.innerHTML = `<span class=\"w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs\">${letter}</span><span class=\"text-on-surface-variant font-light\">${trial.options[idx]}</span>`;
        button.addEventListener("click", () => {
            selectedOptionIndex = idx;
            document.querySelectorAll(".trial-option").forEach((n) => n.classList.remove("selected"));
            button.classList.add("selected");
        });
        trialOptions.appendChild(button);
    });

    const status = document.getElementById("xpStatus");
    if (alreadyCompletedToday(quest.id)) {
        status.innerText = `Already completed today • Total XP ${state.totalXP} • Streak ${state.streak}`;
    } else {
        status.innerText = `Reward: +${quest.xp} XP • Current XP ${state.totalXP} • Streak ${state.streak}`;
    }
}

function handleClaimXP() {
    const quest = getTodaysQuest();
    const status = document.getElementById("xpStatus");

    if (alreadyCompletedToday(quest.id)) {
        status.innerText = `Already completed today • Total XP ${state.totalXP} • Streak ${state.streak}`;
        return;
    }

    if (selectedOptionIndex === null) {
        status.innerText = "Choose an answer before claiming XP.";
        return;
    }

    if (selectedOptionIndex !== trial.correctIndex) {
        status.innerText = "Not quite. Re-read the essence and try again.";
        return;
    }

    updateProgress(quest);
    status.innerText = `Correct. +${quest.xp} XP earned • Total XP ${state.totalXP} • Streak ${state.streak}`;
}

function init() {
    loadState();
    renderPage();

    document.getElementById("scrollToTrialBtn").addEventListener("click", () => {
        document.getElementById("trialSection").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("claimXpBtn").addEventListener("click", handleClaimXP);
}

init();
