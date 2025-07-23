const preguntas = [
  // EXAMEN 1 – Fundamentos Generales de la Vacunación
  { examen: 1, pregunta: "¿Cuál es el objetivo general de la Norma Técnica de Salud sobre el Esquema Nacional de Vacunación?", opciones: ["Eliminar enfermedades crónicas", "Fortalecer el comercio internacional de vacunas", "Establecer un esquema nacional obligatorio", "Crear nuevas vacunas"], respuesta: 2 },
  { examen: 1, pregunta: "¿Qué es la anafilaxia?", opciones: ["Un tipo de antígeno", "Una reacción alérgica grave", "Una enfermedad erradicada", "Un tipo de vacuna"], respuesta: 1 },
  { examen: 1, pregunta: "¿Qué es un antígeno T-independiente?", opciones: ["Requiere linfocitos T", "No requiere linfocitos T", "Solo está en bacterias", "Es una proteína inmunitaria"], respuesta: 1 },
  { examen: 1, pregunta: "¿Qué población no se considera vulnerable?", opciones: ["Gestantes", "Personas privadas de libertad", "Estudiantes universitarios sanos", "Personas con discapacidad"], respuesta: 2 },
  { examen: 1, pregunta: "¿Qué es un ESAVI?", opciones: ["Error de aplicación", "Evento Supuestamente Atribuido a Vacunación o Inmunización", "Enfermedad viral erradicada", "Vacuna inactivada"], respuesta: 1 },
  { examen: 1, pregunta: "¿Qué es inmunogenicidad?", opciones: ["Capacidad de inducir respuesta inmune", "Capacidad de resistir enfermedades", "Proceso de almacenamiento", "Técnica de aplicación"], respuesta: 0 },
  { examen: 1, pregunta: "¿Qué significa vacuna inactivada?", opciones: ["Contiene virus vivos", "Contiene patógenos muertos o inactivados", "Tiene mayor riesgo", "Solo es para adultos"], respuesta: 1 },
  { examen: 1, pregunta: "¿Qué vacuna previene la tuberculosis?", opciones: ["BCG", "DPT", "SRP", "HB"], respuesta: 0 },
  { examen: 1, pregunta: "¿Qué es el biológico en vacunación?", opciones: ["Sustancia preparada para inducir inmunidad", "Antibiótico", "Hormona", "Suero"], respuesta: 0 },
  { examen: 1, pregunta: "¿Qué se debe verificar antes de vacunar?", opciones: ["Hora exacta", "Estado de salud y antecedentes", "Grupo sanguíneo", "Exámenes de laboratorio"], respuesta: 1 },
  { examen: 1, pregunta: "¿Qué es la cadena de frío?", opciones: ["Transporte de vacunas", "Sistema para conservar vacunas a temperatura adecuada", "Lugar donde se almacenan medicamentos", "Proceso de esterilización"], respuesta: 1 },
  { examen: 1, pregunta: "¿Qué institución coordina el PAI en Perú?", opciones: ["MINSA", "ESSALUD", "OPS", "MIMP"], respuesta: 0 },
  { examen: 1, pregunta: "¿Qué es un brote?", opciones: ["Casos aislados", "Aumento inesperado de casos de enfermedad", "Evento adverso", "Prueba de laboratorio"], respuesta: 1 },
  { examen: 1, pregunta: "¿Qué vacuna requiere dosis única al nacer?", opciones: ["BCG", "Pentavalente", "Polio", "SRP"], respuesta: 0 },
  { examen: 1, pregunta: "¿Qué vacuna previene tétanos?", opciones: ["HB", "DPT", "Neumococo", "SRP"], respuesta: 1 },
  { examen: 1, pregunta: "¿Qué edad mínima para vacuna pentavalente?", opciones: ["Al nacer", "1 mes", "2 meses", "6 meses"], respuesta: 2 },
  { examen: 1, pregunta: "¿Qué es vacuna combinada?", opciones: ["Contiene varios antígenos en una sola inyección", "Contiene antibióticos", "Se da con alimentos", "Es experimental"], respuesta: 0 },
  { examen: 1, pregunta: "¿Qué vacuna se aplica por vía oral?", opciones: ["Polio oral (APO/Sabin)", "HB", "SRP", "IPV"], respuesta: 0 },
  { examen: 1, pregunta: "¿Qué vacuna se aplica por vía intradérmica?", opciones: ["BCG", "IPV", "Pentavalente", "Neumococo"], respuesta: 0 },
  { examen: 1, pregunta: "¿Qué se considera contraindicación temporal?", opciones: ["Alergia severa", "Fiebre alta", "Embarazo", "VIH"], respuesta: 1 },

  // EXAMEN 2 – Vacunas del Esquema Nacional
  { examen: 2, pregunta: "¿Qué tipo de vacuna es la BCG?", opciones: ["Inactivada", "Virus vivos atenuados", "Toxoide", "Recombinante"], respuesta: 1 },
  { examen: 2, pregunta: "¿Cuál es la vía de administración de la BCG?", opciones: ["Subcutánea", "Oral", "Intradérmica", "Intramuscular"], respuesta: 2 },
  { examen: 2, pregunta: "¿Qué vacuna es de administración oral?", opciones: ["Hepatitis B", "Polio oral (APO/Sabin)", "Influenza", "Hib"], respuesta: 1 },
  { examen: 2, pregunta: "¿Qué vacunas incluye la pentavalente?", opciones: ["Difteria, tétanos, hepatitis A, influenza, sarampión", "Difteria, tétanos, pertussis, hepatitis B, Hib", "Difteria, rotavirus, neumococo, hepatitis B, rubeola", "Sarampión, varicela, tétanos, polio, hepatitis B"], respuesta: 1 },
  { examen: 2, pregunta: "¿Cuál de estas vacunas se recomienda en mayores de 60 años?", opciones: ["Varicela", "Hepatitis A", "Neumocócica", "Rotavirus"], respuesta: 2 },
  { examen: 2, pregunta: "¿Cuál es la edad para vacuna de influenza estacional?", opciones: ["6 meses", "Desde los 7 meses", "2 años", "5 años"], respuesta: 1 },
  { examen: 2, pregunta: "¿Cuántas dosis tiene el esquema básico de polio (IPV)?", opciones: ["2", "3", "4", "1"], respuesta: 1 },
  { examen: 2, pregunta: "¿Qué vacuna previene la hepatitis B?", opciones: ["HB", "DPT", "SRP", "APO"], respuesta: 0 },
  { examen: 2, pregunta: "¿Qué vacuna protege contra sarampión, rubéola y paperas?", opciones: ["SRP", "Pentavalente", "Neumococo", "HB"], respuesta: 0 },
  { examen: 2, pregunta: "¿Qué vía se usa para IPV?", opciones: ["Oral", "Intramuscular", "Subcutánea", "Intradérmica"], respuesta: 1 },
  { examen: 2, pregunta: "¿Qué vacuna es toxoide?", opciones: ["BCG", "Pentavalente", "Difteria y tétanos", "Influenza"], respuesta: 2 },
  { examen: 2, pregunta: "¿Qué vacuna se aplica a escolares de 5 años?", opciones: ["SRP refuerzo", "IPV", "DPT", "HB"], respuesta: 0 },
  { examen: 2, pregunta: "¿Qué vacuna protege contra Hib?", opciones: ["Pentavalente", "BCG", "SRP", "IPV"], respuesta: 0 },
  { examen: 2, pregunta: "¿Qué vacuna es obligatoria al nacer?", opciones: ["HB y BCG", "HB y DPT", "BCG y SRP", "BCG y IPV"], respuesta: 0 },
  { examen: 2, pregunta: "¿Qué vacuna previene rotavirus?", opciones: ["Vacuna rotavirus oral", "DPT", "Neumococo", "IPV"], respuesta: 0 },
  { examen: 2, pregunta: "¿Cuántas dosis tiene rotavirus?", opciones: ["1", "2", "3", "4"], respuesta: 1 },
  { examen: 2, pregunta: "¿A qué edad se inicia rotavirus?", opciones: ["Al nacer", "2 meses", "6 meses", "12 meses"], respuesta: 1 },
  { examen: 2, pregunta: "¿Qué edad límite para rotavirus?", opciones: ["6 meses", "8 meses", "12 meses", "18 meses"], respuesta: 1 },
  { examen: 2, pregunta: "¿Qué vacuna no debe aplicarse si hay fiebre alta?", opciones: ["Cualquier vacuna", "Solo pentavalente", "SRP", "IPV"], respuesta: 0 },
  { examen: 2, pregunta: "¿Qué vacuna se aplica en mujeres embarazadas?", opciones: ["BCG", "DTPa", "HB", "SRP"], respuesta: 1 },

  // EXAMEN 3 – Dosis, Edades y Contraindicaciones
  { examen: 3, pregunta: "¿Cuál es la dosis de la vacuna contra Hepatitis B para recién nacidos?", opciones: ["1 ml", "0.5 ml", "0.2 ml", "2 gotas"], respuesta: 1 },
  { examen: 3, pregunta: "¿Cuándo debe aplicarse la vacuna contra Hepatitis B al recién nacido?", opciones: ["Antes del primer mes", "Dentro de las 24 horas", "A los 7 días", "Al mes"], respuesta: 1 },
  { examen: 3, pregunta: "¿A qué edad se aplica la primera dosis de la pentavalente?", opciones: ["Al nacer", "1 mes", "2 meses", "4 meses"], respuesta: 2 },
  { examen: 3, pregunta: "¿Cuál es el intervalo entre dosis de pentavalente?", opciones: ["2 semanas", "4 semanas o más", "3 días", "Sin intervalo"], respuesta: 1 },
  { examen: 3, pregunta: "¿Qué vacuna no se aplica en inmunodeprimidos?", opciones: ["Pentavalente", "IPV", "BCG", "Hepatitis B"], respuesta: 2 },
  { examen: 3, pregunta: "¿Cuántas dosis de HB en recién nacidos?", opciones: ["1", "2", "3", "4"], respuesta: 0 },
  { examen: 3, pregunta: "¿Qué es una contraindicación absoluta?", opciones: ["Fiebre", "Anafilaxia previa", "Gripe leve", "Diarrea"], respuesta: 1 },
  { examen: 3, pregunta: "¿Qué hacer ante reacción adversa grave?", opciones: ["Reportar ESAVI", "Ignorar", "Aislar", "Revacunar"], respuesta: 0 },
  { examen: 3, pregunta: "¿Qué vacuna se aplica con jeringa sin aguja?", opciones: ["BCG", "DTP", "SRP", "IPV"], respuesta: 0 },
  { examen: 3, pregunta: "¿Qué vacuna es obligatoria a los 18 meses?", opciones: ["Refuerzo pentavalente", "BCG", "Hepatitis B", "SRP"], respuesta: 0 },
  { examen: 3, pregunta: "¿Qué es una vacuna monovalente?", opciones: ["Protege contra un solo agente", "Tiene varias dosis", "Solo oral", "Siempre combinada"], respuesta: 0 },
  { examen: 3, pregunta: "¿Qué se evalúa antes de vacunar?", opciones: ["Talla", "Historia clínica y signos vitales", "Peso solamente", "Sexo"], respuesta: 1 },
  { examen: 3, pregunta: "¿Qué vacuna previene neumococo?", opciones: ["DTP", "Neumocócica conjugada", "IPV", "Hepatitis B"], respuesta: 1 },
  { examen: 3, pregunta: "¿A qué edad inicia neumocócica conjugada?", opciones: ["Al nacer", "1 mes", "2 meses", "4 meses"], respuesta: 2 },
  { examen: 3, pregunta: "¿Qué vacuna es contraindicada en embarazo?", opciones: ["DTPa", "SRP", "Hepatitis B", "Neumococo"], respuesta: 1 },
  { examen: 3, pregunta: "¿Qué vacuna requiere agitación antes de usar?", opciones: ["Pentavalente", "IPV", "Hepatitis B", "SRP"], respuesta: 0 },
  { examen: 3, pregunta: "¿Qué tipo de vacuna es SRP?", opciones: ["Inactivada", "Atenuada", "Recombinante", "Toxoide"], respuesta: 1 },
  { examen: 3, pregunta: "¿Qué es una revacunación?", opciones: ["Aplicación de nueva vacuna", "Dosis adicional tras esquema", "Error técnico", "Emergencia"], respuesta: 1 },
  { examen: 3, pregunta: "¿Qué vacuna se aplica solo una vez en la vida?", opciones: ["BCG", "Pentavalente", "IPV", "SRP"], respuesta: 0 },
  { examen: 3, pregunta: "¿Qué vacuna se administra en forma secuencial con IPV?", opciones: ["Hepatitis B", "Polio oral (APO/Sabin)", "DPT", "BCG"], respuesta: 1 }
];

