const data = {
  "Class D": [
    "Exit cell block when doors open",
    "Follow guards to assigned areas",
    "Avoid restricted zones",
    "Participate in SCP testing",
    "Survive breaches or riots"
  ],

  "Chaos Insurgency": [
    "Infiltrate the facility",
    "Sabotage generators",
    "Breach SCP containment",
    "Eliminate Foundation personnel",
    "Extract SCP assets",
    "Free detained Class-D"
  ],

  "Security Department": [
    "Patrol assigned sectors",
    "Escort researchers",
    "Detain Class-D",
    "Respond to breach alarms",
    "Engage hostile forces",
    "Lock down compromised areas"
  ],

  "Medical Department": [
    "Heal injured personnel",
    "Revive downed players",
    "Operate medbay equipment",
    "Respond to casualty alerts",
    "Assist evacuations"
  ],

  "Scientific Department": [
    "Conduct SCP experiments",
    "Authorize Class-D testing",
    "Document SCP behavior",
    "Maintain laboratory safety",
    "Evacuate during containment failures"
  ],

  "Technical Department": [
    "Repair broken doors",
    "Restore power switches",
    "Fix electrical panels",
    "Restart generators",
    "Respond to power outages",
    "Secure maintenance tunnels"
  ],

  "Foundation Personnel": {
    "Kitchen Chef": [
      "Prepare meals",
      "Deliver food to sectors",
      "Maintain kitchen equipment",
      "Remain in food service areas"
    ],
    "Ethics Committee": [
      "Observe SCP tests",
      "Terminate unethical experiments",
      "Investigate violations",
      "Shut down illegal procedures"
    ],
    "External Relations": [
      "Escort external visitors",
      "Control public exposure",
      "Coordinate cover stories",
      "Secure leaked information"
    ]
  },

  "Mobile Task Force": {
    "Nu-7": [
      "Deploy to surface zones",
      "Secure exterior entrances",
      "Provide heavy fire support",
      "Contain large-scale breaches"
    ],
    "Beta-7": [
      "Enter contaminated sectors",
      "Handle biohazard SCPs",
      "Seal chemical leaks",
      "Assist medical evacuation"
    ],
    "Epsilon-11": [
      "Recontain escaped SCPs",
      "Sweep breached hallways",
      "Escort scientists",
      "Suppress riots"
    ],
    "Epsilon-9": [
      "Track anomalous entities",
      "Secure forested areas",
      "Assist containment teams",
      "Support recovery operations"
    ],
    "Tau-5": [
      "Engage extreme SCP threats",
      "Hold critical choke points",
      "Prevent total site failure",
      "Delay SCP advances"
    ]
  },

  "Alpha-1": [
    "Protect O5 Council",
    "Eliminate internal threats",
    "Secure classified assets",
    "Override all facility authority"
  ],

  "O5 Council": {
    "O5-1 FD": [
      "Authorize full facility lockdown",
      "Override site command",
      "Approve SCP termination",
      "Issue Foundation-wide orders"
    ],
    "O5-2 IS": [
      "Authorize internal security raids",
      "Detain compromised staff",
      "Approve lethal force",
      "Secure restricted sectors"
    ],
    "O5-3 A1": [
      "Command Alpha-1 units",
      "Resolve internal crises",
      "Authorize threat elimination",
      "Override all departments"
    ],
    "O5-4 IA": [
      "Authorize surveillance",
      "Monitor intelligence feeds",
      "Track hostile factions",
      "Suppress information leaks"
    ],
    "O5-5 O5MTF": [
      "Deploy MTF units",
      "Recall active squads",
      "Authorize joint operations",
      "Approve high-risk missions"
    ],
    "O5-6 SEC": [
      "Oversee containment security",
      "Authorize sector lockdowns",
      "Deploy response teams",
      "Audit guard performance"
    ],
    "O5-7 SD": [
      "Approve SCP experiments",
      "Suspend unsafe testing",
      "Authorize research access",
      "Audit researchers"
    ],
    "O5-8 ER": [
      "Control public exposure",
      "Approve cover stories",
      "Restrict civilian contact",
      "Authorize misinformation operations"
    ],
    "O5-9 TD": [
      "Repair facility systems",
      "Fix doors and locks",
      "Restore power grids",
      "Reset generators",
      "Stabilize sector electricity"
    ],
    "O5-10 MED": [
      "Authorize emergency treatment",
      "Deploy trauma teams",
      "Override medbay authority"
    ],
    "O5-11 EC": [
      "Terminate unethical operations",
      "Suspend SCP testing",
      "Investigate violations",
      "Enforce Foundation ethics"
    ]
  }
};

const ui1 = document.getElementById("ui1");
const ui2 = document.getElementById("ui2");
const options = document.getElementById("options");
const tasks = document.getElementById("tasks");
const title2 = document.getElementById("ui2-title");
const back = document.getElementById("return");

function loadOptions(obj) {
  options.innerHTML = "";
  Object.keys(obj).forEach(k => {
    const o = document.createElement("div");
    o.className = "option";
    o.textContent = k;
    o.onclick = () => select(k, obj[k]);
    options.appendChild(o);
  });
}

function select(name, value) {
  if (Array.isArray(value)) {
    ui1.style.display = "none";
    ui2.style.display = "flex";
    title2.textContent = name;
    tasks.innerHTML = "";
    value.forEach(t => {
      const line = document.createElement("div");
      line.className = "task";
      line.textContent = "• " + t;
      tasks.appendChild(line);
    });
  } else {
    loadOptions(value);
  }
}

back.onclick = () => {
  ui2.style.display = "none";
  ui1.style.display = "flex";
  loadOptions(data);
};

loadOptions(data);
