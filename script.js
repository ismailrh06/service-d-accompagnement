/* ═══════════════════════════════════════════════════════════════════
   Darna Relocation — JavaScript  (FR / EN / NL)
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────────────────────────
     TRANSLATIONS
  ────────────────────────────────────────────────────────────────── */
  const T = {
    fr: {
      /* Nav */
      nav_home:     'Accueil',
      nav_services: 'Nos Services',
      nav_packs:    'Packs',
      nav_why:      'Pourquoi Nous',
      nav_testi:    'Témoignages',
      nav_cta:      'Demander un devis',
      nav_cta_short:'Contact',

      /* Hero */
      hero_badge: "Service d'accompagnement MRE",
      hero_title: 'Installez-vous au Maroc<br /><em>en toute sérénité</em>',
      hero_sub:   "Vous souhaitez vous installer au Maroc pour travailler, investir, créer une entreprise ou commencer une nouvelle vie ?<br /><strong>Nous nous occupons de tout.</strong>",
      hero_btn1:  'Commencer mon installation',
      hero_btn2:  'Découvrir nos services',
      stat1:      'Familles accompagnées',
      stat2:      'Villes couvertes',
      stat3:      'Clients satisfaits',
      scroll_lbl: 'Découvrir',

      /* Band */
      band_text: 'Logement · Démarches administratives · Transport · Emploi · Scolarité · Banque · Conseils personnalisés',

      /* About */
      about_label:'Notre mission',
      about_title:'Un accompagnement humain,<br />du début à la fin',
      about_p1:   "Nous accompagnons les Marocains Résidant à l'Étranger dans <strong>toutes les étapes de leur installation</strong>. Logement, démarches, transport, conseils, organisation du quotidien : nous prenons en charge les détails pour que votre arrivée se fasse avec <strong>confort, confiance et tranquillité</strong>.",
      about_p2:   "Que vous rentriez définitivement ou pour une longue durée, notre équipe locale est à votre disposition pour transformer ce projet de vie en une expérience fluide et sereine.",
      about_card: 'Votre nouvelle vie au Maroc commence ici',
      about_li1:  '✔ Équipe locale expérimentée',
      about_li2:  '✔ Suivi personnalisé de A à Z',
      about_li3:  '✔ Disponible en français, néerlandais, arabe & anglais',
      about_li4:  '✔ Réseau de partenaires de confiance',

      /* Services */
      serv_label: 'Ce que nous faisons',
      serv_title: 'Nos Services',
      serv_desc:  'Un accompagnement complet pour chaque aspect de votre installation au Maroc.',
      s1_title:'Recherche de logement',         s1_desc:"Appartement, villa ou riad : nous cherchons, visitons et négocions pour vous, selon votre budget et vos préférences.",
      s2_title:'Accompagnement administratif',  s2_desc:"CIN, carte de séjour, inscription consulaire, permis de conduire… nous gérons toutes vos démarches officielles.",
      s3_title:'Ouverture de compte bancaire',  s3_desc:"Nous vous orientons vers les meilleures banques et vous accompagnons lors de l'ouverture de votre compte en dirhams.",
      s4_title:'Installation familiale',         s4_desc:"Mobilier, électroménager, connexion internet, médecin de famille : nous organisons votre quotidien dès le premier jour.",
      s5_title:'Scolarité des enfants',          s5_desc:"Recherche d'école publique, privée ou internationale, inscription et suivi administratif pour vos enfants.",
      s6_title:"Emploi & Création d'activité",  s6_desc:"Mise en relation avec des recruteurs locaux ou accompagnement pour la création de votre entreprise au Maroc.",
      s7_title:'Transport aéroport',             s7_desc:"Prise en charge dès votre arrivée à l'aéroport avec un chauffeur privé et transfert vers votre nouveau domicile.",
      s8_title:'Conseils avant le départ',       s8_desc:"Consultation vidéo pour préparer votre déménagement : ce qu'il faut prévoir, apporter, et anticiper.",

      /* Packs */
      packs_label: 'Formules',
      packs_title: "Packs d'accompagnement",
      packs_desc:  'Choisissez la formule adaptée à votre projet et votre budget.',
      on_quote:    'Sur devis',
      pack_popular:'Le plus choisi',
      pack_btn:    'Demander un devis',
      p1_name:'Essentiel', p2_name:'Confort', p3_name:'Premium',
      p1_f1:'✔ Conseil personnalisé (1h)', p1_f2:'✔ Transport aéroport', p1_f3:'✔ Recherche de logement', p1_f4:'✔ Ouverture de compte bancaire', p1_f5:'✘ Démarches administratives', p1_f6:'✘ Scolarité enfants', p1_f7:'✘ Accompagnement emploi',
      p2_f1:'✔ Tout le pack Essentiel', p2_f2:'✔ Démarches administratives complètes', p2_f3:'✔ Scolarité des enfants', p2_f4:'✔ Installation familiale', p2_f5:'✔ Suivi 30 jours post-installation', p2_f6:'✘ Accompagnement emploi/création',
      p3_f1:'✔ Tout le pack Confort', p3_f2:'✔ Accompagnement emploi ou création', p3_f3:'✔ Conseils investissement immobilier', p3_f4:'✔ Réseau professionnel local', p3_f5:'✔ Suivi 3 mois post-installation', p3_f6:'✔ Assistance disponible 7j/7',

      /* Why */
      why_label:'Nos engagements', why_title:'Pourquoi nous choisir ?', why_desc:"Ce qui nous distingue dans un service d'accompagnement MRE.",
      w1_title:'Expertise locale',            w1_desc:'Notre équipe connaît parfaitement le terrain marocain : villes, quartiers, administrations et prestataires de confiance.',
      w2_title:'Gain de temps considérable',  w2_desc:'Évitez des mois de recherches et de démarches. Nous avons déjà le réseau, les contacts et les solutions.',
      w3_title:'Accompagnement sur mesure',   w3_desc:'Chaque famille, chaque projet est unique. Nous adaptons nos services à votre situation personnelle.',
      w4_title:'Transparence totale',          w4_desc:'Pas de mauvaises surprises. Devis clair, suivi régulier et communication transparente à chaque étape.',
      w5_title:'Disponibilité multilingue',    w5_desc:'Notre équipe vous répond en français, néerlandais, anglais et arabe, selon votre préférence.',
      w6_title:'Réseau de partenaires',        w6_desc:'Agences immobilières, cabinets juridiques, écoles, banques, employeurs : un réseau solide à votre service.',

      /* Testimonials */
      testi_label:'Ils nous font confiance', testi_title:'Témoignages', testi_desc:"Ce que disent les familles que nous avons accompagnées.",
      t1_text:'"Nous avons quitté Lyon après 20 ans. Sans Darna Relocation, nous aurions été complètement perdus. Logement trouvé en 2 semaines, papiers réglés, enfants inscrits à l\'école. Un service exceptionnel."',
      t1_loc:'Retour de France, installé à Casablanca',
      t2_text:'"Le service est vraiment premium. On sentait qu\'on était entre de bonnes mains. Le transport aéroport, l\'appartement, le compte bancaire… tout était prêt à notre arrivée. Je recommande vivement à tous les MRE."',
      t2_loc:'Retour de Belgique, installée à Marrakech',
      t3_text:'"J\'avais beaucoup d\'appréhensions sur les démarches administratives. L\'équipe a tout géré avec professionnalisme et patience. Mon entreprise est lancée et ma famille est épanouie. Merci !"',
      t3_loc:"Retour d'Espagne, entrepreneur à Rabat",

      /* Process */
      proc_label:'Comment ça marche', proc_title:'Notre processus en 4 étapes',
      step1_title:'Prise de contact',   step1_desc:'Remplissez le formulaire ou appelez-nous. Nous analysons votre projet gratuitement.',
      step2_title:'Consultation',        step2_desc:'Un entretien vidéo pour comprendre vos besoins et vous proposer le pack adapté.',
      step3_title:'Accompagnement',      step3_desc:'Notre équipe prend en charge toutes les démarches selon votre plan personnalisé.',
      step4_title:'Installation & Suivi',step4_desc:"Vous arrivez, nous sommes là. Et on reste disponibles après pour tout ajustement.",

      /* Contact */
      contact_label:'Parlons de votre projet', contact_title:'Demandez votre devis gratuit',
      contact_sub:"Remplissez le formulaire et un conseiller vous contacte sous <strong>24h</strong> pour discuter de votre projet d'installation.",
      contact_phone_lbl:'Téléphone / WhatsApp', contact_pres_lbl:'Présence nationale', contact_pres_val:'Casablanca, Rabat, Marrakech, Tanger, Fès & +',
      form_name:'Nom complet *', form_name_ph:'Ex: Mohammed El Idrissi',
      form_email:'Email *',
      form_country:'Pays de résidence actuel *', form_country_ph:'Ex: France, Belgique…',
      form_city:'Ville d\'installation souhaitée', form_city_ph:'Ex: Casablanca, Rabat…',
      form_pack:'Pack souhaité', form_pack_opt0:'-- Je ne sais pas encore --',
      form_msg:'Décrivez votre projet *', form_msg_ph:'Parlez-nous de votre situation, vos besoins, votre calendrier…',
      form_submit:'Envoyer ma demande', form_notice:'Réponse garantie sous 24h · Service 100% confidentiel',
      form_sending:'Envoi en cours…',

      /* Footer */
      footer_tagline:"Votre partenaire de confiance pour une installation au Maroc sereine et réussie.",
      footer_nav:'Navigation', footer_serv:'Nos Services',
      footer_wa:'WhatsApp disponible',
      footer_copy:'© 2026 Darna Relocation. Tous droits réservés.',
      footer_love:'Fait avec ❤️ pour les MRE du monde entier',
      toast_msg:'✅ Votre demande a été envoyée ! Nous vous répondons sous 24h.',
    },

    en: {
      /* Nav */
      nav_home:'Home', nav_services:'Our Services', nav_packs:'Packages', nav_why:'Why Us', nav_testi:'Testimonials', nav_cta:'Get a Quote', nav_cta_short:'Contact',

      /* Hero */
      hero_badge:'MRE Relocation Service',
      hero_title:'Settle in Morocco<br /><em>with complete peace of mind</em>',
      hero_sub:"Want to move to Morocco to work, invest, start a business or begin a new life?<br /><strong>We take care of everything.</strong>",
      hero_btn1:'Start my relocation', hero_btn2:'Discover our services',
      stat1:'Families assisted', stat2:'Cities covered', stat3:'Satisfied clients', scroll_lbl:'Discover',

      /* Band */
      band_text:'Housing · Administrative procedures · Transport · Employment · Schooling · Banking · Personalised advice',

      /* About */
      about_label:'Our mission', about_title:'A personal approach,<br />from start to finish',
      about_p1:"We support Moroccans Living Abroad through <strong>every step of their relocation</strong>. Housing, paperwork, transport, advice, daily organisation: we handle the details so your arrival is smooth, confident and stress-free.",
      about_p2:"Whether you are returning permanently or for an extended stay, our local team is here to turn your life project into a seamless experience.",
      about_card:'Your new life in Morocco starts here',
      about_li1:'✔ Experienced local team', about_li2:'✔ Personalised support from A to Z', about_li3:'✔ Available in French, Dutch, Arabic & English', about_li4:'✔ Trusted partner network',

      /* Services */
      serv_label:'What we do', serv_title:'Our Services', serv_desc:'Complete support for every aspect of your relocation to Morocco.',
      s1_title:'Housing search',              s1_desc:'Apartment, villa or riad: we search, visit and negotiate on your behalf, within your budget and preferences.',
      s2_title:'Administrative support',      s2_desc:'National ID, residence permit, consular registration, driving licence… we handle all your official procedures.',
      s3_title:'Bank account opening',        s3_desc:'We guide you to the best banks and accompany you through opening your dirham account.',
      s4_title:'Family settlement',           s4_desc:'Furniture, appliances, internet, family doctor: we organise your daily life from day one.',
      s5_title:"Children's schooling",        s5_desc:'Search for public, private or international schools, enrolment and administrative follow-up for your children.',
      s6_title:'Employment & Business setup', s6_desc:'We connect you with local recruiters or guide you through setting up your business in Morocco.',
      s7_title:'Airport transfer',            s7_desc:'Picked up on arrival at the airport with a private driver and transferred to your new home.',
      s8_title:'Pre-departure advice',        s8_desc:'Video consultation to prepare your move: what to plan, bring and anticipate.',

      /* Packs */
      packs_label:'Plans', packs_title:'Relocation Packages', packs_desc:'Choose the plan that fits your project and budget.',
      on_quote:'Custom quote', pack_popular:'Most popular', pack_btn:'Request a quote',
      p1_name:'Essential', p2_name:'Comfort', p3_name:'Premium',
      p1_f1:'✔ Personalised advice (1h)', p1_f2:'✔ Airport transfer', p1_f3:'✔ Housing search', p1_f4:'✔ Bank account opening', p1_f5:'✘ Administrative procedures', p1_f6:"✘ Children's schooling", p1_f7:'✘ Employment support',
      p2_f1:'✔ Everything in Essential', p2_f2:'✔ Full administrative support', p2_f3:"✔ Children's schooling", p2_f4:'✔ Family settlement', p2_f5:'✔ 30-day post-arrival follow-up', p2_f6:'✘ Employment / business setup',
      p3_f1:'✔ Everything in Comfort', p3_f2:'✔ Employment or business support', p3_f3:'✔ Real estate investment advice', p3_f4:'✔ Local professional network', p3_f5:'✔ 3-month post-arrival follow-up', p3_f6:'✔ 7/7 assistance available',

      /* Why */
      why_label:'Our commitments', why_title:'Why choose us?', why_desc:'What sets us apart in MRE relocation services.',
      w1_title:'Local expertise',        w1_desc:'Our team knows Morocco inside out: cities, neighbourhoods, administrations and trusted service providers.',
      w2_title:'Significant time savings',w2_desc:'Skip months of research and admin. We already have the network, contacts and solutions.',
      w3_title:'Tailored support',        w3_desc:'Every family and project is unique. We adapt our services to your personal situation.',
      w4_title:'Full transparency',       w4_desc:'No nasty surprises. Clear quotes, regular updates and transparent communication at every step.',
      w5_title:'Multilingual availability',w5_desc:'Our team responds in French, Dutch, English and Arabic, according to your preference.',
      w6_title:'Partner network',         w6_desc:'Estate agents, legal firms, schools, banks, employers: a solid network at your service.',

      /* Testimonials */
      testi_label:'They trust us', testi_title:'Testimonials', testi_desc:'What the families we have supported have to say.',
      t1_text:'"We left Lyon after 20 years. Without Darna Relocation, we would have been completely lost. Housing found in 2 weeks, paperwork sorted, children enrolled in school. An exceptional service."',
      t1_loc:'Returned from France, settled in Casablanca',
      t2_text:'"The service is truly premium. We felt in very good hands. Airport transfer, apartment, bank account… everything was ready on arrival. I highly recommend it to all MREs."',
      t2_loc:'Returned from Belgium, settled in Marrakech',
      t3_text:'"I had a lot of concerns about the administrative procedures. The team handled everything with professionalism and patience. My business is up and running and my family is thriving. Thank you!"',
      t3_loc:'Returned from Spain, entrepreneur in Rabat',

      /* Process */
      proc_label:'How it works', proc_title:'Our 4-step process',
      step1_title:'Get in touch',    step1_desc:'Fill in the form or call us. We assess your project free of charge.',
      step2_title:'Consultation',    step2_desc:'A video call to understand your needs and propose the right package.',
      step3_title:'Support',         step3_desc:'Our team handles all the steps according to your personalised plan.',
      step4_title:'Move-in & Follow-up', step4_desc:'You arrive, we are there. And we stay available afterwards for any adjustments.',

      /* Contact */
      contact_label:'Let\'s talk about your project', contact_title:'Request your free quote',
      contact_sub:"Fill in the form and an advisor will contact you within <strong>24h</strong> to discuss your relocation project.",
      contact_phone_lbl:'Phone / WhatsApp', contact_pres_lbl:'National coverage', contact_pres_val:'Casablanca, Rabat, Marrakech, Tangier, Fes & more',
      form_name:'Full name *', form_name_ph:'E.g. Mohammed El Idrissi',
      form_email:'Email *',
      form_country:'Current country of residence *', form_country_ph:'E.g. France, Belgium…',
      form_city:'Desired city in Morocco', form_city_ph:'E.g. Casablanca, Rabat…',
      form_pack:'Desired package', form_pack_opt0:'-- I\'m not sure yet --',
      form_msg:'Describe your project *', form_msg_ph:'Tell us about your situation, needs and timeline…',
      form_submit:'Send my request', form_notice:'Response guaranteed within 24h · 100% confidential',
      form_sending:'Sending…',

      /* Footer */
      footer_tagline:'Your trusted partner for a smooth and successful relocation to Morocco.',
      footer_nav:'Navigation', footer_serv:'Our Services',
      footer_wa:'WhatsApp available',
      footer_copy:'© 2026 Darna Relocation. All rights reserved.',
      footer_love:'Made with ❤️ for MREs around the world',
      toast_msg:'✅ Your request has been sent! We will get back to you within 24h.',
    },

    nl: {
      /* Nav */
      nav_home:'Home', nav_services:'Onze Diensten', nav_packs:'Pakketten', nav_why:'Waarom Wij', nav_testi:'Getuigenissen', nav_cta:'Offerte aanvragen', nav_cta_short:'Contact',

      /* Hero */
      hero_badge:'MRE Relocatiedienst',
      hero_title:'Vestig u in Marokko<br /><em>zonder zorgen</em>',
      hero_sub:"Wilt u naar Marokko verhuizen om te werken, te investeren, een bedrijf op te starten of een nieuw leven te beginnen?<br /><strong>Wij regelen alles voor u.</strong>",
      hero_btn1:'Begin mijn verhuizing', hero_btn2:'Ontdek onze diensten',
      stat1:'Begeleidde gezinnen', stat2:'Steden gedekt', stat3:'Tevreden klanten', scroll_lbl:'Ontdekken',

      /* Band */
      band_text:'Huisvesting · Administratieve procedures · Transport · Werk · Schooling · Bankieren · Persoonlijk advies',

      /* About */
      about_label:'Onze missie', about_title:'Persoonlijke begeleiding,<br />van begin tot eind',
      about_p1:"Wij begeleiden Marokkanen die in het Buitenland wonen bij <strong>elke stap van hun verhuizing</strong>. Huisvesting, administratie, transport, advies, dagelijkse organisatie: wij nemen de details op ons zodat uw aankomst comfortabel, vertrouwd en zorgeloos verloopt.",
      about_p2:"Of u nu definitief terugkeert of voor langere tijd, ons lokale team staat voor u klaar om dit levensproject om te zetten in een vlotte en serene ervaring.",
      about_card:'Uw nieuwe leven in Marokko begint hier',
      about_li1:'✔ Ervaren lokaal team', about_li2:'✔ Persoonlijke begeleiding van A tot Z', about_li3:'✔ Beschikbaar in het Frans, Nederlands, Arabisch & Engels', about_li4:'✔ Betrouwbaar partnernetwerk',

      /* Services */
      serv_label:'Wat wij doen', serv_title:'Onze Diensten', serv_desc:'Volledige begeleiding bij elk aspect van uw verhuizing naar Marokko.',
      s1_title:'Woningzoekdienst',             s1_desc:'Appartement, villa of riad: wij zoeken, bezoeken en onderhandelen voor u, binnen uw budget en voorkeuren.',
      s2_title:'Administratieve begeleiding',  s2_desc:'Identiteitskaart, verblijfsvergunning, consulaire inschrijving, rijbewijs… wij regelen al uw officiële procedures.',
      s3_title:'Bankrekening openen',          s3_desc:'Wij begeleiden u naar de beste banken en ondersteunen u bij het openen van uw dirhamrekening.',
      s4_title:'Gezinsvestiging',              s4_desc:'Meubels, huishoudapparaten, internet, huisarts: wij organiseren uw dagelijks leven vanaf dag één.',
      s5_title:'Schoolkeuze kinderen',         s5_desc:'Zoeken van een openbare, privé- of internationale school, inschrijving en administratieve opvolging voor uw kinderen.',
      s6_title:'Werk & Bedrijfsoprichting',    s6_desc:'Wij verbinden u met lokale recruiters of begeleiden u bij het oprichten van uw bedrijf in Marokko.',
      s7_title:'Luchthaventransfer',           s7_desc:'Ophalen bij aankomst op de luchthaven met een privéchauffeur en vervoer naar uw nieuwe woning.',
      s8_title:'Advies vóór vertrek',          s8_desc:'Videoconsultatie om uw verhuizing voor te bereiden: wat u moet plannen, meenemen en anticiperen.',

      /* Packs */
      packs_label:'Formules', packs_title:'Begeleidingspakketten', packs_desc:'Kies het pakket dat past bij uw project en budget.',
      on_quote:'Op maat', pack_popular:'Meest gekozen', pack_btn:'Offerte aanvragen',
      p1_name:'Essentieel', p2_name:'Comfort', p3_name:'Premium',
      p1_f1:'✔ Persoonlijk advies (1u)', p1_f2:'✔ Luchthaventransfer', p1_f3:'✔ Woningzoekdienst', p1_f4:'✔ Bankrekening openen', p1_f5:'✘ Administratieve procedures', p1_f6:'✘ Schoolkeuze kinderen', p1_f7:'✘ Werkbegeleiding',
      p2_f1:'✔ Alles uit Essentieel', p2_f2:'✔ Volledige administratieve begeleiding', p2_f3:'✔ Schoolkeuze kinderen', p2_f4:'✔ Gezinsvestiging', p2_f5:'✔ 30 dagen opvolging na aankomst', p2_f6:'✘ Werk / bedrijfsoprichting',
      p3_f1:'✔ Alles uit Comfort', p3_f2:'✔ Werk- of bedrijfsbegeleiding', p3_f3:'✔ Vastgoedinvesteringsadvies', p3_f4:'✔ Lokaal professioneel netwerk', p3_f5:'✔ 3 maanden opvolging na aankomst', p3_f6:'✔ 7/7 assistance beschikbaar',

      /* Why */
      why_label:'Onze engagementen', why_title:'Waarom voor ons kiezen?', why_desc:'Wat ons onderscheidt in MRE-relocatiediensten.',
      w1_title:'Lokale expertise',         w1_desc:'Ons team kent Marokko door en door: steden, wijken, administraties en betrouwbare dienstverleners.',
      w2_title:'Aanzienlijke tijdsbesparing',w2_desc:'Vermijd maanden van zoeken en administratie. Wij hebben al het netwerk, de contacten en de oplossingen.',
      w3_title:'Begeleiding op maat',       w3_desc:'Elk gezin en project is uniek. Wij passen onze diensten aan uw persoonlijke situatie aan.',
      w4_title:'Volledige transparantie',   w4_desc:'Geen onaangename verrassingen. Duidelijke offerte, regelmatige updates en transparante communicatie.',
      w5_title:'Meertalige beschikbaarheid',w5_desc:'Ons team antwoordt in het Frans, Nederlands, Engels en Arabisch, naar uw voorkeur.',
      w6_title:'Partnernetwerk',             w6_desc:'Vastgoedkantoren, juridische bureaus, scholen, banken, werkgevers: een sterk netwerk tot uw dienst.',

      /* Testimonials */
      testi_label:'Zij vertrouwen ons', testi_title:'Getuigenissen', testi_desc:'Wat de gezinnen die wij hebben begeleid zeggen.',
      t1_text:'"We verlieten Lyon na 20 jaar. Zonder Darna Relocation hadden we het spoor volledig bijster geweest. Woning gevonden in 2 weken, papieren geregeld, kinderen ingeschreven op school. Een uitzonderlijke service."',
      t1_loc:'Teruggekeerd uit Frankrijk, gevestigd in Casablanca',
      t2_text:'"De service is echt premium. We voelden ons in goede handen. Luchthaventransfer, appartement, bankrekening… alles was klaar bij aankomst. Ik raad het ten zeerste aan aan alle MRE\'s."',
      t2_loc:'Teruggekeerd uit België, gevestigd in Marrakech',
      t3_text:'"Ik had veel zorgen over de administratieve procedures. Het team heeft alles geregeld met professionalisme en geduld. Mijn bedrijf is gelanceerd en mijn gezin bloeit. Dank u!"',
      t3_loc:'Teruggekeerd uit Spanje, ondernemer in Rabat',

      /* Process */
      proc_label:'Hoe het werkt', proc_title:'Ons proces in 4 stappen',
      step1_title:'Contact opnemen',     step1_desc:'Vul het formulier in of bel ons. Wij analyseren uw project gratis.',
      step2_title:'Consultatie',          step2_desc:'Een videogesprek om uw behoeften te begrijpen en het juiste pakket voor te stellen.',
      step3_title:'Begeleiding',          step3_desc:'Ons team neemt alle stappen op zich volgens uw persoonlijk plan.',
      step4_title:'Vestiging & Opvolging',step4_desc:'U arriveert, wij zijn er. En we blijven beschikbaar achteraf voor elke aanpassing.',

      /* Contact */
      contact_label:'Laten we praten over uw project', contact_title:'Vraag uw gratis offerte aan',
      contact_sub:"Vul het formulier in en een adviseur neemt binnen <strong>24u</strong> contact met u op om uw verhuisproject te bespreken.",
      contact_phone_lbl:'Telefoon / WhatsApp', contact_pres_lbl:'Nationale dekking', contact_pres_val:'Casablanca, Rabat, Marrakech, Tanger, Fes & meer',
      form_name:'Volledige naam *', form_name_ph:'Bijv. Mohammed El Idrissi',
      form_email:'E-mail *',
      form_country:'Huidig woonland *', form_country_ph:'Bijv. Nederland, België…',
      form_city:'Gewenste stad in Marokko', form_city_ph:'Bijv. Casablanca, Rabat…',
      form_pack:'Gewenst pakket', form_pack_opt0:'-- Ik weet het nog niet --',
      form_msg:'Beschrijf uw project *', form_msg_ph:'Vertel ons over uw situatie, behoeften en tijdlijn…',
      form_submit:'Mijn aanvraag versturen', form_notice:'Reactie gegarandeerd binnen 24u · 100% vertrouwelijk',
      form_sending:'Verzenden…',

      /* Footer */
      footer_tagline:'Uw betrouwbare partner voor een vlotte en succesvolle vestiging in Marokko.',
      footer_nav:'Navigatie', footer_serv:'Onze Diensten',
      footer_wa:'WhatsApp beschikbaar',
      footer_copy:'© 2026 Darna Relocation. Alle rechten voorbehouden.',
      footer_love:'Gemaakt met ❤️ voor MRE\'s overal ter wereld',
      toast_msg:"✅ Uw aanvraag is verzonden! We nemen binnen 24u contact met u op.",
    }
  };

  /* ──────────────────────────────────────────────────────────────────
     I18N ENGINE
  ────────────────────────────────────────────────────────────────── */
  let currentLang = localStorage.getItem('darna_lang') || null;
  let splashIsLeaving = false;

  function applyLang(lang) {
    const dict = T[lang];
    if (!dict) return;
    currentLang = lang;
    localStorage.setItem('darna_lang', lang);
    document.documentElement.lang = lang;

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // innerHTML (for bold / em / br)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    // Active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Page title
    const titles = { fr:'Darna Relocation – Votre nouvelle vie au Maroc, sans stress.', en:'Darna Relocation – Your new life in Morocco, stress-free.', nl:'Darna Relocation – Uw nieuwe leven in Marokko, zorgeloos.' };
    document.title = titles[lang] || titles.fr;
  }

  // Language buttons (navbar)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  /* ──────────────────────────────────────────────────────────────────
     LANGUAGE SPLASH SCREEN
  ────────────────────────────────────────────────────────────────── */
  const splash = document.getElementById('langSplash');

  function hideSplash(lang, selectedButton) {
    if (splashIsLeaving || !splash) return;
    splashIsLeaving = true;
    applyLang(lang);

    document.querySelectorAll('.splash-btn').forEach(btn => {
      btn.disabled = true;
      btn.classList.toggle('selected', btn === selectedButton);
    });

    splash.classList.add('choosing');
    setTimeout(() => {
      splash.classList.add('exiting');
      setTimeout(() => {
        splash.style.display = 'none';
        document.body.style.overflow = '';
        document.body.classList.add('site-entering');
        setTimeout(() => document.body.classList.remove('site-entering'), 900);
      }, 800);
    }, 420);
  }

  document.querySelectorAll('.splash-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      hideSplash(btn.dataset.lang, btn);
    });
  });

  // Show or skip splash
  if (!currentLang) {
    // First visit: show splash, block scroll
    document.body.style.overflow = 'hidden';
    splash.style.display = 'flex';
  } else {
    // Already visited: skip splash instantly
    splash.style.display = 'none';
    applyLang(currentLang);
  }

  /* ──────────────────────────────────────────────────────────────────
     NAVBAR SCROLL
  ────────────────────────────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ──────────────────────────────────────────────────────────────────
     BURGER MENU
  ────────────────────────────────────────────────────────────────── */
  const burger   = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', e => {
    if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  /* ──────────────────────────────────────────────────────────────────
     ACTIVE NAV LINK
  ────────────────────────────────────────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');

  function setActiveLink() {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const id   = section.getAttribute('id');
      const link = navLinks.querySelector(`a[href="#${id}"]`);
      if (!link) return;
      const top    = section.offsetTop;
      const bottom = top + section.offsetHeight;
      link.style.color = (scrollY >= top && scrollY < bottom) ? 'var(--gold)' : '';
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });

  /* ──────────────────────────────────────────────────────────────────
     SCROLL FADE-IN
  ────────────────────────────────────────────────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el    = entry.target;
        const delay = el.dataset.delay ? parseInt(el.dataset.delay) * 80 : 0;
        setTimeout(() => el.classList.add('visible'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  ['.service-card','.pack-card','.why-card','.temo-card','.process-step',
   '.about-text','.about-img-wrap','.contact-info','.contact-form-wrap',
   '.section-header','.hero-stats .stat','.contact-item'].forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  });

  /* ──────────────────────────────────────────────────────────────────
     HERO ENTRANCE
  ────────────────────────────────────────────────────────────────── */
  document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-cta').forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    setTimeout(() => {
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    }, 200 + i * 150);
  });

  /* ──────────────────────────────────────────────────────────────────
     CONTACT FORM
  ────────────────────────────────────────────────────────────────── */
  const form  = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    const originalHTML = btn.innerHTML;
    btn.querySelector('[data-i18n="form_submit"]').textContent = T[currentLang].form_sending || '…';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      applyLang(currentLang); // re-apply translations to restored button
      btn.disabled = false;
      btn.style.opacity = '';
      form.reset();
      showToast();
    }, 1600);
  });

  function showToast() {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 5000);
  }

  /* ──────────────────────────────────────────────────────────────────
     NUMBER COUNTER
  ────────────────────────────────────────────────────────────────── */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = el.innerText;
      const isPlus = target.includes('+');
      const isPct  = target.includes('%');
      const end    = parseInt(target.replace(/\D/g, ''));
      let current  = 0;
      const step   = Math.ceil(end / 50);
      const timer  = setInterval(() => {
        current += step;
        if (current >= end) { current = end; clearInterval(timer); }
        el.innerText = current + (isPlus ? '+' : isPct ? '%' : '');
      }, 30);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num').forEach(c => counterObserver.observe(c));

  /* ──────────────────────────────────────────────────────────────────
     PARALLAX HERO
  ────────────────────────────────────────────────────────────────── */
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    window.addEventListener('scroll', () => {
      if (window.scrollY < window.innerHeight) {
        heroContent.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      }
    }, { passive: true });
  }

})();
