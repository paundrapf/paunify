import type { SpotifyData, PatternScore, RoastResult, RoastSeverity } from '../types';

// ============================================
// EXPANDED GENRE PATTERNS - INDONESIA + GLOBAL
// ============================================

interface GenrePattern {
  id: string;
  name: string;
  artists: string[];
  genres: string[];
  minPercentage: number;
  roastMessage: string;
  severity: RoastSeverity;
  badge?: string;
}

export const GENRE_PATTERNS: GenrePattern[] = [
  // ===== INDONESIA - INDIE SKENA =====
  {
    id: 'indie_skena',
    name: 'Indie Skena',
    artists: [
      'Hindia', 'The Adams', 'Kelompok Penerbang Roket', 'The Jansen',
      '.Feast', 'Efek Rumah Kaca', 'Mocca', 'White Shoes & The Couples Company',
      'Sore', 'Payung Teduh', 'Fourtwnty', 'Banda Neira', 'Barasuara',
      'Rumahsakit', 'Pure Saturday', 'The Upstairs', 'Koes Plus',
      'Gigi', 'Dewa 19', 'Sheila on 7', 'Padi', 'Koes Bersaudara',
      'Lomba Sihir', 'Mbah Surip', 'Saykoji'
    ],
    genres: ['indonesian indie', 'indie rock', 'indonesian rock', 'indonesian alternative'],
    minPercentage: 20,
    roastMessage: "Epruv sekali mas, playlist-nya bisa jadi lineup Synchronize. Nontonnya cuma buat konten ya? 👀",
    severity: 'medium',
    badge: '🎸 Skena Certified'
  },

  // ===== INDONESIA - JKT48 & IDOL =====
  {
    id: 'jkt48_idol',
    name: 'JKT48 & Idol',
    artists: [
      'JKT48', 'Twenty Nine Teens', 'Tomoshibi', 'MNL48', 'BNK48',
      'AKB48', 'Sakurazaka46', 'Hinatazaka46', 'Nogizaka46', 'Keyakizaka46',
      'JO1', 'NiziU', 'BE:FIRST', '偽물'
    ],
    genres: ['j-pop', 'idol', 'japanese idol', 'indonesian idol'],
    minPercentage: 15,
    roastMessage: "Wota detected! Koleksi photocard-nya berapa binder? Jangan lupa war tiket ya 🎌",
    severity: 'medium',
    badge: '🎌 Wota Elite'
  },

  // ===== K-POP =====
  {
    id: 'kpop_stan',
    name: 'K-Pop Stan',
    artists: [
      'BTS', 'BLACKPINK', 'NewJeans', 'IVE', 'LE SSERAFIM', 'aespa',
      'TWICE', 'Red Velvet', 'NCT', 'Stray Kids', 'TXT', 'ENHYPEN',
      'SEVENTEEN', '(G)I-DLE', 'ITZY', 'MONSTA X', 'EXO', 'SHINee',
      'Super Junior', 'BIGBANG', '2NE1', 'WINNER', 'iKON', 'GOT7',
      'IU', 'Taeyeon', 'Baekhyun', 'Kang Seung-yoon', 'Zico',
      'BSS', 'TRENT', 'BoyNextDoor', 'TWS'
    ],
    genres: ['k-pop', 'korean pop', 'k-pop boy group', 'k-pop girl group'],
    minPercentage: 20,
    roastMessage: "Koreaboo level: ngomong 'oppa' ke layar HP. Lightstick-nya udah berapa? 💜",
    severity: 'mild',
    badge: '💜 K-Pop Royalty'
  },

  // ===== DANGDUT & KOPLO =====
  {
    id: 'dangdut_koplo',
    name: 'Dangdut Koplo',
    artists: [
      'NDX AKA', 'Safira Inema', 'Denny Caknan', 'Happy Asmara',
      'Vita Alvia', 'Yeni Inka', 'Farel Prayoga', 'Nella Kharisma',
      'Via Vallen', 'Siti Badriah', 'Iris', 'Cakra Khan', 'Anisa Rahman',
      'Guyon Waton', 'Dwiki Dharmas', 'Devi Aldana', 'Denny Caknan',
      'Guyon Waton', 'Ndarboy Genk', 'Keke'
    ],
    genres: ['dangdut', 'koplo', 'indonesian pop', 'dangdut remix'],
    minPercentage: 20,
    roastMessage: "Festival dangdut tanpa tiket, cuma dengerin di parkiran. Koplo king/queen detected 🕺",
    severity: 'medium',
    badge: '🕺 Koplo Royalty'
  },

  // ===== LOCAL POP - SINGER SONGWRITER =====
  {
    id: 'local_pop',
    name: 'Local Pop',
    artists: [
      'Tulus', 'Pamungkas', 'Nadin Amizah', 'Raisa', 'Tiara Andini',
      'Lyodra', 'Ziva Magnolya', 'Mahalini', 'Yura Yunita',
      'Rizky Febian', 'Afgan', 'Isyana Sarasvati', 'Fiersa Besari',
      'Kunto Aji', 'Hindia', 'Arief', 'Sheryl Shang', 'Niki',
      'Rich Brian', 'Niki', 'Indah Surah', 'Rezca', 'Mona'
    ],
    genres: ['indonesian pop', 'indonesian singer-songwriter', 'indonesian r&b'],
    minPercentage: 25,
    roastMessage: "Jomblo yang pura-pura move on tapi masih stalk. It's okay, we feel you 💔",
    severity: 'medium',
    badge: '💔 Galau King/Queen'
  },

  // ===== REGGAE & DANCEHALL =====
  {
    id: 'reggae_indonesia',
    name: 'Reggae Indonesia',
    artists: [
      'Gigi', 'Dewa 19', 'Koes Plus', 'Koes Bersaudara',
      'Djarot', 'Iwa K', 'Bimbim', 'Ari Lasso'
    ],
    genres: ['reggae', 'indonesian rock', 'indonesian reggae'],
    minPercentage: 25,
    roastMessage: "Relax maxxx! Gaya lu kayak lagi di Pantai Parangtritis. Spirited ya! 🌴",
    severity: 'mild',
    badge: '🌴 Reggae Vibes'
  },

  // ===== METAL & ROCK =====
  {
    id: 'metal_head',
    name: 'Metal Head',
    artists: [
      'Metallica', 'Slipknot', 'Iron Maiden', 'Avenged Sevenfold',
      'System of a Down', 'Linkin Park', 'Bring Me The Horizon',
      'Parkway Drive', 'Architects', 'Trivium', 'Korn', 'Rammstein',
      'Dream Theater', 'Tool', 'Meshuggah', 'Lamb of God',
      'Gojira', 'Mastodon', 'Periphery', 'Intervals',
      'Metal Indonesia: Godless', 'Sick of It All', 'Hardcore'
    ],
    genres: ['metal', 'heavy metal', 'death metal', 'metalcore', 'hardcore', 'thrash metal'],
    minPercentage: 20,
    roastMessage: "Tetangga komplain tiap hari, lu pura-pura gak denger. Rock on 🤘",
    severity: 'mild',
    badge: '🤘 Metal Head'
  },

  // ===== ROCK ALTERNATIVE =====
  {
    id: 'rock_alternative',
    name: 'Rock Alternative',
    artists: [
      'Radiohead', 'Muse', 'The 1975', 'Arctic Monkeys', 'Tame Impala',
      'Foo Fighters', 'Green Day', 'My Chemical Romance', 'Fall Out Boy',
      'Panic! At The Disco', 'The Neighbourhood', 'Cage the Elephant',
      'Twenty One Pilots', 'Imagine Dragons', 'Coldplay'
    ],
    genres: ['alternative rock', 'indie rock', 'rock', 'post-punk'],
    minPercentage: 20,
    roastMessage: "Lu pikir unik karena dengerin The 1975, tapi ituplaylist-guita juga. Hipster problems 📻",
    severity: 'medium',
    badge: '📻 Alternative Rock'
  },

  // ===== JAZZ & CLASSICAL =====
  {
    id: 'jazz_classical',
    name: 'Jazz Classical',
    artists: [
      'Miles Davis', 'John Coltrane', 'Louis Armstrong', 'Frank Sinatra',
      'Norah Jones', 'Diana Krall', 'Billie Holiday', 'Ella Fitzgerald',
      'Chet Baker', 'Dave Brubeck', 'Herbie Hancock', 'Kamasi Washington',
      'Ludovico Einaudi', 'Hans Zimmer', 'Yiruma', 'Max Richter'
    ],
    genres: ['jazz', 'classical', 'bebop', 'swing', 'orchestra', 'piano'],
    minPercentage: 20,
    roastMessage: "Sok elite padahal cuma buat backsound tugas. Pura-pura fokus ya? 🎷",
    severity: 'savage',
    badge: '🎷 Jazz Snob'
  },

  // ===== LO-FI & CHILL =====
  {
    id: 'lofi_chill',
    name: 'Lo-Fi Chill',
    artists: [
      'Lofi Girl', 'ChilledCow', 'Idealism', 'Nymano', 'Saib',
      'Jinsang', 'Nujabes', 'Rejjie Snow', 'Kupla', 'SwuM',
      'In Love With A Ghost', 'Dayle', 'smoothing', 'Kanye'
    ],
    genres: ['lo-fi', 'chillhop', 'lo-fi beats', 'ambient', 'chill'],
    minPercentage: 25,
    roastMessage: "Study playlist tapi malah scrolling TikTok. Jujur aja bro 📚",
    severity: 'medium',
    badge: '📚 Study Buddy'
  },

  // ===== EDM & ELECTRONIC =====
  {
    id: 'edm_party',
    name: 'EDM Party',
    artists: [
      'Martin Garrix', 'David Guetta', 'Calvin Harris', 'Tiësto',
      'Alan Walker', 'Marshmello', 'Skrillex', 'Diplo',
      'Hardwell', 'Avicii', 'Zedd', 'Kygo', 'K-391',
      'Timmy Trumpet', 'W&W', 'Dimitri Vegas', 'Nicky Romero'
    ],
    genres: ['edm', 'electronic', 'house', 'dance', 'progressive house', 'big room'],
    minPercentage: 25,
    roastMessage: "Playlist party tapi party-nya cuma di kamar sendiri. Relatable sih 🎉",
    severity: 'mild',
    badge: '🎉 Party Animal'
  },

  // ===== WESTERN RAP & HIP-HOP =====
  {
    id: 'western_rap',
    name: 'Western Rap',
    artists: [
      'Drake', 'Kanye West', 'Travis Scott', 'Metro Boomin',
      '21 Savage', 'J. Cole', 'Kendrick Lamar', 'Future',
      'Lil Baby', 'Gunna', 'Playboi Carti', 'Kendrick Lamar',
      'Tyler, The Creator', 'Tyler the Creator', 'Earl Sweatshirt',
      'Tyler', 'Jay-Z', 'Eminem', 'Nas', 'Lil Wayne',
      'Post Malone', 'Lil Nas X', 'Doja Cat', 'Megan Thee Stallion'
    ],
    genres: ['rap', 'hip hop', 'trap', 'conscious hip hop'],
    minPercentage: 20,
    roastMessage: "Masih denial phase, bilangnya 'cuma suka produksinya'. Red flag bro 🚩",
    severity: 'savage',
    badge: '🎤 Rap Enthusiast'
  },

  // ===== R&B & SOUL =====
  {
    id: 'rn_b_soul',
    name: 'R&B Soul',
    artists: [
      'The Weeknd', 'SZA', 'Beyoncé', 'Rihanna', 'Bruno Mars',
      'Alicia Keys', 'John Legend', 'H.E.R.', 'Giveon', 'Khalid',
      'H.E.R', 'Jorja Smith', 'Snoh Aalegra', 'Sabrina Claudio',
        'Daniel Caesar', 'Kali Uchis', 'Sade', "D'Angelo"
    ],
    genres: ['r&b', 'soul', 'contemporary r&b', 'pop r&b'],
    minPercentage: 20,
    roastMessage: "Playlist romantis tapi jomblo. Kita tau kok lagi PDKT 📱",
    severity: 'medium',
    badge: '💜 R&B Soul'
  },

  // ===== INDIAN & BOLLYWOOD =====
  {
    id: 'bollywood',
    name: 'Bollywood',
    artists: [
      'A.R. Rahman', 'Shreya Ghoshal', 'Jubin Nautiyal', 'Armaan Malik',
      'Diljit Dosanjh', 'Badshah', 'Neha Kakkar', 'Mika Singh',
      'Pritam', 'Vishal-Shekhar', 'Ajay-Atul', 'Mithoon'
    ],
    genres: ['bollywood', 'indian pop', 'filmi', 'punjabi'],
    minPercentage: 25,
    roastMessage: "Bollywood vibes!下次来看宝莱坞演唱会吗? 🎬",
    severity: 'medium',
    badge: '🎬 Bollywood Fan'
  },

  // ===== PUNJABI & Bhangra =====
  {
    id: 'punjabi',
    name: 'Punjabi & Bhangra',
    artists: [
      'Diljit Dosanjh', 'Karan Aujla', 'Shubh', 'Sidhu Moose Wala',
      'AP Dhillon', 'Gurinder Gill', 'Prabh Singh', 'Jaymes',
      'BTS', 'Diljit'
    ],
    genres: ['punjabi', 'punjabi hip hop', 'bhangra', 'desi hip hop'],
    minPercentage: 25,
    roastMessage: "Punjabi da putt! Joota fadey, jattiyeh! 🪩",
    severity: 'mild',
    badge: '🪩 Punjabi Vibes'
  },

  // ===== PODCAST & SPOKEN WORD =====
  {
    id: 'podcast_addict',
    name: 'Podcast Addict',
    artists: [
      'Joe Rogan', 'Lex Fridman', 'Huberman Lab', 'Tim Ferriss',
      'Call Her Daddy', 'The Joe Rogan Experience', 'SmartLess',
      'WTF with Marc Maron', 'NPR', 'BBC', 'Spotify'
    ],
    genres: ['podcast', 'spoken word', 'talk radio'],
    minPercentage: 30,
    roastMessage: "Dengerin orang ngomong tiap hari, tapi chat di-read doang gak dibales. Introvert king/queen 🎧",
    severity: 'medium',
    badge: '🎧 Podcaster'
  },

  // ===== VAPORWAVE & SYNTHWAVE =====
  {
    id: 'synthwave',
    name: 'Synthwave',
    artists: [
      'Kavinsky', 'Daft Punk', 'Justice', 'The Weeknd',
      'Gunship', 'Timecop1983', 'FM-84', 'The Midnight',
      'Carpenter Brut', 'Perturbator', 'Lazer Squad'
    ],
    genres: ['synthwave', 'vaporwave', 'retrowave', 'outrun'],
    minPercentage: 20,
    roastMessage: "Nostalgia masa depan. Lu lahirnya tahun 80-an atau cuma nonton Stranger Things? 🌆",
    severity: 'medium',
    badge: '🌆 Synthwave'
  },

  // ===== ANIME & J-ROCK =====
  {
    id: 'j_rock_anime',
    name: 'J-Rock & Anime',
    artists: [
      'YOASOBI', 'Ado', 'LiSA', 'Aimer', 'RADWIMPS',
      'ONE OK ROCK', 'My First Story', 'Fear, and Loathing in Las Vegas',
      'Bump of Chicken', 'EGOIST', 'Man with a Mission',
      'Higedan', 'HoneyWorks', 'Miku'
    ],
    genres: ['j-rock', 'j-pop', 'anime', 'j-metal', 'vocaloid'],
    minPercentage: 20,
    roastMessage: "Otaku detected! Waifu-nya siapa? Yukkuri shiteitte ne! 🎤",
    severity: 'medium',
    badge: '🎤 Anime Fan'
  },

  // ===== FILIPINO & OPM =====
  {
    id: 'opm_filipino',
    name: 'OPM Filipino',
    artists: [
      'Ben&Ben', 'December Avenue', 'Jerald', 'Gary Valenciano',
      'Regine Velasquez', 'Lea Salonga', 'Sarah Geronimo',
      'IV of Spades', 'Alamat', 'Bamboo', 'Franco',
      'Eraserheads', 'Parokya ni Edgar', 'Rivermaya'
    ],
    genres: ['opm', 'filipino', 'pinoy pop', 'pinoy rock'],
    minPercentage: 25,
    roastMessage: "Pinoy pride! Mabuhay! Tara, inom tayo! 🇵🇭",
    severity: 'mild',
    badge: '🇵🇭 OPM Fan'
  },

  // ===== THAI & LAOS =====
  {
    id: 'thai_music',
    name: 'Thai Music',
    artists: [
      'Phum Viphurit', 'Milli', 'Three Man Down', 'Getsunova',
      'BNK48', 'CIX Thailand', 'Tay Tawan', 'Krist Perawat'
    ],
    genres: ['thai pop', 'thai rock', 'thai hip hop'],
    minPercentage: 25,
    roastMessage: "Thai vibes! Sawasdee krub! 🐘",
    severity: 'mild',
    badge: '🐘 Thai Fan'
  }
];

