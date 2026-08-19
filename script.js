// ========== MAP SETUP ==========

const map = L.map("map").setView(
  [45.5, -2.5], // view region
  10,
);

// ========== MAP VIEW SELECTION ==========
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution: "&copy; OpenStreetMap &copy; CARTO", // Map stylisation
}).addTo(map);

// ========== MAP ICONS ==========
const airportIcon = L.icon({
  iconUrl: "images/Plane.png", //Icon

  iconSize: [100, 100], //size

  iconAnchor: [22, 45], //anchor location

  popupAnchor: [0, -45], //onclicl
});

const patientIcon = L.icon({
  iconUrl: "images/House.png",
  iconSize: [45, 45],
  iconAnchor: [22, 45],
  popupAnchor: [0, -45],
});

const hospitalIcon = L.icon({
  iconUrl: "images/Hospital_Norm.png",
  iconSize: [55, 55],
  iconAnchor: [27, 55],
  popupAnchor: [0, -55],
});

const facilityIcon = L.icon({
  iconUrl: "images/PowerPlant.png",
  iconSize: [45, 45],
  iconAnchor: [22, 45],
  popupAnchor: [0, -45],
});

// ========== MAP DATA ==========
const patients = [
  {
    name: "Jasmina Niraj",
    type: "Patient",
    coords: [51.26193881422851, -0.13540700291702792],
    isotope: "Redhill, United Kingdom", //  MISLEADING NAME - not used for isotope, used for location instead now
  },

  {
    name: "Caroline Rousseau ",
    type: "Patient",
    coords: [52.13947297196391, -106.5742796298504],
    isotope: "Saskatoon, Saskatchewan, Canada", //  MISLEADING NAME - not used for isotope, used for location instead now
  },

  {
    name: "Janghyun Kim",
    type: "Patient",
    coords: [36.3310482037849, 127.37638647785163],
    isotope: "Yongjeon-dong, Daejeon, South Korea", //  MISLEADING NAME - not used for isotope, used for location instead now
  },

  {
    name: "Mukti Taruno",
    type: "Patient",
    coords: [-7.733808148561492, 109.0088011063192],
    isotope: "Cilacap, Indonesia  ", //  MISLEADING NAME - not used for isotope, used for location instead now
  },
];

const airports = {
  Schiphol: {
    name: "Amsterdam Schiphol Airport",
    coords: [52.3086, 4.7639],
  },

  Heathrow: {
    name: "London Heathrow Airport",
    coords: [51.47, -0.4543],
  },

  Atlanta: {
    name: "Hartsfield-Jackson Atlanta International Airport",
    coords: [33.6407, -84.4277],
  },

  Toronto: {
    name: "Toronto Pearson International Airport",
    coords: [43.6777, -79.6248],
  },
};

