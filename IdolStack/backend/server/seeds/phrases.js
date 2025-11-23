const { connectDB, getDB } = require('../config/db');

// 🗣️ Phrase data
const phrases = [
  { text: 'BTS! BTS! Bangtan Sonyeondan!', type: 'chant', group: 'BTS' },
  { text: 'BLACKPINK in your area!', type: 'slogan', group: 'BLACKPINK' },
  { text: '8 makes 1 team!', type: 'slogan', group: 'ATEEZ' },
  { text: 'Stray Kids everywhere all around the world!', type: 'chant', group: 'Stray Kids' },
  { text: 'ENHYPEN rise!', type: 'slogan', group: 'ENHYPEN' },
  { text: 'aespa, next level!', type: 'slogan', group: 'aespa' },
  { text: 'XG, ALPHAZ unite!', type: 'fandom chant', group: 'XG' },
  { text: 'IVE dive in!', type: 'fandom chant', group: 'IVE' },
  { text: 'Xikers on the road!', type: 'slogan', group: 'Xikers' },
  { text: '사랑해요!', type: 'expression', translation: 'I love you!' },
  { text: '보고 싶어요!', type: 'expression', translation: 'I miss you!' },
  { text: '화이팅!', type: 'expression', translation: 'Let’s go!' },
  { text: 'Encore!', type: 'chant', translation: 'Encore performance request' },
  { text: '최애는 누구예요?', type: 'fan question', translation: 'Who’s your bias?' },
  { text: '컴백 언제예요?', type: 'fan question', translation: 'When is the comeback?' },
];

async function seedPhrases() {
  try {
    await connectDB();
    const db = getDB();

    // 🧬 Insert data
    await db.collection('phrases').insertMany(phrases);
    console.log('🎤 Phrases seeded successfully');

    // 📌 Create indexes for faster lookups
    await db.collection('phrases').createIndex({ group: 1 });
    await db.collection('phrases').createIndex({ type: 1 });
    await db.collection('phrases').createIndex({ text: 'text' }); // full-text search on phrase text
    console.log('📌 Indexes created on group, type, and text');
  } catch (err) {
    console.error('❌ Seeding error:', err);
  } finally {
    process.exit();
  }
}

seedPhrases();