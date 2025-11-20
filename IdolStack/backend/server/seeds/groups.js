require("dotenv").config();
const { MongoClient } = require("mongodb");

const groups = [
  {
    name: "BTS",
    label: "방탄소년단",
    agency: "HYBE / BigHit Music",
    description:
      "BTS is a seven-member boy group known for their global influence, storytelling, and genre-blending music. They debuted in 2013 and became the first K-pop act to top the Billboard Hot 100.",
    members: ["RM", "Jin", "Suga", "J-Hope", "Jimin", "V", "Jungkook"],
    image: "/images/bts.webp",
    debutYear: 2013,
    debut: "June 13, 2013",
    fandom: "ARMY",
    fandomLaunch: "July 9, 2013",
    awards: ["Grammy nominations", "Billboard Music Awards", "American Music Awards"],
    albums: ["Map of the Soul: 7", "BE", "Proof"],
  },
  {
    name: "ATEEZ",
    label: "에이티즈",
    agency: "KQ Entertainment",
    description:
      "ATEEZ is an eight-member boy group known for their powerful performances and pirate-inspired lore. They debuted in 2018 and have built a strong international fanbase.",
    members: [
      "Hongjoong", "Seonghwa", "Yunho", "Yeosang",
      "San", "Mingi", "Wooyoung", "Jongho"
    ],
    image: "/images/ateez.jpg",
    debutYear: 2018,
    debut: "October 24, 2018",
    fandom: "ATINY",
    fandomLaunch: "November 17, 2018",
    awards: ["MAMA Worldwide Fans' Choice", "Golden Disc Rookie Award"],
    albums: ["Treasure series", "The World EP series", "Golden Hour: Part.3"],
  },
  {
    name: "Stray Kids",
    label: "스트레이 키즈",
    agency: "JYP Entertainment",
    description:
      "Stray Kids is a self-producing boy group formed through a survival show in 2017. Known for their raw lyrics and experimental sound, they’ve become a global force in 4th-gen K-pop.",
    members: [
      "Bang Chan", "Lee Know", "Changbin", "Hyunjin",
      "Han", "Felix", "Seungmin", "I.N"
    ],
    image: "/images/stray-kids.jpg",
    debutYear: 2018,
    debut: "March 25, 2018",
    fandom: "STAY",
    fandomLaunch: "August 1, 2018",
    awards: ["Billboard No.1 Albums", "MAMA Best Male Group"],
    albums: ["NOEASY", "ODDINARY", "★★★★★ (5-STAR)", "KARMA"],
  },
  {
    name: "ENHYPEN",
    label: "엔하이픈",
    agency: "BELIFT LAB (HYBE x CJ ENM)",
    description:
      "ENHYPEN was formed through the survival show I-LAND in 2020. Their concept blends vampire lore with coming-of-age themes, and they’ve quickly risen as 4th-gen leaders.",
    members: [
      "Jungwon", "Heeseung", "Jay", "Jake",
      "Sunghoon", "Sunoo", "Ni-ki"
    ],
    image: "/images/enhypen.jpeg",
    debutYear: 2020,
    debut: "November 30, 2020",
    fandom: "ENGENE",
    fandomLaunch: "October 9, 2020",
    awards: ["MAMA Best New Artist", "Golden Disc Rookie Award"],
    albums: ["BORDER: DAY ONE", "DIMENSION: DILEMMA", "MANIFESTO: DAY 1"],
  },
  {
    name: "xikers",
    label: "싸이커스",
    agency: "KQ Entertainment",
    description:
      "xikers is a 10-member boy group known for their time-traveling concept and high-energy performances. They debuted in 2023 with the mini album 'House of Tricky: Doorbell Ringing'.",
    members: [
      "Minjae", "Junmin", "Sumin", "Jinsik", "Hyunwoo",
      "Junghoon", "Seeun", "Hunter", "Yujun", "Yechan"
    ],
    image: "/images/xikers.jpg",
    debutYear: 2023,
    debut: "March 30, 2023",
    fandom: "Road𝓨",
    fandomLaunch: "May 4, 2023",
    awards: ["Hanteo Rookie of the Year"],
    albums: ["House of Tricky: Doorbell Ringing", "House of Tricky: Wrecking the House"],
  },
  {
    name: "BLACKPINK",
    label: "블랙핑크",
    agency: "YG Entertainment",
    description:
      "BLACKPINK is a four-member girl group that debuted in 2016. Known for their fierce image and global appeal, they were the first K-pop girl group to headline Coachella.",
    members: ["Jisoo", "Jennie", "Rosé", "Lisa"],
    image: "/images/blackpink.jpg",
    debutYear: 2016,
    debut: "August 8, 2016",
    fandom: "BLINK",
    fandomLaunch: "November 14, 2016",
    awards: ["MTV VMAs", "Billboard Women in Music", "BreakTudo Awards"],
    albums: ["THE ALBUM", "BORN PINK", "JUMP"],
  },
  {
    name: "XG",
    label: "Xtraordinary Girls",
    agency: "XGALX (Avex)",
    description:
      "XG is a Japanese-Korean girl group with a global hip-hop/R&B concept. They debuted in 2022 with 'Tippy Toes' and are known for their fierce visuals and multilingual releases.",
    members: ["Jurin", "Chisa", "Hinata", "Harvey", "Juria", "Maya", "Cocona"],
    image: "/images/xg.webp",
    debutYear: 2022,
    debut: "March 18, 2022",
    fandom: "ALPHAZ",
    fandomLaunch: "June 1, 2022",
    awards: ["Asian Pop Music Awards", "MTV Japan Rising Star"],
    albums: ["NEW DNA", "Shooting Star"],
  },
  {
    name: "IVE",
    label: "아이브",
    agency: "Starship Entertainment",
    description:
      "IVE is a six-member girl group that debuted in 2021. With viral hits like 'Love Dive' and 'After LIKE', they’ve quickly become one of the top 4th-gen girl groups.",
    members: ["Yujin", "Gaeul", "Rei", "Wonyoung", "Liz", "Leeseo"],
    image: "/images/ive.jpg",
    debutYear: 2021,
    debut: "December 1, 2021",
    fandom: "DIVE",
    fandomLaunch: "December 17, 2021",
    awards: ["MAMA Song of the Year", "Golden Disc Bonsang"],
    albums: ["I'VE IVE", "REBEL HEART"],
  },
  {
    name: "aespa",
    label: "에스파",
    agency: "SM Entertainment",
    description:
      "aespa debuted in 2020 with a futuristic concept involving AI avatars. Their music blends hyperpop, EDM, and K-pop, and they’re known for hits like 'Next Level' and 'Savage'.",
    members: ["Karina", "Giselle", "Winter", "NingNing"],
    image: "/images/aespa.jpg",
    debutYear: 2020,
    debut: "November 17, 2020",
    fandom: "MY",
    fandomLaunch: "December 15, 2020",
    awards: ["MAMA Best Dance Performance", "BreakTudo Awards"],
    albums: ["Savage", "Girls", "Drama"],
  },
];

// 🌱 Seed function
async function seedGroups() {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();

    await db.collection("groups").deleteMany({});
    await db.collection("groups").insertMany(groups);

    console.log("✅ Groups seeded successfully");
  } catch (err) {
    console.error("❌ Seeding error:", err);
  } finally {
    await client.close();
  }
}

// 🚀 Run the seed
seedGroups();