// ============================================
// AUDIO FEATURE PATTERNS
// ============================================

interface AudioPattern {
  id: string;
  name: string;
  conditions: {
    valence?: { min?: number; max?: number };
    energy?: { min?: number; max?: number };
    danceability?: { min?: number; max?: number };
    tempo?: { min?: number; max?: number };
    acousticness?: { min?: number; max?: number };
  };
  minTracks: number;
  roastMessage: string;
  severity: RoastSeverity;
  badge?: string;
}

export const AUDIO_PATTERNS: AudioPattern[] = [
  {
    id: 'sad_boi_hours',
    name: 'Sad Boi Hours',
    conditions: {
      valence: { max: 0.35 },
      energy: { max: 0.45 }
    },
    minTracks: 8,
    roastMessage: "GALAU MULU LU! Nulis puisi di notes tapi gak pernah dikirim. Mandi dulu sana bro 🚿",
    severity: 'savage',
    badge: '😢 Sad Boi'
  },
  {
    id: 'hyper_positive',
    name: 'Hyper Positive',
    conditions: {
      valence: { min: 0.7 },
      energy: { min: 0.7 }
    },
    minTracks: 12,
    roastMessage: "Positif banget hidupnya, pasti pagi-pagi udah minum tolak angin ya? ☀️",
    severity: 'mild',
    badge: '☀️ Sunshine'
  },
  {
    id: 'club_ready',
    name: 'Club Ready',
    conditions: {
      danceability: { min: 0.7 },
      energy: { min: 0.7 },
      tempo: { min: 120 }
    },
    minTracks: 10,
    roastMessage: "Playlist-nya buat party tapi party-nya cuma di kamar sendiri. Relatable sih 🎉",
    severity: 'medium',
    badge: '🎉 Party Animal'
  },
  {
    id: 'acoustic_vibe',
    name: 'Acoustic Vibe',
    conditions: {
      acousticness: { min: 0.6 },
      energy: { max: 0.5 }
    },
    minTracks: 8,
    roastMessage: "Sok senyap-senyap artistic padahal cuma gak bisa main gitar 🎸",
    severity: 'savage',
    badge: '🎸 Acoustic Soul'
  },
  {
    id: 'workout_beast',
    name: 'Workout Beast',
    conditions: {
      energy: { min: 0.8 },
      tempo: { min: 130 }
    },
    minTracks: 12,
    roastMessage: "Playlist gym tapi gym-nya cuma angkat remote TV. Semangat bro 💪",
    severity: 'medium',
    badge: '💪 Gym Rat'
  },
  {
    id: 'chill_vibes',
    name: 'Chill Vibes',
    conditions: {
      energy: { max: 0.4 },
      valence: { min: 0.4, max: 0.7 }
    },
    minTracks: 10,
    roastMessage: "Santai banget hidupnya, pasti sering bilang 'gapapa' padahal banyak masalah 🧘",
    severity: 'mild',
    badge: '🧘 Chill Master'
  },
  {
    id: 'dark_angst',
    name: 'Dark Angst',
    conditions: {
      valence: { max: 0.2 },
      energy: { min: 0.6, max: 0.9 }
    },
    minTracks: 8,
    roastMessage: "Lu ini lagi apa? Terlalu dark buat twitter, mending bikin spotify playlist 'Songs for when you want to disappear' 🌑",
    severity: 'savage',
    badge: '🌑 Dark Angst'
  },
  {
    id: 'happy_go_lucky',
    name: 'Happy Go Lucky',
    conditions: {
      valence: { min: 0.8 },
      danceability: { min: 0.6 }
    },
    minTracks: 12,
    roastMessage: "Playlist lu jadi medicine depression. Siapa yang nyimpen lo di hidup mereka? 🌈",
    severity: 'mild',
    badge: '🌈 Happy Go Lucky'
  },
  {
    id: 'late_night_driving',
    name: 'Late Night Driving',
    conditions: {
      tempo: { min: 70, max: 110 },
      energy: { min: 0.4, max: 0.7 },
      acousticness: { max: 0.4 }
    },
    minTracks: 10,
    roastMessage: "Tipe yang jalan malam cuma buat hilangin pikiran. Atau sebenarnya lagi fugitives? 🚗",
    severity: 'medium',
    badge: '🚗 Night Driver'
  }
];