const locations = [
  //UK LOCATIONS------------------------------------------------------------------------------------------
  {
    name: "High Flux Reactor at the Energy & Health Campus",
    image: "images/Netherlands.png",
    loc: "Westerduinweg 3, 1755 LE Petten, Netherlands",
    op: "NRG PALLAS",
    type: "Facility",
    country: "Netherlands",
    coords: [52.78689119254482, 4.678354742328971],
    spectrogram: "images/NRG_spect.png",
    produces: [
      "Major European supplier of medical radioisotopes for nuclear medicine",
      "Supports production/distribution of diagnostic and therapeutic isotopes",
      "Supplies materials for radiopharmaceutical manufacturing",
      "Part of the international supply chain for European hospitals",
    ],
  },

  {
    name: "STFC Rutherford Appleton Laboratory (RAL)",
    image: "images/RAL.png",
    loc: "Campus, Harwell, Chilton, Didcot OX11 0QX",
    op: "STFC",
    type: "Facility",
    coords: [51.65712656955595, -1.316522391816756],
    spectrogram: "images/STFC_Spect.png",
    produces: [
      "National research facility (STFC)",
      "Develops laser, accelerator and photonics technologies",
      "Researches high-power laser and nuclear science applications",
      "Collaboration platform for universities, industry and research bodies",
    ],
  },

  {
    name: "National Nuclear Laboratory (UKNNL) Preston Laboratory",
    image: "images/NNL.png",
    loc: " Springfields, Preston, PR4 0XJ",
    op: "UKNNL (leased site)",
    type: "Facility",
    coords: [53.777918910796714, -2.81017717383105],
    spectrogram: "images/NNL_spect.png",
    produces: [
      "UK government-owned nuclear science and technology research body",
      "Develops methods to recover valuable materials from nuclear resources",
      "Researches future domestic supply of medical radionuclides",
      "Partners with universities/healthcare on next-gen nuclear medicine",
    ],
  },

  {
    name: "GE Healthcare Amersham",
    loc: "White Lion Rd, Little Chalfont, Amersham HP7 9LL",
    op: "GE",
    image: "images/DECOMISSIONED.png",
    type: "Facility",
    spectrogram: "images/NO PRODUCTION FOUND.jpg",
    coords: [51.66989636858831, -0.5769276746728057],
    produces: [
      "Historic radiopharmaceutical development/manufacturing centre",
      "Supported nuclear medicine via diagnostic imaging products",
      "Developed PET/SPECT imaging technologies",
      "Expertise in radiopharmaceutical science and medical imaging",
    ],
  },

  {
    name: "Guy's Hospital",
    type: "Hospital",
    loc: "Great Maze Pond, London SE1 9RT",
    op: "NHS",
    coords: [51.498, -0.087],
    image: "images/guys.jpg",
    spectrogram: "images/guys_spectrogram.png",
    services: [
      "Diagnostic nuclear medicine at Guy's and St Thomas' Hospitals",
      "Specialist clinics: thyroid, thyroid oncology, neuroendocrine, radium, osteoporosis",
      "Radionuclide therapy (incl. iodine) with inpatient care",
      "Paediatric imaging and cardiac stress testing",
      "Mon–Fri diagnostic and therapeutic services",
    ],
  },

  {
    name: "Southmead Hospital",
    type: "Hospital",
    loc: "Southmead Rd, Bristol BS10 5NB",
    op: "NHS",
    coords: [51.49662727653111, -2.5918792893636278],
    image: "images/SMD.png",
    spectrogram: "images/Southmead_spect.png",
    services: [
      "Regional nuclear medicine service for Bristol/South West",
      "Wide range of diagnostic imaging for disease investigation/monitoring",
      "Works with oncology, cardiology, endocrinology, orthopaedics",
      "Gamma camera imaging by multidisciplinary team",
      "Routine and specialist appointments available throughout the week",
    ],
  },

  {
    name: "Royal Marsden Sutton",
    type: "Hospital",
    loc: "Downs Rd, Sutton SM2 5PT",
    op: "NHS",
    coords: [51.343535217912695, -0.19050994524107095],
    image: "images/RMD.png",
    spectrogram: "images/RMS_spect.png",
    services: [
      "Nuclear medicine and PET/CT across Sutton and Chelsea sites",
      "Imaging for cancer diagnosis, staging, treatment planning, follow-up",
      "One of UK's largest radionuclide therapy centres",
      "Research partnerships for imaging innovation",
      "Multidisciplinary diagnostic and therapeutic teams",
    ],
  },

  {
    name: "University Hospital Coventry & Warwickshire",
    type: "Hospital",
    loc: "Clifford Bridge Rd, Binley, Coventry CV2 2DX",
    op: "NHS",
    coords: [52.42093956368127, -1.4370068604724067],
    image: "images/Wrwck.png",
    spectrogram: "images/Wrwck_spect.png",
    services: [
      "Routine and specialist nuclear medicine for the Midlands",
      "Functional imaging and molecular diagnostics",
      "Imaging pathways for oncology, cardiology, neurology, renal, endocrine",
      "PET/CT and SPECT/CT plus radionuclide therapies",
      "Contributes to clinical research and innovation",
    ],
  },

  {
    name: "Chaucer Hospital, Canterbury",
    type: "Hospital",
    loc: "Nackington Rd, Canterbury CT4 7AR",
    op: "Circle Health Group",
    coords: [51.261998968825814, 1.0875948547999439],
    image: "images/CRC.png",
    spectrogram: "images/Chaucer_spect.png",
    services: [
      "Independent private healthcare, focused on accessible diagnostics",
      "Dedicated imaging department for non-invasive procedures",
      "Advanced radiology for assessing/managing medical conditions",
      "Serves local Kent community with imaging/outpatient services",
      "No dedicated nuclear medicine department or radionuclide procedures",
    ],
  },

  //CANADA LOCATIONS------------------------------------------------------------------------------------------

  {
    name: "Cross Cancer Institute, Edmonton",
    type: "Hospital",
    loc: "11560 University Avenue, Edmonton, AB T6G 1Z2, Canada",
    op: "Alberta Health Services",
    coords: [53.51830743090501, -113.53100045282729],
    image: "images/Cross_Cancer.jpg",
    spectrogram: "images/Cross_Cancer_spect.png",
    services: [
      "Cancer diagnosis, treatment and oncology services for N./Central Alberta",
      "On-site cyclotron (operated by Tracer Hub) producing radioisotopes",
      "Works with Edmonton's Medical Isotope and Cyclotron Facility (MICF) as mutual maintenance backup",
      "Nuclear medicine and advanced radioisotope imaging",
      "Radiation oncology and systemic cancer therapies",
      "Part of Alberta's radiopharmaceutical network; new Calgary facility (3rd cyclotron) under construction",
    ],
  },

  {
    name: "Northeast Cancer Centre, Sudbury",
    type: "Hospital",
    loc: "41 Ramsey Lake Rd, Sudbury, ON P3E 5J1, Canada",
    op: "Health Sciences North",
    coords: [46.469062239128135, -80.9956144455267],
    image: "images/Northeast_Cancer.jpg",
    spectrogram: "images/Northeast_Cancer_spect.png",
    services: [
      "Cancer diagnosis, treatment and supportive care for NE Ontario",
      "Systemic cancer treatment (chemotherapy etc.) for large regional population",
      "Radiation therapy services",
      "Diagnostic imaging, labs, multidisciplinary oncology teams",
      "Regional centre reducing need to travel to Southern Ontario",
    ],
  },

  {
    name: "Princess Margaret Cancer Centre, Toronto",
    type: "Hospital",
    loc: "610 University Avenue, Toronto, ON M5G 2M9, Canada",
    op: "University Health Network",
    coords: [43.65818075421179, -79.3900349711645],
    image: "images/Princess_Margaret.jpg",
    spectrogram: "images/Princess_Margaret_spect.png",
    services: [
      "Specialised cancer diagnosis, treatment and research across cancer types",
      "Radiation Medicine Program for advanced/precision radiation treatment",
      "PET imaging using short-lived positron-emitting isotopes",
      "UHN cyclotron (Toronto General Hospital, separate site) supplies diagnostic isotopes",
      "Cyclotron produces F-18, Ga-68, Cu-64 for radiopharmaceuticals",
      "Short-lived isotopes made close to point of use, rapidly transported",
      "Specialist medical, surgical, systemic cancer treatment teams",
    ],
  },

  {
    name: "Nova Scotia Cancer Centre, Halifax",
    type: "Hospital",
    loc: "1276 South Park Street, Halifax, NS B3H 2Y9, Canada",
    op: "Nova Scotia Health",
    coords: [44.6376, -63.5809],
    image: "images/Nova_Scotia_Cancer_Centre.jpg",
    spectrogram: "images/Nova_Scotia_Cancer_Centre_spect.png",
    services: [
      "Cancer diagnosis, treatment, supportive care for Atlantic Canada",
      "On-site cyclotron/radiopharmaceutical production of short-lived isotopes",
      "PET radiopharmaceuticals made and used on-site",
      "Radiopharmacy supplies QEII and wider Nova Scotia",
      "PET-CT, nuclear medicine imaging (cancer, neuro, cardiac)",
      "Radiation oncology and systemic cancer treatment, multidisciplinary teams",
    ],
  },

  //facilities Canada --
  {
    name: "McMaster Nuclear Reactor",
    image: "images/McMaster.jpg",
    loc: "1280 Main Street West, Hamilton, ON L8S 4K1, Canada",
    op: "McMaster University",
    type: "Facility",
    coords: [43.2609, -79.9192],
    spectrogram: "images/McMaster_spect.png",
    produces: [
      "Canada's largest university-based research reactor; major isotope producer",
      "Wide range of medical, research and technical radioisotopes",
      "Key international supplier of reactor-produced I-125",
      "Also operates a dedicated cyclotron for short-lived PET isotopes",
      "5 MW open-pool MTR reactor for neutron irradiation/isotope production",
      "Separate 16.5 MeV GE PETtrace negative-ion cyclotron",
      "Some isotopes require special advance ordering, adding lead time",
    ],
  },

  {
    name: "TRIUMF Medical Isotope Production Facility",
    image: "images/TRIUMF.jpg",
    loc: "4004 Wesbrook Mall, Vancouver, BC V6T 2A3, Canada",
    op: "TRIUMF / BWXT Medical",
    type: "Facility",
    coords: [49.2447, -123.8635],
    spectrogram: "images/TRIUMF_spect.png",
    produces: [
      "Short-lived diagnostic/therapeutic isotopes for PET and nuclear medicine",
      "Three on-site cyclotrons (Radiochemistry Annex)",
      "ACSI TR-13, TR-24 and TR-30 cyclotrons for varied isotope needs",
      "Major Canadian production/distribution hub, international supply",
    ],
  },

  {
    name: "UHN Cyclotron Facility",
    image: "images/UHN_Cyclotron.jpg",
    loc: "200 Elizabeth St, Toronto, ON M5G 2C4, Canada",
    op: "University Health Network",
    type: "Facility",
    coords: [43.6587, -79.3883],
    spectrogram: "images/UHN_Cyclotron_spect.png",
    produces: [
      "Cyclotron-based isotope production within UHN",
      "Short-lived positron-emitting isotopes for PET imaging",
      "Radiopharmaceutical tracers for cancer/specialist diagnostics",
      "Close proximity to UHN nuclear medicine/oncology services",
    ],
  },

  {
    name: "High Flux Isotope Reactor (HFIR) - Oak Ridge National Laboratory",
    image: "images/HFIR.jpg",
    country: "USA",
    loc: "1 Bethel Valley Rd, Oak Ridge, TN 37830, USA",
    op: "U.S. Department of Energy / Oak Ridge National Laboratory",
    type: "Facility",
    coords: [35.9325, -84.31],
    spectrogram: "images/HFIR_spect.png",
    produces: [
      "85 MW high-flux research reactor for isotope production and research",
      "Produces Strontium-89 via neutron capture on Sr-88 targets",
      "Part of the DOE Isotope Program",
      "Major international source of isotopes for cancer therapy and diagnostics",
    ],
  },

  //Korea LOCATIONS------------------------------------------------------------------------------------------

  {
    name: "Konyang University Hospital, Daejeon",
    type: "Hospital",
    loc: "158 Gwanjeodong-ro, Seo-gu, Daejeon, South Korea",
    op: "Konyang University",
    coords: [36.306963864115446, 127.34220738465795],
    image: "images/Konyang_University_Hospital.jpg",
    spectrogram: "images/Konyang_University_Hospital_spect.png",
    services: [
      "Nuclear medicine for diagnosis, staging, monitoring",
      "On-site cyclotron producing short-lived isotopes for PET/molecular imaging",
      "Supports broad isotope range via liquid/gas/solid target systems",
      "Tracers for oncology, neurology, cardiac imaging",
      "Isotope production supports clinical and research use",
      "Integrated radiopharmacy reduces transport time",
    ],
  },

  {
    name: "Daejeon Eulji University Hospital",
    type: "Hospital",
    loc: "95 Dunsanseo-ro, Seo-gu, Daejeon, South Korea",
    op: "Eulji University",
    coords: [36.3544, 127.3826],
    image: "images/Eulji_University_Hospital.jpg",
    spectrogram: "images/Eulji_University_Hospital_spect.png",
    services: [
      "Nuclear medicine and PET/CT for diagnosis, staging, monitoring",
      "On-site Siemens ECLIPSE cyclotron for short-lived isotopes",
      "Produces radionuclides/radiopharmaceuticals for PET imaging",
      "Suited to short-lived positron-emitting isotopes",
      "On-site production reduces transport time for short-lived tracers",
    ],
  },

  {
    name: "Daejeon St. Mary's Hospital",
    type: "Hospital",
    loc: "64 Daeheung-ro, Jung-gu, Daejeon, South Korea",
    op: "The Catholic University of Korea",
    coords: [36.3218, 127.4204],
    image: "images/Daejeon_St_Marys.jpg",
    spectrogram: "images/Daejeon_St_Marys_spect.png",
    services: [
      "Nuclear medicine diagnostic imaging and radionuclide investigations",
      "PET/CT for cancer diagnosis and treatment assessment",
      "Two SPECT gamma cameras",
      "Detects metabolic/biochemical abnormalities pre-structural change",
      "Specialist nuclear medicine at major university-affiliated hospital",
      "On-site cyclotron enables rapid use of short-lived isotopes",
    ],
  },

  {
    name: "Chungnam National University Hospital, Daejeon",
    type: "Hospital",
    loc: "282 Munhwa-ro, Jung-gu, Daejeon, South Korea",
    op: "Chungnam National University",
    coords: [36.3222, 127.4119],
    image: "images/Chungnam_National_University_Hospital.jpg",
    spectrogram: "images/Chungnam_National_University_Hospital_spect.png",
    services: [
      "Major university hospital serving Daejeon region",
      "Specialist oncology, diagnostic imaging, multidisciplinary care",
      "Supports nuclear medicine investigations",
      "Advanced imaging for cancer, cardiovascular, neurological conditions",
      "Major regional teaching/research hospital",
    ],
  },

  // facilities South Korea --
  {
    name: "KAERI Advanced Radiation Technology Institute",
    image: "images/KAERI.jpg",
    loc: "29 Geumgu-gil, Jeongeup-si, Jeollabuk-do, Republic of Korea 56212",
    op: "Korea Atomic Energy Research Institute (KAERI)",
    type: "Facility",
    coords: [35.57, 126.856],
    spectrogram: "images/KAERI_spect.png",
    produces: [
      "Major accelerator-based radioisotope production/radiopharmaceutical research facility",
      "High-current 30 MeV RFT-30 cyclotron, multiple beamlines/targets",
      "Produces radiometals for PET imaging, theranostics, research",
      "Develops longer-lived radiometals and short-lived radionuclides",
      "Supplies research quantities to hospitals/research groups nationally",
      "Facilities for target irradiation, isotope separation, purification, radiopharmaceutical development",
    ],
  },

  {
    name: "Korea Institute of Radiological & Medical Sciences (KIRAMS)",
    image: "images/KIRAMS.jpg",
    loc: "75 Nowon-ro, Nowon-gu, Seoul, Republic of Korea 01812",
    op: "Korea Institute of Radiological & Medical Sciences (KIRAMS)",
    type: "Facility",
    coords: [37.628, 127.082],
    spectrogram: "images/KIRAMS_spect.png",
    produces: [
      "National facility for radiological/nuclear medicine technologies",
      "Cyclotron-based production for PET, SPECT, and other applications",
      "Produces/researches isotopes for diagnostics, therapy, radiopharmaceutical development",
      "Short-lived radionuclides prepared close to clinical use",
      "R&D for isotope production, processing, clinical application",
      "Works with Korea Cancer Center Hospital and KIRAMS network",
    ],
  },

  //Indonesia LOCATIONS------------------------------------------------------------------------------------------

  {
    name: "Dr Soetomo Regional General Hospital",
    type: "Hospital",
    loc: "Jl. Prof. DR. Moestopo No. 6-8, Surabaya, East Java, Indonesia",
    op: "East Java Provincial Government",
    coords: [-7.2679, 112.758],
    image: "images/Soetomo.jpg",
    spectrogram: "images/Soetomo_spect.png",
    services: [
      "Nuclear medicine for diagnosis, staging, monitoring",
      "Bone, thyroid, renal, cardiac perfusion and brain imaging",
      "Gamma-camera imaging plus therapeutic procedures",
      "Specialised lung/functional imaging for respiratory disease",
      "Radionuclide therapy incl. iodine",
      "Major East Java referral hospital",
    ],
  },

  {
    name: "RSUP Dr. Hasan Sadikin",
    type: "Hospital",
    loc: "Jl. Pasteur No. 38, Bandung, West Java, Indonesia",
    op: "Ministry of Health, Republic of Indonesia",
    coords: [-6.9002, 107.6186],
    image: "images/Hasan_Sadikin.jpg",
    spectrogram: "images/Hasan_Sadikin_spect.png",
    services: [
      "National referral centre for nuclear medicine/molecular imaging",
      "Multiple SPECT/CT systems plus PET/CT",
      "V/Q studies for pulmonary/cardiovascular assessment",
      "Dedicated radiopharmacy labs",
      "Diagnostic/therapeutic nuclear medicine across many specialties",
      "Radioisotope therapy: I-131, Sm-153, Lu-177 and others",
      "National centre for nuclear medicine education/research",
    ],
  },

  {
    name: "RSUP Nasional Dr. Cipto Mangunkusumo",
    type: "Hospital",
    loc: "Jl. Diponegoro No. 71, Jakarta, Indonesia",
    op: "Ministry of Health, Republic of Indonesia",
    coords: [-6.1948, 106.8327],
    image: "images/RSCM.jpg",
    spectrogram: "images/RSCM_spect.png",
    services: [
      "Indonesia's major national referral hospital for nuclear medicine",
      "Advanced imaging for cancer and complex disease",
      "SPECT/CT and PET/CT molecular imaging",
      "Specialist investigations: oncology, cardiology, neurology, endocrinology",
      "Radionuclide-based therapeutic procedures",
      "Key national destination for advanced nuclear medicine care",
    ],
  },

  {
    name: "RSUP Dr. Sardjito",
    type: "Hospital",
    loc: "Jl. Kesehatan No. 1, Sekip, Yogyakarta, Indonesia",
    op: "Ministry of Health, Republic of Indonesia",
    coords: [-7.7681, 110.3731],
    image: "images/Sardjito.jpg",
    spectrogram: "images/Sardjito_spect.png",
    services: [
      "Nuclear medicine for Yogyakarta and surrounding regions",
      "Gamma-camera and SPECT-based diagnostic imaging",
      "Investigates cancer, endocrine, cardiovascular, renal conditions",
      "Radionuclide diagnostic/therapeutic procedures",
      "Integrates nuclear medicine with oncology/radiology care",
      "Major referral hospital for Central Java/Yogyakarta",
    ],
  },

  // indonesia facilities
  {
    name: "BATAN Teknologi (BaTek) Radioisotope Production Facility",
    image: "images/BaTek.jpg",
    loc: "Serpong, South Tangerang, Banten, Indonesia",
    op: "BATAN / BRIN",
    type: "Facility",
    coords: [-6.3539, 106.665],
    spectrogram: "images/BaTek_spect.png",
    produces: [
      "Major Indonesian radioisotope/radiopharmaceutical production facility",
      "Supplies technetium-99m for nuclear medicine",
      "Reactor-based production with radiochemical processing",
      "Supports domestic supply for diagnostic/therapeutic use",
    ],
  },

  {
    name: "TRIGA 2000 Bandung Research Reactor",
    image: "images/TRIGA_Bandung.jpg",
    loc: "Bandung, West Java, Indonesia",
    op: "BRIN",
    type: "Facility",
    coords: [-6.8908, 107.6107],
    spectrogram: "images/TRIGA_spect.png",
    produces: [
      "2 MW reactor for research, education, training and isotope production",
      "Produces isotopes for medical/research use",
      "Neutron irradiation facilities for isotope development",
      "Supports Indonesian nuclear medicine via radionuclide production",
      "Part of Indonesia's national research reactor network",
    ],
  },
];

