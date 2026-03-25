// ========================
// QUESTS DATA (43 frameworks)
// ========================
const quests = [
    { id: 1, name: "Inversion", category: "I. How Do I Think More Clearly?", concept: "Ask how to guarantee failure, then avoid those things.", example: "Onboarding: avoid no laptop, no introductions, etc.", origin: "Charlie Munger / Carl Jacobi", xp: 50 },
    { id: 2, name: "Second-Order Thinking", category: "I. How Do I Think More Clearly?", concept: "Ask 'and then what?' to see consequences behind consequences.", example: "Budget cut → docs degrade → new hires slow → burnout.", origin: "Howard Marks", xp: 50 },
    { id: 3, name: "The Map Is Not the Territory", category: "I. How Do I Think More Clearly?", concept: "Every model is a simplification. Go see the real thing.", example: "Dashboard says 94% freshness, but agents don't use the KB.", origin: "Alfred Korzybski", xp: 50 },
    { id: 4, name: "Hanlon's Razor", category: "I. How Do I Think More Clearly?", concept: "Don't assume malice when neglect is likelier.", example: "Stakeholder changed request – probably overwhelmed, not undermining.", origin: "Robert J. Hanlon", xp: 50 },
    { id: 5, name: "The Empty Boat", category: "I. How Do I Think More Clearly?", concept: "Most workplace friction has no villain.", example: "No reply for 3 days? They're drowning in inbox.", origin: "Zhuangzi", xp: 50 },
    { id: 6, name: "The Cobra Effect", category: "I. How Do I Think More Clearly?", concept: "Good intentions + wrong incentives = worse problems.", example: "Support KPI 'resolution time' leads to ticket dumping.", origin: "Horst Siebert", xp: 50 },
    { id: 7, name: "Goodhart's Law", category: "I. How Do I Think More Clearly?", concept: "When a measure becomes a target, it stops being a good measure.", example: "Content output metric → quantity over quality.", origin: "Charles Goodhart", xp: 50 },
    { id: 8, name: "The Decision Journal", category: "II. How Do I Make Better Decisions?", concept: "Track decisions, reasoning, and outcomes. Review quarterly.", example: "Notion migration: journal showed process was sound, timeline wrong.", origin: "Daniel Kahneman / Farnam Street", xp: 50 },
    { id: 9, name: "Fear-Setting", category: "II. How Do I Make Better Decisions?", concept: "Define worst fears, prevention, and recovery plans.", example: "Going freelance: define, prevent, repair.", origin: "Tim Ferriss / Seneca", xp: 50 },
    { id: 10, name: "Pre-mortem", category: "II. How Do I Make Better Decisions?", concept: "Imagine the project failed. Write down what went wrong.", example: "Self-service portal pre-mortem uncovered missing mobile support.", origin: "Gary Klein", xp: 50 },
    { id: 11, name: "The Five Whys", category: "II. How Do I Make Better Decisions?", concept: "Ask 'why?' five times to reach the root cause.", example: "Wrong info → outdated article → no review process → org design problem.", origin: "Taiichi Ohno", xp: 50 },
    { id: 12, name: "The 3-1-1 Method", category: "II. How Do I Make Better Decisions?", concept: "One problem, three solutions, one recommendation.", example: "API timeout → retry, batch, or enterprise support; recommend retry now.", origin: "Common practice", xp: 50 },
    { id: 13, name: "DACI", category: "II. How Do I Make Better Decisions?", concept: "Driver, Approver, Contributors, Informed. Clarify who decides.", example: "CMS decision: KM drives, VP approves, SMEs contribute.", origin: "Intuit / Atlassian", xp: 50 },
    { id: 14, name: "Bias for Action", category: "II. How Do I Make Better Decisions?", concept: "Most decisions are reversible. Decide fast, learn, adjust.", example: "Choosing a project tool is a two-way door; do it quickly.", origin: "Jeff Bezos", xp: 50 },
    { id: 15, name: "KWL", category: "II. How Do I Make Better Decisions?", concept: "What I Know, What I Wonder, What I Learned.", example: "AI writing tool: K: current cost; W: handles jargon?; L: net gain 40%.", origin: "Donna Ogle", xp: 50 },
    { id: 16, name: "The Personal README", category: "III. How Do I Communicate More Effectively?", concept: "A one-page user manual for working with you.", example: "Peak hours 8-11am, async preferred, direct feedback.", origin: "Software README", xp: 50 },
    { id: 17, name: "FLIP It Email", category: "III. How Do I Communicate More Effectively?", concept: "Put the ask first, context second.", example: "Action needed: confirm delay by Thursday. Why: metadata issues.", origin: "Common", xp: 50 },
    { id: 18, name: "The One-Pager", category: "III. How Do I Communicate More Effectively?", concept: "Condense updates to one page for executives.", example: "Status, developments, decisions, risks.", origin: "General", xp: 50 },
    { id: 19, name: "The Weekly Update", category: "III. How Do I Communicate More Effectively?", concept: "52 weekly summaries = your annual review, pre-written.", example: "Completed, in progress, blockers, highlights.", origin: "General", xp: 50 },
    { id: 20, name: "Skip-Level Meetings", category: "III. How Do I Communicate More Effectively?", concept: "Align your work to the skip-level person's goals.", example: "Content audit reduces support tickets (their cost-efficiency goal).", origin: "General", xp: 50 },
    { id: 21, name: "Blue/Green/Red Speakers", category: "III. How Do I Communicate More Effectively?", concept: "Categorise meeting contributions by value.", example: "Blue: nods; green: moves forward; red: blocks without proposing.", origin: "General", xp: 50 },
    { id: 22, name: "The Teach-Back Method", category: "III. How Do I Communicate More Effectively?", concept: "Ask them to explain it back to confirm understanding.", example: "Walk me through how you'd update the KB after a launch.", origin: "Healthcare AHRQ", xp: 50 },
    { id: 23, name: "Working Out Loud", category: "III. How Do I Communicate More Effectively?", concept: "Make work visible, narrate it, frame it as contribution.", example: "Post wireframes early to avoid duplicate work.", origin: "Bryce Williams", xp: 50 },
    { id: 24, name: "The ONE Thing", category: "IV. How Do I Get More Done with Less Friction?", concept: "The one task that makes everything else easier or unnecessary.", example: "Migration plan – unblocks three teams.", origin: "Gary Keller", xp: 50 },
    { id: 25, name: "Energy-Based Scheduling", category: "IV. How Do I Get More Done with Less Friction?", concept: "Schedule by energy peaks, not arbitrary time slots.", example: "Deep work 9-11, meetings 11-1, admin 2-3, creative burst 3-4:30.", origin: "Daniel Pink", xp: 50 },
    { id: 26, name: "Parkinson's Law", category: "IV. How Do I Get More Done with Less Friction?", concept: "Work expands to fill the time. Set tighter deadlines.", example: "1-hour meeting → 25 minutes, same agenda.", origin: "C.N. Parkinson", xp: 50 },
    { id: 27, name: "The Two-Minute Rule", category: "IV. How Do I Get More Done with Less Friction?", concept: "Under two minutes? Do it now.", example: "Reply to that email now instead of deferring.", origin: "David Allen", xp: 50 },
    { id: 28, name: "Breaking Down the Boxes", category: "IV. How Do I Get More Done with Less Friction?", concept: "Small boring tasks pile up into crises. Do them now.", example: "5-min KB update prevents wrong info to customers.", origin: "General", xp: 50 },
    { id: 29, name: "Fire and Forget", category: "IV. How Do I Get More Done with Less Friction?", concept: "Be the employee trusted to solve problems independently.", example: "On it – data pull, interviews, findings by Thursday.", origin: "Military / Management", xp: 50 },
    { id: 30, name: "The Don't-Do-It List", category: "IV. How Do I Get More Done with Less Friction?", concept: "Negative commitments are stronger than positive intentions.", example: "Will not publish without SME review. Will not attend agenda-less meetings.", origin: "General", xp: 50 },
    { id: 31, name: "Map Then Automate", category: "IV. How Do I Get More Done with Less Friction?", concept: "Understand your workflow before optimising with tools.", example: "Map content creation → automate steps 2 and 4 only.", origin: "General", xp: 50 },
    { id: 32, name: "Kaizen", category: "V. How Do I Keep Improving?", concept: "Small daily improvements, compounded over time.", example: "Friday: remove one friction point. 50 improvements/year.", origin: "Toyota / Masaaki Imai", xp: 50 },
    { id: 33, name: "Go to Gemba", category: "V. How Do I Keep Improving?", concept: "Go where the work happens. Observe, listen, learn.", example: "Sit with agent – rename obscure article, usage triples.", origin: "Lean", xp: 50 },
    { id: 34, name: "The Feedback Flywheel", category: "V. How Do I Keep Improving?", concept: "Embed feedback loops so improvement sustains itself.", example: "Every output gets feedback; act on findings; iterate.", origin: "General", xp: 50 },
    { id: 35, name: "The Experiment Log", category: "V. How Do I Keep Improving?", concept: "Record hypotheses and results. Build your evidence base.", example: "Video walkthroughs → 32% ticket reduction. Next: video vs screenshots.", origin: "General", xp: 50 },
    { id: 36, name: "Shu-Ha-Ri", category: "V. How Do I Keep Improving?", concept: "Follow rules, bend rules, transcend rules. Three mastery stages.", example: "New writer: follow style guide; later: rewrite it.", origin: "Aikido / Agile", xp: 50 },
    { id: 37, name: "Rapid Prototyping", category: "V. How Do I Keep Improving?", concept: "Build rough, test fast, learn cheap.", example: "Test newsletter with 20 colleagues before designing templates.", origin: "Design thinking", xp: 50 },
    { id: 38, name: "Red Teaming & Dogfooding", category: "V. How Do I Keep Improving?", concept: "Attack your own work. Use what you build.", example: "Red team follows onboarding guide; dogfood the checklist.", origin: "Military / Tech", xp: 50 },
    { id: 39, name: "Customer Journey Mapping", category: "V. How Do I Keep Improving?", concept: "Map the full experience including feelings and friction.", example: "Cancel subscription: greyed-out button → 300 calls/month.", origin: "Design thinking", xp: 50 },
    { id: 40, name: "The Johari Window", category: "V. How Do I Keep Improving?", concept: "What you know vs. what others see. Expand the overlap.", example: "You think you communicate well; feedback reveals you dominate.", origin: "Luft & Ingham", xp: 50 },
    { id: 41, name: "The Swipe File", category: "VI. How Do I Build a Career, Not Just Do a Job?", concept: "Collect examples of excellent work. Borrow patterns.", example: "Save clear emails, reuse structure later.", origin: "Gary Halbert", xp: 50 },
    { id: 42, name: "The Parking Lot", category: "VI. How Do I Build a Career, Not Just Do a Job?", concept: "Capture ideas that aren't ready yet. Revisit them.", example: "Forum idea parked, used 6 months later for retention.", origin: "General", xp: 50 },
    { id: 43, name: "The Work-Sharing Buddy", category: "VI. How Do I Build a Career, Not Just Do a Job?", concept: "A trusted peer for mutual pre-stakeholder feedback.", example: "Buddy spots buried recommendation before VP sees it.", origin: "General", xp: 50 }
];

