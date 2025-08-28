// Symptom Checker App

const SYMPTOMS = [
  "Excess body fat",
  "Shortness of breath",
  "Joint pain",
  "Fatigue",
  "Frequent urination",
  "Increased thirst",
  "Blurred vision",
  "Headache",
  "Dizziness",
  "Nosebleeds",
  "Chest pain",
  "Palpitations",
  "Sudden weakness",
  "Slurred speech",
  "Loss of balance",
  "Facial drooping",
  "Leg pain during walking",
  "Weakness",
  "Bone fragility",
  "Frequent fractures",
  "Back pain",
  "Loss of height",
  "Joint stiffness",
  "Swelling",
  "Pain with movement",
  "Reduced mobility",
  "Persistent pain",
  "Muscle spasms",
  "Limited flexibility",
  "Abdominal discomfort",
  "Enlarged liver",
  "Mild jaundice",
  "Abdominal obesity",
  "High blood pressure",
  "High blood sugar",
  "High cholesterol",
  "Snoring",
  "Interrupted breathing during sleep",
  "Daytime fatigue",
  "Morning headache",
  "Persistent sadness",
  "Loss of interest",
  "Poor concentration",
  "Restlessness",
  "Racing thoughts",
  "Rapid heartbeat",
  "Sleep problems",
  "Insomnia",
  "Muscle tension",
  "Weakened immunity",
  "Abdominal pain",
  "Bloating",
  "Nausea",
  "Loss of appetite",
  "Heartburn",
  "Regurgitation",
  "Chest discomfort",
  "Cough",
  "Diarrhea",
  "Constipation",
  "Gas",
  "Hard stools",
  "Straining",
  "Severe joint pain",
  "Redness",
  "Tenderness",
  "Pale skin",
  "Dizziness",
  "Bone pain",
  "Frequent infections",
  "Memory loss",
  "Confusion",
  "Difficulty problem-solving",
  "Personality changes",
  "Tremors",
  "Slowness of movement",
  "Balance issues",
  "Changes in urination",
  "Loss of appetite",
  "Chronic cough",
  "Wheezing",
  "Unexplained weight loss",
  "Blood in stool",
  "Skin redness",
  "Scaly patches",
  "Itching",
  "Discomfort",
  "Severe headache",
  "Sensitivity to light/sound",
  "Visual disturbances"
];