// ========== GAME STATE ==========
let selectedPatient = patients[0];

let mode = "patient";

let selectedStart = selectedPatient;

let selectedEnd = null;

let routeLine = null; //Defines the red map route

let internationalRoad1 = null; //defines the international routing between airports and enrpoints
let internationalRoad2 = null;

// ========== AIRPLANE ==========
let flightLine = null;
let planeMarker = null;

let currentRoute = null;

let markers = [];

// ========== PATIENT MARKER ==========

const patientMarkers = [];

patients.forEach((patient) => {
  const marker = L.marker(patient.coords, {
    icon: patientIcon,
  });

  marker.bindTooltip(
    `
        <b>${patient.name}</b>
        <br>
        ${patient.isotope}
        `,
  );

  marker.on("click", () => {
    selectPatient(patient);
  });

  marker.data = patient;

  patientMarkers.push(marker);
});

// ========== FACILITY AND HOSPITAL MARKERS ==========

locations.forEach((location) => {
  let icon = location.type === "Hospital" ? hospitalIcon : facilityIcon;

  const marker = L.marker(
    location.coords,

    {
      icon: icon,
    },
  )

    .addTo(map);

  marker.data = location;

  markers.push(marker);

  marker.bindTooltip(
    `

<b>${location.name}</b>

<br>

${location.type}

`,
  );

  marker.on(
    "click",

    () => {
      openPanel(location);

      selectLocation(location);
    },
  );
});