// ========================
// GAMIFICATION STATE
// ========================
let state = {
    completedQuests: [],    // { id, date }
    totalXP: 0,
    streak: 0,
    lastCompletionDate: null,
    spellbook: [],          // array of quest ids
    parkingLot: ""
};

// Load from localStorage
function loadState() {
    const saved = localStorage.getItem("dailyQuestState");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
        } catch(e) { console.error(e); }
    }
    // Ensure arrays exist
    if (!state.completedQuests) state.completedQuests = [];
    if (!state.spellbook) state.spellbook = [];
    if (state.parkingLot === undefined) state.parkingLot = "";
}

function saveState() {
    localStorage.setItem("dailyQuestState", JSON.stringify(state));
}

// Helper: today's date as YYYY-MM-DD
function todayString() {
    return new Date().toISOString().slice(0,10);
}

// Get quest for today (based on day-of-year, cycles through all 43)
function getTodaysQuest() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - start) / 86400000);
    const index = dayOfYear % quests.length;
    return quests[index];
}

// Check if quest is already completed today
function isQuestCompletedToday(questId) {
    const today = todayString();
    return state.completedQuests.some(q => q.id === questId && q.date === today);
}

// Complete quest
function completeQuest(quest) {
    if (isQuestCompletedToday(quest.id)) {
        showMessage("You've already completed today's quest! Come back tomorrow.", "warning");
        return false;
    }
    // Add XP
    state.totalXP += quest.xp;
    // Add to completed list
    state.completedQuests.push({ id: quest.id, date: todayString() });
    // Update streak
    const today = todayString();
    if (state.lastCompletionDate === null) {
        state.streak = 1;
    } else {
        const last = new Date(state.lastCompletionDate);
        const diffDays = (new Date(today) - last) / (1000*60*60*24);
        if (diffDays === 1) {
            state.streak++;
        } else if (diffDays > 1) {
            state.streak = 1;
        }
    }
    state.lastCompletionDate = today;
    saveState();
    updateUI();
    showMessage(`Quest completed! +${quest.xp} XP. Streak: ${state.streak} days.`, "success");
    return true;
}

