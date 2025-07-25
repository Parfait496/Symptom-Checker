// Symptom Checker App

const SYMPTOMS = [
  "Fever",
  "Fatigue",
  "Headache",
  "Cough",
  "Sore throat",
  "Shortness of breath",
  "Nausea",
  "Muscle aches",
  "Runny nose",
  "Loss of taste/smell"
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
