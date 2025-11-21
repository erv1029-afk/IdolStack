import ArtistCard from "../components/ArtistCard";


const artistData = [
  //BTSgit add
{ name: "RM", group: "BTS", position: "Leader, Main Rapper", image: "/images/RM.jpg", fact: "RM has an IQ of 148 and taught himself English by watching Friends." },
{ name: "Jin", group: "BTS", position: "Sub Vocalist, Visual", image: "/images/Jin.jpg", fact: "Jin owns a restaurant called Ossu Seiromushi in Seoul." },
{ name: "Suga", group: "BTS", position: "Lead Rapper", image: "/images/Suga.jpg", fact: "Suga started producing music at age 13." },
{ name: "J-Hope", group: "BTS", position: "Main Dancer, Sub Rapper", image: "/images/J-Hope.jpg", fact: "J-Hope was part of a street dance crew before joining BTS." },
{ name: "Jimin", group: "BTS", position: "Main Dancer, Lead Vocalist", image: "/images/Jimin.jpg", fact: "Jimin studied contemporary dance and ranked top of his class." },
{ name: "V", group: "BTS", position: "Lead Dancer, Sub Vocalist, Visual", image: "/images/V.jpg", fact: "V coined the phrase 'I purple you' to express love and trust." },
{ name: "Jungkook", group: "BTS", position: "Main Vocalist, Lead Dancer, Sub Rapper, Center, Maknae", image: "/images/Jungkook.jpg", fact: "Jungkook directed BTS’s ‘Life Goes On’ music video himself." },

// 🌊 ATEEZ
{ name: "Hongjoong", group: "ATEEZ", position: "Leader, Rapper, Composer", image: "/images/Hongjoong.jpg", fact: "Hongjoong customizes his own clothes with paint and patches." },
{ name: "Seonghwa", group: "ATEEZ", position: "Vocalist, Visual", image: "/images/Seonghwa.jpg", fact: "Seonghwa is known for his love of cleaning and organizing." },
{ name: "Yunho", group: "ATEEZ", position: "Main Dancer, Vocalist", image: "/images/Yunho.jpg", fact: "Yunho was a backup dancer for BTS before debuting." },
{ name: "Yeosang", group: "ATEEZ", position: "Lead Dancer, Vocalist", image: "/images/Yeosang.jpg", fact: "Yeosang has a birthmark shaped like a heart." },
{ name: "San", group: "ATEEZ", position: "Lead Vocalist", image: "/images/San.jpg", fact: "San is known for his powerful stage presence and duality." },
{ name: "Mingi", group: "ATEEZ", position: "Main Rapper", image: "/images/Mingi.jpg", fact: "Mingi studied in the same dance academy as Yunho." },
{ name: "Wooyoung", group: "ATEEZ", position: "Main Dancer, Vocalist", image: "/images/Wooyoung.jpg", fact: "Wooyoung was previously a trainee at BigHit." },
{ name: "Jongho", group: "ATEEZ", position: "Main Vocalist, Maknae", image: "/images/Jongho.jpg", fact: "Jongho can crush apples with his bare hands." },

// 🧭 Stray Kids
{ name: "Bang Chan", group: "Stray Kids", position: "Leader, Producer, Lead Vocalist", image: "/images/Bangchan.jpg", fact: "Bang Chan trained for 7 years before debuting." },
{ name: "Lee Know", group: "Stray Kids", position: "Main Dancer, Vocalist", image: "/images/Leeknow.jpg", fact: "Lee Know was a backup dancer for BTS." },
{ name: "Changbin", group: "Stray Kids", position: "Main Rapper", image: "/images/Changbin.jpg", fact: "Changbin is known for his fast rap delivery." },
{ name: "Hyunjin", group: "Stray Kids", position: "Main Dancer, Rapper", image: "/images/Hyunjin.jpg", fact: "Hyunjin is a skilled painter and visual artist." },
{ name: "Han", group: "Stray Kids", position: "Lead Rapper, Vocalist", image: "/images/Han.jpg", fact: "Han lived in Malaysia for several years." },
{ name: "Felix", group: "Stray Kids", position: "Lead Dancer, Rapper", image: "/images/Felix.jpg", fact: "Felix is known for his deep voice and freckles." },
{ name: "Seungmin", group: "Stray Kids", position: "Lead Vocalist", image: "/images/Seungmin.jpg", fact: "Seungmin was a class president in school." },
{ name: "I.N", group: "Stray Kids", position: "Vocalist, Maknae", image: "/images/IN.jpg", fact: "I.N started as a child model before joining JYP." },

// 🧬 ENHYPEN
{ name: "Heeseung", group: "ENHYPEN", position: "Main Vocalist", image: "/images/Heeseung.jpg", fact: "Heeseung was a finalist in BigHit’s I-LAND survival show." },
{ name: "Jay", group: "ENHYPEN", position: "Lead Rapper, Vocalist", image: "/images/Jay.jpg", fact: "Jay was born in Seattle and speaks fluent English." },
{ name: "Jake", group: "ENHYPEN", position: "Lead Vocalist, Rapper", image: "/images/Jake.jpg", fact: "Jake studied engineering before joining I-LAND." },
{ name: "Sunghoon", group: "ENHYPEN", position: "Visual, Vocalist", image: "/images/Sunghoon.jpg", fact: "Sunghoon was a competitive figure skater." },
{ name: "Sunoo", group: "ENHYPEN", position: "Vocalist", image: "/images/Sunoo.jpg", fact: "Sunoo is known for his expressive selfies." },
{ name: "Jungwon", group: "ENHYPEN", position: "Leader, Lead Dancer", image: "/images/Jungwon.jpg", fact: "Jungwon trained in taekwondo for 7 years." },
{ name: "Ni-ki", group: "ENHYPEN", position: "Main Dancer, Maknae", image: "/images/Ni-ki.jpg", fact: "Ni-ki was a backup dancer for SHINee at age 11." },

// 🌀 xikers
{ name: "Minjae", group: "xikers", position: "Vocalist", image: "/images/Minjae.jpg", fact: "Minjae loves drawing and sketching in his free time." },
{ name: "Junmin", group: "xikers", position: "Dancer, Vocalist", image: "/images/Junmin.jpg", fact: "Junmin is known for his calm and gentle personality." },
{ name: "Sumin", group: "xikers", position: "Leader, Main Dancer", image: "/images/Sumin.jpg", fact: "Sumin is the leader and main dancer of xikers." },
{ name: "Jinsik", group: "xikers", position: "Vocalist, Lyricist", image: "/images/Jinsik.jpg", fact: "Jinsik enjoys writing lyrics and journaling." },
{ name: "Hyunwoo", group: "xikers", position: "Main Vocalist", image: "/images/Hyunwoo.jpg", fact: "Hyunwoo is known for his emotional vocal tone." },
{ name: "Junghoon", group: "xikers", position: "Rapper", image: "/images/Junghoon.jpg", fact: "Junghoon is a fan of sci-fi and fantasy novels." },
{ name: "Seeun", group: "xikers", position: "Vocalist, Visual, Sub-Rapper", image: "/images/Seeun.jpg", fact: "Seeun is known as the group’s prankster and loves hip-hop and pop music." },
{ name: "Yujun", group: "xikers", position: "Vocalist, Visual", image: "/images/Yujun.jpg", fact: "Yujun has a huge appetite—he once ate four servings of ramen in one sitting." },
{ name: "Yechan", group: "xikers", position: "Main Rapper, Main Dancer, Vocalist, Maknae", image: "/images/Yechan.jpg", fact: "Yechan holds a black belt in taekwondo and is the youngest member of xikers." },
{ name: "Hunter", group: "xikers", position: "Main Dancer, Vocalist", image: "/images/Hunter.jpg", fact: "Hunter is Thai and won medals in golf competitions before becoming an idol." },


  // 🖤 BLACKPINK
  { name: "Jennie", group: "BLACKPINK", position: "Main Rapper, Lead Vocalist", image: "/assets/idols/jennie.jpg", fact: "Jennie speaks fluent English, Korean, and some Japanese." },
  { name: "Jisoo", group: "BLACKPINK", position: "Lead Vocalist, Visual", image: "/assets/idols/jisoo.jpg", fact: "Jisoo made her acting debut in Snowdrop and is known for calming others before herself." },
  { name: "Rosé", group: "BLACKPINK", position: "Main Vocalist, Lead Dancer", image: "/assets/idols/rose.jpg", fact: "Rosé writes her own lyrics and plays guitar and piano — she’s a true musical adventurer." },
  { name: "Lisa", group: "BLACKPINK", position: "Main Dancer, Lead Rapper, Sub Vocalist, Maknae", image: "/assets/idols/lisa.jpg", fact: "Lisa is from Thailand and learned K-pop choreography just by watching it once." },

  // ✨ XG
  { name: "Chisa", group: "XG", position: "Main Vocalist, Sub Leader", image: "/assets/idols/chisa.jpg", fact: "Chisa is the group’s sub-leader and once worked as an actress in Japan." },
  { name: "Hinata", group: "XG", position: "Sub Vocalist", image: "/assets/idols/hinata.jpg", fact: "Hinata is half-Korean and half-Japanese and loves anime and drawing." },
  { name: "Jurin", group: "XG", position: "Leader, Main Rapper", image: "/assets/idols/jurin.jpg", fact: "Jurin is a former pro snowboarder and fashion model — and calls herself a 'wolf'." },
  { name: "Harvey", group: "XG", position: "Lead Rapper, Sub Vocalist", image: "/assets/idols/harvey.jpg", fact: "Harvey modeled for VOGUE GIRL and believes in UFOs and unicorns." },
  { name: "Juria", group: "XG", position: "Lead Vocalist", image: "/assets/idols/juria.jpg", fact: "Juria trained for 5 years and is known for her perfectionism and vocal tone." },
  { name: "Maya", group: "XG", position: "Main Dancer, Sub Vocalist", image: "/assets/idols/maya.jpg", fact: "Maya is the group’s energy booster and loves dancing and colorful fashion." },
  { name: "Cocona", group: "XG", position: "Main Rapper, Maknae", image: "/assets/idols/cocona.jpg", fact: "Cocona is the youngest and trained for 5 years before debuting with XG." },

  // 🌸 IVE
  { name: "Yujin", group: "IVE", position: "Leader, Lead Vocalist", image: "/assets/idols/yujin.jpg", fact: "Yujin was in IZ*ONE and appeared on King of Mask Singer before debuting with IVE." },
  { name: "Gaeul", group: "IVE", position: "Main Dancer, Rapper", image: "/assets/idols/gaeul.jpg", fact: "Gaeul loves horror movies and mystery novels — she’s IVE’s curious eldest." },
  { name: "Rei", group: "IVE", position: "Main Rapper, Sub Vocalist", image: "/assets/idols/rei.jpg", fact: "Rei is from Japan and loves drawing and crafting in her free time." },
  { name: "Wonyoung", group: "IVE", position: "Lead Vocalist, Visual, Center", image: "/assets/idols/wonyoung.jpg", fact: "Wonyoung debuted at 14 and was the #1 finalist on Produce 48." },
  { name: "Liz", group: "IVE", position: "Main Vocalist", image: "/assets/idols/liz.jpg", fact: "Liz adores cats and is known for her angelic vocals and shy charm." },
  { name: "Leeseo", group: "IVE", position: "Sub Vocalist, Maknae", image: "/assets/idols/leeseo.jpg", fact: "Leeseo debuted at 14 and is known for her boundless energy and bright spirit." },

  // 🌐 aespa
  { name: "Karina", group: "aespa", position: "Leader, Main Dancer, Lead Rapper, Sub Vocalist", image: "/assets/idols/karina.jpg", fact: "Karina was discovered via Instagram DMs and has a black belt in Taekwondo." },
  { name: "Giselle", group: "aespa", position: "Main Rapper, Sub Vocalist", image: "/assets/idols/giselle.jpg", fact: "Giselle speaks 4 languages and was in choir for 4 years as an alto." },
  { name: "Winter", group: "aespa", position: "Lead Vocalist, Lead Dancer", image: "/assets/idols/winter.jpg", fact: "Winter was vice president of her school and originally wanted to be an actress." },
  { name: "Ningning", group: "aespa", position: "Main Vocalist, Maknae", image: "/assets/idols/ningning.jpg", fact: "Ningning is the maknae and has a powerful voice despite her quiet personality." },
  
];

export default artistData;