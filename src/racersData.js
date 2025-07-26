// racersData.js
// This file contains the comprehensive data for all Umamusume racers.

export const racersData = [
  // --- SPRINT ---
  {
    id: 1,
    name: 'Blossom in Learning',
    nickname: 'Sakura Bakushin O',
    distance: 'Sprint',
    style: 'Front-runner',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'A', mile: 'B', med: 'G', long: 'G' },
      pace: { front: 'A', pace: 'A', late: 'F', end: 'G' },
    },
    stats: { speed: 1000, stamina: 500, power: 600, guts: 400, wit: 400 },
    skills: ['Straightaway Acceleration', 'Homestretch Haste', 'Early Lead', 'Front Runner Straightaways ○', 'Front Runner Corners ○', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "Sakura Bakushin O is all about maintaining a lead in Sprints. Her build should prioritize Speed above all else. A deck of 4 Speed, 1 Stamina, and 1 Power cards will give her the stats she needs to dominate short races.",
      cards: ['Silence Suzuka (Beyond This Shining Moment)', 'Vodka (Wild Rider)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Gives good Sprint skills', 'Strong Front Runner skills', 'General-purpose speed skills and debuffs', 'Good for Pace Chasers and End Closers'],
    extraInfo: {
      quote: "Bakushin on one! Bakushin on two! Bakushin, bakushiiin!",
      va: 'Sachika Misawa',
      height: '158cm / 5\'2"',
      weight: 'No change',
      birthday: 'Apr 14',
      bio: "A dedicated class representative who charges into every situation with reckless abandon. Once she's set her mind to something, she'll dash straight towards her goal, often creating more chaos than she resolves. However, her actions are never self-righteous, and she can feel down if nobody needs her help. Her sprinting ability is overwhelming, and she's confident she can outrun anyone.",
    },
    tips: [
        "Focus on Speed and Power. As a Front Runner in Sprints, she needs to establish and keep a strong lead.",
        "Utilize speed-boosting skills like 'Early Lead' and 'Front Runner Corners' to create a gap from the start.",
        "While Stamina isn't a top priority for Sprints, having a recovery skill like 'Swinging Maestro' can provide a crucial safety net."
    ],
    events: [
        { name: 'Extra Training', choices: [{ choice: 'Are you going to keep running?', outcome: '-5 Energy, Last trained stat +5, 5 Bond with Director Akikawa' }, { choice: 'Remember we have to train tomorrow too.', outcome: '5 Energy' }] },
        { name: 'Together with Someone Important!', choices: [{ choice: 'Choice 1', outcome: '10 Guts' }, { choice: 'Choice 2', outcome: '5 Speed, 5 Stamina' }] },
        { name: 'The Voices of the Students', choices: [{ choice: 'Yeah... we should leave.', outcome: '-10 Energy, 10 Stamina, 10 Power' }, { choice: 'How about getting permission right here and now?', outcome: '10 Speed' }] },
        { name: 'The Speed King', choices: [{ choice: 'Let\'s just stick to observing today.', outcome: '5 Power, 5 Wit' }, { choice: 'How about simulating a race in your head?', outcome: '10 Stamina' }] },
    ],
  },
  {
    id: 2,
    name: 'King of Emeralds',
    nickname: 'King Halo',
    distance: 'Sprint',
    style: 'Late Surger',
    aptitudes: {
        track: { turf: 'A', dirt: 'G' },
        distance: { sprint: 'A', mile: 'B', med: 'B', long: 'C' },
        pace: { front: 'G', pace: 'B', late: 'A', end: 'D' },
    },
    stats: { speed: 1000, stamina: 400, power: 700, guts: 400, wit: 500 },
    skills: ['Straightaway Acceleration', 'Homestretch Haste', 'Straightaway Adept', 'Swinging Maestro', 'Fighter', 'Sprinting Gear'],
    recommendedCards: {
      strategy: "As a Late Surger in Sprint races, King Halo needs a huge burst of Speed and Power in the final moments. Stamina is less of a priority. A deck composition of 4 Speed, 1 Stamina, and 1 Power is recommended, though a Speed card can be swapped for Wit to improve skill activation.",
      cards: ['Vodka (Wild Rider)', 'Sakura Bakushin O (Eat Fast! Yum Fast!)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Eishin Flash (5:00 a.m.-Right on Schedule)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'General-purpose speed skills and debuffs', 'Good for Pace Chasers and End Closers', 'Great Medium speed skills and debuffs'],
    extraInfo: {
      quote: "I'll have everyone know that I'll be the first-rate of them all!",
      va: 'Iori Saeki',
      height: '159cm / 5\'2"',
      weight: 'Perfect',
      birthday: 'Apr 28',
      bio: "An Umamusume with an unbreakable spirit, King Halo is ready to overcome any challenge to be recognized by all as a first-class lady. Despite a strained relationship, she hopes to one day be recognized by her mother—a first-rate Umamusume and designer. To her many admirers at the academy, there's no doubt she's already worthy of the title 'King,' and they don't hesitate to hail her as such.",
    },
    tips: [
        "Prioritize Speed and Power stats to ensure she has enough burst to catch up in the final stretch of a sprint.",
        "Maneuverability skills like 'Fighter' are crucial for helping her overtake opponents in a crowded late-race field.",
        "Since Sprints don't demand high stamina, a single strong recovery skill like 'Swinging Maestro' is enough to cover her needs, letting you focus on other stats."
    ],
    events: [
        { name: 'Manners Are Common Sense', choices: [{ choice: 'Choice 1', outcome: '20 Guts, Practice Perfect ○ (Random)' }, { choice: 'Choice 2', outcome: '10 Stamina, 10 Wit, Practice Perfect ○ (Random)' }] },
        { name: 'Three Heads Are Better than One', choices: [{ choice: 'Let\'s see what Grass Wonder thinks.', outcome: '20 Wit' }, { choice: 'Let\'s trust El Condor Pasa.', outcome: '10 Stamina, 15 Skill Pts' }] },
        { name: 'The Outfit That Suits Me Most', choices: [{ choice: 'Choice 1', outcome: '10 Speed, 10 Guts' }, { choice: 'Choice 2', outcome: '20 Power' }] },
    ],
  },
  {
    id: 3,
    name: 'Bestest Prize',
    nickname: 'Haru Urara',
    distance: 'Sprint',
    style: 'Late Surger',
    aptitudes: {
      track: { turf: 'G', dirt: 'A' },
      distance: { sprint: 'A', mile: 'B', med: 'G', long: 'G' },
      pace: { front: 'G', pace: 'G', late: 'A', end: 'B' },
    },
    stats: { speed: 900, stamina: 600, power: 800, guts: 400, wit: 400 },
    skills: ['Slick Surge', 'Nimble Navigator', 'Swinging Maestro', 'Late Surger Corners ○', 'Sprinting Gear', 'Turbo Sprint'],
    recommendedCards: {
      strategy: "Haru Urara shines as a Late Surger in Dirt Sprints. Her build requires immense Speed and Power to accelerate and overtake opponents in the final moments. A deck of 4 Speed, 1 Power, and 1 Stamina is effective, but swapping the Stamina card for another Power card can enhance her acceleration even more.",
      cards: ['Vodka (Wild Rider)', 'Sakura Bakushin O (Eat Fast! Yum Fast!)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Eishin Flash (5:00 a.m.-Right on Schedule)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Strong Late Surger skills', 'End Closer skills and debuffs', 'Gives good Sprint skills', 'General-purpose speed skills and debuffs'],
    extraInfo: {
      quote: "I won't let losing get me down! Urara, la la la! ♪",
      va: 'Yukina Shuto',
      height: '140cm / 4\'7"',
      weight: 'Slight increase (but unphased)',
      birthday: 'Feb 27',
      bio: "She might be on a losing streak, but she never gives up! After experiencing the thrill of racing in her hometown of Kochi, she wanted more. Although she failed Tracen's entrance exam, her boundless positivity—which she spreads to everyone around her—impressed the admissions officer enough to let her in.",
    },
    tips: [
        "Prioritize Speed and Power to maximize her late-race acceleration and overtaking potential on dirt tracks.",
        "Focus on acquiring speed skills like 'Turbo Sprint' and 'Late Surger Corners' to help her maneuver through the pack.",
        "Haru Urara possesses a strong innate recovery skill, so adding another one like 'Swinging Maestro' is a good option but not a top priority if you're struggling with skill points."
    ],
    events: [
        { name: 'New Year\'s Shrine Visit', choices: [{ choice: 'Health! Wish to run races in good condition!', outcome: '30 Energy' }, { choice: 'Overall improvement! Wish to level up!', outcome: '5 All Stats' }, { choice: 'Strong technique! Wish to be skilled enough for the big leagues!', outcome: '35 Skill Pts' }] },
        { name: 'Tug of War Tournament!', choices: [{ choice: 'Choice 1', outcome: '20 Guts, Hot Topic (Random)' }, { choice: 'Choice 2', outcome: '20 Speed, Hot Topic (Random)' }] },
        { name: 'The Racewear I Love!', choices: [{ choice: 'Choice 1', outcome: '20 Speed' }, { choice: 'Choice 2', outcome: '20 Power' }] },
    ],
  },
  // --- MILE ---
  {
    id: 4,
    name: 'Wild Top Gear',
    nickname: 'Vodka',
    distance: 'Mile',
    style: 'Late Surger',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'F', mile: 'A', med: 'A', long: 'F' },
      pace: { front: 'C', pace: 'B', late: 'A', end: 'F' },
    },
    stats: { speed: 1000, stamina: 500, power: 600, guts: 300, wit: 600 },
    skills: ['Corner Adept ○', 'Straightaway Acceleration', 'Homestretch Haste', 'Ramp Up', 'Swinging Maestro', 'Fighter'],
    recommendedCards: {
      strategy: "As a Late Surger for Mile and Medium races, Vodka benefits from high Speed and Power for a decisive finishing kick. A balanced deck of 3 Speed, 1 Stamina, 1 Power, and 1 Wit works well. You can swap the Wit card for more Power, but her natural +20% Power growth often makes this unnecessary.",
      cards: ['Fine Motion (Wave of Gratitude)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Oguri Cap (Get Lots of Hugs for Me)', 'Eishin Flash (5:00 a.m.-Right on Schedule)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Great Medium speed skills and debuffs', 'General-purpose speed skills and debuffs'],
    extraInfo: {
      quote: "I've just gotta be the coolest to ever do it!",
      va: 'Ayaka Ohashi',
      height: '165cm / 5\'4"',
      weight: 'No change',
      birthday: 'Apr 4',
      bio: "Dedicated to being the coolest, this Umamusume tries her best to act like a delinquent, taking after her motorcycle-loving father. Her grandstanding nature sees her charge daringly into any challenge, never afraid of what she might face. She has a bit of a cat-and-dog relationship with her roommate, Daiwa Scarlet.",
    },
    tips: [
        "Build high Speed and Power to fuel her late-race surge and help her overtake opponents effectively.",
        "Maneuverability skills are key. 'Fighter' helps her navigate through the pack, and it synergizes well with speed-gaining skills like 'Ramp Up'.",
        "A single strong stamina recovery skill like 'Swinging Maestro' is usually sufficient, allowing you to focus training points on her more critical offensive stats."
    ],
    events: [
        { name: 'Awkward Honesty', choices: [{ choice: 'Eh, that\'s a little too much for me...', outcome: '10 Energy, 5 Skill Pts' }, { choice: '(Success) Yeah! Looks tasty!', outcome: '30 Energy, 10 Skill Pts' }, { choice: '(Fail) Yeah! Looks tasty!', outcome: '30 Energy, -5 Speed, 5 Power, 10 Skill Pts, Slow Metabolism' }] },
        { name: 'Challenging Fate', choices: [{ choice: 'A rival knight fighting for the princess\'s love.', outcome: '10 Stamina' }, { choice: 'The enemy commander blocking the hero\'s way.', outcome: '10 Speed' }] },
    ],
  },
  {
    id: 5,
    name: 'Peak Blue',
    nickname: 'Daiwa Scarlet',
    distance: 'Mile',
    style: 'Front-runner',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'F', mile: 'A', med: 'A', long: 'B' },
      pace: { front: 'A', pace: 'A', late: 'E', end: 'G' },
    },
    stats: { speed: 1000, stamina: 600, power: 700, guts: 500, wit: 400 },
    skills: ['Focus', 'Up-Tempo', 'Killer Tunes', 'Homestretch Haste', 'Gourmand', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "Daiwa Scarlet is a versatile Front Runner or Pace Chaser for Mile and Medium races. A balanced build with 4 Speed, 1 Stamina, and 1 Power card provides a solid foundation for both her preferred distances and styles. Adjusting for more Stamina or Power can fine-tune her for specific roles.",
      cards: ['Silence Suzuka (Beyond This Shining Moment)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Oguri Cap (Get Lots of Hugs for Me)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Great Medium speed skills and debuffs', 'Strong Front Runner skills', 'Good for Pace Chasers and End Closers'],
    extraInfo: {
      quote: "Second-best won't cut it. Everything I do is for the sake of being number one!",
      va: 'Chisa Kimura',
      height: '163cm / 5\'4"',
      weight: 'Unclear (refused measurement)',
      birthday: 'May 13',
      bio: "Unyielding and strong-willed, she strives to be number one in everything. While she often presents herself as a perfect, mild-mannered honor student, the truth is she hates losing more than anything. She will endure any training, no matter how grueling, if it helps her achieve victory. She sees her flashy roommate Vodka as both a rival and a source of motivation.",
    },
    tips: [
        "Balance high Speed with either Stamina (for a Front Runner build) or Power (for a Pace Chaser build) to suit your strategy.",
        "Speed and maneuvering skills are essential. 'Up-Tempo' is great for a late-race push, while 'Homestretch Haste' is effective for both securing a lead and catching up.",
        "Don't neglect stamina recovery. Skills like 'Swinging Maestro' or 'Gourmand' can ensure she has enough energy for the final stretch, even with a more speed-focused stat build."
    ],
    events: [
        { name: 'Advice from an Older Student', choices: [{ choice: 'You\'re oddly agreeable today.', outcome: '10 Speed' }, { choice: 'Let\'s start with the dirt track!', outcome: '10 Power' }] },
        { name: 'As a Model Student...', choices: [{ choice: 'Choice 1', outcome: '10 Wit' }, { choice: 'Choice 2', outcome: '30 Skill Pts' }] },
    ],
  },
  {
    id: 6,
    name: 'Wild Frontier',
    nickname: 'Taiki Shuttle',
    distance: 'Mile',
    style: 'Pace-setter',
    aptitudes: {
      track: { turf: 'A', dirt: 'B' },
      distance: { sprint: 'A', mile: 'A', med: 'E', long: 'G' },
      pace: { front: 'C', pace: 'A', late: 'E', end: 'G' },
    },
    stats: { speed: 1000, stamina: 600, power: 800, guts: 300, wit: 500 },
    skills: ['Professor of Curvature', 'Focus', 'Straightaway Acceleration', 'Homestretch Haste', 'Gourmand', 'Sprint Straightaways ○'],
    recommendedCards: {
      strategy: "Taiki Shuttle is a powerful Pace Chaser for Sprints and Mile races. High Speed and Power are essential for her to keep pace and break away in the final corner. A deck of 3 Speed, 1 Stamina, 1 Power, and 1 Wit provides a strong, balanced foundation. Her +20% Speed growth helps reach high stats easily.",
      cards: ['Fine Motion (Wave of Gratitude)', 'Sakura Bakushin O (Eat Fast! Yum Fast!)', 'Super Creek (Piece of Mind)', 'Oguri Cap (Get Lots of Hugs for Me)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Good for Pace Chasers and End Closers', 'Gives good Sprint skills', 'Great Medium speed skills and debuffs'],
    extraInfo: {
      quote: "BANG! ☆ Who's ready for a round of sharpshootin'?!",
      va: 'Yuka Otsubo',
      height: '172cm / 5\'7"',
      weight: 'Slight increase (but it\'s no problem!)',
      birthday: 'Mar 23',
      bio: "A cowgirl with a heart as big as her might. Incredibly friendly, she's known for giving hugs and planning parties, though she tends to get lonely. Specializing in sprints and miles, her powerful dash has even caught the eye of her friend, Silence Suzuka.",
    },
    tips: [
        "Focus on high Speed and Power to excel in shorter races. Her playstyle revolves around keeping up with the pack and then bursting ahead.",
        "Leveling her Wit is highly recommended to ensure her crucial skills activate consistently, especially her Unique Skill in the final corner.",
        "A strong recovery skill like 'Gourmand' is very efficient, as it can solve her stamina needs for Mile races and allow you to invest more training into Speed and Power."
    ],
    events: [
        { name: 'At Summer Camp (Year 2)', choices: [{ choice: 'Why don\'t we do some ocean training, then?', outcome: '10 Power' }, { choice: 'Let\'s finish our training as quick as we can first!', outcome: '10 Guts' }] },
        { name: 'Dance Lesson', choices: [{ choice: 'I\'ll dance till I drop!', outcome: '10 Power' }, { choice: 'Could you teach me the choreography first?', outcome: '10 Speed' }] },
    ],
  },
  {
    id: 7,
    name: 'Formula R',
    nickname: 'Maruzensky',
    distance: 'Mile',
    style: 'Front-runner',
    aptitudes: {
        track: { turf: 'A', dirt: 'D' },
        distance: { sprint: 'B', mile: 'A', med: 'B', long: 'C' },
        pace: { front: 'A', pace: 'E', late: 'G', end: 'G' },
    },
    stats: { speed: 1000, stamina: 700, power: 600, guts: 300, wit: 500 },
    skills: ['Focus', 'Final Push', 'Straightaway Acceleration', 'Homestretch Haste', 'Straightaway Adept', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "Maruzensky is a top-tier Front Runner who excels in Mile races. Her build should focus on establishing an early lead and never giving it up. A deck heavy on Speed (4 cards) with 1 Stamina and 1 Power card is ideal. Swapping a Speed for a Wit card is also viable to improve her skill activation, which is boosted by her natural +20% Wit growth.",
      cards: ['Silence Suzuka (Beyond This Shining Moment)', 'Vodka (Wild Rider)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Sweep Tosho (Lamplit Training of a Witch-to-be)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'General-purpose speed skills and debuffs', 'Good for Pace Chasers and End Closers'],
    extraInfo: {
      quote: "The track's like a dance floor, and I'm feelin' groovy today!",
      va: 'Lynn',
      height: '164cm / 5\'4"',
      weight: 'Totally tubular!',
      birthday: 'May 19',
      bio: "A dashing Umamusume with a sisterly demeanor and a retro way of speaking. She is a speed demon who adores the pure joy of the wind in her face. On the road, her hot rod burns rubber, but in a race, it's her own two feet tearing up the track. Despite her tremendous power, she isn't pompous and is well-liked by everyone.",
    },
    tips: [
        "Maximize her Speed stat to take full advantage of her Front Runner style. The goal is to create a gap that other racers can't close.",
        "Invest in acceleration skills like 'Final Push' and speed maintenance skills like 'Straightaway Adept' to secure her lead throughout the race.",
        "Her high natural Wit growth makes a Wit support card a strong option for ensuring her crucial skills trigger at the perfect moments."
    ],
    events: [
        { name: 'Down to Dance!', choices: [{ choice: 'Technical skills!', outcome: '10 Speed, 15 Skill Pts' }, { choice: 'Expressiveness!', outcome: '10 Power' }] },
        { name: 'Even Role Models Get Lonely', choices: [{ choice: 'Choice 1', outcome: '5 Stamina, 5 Guts' }, { choice: 'Choice 2', outcome: '5 Speed, 5 Power' }] },
    ],
  },
  {
    id: 8,
    name: 'Innocent Silence',
    nickname: 'Silence Suzuka',
    distance: 'Mile',
    style: 'Front-runner',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'D', mile: 'A', med: 'A', long: 'E' },
      pace: { front: 'A', pace: 'C', late: 'E', end: 'G' },
    },
    stats: { speed: 1000, stamina: 500, power: 600, guts: 300, wit: 300 },
    skills: ['Final Push', 'Unrestrained', 'Straightaway Acceleration', 'Homestretch Haste', 'Straightaway Adept', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "As the ultimate Front Runner for Mile and Medium races, Silence Suzuka's entire strategy revolves around speed. A deck of 3 Speed, 1 Stamina, 1 Power, and 1 Wit is recommended, but you can swap the Wit card for another Speed card to fully commit. Her +20% Speed growth makes achieving a high Speed stat very manageable.",
      cards: ['Vodka (Wild Rider)', 'Fine Motion (Wave of Gratitude)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'General-purpose speed skills and debuffs', 'Strong Front Runner skills'],
    extraInfo: {
      quote: "I just want to see... that scenery from the lead.",
      va: 'Marika Kohno',
      height: '161cm / 5\'3"',
      weight: 'No change',
      birthday: 'May 1',
      bio: "An Umamusume seen as a prodigy who's always ahead of the pack. She gets so absorbed with running that she comes off as aloof, but most know she is simply dedicated. She is roommates with Special Week, and many find themselves attracted to her authentic personality.",
    },
    tips: [
        "Prioritize the Speed stat above all others to capitalize on her Front Runner style and build an early, insurmountable lead.",
        "Skills like 'Homestretch Haste' and 'Final Push' are critical for ensuring she can maintain her lead during the final stretch of the race.",
        "Even with a focus on speed, a single reliable stamina recovery skill like 'Swinging Maestro' can prevent her from running out of steam in longer Mile or Medium races."
    ],
    events: [
        { name: 'Hobbies and Talents', choices: [{ choice: 'They want to get to know the real Suzuka.', outcome: '20 Stamina' }, { choice: 'Maybe we can change how you answer the questions.', outcome: '10 Speed, 10 Wit' }] },
        { name: 'How to Spend a Rainy Day', choices: [{ choice: 'What about studying?', outcome: '10 Guts' }, { choice: 'How about cooking something?', outcome: '5 Speed, 5 Wit' }] },
    ],
  },
  // --- MEDIUM ---
  {
    id: 9,
    name: 'Tach-nology',
    nickname: 'Agnes Tachyon',
    distance: 'Medium',
    style: 'Pace-setter',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'G', mile: 'D', med: 'A', long: 'B' },
      pace: { front: 'E', pace: 'A', late: 'B', end: 'F' },
    },
    stats: { speed: 900, stamina: 600, power: 800, guts: 400, wit: 400 },
    skills: ['Pace Chaser Corners ○', 'Professor of Curvature', 'Straightaway Acceleration', 'Homestretch Haste', 'Gourmand', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "Agnes Tachyon is a Pace Chaser who excels in Medium races by conserving strength. High Stamina is essential. Pair this with high Speed and respectable Power to outlast opponents. A deck of 3 Speed, 2 Stamina, and 1 Wit is a strong composition.",
      cards: ['Fine Motion (Wave of Gratitude)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Mayano Top Gun (Cute + Cute = ?)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Good for Pace Chasers and End Closers', 'General-purpose speed skills and debuffs'],
    extraInfo: {
      quote: "Life is an experiment, and we its guinea pigs. You, me, the other Umamusume—everyone!",
      va: 'Sumire Uesaka',
      height: '159cm / 5\'2"',
      weight: 'Refused measurement',
      birthday: 'Apr 13',
      bio: "A researcher and runner in equal measure, Agnes Tachyon pursues the limits of speed with scientific rigor. She stops at nothing to quench her thirst for knowledge, often performing unauthorized and dangerous experiments. Her intense focus means that without a supporter, she often neglects day-to-day necessities.",
    },
    tips: [
      "Prioritize high Stamina to synergize with her strength-conserving playstyle in Medium races.",
      "Her innate recovery skill allows you to focus more heavily on acquiring speed skills to maintain her position.",
      "A strong recovery skill like 'Gourmand' is an excellent choice, as it has an easy activation requirement and shores up her stamina for longer races."
    ],
    events: [
        { name: 'A Gift From the Dark Sky', choices: [{ choice: '(What if you try thanking it?)', outcome: '5 Speed, 5 Power' }, { choice: '(What if you try accepting the gift?)', outcome: '10 Guts' }] },
        { name: 'Body Modification!', choices: [{ choice: '(Stop!)', outcome: '5 Power, 5 Wit' }, { choice: '(Let me sit down in it first!)', outcome: '10 Stamina' }] },
    ],
  },
  {
    id: 10,
    name: 'Down the Line',
    nickname: 'Mejiro Ryan',
    distance: 'Medium',
    style: 'Pace-setter',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'E', mile: 'C', med: 'A', long: 'B' },
      pace: { front: 'F', pace: 'A', late: 'A', end: 'F' },
    },
    stats: { speed: 1000, stamina: 600, power: 800, guts: 300, wit: 300 },
    skills: ['Corner Adept ○', 'Professor of Curvature', 'Straightaway Acceleration', 'Homestretch Haste', 'Gourmand', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "Mejiro Ryan is a versatile Pace Chaser or Late Surger in Medium races. A build with high Speed and Power is essential for her late-race performance. A deck of 3 Speed, 1 Stamina, 1 Power, and 1 Wit is well-balanced, but her natural +20% Power growth means you can often succeed even without a dedicated Power card.",
      cards: ['Vodka (Wild Rider)', 'Fine Motion (Wave of Gratitude)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Great Medium speed skills and debuffs', 'Good for Pace Chasers and End Closers', 'Strong Late Surger skills'],
    extraInfo: {
      quote: "No problems pecs can't solve! Let's get swole together!",
      va: 'Afumi Hashi',
      height: '163cm / 5\'4"',
      weight: 'A bit bulkier from muscle growth',
      birthday: 'Apr 11',
      bio: "A sporty girl who loves a good workout. Although born into the prestigious Mejiro family, her animated personality is somewhat unexpected. She has an inferiority complex regarding her childhood friend, Mejiro McQueen, and wishes to be as fast and pretty as her. Though physically strong, her heart is quite delicate.",
    },
    tips: [
        "Focus on Speed and Power to ensure she has a strong finishing kick in the latter half of the race.",
        "A balanced support deck of 3 Speed, 1 Stamina, 1 Power, and 1 Wit is effective, but don't be afraid to drop the Wit card for more Power if needed.",
        "Her +20% Power growth bonus is significant, allowing you to reach high Power stats without heavily dedicating training or cards to it."
    ],
    events: [
        { name: 'Dance Lesson', choices: [{ choice: '(Let\'s get swole!)', outcome: '10 Power' }, { choice: '(I think you\'re swole enough...)', outcome: '10 Speed' }] },
        { name: 'Muscle Jealousy', choices: [{ choice: '(Let\'s keep pushing it to the limit.)', outcome: '10 Guts' }, { choice: '(You should teach her some theory first!)', outcome: '10 Wit' }] },
    ],
  },
  {
    id: 11,
    name: 'Get to Winning!',
    nickname: 'Winning Ticket',
    distance: 'Medium',
    style: 'Late Surger',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'G', mile: 'F', med: 'A', long: 'B' },
      pace: { front: 'G', pace: 'B', late: 'A', end: 'G' },
    },
    stats: { speed: 900, stamina: 800, power: 700, guts: 400, wit: 300 },
    skills: ['Professor of Curvature', 'Up-Tempo', 'Straightaway Acceleration', 'Homestretch Haste', 'Swinging Maestro', 'Late Surger Straightaways ○'],
    recommendedCards: {
      strategy: "As a Late Surger for Medium and Long races, Winning Ticket needs a strong combination of Speed and Power to overtake her opponents. A deck with 4 Speed, 1 Power, and 1 Stamina is a great starting point. Her natural +20% Power growth allows you to swap the Power card for another Stamina card if you plan to focus on longer races.",
      cards: ['El Condor Pasa (Champion\'s Passion)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Eishin Flash (5:00 a.m.-Right on Schedule)', 'Sweep Tosho (Lamplit Training of a Witch-to-be)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Long skills and decent green skills', 'Great Medium speed skills and debuffs', 'Good for Pace Chasers and End Closers'],
    extraInfo: {
      quote: "Uwaaagh! That was sooo touching!",
      va: 'Yui Watanabe',
      height: '157cm / 5\'1"',
      weight: 'No change',
      birthday: 'Mar 21',
      bio: "Loud and proud, she's a straightforward soul who gets along with anyone. She loves all sports but holds a special admiration for the Japanese Derby, a race she dreams of winning one day, no matter the cost. She, Narita Taishin, and Biwa Hayahide are an inseparable trio.",
    },
    tips: [
        "Focus on Speed and Power to ensure she can effectively overtake opponents in the final stretch.",
        "Maneuverability skills like 'Up-Tempo' are excellent for her late-race strategy, helping her find a clear path.",
        "Her +20% Power growth is a significant advantage, meaning you can often use a Stamina card in place of a Power card to better prepare her for long-distance races without sacrificing too much acceleration."
    ],
    events: [
        { name: 'The Last Ticket', choices: [{ choice: 'Choice 1', outcome: '10 Guts' }, { choice: 'Choice 2', outcome: '10 Speed' }, { choice: 'Choice 3', outcome: '10 Power' }] },
        { name: 'Shake Off Your Blues!', choices: [{ choice: '(It\'s no big deal! Just a speck on a peanut!)', outcome: '1 Mood, 5 Power' }, { choice: '(Need to refresh yourself one more time?)', outcome: '5 Speed, 15 Skill Pts' }] },
    ],
  },
  {
    id: 12,
    name: 'Empress Road',
    nickname: 'Air Groove',
    distance: 'Medium',
    style: 'Pace-setter',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'C', mile: 'B', med: 'A', long: 'E' },
      pace: { front: 'D', pace: 'A', late: 'A', end: 'G' },
    },
    stats: { speed: 1000, stamina: 700, power: 600, guts: 300, wit: 700 },
    skills: ['Professor of Curvature', 'Straightaway Acceleration', 'Homestretch Haste', 'Nimble Navigator', 'Ramp Up', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "Air Groove excels as a Pace Chaser or Late Surger in Medium races. Prioritize her Speed and Power, followed by Stamina to maintain her position. Her build benefits greatly from a 3 Speed, 1 Stamina, 1 Power, and 1 Wit deck. Her +20% Power growth provides a nice cushion, making it easier to hit target stats.",
      cards: ['Vodka (Wild Rider)', 'Fine Motion (Wave of Gratitude)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Eishin Flash (5:00 a.m.-Right on Schedule)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Great Medium speed skills and debuffs', 'Good for Pace Chasers and End Closers'],
    extraInfo: {
      quote: "Just as my esteemed mother once did, I must train to perfection and lead others along my path!",
      va: 'Ruriko Aoki',
      height: '165cm / 5\'4"',
      weight: 'Perfectly maintained',
      birthday: 'Apr 6',
      bio: "The vice president of Tracen Academy's student council, known to others as the 'Empress.' As the daughter of an accomplished racer, she constantly strives to live up to her mother's legacy. She has joined her friend, Symboli Rudolf, in the student council to achieve this. Despite her strict schedule, she always makes time to tend to the garden flowers.",
    },
    tips: [
        "Play her as a Late Surger to make the most of her Unique Skill, which activates when passing others on the final corner.",
        "Maneuvering and speed skills are crucial. 'Nimble Navigator' is a strong choice that synergizes well with the speed-gaining skill 'Ramp Up'.",
        "Her +20% Power growth bonus means you can often focus on other cards, like Wit or Speed, without her Power stat falling behind."
    ],
    events: [
        { name: 'A Beautiful Stress Relief Method?', choices: [{ choice: 'Choice 1', outcome: '20 Stamina' }, { choice: 'Choice 2', outcome: '20 Guts' }] },
        { name: 'A Blinking Light Means Stop', choices: [{ choice: 'Choice 1', outcome: '10 Wit' }, { choice: 'Choice 2', outcome: '10 Power' }] },
    ],
  },
  {
    id: 13,
    name: 'El Numero 1',
    nickname: 'El Condor Pasa',
    distance: 'Medium',
    style: 'Pace-setter',
    aptitudes: {
      track: { turf: 'A', dirt: 'B' },
      distance: { sprint: 'F', mile: 'A', med: 'A', long: 'B' },
      pace: { front: 'E', pace: 'A', late: 'A', end: 'C' },
    },
    stats: { speed: 1000, stamina: 600, power: 700, guts: 400, wit: 600 },
    skills: ['Professor of Curvature', 'Straightaway Acceleration', 'Homestretch Haste', 'Nimble Navigator', 'Ramp Up', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "A versatile racer for Mile and Medium distances, El Condor Pasa can run as a Pace Chaser or Late Surger. Focus on her Speed and Power to enable easy overtakes. A balanced deck of 3 Speed, 1 Stamina, 1 Power, and 1 Wit works well, but swapping Wit for more Power is a viable option.",
      cards: ['Fine Motion (Wave of Gratitude)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Oguri Cap (Get Lots of Hugs for Me)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Strong Late Surger skills', 'Good for Pace Chasers and End Closers', 'Great Medium speed skills and debuffs'],
    extraInfo: {
      quote: "Soaring towards victory with the heart of a wrestler! El's the world's strooongest!",
      va: 'Minami Takahashi',
      height: '163cm / 5\'4"',
      weight: 'Slight increase (the weightlifting\'s working!)',
      birthday: 'Mar 17',
      bio: "A masked luchadora who is always hyped and ready to wrestle. She has ultimate confidence that she is the world's strongest Umamusume and loves to proclaim it. Her mask is a gift from her pro wrestler father, and she insists on keeping it on at all times. Her best friend and roommate, Grass Wonder, constantly scolds her for being too reckless.",
    },
    tips: [
        "Invest in both speed and maneuvering skills. 'Nimble Navigator' is a great skill to help her weave through opponents.",
        "Her Unique Skill requires her to have energy to spare on the final straight, so ensuring she has enough Stamina is key to consistent activation.",
        "Level her Wit stat after her primary combat stats. A higher Wit will improve skill activation rates and help with positioning."
    ],
    events: [
        { name: 'A Personalized Mask', choices: [{ choice: '(Maybe a cheetah, for speed?)', outcome: '10 Speed' }, { choice: '(What about an elephant, for strength?)', outcome: '10 Power' }] },
        { name: 'Cactus Feast', choices: [{ choice: 'Choice 1', outcome: '10 Speed, 10 Stamina' }, { choice: 'Choice 2', outcome: '20 Wit' }] },
    ],
  },
  {
    id: 14,
    name: 'Stone-Piercing Blue',
    nickname: 'Grass Wonder',
    distance: 'Medium',
    style: 'Pace-setter',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'G', mile: 'A', med: 'B', long: 'A' },
      pace: { front: 'F', pace: 'A', late: 'A', end: 'F' },
    },
    stats: { speed: 1000, stamina: 500, power: 600, guts: 300, wit: 500 },
    skills: ['Go with the Flow', 'Corner Adept ○', 'Straightaway Acceleration', 'Homestretch Haste', 'Gourmand', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "Grass Wonder excels in Mile and Long races as a Pace Chaser or Late Surger. A build focusing on Speed and Power will allow her to easily accelerate past opponents. A deck of 3 Speed, 2 Stamina, and 1 Wit is effective, and her +10% Power growth can compensate for not using a dedicated Power card.",
      cards: ['Fine Motion (Wave of Gratitude)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Mayano Top Gun (Cute + Cute = ?)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Strong Late Surger skills', 'Long skills and decent green skills', 'General-purpose speed skills and debuffs', 'Good for Pace Chasers and End Closers', 'Great Medium speed skills and debuffs'],
    extraInfo: {
      quote: "Noble and gallant, I march on... towards my ambitions.",
      va: 'Rena Maeda',
      height: '152cm / 4\'11"',
      weight: 'No change',
      birthday: 'Feb 18',
      bio: "Though born in America, her parents' love of Japanese culture influenced her to become the spitting image of an ideal Japanese beauty. She speaks in a friendly manner and is easy to get along with, but her will is firm and her determination to win is second to none. She shares a room with her close friend, El Condor Pasa.",
    },
    tips: [
        "Focus on acquiring a mix of maneuvering and speed skills. 'Go with the Flow' is an excellent skill to help her navigate the pack.",
        "For her speed burst in the final stretch, prioritize skills like 'Homestretch Haste' and 'Straightaway Acceleration'.",
        "Given her aptitude for longer races, securing two strong stamina recovery skills like 'Swinging Maestro' and 'Gourmand' is highly recommended."
    ],
    events: [
        { name: 'Childhood Dream', choices: [{ choice: 'Choice 1', outcome: '5 Speed, 5 Guts' }, { choice: 'Choice 2', outcome: '5 Stamina, 5 Wit' }] },
        { name: 'Childhoods Apart', choices: [{ choice: 'Choice 1', outcome: '10 Guts' }, { choice: 'Choice 2', outcome: '10 Stamina' }] },
    ],
  },
  {
    id: 15,
    name: 'MB-19890425',
    nickname: 'Mihono Bourbon',
    distance: 'Medium',
    style: 'Front-runner',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'C', mile: 'B', med: 'A', long: 'B' },
      pace: { front: 'A', pace: 'E', late: 'G', end: 'G' },
    },
    stats: { speed: 1100, stamina: 700, power: 600, guts: 400, wit: 500 },
    skills: ['Final Push', 'Straightaway Acceleration', 'Homestretch Haste', 'Front Runner Straightaways ○', 'Front Runner Corners ○', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "As a Front Runner in Medium races, Mihono Bourbon requires high Speed and Stamina to maintain her lead, with enough Power for acceleration. A deck of 4 Speed, 1 Power, and 1 Stamina is recommended. Her +20% Stamina growth helps her reach the necessary endurance levels.",
      cards: ['Silence Suzuka (Beyond This Shining Moment)', 'Vodka (Wild Rider)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Sweep Tosho (Lamplit Training of a Witch-to-be)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Great Medium speed skills and debuffs', 'General-purpose speed skills and debuffs'],
    extraInfo: {
      quote: "Target acquired. Commencing Operation: Triple Crown.",
      va: 'Ikumi Hasegawa',
      height: '160cm / 5\'2"',
      weight: 'No change',
      birthday: 'Apr 25',
      bio: "An Umamusume also known as the 'Cyborg.' She views the world through the lens of programming and databases, carrying out her objectives in an expressionless, robotic manner. However, she is not an emotionless machine; her constant training from a young age resulted in fewer social interactions, leading to her current personality. Underneath her robotic shell, she does indeed have feelings.",
    },
    tips: [
        "Prioritize skills that help Mihono Bourbon establish and maintain her position at the front of the race.",
        "Focus on acquiring easy-to-activate Speed skills, complemented by one or two strong recovery skills.",
        "A recovery skill with an easy activation requirement, like 'Swinging Maestro', is ideal to ensure her stamina holds throughout the race."
    ],
    events: [
        { name: 'Bourbon\'s Challenge?', choices: [{ choice: 'Choice 1', outcome: '10 Power' }, { choice: 'Choice 2', outcome: '10 Wit' }] },
        { name: 'Dance Lesson', choices: [{ choice: 'An idol needs individuality!', outcome: '20 Skill Pts' }, { choice: 'An idol needs endurance!', outcome: '10 Stamina' }] },
    ],
  },
  {
    id: 16,
    name: 'Frontline Elegance',
    nickname: 'Mejiro McQueen',
    distance: 'Medium',
    style: 'Pace-setter',
    aptitudes: {
      track: { turf: 'A', dirt: 'E' },
      distance: { sprint: 'G', mile: 'F', med: 'A', long: 'A' },
      pace: { front: 'B', pace: 'A', late: 'D', end: 'F' },
    },
    stats: { speed: 1000, stamina: 700, power: 800, guts: 300, wit: 300 },
    skills: ['Pace Chaser Corners ○', 'Professor of Curvature', 'Homestretch Haste', 'Gourmand', 'Speed Star', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "Mejiro McQueen is a premiere Pace Chaser for Medium and Long races, making high Stamina a top priority. She also needs significant Speed and Power to overtake opponents in the final spurt. A 3 Speed, 1 Power, 1 Stamina, 1 Wit deck is a good balance, especially given her +20% Stamina growth.",
      cards: ['Vodka (Wild Rider)', 'Fine Motion (Wave of Gratitude)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Good for Pace Chasers and End Closers', 'Long skills and decent green skills', 'Great Medium speed skills and debuffs'],
    extraInfo: {
      quote: "I'll bring honor and glory to the Mejiro family!",
      va: 'Saori Onishi',
      height: '159cm / 5\'2"',
      weight: 'Slight increase (making frantic adjustments!)',
      birthday: 'Apr 3',
      bio: "Born into a family of racing legends, Mejiro McQueen is a long-distance runner who is the envy of her peers. She has class and decorum befitting her prestige and is determined to take first at the Tenno Sho, like many Mejiro racers before her. On her days off, she enjoys having afternoon tea with the other residents of the Mejiro estate.",
    },
    tips: [
        "A mix of recovery and speed skills is essential for her to compete in both Medium and Long races.",
        "Prioritize strong, easy-to-activate recovery skills like 'Swinging Maestro' and 'Gourmand' to keep her stamina high.",
        "Her Unique Skill and playstyle benefit greatly from 'Speed Star', which can help her break away from the pack in the final moments of a race."
    ],
    events: [
        { name: 'An Excited Young Lady', choices: [{ choice: 'Choice 1', outcome: '10 Guts' }, { choice: 'Choice 2', outcome: '10 Power' }] },
        { name: 'Bargain Find', choices: [{ choice: 'Maybe this book of prized recipes...', outcome: '10 Speed' }, { choice: 'Maybe this piece of colored paper with Gold Ship\'s autograph...', outcome: '10 Guts' }] },
    ],
  },
  {
    id: 17,
    name: 'Starlight Beat',
    nickname: 'Oguri Cap',
    distance: 'Medium',
    style: 'Pace-setter',
    aptitudes: {
      track: { turf: 'A', dirt: 'B' },
      distance: { sprint: 'E', mile: 'A', med: 'A', long: 'B' },
      pace: { front: 'F', pace: 'A', late: 'A', end: 'D' },
    },
    stats: { speed: 1000, stamina: 600, power: 800, guts: 300, wit: 500 },
    skills: ['Go with the Flow', 'Homestretch Haste', 'Gourmand', 'Acceleration', 'Corner Acceleration ○', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "Oguri Cap is a versatile Pace Chaser or Late Surger. High Power and Speed are key to her success, allowing her to easily overtake opponents. A deck of 4 Speed, 1 Power, and 1 Stamina is a strong choice. Swapping a Speed card for Wit can also be effective to improve her skill activation.",
      cards: ['Tokai Teio (Dream Big!)', 'Vodka (Wild Rider)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Great Medium speed skills and debuffs', 'Strong Late Surger skills', 'Good for Pace Chasers and End Closers'],
    extraInfo: {
      quote: "I'm going to win this for the folks back home... But first, sustenance.",
      va: 'Tomoyo Takayanagi',
      height: '167cm / 5\'5"',
      weight: 'Slight increase (overate)',
      birthday: 'Mar 27',
      bio: "Hailing from the countryside, she enrolled at Tracen Academy after dominating her local racing scene. She works hard to make her hometown proud, but her clumsy side often emerges. At the academy, she's known as a fearsome gourmand, able to finish an entire pot of rice in the blink of an eye.",
    },
    tips: [
        "A good mix of recovery, speed, and maneuvering skills is crucial for her versatile playstyle.",
        "The recovery skill 'Gourmand' is excellent, but be aware that it requires her to be running as a Pace Chaser to activate.",
        "'Homestretch Haste' is a powerful speed skill that synergizes very well with her Unique Skill, 'Triumphant Pulse', for a strong finish."
    ],
    events: [
        { name: 'Field Workout', choices: [{ choice: 'Let\'s pull the weeds.', outcome: '10 Guts' }, { choice: 'Let\'s till the soil.', outcome: '10 Power' }] },
        { name: 'High-Level Rival', choices: [{ choice: 'You two have similar running styles.', outcome: '5 Speed, 5 Stamina' }, { choice: 'Looks like it\'s a draw.', outcome: '5 Stamina, 5 Wit' }] },
    ],
  },
  {
    id: 18,
    name: 'Peak Joy',
    nickname: 'Tokai Teio',
    distance: 'Medium',
    style: 'Pace-setter',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'F', mile: 'E', med: 'A', long: 'B' },
      pace: { front: 'D', pace: 'A', late: 'C', end: 'E' },
    },
    stats: { speed: 900, stamina: 500, power: 600, guts: 600, wit: 400 },
    skills: ['Go with the Flow', 'Pace Chaser Corners ○', 'Straightaway Acceleration', 'Homestretch Haste', 'Gourmand', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "Tokai Teio is a Pace Chaser who shines in Medium races. Prioritize building her Speed and Stamina to help her maintain her position. Her +20% Speed growth makes it easy to focus on other stats. A deck of 3 Speed, 1 Stamina, 1 Power, and 1 Wit is a well-rounded choice.",
      cards: ['Vodka (Wild Rider)', 'Fine Motion (Wave of Gratitude)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Good for Pace Chasers and End Closers', 'Great Medium speed skills and debuffs'],
    extraInfo: {
      quote: "Here begins the legend of the invincible Teio!",
      va: 'Machico',
      height: '150cm / 4\'11"',
      weight: 'No change',
      birthday: 'Apr 20',
      bio: "A bright, bubbly Umamusume with a natural talent for racing. She has long admired the student council president, Symboli Rudolf, and this admiration fuels her motivation to become the number one racer. Fans adore Teio's boundless confidence and have lovingly named her upbeat march the 'Teio Step'.",
    },
    tips: [
        "As a Pace Chaser, she requires a balance of speed, maneuverability, and stamina to be effective.",
        "Maneuvering skills like 'Go with the Flow' are vital for helping her navigate through a crowded pack.",
        "Equip her with strong stamina recovery skills like 'Swinging Maestro' and 'Gourmand' to ensure she has enough energy for the final push in Medium races."
    ],
    events: [
        { name: 'Cupcakes for All', choices: [{ choice: 'Why not split it?', outcome: '5 Energy, 1 Mood' }, { choice: 'Why don\'t you fight for it?', outcome: '5 Speed, 5 Power' }] },
        { name: 'Empress vs Monarch', choices: [{ choice: '(Well, no harm in trying!)', outcome: '10 Guts' }, { choice: '(Refine your strategy, then show her what you\'re made of!)', outcome: '30 Skill Pts' }] },
    ],
  },
  {
    id: 19,
    name: 'Special Dreamer',
    nickname: 'Special Week',
    distance: 'Medium',
    style: 'Pace-setter',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'F', mile: 'C', med: 'A', long: 'A' },
      pace: { front: 'G', pace: 'A', late: 'A', end: 'C' },
    },
    stats: { speed: 900, stamina: 700, power: 600, guts: 500, wit: 300 },
    skills: ['Go with the Flow', 'Straightaway Acceleration', 'Homestretch Haste', 'Gourmand', 'Straightaway Adept', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "Special Week excels in Long races, so prioritizing her Stamina is crucial. After that, focus on Speed and Power to help her break away from the pack. A 4 Speed, 1 Stamina, 1 Power deck is a strong start, but her +20% Stamina growth allows for flexibility.",
      cards: ['Tokai Teio (Dream Big!)', 'Vodka (Wild Rider)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Eishin Flash (5:00 a.m.-Right on Schedule)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Good for Pace Chasers and End Closers', 'General-purpose speed skills and debuffs'],
    extraInfo: {
      quote: "I gotta make my moms proud! I'll become the top Umamusume in all of Japan!",
      va: 'Azumi Waki',
      height: '158cm / 5\'2"',
      weight: 'Slight decrease (pre-race nerves)',
      birthday: 'May 2',
      bio: "Hailing from Hokkaido, Special Week is a bright, cheerful, and hardworking Umamusume. After her birth mother passed away, she was raised by her mother's friend. She now aims to make both of her moms proud by fulfilling her promise to become Japan's top racer. Though she may face challenges, her indomitable spirit keeps her running forward.",
    },
    tips: [
        "Because she excels in Long races, prioritize her Stamina stat first, then focus on Speed and Power.",
        "Her Pace Chaser and Late Surger styles require strong maneuvering skills like 'Go with the Flow' to navigate the pack.",
        "Recovery skills are a must for long distances. Both 'Swinging Maestro' and 'Gourmand' are excellent choices, but note that 'Gourmand' requires her to run as a Pace Chaser."
    ],
    events: [
        { name: 'A Beautiful Day for Tennis', choices: [{ choice: 'Trust your reflexes and take the front position!', outcome: '10 Speed' }, { choice: 'Trust your stamina and take the back position!', outcome: '10 Stamina' }] },
        { name: 'A Place I Want to Take You', choices: [{ choice: 'Choice 1', outcome: '10 Wit' }, { choice: 'Choice 2', outcome: '10 Stamina' }] },
    ],
  },
  // --- LONG ---
  {
    id: 20,
    name: 'Poinsettia Ribbon',
    nickname: 'Nice Nature',
    distance: 'Long',
    style: 'Late Surger',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'G', mile: 'C', med: 'A', long: 'A' },
      pace: { front: 'F', pace: 'B', late: 'A', end: 'D' },
    },
    stats: { speed: 900, stamina: 500, power: 700, guts: 400, wit: 500 },
    skills: ['Go with the Flow', 'Professor of Curvature', 'Homestretch Haste', 'Straightaway Adept', 'Ramp Up', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "As a Late Surger in Medium to Long races, Nice Nature requires high Speed and Power to close the distance in the final stretch. A support deck of 4 Speed and 2 Stamina cards is recommended. Her +20% Power growth bonus means you don't need to dedicate a card slot to it.",
      cards: ['Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Mayano Top Gun (Cute + Cute = ?)', 'Eishin Flash (5:00 a.m.-Right on Schedule)', 'Sweep Tosho (Lamplit Training of a Witch-to-be)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great Medium speed skills and debuffs', 'Good for Pace Chasers and End Closers', 'Long skills and decent green skills', 'General-purpose speed skills and debuffs'],
    extraInfo: {
      quote: "Yup, I'm happy with a third place finish—it's all an extra like me can ask for.",
      va: 'Kaori Maeda',
      height: '157cm / 5\'1"',
      weight: 'No change',
      birthday: 'Apr 16',
      bio: "An Umamusume from a humble background with a pessimistic streak. She tends to view herself as a supporting character, which causes her to shy away from high expectations and sometimes leads to imperfect performances. Due to her working-class upbringing, she is quite skilled at cooking and cleaning.",
    },
    tips: [
      "Focus on Speed and Power to fuel her late-race surge. Stamina is also crucial for her to last in Long races.",
      "Maneuvering skills like 'Go with the Flow' are essential to help her navigate from the back of the pack to the front.",
      "Her natural +20% Power growth is a major advantage, allowing you to focus your support cards on Speed and Stamina."
    ],
    events: [
        { name: 'Let\'s Watch the Fish', choices: [{ choice: '(The dolphin show.)', outcome: '10 Guts' }, { choice: '(The World\'s Spookiest Sea Creatures exhibit!)', outcome: '10 Speed' }] },
        { name: 'Whirlwind Advice', choices: [{ choice: '(We need to come up with a strategy first.)', outcome: 'Studious Skill Hint' }, { choice: '(Great! No time to waste-let\'s get to training!)', outcome: '5 Speed, 5 Stamina, 5 Power' }] },
    ],
  },
  {
    id: 21,
    name: 'Rising Fortune',
    nickname: 'Matikane Fukukitaru',
    distance: 'Long',
    style: 'Late Surger',
    aptitudes: {
      track: { turf: 'A', dirt: 'F' },
      distance: { sprint: 'F', mile: 'C', med: 'A', long: 'A' },
      pace: { front: 'G', pace: 'B', late: 'A', end: 'F' },
    },
    stats: { speed: 900, stamina: 900, power: 700, guts: 400, wit: 300 },
    skills: ['Go with the Flow', 'Professor of Curvature', 'Homestretch Haste', 'Straightaway Adept', 'Ramp Up', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "Matikane Fukukitaru is a Late Surger for Medium and Long races, making high Stamina and Speed essential. A deck of 4 Speed and 2 Stamina cards is recommended. Her +20% Stamina growth buff allows you to substitute a Stamina card for a Power card if needed, to help her acceleration.",
      cards: ['Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Mayano Top Gun (Cute + Cute = ?)', 'Eishin Flash (5:00 a.m.-Right on Schedule)', 'Sweep Tosho (Lamplit Training of a Witch-to-be)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great Medium speed skills and debuffs', 'Good for Pace Chasers and End Closers', 'General-purpose speed skills and debuffs'],
    extraInfo: {
      quote: "Oho, what's this I see? Today's divination: great fortune! ☆",
      va: 'Hiyori Nitta',
      height: '158cm / 5\'2"',
      weight: 'No change because today is my lucky day!',
      birthday: 'May 22',
      bio: "A fortune-telling fanatic and lover of all things supernatural, she is content to leave the outcomes of races and many other things up to luck. She places immense faith in a revelation from a certain god stating that as long as she keeps running, the way forward will open for her. The cat-shaped bag she carries is named 'Miss Nya.'",
    },
    tips: [
        "As a Late Surger, she needs strong maneuvering and speed skills to get to the front. 'Go with the Flow' is an excellent choice.",
        "For her finishing kick, skills like 'Ramp Up', 'Homestretch Haste', and 'Straightaway Adept' work together to provide a powerful speed boost.",
        "Her +20% Stamina growth bonus is very valuable, making it easier to hit the high stamina totals required for long-distance running."
    ],
    events: [
        { name: 'Under the Meteor Shower', choices: [{ choice: 'Choice 1', outcome: '10 Speed, 10 Power, Charming ○ (Random)' }, { choice: 'Choice 2', outcome: '10 Stamina, 10 Guts, Charming ○ (Random)' }] },
        { name: 'Taking the Plunge', choices: [{ choice: '(Okay, let\'s give it our best shot!)', outcome: '10 Stamina' }, { choice: '(Let me go instead, for the both of us.)', outcome: '5 Speed, 5 Wit' }] },
    ],
  },
  {
    id: 22,
    name: 'Red Strife',
    nickname: 'Gold Ship',
    distance: 'Long',
    style: 'End Closer',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'G', mile: 'C', med: 'A', long: 'A' },
      pace: { front: 'G', pace: 'B', late: 'B', end: 'A' },
    },
    stats: { speed: 1000, stamina: 600, power: 800, guts: 400, wit: 400 },
    skills: ['Straightaway Acceleration', 'Homestretch Haste', 'Nimble Navigator', 'Ramp Up', 'Swinging Maestro', 'End Closer Corners ○'],
    recommendedCards: {
      strategy: "Gold Ship excels as an End Closer in Medium to Long races. This style demands high Speed and Power for a massive final surge to overtake the entire field. A deck of 3 Speed, 2 Stamina, and 1 Power provides a good balance for her stamina needs and offensive power. Her +20% Stamina growth is a major asset.",
      cards: ['Vodka (Wild Rider)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Mayano Top Gun (Cute + Cute = ?)', 'Narita Taishin (Poolside High Tides)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['General-purpose speed skills and debuffs', 'End Closer skills and debuffs', 'Great Medium speed skills and debuffs', 'Long skills and decent green skills'],
    extraInfo: {
      quote: "So long as it's fun, right? Right?!",
      va: 'Hitomi Ueda',
      height: '170cm / 5\'6"',
      weight: 'Unmeasurable',
      birthday: 'Mar 6',
      bio: "An unpredictable firebrand with a free spirit. She's prone to dramatic swings in mood—one moment setting up an elaborate punchline, the next unwilling to move. She seems to get along with everyone, but it's unclear how she truly views her bonds with others. She is Tracen's greatest mischief-maker.",
    },
    tips: [
        "Her playstyle revolves around going from the rear to the front, so a combination of speed and maneuvering skills is essential.",
        "'Nimble Navigator' is a top-tier skill for her, helping her weave through opponents, and it pairs perfectly with 'Ramp Up' for a speed boost upon overtaking.",
        "While she has a +20% Stamina growth bonus, a recovery skill like 'Swinging Maestro' is still highly recommended to ensure she has enough fuel for her explosive finish."
    ],
    events: [
        { name: 'A Date, Golshi Style', choices: [{ choice: 'Choice 1', outcome: '20 Stamina' }, { choice: 'Choice 2', outcome: '20 Power' }] },
        { name: 'A Lovely Place', choices: [{ choice: '(Bear with it and walk the distance.)', outcome: '10 Stamina' }, { choice: '(Convince her to ride a different bus back.)', outcome: '10 Wit' }] },
    ],
  },
  {
    id: 23,
    name: 'Scramble Zone',
    nickname: 'Mayano Top Gun',
    distance: 'Long',
    style: 'Varies',
    aptitudes: {
      track: { turf: 'A', dirt: 'E' },
      distance: { sprint: 'D', mile: 'D', med: 'A', long: 'A' },
      pace: { front: 'A', pace: 'A', late: 'B', end: 'B' },
    },
    stats: { speed: 1000, stamina: 800, power: 800, guts: 300, wit: 300 },
    skills: ['Go with the Flow', 'Professor of Curvature', 'Straightaway Acceleration', 'Homestretch Haste', 'Gourmand', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "A versatile racer who excels in Medium and Long races, Mayano Top Gun's build should prioritize Stamina and Speed. A deck of 3 Speed, 1 Stamina, 1 Power, and 1 Wit is effective, but her +20% Stamina growth allows flexibility to swap the Wit card for another Stamina card if needed.",
      cards: ['El Condor Pasa (Champion\'s Passion)', 'Fine Motion (Wave of Gratitude)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Long skills and decent green skills', 'Great Medium speed skills and debuffs', 'Strong Front Runner skills', 'Good for Pace Chasers and End Closers'],
    extraInfo: {
      quote: "When inspiration strikes, Maya takes flight! Copy that! ☆",
      va: 'Mio Hoshitani',
      height: '143cm / 4\'8"',
      weight: 'No change',
      birthday: 'Mar 24',
      bio: "A rambunctious young genius who seeks affection from everyone. With a pilot for a father, she often mixes aviation lingo into her speech. Her tendency to obsess over new things shows how far she is from becoming the mature lady of her dreams. However, she possesses incredible intuition and an almost supernatural sense of what to do in any situation.",
    },
    tips: [
        "As she can be a Pace Chaser or Front Runner, she benefits greatly from maneuvering skills like 'Go with the Flow' to find the best racing line.",
        "Given her preference for longer races, securing two strong stamina recovery skills like 'Swinging Maestro' and 'Gourmand' is a top priority.",
        "Her +20% Stamina growth is a key feature, making it much easier to meet the high stamina demands of long-distance races without over-investing in Stamina support cards."
    ],
    events: [
        { name: 'Maya Will Teach You ☆', choices: [{ choice: '(Are they going to give you anything as thanks?)', outcome: '5 Power, 5 Guts' }, { choice: '(Make sure to say no if you aren\'t in the mood.)', outcome: '10 Wit' }] },
        { name: 'Maya\'s Euphoric ☆ Livestream!', choices: [{ choice: '(Got it. Then we\'ll film you singing!)', outcome: '10 Speed' }, { choice: '(Got it. Then we\'ll film you running!)', outcome: '10 Stamina' }] },
    ],
  },
  {
    id: 24,
    name: 'Murmuring Stream',
    nickname: 'Super Creek',
    distance: 'Long',
    style: 'Pace-setter',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'G', mile: 'G', med: 'A', long: 'A' },
      pace: { front: 'D', pace: 'A', late: 'B', end: 'G' },
    },
    stats: { speed: 1000, stamina: 800, power: 700, guts: 300, wit: 400 },
    skills: ['Go with the Flow', 'Professor of Curvature', 'Straightaway Recovery', 'Straightaway Acceleration', 'Homestretch Haste', 'Gourmand'],
    recommendedCards: {
      strategy: "Super Creek is a premier Pace Chaser for Medium and Long races, making high Speed and Stamina her top priorities. Her +20% Wit growth allows for flexibility in her support deck; a setup of 3 Speed, 1 Stamina, 1 Power, and 1 Wit is strong, but the Wit card can be swapped for more Stamina if a race demands it.",
      cards: ['Vodka (Wild Rider)', 'Fine Motion (Wave of Gratitude)', 'Nishino Flower (Even the Littlest Bud)', 'Mayano Top Gun (Cute + Cute = ?)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great Medium speed skills and debuffs', 'Long skills and decent green skills', 'Good for Pace Chasers and End Closers', 'General-purpose speed skills and debuffs'],
    extraInfo: {
      quote: "I can spoil you as much as you'd like. Aww, there, there. ♪",
      va: 'Kana Yuuki',
      height: '168cm / 5\'6"',
      weight: 'Slight increase (a secret as to why)',
      birthday: 'May 27',
      bio: "No matter how bad you were, this racer will forgive and comfort you before spoiling you rotten. Her tendency towards leniency sometimes extends to herself. She values the growth of others over even her own personal gains. She is rivals with both Oguri Cap and Tamamo Cross.",
    },
    tips: [
        "A combination of speed and stamina skills is essential for her success in long-distance races.",
        "Her Unique Skill is a recovery-type, which synergizes well with other recovery skills like 'Gourmand' and 'Straightaway Recovery' to make her incredibly durable.",
        "Her +20% Wit growth bonus helps make up for not always running a Wit support card, ensuring her skills activate reliably."
    ],
    events: [
        { name: 'A Self-Satisfying Wish', choices: [{ choice: 'Choice 1', outcome: '20 Power' }, { choice: 'Choice 2', outcome: '20 Stamina' }] },
        { name: 'Dance Lesson', choices: [{ choice: '(All right, let\'s do it!)', outcome: '10 Stamina' }, { choice: '(I\'d hate to interrupt your practice...)', outcome: '10 Speed' }] },
    ],
  },
  {
    id: 25,
    name: 'Rosy Dreams',
    nickname: 'Rice Shower',
    distance: 'Long',
    style: 'Pace-setter',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'E', mile: 'C', med: 'A', long: 'A' },
      pace: { front: 'B', pace: 'A', late: 'C', end: 'G' },
    },
    stats: { speed: 1000, stamina: 900, power: 600, guts: 400, wit: 300 },
    skills: ['Pace Chaser Corners ○', 'Professor of Curvature', 'Homestretch Haste', 'Gourmand', 'Straightaway Adept', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "As a Pace Chaser in Medium and Long races, Rice Shower needs high Stamina and Power. A deck of 3 Speed, 2 Stamina, and 1 Pal card is highly recommended, as she is prone to sudden mood drops, which a Pal can help mitigate.",
      cards: ['Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Tazuna Hayakawa (Tracen Reception)', 'Mayano Top Gun (Cute + Cute = ?)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Mood improver and energy saver', 'Good for Pace Chasers and End Closers', 'Great Medium speed skills and debuffs', 'Long skills and decent green skills'],
    extraInfo: {
      quote: "Rice only brings misfortune to everyone... I really... really hope I can change that!",
      va: 'Manaka Iwami',
      height: '145cm / 4\'9"',
      weight: 'No change',
      birthday: 'Mar 5',
      bio: "A timid Umamusume, she believes that any misfortune befalling those around her is entirely her fault, when it's really just bad timing. Nevertheless, she is determined to overcome this supposed jinx. She loves reading picture books in her spare time, especially 'The Blue Rose of Good Fortune.'",
    },
    tips: [
        "A Pal support card like Tazuna is highly recommended in her deck, as Rice Shower is prone to mood swings that can negatively impact her training and race performance.",
        "A good mix of stamina and speed skills is crucial for her to both endure long races and have a strong finishing kick.",
        "Powerful recovery skills like 'Gourmand' and 'Swinging Maestro' are top priorities to ensure she has plenty of energy for the final stretch."
    ],
    events: [
        { name: 'Am I Enough?', choices: [{ choice: '(You don\'t have to bear this alone.)', outcome: '20 Guts' }, { choice: '(That shows how much you like your signature racewear.)', outcome: '20 Power' }] },
        { name: 'Dance Lesson', choices: [{ choice: '(Am I bothering you?)', outcome: '10 Stamina' }, { choice: '(I\'m ready for anything!)', outcome: '10 Speed' }] },
    ],
  },
  {
    id: 26,
    name: 'Emperor\'s Path',
    nickname: 'Symboli Rudolf',
    distance: 'Long',
    style: 'Late Surger',
    aptitudes: {
      track: { turf: 'A', dirt: 'G' },
      distance: { sprint: 'E', mile: 'C', med: 'A', long: 'A' },
      pace: { front: 'B', pace: 'A', late: 'A', end: 'C' },
    },
    stats: { speed: 1000, stamina: 600, power: 700, guts: 300, wit: 300 },
    skills: ['Corner Adept ○', 'Professor of Curvature', 'Straightaway Acceleration', 'Homestretch Haste', 'Gourmand', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "Symboli Rudolf's style as a Pace Chaser or Late Surger in Medium and Long races requires a balanced development of Speed, Power, and Stamina. A deck of 3 Speed, 1 Stamina, 1 Power, and 1 Wit is effective. Her +20% Stamina growth helps meet the demands of long races without needing to over-invest in Stamina cards.",
      cards: ['Vodka (Wild Rider)', 'Fine Motion (Wave of Gratitude)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Great general-purpose Stamina card', 'Strong Late Surger skills', 'Long skills and decent green skills', 'Good for Pace Chasers and End Closers', 'Great Medium speed skills and debuffs'],
    extraInfo: {
      quote: "Fortune smiles upon the brave. Let us create a world where all Umamusume can live in bliss.",
      va: 'Azusa Tadokoro',
      height: '165cm / 5\'4"',
      weight: 'Almost too perfect',
      birthday: 'Mar 13',
      bio: "The evenhanded president of the student council at Tracen Academy, she is well-versed in both racing and leadership. She seeks to be a model Umamusume and is keenly aware of the example she sets. Her dream is to foster a new era where all Umamusume can live in true happiness. She is especially admired by Tokai Teio.",
    },
    tips: [
        "Her Unique Skill requires her to pass 3 opponents in the late race, making maneuvering skills like 'Go with the Flow' especially valuable.",
        "A mix of recovery and speed skills is vital. Prioritize strong recovery skills like 'Swinging Maestro' and 'Gourmand' to ensure she has stamina for a late push.",
        "Take advantage of her +20% Stamina growth bonus to focus more on Speed and Power support cards, which are crucial for her Late Surger playstyle."
    ],
    events: [
        { name: 'A Clear and Beautiful Night', choices: [{ choice: 'Choice 1', outcome: '10 Speed' }, { choice: 'Choice 2', outcome: '10 Wit' }, { choice: 'Choice 3', outcome: '10 Stamina' }] },
        { name: 'Birds of a Feather', choices: [{ choice: '(I\'m just glad you had a good time.)', outcome: '10 Speed' }, { choice: '(Yeah, it was great!)', outcome: '10 Stamina' }] },
    ],
  },
  {
    id: 27,
    name: 'O Sole Suo!',
    nickname: 'T.M. Opera O',
    distance: 'Long',
    style: 'Pace-setter',
    aptitudes: {
      track: { turf: 'A', dirt: 'E' },
      distance: { sprint: 'G', mile: 'E', med: 'A', long: 'A' },
      pace: { front: 'C', pace: 'A', late: 'A', end: 'G' },
    },
    stats: { speed: 1000, stamina: 800, power: 700, guts: 400, wit: 300 },
    skills: ['Straightaway Acceleration', 'Homestretch Haste', 'Gourmand', 'Speed Star', 'Ramp Up', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "T.M. Opera O is a powerful contender in Medium and Long races. A build focusing on Speed and Stamina is essential. A recommended deck is 3 Speed, 2 Stamina, and 1 Wit. Her +20% Stamina growth helps ensure she has the endurance needed for her preferred distances.",
      cards: ['Fine Motion (Wave of Gratitude)', 'Super Creek (Piece of Mind)', 'Mayano Top Gun (Cute + Cute = ?)', 'Eishin Flash (5:00 a.m.-Right on Schedule)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Long skills and decent green skills', 'Great Medium speed skills and debuffs', 'Strong Front Runner skills', 'Good for Pace Chasers and End Closers'],
    extraInfo: {
      quote: "Haaah ha ha ha! I am the star of this play, and it shall be known the world over as a masterpiece!",
      va: 'Sora Tokui',
      height: '156cm / 5\'1"',
      weight: 'Perfect as always! (self-proclaimed)',
      birthday: 'Mar 13',
      bio: "An opera queen who is comically self-absorbed. Her mannerisms are over-the-top, and she often proclaims her own greatness. She believes that those who don't recognize their own beauty and strength are unhappy, and she works tirelessly to enlighten them. She is admired by Meisho Doto.",
    },
    tips: [
        "A mix of speed and recovery skills is crucial for her Pace Chaser and Late Surger playstyles in long races.",
        "Acquiring both 'Swinging Maestro' and 'Gourmand' is a top priority to provide her with the substantial stamina needed for long-distance events.",
        "The skills 'Ramp Up' and 'Speed Star' have excellent synergy, helping her break free from the pack and accelerate towards the lead."
    ],
    events: [
        { name: 'Blinding Beauty', choices: [{ choice: '(I endured, somehow.)', outcome: '-10 Energy, 20 Power' }, { choice: '(I looked away immediately.)', outcome: '10 Speed' }] },
        { name: 'Bring Me Your Finest', choices: [{ choice: '(An epic about a racing deity.)', outcome: '10 Speed, 15 Skill Pts' }, { choice: '(The tale of a heroic savior of the people.)', outcome: 'TBD' }] },
    ],
  },
  {
    id: 28,
    name: 'pf. Winning Equation...',
    nickname: 'Biwa Hayahide',
    distance: 'Long',
    style: 'Pace-setter',
    aptitudes: {
      track: { turf: 'A', dirt: 'F' },
      distance: { sprint: 'F', mile: 'C', med: 'A', long: 'A' },
      pace: { front: 'E', pace: 'A', late: 'B', end: 'E' },
    },
    stats: { speed: 1000, stamina: 800, power: 700, guts: 400, wit: 500 },
    skills: ['Pace Chaser Corners ○', 'Homestretch Haste', 'Gourmand', 'Straightaway Adept', 'Speed Star', 'Swinging Maestro'],
    recommendedCards: {
      strategy: "Biwa Hayahide is a Medium and Long racer designed for frequent skill activations, thanks to her +20% Wit growth. A deck of 3 Speed, 2 Stamina, and 1 Wit is recommended to balance her needs for endurance and skill consistency. Her Unique Skill helps her quickly catch up, which works well with her Pace Chaser style.",
      cards: ['Fine Motion (Wave of Gratitude)', 'Super Creek (Piece of Mind)', 'Nishino Flower (Even the Littlest Bud)', 'Mayano Top Gun (Cute + Cute = ?)', 'Special Week (The Setting Sun And Rising Stars)', 'Kitasan Black (Fire at My Heels)'],
    },
    alternateCards: ['Strong Late Surger skills', 'Long skills and decent green skills', 'Good for Pace Chasers and End Closers', 'General-purpose speed skills and debuffs', 'Great Medium speed skills and debuffs'],
    extraInfo: {
      quote: "This... is how you derive victory!",
      va: 'Yui Kondo',
      height: '171cm / 5\'7"',
      weight: 'No change',
      birthday: 'Mar 10',
      bio: "A theorist through and through, she breaks down any problem systematically. Though theory-driven, she values practical application, so her methods are never just talk. She honed her ability to compete with the overwhelming talent of her sister, Narita Brian. She is good friends with schoolmates Narita Taishin and Winning Ticket.",
    },
    tips: [
        "Stamina skills are very important for her. Prioritize acquiring both 'Swinging Maestro' and 'Gourmand' to ensure she can last in long races.",
        "'Speed Star' is a key skill for her, as it synergizes perfectly with her Pace Chaser affinity and helps her secure a leading position in the final spurt.",
        "Take advantage of her +20% Wit growth bonus. Including a Wit support card in your deck can make her skills incredibly reliable."
    ],
    events: [
        { name: 'A New Side', choices: [{ choice: '(Sweep sounds easier to pin down.)', outcome: '10 Speed' }, { choice: '(Marvelous could be anywhere, so let\'s try to find her.)', outcome: '10 Stamina' }] },
        { name: 'A Realistic Fairytale', choices: [{ choice: 'Choice 1', outcome: '20 Power' }, { choice: 'Choice 2', outcome: '20 Guts' }] },
    ],
  },
  // --- CUSTOM RACER TEMPLATE ---
  {
    id: 999,
    name: 'Create Your Own Champion',
    nickname: 'Make a Racer!',
    distance: 'Creator',
    style: 'Customizable',
    isCreator: true, // Special flag
    aptitudes: {
      track: { turf: 'A', dirt: 'A' },
      distance: { sprint: 'A', mile: 'A', med: 'A', long: 'A' },
      pace: { front: 'A', pace: 'A', late: 'A', end: 'A' },
    },
    stats: { speed: 9000, stamina: 9000, power: 9000, guts: 9000, wit: 9000 },
    skills: ['Swinging Maestro', 'Gourmand', 'Professor of Curvature', 'Homestretch Haste', 'Ramp Up', 'Speed Star'],
    recommendedCards: {
      strategy: "Design the ultimate racer! Edit the stats, skills, and cards to build your perfect champion.",
      cards: ['Kitasan Black (Fire at My Heels)', 'Super Creek (Piece of Mind)', 'Fine Motion (Wave of Gratitude)', 'Nishino Flower (Even the Littlest Bud)', 'Tazuna Hayakawa (Tracen Reception)'],
    },
    extraInfo: {
        quote: "The road to victory is one I pave myself.",
        va: 'You!',
        height: '???',
        weight: '???',
        birthday: '???',
        bio: "This is a special template for creating your own custom racer. Edit all the fields and tap 'Make This Racer' to add your creation to the list!",
    },
    tips: [],
    events: [],
  }
];