// ============================================
// OBSCURITY PATTERNS
// ============================================

interface ObscurityPattern {
  id: string;
  name: string;
  condition: (avgPopularity: number) => boolean;
  roastMessage: string;
  badge: string;
}

export const OBSCURITY_PATTERNS: ObscurityPattern[] = [
  {
    id: 'mainstream_basic',
    name: 'Mainstream Basic',
    condition: (avg) => avg > 70,
    roastMessage: "Basic b*tch alert! Spotify Wrapped lu pasti sama kayak 10 juta orang lain 📊",
    badge: '📊 Basic'
  },
  {
    id: 'balanced_taste',
    name: 'Balanced Taste',
    condition: (avg) => avg >= 40 && avg <= 70,
    roastMessage: "Balance is key. Lu tipe yang bisa nikmatin Top 40 sama indie underground 👌",
    badge: '👌 Balanced'
  },
  {
    id: 'underground_skena',
    name: 'Underground Skena',
    condition: (avg) => avg < 40,
    roastMessage: "Skena certified! Tapi jangan sok underground ya, kita tau lu dengerin di Spotify 🎭",
    badge: '🎭 Skena'
  }
];

// ============================================
// PERSONALITY TYPES
// ============================================

const PERSONALITY_TYPES: Record<string, { name: string; description: string }> = {
  'indie_skena': {
    name: 'The Hipster',
    description: 'Lu mendiscover artis sebelum mereka terkenal. Spotify Wrapped lu isinya band yang bahkan gak ada di Wikipedia.'
  },
  'jkt48_idol': {
    name: 'The Wota',
    description: 'Oshi no ko adalah hidup lu. Lu tau semua handshake event dan udah hafal setlist theater.'
  },
  'kpop_stan': {
    name: 'The K-Pop Royalty',
    description: 'Lightstick collection lu lebih mahal dari uang kuliah. Streaming 24/7 untuk chart victory.'
  },
  'dangdut_koplo': {
    name: 'The Koplo King/Queen',
    description: 'Lu tau semua joget koplo dan gak malu ngaku suka dangdut. Respect.'
  },
  'western_rap': {
    name: 'The Rap Enthusiast',
    description: 'Bars and flows adalah bahasa lu. Tapi tetep aja gak bisa freestyle.'
  },
  'local_pop': {
    name: 'The Galau Master',
    description: 'Playlist lu adalah diary yang gak pernah dikirim. Galau adalah lifestyle, bukan fase.'
  },
  'metal_head': {
    name: 'The Metal Head',
    description: 'Tetangga komplain tiap hari tapi lu gak peduli. Rock on.'
  },
  'jazz_classical': {
    name: 'The Jazz Snob',
    description: 'Lu bilang jazz adalah "true music". Tapi sebenernya cuma suka backsound coffee shop.'
  },
  'lofi_chill': {
    name: 'The Study Buddy',
    description: 'Study playlist tapi malah scrolling TikTok. We\'ve all been there.'
  },
  'edm_party': {
    name: 'The Party Animal',
    description: 'Setiap hari adalah Jumat malam. Energy lu selalu 100%.'
  },
  'sad_boi_hours': {
    name: 'The Sad Boi',
    description: 'Valence score lu lebih rendah dari self-esteem. It\'s okay to feel.'
  },
  'hyper_positive': {
    name: 'The Sunshine',
    description: 'Positif banget hidupnya. Pasti pagi-pagi udah minum tolak angin.'
  },
  'club_ready': {
    name: 'The Party Starter',
    description: 'Danceability score tinggi tapi dance-nya cuma di kamar.'
  },
  'acoustic_vibe': {
    name: 'The Acoustic Soul',
    description: 'Sok senyap-senyap artistic. Padahal cuma gak bisa main gitar.'
  },
  'workout_beast': {
    name: 'The Gym Rat',
    description: 'Playlist gym tapi gym-nya cuma angkat remote TV.'
  },
  'chill_vibes': {
    name: 'The Chill Master',
    description: 'Santai banget hidupnya. Pasti sering bilang "gapapa" padahal banyak masalah.'
  },
  'mainstream_basic': {
    name: 'The Mainstreamer',
    description: 'Lu tipe yang ikutin tren dan gak masalah jadi "basic". Lagu hits adalah hits karena enak didengerin, right?'
  },
  'balanced_taste': {
    name: 'The Balanced',
    description: 'Lu bisa nikmatin Top 40 sama indie underground. Open-minded.'
  },
  'underground_skena': {
    name: 'The Underground',
    description: 'Skena certified! Tapi jangan sok underground ya, kita tau lu dengerin di Spotify.'
  },
  'on_repeat_abuser': {
    name: 'The Loyalist',
    description: 'Setia itu nomor satu. Lu bisa dengerin lagu yang sama 100x dan tetap gak bosen.'
  },
  'night_owl': {
    name: 'The Night Owl',
    description: 'Jam 2 pagi adalah waktu terbaik untuk mendengarkan musik. Tidur adalah untuk orang lemah.'
  },
  'local_pride': {
    name: 'The Local Hero',
    description: 'Lokal pride! Lu support artis Indonesia lebih dari yang support timnas.'
  },
  'podcast_addict': {
    name: 'The Podcaster',
    description: 'Dengerin orang ngomong lebih sering dari dengerin musik. Chat-nya pada kesepian nih.'
  },
  'synthwave': {
    name: 'The Retrowave',
    description: 'Nostalgia masa depan. Lu pasti punya mobil sport tapi cuma punya dompet kosong.'
  },
  'j_rock_anime': {
    name: 'The Otaku',
    description: 'Waifu collection lu lebih banyak dari pacar. Arigatou gozaimasu, senpai!'
  },
  'rn_b_soul': {
    name: 'The Smooth Operator',
    description: 'R&B adalah bahasa cinta lu. Tapi tetep jomblo. Sad!'
  },
  'bollywood': {
    name: 'The Bollywood Fan',
    description: 'Lu bisa nelpon mama sambil dengerin Bollywood. Chai latte ya!'
  },
  'punjabi': {
    name: 'The Punjabi Vibes',
    description: 'Bhangra energy 24/7! Joota fading, jatti ready!'
  },
  'opm_filipino': {
    name: 'The OPM Fan',
    description: 'Pinoy pride! Tara, inom tayo beh! Mabuhay!'
  },
  'dark_angst': {
    name: 'The Dark Soul',
    description: 'Lu terlalu cool untuk happiness. Tapi sebenernya lagi struggle.'
  },
  'late_night_driving': {
    name: 'The Night Driver',
    description: 'Tipe yang belajar jadi driver Grab tapi belum kejawab juga.'
  }
};