// Update UI: level, XP bar, streak, button state
function updateUI() {
    const level = Math.floor(state.totalXP / 500) + 1;
    document.getElementById("level").innerText = level;
    document.getElementById("totalXP").innerText = state.totalXP;
    document.getElementById("streak").innerText = state.streak;

    const xpInCurrent = state.totalXP % 500;
    const percent = (xpInCurrent / 500) * 100;
    document.getElementById("xpBar").style.width = percent + "%";
    document.getElementById("xpText").innerText = `${xpInCurrent} / 500 XP`;

    const todaysQuest = getTodaysQuest();
    const completedToday = isQuestCompletedToday(todaysQuest.id);
    const completeBtn = document.getElementById("completeBtn");
    if (completeBtn) {
        completeBtn.disabled = completedToday;
        if (completedToday) {
            completeBtn.style.opacity = "0.6";
            completeBtn.style.cursor = "not-allowed";
        } else {
            completeBtn.style.opacity = "1";
            completeBtn.style.cursor = "pointer";
        }
    }
}

function showMessage(msg, type = "info") {
    const msgDiv = document.getElementById("completionMessage");
    msgDiv.innerHTML = msg;
    msgDiv.style.color = type === "success" ? "#c9a53b" : "#f5e7b2";
    setTimeout(() => { msgDiv.innerHTML = ""; }, 3000);
}