const CONDITIONS = [
  {
    name: "Common Cold",
    symptoms: ["Cough", "Sore throat", "Runny nose", "Fatigue"],
    severity: "Mild",
    advice: "Rest, stay hydrated, and monitor symptoms. Usually resolves at home."
  },
  {
    name: "Flu (Influenza)",
    symptoms: ["Fever", "Fatigue", "Headache", "Cough", "Muscle aches"],
    severity: "Moderate",
    advice: "Rest, fluids, and over-the-counter meds. See a doctor if symptoms worsen."
  },
  {
    name: "COVID-19",
    symptoms: ["Fever", "Cough", "Fatigue", "Loss of taste/smell", "Shortness of breath", "Headache"],
    severity: "Varies",
    advice: "Isolate, monitor symptoms, and seek medical advice if breathing is difficult."
  },
  {
    name: "Strep Throat",
    symptoms: ["Sore throat", "Fever", "Headache"],
    severity: "Mild-Moderate",
    advice: "Consult a doctor for possible antibiotics."
  },
  {
    name: "Migraine",
    symptoms: ["Headache", "Nausea", "Fatigue"],
    severity: "Mild-Moderate",
    advice: "Rest in a dark room, stay hydrated, and use pain relief if needed."
  },
  {
    name: "Pneumonia",
    symptoms: ["Fever", "Cough", "Shortness of breath", "Fatigue"],
    severity: "Severe",
    advice: "Seek urgent medical care, especially if breathing is difficult."
  },
  {
    name: "Obesity",
    symptoms: ["Excess body fat", "Shortness of breath", "Joint pain", "Fatigue"],
    severity: "Severe",
    advice: "Adopt a balanced diet, increase physical activity, reduce sugar intake, consult a nutritionist."
  },
  {
    name: "Type 2 Diabetes",
    symptoms: ["Frequent urination", "Increased thirst", "Fatigue", "Blurred vision"],
    severity: "Severe",
    advice: "Maintain healthy weight, reduce refined carbs, exercise regularly, monitor blood glucose."
  },
  {
    name: "Hypertension",
    symptoms: ["Headache", "Dizziness", "Nosebleeds", "Blurred vision"],
    severity: "Moderate to Severe",
    advice: "Reduce salt intake, exercise daily, manage stress, avoid alcohol and smoking."
  },
  {
    name: "Coronary Artery Disease",
    symptoms: ["Chest pain", "Shortness of breath", "Fatigue", "Palpitations"],
    severity: "Severe",
    advice: "Engage in aerobic exercise, eat a heart-healthy diet, avoid smoking, manage stress."
  },
  {
    name: "Stroke",
    symptoms: ["Sudden weakness", "Slurred speech", "Loss of balance", "Facial drooping"],
    severity: "Critical",
    advice: "Control blood pressure, reduce alcohol, eat healthy, seek immediate care if symptoms start."
  },
  {
    name: "Atherosclerosis",
    symptoms: ["Chest pain", "Leg pain during walking", "Fatigue", "Weakness"],
    severity: "Severe",
    advice: "Eat fiber-rich foods, avoid trans fats, exercise, manage cholesterol."
  },
  {
    name: "Osteoporosis",
    symptoms: ["Bone fragility", "Frequent fractures", "Back pain", "Loss of height"],
    severity: "Moderate to Severe",
    advice: "Increase calcium and vitamin D intake, perform weight-bearing exercises, avoid smoking."
  },
  {
    name: "Osteoarthritis",
    symptoms: ["Joint stiffness", "Swelling", "Pain with movement", "Reduced mobility"],
    severity: "Moderate",
    advice: "Maintain healthy weight, stay active with low-impact exercises, use joint support if needed."
  },
  {
    name: "Chronic Back Pain",
    symptoms: ["Persistent pain", "Stiffness", "Muscle spasms", "Limited flexibility"],
    severity: "Moderate",
    advice: "Improve posture, strengthen core muscles, avoid prolonged sitting, stretch daily."
  },
  {
    name: "Fatty Liver Disease",
    symptoms: ["Fatigue", "Abdominal discomfort", "Enlarged liver", "Mild jaundice"],
    severity: "Moderate to Severe",
    advice: "Lose weight gradually, avoid alcohol, eat balanced diet, exercise regularly."
  },
  {
    name: "Metabolic Syndrome",
    symptoms: ["Abdominal obesity", "High blood pressure", "High blood sugar", "High cholesterol"],
    severity: "Severe",
    advice: "Exercise, adopt low-sugar diet, avoid processed foods, monitor health regularly."
  },
  {
    name: "Sleep Apnea",
    symptoms: ["Snoring", "Interrupted breathing during sleep", "Daytime fatigue", "Morning headache"],
    severity: "Severe",
    advice: "Lose weight, avoid alcohol before bed, sleep on your side, seek medical evaluation."
  },
  {
    name: "Depression",
    symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Poor concentration"],
    severity: "Severe",
    advice: "Engage in physical activity, practice relaxation, seek therapy, maintain social connections."
  },
  {
    name: "Anxiety Disorder",
    symptoms: ["Restlessness", "Racing thoughts", "Rapid heartbeat", "Sleep problems"],
    severity: "Moderate",
    advice: "Practice mindfulness, reduce caffeine, exercise, consider counseling."
  },
  {
    name: "Chronic Stress Disorder",
    symptoms: ["Headaches", "Insomnia", "Muscle tension", "Weakened immunity"],
    severity: "Moderate",
    advice: "Meditation, yoga, balanced work-life, proper sleep hygiene."
  },
  {
    name: "Gastritis",
    symptoms: ["Abdominal pain", "Bloating", "Nausea", "Loss of appetite"],
    severity: "Moderate",
    advice: "Avoid spicy foods, reduce alcohol, manage stress, eat smaller meals."
  },
  {
    name: "Gastroesophageal Reflux Disease (GERD)",
    symptoms: ["Heartburn", "Regurgitation", "Chest discomfort", "Cough"],
    severity: "Moderate",
    advice: "Avoid fatty foods, elevate head while sleeping, eat smaller meals, avoid late-night eating."
  },
  {
    name: "Irritable Bowel Syndrome (IBS)",
    symptoms: ["Abdominal pain", "Bloating", "Diarrhea/constipation", "Gas"],
    severity: "Mild to Moderate",
    advice: "Increase fiber gradually, manage stress, avoid trigger foods, stay hydrated."
  },
  {
    name: "Chronic Constipation",
    symptoms: ["Hard stools", "Straining", "Abdominal discomfort", "Infrequent bowel movements"],
    severity: "Mild to Moderate",
    advice: "Eat fiber-rich foods, drink plenty of water, exercise, maintain routine."
  },
  {
    name: "Gout",
    symptoms: ["Severe joint pain", "Swelling", "Redness", "Tenderness"],
    severity: "Moderate",
    advice: "Reduce red meat, avoid alcohol, hydrate well, maintain healthy weight."
  },
  {
    name: "Anemia (Iron Deficiency)",
    symptoms: ["Fatigue", "Pale skin", "Shortness of breath", "Dizziness"],
    severity: "Moderate",
    advice: "Eat iron-rich foods, take supplements if needed, treat underlying causes."
  },
  {
    name: "Vitamin D Deficiency",
    symptoms: ["Bone pain", "Weakness", "Frequent infections", "Depression"],
    severity: "Mild to Moderate",
    advice: "Get sunlight exposure, consume fortified foods, take supplements if needed."
  },
  {
    name: "Alzheimer’s Disease",
    symptoms: ["Memory loss", "Confusion", "Difficulty problem-solving", "Personality changes"],
    severity: "Severe",
    advice: "Stay mentally active, exercise, eat brain-healthy diet, manage vascular risk factors."
  },
  {
    name: "Parkinson’s Disease",
    symptoms: ["Tremors", "Slowness of movement", "Muscle stiffness", "Balance issues"],
    severity: "Severe",
    advice: "Regular exercise, physical therapy, medications, maintain supportive environment."
  },
  {
    name: "Chronic Kidney Disease",
    symptoms: ["Swelling", "Fatigue", "Changes in urination", "Loss of appetite"],
    severity: "Severe",
    advice: "Control blood pressure and sugar, avoid high-salt diet, stay hydrated, consult a nephrologist."
  },
  {
    name: "COPD (Chronic Obstructive Pulmonary Disease)",
    symptoms: ["Chronic cough", "Wheezing", "Shortness of breath", "Fatigue"],
    severity: "Severe",
    advice: "Quit smoking, exercise breathing techniques, avoid pollutants, follow medical care."
  },
  {
    name: "Cancer (Lifestyle-Linked, e.g., Colon Cancer)",
    symptoms: ["Unexplained weight loss", "Blood in stool", "Fatigue", "Abdominal pain"],
    severity: "Critical",
    advice: "Eat fiber-rich foods, avoid processed meats, maintain exercise, get screenings."
  },
  {
    name: "Psoriasis (Stress-Linked)",
    symptoms: ["Skin redness", "Scaly patches", "Itching", "Discomfort"],
    severity: "Mild to Moderate",
    advice: "Manage stress, moisturize skin, avoid alcohol, follow dermatology care."
  },
  {
    name: "Migraine",
    symptoms: ["Severe headache", "Nausea", "Sensitivity to light/sound", "Visual disturbances"],
    severity: "Moderate to Severe",
    advice: "Identify triggers, manage stress, maintain regular sleep, stay hydrated."
  }


 
];

