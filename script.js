const data = {
  "Class-D": [
    "Stay in the CDC and do jobs like cleaning or mining",
    "Riot with other Class-D when possible",
    "Turn off generators and sabotage the facility",
    "Kill guards and take their guns",
    "Try to escape the CDC",
    "Join Chaos Insurgency if they free you"
  ],

  "Chaos Insurgency": [
    "Breach SCP containment",
    "Free Class-D from the CDC",
    "Kill Foundation personnel",
    "Sabotage generators",
    "Help escaping Class-D",
    "Cause chaos inside the facility(You're SO mean)"
  ],

  "Security Department": [
    "Guard the CDC entrance",
    "Prevent Class-D riots",
    "Escort Class-D to testing",
    "Kill Chaos Insurgency",
    "Protect Foundation staff"
  ],

  "Internal Security": [
    "Arrest staff breaking the rules",
    "Detain staff who help Class-D or breach SCPs",
    "Interrogate rule breakers",
    "Switch teams because this role sucks"
  ],

  "Medical Department": [
    "Heal injured personnel",
    "Revive dead players",
    "Support Foundation forces during combat"
  ],

  "Technical Department": [
    "Fix doors destroyed by SCPs",
    "Repair generators sabotaged by CI",
    "Fix electrical outlets shot by CI",
    "Clean graffiti off walls"
  ],

  "Scientific Department": [
    "Use Class-D as test subjects",
    "Watch Class-D freak during dangerous SCP tests"
  ],

  "Foundation Personnel": {
    "Foundation Personnel": [
      "Stand around and watch tests",
      "Serve as XP for hostile teams",
      "You are pointless bru"
    ],
    "Kitchen Chef": [
      "Cook beetroot soup in the CDC cafeteria"
    ],
    "Ethics Committee": [
      "Watch SCP tests",
      "Make sure scientists do not unauthorize players when they're out of CDC"
    ],
    "External Affairs": [
      "Do nothing"
    ]
  },

  "Facility Executive": [
    "Watch all facility operations",
    "Watch Class-D testing",
    "Guard the CDC exit from the outside",
    "Shoot escaping Class-D",
    "Call out broken systems to Technical Department",
    "Report dead players to Medical Department",
    "Announce SCP breaches, Chaos raids, and riots"
  ],

  "Mobile Task Force": {
    "Nu-7": [
      "Guard checkpoints",
      "Guard the CDC door",
      "Kill Chaos Insurgency",
      "Kill escaping Class-D",
      "Recontain SCPs",
      "Recontain SCP-106 by entering his Containment Cell"
    ],
    "Beta-7": [
      "Guard checkpoints",
      "Guard the CDC door",
      "Kill Chaos Insurgency",
      "Kill escaping Class-D",
      "Recontain SCPs",
      "Recontain SCP-106 by entering his Containment Cell"
    ],
    "Epsilon-11": [
      "Guard checkpoints",
      "Guard the CDC door",
      "Kill Chaos Insurgency",
      "Kill escaping Class-D",
      "Recontain SCPs",
      "Recontain SCP-106 by entering his Containment Cell"
    ],
    "Epsilon-9": [
      "Guard checkpoints",
      "Guard the CDC door",
      "Kill Chaos Insurgency",
      "Kill escaping Class-D",
      "Recontain SCPs",
      "Recontain SCP-106 by entering his Containment Cell"
    ],
    "Tau-5": [
      "Guard checkpoints",
      "Guard the CDC door",
      "Kill Chaos Insurgency",
      "Kill escaping Class-D",
      "Bag SCP-096",
      "Recontain SCPs",
      "Recontain SCP-106 by entering his Containment Cell"
    ]
  },

  "Alpha-1": [
    "Protect O5 members",
    "Kill/Recontain hostile SCPs",
    "Kill Chaos Insurgency",
    "Kill rogue Class-D",
    "Gain XP for guarding O5"
  ],

  "O5 Council": {
    "O5-1 (Facility Executive)": [
      "Control the entire facility",
      "Guard the CDC",
      "Respond to all threats"
    ],
    "O5-2 (Internal Security)": [
      "Arrest rule-breaking staff",
      "Use the control center",
      "Monitor CCTV",
      "Track broken generators",
      "Tell Technical Department about issues over the radio"
    ],
    "O5-3 (Alpha-1)": [
      "Protect O5 members",
      "Kill Chaos Insurgency",
      "Kill rogue Class-D",
      "Respond to facility threats",
      "Assist any department when needed"
    ],
    "O5-4 (Intelligence Agency)": [
      "Guard the CDC door",
      "Guard the Sector 1 checkpoint",
      "Check for Chaos Insurgency raiding",
      "Kill escaping Class-D"
    ],
    "O5-5 (Mobile Task Force)": [
      "Guard the CDC",
      "Kill Chaos Insurgency",
      "Kill rogue Class-D",
      "Recontain SCPs"
    ],
    "O5-6 (Security Department)": [
      "Guard the CDC",
      "Prevent riots",
      "Kill escaping Class-D",
      "Kill Chaos Insurgency"
    ],
    "O5-7 (Scientific Department)": [
      "Use Class-D for SCP testing",
      "Bring Class-D to Sector 4 for Keter tests"
    ],
    "O5-8 (Medical Department)": [
      "Heal injured personnel",
      "Revive dead players"
    ],
    "O5-9 (Technical Department)": [
      "Repair broken doors",
      "Fix generators",
      "Restore power"
    ],
    "O5-10 (Ethics Committee)": [
      "Watch SCP tests",
      "Ensure testing rules are followed"
    ],
    "O5-11 (External Affairs)": [
      "Do nothing"
    ]
  },

  "Intelligence Agency": [
    "Track Chaos Insurgency through walls",
    "Recontain SCPs",
    "Kill Chaos Insurgency",
    "Kill hostile Class-D",
    "Respond when walls or vents are destroyed"
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
