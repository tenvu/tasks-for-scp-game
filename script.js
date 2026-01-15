const data = {
  "Class D": [
    "Follow guards to testing areas",
    "Attempt escape through available routes",
    "Loot dropped keycards",
    "Avoid security patrols",
    "Survive hostile encounters",
    "Cooperate with Chaos Insurgency if freed"
  ],

  "Chaos Insurgency": [
    "Breach facility entrances",
    "Disable generators",
    "Sabotage security systems",
    "Free detained Class-D",
    "Engage Foundation security",
    "Hold surface zones"
  ],

  "Foundation Personnel": {
    "Kitchen Chef": [
      "Prepare food for staff",
      "Deliver meals to cafeterias",
      "Remain in safe zones",
      "Avoid active breach areas"
    ],
    "Ethics Committee": [
      "Observe Class-D treatment",
      "Monitor testing rooms",
      "Intervene in unethical testing",
      "Report violations"
    ],
    "External Affairs": [
      "Remain in administrative areas",
      "Monitor exposure risk",
      "Assist evacuation announcements",
      "Coordinate with command"
    ]
  },

  "Scientific Department": [
    "Conduct SCP testing",
    "Operate test chambers",
    "Escort Class-D during experiments",
    "Document SCP behavior",
    "Evacuate labs during breaches"
  ],

  "Medical Department": [
    "Heal injured personnel",
    "Revive downed allies",
    "Set up medical stations",
    "Escort wounded to safety",
    "Remain behind security lines"
  ],

  "Security Department": [
    "Patrol facility sectors",
    "Guard checkpoints",
    "Escort Class-D",
    "Respond to breach alarms",
    "Engage Chaos Insurgency",
    "Protect staff"
  ],

  "Internal Security": [
    "Monitor Foundation personnel",
    "Detain rogue staff",
    "Investigate suspicious behavior",
    "Assist O5 and Alpha-1",
    "Enforce internal lockdowns"
  ],

  "Intelligence Agency": [
    "Monitor facility communications",
    "Track Chaos movement",
    "Relay breach alerts",
    "Observe staff activity",
    "Coordinate with Internal Security"
  ],

  "Technical Department": [
    "Repair broken doors",
    "Fix keycard panels",
    "Restore generator power",
    "Repair lighting systems",
    "Fix elevators",
    "Maintain security cameras"
  ],

  "Facility Executive": [
    "Access administrative control rooms",
    "Authorize sector lockdowns",
    "Coordinate Security and Technical response",
    "Issue evacuation orders",
    "Override access when required",
    "Remain protected during breaches"
  ],

  "Mobile Task Force": {
    "Nu-7": [
      "Secure surface zones",
      "Respond to large-scale breaches",
      "Support Security Department",
      "Hold exterior areas"
    ],
    "Beta-7": [
      "Contain hazardous SCP zones",
      "Secure contaminated areas",
      "Escort scientists",
      "Support medical units"
    ],
    "Epsilon-11": [
      "Recontain escaped SCPs",
      "Sweep breached sectors",
      "Secure control rooms",
      "Enforce lockdowns"
    ],
    "Epsilon-9": [
      "Track hostile entities",
      "Secure forested zones",
      "Scout breach areas",
      "Support surface containment"
    ],
    "Tau-5": [
      "Engage extreme threats",
      "Secure high-risk zones",
      "Respond to catastrophic events",
      "Hold critical containment"
    ]
  },

  "Alpha-1": [
    "Protect O5 members",
    "Secure high-clearance zones",
    "Respond to critical alerts",
    "Eliminate internal threats",
    "Escort O5 movement"
  ],

  "O5 Council": {
    "O5-1 (FD)": [
      "Activate Alpha Warhead",
      "Authorize facility lockdowns",
      "Override all access levels",
      "Move freely between sectors",
      "Coordinate command response",
      "Remain protected by Alpha-1"
    ],
    "O5-2 (IS)": [
      "Activate Alpha Warhead",
      "Authorize internal lockdowns",
      "Detain Foundation personnel",
      "Coordinate Internal Security",
      "Override access restrictions"
    ],
    "O5-3 (A1)": [
      "Activate Alpha Warhead",
      "Command Alpha-1 units",
      "Secure O5 movement routes",
      "Respond to internal crises",
      "Override security systems"
    ],
    "O5-4 (IA)": [
      "Activate Alpha Warhead",
      "Monitor intelligence feeds",
      "Track Chaos activity",
      "Relay breach data",
      "Coordinate Internal Security response"
    ],
    "O5-5 (MTF)": [
      "Activate Alpha Warhead",
      "Deploy MTF units",
      "Authorize MTF entry",
      "Coordinate breach response",
      "Secure command zones"
    ],
    "O5-7 (SD)": [
      "Activate Alpha Warhead",
      "Approve SCP testing",
      "Monitor laboratory activity",
      "Evacuate labs during breaches",
      "Coordinate scientists"
    ],
    "O5-9 (TD)": [
      "Activate Alpha Warhead",
      "Repair facility systems",
      "Fix doors and keycard panels",
      "Restore generator switches",
      "Repair power in Sector 4",
      "Maintain emergency systems"
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