const app = document.getElementById('app');

function renderWelcome() {
  app.innerHTML = `
    <h1>Symptom Checker</h1>
    <p>Check your health by selecting your symptoms and get possible condition suggestions with recommendations. This tool does not replace professional medical advice.</p>
    <button id="startBtn" class="primary-btn">Start</button>
  `;
  document.getElementById('startBtn').onclick = renderSymptomInput;
}

function renderSymptomInput() {
  app.innerHTML = `
    <h2>Select Your Symptoms</h2>
    <form id="symptomForm">
      <div class="symptom-list">
        ${SYMPTOMS.map(symptom => `
          <label><input type="checkbox" name="symptom" value="${symptom}"> ${symptom}</label>
        `).join('')}
      </div>
      <button type="submit" class="primary-btn">Check</button>
      <button type="button" id="backBtn" class="secondary-btn">Back</button>
    </form>
  `;
  document.getElementById('symptomForm').onsubmit = handleSymptomSubmit;
  document.getElementById('backBtn').onclick = renderWelcome;
}

function handleSymptomSubmit(e) {
  e.preventDefault();
  const checked = Array.from(document.querySelectorAll('input[name="symptom"]:checked')).map(cb => cb.value);
  renderResults(checked);
}

function renderResults(selectedSymptoms) {
  if (selectedSymptoms.length === 0) {
    app.innerHTML = `
      <h2>No symptoms selected</h2>
      <p>Please select at least one symptom.</p>
      <button class="primary-btn" onclick="renderSymptomInput()">Back</button>
    `;
    return;
  }
  // Match conditions by number of overlapping symptoms
  const matches = CONDITIONS.map(cond => {
    const overlap = cond.symptoms.filter(s => selectedSymptoms.includes(s));
    return { ...cond, matchCount: overlap.length };
  }).filter(c => c.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount);

  app.innerHTML = `
    <h2>Possible Conditions</h2>
    <ul class="results-list">
      ${matches.length === 0 ? '<li>No likely conditions found. Please consult a healthcare provider.</li>' :
        matches.map(cond => `
          <li class="result-card">
            <h3>${cond.name}</h3>
            <p><strong>Severity:</strong> <span class="severity ${cond.severity.toLowerCase()}">${cond.severity}</span></p>
            <p><strong>Recommendation:</strong> ${cond.advice}</p>
            <p><strong>Matched symptoms:</strong> ${cond.matchCount} / ${cond.symptoms.length}</p>
          </li>
        `).join('')}
    </ul>
    <button class="primary-btn" onclick="renderSymptomInput()">Check Again</button>
    <button class="secondary-btn" onclick="renderWelcome()">Home</button>
  `;
}

// Initial render
renderWelcome();

// Expose for inline event handlers
window.renderSymptomInput = renderSymptomInput;
window.renderWelcome = renderWelcome;