// ========== LOCATION SELECTION ==========

function selectLocation(location) {
  if (mode === "patient") {
    if (location.type === "Hospital") {
      selectedEnd = location;

      calculateRoute();
    }
  } else {
    if (location.type === "Facility") {
      selectedStart = location;
    }

    if (location.type === "Hospital") {
      selectedEnd = location;
    }

    if (selectedStart && selectedEnd) {
      calculateRoute();
    }
  }
}

// ========== ROUTING FUNCTION ==========
function calculateRoute() {
  if (!selectedStart || !selectedEnd) return;

  // ========== NETHERLANDS SPECIAL ROUTE ==========

  if (
    selectedStart.country === "Netherlands" ||
    selectedStart.country === "USA"
  ) {
    calculateInternationalRoute();

    return;
  }

  if (!selectedStart || !selectedEnd) return;

  clearCurrentRoute();

  let routePoints = [];

  // ========== ROUTE THROUGH HEATHROW ==========
  if (selectedStart.country === "Netherlands") {
    routePoints = [selectedStart.coords, heathrow.coords, selectedEnd.coords];
  } else {
    routePoints = [selectedStart.coords, selectedEnd.coords];
  }

  const url = `https://router.project-osrm.org/route/v1/driving/${routePoints
    .map((point) => `${point[1]},${point[0]}`)
    .join(";")}?overview=full&geometries=geojson`;

  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      const route = data.routes[0];

      const coords = route.geometry.coordinates.map((point) => [
        point[1],
        point[0],
      ]);

      routeLine = L.polyline(
        coords,

        {
          color: "red",

          weight: 5,
        },
      )

        .addTo(map);

      let routeTime = route.duration;

      if (selectedStart.name === "McMaster Nuclear Reactor") {
        routeTime += MCMASTER_DELAY;
      }

      currentRoute = {
        mode: mode,

        from: selectedStart,

        to: selectedEnd,

        distance: route.distance,

        time: routeTime,
      };

      showRoutePanel();

      showRoutePanel();
    });
}

