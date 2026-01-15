const data = {
  "Class-D": [
    "Group with other Class-D to start riots",
    "Break doors during containment failures",
    "Loot keycards from dead personnel",
    "Enter SCP containment zones when breached",
    "Side with Chaos Insurgency if freed",
    "Escape through surface exits",
    "Cause distractions for CI raids"
  ],

  "Chaos Insurgency": [
    "Raid the facility from surface entrances",
    "Breach containment doors",
    "Free detained Class-D personnel",
    "Steal SCPs or cause SCP breaches",
    "Engage Foundation Security and MTF",
    "Hold surface and Sector 1 access points"
  ],

  "Security Department": [
    "Prevent Class-D riots",
    "Guard checkpoints and sector gates",
    "Escort Class-D to testing chambers",
    "Engage Chaos Insurgency raids",
    "Respond to SCP containment breaches",
    "Protect Foundation staff"
  ],

  "Internal Security": [
    "Monitor Foundation personnel behavior",
    "Detect CI infiltrators inside the facility",
    "Detain rogue or compromised staff",
    "Assist Security during lockdowns",
    "Report infiltration attempts in Sector 1"
  ],

  "Medical Department": [
    "Heal injured personnel",
    "Revive downed players",
    "Extract injured staff from breach zones",
    "Perform emergency medical procedures",
    "Remain behind Security protection"
  ],

  "Technical Department": [
    "Repair broken doors",
    "Restore generator power",
    "Fix electrical boxes",
    "Extinguish facility fires",
    "Repair burst pipes",
    "Maintain containment systems"
  ],

  "Scientific Department": [
    "Conduct SCP testing using Class-D",
    "Observe SCP reactions during experiments",
    "Evacuate labs during breaches",
    "Access Euclid containment zones",
    "Coordinate with Security during experiments"
  ],

  "Foundation Personnel": {
    "Observer": [
      "Remain in administrative zones",
      "Observe facility operations",
      "Do not engage in combat",
      "Evacuate during breaches"
    ],
    "Kitchen Chef": [
      "Prepare meals for staff",
      "Deliver food to cafeterias",
      "Maintain kitchen equipment",
      "Assist during emergencies"
    ],
    "Ethics Committee": [
      "Monitor ethical conduct of experiments",
      "Approve or deny Class-D testing",
      "Document violations",
      "Intervene if unethical practices occur"
    ],
    "External Affairs": [
      "Manage public and media exposure",
      "Coordinate misinformation during breaches",
      "Assist evacuation announcements",
      "Report externally relevant events"
    ]
  },

  "Facility Executive": [
    "Access all administrative and restricted zones",
    "Coordinate Security, MTF, and Foundation operations",
    "Supervise containment and evacuation protocols",
    "Authorize facility-wide procedures",
    "Escort VIP personnel when needed"
  ],

  "Mobile Task Force": {
    "Nu-7": [
      "Secure surface zones",
      "Engage Chaos Insurgency forces",
      "Hold exterior breach points",
      "Provide heavy fire support"
    ],
    "Beta-7": [
      "Contain hazardous SCP zones",
      "Operate in toxic/anomalous areas",
      "Support medical extraction teams"
    ],
    "Epsilon-11": [
      "Recontain escaped SCPs",
      "Sweep breached facility sectors",
      "Escort scientists during emergencies",
      "Enforce facility lockdowns"
    ],
    "Epsilon-9": [
      "Track Euclid anomalies",
      "Scout breach areas",
      "Support sector containment operations"
    ],
    "Tau-5": [
      "Respond to Keter-class breaches",
      "Secure high-risk containment zones",
      "Engage extreme anomalies",
      "Operate in Sector 4"
    ]
  },

  "Alpha-1": [
    "Escort O5 members",
    "Secure O5 movement routes",
    "Eliminate internal threats",
    "Respond to critical facility alerts",
    "Remain with O5 at all times"
  ],

  "O5 Council": {
    "O5-1 (FD)": [
      "Activate Alpha Warhead",
      "Override all access levels",
      "Authorize facility lockdowns",
      "Move freely between sectors",
      "Remain protected by Alpha-1"
    ],
    "O5-2 (IS)": [
      "Activate Alpha Warhead",
      "Authorize internal security operations",
      "Order detainment of personnel",
      "Coordinate Internal Security response",
      "Override access restrictions"
    ],
    "O5-3 (A1)": [
      "Activate Alpha Warhead",
      "Command Alpha-1 units",
      "Respond to internal crises",
      "Secure command zones",
      "Coordinate facility response"
    ],
    "O5-4 (IA)": [
      "Activate Alpha Warhead",
      "Track Chaos Insurgency activity",
      "Recieve breach intelligence",
      "Coordinate Internal Security and MTF"
    ],
    "O5-5 (MTF)": [
      "Activate Alpha Warhead",
      "Deploy Mobile Task Forces",
      "Authorize MTF entry",
      "Coordinate large-scale responses",
      "Support containment operations"
    ],
    "O5-7 (SD)": [
      "Activate Alpha Warhead",
      "Approve SCP testing",
      "Access high-risk SCP containment",
      "Coordinate Scientific Department",
      "Supervise experiment safety"
    ],
    "O5-9 (TD)": [
      "Activate Alpha Warhead",
      "Override facility systems",
      "Repair doors and electrical boxes",
      "Restore power and containment controls",
      "Maintain emergency systems in the control ceneter"
    ]
  },

  "Intelligence Agency": [
    "Watch the CCTV (SCP bodycam's too)",
    "Track Chaos Insurgency activity",
    "Relay breach alerts to the radio so O5 can activate the alarm",
    "Coordinate with Internal Security and O5"
  ]
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
