const playlists = {
  'liked-songs': [],
  'hip-hop-mix': ['BAND4BAND', 'Not-Like-Us', 'FE!N-(feat.-Playboi-Carti)', 'TELESCOPE', 'Timeless-(with-Playboi-Carti)', 'Double-Life-(From-"Despicable-Me-4")', 'MILLION-DOLLAR-BABY', 'DEVIL-IS-A-LIE', 'Big-Dawgs', 'Mamushi-(feat.-Yuki-Chiba)',  'In-My-Head', 'Mockingbird', 'WALK-UP', 'Blueberry-Faygo', 'Love-You-Better', 'Back-To-You', 'Sea-of-Thieves', 'i-see-london-i-see-france', 'BILLIE-EILISH.', 'Hope', 'SAD', 'bad', 'Ballin-(With-Roddy-Ricch)'],
  'pop-mix': ['Beautiful-Things', 'Too-Sweet', 'Dancing-In-The-Flames', 'Espresso', 'Please-Please-Please', 'I-Had-Some-Help-(Feat.-Morgan-Wallen)', 'Chemical', 'Burning-Down', 'Popular-(with-Playboi-Carti-&-Madonna)',  'drunk-text', 'you-were-there-for-me', 'pick-up-the-phone', 'i-like-the-way-you-kiss-me', 'STAY-(with-Justin-Bieber)', 'Pedro', 'Dancin-(feat.-Luvli)-Sped-Up-Version', 'Somebody-That-I-Used-To-Know', 'Ballin-(With-Roddy-Ricch)', 'Bad-Habit', 'Sleepwalker', 'Luxury', 'Everybody-Wants-To-Rule-The-World', 'The-Perfect-Girl'],
  'j-pop': ['怪獣の花唄', 'しわあわせ', 'そんなbitterな話', '花占い', 'chainsaw-blood', '恋風邪にのせて', '裸の勇者', 'odoriko', '世界の秘密', 'tokyo-flash', '名前は片想い', 'どうして', '備忘録-Self-Cover-Ver', 'Kaikai-Kitan', 'Dramaturgy', 'Anoko-secret', 'Zenzenzense', 'Sparkle', 'Subtitle', 'Pretender', 'I-Love', 'Universe', '宿命', 'パラボラ', 'Hello', 'Override', '青のすみか', 'sleepwalk', 'overdose', 'フライデー・ナイト', '猿芝居', 'エウレカ', 'cult.', 'きらり', 'hana', '満ちてゆく', '谺する', 'まちがいさがし', 'ラストシーン', '虹', 'ロングホープ・フィリア', '星を仰ぐ', '見たこともない景色', 'さよならエレジー', 'Cry-Baby', 'Mixed-Nuts', '115万キロのフィルム', 'Tattoo', 'Driver', '幾億光年', '怪物', 'アイドル', 'ハルジオン', 'ハルカ', '夜に駆ける', 'あの夢をなぞって', 'アンコール', '勇者', 'ラブレター', '優しい彗星', 'たぶん', 'もしも命が描けたら', 'もう少しだけ', '三原色', '祝福', 'ミスター', 'romance', '好きだ', 'rendez-vous', 'pink', '水平線', '打上花火', '白日', 'カメレオン', 'アカリ', 'ひらり', 'ハロー カゲロウ', 'lemonade', 'ジュブナイル', '愛唄', '道', 'pride', '蕾', 'hikari', 'インフェルノ', 'ダンスホール', '僕のこと', '冬と春', 'アイラブユー', 'happy-birthday', 'クリスマスソング', '勝手にオリンピック', 'エメラルド', '怪盗', '高嶺の花子さん', 'ベテルギウス', 'ただ君に晴れ', 'だから僕は音楽を辞めた', 'ブルーベリー・ナイツ', 'night-dancer', 'ヒロイン', 'odoriko-dazbee-cover', 'ひまわりの約束', '栄光の架橋', '残機', '阿修羅ちゃん', 'うっせえわ', 'Tomorrow-never-knows',],
  'siglikore': ['youre-too-slow', 'hyptonic-data'],
  'sped-up': ['kompa-pasión', 'bounce', 'moment', 'ecstacy'],
  'phonk': ['GLORY', 'slay', 'funk-estranho-(super-slowed)', 'funked-up-(slowed)', 'metamorphosis', 'rapture', 'close-eyes', 'lovely-bastards', 'memory-reboot', 'devil-eyes', 'sahara', 'rave', 'aircraft', 'rainstorm', 'shadow', 'psycho-cruise', 'midnight', 'baixo', 'classical-phonk', 'ghost!', 'gigachad-theme', 'eggstreme-duck-phonk', 'brazilian-phonk-mano', 'brazilian-danca-phonk', 'unholy', 'murder-in-my-mind', 'a-million-ways-to-murder', 'scopin', 'live-another-day', 'murder-plot', 'tokyo-drift', 'avoid-me', 'neon-blade', 'montagem-celestial-de-atenas'],
  'hits-de-internet': ['moment', 'the-perfect-girl-the-motion-retrowave-remix', 'space-song', 'past-lives', 'after-dark', 'my-ordinary-life', 'kerosene', 'gigachad-theme', 'night-dancer', 'lovely-bastards', 'all-my-fellas', 'metamorphosis', 'close-eyes', 'close-eyes-sped-up', 'rave', 'an-enigmatic-encounter', 'chug-jug-with-you', 'live-another-day', 'murder-plot', 'tokyo-drift'],
  'meme-songs': ['burgers-in-the-back', 'last-rizzmas-i-gave-you-my-gyatt', 'indian-sleigh-ride-remix', 'indian-last-christmas-remix', 'king-on-a-budget-bk', 'whopper', 'nom-nom-nom-nom-nom-nom-nom', 'peppa-pig', 'loud-indian-music', 'careless-whisper', 'soviet-anthem', 'shimmy-shimmy-ay'],
  'slowed-and-reverbed': ['funk-estranho-(super-slowed)', 'funked-up-(slowed)', 'close-eyes-slowed-reverb', 'metamorphosis-slowed-reverb', 'living-life-in-the-night-slowed', 'lovely-bastards-slowed', 'memory-reboot-slowed'],
  'lofi-jazz': ['Brave' , 'from-the-start', 'cupid', 'circus', 'that-kyoto-vibe', 'brazilian-beach-rumba', 'kyoto-nights', 'cactus-cafe', 'coffee-moments', 'jazz-in-my-coffee', 'sushi'],
  'holiday-party': ['last-rizzmas-i-gave-you-my-gyatt', 'indian-sleigh-ride-remix', 'indian-last-christmas-remix', 'mariahcarey', 'snowman', 'carol-of-the-bells', 'christmas-eve-==-sarajevo'],
  'classical': ['la-campanella', 'violin-concerto-in-e-minor', 'adagio-albinoni', 'trio-no-2-in-e-minor', 'moonlight-sonata'],
  'national-anthems': ['soviet-anthem', 'heil-dir-im-siegerkranz', 'horst-wessel-lied', 'deutschlandlied', 'la-marseillaise'],
  'todays-top-hits': ['greedy', 'it-girl', 'ecstacy', 'moonlight', 'only-in-my-mind', 'strangers', 'smooth-operator-(tiktok-remix)'],
  '80s-hits': ['Never-Gonna-Give-You-Up', 'Forever-Young', 'Kyrie', 'Careless-Whisper', 'Eye-in-the-Sky', 'Rebel-Yell', 'Runaway', 'Everlasting-Love', 'Overkill', 'Down-Under', 'Who-Can-It-Be-Now', 'Everywhere', 'Africa', 'Material-Girl', 'Morning-Train', 'Smooth-Criminal', 'Take-On-Me', 'Dont-Stop-Believin', 'Separate-Ways', 'Dont-You-Want-Me', 'Maneater', '空も飛べるはず', '踊り子', '初恋'],
  'rock-mix': ['rebel-yell', 'little-dark-age', 'scentless-apprentice', 'serve-the-slaves', 'i-hate-myself', 'moist-viagra', 'sappy', 'dumb', 'reap-me', 'heart-shaped-box', 'been-a-son', 'poisons-gone', 'and-I-Love-her', 'aberdeen', 'you-cant-change-me', 'rehash', 'clean-up-before-she-comes', 'burn-the-rain', 'what-more-can-i-say', 'the-yodel-song', 'do-re-mi-medley']
}

