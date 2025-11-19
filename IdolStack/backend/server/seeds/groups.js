const { connectDB, getDB } = require('../config/db');

const groups = [
  { name: 'BTS', debutYear: 2013, fandom: 'ARMY', label: 'HYBE / BigHit' },
  { name: 'ATEEZ', debutYear: 2018, fandom: 'ATINY', label: 'KQ Entertainment' },
  { name: 'Stray Kids', debutYear: 2018, fandom: 'STAY', label: 'JYP Entertainment' },
  { name: 'ENHYPEN', debutYear: 2020, fandom: 'ENGENE', label: 'HYBE / Belift Lab' },
  { name: 'Xikers', debutYear: 2023, fandom: 'Road𝓨', label: 'KQ Entertainment' },
  { name: 'BLACKPINK', debutYear: 2016, fandom: 'BLINK', label: 'YG Entertainment' },
  { name: 'XG', debutYear: 2022, fandom: 'ALPHAZ', label: 'XGALX / AVEX' },
  { name: 'IVE', debutYear: 2021, fandom: 'DIVE', label: 'Starship Entertainment' },
  { name: 'aespa', debutYear: 2020, fandom: 'MY', label: 'SM Entertainment' }
];

connectDB().then(() => {
  const db = getDB();
  db.collection('groups').insertMany(groups).then(() => {
    console.log('🎤 Groups seeded successfully');
    process.exit();
  });
});