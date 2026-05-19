// Dataset combining Jet and Helicopter profiles
const aircraftData = [
    {
        name: "F-22 Raptor",
        category: "jet",
        role: "Air Superiority Fighter",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg",
        origin: "United States",
        flag: "🇺🇸",
        topSpeed: "Mach 2.25",
        introduced: "2005",
        status: "Active Service",
        info: "A fifth-generation, single-seat, twin-engine all-aspect stealth fighter plane. It features advanced sensor fusion, internal weapons bays, and thrust-vectoring engines for unparalleled maneuverability."
    },
    {
        name: "AH-64D Apache",
        category: "helicopter",
        role: "Attack Helicopter",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/66/AH-64D_Apache_Longbow.jpg",
        origin: "United States",
        flag: "🇺🇸",
        topSpeed: "182 mph",
        introduced: "1986",
        status: "Active Service",
        info: "A twin-turboshaft attack helicopter featuring a nose-mounted sensor suite for target acquisition and night vision systems. It is heavily armed with a 30mm M230 chain gun and Hellfire missiles."
    },
    {
        name: "HAL Tejas",
        category: "jet",
        role: "Multirole Light Fighter",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/HAL_Tejas_%28LA-5018%29_of_Squadron_18_Flying_Bullets.jpg/500px-HAL_Tejas_%28LA-5018%29_of_Squadron_18_Flying_Bullets.jpg",
        origin: "India",
        flag: "🇮🇳",
        topSpeed: "Mach 1.6",
        introduced: "2015",
        status: "Active Service",
        info: "An Indian delta-wing, light multirole fighter designed by the Aeronautical Development Agency. It features a composite-structure airframe and advanced glass cockpit for high agility."
    },
    {
          name: "F-35 Lightning II",
        category: "jet",
        role: "Multirole Stealth Fighter",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/1280px-F-35A_flight_%28cropped%29.jpg",
        origin: "United States",
        topSpeed: "Mach 1.6",
        info: "A family of single-seat, single-engine, all-weather stealth multirole combat aircraft designed to perform ground-attack and air-defense missions simultaneously using high-capacity data links."
    },
    {
    name: "Mirage 2000",
    category: "jet",
    role: "Multirole Fighter",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SDW9LHZWr_2brSlq-owklsBbFjMb1cD6BA&amp;s",
    origin: "France",
    flag: "🇫🇷",
    topSpeed: "Mach 2.2",
    introduced: "1984",
    status: "Active Service",
    info: "A French single-engine, fourth-generation jet fighter manufactured by Dassault Aviation. It features a prominent delta-wing design that provides exceptional agility and high-speed interception capabilities."

    },
    {
    name: "Su-30MKI Flanker-H",
    category: "jet",
    role: "Air Superiority Fighter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSfWEsVP1zH7vgrGbDFDOmrNxyq-mJ29Y9dQ&s",
    origin: "India / Russia",
    flag: "🇮🇳",
    topSpeed: "Mach 2.0",
    introduced: "2002",
    status: "Active Service",
    info: "A heavy, long-range twin-engine fighter developed by Russia's Sukhoi and custom-built under license by India's HAL. It features thrust-vectoring nozzles and canards for extreme post-stall maneuverability, and carries advanced weapons like the BrahMos supersonic cruise missile."
},
{
    name: "SEPECAT Jaguar",
    category: "jet",
    role: "Deep Penetration Strike Aircraft",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSag3OW3HtSCLM_Nl0MXVoEfjNS0OxaNwVQRQ&s",
    origin: "UK / France (Primary Operator: India)",
    flag: "🇬🇧🇫🇷🇮🇳",
    topSpeed: "Mach 1.6",
    introduced: "1973",
    status: "Active Service (IAF)",
    info: "An Anglo-French twin-engine ground attack aircraft designed for low-level high-speed penetration bombing runs. Known for its rugged airframe and unique over-wing missile rails, the Indian Air Force is currently the sole remaining major operator keeping heavily upgraded variants in active service."
},
{
    name: "Dassault Rafale",
    category: "jet",
    role: "Omnirole Combat Aircraft",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33lgCL4JT6xSMyzCbNLpCTKKDcBYJggMYBQ&s",
    origin: "France (Major Operator: India)",
    flag: "🇫🇷🇮🇳",
    topSpeed: "Mach 1.8",
    introduced: "2001",
    status: "Active Service",
    info: "A highly agile French twin-engine, canard-delta wing, generation 4.5 fighter jet. It is classified as an 'omnirole' aircraft because it can simultaneously perform air-defense, deep-strike, nuclear deterrence, and carrier-based operations during a single mission using an advanced AESA radar."
},
{
    name: "MiG-29 Fulcrum",
    category: "jet",
    role: "Air Superiority Fighter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSnb8odJnb1OcgRJvE4ijsdMxqyy93LokyA&s",
    origin: "Russia (Major Operator: India)",
    flag: "🇷🇺🇮🇳",
    topSpeed: "Mach 2.25",
    introduced: "1982",
    status: "Active Service",
    info: "A fourth-generation supersonic twin-engine air superiority jet designed by the Mikoyan design bureau. Built to counter American fighters like the F-16, it is highly celebrated for its extreme close-combat agility, helmet-mounted target sight integration, and reliable performance out of unpaved, rugged airstrips."
},
{
    name: "HAL Prachand LCH",
    category: "helicopter",
    role: "Light Combat Helicopter",
    image: "https://forum-en-cdn.warthunder.com/original/3X/8/5/859fcfb4d89bb90c400df415887c16f3830052b8.jpeg",
    origin: "India",
    flag: "🇮🇳",
    topSpeed: "168 mph",
    introduced: "2022",
    status: "Active Service",
    info: "The world's only attack helicopter capable of landing and taking off at altitudes over 16,000 feet. Custom-designed by HAL for high-altitude warfare in the Himalayas, it features a stealth fuselage layout, armor protection, and extreme crashworthiness."
},
{
    name: "HAL Dhruv ALH",
    category: "helicopter",
    role: "Utility / Transport Helicopter",
    image: "https://live.staticflickr.com/65535/53564730704_72469317cf_h.jpg",
    origin: "India",
    flag: "🇮🇳",
    topSpeed: "180 mph",
    introduced: "2002",
    status: "Active Service",
    info: "A twin-engine advanced light utility helicopter serving across all branches of the Indian Armed Forces. Highly versatile, it is optimized for rapid troop deployment, search-and-rescue operations, and casualty evacuation in extreme mountainous terrains."
},
// Add these objects into your aircraftData array inside script.js
{
    name: "CH-47F Chinook",
    category: "helicopter",
    role: "Heavy-Lift Transport",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucwokzyoTieHPKVtrLshSfYA-fhMoObz70g&s",
    origin: "United States (Operator: India)",
    flag: "🇺🇸🇮🇳",
    topSpeed: "196 mph",
    introduced: "1962",
    status: "Active Service",
    info: "An iconic American twin-engine, tandem-rotor heavy-lift helicopter. Its counter-rotating rotor design eliminates the need for a tail rotor, allowing all engine power to go into vertical lift and making it one of the fastest transport helicopters in existence."
},
{
    name: "Mil Mi-26 Halo",
    category: "helicopter",
    role: "Heavy-Lift Cargo Helicopter",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9Rb_UiLTapGzW55fAvxoD3jVPwUmN1L0kg&so",
    origin: "Soviet Union / Russia",
    flag: "🇷🇺",
    topSpeed: "183 mph",
    introduced: "1983",
    status: "Active Service",
    info: "The largest and most powerful helicopter ever put into serial production. It features a massive 8-blade main rotor system and is capable of lifting an entire fully loaded passenger airliner or military armored vehicle right inside its cargo hold."
}
];