let nombreUsuario = "";
let examenActual = 1;
let resultadoTotal = [];
let showFeedback = true; // Toggle to enable/disable correctness feedback

function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

function iniciarExamen() {
  let rawInput = document.getElementById("nombre").value.trim();
  nombreUsuario = sanitizeInput(rawInput);
  if (!nombreUsuario) {
    alert("Por favor, ingresa tu nombre.");
    return;
  }
  document.getElementById("inicio").classList.add("hidden");
  mostrarExamen(examenActual);
}

const examNames = {
  1: "Fundamentos, Conceptos y Definiciones Generales",
  2: "Características y Tipos de Vacunas del Esquema Nacional",
  3: "Esquemas de Vacunación, Indicaciones y Contraindicaciones"
};

function mostrarExamen(numExamen) {
  const contenedor = document.getElementById("examen");
  const examTitle = examNames[numExamen] || `Examen ${numExamen}`;
  contenedor.innerHTML = `<h2>EXAMEN ${numExamen}: ${examTitle}</h2>`;
  preguntas.filter(p => p.examen === numExamen).forEach((p, i) => {
    contenedor.innerHTML += `
      <div class="question">
        <h3>${i + 1}. ${p.pregunta}</h3>
        <div class="options">
          ${p.opciones.map((op, idx) => `
            <label><input type="radio" name="preg${i}" value="${idx}"> ${op}</label>
          `).join('')}
        </div>
      </div>
    `;
  });
  contenedor.innerHTML += `<button onclick="evaluar(${numExamen})">Enviar Examen</button>`;
  contenedor.classList.remove("hidden");
  document.getElementById("resultado").classList.add("hidden");
}