// ============================================
// ROAST ENGINE
// ============================================

export class RoastEngine {
  private data: SpotifyData;

  constructor(data: SpotifyData) {
    this.data = data;
  }

  analyze(): RoastResult {
    const scores: PatternScore[] = [];

    // Check genre patterns
    scores.push(...this.analyzeGenrePatterns());

    // Check audio patterns
    scores.push(...this.analyzeAudioPatterns());

    // Check behavioral patterns
    scores.push(...this.detectBehavioralPatterns());

    // Check obscurity patterns
    scores.push(this.analyzeObscurity());

    // Sort by score descending
    const sorted = scores.sort((a, b) => b.score - a.score);

    const primary = sorted[0] || {
      patternId: 'unknown',
      patternName: 'The Explorer',
      matchPercentage: 0,
      severity: 'mild' as RoastSeverity,
      score: 0,
      roastMessage: 'Playlist lu random banget, kayaknya lu belum tau apa yang lu mau dalam hidup 🎯',
      badge: '🎯 Explorer'
    };

    const secondary = sorted.slice(1, 3);

    // Generate personality type
    const personality = PERSONALITY_TYPES[primary.patternId] || {
      name: 'The Explorer',
      description: 'Genre boundaries don\'t exist in your world. Dari dangdut ke death metal, semua masuk.'
    };

    // Generate overall roast
    const overallRoast = this.generateOverallRoast(primary, secondary);

    return {
      primaryPattern: primary,
      secondaryPatterns: secondary,
      overallRoast,
      personalityType: personality.name,
      personalityDescription: personality.description,
      badges: scores.map(s => s.badge).filter(Boolean) as string[]
    };
  }