const aircraftGrid = document.getElementById('aircraftGrid');
const searchBar = document.getElementById('searchBar');
const buttons = document.querySelectorAll('.filter-buttons .btn');

let activeFilter = 'all';
let searchQuery = '';

// Core render engine
function renderCards() {
    aircraftGrid.innerHTML = '';
    
    const filteredData = aircraftData.filter(item => {
        const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery) || 
                              item.role.toLowerCase().includes(searchQuery) ||
                              item.origin.toLowerCase().includes(searchQuery) ||
                              item.introduced.includes(searchQuery) || // Let users search by year
                              item.status.toLowerCase().includes(searchQuery);
        return matchesFilter && matchesSearch;
    });

    if (filteredData.length === 0) {
        aircraftGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No aircraft match your search criteria.</p>`;
        return;
    }
    filteredData.forEach(aircraft => {
    const cardHtml = `
        <div class="card">
            <div class="card-image-box">
                <img src="${aircraft.image}" alt="${aircraft.name}">
                <span class="badge ${aircraft.category}">${aircraft.category === 'jet' ? 'Jet' : 'Heli'}</span>
            </div>
            <div class="card-content">
                <!-- Added flag emoji right next to the aircraft title -->
                <h3>${aircraft.flag} ${aircraft.name}</h3>
                <p class="role-tag">${aircraft.role}</p>
                <p class="info-text">${aircraft.info}</p>
                <div class="specs">
                    <span><strong>Origin:</strong> ${aircraft.origin}</span>
                    <span><strong>Max Speed:</strong> ${aircraft.topSpeed}</span>
                    <!-- New expanded historical attributes -->
                    <span><strong>Introduced:</strong> ${aircraft.introduced}</span>
                    <span><strong>Status:</strong> ${aircraft.status}</span>
                </div>
            </div>
        </div>
    `;
    aircraftGrid.insertAdjacentHTML('beforeend', cardHtml);
});
}

// Event hooks
searchBar.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderCards();
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        activeFilter = button.getAttribute('data-filter');
        renderCards();
    });
});

// Initialization
renderCards();