function evaluar(examen) {
  const contenedor = document.getElementById("resultado");
  const preguntasExamen = preguntas.filter(p => p.examen === examen);
  let correctas = 0;
  let incorrectasHTML = "";

  preguntasExamen.forEach((p, i) => {
    const r = document.querySelector(`input[name='preg${i}']:checked`);
    const valor = r ? parseInt(r.value) : -1;
    if (showFeedback) {
      if (valor === p.respuesta) {
        correctas++;
      } else {
        incorrectasHTML += `<p class='incorrect'><b>${i + 1}. ${p.pregunta}</b><br>Tu respuesta: ${p.opciones[valor] || 'No respondida'}<br>Correcta: ${p.opciones[p.respuesta]}</p>`;
      }
    } else {
      // If feedback disabled, just count answered questions as correct for faster navigation
      if (valor !== -1) {
        correctas++;
      }
    }
  });

  const puntaje = Math.round((correctas / preguntasExamen.length) * 100);
  resultadoTotal.push(puntaje);

  let mensaje = puntaje >= 70
    ? `✅ ¡Bien hecho ${nombreUsuario}! Has aprobado el Examen ${examen}.`
    : `❌ Lo sentimos ${nombreUsuario}, no has alcanzado el puntaje mínimo (70%).`;

  contenedor.innerHTML = `<h2>Resultado del Examen ${examen}</h2><p>${mensaje}</p><p>Puntaje: ${puntaje}%</p>`;
  if (showFeedback) {
    contenedor.innerHTML += `<h3>Revisión:</h3>${incorrectasHTML}`;
  }
  document.getElementById("examen").classList.add("hidden");
  contenedor.classList.remove("hidden");

  if (puntaje >= 70 && examen < 3) {
    examenActual++;
    contenedor.innerHTML += `<button onclick='mostrarExamen(${examenActual})'>Ir al Examen ${examenActual}</button>`;
  } else if (puntaje < 70) {
    contenedor.innerHTML += `<button onclick='mostrarExamen(${examen})'>Volver a dar el Examen ${examen}</button>`;
  } else if (examen === 3) {
    mostrarResultadoFinal();
  }
}

