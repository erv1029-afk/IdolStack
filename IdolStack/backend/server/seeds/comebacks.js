const { connectDB, getDB } = require('../config/db');

// 🎶 Comeback data
const comebacks = [
  {
    group: 'Stray Kids',
    title: 'SKZ IT TAPE: DO IT',
    releaseDate: '2025-11-21',
    type: 'Album',
    notes: 'Double title tracks: "Do It" and "Sinseonnolgeum"',
  },
  {
    group: 'BTS',
    title: 'TBA (2026 Comeback)',
    releaseDate: '2026-05-01',
    type: 'Album',
    notes: 'First full-group comeback post-enlistment; teased in Disney+ docuseries',
  },
  {
    group: 'ATEEZ',
    title: 'Golden Hour: Part.3 (In Your Fantasy)',
    releaseDate: '2025-07-10',
    type: 'Album',
    notes: 'Follow-up to Part.2; includes "In Your Fantasy" concept and visuals',
  },
  {
    group: 'ATEEZ',
    title: 'Golden Hour: Part.2',
    releaseDate: '2025-10-31',
    type: 'Album',
    notes: 'Includes title track "Ice On My Teeth"; Billboard #1',
  },
  {
    group: 'ENHYPEN',
    title: 'WALK THE LINE Tour Setlist',
    releaseDate: '2025-08-15',
    type: 'Tour',
    notes: 'No new album yet; tour includes US and Europe legs',
  },
  {
    group: 'Xikers',
    title: 'HOUSE OF TRICKY: SPUR',
    releaseDate: '2025-06-10',
    type: 'Mini Album',
    notes: 'Released ahead of "Road to XY" world tour',
  },
  {
    group: 'Xikers',
    title: 'HOUSE OF TRICKY: Trial and Error',
    releaseDate: '2025-10-31',
    type: 'Album',
    notes: 'Latest release with experimental concept and new visuals',
  },
  {
    group: 'BLACKPINK',
    title: 'TBA (Jan 2026 Comeback)',
    releaseDate: '2026-01-12',
    type: 'Album',
    notes: 'First group release since Born Pink (2022); comeback delayed',
  },
  {
    group: 'XG',
    title: 'Debut Full-Length Album',
    releaseDate: '2026-01-23',
    type: 'Album',
    notes: 'Preceding THE CORE world tour in Feb 2026',
  },
  {
    group: 'IVE',
    title: 'IVE EMPATHY',
    releaseDate: '2025-08-25',
    type: 'Album',
    notes: 'Comeback with new concept following Feb release',
  },
  {
    group: 'aespa',
    title: 'Whiplash',
    releaseDate: '2025-10-21',
    type: 'Mini Album',
    notes: 'Follow-up to Rich Man album; part of Synk: Aexis Line tour',
  },
];

// 🗓 Optional: Convert releaseDate strings to Date objects
comebacks.forEach(c => {
  c.releaseDate = new Date(c.releaseDate);
});

async function seedComebacks() {
  try {
    await connectDB();
    const db = getDB();

    // 🧬 Insert data
    await db.collection('comebacks').insertMany(comebacks);
    console.log('🎤 Comebacks seeded successfully');

    // 📌 Create indexes
    await db.collection('comebacks').createIndex({ group: 1 });
    await db.collection('comebacks').createIndex({ releaseDate: 1 });
    console.log('📌 Indexes created on group and releaseDate');
  } catch (err) {
    console.error('❌ Seeding error:', err);
  } finally {
    process.exit();
  }
}

seedComebacks();