  private analyzeGenrePatterns(): PatternScore[] {
    const scores: PatternScore[] = [];

    for (const pattern of GENRE_PATTERNS) {
      const matchingTracks = this.data.topTracks.medium.filter(track =>
        track.artists.some(artist =>
          pattern.artists.some(name => 
            artist.name.toLowerCase().includes(name.toLowerCase())
          )
        )
      );

      const percentage = (matchingTracks.length / this.data.topTracks.medium.length) * 100;

      if (percentage >= pattern.minPercentage) {
        const severityWeights = { mild: 1, medium: 2, savage: 3 };
        const score = percentage * severityWeights[pattern.severity];

        scores.push({
          patternId: pattern.id,
          patternName: pattern.name,
          matchPercentage: percentage,
          severity: pattern.severity,
          score,
          roastMessage: pattern.roastMessage,
          badge: pattern.badge
        });
      }
    }

    return scores;
  }

  private analyzeAudioPatterns(): PatternScore[] {
    const scores: PatternScore[] = [];

    for (const pattern of AUDIO_PATTERNS) {
      const matchingTracks = this.data.audioFeatures.filter(features => {
        const conditions = pattern.conditions;

        if (conditions.valence) {
          const { min = 0, max = 1 } = conditions.valence;
          if (features.valence < min || features.valence > max) return false;
        }

        if (conditions.energy) {
          const { min = 0, max = 1 } = conditions.energy;
          if (features.energy < min || features.energy > max) return false;
        }

        if (conditions.danceability) {
          const { min = 0, max = 1 } = conditions.danceability;
          if (features.danceability < min || features.danceability > max) return false;
        }

        if (conditions.tempo) {
          const { min = 0, max = 300 } = conditions.tempo;
          if (features.tempo < min || features.tempo > max) return false;
        }

        if (conditions.acousticness) {
          const { min = 0, max = 1 } = conditions.acousticness;
          if (features.acousticness < min || features.acousticness > max) return false;
        }

        return true;
      });

      if (matchingTracks.length >= pattern.minTracks) {
        const percentage = (matchingTracks.length / this.data.audioFeatures.length) * 100;
        const severityWeights = { mild: 1, medium: 2, savage: 3 };
        const score = percentage * severityWeights[pattern.severity];

        scores.push({
          patternId: pattern.id,
          patternName: pattern.name,
          matchPercentage: percentage,
          severity: pattern.severity,
          score,
          roastMessage: pattern.roastMessage,
          badge: pattern.badge
        });
      }
    }

    return scores;
  }