function calculateInternationalRoute() {
  clearCurrentRoute();

  let totalDistance = 0;
  let totalTime = 0;

  const hospital = selectedEnd;

  // ==========================================================
  // NETHERLANDS INTERNATIONAL ROUTE
  // Facility -> Schiphol -> Heathrow -> Hospital
  // ==========================================================

  if (selectedStart.country === "Netherlands") {
    // 1. Facility -> Schiphol road route

    const road1 = `https://router.project-osrm.org/route/v1/driving/${selectedStart.coords[1]},${selectedStart.coords[0]};${airports.Schiphol.coords[1]},${airports.Schiphol.coords[0]}?overview=full&geometries=geojson`;

    fetch(road1)
      .then((response) => response.json())

      .then((data) => {
        let coords1 = data.routes[0].geometry.coordinates.map((point) => [
          point[1],
          point[0],
        ]);

        internationalRoad1 = L.polyline(
          coords1,

          {
            color: "red",
            weight: 5,
          },
        ).addTo(map);

        totalDistance += data.routes[0].distance;
        totalTime += data.routes[0].duration;

        // 2. Flight Schiphol -> Heathrow

        flightLine = L.polyline(
          [airports.Schiphol.coords, airports.Heathrow.coords],

          {
            color: "blue",
            weight: 3,
            dashArray: "10,10",
          },
        ).addTo(map);

        const midPoint = [
          (airports.Schiphol.coords[0] + airports.Heathrow.coords[0]) / 2,

          (airports.Schiphol.coords[1] + airports.Heathrow.coords[1]) / 2,
        ];

        planeMarker = L.marker(
          midPoint,

          {
            icon: airportIcon,
          },
        ).addTo(map);

        const flightDistance = map.distance(
          airports.Schiphol.coords,
          airports.Heathrow.coords,
        );

        const flightTime = (flightDistance / 800000) * 3600;

        totalDistance += flightDistance;
        totalTime += flightTime;

        // Radioactive shipment handling time

        const handlingTime = 500000;

        totalTime += handlingTime;

        // 3. Heathrow -> Hospital

        const road2 = `https://router.project-osrm.org/route/v1/driving/${airports.Heathrow.coords[1]},${airports.Heathrow.coords[0]};${hospital.coords[1]},${hospital.coords[0]}?overview=full&geometries=geojson`;

        fetch(road2)
          .then((response) => response.json())

          .then((data) => {
            let coords2 = data.routes[0].geometry.coordinates.map((point) => [
              point[1],
              point[0],
            ]);

            internationalRoad2 = L.polyline(
              coords2,

              {
                color: "red",
                weight: 5,
              },
            ).addTo(map);

            totalDistance += data.routes[0].distance;
            totalTime += data.routes[0].duration;

            currentRoute = {
              mode: mode,

              from: selectedStart,

              to: hospital,

              distance: totalDistance,

              time: totalTime,
            };

            showRoutePanel();
          });
      });
  }

  // ==========================================================
  // USA INTERNATIONAL ROUTE
  // HFIR -> Atlanta -> Toronto -> Hospital
  // ==========================================================
  else if (selectedStart.country === "USA") {
    // 1. HFIR -> Atlanta Airport

    const road1 = `https://router.project-osrm.org/route/v1/driving/${selectedStart.coords[1]},${selectedStart.coords[0]};${airports.Atlanta.coords[1]},${airports.Atlanta.coords[0]}?overview=full&geometries=geojson`;

    fetch(road1)
      .then((response) => response.json())

      .then((data) => {
        let coords1 = data.routes[0].geometry.coordinates.map((point) => [
          point[1],
          point[0],
        ]);

        internationalRoad1 = L.polyline(
          coords1,

          {
            color: "red",
            weight: 5,
          },
        ).addTo(map);

        totalDistance += data.routes[0].distance;
        totalTime += data.routes[0].duration;

        // 2. Flight Atlanta -> Toronto

        flightLine = L.polyline(
          [airports.Atlanta.coords, airports.Toronto.coords],

          {
            color: "blue",
            weight: 3,
            dashArray: "10,10",
          },
        ).addTo(map);

        const midPoint = [
          (airports.Atlanta.coords[0] + airports.Toronto.coords[0]) / 2,

          (airports.Atlanta.coords[1] + airports.Toronto.coords[1]) / 2,
        ];

        planeMarker = L.marker(
          midPoint,

          {
            icon: airportIcon,
          },
        ).addTo(map);

        const flightDistance = map.distance(
          airports.Atlanta.coords,
          airports.Toronto.coords,
        );

        const flightTime = (flightDistance / 800000) * 3600;

        totalDistance += flightDistance;
        totalTime += flightTime;

        // 3. Toronto Airport -> Hospital

        const road2 = `https://router.project-osrm.org/route/v1/driving/${airports.Toronto.coords[1]},${airports.Toronto.coords[0]};${hospital.coords[1]},${hospital.coords[0]}?overview=full&geometries=geojson`;

        fetch(road2)
          .then((response) => response.json())

          .then((data) => {
            let coords2 = data.routes[0].geometry.coordinates.map((point) => [
              point[1],
              point[0],
            ]);

            internationalRoad2 = L.polyline(
              coords2,

              {
                color: "red",
                weight: 5,
              },
            ).addTo(map);

            totalDistance += data.routes[0].distance;
            totalTime += data.routes[0].duration;

            currentRoute = {
              mode: mode,

              from: selectedStart,

              to: hospital,

              distance: totalDistance,

              time: totalTime,
            };

            showRoutePanel();
          });
      });
  }
}
//========= SPECIAL ROUTE DELAY ==========

