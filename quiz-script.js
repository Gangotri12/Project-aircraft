// Question Database
const quizData = [
    {
        question: "Which country engineered and operates the Rafale omnirole fighter jet?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Rafale_-_RIAT_2009_%283751416421%29.jpg/1920px-Rafale_-_RIAT_2009_%283751416421%29.jpg",
        options: ["Russia", "United States", "France", "United Kingdom"],
        correct: 2
    },
    {
        question: "What unique aerodynamic design feature distinguishes the Mirage 2000 and HAL Tejas?",
        image:"https://pbs.twimg.com/media/FY0rcmRaIAAkJL3?format=jpg&name=900x900",
        options: ["Variable-sweep wings", "Delta-wing configuration", "Forward-swept wings", "Tandem rotor layout"],
        correct: 1
    },
    {
        question: "What is the approximate maximum design speed of the F-22 Raptor?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg/1280px-F-22_Raptor_edit1_%28cropped%29.jpg",
        options: ["Mach 1.20", "Mach 1.65", "Mach 2.25", "Mach 3.10"],
        correct: 2
    },
    {
        question: "Which Indian military helicopter is capable of operating at altitudes over 16,000 feet in the Himalayas?",
        image:"https://images.hindustantimes.com/img/2022/10/02/550x309/ANI-20221002331-0_1664725422968_1664725422968_1664725439005_1664725439005.jpg",
        options: ["HAL Dhruv", "HAL Prachand LCH", "CH-47 Chinook", "Mil Mi-26"],
        correct: 1
    },
    {
        question: "The MiG-29 and Su-30MKI platforms were originally traced back to design bureaus of which nation?",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Sukhoi_Su-30MKi.jpg/1280px-Sukhoi_Su-30MKi.jpg",
        options: ["Russia / Soviet Union", "France", "Germany", "United States"],
        correct: 0
    },
    // Append these 15 objects into your quizData array inside quiz.js
{
    question: "Which aircraft is a fifth-generation stealth fighter featuring advanced sensor fusion and internal weapons bays?",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg",
    options: ["F-35 Lightning II", "F-22 Raptor", "Mirage 2000", "Su-30MKI Flanker-H"],
    correct: 1
},
{
    question: "The AH-64D Apache attack helicopter relies on which primary weapon system alongside Hellfire missiles?",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/66/AH-64D_Apache_Longbow.jpg",
    options: ["20mm M61 Vulcan", "30mm M230 chain gun", "40mm Grenade Launcher", "12.7mm heavy machine gun"],
    correct: 1
},
{
    question: "Which Indian multirole light fighter was designed by the Aeronautical Development Agency with a composite-structure airframe?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/HAL_Tejas_%28LA-5018%29_of_Squadron_18_Flying_Bullets.jpg/500px-HAL_Tejas_%28LA-5018%29_of_Squadron_18_Flying_Bullets.jpg",
    options: ["HAL Dhruv", "HAL Prachand LCH", "HAL Tejas", "SEPECAT Jaguar"],
    correct: 2
},
{
    question: "What family of all-weather stealth aircraft is designed to perform ground-attack and air-defense missions simultaneously using high-capacity data links?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/1280px-F-35A_flight_%28cropped%29.jpg",
    options: ["F-35 Lightning II", "F-22 Raptor", "MiG-29 Fulcrum", "Dassault Rafale"],
    correct: 0
},
{
    question: "Which generation does the French single-engine, delta-wing Mirage 2000 jet fighter belong to?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SDW9LHZWr_2brSlq-owklsBbFjMb1cD6BA&amp;s",
    options: ["Third-generation", "Fourth-generation", "Fifth-generation", "Generation 4.5"],
    correct: 1
},
{
    question: "Which heavy, long-range fighter features thrust-vectoring nozzles and canards, and is custom-built under license by India's HAL to carry the BrahMos missile?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSfWEsVP1zH7vgrGbDFDOmrNxyq-mJ29Y9dQ&s",
    options: ["MiG-29 Fulcrum", "Dassault Rafale", "F-22 Raptor", "Su-30MKI Flanker-H"],
    correct: 3
},
{
    question: "What unique design feature distinguishes the Anglo-French SEPECAT Jaguar deep penetration strike aircraft?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSag3OW3HtSCLM_Nl0MXVoEfjNS0OxaNwVQRQ&s",
    options: ["Over-wing missile rails", "Tandem rotor layout", "Forward-swept wings", "Variable-sweep wings"],
    correct: 0
},
{
    question: "Why is the generation 4.5 Dassault Rafale specifically classified as an 'omnirole' combat aircraft?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33lgCL4JT6xSMyzCbNLpCTKKDcBYJggMYBQ&s",
    options: ["It can carry cargo and troops at the same time", "It can switch between helicopter and jet profiles", "It can perform air-defense, deep-strike, and nuclear deterrence tasks during a single mission", "It is exclusively built for high-altitude landing runs"],
    correct: 2
},
{
    question: "Which fighter jet was built by the Mikoyan design bureau to counter American fighters like the F-16 and is known for operating out of unpaved, rugged airstrips?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSnb8odJnb1OcgRJvE4ijsdMxqyy93LokyA&s",
    options: ["MiG-29 Fulcrum", "Mirage 2000", "F-35 Lightning II", "HAL Tejas"],
    correct: 0
},
{
    question: "What core feature gives the HAL Prachand Light Combat Helicopter extreme survivability in high-altitude combat zones?",
    image: "https://forum-en-cdn.warthunder.com/original/3X/8/5/859fcfb4d89bb90c400df415887c16f3830052b8.jpeg",
    options: ["A 30mm M230 chain gun", "A stealth fuselage layout, armor protection, and extreme crashworthiness", "An 8-blade main rotor system", "Variable-sweep wing wings"],
    correct: 1
},
{
    question: "Which twin-engine advanced light utility helicopter serves across all branches of the Indian Armed Forces for troop deployment and casualty evacuation?",
    image: "https://live.staticflickr.com/65535/53564730704_72469317cf_h.jpg",
    options: ["HAL Dhruv ALH", "HAL Prachand LCH", "AH-64D Apache", "CH-47F Chinook"],
    correct: 0
},
{
    question: "What unique mechanical setup allows the CH-47F Chinook heavy-lift transport helicopter to redirect all engine power into vertical lift?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucwokzyoTieHPKVtrLshSfYA-fhMoObz70g&s",
    options: ["Thrust-vectoring nozzles", "A massive 8-blade main rotor", "A counter-rotating tandem-rotor design that eliminates the tail rotor", "Variable-sweep wings"],
    correct: 2
},
{
    question: "What is the largest and most powerful helicopter ever put into serial production, capable of lifting armored vehicles or entire passenger airliners?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9Rb_UiLTapGzW55fAvxoD3jVPwUmN1L0kg&so",
    options: ["CH-47F Chinook", "Mil Mi-26 Halo", "HAL Dhruv ALH", "AH-64D Apache"],
    correct: 1
},
{
    question: "Which of the following aircraft is documented as having a top design speed of Mach 1.6?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/HAL_Tejas_%28LA-5018%29_of_Squadron_18_Flying_Bullets.jpg/500px-HAL_Tejas_%28LA-5018%29_of_Squadron_18_Flying_Bullets.jpg",
    options: ["Dassault Rafale", "Su-30MKI Flanker-H", "HAL Tejas", "Mirage 2000"],
    correct: 2
},
{
    question: "Which major operator currently keeps heavily upgraded variants of the Anglo-French SEPECAT Jaguar in active service?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSag3OW3HtSCLM_Nl0MXVoEfjNS0OxaNwVQRQ&s",
    options: ["United States Air Force", "Indian Air Force", "French Space Agency", "Royal Air Force of the UK"],
    correct: 1
}
];