// Render today's quest
function renderQuest() {
    const quest = getTodaysQuest();
    document.getElementById("questCategory").innerText = quest.category;
    document.getElementById("questName").innerText = quest.name;
    document.getElementById("concept").innerHTML = `<strong>🧠 Concept:</strong> ${quest.concept}`;
    document.getElementById("example").innerHTML = `<strong>📖 Example:</strong> ${quest.example}`;
    document.getElementById("origin").innerHTML = `<strong>🏛️ Origin:</strong> ${quest.origin}`;
    updateUI();
    // favorite button state
    const favBtn = document.getElementById("favoriteBtn");
    if (state.spellbook.includes(quest.id)) {
        favBtn.innerHTML = '<i class="fas fa-bookmark"></i> In Spellbook';
        favBtn.style.opacity = "0.7";
    } else {
        favBtn.innerHTML = '<i class="fas fa-bookmark"></i> Add to Spellbook';
        favBtn.style.opacity = "1";
    }
}

// Toggle spellbook
function toggleSpellbook() {
    const quest = getTodaysQuest();
    if (state.spellbook.includes(quest.id)) {
        state.spellbook = state.spellbook.filter(id => id !== quest.id);
        showMessage(`Removed "${quest.name}" from spellbook.`, "info");
    } else {
        state.spellbook.push(quest.id);
        showMessage(`Added "${quest.name}" to your spellbook!`, "success");
    }
    saveState();
    renderQuest(); // refresh button text
}

// Render spellbook modal
function renderSpellbook() {
    const list = document.getElementById("spellbookList");
    if (!list) return;
    list.innerHTML = "";
    const bookmarked = quests.filter(q => state.spellbook.includes(q.id));
    if (bookmarked.length === 0) {
        list.innerHTML = "<li>Your spellbook is empty. Add frameworks you love!</li>";
    } else {
        bookmarked.forEach(q => {
            const li = document.createElement("li");
            li.innerHTML = `<span><strong>${q.name}</strong> – ${q.category}</span><span>⭐</span>`;
            list.appendChild(li);
        });
    }
}

// Render quest log modal
function renderQuestLog() {
    const container = document.getElementById("questLogList");
    if (!container) return;
    container.innerHTML = "";
    quests.forEach(q => {
        const completed = state.completedQuests.some(c => c.id === q.id);
        const div = document.createElement("div");
        div.className = "quest-log-item" + (completed ? " completed" : "");
        div.innerHTML = `
            <span><strong>${q.name}</strong> (${q.category})</span>
            <span>${completed ? "✅ Completed" : "❌ Not yet"}</span>
        `;
        container.appendChild(div);
    });
}

// Modals handling
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}
function closeModals() {
    document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
}

// Initialize event listeners
function init() {
    loadState();
    renderQuest();

    document.getElementById("completeBtn").addEventListener("click", () => {
        const quest = getTodaysQuest();
        completeQuest(quest);
        renderQuest(); // refresh button after completion
    });
    document.getElementById("favoriteBtn").addEventListener("click", toggleSpellbook);

    // Modals
    document.getElementById("showSpellbookBtn").addEventListener("click", () => {
        renderSpellbook();
        openModal("spellbookModal");
    });
    document.getElementById("showParkingLotBtn").addEventListener("click", () => {
        const textarea = document.getElementById("parkingLotText");
        textarea.value = state.parkingLot;
        openModal("parkingLotModal");
    });
    document.getElementById("showQuestLogBtn").addEventListener("click", () => {
        renderQuestLog();
        openModal("questLogModal");
    });

    // Close modal buttons
    document.querySelectorAll(".close").forEach(btn => {
        btn.addEventListener("click", closeModals);
    });
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) closeModals();
    });

    // Save parking lot
    document.getElementById("saveParkingLot").addEventListener("click", () => {
        state.parkingLot = document.getElementById("parkingLotText").value;
        saveState();
        showMessage("Parking Lot saved!", "success");
        closeModals();
    });
}

init();
