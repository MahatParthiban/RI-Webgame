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
    name: "Haazima binti Anwar",
    type: "Patient",
    coords: [52.13947297196391, -106.5742796298504],
    isotope: "Saskatoon, Saskatchewan, Canada", //  MISLEADING NAME - not used for isotope, used for location instead now
  },

  {
    name: "Amélie Rousseau",
    type: "Patient",
    coords: [36.3310482037849, 127.37638647785163],
    isotope: "Yongjeon-dong, Daejeon, South Korea", //  MISLEADING NAME - not used for isotope, used for location instead now
  },

  {
    name: "Amélie Robyn Goodrem",
    type: "Patient",
    coords: [-7.733808148561492, 109.0088011063192],
    isotope: "Surabaya, East Java, Indonesia  ", //  MISLEADING NAME - not used for isotope, used for location instead now
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

      "Supports production and distribution of isotopes used in diagnostic and therapeutic applications",

      "Provides essential materials for radiopharmaceutical manufacturing",

      "Part of the international supply chain supporting hospitals across Europe",
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
      "National research facility operated by the Science and Technology Facilities Council (STFC)",

      "Develops advanced laser, accelerator, and photonics technologies for scientific research",

      "Supports research into future applications of high-power laser systems and nuclear science",

      "Provides a platform for collaboration between universities, industry, and research organisations",
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
      "UK government-owned nuclear research organisation specialising in nuclear science and technology",

      "Develops innovative methods for recovering valuable materials from existing nuclear resources",

      "Supports research into future domestic supplies of medical radionuclides",

      "Works with universities and healthcare partners to advance next-generation nuclear medicine technologies",
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
      "Historic centre for the development and manufacture of radiopharmaceutical technologies",

      "Supports nuclear medicine through diagnostic imaging products and healthcare solutions",

      "Develops technologies used in PET and SPECT imaging applications",

      "Provides expertise in radiopharmaceutical science and medical imaging technologies",
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
      "Diagnostic nuclear medicine services are available at both Guy's Hospital and St Thomas' Hospital.",

      "Specialist clinics include thyroid, thyroid oncology, neuroendocrine, radium, and osteoporosis services.",

      "Radionuclide therapies, including radioactive iodine, are delivered at Guy's Hospital with specialist inpatient care when required.",

      "Dedicated paediatric imaging and cardiac stress testing are also provided.",

      "Services operate Monday–Friday, offering both diagnostic imaging and therapeutic procedures.",
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
      "Provides a regional nuclear medicine service supporting patients across Bristol and the South West.",

      "Offers a wide range of diagnostic imaging procedures to assist in the investigation and monitoring of disease.",

      "Works closely with oncology, cardiology, endocrinology, and orthopaedic teams to support patient care.",

      "Specialist imaging is performed using advanced gamma camera technology by a multidisciplinary team.",

      "Appointments are available throughout the week, delivering both routine and specialist nuclear medicine services.",
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
      "Provides specialist nuclear medicine and PET/CT services across the Sutton and Chelsea hospital sites.",

      "Offers advanced imaging pathways supporting cancer diagnosis, staging, treatment planning, and long-term patient follow-up.",

      "Delivers a comprehensive range of radionuclide therapies through one of the UK's largest and most experienced nuclear medicine therapy centres.",

      "Works closely with leading research institutions to develop innovative imaging techniques and support clinical research.",

      "Dedicated multidisciplinary teams provide both diagnostic imaging and therapeutic procedures using state-of-the-art facilities.",
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
      "Supports both routine and specialist nuclear medicine investigations for patients from across the Midlands.",

      "Performs functional imaging and molecular diagnostics to assist clinicians in diagnosing and monitoring a wide range of diseases.",

      "Provides dedicated imaging pathways for oncology, cardiology, neurology, renal, and endocrine services.",

      "Offers specialised PET/CT and SPECT/CT imaging alongside a range of radionuclide therapies delivered by experienced multidisciplinary teams.",

      "Contributes to clinical research and innovation while providing high-quality diagnostic and therapeutic nuclear medicine services.",
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
      "Provides independent private healthcare services with a focus on accessible diagnostic investigations and patient-centred care.",

      "Features a dedicated imaging department supporting a variety of non-invasive diagnostic procedures.",

      "Uses advanced radiology equipment to assist consultants in assessing and managing a wide range of medical conditions.",

      "Serves the local Kent community through specialist-led imaging and outpatient diagnostic services.",

      "Does not operate a dedicated nuclear medicine department or provide radionuclide-based diagnostic and therapeutic procedures.",
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
      "Provides comprehensive cancer diagnosis, treatment and specialist oncology services for patients across Northern and Central Alberta.",

      "Features a dedicated cyclotron at the Cross Cancer Institute operated by Tracer Hub, producing a range of radioisotopes for clinical and research use.",

      "Works alongside the Medical Isotope and Cyclotron Facility (MICF) in Edmonton, with the two cyclotrons designed to support one another during scheduled or unexpected maintenance.",

      "Provides nuclear medicine and advanced diagnostic imaging services using radioisotopes for the investigation and management of cancer and other medical conditions.",

      "Provides radiation oncology, systemic cancer treatments and specialist therapies, supported by multidisciplinary oncology teams.",

      "Forms part of Alberta's wider radiopharmaceutical network, with a new facility under construction beside the Tom Baker Cancer Centre in Calgary that will add a third cyclotron and expand provincial production capacity.",
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
      "Provides specialist cancer diagnosis, treatment and supportive care for patients throughout Northeastern Ontario.",

      "Provides systemic cancer treatment including chemotherapy and other oncology therapies for a large regional patient population.",

      "Provides radiation therapy services for the treatment and management of a wide range of cancers.",

      "Supports specialist cancer care through diagnostic imaging, laboratory services and multidisciplinary oncology teams.",

      "Acts as a regional cancer centre, reducing the need for patients in Northern Ontario to travel to Southern Ontario for specialist treatment.",
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
      "Provides highly specialised cancer diagnosis, treatment and research services across a wide range of cancer types.",

      "Features a dedicated Radiation Medicine Program providing advanced radiation oncology and precision radiation treatments.",

      "Provides access to functional and molecular imaging, including PET imaging using short-lived positron-emitting radioisotopes.",

      "The wider UHN network operates a cyclotron facility at Toronto General Hospital, located separately from Princess Margaret, which produces short-lived diagnostic isotopes for PET imaging.",

      "The UHN cyclotron produces isotopes including F-18, Ga-68 and Cu-64, which are incorporated into radiopharmaceuticals and transported to Princess Margaret for clinical imaging.",

      "Because these isotopes have relatively short half-lives, radiopharmaceuticals are produced close to the point of use and rapidly transported from the cyclotron facility to the Princess Margaret imaging departments.",

      "Provides specialist medical, surgical and systemic cancer treatments supported by multidisciplinary oncology teams.",
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
      "Provides specialist cancer diagnosis, treatment and supportive care for patients across Nova Scotia and Atlantic Canada.",

      "Operates a cyclotron and radiopharmaceutical production facility capable of producing short-lived radioisotopes for advanced medical imaging.",

      "Produces PET radiopharmaceuticals on-site, allowing short-lived tracers to be manufactured and used rapidly within the hospital.",

      "Operates a comprehensive nuclear medicine radiopharmacy that prepares a range of diagnostic radiopharmaceuticals for use within the QEII and across Nova Scotia.",

      "Provides PET-CT and other nuclear medicine imaging for cancer diagnosis, staging and monitoring, as well as neurological and cardiac investigations.",

      "Provides radiation oncology and systemic cancer treatments supported by specialist imaging, laboratory investigations and multidisciplinary oncology services.",
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
      "Canada's largest university-based research reactor and a major facility for medical isotope production",

      "Produces a wide range of radioisotopes for medical, research and technical applications",

      "Specialises in reactor-produced medical isotopes, with a particularly important role in the international supply of I-125",

      "Also operates a dedicated cyclotron facility for producing short-lived positron-emitting isotopes for medical imaging",

      " Houses a 5 MW open-pool Materials Test Reactor (MTR) used for neutron irradiation and radioisotope production",

      "Also operates a separate 16.5 MeV GE PETtrace negative-ion cyclotron for short-lived positron-emitting isotopes",

      "Certain isotopes have to be special ordered and produced in advance, which can add significant time to the supply chain.",
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
      "Short-lived diagnostic and therapeutic medical radioisotopes for PET and other nuclear medicine applications",

      "Operates three on-site cyclotrons within the Radiochemistry Annex",

      "Includes ACSI TR-13, ACSI TR-24 and ACSI TR-30 cyclotrons supporting different isotope-production requirements",

      "Major Canadian production and distribution hub supplying medical isotopes internationally",
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
      "Cyclotron-based medical isotope production facility within the University Health Network",

      "Produces short-lived positron-emitting radioisotopes primarily for advanced PET imaging",

      "Produces radiopharmaceutical tracers for cancer imaging and other specialised diagnostic applications",

      "Works closely with UHN's nuclear medicine and oncology services, allowing short-lived tracers to be produced close to their point of clinical use",
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
      "85 MW high-flux research reactor used for isotope production, neutron irradiation and scientific research",

      "Produces Strontium-89 through neutron capture on enriched Strontium-88 targets",

      "Operates as part of the U.S. Department of Energy Isotope Program, supplying medical and research radioisotopes",

      "Provides a major international source of radioisotopes used in cancer therapy, diagnostic imaging and other medical applications",
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
      "Provides specialist nuclear medicine services for the diagnosis, staging, and monitoring of a wide range of diseases.",

      "Operates an on-site medical cyclotron for the production of short-lived radioisotopes used in PET and other advanced molecular imaging procedures.",

      "The cyclotron can support production of a broad range of medical radioisotopes using liquid, gas, and specialised solid target systems, depending on the facility configuration.",

      "Produces short-lived positron-emitting tracers for applications including oncology, neurology, and cardiac imaging, allowing radiopharmaceuticals to be prepared close to the point of clinical use.",

      "The facility's isotope-production capabilities support both routine clinical imaging and more specialised research applications involving advanced radiopharmaceuticals.",

      "Provides integrated nuclear medicine, radiopharmacy, and diagnostic imaging services, reducing the transport time required for short-lived radiopharmaceuticals.",
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
      "Provides specialist nuclear medicine and PET/CT services for the diagnosis, staging, and monitoring of a wide range of diseases.",

      "Operates an on-site Siemens ECLIPSE medical cyclotron for the production of short-lived radioisotopes used in PET imaging and nuclear medicine.",

      "The cyclotron supports the production of medical radionuclides and radiopharmaceuticals for clinical PET imaging, allowing short-lived products to be prepared close to the point of use.",

      "The facility's cyclotron-based production capabilities are particularly suited to short-lived positron-emitting radioisotopes used for advanced molecular imaging.",

      "The combination of on-site isotope production and nuclear medicine services reduces the transport time required for short-lived radiopharmaceuticals and supports reliable clinical imaging.",
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
      "Provides specialist nuclear medicine services for diagnostic imaging and radionuclide-based investigations.",

      "Operates PET/CT for molecular and functional imaging, particularly for cancer diagnosis and treatment assessment.",

      "Operates two SPECT gamma cameras for nuclear medicine examinations.",

      "Uses nuclear medicine imaging to identify metabolic and biochemical abnormalities before structural changes become apparent.",

      "Provides specialist nuclear medicine services as part of a major university-affiliated hospital in Daejeon.",

      "Operates an on site cyclotron alongside the nuclear medicine department, allowing short-lived radioisotopes to be produced and used rapidly for clinical imaging.",
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
      "Major university hospital providing specialist medical services to patients across Daejeon and the surrounding region.",

      "Provides specialist oncology, diagnostic imaging and multidisciplinary medical care.",

      "Supports nuclear medicine investigations through specialist diagnostic and imaging services.",

      "Provides advanced diagnostic facilities supporting cancer, cardiovascular and neurological investigations.",

      "Acts as a major regional teaching and research hospital within Daejeon.",
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
      "Major Korean research facility specialising in accelerator-based radioisotope production and radiopharmaceutical research.",

      "Operates a high-current 30 MeV RFT-30 cyclotron with multiple beamlines and dedicated target systems for different radioisotope production requirements.",

      "Produces a range of medical radioisotopes, including radiometals used for PET imaging, theranostics, and radiopharmaceutical research.",

      "Supports production and development of longer-lived radiometals as well as short-lived radionuclides for medical applications.",

      "Supplies research quantities of selected radioisotopes to hospitals and research groups across South Korea.",

      "Provides specialist facilities for target irradiation, radioisotope separation, purification, and radiopharmaceutical development.",
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
      "National research and medical facility specialising in radiological and nuclear medicine technologies.",

      "Operates cyclotron-based radioisotope production facilities supporting PET, SPECT, and other nuclear medicine applications.",

      "Produces and researches medical radioisotopes for diagnostic imaging, therapeutic applications, and radiopharmaceutical development.",

      "Supports production of short-lived radionuclides for PET imaging, allowing radiopharmaceuticals to be prepared close to clinical use.",

      "Provides research and development facilities for the production, processing, and clinical application of medical radioisotopes.",

      "Works closely with Korea Cancer Center Hospital and the wider KIRAMS research network to translate radioisotope technologies into clinical applications.",
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
      "Provides specialist nuclear medicine services for the diagnosis, staging, and monitoring of a wide range of diseases.",

      "Provides nuclear medicine imaging including bone scans, thyroid imaging, renal investigations, cardiac perfusion studies, and brain imaging.",

      "Uses gamma-camera-based imaging with a range of diagnostic radiopharmaceuticals, alongside therapeutic nuclear medicine procedures.",

      "Provides specialised lung and functional imaging services that can support the investigation of respiratory disease.",

      "Provides radionuclide therapy including radioactive iodine treatment and other therapeutic nuclear medicine procedures.",

      "Acts as a major referral hospital in East Java, providing specialist nuclear medicine services to patients from across the region.",
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
      "National referral centre providing comprehensive nuclear medicine and molecular imaging services.",

      "Operates multiple SPECT/CT systems and a PET/CT scanner for advanced functional and molecular imaging.",

      "Provides V/Q studies and other nuclear medicine investigations relevant to the assessment of pulmonary and cardiovascular function.",

      "Operates dedicated radiopharmacy laboratories for the preparation and handling of medical radiopharmaceuticals.",

      "Provides diagnostic and therapeutic nuclear medicine services for oncology, cardiology, endocrinology, neurology, nephrology, and other specialist applications.",

      "Provides specialist radioisotope therapy including I-131, Sm-153, Lu-177, and other radionuclide-based treatments.",

      "Acts as a national centre for nuclear medicine education, research, and specialist clinical care.",
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
      "Indonesia's major national referral hospital providing highly specialised medical and nuclear medicine services.",

      "Provides advanced nuclear medicine imaging for the diagnosis, staging, and monitoring of cancer and other complex diseases.",

      "Provides SPECT/CT and PET/CT molecular imaging services using diagnostic radiopharmaceuticals.",

      "Provides specialist nuclear medicine investigations across oncology, cardiology, neurology, endocrinology, and other clinical areas.",

      "Provides radionuclide-based therapeutic procedures as part of its specialist nuclear medicine service.",

      "Its central Jakarta location makes it an important national destination for patients requiring advanced nuclear medicine investigations and treatment.",
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
      "Provides specialist nuclear medicine services for patients from Yogyakarta and surrounding regions.",

      "Provides diagnostic nuclear medicine imaging using gamma-camera and SPECT-based techniques.",

      "Supports investigation of cancer, endocrine disorders, cardiovascular disease, renal function, and other conditions using radiopharmaceuticals.",

      "Provides radionuclide-based diagnostic and therapeutic procedures as part of its specialist nuclear medicine service.",

      "Supports multidisciplinary patient care by integrating nuclear medicine imaging with oncology, radiology, and other specialist departments.",

      "Acts as a major referral hospital for Central Java and the Yogyakarta region, providing access to specialist nuclear medicine services.",
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
      "Major Indonesian facility for the production and processing of medical radioisotopes and radiopharmaceuticals",

      "Supplies technetium-99m for use in nuclear medicine procedures",

      "Produces radioisotopes through reactor-based production and subsequent radiochemical processing",

      "Supports the domestic supply of radioisotopes used for diagnostic and therapeutic nuclear medicine",
    ],
  },

 

  {
    name: "TRIGA 2000 Bandung Research Reactor",

    image: "images/TRIGA_Bandung.jpg",

    loc: "Bandung, West Java, Indonesia",

    op: "BRIN",

    type: "Facility",

    coords: [-6.8908, 107.6107],

    spectrogram: "images/TRIGA_Bandung_spect.png",

    produces: [
      "2 MW research reactor used for nuclear research, education, training and radioisotope production",

      "Supports production of radioisotopes for medical and research applications",

      "Provides neutron irradiation facilities for the development and production of radioisotopes",

      "Supports Indonesian nuclear medicine through the production of radionuclides used in radiopharmaceutical applications",

      "Forms part of Indonesia's national network of research reactors supporting medical isotope production",
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