function mostrarResultadoFinal() {
  const contenedor = document.getElementById("resultado");
  const promedio = Math.round(resultadoTotal.reduce((a, b) => a + b) / resultadoTotal.length);
  let mensajeFinal = promedio >= 70
    ? `🎓 ¡Felicidades ${nombreUsuario}! Has completado satisfactoriamente todos los exámenes.`
    : `📘 Gracias por participar, ${nombreUsuario}. Te animamos a seguir estudiando y volver a intentarlo.`;

  // Prepare individual exam scores display
  let examScoresHTML = '';
  for (let i = 1; i <= 3; i++) {
    const score = resultadoTotal[i - 1];
    const examTitle = examNames[i] || `Examen ${i}`;
    if (score !== undefined) {
      examScoresHTML += `<p>Puntaje ${examTitle}: <strong>${score}%</strong></p>`;
    }
  }

  let detalles = `
    <p>Has completado ${resultadoTotal.length} examen(es).</p>
    <p>Tu promedio general es <strong>${promedio}%</strong>.</p>
    ${examScoresHTML}
    <p>${promedio >= 70 ? '¡Excelente trabajo! Sigue así para mantener tus conocimientos actualizados.' : 'No te desanimes, repasa los temas y vuelve a intentarlo.'}</p>
    <p>Recuerda que la vacunación es fundamental para la salud pública y la prevención de enfermedades.</p>
    <img src="img/imagen1.jpg" alt="Imagen Final" class="animated-image bottom-image" style="margin-top: 20px; max-width: 100%; height: auto;">
  `;

  contenedor.innerHTML += `
    <hr>
    <h2>Resultado Final</h2>
    <p>${mensajeFinal}</p>
    <p>Promedio Total: ${promedio}%</p>
    <div>${detalles}</div>
  `;
}