// State variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;

// Audio synthesis fallback (Generates system sounds without external files!)
function playSound(type) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
        osc.start(); osc.stop(ctx.currentTime + 0.15);
    } else if (type === 'wrong') {
        osc.frequency.setValueAtTime(250, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(150, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.start(); osc.stop(ctx.currentTime + 0.2);
    }
}

// UI Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const imageContainer = document.getElementById('image-container');
const optionsContainer = document.getElementById('options-container');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const finalScoreDisplay = document.getElementById('final-score');
const performanceFeedback = document.getElementById('performance-feedback');

// Event Bindings
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

function showQuestion() {
    clearInterval(timerInterval);
    timeLeft = 15;
    timerDisplay.textContent = timeLeft;
    
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Set text, images, and progress tracking
    questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    imageContainer.innerHTML = `<img src="${currentQuestion.image}" alt="Question Image">`;
    progressBar.style.width = `${((currentQuestionIndex) / quizData.length) * 100}%`;
    
    // Clear old options and load new choices
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => handleAnswer(index));
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleAnswer(-1); // Process as a wrong answer due to timeout
        }
    }, 1000);
}

function handleAnswer(selectedIndex) {
    clearInterval(timerInterval);
    const correctIndex = quizData[currentQuestionIndex].correct;
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    
    // Disable all options immediately to freeze clicks
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        buttons[selectedIndex].classList.add('correct');
        score++;
        scoreDisplay.textContent = score;
        playSound('correct');
    } else {
        if (selectedIndex !== -1) {
            buttons[selectedIndex].classList.add('wrong');
        }
        buttons[correctIndex].classList.add('correct'); // Reveal correct choice
        playSound('wrong');
    }

    // Brief delay before shifting viewports for smooth transition
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    finalScoreDisplay.textContent = `${score} / ${quizData.length}`;
    
    // Dynamic feedback messages based on total score
    if (score === quizData.length) {
        performanceFeedback.textContent = "Flawless Flight! You are officially an Air Chief Marshal.";
    } else if (score >= 3) {
        performanceFeedback.textContent = "Great job Wing Commander! Solid flight intelligence display.";
    } else {
        performanceFeedback.textContent = "Cadet, look back over the Encyclopedia database profiles and try again!";
    }
}