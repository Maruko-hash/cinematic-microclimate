export interface Movie {
  id: number;
  tmdb: number;
  title: string;
  original_title: string;
  media_type: string;
  genre_ids: number[];
  overview: string;
  vote_average: number;
  release_date: string;
  douban: string;
  poster: string;
  vote_count: number;
  popularity: number;
  runtime: number;
  languages: string[];
  countries: string[];
}

export const BUILTIN_DATA: Movie[] = [
  {
  "id": 1,
  "tmdb": 278,
  "title": "肖申克的救赎",
  "original_title": "The Shawshank Redemption",
  "media_type": "movie",
  "overview": "安迪·杜佛兰被错判谋杀妻子及其情人，在缅因州肖申克服刑，判处两项无期徒刑接连执行。影片背景设定于1940年代，展现安迪如何在残酷的监狱环境中艰难求生，甚至赢得狱友们的敬重，尤其是与老囚徒“瑞德”·雷丁之间深厚的友谊。",
  "release_date": "1994-09-23",
  "douban": "",
  "poster": "tmdb_278.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    18,
    80
  ],
  "vote_count": 30486,
  "popularity": 74.6,
  "runtime": 142,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 2,
  "tmdb": 238,
  "title": "教父",
  "original_title": "The Godfather",
  "media_type": "movie",
  "overview": "40年代的美国，“教父”维托·唐·柯里昂是黑手党柯里昂家族的首领，带领家族从事非法的勾当，但同时他也是许多弱小平民的保护神，深得人们爱戴。因为拒绝了毒枭索洛索的毒品交易要求，柯里昂家族和纽约其他几个黑手党家族的矛盾激化、圣诞前夕，索洛索劫持了“教父”的参谋汤姆，并派人暗杀“教父”；因为内奸的出卖，“教父”的大儿子逊尼被仇家杀害；小儿子麦克也被卷了进来，失去爱妻。黑手党家族之间的矛盾越来越白热化。年",
  "release_date": "1972-03-14",
  "douban": "",
  "poster": "tmdb_238.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    18,
    80
  ],
  "vote_count": 22990,
  "popularity": 43.0,
  "runtime": 175,
  "languages": [
    "en",
    "la",
    "it"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 3,
  "tmdb": 122019,
  "title": "马卡里奥",
  "original_title": "Macario",
  "media_type": "movie",
  "overview": "暂无简介",
  "release_date": "1960-06-09",
  "douban": "",
  "poster": "tmdb_122019.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    18,
    14
  ],
  "vote_count": 214,
  "popularity": 1.0,
  "runtime": 91,
  "languages": [
    "es"
  ],
  "countries": [
    "MX"
  ]
},
  {
  "id": 4,
  "tmdb": 687163,
  "title": "挽救计划",
  "original_title": "Project Hail Mary",
  "media_type": "movie",
  "overview": "太阳正在被“吃”掉，绝望吞噬地球。一名“平凡”的中学教师背负全人类的希望，踏上“太空不归路”。末路孤旅中，他意外遇到一位外星萌友，一个同样身陷绝境的外星工程师，这对“宇宙搭子”成了两个文明最后的救命稻草。他们能否在资源紧缺的情况下攻克重重科学谜 题，寻回唯一的希望火种？",
  "release_date": "2026-03-15",
  "douban": "",
  "poster": "tmdb_687163.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    878,
    12
  ],
  "vote_count": 4649,
  "popularity": 253.2,
  "runtime": 157,
  "languages": [
    "en",
    "ja",
    "ru",
    "zh"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 5,
  "tmdb": 1630423,
  "title": "我的挚爱杀手",
  "original_title": "เลือดรัก นักฆ่า",
  "media_type": "movie",
  "overview": "年轻女子因拥有罕见血型而遭人追捕，自小被杀手家族扶养长大。当复仇心切的敌人为了她的血再度现身，她决心与挚爱并肩作战，为自由奋战到底。",
  "release_date": "2026-05-06",
  "douban": "",
  "poster": "tmdb_1630423.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    28,
    18,
    10749
  ],
  "vote_count": 228,
  "popularity": 50.9,
  "runtime": 128,
  "languages": [
    "th"
  ],
  "countries": [
    "TH"
  ]
},
  {
  "id": 6,
  "tmdb": 1130276,
  "title": "魅魔",
  "original_title": "Succubus",
  "media_type": "movie",
  "overview": "　　经历了与妻子分居的新手父亲下载了一个交友软件，想让自己困惑的心绪得到缓解。很快他便在软件上结识了一位美女并快速地与之建立起了联系，然而他也意识到自己掉入了一个可怕的旋涡之中。",
  "release_date": "2024-10-06",
  "douban": "",
  "poster": "tmdb_1130276.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    27,
    53
  ],
  "vote_count": 237,
  "popularity": 9.1,
  "runtime": 103,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 7,
  "tmdb": 240,
  "title": "教父2",
  "original_title": "The Godfather Part II",
  "media_type": "movie",
  "overview": "作为《教父》的续篇，影片延续了科莱昂家族两代权力交替的史诗。科波拉在第二部分中讲述了两条故事线：由罗伯特·德尼罗以非凡演技演绎的年轻教父维托的根源与崛起，以及迈克尔（阿尔·帕西诺饰）作为新任教父的上位之路。",
  "release_date": "1974-12-20",
  "douban": "",
  "poster": "tmdb_240.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    18,
    80
  ],
  "vote_count": 13938,
  "popularity": 29.4,
  "runtime": 200,
  "languages": [
    "en",
    "la",
    "it",
    "es"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 8,
  "tmdb": 424,
  "title": "辛德勒的名单",
  "original_title": "Schindler's List",
  "media_type": "movie",
  "overview": "1939年，波兰在纳粹德国的统治下，党卫军对犹太人进行了隔离统治。德国商人奥斯卡·辛德勒（连姆·尼森 Liam Neeson 饰）来到德军统治下的克拉科夫，开设了一间搪瓷厂，生产军需用品。凭着出众的社交能力和大量的金钱，辛德勒和德军建立了良好的关系，他的工厂雇用犹太人工作，大发战争财。 1943年，克拉科夫的犹太人遭到了惨绝人寰的大屠杀，辛德勒目睹这一切，受到了极大的震撼，他贿赂军官，让自己的工",
  "release_date": "1993-12-15",
  "douban": "",
  "poster": "tmdb_424.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    18,
    36,
    10752
  ],
  "vote_count": 17487,
  "popularity": 25.3,
  "runtime": 195,
  "languages": [
    "he",
    "en",
    "pl",
    "de"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 9,
  "tmdb": 389,
  "title": "十二怒汉",
  "original_title": "12 Angry Men",
  "media_type": "movie",
  "overview": "西德尼·吕美特执导的本片堪称电影史上最颠覆的法庭剧。这部改编自雷金纳德·罗斯电视剧的经典之作，以密室内群像戏的精炼笔法，透视美国司法体系的肌理，张力十足。亨利·方达饰演的异议者，在由白人男性组成的陪审团中孤身抗辩，其余成员皆急于裁定被控弑父的波多黎各少年有罪。故事在一个闷热的午后、一间汗流浃背的房间里层层推进，最终凝聚成一部史诗规模的思辨传奇。吕美特这部震撼人心的导演处女作，精准捕捉了1950年",
  "release_date": "1957-04-10",
  "douban": "",
  "poster": "tmdb_389.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    18
  ],
  "vote_count": 10011,
  "popularity": 25.2,
  "runtime": 96,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 10,
  "tmdb": 1330021,
  "title": "幸运有八只触手",
  "original_title": "Remarkably Bright Creatures",
  "media_type": "movie",
  "overview": "在这部感人的剧情片中，一名寡妇在小镇的水族馆上夜班时，与一只聪明的章鱼以及一个迷茫的年轻小伙子建立了深厚羁绊。改编自畅销书。",
  "release_date": "2026-05-07",
  "douban": "",
  "poster": "tmdb_1330021.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    9648
  ],
  "vote_count": 545,
  "popularity": 51.4,
  "runtime": 114,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 11,
  "tmdb": 155,
  "title": "蝙蝠侠：黑暗骑士",
  "original_title": "The Dark Knight",
  "media_type": "movie",
  "overview": "蝙蝠侠在打击犯罪的战争中加大了赌注。在吉姆·戈登警长与地方检察官哈维·丹特的协助下，蝙蝠侠决心清除肆虐哥谭街头的残余犯罪组织。这一联手行动卓有成效，但他们很快发现自己沦为了一场混沌统治的猎物，这场混乱由一位新兴犯罪大师所掀动，惶恐的哥谭市民称他为“小丑”。[华纳兄弟影业]",
  "release_date": "2008-07-16",
  "douban": "",
  "poster": "tmdb_155.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    28,
    80,
    53
  ],
  "vote_count": 35844,
  "popularity": 40.8,
  "runtime": 152,
  "languages": [
    "en",
    "zh"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 12,
  "tmdb": 497,
  "title": "绿里奇迹",
  "original_title": "The Green Mile",
  "media_type": "movie",
  "overview": "1935年。美国南部惨淡肃杀的冷山监狱。这里有片一英里长的绿地，人们叫它“绿里”。不过，它的居民皆为死囚，在绿地的另一头，便是行刑用的电椅。保罗·艾治科姆（汤姆·汉 克斯饰）是这里的狱监，对于走过“绿里”、继而在电椅上惨叫毙命的死囚行刑程序，他俨然已无动于衷。除了保罗及其爱妻简外，“绿里”上还有凶残的副狱监豪威尔，有施虐倾向 的狱吏佩西，良心未泯的看守海尔和他身患绝症的妻子美琳达，喜用宠物鼠逗狱吏",
  "release_date": "1999-12-10",
  "douban": "",
  "poster": "tmdb_497.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    14,
    18,
    80
  ],
  "vote_count": 19290,
  "popularity": 26.1,
  "runtime": 189,
  "languages": [
    "en",
    "fr"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 13,
  "tmdb": 19404,
  "title": "勇夺芳心",
  "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
  "media_type": "movie",
  "overview": "乔德利和妻子结婚多年，一直十分恩爱。两人共同养育了两个女儿希姆莱和图吉，两个姑娘都出落得亭亭玉立。一晃眼，希姆莱就到了该嫁人的年纪了，尽管乔德利一家人已经在伦敦生活了二十多年了，但乔德利骨子里依旧是一个传统的印度人。乔德利将希姆莱许配给了朋友的儿子库杰，这让希姆莱感到十分不满。一次偶然中，希姆莱邂逅了名为拉杰的印度男子，尽管拉杰为人轻浮，油腔滑调，但希姆莱还是同他坠入了情网。得知此事的乔德利举家迁",
  "release_date": "1995-10-20",
  "douban": "",
  "poster": "tmdb_19404.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    35,
    18,
    10749
  ],
  "vote_count": 4591,
  "popularity": 17.7,
  "runtime": 190,
  "languages": [
    "hi"
  ],
  "countries": [
    "IN"
  ]
},
  {
  "id": 14,
  "tmdb": 346,
  "title": "七武士",
  "original_title": "七人の侍",
  "media_type": "movie",
  "overview": "这部影史最具震撼力的史诗巨制，讲述十六世纪某村庄的绝望村民雇佣七位武士抵御山贼侵袭的故事。黑泽明历时三个多小时的银幕征程，通过传奇演员三船敏郎与志村乔的演绎，将哲学沉思与娱乐观赏、细腻人情与激烈战斗完美交融，铸就这部关于勇气与希望的丰碑之作，其故事之丰饶、意境之深远，令人过目难忘。",
  "release_date": "1954-04-26",
  "douban": "",
  "poster": "tmdb_346.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    28,
    18
  ],
  "vote_count": 4237,
  "popularity": 14.0,
  "runtime": 207,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 15,
  "tmdb": 122,
  "title": "指环王3：王者无敌",
  "original_title": "The Lord of the Rings: The Return of the King",
  "media_type": "movie",
  "overview": "索伦大军为剿灭人类种族，已对刚铎都城米那斯提力斯展开围攻。这座昔日的伟大王国由一位日渐衰弱的摄政王守护，此刻比任何时候都更需要它的王者归来。但阿拉贡能否回应血脉的召唤，成为命定之君？中土世界的命运，正系于他宽阔的双肩。",
  "release_date": "2003-12-17",
  "douban": "",
  "poster": "tmdb_122.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    12,
    14,
    28
  ],
  "vote_count": 26595,
  "popularity": 42.4,
  "runtime": 263,
  "languages": [
    "en"
  ],
  "countries": [
    "US",
    "NZ"
  ]
},
  {
  "id": 16,
  "tmdb": 1181678,
  "title": "要不要做我儿子？",
  "original_title": "¿Quieres ser mi hijo?",
  "media_type": "movie",
  "overview": "四十岁的卢发现相伴十五年的伴侣出轨，生活瞬间崩塌。她在重建自我的过程中，与一位年轻放浪的男子产生了出乎意料的关系。",
  "release_date": "2023-09-21",
  "douban": "",
  "poster": "tmdb_1181678.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    35,
    10749
  ],
  "vote_count": 353,
  "popularity": 12.4,
  "runtime": 140,
  "languages": [
    "es"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 17,
  "tmdb": 496243,
  "title": "寄生虫",
  "original_title": "기생충",
  "media_type": "movie",
  "overview": "这部定义时代精神的惊世之作，将全球范围内对阶级不平等的审视浓缩为一场流行电影的反叛风暴。奉俊昊导演以这部打破类型桎梏的黑色喜剧惊悚片，奠定了其世界顶尖电影作者的地位。故事聚焦首尔的两个家庭，一户在低洼社区潮湿半地下室里挣扎求生的底层家庭，另一户则居住于可俯瞰城市的现代建筑奇观中尽享奢华。当两家人的命运因危险关系交织在一起时，资本主义的黑暗裂隙以惊人之势被彻底撕裂。影片凭借导演精心构建的戏剧场景、",
  "release_date": "2019-05-30",
  "douban": "",
  "poster": "tmdb_496243.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    35,
    53,
    18
  ],
  "vote_count": 20680,
  "popularity": 36.0,
  "runtime": 132,
  "languages": [
    "en",
    "ko",
    "de"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 18,
  "tmdb": 1232449,
  "title": "年轻的心",
  "original_title": "Young Hearts",
  "media_type": "movie",
  "overview": "　　埃利亚斯是一个十四岁的男孩，在一个小村庄长大，他在这里感到自己像个局外人。在遇到新邻居兼同龄人亚历山大后，埃利亚斯开始面对自己逐渐显露的性意识。",
  "release_date": "2024-10-26",
  "douban": "",
  "poster": "tmdb_1232449.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    10749
  ],
  "vote_count": 272,
  "popularity": 8.6,
  "runtime": 97,
  "languages": [
    "nl",
    "fr"
  ],
  "countries": [
    "NL",
    "BE"
  ]
},
  {
  "id": 19,
  "tmdb": 680,
  "title": "低俗小说",
  "original_title": "Pulp Fiction",
  "media_type": "movie",
  "overview": "　《低俗小说》由“文森特和马沙的妻子”、“金表”、“邦妮的处境”三个故事以及影片首尾的序幕和尾声五个部分组成。看似独立的小故事里面，却又有环环相扣的人和事。 盗贼“小南瓜”和“小兔子”在早餐店里打劫，却遇上了天大的麻烦，黑社会成员朱尔斯（塞缪尔•杰克逊Samuel L. Jackson饰）和文森特（约翰•特拉沃尔塔John Travolta饰）在店内用餐，可谓天外有天。二人是否会放过两名小盗贼",
  "release_date": "1994-09-10",
  "douban": "",
  "poster": "tmdb_680.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    53,
    80,
    35
  ],
  "vote_count": 30241,
  "popularity": 37.2,
  "runtime": 154,
  "languages": [
    "en",
    "es",
    "fr"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 20,
  "tmdb": 157336,
  "title": "星际穿越",
  "original_title": "Interstellar",
  "media_type": "movie",
  "overview": "近未来的地球黄沙遍野，小麦、秋葵等基础农作物相继因枯萎病灭绝，人类不再像从前那样仰望星空，放纵想象力和灵感的迸发，而是每日在沙尘暴的肆虐下倒数着所剩不多的光景。在家务农的前NASA宇航员库珀接连在女儿墨菲的书房发现奇怪的重力场现象，随即得知在某个未知区域内前NASA成员仍秘密进行一个拯救人类的计划。多年以前土星附近出现神秘虫洞，NASA借机将数名宇航员派遣到遥远的星系寻找适合居住的星球。在布兰德教",
  "release_date": "2014-11-05",
  "douban": "",
  "poster": "tmdb_157336.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    12,
    18,
    878
  ],
  "vote_count": 39920,
  "popularity": 70.4,
  "runtime": 169,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 21,
  "tmdb": 13,
  "title": "阿甘正传",
  "original_title": "Forrest Gump",
  "media_type": "movie",
  "overview": "透过被命运眷顾的单纯者阿甘的双眼，全景式展现了美国历史上动荡的三十年。",
  "release_date": "1994-06-23",
  "douban": "",
  "poster": "tmdb_13.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    35,
    18,
    10749
  ],
  "vote_count": 29788,
  "popularity": 29.0,
  "runtime": 142,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 22,
  "tmdb": 769,
  "title": "好家伙",
  "original_title": "GoodFellas",
  "media_type": "movie",
  "overview": "本片根据真实故事改编，讲述了纽约黑手党血腥的江湖恩怨，把所谓的“江湖道义”还原为人性的丑陋与贪婪。 亨利•希尔（雷•李欧塔 饰）从小不学无术，跟着老大保利，靠收取保护费、走私、抢劫，他娶了美丽的妻子凯伦，有可爱的女儿，迷人的情妇，名车豪宅，生活优渥。 吉米•康维（罗伯特•德尼罗 饰）和汤米（乔•佩西 饰）是亨利的好朋友，三人一起经历和很多事情：杀死羞辱汤米的意大利黑手党头领比利•贝兹；策划德航",
  "release_date": "1990-09-12",
  "douban": "",
  "poster": "tmdb_769.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    80
  ],
  "vote_count": 14375,
  "popularity": 24.1,
  "runtime": 145,
  "languages": [
    "en",
    "it"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 23,
  "tmdb": 550,
  "title": "搏击俱乐部",
  "original_title": "Fight Club",
  "media_type": "movie",
  "overview": "杰克( 爱德华·诺顿 Edward Norton 饰)是一个充满中年危机意识的人，他非常憎恨自己的生活及一切，再加上他患有严重的失眠症，所以他常常参加各种团体咨询会，只为了能接触人群。在某一个团体咨询会上，杰克遇上了一个跟他同样理由来参加的女烟枪，玛拉(海伦娜·邦汉·卡特 Helena Bonham Carter  饰)，在莫名激素的影响下，杰克和玛拉一起逃离了咨询会，两人的情愫因而滋生…  一个",
  "release_date": "1999-10-15",
  "douban": "",
  "poster": "tmdb_550.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    53
  ],
  "vote_count": 32091,
  "popularity": 29.6,
  "runtime": 139,
  "languages": [
    "en"
  ],
  "countries": [
    "DE",
    "US"
  ]
},
  {
  "id": 24,
  "tmdb": 637,
  "title": "美丽人生",
  "original_title": "La vita è bella",
  "media_type": "movie",
  "overview": "犹太青年圭多（罗伯托·贝尼尼 Roberto Benigni 饰）邂逅美丽的女教师多拉（尼可莱塔·布拉斯基 Nicoletta Braschi 饰），他彬彬有礼的向多拉鞠躬：“早安！公主！”。历经诸多令人啼笑皆非的周折后，天遂人愿，两人幸福美满的生活在一起。然而好景不长，法西斯政权下，圭多和儿子被强行送往犹太人集中营。多拉虽没有犹太血统，毅然同行，与丈夫儿子分开关押在一个集中营里。聪明乐天的圭多哄",
  "release_date": "1997-12-20",
  "douban": "",
  "poster": "tmdb_637.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    35,
    18
  ],
  "vote_count": 14001,
  "popularity": 13.1,
  "runtime": 116,
  "languages": [],
  "countries": [
    "IT"
  ]
},
  {
  "id": 25,
  "tmdb": 120,
  "title": "指环王1：护戒使者",
  "original_title": "The Lord of the Rings: The Fellowship of the Ring",
  "media_type": "movie",
  "overview": "J.R.R.托尔金的文学巨著首次以电影形式磅礴呈现，这是一场正义对抗邪恶的史诗冒险，一段关于友谊力量与个人勇气的传奇，更是一次为人类纪元开辟道路的英雄征程。",
  "release_date": "2001-12-18",
  "douban": "",
  "poster": "tmdb_120.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    12,
    14,
    28
  ],
  "vote_count": 27599,
  "popularity": 39.0,
  "runtime": 228,
  "languages": [
    "en"
  ],
  "countries": [
    "US",
    "NZ"
  ]
},
  {
  "id": 26,
  "tmdb": 14537,
  "title": "切腹",
  "original_title": "切腹",
  "media_type": "movie",
  "overview": "家族没落后，失业武士仲代达矢来到井伊藩主的宅邸，请求允许他在此切腹自尽。藩主家臣认定这名走投无路的浪人只是想讨份差事，遂逼迫他当场切腹，却低估了他坚守的信念与对尊严的执着。本片由小林正树执导，荣获戛纳电影节评委会特别奖，以凌厉笔触刻画了个体在腐朽伪善体制下的抗争。",
  "release_date": "1962-09-15",
  "douban": "",
  "poster": "tmdb_14537.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    28,
    18,
    36
  ],
  "vote_count": 1214,
  "popularity": 12.0,
  "runtime": 135,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 27,
  "tmdb": 598,
  "title": "上帝之城",
  "original_title": "Cidade de Deus",
  "media_type": "movie",
  "overview": "巴西里约热内卢的贫民窟，这里是“上帝之城”，更是魔鬼也会叹息着转身的地方。 阿炮带着我们到了这里，他见证了这里二十多年来被残暴、贪婪、复仇、野心、背叛、掠夺所裹挟的混乱生活以及最终导致的一场灾难性的黑帮争斗。虽然从小就要 辗转于匪徒间求生存，但胆小怕事的性格与自我保护的本能却使他一直能平安度日。 60年代初，阿毛、阿夹和阿呆是这里的“少年三侠”，在抢劫完旅馆之后，他们三人分道扬镳，阿夹重回上帝",
  "release_date": "2002-08-30",
  "douban": "",
  "poster": "tmdb_598.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    80
  ],
  "vote_count": 8192,
  "popularity": 11.9,
  "runtime": 129,
  "languages": [
    "pt"
  ],
  "countries": [
    "DE",
    "BR",
    "FR"
  ]
},
  {
  "id": 28,
  "tmdb": 11216,
  "title": "天堂电影院",
  "original_title": "Nuovo Cinema Paradiso",
  "media_type": "movie",
  "overview": "　　在意大利南部小镇姜卡尔多，童年的小多多不仅喜欢看电影，还喜欢看放映师艾弗达“剪”电影：在40年代的意大利小镇上，电影在放映之前都要经由牧师检查，把认为观众不宜的镜头（比如接吻戏）严格地剪掉之后，才可以放映。好心的艾佛特为了让更多的观众看到电影，搞了一次露天电影，结果胶片着火了，多多把艾弗达从火海中救了出来，但艾弗达双目失明。多多成了小镇唯一会放电影的人，他接替艾佛特成了小镇的电影放映师。多多渐",
  "release_date": "1988-11-17",
  "douban": "",
  "poster": "tmdb_11216.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    10749
  ],
  "vote_count": 4831,
  "popularity": 11.9,
  "runtime": 124,
  "languages": [
    "it"
  ],
  "countries": [
    "IT",
    "FR"
  ]
},
  {
  "id": 29,
  "tmdb": 121,
  "title": "指环王2：双塔奇兵",
  "original_title": "The Lord of the Rings: The Two Towers",
  "media_type": "movie",
  "overview": "在J.R.R.托尔金史诗三部曲的第二篇章中，护戒同盟队面对难以想象的敌军与诡谲阴谋，同时见证了远古奇迹与同胞未觉醒的力量。",
  "release_date": "2002-12-18",
  "douban": "",
  "poster": "tmdb_121.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    12,
    14,
    28
  ],
  "vote_count": 23922,
  "popularity": 26.7,
  "runtime": 235,
  "languages": [
    "en"
  ],
  "countries": [
    "US",
    "NZ"
  ]
},
  {
  "id": 30,
  "tmdb": 1439930,
  "title": "惩罚者：最后一击",
  "original_title": "The Punisher: One Last Kill",
  "media_type": "movie",
  "overview": "弗兰克·卡斯特想在复仇之外，追求更有意义的目标，但他却意外地被拉回战场。",
  "release_date": "2026-05-12",
  "douban": "",
  "poster": "tmdb_1439930.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    28,
    18,
    80
  ],
  "vote_count": 1460,
  "popularity": 249.6,
  "runtime": 51,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 31,
  "tmdb": 539,
  "title": "惊魂记",
  "original_title": "Psycho",
  "media_type": "movie",
  "overview": "凤凰城一女秘书卷走客户四万美元公款，仓皇出逃途中入住一家偏僻汽车旅馆。旅馆经营者诺曼·贝茨是位受其母亲支配的年轻人。",
  "release_date": "1960-06-22",
  "douban": "",
  "poster": "tmdb_539.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    27,
    53,
    9648
  ],
  "vote_count": 10997,
  "popularity": 17.4,
  "runtime": 109,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 32,
  "tmdb": 510,
  "title": "飞越疯人院",
  "original_title": "One Flew Over the Cuckoo's Nest",
  "media_type": "movie",
  "overview": "在州立精神病院里休养总比蹲监狱强，对吧？兰德尔·P·麦克墨菲（杰克·尼科尔森 饰），一个血管里流淌着闪电、舌绽莲花的自由派骗子，装疯混进了他所谓的“疯子们”中间。很快，他那极具感染力的无序感便与麻木的例行程序发生冲撞。当世界大赛正酣时，这群被镇静剂泡透的家伙怎能披着浴袍拖沓度日？这意味着战争！一方是麦克墨菲，另一方则是轻声细语的拉契特护士（路易丝·弗莱彻 饰），这位影史上最冷酷可怕的恶魔之一。而",
  "release_date": "1975-11-19",
  "douban": "",
  "poster": "tmdb_510.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18
  ],
  "vote_count": 11464,
  "popularity": 13.7,
  "runtime": 133,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 33,
  "tmdb": 40096,
  "title": "蛊惑兄弟",
  "original_title": "O Auto da Compadecida",
  "media_type": "movie",
  "overview": "智高和杰克，一对患难穷兄弟，四出寻找工作，最终在面包店找到差事。但店主极为刻薄，兄弟俩的食物比狗还要差。阴差阳错，他们弄死了店主的狗，更要哄骗神父替小狗祈福，闹出笑话连篇。及后智高暗恋大财主之女路仙霞。但智高过于害羞，久久未能成事；杰克唯有替智高制造机会。一日，镇里来了一班悍匪，洗劫村民之余，更进行杀戮游戏……",
  "release_date": "2000-09-15",
  "douban": "",
  "poster": "tmdb_40096.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    35,
    18,
    14,
    10749
  ],
  "vote_count": 1223,
  "popularity": 5.3,
  "runtime": 104,
  "languages": [
    "pt",
    "la"
  ],
  "countries": [
    "BR"
  ]
},
  {
  "id": 34,
  "tmdb": 244786,
  "title": "爆裂鼓手",
  "original_title": "Whiplash",
  "media_type": "movie",
  "overview": "年轻的爵士鼓手安德鲁·奈曼就读于全国顶尖的音乐学院，师从令人畏惧的爵士乐导师特伦斯·弗莱彻，在成为顶尖爵士鼓手的道路上奋力挣扎。",
  "release_date": "2014-10-10",
  "douban": "",
  "poster": "tmdb_244786.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    10402,
    53
  ],
  "vote_count": 16639,
  "popularity": 22.5,
  "runtime": 107,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 35,
  "tmdb": 12493,
  "title": "天国与地狱",
  "original_title": "天国と地獄",
  "media_type": "movie",
  "overview": "在黑泽明这部极具影响力的家庭伦理剧与刑侦叙事杰作中，三船敏郎饰演的富商权藤金吾令人过目难忘，其家人沦为冷血绑匪的勒索目标。改编自艾德·麦可班恩侦探小说《国王的赎金》的本片，游刃有余地从分秒必争的惊悚剧过渡为精准的社会剖析，铸就了一部关于阶级矛盾与当代日本社会的犀利影像论著。[标准收藏公司]",
  "release_date": "1963-03-01",
  "douban": "",
  "poster": "tmdb_12493.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    80,
    53
  ],
  "vote_count": 1126,
  "popularity": 8.5,
  "runtime": 142,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 36,
  "tmdb": 772071,
  "title": "Cuando sea joven",
  "original_title": "Cuando sea joven",
  "media_type": "movie",
  "overview": "暂无简介",
  "release_date": "2022-09-14",
  "douban": "",
  "poster": "tmdb_772071.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    35,
    14
  ],
  "vote_count": 284,
  "popularity": 0.6,
  "runtime": 115,
  "languages": [
    "es"
  ],
  "countries": [
    "MX",
    "US"
  ]
},
  {
  "id": 37,
  "tmdb": 34530,
  "title": "人间的条件(V-VI)",
  "original_title": "人間の條件　完結篇",
  "media_type": "movie",
  "overview": "北满洲，梶等残败兵一个劲儿地向南逃。途中遇到逃难的男女老少，虽然帮助他们，但因饥饿疲劳一个个相继死去。梶历尽艰辛来到还残留着日本老人和女人的开拓村，他准备在这里和苏军作战，但是日本女人高喊“别在这里打仗了！”之后，他们开始了俘虏收容所的生活。梶对收容所里桐原这个卑劣小人，恨之入骨。之后，他又被诬告，被罚作苦役。在森林中忍受苦役后，回到了收容所。当得知自己保护过的弱兵被桐原杀了后，且没被问罪，梶绝望",
  "release_date": "1961-01-28",
  "douban": "",
  "poster": "tmdb_34530.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    10752,
    18,
    36
  ],
  "vote_count": 208,
  "popularity": 1.7,
  "runtime": 190,
  "languages": [
    "ru",
    "ja",
    "zh"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 38,
  "tmdb": 255709,
  "title": "素媛",
  "original_title": "소원",
  "media_type": "movie",
  "overview": "　　她是一个美丽平凡的小女孩，和爸爸妈妈生活在位于街角的家中。家里经营着以她的名字素媛命名的杂货店，母亲作为老板娘日夜忙碌不得闲暇，父亲则在工厂干着繁重的工作。在那个飘雨的早上，素媛打着雨伞独自上学。在离学校近在咫尺的地方，她遭遇一个相貌猥琐、酒气冲天的大叔，由此开启了她的悲剧之旅。柔嫩的小花遭到暴风雨无情摧残，受伤的岂止枝枝叶叶，更是那迎着阳光无忧成长的心。无良媒体铺天盖地大肆渲染，作为受害者的",
  "release_date": "2013-10-02",
  "douban": "",
  "poster": "tmdb_255709.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18
  ],
  "vote_count": 858,
  "popularity": 13.3,
  "runtime": 122,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 39,
  "tmdb": 667257,
  "title": "妙不可言",
  "original_title": "Cosas imposibles",
  "media_type": "movie",
  "overview": "生活是如此奇妙且难以预测，有时会在最不经意的地方发现幸福：一位七旬老妪和她的少年邻居之间产生了深厚的友谊。",
  "release_date": "2021-06-17",
  "douban": "",
  "poster": "tmdb_667257.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    10751,
    18
  ],
  "vote_count": 422,
  "popularity": 5.2,
  "runtime": 88,
  "languages": [
    "es"
  ],
  "countries": [
    "MX"
  ]
},
  {
  "id": 40,
  "tmdb": 1891,
  "title": "星球大战5：帝国反击战",
  "original_title": "The Empire Strikes Back",
  "media_type": "movie",
  "overview": "星球大战事件三年后，帝国军队继续追捕义军。义军在霍斯冰原星球战败后，卢克前往达戈巴星球，跟随自共和国覆灭后隐居的绝地大师尤达进行训练。为诱使卢克堕入黑暗面，达斯·维达将年轻的天行者引入贝斯平云城的陷阱。在与西斯尊主的激烈光剑对决中，卢克面对一个惊人的真相。[20世纪福克斯]",
  "release_date": "1980-05-20",
  "douban": "",
  "poster": "tmdb_1891.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    12,
    28,
    878
  ],
  "vote_count": 18437,
  "popularity": 15.8,
  "runtime": 124,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 41,
  "tmdb": 1291559,
  "title": "余生一年的我，与可活半年的你相遇",
  "original_title": "余命一年の僕が、余命半年の君と出会った話。",
  "media_type": "movie",
  "overview": "生命只剩一年的 17 岁少年秋人为还剩 6 个月可活的绝症女孩带去欢笑，从而找到了新的人生意义。",
  "release_date": "2024-06-26",
  "douban": "",
  "poster": "tmdb_1291559.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    10749,
    18
  ],
  "vote_count": 210,
  "popularity": 4.9,
  "runtime": 118,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 42,
  "tmdb": 807,
  "title": "七宗罪",
  "original_title": "Se7en",
  "media_type": "movie",
  "overview": "“暴食”、“贪婪”、“懒惰”、“嫉妒”、“骄傲”、“淫欲”、“愤怒”，这是天主教教义所指的人性七宗罪。城市中发生的连坏杀人案，死者恰好都是犯有这些教义的人。凶手故弄玄虚的作案手法，令资深冷静的警员沙摩塞（摩根•弗里曼 Morgan Freeman 饰）和血气方刚的新扎警员米尔斯（布拉德•皮特 Brad Pitt 饰）都陷入了破案的谜团中。他们去图书馆研读但丁的《神曲》，企图从人间地狱的描绘中找到线",
  "release_date": "1995-09-22",
  "douban": "",
  "poster": "tmdb_807.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    80,
    9648,
    53
  ],
  "vote_count": 23110,
  "popularity": 24.7,
  "runtime": 127,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 43,
  "tmdb": 696374,
  "title": "加百列的地狱",
  "original_title": "Gabriel's Inferno",
  "media_type": "movie",
  "overview": "一个迷人的探索诱惑，禁止的爱，和救赎，一个迷人和激情的故事，一个人从他自己的地狱，因为他试图赢得不可能的宽恕和爱。",
  "release_date": "2020-05-29",
  "douban": "",
  "poster": "tmdb_696374.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    10749,
    18
  ],
  "vote_count": 2469,
  "popularity": 5.6,
  "runtime": 122,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 44,
  "tmdb": 311,
  "title": "美国往事",
  "original_title": "Once Upon a Time in America",
  "media_type": "movie",
  "overview": "　　二十年代的美国，纽约少年“面条”和几个同龄朋友一起认识了聪明狡黠的“麦克斯”，他们开始从事走私活动。不久，面条在一场械斗中杀伤人命，被关进监牢。若干年后，“面条”出狱，当时的小伙伴们已经变成了健壮的青年人，在“麦克斯”的带领下，他们开始了一系列抢劫、盗窃、敲诈活动。随着犯罪活动的不断深入， “麦克斯”似乎被胜利冲昏了头脑，竟然把美国联邦储备银行也列入了行动目标。“面条”不忍眼看好友走向毁灭，偷",
  "release_date": "1984-05-23",
  "douban": "",
  "poster": "tmdb_311.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    80
  ],
  "vote_count": 6045,
  "popularity": 15.0,
  "runtime": 229,
  "languages": [
    "it",
    "yi",
    "fr",
    "he",
    "en"
  ],
  "countries": [
    "IT",
    "US"
  ]
},
  {
  "id": 45,
  "tmdb": 770156,
  "title": "露西·希姆斯和和平王子",
  "original_title": "Lucy Shimmers and the Prince of Peace",
  "media_type": "movie",
  "overview": "假日季节，一位天使帮助一个冷酷的罪犯和一个早熟的小女孩相遇，并改变了他们的内心，从而给予他们第二次机会。",
  "release_date": "2020-10-19",
  "douban": "",
  "poster": "tmdb_770156.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    10751
  ],
  "vote_count": 362,
  "popularity": 10.0,
  "runtime": 87,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 46,
  "tmdb": 423,
  "title": "钢琴家",
  "original_title": "The Pianist",
  "media_type": "movie",
  "overview": "波兰犹太裔天才钢琴家瓦迪斯瓦夫·什皮尔曼逃脱了驱逐，被迫生活在华沙犹太区的中心，亲历苦难、屈辱与挣扎。他设法逃出并藏身于首都的废墟中，一名德国军官向他伸出援手，助他幸存。[焦点影业]",
  "release_date": "2002-09-17",
  "douban": "",
  "poster": "tmdb_423.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    10752
  ],
  "vote_count": 10146,
  "popularity": 12.1,
  "runtime": 150,
  "languages": [
    "ru",
    "en",
    "pl",
    "de"
  ],
  "countries": [
    "PL",
    "DE",
    "GB",
    "FR"
  ]
},
  {
  "id": 47,
  "tmdb": 27205,
  "title": "盗梦空间",
  "original_title": "Inception",
  "media_type": "movie",
  "overview": "道姆·柯布与同事阿瑟和纳什在一次针对日本能源大亨齐藤（渡边谦 饰）的盗梦行动中失败，反被齐藤利用。齐藤威逼利诱因遭通缉而流亡海外的柯布帮他拆分他竞争对手的公司，采取极端措施在其唯一继承人罗伯特·费希尔的深层潜意识中种下放弃家族公司、自立门户的想法。为了重返美国，柯布偷偷求助于岳父迈尔斯，吸收了年轻的梦境设计师艾里阿德妮、梦境演员艾姆斯和药剂师约瑟夫加入行动。在一层层递进的梦境中，柯布不仅要对付费希",
  "release_date": "2010-07-15",
  "douban": "",
  "poster": "tmdb_27205.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    28,
    878,
    12
  ],
  "vote_count": 39318,
  "popularity": 34.3,
  "runtime": 148,
  "languages": [
    "ja",
    "sw",
    "en",
    "fr"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 48,
  "tmdb": 274,
  "title": "沉默的羔羊",
  "original_title": "The Silence of the Lambs",
  "media_type": "movie",
  "overview": "在这部改编自托马斯·哈里斯畅销小说的惊世之作中，技艺超凡的导演乔纳森·戴米以令人毛骨悚然的笔触，勾勒出缠绕美国社会的梦魇，连环谋杀。朱迪·福斯特颠覆性地诠释了联邦调查局见习探员克拉丽丝·史达琳的形象，为洞悉另一名连环杀手的心智，她不得不求助于恶名昭彰的\\",
  "release_date": "1991-02-14",
  "douban": "",
  "poster": "tmdb_274.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    80,
    53,
    18
  ],
  "vote_count": 18004,
  "popularity": 4.7,
  "runtime": 119,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 49,
  "tmdb": 567,
  "title": "后窗",
  "original_title": "Rear Window",
  "media_type": "movie",
  "overview": "一位足不出户的摄影师透过公寓窗户窥见邻居们的隐秘生活，当他断定其中一人犯下谋杀罪行时，一场扣人心弦的观察与博弈就此展开。詹姆斯·斯图尔特与格蕾丝·凯利联袂出演这场由阿尔弗雷德·希区柯克执导的、在有限空间内层层铺陈悬念的影史经典。",
  "release_date": "1954-08-01",
  "douban": "",
  "poster": "tmdb_567.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    53,
    9648,
    18
  ],
  "vote_count": 7166,
  "popularity": 9.5,
  "runtime": 112,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 50,
  "tmdb": 73,
  "title": "美国X档案",
  "original_title": "American History X",
  "media_type": "movie",
  "overview": "德瑞克 的父亲在他很小的时候就被一名黑人毒贩射杀，从此给他幼小的心灵埋下了仇恨的种子。原来德瑞克功课很好，是老师眼中的好学生。但自从父亲遇难后，他就将一切心机都放在了对付有色人种上面。他积极组织起一帮白人青年混混，到处和有色人种对着干。一次，他射杀了两名黑人，因此入狱。入狱后，德瑞克加入了一伙新纳粹的白人。后来，因工作关系他和一名黑人成了好友，他开始反思自己的过去。当他意欲脱离狱中新纳粹组织时，遭",
  "release_date": "1998-07-01",
  "douban": "",
  "poster": "tmdb_73.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18
  ],
  "vote_count": 12585,
  "popularity": 12.4,
  "runtime": 119,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 51,
  "tmdb": 1058694,
  "title": "激进教学",
  "original_title": "Radical",
  "media_type": "movie",
  "overview": "在一个充满忽视、腐败和暴力的墨西哥边境小镇，一名老师决定尝试一种激进的新方法来释放学生的潜力与好奇心，甚至发掘出他们的天才之处。",
  "release_date": "2023-10-19",
  "douban": "",
  "poster": "tmdb_1058694.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18
  ],
  "vote_count": 504,
  "popularity": 5.2,
  "runtime": 122,
  "languages": [
    "es"
  ],
  "countries": [
    "MX",
    "US"
  ]
},
  {
  "id": 52,
  "tmdb": 105,
  "title": "回到未来",
  "original_title": "Back to the Future",
  "media_type": "movie",
  "overview": "马蒂·麦克弗莱，一位典型的八十年代美国青少年，意外被一台由钚动力驱动的德罗宁“时间机器”送回到1955年，这台机器由一位略带疯狂的科学家发明。在这段时常癫狂、总是惊人的穿越之旅中，马蒂必须确保他那正值青春期的未来父母相遇并坠入爱河，他才能顺利返回未来。[官方简介]",
  "release_date": "1985-07-03",
  "douban": "",
  "poster": "tmdb_105.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    12,
    35,
    878
  ],
  "vote_count": 21835,
  "popularity": 21.0,
  "runtime": 116,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 53,
  "tmdb": 207,
  "title": "死亡诗社",
  "original_title": "Dead Poets Society",
  "media_type": "movie",
  "overview": "威尔顿预备学院以其沉稳凝重的教学风格和较高的升学率闻名，作为其毕业班的学生，理想就是升入名校。新学期文学老师约翰·基汀（罗宾·威廉姆斯 饰）的到来如同一阵春风，一反传统名校的严肃刻板...",
  "release_date": "1989-06-02",
  "douban": "",
  "poster": "tmdb_207.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18
  ],
  "vote_count": 12615,
  "popularity": 18.2,
  "runtime": 128,
  "languages": [
    "en",
    "la"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 54,
  "tmdb": 1585,
  "title": "生活多美好",
  "original_title": "It's a Wonderful Life",
  "media_type": "movie",
  "overview": "一位天使被派往人间，帮助一位万念俱灰的商人，向他展现假如他从未存在过，生活将会是怎样的光景。",
  "release_date": "1946-12-20",
  "douban": "",
  "poster": "tmdb_1585.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18,
    10751,
    14
  ],
  "vote_count": 4906,
  "popularity": 8.5,
  "runtime": 131,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 55,
  "tmdb": 3082,
  "title": "摩登时代",
  "original_title": "Modern Times",
  "media_type": "movie",
  "overview": "二十年代的美国处于经济萧条时期，失业率居高不下，工人受尽压榨，成为了大机器生产中的一颗螺丝钉。查理就是一个底层市民，他在一个机器隆隆的厂房里日以继夜地工作，以赚取微薄的收入。重复繁重的工作压得他喘不过气，他把人们的鼻子当成螺丝钉来拧，卷入流水线机器的皮带里，令人苦笑不得。 查理尽管贫穷，但却很善良。他在路上搭救了流浪女，和她一起生活，家里破烂却又温馨。每次身无分文的查理为了找到吃的，都会故意犯事",
  "release_date": "1936-02-05",
  "douban": "",
  "poster": "tmdb_3082.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    35,
    18,
    10749
  ],
  "vote_count": 4083,
  "popularity": 6.6,
  "runtime": 87,
  "languages": [
    "xx"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 56,
  "tmdb": 724089,
  "title": "加百列的地狱：第二部",
  "original_title": "Gabriel's Inferno: Part II",
  "media_type": "movie",
  "overview": "加布里埃尔·爱默生教授终于发现了朱莉娅·米切尔身份的真相，但他的意识到为时已晚。茱莉亚最终希望这位受人尊敬的但丁专家会记住她，并且不想再与他有任何关系。加布里埃尔能在别人的怀抱中找到爱之前赢回她的心吗？",
  "release_date": "2020-07-31",
  "douban": "",
  "poster": "tmdb_724089.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    10749,
    18
  ],
  "vote_count": 1554,
  "popularity": 3.5,
  "runtime": 106,
  "languages": [
    "en"
  ],
  "countries": []
},
  {
  "id": 57,
  "tmdb": 3782,
  "title": "生之欲",
  "original_title": "生きる",
  "media_type": "movie",
  "overview": "黑泽明导演生涯的至高成就之一，本片以极致的悲悯凝视死亡，完成对生命的礼赞。志村乔动人诠释胃癌晚期的老公务员渡边勘治，在生命终点踏上追寻意义的旅程。影片以突破性的双段式结构展开，镜头语言浸润着洞察人性本真的人文主义光辉，从多重维度叩问生存的真谛。",
  "release_date": "1952-10-09",
  "douban": "",
  "poster": "tmdb_3782.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18
  ],
  "vote_count": 1346,
  "popularity": 7.6,
  "runtime": 143,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 58,
  "tmdb": 761053,
  "title": "加百列的地狱：第三部",
  "original_title": "Gabriel's Inferno: Part III",
  "media_type": "movie",
  "overview": "一个黑暗的人带着恶意从茱莉亚的过去回来了。加布里埃尔有他需要分享的秘密，但担心如果他这样做，他会失去一切。他们的关系会经受住秘密揭露的考验吗？他们对但丁和弗洛伦斯的共同热爱会是他们所希望的一切吗？",
  "release_date": "2020-11-19",
  "douban": "",
  "poster": "tmdb_761053.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    10749,
    18
  ],
  "vote_count": 1088,
  "popularity": 7.0,
  "runtime": 122,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 59,
  "tmdb": 42269,
  "title": "我们如此相爱",
  "original_title": "C'eravamo tanto amati",
  "media_type": "movie",
  "overview": "安东尼奥（尼诺·曼弗莱迪 Nino Manfredi 饰）、贾尼（维托里奥·加斯曼 Vittorio Gassman 饰）和尼古拉（Stefano Satta Flores 饰）是战争时代的生死之交。战争结束后，他们回归了家乡，开始了各自迥异的生活。安东尼奥结识了美丽女孩露西安娜（斯蒂芬尼娅·桑德雷莉 Stefania Sandrelli 饰），坠入了情网，可露西安娜喜欢的却偏偏是贾尼。可最终，贾",
  "release_date": "1974-12-21",
  "douban": "",
  "poster": "tmdb_42269.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18,
    35
  ],
  "vote_count": 651,
  "popularity": 4.6,
  "runtime": 124,
  "languages": [
    "it"
  ],
  "countries": [
    "IT"
  ]
},
  {
  "id": 60,
  "tmdb": 644479,
  "title": "献给我的前妻",
  "original_title": "Dedicada A Mi Ex",
  "media_type": "movie",
  "overview": "这部电影讲述了21岁的阿里尔的故事：为筹钱挽回濒临破裂的恋情、与前女友重逢，他决定组建一支摇滚乐队，参加奖金高达一万美元的乐队大赛，这已是他最后的办法，此前，女友因要前往芬兰实习，两人的感情走到了尽头。阿里尔和好友奥尔特加一起举办海选招募乐队其他成员，尽管两人对音乐一窍不通，最终还是组建起一支成员性格迥异、喜好截然不同的乐队。",
  "release_date": "2019-11-01",
  "douban": "",
  "poster": "tmdb_644479.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18,
    35
  ],
  "vote_count": 513,
  "popularity": 4.2,
  "runtime": 94,
  "languages": [
    "es"
  ],
  "countries": [
    "CO",
    "EC",
    "US"
  ]
},
  {
  "id": 61,
  "tmdb": 15804,
  "title": "牯岭街少年杀人事件",
  "original_title": "牯嶺街少年殺人事件",
  "media_type": "movie",
  "overview": "这部由杨德昌执导的台湾电影杰作，被誉为当代影坛最受推崇与渴求的作品之一。影片以六十年代初的台湾为背景，改编自一起震动全岛的真实案件。这部兼具宏大格局与私密情感的巨作，以小说般的笔触与沉静的凝视，聚焦一位少年（张震的银幕首秀）从纯真逐渐无可挽回地滑向犯罪深渊的过程，并交织着躁动青春、摇滚乐与政治动荡的压抑时代底色。",
  "release_date": "1991-07-27",
  "douban": "",
  "poster": "tmdb_15804.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    80,
    18,
    10749
  ],
  "vote_count": 389,
  "popularity": 7.3,
  "runtime": 237,
  "languages": [
    "en",
    "zh"
  ],
  "countries": [
    "TW"
  ]
},
  {
  "id": 62,
  "tmdb": 45139,
  "title": "耶稣传",
  "original_title": "Jesus",
  "media_type": "movie",
  "overview": "　　《耶稣传》是一部根据路加福音而编写的两小时影片。此片被誉为是最准确描述耶稣基督的生平的影片。  　　《耶稣传》计划的目的是要让世界上的每一个人都能够观看以他们本身的语言配音的《耶稣传》影片。无论您是说中文、法文或其他四百多种的语言，您最终都可以透过您本身的语言去认识耶稣。  　　透过《耶稣传》计划及超过八百个基督教团体的合作，全球已有超过十亿一千万人观赏过这部富有震撼力的影片，而大部份人都是藉",
  "release_date": "1979-10-19",
  "douban": "",
  "poster": "tmdb_45139.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18
  ],
  "vote_count": 249,
  "popularity": 1.7,
  "runtime": 117,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 63,
  "tmdb": 101,
  "title": "这个杀手不太冷",
  "original_title": "Léon",
  "media_type": "movie",
  "overview": "里昂是名孤独的职业杀手，受人雇佣。一天，邻居家小姑娘马蒂尔达敲开他的房门，要求在他那里暂避杀身之祸。原来邻居家的主人是警方缉毒组的眼线，只因贪污了一小包毒品而遭恶警杀害全家的惩罚。马蒂尔达得到里昂的留救，幸免于难，并留在里昂那里。里昂教小女孩使枪，她教里昂法文，两人关系日趋亲密，相处融洽。女孩想着去报仇，反倒被抓，里昂及时赶到，将女孩救回。混杂着哀怨情仇的正邪之战渐次升级，更大的冲突在所难免……",
  "release_date": "1994-09-14",
  "douban": "",
  "poster": "tmdb_101.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    80,
    18,
    28
  ],
  "vote_count": 16124,
  "popularity": 18.6,
  "runtime": 133,
  "languages": [
    "en",
    "it",
    "fr"
  ],
  "countries": [
    "FR"
  ]
},
  {
  "id": 64,
  "tmdb": 1355666,
  "title": "卷卷初恋",
  "original_title": "고백의 역사",
  "media_type": "movie",
  "overview": "1998年，19岁的卷发单恋少女朴世莉（申银秀 饰）有了聪明转学生的助攻，下定决心非追到校草不可。",
  "release_date": "2025-08-28",
  "douban": "",
  "poster": "tmdb_1355666.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    10749,
    18,
    35
  ],
  "vote_count": 202,
  "popularity": 6.3,
  "runtime": 121,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 65,
  "tmdb": 268854,
  "title": "细细的黄线",
  "original_title": "La delgada línea amarilla",
  "media_type": "movie",
  "overview": "暂无简介",
  "release_date": "2015-03-06",
  "douban": "",
  "poster": "tmdb_268854.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18
  ],
  "vote_count": 237,
  "popularity": 0.8,
  "runtime": 95,
  "languages": [
    "es"
  ],
  "countries": [
    "MX"
  ]
},
  {
  "id": 66,
  "tmdb": 914,
  "title": "大独裁者",
  "original_title": "The Great Dictator",
  "media_type": "movie",
  "overview": "在其备受争议的杰作中，查理·卓别林既尖刻地讽刺了阿道夫·希特勒，又巧妙地颠覆了自身的喜剧形象。在其首部纯有声片中，卓别林以精湛的肢体表现力分饰两角：残酷而滑稽的“托曼尼亚”独裁者，以及被错认成他的善良犹太理发师。凭借杰克·奥克与宝莲·高黛的精彩配角演绎，这部在美国正式加入二战前便大胆直指法西斯领导人的作品，将政治讽喻与肢体喜剧熔铸成登峰造极的艺术表达，最终在卓别林那段传世的激扬演说中达到高潮。",
  "release_date": "1940-10-15",
  "douban": "",
  "poster": "tmdb_914.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    35,
    10752
  ],
  "vote_count": 3702,
  "popularity": 7.8,
  "runtime": 125,
  "languages": [
    "eo",
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 67,
  "tmdb": 599,
  "title": "日落大道",
  "original_title": "Sunset Boulevard",
  "media_type": "movie",
  "overview": "好莱坞的声名终会消散，只需问问诺玛·戴斯蒙德。她曾是影坛传奇，如今已成被人遗忘的旧时代残影。当穷困潦倒的编剧乔·吉利斯误入她那衰败的宅邸，便陷入了她偏执与妄想的罗网。起初看似机遇的邂逅，很快演变为一场危机四伏的困局。这部作品被广泛认为是好莱坞黄金时代最伟大的影片之一，它以阴郁、扭曲又萦绕人心的视角，凝视着好莱坞的轮回，那里青春是流通货币，才华转瞬即逝，而聚光灯终会黯淡。[派拉蒙影业]",
  "release_date": "1950-08-10",
  "douban": "",
  "poster": "tmdb_599.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18
  ],
  "vote_count": 2936,
  "popularity": 7.7,
  "runtime": 110,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 68,
  "tmdb": 335,
  "title": "西部往事",
  "original_title": "C'era una volta il West",
  "media_type": "movie",
  "overview": "塞尔吉奥·莱昂内的这部不朽史诗，其恢弘堪比取景地纪念碑谷，其气度媲美星光熠熠的杰出演员阵容，其粗粝不羁正如每个孩子想象中的狂野西部。影片围绕一名神秘的口琴客、一位寻找杀父仇人的寡妇、一个亡命之徒以及一名铁路大亨之间错综复杂的关系展开，以恩尼奥·莫里康内传奇般的配乐为灵魂，塑造了影史中最令人难忘的西部片开场与结局。这是一首对正在消逝的旧西部的挽歌，也是一部永远重塑了该类型的杰作。",
  "release_date": "1968-12-21",
  "douban": "",
  "poster": "tmdb_335.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18,
    37
  ],
  "vote_count": 4904,
  "popularity": 12.1,
  "runtime": 166,
  "languages": [
    "en"
  ],
  "countries": [
    "IT",
    "US"
  ]
},
  {
  "id": 69,
  "tmdb": 77338,
  "title": "触不可及",
  "original_title": "Intouchables",
  "media_type": "movie",
  "overview": "因为一次跳伞事故，白人富翁菲利普Philippe（弗朗索瓦·克鲁塞 François Cluzet 饰）瘫痪在床，欲招聘一名全职陪护。由于薪酬高，应聘者云集，个个舌灿莲花，却无法打动他的心。直到黑人德希斯Driss（奥玛·赛 Omar Sy 饰）的出现才让他作出决定。德希斯刚从监狱出来，背负家庭重担，一心只想寻张辞退信以申领救济金，而且他明显对女助理的兴趣要远大于这份工作。但是菲利普还是一眼相中了",
  "release_date": "2011-11-02",
  "douban": "",
  "poster": "tmdb_77338.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18,
    35
  ],
  "vote_count": 18441,
  "popularity": 21.7,
  "runtime": 112,
  "languages": [
    "en",
    "fr"
  ],
  "countries": [
    "FR"
  ]
},
  {
  "id": 70,
  "tmdb": 28,
  "title": "现代启示录",
  "original_title": "Apocalypse Now",
  "media_type": "movie",
  "overview": "越战期间，威拉德上尉受命执行一项危险任务，深入柬埔寨刺杀一位脱离建制的叛变上校，此人已在当地部落自封神明。",
  "release_date": "1979-05-19",
  "douban": "",
  "poster": "tmdb_28.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18,
    10752
  ],
  "vote_count": 9101,
  "popularity": 14.9,
  "runtime": 202,
  "languages": [
    "vi",
    "en",
    "fr",
    "km"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 71,
  "tmdb": 654299,
  "title": "从天而降",
  "original_title": "Como caído del cielo",
  "media_type": "movie",
  "overview": "墨西哥传奇人物佩德罗·因凡特（Pedro Infante）在地球上又获得了一次机会，可以为自己与女性的交往赎罪，并在一个模仿者的身体里赢得天堂.",
  "release_date": "2019-12-24",
  "douban": "",
  "poster": "tmdb_654299.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    35,
    18,
    10402
  ],
  "vote_count": 384,
  "popularity": 3.7,
  "runtime": 112,
  "languages": [
    "es"
  ],
  "countries": [
    "MX",
    "US"
  ]
},
  {
  "id": 72,
  "tmdb": 29259,
  "title": "洞",
  "original_title": "Le Trou",
  "media_type": "movie",
  "overview": "在巴黎的一间牢房里，五名囚犯用尽全部的坚韧与智慧，试图通过精心挖掘的隧道重获自由。根据若泽·乔瓦尼的小说改编，雅克·贝克的这部影片在诗意的人文关怀与紧绷得令人窒息的危险氛围间取得了精妙的平衡。",
  "release_date": "1960-03-18",
  "douban": "",
  "poster": "tmdb_29259.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18,
    53,
    80
  ],
  "vote_count": 573,
  "popularity": 5.8,
  "runtime": 132,
  "languages": [
    "fr"
  ],
  "countries": [
    "IT",
    "FR"
  ]
},
  {
  "id": 73,
  "tmdb": 975,
  "title": "光荣之路",
  "original_title": "Paths of Glory",
  "media_type": "movie",
  "overview": "斯坦利·库布里克执导，堪称影史最具震撼力的反战电影之一。柯克·道格拉斯以炽烈演技诠释第一次世界大战期间一位法国上校的形象，当他的士兵因未能完成不可能的任务而被控怯战时，他毅然与军队高层的冷酷权威展开正面对抗。这部以精湛摄影呈现的沉郁之作，精准剖解了军事机器的荒谬本质与非人性化机制（这一主题将持续贯穿库布里克的创作生涯）。从压抑的战壕对峙到扣人心弦的法庭高潮，直至摧人心魄的结局场景，全片以这位传奇",
  "release_date": "1957-10-25",
  "douban": "",
  "poster": "tmdb_975.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    10752,
    18
  ],
  "vote_count": 3275,
  "popularity": 6.9,
  "runtime": 87,
  "languages": [
    "en",
    "la",
    "de"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 74,
  "tmdb": 637920,
  "title": "七号房的礼物",
  "original_title": "Koğuştaki Mucize",
  "media_type": "movie",
  "overview": "梅莫（阿拉斯·布鲁特·伊涅姆利 Aras Bulut Iynemli 饰）虽然生得人高马大，但却只有相当于6岁孩童一般的智慧，他带着女儿奥瓦（妮莎·索菲亚·阿克松古尔 Nisa Sofiya Aksongur 饰），同奶奶法蒂玛（塞利尔·托扬·乌伊萨尔 Celile Toyon Uysal 饰）生活在一起，日子虽然过得紧巴巴的，但一家人能够团聚就是最大的快乐。  哪知道某日祸从天降，连一只蚂蚁都不",
  "release_date": "2019-10-10",
  "douban": "",
  "poster": "tmdb_637920.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    18
  ],
  "vote_count": 4564,
  "popularity": 8.5,
  "runtime": 132,
  "languages": [
    "tr"
  ],
  "countries": [
    "TR"
  ]
},
  {
  "id": 75,
  "tmdb": 901,
  "title": "城市之光",
  "original_title": "City Lights",
  "media_type": "movie",
  "overview": "这部查理·卓别林最受珍爱的作品，亦是其流浪汉形象的终极篇章。在这部无声影片中，身兼编剧、导演与主演的卓别林达到了悲喜交融的新境界：可爱的流浪汉爱上街头卖花的失明少女（弗吉尼亚·切瑞尔诠释出魔幻般的纯真），却被女孩误认为百万富翁。尽管这部大萧条时期的轰动之作诞生于有声时代来临之后，卓别林仍毅然坚守对默片艺术表现力的热爱。最终成就了他个人艺术的巅峰，亦加冕为默片喜剧的不朽丰碑。",
  "release_date": "1931-02-06",
  "douban": "",
  "poster": "tmdb_901.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    35,
    18,
    10749
  ],
  "vote_count": 2457,
  "popularity": 6.1,
  "runtime": 87,
  "languages": [
    "xx"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 76,
  "tmdb": 603,
  "title": "黑客帝国",
  "original_title": "The Matrix",
  "media_type": "movie",
  "overview": "不久的将来，网络黑客尼奥对这个看似正常的现实世界产生了怀疑。他结识了黑客崔妮蒂，并见到了黑客组织的首领墨菲斯。墨菲斯告诉他，现实世界其实是由一个名叫“母体”的计算机人工智能系统控制，人们就像他们饲养的动物，没有自由和思想，而尼奥就是能够拯救人类的救世主。可是，救赎之路从来都不会一帆风顺，到底哪里才是真实的世界？如何才能打败那些超人一样的特勤？尼奥是不是人类的希望？这是黑客的帝国，程序和代码欢迎大家",
  "release_date": "1999-03-31",
  "douban": "",
  "poster": "tmdb_603.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    28,
    878
  ],
  "vote_count": 27953,
  "popularity": 134.8,
  "runtime": 136,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 77,
  "tmdb": 10376,
  "title": "海上钢琴师",
  "original_title": "La leggenda del pianista sull'oceano",
  "media_type": "movie",
  "overview": "男主角1900（人名）是一个被人遗弃在蒸气船上的孤儿，被船上一位好心的烧炉工收养，然而好人不得好报，烧炉工在一次意外中死亡，只有8岁大的1900又再度成为了孤儿。过人的天赋使他无师自通成了一名钢琴大师，但宿命也令他天然地对红尘俗世深怀戒意，他从不敢离船上岸去，只因纽约无际的高楼和川流不息的人群令他迷失自我。纵使后来遇上了一位一见钟情的少女，他思量再三后，还是放弃了上岸寻找初恋情人的冲动...",
  "release_date": "1998-10-28",
  "douban": "",
  "poster": "tmdb_10376.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    18,
    10402
  ],
  "vote_count": 2449,
  "popularity": 4.9,
  "runtime": 170,
  "languages": [
    "en",
    "it",
    "fr"
  ],
  "countries": [
    "IT"
  ]
},
  {
  "id": 78,
  "tmdb": 630566,
  "title": "云上情歌",
  "original_title": "Clouds",
  "media_type": "movie",
  "overview": "美国男孩扎克·索比赫14岁被诊断患有骨肉瘤(18岁去世)，多次手术和化疗并未遏制癌症发展，在得知自己只剩几个月寿命后，他创作了《云》这首歌，感谢自己身边的人和所经历的一切，乐观面对。",
  "release_date": "2020-10-09",
  "douban": "",
  "poster": "tmdb_630566.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    10402,
    18,
    10749
  ],
  "vote_count": 1053,
  "popularity": 3.3,
  "runtime": 121,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 79,
  "tmdb": 670,
  "title": "老男孩",
  "original_title": "올드보이",
  "media_type": "movie",
  "overview": "女儿生日那天，中年男子吴大修（崔岷植饰）在醉酒回家路上，突遭不明身份的人绑架失踪。就此，他毫无理由地被囚禁在一个神秘的私人监狱中。寻死未果的吴大修，每天看电视，三餐吃煎饺。通过电视，他得知妻子已遭杀害，女儿下落不明，自己更被怀疑为凶手。就此，吴大修开始锻炼身体，决心复仇，并在牢中度过漫长的15年...",
  "release_date": "2003-11-21",
  "douban": "",
  "poster": "tmdb_670.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    18,
    53,
    9648,
    28
  ],
  "vote_count": 9871,
  "popularity": 14.4,
  "runtime": 120,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 80,
  "tmdb": 1356039,
  "title": "边境奇袭",
  "original_title": "Contraataque",
  "media_type": "movie",
  "overview": "一场人质营救行动带来了新的敌人，格雷罗上尉和他的精英士兵们必须应对残忍犯罪团伙的埋伏。",
  "release_date": "2025-02-27",
  "douban": "",
  "poster": "tmdb_1356039.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    28,
    12,
    53
  ],
  "vote_count": 821,
  "popularity": 7.6,
  "runtime": 85,
  "languages": [
    "es"
  ],
  "countries": [
    "MX"
  ]
},
  {
  "id": 81,
  "tmdb": 299536,
  "title": "复仇者联盟3：无限战争",
  "original_title": "Avengers: Infinity War",
  "media_type": "movie",
  "overview": "随着复仇者联盟及其盟友继续保护世界免受来自任何单一英雄难以承担的威胁，一个新的危险从宇宙的阴影中浮现，灭霸。作为一个星际恶名昭彰的暴君，他的目标是收集所有六颗无限宝石，这些宝石拥有难以想象的力量，并利用它们将扭曲的意志强加于现实的每一个角落。复仇者们为此奋斗的一切都指向了这一刻，地球和整个存在的命运从未如此不确定。",
  "release_date": "2018-04-25",
  "douban": "",
  "poster": "tmdb_299536.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    12,
    28,
    878
  ],
  "vote_count": 32045,
  "popularity": 49.7,
  "runtime": 156,
  "languages": [
    "en",
    "xh"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 82,
  "tmdb": 1317149,
  "title": "妥瑞氏与我",
  "original_title": "I Swear",
  "media_type": "movie",
  "overview": "　　本片根据社会活动家约翰·戴维森的真实人生经历改编。讲述他从20世纪80年代英国一名被误解的少年，成长为致力于推动人们理解与接纳妥瑞氏综合症的倡导者的故事。约翰在十五岁时被确诊，在逆境中艰难度过动荡的青春期，一步步走向成年。在他人善意的鼓舞下，他找到了人生真正的意义与方向。 　　（妥瑞氏综合症表现为：不受控制地抽动身体或口吐恶言）",
  "release_date": "2025-09-22",
  "douban": "",
  "poster": "tmdb_1317149.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    18,
    36
  ],
  "vote_count": 328,
  "popularity": 14.7,
  "runtime": 121,
  "languages": [
    "en"
  ],
  "countries": [
    "IE",
    "GB"
  ]
},
  {
  "id": 83,
  "tmdb": 98,
  "title": "角斗士",
  "original_title": "Gladiator",
  "media_type": "movie",
  "overview": "马克西蒙斯是罗马帝国战功显赫，受人拥戴的大将军。老国王马库斯·奥利利乌斯对大将军赏识有加，有意加冕于他。老国王对将军这种超越亲情的宠爱自然招来太子康莫迪乌斯的妒忌与不安，太子伺机杀害父亲，抢先登上王位，并马上下令诛杀大将军一家。马克西蒙斯死里逃生躲过暴君的魔爪，可是他所有的家人都未能幸免于难，返回家园，他只看到满目疮痍的破败景象。走投无路的马克西蒙斯只能投身为奴，从昔日的大将军沦为一名角斗士，在血",
  "release_date": "2000-05-04",
  "douban": "",
  "poster": "tmdb_98.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    28,
    18,
    12
  ],
  "vote_count": 20912,
  "popularity": 21.4,
  "runtime": 155,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 84,
  "tmdb": 447362,
  "title": "一年中的生活",
  "original_title": "Life in a Year",
  "media_type": "movie",
  "overview": "泰伦斯·霍华德(《嘻哈帝国》)确认加盟加盟新片[一年中的生活](Life In A Year，暂译)。该片将由Mitja Okorn执导，讲述一个17岁的男孩，在发现患有癌症的女朋友只剩下一年的生命后，决定在她还没离去的这一年给她一个完整的人生。贾登·史密斯、卡拉·迪瓦伊加盟主演，泰伦斯饰贾登的父亲。",
  "release_date": "2020-11-27",
  "douban": "",
  "poster": "tmdb_447362.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    18,
    10749
  ],
  "vote_count": 1978,
  "popularity": 3.7,
  "runtime": 107,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 85,
  "tmdb": 857,
  "title": "拯救大兵瑞恩",
  "original_title": "Saving Private Ryan",
  "media_type": "movie",
  "overview": "成功登陆诺曼底后，约翰·米勒上尉带领一队士兵深入敌后，寻找一名三个兄弟均已阵亡的伞兵。",
  "release_date": "1998-07-24",
  "douban": "",
  "poster": "tmdb_857.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    10752,
    18,
    36
  ],
  "vote_count": 17257,
  "popularity": 17.9,
  "runtime": 169,
  "languages": [
    "cs",
    "en",
    "fr",
    "de"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 86,
  "tmdb": 490132,
  "title": "绿皮书",
  "original_title": "Green Book",
  "media_type": "movie",
  "overview": "托尼（维果·莫腾森 Viggo Mortensen 饰）是一个吊儿郎当游手好闲的混混，在一家夜总会做侍者。这间夜总会因故要停业几个月，可托尼所要支付的房租和生活费不会因此取消，所以他的当务之急是去寻找另一份工作来填补这几个月的空缺。在这个节骨眼上，一位名叫唐雪莉（马赫沙拉·阿里 Mahershala Ali 饰）的黑人钢琴家提出雇佣托尼。唐雪莉即将开始为期八个星期的南下巡回演出，可是，那个时候南方",
  "release_date": "2018-11-16",
  "douban": "",
  "poster": "tmdb_490132.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    18,
    35,
    36
  ],
  "vote_count": 12879,
  "popularity": 10.0,
  "runtime": 130,
  "languages": [
    "ru",
    "en",
    "it"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 87,
  "tmdb": 34528,
  "title": "人间的条件(III-IV)",
  "original_title": "人間の條件　第３部望郷篇／第４部戦雲篇",
  "media_type": "movie",
  "overview": "时值隆冬，梶被派到北满洲守备队。连日强行训练已经筋疲力尽，还得忍受老兵的作弄。但是无论从体力还是射击技巧上都是数一数二的，立刻成了队里的重要士兵，他还站在袒护小士兵的立场上。梶保护的朋友们又因哥哥是左翼思想犯，自己也被当作赤色分子的新城一等兵。又因妻子来信骂他是家庭的愚痴而动摇被老兵痛斥的小原二等兵。还有40岁被征来的老兵。梶帮助新城逃往苏联，小原在厕所中自杀。梶的妻子不远万里来部队见梶。两人得到",
  "release_date": "1959-11-20",
  "douban": "",
  "poster": "tmdb_34528.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    10752,
    18,
    36
  ],
  "vote_count": 218,
  "popularity": 1.7,
  "runtime": 178,
  "languages": [
    "ru",
    "ja",
    "zh"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 88,
  "tmdb": 2405,
  "title": "约瑟",
  "original_title": "Joseph",
  "media_type": "movie",
  "overview": "约瑟的圣经故事，他被他的兄弟们卖为奴隶，他们嫉妒他分析梦的预言能力以及他是他们父亲的最爱。",
  "release_date": "1995-04-10",
  "douban": "",
  "poster": "tmdb_2405.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    12,
    18,
    10770
  ],
  "vote_count": 225,
  "popularity": 3.3,
  "runtime": 185,
  "languages": [
    "en"
  ],
  "countries": [
    "IT",
    "DE",
    "US"
  ]
},
  {
  "id": 89,
  "tmdb": 16869,
  "title": "无耻混蛋",
  "original_title": "Inglourious Basterds",
  "media_type": "movie",
  "overview": "故事分五章进行。二战中德占法国，德军上校汉斯（克里斯托弗·瓦尔兹 Christoph Waltz 饰）号称“犹太猎人”，在一次屠犹行动中，少女苏珊娜（梅勒尼·劳伦特 Mélanie Laurent 饰）侥幸逃脱。与此同时，八名美国犹太士兵在中尉奥尔多（布拉德·皮特 饰） 的带领下潜入德占法国刺杀德国军人，其行动神出鬼没，手法残忍，对德军造成相当威胁，被称为“杂种”。三年后苏珊娜来到巴黎继承了姑母的",
  "release_date": "2009-08-02",
  "douban": "",
  "poster": "tmdb_16869.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    18,
    53,
    10752
  ],
  "vote_count": 24198,
  "popularity": 17.5,
  "runtime": 153,
  "languages": [
    "en",
    "it",
    "fr",
    "de"
  ],
  "countries": [
    "DE",
    "US"
  ]
},
  {
  "id": 90,
  "tmdb": 24188,
  "title": "安逸人生",
  "original_title": "Il sorpasso",
  "media_type": "movie",
  "overview": "1962年的夏天，罗伯托和布鲁诺结伴去托斯卡纳地区游玩，这两人的性格年龄都大相径庭。罗伯托是个羞涩内向的学生，而布鲁诺则是个精力旺盛、反复无常的中年人。在旅途中两人慢慢熟悉了解，布鲁诺成功人士和上流社会的派头让罗伯托心生艳羡，但同时他也看到了布鲁诺空虚、肤浅和不快乐的另一面。",
  "release_date": "1962-12-05",
  "douban": "",
  "poster": "tmdb_24188.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    18,
    35,
    12
  ],
  "vote_count": 840,
  "popularity": 2.0,
  "runtime": 105,
  "languages": [
    "it",
    "la",
    "de"
  ],
  "countries": [
    "IT"
  ]
},
  {
  "id": 91,
  "tmdb": 527641,
  "title": "五尺天涯",
  "original_title": "Five Feet Apart",
  "media_type": "movie",
  "overview": "17岁女孩Stella和男孩Will身患囊肿性纤维化疾病，他们在医院治疗的过程中相识相爱，两人必须抓紧每分每秒活着的时间。他们的爱情能够战胜疾病和死亡吗？",
  "release_date": "2019-03-14",
  "douban": "",
  "poster": "tmdb_527641.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    10749,
    18
  ],
  "vote_count": 5915,
  "popularity": 6.5,
  "runtime": 116,
  "languages": [
    "es",
    "en",
    "fr"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 92,
  "tmdb": 25237,
  "title": "自己去看",
  "original_title": "Иди и смотри",
  "media_type": "movie",
  "overview": "这是一部很特殊的战争题材电影，它真实地描写了德占区人民的悲惨遭遇和场面，以及人们面对突如其来的灾难的恐惧，反映了战争的真实面目。它既不同于《斯大林格勒保卫战》、《攻占柏林》这些正面战场的血肉横飞、排山倒海、摧枯拉朽，也不同与《这里的黎明静悄悄》、《星》所描写的局部战斗中体现的平凡悲壮，更不是战地浪漫曲，而是降临在平民百姓头上血淋淋的残酷。影片的事件和恐怖场面远超过任何一部描写德军集中营的电影，令人",
  "release_date": "1985-10-17",
  "douban": "",
  "poster": "tmdb_25237.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    18,
    10752
  ],
  "vote_count": 1848,
  "popularity": 6.2,
  "runtime": 136,
  "languages": [
    "ru",
    "be",
    "de"
  ],
  "countries": [
    "SU"
  ]
},
  {
  "id": 93,
  "tmdb": 16672,
  "title": "砂之女",
  "original_title": "砂の女",
  "media_type": "movie",
  "overview": "　　一个昆虫学家（冈田英次 饰）在沙漠做野外考察，却不慎错过归程班车，被困在一个沙漠中的小村子里。他落脚在一个寡妇（岸田今日子 饰）家，被招待之后发现通往外界的路已经被封住。他慢慢观察村子的各种古怪，比如全部村民每到夜晚都要出动铲沙，以免居住的房屋被沙子埋掉，所有的水都受到管制，实行配给制使用等。收留他的寡妇开始用身体诱惑他，试图和他重组一个家庭，他几次三番尝试逃走都以失败告终，只好表面上虚与委蛇",
  "release_date": "1964-02-15",
  "douban": "",
  "poster": "tmdb_16672.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    18,
    53
  ],
  "vote_count": 516,
  "popularity": 3.3,
  "runtime": 123,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 94,
  "tmdb": 1124,
  "title": "致命魔术",
  "original_title": "The Prestige",
  "media_type": "movie",
  "overview": "19世纪末，人们对科学文明的认知还不太清楚，于是，安吉尔和伯登凭借魔术，成为了伦敦城内的神奇人物。安吉尔出身贵族，魔术手段华丽丰富，是富人圈子里的表演常客。而伯登即使出身平平，争强好胜的心智和充满创造力的魔术技巧，却也令他有了名气。两人自小便是要好的伙伴，然而，现在魔术界二人各有领地，并且都有野心想成为顶级魔术师，一番明争暗斗如箭在弦上。伯登掌握了精彩的分身术，叫座又叫好。而安吉尔见情势不妙，搬来",
  "release_date": "2006-10-19",
  "douban": "",
  "poster": "tmdb_1124.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    18,
    9648,
    878
  ],
  "vote_count": 17601,
  "popularity": 12.0,
  "runtime": 130,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 95,
  "tmdb": 11,
  "title": "星球大战4：新希望",
  "original_title": "Star Wars",
  "media_type": "movie",
  "overview": "很久以前，在一个遥远的银河系……莱娅公主被邪恶的帝国势力挟为人质，企图镇压反抗银河帝国的起义军。卢克·天行者与汉·索罗船长携手可爱的机器人搭档R2-D2和C-3PO，共同踏上拯救美丽公主、恢复银河系正义的征程。[20世纪福克斯]",
  "release_date": "1977-05-25",
  "douban": "",
  "poster": "tmdb_11.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    12,
    28,
    878
  ],
  "vote_count": 22361,
  "popularity": 27.0,
  "runtime": 121,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 96,
  "tmdb": 37257,
  "title": "控方证人",
  "original_title": "Witness for the Prosecution",
  "media_type": "movie",
  "overview": "本片改编自阿加莎·克里斯蒂同名小说。  伦敦著名刑案辩护律师韦菲爵士接受了心脏病治疗，但是身体依旧虚弱，第一天回家休养，护士一直严厉监督他服药，并杜绝烟酒。管家为了便于上楼，还专门为他修了电梯。但是，种种关心照顾，对于这位桀骜不驯、牙尖嘴利的大律师根本不起作用，反倒是一纸诉状令他倍感兴奋。律师梅休和当事人沃尔登门拜访，请他出山打官司。原来，沃尔结识了富婆，两人相见甚欢，虽然仆人对他发明的打蛋器充满",
  "release_date": "1957-12-17",
  "douban": "",
  "poster": "tmdb_37257.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    18,
    9648,
    80
  ],
  "vote_count": 1695,
  "popularity": 6.0,
  "runtime": 116,
  "languages": [
    "en",
    "de"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 97,
  "tmdb": 694,
  "title": "闪灵",
  "original_title": "The Shining",
  "media_type": "movie",
  "overview": "杰克是一个作家。一个冬天，他得到了一个看管山顶酒店的差事。这正合杰克的意思，他正好可以有一个幽静的地方写作。于是杰克带着妻儿搬进了酒店。冬天大雪封路，山顶酒店只有杰克一家三口。从他们一搬进来，杰克的妻子温蒂就发现这里气氛诡异，杰克的儿子丹尼经常看到一些他不认识的人，但这里除了他们一家别无他人。而杰克除了一整天闷头写作外，脾气亦变得越来越古怪。直到有一天，温蒂发现丈夫这些天来一直写就只有一句话：杰克",
  "release_date": "1980-05-23",
  "douban": "",
  "poster": "tmdb_694.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    27,
    53
  ],
  "vote_count": 18935,
  "popularity": 19.9,
  "runtime": 119,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 98,
  "tmdb": 299534,
  "title": "复仇者联盟4：终局之战",
  "original_title": "Avengers: Endgame",
  "media_type": "movie",
  "overview": "几近绝望的复仇者们在惊奇队长的帮助下找到灭霸归隐之处，却得知六颗无限宝石均被销毁，希望彻底破灭。五年后，迷失在量子领域的蚁人意外回到现实世界，他的出现为幸存的复仇者们点燃了希望。与美国队长冰释前嫌的托尼找到了穿越时空的方法，星散各地的超级英雄再度集结，他们将分别穿越不同的时代去搜集无限宝石。与此同此，平行宇宙的灭霸察觉了他们的计划。这是一场注定要载入史册的终局之战，超级英雄们为了心中恪守的信念前仆",
  "release_date": "2019-04-24",
  "douban": "",
  "poster": "tmdb_299534.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    12,
    878,
    28
  ],
  "vote_count": 27787,
  "popularity": 30.3,
  "runtime": 181,
  "languages": [
    "ja",
    "en",
    "xh"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 101,
  "tmdb": 273240,
  "title": "校园之外",
  "original_title": "Off Campus",
  "media_type": "tv",
  "overview": "为了赢得心上人的心，汉娜·威尔斯主动为冰球队队长加雷特·格雷厄姆辅导功课。随着两人面对各自的过往，这场最初各取所需的交易，渐渐萌生了真情。他们的朋友洛根、迪恩、塔克和艾莉也都在大学生活与爱情中摸索前行。",
  "release_date": "2026-05-13",
  "douban": "",
  "poster": "tmdb_273240.jpg",
  "vote_average": 9.2,
  "genre_ids": [
    18
  ],
  "vote_count": 383,
  "popularity": 549.4,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 102,
  "tmdb": 1396,
  "title": "绝命毒师",
  "original_title": "Breaking Bad",
  "media_type": "tv",
  "overview": "新墨西哥州的高中化学老师沃尔特·H·怀特是拮据家庭的唯一经济来源。他大半生安分守己，兢兢业业，却在50岁生日之际突然得知自己罹患肺癌晚期的噩耗，原本便不甚顺意的人生顿时雪上加霜。为了保障怀孕的妻子斯凯勒和残疾的儿子小沃特能在自己死后衣食无忧，沃尔特决意铤而走险。他主动找到曾经的学生、而今的毒贩小混混杰西·平克曼谈合作，并运用娴熟高超的化学技术提炼出高纯度冰毒交给后者贩售。孰料事态的发展却在平克曼带",
  "release_date": "2008-01-20",
  "douban": "",
  "poster": "tmdb_1396.jpg",
  "vote_average": 8.9,
  "genre_ids": [
    18,
    80
  ],
  "vote_count": 17864,
  "popularity": 198.0,
  "runtime": 0,
  "languages": [
    "en",
    "es",
    "de"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 103,
  "tmdb": 64010,
  "title": "请回答1988",
  "original_title": "응답하라 1988",
  "media_type": "tv",
  "overview": "故事以1988年汉城（今首尔）奥运会为故事背景，讲述住在首尔市道峰区双门洞的五个家庭的故事，这五个家庭的孩子中，都生于1971年的德善、善宇、东龙、崔泽、正焕，是从小一起长大的好朋友，1988年正处于他们18岁的青春年华，他们有共同的兴趣，还有共同崇拜的偶像，在这五个男女中也有暧昧的男女情愫，在那个纯真的年代，他们共谱了许多美好的记忆。",
  "release_date": "2015-11-06",
  "douban": "",
  "poster": "tmdb_64010.jpg",
  "vote_average": 8.8,
  "genre_ids": [
    35
  ],
  "vote_count": 212,
  "popularity": 19.2,
  "runtime": 90,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 104,
  "tmdb": 85077,
  "title": "拣选",
  "original_title": "The Chosen",
  "media_type": "tv",
  "overview": "　　拣选是第一部关于基督生平的多季电视连续剧，通过他影响的人的眼睛见证。",
  "release_date": "2019-04-21",
  "douban": "",
  "poster": "tmdb_85077.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    10759,
    10751,
    18
  ],
  "vote_count": 881,
  "popularity": 42.6,
  "runtime": 60,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 105,
  "tmdb": 219246,
  "title": "苦尽柑来遇见你",
  "original_title": "폭싹 속았수다",
  "media_type": "tv",
  "overview": "1950年代在济州岛出生的叛逆文学少女吴爱纯（李知恩 饰），自幼丧父，海女妈妈改嫁后为了养育女儿、家庭，就算肺和呼吸道不好，也还是天天下海，承担整个家庭的重担，妈妈还没等到爱纯为她买珍珠项链，就去世了。吴爱纯被寄养在重男轻女的叔叔家受尽苛待。后来她与青梅竹马梁宽植（朴宝剑 饰）相爱，被世俗的偏见阻挠，两人私奔又被现实毒打，婚后还面临婆家的刁难和经济困窘。但相爱的二人相互扶持，努力生活，最终让女儿走",
  "release_date": "2025-03-07",
  "douban": "",
  "poster": "tmdb_219246.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    18
  ],
  "vote_count": 530,
  "popularity": 30.9,
  "runtime": 0,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 106,
  "tmdb": 301507,
  "title": "巅峰对决",
  "original_title": "Heated Rivalry",
  "media_type": "tv",
  "overview": "该剧以职业冰球联赛为背景，改编自Rachel Reid的同名小说，讲述了肖恩·霍兰德与伊利亚·罗扎诺夫长达八年的复杂关系；两人自17岁相识后，在赛场屡次交锋对抗，私下却因隐秘情愫陷入纠结，最终不得不在竞技荣耀与禁忌情感间作出抉择的故事。",
  "release_date": "2025-11-28",
  "douban": "",
  "poster": "tmdb_301507.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    18
  ],
  "vote_count": 490,
  "popularity": 22.7,
  "runtime": 0,
  "languages": [
    "ru",
    "en"
  ],
  "countries": [
    "CA"
  ]
},
  {
  "id": 107,
  "tmdb": 87108,
  "title": "切尔诺贝利",
  "original_title": "Chernobyl",
  "media_type": "tv",
  "overview": "剧中将会描述当时究竟发生了甚么引致这事故，而且当年勇敢的众人是如何牺牲自己拯救处于灾难中的欧洲",
  "release_date": "2019-05-06",
  "douban": "",
  "poster": "tmdb_87108.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    18
  ],
  "vote_count": 7903,
  "popularity": 28.0,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 108,
  "tmdb": 60059,
  "title": "风骚律师",
  "original_title": "Better Call Saul",
  "media_type": "tv",
  "overview": "名不见经传的律师吉米·麦吉尔是如何转变成备受道德谴责的大律师索尔·古德曼的？",
  "release_date": "2015-02-08",
  "douban": "",
  "poster": "tmdb_60059.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    80,
    18
  ],
  "vote_count": 6510,
  "popularity": 116.3,
  "runtime": 0,
  "languages": [
    "en",
    "es",
    "de"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 109,
  "tmdb": 250307,
  "title": "匹兹堡医护前线",
  "original_title": "The Pitt",
  "media_type": "tv",
  "overview": "　　讲述匹兹堡一家医院的医护人员日常应对个人危机、职场政治和危重病人的情志护理等情况，检视当今美国医疗工作者所面临的挑战，揭示他们肩负崇高使命所需的韧性。",
  "release_date": "2025-01-09",
  "douban": "",
  "poster": "tmdb_250307.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    18
  ],
  "vote_count": 766,
  "popularity": 61.3,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 110,
  "tmdb": 200709,
  "title": "弱小英雄",
  "original_title": "약한영웅",
  "media_type": "tv",
  "overview": "在意想不到的朋友的帮助下，一名富有天赋却内向的学生对抗霸凌者和暴力的敌人，却不知他的世界将会变得多么危险。",
  "release_date": "2022-11-18",
  "douban": "",
  "poster": "tmdb_200709.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    10759,
    18
  ],
  "vote_count": 440,
  "popularity": 74.5,
  "runtime": 84,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 111,
  "tmdb": 1398,
  "title": "黑道家族",
  "original_title": "The Sopranos",
  "media_type": "tv",
  "overview": "本剧呈现黑手党生活、美国家庭、意裔美国人社群、暴力支配的世界与道德的灰色地带。由詹姆士·甘多费尼（James Gandolfini）、萝兰·布雷柯（Lorraine Bracco）、艾迪·法柯（Edie Falco）及麦克·英普雷欧里（Michael Imperioli）领衔主演。剧情的主线围绕在东尼·沙普蓝诺（甘多费尼饰）的家庭与自己所领导的犯罪组织的各式矛盾与冲突。 ",
  "release_date": "1999-01-10",
  "douban": "",
  "poster": "tmdb_1398.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    80,
    18
  ],
  "vote_count": 3469,
  "popularity": 90.8,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 112,
  "tmdb": 70785,
  "title": "小小安妮",
  "original_title": "Anne with an E",
  "media_type": "tv",
  "overview": "　　改编自著名经典小说，故事描述一个小女孩，如何排除万难和种种考验，为自己争取关爱、认同和专属的一席之地。故事发生于 19世纪后期，孤女安妮（艾米贝丝·麦克纳尔蒂 Amybeth McNulty 饰）经历了在孤儿院和陌生人家中饱受虐待的童年后，意外被安排到爱德华王子岛上一对姐弟的家中生活。随著时间流逝，年仅13岁的安妮凭著她的独特魄力、智慧和丰富的想像力，为玛莉拉·卡斯柏特（杰拉丁妮·詹姆斯 Ge",
  "release_date": "2017-03-19",
  "douban": "",
  "poster": "tmdb_70785.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    18,
    10751
  ],
  "vote_count": 4930,
  "popularity": 20.6,
  "runtime": 47,
  "languages": [
    "pt",
    "en"
  ],
  "countries": [
    "CA"
  ]
},
  {
  "id": 113,
  "tmdb": 234763,
  "title": "男孩的誓言",
  "original_title": "Слово пацана. Кровь на асфальте",
  "media_type": "tv",
  "overview": "　　改革已经从克里姆林宫的看台走到了城镇的街头。苏联正在我们眼前消亡，伴随着变革的前兆，言论自由、音乐自由、价格自由、良心自由出现了，近乎无法无天。在父母为生存而战的同时，被大家遗弃的孩子们流落街头，成群结队地 \\",
  "release_date": "2023-11-09",
  "douban": "",
  "poster": "tmdb_234763.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    18,
    80
  ],
  "vote_count": 213,
  "popularity": 5.6,
  "runtime": 52,
  "languages": [
    "ru",
    "tt"
  ],
  "countries": [
    "RU"
  ]
},
  {
  "id": 114,
  "tmdb": 72637,
  "title": "逐梦绿茵场",
  "original_title": "O11CE",
  "media_type": "tv",
  "overview": "剧集讲述了热爱足球，与祖母住在干白杨小镇的少年加博·莫雷蒂（马里亚诺·冈萨雷斯饰）的故事。著名的体育学院（IAD）的主教练弗朗西斯科（尼古拉斯·保罗斯饰）注意到了他出色的球技，并决定给他颁发奖学金。加博开始了前往布宜诺斯艾利斯，住进IAD宿舍的冒险之旅。他的梦想是成为一名伟大的足球运动员，但他不知道的是，在这期间，命运将会让他发现自己的家庭秘密。",
  "release_date": "2017-06-19",
  "douban": "",
  "poster": "tmdb_72637.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    35,
    10751,
    10766
  ],
  "vote_count": 1528,
  "popularity": 14.4,
  "runtime": 0,
  "languages": [
    "es"
  ],
  "countries": [
    "AR"
  ]
},
  {
  "id": 115,
  "tmdb": 1438,
  "title": "火线",
  "original_title": "The Wire",
  "media_type": "tv",
  "overview": "巴尔的摩的毒品集中地，巴克斯戴尔贩毒集团被卷入一宗谋杀案中，吉米·麦克纳提受命组织一个由杀人犯和贩毒者组成的团队，来对付毒品头子阿文。阿文有一群忠心耿耿的拥护者，而且眼线众多。得到密报后，他们一方面装作与政府合作，另一方面暗中与对手奥尔玛较劲，奥尔玛曾经抢夺过阿文的毒品，并转手倒卖。调查监督员德里克·丹尼尔斯此时正面临因受贿被调查的麻烦。",
  "release_date": "2002-06-02",
  "douban": "",
  "poster": "tmdb_1438.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    80,
    18
  ],
  "vote_count": 2682,
  "popularity": 58.1,
  "runtime": 0,
  "languages": [
    "en",
    "zh",
    "el",
    "es"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 116,
  "tmdb": 77696,
  "title": "奔跑吧，防弹！",
  "original_title": "달려라 방탄!",
  "media_type": "tv",
  "overview": "《Run BTS!》（《奔跑吧，防弹！》）是一档由防弹少年团（BTS）全员出演的网络综艺节目，目前会不定期在Weverse和YouTube平台免费播出，此前曾在V LIVE平台每周更新并免费供观众观看。",
  "release_date": "2015-08-01",
  "douban": "",
  "poster": "tmdb_77696.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    10764
  ],
  "vote_count": 374,
  "popularity": 7.6,
  "runtime": 30,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 117,
  "tmdb": 67915,
  "title": "孤单又灿烂的神：鬼怪",
  "original_title": "쓸쓸하고 찬란하神-도깨비",
  "media_type": "tv",
  "overview": "高丽时期的大将军金侁（孔刘饰）因为受到王的猜忌而遇害，死后获得了诅咒般的能力，“永生”和强大的能力。拥有不死之身的“鬼怪”金侁，为了结束自己无限循环的生活必需找到一位人类新娘，却在寻找途中阴差阳错与失去记忆的阴间使者王黎（李栋旭饰）开始了奇妙“同居”生活，两人在遇到了传说中的“鬼怪新娘”。一个“命中注定要死”的少女池恩倬（金高银饰）之后，充满浪漫奇幻的故事就此拉来序幕。",
  "release_date": "2016-12-02",
  "douban": "",
  "poster": "tmdb_67915.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    18,
    10765,
    35
  ],
  "vote_count": 3078,
  "popularity": 15.5,
  "runtime": 77,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 118,
  "tmdb": 62914,
  "title": "校园哲学家",
  "original_title": "Merlí",
  "media_type": "tv",
  "overview": "故事主角是中年失业、带着儿子投奔老母亲的哲学老师梅利（Merlí）。他性格古怪、自私、毒舌，甚至有点好色，但他走进教室的那一刻，他就是亚里士多德转世。他把他的学生们称为“逍遥学派（Peripatetics）”，每一集都以一位哲学家命名（如：苏格拉底、尼采、叔本华等）。\\\\n\\\\n梅利不教学生怎么考试，他教学生怎么**“反叛”**。他鼓励 Pol（就是衍生剧男主）去面对家庭的贫穷，鼓励他的儿子 Brun",
  "release_date": "2015-09-14",
  "douban": "",
  "poster": "tmdb_62914.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    35,
    18
  ],
  "vote_count": 1172,
  "popularity": 12.7,
  "runtime": 40,
  "languages": [
    "ca",
    "es"
  ],
  "countries": [
    "ES"
  ]
},
  {
  "id": 119,
  "tmdb": 4613,
  "title": "兄弟连",
  "original_title": "Band of Brothers",
  "media_type": "tv",
  "overview": "第二次世界大战接近尾声，同时也到了战况最为惨烈的时节。德国纳粹节节败退，同盟国决定在欧洲开辟第二战场，而法国北部的诺曼底则成为新局开端的要冲所在。1944年6月6日，美国101空降师506团E连奉命空降这个枪火密集的海滩。E连有一群热血贲张、爱国向上的青年组成，严酷的训练让他们成为美军中的精英和骨干。在温斯特中尉的指挥下，战士们克服了各种不利因素，出色完成了登陆之战。在此之后，高密集度的战斗拉开了",
  "release_date": "2001-09-09",
  "douban": "",
  "poster": "tmdb_4613.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    18,
    10768
  ],
  "vote_count": 4185,
  "popularity": 25.6,
  "runtime": 0,
  "languages": [
    "fr",
    "en",
    "lt",
    "nl",
    "de"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 120,
  "tmdb": 3498,
  "title": "少年魔法师",
  "original_title": "Wizards of Waverly Place",
  "media_type": "tv",
  "overview": "该影集描述居于纽约市曼哈顿格林威治村威佛利街的一个表面是经营三明治专卖店，但其实是巫师的“鲁索家庭”。鲁索家的三名青少年兄妹必须受身为家庭前任巫师的父亲训练学习巫术，在魔法之路上竞逐争取继承家族法力的权力，同时要向外界隐藏巫术秘密，以及生活中因魔法带来趣味经历。",
  "release_date": "2007-10-12",
  "douban": "",
  "poster": "tmdb_3498.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    35,
    10765,
    10762
  ],
  "vote_count": 1177,
  "popularity": 24.1,
  "runtime": 23,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 121,
  "tmdb": 21650,
  "title": "我的摇滚乐队",
  "original_title": "I'm in the Band",
  "media_type": "tv",
  "overview": "　　当特里普·坎贝尔赢得一场电台比赛，与他最喜欢的乐队“铁鼬鼠”见面时，他获得了一个新吉他手的位置。不幸的是，当乐队搬进特里普家时，事情发生了意想不到的变化。",
  "release_date": "2009-11-27",
  "douban": "",
  "poster": "tmdb_21650.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    35
  ],
  "vote_count": 276,
  "popularity": 3.3,
  "runtime": 22,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 122,
  "tmdb": 36189,
  "title": "幕后花絮",
  "original_title": "Boris",
  "media_type": "tv",
  "overview": "10多年过去了，《幕后花絮》原班人马华丽转身，放弃电视剧，拥抱当下炙手可热的网剧。所有人负责制作新剧《耶稣传》，其中斯坦尼斯同时担任主演和制片人。最新引入的严苛的平台规则及其背后神秘的算法给剧组带来了诸多挑战。",
  "release_date": "2007-04-16",
  "douban": "",
  "poster": "tmdb_36189.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    35
  ],
  "vote_count": 243,
  "popularity": 5.4,
  "runtime": 30,
  "languages": [
    "it"
  ],
  "countries": [
    "IT"
  ]
},
  {
  "id": 123,
  "tmdb": 280945,
  "title": "暴君的厨师",
  "original_title": "폭군의 셰프",
  "media_type": "tv",
  "overview": "手艺精湛的主厨穿越时空来到朝鲜时代，遇见了一位专横的君王。她的现代料理掳获了他的味蕾，不过各种宫廷挑战正在等着她。",
  "release_date": "2025-08-23",
  "douban": "",
  "poster": "tmdb_280945.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    18,
    10765
  ],
  "vote_count": 238,
  "popularity": 10.2,
  "runtime": 80,
  "languages": [
    "zh",
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 124,
  "tmdb": 119464,
  "title": "如蝶翩翩",
  "original_title": "나빌레라",
  "media_type": "tv",
  "overview": "为了实现芭蕾梦，怀揣梦想的 70 岁老人和拥有天赋的 23 岁的年轻人相互扶持，共同面对残酷现实和追梦路上的挑战。",
  "release_date": "2021-03-22",
  "douban": "",
  "poster": "tmdb_119464.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    18
  ],
  "vote_count": 204,
  "popularity": 3.3,
  "runtime": 63,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 125,
  "tmdb": 43,
  "title": "31分钟",
  "original_title": "31 Minutos",
  "media_type": "tv",
  "overview": "一档只有木偶参与的“新闻节目”。该节目的时长为 31 分钟，其中包括“绿色音符”环节、访谈、音乐排行榜以及为儿童和成人准备的诸多精彩内容。",
  "release_date": "2003-03-15",
  "douban": "",
  "poster": "tmdb_43.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    35,
    10762,
    10751
  ],
  "vote_count": 376,
  "popularity": 3.1,
  "runtime": 0,
  "languages": [
    "es"
  ],
  "countries": [
    "CL"
  ]
},
  {
  "id": 126,
  "tmdb": 2316,
  "title": "办公室",
  "original_title": "The Office",
  "media_type": "tv",
  "overview": "本剧发生在“Dunder Mifflin”纸业公司一家小小分公司的办公室里，在头脑非常脱线的区域经理迈克尔领导下，一群办公室职员的生活每天充满古怪趣味。吉姆是个诙谐、脑子灵活的恶作剧狂人，整天想出不同点子折腾坐对面的学究型同事杜维特，后者每每气恼不已，也在工作上暗自对吉姆使坏，还视他做升职最大竞争对手；吉姆的恶作剧搭档是前台女孩潘，两人制造出无止境的欢笑，但潘已经有了未婚夫，吉姆对她动心也只能发乎",
  "release_date": "2005-03-24",
  "douban": "",
  "poster": "tmdb_2316.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    35
  ],
  "vote_count": 5210,
  "popularity": 104.6,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 127,
  "tmdb": 46896,
  "title": "初代吸血鬼",
  "original_title": "The Originals",
  "media_type": "tv",
  "overview": "家族凝聚力量。千年前始祖吸血鬼家族相互以此为誓。他们约定生死相随，不离不弃。如今，千年已逝，家族纽带不再牢固。岁月、悲惨经历和对权利的渴求让始祖家族四分五裂。当Klaus Mikaelson，始祖吸血鬼与狼人的混血，收到神秘信息得知一股反抗他暗潮的正在超自然力量涌动的新奥尔良法国区内酝酿成型，于是他回到了这个曾经由他的家族帮助建立的城市。Klaus的探求行为不可避免地导向与他自己曾经邪恶门生Ma",
  "release_date": "2013-10-03",
  "douban": "",
  "poster": "tmdb_46896.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    10765,
    18,
    9648
  ],
  "vote_count": 3583,
  "popularity": 40.6,
  "runtime": 45,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 128,
  "tmdb": 31356,
  "title": "与梦随行",
  "original_title": "Big Time Rush",
  "media_type": "tv",
  "overview": "四位少年好友原本生活在明尼阿波利斯，在肯德尔意外被古怪的唱片高管古斯塔沃·罗克发掘后，他们一同搬到洛杉矶，立志组建一支有望登顶榜单的男子乐队。他们紧紧抓住这千载难逢的机遇，踏上了一段充满欢乐与音乐的精彩旅程，誓要向自己和唱片公司证明，他们对这份全新的演艺事业是无比认真的。",
  "release_date": "2009-11-28",
  "douban": "",
  "poster": "tmdb_31356.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    35,
    10762
  ],
  "vote_count": 1679,
  "popularity": 12.3,
  "runtime": 24,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 129,
  "tmdb": 97186,
  "title": "爱你，维克托",
  "original_title": "Love, Victor",
  "media_type": "tv",
  "overview": "这部剧集以2018年开创性电影《爱你，西蒙》的世界为背景，讲述了溪木高中的新生维克托的自我发现之旅，面对家庭的挑战，适应新的城市和探索他的性取向。当这一切都显得太过沉重时，他向西蒙求援来帮助他渡过高中生活的起伏。",
  "release_date": "2020-06-17",
  "douban": "",
  "poster": "tmdb_97186.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    35,
    18
  ],
  "vote_count": 1642,
  "popularity": 9.6,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 130,
  "tmdb": 1408,
  "title": "豪斯医生",
  "original_title": "House",
  "media_type": "tv",
  "overview": "普林斯顿大学附属医院有一位大名鼎鼎的内科医师，格雷戈·豪斯，他穿着邋遢随便，手拄拐杖，刚愎自用，锋芒毕露，全然没有人们印象中那类谦和严谨的专业医师的影子。可是令人咋舌的外表下却藏着高超医术和丰富学识，令同行和病患佩服得五体投地。豪斯医生治病的手法也独树一帜：他不当面问诊，也绝对不相信病患的道白感受，而完全凭借自己卓越的学识和高超的推理能力解决了诸多疑难杂症。他和团队绽放出耀眼夺目的光芒，创造了一",
  "release_date": "2004-11-16",
  "douban": "",
  "poster": "tmdb_1408.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    18
  ],
  "vote_count": 7592,
  "popularity": 138.2,
  "runtime": 44,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 131,
  "tmdb": 66732,
  "title": "怪奇物语",
  "original_title": "Stranger Things",
  "media_type": "tv",
  "overview": "1983年印第安纳州的霍金斯小镇，男孩威尔·拜尔斯在回家途中离奇失踪。其朋友麦克、达斯汀和卢卡斯在寻找过程中，遇到拥有超能力的女孩Eleven。在调查过程中，众人逐步揭露涉及秘密实验与超自然力量的阴谋。",
  "release_date": "2016-07-15",
  "douban": "",
  "poster": "tmdb_66732.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    10759,
    9648,
    10765
  ],
  "vote_count": 21248,
  "popularity": 139.8,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 132,
  "tmdb": 124834,
  "title": "Heartstopper",
  "original_title": "Heartstopper",
  "media_type": "tv",
  "overview": "男孩与男孩相遇、成为朋友并坠入爱河。性情温和的查理和热爱橄榄球的尼克在中学相遇，两人意外成为朋友，很快这场友谊发展成了一段意想不到的爱情。查理、尼克和朋友们踏上紧密相连的自我发现和接纳之旅，众人相互支持着寻找真正的自我。",
  "release_date": "2022-04-22",
  "douban": "",
  "poster": "tmdb_124834.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    18
  ],
  "vote_count": 1697,
  "popularity": 14.2,
  "runtime": 30,
  "languages": [
    "en"
  ],
  "countries": [
    "GB"
  ]
},
  {
  "id": 133,
  "tmdb": 135157,
  "title": "还魂",
  "original_title": "환혼",
  "media_type": "tv",
  "overview": "附身于盲女的强大女巫遇到一名出身显赫的男子，此人希望她帮助自己改变命运。",
  "release_date": "2022-06-18",
  "douban": "",
  "poster": "tmdb_135157.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    18,
    10765,
    10759,
    9648
  ],
  "vote_count": 776,
  "popularity": 35.4,
  "runtime": 75,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 134,
  "tmdb": 259909,
  "title": "嗜血法医：杀魔复生",
  "original_title": "Dexter: Resurrection",
  "media_type": "tv",
  "overview": "　　德克斯特·摩根从昏迷中醒来，发现哈里森不知所踪。意识到自己对儿子造成的伤害，德克斯特启程前往纽约，决心找到哈里森，弥补过失。但最终的结局并非易事。迈阿密地铁的安吉尔·巴蒂斯塔带着疑问前来，德克斯特意识到自己的过去正迅速地追上自己。父子俩在这座不夜城里摸索着各自的黑暗，很快发现自己陷入了比想象中更深的困境，而唯一的出路就是携手共进。",
  "release_date": "2025-07-13",
  "douban": "",
  "poster": "tmdb_259909.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    80,
    18,
    9648
  ],
  "vote_count": 528,
  "popularity": 12.8,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 135,
  "tmdb": 259666,
  "title": "没有人会想念我们",
  "original_title": "Nadie nos va a extrañar",
  "media_type": "tv",
  "overview": "暂无简介",
  "release_date": "2024-08-09",
  "douban": "",
  "poster": "tmdb_259666.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    35
  ],
  "vote_count": 295,
  "popularity": 3.6,
  "runtime": 45,
  "languages": [
    "es"
  ],
  "countries": []
},
  {
  "id": 136,
  "tmdb": 94796,
  "title": "爱的迫降",
  "original_title": "사랑의 불시착",
  "media_type": "tv",
  "overview": "韩国财阀继承女因滑翔伞事故被迫在朝鲜着陆，并进入一名军官的生活，这名军官决定帮她躲起来。",
  "release_date": "2019-12-14",
  "douban": "",
  "poster": "tmdb_94796.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    35
  ],
  "vote_count": 923,
  "popularity": 23.6,
  "runtime": 0,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 137,
  "tmdb": 230923,
  "title": "背着善宰跑",
  "original_title": "선재 업고 튀어",
  "media_type": "tv",
  "overview": "在绝望中，顶级男明星柳善宰是女粉丝任素唯一的精神支柱。 但一天突如其来的恶耗──善宰不幸离世，令任素整个世界天翻地覆。 一觉醒来却发现自己回到了15年前，和当时正值青春灿烂只知道游泳的善宰是同学时，便决心尽力拯救善宰，阻止未来发生的悲剧而孤军奋战。",
  "release_date": "2024-04-08",
  "douban": "",
  "poster": "tmdb_230923.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    10765,
    35,
    9648
  ],
  "vote_count": 272,
  "popularity": 14.5,
  "runtime": 70,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 138,
  "tmdb": 60574,
  "title": "浴血黑帮",
  "original_title": "Peaky Blinders",
  "media_type": "tv",
  "overview": "《浴血黑帮》讲述了战后伯明翰地区传奇黑帮家族Peaky Blinders的故事。时间要追溯到1919年，家族成员有一大嗜好，就是将剃刀刀片缝进他们帽子的帽檐之间，这也是“剃刀党”的名称由来。斯里安·墨菲将饰演一名残酷的黑帮份子Tommy Shelby ，是家族兄弟的领袖，嗜血无情。在那个时代，退伍军人、革命者和罪犯，都在社会底层挣扎生存。而当贝尔法斯特的警方负责人开始介入时，Tommy和他的黑帮势",
  "release_date": "2013-09-12",
  "douban": "",
  "poster": "tmdb_60574.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    80
  ],
  "vote_count": 11107,
  "popularity": 125.9,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "GB"
  ]
},
  {
  "id": 139,
  "tmdb": 125910,
  "title": "青春王室",
  "original_title": "Young Royals",
  "media_type": "tv",
  "overview": "威廉王子在著名的希勒卡寄宿学校适应他的新生活，但事实证明，追随自己的内心比想象中更具挑战性。",
  "release_date": "2021-07-01",
  "douban": "",
  "poster": "tmdb_125910.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18
  ],
  "vote_count": 1202,
  "popularity": 13.4,
  "runtime": 45,
  "languages": [
    "en",
    "sv",
    "it",
    "es"
  ],
  "countries": [
    "SE"
  ]
},
  {
  "id": 140,
  "tmdb": 89901,
  "title": "Dickinson",
  "original_title": "Dickinson",
  "media_type": "tv",
  "overview": "艾米莉·狄金森是二十世纪现代主义诗歌先驱之一。剧集将设定在她生活的时代，围绕她的家庭、她自我创造诗歌的历程等展开，见证狄金森个人的成长过程。",
  "release_date": "2019-11-01",
  "douban": "",
  "poster": "tmdb_89901.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    35,
    18
  ],
  "vote_count": 979,
  "popularity": 10.6,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 141,
  "tmdb": 90447,
  "title": "德鲁纳酒店",
  "original_title": "호텔 델루나",
  "media_type": "tv",
  "overview": "据悉演员IU、吕珍九确定接演tvN新剧《月之酒店》，该剧因是韩剧洪氏姐妹的新剧而备受瞩目，讲述精英酒店经理人因一场命中注定的事件而与美如皎月却性格孤僻的老板一同经营月之酒店的故事，IU李知恩将在剧中饰演张满月，因犯下重罪而在漫长岁月里被束缚于月之酒店，在酒店里打发着无聊琐碎的时光，外表高傲美丽，性格却异常孤僻，贪心善变又会耍心机；吕珍九将饰演精英酒店经理人具灿成一角，性格中有着强迫症、洁癖以及偏执",
  "release_date": "2019-07-12",
  "douban": "",
  "poster": "tmdb_90447.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    10765,
    18,
    35
  ],
  "vote_count": 621,
  "popularity": 11.7,
  "runtime": 70,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 142,
  "tmdb": 108291,
  "title": "雪滴花",
  "original_title": "설강화",
  "media_type": "tv",
  "overview": "一段刻骨铭心的爱情故事，以 1987 年的首尔为背景。女子大学大一新生殷英路在一次事件中拯救了在著名大学上学的男孩林秀浩，他闯入女生宿舍时满身鲜血，但英路在宿舍严密监视下仍然冒险照顾他。",
  "release_date": "2021-12-18",
  "douban": "",
  "poster": "tmdb_108291.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    10768
  ],
  "vote_count": 314,
  "popularity": 26.4,
  "runtime": 86,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 143,
  "tmdb": 117376,
  "title": "黑道律师文森佐",
  "original_title": "빈센조",
  "media_type": "tv",
  "overview": "一名义大利黑手党的顾问为了寻找埋藏在首尔建筑物下的金条而回到故国。他在展开行动时被卷入一场对抗大企业的法律斗争中，并且不情愿地与一名冷酷的女律师展开正义之争。",
  "release_date": "2021-02-20",
  "douban": "",
  "poster": "tmdb_117376.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    10759,
    35,
    18,
    80
  ],
  "vote_count": 1070,
  "popularity": 20.9,
  "runtime": 81,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 144,
  "tmdb": 19885,
  "title": "神探夏洛克",
  "original_title": "Sherlock",
  "media_type": "tv",
  "overview": "英国广播公司 BBC 自 2010 年出品的迷你电视剧，该剧改编自阿瑟·柯南·道尔创作的侦探小说《福尔摩斯探案集》，将原著的时间背景从 19 世纪搬到了 21 世纪，讲述在繁华热闹的伦敦大都市中，时尚帅气、机敏犀利的大侦探夏洛克·福尔摩斯和他最忠实的搭档约翰·H·华生医生经受的一系列危险的、不同寻常的历险。改编遵循原著故事脉络，又辅以现代手法演绎，题目和细节之处却经过编剧精心的改良，熟悉之中又有几",
  "release_date": "2010-07-25",
  "douban": "",
  "poster": "tmdb_19885.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    80,
    18,
    9648
  ],
  "vote_count": 6416,
  "popularity": 32.9,
  "runtime": 90,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 145,
  "tmdb": 66433,
  "title": "步步惊心：丽",
  "original_title": "달의 연인 - 보보경심 려",
  "media_type": "tv",
  "overview": "高丽太祖王建的四王子王昭（李准基饰）被人称作“狼狗”，他一直把自己封闭在冷酷的面具之下。解树（李知恩饰）是一个性格倔强坚韧的女汉子，原本生活在21世纪，却突然穿越到了高丽时代，陷入历史事件的中心。王昭遇到解树后，渐渐敞开心扉，并在解树的鼓励下摘下面具，开始新的人生。解树也开拓着自己全新的命运，与王昭以及一众王子发展出友情和爱情，并从中逐渐成长。",
  "release_date": "2016-08-29",
  "douban": "",
  "poster": "tmdb_66433.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    10765,
    10768
  ],
  "vote_count": 575,
  "popularity": 10.1,
  "runtime": 60,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 146,
  "tmdb": 96462,
  "title": "虽然是精神病但没关系",
  "original_title": "사이코지만 괜찮아",
  "media_type": "tv",
  "overview": "一名具有反社会人格的童书作家邂逅了一位无私的精神病房护理人员，由此开启了一段非凡的情感疗愈之旅。",
  "release_date": "2020-06-20",
  "douban": "",
  "poster": "tmdb_96462.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    35
  ],
  "vote_count": 1480,
  "popularity": 10.2,
  "runtime": 77,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 147,
  "tmdb": 83639,
  "title": "禁忌女孩",
  "original_title": "เด็กใหม่",
  "media_type": "tv",
  "overview": "来自未名地方的新生 Nanno 如伊甸园的毒蛇，放大人们的欲望，揭露心灵深处的黑暗。他是令人尊敬的老师，一场视频风波揭露了老师背后的肮脏行为，性侵、威胁，道貌岸然的样子由 Nanno 来放大！",
  "release_date": "2018-10-27",
  "douban": "",
  "poster": "tmdb_83639.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    9648,
    80
  ],
  "vote_count": 948,
  "popularity": 10.3,
  "runtime": 0,
  "languages": [
    "th"
  ],
  "countries": [
    "TH"
  ]
},
  {
  "id": 148,
  "tmdb": 79744,
  "title": "菜鸟老警",
  "original_title": "The Rookie",
  "media_type": "tv",
  "overview": "　　Alexi Hawley执笔﹑Liz Friedlander导演的ABC警察剧《菜鸟老警 The Rookie》过去被直接预订成剧，由《灵书妙探 Castle》男主Nathan Fillion主演。《菜鸟老警》根据真人真事改编，Nathan Fillion饰演主角John Nolan，他是洛杉矶警局里最老的菜鸟警察。John离开了舒适的小城镇，来到洛杉矶追求自己的警察梦；此刻他身边的其他菜鸟都",
  "release_date": "2018-10-16",
  "douban": "",
  "poster": "tmdb_79744.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    80,
    18,
    35
  ],
  "vote_count": 3276,
  "popularity": 250.6,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "CA",
    "US"
  ]
},
  {
  "id": 149,
  "tmdb": 6357,
  "title": "阴阳魔界",
  "original_title": "The Twilight Zone",
  "media_type": "tv",
  "overview": "《阴阳魔界》是美国1959年至1964年期间推出的半小时电视影集（期间第四季一度改为每集一小时），为黑白设置，内容以怪诞、神祕主义和警世为主，每集均为互无关联的独立单元小故事，全五季共156集。本片也曾有许多当年尚名不见经传，日后成为好莱坞一线巨星的演员参与各集的演出（如劳勃·瑞福、保罗·纽曼、威廉·席德纳、李奥纳德·尼莫伊等）。",
  "release_date": "1959-10-02",
  "douban": "",
  "poster": "tmdb_6357.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    10765,
    9648,
    18
  ],
  "vote_count": 1028,
  "popularity": 32.9,
  "runtime": 25,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 150,
  "tmdb": 66330,
  "title": "W-两个世界",
  "original_title": "W(더블유)",
  "media_type": "tv",
  "overview": "身为菜鸟医生的吴妍珠（韩孝周饰）是热门漫画《W》主人公姜哲（李钟硕饰）的粉丝，然而漫画连载还剩最后一回，她的父亲、《W》的作者吴成务（金义城饰）却忽然失踪。吴妍珠在寻找父亲的过程中，意外通过父亲作画的数位板，来到了漫画《W》的世界，遇到了奄奄一息的姜哲，而此时吴成务在现实世界中也现身了。一边是吴成务在构思框架、意图迅速杀死姜哲；一边则是吴妍珠想尽办法拯救姜哲、摸索回到现实世界的方法。",
  "release_date": "2016-07-20",
  "douban": "",
  "poster": "tmdb_66330.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    35
  ],
  "vote_count": 964,
  "popularity": 7.6,
  "runtime": 60,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 151,
  "tmdb": 12313,
  "title": "暗影猎手",
  "original_title": "Shadow Hunter",
  "media_type": "tv",
  "overview": "这是一部由捉鬼人、畅销书作家兼超心理学博士达里尔·沃尔什主持的超自然题材纪录片系列。",
  "release_date": "2005-12-08",
  "douban": "",
  "poster": "tmdb_12313.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    10765,
    18
  ],
  "vote_count": 922,
  "popularity": 0.4,
  "runtime": 30,
  "languages": [
    "en"
  ],
  "countries": [
    "CA"
  ]
},
  {
  "id": 152,
  "tmdb": 108261,
  "title": "哲仁王后",
  "original_title": "철인왕후",
  "media_type": "tv",
  "overview": "《哲仁王后》是一部以严肃的朝鲜时代为背景，描述生活在现代，生性自由的青瓦台主厨 张奉焕，他的灵魂无意间穿越到了朝鲜时代，宫殿裡的中殿 王后金素容的身体裡，而后发生的一系列爆笑故事。整部剧集合了古装穿越、性别转换各类原素！",
  "release_date": "2020-12-12",
  "douban": "",
  "poster": "tmdb_108261.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    35,
    10765
  ],
  "vote_count": 485,
  "popularity": 10.6,
  "runtime": 0,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 153,
  "tmdb": 126485,
  "title": "超异能族",
  "original_title": "무빙",
  "media_type": "tv",
  "overview": "本剧是一部超能力英雄动作剧集，讲述藏起超能力生活于现在的孩子们和隐藏过去痛苦秘密生活着的父母们，一同面对跨越时代与世代席卷而来的巨大危机。",
  "release_date": "2023-08-09",
  "douban": "",
  "poster": "tmdb_126485.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    9648,
    18,
    10759
  ],
  "vote_count": 283,
  "popularity": 22.4,
  "runtime": 0,
  "languages": [
    "en",
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 154,
  "tmdb": 68349,
  "title": "举重妖精金福珠",
  "original_title": "역도요정 김복주",
  "media_type": "tv",
  "overview": "年方21岁的体育大学举重部学生金福珠（李圣经饰）是一个努力向着梦想和目标奔跑的女孩，虽然外表看似直率爽朗，但却有一颗柔软的玻璃心。在机缘巧合之下，她遇到同校游泳部的男同学郑俊亨（南柱赫饰），一个不太走运游泳天才选手，由此展开一段充满罗曼蒂克的初恋故事。",
  "release_date": "2016-11-16",
  "douban": "",
  "poster": "tmdb_68349.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    35,
    18
  ],
  "vote_count": 950,
  "popularity": 7.5,
  "runtime": 65,
  "languages": [
    "ko",
    "es"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 155,
  "tmdb": 117648,
  "title": "克拉克森的农场",
  "original_title": "Clarkson's Farm",
  "media_type": "tv",
  "overview": "着眼于著名主持人克拉克森在农村经营农场的糟糕尝试。2008年买下农场后，他租给了别人，10年的承包合同到期后，克拉克森突发奇想，由他自己来经营。",
  "release_date": "2021-06-11",
  "douban": "",
  "poster": "tmdb_117648.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    10764,
    35
  ],
  "vote_count": 408,
  "popularity": 35.2,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "GB"
  ]
},
  {
  "id": 156,
  "tmdb": 229480,
  "title": "因为不想吃亏",
  "original_title": "손해 보기 싫어서",
  "media_type": "tv",
  "overview": "剧情讲述因为不想吃亏而举行假婚礼的女人孙海英与因不想伤害别人而成为假新郎的男人金志旭之间零损益的职场爱情故事。",
  "release_date": "2024-08-26",
  "douban": "",
  "poster": "tmdb_229480.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    35
  ],
  "vote_count": 276,
  "popularity": 8.2,
  "runtime": 0,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 157,
  "tmdb": 1600,
  "title": "耐德的中学校园生存手册",
  "original_title": "Ned's Declassified School Survival Guide",
  "media_type": "tv",
  "overview": "奈德·比格比和他最好的伙伴莫兹、库奇在詹姆斯·K·波尔克中学的荒诞冒险就此展开，身为“普通男孩”的奈德打破第四面墙，分享应对初中各种难关的妙招诀窍。奈德不算超级酷，也没有超能力，但他机智风趣、干净利落、乐观向上且有自知之明。更重要的是，在两位挚友的鼎力相助下，他已然做好准备，去攻克初中生涯里的重重雷区。无论是对抗校园霸凌、懵懂悸动的暗恋心事，还是应付古灵精怪、严苛刻薄又气场十足的老师，亦或是突击",
  "release_date": "2004-09-12",
  "douban": "",
  "poster": "tmdb_1600.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    35,
    10762
  ],
  "vote_count": 999,
  "popularity": 12.7,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 158,
  "tmdb": 333,
  "title": "大长今",
  "original_title": "대장금",
  "media_type": "tv",
  "overview": "长今（李英爱 饰）出生在一个贱民家庭，他的父亲徐天寿原来当年曾是内禁卫军官，奉命赐予废太后允氏毒药，随后允氏的儿子燕山君登基继位，天寿为了保全自身，辞官而去。天寿在途中救了长今母亲，两人结为连理，隐姓埋名。岂料皇上燕山君如今欲为母报仇，下令追捕所有当年参与杀死允太后的人，长今母亲逃难路上不幸丧命，临终前嘱咐长今进宫。失去了父母的小长今幸得宫中熟手姜德久一家收留，并在他的安排下进入了宫中御厨房做工，",
  "release_date": "2003-09-15",
  "douban": "",
  "poster": "tmdb_333.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18
  ],
  "vote_count": 275,
  "popularity": 12.6,
  "runtime": 60,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 159,
  "tmdb": 79818,
  "title": "流星花园",
  "original_title": "流星花园",
  "media_type": "tv",
  "overview": "18岁的平凡女生杉菜转入了精英学校英德大学却与同学们格格不入。学校里有四个外形阳光帅气，家境富裕的学生：道明寺，花泽类，西门和美作。因为杉菜看不惯道明寺飞扬跋扈的模样，仗义的杉菜与他产生了争执，从此之后，道明寺常常恶作剧作弄杉菜。之后一系列的事情发生，使杉菜与道明寺之间的误会逐渐的加深。但每到危急时刻，花泽类都会出现帮助杉菜并帮其解围。杉菜凭借其杂草般顽强的生命力逐渐改变了这四个男生对其不好的印象",
  "release_date": "2018-07-09",
  "douban": "",
  "poster": "tmdb_79818.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    10751
  ],
  "vote_count": 608,
  "popularity": 9.2,
  "runtime": 45,
  "languages": [
    "zh"
  ],
  "countries": [
    "CN",
    "HK",
    "TW"
  ]
},
  {
  "id": 160,
  "tmdb": 197067,
  "title": "非常律师禹英禑",
  "original_title": "이상한 변호사 우영우",
  "media_type": "tv",
  "overview": "作为顶级律所的新人和女性自闭症患者，才华横溢的律师禹英禑应对着法庭内外的各种挑战。",
  "release_date": "2022-06-29",
  "douban": "",
  "poster": "tmdb_197067.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18
  ],
  "vote_count": 933,
  "popularity": 13.5,
  "runtime": 70,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 161,
  "tmdb": 75006,
  "title": "伞学院",
  "original_title": "The Umbrella Academy",
  "media_type": "tv",
  "overview": "这群疏远已久的超能力兄弟姐妹因父亲过世而团聚，并发现了惊人的家族秘密和迫近人类的潜在威胁。",
  "release_date": "2019-02-15",
  "douban": "",
  "poster": "tmdb_75006.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    10759,
    10765,
    18
  ],
  "vote_count": 9973,
  "popularity": 21.9,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 162,
  "tmdb": 2004,
  "title": "马尔科姆的一家",
  "original_title": "Malcolm in the Middle",
  "media_type": "tv",
  "overview": "这部剧以幽默和讽刺的方式展现了一个工薪阶层家庭混乱、荒诞却充满温情的日常生活，深入探讨了家庭成员之间的关系和沟通问题。\\\\n\\\\n其是一部非常经典的美国情景喜剧，于2000年至2006年在福克斯电视台播出。之所以称之为经典，是因为它打破了传统情景喜剧“父慈子孝”的假象。它展示了贫穷、压力、不公和疯狂，但在这个家里，即使彼此间互相折磨、互相算计，当外界来袭时，他们永远是一致对外的整体。",
  "release_date": "2000-01-09",
  "douban": "",
  "poster": "tmdb_2004.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    35
  ],
  "vote_count": 4846,
  "popularity": 56.4,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 163,
  "tmdb": 92468,
  "title": "邻里一家人",
  "original_title": "La Familia del Barrio",
  "media_type": "tv",
  "overview": "暂无简介",
  "release_date": "2013-05-05",
  "douban": "",
  "poster": "tmdb_92468.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    35
  ],
  "vote_count": 505,
  "popularity": 2.2,
  "runtime": 28,
  "languages": [
    "es"
  ],
  "countries": [
    "MX"
  ]
},
  {
  "id": 164,
  "tmdb": 96160,
  "title": "我的全息恋人",
  "original_title": "나 홀로 그대",
  "media_type": "tv",
  "overview": "　　该剧讲述一个寂寞的女人遇到了一个一直只望着她、拥护着她的完美人工智能（Holo）“一个人”后展开的故事。将讲述通过人工智能Holo“一个人”，从一个人孤单寂寞冷，到经历撕心裂肺的爱情哭到眼睛肿，逐步成长的过程。高澜都，他是IT企业的老板，是一个天才开发者，公司推出的所有项目几乎都是他开发的。但只有公司的官方代表知道他的存在，因为10年前的大型黑客事件，他被追击，无奈伪装成“死亡”状态。韩素妍，",
  "release_date": "2020-02-07",
  "douban": "",
  "poster": "tmdb_96160.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18,
    10765
  ],
  "vote_count": 880,
  "popularity": 3.8,
  "runtime": 57,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 165,
  "tmdb": 1399,
  "title": "权力的游戏",
  "original_title": "Game of Thrones",
  "media_type": "tv",
  "overview": "维斯特洛大陆边境处发现远古传说中早已灭绝的生物，危险也渐渐靠近这里。危情一触即发，整个王国看似平和的表面下却是波涛暗涌。权高位重的拜拉席恩家族、勇敢善良的史塔克家族、企图谋取王位的坦格利安家族、有着不可告人秘密的兰尼斯特家族。这些家族各怀鬼胎，这个国家将会陷入一场混战.....",
  "release_date": "2011-04-17",
  "douban": "",
  "poster": "tmdb_1399.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    10765,
    18,
    10759
  ],
  "vote_count": 26951,
  "popularity": 211.0,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 166,
  "tmdb": 76479,
  "title": "黑袍纠察队",
  "original_title": "The Boys",
  "media_type": "tv",
  "overview": "这是一个超能力者和普通人共存的世界，祖国人、火车头、深海、梅芙女王、透明人和玄色隶属于全球最大的超级英雄公司沃特集团，在帮助政府惩奸除恶维护世界和平的同时，他们也以偶像的身份帮助公司赚取了难以计数的利润。休伊是一个平凡的男孩，她的女友死于一场意外，而这场意外的制造者正是火车头。休伊不愿意接受沃特公司潦草的致歉和赔偿，决定替女友报仇。",
  "release_date": "2019-07-25",
  "douban": "",
  "poster": "tmdb_76479.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    10765,
    10759
  ],
  "vote_count": 12831,
  "popularity": 423.9,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 167,
  "tmdb": 71712,
  "title": "良医",
  "original_title": "The Good Doctor",
  "media_type": "tv",
  "overview": "才华横溢的外科医生在一所知名医院就职，患有自闭症和学者综合症的他在工作中面临病患和同事的怀疑。",
  "release_date": "2017-09-25",
  "douban": "",
  "poster": "tmdb_71712.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18
  ],
  "vote_count": 12838,
  "popularity": 94.4,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 168,
  "tmdb": 136283,
  "title": "黑暗荣耀",
  "original_title": "더 글로리",
  "media_type": "tv",
  "overview": "一名女子上高中时遭受过可怕的虐待。时隔多年，她将精心制定的复仇计划付诸实施，要让施害者为自己的罪行付出代价。",
  "release_date": "2022-12-30",
  "douban": "",
  "poster": "tmdb_136283.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18
  ],
  "vote_count": 905,
  "popularity": 21.9,
  "runtime": 0,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 169,
  "tmdb": 210733,
  "title": "偷偷藏不住",
  "original_title": "偷偷藏不住",
  "media_type": "tv",
  "overview": "桑稚高中时期被老师频繁请家长，为了解决麻烦，桑稚决定找哥哥顶包，然而兄妹见面就互怼闹僵，无奈只好求助来家中玩耍的哥哥舍友段嘉许，在桑稚的苦求要挟下，段嘉许帮桑稚去学校见老师，两人因此结缘，段嘉许从此更是把桑稚当成自己的亲妹妹爱护。随着段嘉许大学毕业，两人分隔异地，又因为一些误会，关系疏远。直到成年后的桑稚如愿考到了段嘉许的城市，两人重逢。在日渐亲密的接触下，桑稚渐渐发现了段嘉许一直以来的压力来源，",
  "release_date": "2023-06-20",
  "douban": "",
  "poster": "tmdb_210733.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    18
  ],
  "vote_count": 237,
  "popularity": 32.5,
  "runtime": 45,
  "languages": [
    "zh"
  ],
  "countries": [
    "CN"
  ]
},
  {
  "id": 170,
  "tmdb": 34524,
  "title": "少狼",
  "original_title": "Teen Wolf",
  "media_type": "tv",
  "overview": "Scott只是一名普通高中生，一次在森林被狼人咬伤变成狼人。知道真相的只有好友Stiles和另一个狼人Derek。新来的转校生Allison因撞伤小狗求助于Scott，两人因此产生好感而发展为恋人。但是每当Scott和Allison亲热时，总是抑制不了自己的狼性。Scott害怕让Allison知道真相又不舍得离开她。偶然间Scott发现Allison的父亲Argent竟然是一名专门射杀狼人的猎人。",
  "release_date": "2011-06-05",
  "douban": "",
  "poster": "tmdb_34524.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    10765,
    18,
    35
  ],
  "vote_count": 4711,
  "popularity": 63.4,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 171,
  "tmdb": 107113,
  "title": "大楼里只有谋杀",
  "original_title": "Only Murders in the Building",
  "media_type": "tv",
  "overview": "这部剧讲述了三个彼此陌生的人在纽约市公寓楼调查一个邻居的神秘死亡时，他们都对真实的犯罪事件十分感兴趣，突然发现自己陷入一个犯罪事件。",
  "release_date": "2021-08-31",
  "douban": "",
  "poster": "tmdb_107113.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    35,
    9648,
    80
  ],
  "vote_count": 2177,
  "popularity": 29.7,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 172,
  "tmdb": 226529,
  "title": "照明商店",
  "original_title": "조명가게",
  "media_type": "tv",
  "overview": "照亮黑暗巷弄尽头的照明商店今天也在深夜营业中。照明商店的老板遵守着即使只有一位客人来也要做生意的原则，每天晚上迎接上门的客人。然而，在深夜来访的不只有平凡的客人，还有各种带着不同原因上门的客人，而这也将引发一连串神秘的故事。",
  "release_date": "2024-12-04",
  "douban": "",
  "poster": "tmdb_226529.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    9648,
    18
  ],
  "vote_count": 246,
  "popularity": 7.7,
  "runtime": 45,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 173,
  "tmdb": 221851,
  "title": "和我老公结婚吧",
  "original_title": "내 남편과 결혼해줘",
  "media_type": "tv",
  "overview": "癌症末期患者姜智媛撞见自己的闺蜜郑秀敏与丈夫朴敏焕偷情，在被他们害死后，回到十年前，在同公司部长刘志赫的帮助下，铲除人生垃圾，开拓崭新命运。",
  "release_date": "2024-01-01",
  "douban": "",
  "poster": "tmdb_221851.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    10765,
    35
  ],
  "vote_count": 671,
  "popularity": 11.3,
  "runtime": 63,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 174,
  "tmdb": 218539,
  "title": "与恶魔有约",
  "original_title": "마이데몬",
  "media_type": "tv",
  "overview": "在与一名高冷的女继承人发生纠葛后，这个无情的恶魔失去了力量。女继承人可能是他恢复能力的关键 — 还可能是他心之所属。",
  "release_date": "2023-11-24",
  "douban": "",
  "poster": "tmdb_218539.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    35
  ],
  "vote_count": 653,
  "popularity": 17.2,
  "runtime": 0,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 175,
  "tmdb": 87739,
  "title": "后翼弃兵",
  "original_title": "The Queen's Gambit",
  "media_type": "tv",
  "overview": "20 世纪 50 年代，一所孤儿院中的小女孩展露惊人的国际象棋天赋，从此踏上了意想不到的成名之路，但她同时也在努力应对自己的成瘾问题。",
  "release_date": "2020-10-23",
  "douban": "",
  "poster": "tmdb_87739.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18
  ],
  "vote_count": 5501,
  "popularity": 14.8,
  "runtime": 0,
  "languages": [
    "ru",
    "es",
    "en",
    "fr"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 176,
  "tmdb": 127529,
  "title": "猎犬",
  "original_title": "사냥개들",
  "media_type": "tv",
  "overview": "两名年轻的拳击手与心地善良的放贷人联手对抗趁人之危的冷酷高利贷者。",
  "release_date": "2023-06-09",
  "douban": "",
  "poster": "tmdb_127529.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    10759,
    80
  ],
  "vote_count": 695,
  "popularity": 72.3,
  "runtime": 61,
  "languages": [
    "en",
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 177,
  "tmdb": 63174,
  "title": "路西法",
  "original_title": "Lucifer",
  "media_type": "tv",
  "overview": "在《哥谭》作为蝙蝠侠的衍生剧播出后，DC继续决定将旗下的Lucifer也改编成电视剧。这位无聊的地狱之王在王座上过得可是一点也不开心。他下定决心抛弃他的地狱王国，来到洛杉矶成了位酒吧老板，追寻娱乐之都的刺激生活并协助洛杉矶的警察一起惩治罪犯。",
  "release_date": "2016-01-25",
  "douban": "",
  "poster": "tmdb_63174.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    80,
    10765
  ],
  "vote_count": 15471,
  "popularity": 97.4,
  "runtime": 45,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 178,
  "tmdb": 100088,
  "title": "最后生还者",
  "original_title": "The Last of Us",
  "media_type": "tv",
  "overview": "在现代文明被摧毁的二十年后，人类因现代传染病而面临绝种危机，幸存的人类为了生存自相残杀。中年男性走私犯乔尔（佩德罗·帕斯卡饰）为了完成“火萤”组织首领玛琳（梅尔·丹德里奇饰）的托付，带着14岁少女艾莉（贝拉·拉姆齐饰）一同踏出由军队保护的疫情隔离区，穿越化为废墟丛林的大都会。面对病毒感染变种人类与其他幸存者集团威胁，展开了一场改变两人一生的深刻旅程。",
  "release_date": "2023-01-15",
  "douban": "",
  "poster": "tmdb_100088.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18
  ],
  "vote_count": 7027,
  "popularity": 46.1,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 179,
  "tmdb": 154825,
  "title": "社内相亲",
  "original_title": "사내맞선",
  "media_type": "tv",
  "overview": "夏莉假扮闺蜜去相亲，试图将对方吓跑。但出乎意料的是，相亲对象是她任职公司的代表，而且还向她求婚。",
  "release_date": "2022-02-28",
  "douban": "",
  "poster": "tmdb_154825.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    35,
    18
  ],
  "vote_count": 738,
  "popularity": 15.1,
  "runtime": 61,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 180,
  "tmdb": 224372,
  "title": "七王国的骑士",
  "original_title": "A Knight of the Seven Kingdoms",
  "media_type": "tv",
  "overview": "在《权力的游戏》故事发生的一百年前，两位不太可能成为英雄的人物闯入了维斯特洛：高个骑士邓肯和他的侍从伊戈。",
  "release_date": "2026-01-18",
  "douban": "",
  "poster": "tmdb_224372.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    10765,
    10759
  ],
  "vote_count": 903,
  "popularity": 26.4,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 181,
  "tmdb": 79460,
  "title": "吸血鬼后裔",
  "original_title": "Legacies",
  "media_type": "tv",
  "overview": "CW的《吸血鬼日记 The Vampire Diaries》及《吸血鬼始祖 The Originals》共同衍生剧《吸血鬼后裔 Legacies》背景设置在Salvatore学校里，17岁的Hope Mikaelson（Danielle Rose Russell饰，狼人﹑吸血鬼 ﹑女巫三重混血种）﹑Alaric Saltzman的双胞胎Lizzie﹑Josie，及其他拥有超自然血统的的年青人在此既",
  "release_date": "2018-10-25",
  "douban": "",
  "poster": "tmdb_79460.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    10765,
    18
  ],
  "vote_count": 3024,
  "popularity": 25.2,
  "runtime": 43,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 182,
  "tmdb": 58841,
  "title": "芝加哥警署",
  "original_title": "Chicago P.D.",
  "media_type": "tv",
  "overview": "芝加哥警署的第21辖区有两组完全不同的警察。其中一组是穿制服的警察，负责在街道上巡逻，直接打击和处理街头犯罪行为。另一组被称作情报组，负责打击危害这座城市的主要毒瘤，黑帮犯罪、毒品走私、高级别谋杀案，诸如此类。负责领导情报组的的是Hank Voight警官（Jason Beghe）。他是一个不怕破坏规矩的人，只要能维护正义，哪怕和法律对着干他也在所不惜。他为人强悍，要求严格，只有那些能上得刀山",
  "release_date": "2014-01-08",
  "douban": "",
  "poster": "tmdb_58841.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    80,
    18
  ],
  "vote_count": 2588,
  "popularity": 94.6,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 183,
  "tmdb": 106292,
  "title": "茱莉与魅影男孩",
  "original_title": "Julie and the Phantoms",
  "media_type": "tv",
  "overview": "该剧讲述少女茱莉在帮助幽灵三人组“魅影男孩”实现乐队夙愿的同时，也找到了自己对音乐和生活的热情所在！",
  "release_date": "2020-09-10",
  "douban": "",
  "poster": "tmdb_106292.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    10751,
    35,
    10765
  ],
  "vote_count": 623,
  "popularity": 3.6,
  "runtime": 30,
  "languages": [
    "en"
  ],
  "countries": [
    "CA",
    "US"
  ]
},
  {
  "id": 184,
  "tmdb": 126308,
  "title": "Shōgun",
  "original_title": "Shōgun",
  "media_type": "tv",
  "overview": "改编自詹姆斯·克拉维尔的同名小说，故事发生在公元1600年的日本，当时的日本正值一场百年内战。摄政委员会的敌人联合起来反对吉井虎永将军，他正在为自己的生命而战。有人发现一艘神秘的欧洲船只在附近的渔村外搁浅。随后，船上的英国引航员按针带着秘密前来。这些秘密可能有助于吉井虎永扭转权力的天平，并摧毁耶稣会牧师和葡萄牙商人的强大影响力，而这些人正是按针的敌人。吉井虎永和按针的命运与他们的译员户田鞠子发生了",
  "release_date": "2024-02-27",
  "douban": "",
  "poster": "tmdb_126308.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    10768
  ],
  "vote_count": 1752,
  "popularity": 28.6,
  "runtime": 0,
  "languages": [
    "ja",
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 185,
  "tmdb": 1409,
  "title": "混乱之子",
  "original_title": "Sons of Anarchy",
  "media_type": "tv",
  "overview": "一家颇有名望的非法摩托车俱乐部，面对毒品贩子、开发商和法律官员的步步紧逼，一心庇护所在小镇不受侵扰。除此之外，这家俱乐部还决心保护残酷且生意兴隆的非法武器生意。贾克斯·泰勒 (查理·汉纳姆 Charlie Hunnam 饰) 正处在激烈的思想冲突中，一方面他深爱自己手下的这帮兄弟，另一方面他也为兄弟帮会的无法无天而感到忧心忡忡……",
  "release_date": "2008-09-03",
  "douban": "",
  "poster": "tmdb_1409.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    80,
    18
  ],
  "vote_count": 3260,
  "popularity": 70.3,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 186,
  "tmdb": 124364,
  "title": "梦魇绝镇",
  "original_title": "FROM",
  "media_type": "tv",
  "overview": "本剧讲述美国中部一个噩梦般的小镇会困住所有走进来的人，而不甘愿留下来的人在找寻出路的同时，他们还得面对日落后出没的怪物。",
  "release_date": "2022-02-20",
  "douban": "",
  "poster": "tmdb_124364.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    9648,
    18,
    10765
  ],
  "vote_count": 3480,
  "popularity": 679.3,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 187,
  "tmdb": 12637,
  "title": "反叛",
  "original_title": "Rebelde",
  "media_type": "tv",
  "overview": "该系列的背景是 精英之路学校 ，这是墨西哥城一所着名的私立寄宿高中，主要情节围绕一群学生组成流行乐队展开。 其他子情节涉及学校的教职员工和学生的家长。 该节目的一个标志是随意使用fresa字符经常使用的英语单词和短语。",
  "release_date": "2004-10-04",
  "douban": "",
  "poster": "tmdb_12637.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    35
  ],
  "vote_count": 5195,
  "popularity": 27.4,
  "runtime": 42,
  "languages": [
    "es"
  ],
  "countries": [
    "MX"
  ]
},
  {
  "id": 188,
  "tmdb": 218230,
  "title": "死期将至",
  "original_title": "이재, 곧 죽습니다",
  "media_type": "tv",
  "overview": "经过数年备战，原本对未来生活有着无限憧憬的青年人崔以才（徐仁国饰）在某大型企业的面试中铩羽而归，祸不单行，生活中接二连三的打击令他彻底失去了活下去的勇气，随后他走上楼顶，结束了短暂的一生。可是他死前的一番言论惹恼了坏脾气的女死神（林素丹饰），于是作为处罚，死神给了以才12次重生的机会。所谓重生，实则是附体在12个必死之人的身体上，充分体会着他们死前的痛苦。当然，如果以才能够逆天改命，那么就能以这个",
  "release_date": "2023-12-15",
  "douban": "",
  "poster": "tmdb_218230.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    10765
  ],
  "vote_count": 638,
  "popularity": 9.9,
  "runtime": 53,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 189,
  "tmdb": 82856,
  "title": "曼达洛人",
  "original_title": "The Mandalorian",
  "media_type": "tv",
  "overview": "该剧的时间线设置在帝国陨落后和第一秩序出现前。在远离新共和国掌控的银河系边远星带，讲述一位独行枪手的艰辛奋斗的故事  。恩多战役之后，帝国被推翻、新共和国成立，银河政治格局大变。曼达洛人遭遇了一场灭顶之灾，被残余帝国势力屠杀。幸存者隐居起来，积蓄力量寻求新的崛起。只有主角从事赏金猎人行当，为组织秘密筹措资金。残余帝国势力希望得到这名婴儿，发出赏金招募。曼达洛人找到了婴儿，但最后却拒绝让其落入残余帝",
  "release_date": "2019-11-12",
  "douban": "",
  "poster": "tmdb_82856.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    10765,
    10759
  ],
  "vote_count": 10950,
  "popularity": 85.7,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 190,
  "tmdb": 69050,
  "title": "河谷镇",
  "original_title": "Riverdale",
  "media_type": "tv",
  "overview": "少年阿奇和伙伴们探索着性、爱情、学校和家庭交织的混乱世界，并无意中卷入河谷镇上的一场黑暗神秘事件。",
  "release_date": "2017-01-26",
  "douban": "",
  "poster": "tmdb_69050.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    80,
    18,
    9648
  ],
  "vote_count": 13720,
  "popularity": 72.5,
  "runtime": 45,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 191,
  "tmdb": 1668,
  "title": "老友记",
  "original_title": "Friends",
  "media_type": "tv",
  "overview": "莫妮卡、钱德勒、瑞秋、菲比、乔伊和罗斯是彼此最好的朋友，一起走过十年岁月的点点滴滴。虽然老友们各有各的性格特点，也会有矛盾和争执，但对于彼此，他们永远\\",
  "release_date": "1994-09-22",
  "douban": "",
  "poster": "tmdb_1668.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    35
  ],
  "vote_count": 9102,
  "popularity": 108.4,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 192,
  "tmdb": 70523,
  "title": "暗黑",
  "original_title": "Dark",
  "media_type": "tv",
  "overview": "一个消失的孩子让 4 个家庭发现了一个离奇古怪、跨越三代人的秘密，他们开始疯狂地寻找着答案。",
  "release_date": "2017-12-01",
  "douban": "",
  "poster": "tmdb_70523.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    80,
    18,
    10765,
    9648
  ],
  "vote_count": 7575,
  "popularity": 42.7,
  "runtime": 0,
  "languages": [
    "de"
  ],
  "countries": [
    "DE"
  ]
},
  {
  "id": 193,
  "tmdb": 655,
  "title": "星际迷航：下一代",
  "original_title": "Star Trek: The Next Generation",
  "media_type": "tv",
  "overview": "《星际迷航：下一代》（原名：Star Trek: The Next Generation，简称为 ST:TNG 或 TNG）是一出背景设定在《星际迷航》时空的科幻电视系列剧，它也是 1966 年至 1969 年间的《星际迷航：原初》电视剧之后第一个真人演出的电视续篇。《下一代》的时间设定在《原初》约一个世纪之后，描述的是一艘新的星舰和新的航员组的故事。\\\\n\\\\n电视剧的构想来自《星际迷航》的原创人吉",
  "release_date": "1987-09-28",
  "douban": "",
  "poster": "tmdb_655.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    10765,
    10759,
    18,
    9648
  ],
  "vote_count": 1759,
  "popularity": 64.3,
  "runtime": 45,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 194,
  "tmdb": 100834,
  "title": "毒药",
  "original_title": "Veneno",
  "media_type": "tv",
  "overview": "　　艺名“毒药”（Veneno）的克里斯蒂娜·奥尔蒂斯（Cristina Ortiz）是西班牙九十年代最知名的跨性别电视艺人、LGBT偶像。她在童年时期就意识到自己的性别身份，却也因此在家乡小镇遭受了多年的歧视和攻击。1992年，28岁的克里斯蒂娜前往马德里追寻新生活，并于 不久后正式开始了性别过渡。1996年，知名电视人佩佩·纳瓦罗（Pepe Navarro）正在为他的夜间秀《今夜我们穿越密西西",
  "release_date": "2020-03-29",
  "douban": "",
  "poster": "tmdb_100834.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18
  ],
  "vote_count": 1418,
  "popularity": 3.2,
  "runtime": 60,
  "languages": [
    "es"
  ],
  "countries": [
    "ES"
  ]
},
  {
  "id": 195,
  "tmdb": 194764,
  "title": "企鹅人",
  "original_title": "The Penguin",
  "media_type": "tv",
  "overview": "讲述企鹅人奥斯瓦尔德·“奥兹”·科波特在哥谭市黑社会中崛起的故事。‌海堤炸毁后，哥谭市处于危险之中，奥兹试图填补卡迈恩·法尔科内去世留下的权力真空，好让母亲过上自己一直承诺的生活。为此，他必须直面所有敌人，包括卡迈恩的孩子索菲亚和阿尔贝托、萨尔瓦多领导的马罗尼家族、以及自己作为企鹅人的败坏声誉。",
  "release_date": "2024-09-19",
  "douban": "",
  "poster": "tmdb_194764.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    80
  ],
  "vote_count": 1331,
  "popularity": 12.5,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "IE",
    "US"
  ]
},
  {
  "id": 196,
  "tmdb": 129888,
  "title": "二十五，二十一",
  "original_title": "스물다섯 스물하나",
  "media_type": "tv",
  "overview": "在梦想似乎遥不可及的时代，志向远大的击剑少女遇见了勤勉的年轻男子，后者正试图重塑自己的人生。",
  "release_date": "2022-02-12",
  "douban": "",
  "poster": "tmdb_129888.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18
  ],
  "vote_count": 333,
  "popularity": 11.5,
  "runtime": 75,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 197,
  "tmdb": 117378,
  "title": "窥探",
  "original_title": "마우스",
  "media_type": "tv",
  "overview": "以「如果可以通过胎儿基因检测是否为精神病患者，肚子里的孩子被确认是患者，您是否会选择生下来？」为主题所展开的故事。将不同于以往精神病题材的电视剧。李昇基饰演正直的年轻刑警，面对不公正的事就据理力争，将与让全国陷入恐怖的先天精神病患的罪犯对峙，完全改变自己人生的角色。",
  "release_date": "2021-03-03",
  "douban": "",
  "poster": "tmdb_117378.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    80,
    9648,
    10765
  ],
  "vote_count": 317,
  "popularity": 15.0,
  "runtime": 76,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 198,
  "tmdb": 63314,
  "title": "乌鸦足球队",
  "original_title": "Club de Cuervos",
  "media_type": "tv",
  "overview": "　　一对兄妹彼此竞争来决定谁能继承足球队。这部系列剧由《我们是贵族》的创剧人倾力打造。",
  "release_date": "2015-08-07",
  "douban": "",
  "poster": "tmdb_63314.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    35
  ],
  "vote_count": 309,
  "popularity": 7.0,
  "runtime": 40,
  "languages": [
    "es"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 199,
  "tmdb": 92621,
  "title": "穷卵打板",
  "original_title": "Brassic",
  "media_type": "tv",
  "overview": "　　Brassic: 源自考克尼俚语 boracic lint (硼酸棉) 的发音，形容人身无分文、一穷二白，“穷卵子打板凳响”。《穷卵打板》聚焦一个形影不离的兰开夏盗窃团伙，温尼，迪伦，卡迪/心停，阿什 ，汤莫和 JJ，尽管一直以来无视规则潇洒度日，这群家伙即将尝到他们嚣张犯罪带来的苦果。与此同时，迪伦一而再再而三地令女友艾琳失望，使其萌生搬到别处为自己和孩子谋求更好生活的念头，这让迪伦必",
  "release_date": "2019-08-22",
  "douban": "",
  "poster": "tmdb_92621.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    35,
    18,
    80
  ],
  "vote_count": 243,
  "popularity": 15.7,
  "runtime": 43,
  "languages": [
    "en"
  ],
  "countries": [
    "GB"
  ]
},
  {
  "id": 200,
  "tmdb": 95396,
  "title": "Severance",
  "original_title": "Severance",
  "media_type": "tv",
  "overview": "故事发生在一家名为卢蒙的超级大公司内，一种名为记忆分割术的全新技术正在公司内部进行实验，接受了手术的员工将进行人格分离手术，形成公司人格和日常人格，当踏进公司大门的那一刻，他们的日常人格就会陷入沉睡，身体由公司人格主导。相对的，在离开公司的那一刻，日常人格会重新接管身体，当然，这个人格不会记得任何在公司里发生的事情。\\\\n\\\\n马克（亚当·斯科特 Adam Scott 饰）、迪伦（扎克·切利 Zach",
  "release_date": "2022-02-17",
  "douban": "",
  "poster": "tmdb_95396.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    18,
    9648,
    10765
  ],
  "vote_count": 2667,
  "popularity": 38.0,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 201,
  "tmdb": 753230,
  "title": "一名母亲的三重死亡",
  "original_title": "Las tres muertes de Marisela Escobedo",
  "media_type": "movie",
  "overview": "一位母亲因杀害她女儿的罪犯未受到墨西哥司法体制的惩治而不懈抗争，这部纪录片探讨了她为了将罪犯绳之以法所付出的努力。",
  "release_date": "2020-10-14",
  "douban": "",
  "poster": "tmdb_753230.jpg",
  "vote_average": 8.9,
  "genre_ids": [
    99,
    80
  ],
  "vote_count": 242,
  "popularity": 0.6,
  "runtime": 109,
  "languages": [
    "en",
    "es"
  ],
  "countries": [
    "MX",
    "US"
  ]
},
  {
  "id": 202,
  "tmdb": 1430,
  "title": "卡尔·萨根的宇宙",
  "original_title": "Cosmos: A Personal Voyage",
  "media_type": "tv",
  "overview": "卡尔·萨根对科学和社会的诸多方面都有重大。深远的贡献，并且影响了全世界数以亿计的人们。他在行星科学领域所作的重要研究，与美国的空间计划密切相联；他还编创了受到高度评价的电视系列片《宇宙》，并且是普利策奖的获得者以及许多畅销科普书的作者，《卡尔·萨根的宇宙》是一本引人入胜、插图精美的文集，它由多位作者撰写，涵盖了萨根为之献身的科学、教育、政策制定以及相关的许多领域。\\\\n\\\\n天文学家大概是最像大祭司的",
  "release_date": "1980-09-28",
  "douban": "",
  "poster": "tmdb_1430.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    99
  ],
  "vote_count": 434,
  "popularity": 5.3,
  "runtime": 60,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 203,
  "tmdb": 68595,
  "title": "地球脉动 2",
  "original_title": "Planet Earth II",
  "media_type": "tv",
  "overview": "众穿过多样的岛屿，越过起伏的山脉，走进神秘的雨林，寻访荒凉的沙漠，路过葱绿的草地，最终回归熙熙攘攘的城市，探索那些最具标志性的栖息地，感受大自然的变化万千；通过镜头中各种各样的动物，去了解它们非凡的生存方式，感受人类所生活的地球上不一样的脉动旋律。",
  "release_date": "2016-11-06",
  "douban": "",
  "poster": "tmdb_68595.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    99,
    10751
  ],
  "vote_count": 928,
  "popularity": 6.0,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "FR",
    "CN",
    "US",
    "DE"
  ]
},
  {
  "id": 204,
  "tmdb": 74313,
  "title": "蓝色星球 2",
  "original_title": "Blue Planet II",
  "media_type": "tv",
  "overview": "自然界中，没有什么地方会比大海更让人类心驰向往，那里狂野令人印象深刻，但也充满无穷魅力，让人神魂颠倒。人类奔向地球上面积最广阔，但又知之甚少的海洋，进行一次紧张激烈的探险。从冰雪覆盖的极地海域到颜色变幻无穷的珊瑚岛礁；从风暴袭扰的大西洋到伸手不见五指、充满奇特物种的漆黑深海海底；人类体验海洋最为野性的一面，去认识那些令人惊异的新景观，匪夷所思的新生物物种。",
  "release_date": "2017-10-29",
  "douban": "",
  "poster": "tmdb_74313.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    99,
    10751
  ],
  "vote_count": 339,
  "popularity": 3.7,
  "runtime": 60,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "US",
    "CN",
    "FR",
    "DE"
  ]
},
  {
  "id": 205,
  "tmdb": 1044,
  "title": "地球脉动",
  "original_title": "Planet Earth",
  "media_type": "tv",
  "overview": "从南极到北极，从赤道到寒带，从非洲草原到热带雨林，再从荒凉峰顶到深邃大海，难以数计的生物以极其绝美的身姿呈现在世人面前。我们看到了Okavango洪水的涨落及其周边赖以生存的动物们的生存状态，看到了罕见的雪豹在漫天大雪中猎食的珍贵画面；看到了冰原上企鹅、北极熊、海豹等生物相互依存的严苛情景，也见识了生活在大洋深处火山口高温环境下的惊奇生物。当然还有地球各地的壮观美景与奇特地貌，无私地将其最为光艳的",
  "release_date": "2006-03-05",
  "douban": "",
  "poster": "tmdb_1044.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    99
  ],
  "vote_count": 1243,
  "popularity": 8.5,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "JP",
    "GB",
    "US"
  ]
},
  {
  "id": 206,
  "tmdb": 83880,
  "title": "我们的星球",
  "original_title": "Our Planet",
  "media_type": "tv",
  "overview": "由大卫·艾登堡负责解说这部八部分的剧集将探索自然世界的独特又宝贵的奇迹，由屡获奖项的剧集《地球脉动》的创剧人倾情打造。通过与世界自然基金会合作，《我们的星球》采用了令人惊艳的摄影和技术，并以前所未有的拍摄方式探寻了地球上尚存的野生区域和那里的动物居民。这档耗时 4 年的大制作节目在遍布全球各个大洲的 50 个国家/地区进行过拍摄，600 多名工作人员共计花费超过 3500 个拍摄日，从偏远的北极荒",
  "release_date": "2019-04-05",
  "douban": "",
  "poster": "tmdb_83880.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    99,
    10751
  ],
  "vote_count": 452,
  "popularity": 4.4,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 207,
  "tmdb": 1022256,
  "title": "Selena Gomez: My Mind & Me",
  "original_title": "Selena Gomez: My Mind & Me",
  "media_type": "movie",
  "overview": "在聚光灯下多年之后，赛琳娜·戈麦斯获得了难以想象的明星地位。但就在她到达一个新的高峰时，一个意外的转折把她拉进了黑暗。这部独特的、亲密的纪录片跨越了她六年的旅程，展现了她新的光芒。",
  "release_date": "2022-11-04",
  "douban": "",
  "poster": "tmdb_1022256.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    99,
    10402
  ],
  "vote_count": 598,
  "popularity": 12.5,
  "runtime": 95,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 208,
  "tmdb": 58474,
  "title": "宇宙时空之旅",
  "original_title": "Cosmos",
  "media_type": "tv",
  "overview": "由福斯广播公司（FOX）和国家地理频道（NGC）制作的科普巨制《宇宙》，是 1980 年科学纪录片《宇宙：个人游记》的续集，以新发明的科学叙事模式揭露宇宙的壮丽，并重新改造原始系列中备受赞誉的元素，包括宇宙日历和想象力之船，带领观众以最宏观和最微观的角度来审视宇宙。",
  "release_date": "2014-03-09",
  "douban": "",
  "poster": "tmdb_58474.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    99
  ],
  "vote_count": 1674,
  "popularity": 13.9,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 209,
  "tmdb": 576712,
  "title": "每个人的每件事",
  "original_title": "Everybody’s Everything",
  "media_type": "movie",
  "overview": "从 Lil Peep卧室录制歌曲到全球巡回演出，以及他留下的巨大影响。",
  "release_date": "2019-11-12",
  "douban": "",
  "poster": "tmdb_576712.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    99
  ],
  "vote_count": 299,
  "popularity": 0.8,
  "runtime": 116,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 210,
  "tmdb": 664280,
  "title": "大卫·爱登堡：地球上的一段生命旅程",
  "original_title": "David Attenborough: A Life on Our Planet",
  "media_type": "movie",
  "overview": "大卫·爱登堡讲述了他的一生以及地球上生命的进化史，以此来哀悼自然栖息地的消失，并表达了对未来的愿景。",
  "release_date": "2020-09-28",
  "douban": "",
  "poster": "tmdb_664280.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    99,
    18
  ],
  "vote_count": 442,
  "popularity": 6.5,
  "runtime": 83,
  "languages": [
    "en"
  ],
  "countries": [
    "GB"
  ]
},
  {
  "id": 211,
  "tmdb": 13579,
  "title": "蓝色星球",
  "original_title": "The Blue Planet",
  "media_type": "tv",
  "overview": "本节目带您进入令人叹为观止的美丽海洋世界，探索新的物种，造访无人所至的生态，并亲眼目睹从未在镜头前出现过的求生实录。在《与龙同行》、《人体漫游》之后，BBC，世界纪录片的老牌公司，再次挑战世界纪录片最高峰，以这部史上最高制作费纪录片震惊了世界，《蓝地球》以无比炫丽的画面和色彩，创造了海底摄像技术的新境界，在全球播出后，它流畅唯美的镜头和精彩的旁白，使亿万观众大开眼界，如醉如痴。从热带到极地、从岸",
  "release_date": "2001-09-12",
  "douban": "",
  "poster": "tmdb_13579.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    99
  ],
  "vote_count": 391,
  "popularity": 3.5,
  "runtime": 51,
  "languages": [
    "en"
  ],
  "countries": [
    "GB"
  ]
},
  {
  "id": 212,
  "tmdb": 359364,
  "title": "人类",
  "original_title": "Human",
  "media_type": "movie",
  "overview": "每个人背后都有一个足以撼动心灵的故事。法国知名的摄影师Yann Arthus-Bertrand就用了3年的时间，走访全球60个国家，让2,020位不同肤色、种族、性别的人，在镜头前诉说自己的故事。由乌克兰的自由战士、马里的农民，到美国的死囚，各人的故事集结成一部纪录片《人类》。纪录片中，受访者只站在纯黑色的背景中细诉自己的故事，没有花巧的剪接，甚至不多赘述受访者的身份。每个人自身的经历，足以为观众",
  "release_date": "2015-09-12",
  "douban": "",
  "poster": "tmdb_359364.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    99
  ],
  "vote_count": 311,
  "popularity": 5.1,
  "runtime": 191,
  "languages": [
    "pt",
    "it",
    "es",
    "ru",
    "el",
    "fr",
    "he",
    "en",
    "ar",
    "zh"
  ],
  "countries": [
    "FR"
  ]
},
  {
  "id": 213,
  "tmdb": 377462,
  "title": "辛普森：美国制造",
  "original_title": "O.J.: Made in America",
  "media_type": "movie",
  "overview": "继《纽约灾星》和《制造杀人犯》 之后又一部极佳的纪录剧集。本作是导演伊斯拉•埃德尔曼摄制的5集纪录电视电影。将震惊美国的著名橄榄球运动员O.J. 辛普森杀人案事件再度搬上荧幕，通过对辛普森人生轨迹的深入展现，探究美国社会最关注的两个话题：种族和名人……",
  "release_date": "2016-05-20",
  "douban": "",
  "poster": "tmdb_377462.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    99,
    80,
    36
  ],
  "vote_count": 263,
  "popularity": 0.9,
  "runtime": 467,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 214,
  "tmdb": 128876,
  "title": "披头士乐队：回归",
  "original_title": "The Beatles: Get Back",
  "media_type": "tv",
  "overview": "《指环王》导演彼得·杰克逊打造的披头士新纪录片《The Beatles：Get Back》要推出了。迪士尼前CEO、现董事会执行主席Bob Iger在年度股东大会上宣布：该片定档于9月4日北美上映。\\\\n\\\\n此前该片透露的信息是：记录的是披头士如何录制出经典名曲&专辑《Let It Be》。基于长达55小时的此前未曝光录像，包括披头士在录音室中制作的少见画面，拍摄时间为1969年1月2日-31日。1",
  "release_date": "2021-11-25",
  "douban": "",
  "poster": "tmdb_128876.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    99
  ],
  "vote_count": 404,
  "popularity": 3.6,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "NZ"
  ]
},
  {
  "id": 215,
  "tmdb": 16946,
  "title": "生命",
  "original_title": "Life",
  "media_type": "tv",
  "overview": "《生命》是由BBC制作的十集系列纪录片，从2009年10月12日开始在BBC电视台播出。本片制作共耗时四年，全部以高清方式摄制。每集50分钟，外加10分钟的拍摄花絮，总共60分钟。根据《泰晤士报》报道，本系列片耗资一千万英镑，不过BBC官方并未证实这一数字。2009年是达尔文诞辰二百周年，也是《物种起源》发表150周年。为了进行纪念，本片力图展现自然界缤纷物种的多样性，和它们为适应环境而进化出的各",
  "release_date": "2009-10-11",
  "douban": "",
  "poster": "tmdb_16946.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    99
  ],
  "vote_count": 396,
  "popularity": 2.1,
  "runtime": 50,
  "languages": [
    "en"
  ],
  "countries": [
    "IT",
    "GB",
    "GR",
    "US",
    "DE"
  ]
},
  {
  "id": 216,
  "tmdb": 8724,
  "title": "冰冻星球",
  "original_title": "Frozen Planet",
  "media_type": "tv",
  "overview": "英国BBC电视台耗时5年制作的纪录片《冰冻地球》即将于近期推出。这部耗资巨大的纪录片用镜头真实的展现了正在逐渐溶解的地球两极，以及生活在这里的各种生物，片中种种景象让人叹为观止。",
  "release_date": "2011-10-26",
  "douban": "",
  "poster": "tmdb_8724.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    99
  ],
  "vote_count": 308,
  "popularity": 2.7,
  "runtime": 50,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "GR",
    "US",
    "DE",
    "ES"
  ]
},
  {
  "id": 217,
  "tmdb": 1412113,
  "title": "鱿鱼游戏： 第二季 制作特辑",
  "original_title": "오징어 게임: 시즌2 제작 이야기",
  "media_type": "movie",
  "overview": "三年前，鱿鱼游戏由456号选手（李政宰 饰）胜出，他本想远走高飞，却在搭机赴美前临阵反悔，决心展开新计划。成奇勋再度投身这场神秘的生存游戏，又一次赌上性命，与一群新的参赛者一起争夺高达456亿韩元的奖金。",
  "release_date": "2025-01-02",
  "douban": "",
  "poster": "tmdb_1412113.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    99
  ],
  "vote_count": 450,
  "popularity": 7.2,
  "runtime": 28,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 218,
  "tmdb": 553512,
  "title": "防弹少年团：燃烧舞台电影版",
  "original_title": "번 더 스테이지: 더 무비",
  "media_type": "movie",
  "overview": "防弹少年团的故事将被拍成电影,11月CGV上映!据体育东亚独家报道,讲述防弹少年团成长故事的纪录片形式电影",
  "release_date": "2018-11-15",
  "douban": "",
  "poster": "tmdb_553512.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    10402,
    99
  ],
  "vote_count": 432,
  "popularity": 8.3,
  "runtime": 85,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 219,
  "tmdb": 396194,
  "title": "音魂掠影",
  "original_title": "Ennio",
  "media_type": "movie",
  "overview": "由著名导演#朱塞佩·托纳多雷#编剧并执导，吉亚尼·罗素、王家卫等人任监制，聚焦意大利音乐大师埃尼奥·莫里康内的传记电影#50年一瞬间的魔幻时刻#正在进行后期制作，计划2020年公映。 影片历时5年，横跨欧美进行拍摄，将以叙事手法呈现世界级音乐大师莫里康内70多年职业生涯中鲜为人知的一面，探寻他在世界领域内与著名好友、同事之间的故事。",
  "release_date": "2022-02-17",
  "douban": "",
  "poster": "tmdb_396194.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    99,
    10402,
    36
  ],
  "vote_count": 383,
  "popularity": 5.5,
  "runtime": 156,
  "languages": [
    "it"
  ],
  "countries": [
    "IT",
    "CN",
    "DE",
    "JP",
    "BE",
    "NL"
  ]
},
  {
  "id": 220,
  "tmdb": 24128,
  "title": "别假正经",
  "original_title": "Stop Making Sense",
  "media_type": "movie",
  "overview": "一部关于摇滚乐队传声头的演唱会纪实电影。",
  "release_date": "1984-10-19",
  "douban": "",
  "poster": "tmdb_24128.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    99,
    10402
  ],
  "vote_count": 366,
  "popularity": 5.5,
  "runtime": 88,
  "languages": [
    "en",
    "fr"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 221,
  "tmdb": 95171,
  "title": "Prehistoric Planet",
  "original_title": "Prehistoric Planet",
  "media_type": "tv",
  "overview": "在这部由乔恩·费儒和《地球脉动》制片团队联合制作的史诗级纪录片中，观众将以前所未有的方式体验这世界的奇观，回到那雄伟的恐龙和非凡的生物在陆地、海洋和天空中漫游的时期。",
  "release_date": "2022-05-23",
  "douban": "",
  "poster": "tmdb_95171.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    99
  ],
  "vote_count": 496,
  "popularity": 8.0,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 222,
  "tmdb": 32062,
  "title": "人类星球",
  "original_title": "Human Planet",
  "media_type": "tv",
  "overview": "　　人类是终极动物。这个星球上最成功的物种。从冰封万里的北极，到云雾氤氲的雨林，从浩瀚大海上的小岛，到烈日炙烤的沙漠，人类在最严酷的条件下也找到了适应环境生存下去的非凡途径。为谋生存，我们充满勇气，足智多谋；学习如何与其他生物共同生活，如何利用它们，与之分享自然空间。《人类星球》总共描绘了八个激励人心的故事，每集节目讲述一个居住地，揭示当地居民如何创造出令人吃惊的方法，来应对极端不利的情况。最后",
  "release_date": "2011-01-13",
  "douban": "",
  "poster": "tmdb_32062.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    99
  ],
  "vote_count": 208,
  "popularity": 3.5,
  "runtime": 60,
  "languages": [
    "en"
  ],
  "countries": [
    "US",
    "GB",
    "FR"
  ]
},
  {
  "id": 223,
  "tmdb": 611291,
  "title": "带来灵魂：防弹少年团演唱会电影",
  "original_title": "브링 더 소울: 더 무비",
  "media_type": "movie",
  "overview": "据媒体报道防弹少年团 第三部演唱会电影《Bring the Soul：The Movie》确定将于8月7日全球同步上映并公开了海报。据悉，该电影记录了防弹少年团从首尔开始经过众多的城市，结束漫长的欧洲巡演后在围坐在巴黎一个小小的屋顶举行属于他们自己的庆祝宴的模样。另外，《Bring the Soul：The Movie》将展现防弹少年团7名成员各样的魅力，他们率真坦诚的面貌将带给观众心动和感动，该",
  "release_date": "2019-08-07",
  "douban": "",
  "poster": "tmdb_611291.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    10402,
    99
  ],
  "vote_count": 460,
  "popularity": 5.4,
  "runtime": 103,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 224,
  "tmdb": 79525,
  "title": "最后的舞动",
  "original_title": "The Last Dance",
  "media_type": "tv",
  "overview": "1997 年秋天，迈克尔·乔丹和芝加哥公牛队开始了他们八年来第六个 NBA 总冠军的追逐。但是，尽管乔丹自 13 年前大放异彩以来取得了非凡成就，但主教练菲尔·杰克逊称之为“最后的舞动”的这次比赛被俱乐部高层中的紧张气氛所笼罩，因为这是最后一次看到有史以来最伟大的球员和他杰出的队友们一起奋力拼搏。",
  "release_date": "2020-04-19",
  "douban": "",
  "poster": "tmdb_79525.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    99
  ],
  "vote_count": 1477,
  "popularity": 6.2,
  "runtime": 50,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 225,
  "tmdb": 803,
  "title": "夜与雾",
  "original_title": "Nuit et Brouillard",
  "media_type": "movie",
  "overview": "　　1956年导演阿伦•雷乃用摄影机带领观众重回奥斯维辛。当年纳粹集中营的旧址上已是一片祥和美丽的野外风光。然而时间倒回到1933年纳粹党掌权之时，整个城市被阴霾笼罩，大片修建起来的集中营房排列整齐，大量犹太人被抓进集中营开始接受非人的折磨和侮辱。这里对人种进行分级，在皮肤上纹上编号，在衣服上缝制等级的徽章。疾病，饥饿，劳役使集中营尸体遍地。1942年希莱姆到访，奉行“破坏”政策，集中营难民进入",
  "release_date": "1956-05-22",
  "douban": "",
  "poster": "tmdb_803.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    99,
    36
  ],
  "vote_count": 564,
  "popularity": 4.9,
  "runtime": 32,
  "languages": [
    "fr"
  ],
  "countries": [
    "FR"
  ]
},
  {
  "id": 226,
  "tmdb": 42733,
  "title": "幽会百科",
  "original_title": "Comizi d'amore",
  "media_type": "movie",
  "overview": "　　这是一部探讨意大利人爱情与性观念的带有社会学性质的纪录片。影片向意大利各地、各种阶层，各种行业、各种年龄的男女们询问关于爱情和婚姻生活、性生活方面的各种问题，甚至采访孩子们“孩子是怎样生出来的”。他随意地把镜头和麦克风向着沐浴在阳光下悠闲散步的人们；在镜头后面，他向人们抛出了一个有关\\",
  "release_date": "1965-07-05",
  "douban": "",
  "poster": "tmdb_42733.jpg",
  "vote_average": 8.3,
  "genre_ids": [
    99
  ],
  "vote_count": 293,
  "popularity": 0.4,
  "runtime": 92,
  "languages": [
    "it"
  ],
  "countries": [
    "IT"
  ]
},
  {
  "id": 227,
  "tmdb": 46434,
  "title": "越南战争",
  "original_title": "The Vietnam War",
  "media_type": "tv",
  "overview": "著名纪录片导演肯·伯恩斯的越南战争纪录片，于2017年在美国PBS电视台播出，共10集，总时长有18小时，采访了来自各方的近80名亲历者，既有参战与反战的美国人，也有南越与北越的军民。本片历经十年制作，跨遍全球搜集资料，其中有许多少见和重新数字化的影像档案，还有20世纪最为出名的摄影照片和家庭影视，以及历史新闻片段和政府内部的秘密录音。\\\\n\\\\n随着PBS推出纪录片《越南战争》，我们得以回顾那个分裂",
  "release_date": "2017-09-17",
  "douban": "",
  "poster": "tmdb_46434.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    99,
    10768
  ],
  "vote_count": 216,
  "popularity": 3.7,
  "runtime": 0,
  "languages": [
    "en",
    "vi",
    "de"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 228,
  "tmdb": 58957,
  "title": "救援高手",
  "original_title": "Nathan for You",
  "media_type": "tv",
  "overview": "内森·菲尔德（Nathan Fielder）运用他的财务学位和生活经验来每周帮助陷入困境的企业。与真实的企业和真实的人互动时，Fielder的建议和可疑的社交技巧往往弊大于利。",
  "release_date": "2013-02-28",
  "douban": "",
  "poster": "tmdb_58957.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    35,
    99
  ],
  "vote_count": 307,
  "popularity": 4.1,
  "runtime": 21,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 229,
  "tmdb": 568300,
  "title": "防弹少年团世界巡回演唱会：在首尔爱自己",
  "original_title": "러브 유어셀프 인 서울",
  "media_type": "movie",
  "overview": "在 BTS 世界巡回演唱会 \\",
  "release_date": "2019-01-26",
  "douban": "",
  "poster": "tmdb_568300.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    10402,
    99
  ],
  "vote_count": 460,
  "popularity": 2.7,
  "runtime": 113,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ]
},
  {
  "id": 230,
  "tmdb": 576017,
  "title": "为了萨玛",
  "original_title": "For Sama",
  "media_type": "movie",
  "overview": "本片既是一段深入战争女性体验的私密旅程，也是一曲波澜壮阔的史诗。这部一位年轻母亲写给女儿的深情家书，以瓦德·卡提卜的镜头穿越叙利亚阿勒颇五年起义时光，记录她在战火蔓延中坠入爱河、缔结婚姻并诞下女儿萨玛的人生轨迹。在灾难性冲突愈演愈烈之际，她的摄像机捕捉到无数关于失去、欢笑与生存的震撼片段，而瓦德本人则深陷两难抉择，是否该为保护女儿生命逃离这座城市？离去意味着抛下她已付出巨大代价的自由抗争。",
  "release_date": "2019-07-26",
  "douban": "",
  "poster": "tmdb_576017.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    99,
    10752
  ],
  "vote_count": 309,
  "popularity": 1.6,
  "runtime": 96,
  "languages": [
    "en",
    "ar"
  ],
  "countries": [
    "GB",
    "SY"
  ]
},
  {
  "id": 231,
  "tmdb": 14002,
  "title": "天地玄黄",
  "original_title": "Baraka",
  "media_type": "movie",
  "overview": "我们是谁？从哪里来？又将归往何处？这些问题和我们的生存息息相关，但却很少有人能够给出准确的答案。历时14个月，穿越24个国家，导演罗恩·弗里克（Ron Fricke）用镜头向我们展示了大自然能够拥有的最壮阔最绚丽的景致，从远古到现在，从猿猴到人类，从荒无人烟的沙漠到震撼人心的宗教活动现场，从广袤天地带来的感动到婴孩单纯的笑脸给予的幸福，我们会发现，很多时候，我们并不能意识到，这美好的一切正时时刻",
  "release_date": "1992-09-15",
  "douban": "",
  "poster": "tmdb_14002.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    99
  ],
  "vote_count": 690,
  "popularity": 1.9,
  "runtime": 97,
  "languages": [
    "xx"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 232,
  "tmdb": 654754,
  "title": "比莉·艾利什：模糊世界",
  "original_title": "Billie Eilish: The World's a Little Blurry",
  "media_type": "movie",
  "overview": "熟悉的歌声响起，从小到大的她的影像出现，聚焦这个尚未满19岁的年轻歌手的崛起、她那些改变了自己和许多人人生的音乐、她台前幕后的生活。",
  "release_date": "2021-02-26",
  "douban": "",
  "poster": "tmdb_654754.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    99,
    10402
  ],
  "vote_count": 335,
  "popularity": 2.7,
  "runtime": 140,
  "languages": [
    "en",
    "mi",
    "de"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 233,
  "tmdb": 132719,
  "title": "纸房子：从东京到柏林",
  "original_title": "La casa de papel: De Tokio a Berlín",
  "media_type": "tv",
  "overview": "东京和教授等“金钱抢劫”角色背后的电影制片人和演员谈论拍摄金钱抢劫的情感和艺术过程。",
  "release_date": "2021-09-03",
  "douban": "",
  "poster": "tmdb_132719.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    99
  ],
  "vote_count": 256,
  "popularity": 7.1,
  "runtime": 0,
  "languages": [
    "es"
  ],
  "countries": [
    "ES"
  ]
},
  {
  "id": 234,
  "tmdb": 42044,
  "title": "浩劫",
  "original_title": "Shoah",
  "media_type": "movie",
  "overview": "历时十余年完成的这部鸿篇巨制中，克劳德·朗兹曼以九小时以上的篇幅，对这场不可想象的暴行，纳粹屠杀六百万犹太人的历史，展开了纪念碑式的调查。全片未使用任何档案影像，而是通过幸存者、前纳粹分子及其他见证者的第一手证言，以环形叙事与自由联想的结构层层交织。这部充满哲思却具有情感穿透力的作品并非对过往的简单挖掘，而是深刻揭示过去如何始终萦绕当下的精神图景，无可争议地跻身影史最重要的电影创作之列。",
  "release_date": "1985-04-21",
  "douban": "",
  "poster": "tmdb_42044.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    99,
    36
  ],
  "vote_count": 222,
  "popularity": 1.1,
  "runtime": 566,
  "languages": [
    "pl",
    "yi",
    "fr",
    "he",
    "en",
    "de"
  ],
  "countries": [
    "FR"
  ]
},
  {
  "id": 235,
  "tmdb": 740996,
  "title": "BLACKPINK：照亮天空",
  "original_title": "블랙핑크: 세상을 밝혀라",
  "media_type": "movie",
  "overview": "打破纪录的韩国女子团体 BLACKPINK 讲述她们的故事：不仅分享了为实现梦想而努力奋斗的人生旅程，还诉说了迅速走红背后所经受的试炼。",
  "release_date": "2020-10-14",
  "douban": "",
  "poster": "tmdb_740996.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    99,
    10402
  ],
  "vote_count": 521,
  "popularity": 2.1,
  "runtime": 79,
  "languages": [
    "th",
    "en",
    "ko"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 236,
  "tmdb": 164558,
  "title": "单向乐队：这就是我们",
  "original_title": "One Direction: This Is Us",
  "media_type": "movie",
  "overview": "继贾斯汀-比伯、凯蒂-佩瑞之后，英国当红偶像团体“单向乐队”(One Direction)也将拥有自己的3D音乐会纪录片，索尼公司今天宣布这部名为《单向乐队》(One Direction)的3D纪录电影将于2013年8月30日上映，索尼旗下三星影业(TriStar Pictures)将负责发行。",
  "release_date": "2013-08-20",
  "douban": "",
  "poster": "tmdb_164558.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    99,
    10402
  ],
  "vote_count": 1067,
  "popularity": 1.9,
  "runtime": 92,
  "languages": [
    "pt",
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 237,
  "tmdb": 103847,
  "title": "MATARIFE: Un genocida innombrable",
  "original_title": "MATARIFE: Un genocida innombrable",
  "media_type": "tv",
  "overview": "暂无简介",
  "release_date": "2020-05-22",
  "douban": "",
  "poster": "tmdb_103847.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    99
  ],
  "vote_count": 324,
  "popularity": 0.4,
  "runtime": 25,
  "languages": [
    "es"
  ],
  "countries": [
    "AU",
    "US"
  ]
},
  {
  "id": 238,
  "tmdb": 90,
  "title": "空中浩劫",
  "original_title": "Mayday",
  "media_type": "tv",
  "overview": "本节目以模拟演出的方式，分别以乘客、机师等不同人的视角，从事故发生前一段时间到事故发生、后续善后及调查为止，重现事件的整个过程。在片中会穿插对于乘客及机师的访谈（若有生还者愿意受访时）或播放航空交通管制录音（若有事故发生时录音，且相关单位允许公开时），另外也会访问空难调查人员、目击者、相关人员的家属等。取材以事故调查报告及相关新闻报导为主；若因调查单位不公开报告以致无法取得事故调查报告时，则会征询",
  "release_date": "2003-09-03",
  "douban": "",
  "poster": "tmdb_90.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    99,
    18,
    80
  ],
  "vote_count": 284,
  "popularity": 61.5,
  "runtime": 46,
  "languages": [
    "ja",
    "es",
    "ru",
    "fr",
    "en",
    "de"
  ],
  "countries": [
    "CA"
  ]
},
  {
  "id": 239,
  "tmdb": 87083,
  "title": "一级方程式：疾速争胜",
  "original_title": "Formula 1: Drive to Survive",
  "media_type": "tv",
  "overview": "每一个竞争激烈的赛季，不论赛道内外，一级方程式赛车选手、领队主管还有车队老板都过着赛车般分秒必争的快节奏生活。 剧集不光展现瞬息万变的赛道竞速，记录可能发生的车祸和意外，「比赛就像是一次次心脏病发作」，也将跟随车手了解他们在大赛前后的艰苦训练，讲述他们与家人和车队之间的故事。",
  "release_date": "2019-03-08",
  "douban": "",
  "poster": "tmdb_87083.jpg",
  "vote_average": 8.2,
  "genre_ids": [
    99
  ],
  "vote_count": 628,
  "popularity": 12.8,
  "runtime": 0,
  "languages": [
    "en",
    "it",
    "de"
  ],
  "countries": [
    "GB"
  ]
},
  {
  "id": 240,
  "tmdb": 74406,
  "title": "皇后乐队：演出岁月",
  "original_title": "Queen: Days of Our Lives",
  "media_type": "movie",
  "overview": "1971年，四个大学生聚在一起组成了一个摇滚乐队。从那时起，这支名为皇后的乐队已经发行了26张专辑，在全球范围内销售了超过3亿张唱片。40年来，弗雷迪-墨丘利、布莱恩-梅、罗杰-泰勒和约翰-迪肯的知名度比以往任何时候都要高。但这不是玫瑰花床。没有快乐的航行。皇后乐队曾遭受过打击，但他们挺过来了，这就是他们如何做到的，背景是来自全球各个角落的精彩音乐和令人惊叹的现场表演。在这部影片中，第一次由乐队来",
  "release_date": "2011-05-29",
  "douban": "",
  "poster": "tmdb_74406.jpg",
  "vote_average": 8.1,
  "genre_ids": [
    10402,
    99
  ],
  "vote_count": 200,
  "popularity": 0.3,
  "runtime": 120,
  "languages": [
    "en"
  ],
  "countries": [
    "GB"
  ]
},
  {
  "id": 241,
  "tmdb": 265297,
  "title": "地球之盐",
  "original_title": "Le sel de la terre",
  "media_type": "movie",
  "overview": "在过去的四十年里，摄影师塞巴斯蒂昂·萨尔加多游历各大洲，追随变迁中的人类足迹。他见证了近代历史上一些重大事件：国际冲突、饥荒与逃亡。如今，他正投身于一个宏大的摄影项目，探索原始地域、野生动植物以及壮丽景观，以此致敬地球之美。",
  "release_date": "2014-08-29",
  "douban": "",
  "poster": "tmdb_265297.jpg",
  "vote_average": 8.1,
  "genre_ids": [
    99
  ],
  "vote_count": 681,
  "popularity": 1.7,
  "runtime": 110,
  "languages": [
    "pt",
    "en",
    "fr"
  ],
  "countries": [
    "IT",
    "BR",
    "FR"
  ]
},
  {
  "id": 242,
  "tmdb": 58496,
  "title": "永远的车神",
  "original_title": "Senna",
  "media_type": "movie",
  "overview": "影片讲述了巴西传奇车手埃尔顿·赛纳传奇的一生。一级方程式车手赛纳在其职业生涯中参加了161场大奖赛、41次冠军、65次排头位、三次一级方程式大奖赛年度总冠军，以其勇敢、智慧，奔驰在赛场上10年，创造出了不平凡的成绩，成为当代世界最优秀的赛车手，被誉为“赛车王子”……不幸的是， 1994年5月1日在圣马力诺的伊莫拉赛道上撞车身亡，年仅34岁。",
  "release_date": "2010-10-07",
  "douban": "",
  "poster": "tmdb_58496.jpg",
  "vote_average": 8.1,
  "genre_ids": [
    99
  ],
  "vote_count": 1197,
  "popularity": 2.5,
  "runtime": 106,
  "languages": [
    "ja",
    "pt",
    "en",
    "fr"
  ],
  "countries": [
    "FR",
    "GB",
    "US"
  ]
},
  {
  "id": 243,
  "tmdb": 30238,
  "title": "地球公民",
  "original_title": "Earthlings",
  "media_type": "movie",
  "overview": "本片从包括肉食、鱼、蛋类和奶制品等的畜牧业，包括皮革和皮草等的服装，包括马戏团、体育、动物园等的娱乐动物，伴侣动物，试验动物等全面地揭露了当今人类是如何大规模地屠杀和虐待动物。影片让观众看到，我们这个星球已经成为了一个巨大的屠宰场，人类已经堕落到何等残忍和无知的境地而不自觉。对于动物来说，地球如同地狱。",
  "release_date": "2005-09-24",
  "douban": "",
  "poster": "tmdb_30238.jpg",
  "vote_average": 8.1,
  "genre_ids": [
    99
  ],
  "vote_count": 342,
  "popularity": 1.4,
  "runtime": 95,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 244,
  "tmdb": 89708,
  "title": "轮回",
  "original_title": "Samsara",
  "media_type": "movie",
  "overview": "　　《轮回》是一场跨越25个国家的视觉之旅，Ron Fricke花费了5年之间捕捉每种文化中令人震撼的场面，试图建立人类与自然的桥梁。影片的名字“Samsara”来自藏语，Frricke希望借此诠释其独特的视觉风格。全片使用70mm胶片拍摄，才得以保证影像如此细腻丰富的质感 。Samsara是藏语，又叫做依业轮回，是表示生命流转循环的意思。编剧罗恩·弗里克和Mark Magidson用精彩的画面诠",
  "release_date": "2011-09-16",
  "douban": "",
  "poster": "tmdb_89708.jpg",
  "vote_average": 8.1,
  "genre_ids": [
    99
  ],
  "vote_count": 689,
  "popularity": 1.7,
  "runtime": 102,
  "languages": [
    "xx"
  ],
  "countries": [
    "GH",
    "NA",
    "IT",
    "US",
    "CN",
    "KR",
    "ID",
    "DK",
    "AE",
    "EG",
    "JP",
    "BR",
    "SA",
    "ET",
    "JO",
    "TH"
  ]
},
  {
  "id": 245,
  "tmdb": 593691,
  "title": "HOMECOMING: A film by Beyoncé",
  "original_title": "HOMECOMING: A film by Beyoncé",
  "media_type": "movie",
  "overview": "碧昂丝柯契拉(Coachella)音乐节纪录片[归家：碧昂丝作品](Homecoming: A Film By Beyoncé，暂译)首曝繁体中字预告！该片将记录碧昂丝在柯契拉(Coachella)音乐节的台前幕后。影片将于4月17日登陆Netflix",
  "release_date": "2019-04-16",
  "douban": "",
  "poster": "tmdb_593691.jpg",
  "vote_average": 8.1,
  "genre_ids": [
    99,
    10402,
    10770
  ],
  "vote_count": 350,
  "popularity": 1.5,
  "runtime": 137,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 246,
  "tmdb": 1058616,
  "title": "马里乌波尔20天",
  "original_title": "20 Days in Mariupol",
  "media_type": "movie",
  "overview": "俄罗斯入侵开始后，一支被困在被围困城市马里乌波尔的乌克兰记者团队，在艰难中坚持记录战争暴行。",
  "release_date": "2023-07-14",
  "douban": "",
  "poster": "tmdb_1058616.jpg",
  "vote_average": 8.1,
  "genre_ids": [
    99,
    10752
  ],
  "vote_count": 290,
  "popularity": 1.2,
  "runtime": 94,
  "languages": [
    "ru",
    "en",
    "uk"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 247,
  "tmdb": 45318,
  "title": "Ilha das Flores",
  "original_title": "Ilha das Flores",
  "media_type": "movie",
  "overview": "暂无简介",
  "release_date": "1989-09-06",
  "douban": "",
  "poster": "tmdb_45318.jpg",
  "vote_average": 8.1,
  "genre_ids": [
    99
  ],
  "vote_count": 227,
  "popularity": 0.4,
  "runtime": 13,
  "languages": [
    "pt"
  ],
  "countries": [
    "BR"
  ]
},
  {
  "id": 248,
  "tmdb": 1128559,
  "title": "超/人：克里斯托弗·里夫的故事",
  "original_title": "Super/Man: The Christopher Reeve Story",
  "media_type": "movie",
  "overview": "前所未见的家庭影片和非凡的个人档案揭示了克里斯托弗·里夫是如何从默默无闻的演员成为终极银幕超级英雄的标志性电影明星的。 克里斯托弗·里夫在一次悲惨事故中四肢瘫痪，只能依靠呼吸机呼吸，此后他作为一名活动家领悟到了英雄主义的真谛。 电影制作人伊恩·邦霍特（Ian Bonhôte）和彼得·埃特迪吉（Peter Ettedgui）巧妙地将时间前后推移，编织出双重叙事，探讨了克里斯托弗·里夫职业生涯中两个关",
  "release_date": "2024-09-21",
  "douban": "",
  "poster": "tmdb_1128559.jpg",
  "vote_average": 8.1,
  "genre_ids": [
    99
  ],
  "vote_count": 205,
  "popularity": 1.7,
  "runtime": 104,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 249,
  "tmdb": 15584,
  "title": "一封关于父亲的信",
  "original_title": "Dear Zachary: A Letter to a Son About His Father",
  "media_type": "movie",
  "overview": "本片是一部极具个人色彩的纪录片，深情而强烈地讲述了柯特挚友被谋杀的案件，以及随后发生的、令人难以置信的法律与情感疯狂。[Oscilloscope Pictures]",
  "release_date": "2008-10-31",
  "douban": "",
  "poster": "tmdb_15584.jpg",
  "vote_average": 8.0,
  "genre_ids": [
    99,
    80
  ],
  "vote_count": 581,
  "popularity": 1.7,
  "runtime": 94,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 250,
  "tmdb": 25771,
  "title": "平克·弗洛伊德：庞贝古城现场录音纪录片",
  "original_title": "Pink Floyd: Live at Pompeii",
  "media_type": "movie",
  "overview": "Pink Floyd在庞贝古城的Live DVD ISO 1971年10月， 当时还正年轻的平克们在庞贝古城已经有两千多年历史的古罗马圆形剧场上，进行了一次没有现场观众的演出。 这次演出被制成电影于1972年的9月在爱丁堡音乐节上做了首映， 1974年开始在欧美各地全面上映， 反响不俗， 随后发行的录像带也成了市面上的长销品种。  　　今年的十月份， 经过长久的等待之后， 环球公司终于发行了这张名",
  "release_date": "1972-10-25",
  "douban": "",
  "poster": "tmdb_25771.jpg",
  "vote_average": 8.0,
  "genre_ids": [
    10402,
    99
  ],
  "vote_count": 223,
  "popularity": 1.1,
  "runtime": 62,
  "languages": [
    "en"
  ],
  "countries": [
    "DE",
    "GB",
    "BE",
    "FR"
  ]
},
  {
  "id": 251,
  "tmdb": 489471,
  "title": "黎明墙",
  "original_title": "The Dawn Wall",
  "media_type": "movie",
  "overview": "讲述两名男子徒手征服“世界最难攀登绝壁”黎明墙的经历，热血沸腾鼓舞人心[并不简单] 2015年1月，Tommy Caldwell和Kevin Jorgeson开始攀登，两人在陡峭的垂直悬崖上生活了数周，引发了全球媒体的狂热关注。对Caldwell来说，这不仅仅是一次攀登，也是证明自己的强大之处的机会：22岁时，Caldwell被吉尔吉斯斯坦叛军挟持为人质，不久后他在一次事故中失去食指。两人耗时将近",
  "release_date": "2017-11-01",
  "douban": "",
  "poster": "tmdb_489471.jpg",
  "vote_average": 8.0,
  "genre_ids": [
    99,
    12
  ],
  "vote_count": 351,
  "popularity": 1.6,
  "runtime": 101,
  "languages": [
    "en"
  ],
  "countries": [
    "AT",
    "US"
  ]
},
  {
  "id": 252,
  "tmdb": 204284,
  "title": "人生彩排",
  "original_title": "The Rehearsal",
  "media_type": "tv",
  "overview": "内森·菲尔德（Nathan Fielder）拥有一支建筑团队、大批演员和看似无限的资源，他让普通人能够通过精心制作的自己设计的模拟来“排练”生活中最重要的时刻，从而为生活中最重要的时刻做好准备。当一次失误就可以摧毁你的整个世界时，为什么要把生命留给机遇呢？",
  "release_date": "2022-07-15",
  "douban": "",
  "poster": "tmdb_204284.jpg",
  "vote_average": 8.0,
  "genre_ids": [
    35,
    99
  ],
  "vote_count": 256,
  "popularity": 3.7,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 253,
  "tmdb": 61929,
  "title": "纽约灾星",
  "original_title": "The Jinx: The Life and Deaths of Robert Durst",
  "media_type": "tv",
  "overview": "罗伯特·德斯特（Robert A. Durst）这位纽约的房地产家族后裔在美国新奥尔良被捕。当地执法官员称德斯特涉嫌15年前发生在洛杉矶的一起谋杀案。事实上，多年以来德斯特一直身处舆论的漩涡之中。1982年他的第一任妻子莫名消失，2000年他的密友在洛杉矶被杀害，案件至今仍悬而未决。2001年，住在德克萨斯的德斯特邻居被射杀并且遭肢解。这一系列围绕着德斯特的谜团，引起了HBO导演的兴趣。",
  "release_date": "2015-02-08",
  "douban": "",
  "poster": "tmdb_61929.jpg",
  "vote_average": 8.0,
  "genre_ids": [
    99,
    80
  ],
  "vote_count": 518,
  "popularity": 3.2,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 254,
  "tmdb": 1214667,
  "title": "制作鱿鱼游戏：挑战",
  "original_title": "Making Squid Game: The Challenge",
  "media_type": "movie",
  "overview": "深入幕后，见证“鱿鱼游戏”启发的真人秀节目是如何从剧本化剧情转变为一场紧张刺激、扣人心弦的竞争的。",
  "release_date": "2023-12-06",
  "douban": "",
  "poster": "tmdb_1214667.jpg",
  "vote_average": 8.0,
  "genre_ids": [
    99
  ],
  "vote_count": 236,
  "popularity": 0.8,
  "runtime": 30,
  "languages": [
    "en"
  ],
  "countries": [
    "GB"
  ]
},
  {
  "id": 255,
  "tmdb": 479626,
  "title": "艾维奇的真实故事",
  "original_title": "Avicii: True Stories",
  "media_type": "movie",
  "overview": "《艾维奇的真实故事》讲述了艾维奇的内心故事，从内部记录了其丰富的个人和家庭故事及幕后花絮镜头。导演莱万·齐库里什维利（Levan Tsikurishvili）和艾维奇共事四年有余，记录了他的诸多经历和想法。",
  "release_date": "2017-10-26",
  "douban": "",
  "poster": "tmdb_479626.jpg",
  "vote_average": 8.0,
  "genre_ids": [
    10402,
    99
  ],
  "vote_count": 355,
  "popularity": 0.7,
  "runtime": 97,
  "languages": [
    "en",
    "sv",
    "de"
  ],
  "countries": [
    "SE",
    "US"
  ]
},
  {
  "id": 256,
  "tmdb": 490003,
  "title": "与我为邻",
  "original_title": "Won't You Be My Neighbor?",
  "media_type": "movie",
  "overview": "本片近距离审视了美国最受欢迎的邻居：弗雷德·罗杰斯先生。这部情感真挚而动人的电影，为我们呈现了一位我们自以为熟悉的人物形象，带领我们超越他那件标志性的拉链毛衣与幻想国度，走进一位富有创造力的天才的内心。他以悲悯与无限的想象力，启迪了一代又一代的孩子。",
  "release_date": "2018-06-29",
  "douban": "",
  "poster": "tmdb_490003.jpg",
  "vote_average": 8.0,
  "genre_ids": [
    99
  ],
  "vote_count": 590,
  "popularity": 1.4,
  "runtime": 95,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 257,
  "tmdb": 31225,
  "title": "巴黎在燃烧",
  "original_title": "Paris Is Burning",
  "media_type": "movie",
  "overview": "时装舞从何而来？“甩眼色”又究竟是什么意思？这部里程碑式的纪录片通过纽约哈林区非裔与拉丁裔变装舞会文化的视角，生动捕捉了1980年代的时代剪影。历时七年制作完成的本片以亲密视角记录了相互竞争的时尚“舞团”，从争夺奖杯的激烈角逐，到舞团之母在充斥着恐同、跨性别恐惧、种族歧视、艾滋病与贫困的世界中维系生存。片中汇聚传奇时装舞者、变装皇后与跨性别女性，包括威利·忍者、佩珀·拉贝贾、多里安·科里和维纳",
  "release_date": "1991-03-13",
  "douban": "",
  "poster": "tmdb_31225.jpg",
  "vote_average": 8.0,
  "genre_ids": [
    99
  ],
  "vote_count": 545,
  "popularity": 2.1,
  "runtime": 78,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 258,
  "tmdb": 213609,
  "title": "我们星球上的生命",
  "original_title": "Life on Our Planet",
  "media_type": "tv",
  "overview": "这是关于生命在地球上如何奋力征服和生存的史诗故事。今天，地球上有 2000 万个物种，但我们所看到的只是时间的剪影，99% 的地球居民已经消失在久远的过去。这些王朝的崛起和衰落的故事令人惊叹。与 Industrial Light & Magic 合作，这部开创性的自然纪录片使用最新的技术和科学方法让灭绝已久的生物在荧幕上复活，揭示了我们星球上令人难以置信的生命故事。",
  "release_date": "2023-10-25",
  "douban": "",
  "poster": "tmdb_213609.jpg",
  "vote_average": 8.0,
  "genre_ids": [
    99
  ],
  "vote_count": 200,
  "popularity": 6.0,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 259,
  "tmdb": 774372,
  "title": "爱莉安娜·格兰德：嗨，我爱你",
  "original_title": "ariana grande: excuse me, i love you",
  "media_type": "movie",
  "overview": "爱莉安娜·格兰德登上伦敦的舞台，奉上“甜到翻世界巡回演唱会”，并分享了她在排练和巡演中的幕后生活。",
  "release_date": "2020-12-21",
  "douban": "",
  "poster": "tmdb_774372.jpg",
  "vote_average": 8.0,
  "genre_ids": [
    10402,
    99
  ],
  "vote_count": 376,
  "popularity": 1.1,
  "runtime": 97,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 260,
  "tmdb": 1232493,
  "title": "唯一的家园",
  "original_title": "لا أرض أخرى",
  "media_type": "movie",
  "overview": "来自约旦河西岸马萨费尔亚塔的年轻巴勒斯坦活动家巴塞尔·阿德拉，自幼便为反抗以色列占领军对其社群的大规模驱逐而抗争。他持续记录家乡村落遭蚕食消亡的过程：以色列政府派遣的士兵逐步拆毁房屋，驱离居民。某个时刻，他结识了以色列记者尤瓦尔，后者支持他的抗争行动。一段看似不可能的同盟由此建立。但两人关系因彼此处境的巨大不平等而日益紧张：巴塞尔生活在军事占领下，尤瓦尔却享有自由无拘的生活。这部由四位年轻活动家组",
  "release_date": "2024-11-01",
  "douban": "",
  "poster": "tmdb_1232493.jpg",
  "vote_average": 8.0,
  "genre_ids": [
    99
  ],
  "vote_count": 306,
  "popularity": 1.9,
  "runtime": 92,
  "languages": [
    "he",
    "en"
  ],
  "countries": [
    "NO",
    "PS"
  ]
},
  {
  "id": 261,
  "tmdb": 680058,
  "title": "泰国洞穴救援",
  "original_title": "The Rescue",
  "media_type": "movie",
  "overview": "详尽记录了2018年那场牵动全球人心的绝境求生奇迹：从泰国北部被洪水淹没的洞穴深处，营救十二名少年足球队员及其教练的惊险行动。通过大量首次公开的影像素材与独家访谈，导演伊丽莎白·柴·瓦沙瑞莉与金国威带领观众屏息凝神，重现这场现代最危急非凡的救援行动，既展现了洞穴潜水的高风险世界，也映照出救援者惊人的勇气与悲悯，以及国际社会为拯救生命而凝聚的共通人性光辉。[Greenwich Entertainme",
  "release_date": "2021-10-08",
  "douban": "",
  "poster": "tmdb_680058.jpg",
  "vote_average": 8.0,
  "genre_ids": [
    99,
    18
  ],
  "vote_count": 267,
  "popularity": 1.5,
  "runtime": 107,
  "languages": [
    "th",
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 262,
  "tmdb": 23128,
  "title": "海豚湾",
  "original_title": "The Cove",
  "media_type": "movie",
  "overview": "在这部扣人心弦的生态惊悚片中，一支由潜水员、活动家与特效专家组成的精英团队潜入日本一处秘密海湾，旨在揭露历史上最触目惊心且超乎想象的反自然罪行之一。[Roadside Attractions]",
  "release_date": "2009-07-31",
  "douban": "",
  "poster": "tmdb_23128.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99
  ],
  "vote_count": 679,
  "popularity": 1.4,
  "runtime": 92,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 263,
  "tmdb": 4539,
  "title": "黑暗之心",
  "original_title": "Hearts of Darkness: A Filmmaker's Apocalypse",
  "media_type": "movie",
  "overview": "这部纪录片详尽记录了弗朗西斯·福特·科波拉的《现代启示录》（1979）在剧本、拍摄、预算和选角方面如何饱受非同寻常的困扰，几乎摧毁了这位著名导演的生活与职业生涯。",
  "release_date": "1991-11-27",
  "douban": "",
  "poster": "tmdb_4539.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99
  ],
  "vote_count": 415,
  "popularity": 1.4,
  "runtime": 96,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 264,
  "tmdb": 84334,
  "title": "寻找小糖人",
  "original_title": "Searching for Sugar Man",
  "media_type": "movie",
  "overview": "罗德里格斯在上世纪70年代发行过两张专辑《Cold Fact》与《Coming From Reality》，在南非有超过50万的销量且知名度可与滚石乐队相提并论。但与其他知名的美国歌手不同，南非的歌迷得不到任何一点关于罗德里格斯的信息，除了专辑歌曲之外唯一能了解的只有专 辑封面上一张并不清晰的相片。两张专辑后，他好像也就此销声匿迹。对于在南非的辉煌成绩，罗德里格斯其实并不知情，他在美国过着截然不同",
  "release_date": "2012-06-30",
  "douban": "",
  "poster": "tmdb_84334.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    10402,
    99
  ],
  "vote_count": 1028,
  "popularity": 1.3,
  "runtime": 85,
  "languages": [
    "en"
  ],
  "countries": [
    "SE",
    "GB"
  ]
},
  {
  "id": 265,
  "tmdb": 407806,
  "title": "第十三修正案",
  "original_title": "13th",
  "media_type": "movie",
  "overview": "艾娃·德约列执导的纪录片的标题指向宪法第十三修正案，其内容为：“在合众国境内受合众国管辖的任何地方，奴隶制和强制劳役都不得存在，唯作为对依法判罪者犯罪之惩罚除外。”德约列以令人警醒的清晰思路，揭示了从这一附加条款到大规模刑事定罪及庞大的美国监狱工业体系的恐怖演变过程。通过有力融合档案影像与来自众多活动家、政治家、历史学家以及曾身陷囹圄的男女的证词，德约列创作了一部宏大的历史综合之作。",
  "release_date": "2016-10-07",
  "douban": "",
  "poster": "tmdb_407806.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99
  ],
  "vote_count": 792,
  "popularity": 2.1,
  "runtime": 100,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 266,
  "tmdb": 549559,
  "title": "阿波罗11号",
  "original_title": "Apollo 11",
  "media_type": "movie",
  "overview": "导演托德·道格拉斯·米勒带来这部历时五十年酝酿的影像盛宴。影片从新近发现的一批65毫米胶片素材及超过一万一千小时的未归档音频记录中精心构筑，将我们直接带入美国国家航空航天局最负盛名的任务核心，人类首次登月，令尼尔·阿姆斯特朗与巴兹·奥尔德林的名字永远镌刻于历史。我们沉浸于宇航员、任务控制中心团队以及地面数百万观众的视角，生动体验1969年那些改变人类命运的日夜，当人类向未来迈出巨大一步的时刻。",
  "release_date": "2019-03-01",
  "douban": "",
  "poster": "tmdb_549559.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99,
    36,
    18
  ],
  "vote_count": 705,
  "popularity": 1.5,
  "runtime": 93,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 267,
  "tmdb": 226135,
  "title": "阿诺·施瓦辛格：人生三部曲",
  "original_title": "Arnold",
  "media_type": "tv",
  "overview": "这部近距离系列纪录片聚焦阿诺·施瓦辛格，从健美冠军到好莱坞偶像再到政客，多方位展示了他的生活与职业。",
  "release_date": "2023-06-07",
  "douban": "",
  "poster": "tmdb_226135.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99
  ],
  "vote_count": 247,
  "popularity": 3.2,
  "runtime": 0,
  "languages": [
    "en",
    "de"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 268,
  "tmdb": 263614,
  "title": "维龙加",
  "original_title": "Virunga",
  "media_type": "movie",
  "overview": "这部纪录片聚焦于一群保护濒危大猩猩的公园管理者团队和偷猎者在非洲最古老的国家公园“维龙加”发生的猎杀冲突。",
  "release_date": "2014-11-07",
  "douban": "",
  "poster": "tmdb_263614.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99,
    10752
  ],
  "vote_count": 234,
  "popularity": 0.6,
  "runtime": 100,
  "languages": [
    "sw",
    "en",
    "fr"
  ],
  "countries": [
    "CD",
    "GB"
  ]
},
  {
  "id": 269,
  "tmdb": 515042,
  "title": "徒手攀岩",
  "original_title": "Free Solo",
  "media_type": "movie",
  "overview": "本片是一部震撼、直观且不加修饰的纪录片，真实记录了无保护攀岩者亚历克斯·霍诺尔德为实现毕生梦想所做的准备：在无绳索保护的情况下，攀登世界上最具标志性的岩壁，约塞米蒂国家公园高达914米（3000英尺）的埃尔卡皮坦峰。",
  "release_date": "2018-09-28",
  "douban": "",
  "poster": "tmdb_515042.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99,
    12
  ],
  "vote_count": 1517,
  "popularity": 2.4,
  "runtime": 100,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 270,
  "tmdb": 355020,
  "title": "凛冬烈火：乌克兰为自由而战",
  "original_title": "Winter on Fire: Ukraine's Fight for Freedom",
  "media_type": "movie",
  "overview": "纪录片在乌克兰骚乱期间，2013和2014，作为学生游行支持欧洲一体化发展成暴力革命呼吁总统亚努科维奇辞职。",
  "release_date": "2015-09-03",
  "douban": "",
  "poster": "tmdb_355020.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99
  ],
  "vote_count": 320,
  "popularity": 0.8,
  "runtime": 98,
  "languages": [
    "ru",
    "en",
    "uk"
  ],
  "countries": [
    "UA",
    "GB",
    "US"
  ]
},
  {
  "id": 271,
  "tmdb": 566213,
  "title": "蜂蜜之地",
  "original_title": "Медена земја",
  "media_type": "movie",
  "overview": "哈迪丝与患病的母亲居住在马其顿山区，依靠古老养蜂技艺维持生计。当一户不安分的人家搬到隔壁，起初看似慰藉她孤独的陪伴，却因对方同样想要养蜂却无视她的劝告，逐渐演变成矛盾的根源。",
  "release_date": "2019-07-26",
  "douban": "",
  "poster": "tmdb_566213.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99
  ],
  "vote_count": 301,
  "popularity": 1.2,
  "runtime": 89,
  "languages": [
    "bs",
    "hr",
    "sr",
    "tr",
    "mk"
  ],
  "countries": [
    "MK"
  ]
},
  {
  "id": 272,
  "tmdb": 11314,
  "title": "失衡生活",
  "original_title": "Koyaanisqatsi",
  "media_type": "movie",
  "overview": "1983年，受 IRS (Institute of Regional Study) 委托，导演雷吉奥拍出了一部非叙事性的电视片，在这基础上，Qatsi系列第一部惊世之作《失衡生活》(Koyaanisqatsi)应运而生。在得到了包括卢卡斯、科波拉等人的大力支持与推广之后，《失衡生活》在当时形成了轰动性的效果。\\",
  "release_date": "1983-04-27",
  "douban": "",
  "poster": "tmdb_11314.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99,
    10402
  ],
  "vote_count": 770,
  "popularity": 1.8,
  "runtime": 86,
  "languages": [
    "xx"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 273,
  "tmdb": 250658,
  "title": "互联网之子",
  "original_title": "The Internet's Own Boy: The Story of Aaron Swartz",
  "media_type": "movie",
  "overview": "本片《互联网之子》讲的是编程天才和信息活动家 亚伦·斯沃茨 的故事。  从参与基础互联网协议RSS到联合创办Reddit，斯沃茨的足迹遍及整个互联网。  但斯沃茨在社会公正和政治组织方面的开创性工作，以及对信息存取的雄心壮志，  使他陷入了一场两年之久的法律噩梦。  这场战斗最终以他结束自己26岁的生命而收场。  亚伦的故事也触动了对他如雷贯耳的网络社区之外的人们。",
  "release_date": "2014-06-27",
  "douban": "",
  "poster": "tmdb_250658.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99,
    80
  ],
  "vote_count": 462,
  "popularity": 1.8,
  "runtime": 105,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 274,
  "tmdb": 682110,
  "title": "我的章鱼老师",
  "original_title": "My Octopus Teacher",
  "media_type": "movie",
  "overview": "在花了数年时间拍摄地球上一些最危险的动物后，克雷格·福斯特疲惫不堪、情绪低落，并且家庭关系也陷入混乱之中。他决定暂停自己的事业，并回到家乡南非开普敦，重返海岸附近的海藻林，这里的神奇水下世界是他的原点。近十年来，克雷格每天都要在冰冷的海水中潜水，在地球上捕食者最密集的地方之一脱掉 潜水服和潜水装备。他遇到并追踪的普通章鱼最初是他的研究对象，然后成为了他的老师，向他展示了人类从未见过的东西。《我的章",
  "release_date": "2020-09-04",
  "douban": "",
  "poster": "tmdb_682110.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99
  ],
  "vote_count": 1037,
  "popularity": 2.0,
  "runtime": 85,
  "languages": [
    "en",
    "fr"
  ],
  "countries": [
    "GB",
    "ZA"
  ]
},
  {
  "id": 275,
  "tmdb": 1226841,
  "title": "流行乐最传奇一夜",
  "original_title": "The Greatest Night in Pop",
  "media_type": "movie",
  "overview": "1985 年 1 月的一个夜晚，音乐界最大牌的明星聚在一起，录制《四海一家》。这部纪录片带我们走进该历史性事件的幕后。",
  "release_date": "2024-01-19",
  "douban": "",
  "poster": "tmdb_1226841.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99,
    10402
  ],
  "vote_count": 288,
  "popularity": 2.2,
  "runtime": 97,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "US"
  ]
},
  {
  "id": 276,
  "tmdb": 493100,
  "title": "罗宾·威廉姆斯：记忆深处",
  "original_title": "Robin Williams: Come Inside My Mind",
  "media_type": "movie",
  "overview": "暂无简介",
  "release_date": "2018-01-19",
  "douban": "",
  "poster": "tmdb_493100.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99
  ],
  "vote_count": 262,
  "popularity": 1.1,
  "runtime": 116,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 277,
  "tmdb": 64439,
  "title": "制造杀人犯",
  "original_title": "Making a Murderer",
  "media_type": "tv",
  "overview": "30年前，他被冤入狱，被关18年终于因为新的DNA证据被证无罪。结果刚提出3600万赔偿却又再次成了血腥杀人案的唯一嫌疑人被判终身监禁。究竟是真的有罪还是警方栽赃陷害？纪录片播出之后，已经有15万人为他请愿。虽然判决已经论定，但是真相却永远没人知道......",
  "release_date": "2015-12-18",
  "douban": "",
  "poster": "tmdb_64439.jpg",
  "vote_average": 7.9,
  "genre_ids": [
    99,
    80
  ],
  "vote_count": 564,
  "popularity": 1.6,
  "runtime": 60,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 278,
  "tmdb": 691179,
  "title": "老友记重聚特辑",
  "original_title": "Friends: The Reunion",
  "media_type": "movie",
  "overview": "美国经典喜剧《老友记》的六位主演詹妮弗·安妮斯顿、柯特妮·考克斯、丽莎·库卓、大卫·休默、马特·勒布朗、马修·派瑞在剧集完结的17年后重新聚首，接受主持人James Corden的采访，回忆拍摄趣事和电视剧对他们的人生影响。",
  "release_date": "2021-05-27",
  "douban": "",
  "poster": "tmdb_691179.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99
  ],
  "vote_count": 1329,
  "popularity": 3.3,
  "runtime": 104,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 279,
  "tmdb": 653567,
  "title": "美国甜心小姐",
  "original_title": "Miss Americana",
  "media_type": "movie",
  "overview": "在这部直击幕后的纪录片中，泰勒·斯威夫特彰显自己歌曲创作者和表演者的身份，展示作为女性如何充分利用自己声音的力量。",
  "release_date": "2020-01-31",
  "douban": "",
  "poster": "tmdb_653567.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99,
    10402
  ],
  "vote_count": 646,
  "popularity": 1.3,
  "runtime": 85,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 280,
  "tmdb": 191720,
  "title": "佐杜洛夫斯基的沙丘",
  "original_title": "Jodorowsky's Dune",
  "media_type": "movie",
  "overview": "1974年，智利籍法國導演Alejandro Jodorowsky展開了一項誇張的計畫，將Frank Herbert極具影響力的小說《沙丘》（Dune，1969）改編成電影。在投入兩年時間與數百萬美元後，這項龐大的計畫以失敗告終；但 Jodorowsky 為了完成這項計畫所召集的藝術家們卻繼續合作，並為現代科幻電影奠定了基礎。",
  "release_date": "2013-08-30",
  "douban": "",
  "poster": "tmdb_191720.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99
  ],
  "vote_count": 761,
  "popularity": 1.2,
  "runtime": 87,
  "languages": [
    "es",
    "en",
    "fr",
    "de"
  ],
  "countries": [
    "US",
    "FR"
  ]
},
  {
  "id": 281,
  "tmdb": 801058,
  "title": "海洋阴谋",
  "original_title": "Seaspiracy",
  "media_type": "movie",
  "overview": "开创性纪录片《奶牛阴谋》的联合创剧人带来《海洋阴谋》，这部后续纪录片揭示了令人担忧的事实：人类行为已对海洋环境造成广泛的破坏，但这点却鲜为人知。电影制作人阿里·塔瑞兹原本只打算拍摄他心爱的海洋，但后来却发现自己在审视人类对脆弱的海洋所造成的伤害。从污染水域的塑料和渔具，到底拖作业和副渔获造成的不可挽回的破坏，再到非法捕鱼和毁灭性的狩猎行为，人类正在对海洋生物造成重创，进而威胁到整个地球。塔瑞兹的最",
  "release_date": "2021-03-24",
  "douban": "",
  "poster": "tmdb_801058.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99,
    80
  ],
  "vote_count": 461,
  "popularity": 1.3,
  "runtime": 89,
  "languages": [
    "en"
  ],
  "countries": [
    "JP",
    "FO",
    "GB",
    "US"
  ]
},
  {
  "id": 282,
  "tmdb": 1428,
  "title": "流言终结者",
  "original_title": "MythBusters",
  "media_type": "tv",
  "overview": "一个由澳大利亚电视制作人Peter Rees开创的Discovery Channel电视系列。他发掘了主创的Jamie和Adam二人组。这是一个记录片形式的电视系列剧，大概可以划到\\",
  "release_date": "2003-01-23",
  "douban": "",
  "poster": "tmdb_1428.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99
  ],
  "vote_count": 620,
  "popularity": 32.6,
  "runtime": 43,
  "languages": [
    "en"
  ],
  "countries": [
    "AU",
    "IE",
    "US"
  ]
},
  {
  "id": 283,
  "tmdb": 62320,
  "title": "家园",
  "original_title": "Home",
  "media_type": "movie",
  "overview": "　　经过四十亿年的漫长演变，地球变成一个物种繁多、资源丰富、奇特美丽的蓝色星球。然而自人类出现以来，我们只用了二十万年的时间，便将地球的宝贵资源消耗殆尽。珍稀物种灭绝，原始资源奇缺，污染日益严重，人类以及地球的明天将何去何从？导演扬恩•亚瑟经过15年的筹备，历访50多个国家拍成此片。本片素材长达488小时，拍摄周期为21个月，共动用88,000名员工，从澳洲海底的大堡礁到非洲肯亚高原的乞力马扎罗山",
  "release_date": "2009-06-03",
  "douban": "",
  "poster": "tmdb_62320.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99,
    18,
    10751
  ],
  "vote_count": 552,
  "popularity": 1.1,
  "runtime": 118,
  "languages": [
    "fr"
  ],
  "countries": [
    "FR"
  ]
},
  {
  "id": 284,
  "tmdb": 158999,
  "title": "黑鲸",
  "original_title": "Blackfish",
  "media_type": "movie",
  "overview": "被圈养的表演虎鲸蒂利库姆已造成三人死亡，其中包括一名顶尖的虎鲸驯养员。本片揭示了捕捉与禁锢此类高智慧且有感知能力的生物，有时可能带来的灾难性后果。",
  "release_date": "2013-06-07",
  "douban": "",
  "poster": "tmdb_158999.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99
  ],
  "vote_count": 1188,
  "popularity": 1.4,
  "runtime": 83,
  "languages": [
    "en",
    "es"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 285,
  "tmdb": 26317,
  "title": "持摄影机的人",
  "original_title": "Человек с киноаппаратом",
  "media_type": "movie",
  "overview": "一位摄影师扛着摄像机四处游走，以令人眼花缭乱的创意记录城市生活。",
  "release_date": "1929-05-12",
  "douban": "",
  "poster": "tmdb_26317.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99
  ],
  "vote_count": 804,
  "popularity": 2.1,
  "runtime": 68,
  "languages": [
    "xx"
  ],
  "countries": [
    "SU"
  ]
},
  {
  "id": 286,
  "tmdb": 129035,
  "title": "行尸走肉：起源",
  "original_title": "The Walking Dead: Origins",
  "media_type": "tv",
  "overview": "《行尸走肉：起源》是一系列特辑，探索该系列最著名角色的旅程。 每一集都从一个角色的角度描绘了僵尸启示录的故事，并以描绘这些标志性角色的演员的新采访和叙述为特色，并与他们迄今为止旅程中最关键时刻的剪辑交织在一起。",
  "release_date": "2021-07-15",
  "douban": "",
  "poster": "tmdb_129035.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99
  ],
  "vote_count": 486,
  "popularity": 3.1,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 287,
  "tmdb": 267480,
  "title": "沉默之像",
  "original_title": "The Look of Silence",
  "media_type": "movie",
  "overview": "本片是约书亚·奥本海默为奥斯卡提名作品《杀戮演绎》谱写的震撼姊妹篇。通过奥本海默记录的1965年印尼大屠杀施害者影像，一个幸存者家庭发现了他们儿子遇害的真相以及凶手的身份。纪录片聚焦家中的小儿子。一位名叫阿迪的验光师，他决定打破那令人窒息的屈服与恐惧魔咒，在这个凶手仍掌权的社会中做出难以想象的举动：直面杀害哥哥的凶手们，在为他们测试视力时，要求他们为自己的行为负责。[标准收藏]",
  "release_date": "2014-11-13",
  "douban": "",
  "poster": "tmdb_267480.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    36,
    99
  ],
  "vote_count": 312,
  "popularity": 0.7,
  "runtime": 100,
  "languages": [
    "jv",
    "id"
  ],
  "countries": [
    "GB",
    "US",
    "NO",
    "ID",
    "DK",
    "FI"
  ]
},
  {
  "id": 288,
  "tmdb": 76180,
  "title": "梦之帝国：星球大战三部曲的故事",
  "original_title": "Empire of Dreams: The Story of the Star Wars Trilogy",
  "media_type": "movie",
  "overview": "这部记录片描记了原始星球大战三部曲的从头制作。我们从中可以了解乔治·卢卡斯的星球大战之梦已经后续拍摄的星球大战（1977）、星球大战5之帝国反击战（1980）以及星球大战6:绝地大反攻（1983），视觉特效、财政问题、拍摄、编辑、音效、以及上吨的电影胶片，幕后制作人员，演员都将展现给大家。",
  "release_date": "2004-09-20",
  "douban": "",
  "poster": "tmdb_76180.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99
  ],
  "vote_count": 207,
  "popularity": 1.1,
  "runtime": 151,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 289,
  "tmdb": 209167,
  "title": "对话杀人魔：杰弗里·达默访谈录",
  "original_title": "Conversations with a Killer: The Jeffrey Dahmer Tapes",
  "media_type": "tv",
  "overview": "在面对面的采访中，连环杀手杰弗里·达默坦承自己犯下的可怕罪行，其扭曲变态的内心世界让人不寒而栗。",
  "release_date": "2022-10-07",
  "douban": "",
  "poster": "tmdb_209167.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99,
    80
  ],
  "vote_count": 280,
  "popularity": 2.2,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 290,
  "tmdb": 524288,
  "title": "月事革命",
  "original_title": "Period. End of Sentence.",
  "media_type": "movie",
  "overview": "第91届奥斯卡金像奖(2019)最佳纪录短片。这是一部关于月经和卫生巾的纪录片。讲述的是印度德里的一群妇女，为自己以及所有女性获得卫生巾的权利而抗争，而加利福尼亚州的一群高中女生们，给予了她们支持。",
  "release_date": "2018-04-05",
  "douban": "",
  "poster": "tmdb_524288.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99
  ],
  "vote_count": 251,
  "popularity": 0.4,
  "runtime": 26,
  "languages": [
    "en",
    "hi"
  ],
  "countries": [
    "IN"
  ]
},
  {
  "id": 291,
  "tmdb": 653756,
  "title": "名侦探赛大爷",
  "original_title": "El agente topo",
  "media_type": "movie",
  "overview": "为了搞清楚养老院是否在虐待老人，年过八旬的素人赛尔吉奥大爷被侦探公司聘请，住进了养老院。在三个月的行动中，赛大爷不仅掌握了高超的卧底技巧，还俘获了院里众多奶奶的芳心，成为了养老院的大明星。随着调查的深入，他发现事件远远没有当初外人设想的那么简单。在《名侦探赛大爷》中，导演巧借外来者赛尔吉奥的视角，暗中观察养老院中老人们的生活日常，并探究他们看似奇怪举止背后的辛酸故事",
  "release_date": "2020-12-11",
  "douban": "",
  "poster": "tmdb_653756.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99
  ],
  "vote_count": 256,
  "popularity": 0.4,
  "runtime": 84,
  "languages": [
    "es"
  ],
  "countries": [
    "US",
    "CL",
    "DE",
    "ES",
    "NL"
  ]
},
  {
  "id": 292,
  "tmdb": 543580,
  "title": "他们已不再变老",
  "original_title": "They Shall Not Grow Old",
  "media_type": "movie",
  "overview": "彼得·杰克逊运用最先进的技术修复了百年以上的原始档案影像，让那些最能讲述这段历史的人，亲历者，重现于世。出于对第一次世界大战的个人兴趣，杰克逊决心还原士兵们的日常生活。在 BBC 和帝国战争博物馆的档案馆中潜心研究数月后，杰克逊逐渐构思出讲述这段历史的叙事方式和策略。影片通过亲历者的讲述，探索了前线战争的真实面貌：他们对战争的态度；他们的饮食、睡眠和友谊；以及他们在战壕之外的闲暇时光。",
  "release_date": "2018-11-09",
  "douban": "",
  "poster": "tmdb_543580.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99,
    36,
    10752
  ],
  "vote_count": 667,
  "popularity": 1.6,
  "runtime": 99,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "NZ"
  ]
},
  {
  "id": 293,
  "tmdb": 1058699,
  "title": "我还是我：迈克尔·J·福克斯",
  "original_title": "STILL: A Michael J. Fox Movie",
  "media_type": "movie",
  "overview": "迈克尔·J·福克斯，一个来自加拿大军事基地的矮小子，成为了1980年代国际流行文化的宠儿，却发现自己的生活被惊人的诊断结果彻底改变了。当无可救药的乐观主义者面对无可救药的疾病时，会发生什么呢？",
  "release_date": "2023-01-20",
  "douban": "",
  "poster": "tmdb_1058699.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99
  ],
  "vote_count": 229,
  "popularity": 1.2,
  "runtime": 95,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 294,
  "tmdb": 371492,
  "title": "明天",
  "original_title": "Demain",
  "media_type": "movie",
  "overview": "女主角美蘭妮羅倫今次不做地下戰士，轉做地球鬥士拯救世界。懷胎十月期間知道地球即將缺水缺油缺食物，人類可能於本世紀內滅絕，她便聯同其他有兒有女的電影人，走訪全球各地，探索各種可行並進行中的環保好橋，食物、能源、交通、政制、金融、教育、廢物處理等全方位追蹤。不是這邊喊完絕望真相，那邊回家狂開電器的過氣政客，美蘭妮找到的環保絕橋，你的電視新聞不會報道，擔保多數你都未聽過。等得十年，等不到百年，自己地球自",
  "release_date": "2015-11-15",
  "douban": "",
  "poster": "tmdb_371492.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99
  ],
  "vote_count": 280,
  "popularity": 0.9,
  "runtime": 118,
  "languages": [
    "fi",
    "en",
    "fr"
  ],
  "countries": [
    "FR"
  ]
},
  {
  "id": 295,
  "tmdb": 34014,
  "title": "傻冒在国外",
  "original_title": "An Idiot Abroad",
  "media_type": "tv",
  "overview": "暂无简介",
  "release_date": "2010-09-23",
  "douban": "",
  "poster": "tmdb_34014.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    35,
    99
  ],
  "vote_count": 253,
  "popularity": 4.1,
  "runtime": 43,
  "languages": [
    "en"
  ],
  "countries": [
    "GB"
  ]
},
  {
  "id": 296,
  "tmdb": 680813,
  "title": "逃亡",
  "original_title": "Flugt",
  "media_type": "movie",
  "overview": "阿明·纳瓦比深陷一个他隐藏了二十年的痛苦秘密，这秘密可能摧毁他为自己与未婚夫建立的生活。在导演乔纳斯·波赫·拉斯穆森的引导下，他首次通过动画为主要形式，讲述了童年时从阿富汗逃亡的非凡旅程。",
  "release_date": "2021-06-17",
  "douban": "",
  "poster": "tmdb_680813.jpg",
  "vote_average": 7.8,
  "genre_ids": [
    99,
    16
  ],
  "vote_count": 393,
  "popularity": 1.2,
  "runtime": 89,
  "languages": [
    "fa",
    "ru",
    "fr",
    "da",
    "sv",
    "en"
  ],
  "countries": [
    "SE",
    "GB",
    "US",
    "FR",
    "NO",
    "DK",
    "NL"
  ]
},
  {
  "id": 297,
  "tmdb": 293310,
  "title": "第四公民",
  "original_title": "Citizenfour",
  "media_type": "movie",
  "overview": "2013年1月，电影制作人劳拉·波伊特拉斯正在筹备一部关于9·11后美国国家安全体系滥用的纪录片时，开始收到来自自称“第四公民”的匿名加密邮件。此人准备揭露由美国国家安全局及其他情报机构运行的大规模秘密监控项目。2013年6月，她与记者格伦·格林沃德飞赴香港，与这位最终被证实为爱德华·斯诺登的男子进行了首次会面。而她，随身携带了摄像机。[RADiUS-TWC]",
  "release_date": "2014-10-10",
  "douban": "",
  "poster": "tmdb_293310.jpg",
  "vote_average": 7.7,
  "genre_ids": [
    99
  ],
  "vote_count": 1413,
  "popularity": 1.1,
  "runtime": 113,
  "languages": [
    "pt",
    "en",
    "de"
  ],
  "countries": [
    "DE",
    "GB",
    "US"
  ]
},
  {
  "id": 298,
  "tmdb": 411019,
  "title": "我不是你的黑鬼",
  "original_title": "I Am Not Your Negro",
  "media_type": "movie",
  "overview": "导演劳尔·派克以詹姆斯·鲍德温未完成的遗作手稿为蓝图，借由作家犀利如刃的原始文字，构建出一部关于美国种族问题的激进叙事。影片通过鲍德温对梅加·埃弗斯、马尔科姆·X与小马丁·路德·金这三位遇刺民权领袖的深刻观察，将历史切片熔铸为审视当代种族矛盾的锐利透镜，为美国种族叙事注入全新而激进的思想风暴。[木兰花影业]",
  "release_date": "2017-02-03",
  "douban": "",
  "poster": "tmdb_411019.jpg",
  "vote_average": 7.7,
  "genre_ids": [
    99
  ],
  "vote_count": 514,
  "popularity": 1.3,
  "runtime": 93,
  "languages": [
    "en",
    "fr"
  ],
  "countries": [
    "US",
    "BE",
    "FR"
  ]
},
  {
  "id": 299,
  "tmdb": 13958,
  "title": "游戏之王",
  "original_title": "The King of Kong: A Fistful of Quarters",
  "media_type": "movie",
  "overview": "一位中学科学教师与一位辣酱大亨，在街机经典游戏《大金刚》上角逐吉尼斯世界纪录。[Picturehouse Entertainment]",
  "release_date": "2007-03-25",
  "douban": "",
  "poster": "tmdb_13958.jpg",
  "vote_average": 7.7,
  "genre_ids": [
    99
  ],
  "vote_count": 496,
  "popularity": 0.7,
  "runtime": 83,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ]
},
  {
  "id": 300,
  "tmdb": 80767,
  "title": "寿司之神",
  "original_title": "Jiro Dreams of Sushi",
  "media_type": "movie",
  "overview": "　　小野二郎现年（2011）已八十六岁，是全世界年纪最大的三星主厨，他可谓是师傅中的师傅、达人中的达人，在日本国内的地位相当崇高，而「寿司第一人」的美称更是传播于全球。综观他的一生，超过五十五年的时间，他都在做寿司，因此他对寿司所注入的精神，以及其技巧绝对是世上第一。「数寄屋桥次郎」是小野所开的寿司店，店内的食材都是经过精心挑选，而从制作到入口一瞬间，每个环节都是有经过缜密的评估和计算。因此，这间",
  "release_date": "2011-06-11",
  "douban": "",
  "poster": "tmdb_80767.jpg",
  "vote_average": 7.7,
  "genre_ids": [
    99
  ],
  "vote_count": 772,
  "popularity": 0.6,
  "runtime": 82,
  "languages": [
    "ja"
  ],
  "countries": [
    "CA",
    "US"
  ]
},
  {
  "id": 301,
  "tmdb": 209867,
  "title": "葬送的芙莉莲",
  "original_title": "葬送のフリーレン",
  "media_type": "tv",
  "overview": "打倒了魔王的勇者一行人的后日谈，在“那之后”的故事。身为魔法使的芙莉莲是一位精灵，她和另外三人有着不一样的地方。对于生活在“之后”的世界、感受到的事情有着不一样的看法……残存世间的人们所编织的，葬送与祈祷相伴的故事，从“冒险的结束”开始了。",
  "release_date": "2023-09-29",
  "douban": "",
  "poster": "tmdb_209867.jpg",
  "vote_average": 8.8,
  "genre_ids": [
    16,
    10759,
    18,
    10765
  ],
  "vote_count": 836,
  "popularity": 67.6,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 302,
  "tmdb": 37854,
  "title": "航海王",
  "original_title": "ワンピース",
  "media_type": "tv",
  "overview": "拥有财富、名声、势力，拥有整个世界的海贼王 – 哥尔·D·罗杰，他在临刑前的一句话，让人们趋之若鹜奔向大海。“想要我的财宝吗？想要的话可以全部给你，去找吧！我把所有财宝都放在那里。”于是所有男子汉航向伟大的航路追逐梦想，世界开始迎接“大海贼时代”。",
  "release_date": "1999-10-20",
  "douban": "",
  "poster": "tmdb_37854.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    10759,
    35,
    16
  ],
  "vote_count": 5331,
  "popularity": 47.4,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 303,
  "tmdb": 1333100,
  "title": "进击的巨人剧场版：完结篇 · 最后的进击",
  "original_title": "劇場版「進撃の巨人」完結編 THE LAST ATTACK",
  "media_type": "movie",
  "overview": "人类为了躲避巨人威胁而建筑高耸巨大城墙，躲在城墙中过着苟且偷生的日子。一天，超大型巨人来袭打破了历经百年的和平日常，纷乱中失去母亲的少年艾伦·耶格尔自此发誓要驱逐所有巨人，成为与巨人战斗的调查军团的一员。在几番赌命的险恶战斗中，艾伦得到化身为巨人的能力，一边为人类的胜利做出贡献，逐步慢慢接近世界的真相。  时光流逝，来到墙外世界的艾伦选择与调查军团的伙伴们分道扬镳，执行一个惊世骇俗的恐怖计划：率领",
  "release_date": "2024-03-20",
  "douban": "",
  "poster": "tmdb_1333100.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    16,
    28,
    12,
    18
  ],
  "vote_count": 205,
  "popularity": 6.1,
  "runtime": 145,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 304,
  "tmdb": 31911,
  "title": "钢之炼金术师 FA",
  "original_title": "鋼の錬金術師 FULLMETAL ALCHEMIST",
  "media_type": "tv",
  "overview": "炼金术，一种建立在等价交换原则基础上的科学，将物质进行理解、分解、再构造，将一种物品变成另外一种。但是，这样先进的技术却不能进行人体炼成，这是炼金术绝对的禁忌。可是，拥有极高炼金术天赋的爱德华（朴璐美 配音）和阿尔冯斯（钉宫理恵 配音）兄弟，因为对母亲极大的思念不惜触犯禁忌。而最终的代价却是，爱德华失去了一条手臂和一条腿，弟弟阿尔冯斯只能将灵魂依附在一副巨大的装甲之内。终于明白一切的兄弟俩，为了恢",
  "release_date": "2009-04-05",
  "douban": "",
  "poster": "tmdb_31911.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    16,
    10759,
    10765,
    18
  ],
  "vote_count": 2458,
  "popularity": 45.6,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 305,
  "tmdb": 42573,
  "title": "灌篮高手",
  "original_title": "スラムダンク",
  "media_type": "tv",
  "overview": "湘北高中的一年级新生樱木花道在初中就有了被50个女孩抛弃的“悲惨”经历，最后一个女孩抛弃他原来是看上了篮球部队小田，由此樱木对篮球更是深恶痛绝。进入高中后，樱木看上了美少女赤木晴子，晴子十分热爱篮球，为了赢取晴子的芳心，樱木决定加入篮球部。在侥幸赢得与篮球队队长赤木刚宪的打赌后，樱木顺利加入了篮球队。随着国中篮球联赛的最有价值球员流川枫的到来、伤愈复出的控位宫城良田以及误入歧途的前国中最有价值球员",
  "release_date": "1993-10-16",
  "douban": "",
  "poster": "tmdb_42573.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    16,
    35
  ],
  "vote_count": 964,
  "popularity": 15.4,
  "runtime": 23,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 306,
  "tmdb": 1429,
  "title": "进击的巨人",
  "original_title": "進撃の巨人",
  "media_type": "tv",
  "overview": "曾几何时，世界上突然出现无数身形庞大的巨人，普通人类的生命受到前所未有的威胁。为了保护自身安全，最后的人类筑起三座高墙：玛莉亚、露丝和希娜。人类迎来了长达一个世纪的和平岁月，却也让自己成为圈养在笼中的鸟儿，屈辱地失去自由。845 年，高达 60 米的超大型巨人和铠之巨人登场， 摧毁了最外层的玛莉亚之壁，也惊醒了人类似乎永远不会苏醒的长梦。在此事件中，不愿蜷缩在墙内的少年艾伦·耶格尔亲眼目睹母亲遇害",
  "release_date": "2013-04-07",
  "douban": "",
  "poster": "tmdb_1429.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    16,
    10765,
    10759
  ],
  "vote_count": 7434,
  "popularity": 39.7,
  "runtime": 0,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 307,
  "tmdb": 271607,
  "title": "薰香花朵凛然绽放",
  "original_title": "薫る花は凛と咲く",
  "media_type": "tv",
  "overview": "窗帘的另一头，是和我永远没有交集的世界，差生云集的底层男校千鸟高中，一直被历史悠久的贵族女校桔梗女校所鄙视。尽管两校的校舍相邻，但桔梗女校从来都是将窗帘拉得严严实实，不让千鸟高中的人看到人影。在千鸟上学的䌷凛太郎，因为长相问题，经常被人误以为是一个可怕的人不敢接近，因此也习惯了和他人保持距离。而在某一天，在给家里的蛋糕店帮忙时，一个名叫薰子的顾客对他说：“我从来不觉得凛太郎很可怕啊？”薰子对凛太",
  "release_date": "2025-07-06",
  "douban": "",
  "poster": "tmdb_271607.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    16,
    18
  ],
  "vote_count": 210,
  "popularity": 22.9,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 308,
  "tmdb": 46298,
  "title": "全职猎人",
  "original_title": "HUNTER×HUNTER",
  "media_type": "tv",
  "overview": "主人公小杰从小在鲸鱼岛长大，与米特阿姨和阿婆相依为伴。性格开朗的他，有着能与动物沟通的灵性。因为无父无母，小杰将米特阿姨当成自己的生母爱着。直到9岁那一年，小杰在森林里被一位青年男子搭救。从他口中小杰得知自己的父亲还活着而且职业是猎人。在说服米特阿姨之后，小杰独自踏上了寻父的征程。然而世界那么大，在茫茫人海中找到父亲谈何容易？于是，小杰决定成为猎人，从这里开始找寻他父亲的踪迹。靠这样一种信念开始了",
  "release_date": "2011-10-02",
  "douban": "",
  "poster": "tmdb_46298.jpg",
  "vote_average": 8.7,
  "genre_ids": [
    16,
    10759,
    10765
  ],
  "vote_count": 2102,
  "popularity": 57.8,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 309,
  "tmdb": 42705,
  "title": "第一神拳",
  "original_title": "はじめの一歩",
  "media_type": "tv",
  "overview": "电视动画《第一神拳》由MADHOUSE制作改编自日本漫画家森川让次原作的同名漫画。动画于2000年10月3日起在日本电视台首播，全76话.\\\\n\\\\n电视动画《第一神拳 New Challenger》于2009年1月6日播出，全26话.\\\\n\\\\n电视动画《第一神拳 Rising》于2013年10月5日播出，全25话.\\\\n\\\\n电视动画剧场版《第一神拳 Champion Road》于2003年4月18日播出",
  "release_date": "2000-10-03",
  "douban": "",
  "poster": "tmdb_42705.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    16,
    35,
    18,
    10759
  ],
  "vote_count": 1194,
  "popularity": 35.7,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 310,
  "tmdb": 127532,
  "title": "我独自升级",
  "original_title": "俺だけレベルアップな件",
  "media_type": "tv",
  "overview": "10年前，世界与其他次元链接的“门”被打开，各种魔物不断出现，于是乎能力各异的猎魔者也随之出现，被称为“猎人”。程肖宇(成振宇)是一名实力最弱的E级猎人，在一次挑战任务中，遇到了可怕的隐藏挑战。生死存亡之际，他居然获得了升级系统！在系统的利用下，他能成为最强猎人吗？",
  "release_date": "2024-01-07",
  "douban": "",
  "poster": "tmdb_127532.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    16,
    10759,
    10765
  ],
  "vote_count": 1758,
  "popularity": 56.7,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "KR",
    "JP",
    "US"
  ]
},
  {
  "id": 311,
  "tmdb": 85937,
  "title": "鬼灭之刃",
  "original_title": "鬼滅の刃",
  "media_type": "tv",
  "overview": "时值日本大正时期。\\\\n\\\\n传说太阳下山后，有恶鬼出没吃人。亦有猎鬼人斩杀恶鬼、保护人们。\\\\n\\\\n卖炭少年炭治郎，他那平凡而幸福的日常生活，在家人遭到恶鬼袭击的那一天发生了剧变。母亲与四个弟弟妹妹惨遭杀害，而与他一起生还的妹妹祢豆子亦异变成凶暴的鬼。\\\\n\\\\n在猎鬼人的指引下，立志成为猎鬼人的炭治郎与变成鬼却尚存理智的祢豆子踏上了旅程。通过艰苦的剑术修行与赌命试炼，炭治郎成为了猎鬼人组织“鬼杀队”的一",
  "release_date": "2019-04-06",
  "douban": "",
  "poster": "tmdb_85937.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    16,
    10759,
    10765
  ],
  "vote_count": 7255,
  "popularity": 18.1,
  "runtime": 0,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 312,
  "tmdb": 62741,
  "title": "元气少女缘结神",
  "original_title": "神様はじめました",
  "media_type": "tv",
  "overview": "桃园奈奈生因好赌的父亲在欠下一屁股债后离家出走，被赶出去流落街头的时候帮助了一位被狗追到树下的神秘男人，神秘男人知道她的遭遇后说：“那我把我的家给你吧！”，于是无家可归的奈奈生在半信半疑之下前往那个\\",
  "release_date": "2012-10-02",
  "douban": "",
  "poster": "tmdb_62741.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    16,
    35,
    10765
  ],
  "vote_count": 1008,
  "popularity": 11.8,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 313,
  "tmdb": 13916,
  "title": "死亡笔记",
  "original_title": "DEATH NOTE",
  "media_type": "tv",
  "overview": "　　\"名字被写在这个笔记本上的人会死\"——死神流克拥有这样的死亡笔记，却将它遗失在人间。天才高中生夜神月捡到这本笔记本，本以为是恶作剧的他，在笔记本上写下了电视中播放的罪犯的名字，确认了笔记本能力的真实性。厌倦腐朽世界的夜神月使用笔记本的力量，开始杀死犯罪者，以此希望建立一个没有犯罪的美好理想世界，而自己成为“新世界的神”。  　　连续罪犯死亡事件，吸引了全世界警察的目光，更吸引了世界第一名侦探L的注意，L能否将被崇拜者称为“基拉”的夜神月逮捕？  　　一本死神的笔记本，拉开了天才与天才之间卓越巅峰的头脑战争的序幕。本已对人间失去兴趣的流克，在旁观惊心动魄的斗智过程中感叹“人类，真有趣。”",
  "release_date": "2006-10-04",
  "douban": "",
  "poster": "tmdb_13916.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    16,
    9648,
    10765
  ],
  "vote_count": 4916,
  "popularity": 37.6,
  "runtime": 22,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 314,
  "tmdb": 60863,
  "title": "排球少年",
  "original_title": "ハイキュー!!",
  "media_type": "tv",
  "overview": "童年时一次看电视转播的经历，在少年日向翔阳的心中种下了排球的种子。他在初中时代是排球部的主将，可是人丁寥落的排球部始终没有起色，唯一一场比赛也已惨败告终。在此之后，他终于如愿考入梦寐以求的学府乌野高中，并加入了该校的排球部。当年翔阳在电视上看到的正是乌野高中的比赛，如今这个学校的排球却正面临着衰败的命运。与宿命的对手和好友影山飞雄聚首于此，心怀排球梦想的少年们将团结一心，带领着乌野这名王者再度振翅",
  "release_date": "2014-04-06",
  "douban": "",
  "poster": "tmdb_60863.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    16,
    35,
    18
  ],
  "vote_count": 1503,
  "popularity": 36.3,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 315,
  "tmdb": 65930,
  "title": "我的英雄学院",
  "original_title": "僕のヒーローアカデミア",
  "media_type": "tv",
  "overview": "大部分的人类，在这个时代里都拥有名为“个性”的力量，但有力量之人却不一定都属于正义的一方。只要邪恶出现的地方，必定会有英雄挺身而出拯救众人。一名天生没有力量的少年，绿谷出久从小就憧憬一位顶尖英雄，而他的梦想就是成为伟大的英雄，可是，没有力量的他能实现自己的梦想吗？虽然困难重重，少年却依旧不放弃，朝著自己的目标勇往前进！",
  "release_date": "2016-04-03",
  "douban": "",
  "poster": "tmdb_65930.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    10759,
    16,
    10765
  ],
  "vote_count": 5285,
  "popularity": 17.1,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 316,
  "tmdb": 57706,
  "title": "乱马½",
  "original_title": "らんま1/2",
  "media_type": "tv",
  "overview": "天道茜和姐姐天道美、天道霞以及父亲天道早云一起经营着属于他们的道场。一天，早乙女乱马和其父玄马的到来打破了道场平静的生活。原来，和父亲在中国修炼的时候，乱马掉入了溺女泉，于是拥有了一碰冷水就会变身成女人的体质。在莫名其妙中，早云居然将小茜许配给了乱马，这让个性要强的小茜不能接受。乱马就读了当地的风林馆高中，在学校里，他遇见了诸多有趣的朋友和强大的对手，在每日打打闹闹的生活上，小茜和乱马之间的感情也",
  "release_date": "1989-04-15",
  "douban": "",
  "poster": "tmdb_57706.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    35,
    10759,
    16,
    10765
  ],
  "vote_count": 1514,
  "popularity": 47.0,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 317,
  "tmdb": 80564,
  "title": "战栗杀机",
  "original_title": "BANANA FISH",
  "media_type": "tv",
  "overview": "纽约。有着非凡的姿容，和卓越战斗力的少年·亚修。统领街头暴力团的他听到了，被手下所杀的男人在临死之际说出的“BANANA FISH”的神秘话语。与此同时，他与作为摄影师的助手来取材的日本少年·奥村英二相遇。两人决定一同追寻“BANANA FISH”之谜，",
  "release_date": "2018-07-06",
  "douban": "",
  "poster": "tmdb_80564.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    16,
    18,
    10759,
    9648,
    80
  ],
  "vote_count": 917,
  "popularity": 10.8,
  "runtime": 23,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 318,
  "tmdb": 95269,
  "title": "地缚少年花子君",
  "original_title": "地縛少年花子くん",
  "media_type": "tv",
  "overview": "海鸥学园的奇妙传言之一。据说旧校舍三层女厕所的第三间里的同学，会实现前来拜访者的愿望。非常喜欢巫术等超自然现象的少女八寻宁宁为了实现自己的愿望，将之托付给了学园怪谈……",
  "release_date": "2020-01-10",
  "douban": "",
  "poster": "tmdb_95269.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    16,
    9648,
    10765
  ],
  "vote_count": 775,
  "popularity": 16.6,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 319,
  "tmdb": 35790,
  "title": "魔卡少女樱",
  "original_title": "カードキャプターさくら",
  "media_type": "tv",
  "overview": "小学生木之本樱（丹下樱 配音）是一个平凡的女孩，有一个温柔的爸爸木之本藤隆（田中秀幸 配音）和一个体贴的好友大道寺知世（岩男润子 配音）。一天，在父亲的书房中她发现了一本尘封已久的魔法书，并无意间解除了书上的封印，一只会说话的玩偶可鲁贝洛斯（久川绫 配音）出现在了她的面前。小可告诉她，自己是守护这本书的神兽，书中封印着名叫库洛牌的东西。现在，封印解除了，它要小樱成为库洛魔法师，它将协助她收复这些四",
  "release_date": "1998-04-07",
  "douban": "",
  "poster": "tmdb_35790.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    16,
    10765,
    10759
  ],
  "vote_count": 792,
  "popularity": 20.2,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 320,
  "tmdb": 37419,
  "title": "机兽新世纪",
  "original_title": "ゾイド",
  "media_type": "tv",
  "overview": "《ZOIDS》（原名：ゾイド，读作Zoido）是由XEBEC制作的，以TOMY（现Takara Tomy）生产的模型玩具，ZOIDS为原型的电视动画，是ZOIDS系列动画的第一部。作品以进行着海力克共和国与盖洛斯帝国之间战争的行星Zi为舞台，讲述主人公小邦和菲妮以及金属生命体Zoid之间的冒险故事。\\\\n\\\\n本作分为两个部分。第1至34集为第一部分（也被称作无印篇），描绘了主人公小邦少年时期的故事",
  "release_date": "1999-09-04",
  "douban": "",
  "poster": "tmdb_37419.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    10759,
    16,
    35,
    10765
  ],
  "vote_count": 366,
  "popularity": 10.0,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 321,
  "tmdb": 220542,
  "title": "药屋少女的呢喃",
  "original_title": "薬屋のひとりごと",
  "media_type": "tv",
  "overview": "「可否为我配制一帖春药？」猫猫的眼眸瞬间浮现出惊讶与好奇的色彩──位处大陆中央的某个大国，有位姑娘置身于皇帝宫阙之中。姑娘名唤猫猫，原在烟花巷担任药师，眼下则在后宫做下女。这个绝对称不上美女的姑娘很懂分寸，只是静待期满离宫。她有自信，皇帝绝对不会「宠幸」她。其间，猫猫得知皇子皆年幼早夭的事，并听闻连尚在人世的皇子皇女也身染重病，她开始调查他们的病因──广获赞誉的酣畅淋漓推理之作，众所期盼的第一集终",
  "release_date": "2023-10-22",
  "douban": "",
  "poster": "tmdb_220542.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    16,
    18,
    9648
  ],
  "vote_count": 570,
  "popularity": 56.1,
  "runtime": 23,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 322,
  "tmdb": 35610,
  "title": "犬夜叉",
  "original_title": "犬夜叉",
  "media_type": "tv",
  "overview": "　　战国时代，大妖怪斗牙王与人类公主十六夜的儿子，半妖犬夜叉，因为自己半妖的身份受到人类与妖怪的排斥，为了成为真正的妖怪而想得到四魂之玉；而巫女桔梗为了保护和净化四魂之玉，运用灵力不断与前来抢夺四魂之玉的妖怪战斗。命运的红线牵引的两人虽然在开始互为敌对，但两人却也因四魂之玉结缘，桔梗发现了犬夜叉粗鲁外表下的善良，以及与自己同样的孤独；而犬夜叉也看到了桔梗在孤高的外表下其实也有颗孤单的、渴望被爱的",
  "release_date": "2000-10-16",
  "douban": "",
  "poster": "tmdb_35610.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    16,
    10759,
    10765
  ],
  "vote_count": 2075,
  "popularity": 27.0,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 323,
  "tmdb": 890,
  "title": "新世纪福音战士",
  "original_title": "新世紀エヴァンゲリオン",
  "media_type": "tv",
  "overview": "突袭世界的大灾难“第二次冲击”后，世界在废墟之上重建。14 岁的少年碇真嗣被父亲碇元渡叫到第 3 新东京市。本以为能见到父亲迎接的他，却见到名为“ 使徒”的巨大生物与军队交火。危急之下，特务机关 NERV 的葛成美里将真嗣救下，并将其带往碇元渡所统领的 NERV 总部。但迎接真嗣的，却是是父亲冷酷地命令：驾驶称为“EVA”的巨大人型机器人与使徒战斗。本已表示拒绝的真嗣，看到重伤的替补驾驶员绫波丽后",
  "release_date": "1995-10-04",
  "douban": "",
  "poster": "tmdb_890.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    10765,
    16,
    18
  ],
  "vote_count": 2084,
  "popularity": 23.4,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 324,
  "tmdb": 95479,
  "title": "咒术回战",
  "original_title": "呪術廻戦",
  "media_type": "tv",
  "overview": "少年战斗着，「为寻求正确的死亡」。辛酸·后悔·耻辱人类产生的负面情感，化为诅咒，潜入日常生活诅咒是蔓延于世界的祸源，最糟糕的情况下，会让人类踏入死亡，并且诅咒只能以诅咒祓除。虎杖悠仁是一位体育万能的高中生，某天他为了从“咒物”危机中解救学姐，而吞下了被诅咒的手指“两面宿傩之指”，让“宿傩”这种诅咒跟自己合而为一。在最强咒术师五条悟的指引下，进入对诅咒专门机关「东京都立咒术高等专门学校」，并遇到了",
  "release_date": "2020-10-03",
  "douban": "",
  "poster": "tmdb_95479.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    16,
    10759,
    10765
  ],
  "vote_count": 4460,
  "popularity": 120.4,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 325,
  "tmdb": 61663,
  "title": "四月是你的谎言",
  "original_title": "四月は君の嘘",
  "media_type": "tv",
  "overview": "男主角有马公生自小接受母亲严格的钢琴训练，以按照乐谱精准弹奏的能力在各项音乐比赛中获胜，被人称作“神童”（动画作品内，亦被人嘲讽为“妈妈的傀儡”、“人体节拍器”、“演奏机”、“钢琴比赛机器”）。然而11岁时母亲病逝，加上自身对弹奏的迷惘，陷入听不见钢琴声音的心境障碍，选择放弃钢琴弹奏。国中三年级时，某一天在青梅竹马椿的介绍下，认识同年级的小提琴手，宫园薰，并于一场合奏的音乐比赛中被薰自由奔放的演",
  "release_date": "2014-10-10",
  "douban": "",
  "poster": "tmdb_61663.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    16,
    35,
    18
  ],
  "vote_count": 1142,
  "popularity": 25.5,
  "runtime": 23,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 326,
  "tmdb": 45790,
  "title": "JOJO的奇妙冒险",
  "original_title": "ジョジョの奇妙な冒険",
  "media_type": "tv",
  "overview": "乔斯达家族的数代人都有一个相同的绰号“JOJO”，他们在不同的时代与各种拥有超自然力量的反派战斗不休。",
  "release_date": "2012-10-06",
  "douban": "",
  "poster": "tmdb_45790.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    16,
    10759,
    10765
  ],
  "vote_count": 1596,
  "popularity": 66.0,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 327,
  "tmdb": 65844,
  "title": "为美好的世界献上祝福！",
  "original_title": "この素晴らしい世界に祝福を！",
  "media_type": "tv",
  "overview": "热爱游戏的家里蹲少年·佐藤和真的人生，因交通事故而轻易闭幕……本该是这样，但当他醒来之时，眼前有一位自称是女神的美少女。“喂，我有点好事要告诉你。要去异世界吗？只带一样你喜欢的东西没问题喔。”“那，我就带着你好了。”由此开始，在异世界转生的和真的魔王讨伐大冒险开始了……虽然是这么想的，但他却为了获得衣食住行而开始劳动。想要平稳度日的和真，却由于女神引起的各种问题，而终于被魔王军盯上了",
  "release_date": "2016-01-14",
  "douban": "",
  "poster": "tmdb_65844.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    10759,
    16,
    35,
    10765
  ],
  "vote_count": 1434,
  "popularity": 40.6,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 328,
  "tmdb": 94664,
  "title": "无职转生：到了异世界就拿出真本事",
  "original_title": "無職転生 ～異世界行ったら本気だす～",
  "media_type": "tv",
  "overview": "“我要在这个异世界拿出真本事！”34岁童贞且无职的家里蹲男子，在父母的葬礼当天被赶出家门后，在路上被一辆卡车所撞死。意识清醒后，他发现自己居然作为一个刚出生的婴儿转生到了剑与魔法的异世界！像废物一样活过了前世的男子，发誓要作为少年·鲁迪乌斯在异世界以认真的态度好好活下去！等待着鲁迪乌斯的是，与娇小魔术师、有着精灵长耳又很男孩子气的美少女、凶暴的傲娇大小姐以及其他性格各异的人们之间的邂逅，当然也还有",
  "release_date": "2021-01-11",
  "douban": "",
  "poster": "tmdb_94664.jpg",
  "vote_average": 8.6,
  "genre_ids": [
    10759,
    16,
    10765
  ],
  "vote_count": 1479,
  "popularity": 60.3,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 329,
  "tmdb": 9302,
  "title": "数码宝贝：驯兽师之王",
  "original_title": "デジモンテイマーズ",
  "media_type": "tv",
  "overview": "松田启人是个稍微有点率真个性极普通得小学五年级男生，现在最喜欢东西就数码宝贝！\\\\n\\\\n对他来说与朋友玩数码宝贝卡片游戏及上课时偷偷地把自己创作数码暴龙画笔记簿上最大乐趣！热爱数码宝贝少年启人某日竟偶然得到了一张能把命运大大改变的以往从未有人见过的不可思议的蓝色卡片，蓝卡！\\\\n\\\\n就在把蓝卡放读卡机读进去瞬间启人眼前冒险之门已经打开了。与接着到访的命运拍档，基尔兽相遇，现在西新宿舞台上的新故事要",
  "release_date": "2001-04-01",
  "douban": "",
  "poster": "tmdb_9302.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759,
    10765
  ],
  "vote_count": 369,
  "popularity": 7.0,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 330,
  "tmdb": 256721,
  "title": "咔嗒咔嗒",
  "original_title": "ガチアクタ",
  "media_type": "tv",
  "overview": "犯罪者的子孙们居住的贫民窟。边界另一边的人将这边的人蔑称为“族民”，并歧视着。孤儿少年路德，和养父雷格特一同居住在贫民窟里，依靠超乎常人的身体素质为武器谋生。可是在某天，被扣上了莫名其妙的罪名，被打落至贫民窟的人们所畏惧的“奈落”里。在奈落里，和“清洁工”恩琴相遇的路德窥见了这个世界的真实，并发现了自己那能够赋予物品生命的力量。不管世界强成什么样唯有自己的价值不可为他人所左右。敌人是“常识”“权力",
  "release_date": "2025-07-06",
  "douban": "",
  "poster": "tmdb_256721.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759,
    18,
    10765
  ],
  "vote_count": 277,
  "popularity": 17.0,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "KR",
    "JP"
  ]
},
  {
  "id": 331,
  "tmdb": 240411,
  "title": "胆大党",
  "original_title": "ダンダダン",
  "media_type": "tv",
  "overview": "出生于灵媒师家族的女高中生·小桃（绫濑桃），与她同年级的超自然爱好者·厄卡伦（高仓健）。小桃在厄卡伦遭到班上同学欺凌时保护了他，两人以此为契机开始有了交流。“相信幽灵存在但否定外星人存在”的小桃，和“相信外星人存在但否定幽灵存在”的厄卡伦争论不休。为了让对方相信外星人和幽灵的存在，小桃去了被称为UFO圣地的废弃医院，厄卡伦去了闹鬼的隧道。在那里，他们遇到了无法理解的极其怪异的现象。在绝境中，小桃觉",
  "release_date": "2024-10-04",
  "douban": "",
  "poster": "tmdb_240411.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759,
    35,
    10765
  ],
  "vote_count": 854,
  "popularity": 30.1,
  "runtime": 0,
  "languages": [],
  "countries": [
    "JP"
  ]
},
  {
  "id": 332,
  "tmdb": 83121,
  "title": "辉夜大小姐想让我告白",
  "original_title": "かぐや様は告らせたい～天才たちの恋愛頭脳戦～",
  "media_type": "tv",
  "overview": "不论家世还是人品都很优秀！将来备受期待的人才云集的秀知院学园！在此处的学生会相遇的副会长·四宫辉夜，以及会长·白银御行本该会被对方所吸引，然而……就这样什么都没发生地过了半年！自尊心极强而又不坦率的两个人，陷入了总是想着“如何让对方告白”这种麻烦的事态！？直到恋爱开花结果之前，尽情期待吧！新感觉“头脑战”恋爱喜剧，开战！",
  "release_date": "2019-01-12",
  "douban": "",
  "poster": "tmdb_83121.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    35,
    16
  ],
  "vote_count": 835,
  "popularity": 32.2,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 333,
  "tmdb": 86031,
  "title": "石纪元",
  "original_title": "Dr.STONE",
  "media_type": "tv",
  "overview": "全人类被神奇的现象一瞬间石化后过了几千年，拥有超人般头脑、天生的科学少年·千空苏醒了。在文明遭到毁灭的石头世界（STONE WORLD）里，千空决定要用科学的力量复原整个世界。而与此同时苏醒过来的有，以有着过人体力的儿时玩伴·大木大树为首的伙伴们，从零开始创造文明，从石器时代到现代文明，一定要赶上这科学史的200万年差距！前所未闻的创世冒险谭，就此开幕！",
  "release_date": "2019-07-05",
  "douban": "",
  "poster": "tmdb_86031.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759,
    35,
    10765
  ],
  "vote_count": 1682,
  "popularity": 11.2,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 334,
  "tmdb": 31910,
  "title": "火影忍者：疾风传",
  "original_title": "ナルト 疾風伝",
  "media_type": "tv",
  "overview": "疾风传指的是佐助投奔大蛇丸后三年发生的故事，故疾风传也可以理解为《火影忍者》第二部。 不知不觉《火影忍者》已经一路走了七年，鸣人从万年吊车尾的倒霉蛋慢慢地成长为能独当一面的忍者。从莽撞单纯的英雄主义男主角一步又一步地向忍道的达人迈进。为了友情，为了爱，为了被认可，为了自己的忍道，鸣人头也不回的奋斗了整整7年，以疾风的速度成长着。撒花庆贺的同时好消息自然不能少！2007早春火影动画也回归漫画突入第二",
  "release_date": "2007-02-15",
  "douban": "",
  "poster": "tmdb_31910.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759,
    10765
  ],
  "vote_count": 8653,
  "popularity": 58.1,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 335,
  "tmdb": 83100,
  "title": "多罗罗",
  "original_title": "どろろ",
  "media_type": "tv",
  "overview": "时为战国。醍醐之国主景光，在某所寺院的大堂中，向12尊鬼神像许愿领土繁荣。作为交换而诞生的景光之后嗣，身体各处都有所欠缺，被视作不祥之子而抛弃到河川之中。时光流逝，鬼神实现了与景光的约定，国家迎来了平安。这样的某天，名为“多罗罗”的年幼盗贼，与某个男人相遇。\\\\n\\\\n那是鬼，还是人，两臂装有刀剑，全身皆为人造的男人“百鬼丸”，其无光之瞳紧紧盯着袭来的妖魔。",
  "release_date": "2019-01-07",
  "douban": "",
  "poster": "tmdb_83100.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759
  ],
  "vote_count": 1312,
  "popularity": 15.4,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 336,
  "tmdb": 88803,
  "title": "冰海战记",
  "original_title": "ヴィンランド・サガ",
  "media_type": "tv",
  "overview": "公元10世纪末期，世界各地出现了只做战争掠夺的最强民族--维京人。被讴歌为最强战士的儿子托尔芬，自小便生活在战场上，并向往着梦幻大陆“文兰”这是一个发生在激荡时代的，真正的战士物语。",
  "release_date": "2019-07-08",
  "douban": "",
  "poster": "tmdb_88803.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10768,
    10759,
    18
  ],
  "vote_count": 944,
  "popularity": 13.4,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 337,
  "tmdb": 77721,
  "title": "三次元女友",
  "original_title": "３Ｄ彼女　リアルガール",
  "media_type": "tv",
  "overview": "高中三年级的筒井光是所谓的御宅族少年。只要有游戏或动画里的二次元女生的话，感觉就能独自一人生活了……但，他突然被超绝3D（现实）美少女・五十岚色叶告白，并开始和她交往！在被奔放的色叶玩弄于股掌之间的同时，筒井逐渐爱上了她……",
  "release_date": "2018-04-04",
  "douban": "",
  "poster": "tmdb_77721.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    35,
    18
  ],
  "vote_count": 458,
  "popularity": 3.7,
  "runtime": 23,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 338,
  "tmdb": 82739,
  "title": "青春猪头少年不会梦到兔女郎学姐",
  "original_title": "青春ブタ野郎はバニーガール先輩の夢を見ない",
  "media_type": "tv",
  "overview": "思春期综合症，这是一种只发生在易敏感和不稳定的青春期的、不可思议的现象。例如，在梓川咲太面前出现的野生兔女郎。她的真实身份是高中高年级学生，明星活动休止的女演员樱岛麻衣。她迷人的身姿，不知为何在周围的人眼里看不出来。咲太决定解开这一谜题。在于麻衣一起度过的时间里，咲太知道了她秘密的想法。女主人公们一个接一个地出现于咲太的周围，她们都有着“青春期症候群”。在天空和大海都很闪耀的小镇上，开始了令人激动",
  "release_date": "2018-10-04",
  "douban": "",
  "poster": "tmdb_82739.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    35,
    18
  ],
  "vote_count": 1305,
  "popularity": 22.0,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 339,
  "tmdb": 67389,
  "title": "青春纪行",
  "original_title": "ゴールデンタイム",
  "media_type": "tv",
  "overview": "多田万里顺利考上大学而来到东京。由于万里失去了高三之前的记忆，所以一个人\\\\n\\\\n生活，这许许多多的第一次经验都让他雀跃不已，却在入学典礼这天突然面临挑战……\\\\n\\\\n压倒众人的大小姐气势！完美的人生脚本！最擅长自说自话！华丽出场的女主人公加贺香子，手持玫瑰花束，一把甩到柳泽身上，是为了跟随青梅竹马柳泽，而进入同一间大学。\\\\n\\\\n同时万里也发现了与失忆前的自己有深厚羁绊的琳达在同一所大学...\\\\n\\\\n",
  "release_date": "2013-10-03",
  "douban": "",
  "poster": "tmdb_67389.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    18
  ],
  "vote_count": 578,
  "popularity": 12.0,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 340,
  "tmdb": 9160,
  "title": "小甜甜",
  "original_title": "キャンディ・キャンディ",
  "media_type": "tv",
  "overview": "在“伯尼之家”孤儿院长大的甜甜是一个活泼开朗的疯丫头，但是当甜甜被送到富豪伊莱莎家族之后，她却过着每天都要被欺负的日子。不过在甜甜的面前又出现了她很小时候遇到的“白马王子”，十分吸引甜甜的安东尼，而且甜甜也意外地成为了安德鲁家的养女，就在她以为幸福就要到来的时候……",
  "release_date": "1976-10-01",
  "douban": "",
  "poster": "tmdb_9160.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    18,
    10762
  ],
  "vote_count": 702,
  "popularity": 9.3,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP",
    "US"
  ]
},
  {
  "id": 341,
  "tmdb": 110070,
  "title": "堀与宫村",
  "original_title": "ホリミヤ",
  "media_type": "tv",
  "overview": "看似很时尚，却是持家女的堀京子，与看似是阴暗的宅男，其实是满身的刺青和大量耳洞时尚形象的宫村伊澄相遇，于是两人有着对方秘密的生活开始。故事以片桐高校为舞台，京子是有着华丽的外表，同时成绩优秀、家务万能的人气美少女。某天，她弟弟创太受伤之后被陌生的“耳环男”送了回来，而这华丽耳环男的实体竟然是班上“天然无神经”的土气男生宫村伊澄。堀被宫村在学校与校外截然不同的形象震惊到了。而以关心不擅长与人交往的创",
  "release_date": "2021-01-10",
  "douban": "",
  "poster": "tmdb_110070.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    35,
    18
  ],
  "vote_count": 1125,
  "popularity": 21.8,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 342,
  "tmdb": 76121,
  "title": "DARLING in the FRANXX",
  "original_title": "ダーリン・イン・ザ・フランキス",
  "media_type": "tv",
  "overview": "他们拥有梦想。总有一天，飞向广阔天空的梦想。知晓被玻璃遮盖的这片天空有多么遥远。遥远的未来，人类在荒废的大地上建设了移动要塞都市“种植园”，并讴歌着文明。在那当中建造的驾驶员居住设施“米斯特汀”，通称“鸟笼”。孩子们就住在那里，对外面的世界一无所知，对自由的天空一无所知。他们被告知的使命，只有战斗而已。敌人是一切都被谜团覆盖的巨大生命体“叫龙”。为了对抗尚未见过的敌人，孩子们乘上被称为“FRANX",
  "release_date": "2018-01-13",
  "douban": "",
  "poster": "tmdb_76121.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    18,
    10765,
    35
  ],
  "vote_count": 1899,
  "popularity": 17.0,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 343,
  "tmdb": 68129,
  "title": "冰上的尤里",
  "original_title": "ユーリ!!! on ICE",
  "media_type": "tv",
  "overview": "在背负着全日本期待的挑战决胜赛中遭遇惨败……回到故乡九州的花样滑冰选手胜生勇利。 “无法决定是继续现役还是引退……”怀着这样的心情在老家闭门不出的勇利，突然迎来了世界选手权五连霸的维克托·尼基福罗夫……处在日本的悬崖边的胜生勇利，以及俄罗斯的下克上滑冰选手尤里·普利赛提。这两位“YURI”以及冰上的王者维克托·尼基福罗夫所挑战的前所未闻的大赛系列就此开幕！",
  "release_date": "2016-10-06",
  "douban": "",
  "poster": "tmdb_68129.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    35,
    18
  ],
  "vote_count": 657,
  "popularity": 11.5,
  "runtime": 23,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 344,
  "tmdb": 120089,
  "title": "间谍过家家",
  "original_title": "SPY×FAMILY",
  "media_type": "tv",
  "overview": "为了潜入名校，西国能力最强的间谍“黄昏”被下令组建家庭。但是，他的“女儿”居然是能够读取他人内心的超能力者！“妻子”是暗杀者？互相隐藏了真实身份的新家庭，面临考验与世界危机的痛快家庭喜剧就此展开！",
  "release_date": "2022-04-09",
  "douban": "",
  "poster": "tmdb_120089.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759,
    35
  ],
  "vote_count": 2265,
  "popularity": 63.8,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 345,
  "tmdb": 114410,
  "title": "チェンソーマン",
  "original_title": "チェンソーマン",
  "media_type": "tv",
  "overview": "电次是一位年轻的恶魔猎人，为了偿还父亲在黑帮处的债务，他与“电锯恶魔”波奇塔一起斩杀低阶恶魔谋生，每天过着贫困的生活。遭遇黑帮债主背叛被杀后，电次在恍惚中与波奇塔缔结契约，拥有了恶魔的心脏，变身成为“电锯人”重生于世。",
  "release_date": "2022-10-12",
  "douban": "",
  "poster": "tmdb_114410.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759,
    10765,
    35
  ],
  "vote_count": 2142,
  "popularity": 33.3,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 346,
  "tmdb": 67075,
  "title": "灵能百分百",
  "original_title": "モブサイコ100",
  "media_type": "tv",
  "overview": "平凡的中学二年级少年影山茂夫，因其微弱的存在感与名字茂夫的谐音被周遭人称为龙套（モブ），但不起眼的他其实是强大的天生超能力者。历经每一次的成长，龙套开始认为自己的超能力是危险的存在，为了不让超能力失控，龙套无意识的压抑著情感。虽然只想平凡的度过每一天，但各种麻烦却接二连三找上他，随着被压抑的情感在内心一点点膨胀，龙套体内积累的力量似乎也正蠢蠢欲动......",
  "release_date": "2016-07-12",
  "douban": "",
  "poster": "tmdb_67075.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759,
    35,
    10765
  ],
  "vote_count": 1306,
  "popularity": 39.5,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 347,
  "tmdb": 83095,
  "title": "盾之勇者成名录",
  "original_title": "盾の勇者の成り上がり",
  "media_type": "tv",
  "overview": "极为平凡的御宅族大学生岩谷尚文，受到在图书馆发现的一本书所引导，被召唤到了异世界。他被赋予的使命，是作为装备着剑、枪、弓、盾的四圣勇者之一“盾之勇者”，驱逐给世界带来混沌的灾害。因为大冒险而心潮澎湃，和同伴一同踏上旅程的尚文。但他刚出发没几天就遭到背叛，金钱和立场全都失去。变得无法相信他人的尚文，驱使着奴隶少女拉芙塔莉雅，向波和世界发起对抗。究竟他能否打破这种绝望的状况？失去一切的男人的成名奇幻故",
  "release_date": "2019-01-09",
  "douban": "",
  "poster": "tmdb_83095.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759,
    10765,
    18
  ],
  "vote_count": 1553,
  "popularity": 17.3,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "KR",
    "JP"
  ]
},
  {
  "id": 348,
  "tmdb": 129,
  "title": "千与千寻",
  "original_title": "千と千尋の神隠し",
  "media_type": "movie",
  "overview": "小女孩千寻被困在一个陌生的精灵世界。当她的父母发生神秘变化后，她必须鼓起自己从未发现的勇气，才能解救自己，并将家人带回外面的世界。",
  "release_date": "2001-07-20",
  "douban": "",
  "poster": "tmdb_129.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10751,
    14
  ],
  "vote_count": 18361,
  "popularity": 35.1,
  "runtime": 125,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 349,
  "tmdb": 45950,
  "title": "恶魔高校D×D",
  "original_title": "ハイスクールD×D",
  "media_type": "tv",
  "overview": "兵藤一诚本是一个平凡的高中生，却莫名其妙地在第一次约会当中被真身为堕天使化身的女友杀害！“你已经转生变成恶魔了。为我工作吧！”在生命垂危之际，一诚被学校的学姐莉雅丝·吉蒙里所拯救，而代价则是被真实身份是恶魔的莉雅丝转生成她的恶魔随从。一诚为了主人的胸部还有自己的梦想，就此开始了“刺激”与“危险”的新生活！",
  "release_date": "2012-01-06",
  "douban": "",
  "poster": "tmdb_45950.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759,
    35,
    10765
  ],
  "vote_count": 2031,
  "popularity": 40.7,
  "runtime": 0,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 350,
  "tmdb": 30991,
  "title": "星际牛仔",
  "original_title": "カウボーイビバップ",
  "media_type": "tv",
  "overview": "2071年，随着超光速航行技术的实现，人类得以在太阳系范围内方便的移动，但是由于设计上的失误，这种技术引发了月球的爆炸，无数的月球碎片被吸引向地球，造成了空前绝后的大灾难。存活下来的人类逃离地球，并开始在太阳系各地建立家园。由于这次灾难，国家政府等权利机构都极为不稳定、治安问题也成为了一个难题。有些组织开始允许个人抓捕通缉的罪犯并换取奖金，这就是“赏金猎人”。史派克和杰特是驾驶飞船BEBOP号在宇",
  "release_date": "1998-04-03",
  "douban": "",
  "poster": "tmdb_30991.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759,
    10765,
    37
  ],
  "vote_count": 1938,
  "popularity": 22.1,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 351,
  "tmdb": 42444,
  "title": "圣斗士星矢",
  "original_title": "聖闘士星矢",
  "media_type": "tv",
  "overview": "古希腊，一群勇敢的战士们守护在战争女神雅典娜身边，与邪恶做斗争，他们被称作\\",
  "release_date": "1986-10-11",
  "douban": "",
  "poster": "tmdb_42444.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    18,
    10759,
    10765
  ],
  "vote_count": 1416,
  "popularity": 19.4,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 352,
  "tmdb": 28136,
  "title": "浪客剑心",
  "original_title": "るろうに剣心 明治剣客浪漫譚",
  "media_type": "tv",
  "overview": "明治维新时期，敌我双方为了各自的理想和目标而奋勇厮杀。在此期间，名人志士不断涌现：大久保利通、木户孝允、坂本龙马、冲田总司。维新一派为了推动新时代的到来，不惜采取暗杀的手段，而绯村剑心正是众多刺客的中的一员。孤儿出身的绯村师从比古清十郎学习飞天御剑流剑法，年轻气盛的下山参战，在奇兵队中崭露头角。凭借一身的本领，绯村最终成为令幕府一派闻风丧胆的刽子手拔刀斋，同时他也和宿敌壬生狼斋藤一有过无数次对决。",
  "release_date": "1996-01-10",
  "douban": "",
  "poster": "tmdb_28136.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    10759,
    16,
    35
  ],
  "vote_count": 808,
  "popularity": 21.2,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 353,
  "tmdb": 88040,
  "title": "GIVEN 被赠与的未来",
  "original_title": "ギヴン",
  "media_type": "tv",
  "overview": "想留在你身边继续歌唱，原来最喜爱的吉他、原来觉得最有趣的篮球看起来都逐渐褪色的那天，上山立夏偶然与佐藤真冬相遇了。原本已在日常生活中失去了音乐热情的立夏，却被偶然听到的真冬的歌声刺入心扉..两人的距离也因此开始变化。",
  "release_date": "2019-07-12",
  "douban": "",
  "poster": "tmdb_88040.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    18
  ],
  "vote_count": 789,
  "popularity": 4.3,
  "runtime": 30,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 354,
  "tmdb": 35935,
  "title": "剑风传奇",
  "original_title": "剣風伝奇ベルセルク",
  "media_type": "tv",
  "overview": "故事发生在类似欧洲中世纪的世界，国与国之间互相争战，烽火连年，各国都豢养庞大军备，佣兵也成为时兴的行业，一般平民的生活则十分穷苦。在这战火连连的世界中，不单只有人类的战争，同时还有被称为“使徒”的怪物。而本故事的主角格斯，因为其挚友格里菲斯把灵魂出卖给恶魔而变成了“使徒”之主，神之手，把往日的战友佣兵团“鹰之团”作为祭品而给“使徒”虐杀，在这场虐杀中幸存下来的格斯，为了向格里菲斯复仇，所以化身成",
  "release_date": "1997-10-08",
  "douban": "",
  "poster": "tmdb_35935.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    10759,
    10765,
    16
  ],
  "vote_count": 789,
  "popularity": 21.5,
  "runtime": 23,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 355,
  "tmdb": 30981,
  "title": "怪物",
  "original_title": "MONSTER",
  "media_type": "tv",
  "overview": "1986年，一名头部被子弹击中的重伤少年送到西德·杜塞尔多夫医院中。日本外科医生天马忽视院长的命令，以他天才般的手术技术的拯救了那位少年。\\\\n\\\\n实行共产主义的世界为推倒西德进行着异常的阴谋。捷克斯洛伐克秘密警察法兰斯·波拿巴达等人，教育孩童们成为送往资本主义各国的战斗员。在这过程中诞生了约翰这个怪物。约翰心中的怪物越变越大，进而开始杀害周遭的人。就像是波拿巴达的绘本《没有名字的怪物》里的主角怪物",
  "release_date": "2004-04-07",
  "douban": "",
  "poster": "tmdb_30981.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    18,
    9648,
    80
  ],
  "vote_count": 780,
  "popularity": 42.3,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 356,
  "tmdb": 65648,
  "title": "会长是女仆大人！",
  "original_title": "会長はメイド様！",
  "media_type": "tv",
  "overview": "文武双全的完美会长，其实是一个女仆，原男校星华高中里，男生占了全部学生的八成以上。而那帮占少数的女学生只能一直忍耐着大咧咧又粗暴的男生，度过高中的每一日。打破了这种局面的，是本校首位女学生会长，鲇泽美咲。文武双全的美咲，为了让学校生活变得规律化而每日奋斗着。可是，美咲她却有一个不为人知的秘密。那就是她正在“女仆咖啡店”里打工。努力不被旁人发现而努力地打工着的她，居然被学校第一的帅哥碓冰拓海发现了",
  "release_date": "2010-04-02",
  "douban": "",
  "poster": "tmdb_65648.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    35
  ],
  "vote_count": 617,
  "popularity": 9.9,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 357,
  "tmdb": 30669,
  "title": "幽游白书",
  "original_title": "幽☆遊☆白書",
  "media_type": "tv",
  "overview": "皿屋敷中学的不良少年浦饭幽助终日无所事事，或与青梅竹马雪村萤子吵架拌嘴，或拿死对头桑原和真出气。某日，逃课玩耍的幽助从车轮下救起一位小姑娘，自己则被汽车撞死。他的举动出乎灵界的预料，因此得到一个复活的机会。经过一次次的考验，幽助最终在萤子和桑原的帮助下重返人间。在此之后，他成为一名灵界侦探，专门负责各种奇异的犯罪事件。在一次任务中，幽助又结识了化名南野秀一的妖狐藏马和盗贼飞影。所谓不打不相识，幽助",
  "release_date": "1992-10-10",
  "douban": "",
  "poster": "tmdb_30669.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759,
    10765
  ],
  "vote_count": 486,
  "popularity": 22.9,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP",
    "US"
  ]
},
  {
  "id": 358,
  "tmdb": 207250,
  "title": "我心里危险的东西",
  "original_title": "僕の心のヤバイやつ",
  "media_type": "tv",
  "overview": "重度中二病的阴暗角色市川京太郎和班级内受欢迎的山田杏奈\\\\n\\\\n市川看着做出不符合美少女身份的行为的山田\\\\n\\\\n她究竟知道市川的这份感情吗\\\\n\\\\n山田天真烂漫地走了过来\\\\n\\\\n完全是不同世界的两个人，他们的距离却在渐渐靠近……",
  "release_date": "2023-04-02",
  "douban": "",
  "poster": "tmdb_207250.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    35,
    18
  ],
  "vote_count": 235,
  "popularity": 19.5,
  "runtime": 23,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 359,
  "tmdb": 73223,
  "title": "黑色五叶草",
  "original_title": "ブラッククローバー",
  "media_type": "tv",
  "overview": "讲述生来无法使用魔法却意外获得黑色五叶草的魔法书的的少年亚斯塔，为了证明自己的力量，并且实现与朋友尤诺的约定，而以魔导士的顶点“魔法帝”为目标的故事。",
  "release_date": "2017-10-03",
  "douban": "",
  "poster": "tmdb_73223.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759,
    10765
  ],
  "vote_count": 2096,
  "popularity": 13.9,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 360,
  "tmdb": 75214,
  "title": "紫罗兰永恒花园",
  "original_title": "ヴァイオレット・エヴァーガーデン",
  "media_type": "tv",
  "overview": "某个大陆的、某个时代。大陆南北分割的战争结束了，世界走向了和平。在战争中作为军人的薇尔莉特•伊芙加登，怀抱着对她来说无比重要之人留下的“话语”，离开军队来到了大港口城市。踊跃的人群在排列着煤气灯的街道马路上来来往往地穿梭着。薇尔莉特在街道上找到了“代写书信”的工作。那是根据委托人的想法来组织出相应语言的工作。她直面委托人、触碰着他们内心深处的坦率感情。与此同时，薇尔莉特在记录书信时，渐渐明白那“话",
  "release_date": "2018-01-11",
  "douban": "",
  "poster": "tmdb_75214.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    18,
    10765
  ],
  "vote_count": 953,
  "popularity": 15.8,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 361,
  "tmdb": 93019,
  "title": "喜欢本大爷的竟然就你一个？",
  "original_title": "俺を好きなのはお前だけかよ",
  "media_type": "tv",
  "overview": "如月雨露（外号花洒君）是个天天装迟钝的男生，身边有着学校的前辈学生会长秋野樱，还有自己的青梅竹马日向葵，还有一位天天对自己毒舌总泡在图书馆的三色院堇子，雨露同学自我感觉超级良好，本以为自己是会被秋野樱、日向葵告白，但人家是将他当僚机，而天天对雨露毒舌被雨露忌惮的三色院堇子却真的对雨露告白。",
  "release_date": "2019-10-03",
  "douban": "",
  "poster": "tmdb_93019.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    35,
    18
  ],
  "vote_count": 283,
  "popularity": 6.0,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 362,
  "tmdb": 372058,
  "title": "你的名字。",
  "original_title": "君の名は。",
  "media_type": "movie",
  "overview": "彗星降临之夜，两个生命的轨迹就此改变。高中生三叶与泷本是素不相识的陌生人，过着各自的生活。然而某夜，他们突然互换了身体，三叶在泷的身体中醒来，泷则进入了她的人生。这种奇异的现象持续随机发生，两人不得不互相迁就，调整生活节奏。出人意料的是，他们渐渐磨合出默契，通过留言、讯息，更重要的是，通过留在彼此生命中的印记建立起联结。当璀璨的彗星点亮夜空时，他们终于醒悟：渴望从这份羁绊中获得更多。一个真正见",
  "release_date": "2016-08-26",
  "douban": "",
  "poster": "tmdb_372058.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10749,
    18
  ],
  "vote_count": 12585,
  "popularity": 30.6,
  "runtime": 106,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 363,
  "tmdb": 100049,
  "title": "总之就是非常可爱",
  "original_title": "トニカクカワイイ",
  "media_type": "tv",
  "overview": "写作星空读作NASA……虽然擅长学习但是有点那个的少年星空，在即将参加高中考试的某一天，遇见了一位非常可爱的少女。但，就在大意之间，星空遭遇了交通事故……星空突然向搭救了他的少女司告白。回答是“如果愿意和我结婚就跟你交往”。在那之后，司出现在了已18岁的星空的家。星空在交到“女友”前就有了“妻子”……问候了星空的父母，两个人重整心情回到家后，公寓被烧光了。不过没事的。一边接受有栖川家的照顾，一边和",
  "release_date": "2020-10-03",
  "douban": "",
  "poster": "tmdb_100049.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    35
  ],
  "vote_count": 1553,
  "popularity": 14.6,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 364,
  "tmdb": 65249,
  "title": "只有我不存在的城市",
  "original_title": "僕だけがいない街",
  "media_type": "tv",
  "overview": "藤沼悟是一个三流漫画家，但是他却拥有着名为“再上映”（可以穿越到事件发生之前的时间点，阻止事件发生，但失败了会一直重复）的能力。某天，当回到家里的时候他发现了自己母亲遇害的一幕，并且自己被嫁祸为杀人凶手。就在这时候，由于再上映的关系，他突然回到了18年前·小学五年级的时候，而这一刻他不但要拯救母亲，也要为了同学的安全而战……",
  "release_date": "2016-01-08",
  "douban": "",
  "poster": "tmdb_65249.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    18,
    9648
  ],
  "vote_count": 1248,
  "popularity": 8.1,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 365,
  "tmdb": 45952,
  "title": "全职猎人",
  "original_title": "HUNTER×HUNTER",
  "media_type": "tv",
  "overview": "主人公小杰从小在鲸鱼岛长大，与米特阿姨和阿婆相依为伴。性格开朗的他，有着能与动物沟通的灵性。因为无父无母，小杰将米特阿姨当成自己的生母爱着。直到9岁那一年，小杰在森林里被一位青年男子搭救。从他口中小杰得知自己的父亲还活着而且职业是猎人。在说服米特阿姨之后，小杰独自踏上了寻父的征程。然而世界那么大，在茫茫人海中找到父亲谈何容易？于是，小杰决定成为猎人，从这里开始找寻他父亲的踪迹。靠这样一种信念开始了",
  "release_date": "1999-10-16",
  "douban": "",
  "poster": "tmdb_45952.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    10765,
    10759,
    16,
    35,
    18
  ],
  "vote_count": 212,
  "popularity": 23.6,
  "runtime": 23,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 366,
  "tmdb": 64196,
  "title": "OVERLORD",
  "original_title": "オーバーロード",
  "media_type": "tv",
  "overview": "作品主要讲述了某天，一款曾经掀起过大热潮的VRMMORPG「YGGDRASIL」停止了运营。游戏原本会停止一切服务，但过了结束时间后，玩家们却发现不能退出，NPC也产生了各自的思想。现实世界中喜爱电玩的主人公铃木悟（真名）在等待系统强制登出时，与“安兹·乌尔·恭”公会的成员一起意外穿越到了异世界，并且变成了拥有骷髅外表的最强魔法师，“飞鼠”。就这样，真正的奇幻传说正式拉开了帷幕。",
  "release_date": "2015-07-07",
  "douban": "",
  "poster": "tmdb_64196.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10765,
    10759
  ],
  "vote_count": 1092,
  "popularity": 24.6,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 367,
  "tmdb": 105248,
  "title": "赛博朋克：边缘行者",
  "original_title": "サイバーパンク: エッジランナーズ",
  "media_type": "tv",
  "overview": "本剧以游戏《赛博朋克2077》为背景，讲述了街头流浪儿大卫在科技与形体改造泛滥的夜之城中挣扎求生，一步步成为一名“边缘行者”的故事。",
  "release_date": "2022-09-13",
  "douban": "",
  "poster": "tmdb_105248.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10759,
    18,
    10765
  ],
  "vote_count": 1800,
  "popularity": 17.8,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP",
    "PL",
    "US"
  ]
},
  {
  "id": 368,
  "tmdb": 42509,
  "title": "命运石之门",
  "original_title": "Steins;Gate",
  "media_type": "tv",
  "overview": "本作主人公冈部伦太郎（宫野真守 配音）是个患有严重中二病的大学生，自称为“凤凰院凶真”的他和伙伴们组成了“未来发明研究所”，在位于秋叶原的一个简陋实验室内进行各种古怪发明和调查。2010 年 7 月 28 日这天，冈部和青梅竹马真由理（花泽香菜 配音）一同去了科学讲义会场，在那里，他们遇见了天才少女牧濑红莉栖（今井麻美 配音）。让人意想不到的事情发生了，冈部在会馆楼道内听到一声惨叫，他闻声而至，发",
  "release_date": "2011-04-06",
  "douban": "",
  "poster": "tmdb_42509.jpg",
  "vote_average": 8.5,
  "genre_ids": [
    16,
    10765,
    9648,
    35
  ],
  "vote_count": 947,
  "popularity": 16.4,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 369,
  "tmdb": 123249,
  "title": "更衣人偶坠入爱河",
  "original_title": "その着せ替え人形は恋をする",
  "media_type": "tv",
  "overview": "男高中生五条新菜梦想着成为制作雏人形面部的「头师」。全身心地投入到制作雏人形后，他离同龄人的流行话题越来越远，以至于迟迟无法融入班级。对于这样的新菜来说，一直是班级中心人物的喜多川海梦简直像是生活在完全不同世界的人。然而有一天，一件意想不到的事情让他与海梦拥有了共同的秘密……！？两人原本毫无交集的世界因此产生了联系！",
  "release_date": "2022-01-09",
  "douban": "",
  "poster": "tmdb_123249.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    35,
    18
  ],
  "vote_count": 900,
  "popularity": 30.8,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 370,
  "tmdb": 207468,
  "title": "怪兽8号",
  "original_title": "怪獣８号",
  "media_type": "tv",
  "overview": "在怪兽出现率首屈一指的日本，怪兽无情地蹂躏着这个国家，践踏人们的日常。曾经立志要成为防卫队员，而今从事怪兽专门清扫行业的主人公日比野卡夫卡在某一天因为受到谜之生物的影响，身体开始怪兽化。担任讨伐怪兽工作的日本防卫队将这样的他称作“怪兽8号”。",
  "release_date": "2024-04-13",
  "douban": "",
  "poster": "tmdb_207468.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    10759,
    10765
  ],
  "vote_count": 754,
  "popularity": 24.0,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 371,
  "tmdb": 99779,
  "title": "大贵族",
  "original_title": "NOBLESSE -ノブレス-",
  "media_type": "tv",
  "overview": "故事描述吸血鬼貴族中的貴族「萊」，在沉睡了 820 年之後再度甦醒，在執事弗蘭克斯坦的協助下，以高中生身份重新開始了嶄新的生活。但是他平凡的高中生生活卻因為謎一般的組織攻擊而逐漸改變……。",
  "release_date": "2020-10-08",
  "douban": "",
  "poster": "tmdb_99779.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    10759,
    10765,
    35
  ],
  "vote_count": 421,
  "popularity": 6.5,
  "runtime": 24,
  "languages": [
    "ja",
    "en"
  ],
  "countries": [
    "KR",
    "JP",
    "US"
  ]
},
  {
  "id": 372,
  "tmdb": 12477,
  "title": "萤火虫之墓",
  "original_title": "火垂るの墓",
  "media_type": "movie",
  "overview": "在二战期间的日本，一对年幼的兄妹挣扎求生的故事。",
  "release_date": "1988-04-16",
  "douban": "",
  "poster": "tmdb_12477.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    18,
    10752
  ],
  "vote_count": 6528,
  "popularity": 0.0,
  "runtime": 89,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 373,
  "tmdb": 72517,
  "title": "欢迎来到实力至上主义的教室",
  "original_title": "ようこそ実力至上主義の教室へ",
  "media_type": "tv",
  "overview": "这个社会是否平等呢。真正的“实力”是什么？东京都高度育成高等学校。那是宣扬彻底的实力至上主义，以升学率·就业率100%而引以为豪的升学学校。升入那里，被分配到1年D班的绫小路清隆，却发现学校与实力至上主义的招牌相反，学生每个月会得到相当于10万日元、与现金同等价值的分数，在授课和生活态度方面也贯彻放任主义。在梦幻般的高中生活当中，不断地挥金如土、过着自甘堕落日子的同班同学们。但，不久他就得知了学校",
  "release_date": "2017-07-12",
  "douban": "",
  "poster": "tmdb_72517.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    18,
    9648
  ],
  "vote_count": 809,
  "popularity": 44.6,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP",
    "US"
  ]
},
  {
  "id": 374,
  "tmdb": 35753,
  "title": "零之使魔",
  "original_title": "ゼロの使い魔",
  "media_type": "tv",
  "overview": "在异世界哈尔凯尼亚被当作“使魔”被召唤出来的高中生平贺才人卷入了一场满载这四种元素的幻想罗曼史大冒险中。将才人召唤至异世界的是长相可爱却没有丝毫魔法才能的露易丝。面对突然出现的迷之美少女，满心疑惑的才人在听她讲完契约内容之后，遭遇了突如其来的强吻……之后，他的手背上浮现出了不可思议的文字，才人就这样莫名其妙的成为了露易丝的使魔……\\\\n\\\\n以全寄宿制的托丽斯汀魔法学院为舞台，主人美少女魔法使露易丝与",
  "release_date": "2006-07-03",
  "douban": "",
  "poster": "tmdb_35753.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    35,
    10759,
    10765
  ],
  "vote_count": 603,
  "popularity": 15.1,
  "runtime": 23,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 375,
  "tmdb": 56568,
  "title": "娜娜",
  "original_title": "NANA",
  "media_type": "tv",
  "overview": "小松奈奈和大崎娜娜的名字都叫NANA，但她们却是从性格到经历都不相同的两个女孩子。小松奈奈天真可爱，但生于温室里的她不懂世故，在小天地里只有她的男朋友。大崎娜娜来自破碎的家庭，她性格坚强，行事果断，渴望成为一个朋克乐手。命运让这两个性格截然相反的NANA在生命的驿站中相遇了。\\\\n\\\\n小松奈奈去东京见男友。在火车上，与她同座位的是摇滚乐队主音大崎娜娜。到了东京之后，两个人分开了，但她们却又在同一个房",
  "release_date": "2006-04-05",
  "douban": "",
  "poster": "tmdb_56568.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    18
  ],
  "vote_count": 251,
  "popularity": 18.9,
  "runtime": 23,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 376,
  "tmdb": 62565,
  "title": "俺物语",
  "original_title": "俺物語!!",
  "media_type": "tv",
  "overview": "冈田猛男（江口拓也 配音）是集英高中一年级的学生，隶属于柔道部，他生得人高马大五大三粗，却因为善良率真的个性而深得同伴们的喜爱和信赖。砂川诚（岛崎信长 配音）是猛男青梅竹马的好友，外表英俊帅气的他很受女孩子的欢迎，从小到大，凡是猛男喜欢上的女孩，最后总会被阿诚吸引，久而久之，猛男竟然也习以为常。  　　一次偶然中，猛男将一位名叫大和凛子（潘惠美 配音）的可爱女孩从电车痴汉手中救下，温柔可爱的凛子一",
  "release_date": "2015-04-09",
  "douban": "",
  "poster": "tmdb_62565.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    35
  ],
  "vote_count": 376,
  "popularity": 11.9,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 377,
  "tmdb": 35894,
  "title": "金童卡修",
  "original_title": "金色のガッシュベル!!",
  "media_type": "tv",
  "overview": "　表面上，高岭清麿（樱井孝宏 配音）是一个性孤僻不爱上学的不良少年，但他其实是个拥有超高智商的天才少年。某日，一个外表奇特的男孩找到了清麿，男孩告诉清麿自己叫卡修（大谷育江 配音），此行前来的目的是为了报恩。就这样，清麿收留了卡修，两人的同居生活正式开始。 　　在卡修随身携带的红书里，隐藏了卡修失忆的线索，而清麿居然轻易的就读懂了上面古怪的文字，从而展开了一段魔幻奇缘。原来，在这个世界上，存在着很",
  "release_date": "2003-04-06",
  "douban": "",
  "poster": "tmdb_35894.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    35,
    10762
  ],
  "vote_count": 263,
  "popularity": 13.4,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 378,
  "tmdb": 62273,
  "title": "食戟之灵",
  "original_title": "食戟のソーマ",
  "media_type": "tv",
  "overview": "《食戟之灵》的舞台是位于东京内的一所料理名校“远月学园”，初中毕业之后为了作继承家业“幸平餐馆”的主角幸平创真因为父亲的指示来到这里，以特别编入生就读。在毕业率不到百分之十的“远月学园”里，来自各地厨艺精锐的年轻人彼此较劲，互相争夺在料理上的顶点。在这料理便是一切的世界，所有敌人都必须用料理来征服。为了击败对手，互相赌上等价的赌注，用料理进行的单对单决斗，就是远月的传统料理对决，“食戟”。",
  "release_date": "2015-04-04",
  "douban": "",
  "poster": "tmdb_62273.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    35,
    18
  ],
  "vote_count": 822,
  "popularity": 10.9,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 379,
  "tmdb": 61752,
  "title": "皇家国教骑士团 OVA",
  "original_title": "ヘルシング アルティメット",
  "media_type": "tv",
  "overview": "在一次对治某村庄食尸鬼的超自然事件时，平凡女警西洛斯·维多利亚遭到袭击，奄奄一息，关键时刻吸血鬼杀手阿尔卡特出现，铲除食尸鬼，并将西洛斯变成了吸血鬼的一员，她顺理成章也接触到了阿尔卡特背后的神秘组织，即为维护英国基督新教、与反基督怪物作战的皇家国教骑士团（Hellsing），在现任当家伊塔古拉·方布鲁克·维英格茨·赫尔辛的率领下，他们接手一桩桩危险且阴谋重重的任务。在这一过程中，与食尸鬼有关的事件",
  "release_date": "2006-02-10",
  "douban": "",
  "poster": "tmdb_61752.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    18,
    10765
  ],
  "vote_count": 714,
  "popularity": 8.0,
  "runtime": 49,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 380,
  "tmdb": 62602,
  "title": "青春之旅",
  "original_title": "アオハライド",
  "media_type": "tv",
  "overview": "故事主要讲述的是对于不擅长与男生打交道的主人公吉冈双叶来说，“田中君”是特别的存在。由于在暑假时田中君转校了，所以双叶未能向他传达自己内心的感情。之后，受到男生欢迎的双叶也因此被其他女生排挤，就这样度过了难受的中学时代。升入高中以后，为了不被女生讨厌而故意做出一些粗心大意的举动的双叶，与她的初恋对象“田中君”重逢。然而，田中君在初中时的性格也已改变了，故事便由此展开。",
  "release_date": "2014-07-08",
  "douban": "",
  "poster": "tmdb_62602.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    35,
    18
  ],
  "vote_count": 348,
  "popularity": 8.9,
  "runtime": 23,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 381,
  "tmdb": 37585,
  "title": "史上最强弟子兼一",
  "original_title": "史上最強の弟子ケンイチ",
  "media_type": "tv",
  "overview": "白滨兼一是个善良的高中一年级生，但总受到许多不合理的欺负。在偶然的情况下，他与转学生风林寺美羽成了好朋友。之后受到美羽的吸引之下，兼一到了名为“梁山泊”的道场修行武术。\\\\n\\\\n经过一连串非人道的修行，兼一的武术造诣上升非凡，却也因此被不良组织“诸神黄昏”盯上，被逼迫要与“诸神黄昏”所派遣的刺客武术家决斗，在瓦解了诸神黄昏之后。“黑暗”为了要和梁山泊争夺“史上最强”这个称号，兼一又必须和“黑暗”的弟",
  "release_date": "2006-10-07",
  "douban": "",
  "poster": "tmdb_37585.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    10759,
    16,
    35
  ],
  "vote_count": 473,
  "popularity": 14.7,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 382,
  "tmdb": 86034,
  "title": "平凡职业造就世界最强",
  "original_title": "ありふれた職業で世界最強",
  "media_type": "tv",
  "overview": "经常被同学欺凌的南云始，与同班同学一起被召唤到了异世界。与接连着发现了自己的那作弊般的能力的同班同学们相反的是，始却得到了炼成师这个平凡职业。即使在异世界也是最弱的他，被某个同班同学陷害后掉进了迷宫的深处！就在找不到逃脱方法而陷入了绝望深渊的始，凭借着炼成师这个职业踏上了通往最强的道路，并与吸血鬼·月相遇了。“我保护月，月保护我，这样的话我们就是最强了。让我们一起横扫一切直至超越整个世界吧。”迷宫",
  "release_date": "2019-07-08",
  "douban": "",
  "poster": "tmdb_86034.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    10759,
    10765
  ],
  "vote_count": 641,
  "popularity": 5.3,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 383,
  "tmdb": 90937,
  "title": "动物狂想曲",
  "original_title": "BEASTARS",
  "media_type": "tv",
  "overview": "在全宿舍制的切里顿学园里，羊驼提姆被什么人吃了。在肉食兽和草食兽共存的世界中，这是最大的禁忌，也是无法超越的种族的墙壁……这是大灰狼雷格西（17岁）和各种各样的动物交织在一起，激烈的、悲伤的青春群像剧！！",
  "release_date": "2019-10-10",
  "douban": "",
  "poster": "tmdb_90937.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    18,
    9648,
    80
  ],
  "vote_count": 1294,
  "popularity": 25.1,
  "runtime": 23,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 384,
  "tmdb": 43017,
  "title": "麻辣教师GTO",
  "original_title": "グレート・ティーチャー・オニヅカ",
  "media_type": "tv",
  "overview": "中学时代，暴走族鬼冢英吉和弹间龙二组成的“鬼爆二人组”曾经声名显赫，机车、拳头、鲜血、爱情、友情，构成了他们多彩而起伏的青春。随着年龄增长，青春孟浪的少年也逐渐归于沉寂。龙二和女友小渚合理经营机车修理店，平凡而幸福；英吉则进入一所九流大学混日子，色心高涨的他为了能勾搭高校女生，竟然打算当老师！  　　阴差阳错，英吉在训导主任内山田以及理事长的帮助下，成功进入高中执教。在这个问题多多的高中里，英吉不",
  "release_date": "1999-06-30",
  "douban": "",
  "poster": "tmdb_43017.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    35,
    18
  ],
  "vote_count": 272,
  "popularity": 14.7,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 385,
  "tmdb": 62104,
  "title": "七大罪",
  "original_title": "七つの大罪",
  "media_type": "tv",
  "overview": "故事讲述发生在大不列颠的一个大国内，骑士们为了圣战而进行军备强化，因壮大骑士军团们的诸多暴行使得整个国家民不聊生。担忧着国家现状的第三王女伊丽莎白，把救国的希望寄托于10年前的事件被通缉的骑士团七原罪从而独自踏上寻找的旅程。无果的旅程中，被追兵追赶伊丽莎白因误入某个酒店，被酒店的主人、一个少年救下，这名少年正是七原罪的团长。从此他们踏上了开拓国家未来的旅途。",
  "release_date": "2014-10-05",
  "douban": "",
  "poster": "tmdb_62104.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    10759,
    10765
  ],
  "vote_count": 5136,
  "popularity": 3.6,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 386,
  "tmdb": 110309,
  "title": "无限滑板",
  "original_title": "SK∞ エスケーエイト",
  "media_type": "tv",
  "overview": "热爱滑板的高中二年级生·历，所沉迷的事物是，“S”。「S」是在封锁的矿山中乘着滑板滑落、无视规则的危险而秘密的竞技。而在此项竞技当中展开的「BEEF（决斗）」也令无数人为之疯狂。历与来自加拿大的归国子女及转学生·兰雅一起前往开办「S」的山中，从未玩过滑板的兰雅被卷入了「S」当中……!?与心术不正的滑板手以及AI滑板手等拥有不为人知的另一面、个性丰富的滑板手们共同展开的热血滑板竞技战斗×无限的可能",
  "release_date": "2021-01-10",
  "douban": "",
  "poster": "tmdb_110309.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    10759
  ],
  "vote_count": 319,
  "popularity": 16.3,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 387,
  "tmdb": 207784,
  "title": "迷宫饭",
  "original_title": "ダンジョン飯",
  "media_type": "tv",
  "overview": "迷宫饭。是“吃”，还是“被吃”，这是一个问题。在迷宫深处，莱欧斯眼看着红龙吃掉了妹妹，自己在将死之际回到了地面。尽管他想要马上再次挑战迷宫，但是钱和粮食都被留在了最深处。面对妹妹可能会被消化掉的危机，莱欧斯下定了决心。“食物就在迷宫中自给自足吧！”史莱姆，蛇尾鸡，宝箱怪，还有龙！吃着来袭的魔物们，打通迷宫吧，冒险者！",
  "release_date": "2024-01-04",
  "douban": "",
  "poster": "tmdb_207784.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    35,
    10759,
    10765
  ],
  "vote_count": 321,
  "popularity": 19.1,
  "runtime": 26,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 388,
  "tmdb": 87432,
  "title": "我们无法一起学习",
  "original_title": "ぼくたちは勉強ができない",
  "media_type": "tv",
  "overview": "刻苦学习的高中3年生·唯我成幸，为了获得免除大学学费的“特别VIP推荐”，而开始担当为备考而苦战的同学们的教育指导员。指导的对象是“文学之森的睡美人”古桥文乃和“机关精巧的拇指姑娘”绪方理珠这两位学园顶尖的天才美少女！原本以为她们的学习能力完美无缺，没想到对于不擅长的学科却完全无能……！？成幸一边被充满个性的“学不来女孩”们玩弄于股掌之间，一边为了让她们考试合格而疲于奔命！无论学习还是恋爱都不行的",
  "release_date": "2019-04-07",
  "douban": "",
  "poster": "tmdb_87432.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    35
  ],
  "vote_count": 256,
  "popularity": 7.5,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 389,
  "tmdb": 97617,
  "title": "魔王学院的不适任者",
  "original_title": "魔王学院の不適合者 ～史上最強の魔王の始祖、転生して子孫たちの学校へ通う～",
  "media_type": "tv",
  "overview": "尽管具备能毁灭人类、精灵，甚至是众神的力量，暴虐魔王阿诺斯却厌倦了永无止尽的斗争，梦想着和平的世界进行转生。然而在两千年后，转生后的他所迎来的，却是调节和平生活而变得过于弱小的子孙们，以及各种衰退至极的魔法。阿诺斯虽然进入了把被认定是魔王转生者的人召集起来「魔王学院」就读，学院却无法看出他的实力，使他被盖上不适任者的烙印。在众人都瞧不起他的环境里，他将唯一亲切对待自己的少女米夏纳为部下，不适任者（",
  "release_date": "2020-07-04",
  "douban": "",
  "poster": "tmdb_97617.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    10759,
    10765
  ],
  "vote_count": 863,
  "popularity": 29.1,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 390,
  "tmdb": 45783,
  "title": "黑子的篮球",
  "original_title": "黒子のバスケ",
  "media_type": "tv",
  "overview": "中学联赛三连霸的篮球名校“帝光中学”的篮球社，社员数超过百人，其中更有着被誉为“奇迹的世代”的五位天才篮球员，和一个既没有出场纪录，也无人记得的“梦幻的第六人”黑子哲也。这些人在升上高中后各自就读不同的学校，而黑子遇上了火神大我，自美国归来的篮球好手，火神立志打败“奇迹的世代”并成为日本第一的篮球员，而黑子也决定成为他的“影子”帮助他。他们在日本全国高校综合体育大会（简称 I‧H）和冬季杯（简称 ",
  "release_date": "2012-04-08",
  "douban": "",
  "poster": "tmdb_45783.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    35,
    18
  ],
  "vote_count": 607,
  "popularity": 16.8,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 391,
  "tmdb": 114868,
  "title": "终末的女武神",
  "original_title": "終末のワルキューレ",
  "media_type": "tv",
  "overview": "无论神的力量多么强大，人类都不会放弃赌上物种存续的战斗。人类与上帝一对一的认真较量将进入新的局面，人类的恶意和杀机将对正义的斗神猛然露出獠牙！",
  "release_date": "2021-06-17",
  "douban": "",
  "poster": "tmdb_114868.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    10759,
    16,
    10765
  ],
  "vote_count": 1873,
  "popularity": 11.6,
  "runtime": 0,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 392,
  "tmdb": 30984,
  "title": "死神",
  "original_title": "BLEACH",
  "media_type": "tv",
  "overview": "故事的主角黑崎一护是个看似暴力、单薄，实质上善良、勇敢、爱护家庭的少年，并且拥有能看见灵的体质。家里有一个开诊所的老爸和两个性格正常的妹妹夏梨和游子，一护每天七点必须按时回家,否则老爸便会使用“身体语言教训”的家规。吵闹的父子，懂事的妹妹以及与其他普通人并无大异的普通生活，直到女死神朽木露琪亚被他一脚踢到墙角并满脸惊疑地望着他问“你能看见我？”时漫画的序幕才这样被正式地揭开。 从此黑崎一护身边所有",
  "release_date": "2004-10-05",
  "douban": "",
  "poster": "tmdb_30984.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    10759,
    16,
    10765
  ],
  "vote_count": 2137,
  "popularity": 70.4,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 393,
  "tmdb": 105009,
  "title": "重生之道",
  "original_title": "東京リベンジャーズ",
  "media_type": "tv",
  "overview": "东京卍复仇者动画全集改编自同名漫画，2021年4月播出。 主角‧武道做什么事情都不顺，又住在破旧老公寓里，从电视上得知国中时期的前女友‧日向无端卷入帮派火拼而身亡。某天他在月台等车，居然跌落铁轨，正他以为自己死定了，回神之后却发现自己回到12年前的国中时期。后来又遇上了日向的弟弟‧直人，告诉他12年后发生的事实，要求他要保护姐姐，双方握手之后他又再次回到现代。",
  "release_date": "2021-04-11",
  "douban": "",
  "poster": "tmdb_105009.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    10759,
    80
  ],
  "vote_count": 1319,
  "popularity": 21.3,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 394,
  "tmdb": 3570,
  "title": "美少女战士",
  "original_title": "美少女戦士セーラームーン",
  "media_type": "tv",
  "overview": "美丽可爱的月野兔是一名就读初中的普通女孩，可学业平平、任性娇弱的她在遇到了一只会说话的小猫露娜之后，她的人生就发生了天翻地覆的变化。原来，月野兔的真实身份是拥有神奇能力的水手月亮。\\\\n\\\\n为了保卫地球、挫败黑暗势力的野心，月野兔和水野亚美、火野丽、木野真琴、爱野美奈子等人变身成为水手服美少女战士，与入侵地球的邪恶敌人展开了连番激战。",
  "release_date": "1992-03-07",
  "douban": "",
  "poster": "tmdb_3570.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    10759,
    16,
    35,
    10765,
    10762
  ],
  "vote_count": 1019,
  "popularity": 33.4,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 395,
  "tmdb": 82684,
  "title": "关于我转生变成史莱姆这档事",
  "original_title": "転生したらスライムだった件",
  "media_type": "tv",
  "overview": "三上悟过着不起眼的人生，在随机杀人魔肆虐下结束了三十七年生涯，看似如此。当他苏醒时，不仅眼睛看不见，就连耳朵也听不到。面对一连串突发状况，他意识到自己投胎转世成“史莱姆”。尽管变成最弱魔物让他颇有怨言，三上悟还是决定要快乐地过史莱姆生活，没想到却碰上天灾级魔物“暴风龙维尔德拉”，命运就此出现巨大转折。维尔德拉将他命名为“利姆鲁”，正要展开史莱姆式的异世界新生活时，却被卷入哥布林对牙狼族的纷争之中，",
  "release_date": "2018-10-02",
  "douban": "",
  "poster": "tmdb_82684.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    10759,
    16,
    10765,
    35
  ],
  "vote_count": 906,
  "popularity": 36.0,
  "runtime": 0,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 396,
  "tmdb": 31724,
  "title": "反叛的鲁路修",
  "original_title": "コードギアス 反逆のルルーシュ",
  "media_type": "tv",
  "overview": "被神圣不列颠帝国侵略而亡国的日本，11区中，在生死边缘获得神秘魔女c.c.赋予的Geass力量，立志要粉碎帝国的黑色王子鲁路修·兰佩路基，与坚持公理的白色骑士枢木朱雀所掀起的巨大变化。",
  "release_date": "2006-10-05",
  "douban": "",
  "poster": "tmdb_31724.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    10765,
    10759,
    18
  ],
  "vote_count": 884,
  "popularity": 25.3,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 397,
  "tmdb": 84669,
  "title": "五等分的花嫁",
  "original_title": "五等分の花嫁",
  "media_type": "tv",
  "overview": "过着贫穷生活的高中二年级生上杉风太郎，听说有一份条件不错的家庭教师兼职。不过学生竟然是同级生，而且还是五胞胎！！她们全员都是美少女，却是“濒临留级”、“讨厌学习”的问题儿童！最初的课题是赢得姐妹们的信赖……！？每天都吵吵闹闹的中野家五胞胎献上的可爱度500%的五人五色恋爱喜剧开演！！",
  "release_date": "2019-01-11",
  "douban": "",
  "poster": "tmdb_84669.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    18,
    35
  ],
  "vote_count": 751,
  "popularity": 17.9,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 398,
  "tmdb": 66078,
  "title": "双星之阴阳师",
  "original_title": "双星の陰陽師",
  "media_type": "tv",
  "overview": "自有人类以来，“污秽”就不断的现身骚扰着人世间的安稳和宁静，为了对抗污秽，一群名为“阴阳师”的人们勇敢的站了出来，加入到了战斗之中，用他们的智慧和勇气守护着人类。少年焰魔堂辘轳（花江夏树 配音）立志要成为史上最强阴阳师，却因为一场悲剧的发生而意识到灾难的不可逆转，遂放弃了理想，沦为路人。 \\\\n\\\\n　　某日，一位名叫化野红绪（潘惠美 配音）的京都少女出现在了辘轳的身边，两人在误打误撞之中开始了同居生",
  "release_date": "2016-04-06",
  "douban": "",
  "poster": "tmdb_66078.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    10759,
    35,
    10765
  ],
  "vote_count": 361,
  "popularity": 12.6,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 399,
  "tmdb": 68854,
  "title": "好想告诉你",
  "original_title": "君に届け",
  "media_type": "tv",
  "overview": "黑沼爽子因为外表看起来很阴沉，被班上同学取了个外号叫“贞子”。甚至还传说只要跟她对看三秒以上，7天之后就会遭遇不幸。但其实爽子个性开朗又单纯，也很乐于助人，虽然想和大家打成一片，却始终没有机会。唯独只有他，笑容爽朗的阳光男孩风早翔太，始终很自然地和爽子相处。在此之后，爽子不仅渐渐改变了自己，也终于交到失野朱音、吉田千鹤、真田龙等知心朋友。爽子与风早两人，更共同经历了许多“第一次”，拉近了彼此的距离",
  "release_date": "2009-10-07",
  "douban": "",
  "poster": "tmdb_68854.jpg",
  "vote_average": 8.4,
  "genre_ids": [
    16,
    18
  ],
  "vote_count": 356,
  "popularity": 30.1,
  "runtime": 0,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ]
},
  {
  "id": 400,
  "tmdb": 280,
  "title": "终结者2：审判日",
  "original_title": "Terminator 2: Judgment Day",
  "media_type": "movie",
  "overview": "上一部中，超级电脑“天网”阻止人类抵抗领袖约翰·康纳诞生的行动失败，时隔13年后，在“审判日”到来之前，“天网”派出了更加先进的生化机器人T-1000（罗伯特·帕特里克 饰）从公元2029年回到洛杉矶追杀已经长大的约翰，与此同时，约翰也派出了机器人T-800（阿诺· 施瓦辛格 饰）回去保护年幼的自己。\r 此时，萨拉·康纳（琳达·汉密尔顿 饰）因为怪异的言行而住进了精神疗养院，约翰则和养父母住在一起，行为叛逆。T-800找到他们，在逃避T-1000追杀过程中，获得了二人的信任。\r 为了改变未来的历史，挽救人类的命运，萨拉、约翰和T-800 Model 101找到了“天网”之父，迈尔斯·戴森（乔·莫顿 饰），说服他销毁一切有关“天网”的资料，此时，警察和T-1000同时赶来，他们陷入了多方争斗中。",
  "release_date": "1991-07-03",
  "douban": "",
  "poster": "tmdb_280.jpg",
  "vote_average": 8.2,
  "vote_count": 14308,
  "popularity": 18.2,
  "runtime": 137,
  "languages": [
    "en",
    "es"
  ],
  "countries": [
    "US",
    "FR"
  ],
  "genre_ids": [
    28,
    53,
    878
  ]
},
  {
  "id": 401,
  "tmdb": 62029,
  "title": "都市泰山",
  "original_title": "Bingo Bongo",
  "media_type": "movie",
  "overview": "意大利版泰山，回归都市的泰山，成功回归都市的泰山，抱得美人归的泰山",
  "release_date": "1982-12-23",
  "douban": "",
  "poster": "tmdb_62029.jpg",
  "vote_average": 5.7,
  "vote_count": 176,
  "popularity": 37.4,
  "runtime": 102,
  "languages": [
    "de",
    "it"
  ],
  "countries": [
    "IT"
  ],
  "genre_ids": [
    35
  ]
},
  {
  "id": 402,
  "tmdb": 2098,
  "title": "蝙蝠侠动画",
  "original_title": "Batman: The Animated Series",
  "media_type": "tv",
  "overview": "　　黑暗笼罩的哥谭镇，暗夜里总在上演一幕幕追逐。布鲁斯·韦恩白天是社交宠儿、巨富青年，夜晚则是行走在夜间的蝙蝠侠，他利用自己的财富、智慧和高科技装备，致力于打击哥谭镇的犯罪。他的对手有珠宝大盗、美艳的猫女，玩世不恭、搞出各种致命恶作剧的小丑，失去爱人又被害成“急冻人”的研究员，曾是著名演员、欲找回被车祸损毁容貌而过量使用神奇面霜的“泥人”……每个坏人身上，都有一个令人唏嘘的故事，蝙蝠侠秉承他“不杀生”的原则，作为哥谭镇正义的化身，将一个个罪犯绳之以法送进监狱。",
  "release_date": "1992-09-05",
  "douban": "",
  "poster": "tmdb_2098.jpg",
  "vote_average": 8.6,
  "vote_count": 1825,
  "popularity": 34.9,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    10759,
    16,
    18,
    9648
  ]
},
  {
  "id": 403,
  "tmdb": 37165,
  "title": "楚门的世界",
  "original_title": "The Truman Show",
  "media_type": "movie",
  "overview": "二十九年前，一名男婴被奥姆尼康电视公司收养，从此成为全球最受欢迎的电视节目的主人公。他的名字叫楚门·伯班克。[派拉蒙影业]",
  "release_date": "1998-06-04",
  "douban": "",
  "poster": "tmdb_37165.jpg",
  "vote_average": 8.2,
  "vote_count": 20241,
  "popularity": 20.2,
  "runtime": 103,
  "languages": [
    "it",
    "en",
    "ja",
    "es"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    35,
    18
  ]
},
  {
  "id": 404,
  "tmdb": 1122573,
  "title": "金谍行动",
  "original_title": "In the Grey",
  "media_type": "movie",
  "overview": "　　当一名冷酷无情的独裁者窃取了数十亿美元的巨额财富后，一支潜伏于暗影之中的精英特工小队受命夺回这笔巨款。这些特工游走于全球暗网，既能操控权谋博弈，亦精通爆破突袭。这场本已险象环生的惊天盗局却风云突变，最终升级为一场充斥着谋略、欺诈与生死较量的全面战争。",
  "release_date": "2026-05-13",
  "douban": "",
  "poster": "tmdb_1122573.jpg",
  "vote_average": 6.7,
  "vote_count": 131,
  "popularity": 209.4,
  "runtime": 97,
  "languages": [
    "en",
    "es"
  ],
  "countries": [
    "US",
    "GB"
  ],
  "genre_ids": [
    28,
    53
  ]
},
  {
  "id": 405,
  "tmdb": 94997,
  "title": "权力的游戏前传：龙族",
  "original_title": "House of the Dragon",
  "media_type": "tv",
  "overview": "在维斯特洛大陆，坦格利安家族的衰落被公之于众。一场内战即将爆发，这场战争将被称为“血龙狂舞”。",
  "release_date": "2022-08-21",
  "douban": "",
  "poster": "tmdb_94997.jpg",
  "vote_average": 8.3,
  "vote_count": 5974,
  "popularity": 76.4,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    10765,
    18,
    10759
  ]
},
  {
  "id": 406,
  "tmdb": 185,
  "title": "发条橙",
  "original_title": "A Clockwork Orange",
  "media_type": "movie",
  "overview": "　　阿利斯是一位无恶不作的少年，他的特殊喜好是边听贝多芬的交响曲边奸淫女性，某次他进入一所别墅抢劫一番后，打残了该别墅的主人——一名小说家，并用特殊喜好蹂躏了其妻子。后来因为杀了一名单身女子，阿利斯入狱并接受了特殊的人格治疗，出狱后，他对淫乐之事产生彻底的厌倦。但当阿利斯回到家时，周围人群没改变对他的旧看法，在种种歧视的重压下，他跑到郊外一所别墅想喘口气，不想这所别墅正是他以前抢劫过的小说家的那所。而作为反政府组织首领的该小说家为了达到某种目的，软禁了阿利斯。当这件事暴露小说家被捕时，其手下为了对抗政府，扬言要把阿利斯恢复原来的性情，完全不理一旁的阿利斯大叫“我完全好了”。",
  "release_date": "1971-10-28",
  "douban": "",
  "poster": "tmdb_185.jpg",
  "vote_average": 8.2,
  "vote_count": 13826,
  "popularity": 8.9,
  "runtime": 137,
  "languages": [
    "en"
  ],
  "countries": [
    "US",
    "GB"
  ],
  "genre_ids": [
    878,
    80
  ]
},
  {
  "id": 407,
  "tmdb": 40143,
  "title": "通灵王",
  "original_title": "シャーマンキング",
  "media_type": "tv",
  "overview": "出生在通灵世家的麻仓叶（佐藤佑子 配音），从小就被爷爷教导成为了一名通灵人。通灵人，即可以和神、精灵乃至往生者自由沟通，且借由这些神灵的能力来治疗或是破坏。这种能力被很多人所渴望拥有。从爷爷那，叶得知如果能从通灵王大赛中脱颖而出并胜出，即能得到精灵王，从而实现自己的任何愿望。一直信奉“船到桥头自然直”的叶也立下了志愿，朝着通灵王之路前进。\n\n　　为了寻找自己的持有灵，叶转学来到了踏张之丘，认识了小山田万太（犬山犬子 配音），并迅速和他成为了朋友。后又结识了同样志向成为通灵王的木刀之龙（田中正彦 配音）。因一次意外，叶得到了他的持有灵——600年前的武士阿弥陀丸（小西克幸 配音）。因而正式踏上了通力王之路。随后叶的未婚妻恐山安娜（林原惠美 配音）等也悉数登场。通灵王比赛也日渐来临……",
  "release_date": "2001-07-04",
  "douban": "",
  "poster": "tmdb_40143.jpg",
  "vote_average": 8.5,
  "vote_count": 444,
  "popularity": 9.5,
  "runtime": 0,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ],
  "genre_ids": [
    16,
    10759,
    10765
  ]
},
  {
  "id": 408,
  "tmdb": 378064,
  "title": "声之形",
  "original_title": "映画 聲の形",
  "media_type": "movie",
  "overview": "西宫硝子（早见沙织 配音）生来患有听觉障碍，要依靠助听器和外界交流，口语发音也因此格外的古怪。小学时，硝子转入了一所新的学校，特殊的生理缺陷让她成为了班上引人注目的独特存在，她因此收获了坚实的友情，却也遭到了以男生石田将也（入野自由 配音）为首的小团体的孤立和排挤。随着时 间的推移，无心或有意的恶作剧渐渐升级，最终演变成为了无法挽回的伤害，硝子永远的消失在了众人的眼前。排挤硝子的事情曝光后，将也成为了下一个被欺负的对象，孤独痛苦的他终于理解了硝子的隐忍和温柔，只是他再也没有机会跟硝子道歉了。一次偶然中，将也同硝子重逢了，命运的齿轮重新开始了转动。",
  "release_date": "2016-09-17",
  "douban": "",
  "poster": "tmdb_378064.jpg",
  "vote_average": 8.4,
  "vote_count": 4493,
  "popularity": 12.6,
  "runtime": 130,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ],
  "genre_ids": [
    16,
    18,
    10749
  ]
},
  {
  "id": 409,
  "tmdb": 1083381,
  "title": "后室",
  "original_title": "Backrooms",
  "media_type": "movie",
  "overview": "一位心理治疗师的病人，在一次诡异的事故中“切入”到了一个超越现实的奇异维度。为了带回病人，这位治疗师不得不亲自踏入那片无边无际、充满黄色壁纸和嗡嗡荧光灯响声的未知迷宫。",
  "release_date": "2026-05-27",
  "douban": "",
  "poster": "tmdb_1083381.jpg",
  "vote_average": 6.7,
  "vote_count": 330,
  "popularity": 258.7,
  "runtime": 111,
  "languages": [
    "en"
  ],
  "countries": [
    "US",
    "CA"
  ],
  "genre_ids": [
    27,
    9648,
    878
  ]
},
  {
  "id": 410,
  "tmdb": 533535,
  "title": "死侍与金刚狼",
  "original_title": "Deadpool & Wolverine",
  "media_type": "movie",
  "overview": "史上最另类超级英雄、语不惊人死不休的死侍睽违六年终于重返大银幕，首次加入漫威电影宇宙！除了与一众昔日战友重新聚首，更与睽别15年的金刚狼二度并肩作战、再续兄弟情谊。直面时间变异管理局的追捕，迎战让人意想不到的神秘劲敌卡桑德拉·诺瓦。即便如此，死侍也毫不畏惧，自信满满地宣称自己就是“漫威救世主”，并将改写漫威电影宇宙！",
  "release_date": "2024-07-24",
  "douban": "",
  "poster": "tmdb_533535.jpg",
  "vote_average": 7.6,
  "vote_count": 8712,
  "popularity": 39.8,
  "runtime": 127,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    28,
    35,
    878
  ]
},
  {
  "id": 411,
  "tmdb": 44217,
  "title": "维京传奇",
  "original_title": "Vikings",
  "media_type": "tv",
  "overview": "本剧描述了维京人鼎盛时期的故事，他们在当时的北欧地区处于统治地位，因为喜好海上劫掠并不断对外扩张，被人们冠以“北欧海盗”的别号。该剧将侧重于描写维京人的生活、贸易、探索及对外侵袭。",
  "release_date": "2013-03-03",
  "douban": "",
  "poster": "tmdb_44217.jpg",
  "vote_average": 8.1,
  "vote_count": 7633,
  "popularity": 97.2,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "CA",
    "IE"
  ],
  "genre_ids": [
    10759,
    18,
    10768
  ]
},
  {
  "id": 412,
  "tmdb": 980477,
  "title": "哪吒之魔童闹海",
  "original_title": "哪吒之魔童闹海",
  "media_type": "movie",
  "overview": "天劫之后，哪吒、敖丙的灵魂虽保住了，但肉身很快会魂飞魄散。太乙真人打算用七色宝莲给二人重塑肉身。但是在重塑肉身的过程中却遇到重重困难，哪吒、敖丙的命运将走向何方？ 申公豹放出被囚的四龙王，东海龙王敖光表示“我若出战，就让陈塘关鸡犬不留”，哪吒为了守卫陈塘关将与四海龙王大打出手。",
  "release_date": "2025-01-29",
  "douban": "",
  "poster": "tmdb_980477.jpg",
  "vote_average": 8.2,
  "vote_count": 701,
  "popularity": 43.2,
  "runtime": 144,
  "languages": [
    "zh"
  ],
  "countries": [
    "CN"
  ],
  "genre_ids": [
    16,
    28,
    14,
    12
  ]
},
  {
  "id": 413,
  "tmdb": 1400,
  "title": "宋飞正传",
  "original_title": "Seinfeld",
  "media_type": "tv",
  "overview": "没有主题，没有主线，却造就了一部里程碑般的情景喜剧。喜剧演员杰里和他的三位尖刻而幽默的朋友就这样在无聊与荒谬里不断发现乐趣。",
  "release_date": "1989-07-05",
  "douban": "",
  "poster": "tmdb_1400.jpg",
  "vote_average": 8.3,
  "vote_count": 2336,
  "popularity": 83.3,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    35
  ]
},
  {
  "id": 414,
  "tmdb": 2406,
  "title": "逝者能言",
  "original_title": "Crossing Jordan",
  "media_type": "tv",
  "overview": "《逝者能言》是一部美国犯罪剧情剧集，由吉尔·亨内斯主演，她在剧中饰演乔丹·卡瓦诺医生。作为一名致力于侦破罪案的法医病理学家，乔丹受雇于马萨诸塞州首席法医办公室。",
  "release_date": "2001-09-24",
  "douban": "",
  "poster": "tmdb_2406.jpg",
  "vote_average": 7.2,
  "vote_count": 162,
  "popularity": 60.0,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    18
  ]
},
  {
  "id": 415,
  "tmdb": 65733,
  "title": "哆啦A梦",
  "original_title": "ドラえもん",
  "media_type": "tv",
  "overview": "水田山葵版电视动画（水田わさび版）简称水田版动画，又称朝日电视台版《哆啦A梦》第二季动画、第三代《哆啦A梦》动画、《哆啦A梦》动画第三版、《哆啦A梦》第三版动画、第三代《哆啦A梦》动画等。自2005年4月15日开始，在朝日电视台上映的电视动画，目前仍持续播映中，因哆啦A梦声优为水田山葵而得名。日语中将前作大山版简称作“のぶドラ”（直译：羡代哆啦/Nobu Dora），本作水田版简称作“わさドラ”（直译：山葵哆啦/Wasa Dora）。\n\n台湾华视在播出时为了与称为《哆啦A梦》的大山版分别，将其称作《新哆啦A梦》；在中国常称《哆啦A梦新番》；在香港则不做任何分别续用《多啦A梦》，然而在英文版电子节目表或播放平台上则使用了《New Doraemon》。",
  "release_date": "2005-04-22",
  "douban": "",
  "poster": "tmdb_65733.jpg",
  "vote_average": 8.0,
  "vote_count": 228,
  "popularity": 105.6,
  "runtime": 22,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ],
  "genre_ids": [
    10759,
    16,
    35,
    10765,
    10762,
    10751
  ]
},
  {
  "id": 416,
  "tmdb": 324786,
  "title": "血战钢锯岭",
  "original_title": "Hacksaw Ridge",
  "media_type": "movie",
  "overview": "故事改编自二战上等兵军医戴斯蒙德·道斯的真实经历，他因为在冲绳岛战役中勇救75人生命而被授予美国国会荣誉勋章，同时也是首位获此荣誉的在战场上拒绝杀戮的医疗兵。",
  "release_date": "2016-10-07",
  "douban": "",
  "poster": "tmdb_324786.jpg",
  "vote_average": 8.2,
  "vote_count": 14862,
  "popularity": 16.8,
  "runtime": 139,
  "languages": [
    "ja",
    "en"
  ],
  "countries": [
    "US",
    "GB",
    "AU"
  ],
  "genre_ids": [
    18,
    36,
    10752
  ]
},
  {
  "id": 417,
  "tmdb": 98214,
  "title": "反派本色",
  "original_title": "Villanos",
  "media_type": "tv",
  "overview": "反派本色讲述的是黑帽组织（Black Hat Org.）的故事。\n\n该组织由 Black Hat 领导，手下有三位与祂相比“没那么邪恶”的助手。\n\n黑帽 Black Hat 一心想把 Dr. Flug 研制的各式邪恶发明推向市场，实现自己宏大的邪恶抱负。然而事与愿违，这些看似天才的创新往往带着细小却滑稽的瑕疵，最后总让祂的阴谋以啼笑皆非的方式收场。",
  "release_date": "2017-05-15",
  "douban": "",
  "poster": "tmdb_98214.jpg",
  "vote_average": 8.6,
  "vote_count": 303,
  "popularity": 2.7,
  "runtime": 11,
  "languages": [
    "en",
    "es"
  ],
  "countries": [
    "MX"
  ],
  "genre_ids": [
    16
  ]
},
  {
  "id": 418,
  "tmdb": 24428,
  "title": "复仇者联盟",
  "original_title": "The Avengers",
  "media_type": "movie",
  "overview": "一股突如其来的强大邪恶势力对地球造成致命威胁，没有任何一个超级英雄能够单独抵挡。长期致力于保护全球安危的神盾局感到措手不及，其指挥官尼克·弗瑞意识到他必须创建一个“史上最强”的联盟组织， 云集各方超级英雄一起发威，才能拯救世界于水深火热，抵御黑暗势力的侵袭。于是由六大超级英雄——“钢铁侠”、“雷神” 、“美国队长”、“绿巨人” 、“黑寡妇”和“鹰眼”组成的 “复仇者联盟”应运而生。他们各显神通，团结一心，终于战胜了邪恶势力，保证了地球的安全。",
  "release_date": "2012-04-25",
  "douban": "",
  "poster": "tmdb_24428.jpg",
  "vote_average": 8.0,
  "vote_count": 38180,
  "popularity": 52.5,
  "runtime": 142,
  "languages": [
    "ru",
    "en",
    "hi"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    878,
    28,
    12
  ]
},
  {
  "id": 419,
  "tmdb": 764,
  "title": "骇人命案事件簿",
  "original_title": "Midsomer Murders",
  "media_type": "tv",
  "overview": "《骇人命案事件簿》是英国独立电视台制作的一部长青推理电影集，取材于英国当代推理小说家Caroline Graham的作品，截至2010年为止共拍摄十三季81集。该剧以总督察Tom Barnaby以及他的年轻拍档Troy为主干，讲述二人凭借机智抽丝剥茧，悉破复杂凶案的故事 ，此外这两个人在查案过程中所不时表现出的幽默机智、亦庄亦谐也是此片受欢迎的原因之一。全剧在英国南部白金汉郡取景拍摄，漂亮的小村庄充满了浓浓的英伦风味，与命案本身的骇人听闻形成强烈反衬，为英式推理迷以及克里斯蒂小说爱好者们的必看之作。",
  "release_date": "1997-03-23",
  "douban": "",
  "poster": "tmdb_764.jpg",
  "vote_average": 7.5,
  "vote_count": 355,
  "popularity": 116.8,
  "runtime": 90,
  "languages": [
    "en"
  ],
  "countries": [
    "GB"
  ],
  "genre_ids": [
    80,
    18,
    9648
  ]
},
  {
  "id": 420,
  "tmdb": 37680,
  "title": "金装律师",
  "original_title": "Suits",
  "media_type": "tv",
  "overview": "大学辍学生迈克，在一次贩毒失败后闯进了一个高材生云集的招聘会，原来这是曼哈顿最著名的律师哈维在招聘律师助手。在众多哈佛高材生中，哈维看中了聪明机警、记忆力发达的迈克。尽管他发现迈克非但不是哈佛法学院学生，而且他还有吸大麻的恶习，但他还是决定瞒着上司，招迈克做助手。于是，哈维和迈克组成了一支“金装组合”，在律师事务所中成为常胜搭档。迈克虽然有着天才般的头脑，但在法律上他还是一名新手，加入事务所之后遇到了各种难题，而冷面律师哈维并没有对他处处提点，因此迈克总是四处碰壁，而哈维的对手路易更是处处刁难他……",
  "release_date": "2011-06-23",
  "douban": "",
  "poster": "tmdb_37680.jpg",
  "vote_average": 8.2,
  "vote_count": 5709,
  "popularity": 114.1,
  "runtime": 42,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    18
  ]
},
  {
  "id": 421,
  "tmdb": 354912,
  "title": "寻梦环游记",
  "original_title": "Coco",
  "media_type": "movie",
  "overview": "尽管家族世代对音乐有着令人费解的禁令，米格尔仍梦想成为偶像埃内斯托·德拉克里兹那样杰出的音乐家。急于证明自己的才华，米格尔因一连串神秘事件而误入绚丽多彩的亡灵之地。途中，他遇到了迷人的捣蛋鬼埃克托，两人携手踏上非凡旅程，揭晓米格尔家族历史背后尘封的真相。[迪士尼/皮克斯]",
  "release_date": "2017-10-27",
  "douban": "",
  "poster": "tmdb_354912.jpg",
  "vote_average": 8.2,
  "vote_count": 20988,
  "popularity": 24.9,
  "runtime": 105,
  "languages": [
    "en",
    "es"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    10751,
    16,
    10402,
    12
  ]
},
  {
  "id": 422,
  "tmdb": 1402,
  "title": "行尸走肉",
  "original_title": "The Walking Dead",
  "media_type": "tv",
  "overview": "镇治安官瑞克·格莱姆斯在一次行动中遭受枪击，当他从昏迷中醒来时，发现小镇上阴气沉沉，死尸遍地。更为恐怖的是，有的死尸游走于街头巷尾，嗜血如命，早已化作恐怖的丧尸。从一对幸存的父子口中得知，大批的幸存者早已疏散到亚特兰大市的避难所。为了 找到失踪的妻儿，瑞克只身上路。然而亚特兰大早已沦陷成为死城，丧尸在此占有绝对的统治地位。被丧尸围攻的瑞克得到数名幸存者的救助，经过一番奋力厮杀，他们最终返回到野外的营地。在接下来的日子里，他们不仅要面临丧尸的威胁，更要承受来自灵魂深处的巨大考验……",
  "release_date": "2010-10-31",
  "douban": "",
  "poster": "tmdb_1402.jpg",
  "vote_average": 8.1,
  "vote_count": 17833,
  "popularity": 104.9,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    10759,
    18,
    10765
  ]
},
  {
  "id": 423,
  "tmdb": 1413,
  "title": "美国恐怖故事",
  "original_title": "American Horror Story",
  "media_type": "tv",
  "overview": "《美国恐怖故事》（英语：American Horror Story）是美国恐怖电视剧系列，每季讲述不同时间、不同地点的恐怖故事。",
  "release_date": "2011-10-05",
  "douban": "",
  "poster": "tmdb_1413.jpg",
  "vote_average": 8.1,
  "vote_count": 6049,
  "popularity": 75.6,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    18,
    9648,
    10765
  ]
},
  {
  "id": 424,
  "tmdb": 32798,
  "title": "夏威夷特勤组",
  "original_title": "Hawaii Five-0",
  "media_type": "tv",
  "overview": "Steve McGarrett侦探（Alex O'Loughlin扮演）曾经是一位获得过荣誉勋章的海军军官，退役后当上了警察。为了调查父亲的谋杀案，他返回了家乡瓦胡岛（夏威夷群岛的主岛）。夏威夷州长认为Steve是个难得的人才，执意挽留他在岛上工作。她想让Steve组建一支专门负责调查重案的精英团队－－规矩由他来定，她在幕后提供支援。这支命名为「Five-0」（50）的团队不走过场，不玩花样，只要能抓住岛上最大的匪帮首领，他们就算是把天弄塌了也没事。\n\nSteve很爽快地答应了这位女州长的要求并开始「招兵买马」。第一个加盟「50」重案组的是Danny Williams侦探（Scott Caan扮演），人们都管他叫「Danno」。他以前在新泽西警察局工作，最近才被转调到夏威夷警察局。他喜欢高楼林立的都市生活，对阳光、沙滩和延绵不断的海岸线没有多少兴趣。不过，为了让8岁的小女儿有个健康的成长环境，他发誓要保护这座小岛的安全。\n\n随后加盟的是Chin Ho Kelly（Daniel Dae Kim扮演）。他以前在檀香山（夏威夷首府）警察局当警探，因为错误的腐败指控被贬到联邦安全巡逻队当巡防员。他曾经是McGarrett父亲的门徒。\n\nChin的表妹Kono（Grace Park扮演）在夏威夷土生土长，坚强好胜，性格有点像假小子。她刚刚从警察学校毕业，渴望在工作岗位上证明自己的能力，于是主",
  "release_date": "2010-09-20",
  "douban": "",
  "poster": "tmdb_32798.jpg",
  "vote_average": 7.7,
  "vote_count": 1854,
  "popularity": 119.2,
  "runtime": 42,
  "languages": [
    "pt",
    "en",
    "es"
  ],
  "countries": [
    "US",
    "SG"
  ],
  "genre_ids": [
    80,
    18,
    10759
  ]
},
  {
  "id": 425,
  "tmdb": 4087,
  "title": "X档案",
  "original_title": "The X-Files",
  "media_type": "tv",
  "overview": "美国FBI探员福克斯·穆德（大卫·杜楚尼 David Duchovny 饰）童年时曾经历一起离奇神秘的绑架案，他的妹妹萨曼莎在睡梦中被外星人劫持，至今下落不明。从此穆德便专注于神秘事件的研究，并专门负责FBI总部的X档案部门。因穆德行事乖张，难以驾驭。FBI高层从联邦调查局学院调来女性探员黛娜·斯科莉（吉莲·安德森 Gillian Anderson 饰），表面上是协助穆德工作，实际上是希望这名崇尚科学的理性探员能够制约穆德的行为。两人最初的合作并不理想，完全不同的思维模式时刻导致争论的爆发。但随着各种离奇案件的出现以及两人交往的加深，穆德和斯科莉最终变成可以为对方出生入死的可靠伙伴……",
  "release_date": "1993-09-10",
  "douban": "",
  "poster": "tmdb_4087.jpg",
  "vote_average": 8.4,
  "vote_count": 3566,
  "popularity": 81.0,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    9648,
    10765,
    80
  ]
},
  {
  "id": 426,
  "tmdb": 299167,
  "title": "达顿牧场",
  "original_title": "Dutton Ranch",
  "media_type": "tv",
  "overview": "抛开《黄石》时期经历的阴影，Beth和Rip努力共筑未来，但他们遭遇了残酷的新现实，以及一家不择手段、只为保住自己帝国的无情敌对牧场。在南得克萨斯州，血脉之深远胜于一切，宽恕转瞬即逝，而生存的代价，或许正是你的灵魂。",
  "release_date": "2026-05-15",
  "douban": "",
  "poster": "tmdb_299167.jpg",
  "vote_average": 9.3,
  "vote_count": 196,
  "popularity": 139.1,
  "runtime": 0,
  "languages": [
    "de",
    "en",
    "es"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    37,
    18
  ]
},
  {
  "id": 427,
  "tmdb": 4057,
  "title": "犯罪心理",
  "original_title": "Criminal Minds",
  "media_type": "tv",
  "overview": "犯罪心理研究小组隶属FBI，他们跨州行动，主要针对连环杀人案，从嫌疑人的犯罪心理和行为模式入手建立人物侧写，圈定罪犯的性别、年龄、职业特征、居住环境乃至成长经历，从而预测罪犯下一步行为，直至缉拿罪犯。他们的成员包括：高智商、强记忆力的少年天才斯拜瑟尔·瑞德博士——负责数据和资料分析；外冷内热的硬汉阿伦·哈奇——沟通能力极强，波多黎各小伙德里克·摩根——强制性犯罪行为专家；打扮招摇的小胖妹佩妮洛普·格西娅——数据库专家，美女媒体联络员JJ等，在老探员戴维·罗西带领下，飞往全美各地，展开一场场缉凶行动。",
  "release_date": "2005-09-22",
  "douban": "",
  "poster": "tmdb_4057.jpg",
  "vote_average": 8.3,
  "vote_count": 4088,
  "popularity": 185.5,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US",
    "CA"
  ],
  "genre_ids": [
    80,
    18,
    9648
  ]
},
  {
  "id": 428,
  "tmdb": 1639398,
  "title": "Psicópata: El Asesino del Conejo Blanco",
  "original_title": "Psicópata: El Asesino del Conejo Blanco",
  "media_type": "movie",
  "overview": "",
  "release_date": "2026-03-19",
  "douban": "",
  "poster": "tmdb_1639398.jpg",
  "vote_average": 7.4,
  "vote_count": 84,
  "popularity": 42.1,
  "runtime": 99,
  "languages": [
    "es"
  ],
  "countries": [],
  "genre_ids": [
    53,
    27
  ]
},
  {
  "id": 429,
  "tmdb": 1100,
  "title": "老爸老妈的浪漫史",
  "original_title": "How I Met Your Mother",
  "media_type": "tv",
  "overview": "泰德（乔什·拉德诺 Josh Radnor 饰）、马修（杰森·席格尔 Jason Segel 饰）和巴尼（尼尔·帕特里克·哈里斯 Neil Patrick Harris 饰）是三个好友，其中只有马修拥有一份稳定爱情——他很快要和幼儿园老师莉莉（艾丽森·汉妮根 Alyson Hannigan 饰）结婚了。而巴尼是个典型花花公子，对他来说，安定下来是不可能的。泰德倒是很想找到所爱，进入正常婚姻生活，也终于在酒吧遇到了心中的女神——美丽女主播罗宾（寇碧·史莫德斯 Cobie Smulders），岂料第一次约会，泰德就心急表白，将女神吓到了。为了解决泰德的爱情困扰，几位损友争相为他出主意，罗宾也慢慢进入他们的好友圈。",
  "release_date": "2005-09-19",
  "douban": "",
  "poster": "tmdb_1100.jpg",
  "vote_average": 8.1,
  "vote_count": 5708,
  "popularity": 74.4,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    35
  ]
},
  {
  "id": 430,
  "tmdb": 5920,
  "title": "超感警探",
  "original_title": "The Mentalist",
  "media_type": "tv",
  "overview": "《超感警探》英文片名为《The Mentalist》，由美国 CBS 发行，金球奖提名者西蒙·贝克 (Simon Baker) 主演，饰演一位过去曾长期在媒体上发表各类关于精神疾病和超自然感觉的文章，并且一直担任电视谈话节目的嘉宾。他俨然是一个心理专家，但这位“半名人”自己也承认，他所谓的“超自然能力”纯粹是糊弄人的骗局－－只不过他的观察力和感知力远比别人强而已。如今，从“名人圈”里“卸甲归田”的简 (Jane) 当上了加利福尼亚调查局 (CBI) 专案调查组的独立顾问。他利用自己的“超感”特长连续破获了多起公众关注度高的疑难悬案，惊人的破案效率和成功记录让很多人连呼“神人” 。但是在调查局内，大家都知道简的底细－－他是个缺乏纪律感、不愿意按规矩办事的家伙。\n\n古板严肃、一切只知道照本宣科的高级特工里斯本（Teresa Lisbon，罗宾·唐尼 Robin Tunney 饰，代表作《越狱 Prison Break》）拿简非常头疼。她不喜欢简公私不明、轻重不分的性格。但另一方面，她也不得不承认：简的作用无人可替代，他的判断力对同事们来说非常有价值。\n\n里斯本手下的得力乾将包括聪明的金博尔·乔（Kimball Cho，蒂姆·康 Tim Kang 饰， 代表作《第一滴血 Rambo》）和韦恩·瑞斯比（Wayne Rigsby，欧文·约曼 Owain Yeoman 饰，代表作《The Ni",
  "release_date": "2008-09-23",
  "douban": "",
  "poster": "tmdb_5920.jpg",
  "vote_average": 8.4,
  "vote_count": 4319,
  "popularity": 184.1,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    80,
    18,
    9648
  ]
},
  {
  "id": 431,
  "tmdb": 1632181,
  "title": "Socias por accidente",
  "original_title": "Socias por accidente",
  "media_type": "movie",
  "overview": "",
  "release_date": "2026-03-12",
  "douban": "",
  "poster": "tmdb_1632181.jpg",
  "vote_average": 9.1,
  "vote_count": 225,
  "popularity": 49.2,
  "runtime": 110,
  "languages": [
    "es"
  ],
  "countries": [
    "MX"
  ],
  "genre_ids": [
    35,
    10749
  ]
},
  {
  "id": 432,
  "tmdb": 4419,
  "title": "彪马实时秀",
  "original_title": "Real Time with Bill Maher",
  "media_type": "tv",
  "overview": "　　节目会请一些嘉宾来讨论当前政坛和媒体上的事件。与之前节目不同的是，马赫脱口秀请到的嘉宾往往对所讨论问题有比较充分的认识，嘉宾中演员和名人比较少。另外，很多嘉宾是以卫星连线的形式参与的。节目的长度约为一小时，在摄影棚内有观众现场观看，东部时间每周五晚十点直播。节目源自于洛杉矶CBS电视台的第33摄影棚（“Bob Barker摄影棚”）。春季（二月到五月上旬）约播出12集，秋季（八月下旬到十一月）也播出数量相当的集数。由于节目针对的是时事，所以HBO电视台一般在节目间歇的月份不会安排重播，但偶尔如果有一周节目不播的话，会安排重播之前的节目。",
  "release_date": "2003-02-21",
  "douban": "",
  "poster": "tmdb_4419.jpg",
  "vote_average": 6.0,
  "vote_count": 239,
  "popularity": 82.7,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    35,
    10767
  ]
},
  {
  "id": 433,
  "tmdb": 1582770,
  "title": "征服者2",
  "original_title": "धुरंधर: द रिवेंज",
  "media_type": "movie",
  "overview": "　　当敌对帮派、腐败官员和冷酷的伊克巴尔少校步步紧逼，哈姆扎为国家而战的使命逐渐沦陷为一场血腥的个人复仇。在利亚里的街头，爱国者与恶魔的界限逐渐模糊。",
  "release_date": "2026-03-18",
  "douban": "",
  "poster": "tmdb_1582770.jpg",
  "vote_average": 7.2,
  "vote_count": 111,
  "popularity": 230.7,
  "runtime": 229,
  "languages": [
    "pa",
    "hi"
  ],
  "countries": [
    "IN"
  ],
  "genre_ids": [
    28,
    80,
    53
  ]
},
  {
  "id": 434,
  "tmdb": 95897,
  "title": "漾出",
  "original_title": "おーばーふろぉ",
  "media_type": "tv",
  "overview": "须藤和志是独自在外租公寓套房的大学生，他有两个感情如同亲妹妹一样的儿时玩伴，白河彩音和白河琴音。",
  "release_date": "2020-01-06",
  "douban": "",
  "poster": "tmdb_95897.jpg",
  "vote_average": 7.3,
  "vote_count": 88,
  "popularity": 131.4,
  "runtime": 7,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ],
  "genre_ids": [
    16
  ]
},
  {
  "id": 435,
  "tmdb": 82728,
  "title": "布鲁伊",
  "original_title": "Bluey",
  "media_type": "tv",
  "overview": "这部以趣味真挚的方式描绘现代家庭生活的动画片，赞扬了富有想象力的游戏是如何帮助孩子健康成长的。6岁的蓝色澳大利亚牧牛犬布鲁伊有着无穷无尽的想象力，热衷于将日常生活转变为调皮冒险。她和妹妹宾果致力于探索自己的世界，用游戏来克服她们的恐惧，并且尝试扮演成年人的角色。她们喜欢把父母（尤其是爸爸）拉进她们的游戏中。妈妈奇莉回归工作了，而爸爸班底特一边照顾孩子一边在家工作。虽然他可能以为自己能做主，但是女儿们绝对掌控了游戏时间——以及几乎所有其他的事情！",
  "release_date": "2018-10-01",
  "douban": "",
  "poster": "tmdb_82728.jpg",
  "vote_average": 8.6,
  "vote_count": 696,
  "popularity": 32.9,
  "runtime": 7,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "AU"
  ],
  "genre_ids": [
    16,
    35,
    10751,
    10762
  ]
},
  {
  "id": 436,
  "tmdb": 504253,
  "title": "我想吃掉你的胰脏",
  "original_title": "君の膵臓をたべたい",
  "media_type": "movie",
  "overview": "“没有名字的我，没有未来的她” 对他人毫无兴趣，总是独自一人读书的高中生“我”。这样的“我”有一天，偶然捡到一册写着《共病文库》的文库本。那是，天真烂漫的班上人气王·山内樱良私下记录的日记本。里面记载着她身患胰脏的疾病，已经时日无多……。隐藏自己的疾病度过日常的樱良，与知晓其秘密的“我”。— 两人的距离，还没有名字。",
  "release_date": "2018-09-01",
  "douban": "",
  "poster": "tmdb_504253.jpg",
  "vote_average": 8.2,
  "vote_count": 1779,
  "popularity": 5.4,
  "runtime": 109,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ],
  "genre_ids": [
    16,
    18,
    10749
  ]
},
  {
  "id": 437,
  "tmdb": 82873,
  "title": "凯莉·克拉克森脱口秀",
  "original_title": "The Kelly Clarkson Show",
  "media_type": "tv",
  "overview": "凯莉·克拉克森呈现当今影视音乐界最热门的新闻人物和大腕，同时也会介绍崭露头角的新兴才俊以及在其社区中作为希望灯塔的普通民众。",
  "release_date": "2019-09-09",
  "douban": "",
  "poster": "tmdb_82873.jpg",
  "vote_average": 6.4,
  "vote_count": 70,
  "popularity": 86.8,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    10767
  ]
},
  {
  "id": 438,
  "tmdb": 5156,
  "title": "偷自行车的人",
  "original_title": "Ladri di biciclette",
  "media_type": "movie",
  "overview": "这部荣获奥斯卡奖的维托里奥·德西卡作品，被全球影坛誉为有史以来最伟大的电影之一，界定了电影史上的一个时代。在战后贫困的罗马，一个男人得到了一份能为其绝望家庭带来救赎希望的新工作，然而开工第一天，他工作必需的自行车便遭窃。他带着年幼的儿子，踏上了寻找窃贼的征程。结构简朴而人性洞察深刻，本片凝聚了意大利新现实主义运动的最大优点：情感上的澄澈、社会意义上的正直，以及残酷的诚实。",
  "release_date": "1948-07-21",
  "douban": "",
  "poster": "tmdb_5156.jpg",
  "vote_average": 8.2,
  "vote_count": 2659,
  "popularity": 2.9,
  "runtime": 93,
  "languages": [
    "it"
  ],
  "countries": [
    "IT"
  ],
  "genre_ids": [
    18
  ]
},
  {
  "id": 439,
  "tmdb": 1419,
  "title": "灵书妙探",
  "original_title": "Castle",
  "media_type": "tv",
  "overview": "侦探小说家理查德·卡塞尔（Richard Castle ，内森·菲利安 Nathan Fillion 饰）因为一起连环杀人案结识了纽约警局的凯特·贝克特（Kate Beckett ，斯坦娜·卡蒂克 Stana Katic 饰），并对她产生了浓厚的兴趣。虽然贝克特强烈反对，卡塞尔最终还是凭借自己发达的人脉，在纽约警局“赖”了下来，跟在贝克特身后办案以寻找写作灵感。性格和背景迥异的两人在不断的斗嘴与摩擦中竟然渐渐培养出了默契，成了名符其实的最佳搭档。但卡塞尔不顾贝克特的反对，私下调查贝克特母亲多年前的命案，一度导致两人的关系一度陷入僵局。当理查德那种 \"随心所欲\"、\"自由散漫\" 的作风与贝克特那种程序化的保守作风相抵触时，争论随之而来，火花也随之而来。是危险，还是浪漫？",
  "release_date": "2009-03-09",
  "douban": "",
  "poster": "tmdb_1419.jpg",
  "vote_average": 8.0,
  "vote_count": 2090,
  "popularity": 95.0,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    18,
    80
  ]
},
  {
  "id": 440,
  "tmdb": 840464,
  "title": "末日逃生2：迁移",
  "original_title": "Greenland 2: Migration",
  "media_type": "movie",
  "overview": "由于宇宙中的两颗彗星正面撞击了地球，致使地表生态遭遇毁灭性打击，造成恶劣后果。全人类不得不躲藏在地堡中求得生存。身为科学家的加里蒂带着一家人劫后余生，幸存了下来。虽然他们躲过了第一波的冲击，但是他们所在的地堡中剩余的生活物资逐渐减少，其他幸存的人类也开始蠢蠢欲动。迫于压力这一家人必须离开格陵兰岛的安全掩体，开始踏上危险的旅程。在这一路上他们无奈的发现，整个欧洲已经被毁灭，变成了冰冻荒地。于是一家人只能再次被迫上路……",
  "release_date": "2026-01-07",
  "douban": "",
  "poster": "tmdb_840464.jpg",
  "vote_average": 6.4,
  "vote_count": 1155,
  "popularity": 58.4,
  "runtime": 95,
  "languages": [
    "en",
    "fr"
  ],
  "countries": [
    "US",
    "GB"
  ],
  "genre_ids": [
    12,
    53,
    878
  ]
},
  {
  "id": 441,
  "tmdb": 34307,
  "title": "无耻之徒",
  "original_title": "Shameless",
  "media_type": "tv",
  "overview": "拥有六个孩子的单身父亲弗兰克和孩子们生活在周围到处是酒鬼、乞丐和罪犯的最底层社区。他收入不高，整天酗酒，根本不管儿女们的死活，不到20岁的大女儿菲欧娜不得不承担起照顾五个弟妹以及养家糊口的责任。跨过宿醉的父亲身体争抢着偷来的早餐；凌晨4点大开着摇滚乐狂欢；纵容邻居在他们的楼梯上做爱；这个热闹非凡的家庭忙碌、自由、无法无天、充满冒险。他们拥有的不多，但他们懂得生活中最重要的是什么……",
  "release_date": "2011-01-09",
  "douban": "",
  "poster": "tmdb_34307.jpg",
  "vote_average": 8.2,
  "vote_count": 3332,
  "popularity": 143.7,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    18,
    35
  ]
},
  {
  "id": 442,
  "tmdb": 755898,
  "title": "世界大战",
  "original_title": "War of the Worlds",
  "media_type": "movie",
  "overview": "威尔·拉德福德是国土安全部的顶级网络安全分析师，他通过大规模监控项目追踪国家安全的潜在威胁。直到有一天，一个不明实体的攻击让他开始怀疑政府是否对他……以及世界其他地方隐瞒了什么。",
  "release_date": "2025-07-29",
  "douban": "",
  "poster": "tmdb_755898.jpg",
  "vote_average": 4.1,
  "vote_count": 1002,
  "popularity": 56.0,
  "runtime": 145,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    878,
    53
  ]
},
  {
  "id": 443,
  "tmdb": 1075175,
  "title": "如何做爱",
  "original_title": "How to Have Sex",
  "media_type": "movie",
  "overview": "三个十几岁的女孩在春假期间前往地中海海滨度假胜地，沉浸在小小的聚会中。",
  "release_date": "2023-11-02",
  "douban": "",
  "poster": "tmdb_1075175.jpg",
  "vote_average": 6.2,
  "vote_count": 502,
  "popularity": 30.8,
  "runtime": 91,
  "languages": [
    "en"
  ],
  "countries": [
    "BE",
    "GR",
    "GB",
    "FR"
  ],
  "genre_ids": [
    18
  ]
},
  {
  "id": 444,
  "tmdb": 211288,
  "title": "寻踪者",
  "original_title": "Tracker",
  "media_type": "tv",
  "overview": "改编自Jeffery Deaver的畅销小说《The Never Game》，讲述Colter Shaw是一位孤狼式的生存主义者，以寻求赏金的方式在全国各地游荡，利用自己出色的追踪技能帮助普通人和执法部门破解各种谜团，同时与自己破碎的家庭抗争。",
  "release_date": "2024-02-11",
  "douban": "",
  "poster": "tmdb_211288.jpg",
  "vote_average": 7.5,
  "vote_count": 283,
  "popularity": 80.8,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    18,
    80
  ]
},
  {
  "id": 445,
  "tmdb": 508965,
  "title": "克劳斯：圣诞节的秘密",
  "original_title": "Klaus",
  "media_type": "movie",
  "overview": "贾斯帕（詹森·舒瓦兹曼饰）被认为是邮政学院最差的学生，他驻扎在北极圈内的一个冰冻岛屿上，那里的当地人之间几乎不交流，更不用说写信了。当贾斯帕准备放弃之时，他找到了自己的盟友阿尔娃（当地的一名教师，拉什达·琼斯饰），并发现了克劳斯（奥斯卡奖得主 J·K·西蒙斯饰），克劳斯是一个神秘的木匠，独自住在一个满是手工玩具的小屋里。这几段不可思议的友谊让斯密伦斯堡又重新充满了欢声笑语，创造出了新的故事，这里有慷慨的邻居、神奇的传说和小心翼翼挂在烟囱上的长袜。《克劳斯：圣诞节的秘密》是一部节日喜剧动画片，由《神偷奶爸》联合创剧人塞尔希奥·巴勃罗斯担任导演，由琼·库萨克、威尔·萨索和诺曼·麦克唐纳徳联袂主演。",
  "release_date": "2019-11-08",
  "douban": "",
  "poster": "tmdb_508965.jpg",
  "vote_average": 8.2,
  "vote_count": 4676,
  "popularity": 5.5,
  "runtime": 97,
  "languages": [
    "en",
    "se"
  ],
  "countries": [
    "ES"
  ],
  "genre_ids": [
    16,
    10751,
    35
  ]
},
  {
  "id": 446,
  "tmdb": 85349,
  "title": "奇幻沼泽",
  "original_title": "Amphibia",
  "media_type": "tv",
  "overview": "13岁的少女安妮打开一个宝盒，突然就穿越到了一个满是青蛙人的神奇沼泽。在这里她遇到了年轻的青蛙人Sprig，他们成为了好朋友，并一起展开冒险。该动画剧集由《怪诞小镇》故事板画师Matt主创，2019年6月17日起在迪士尼频道开播。",
  "release_date": "2019-06-17",
  "douban": "",
  "poster": "tmdb_85349.jpg",
  "vote_average": 8.6,
  "vote_count": 345,
  "popularity": 21.7,
  "runtime": 11,
  "languages": [
    "th",
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    16,
    10759,
    35,
    10765,
    10751
  ]
},
  {
  "id": 447,
  "tmdb": 80040,
  "title": "仙道凯冠军挑战赛",
  "original_title": "Desafío Champions Sendokai",
  "media_type": "tv",
  "overview": "",
  "release_date": "2013-04-09",
  "douban": "",
  "poster": "tmdb_80040.jpg",
  "vote_average": 8.6,
  "vote_count": 237,
  "popularity": 11.0,
  "runtime": 22,
  "languages": [
    "es"
  ],
  "countries": [
    "ES"
  ],
  "genre_ids": [
    16,
    35,
    10759,
    10751
  ]
},
  {
  "id": 448,
  "tmdb": 1304313,
  "title": "木乃伊",
  "original_title": "Lee Cronin's The Mummy",
  "media_type": "movie",
  "overview": "讲述一位记者的年幼女儿在沙漠中神秘失踪并音讯全无。八年后，当她突然出现在家人面前时，这个早已破碎的家庭震惊不已；原本应该是重逢的喜悦，却逐渐演变成一场活生生的恶梦。",
  "release_date": "2026-04-15",
  "douban": "",
  "poster": "tmdb_1304313.jpg",
  "vote_average": 8.0,
  "vote_count": 1599,
  "popularity": 405.3,
  "runtime": 133,
  "languages": [
    "ar",
    "en",
    "es"
  ],
  "countries": [
    "US",
    "IE"
  ],
  "genre_ids": [
    27,
    9648
  ]
},
  {
  "id": 449,
  "tmdb": 37606,
  "title": "阿甘妙世界",
  "original_title": "The Amazing World of Gumball",
  "media_type": "tv",
  "overview": "口香糖沃特森的生活，一只 12 岁的猫，在埃尔莫尔上中学。 在他的宠物、养兄弟和最好的朋友达尔文沃特森的陪伴下，他经常发现自己卷入了城市周围的各种恶作剧，在此期间他与各种家庭成员互动：阿奈斯、理查德和妮可沃特森，以及其他各种市民。",
  "release_date": "2011-05-03",
  "douban": "",
  "poster": "tmdb_37606.jpg",
  "vote_average": 8.5,
  "vote_count": 1734,
  "popularity": 39.7,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "GB",
    "DE",
    "IE"
  ],
  "genre_ids": [
    16,
    10751,
    10765,
    35
  ]
},
  {
  "id": 450,
  "tmdb": 59941,
  "title": "肥伦今夜秀",
  "original_title": "The Tonight Show Starring Jimmy Fallon",
  "media_type": "tv",
  "overview": " ",
  "release_date": "2014-02-17",
  "douban": "",
  "poster": "tmdb_59941.jpg",
  "vote_average": 5.8,
  "vote_count": 372,
  "popularity": 130.3,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    35,
    10767
  ]
},
  {
  "id": 451,
  "tmdb": 618344,
  "title": "黑暗正义联盟：天启星战争",
  "original_title": "Justice League Dark: Apokolips War",
  "media_type": "movie",
  "overview": "在星际暴君达克赛德（Darkseid）摧毁正义联盟（Justice League）后，地球被毁灭了，这场战争是由DC超级英雄发动的。现在，正义联盟、少年泰坦、自杀小队和其他各色各样的好堡垒必须重新集结，制定战略，并将战争带到黑暗世界，以拯救地球及其幸存居民。",
  "release_date": "2020-05-05",
  "douban": "",
  "poster": "tmdb_618344.jpg",
  "vote_average": 8.2,
  "vote_count": 1571,
  "popularity": 4.5,
  "runtime": 90,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    16,
    28,
    12,
    14
  ]
},
  {
  "id": 452,
  "tmdb": 1383731,
  "title": "保护者",
  "original_title": "Protector",
  "media_type": "movie",
  "overview": "退役军人尼基与女儿克洛伊平静生活，却在废弃工厂醒来后发现女儿遭绑架，她必须重返黑暗世界，对抗人贩子、警察与军方，在72小时黄金救援期内救回女儿。",
  "release_date": "2026-02-20",
  "douban": "",
  "poster": "tmdb_1383731.jpg",
  "vote_average": 7.8,
  "vote_count": 149,
  "popularity": 35.5,
  "runtime": 92,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    28,
    53
  ]
},
  {
  "id": 453,
  "tmdb": 18491,
  "title": "新世纪福音战士剧场版：Air / 真心为你",
  "original_title": "新世紀エヴァンゲリオン劇場版 Air／まごころを、君に",
  "media_type": "movie",
  "overview": "《新世纪福音战士》系列第二部剧场版，于 1997 年 7 月 19 日在日本上映。全名：《新世纪福音战士剧场版：THE END OF EVANGELION》（日语：新世紀エヴァンゲリオン 劇場版 THE END OF EVANGELION - Air/まごころを、君に，英语：NEON GENESIS EVANGELION: THE END OF EVANGELION - AIR/SINCERELY YOURS）。剧情承接 TV 动画版第 24 集，包括了重新制作的第 25 、第 26 话。在这部剧场版中第 25 话的名字是 “AIR”（天空），而副标题是 “LOEV IS DESTRUCTIVE”（爱是一种伤害）；第 26 话的名字是 “YOUR SINCERELY”（真心为你），副标题是“ONE MORE FINAL: I NEED YOU”（再说最后一遍：我需要你）。剧场版的每一话都和电视版一样有一个 “EYE - CATCH” 镜头（即每集中间那个黑底白字的英文标题）。这部剧场版标志着整个旧世纪《新世纪福音战士》的终结。影片分成 “Air” 与 “真心为你” 两个部分。神秘的 EVA 零号机驾驶员绫波丽，在与碇元渡约定之时，来到了 NERV 底层中央教条的红色水池边。她的命运似乎就将在此结束。在危急时刻，葛城美里不但要完成加持良治交待的对“第二次浩劫”真相以及“人类补完计划”",
  "release_date": "1997-07-19",
  "douban": "",
  "poster": "tmdb_18491.jpg",
  "vote_average": 8.3,
  "vote_count": 1857,
  "popularity": 10.1,
  "runtime": 87,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ],
  "genre_ids": [
    16,
    878,
    18,
    14
  ]
},
  {
  "id": 454,
  "tmdb": 111,
  "title": "疤面煞星",
  "original_title": "Scarface",
  "media_type": "movie",
  "overview": "古巴难民青年托尼（阿尔•帕西诺 Al Pacino 饰）逃难来到了美国的迈阿密，成了一个典型的天不怕、地不怕的美国街头小混混。托尼在当地的一个毒枭手下干活，因其心狠手辣、胆大心细，十分出色地帮老大完成了几件任务而迅速受到赏识，成为毒枭的第一得力助手。然而托尼并没有就此满足，他先是从委内瑞拉的毒枭那里接下了大单子，接着将自己的眼中钉一颗颗除去，势力不断扩大。当他的老大感受到威胁时已经太晚了，托尼将老大干掉然后一统了迈阿密毒品市场的天下。托尼得势后他的性格开始变得疑神疑鬼，对周围的人甚至至亲的家人、好兄弟都充满怀疑。疑心使他逐渐走上了不归路！",
  "release_date": "1983-12-09",
  "douban": "",
  "poster": "tmdb_111.jpg",
  "vote_average": 8.2,
  "vote_count": 13039,
  "popularity": 15.4,
  "runtime": 170,
  "languages": [
    "en",
    "es"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    28,
    80,
    18
  ]
},
  {
  "id": 455,
  "tmdb": 3034,
  "title": "犯罪现场",
  "original_title": "Tatort",
  "media_type": "tv",
  "overview": "《犯罪现场》是一部横跨德国、奥地利及瑞士三地的长篇犯罪题材电视系列剧，故事背景设定在这些国家的不同地区。该剧在德国的ARD电视台、奥地利的ORF电视台以及瑞士的SF1电视台播出。",
  "release_date": "1970-11-29",
  "douban": "",
  "poster": "tmdb_3034.jpg",
  "vote_average": 6.2,
  "vote_count": 123,
  "popularity": 72.7,
  "runtime": 0,
  "languages": [
    "de"
  ],
  "countries": [
    "CH",
    "AT",
    "DE"
  ],
  "genre_ids": [
    18,
    80
  ]
},
  {
  "id": 456,
  "tmdb": 652837,
  "title": "乔西的虎与鱼",
  "original_title": "ジョゼと虎と魚たち",
  "media_type": "movie",
  "overview": "专攻海洋生物学的恒夫，为了实现自己能够亲眼看一下只生活在墨西哥的梦幻鱼群的梦想，日夜不停地在进行着兼职打工。一天恒夫偶然遇见一个女孩坐在轮椅上，失控从斜坡上冲下来。得到了大学生恒夫救了这个女孩。这个女孩叫乔西，自幼便一直坐在轮椅上，她的祖母千津一直照顾乔西，和她相依为命。祖母千津向恒夫介绍了一份兼职工作。这份工作的内容就是听从乔西的要求，并想办法满足她。乔西活在自我世界里，可以遨游在自己感兴趣的绘画和书籍的海洋中。然而，她不善与他人交流且十分固执。乔希对恒夫非常刻薄，而恒夫也没有在意乔西是个残疾人，直率地回应她……",
  "release_date": "2020-12-25",
  "douban": "",
  "poster": "tmdb_652837.jpg",
  "vote_average": 8.3,
  "vote_count": 601,
  "popularity": 7.5,
  "runtime": 98,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ],
  "genre_ids": [
    16,
    18,
    10749
  ]
},
  {
  "id": 457,
  "tmdb": 225180,
  "title": "BLUE EYE SAMURAI",
  "original_title": "BLUE EYE SAMURAI",
  "media_type": "tv",
  "overview": "在江户时代的日本，一位年轻的武士为报复那些让她备受排挤之人而杀出一条血路。",
  "release_date": "2023-11-03",
  "douban": "",
  "poster": "tmdb_225180.jpg",
  "vote_average": 8.5,
  "vote_count": 761,
  "popularity": 9.7,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US",
    "FR"
  ],
  "genre_ids": [
    10759,
    16,
    18
  ]
},
  {
  "id": 458,
  "tmdb": 1613798,
  "title": "复仇双雄",
  "original_title": "Venganza",
  "media_type": "movie",
  "overview": "照片的核心是卡洛斯和米格尔，他们是墨西哥特种部队最好的朋友和精锐士兵。当卡洛斯目睹妻子被残忍杀害时，他们的生活发生了转折。卡洛斯被悲伤和对正义的渴望所吞噬，米格尔陪伴在他身边，卡洛斯带着改变人生的彩票和坚定不移的决心，开始了一场危险的复仇之旅。",
  "release_date": "2026-02-26",
  "douban": "",
  "poster": "tmdb_1613798.jpg",
  "vote_average": 7.5,
  "vote_count": 237,
  "popularity": 43.0,
  "runtime": 103,
  "languages": [
    "es"
  ],
  "countries": [
    "US",
    "ES"
  ],
  "genre_ids": [
    28,
    53
  ]
},
  {
  "id": 459,
  "tmdb": 533514,
  "title": "紫罗兰永恒花园 剧场版",
  "original_title": "劇場版 ヴァイオレット・エヴァーガーデン",
  "media_type": "movie",
  "overview": "——「爱」究竟是什么？  曾经将「爱」告诉自己、 给予自己的，重要的人。  即使想见，却再也见不到。 永远。 放开了手的、最最重要的那个人。  从事代笔业的她，名字是「薇尔莉特·伊芙加登」。自幼身为士兵参战，没能获得培育心灵机会的她，无法理解自己重要的上司「吉尔伯特·布干维利亚」所留下的话语。——我从心底，爱着你。  让人们背负深深伤痕的战争结束之后，经过数年。生活随着新技术的开发而改变，人们开始面向前方前进。但，薇尔莉特坚信着吉尔伯特还在某处活着，每一天只是思念着他。——亲爱的吉尔伯特少校。今天我又再一次回忆起了少校的事情。薇尔莉特强烈的愿望，溶解在静谧的夜当中。  在吉尔伯特母亲的月忌日，薇尔莉特像是要代替他一般地献上鲜花。某天，她与吉尔伯特的哥哥·迪特福利特海军上校不期而遇。迪特福利特告诉她是时候该忘记吉尔伯特了，但薇尔莉特立刻做出了答复。「我无法忘记」。  就在此时，薇尔莉特接到了一通委托电话。委托人是名叫尤里斯的少年。另一方面，在邮政公司的仓库里，发现了一封收信人不明的信……。",
  "release_date": "2020-09-18",
  "douban": "",
  "poster": "tmdb_533514.jpg",
  "vote_average": 8.3,
  "vote_count": 512,
  "popularity": 8.4,
  "runtime": 140,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ],
  "genre_ids": [
    16,
    18,
    14,
    10749
  ]
},
  {
  "id": 460,
  "tmdb": 11012,
  "title": "烈火情人",
  "original_title": "Damage",
  "media_type": "movie",
  "overview": "即将入职的内阁部长史蒂夫（杰瑞米•艾恩斯 Jeremy Irons 饰）同妻子英格丽、儿子马丁（拉珀特•格雷夫斯 Rupert Graves 饰）平静安逸地生活着。安娜（朱丽叶•比诺什 Juliette Binoche 饰）的出现像是一股汹涌的暗流冲撞着这个看似完满的家庭。安娜是儿子的女朋友，却背地里与史蒂夫展开了一段热烈浪漫的关系。安娜曾经在青春期里与哥哥的畸恋记忆一直影响着她，这使她一面寻找各种机会和史蒂夫约会，一面又能泰若自然的面对马丁，而当史蒂夫提出要抛弃家庭与她厮守时安娜却冷静地拒绝。某日马丁开门见到二人相会的情景，震惊和痛苦使他不慎跌下楼梯，史蒂夫匆忙下楼抱着死去的儿子，安娜此时却无声地离开，只留下身后中年男人无法重建的坍塌生活。",
  "release_date": "1992-12-02",
  "douban": "",
  "poster": "tmdb_11012.jpg",
  "vote_average": 6.6,
  "vote_count": 683,
  "popularity": 123.8,
  "runtime": 111,
  "languages": [
    "de",
    "it",
    "en",
    "fr"
  ],
  "countries": [
    "GB",
    "FR"
  ],
  "genre_ids": [
    18,
    10749
  ]
},
  {
  "id": 461,
  "tmdb": 74016,
  "title": "The Resident",
  "original_title": "The Resident",
  "media_type": "tv",
  "overview": "一个理想主义的年轻医生，入职第一天就面对着出色而严厉的资深前辈的监督，而前辈也为他揭开了当下医疗行业中的好与坏。在救死扶伤的过程中，直面生命的生与死，以往的美好期待一点点被现实打碎。",
  "release_date": "2018-01-21",
  "douban": "",
  "poster": "tmdb_74016.jpg",
  "vote_average": 8.4,
  "vote_count": 1311,
  "popularity": 86.4,
  "runtime": 42,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    18
  ]
},
  {
  "id": 462,
  "tmdb": 39254,
  "title": "铁甲钢拳",
  "original_title": "Real Steel",
  "media_type": "movie",
  "overview": "在不远的未来2020年，观众不再满足于传统拳击肉搏，取而代之是更具官能刺激的机械人拳击。过气拳手查理生活潦倒，只能靠带着次货机械人参加黑市拳赛维生，同一时间多年不见的11岁儿子麦克斯又突然出现，更令他苦恼不堪。一次意外，麦克斯偶然从垃圾堆中检回一个残破机械人亚当，决心把他改造训练再上擂台，麦克斯的努力感染了查理，父子同心作战竟令被人看扁的亚当创造了一次又一次的奇迹，更打入冠军联赛与不败神话宙斯大帝一决高下。强弱悬殊下，亚当一直处于挨打劣势，查理父子档最后能否扭转局面？",
  "release_date": "2011-09-28",
  "douban": "",
  "poster": "tmdb_39254.jpg",
  "vote_average": 7.1,
  "vote_count": 9173,
  "popularity": 76.3,
  "runtime": 127,
  "languages": [
    "en"
  ],
  "countries": [
    "IN",
    "US"
  ],
  "genre_ids": [
    28,
    878,
    18
  ]
},
  {
  "id": 463,
  "tmdb": 4614,
  "title": "海军罪案调查处",
  "original_title": "NCIS",
  "media_type": "tv",
  "overview": "NCIS（海军犯罪调查机构）是一部关于一支特工小组的动作剧集，这支小组隶属五角大楼的特别部门，肩负着调查任何有一丝证据证明与海军及海军陆战队人员有关的犯罪，且不论其级别或职位的高低。领导这支小组并独立于海军指挥系统的是NCIS特工Leroy Jethro Gibbs，这名经验丰富的调查员与审问员是个机智、强硬并且为了完成任务愿意打破常规的人。直接受Gibbs领导的是Anthony DiNozzo特工，作为一名前重案组探员，其出色的本能来自于大量的调查经验。之后加入他们俩的是Kate Todd，一个美丽而又坚强的前特勤处特工，曾与Gibbs短兵相接。还有从事技术分析工作的Abby Sciuto，是一名天才科学家，她那黑色幽默与哥特风格的装扮相得益彰。新加入小队的是Timothy McGee，麻省理工学院（MIT，剧中经常会提到）的毕业生，他对电脑的精通使他在Gibbs率领的小组中成为一名见习特工。在小组背后默默支持的是法医Donald \\\"Ducky\\\" Mallard，他见多识广。从谋杀、间谍活动到恐怖活动、盗窃潜艇，这些特工们为了调查所有与海军及海军陆战队相关的犯罪活动，足迹遍布全世界。",
  "release_date": "2003-09-23",
  "douban": "",
  "poster": "tmdb_4614.jpg",
  "vote_average": 7.6,
  "vote_count": 2510,
  "popularity": 200.0,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    80,
    18,
    10759
  ]
},
  {
  "id": 464,
  "tmdb": 456,
  "title": "辛普森一家",
  "original_title": "The Simpsons",
  "media_type": "tv",
  "overview": "辛普森一家是来自美国普通的五口之家，荷马是春田镇核能工厂的安全检查员，母亲马芝曾经是一个很有思想的女性，自从嫁给荷马后渐渐地适应了主妇生活的定式。巴特是家中的长子，天性顽皮的巴特经常爱玩一些恶作剧，以至于经常惹麻烦。妹妹丽莎是一个很聪明的孩子，同时还是素食主义者，佛教徒，爵士乐。小女马姬是一个永远长不大的孩子。故事设定于虚构小镇春田镇，从许多角度对美国的文化与社会、人的条件和电视本身进行了幽默的嘲讽，经久不衰。",
  "release_date": "1989-12-17",
  "douban": "",
  "poster": "tmdb_456.jpg",
  "vote_average": 8.0,
  "vote_count": 10797,
  "popularity": 185.0,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    10751,
    16,
    35
  ]
},
  {
  "id": 465,
  "tmdb": 9702,
  "title": "黑帮悍将",
  "original_title": "Bound by Honor",
  "media_type": "movie",
  "overview": "影片以诗人吉米·圣地亚哥·巴卡的真实生活经历为基础，重点讲述了帕科和克鲁兹的同父异母兄弟，以及他们的两个种族表兄米科。影片于1972年开拍，因为这三人是洛杉矶东部一个叫“瓦托斯机车”的团伙的成员，故事的重点是暴力犯罪和毒品的影响如何改变他们的生活。",
  "release_date": "1993-02-05",
  "douban": "",
  "poster": "tmdb_9702.jpg",
  "vote_average": 8.2,
  "vote_count": 1539,
  "popularity": 6.2,
  "runtime": 190,
  "languages": [
    "en",
    "es"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    80,
    18,
    53
  ]
},
  {
  "id": 466,
  "tmdb": 154521,
  "title": "The Kardashians",
  "original_title": "The Kardashians",
  "media_type": "tv",
  "overview": "你所认识和爱的家庭在这里推出了一个全新的系列，为他们的生活提供了一个全方位的通道。克里斯、考特尼、金、科洛埃、肯德尔和凯莉把摄像机带回来，揭露头条新闻背后的真相。从经营数十亿美元企业的巨大压力，到季后赛和辍学带来的欢闹乐趣，这部电视剧以一个引人入胜的诚实爱情和生活故事吸引观众。",
  "release_date": "2022-04-14",
  "douban": "",
  "poster": "tmdb_154521.jpg",
  "vote_average": 8.5,
  "vote_count": 2128,
  "popularity": 13.8,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    10764
  ]
},
  {
  "id": 467,
  "tmdb": 313106,
  "title": "神秘博士：博士之日",
  "original_title": "Doctor Who: The Day of the Doctor",
  "media_type": "movie",
  "overview": "被列入世界吉尼斯纪录的最长科幻系列电视剧《神秘博士》将迎来第50周年的播放纪念。为了庆祝这部长寿电视剧的半百生日，英国广播公司BBC电视台制作了《神秘博士》特辑，不仅将在英国电视台和电影院同步播映，还将首次以3D形式与观众见面。  　　\r 据悉，此次纪念活动将成为一次全国性的庆祝活动。BBC电视台电视剧部门相关负责人本·史蒂文森表示这部穿越时空的科幻电视剧的纪念甚至可以与女王的60周年钻禧和奥运会相媲美，庆祝活动将持续一年，并在11月达到高潮。年初，印有11任博士头像的纪念邮票由英国皇家邮政发布。有报道表示，之前几任博士的扮演者将齐聚一堂，在特辑中集体现身。",
  "release_date": "2013-11-23",
  "douban": "",
  "poster": "tmdb_313106.jpg",
  "vote_average": 8.2,
  "vote_count": 771,
  "popularity": 2.1,
  "runtime": 75,
  "languages": [
    "en"
  ],
  "countries": [
    "GB"
  ],
  "genre_ids": [
    878,
    12
  ]
},
  {
  "id": 468,
  "tmdb": 128,
  "title": "幽灵公主",
  "original_title": "もののけ姫",
  "media_type": "movie",
  "overview": "室町时代时期的虾夷族少年阿席达卡，某日遇到被称为“邪魔神”攻击他所居住村落的怪物。在阿席达卡为了保护村落与邪魔神对战时，过程当中遭受邪魔神的攻击而留下创伤与诅咒。击败了邪魔神之后，阿席达卡发现对方是由一头愤怒的山猪神所变化而成，并在祂的体内发现一颗铁弹。之后村里的女巫便劝他以铁弹为线索，来离开村落前往西方，查找邪魔神产生的来源和解除诅咒方法。  于阿席达卡的旅途中，他拯救了两名来自于炼铁据地“达达拉城”的住民。在协助对方返回到达达拉城之后，阿席达卡得知邪魔神身上的铁弹，便是遭到由达达拉城所打造的火枪所伤，其中达达拉城的统治者黑帽大人因为炼铁缘故从森林中砍伐许多木头资源，便与森林中的神祇交恶发生冲突。起初阿席达卡对于黑帽大人夺取资源、伤害森林神祇的行为感到愤怒，但之后目睹到众多穷人以及被社会隔离的痳疯患者在达达拉城有着生存机会而动摇。  后续他知晓森林里住着一位由犬神所养大，憎恨黑帽大人一心想取下对方性命，有着“幽灵公主”名号的人类少女小桑。在阿席达卡来到达达拉城的当日夜晚里，小桑突然现身于达达拉城内想找寻机会突击黑帽大人。当她们俩人展开打斗时，阿席达卡试图想调停双方之间的斗争，但在阻止的过程中阿席达卡意外遭旁人用石火枪给误射打伤。而小桑之后则将阿席达卡带回自己居住的森林里疗养。  在伤口撤销后，阿席达卡得知小桑打算与其祂山猪神同盟向人类一决死战，并发现到黑帽大人要与朝廷一方势力联手",
  "release_date": "1997-07-12",
  "douban": "",
  "poster": "tmdb_128.jpg",
  "vote_average": 8.3,
  "vote_count": 8988,
  "popularity": 18.1,
  "runtime": 134,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ],
  "genre_ids": [
    12,
    14,
    16
  ]
},
  {
  "id": 469,
  "tmdb": 489,
  "title": "心灵捕手",
  "original_title": "Good Will Hunting",
  "media_type": "movie",
  "overview": "麻省理工学院的数学教授蓝波在席上公布了一道困难的数学题，却被年轻的清洁工威尔（马特·戴蒙 饰）解了出来。可是威尔却是个问题少年，成天和好朋友查克（本·阿弗莱特 饰）等人四处闲逛，打架滋事。当蓝波找到这个天才的时候，他正因为打架袭警被法庭宣判送进看守所。蓝波向法官求情保释，才使他免于牢狱之灾。蓝波为了让威尔找到自己的人生目标，不浪费他的数学天赋，请了很多心理学专家为威尔做辅导，但是威尔十分抗拒，专家们都束手无策。无计可施之下，蓝波求助于他大学的好友，心理学教授尚恩（罗宾·威廉姆斯 饰），希望能够帮助威尔打开心房。经过蓝波和尚恩的不懈努力，威尔渐渐敞开心胸，而好友查克的一席话，更是让他豁然开朗。",
  "release_date": "1997-12-05",
  "douban": "",
  "poster": "tmdb_489.jpg",
  "vote_average": 8.2,
  "vote_count": 13855,
  "popularity": 16.5,
  "runtime": 126,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    18
  ]
},
  {
  "id": 470,
  "tmdb": 1911,
  "title": "识骨寻踪",
  "original_title": "Bones",
  "media_type": "tv",
  "overview": "这是一部专门从“骨头”上寻找破案线索的刑侦剧。女博士布莱南绰号“骨头”（艾米丽·丹斯切尔 Emily Deschanel 饰），是个学识渊博、专业素养完美的魅力女性，身上最大特点是“理智”，她最不相信的就是感觉，面对任何事都要讲求逻辑和事实，甚至在人际关系上也一样。幸好她有一个对她非常了解的搭档、警探瑟利·布斯（大卫·伯伦纳兹 David Boreanaz 饰），他体格完美，为人开朗风趣，交流能力一流，在查案过程中经常帮“骨头”打圆场，身上又有“骨头”最欣赏的品质——敬业，勇敢。加上美女图形处理师安吉拉（Michaela Conlin 饰）、碎屑分析家哈吉斯（T.J. Thyne 饰）、DNA分析员扎克（Eric Millegan 饰），几人组成专门性刑侦小组，告诉你关于枯骨的一切。",
  "release_date": "2005-09-13",
  "douban": "",
  "poster": "tmdb_1911.jpg",
  "vote_average": 8.2,
  "vote_count": 3496,
  "popularity": 146.6,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    80,
    18
  ]
},
  {
  "id": 471,
  "tmdb": 2734,
  "title": "法律与秩序：特殊受害者",
  "original_title": "Law & Order: Special Victims Unit",
  "media_type": "tv",
  "overview": "被残忍杀害的年轻女子、被虐的婴儿、被近亲性侵害的女童、家暴阴影下手足无措的妇女、失调扭曲的家庭关系、很想用心但每每力有未迨的父母、杵在社会家庭人际边缘人性的灰色地带。SVU每回总是触动那块让人无从防备的柔软地带，可爱的孩童，无辜的弱势个体（受性侵害者、同性恋、精神病患），每个人都多少有些经验感触的亲子、家庭关系。不见得得是多复杂的剧情，像今天，忙于工作单亲母亲剧烈摇晃死自己的一岁多幼女(Shake Syndrome)，幼小无辜的女孩在母亲一时的暴怒下被辗压击碎，但另一方面你多了解那种拉扯在工作亲子关系中的心力交瘁，可爱时像天使哭闹起来却像恶魔一样让你抓狂的孩子，要怎么以审判指控那、为了不舍得看到无恢复希望的孩子继续受到病痛折磨而毅然决定停止呼吸器，哪怕这将使自己已因杀罪被起诉的母亲？是以就算这是再滥情的一种搬演、操控，每每总还是让观众溃不成军...",
  "release_date": "1999-09-20",
  "douban": "",
  "poster": "tmdb_2734.jpg",
  "vote_average": 7.9,
  "vote_count": 4229,
  "popularity": 330.9,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    80,
    18,
    9648
  ]
},
  {
  "id": 472,
  "tmdb": 4935,
  "title": "哈尔的移动城堡",
  "original_title": "ハウルの動く城",
  "media_type": "movie",
  "overview": "一部精彩的动画冒险新作，颂扬了爱情的力量可以改变一切，以及人类精神面对逆境时的韧性。",
  "release_date": "2004-09-09",
  "douban": "",
  "poster": "tmdb_4935.jpg",
  "vote_average": 8.4,
  "vote_count": 11093,
  "popularity": 22.9,
  "runtime": 119,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ],
  "genre_ids": [
    14,
    16,
    12
  ]
},
  {
  "id": 473,
  "tmdb": 517814,
  "title": "何以为家",
  "original_title": "کفرناحوم",
  "media_type": "movie",
  "overview": "法庭上，十二岁的男孩赞恩向法官状告他的亲生父母，原因是，他们给了他生命。是什么样的经历让一个孩子做出如此不可思议的举动？故事中，赞恩的父母在无力抚养和教育的状况下依然不停生育，作为家中的长子赞恩，弱小的肩膀承担了无数生活的重压。当妹妹被强行卖给商贩为妻时，赞恩愤怒离家，之后遇到一对没有合法身份的母子，相互扶持勉强生活。然而生活并没有眷顾赞恩，重重磨难迫使他做出了令人震惊的举动……",
  "release_date": "2018-09-20",
  "douban": "",
  "poster": "tmdb_517814.jpg",
  "vote_average": 8.1,
  "vote_count": 1975,
  "popularity": 4.8,
  "runtime": 126,
  "languages": [
    "ar",
    "am"
  ],
  "countries": [
    "LB",
    "US",
    "GB",
    "FR"
  ],
  "genre_ids": [
    18
  ]
},
  {
  "id": 474,
  "tmdb": 632632,
  "title": "GIVEN 被赠与的未来 剧场版",
  "original_title": "映画 ギヴン",
  "media_type": "movie",
  "overview": "高中生上山立夏热爱演奏吉他，与春树和秋彦合组一个小乐队。某个午休，他意外帮佐藤真冬修好吉他弦后，被真冬拜托教吉他，而后又在听到真冬的歌声后邀请他加入乐队。立夏在相处的过程中渐渐喜欢上真冬，真冬有一个彼此互相喜欢并支持的青梅竹马，但那个人却自杀了，因那个人喜欢吉他，真冬才一直很想学。那个人没有做到的事，没有坚持的陪伴，立夏都帮他实现了，真冬也开始慢慢喜欢上立夏。另外一对CP春树和秋彦，春树一直默默喜欢着秋彦，为他留着长发，但秋彦却与极具音乐才华的小提琴家雨月同居在一起。动画影集以高中生的真冬与立夏两人间悲伤恬淡的爱情为主轴，首部剧场版则为大人组三人的春树、秋彦、雨月，炽热的三角恋拉开序幕。",
  "release_date": "2020-08-22",
  "douban": "",
  "poster": "tmdb_632632.jpg",
  "vote_average": 8.2,
  "vote_count": 420,
  "popularity": 2.8,
  "runtime": 59,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ],
  "genre_ids": [
    16,
    18,
    10402,
    10749
  ]
},
  {
  "id": 475,
  "tmdb": 63770,
  "title": "斯蒂芬·科尔伯特深夜秀",
  "original_title": "The Late Show with Stephen Colbert",
  "media_type": "tv",
  "overview": "斯蒂芬·科尔伯特将他标志性的讽刺和喜剧带到了《斯蒂芬·科尔伯特深夜秀》中，这是一档排名第一的深夜节目。在节目中，他与各种各样的嘉宾谈论政治、娱乐、商业、音乐、科技等领域的新闻和热点话题。该节目由乐队指挥乔恩·巴蒂斯特（Jon Batiste）和他的乐队“留下的人”（Stay Human）伴奏，这档获得艾美奖提名的节目在著名的埃德·沙利文剧院播出。斯蒂芬·科尔伯特、克里斯·利赫特（Chris Licht）、汤姆·珀塞尔（Tom Purcell）和乔恩·斯图尔特（Jon Stewart）担任执行制片人。巴里·朱利安（Barry Julien）和丹尼斯·雷里格（Denise Rehrig）担任联合执行制片人。",
  "release_date": "2015-09-08",
  "douban": "",
  "poster": "tmdb_63770.jpg",
  "vote_average": 6.1,
  "vote_count": 351,
  "popularity": 126.8,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    35,
    10767
  ]
},
  {
  "id": 476,
  "tmdb": 77,
  "title": "记忆碎片",
  "original_title": "Memento",
  "media_type": "movie",
  "overview": "警方不予受理后，伦纳德·谢尔比执意追查强奸杀害妻子的凶手。然而，一种罕见且无法治愈的失忆症，使他踏上复仇之路难上加难。",
  "release_date": "2000-10-11",
  "douban": "",
  "poster": "tmdb_77.jpg",
  "vote_average": 8.2,
  "vote_count": 16261,
  "popularity": 34.6,
  "runtime": 113,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    9648,
    53
  ]
},
  {
  "id": 477,
  "tmdb": 820067,
  "title": "五等分的新娘 剧场版",
  "original_title": "映画 五等分の花嫁",
  "media_type": "movie",
  "overview": "为了让「濒临留级」又「讨厌学习」的美少女五姐妹通过学校考试毕业，主角风太郎以兼职家庭教师的身份来到中野家指导她们的课业，也因此渐渐与五胞胎们培养出感情。怀抱着各种想法的各人也迎来高中生活最后的活动「学园祭」。「学园祭第一天15时请到教室来。」聚集在教室里的五胞胎们，风太郎想告诉她们的是……",
  "release_date": "2022-05-20",
  "douban": "",
  "poster": "tmdb_820067.jpg",
  "vote_average": 8.3,
  "vote_count": 442,
  "popularity": 6.4,
  "runtime": 136,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ],
  "genre_ids": [
    16,
    35,
    10749
  ]
},
  {
  "id": 478,
  "tmdb": 62564,
  "title": "吹响吧！上低音号",
  "original_title": "響け！ユーフォニアム",
  "media_type": "tv",
  "overview": "作品主要讲述了进入北宇治高中就读的主人公黄前久美子，在同班同学加藤叶月的热烈影响下加入了该校的吹奏部。北宇治高中吹奏部直到5年前还是关西大会的常客，并且过去还是全国大会出场过的强校代表，然而自从顾问换了之后，该吹奏部就再也没有挺进过关西大会。之后以新顾问的赴任为契机，怀揣着高远目标的部员们挥洒着奋斗的青春，过着波澜万丈的每一天。终于，比赛的日子也即将到来……",
  "release_date": "2015-04-08",
  "douban": "",
  "poster": "tmdb_62564.jpg",
  "vote_average": 8.0,
  "vote_count": 102,
  "popularity": 138.3,
  "runtime": 24,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ],
  "genre_ids": [
    16,
    18
  ]
},
  {
  "id": 479,
  "tmdb": 94605,
  "title": "英雄联盟：双城之战",
  "original_title": "Arcane",
  "media_type": "tv",
  "overview": "本动画剧集以游戏《英雄联盟》为背景，讲述了在充满蒸汽朋克气息的乌托邦--皮尔特沃夫和由化学品驱动的地下城--祖安中，蔚和金克丝姐妹俩，在一场由神秘的海克斯科技引发的激烈冲突中站在了彼此的对立面，她们从此分道扬镳，朝着不同的命运终点走去，但心中的羁绊又无时不刻地让二人想要破镜重圆，而心怀正义的姐姐蔚也拼尽全力，誓要战胜地下城中的一切邪恶。",
  "release_date": "2021-11-06",
  "douban": "",
  "poster": "tmdb_94605.jpg",
  "vote_average": 8.8,
  "vote_count": 5916,
  "popularity": 35.4,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US",
    "FR"
  ],
  "genre_ids": [
    16,
    10759,
    10765
  ]
},
  {
  "id": 480,
  "tmdb": 131378,
  "title": "探险活宝：菲奥娜与蛋糕",
  "original_title": "Adventure Time: Fionna and Cake",
  "media_type": "tv",
  "overview": "宝妹和皮姊在前冰霸王赛门帕特里克夫的帮助下穿梭多重宇宙进行冒险与自我探索之旅。",
  "release_date": "2023-08-31",
  "douban": "",
  "poster": "tmdb_131378.jpg",
  "vote_average": 8.6,
  "vote_count": 327,
  "popularity": 18.7,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    16,
    10759,
    35,
    10765
  ]
},
  {
  "id": 481,
  "tmdb": 1246049,
  "title": "德古拉",
  "original_title": "Dracula",
  "media_type": "movie",
  "overview": "故事讲述 15 世纪的弗拉基米尔王子，在爱妻离世后诅咒上帝，最终化作吸血鬼；此后在 19 世纪的伦敦，他遇见了与妻子容貌一模一样的分身，却因执意追寻她而自取毁灭。",
  "release_date": "2025-07-30",
  "douban": "",
  "poster": "tmdb_1246049.jpg",
  "vote_average": 7.1,
  "vote_count": 1242,
  "popularity": 47.9,
  "runtime": 130,
  "languages": [
    "de",
    "ro",
    "en"
  ],
  "countries": [
    "FR"
  ],
  "genre_ids": [
    27,
    14,
    10749
  ]
},
  {
  "id": 482,
  "tmdb": 80748,
  "title": "联邦调查局",
  "original_title": "FBI",
  "media_type": "tv",
  "overview": "本剧讲述美国联邦调查局纽约办公室的精英团队为保证纽约和国家安全，发挥他们丰富的才能、才智和技术专长的故事。",
  "release_date": "2018-09-25",
  "douban": "",
  "poster": "tmdb_80748.jpg",
  "vote_average": 7.9,
  "vote_count": 904,
  "popularity": 96.0,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    80,
    10759,
    18
  ]
},
  {
  "id": 483,
  "tmdb": 1981,
  "title": "圣女魔咒",
  "original_title": "Charmed",
  "media_type": "tv",
  "overview": "《圣女魔咒》在英美非常流行的剧集之一，属于与Buffy同类型的魔法奇幻电视剧，同样也都是WB公司出品。三个姐妹(Prue, Piper and Phoebe)重新团聚，并且解封她们的力量成为魔咒圣女- 最强有力的巫婆存在。现在她们必须征服罪恶，拯救无辜者，那些在现实世界和她们生活在一起的普通妇女。生活不那么容易当您被魔咒附体时。",
  "release_date": "1998-10-07",
  "douban": "",
  "poster": "tmdb_1981.jpg",
  "vote_average": 8.2,
  "vote_count": 2513,
  "popularity": 78.3,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    35,
    18,
    9648,
    10765
  ]
},
  {
  "id": 484,
  "tmdb": 26451,
  "title": "对一个不容怀疑的公民的调查",
  "original_title": "Indagine su un cittadino al di sopra di ogni sospetto",
  "media_type": "movie",
  "overview": "这位极具挑衅性的意大利电影导演埃利奥·佩特里在国际上最受赞誉的作品，便是这部荣获奥斯卡奖、令人震撼且直击人心的杰出惊悚片。在讲述一位罗马警探调查一桩令人发指的罪行——而凶手正是他自己——这一卡夫卡式故事时，佩特里巧妙维系了荒诞与写实间的平衡。影片既是对人物的深刻剖析，亦是对1960年代末至70年代初意大利政府高压镇压的尖锐评论。佩特里对超现实官僚体系的动态描摹，呈现出一幅反常又愉悦的受控混乱图景。[标准收藏]",
  "release_date": "1970-10-16",
  "douban": "",
  "poster": "tmdb_26451.jpg",
  "vote_average": 8.2,
  "vote_count": 873,
  "popularity": 1.8,
  "runtime": 111,
  "languages": [
    "it"
  ],
  "countries": [
    "IT"
  ],
  "genre_ids": [
    18,
    53
  ]
},
  {
  "id": 485,
  "tmdb": 1010581,
  "title": "我的过错",
  "original_title": "Culpa mía",
  "media_type": "movie",
  "overview": "诺亚被迫离开她的小镇、男友和朋友，搬进了她母亲的新丈夫的豪宅。在那里，她遇见了她的新继兄尼克，两人的性格从一开始就发生了碰撞。然而他们对彼此的吸引却渐渐演变成一段禁忌的恋情，在这期间，他们叛逆的性格和磨人的脾气颠覆了彼此的世界，并致使他们疯狂地坠入了爱河。",
  "release_date": "2023-06-08",
  "douban": "",
  "poster": "tmdb_1010581.jpg",
  "vote_average": 7.7,
  "vote_count": 4076,
  "popularity": 54.1,
  "runtime": 117,
  "languages": [
    "es"
  ],
  "countries": [
    "ES"
  ],
  "genre_ids": [
    18,
    10749,
    53
  ]
},
  {
  "id": 486,
  "tmdb": 73586,
  "title": "黄石",
  "original_title": "Yellowstone",
  "media_type": "tv",
  "overview": "约翰·达顿是达顿家族的一家之长，坐拥着美国最大的牧场，与牧场毗邻的有美国首个国家公园、印第安人保留地以及土地开发商买下的地皮。在一次因牲畜误入印第安人保留地引起的争端中，不幸的意外伤亡事件发生，一场涉及多方的争端在蒙大拿州这片美丽的土地上拉开了序幕。",
  "release_date": "2018-06-20",
  "douban": "",
  "poster": "tmdb_73586.jpg",
  "vote_average": 8.3,
  "vote_count": 3146,
  "popularity": 158.4,
  "runtime": 0,
  "languages": [
    "de",
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    37,
    18
  ]
},
  {
  "id": 487,
  "tmdb": 259837,
  "title": "超能路人甲",
  "original_title": "원더풀스",
  "media_type": "tv",
  "overview": "世界末日论盛行的 1999 年世纪末，一群原本平凡的“路人甲”意外获得超能力，却没有走上典型英雄之路，反而以各自不按牌理出牌的方式组成临时英雄联盟，对抗威胁世界和平的反派势力，在混乱与笑料之中肩负起守护世界的任务。",
  "release_date": "2026-05-15",
  "douban": "",
  "poster": "tmdb_259837.jpg",
  "vote_average": 9.1,
  "vote_count": 151,
  "popularity": 71.2,
  "runtime": 80,
  "languages": [
    "ko"
  ],
  "countries": [
    "KR"
  ],
  "genre_ids": [
    10759,
    35,
    10765,
    18
  ]
},
  {
  "id": 488,
  "tmdb": 22980,
  "title": "安迪·科恩的现场观察",
  "original_title": "Watch What Happens Live with Andy Cohen",
  "media_type": "tv",
  "overview": "布拉沃电视台的高管安迪·科恩与名人和真人秀明星一起畅聊流行文化议题。",
  "release_date": "2009-07-16",
  "douban": "",
  "poster": "tmdb_22980.jpg",
  "vote_average": 5.0,
  "vote_count": 86,
  "popularity": 142.6,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    10767,
    35
  ]
},
  {
  "id": 489,
  "tmdb": 65942,
  "title": "Re：从零开始的异世界生活",
  "original_title": "Re:ゼロから始める異世界生活",
  "media_type": "tv",
  "overview": "在异世界陷入迷茫的普通高中生菜月昴，邂逅了一位银发的美少女。但想助她一臂之力的昴，却一次次地遭遇敌袭，背叛、暴力，甚至是死亡……“死亡回归”——无力的少年拥有的唯一能力，能将死后时间倒转回一开始。使用了这般力量，便会失去过去的回忆，可为了守护最重要的人们，昴必须抗争到底。“即使你忘却了我，我也不会遗忘你。”",
  "release_date": "2016-04-04",
  "douban": "",
  "poster": "tmdb_65942.jpg",
  "vote_average": 7.9,
  "vote_count": 636,
  "popularity": 88.3,
  "runtime": 25,
  "languages": [
    "ja"
  ],
  "countries": [
    "JP"
  ],
  "genre_ids": [
    16,
    10759,
    10765,
    18,
    9648
  ]
},
  {
  "id": 490,
  "tmdb": 79141,
  "title": "刺客伍六七",
  "original_title": "刺客伍六七",
  "media_type": "tv",
  "overview": "这个世界有两大超级强国：崇尚武力的玄武国和高科技的斯坦国（第二季开始因审查原因改名为斯特国）。玄武国的人认为将武功练到最高境界后便不怕任何现代武器，而斯特国的人却认为科技才是最厉害的武器，多年来玄武国与斯特国之间战争不断，其他诸国饱受株连。\n\n而在普通人居住的名叫小鸡岛(小号岛)的小岛上，有一个可以伪装成任何玩意的廉价刺客：伍六七。伍六七平时看上去是个理发师，其实背地里却做着刺客生意。他热爱理发事业，喜欢给人剪头发，善用剪刀——剪刀也是他的刺杀武器。由于在刺客榜的排名不高，接到的都是些奇葩的刺杀任务。在完成刺杀任务的过程中，他常与刺杀对象发生一系列有趣的意外事件，每次任务都被搞得乱七八糟。\n\n伍六七其实是他的经纪人鸡大保从海边捡回来的，当时他重伤昏迷，失去了记忆，没有人知道他的过去。鸡大保根据理发店门牌号给他取了个这个名字，同时作为他的经纪人，以理发店为据点，替伍六七承接各种奇葩的刺杀任务。善良的伍六七从来没有成功完成过刺杀任务，但却每次都能意外的化解雇主的仇恨。然而，由于从来没有成功刺杀过一个人，他也只能混迹于刺客行业的底层，靠理发（和卖牛杂）收入勉强度日。\n\n在刺客伍六七执行奇葩任务的过程中，他看到了很多人，经历了很多事。他开始渐渐的认清自我，身世之谜也渐渐浮出水面。慢慢地，也许有一天，他终将寻回自己失去的记忆。",
  "release_date": "2018-04-25",
  "douban": "",
  "poster": "tmdb_79141.jpg",
  "vote_average": 8.6,
  "vote_count": 772,
  "popularity": 30.5,
  "runtime": 16,
  "languages": [
    "zh"
  ],
  "countries": [
    "CN"
  ],
  "genre_ids": [
    16,
    35,
    10759,
    10765
  ]
},
  {
  "id": 491,
  "tmdb": 1116201,
  "title": "铁肺",
  "original_title": "Iron Lung",
  "media_type": "movie",
  "overview": "　　在“寂静被提”事件后的末世未来，一名囚犯驾驶名为“铁肺号”的潜艇，在一颗荒芜卫星的血色海洋中探索，寻找消失的星辰与行星。该片由同名游戏改编。",
  "release_date": "2026-01-30",
  "douban": "",
  "poster": "tmdb_1116201.jpg",
  "vote_average": 7.2,
  "vote_count": 214,
  "popularity": 147.7,
  "runtime": 125,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    27,
    9648,
    878
  ]
},
  {
  "id": 492,
  "tmdb": 1110034,
  "title": "深海魅影",
  "original_title": "Kraken",
  "media_type": "movie",
  "overview": "在挪威壮丽的深峡湾畔，宁静的小渔村维加斯发生了一系列令人匪夷所思的事件。海洋生物学家约翰娜正在当地的鱼场进行一项常规科研项目，起初完全沉浸在这片世外桃源的自然美景中。然而，这份宁静被骤然打破：两名当地青少年相继离奇死亡，整个村庄陷入前所未有的恐慌与猜疑之中。随着调查的深入，约翰娜发现所有迹象都指向峡湾那深不见底的黑暗水域。她凭借专业知识和设备进行探测，最终揭示了令人窒息的真相！",
  "release_date": "2026-02-06",
  "douban": "",
  "poster": "tmdb_1110034.jpg",
  "vote_average": 6.0,
  "vote_count": 71,
  "popularity": 49.1,
  "runtime": 94,
  "languages": [
    "ja",
    "en",
    "no"
  ],
  "countries": [
    "NO"
  ],
  "genre_ids": [
    27,
    28,
    53
  ]
},
  {
  "id": 493,
  "tmdb": 2190,
  "title": "南方公园",
  "original_title": "South Park",
  "media_type": "tv",
  "overview": "《南方公园》，其他译法包括《衰仔乐园》（港版翻译）或《南方四贱客》（台版翻译），是美国喜剧中心（Comedy Central）制作的一部剪纸摆拍动画剧集，由Matt Stone和Trey Parker创作。主角为科罗拉多州虚构的南方公园小镇的四名10岁的男孩。南方公园经常通过歪曲式的摹仿来讽刺和嘲弄美国文化和社会时事的方方面面，挑战了许多根深蒂固的观念和禁忌。",
  "release_date": "1997-08-13",
  "douban": "",
  "poster": "tmdb_2190.jpg",
  "vote_average": 8.3,
  "vote_count": 4996,
  "popularity": 73.1,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    16,
    35
  ]
},
  {
  "id": 494,
  "tmdb": 1411,
  "title": "疑犯追踪",
  "original_title": "Person of Interest",
  "media_type": "tv",
  "overview": "纽约地铁上，几个小混混无端挑衅一个衣着褴褛的流浪汉，却不想被他狠狠收拾了一顿，众人全部被带回警局。警官卡特（塔拉吉·P·汉森 Taraji P. Henson 饰）对这个神秘的流浪汉充满兴趣，正当调查处一丝线索，不想流浪汉竟然被人保释。原来流浪汉是一个曾经接受过中央情报局特殊训练的特工里瑟（詹姆斯·卡维泽 James Caviezel 饰），而保释他的则是拥有无限的财富的富翁芬奇（迈克尔·爱默生 Michael Emerson 饰）。芬奇曾为政府研发了一种可识别罪犯犯罪意识的程序，却被政府认为大材小用而关闭了一部分程序。而现在芬奇希望借助里瑟的能力和这一套程序进行“法外执法”，维持正义、制止犯罪......",
  "release_date": "2011-09-22",
  "douban": "",
  "poster": "tmdb_1411.jpg",
  "vote_average": 8.1,
  "vote_count": 2038,
  "popularity": 91.8,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    18,
    10759,
    80,
    10765
  ]
},
  {
  "id": 495,
  "tmdb": 138502,
  "title": "X战警97",
  "original_title": "X-Men '97",
  "media_type": "tv",
  "overview": "由变种人组成的X战警利用他们不可思议的天赋，保护一个痛恨又恐惧他们的世界，接受前所未有的挑战，并面临出乎意料的危险新未来。",
  "release_date": "2024-03-20",
  "douban": "",
  "poster": "tmdb_138502.jpg",
  "vote_average": 8.5,
  "vote_count": 673,
  "popularity": 18.9,
  "runtime": 0,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    16,
    10759,
    10765
  ]
},
  {
  "id": 496,
  "tmdb": 1622,
  "title": "邪恶力量",
  "original_title": "Supernatural",
  "media_type": "tv",
  "overview": "迪恩和萨姆是两兄弟，生在温切斯特家族的他们，血统里便带着与生俱来的责任——成为“猎人”，专门对付危害人类的恶魔与超自然力量。22年前，他们的母亲遭遇恶魔毒手，因此父亲约翰多年来一面试图追杀恶魔，一面训导两兄弟成为优秀猎人。不过，相比哥哥迪恩对“捕猎”的热衷，弟弟萨姆显然更爱普通生活，他进了斯坦福大学，有了美丽女友，一心要与古怪家庭脱离关系。怎料一次捕猎活动中父亲失踪，迪恩只能召来弟弟协助，萨姆先是勉为其难，但随着调查深入，他发现命中注定的事根本无法凭他个人力量改变。",
  "release_date": "2005-09-13",
  "douban": "",
  "poster": "tmdb_1622.jpg",
  "vote_average": 8.3,
  "vote_count": 8444,
  "popularity": 216.4,
  "runtime": 45,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    18,
    9648,
    10765
  ]
},
  {
  "id": 497,
  "tmdb": 92060,
  "title": "迈克尔·杰克逊：颤栗",
  "original_title": "Michael Jackson's Thriller",
  "media_type": "movie",
  "overview": "黑人女青年（欧拉·蕾 Ola Ray 饰）跟男友（迈克尔·杰克逊 Michael Jackson 饰）因为汽车没油了走在回家的路上，男友像她示爱，女青年欣然接受，但是男青年向她透露自己跟常人不一样。正当女青年在犯迷糊之时男友已经趁着月光变身成了狼人，关键时刻镜头一转才发现真实的情况是这只是女青年和男友正在看的恐怖片。女青年因为害怕决定要早走，男友追上了她，解释一番过后两个嬉笑着回家。但是真正的危险正在发生，当他们路过一片墓地时，恐怖的食人尸都从地底下爬了出来……\r 　　本短片是迈克尔·杰克逊的歌曲《Thriller》的音乐录影带，本片意义非凡，成功开启了有剧情的MV时代。",
  "release_date": "1983-11-21",
  "douban": "",
  "poster": "tmdb_92060.jpg",
  "vote_average": 8.3,
  "vote_count": 765,
  "popularity": 7.5,
  "runtime": 14,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    27,
    53,
    10402
  ]
},
  {
  "id": 498,
  "tmdb": 206559,
  "title": "比勒陀利亚医院",
  "original_title": "Binnelanders",
  "media_type": "tv",
  "overview": "一部南非阿非利卡语肥皂剧。该剧以虚构的比内兰德诊所为中心，该诊所位于比勒陀利亚及其周边地区，剧情围绕着医院员工及病人们的磨难、创伤和困扰展开。",
  "release_date": "2005-10-13",
  "douban": "",
  "poster": "tmdb_206559.jpg",
  "vote_average": 5.5,
  "vote_count": 111,
  "popularity": 94.0,
  "runtime": 0,
  "languages": [
    "af",
    "en"
  ],
  "countries": [
    "ZA"
  ],
  "genre_ids": [
    10766
  ]
},
  {
  "id": 499,
  "tmdb": 32118,
  "title": "变形小雷",
  "original_title": "Generator Rex",
  "media_type": "tv",
  "overview": "Generator Rex 是一部由 Man of Action 为 Cartoon Network 创作的美国科幻“纳米朋克”动作动画电视连续剧。 Cartoon Network Studios 的 John Fang 担任监制。 它的灵感来自 Image Comics 1999 年出版的 M. Rex 漫画。该系列于 2010 年 4 月 23 日在美国的 Cartoon Network 首播。 Generator Rex 被评为 TV-PG。 第三季的最后一集于 2013 年 1 月 3 日播出。",
  "release_date": "2010-04-23",
  "douban": "",
  "poster": "tmdb_32118.jpg",
  "vote_average": 8.5,
  "vote_count": 411,
  "popularity": 11.4,
  "runtime": 30,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    16,
    10759,
    10762,
    10765
  ]
},
  {
  "id": 500,
  "tmdb": 1430077,
  "title": "幽旅巫咒",
  "original_title": "Hokum",
  "media_type": "movie",
  "overview": "　　小说家欧姆·鲍曼前往一家偏远客栈，为父母撒落骨灰，却被一则传闻缠上——蜜月套房里，有女巫在此徘徊作祟。诡异的幻象接连浮现，一桩骇人失踪案骤然发生，迫使他必须面对自己过往中那些阴暗不堪的角落。",
  "release_date": "2026-04-29",
  "douban": "",
  "poster": "tmdb_1430077.jpg",
  "vote_average": 7.0,
  "vote_count": 137,
  "popularity": 181.8,
  "runtime": 107,
  "languages": [
    "en"
  ],
  "countries": [
    "HK",
    "US",
    "AE",
    "IE"
  ],
  "genre_ids": [
    27
  ]
},
  {
  "id": 501,
  "tmdb": 39351,
  "title": "格林",
  "original_title": "Grimm",
  "media_type": "tv",
  "overview": "波特兰警局警察尼克·伯克哈特（Nick Burkhardt ，大卫·君图力 David Giuntoli 饰）刚刚被晋升为命案侦探，正准备在新的工作岗位上大展拳脚，可是他开始见到一些根本不能用言语来解释的可怕景象。尼克的姑姑玛丽向尼克透露了一个惊天秘密，尼克的生活从此改变。玛丽称伯克哈特家族的祖先曾隶属于一个猎人集团，他们的统一代号为“格林”。这个世界中存在大量的超自然生物，它们试图侵占世界、毁灭人类，而“格林”的任务就是阻止它们的阴谋。当尼克对家族背景有了更多了解后，越来越意识到自己对“格林”的义务责无旁贷。格林兄弟是假的，但格林童话是真的——这个新发现不仅会影响尼克的命运，也将影响人类的命运......",
  "release_date": "2011-10-28",
  "douban": "",
  "poster": "tmdb_39351.jpg",
  "vote_average": 8.3,
  "vote_count": 3530,
  "popularity": 82.5,
  "runtime": 45,
  "languages": [
    "en"
  ],
  "countries": [
    "US"
  ],
  "genre_ids": [
    18,
    9648,
    10765
  ]
},
  {
  "id": 502,
  "tmdb": 1291608,
  "title": "征服者",
  "original_title": "धुरंधर",
  "media_type": "movie",
  "overview": "2000年代初，一名卧底特务潜入喀拉蚩的黑社会，打进权力核心，只为从内部瓦解暴力网络。",
  "release_date": "2025-12-05",
  "douban": "",
  "poster": "tmdb_1291608.jpg",
  "vote_average": 7.2,
  "vote_count": 297,
  "popularity": 84.8,
  "runtime": 205,
  "languages": [
    "pa",
    "ur",
    "hi"
  ],
  "countries": [
    "IN"
  ],
  "genre_ids": [
    28,
    80,
    53
  ]
}
];