const songToArtistMap = {
  'BAND4BAND': 'Central Cee, Lil Baby',
  'Not-Like-Us': 'Kendrick Lamar',
  'In-My-Head': 'Lil Tjay',
  'TELESCOPE': 'TWXN, LL Clawz, 507KAZ',
  'Double-Life-(From-"Despicable-Me-4")': 'Pharell Williams',
  'FE!N-(feat.-Playboi-Carti)': 'Travis Scott, Playboi Carti',
  'Mamushi-(feat.-Yuki-Chiba)': 'Megan Thee Stallion, Yuki Chiba',
  'Big-Dawgs': 'Hanumankind, Kalmi',
  'MILLION-DOLLAR-BABY': 'Tommy Richman',
  'DEVIL-IS-A-LIE': 'Tommy Richman',
  'Mockingbird': 'Eminem',
  'WALK-UP': 'Mills',
  'Blueberry-Faygo': 'Lil Mosey',
  'Kamikaze': 'Lil Mosey',
  'Love-You-Better': 'Tiagz',
  'Back-To-You': 'Kam Prada',
  'curry': 'vic sage',
  'BILLIE-EILISH.': 'Armani White',
  'dunkin-donuts': 'jakes birthday',
  'Sea-of-Thieves': 'snackrunner',
  'i-see-london-i-see-france': 'bbno$',
  'Hope': 'XXXTENTACION',
  'SAD': 'XXXTENTACION',
  'bad': 'XXXTENTACION',
  'Timeless-(with-Playboi-Carti)': 'The Weeknd, Playboi Carti',

  'kompa-pasión': 'фрози',
  'bounce': 'фрози',

  'STAY-(with-Justin-Bieber)': 'The Kid LAROI, Justin Bieber',
  'Too-Sweet': 'Hozier',
  'Espresso': 'Sabrina Carpenter',
  'Popular-(with-Playboi-Carti-&-Madonna)': 'The Weeknd, Playboi Carti, Madonna',
  'I-Had-Some-Help-(Feat.-Morgan-Wallen)': 'Post Malone, Morgan Wallen',
  'Chemical': 'Post Malone',
  'Dancing-In-The-Flames': 'The Weeknd',
  'Pedro': 'Jaxomy, Agatino Romero, Rafaella Carrà',
  'Please-Please-Please': 'Sabrina Carpenter',
  'Burning-Down': 'Alex Warren',
  'Dancin-(feat.-Luvli)-Sped-Up-Version': 'Aaron Smith, Krono, sped up + slowed, Luvli',
  'pick-up-the-phone': 'Henry Moodie',
  'drunk-text': 'Henry Moodie',
  'you-were-there-for-me': 'Henry Moodie',
  'Beautiful-Things': 'Benson Boone',
  'i-like-the-way-you-kiss-me': 'Artemas',
  'Somebody-That-I-Used-To-Know': 'Gotye, Kimbra',
  'Somebodys-Watching-Me': 'Rockwell',
  'Bad-Habit': 'Steve Lacy',
  'Luxury': 'Azealia Banks',
  'Ballin-(With-Roddy-Ricch)': 'Mustard, Roddy Ricch',
  'Everybody-Wants-To-Rule-The-World': 'Tears For Fears',
  'The-Perfect-Girl': 'Mareux',
  'Sleepwalker': 'akiaura, LONOWN, STM',

  'Kyrie': 'Mr. Mister',
  'Eye-in-the-Sky': 'The Alan Parsons Project',
  'Everlasting-Love': 'Howard Jones',
  'Overkill': 'Men at Work',
  'Down-Under': 'Men at Work',
  'Who-Can-It-Be-Now': 'Men at Work',
  'Everywhere': 'Fleetwood Mac',
  'Africa': 'Toto',
  'Material-Girl': 'Madonna',
  'Morning-Train': 'Sheena Easton',
  'Smooth-Criminal': 'Michael Jackson',
  'Take-On-Me': 'A-ha',
  'Dont-Stop-Believin': 'Journey',
  'Dont-You-Want-Me': 'The Human League',
  'Maneater': 'Daryl Hall and John Oates',
  'Runaway': 'Bon Jovi',
  'Never-Gonna-Give-You-Up': 'Rick Astley',
  'Separate-Ways': 'Journey',
  'Forever-Young': 'Alphaville',

  '怪物': 'YOASOBI',
  'ハルジオン': 'YOASOBI',
  'ハルカ': 'YOASOBI',
  '夜に駆ける': 'YOASOBI',
  'あの夢をなぞって': 'YOASOBI',
  '三原色': 'YOASOBI',
  '祝福': 'YOASOBI',
  'セブンティーン': 'YOASOBI',
  'もう少しだけ': 'YOASOBI',
  'もしも命が描けたら': 'YOASOBI',
  'ミスター': 'YOASOBI',
  '優しい彗星': 'YOASOBI',
  'アドベンチャー': 'YOASOBI',
  'ラブレター': 'YOASOBI',
  'アンコール': 'YOASOBI',
  '勇者': 'YOASOBI',
  'romance': 'YOASOBI',
  'アイドル': 'YOASOBI',
  'たぶん': 'YOASOBI',
  '好きだ': 'YOASOBI',
  'heart-beat': 'YOASOBI',
  'うっせえわ': 'Ado',
  '阿修羅ちゃん': 'Ado',
  'night-dancer': 'imase',
  'nagisa': 'imase',
  'ヒロイン': 'imase',
  '道': 'GReeeen',
  '蕾': 'GReeeen',
  '愛唄': 'GReeeen',
  'たけてん': 'GReeeen',
  'アカリ': 'GReeeen',
  '遥か': 'GReeeen',
  '愛し君へ': 'GReeeen',
  'ビリーヴ': 'GReeeen',
  'ひらり': 'GReeeen',
  '涙空': 'GReeeen',
  'lemonade': 'GReeeen',
  '勿忘草': 'GReeeen',
  '味方': 'GReeeen',
  '栞': 'GReeeen',
  'green-boys': 'GReeeen',
  'ジュブナイル': 'GReeeen',
  'ボクたちの電光石火': 'GReeeen',
  '刹那': 'GReeeen',
  'pride': 'GReeeen',
  'ハロー カゲロウ': 'GReeeen',
  'odoriko': 'Vaundy',
  '世界の秘密': 'Vaundy',
  '怪獣の花唄': 'Vaundy',
  'しわあわせ': 'Vaundy',
  '不可幸力': 'Vaundy',
  'napori': 'Vaundy',
  '黒子': 'Vaundy',
  'chainsaw-blood': 'Vaundy',
  'そんなbitterな話': 'Vaundy',
  'tokyo-flash': 'Vaundy',
  '恋風邪にのせて': 'Vaundy',
  '裸の勇者': 'Vaundy',
  '忘れ物': 'Vaundy',
  '美電球': 'Vaundy',
  '花占い': 'Vaundy',
  'まぶた': 'Vaundy',
  '栄光の架橋': 'YUZU',
  '白日': 'King Gnu',
  '一途': 'King Gnu',
  'カメレオン': 'King Gnu',
  'sleepwalk': 'natori',
  'フライデー・ナイト': 'natori',
  '猿芝居': 'natori',
  'overdose': 'natori',
  'エウレカ': 'natori',
  'cult.': 'natori',
  'boy': 'King Gnu',
  'odoriko-dazbee-cover': 'DAZBEE, Vaundy',
  '打上花火': 'Daoko, Kenshi Yonezu',
  '青のすみか': 'Tatsuya Kitani',
  'きらり': 'Fujii Kaze',
  'hana': 'Fujii Kaze',
  '満ちてゆく': 'Fujii Kaze',
  'インフェルノ': 'Mrs. GREEN APPLE',
  'ダンスホール': 'Mrs. GREEN APPLE',
  '僕のこと': 'Mrs. GREEN APPLE',
  '残機': 'ZUTOMAYO',
  'ベテルギウス': 'yuuri',
  '飛行船': 'yuuri',
  'rendez-vous': 'shytaupe',
  'pink': 'shytaupe',
  '水平線': 'back number',
  '怪盗': 'back number',
  '冬と春': 'back number',
  'アイラブユー': 'back number',
  '勝手にオリンピック': 'back number',
  'happy-birthday': 'back number',
  'エメラルド': 'back number',
  'ベルベットの詩': 'back number',
  '黄色': 'back number',
  'クリスマスソング': 'back number',
  '高嶺の花子さん': 'back number',
  'ただ君に晴れ': 'yorushika',
  'だから僕は音楽を辞めた': 'yorushika',
  'ブルーベリー・ナイツ': 'macaroni empitsu',
  'ひまわりの約束': 'motohiro hata',
  '谺する': 'SUDA MASAKI',
  'まちがいさがし': 'SUDA MASAKI',
  '星を仰ぐ': 'SUDA MASAKI',
  'ユアーズ': 'SUDA MASAKI',
  'さよならエレジー': 'SUDA MASAKI',
  '見たこともない景色': 'SUDA MASAKI',
  'ラストシーン': 'SUDA MASAKI',
  'ロングホープ・フィリア': 'SUDA MASAKI',
  '虹': 'SUDA MASAKI',
  'Tomorrow-never-knows': 'Mr.Children',
  'Subtitle': 'OFFICIAL HIGE DANDISM',
  'Pretender': 'OFFICIAL HIGE DANDISM',
  'I-Love': 'OFFICIAL HIGE DANDISM',
  '宿命': 'OFFICIAL HIGE DANDISM',
  'パラボラ': 'OFFICIAL HIGE DANDISM',
  'Hello': 'OFFICIAL HIGE DANDISM',
  'Cry-Baby': 'OFFICIAL HIGE DANDISM',
  'Universe': 'OFFICIAL HIGE DANDISM',
  '日常': 'OFFICIAL HIGE DANDISM',
  '異端なスター': 'OFFICIAL HIGE DANDISM',
  'Driver': 'OFFICIAL HIGE DANDISM',
  'Tattoo': 'OFFICIAL HIGE DANDISM',
  'Mixed-Nuts': 'OFFICIAL HIGE DANDISM',
  '115万キロのフィルム': 'OFFICIAL HIGE DANDISM',
  '幾億光年': 'Omoinotake',
  'hikari': 'androp',
  '名前は片想い': 'indigo la End',
  'どうして': 'TakaseToya, emi noda',
  '備忘録-Self-Cover-Ver': 'TakaseToya',
  'Override': 'Yoshida Yasei',
  'Kaikai-Kitan': 'Eve',
  'Dramaturgy': 'Eve',
  'Anoko-secret': 'Eve',
  'Sparkle': 'RADWIMPS',
  'Zenzenzense': 'RADWIMPS',

  'GLORY': 'Ogryzek',
  'slay': 'eternxltz',
  'funk-estranho-(super-slowed)': 'alxike',
  'funked-up-(slowed)': 'xxanteria, isq',
  'metamorphosis': 'INTERWORLD',
  'rapture': 'INTERWORLD',
  'close-eyes': 'DVRST',
  'close-eyes-sped-up': 'DVRST',
  'lovely-bastards': 'ZWE1HVNDXR, yatashigang',
  'memory-reboot': 'VOJ, narvent',
  'devil-eyes': 'zodvic',
  'rave': 'dxrk ダーク',
  'aircraft': 'dxrk ダーク',
  'rainstorm': 'dxrk ダーク',
  'sahara': 'hensonn',
  'shadow': 'ONIMXRU, SMITHMANE',
  'psycho-cruise': 'ONIMXRU, STRAWANGLE',
  'midnight': 'PLAYAMANE X NATEKI',
  'baixo': 'xxanteria',
  'ghost!': 'phonk.me',
  'classical-phonk': 'BEETHOVEN HIMSELF!!!!!!',
  'eggstreme-duck-phonk': 'sma$her',
  'gigachad-phonk-theme': 'g3ox_em',
  'brazilian-phonk-mano': 'slow-boy',
  'brazilian-danca-phonk': '6YNTHMANE',
  'unholy': 'kordhell, dxrk ダーク',
  'murder-in-my-mind': 'kordhell',
  'scopin': 'kordhell',
  'murder-plot': 'kordhell',
  'live-another-day': 'kordhell',
  'a-million-ways-to-murder': 'kordhell',
  'tokyo-drift': 'PRXSXNT FXTURE',
  'hyptonic-data': 'odetari',
  'avoid-me': 'KUTE',
  'neon-blade': 'moondeity',

  'from-the-start': 'laufey',
  'Brave': 'こーじゅん',

  'close-eyes-slowed-reverb': 'DVRST',
  'metamorphosis-slowed-reverb': 'INTERWORLD',
  'lovely-bastards-slowed': 'ZWE1HVNDXR, yatashigang',
  'memory-reboot-slowed': 'VOJ, narvent',

  'youre-too-slow': 'odetari',
  'montagem-celestial-de-atena': 'dj orbital',

  'indian-sleigh-ride-remix': 'vindaloo singh',
  'indian-last-christmas-remix': 'vindaloo singh',
  'careless-whisper': 'george michael',
  'shimmy-shimmy-ay': 'shimmy ah',

  'my-ordinary-life': 'the living tombstone',
  'after-dark': 'mr. kitty',
  'chug-jug-with-you': 'leviathanJPTV',
  'kerosene': 'crystal castles',
  'past-lives': 'sapientdream',
  'moment': 'vierre cloud',
  'the-perfect-girl-the-motion-retrowave-remix': 'mareux, the motion',
  'space-song': 'beach house',

  'mariahcarey': 'all i want for christmas is youuuuu 🎄',
  'snowman': 'sia',
  'last-rizzmas-i-gave-you-my-gyatt': 'every fortnite kid',
  'burgers-in-the-back': 'ai caseoh',

  'greedy': 'tate mcrae',
  'it-girl': "aliyah's interlude",
  'ecstacy': 'su1c1de idol',
  'moonlight': 'kali uchis',
  'only-in-my-mind': 'kenya grace',
  'strangers': 'kenya grace',
  'smooth-operator-(tiktok-remix)': 'sade',

  'soviet-anthem': 'soviet union',
  'heil-dir-im-siegerkranz': 'heinrich harrie',
  'horst-wessel-lied': 'horst wessel',
  'deutschlandlied': 'joseph haydn',
  'la-marseillaise': 'claude joseph rouget de lisle',

  'la-campanella': 'rousseau',
  'violin-concerto-in-e-minor': 'felix mendelsshon',
  'adagio-albinoni': 'tomaso albinoni',
  'trio-no-2-in-e-minor': 'franz schubert',
  'moonlight-sonata': 'beethoven',

  'passionfruit': 'drake',
  'teenage-fever': 'drake',
  'idgaf-(frick)': 'drake',

  'reap-me': 'nirvana',
  'heart-shaped-box': 'nirvana',
  'dumb': 'nirvana',
  'sappy': 'nirvana',
  'moist-viagra': 'nirvana',
  'i-hate-myself': 'nirvana',
  'serve-the-slaves': 'GET BACK 2 WORK (nirvana)',
  'scentless-apprentice': 'nirvana',

  'poisons-gone': 'kurt cobain',
  'and-I-Love-her': 'kurt cobain',
  'aberdeen': 'kurt cobain',
  'you-cant-change-me': 'kurt cobain',
  'rehash': 'kurt cobain',
  'clean-up-before-she-comes': 'kurt cobain',
  'burn-the-rain': 'kurt cobain',
  'what-more-can-i-say': 'kurt cobain',
  'been-a-son': 'nirvana',
  'the-yodel-song': 'kurt cobain',
  'do-re-mi-medley': 'kurt cobain',

  '踊り子': 'kozo murashita',
  '初恋': 'kozo murashita',
  'neglect': 'mr. kitty',
  '空も飛べるはず': 'spitz',

  'little-dark-age': 'mgmt',

  'all-my-fellas': 'frizk',

  'carol-of-the-bells': 'lindsey stirling',
  'christmas-eve-==-sarajevo': 'trans-siberian orchestra',

  'rebel-yell': 'billy idol',
  'freebird': 'lynyrd skynyrd',

};

export { playlists, songToArtistMap };