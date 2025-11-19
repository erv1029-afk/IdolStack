const { connectDB, getDB } = require('../config/db');

const artists = [
  // BTS
  { name: 'RM', group: 'BTS', role: 'Leader / Rapper' },
  { name: 'Jin', group: 'BTS', role: 'Vocalist / Visual' },
  { name: 'Suga', group: 'BTS', role: 'Rapper / Producer' },
  { name: 'J-Hope', group: 'BTS', role: 'Dancer / Rapper' },
  { name: 'Jimin', group: 'BTS', role: 'Vocalist / Dancer' },
  { name: 'V', group: 'BTS', role: 'Vocalist / Visual' },
  { name: 'Jungkook', group: 'BTS', role: 'Vocalist / Dancer / Maknae' },

  // ATEEZ
  { name: 'Hongjoong', group: 'ATEEZ', role: 'Leader / Rapper' },
  { name: 'Seonghwa', group: 'ATEEZ', role: 'Vocalist' },
  { name: 'Yunho', group: 'ATEEZ', role: 'Dancer / Vocalist' },
  { name: 'Yeosang', group: 'ATEEZ', role: 'Vocalist / Visual' },
  { name: 'San', group: 'ATEEZ', role: 'Vocalist / Performer' },
  { name: 'Mingi', group: 'ATEEZ', role: 'Rapper' },
  { name: 'Wooyoung', group: 'ATEEZ', role: 'Dancer / Vocalist' },
  { name: 'Jongho', group: 'ATEEZ', role: 'Vocalist / Maknae' },

  // Stray Kids
  { name: 'Bang Chan', group: 'Stray Kids', role: 'Leader / Producer' },
  { name: 'Lee Know', group: 'Stray Kids', role: 'Dancer / Vocalist' },
  { name: 'Changbin', group: 'Stray Kids', role: 'Rapper' },
  { name: 'Hyunjin', group: 'Stray Kids', role: 'Dancer / Visual' },
  { name: 'Han', group: 'Stray Kids', role: 'Rapper / Vocalist' },
  { name: 'Felix', group: 'Stray Kids', role: 'Dancer / Vocalist' },
  { name: 'Seungmin', group: 'Stray Kids', role: 'Vocalist' },
  { name: 'I.N', group: 'Stray Kids', role: 'Vocalist / Maknae' },

  // ENHYPEN
  { name: 'Jungwon', group: 'ENHYPEN', role: 'Leader / Vocalist' },
  { name: 'Heeseung', group: 'ENHYPEN', role: 'Vocalist' },
  { name: 'Jay', group: 'ENHYPEN', role: 'Rapper' },
  { name: 'Jake', group: 'ENHYPEN', role: 'Vocalist' },
  { name: 'Sunghoon', group: 'ENHYPEN', role: 'Dancer / Visual' },
  { name: 'Sunoo', group: 'ENHYPEN', role: 'Vocalist' },
  { name: 'Ni-ki', group: 'ENHYPEN', role: 'Dancer / Maknae' },

  // Xikers
  { name: 'Minjae', group: 'Xikers', role: 'Leader / Rapper' },
  { name: 'Junmin', group: 'Xikers', role: 'Dancer' },
  { name: 'Sumin', group: 'Xikers', role: 'Vocalist' },
  { name: 'Jinsik', group: 'Xikers', role: 'Rapper' },
  { name: 'Hyunwoo', group: 'Xikers', role: 'Vocalist' },
  { name: 'Hunter', group: 'Xikers', role: 'Vocalist' },
  { name: 'Seeun', group: 'Xikers', role: 'Vocalist' },
  { name: 'Yujun', group: 'Xikers', role: 'Vocalist' },
  { name: 'Yechan', group: 'Xikers', role: 'Rapper' },
  { name: 'Keonhee', group: 'Xikers', role: 'Vocalist' },

  // BLACKPINK
  { name: 'Jisoo', group: 'BLACKPINK', role: 'Vocalist / Visual' },
  { name: 'Jennie', group: 'BLACKPINK', role: 'Rapper / Vocalist' },
  { name: 'Rosé', group: 'BLACKPINK', role: 'Vocalist / Guitarist' },
  { name: 'Lisa', group: 'BLACKPINK', role: 'Dancer / Rapper / Maknae' },

  // XG
  { name: 'Jurin', group: 'XG', role: 'Leader / Rapper' },
  { name: 'Chisa', group: 'XG', role: 'Vocalist' },
  { name: 'Hinata', group: 'XG', role: 'Dancer' },
  { name: 'Harvey', group: 'XG', role: 'Rapper' },
  { name: 'Juria', group: 'XG', role: 'Vocalist' },
  { name: 'Maya', group: 'XG', role: 'Dancer' },
  { name: 'Cocona', group: 'XG', role: 'Rapper' },

  // IVE
  { name: 'Yujin', group: 'IVE', role: 'Leader / Vocalist' },
  { name: 'Gaeul', group: 'IVE', role: 'Rapper' },
  { name: 'Rei', group: 'IVE', role: 'Rapper' },
  { name: 'Wonyoung', group: 'IVE', role: 'Vocalist / Visual' },
  { name: 'Liz', group: 'IVE', role: 'Vocalist' },
  { name: 'Leeseo', group: 'IVE', role: 'Vocalist / Maknae' },

  // aespa
  { name: 'Karina', group: 'aespa', role: 'Leader / Dancer' },
  { name: 'Giselle', group: 'aespa', role: 'Rapper' },
  { name: 'Winter', group: 'aespa', role: 'Vocalist' },
  { name: 'Ningning', group: 'aespa', role: 'Vocalist / Maknae' }
];

connectDB().then(() => {
  const db = getDB();
  db.collection('artists').insertMany(artists).then(() => {
    console.log('🎤 Artists seeded successfully');
    process.exit();
  });
});