const MCMASTER_DELAY = 40000; //for McMaster reactor special order

//========= TIME FORMATTING ==========
function formatTravelTime(seconds) {
  const totalMinutes = Math.round(seconds / 60);

  const days = Math.floor(totalMinutes / 1440);

  const hours = Math.floor((totalMinutes % 1440) / 60);

  const minutes = totalMinutes % 60;

  let result = "";

  if (days > 0) {
    result += `${days} day${days !== 1 ? "s" : ""}`;
  }

  if (hours > 0) {
    if (result !== "") {
      result += " ";
    }

    result += `${hours} hour${hours !== 1 ? "s" : ""}`;
  }

  if (minutes > 0) {
    if (result !== "") {
      result += " ";
    }

    result += `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  }

  if (result === "") {
    result = "Less than 1 minute";
  }

  return result;
}

// ========== ROUTE PANEL ==========

function showRoutePanel() {
  document.getElementById("route-panel").innerHTML = `

<h3>Current Route</h3>

<p>
<b>From</b><br>
${currentRoute.from.name}
</p>

<p>
<b>To</b><br>
${currentRoute.to.name}
</p>

<p>
<b>Distance:</b>
${(currentRoute.distance / 1000).toFixed(1)} km
</p>

<p>
<b>Estimated Travel Time:</b>
${formatTravelTime(currentRoute.time)}
</p>

`;
}

// ========== ROUTE SELECTION ==========

function selectRoute() {
  if (!currentRoute) return;

  showMessage(
    currentRoute.mode === "patient"
      ? "✓ Patient route selected"
      : "✓ Nuclear supply route selected",
  );
}

// ========== CLEAR ROUTE ==========

function clearCurrentRoute() {
  if (routeLine) {
    map.removeLayer(routeLine);

    routeLine = null;
  }

  currentRoute = null;

  document.getElementById("route-panel").innerHTML = `

<h3>Route Information</h3>


<p>

Select a location.

</p>

`;

  if (internationalRoad1) {
    map.removeLayer(internationalRoad1);

    internationalRoad1 = null;
  }

  if (internationalRoad2) {
    map.removeLayer(internationalRoad2);

    internationalRoad2 = null;
  }

  if (flightLine) {
    map.removeLayer(flightLine);

    flightLine = null;
  }

  if (flightLine) {
    map.removeLayer(flightLine);

    flightLine = null;
  }

  if (planeMarker) {
    map.removeLayer(planeMarker);
    planeMarker = null;
  }
}

// ========== GAME POPUPS ==========

function showMessage(text) {
  const box = document.getElementById("message-box");

  box.innerHTML = text;

  box.classList.add("message-show");

  setTimeout(() => {
    box.classList.remove("message-show");
  }, 3500);
}

function openPanel(location) {
  let html = `

<h2>
${location.name}
</h2>


<hr>

`;

  if (location.type === "Patient") {
    html += `



`;
  }

  if (location.type === "Hospital") {
    html += `


<img 
src="${location.image}"
class="hospital-banner"
>


<p>

${location.loc}

</p>


<p>
<b>Operator:</b>

${location.op}

</p>


<h3>
Nuclear Medicine Services
</h3>


<ul>

${location.services.map((service) => `<li>${service}</li>`).join("")}

</ul>




`;

    html += `

<button 
class="route-button select-button"
onclick="openSpectrogram('${location.spectrogram}')"
>
Open Facility Production Spectrogram
</button>

`;
  }

  if (location.type === "Facility") {
    html += `


<img 
src="${location.image}"
class="hospital-banner"
>


<p>
<b>Location:</b>

${location.loc}

</p>


<p>
<b>Operator:</b>

${location.op}

</p>


<h3>
Notes:
</h3>


<ul>

${location.produces.map((iso) => `<li>${iso}</li>`).join("")}

</ul>


`;

    html += `

<button 
class="route-button select-button"
onclick="openSpectrogram('${location.spectrogram}')"
>
Open Facility Production Spectrogram
</button>

`;
  }

  document.getElementById("learn-content").innerHTML = html;
}

// ========== THEME SWITCHING ==========

function updateTheme() {
  if (mode === "patient") {
    document.body.classList.add("patient-mode");

    document.body.classList.remove("nuclear-mode");
  } else {
    document.body.classList.add("nuclear-mode");

    document.body.classList.remove("patient-mode");
  }
}

// ========== GAME TABS ==========

document.getElementById("patient-tab").onclick = function () {
  mode = "patient";

  selectedStart = selectedPatient;

  selectedEnd = null;

  clearCurrentRoute();

  updateTheme();

  updateOpacity();

  this.classList.add("active");

  document
    .getElementById("nuclear-tab")

    .classList.remove("active");
};

document.getElementById("nuclear-tab").onclick = function () {
  mode = "nuclear";

  selectedStart = null;

  selectedEnd = null;

  clearCurrentRoute();

  updateTheme();

  updateOpacity();

  this.classList.add("active");

  document
    .getElementById("patient-tab")

    .classList.remove("active");
};

// ========== MARKER OPACITY ==========

function updateOpacity() {
  if (mode === "patient") {
    patientMarkers.forEach((marker) => {
      if (marker.data === selectedPatient) {
        marker.setOpacity(1);
      } else {
        marker.setOpacity(0.25);
      }
    });

    markers.forEach((marker) => {
      if (marker.data.type === "Facility") {
        marker.setOpacity(0.25);
      } else {
        marker.setOpacity(1);
      }
    });
  } else {
    patientMarkers.forEach((marker) => {
      marker.setOpacity(0.25);
    });

    markers.forEach((marker) => {
      marker.setOpacity(1);
    });
  }
}

// ========== STARTUP ==========

updateTheme();

updateOpacity();

map.fitBounds(
  L.featureGroup([...patientMarkers, ...markers])

    .getBounds(),

  {
    padding: [50, 50],
  },
);

function openSpectrogram(image) {
  let spectrogramWindow = window.open(
    "",
    "Spectrogram",
    "width=700,height=500",
  );

  spectrogramWindow.document.open();

  spectrogramWindow.document.write(`

<html>

<head>

<title>Spectrogram</title>

<style>

body{

margin:0;

display:flex;

justify-content:center;

align-items:center;

height:100vh;

background:#111;

}

img{

max-width:95%;

max-height:95%;

}

</style>

</head>

<body>

<img src="${image}">

</body>

</html>

`);

  spectrogramWindow.document.close();

  spectrogramWindow.focus();
}

// ========== CLOCK ==========

function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString("en-GB", {
    hour12: false,
  });

  document.getElementById("system-clock").innerHTML = `
${time}
`;
}

setInterval(updateClock, 1000);

updateClock();

// ========== HELP WINDOW ==========

const helpButton = document.getElementById("help-button");

const helpPopup = document.getElementById("help-popup");

const closeHelp = document.getElementById("close-help");

helpButton.onclick = function () {
  helpPopup.style.display = "flex";
};

closeHelp.onclick = function () {
  helpPopup.style.display = "none";
};

// ========== CLOSE HELP WINDOW ==========

helpPopup.onclick = function (e) {
  if (e.target === helpPopup) {
    helpPopup.style.display = "none";
  }
};

function createPatientList() {
  const list = document.getElementById("patient-list");

  list.innerHTML = "";

  patients.forEach((patient) => {
    const button = document.createElement("button");

    button.className = "patient-select";

    button.innerHTML = `
            <b>${patient.name}</b>
            <br>
            ${patient.isotope}
            `;

    button.onclick = () => {
      selectPatient(patient);
    };

    list.appendChild(button);
  });
}

function selectPatient(patient) {
  selectedPatient = patient;

  // Remove ALL patient markers

  patientMarkers.forEach((marker) => {
    if (map.hasLayer(marker)) {
      map.removeLayer(marker);
    }
  });

  // Find the selected patient's marker

  const selectedMarker = patientMarkers.find(
    (marker) => marker.data === patient,
  );

  // Add only the selected marker

  if (selectedMarker) {
    selectedMarker.addTo(map);
  }

  // Keep ALL hospitals and facilities visible

  // Move map to patient

  map.setView(patient.coords, 9);

  // Update patient selection styling

  document.querySelectorAll(".patient-select").forEach((button) => {
    button.classList.remove("selected");
  });

  const buttons = document.querySelectorAll(".patient-select");

  patients.forEach((p, index) => {
    if (p === patient && buttons[index]) {
      buttons[index].classList.add("selected");
    }
  });

  // Patient becomes the routing starting point

  if (mode === "patient") {
    selectedStart = patient;
  }

  // Update opacity

  updateOpacity();

  // Show patient information

  openPanel(patient);
}

// Create the patient list and select the first patient

createPatientList();

selectPatient(patients[0]);