  private analyzeObscurity(): PatternScore {
    const avgPopularity = this.data.topTracks.medium.reduce(
      (sum, track) => sum + track.popularity,
      0
    ) / this.data.topTracks.medium.length;

    const pattern = OBSCURITY_PATTERNS.find(p => p.condition(avgPopularity)) ||
                   OBSCURITY_PATTERNS[1];

    return {
      patternId: pattern.id,
      patternName: pattern.name,
      matchPercentage: avgPopularity,
      severity: 'medium',
      score: 150,
      roastMessage: pattern.roastMessage,
      badge: pattern.badge
    };
  }

  private detectBehavioralPatterns(): PatternScore[] {
    const scores: PatternScore[] = [];

    // On Repeat Abuser
    const trackCounts = new Map<string, number>();
    this.data.recentlyPlayed.forEach(item => {
      const count = trackCounts.get(item.track.id) || 0;
      trackCounts.set(item.track.id, count + 1);
    });
    const maxRepeat = Math.max(...Array.from(trackCounts.values()), 0);
    
    if (maxRepeat > 15) {
      scores.push({
        patternId: 'on_repeat_abuser',
        patternName: 'On Repeat Abuser',
        matchPercentage: Math.min(100, (maxRepeat / 20) * 100),
        severity: 'medium',
        score: 200,
        roastMessage: "Commitment issues? Atau lagi PDKT dan dikasih playlist? Stay strong soldier 🎵",
        badge: '🔄 Repeat Offender'
      });
    }

    // Night Owl
    const nightListens = this.data.recentlyPlayed.filter(item => {
      const hour = new Date(item.played_at).getHours();
      return hour >= 0 && hour < 5;
    });
    const nightPercentage = (nightListens.length / this.data.recentlyPlayed.length) * 100;
    
    if (nightPercentage > 25) {
      scores.push({
        patternId: 'night_owl',
        patternName: 'Night Owl',
        matchPercentage: nightPercentage,
        severity: 'medium',
        score: 180,
        roastMessage: "Insomnia + heartbreak = combo maut. Tidur mas, besok masih ada futsal 🌙",
        badge: '🌙 Night Owl'
      });
    }

    // Local Pride
    const indonesianKeywords = ['indonesian', 'indonesia', 'id'];
    const indonesianArtists = this.data.topArtists.medium.filter(artist =>
      artist.genres.some(g => 
        indonesianKeywords.some(kw => g.toLowerCase().includes(kw))
      )
    );
    const localPercentage = (indonesianArtists.length / this.data.topArtists.medium.length) * 100;
    
    if (localPercentage > 60) {
      scores.push({
        patternId: 'local_pride',
        patternName: 'Local Pride',
        matchPercentage: localPercentage,
        severity: 'mild',
        score: 150,
        roastMessage: "Lokal pride! Tapi tetep pake Apple Music diem-diem ya? 🇮🇩",
        badge: '🇮🇩 Local Hero'
      });
    }

    // Genre Hopper
    const uniqueGenres = new Set<string>();
    this.data.topArtists.medium.forEach(artist => {
      artist.genres.forEach(g => uniqueGenres.add(g));
    });
    
    if (uniqueGenres.size > 8) {
      scores.push({
        patternId: 'genre_hopper',
        patternName: 'Genre Hopper',
        matchPercentage: Math.min(100, (uniqueGenres.size / 15) * 100),
        severity: 'medium',
        score: 160,
        roastMessage: "Mood swingnya kenceng banget, bipolar check? Pilih satu genre aja bro 🎭",
        badge: '🎭 Genre-Fluid'
      });
    }

    return scores;
  }

  private generateOverallRoast(primary: PatternScore, secondary: PatternScore[]): string {
    const roasts = [primary.roastMessage];
    
    if (secondary.length > 0) {
      roasts.push(`\n\nBonus: ${secondary[0].roastMessage}`);
    }

    return roasts.join('');
  }
}

export default RoastEngine;
