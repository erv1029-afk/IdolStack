import ArtistCard from "../components/ArtistCard";

const artistData = [
  // 🧨 BTS
  { name: "RM", group: "BTS", mbtiType: "ENFP", image: "/assets/idols/rm.jpg", fact: "RM has an IQ of 148 and taught himself English by watching Friends." },
  { name: "Jin", group: "BTS", mbtiType: "INTP", image: "/assets/idols/jin.jpg", fact: "Jin owns a restaurant called Ossu Seiromushi in Seoul." },
  { name: "Suga", group: "BTS", mbtiType: "ISTP", image: "/assets/idols/suga.jpg", fact: "Suga started producing music at age 13." },
  { name: "J-Hope", group: "BTS", mbtiType: "INFJ", image: "/assets/idols/jhope.jpg", fact: "J-Hope was part of a street dance crew before joining BTS." },
  { name: "Jimin", group: "BTS", mbtiType: "ESTJ", image: "/assets/idols/jimin.jpg", fact: "Jimin studied contemporary dance and ranked top of his class." },
  { name: "V", group: "BTS", mbtiType: "INFP", image: "/assets/idols/v.jpg", fact: "V coined the phrase 'I purple you' to express love and trust." },
  { name: "Jungkook", group: "BTS", mbtiType: "ISFP", image: "/assets/idols/jungkook.jpg", fact: "Jungkook directed BTS’s ‘Life Goes On’ music video himself." },

  // 🌊 ATEEZ
  { name: "Hongjoong", group: "ATEEZ", mbtiType: "INFP", image: "/assets/idols/hongjoong.jpg", fact: "Hongjoong customizes his own clothes with paint and patches." },
  { name: "Seonghwa", group: "ATEEZ", mbtiType: "ESFJ", image: "/assets/idols/seonghwa.jpg", fact: "Seonghwa is known for his love of cleaning and organizing." },
  { name: "Yunho", group: "ATEEZ", mbtiType: "ENFJ", image: "/assets/idols/yunho.jpg", fact: "Yunho was a backup dancer for BTS before debuting." },
  { name: "Yeosang", group: "ATEEZ", mbtiType: "ISFJ", image: "/assets/idols/yeosang.jpg", fact: "Yeosang has a birthmark shaped like a heart." },
  { name: "San", group: "ATEEZ", mbtiType: "INFP", image: "/assets/idols/san.jpg", fact: "San is known for his powerful stage presence and duality." },
  { name: "Mingi", group: "ATEEZ", mbtiType: "ENTP", image: "/assets/idols/mingi.jpg", fact: "Mingi studied in the same dance academy as Yunho." },
  { name: "Wooyoung", group: "ATEEZ", mbtiType: "ESFJ", image: "/assets/idols/wooyoung.jpg", fact: "Wooyoung was previously a trainee at BigHit." },
  { name: "Jongho", group: "ATEEZ", mbtiType: "ESFJ", image: "/assets/idols/jongho.jpg", fact: "Jongho can crush apples with his bare hands." },

  // 🧭 Stray Kids
  { name: "Bang Chan", group: "Stray Kids", mbtiType: "ENFJ", image: "/assets/idols/bangchan.jpg", fact: "Bang Chan trained for 7 years before debuting." },
  { name: "Lee Know", group: "Stray Kids", mbtiType: "ISFP", image: "/assets/idols/leeknow.jpg", fact: "Lee Know was a backup dancer for BTS." },
  { name: "Changbin", group: "Stray Kids", mbtiType: "ESTP", image: "/assets/idols/changbin.jpg", fact: "Changbin is known for his fast rap delivery." },
  { name: "Hyunjin", group: "Stray Kids", mbtiType: "INFP", image: "/assets/idols/hyunjin.jpg", fact: "Hyunjin is a skilled painter and visual artist." },
  { name: "Han", group: "Stray Kids", mbtiType: "ISTP", image: "/assets/idols/han.jpg", fact: "Han lived in Malaysia for several years." },
  { name: "Felix", group: "Stray Kids", mbtiType: "ESFJ", image: "/assets/idols/felix.jpg", fact: "Felix is known for his deep voice and freckles." },
  { name: "Seungmin", group: "Stray Kids", mbtiType: "ESFJ", image: "/assets/idols/seungmin.jpg", fact: "Seungmin was a class president in school." },
  { name: "I.N", group: "Stray Kids", mbtiType: "ISFJ", image: "/assets/idols/in.jpg", fact: "I.N started as a child model before joining JYP." },

  // 🧬 ENHYPEN
  { name: "Heeseung", group: "ENHYPEN", mbtiType: "INTP", image: "/assets/idols/heeseung.jpg", fact: "Heeseung was a finalist in BigHit’s I-LAND survival show." },
  { name: "Jay", group: "ENHYPEN", mbtiType: "ENFJ", image: "/assets/idols/jay.jpg", fact: "Jay was born in Seattle and speaks fluent English." },
  { name: "Jake", group: "ENHYPEN", mbtiType: "ESTJ", image: "/assets/idols/jake.jpg", fact: "Jake studied engineering before joining I-LAND." },
  { name: "Sunghoon", group: "ENHYPEN", mbtiType: "ISTJ", image: "/assets/idols/sunghoon.jpg", fact: "Sunghoon was a competitive figure skater." },
  { name: "Sunoo", group: "ENHYPEN", mbtiType: "ENFP", image: "/assets/idols/sunoo.jpg", fact: "Sunoo is known for his expressive selfies." },
  { name: "Jungwon", group: "ENHYPEN", mbtiType: "ISTJ", image: "/assets/idols/jungwon.jpg", fact: "Jungwon trained in taekwondo for 7 years." },
  { name: "Ni-ki", group: "ENHYPEN", mbtiType: "ESFP", image: "/assets/idols/niki.jpg", fact: "Ni-ki was a backup dancer for SHINee at age 11." },

  // 🌀 xikers
  { name: "Minjae", group: "xikers", mbtiType: "INFP", image: "/assets/idols/minjae.jpg", fact: "Minjae loves drawing and sketching in his free time." },
  { name: "Junmin", group: "xikers", mbtiType: "ISFJ", image: "/assets/idols/junmin.jpg", fact: "Junmin is known for his calm and gentle personality." },
  { name: "Sumin", group: "xikers", mbtiType: "ENFJ", image: "/assets/idols/sumin.jpg", fact: "Sumin is the leader and main dancer of xikers." },
  { name: "Jinsik", group: "xikers", mbtiType: "ISFJ", image: "/assets/idols/jinsik.jpg", fact: "Jinsik enjoys writing lyrics and journaling." },
  { name: "Hyunwoo", group: "xikers", mbtiType: "INFP", image: "/assets/idols/hyunwoo.jpg", fact: "Hyunwoo is known for his emotional vocal tone." },
  { name: "Junghoon", group: "xikers", mbtiType: "INTP", image: "/assets/idols/junghoon.jpg", fact: "Junghoon is a fan of sci-fi and fantasy novels." },

 // 🖤 BLACKPINK
{ name: "Jennie", group: "BLACKPINK", mbtiType: "ISTP", image: "/assets/idols/jennie.jpg", fact: "Jennie speaks fluent English, Korean, and some Japanese." },
{ name: "Jisoo", group: "BLACKPINK", mbtiType: "INFJ", image: "/assets/idols/jisoo.jpg", fact: "Jisoo made her acting debut in Snowdrop and is known for calming others before herself." },
{ name: "Rosé", group: "BLACKPINK", mbtiType: "ISFP", image: "/assets/idols/rose.jpg", fact: "Rosé writes her own lyrics and plays guitar and piano — she’s a true musical adventurer." },
{ name: "Lisa", group: "BLACKPINK", mbtiType: "ENFP", image: "/assets/idols/lisa.jpg", fact: "Lisa is from Thailand and learned K-pop choreography just by watching it once." },

// ✨ XG
{ name: "Chisa", group: "XG", mbtiType: "ENFP", image: "/assets/idols/chisa.jpg", fact: "Chisa is the group’s sub-leader and once worked as an actress in Japan." },
{ name: "Hinata", group: "XG", mbtiType: "ISFP", image: "/assets/idols/hinata.jpg", fact: "Hinata is half-Korean and half-Japanese and loves anime and drawing." },
{ name: "Jurin", group: "XG", mbtiType: "ENTJ", image: "/assets/idols/jurin.jpg", fact: "Jurin is a former pro snowboarder and fashion model — and calls herself a 'wolf'." },
{ name: "Harvey", group: "XG", mbtiType: "INFP", image: "/assets/idols/harvey.jpg", fact: "Harvey modeled for VOGUE GIRL and believes in UFOs and unicorns." },
{ name: "Juria", group: "XG", mbtiType: "ESFJ-T", image: "/assets/idols/juria.jpg", fact: "Juria trained for 5 years and is known for her perfectionism and vocal tone." },
{ name: "Maya", group: "XG", mbtiType: "ESFP", image: "/assets/idols/maya.jpg", fact: "Maya is the group’s energy booster and loves dancing and colorful fashion." },
{ name: "Cocona", group: "XG", mbtiType: "INFJ-T", image: "/assets/idols/cocona.jpg", fact: "Cocona is the youngest and trained for 5 years before debuting with XG." },

// 🌸 IVE
{ name: "Yujin", group: "IVE", mbtiType: "ISTP", image: "/assets/idols/yujin.jpg", fact: "Yujin was in IZ*ONE and appeared on King of Mask Singer before debuting with IVE." },
{ name: "Gaeul", group: "IVE", mbtiType: "ISTJ", image: "/assets/idols/gaeul.jpg", fact: "Gaeul loves horror movies and mystery novels — she’s IVE’s curious eldest." },
{ name: "Rei", group: "IVE", mbtiType: "INFJ", image: "/assets/idols/rei.jpg", fact: "Rei is from Japan and loves drawing and crafting in her free time." },
{ name: "Wonyoung", group: "IVE", mbtiType: "ENFP", image: "/assets/idols/wonyoung.jpg", fact: "Wonyoung debuted at 14 and was the #1 finalist on Produce 48." },
{ name: "Liz", group: "IVE", mbtiType: "INFP", image: "/assets/idols/liz.jpg", fact: "Liz adores cats and is known for her angelic vocals and shy charm." },
{ name: "Leeseo", group: "IVE", mbtiType: "ENFP", image: "/assets/idols/leeseo.jpg", fact: "Leeseo debuted at 14 and is known for her boundless energy and bright spirit." },

// 🌐 aespa
{ name: "Karina", group: "aespa", mbtiType: "ENFP", image: "/assets/idols/karina.jpg", fact: "Karina was discovered via Instagram DMs and has a black belt in Taekwondo." },
{ name: "Giselle", group: "aespa", mbtiType: "INFJ", image: "/assets/idols/giselle.jpg", fact: "Giselle speaks 4 languages and was in choir for 4 years as an alto." },
{ name: "Winter", group: "aespa", mbtiType: "ISFJ", image: "/assets/idols/winter.jpg", fact: "Winter was vice president of her school and originally wanted to be an actress." },
{ name: "Ningning", group: "aespa", mbtiType: "INFP", image: "/assets/idols/ningning.jpg", fact: "Ningning is the maknae and has a powerful voice despite her quiet personality." }, 

];

export default artistData;