export type Locale = 'en' | 'sq' | 'it'

export const locales: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'sq', label: 'SQ' },
  { code: 'it', label: 'IT' },
]

export const t = {
  en: {
    nav: {
      home: 'Home',
      collections: 'Collections',
      kitchens: 'Kitchens',
      living: 'Living Rooms',
      wardrobes: 'Wardrobes',
      bathrooms: 'Bathrooms',
      about: 'About',
      story: 'Our Story',
      craft: 'Craftsmanship',
      sustainability: 'Sustainability',
      showrooms: 'Showrooms',
      contact: 'Contact',
      language: 'Language',
    },
    home: {
      heroTitle: 'Redefining Living Spaces',
      heroSubtitle:
        'Handcrafted luxury furniture that transforms houses into homes. Italian-inspired design, made in Albania.',
      cta: 'Explore Collections',
      philosophyTitle: 'Crafted with Purpose',
      philosophyBody:
        'At Trin Furniture, every piece is a testament to excellence. We blend Albanian craftsmanship with Italian design philosophy.',
      stats: {
        years: 'Years',
        projects: 'Projects',
        countries: 'Countries',
        custom: 'Custom',
      },
    },
    kitchens: { hero: 'Kitchen Collections', styles: [
      'Minimal Contemporary - Handleless, LED lighting',
      'Natural Elegance - Oak/walnut, marble, brass',
      'Industrial Chic - Steel, concrete, glass',
      'Classic Luxury - Framed doors, premium stone',
    ] },
    living: { hero: 'Living Room Systems', categories: ['Media Walls', 'Storage Solutions', 'Room Dividers'] },
    wardrobes: { hero: 'Wardrobe Collections', types: ['Walk-In Closets', 'Sliding Door Systems', 'Hinged Wardrobes'] },
    bathrooms: { hero: 'Bathroom Furniture', collections: ['Vanity Units', 'Storage Towers', 'Mirror Cabinets'] },
    story: {
      hero: 'Our Journey',
      timeline: [
        '1998: Founded Tirana',
        '2005: 5,000 sqm facility',
        '2012: Export to Italy/Greece/Kosovo',
        '2018: Flagship showroom',
        '2025: 15 countries, 5,000+ projects',
      ],
      values: ['Quality', 'Innovation', 'Sustainability'],
    },
    craft: {
      hero: 'Craftsmanship',
      steps: ['Design Consultation', 'Material Selection', 'Precision Manufacturing', 'Quality Control', 'Installation'],
      materials: ['Wood (Oak, Walnut, Ash, Teak)', 'Lacquers', 'Stones', 'Metals', 'Glass'],
    },
    sustainability: {
      hero: 'Building a Better Future',
      initiatives: ['FSC wood', 'Low-VOC finishes', '30% solar', '85% recycling', 'Local sourcing'],
    },
    showrooms: {
      hero: 'Showrooms',
      tirana: {
        address: 'Rruga Dëshmorët e Kombit, 1001',
        hours: 'Mon-Sat 9-19, Sun 10-16',
        size: '800 sqm',
      },
      durres: {
        address: 'Rruga Taulantia, 2001',
        hours: 'Mon-Sat 9-18, Sun Closed',
      },
      cta: 'Schedule Consultation',
    },
    contact: {
      hero: 'Contact',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        country: 'Country',
        projectType: 'Project Type',
        message: 'Message',
        submit: 'Send Message',
      },
      info: {
        email: 'info@trinfurniture.com',
        phone: '+355 4 123 4567',
        location: 'Tirana, Albania',
      },
    },
    footer: {
      collections: 'Collections',
      company: 'Company',
      support: 'Support',
      contact: 'Contact',
      bottom: '© 2025 Trin Furniture. All rights reserved. | Made with passion in Albania',
    },
  },
  sq: {
    nav: {
      home: 'Kreu',
      collections: 'Koleksionet',
      kitchens: 'Kuzhina',
      living: 'Dhoma Ndenjeje',
      wardrobes: 'Dollapë',
      bathrooms: 'Banjot',
      about: 'Rreth Nesh',
      story: 'Historia Jonë',
      craft: 'Aftësia Artizanale',
      sustainability: 'Qëndrueshmëria',
      showrooms: 'Showroom-e',
      contact: 'Kontakt',
      language: 'Gjuha',
    },
    home: {
      heroTitle: 'Ridizajnimi i Hapësirave të Jetesës',
      heroSubtitle:
        'Mobilie luksoze të punuara me dorë që transformojnë shtëpitë në shtëpi. Zbuloni artin e dizajnit të frymëzuar italian, i bërë në Shqipëri.',
      cta: 'Eksploro Koleksionet',
      philosophyTitle: 'Krijuar me Qëllim',
      philosophyBody:
        'Në Trin Furniture, çdo pjesë është një dëshmi e përsosmërisë. Ne bashkojmë mjeshtërinë shqiptare me filozofinë e dizajnit italian.',
      stats: { years: 'Vite', projects: 'Projekte', countries: 'Shtete', custom: 'Personalizim' },
    },
    kitchens: { hero: 'Koleksionet e Kuzhinave', styles: [
      'Minimal Bashkëkohor - Pa doreza, ndriçim LED',
      'Elegancë Natyrore - Lisi/arra, mermer, bronz',
      'Industrial Chic - Çelik, beton, qelq',
      'Luksoz Klasik - Dyer me korniza, gur premium',
    ] },
    living: { hero: 'Sistemet e Dhomave të Ndenjjes', categories: ['Mure Media', 'Zgjidhje Ruajtjeje', 'Ndarëse Dhoma'] },
    wardrobes: { hero: 'Koleksionet e Dollapëve', types: ['Dollape Walk-In', 'Sisteme me Dyer Rëshqitëse', 'Dollapë me Mentesha'] },
    bathrooms: { hero: 'Mobilie Banjoje', collections: ['Njësi Lavamanësh', 'Kulla Ruajtjeje', 'Kabinete Pasqyrash'] },
    story: {
      hero: 'Udhëtimi Ynë',
      timeline: [
        '1998: Themeluar në Tiranë',
        '2005: Objekti 5,000 m²',
        '2012: Eksport në Itali/Greqi/Kosovë',
        '2018: Showroom kryesor',
        '2025: 15 shtete, 5,000+ projekte',
      ],
      values: ['Cilësi', 'Inovacion', 'Qëndrueshmëri'],
    },
    craft: { hero: 'Aftësia Artizanale', steps: ['Konsultim Dizajni', 'Përzgjedhje Materialesh', 'Prodhim me Saktësi', 'Kontrolli i Cilësisë', 'Instalim'], materials: ['Dru (Lis, Arra, Frashër, Tik)', 'Llak', 'Gurra', 'Metale', 'Qelq'] },
    sustainability: { hero: 'Ndërtimi i një të Ardhmeje më të Mirë', initiatives: ['Dru FSC', 'Përfundime me VOC të ulët', '30% diellore', '85% riciklim', 'Furnizim lokal'] },
    showrooms: { hero: 'Showroom-e', tirana: { address: 'Rruga Dëshmorët e Kombit, 1001', hours: 'Hën-Sht 9-19, Die 10-16', size: '800 m²' }, durres: { address: 'Rruga Taulantia, 2001', hours: 'Hën-Sht 9-18, Die Mbyllur' }, cta: 'Planifikoni Konsultim' },
    contact: { hero: 'Kontakt', form: { name: 'Emri', email: 'Email', phone: 'Telefoni', country: 'Shteti', projectType: 'Lloji i Projektit', message: 'Mesazhi', submit: 'Dërgo Mesazh' }, info: { email: 'info@trinfurniture.com', phone: '+355 4 123 4567', location: 'Tiranë, Shqipëri' } },
    footer: { collections: 'Koleksionet', company: 'Kompania', support: 'Suport', contact: 'Kontakt', bottom: '© 2025 Trin Furniture. Të gjitha të drejtat e rezervuara. | Bërë me pasion në Shqipëri' },
  },
  it: {
    nav: {
      home: 'Home',
      collections: 'Collezioni',
      kitchens: 'Cucine',
      living: 'Soggiorni',
      wardrobes: 'Armadi',
      bathrooms: 'Bagni',
      about: 'Azienda',
      story: 'La Nostra Storia',
      craft: 'Artigianalità',
      sustainability: 'Sostenibilità',
      showrooms: 'Showroom',
      contact: 'Contatti',
      language: 'Lingua',
    },
    home: {
      heroTitle: 'Ridefinire Gli Spazi Abitativi',
      heroSubtitle:
        'Mobili di lusso artigianali che trasformano le case in abitazioni. Scopri l\'arte del design di ispirazione italiana, fatto in Albania.',
      cta: 'Esplora le Collezioni',
      philosophyTitle: 'Realizzato con Scopo',
      philosophyBody:
        'Da Trin Furniture, ogni pezzo è una testimonianza di eccellenza. Uniamo l\'artigianalità albanese con la filosofia del design italiano.',
      stats: { years: 'Anni', projects: 'Progetti', countries: 'Paesi', custom: 'Su Misura' },
    },
    kitchens: { hero: 'Collezioni Cucine', styles: [
      'Minimal Contemporaneo - Senza maniglie, illuminazione LED',
      'Eleganza Naturale - Rovere/noce, marmo, ottone',
      'Industriale Chic - Acciaio, cemento, vetro',
      'Lusso Classico - Ante incorniciate, pietra premium',
    ] },
    living: { hero: 'Sistemi Soggiorno', categories: ['Pareti Attrezzate', 'Soluzioni Contenitive', 'Divisori'] },
    wardrobes: { hero: 'Collezioni Armadi', types: ['Cabine Armadio', 'Sistemi Scorrevoli', 'Armadi Battenti'] },
    bathrooms: { hero: 'Mobili da Bagno', collections: ['Mobili Lavabo', 'Colonne', 'Pensili Specchio'] },
    story: { hero: 'Il Nostro Viaggio', timeline: ['1998: Fondata a Tirana', '2005: Stabilimento 5.000 mq', '2012: Export in Italia/Grecia/Kosovo', "2018: Showroom principale", '2025: 15 paesi, 5.000+ progetti'], values: ['Qualità', 'Innovazione', 'Sostenibilità'] },
    craft: { hero: 'Artigianalità', steps: ['Consulenza di Design', 'Selezione Materiali', 'Produzione di Precisione', 'Controllo Qualità', 'Installazione'], materials: ['Legno (Rovere, Noce, Frassino, Teak)', 'Laccati', 'Pietre', 'Metalli', 'Vetro'] },
    sustainability: { hero: 'Costruire un Futuro Migliore', initiatives: ['Legno FSC', 'Finiture a basso VOC', '30% solare', '85% riciclo', 'Approvvigionamento locale'] },
    showrooms: { hero: 'Showroom', tirana: { address: 'Rruga Dëshmorët e Kombit, 1001', hours: 'Lun-Sab 9-19, Dom 10-16', size: '800 mq' }, durres: { address: 'Rruga Taulantia, 2001', hours: 'Lun-Sab 9-18, Dom Chiuso' }, cta: 'Programma Consulenza' },
    contact: { hero: 'Contatti', form: { name: 'Nome', email: 'Email', phone: 'Telefono', country: 'Paese', projectType: 'Tipo di Progetto', message: 'Messaggio', submit: 'Invia Messaggio' }, info: { email: 'info@trinfurniture.com', phone: '+355 4 123 4567', location: 'Tirana, Albania' } },
    footer: { collections: 'Collezioni', company: 'Azienda', support: 'Supporto', contact: 'Contatti', bottom: '© 2025 Trin Furniture. Tutti i diritti riservati. | Fatto con passione in Albania' },
  },
} as const

export const getCopy = (locale: Locale) => t[locale]
