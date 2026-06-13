function normalizeLatinText(value) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[’']/g, ' ')
    .replace(/[^a-zA-Z0-9 -]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function normalizeLookupKey(value) {
  return normalizeLatinText(value).toLowerCase()
}

const teamSpecificOverrides = {
  'Czech Republic': {
    'Matěj Kovář': '马捷伊·科瓦日',
    'David Zima': '大卫·齐马',
    'Tomáš Holeš': '托马什·霍莱什',
    'Robin Hranáč': '罗宾·赫拉纳奇',
    'Vladimír Coufal': '弗拉基米尔·曹法尔',
    'Štěpán Chaloupek': '斯捷潘·哈卢佩克',
    'Ladislav Krejčí': '拉季斯拉夫·克雷伊奇',
    'Vladimír Darida': '弗拉基米尔·达里达',
    'Adam Hložek': '亚当·赫洛热克',
    'Patrik Schick': '帕特里克·希克',
    'Jan Kuchta': '扬·库赫塔',
    'Lukáš Červ': '卢卡什·切尔夫',
    'Mojmír Chytil': '莫伊米尔·希季尔',
    'David Jurásek': '大卫·尤拉塞克',
    'Pavel Šulc': '帕维尔·舒尔茨',
    'Jindřich Staněk': '因德日赫·斯塔涅克',
    'Lukáš Provod': '卢卡什·普罗沃德',
    'Michal Sadílek': '米哈尔·萨迪莱克',
    'Tomáš Chorý': '托马什·霍里',
    'Jaroslav Zelený': '雅罗斯拉夫·泽莱尼',
    'David Douděra': '大卫·杜杰拉',
    'Tomáš Souček': '托马什·绍切克',
    'Lukáš Horníček': '卢卡什·霍尔尼切克',
    'Alexandr Sojka': '亚历山大尔·索伊卡',
    'Hugo Sochůrek': '雨果·索胡雷克',
    'Denis Višinský': '德尼斯·维辛斯基',
  },
  Japan: {
    'Zion Suzuki': '铃木彩艳',
    'Yukinari Sugawara': '菅原由势',
    'Shōgo Taniguchi': '谷口彰悟',
    'Kō Itakura': '板仓滉',
    'Yūto Nagatomo': '长友佑都',
    'Shūto Machino': '町野修斗',
    'Ao Tanaka': '田中碧',
    'Takefusa Kubo': '久保建英',
    'Keisuke Gotō': '后藤启介',
    'Ritsu Dōan': '堂安律',
    'Daizen Maeda': '前田大然',
    'Keisuke Ōsako': '大迫敬介',
    'Keito Nakamura': '中村敬斗',
    'Junya Itō': '伊东纯也',
    'Daichi Kamada': '镰田大地',
    'Tsuyoshi Watanabe': '渡边刚',
    'Yuito Suzuki': '铃木唯人',
    'Ayase Ueda': '上田绮世',
    'Kōki Ogawa': '小川航基',
    'Ayumu Seko': '濑古步梦',
    'Hiroki Itō': '伊藤洋辉',
    'Takehiro Tomiyasu': '富安健洋',
    'Tomoki Hayakawa': '早川友基',
    'Kaishū Sano': '佐野海舟',
    'Junnosuke Suzuki': '铃木淳之介',
    'Kento Shiogai': '盐贝健人',
  },
  'South Korea': {
    'Kim Seung-gyu': '金承奎',
    'Lee Han-beom': '李韩范',
    'Lee Gi-hyuk': '李基赫',
    'Kim Min-jae': '金玟哉',
    'Kim Tae-hyeon': '金泰贤',
    'Hwang In-beom': '黄仁范',
    'Son Heung-min': '孙兴慜',
    'Paik Seung-ho': '白昇浩',
    'Cho Gue-sung': '曹圭成',
    'Lee Jae-sung': '李在城',
    'Hwang Hee-chan': '黄喜灿',
    'Song Bum-keun': '宋范根',
    'Lee Tae-seok': '李泰锡',
    'Cho Wi-je': '曹威济',
    'Kim Moon-hwan': '金纹奂',
    'Park Jin-seob': '朴镇燮',
    'Bae Jun-ho': '裴峻浩',
    'Oh Hyeon-gyu': '吴贤揆',
    'Lee Kang-in': '李刚仁',
    'Yang Hyun-jun': '梁贤俊',
    'Jo Hyeon-woo': '赵贤祐',
    'Seol Young-woo': '薛英佑',
    'Jens Castrop': '延斯·卡斯特罗普',
    'Kim Jin-gyu': '金镇圭',
    'Eom Ji-sung': '严智星',
    'Lee Dong-gyeong': '李东炅',
  },
}

const fullNameOverrides = {
  'Kylian Mbappé': '基利安·姆巴佩',
  'Lionel Messi': '利昂内尔·梅西',
  'Jude Bellingham': '裘德·贝林厄姆',
  'Virgil van Dijk': '维吉尔·范戴克',
  'Mohamed Salah': '穆罕默德·萨拉赫',
  'Lamine Yamal': '拉明·亚马尔',
  'Florian Wirtz': '弗洛里安·维尔茨',
  'Jamal Musiala': '贾马尔·穆西亚拉',
  'Rodri': '罗德里',
  'Vinícius Júnior': '维尼修斯·儒尼奥尔',
  'Vinicius Junior': '维尼修斯·儒尼奥尔',
  'Harry Kane': '哈里·凯恩',
  'Bukayo Saka': '布卡约·萨卡',
  'Phil Foden': '菲尔·福登',
  'Declan Rice': '德克兰·赖斯',
  'Cole Palmer': '科尔·帕尔默',
  'Marcus Rashford': '马库斯·拉什福德',
  'Ollie Watkins': '奥利·沃特金斯',
  'Eberechi Eze': '埃贝雷奇·埃泽',
  'Jordan Pickford': '乔丹·皮克福德',
  'John Stones': '约翰·斯通斯',
  'Reece James': '里斯·詹姆斯',
  'Jarell Quansah': '贾雷尔·宽萨',
  'Dean Henderson': '迪恩·亨德森',
  'Jordan Henderson': '乔丹·亨德森',
  'Noni Madueke': '诺尼·马杜埃凯',
  'Ivan Toney': '伊万·托尼',
  'Cristiano Ronaldo': '克里斯蒂亚诺·罗纳尔多',
  'Bruno Fernandes': '布鲁诺·费尔南德斯',
  'Bernardo Silva': '贝尔纳多·席尔瓦',
  'Rúben Dias': '鲁本·迪亚斯',
  'Ruben Dias': '鲁本·迪亚斯',
  'Diogo Costa': '迪奥戈·科斯塔',
  'Diogo Dalot': '迪奥戈·达洛特',
  'João Félix': '若昂·菲利克斯',
  'Joao Felix': '若昂·菲利克斯',
  'João Cancelo': '若昂·坎塞洛',
  'Joao Cancelo': '若昂·坎塞洛',
  'Rafael Leão': '拉斐尔·莱奥',
  'Rafael Leao': '拉斐尔·莱奥',
  'Vitinha': '维蒂尼亚',
  'Nuno Mendes': '努诺·门德斯',
  'Gonçalo Ramos': '贡萨洛·拉莫斯',
  'Goncalo Ramos': '贡萨洛·拉莫斯',
  'Francisco Conceição': '弗朗西斯科·孔塞桑',
  'Francisco Conceicao': '弗朗西斯科·孔塞桑',
  'Gonçalo Inácio': '贡萨洛·伊纳西奥',
  'Goncalo Inacio': '贡萨洛·伊纳西奥',
  'Rúben Neves': '鲁本·内维斯',
  'Ruben Neves': '鲁本·内维斯',
  'Pedro Neto': '佩德罗·内托',
  'Cristiano Ronaldo': '克里斯蒂亚诺·罗纳尔多',
  'Kylian Mbappé': '基利安·姆巴佩',
  'Aurélien Tchouaméni': '奥雷利安·楚阿梅尼',
  'Aurelien Tchouameni': '奥雷利安·楚阿梅尼',
  'Ousmane Dembélé': '奥斯曼·登贝莱',
  'Ousmane Dembele': '奥斯曼·登贝莱',
  'Marcus Thuram': '马库斯·图拉姆',
  'William Saliba': '威廉·萨利巴',
  'Dayot Upamecano': '达约·于帕梅卡诺',
  'Jules Koundé': '儒勒·孔德',
  'Jules Kounde': '儒勒·孔德',
  'Adrien Rabiot': '阿德里安·拉比奥',
  'Mike Maignan': '迈克·迈尼昂',
  'Ibrahima Konaté': '易卜拉希马·科纳特',
  'Ibrahima Konate': '易卜拉希马·科纳特',
  'N\'Golo Kanté': '恩戈洛·坎特',
  'NGolo Kante': '恩戈洛·坎特',
  'Théo Hernandez': '特奥·埃尔南德斯',
  'Theo Hernandez': '特奥·埃尔南德斯',
  'Lucas Hernandez': '卢卡斯·埃尔南德斯',
  'Michael Olise': '迈克尔·奥利塞',
  'Bradley Barcola': '布拉德利·巴尔科拉',
  'Désiré Doué': '德西雷·杜埃',
  'Desire Doue': '德西雷·杜埃',
  'Jean-Philippe Mateta': '让-菲利普·马特塔',
  'Rayan Cherki': '拉扬·切尔基',
  'Malo Gusto': '马洛·古斯托',
  'Brice Samba': '布里斯·桑巴',
  'Warren Zaïre-Emery': '沃伦·扎伊尔-埃梅里',
  'Warren Zaire-Emery': '沃伦·扎伊尔-埃梅里',
  'Juan Musso': '胡安·穆索',
  'Marcos Senesi': '马科斯·塞内西',
  'Nicolás Tagliafico': '尼古拉斯·塔利亚菲科',
  'Nicolas Tagliafico': '尼古拉斯·塔利亚菲科',
  'Gonzalo Montiel': '冈萨洛·蒙铁尔',
  'Leandro Paredes': '莱安德罗·帕雷德斯',
  'Lisandro Martínez': '利桑德罗·马丁内斯',
  'Lisandro Martinez': '利桑德罗·马丁内斯',
  'Rodrigo De Paul': '罗德里戈·德保罗',
  'Valentín Barco': '瓦伦丁·巴尔科',
  'Valentin Barco': '瓦伦丁·巴尔科',
  'Julián Alvarez': '胡利安·阿尔瓦雷斯',
  'Julian Alvarez': '胡利安·阿尔瓦雷斯',
  'Giovani Lo Celso': '乔瓦尼·洛塞尔索',
  'Gerónimo Rulli': '赫罗尼莫·鲁利',
  'Geronimo Rulli': '赫罗尼莫·鲁利',
  'Cristian Romero': '克里斯蒂安·罗梅罗',
  'Exequiel Palacios': '埃塞基耶尔·帕拉西奥斯',
  'Nicolás González': '尼古拉斯·冈萨雷斯',
  'Nicolas Gonzalez': '尼古拉斯·冈萨雷斯',
  'Thiago Almada': '蒂亚戈·阿尔马达',
  'Giuliano Simeone': '朱利亚诺·西蒙尼',
  'Nico Paz': '尼科·帕斯',
  'Nicolás Otamendi': '尼古拉斯·奥塔门迪',
  'Nicolas Otamendi': '尼古拉斯·奥塔门迪',
  'Alexis Mac Allister': '亚历克西斯·麦卡利斯特',
  'José Manuel López': '何塞·曼努埃尔·洛佩斯',
  'Jose Manuel Lopez': '何塞·曼努埃尔·洛佩斯',
  'Lautaro Martínez': '劳塔罗·马丁内斯',
  'Lautaro Martinez': '劳塔罗·马丁内斯',
  'Emiliano Martínez': '埃米利亚诺·马丁内斯',
  'Emiliano Martinez': '埃米利亚诺·马丁内斯',
  'Enzo Fernández': '恩佐·费尔南德斯',
  'Enzo Fernandez': '恩佐·费尔南德斯',
  'Facundo Medina': '法昆多·梅迪纳',
  'Nahuel Molina': '纳韦尔·莫利纳',
  'Alisson Becker': '阿利松',
  'Éderson': '埃德森',
  'Ederson': '埃德森',
  'Gabriel Magalhães': '加布里埃尔·马加良斯',
  'Gabriel Magalhaes': '加布里埃尔·马加良斯',
  'Marquinhos': '马尔基尼奥斯',
  'Casemiro': '卡塞米罗',
  'Alex Sandro': '阿莱士·桑德罗',
  'Bruno Guimarães': '布鲁诺·吉马良斯',
  'Bruno Guimaraes': '布鲁诺·吉马良斯',
  'Matheus Cunha': '马特乌斯·库尼亚',
  'Neymar': '内马尔',
  'Raphinha': '拉菲尼亚',
  'Weverton': '韦弗顿',
  'Danilo': '达尼洛',
  'Gleison Bremer': '格莱松·布雷默',
  'Léo Pereira': '莱奥·佩雷拉',
  'Leo Pereira': '莱奥·佩雷拉',
  'Douglas Santos': '道格拉斯·桑托斯',
  'Fabinho': '法比尼奥',
  'Endrick': '恩德里克',
  'Lucas Paquetá': '卢卡斯·帕奎塔',
  'Lucas Paqueta': '卢卡斯·帕奎塔',
  'Luiz Henrique': '路易斯·恩里克',
  'Gabriel Martinelli': '加布里埃尔·马丁内利',
  'Roger Ibañez': '罗热·伊巴涅斯',
  'Roger Ibanez': '罗热·伊巴涅斯',
  'Igor Thiago': '伊戈尔·蒂亚戈',
  'Rayan': '拉扬',
  'David Raya': '大卫·拉亚',
  'Marc Pubill': '马克·普维尔',
  'Álex Grimaldo': '阿莱士·格里马尔多',
  'Alex Grimaldo': '阿莱士·格里马尔多',
  'Eric García': '埃里克·加西亚',
  'Eric Garcia': '埃里克·加西亚',
  'Marcos Llorente': '马科斯·略伦特',
  'Mikel Merino': '米克尔·梅里诺',
  'Ferran Torres': '费兰·托雷斯',
  'Fabián Ruiz': '法比安·鲁伊斯',
  'Fabian Ruiz': '法比安·鲁伊斯',
  'Gavi': '加维',
  'Dani Olmo': '达尼·奥尔莫',
  'Yéremy Pino': '耶雷米·皮诺',
  'Yeremy Pino': '耶雷米·皮诺',
  'Pedro Porro': '佩德罗·波罗',
  'Joan Garcia': '霍安·加西亚',
  'Aymeric Laporte': '艾梅里克·拉波尔特',
  'Álex Baena': '阿莱士·巴埃纳',
  'Alex Baena': '阿莱士·巴埃纳',
  'Nico Williams': '尼科·威廉斯',
  'Martín Zubimendi': '马丁·苏比门迪',
  'Martin Zubimendi': '马丁·苏比门迪',
  'Pedri': '佩德里',
  'Mikel Oyarzabal': '米克尔·奥亚萨瓦尔',
  'Pau Cubarsí': '保·库巴西',
  'Pau Cubarsi': '保·库巴西',
  'Unai Simón': '乌奈·西蒙',
  'Unai Simon': '乌奈·西蒙',
  'Marc Cucurella': '马克·库库雷利亚',
  'Víctor Muñoz': '比克托·穆尼奥斯',
  'Victor Munoz': '比克托·穆尼奥斯',
  'Borja Iglesias': '博尔哈·伊格莱西亚斯',
  'Takefusa Kubo': '久保建英',
  'Son Heung-min': '孙兴慜',
  'Virgil van Dijk': '维吉尔·范戴克',
  'Xavi Simons': '哈维·西蒙斯',
  'Martin Ødegaard': '马丁·厄德高',
  'Martin Odegaard': '马丁·厄德高',
  'Erling Haaland': '埃尔林·哈兰德',
  'Alexander Sørloth': '亚历山大·瑟洛特',
  'Alexander Sorloth': '亚历山大·瑟洛特',
  'Achraf Hakimi': '阿什拉夫·哈基米',
  'Yassine Bounou': '亚辛·布努',
  'Sofyan Amrabat': '索菲扬·阿姆拉巴特',
  'Amine Adli': '阿明·阿德利',
  'Amine Gouiri': '阿明·古伊里',
  'Hakim Ziyech': '哈基姆·齐耶赫',
  'Mohammed Kudus': '穆罕默德·库杜斯',
  'Thomas Partey': '托马斯·帕尔特伊',
  'Victor Osimhen': '维克托·奥斯梅恩',
  'Ademola Lookman': '阿德莫拉·卢克曼',
  'Wilfred Ndidi': '威尔弗雷德·恩迪迪',
  'Samuel Chukwueze': '塞缪尔·丘库埃泽',
  'Kevin De Bruyne': '凯文·德布劳内',
  'Romelu Lukaku': '罗梅卢·卢卡库',
  'Jérémy Doku': '热雷米·多库',
  'Jeremy Doku': '热雷米·多库',
  'Youri Tielemans': '尤里·蒂勒曼斯',
  'Thibaut Courtois': '蒂博·库尔图瓦',
  'Johan Bakayoko': '约翰·巴卡约科',
  'Koen Casteels': '库恩·卡斯特尔斯',
  'Luka Modrić': '卢卡·莫德里奇',
  'Luka Modric': '卢卡·莫德里奇',
  'Joško Gvardiol': '约什科·格瓦迪奥尔',
  'Josko Gvardiol': '约什科·格瓦迪奥尔',
  'Mateo Kovačić': '马特奥·科瓦契奇',
  'Mateo Kovacic': '马特奥·科瓦契奇',
  'Marcelo Brozović': '马塞洛·布罗佐维奇',
  'Marcelo Brozovic': '马塞洛·布罗佐维奇',
  'Dominik Livaković': '多米尼克·利瓦科维奇',
  'Dominik Livakovic': '多米尼克·利瓦科维奇',
  'Federico Valverde': '费德里科·巴尔韦德',
  'Darwin Núñez': '达尔文·努涅斯',
  'Darwin Nunez': '达尔文·努涅斯',
  'Ronald Araújo': '罗纳德·阿劳霍',
  'Ronald Araujo': '罗纳德·阿劳霍',
  'José María Giménez': '何塞·玛丽亚·希门尼斯',
  'Jose Maria Gimenez': '何塞·玛丽亚·希门尼斯',
  'Rodrigo Bentancur': '罗德里戈·本坦库尔',
  'Manuel Ugarte': '曼努埃尔·乌加特',
  'Christian Pulisic': '克里斯蒂安·普利希奇',
  'Weston McKennie': '韦斯顿·麦肯尼',
  'Tyler Adams': '泰勒·亚当斯',
  'Tim Weah': '蒂姆·维阿',
  'Folarin Balogun': '弗拉林·巴洛贡',
  'Gio Reyna': '吉奥·雷纳',
  'Sergiño Dest': '塞尔吉尼奥·德斯特',
  'Sergino Dest': '塞尔吉尼奥·德斯特',
  'Matt Turner': '马特·特纳',
  'Alphonso Davies': '阿方索·戴维斯',
  'Jonathan David': '乔纳森·戴维',
  'Tajon Buchanan': '塔琼·布坎南',
  'Stephen Eustáquio': '斯蒂芬·欧斯塔基奥',
  'Stephen Eustaquio': '斯蒂芬·欧斯塔基奥',
  'Cyle Larin': '赛尔·拉林',
  'Moisés Caicedo': '莫伊塞斯·凯塞多',
  'Moises Caicedo': '莫伊塞斯·凯塞多',
  'Piero Hincapié': '皮耶罗·因卡皮耶',
  'Piero Hincapie': '皮耶罗·因卡皮耶',
  'Enner Valencia': '恩纳·瓦伦西亚',
  'Pervis Estupiñán': '佩尔维斯·埃斯图皮尼安',
  'Pervis Estupinan': '佩尔维斯·埃斯图皮尼安',
  'Kendry Páez': '肯德里·帕埃斯',
  'Kendry Paez': '肯德里·帕埃斯',
  'Luis Díaz': '路易斯·迪亚斯',
  'Luis Diaz': '路易斯·迪亚斯',
  'James Rodríguez': '哈梅斯·罗德里格斯',
  'James Rodriguez': '哈梅斯·罗德里格斯',
  'Jhon Arias': '约翰·阿里亚斯',
  'Richard Ríos': '理查德·里奥斯',
  'Richard Rios': '理查德·里奥斯',
  'Rafael Santos Borré': '拉斐尔·桑托斯·博雷',
  'Rafael Santos Borre': '拉斐尔·桑托斯·博雷',
  'Santiago Giménez': '圣地亚哥·希门尼斯',
  'Santiago Gimenez': '圣地亚哥·希门尼斯',
  'Edson Álvarez': '埃德松·阿尔瓦雷斯',
  'Edson Alvarez': '埃德松·阿尔瓦雷斯',
  'Raúl Jiménez': '劳尔·希门尼斯',
  'Raul Jimenez': '劳尔·希门尼斯',
  'Julián Quiñones': '胡利安·基尼奥内斯',
  'Julian Quinones': '胡利安·基尼奥内斯',
  'César Montes': '塞萨尔·蒙特斯',
  'Cesar Montes': '塞萨尔·蒙特斯',
  'Johan Vásquez': '约翰·巴斯克斯',
  'Johan Vasquez': '约翰·巴斯克斯',
  'Guillermo Ochoa': '吉列尔莫·奥乔亚',
  'Mohamed Abdelmonem': '穆罕默德·阿卜杜勒莫内姆',
  'Mohamed El Shenawy': '穆罕默德·希纳维',
  'Omar Marmoush': '奥马尔·马尔穆什',
  'Mahmoud Trezeguet': '马哈茂德·特雷泽盖',
  'Mostafa Mohamed': '穆斯塔法·穆罕默德',
  'Trezeguet': '特雷泽盖',
  'Youssef En-Nesyri': '优素福·恩内斯里',
  'Sofiane Boufal': '索菲安·布法尔',
  'Noussair Mazraoui': '努赛尔·马兹拉维',
  'Romain Saïss': '罗曼·赛斯',
  'Romain Saiss': '罗曼·赛斯',
  'Azzedine Ounahi': '阿泽丁·欧纳希',
  'Hakim Ziyech': '哈基姆·齐耶赫',
  'Abde Ezzalzouli': '阿卜德·埃萨尔祖利',
  'Ali Al-Bulaihi': '阿里·布莱希',
  'Salem Al-Dawsari': '萨勒姆·达瓦萨里',
  'Firas Al-Buraikan': '菲拉斯·布赖坎',
  'Musab Al-Juwayr': '穆萨卜·朱瓦伊尔',
  'Mehdi Taremi': '迈赫迪·塔雷米',
  'Sardar Azmoun': '萨达尔·阿兹蒙',
  'Alireza Jahanbakhsh': '阿里雷扎·贾汉巴赫什',
  'Ramin Rezaeian': '拉明·礼萨扬',
  'Saeed Ezatolahi': '赛义德·埃扎托拉希',
  'Takumi Minamino': '南野拓实',
  'Wataru Endō': '远藤航',
  'Wataru Endo': '远藤航',
  'Kaoru Mitoma': '三笘薰',
  'Ko Itakura': '板仓滉',
  'Daichi Kamada': '镰田大地',
  'Ayase Ueda': '上田绮世',
  'Takehiro Tomiyasu': '富安健洋',
}

const tokenOverrides = {
  abdul: '阿卜杜勒',
  abu: '阿布',
  adams: '亚当斯',
  adrien: '阿德里安',
  ahmed: '艾哈迈德',
  akliouche: '阿克利乌什',
  alan: '阿兰',
  alvaro: '阿尔瓦罗',
  alessandro: '亚历山德罗',
  alex: '亚历克斯',
  alexander: '亚历山大',
  alexis: '亚历克西斯',
  ali: '阿里',
  alisson: '阿利松',
  amine: '阿明',
  amir: '阿米尔',
  andres: '安德烈斯',
  anthony: '安东尼',
  antonio: '安东尼奥',
  araujo: '阿劳霍',
  arda: '阿尔达',
  arthur: '阿图尔',
  axel: '阿克塞尔',
  acevedo: '阿塞韦多',
  ayari: '阿亚里',
  aymen: '艾曼',
  bacuna: '巴库纳',
  baena: '巴埃纳',
  barcola: '巴尔科拉',
  benjamin: '本杰明',
  bernardo: '贝尔纳多',
  brian: '布赖恩',
  bruno: '布鲁诺',
  can: '詹',
  caceres: '卡塞雷斯',
  caicedo: '凯塞多',
  carlos: '卡洛斯',
  cesar: '塞萨尔',
  chavez: '查韦斯',
  chris: '克里斯',
  christian: '克里斯蒂安',
  cristian: '克里斯蒂安',
  charles: '夏尔',
  daniel: '丹尼尔',
  danilo: '达尼洛',
  david: '大卫',
  denis: '德尼',
  deniz: '德尼兹',
  diego: '迭戈',
  diomande: '迪奥曼德',
  diaz: '迪亚斯',
  doue: '杜埃',
  elliot: '埃利奥特',
  eric: '埃里克',
  fabian: '法比安',
  fidalgo: '菲达尔戈',
  felix: '菲利克斯',
  fernandez: '费尔南德斯',
  firas: '菲拉斯',
  florian: '弗洛里安',
  fofana: '福法纳',
  gomez: '戈麦斯',
  goncalo: '贡萨洛',
  gonzalez: '冈萨雷斯',
  gordon: '戈登',
  guillermo: '吉列尔莫',
  gustaf: '古斯塔夫',
  gustavo: '古斯塔沃',
  hadj: '哈吉',
  hassan: '哈桑',
  harry: '哈里',
  hwang: '黄',
  ibrahim: '易卜拉欣',
  igor: '伊戈尔',
  isak: '伊萨克',
  ismael: '伊斯梅尔',
  issa: '伊萨',
  ivan: '伊万',
  jackson: '杰克逊',
  jacob: '雅各布',
  james: '詹姆斯',
  jean: '让',
  jens: '延斯',
  jeremy: '杰里米',
  joao: '若昂',
  johan: '约翰',
  john: '约翰',
  jonathan: '乔纳森',
  jordan: '乔丹',
  jorge: '豪尔赫',
  jose: '何塞',
  joseph: '约瑟夫',
  josue: '霍苏埃',
  joshua: '约书亚',
  julian: '胡利安',
  kai: '凯',
  karim: '卡里姆',
  keisuke: '圭介',
  kevin: '凯文',
  kim: '金',
  lacroix: '拉克鲁瓦',
  lawrence: '劳伦斯',
  leandro: '莱安德罗',
  lee: '李',
  leao: '莱奥',
  liam: '利亚姆',
  lira: '利拉',
  luis: '路易斯',
  luca: '卢卡',
  lucas: '卢卡斯',
  luka: '卢卡',
  luiz: '路易斯',
  mahmoud: '马哈茂德',
  malick: '马利克',
  manuel: '曼努埃尔',
  marc: '马克',
  marcus: '马库斯',
  mark: '马克',
  marko: '马尔科',
  martin: '马丁',
  martinez: '马丁内斯',
  matheus: '马特乌斯',
  matias: '马蒂亚斯',
  matt: '马特',
  mehdi: '迈赫迪',
  mendes: '门德斯',
  merino: '梅里诺',
  mert: '梅尔特',
  michael: '迈克尔',
  mike: '迈克',
  mohamed: '穆罕默德',
  mohammad: '穆罕默德',
  mohammed: '穆罕默德',
  moises: '莫伊塞斯',
  montes: '蒙特斯',
  mostafa: '穆斯塔法',
  nabil: '纳比勒',
  nathan: '内森',
  neves: '内维斯',
  nico: '尼科',
  nicolas: '尼古拉斯',
  nicolás: '尼古拉斯',
  noah: '诺亚',
  omar: '奥马尔',
  ousmane: '乌斯曼',
  paul: '保罗',
  pavel: '帕维尔',
  pedro: '佩德罗',
  pierre: '皮埃尔',
  rabiot: '拉比奥',
  rafael: '拉斐尔',
  ramos: '拉莫斯',
  raul: '劳尔',
  rangel: '兰赫尔',
  robin: '罗宾',
  rayan: '拉扬',
  ricardo: '里卡多',
  roberto: '罗伯托',
  robinson: '罗宾逊',
  rodrigo: '罗德里戈',
  rodriguez: '罗德里格斯',
  romo: '罗莫',
  romero: '罗梅罗',
  ronaldo: '罗纳尔多',
  ruben: '鲁本',
  salah: '萨拉赫',
  saliba: '萨利巴',
  samir: '萨米尔',
  sanabria: '萨纳夫里亚',
  sanchez: '桑切斯',
  santos: '桑托斯',
  santi: '桑蒂',
  santiago: '圣地亚哥',
  scott: '斯科特',
  semedo: '塞梅多',
  simon: '西蒙',
  silva: '席尔瓦',
  smith: '史密斯',
  souttar: '苏塔尔',
  stephan: '斯特凡',
  stephen: '斯蒂芬',
  suzuki: '铃木',
  taha: '塔哈',
  talbi: '塔勒比',
  thiago: '蒂亚戈',
  tomas: '托马什',
  thomas: '托马斯',
  tim: '蒂姆',
  timothy: '蒂莫西',
  torres: '托雷斯',
  toure: '图雷',
  valencia: '瓦伦西亚',
  vasquez: '巴斯克斯',
  vega: '贝加',
  vargas: '巴尔加斯',
  veiga: '韦加',
  viktor: '维克托',
  vladimir: '弗拉基米尔',
  waterman: '沃特曼',
  williams: '威廉斯',
  yamal: '亚马尔',
  yan: '扬',
  yassine: '亚辛',
  youssef: '优素福',
  zakaria: '扎卡里亚',
  zeki: '泽基',
  lukas: '卢卡什',
  patrik: '帕特里克',
  matej: '马捷伊',
  stepan: '斯捷潘',
  ladislav: '拉季斯拉夫',
  pavel: '帕维尔',
  michal: '米哈尔',
  jaroslav: '雅罗斯拉夫',
  jindrich: '因德日赫',
}

const connectorTokens = {
  al: '阿尔',
  bin: '本',
  ben: '本',
  da: '达',
  das: '达斯',
  de: '德',
  del: '德尔',
  di: '迪',
  dos: '多斯',
  el: '埃尔',
  la: '拉',
  le: '勒',
  lo: '洛',
  mac: '麦克',
  mc: '麦克',
  o: '奥',
  van: '范',
  von: '冯',
}

const normalizedTeamSpecificOverrides = Object.fromEntries(
  Object.entries(teamSpecificOverrides).map(([teamName, overrides]) => [
    teamName,
    new Map(Object.entries(overrides).map(([key, value]) => [normalizeLookupKey(key), value])),
  ]),
)

const normalizedFullNameOverrides = new Map(
  Object.entries(fullNameOverrides).map(([key, value]) => [normalizeLookupKey(key), value]),
)

const normalizedTokenOverrides = new Map(
  Object.entries(tokenOverrides).map(([key, value]) => [normalizeLookupKey(key), value]),
)

function splitNameTokens(name) {
  return normalizeLatinText(name)
    .split(/[\s-]+/)
    .map((token) => token.trim())
    .filter(Boolean)
}

function isVowel(char) {
  return 'aeiouy'.includes(char)
}

function splitIntoSyllables(token) {
  const clean = token.toLowerCase().replace(/[^a-z]/g, '')
  if (!clean) {
    return []
  }

  const syllables = []
  let index = 0

  while (index < clean.length) {
    let end = index + 1

    while (end < clean.length && !isVowel(clean[end - 1]) && !isVowel(clean[end])) {
      end += 1
    }

    while (end < clean.length && isVowel(clean[end])) {
      end += 1
    }

    if (end < clean.length - 1 && !isVowel(clean[end]) && !isVowel(clean[end + 1])) {
      end += 1
    }

    syllables.push(clean.slice(index, end))
    index = end
  }

  return syllables
}

function transliterateSyllable(syllable) {
  const chunkOverrides = {
    a: '阿',
    ai: '艾',
    ao: '奥',
    au: '奥',
    ay: '艾',
    be: '贝',
    ben: '本',
    bo: '博',
    ca: '卡',
    ce: '塞',
    ci: '西',
    co: '科',
    da: '达',
    de: '德',
    di: '迪',
    do: '多',
    du: '杜',
    el: '埃尔',
    er: '尔',
    fa: '法',
    fe: '费',
    fi: '菲',
    fo: '福',
    ga: '加',
    ge: '格',
    gi: '吉',
    go: '戈',
    ha: '哈',
    he: '赫',
    hi: '希',
    ho: '霍',
    hu: '胡',
    ja: '贾',
    je: '杰',
    ji: '吉',
    jo: '若',
    ju: '朱',
    ka: '卡',
    ke: '凯',
    ki: '基',
    ko: '科',
    ku: '库',
    la: '拉',
    le: '莱',
    li: '利',
    lo: '洛',
    lu: '卢',
    ma: '马',
    me: '梅',
    mi: '米',
    mo: '莫',
    mu: '穆',
    na: '纳',
    ne: '内',
    ni: '尼',
    no: '诺',
    nu: '努',
    pa: '帕',
    pe: '佩',
    pi: '皮',
    po: '波',
    pu: '普',
    ra: '拉',
    re: '雷',
    ri: '里',
    ro: '罗',
    ru: '鲁',
    sa: '萨',
    se: '塞',
    si: '西',
    so: '索',
    su: '苏',
    ta: '塔',
    te: '特',
    ti: '蒂',
    to: '托',
    tu: '图',
    va: '瓦',
    ve: '韦',
    vi: '维',
    vo: '沃',
    wa: '瓦',
    we: '韦',
    wi: '维',
    wo: '沃',
    xa: '哈',
    xe: '谢',
    xi: '西',
    xo: '霍',
    ya: '亚',
    ye: '耶',
    yi: '伊',
    yo: '约',
    yu: '尤',
    za: '扎',
    ze: '泽',
    zi: '齐',
    zo: '佐',
    zu: '祖',
  }

  if (chunkOverrides[syllable]) {
    return chunkOverrides[syllable]
  }

  let value = syllable
  value = value
    .replace(/^sch/, 'sh')
    .replace(/^sh/, 'x')
    .replace(/^ch/, 'q')
    .replace(/^th/, 't')
    .replace(/^ph/, 'f')
    .replace(/^qu/, 'kw')
    .replace(/^kn/, 'n')
    .replace(/^wr/, 'r')
    .replace(/ough/g, 'o')
    .replace(/augh/g, 'a')
    .replace(/eau/g, 'o')
    .replace(/tion/g, 'xen')
    .replace(/sion/g, 'xen')
    .replace(/gue/g, 'ge')
    .replace(/gui/g, 'gi')
    .replace(/que/g, 'ke')
    .replace(/qui/g, 'ki')
    .replace(/ck/g, 'k')
    .replace(/oo/g, 'u')
    .replace(/ou/g, 'u')
    .replace(/ee/g, 'i')
    .replace(/ea/g, 'ia')
    .replace(/ie/g, 'ie')
    .replace(/ei/g, 'ei')
    .replace(/ai/g, 'ai')
    .replace(/ay/g, 'ai')
    .replace(/oa/g, 'o')
    .replace(/oi/g, 'oi')
    .replace(/oy/g, 'oi')
    .replace(/au/g, 'ao')
    .replace(/eu/g, 'eu')
    .replace(/ie/g, 'i')
    .replace(/ya/g, 'ia')
    .replace(/yo/g, 'io')
    .replace(/yu/g, 'iu')

  const onsetMatch = value.match(/^[^aeiouy]+/)
  const onset = onsetMatch?.[0] ?? ''
  const rest = value.slice(onset.length)
  const nucleusMatch = rest.match(/^[aeiouy]+/)
  const nucleus = nucleusMatch?.[0] ?? ''
  const coda = rest.slice(nucleus.length)

  const onsetMap = {
    '': '',
    b: '布',
    bl: '布尔',
    br: '布尔',
    c: '克',
    ch: '奇',
    cl: '克勒',
    cr: '克罗',
    d: '德',
    dr: '德拉',
    f: '夫',
    fl: '弗勒',
    fr: '弗朗',
    g: '格',
    gl: '格勒',
    gr: '格拉',
    h: '哈',
    j: '贾',
    k: '克',
    kl: '克勒',
    kr: '克拉',
    l: '勒',
    m: '姆',
    n: '恩',
    p: '普',
    ph: '夫',
    pl: '普勒',
    pr: '普罗',
    q: '克',
    r: '尔',
    s: '斯',
    sch: '施',
    sh: '什',
    sk: '斯克',
    sl: '斯勒',
    sm: '斯姆',
    sn: '斯内',
    sp: '斯普',
    st: '斯特',
    str: '斯特',
    sw: '斯瓦',
    t: '特',
    th: '特',
    tr: '特罗',
    v: '夫',
    w: '瓦',
    x: '希',
    y: '伊',
    z: '兹',
  }

  const vowelMap = {
    '': '',
    a: '阿',
    ai: '艾',
    ao: '奥',
    au: '奥',
    e: '埃',
    ea: '伊',
    ee: '伊',
    ei: '伊',
    eu: '欧',
    i: '伊',
    ia: '亚',
    ie: '耶',
    io: '约',
    o: '奥',
    oi: '瓦',
    oo: '乌',
    ou: '乌',
    u: '乌',
    ue: '韦',
    ui: '维',
    y: '伊',
  }

  const codaMap = {
    '': '',
    b: '布',
    c: '克',
    d: '德',
    f: '夫',
    g: '格',
    k: '克',
    l: '尔',
    m: '姆',
    n: '恩',
    nd: '恩德',
    ng: '恩',
    nt: '恩特',
    p: '普',
    r: '尔',
    rd: '尔德',
    rk: '尔克',
    rn: '恩',
    rs: '尔斯',
    rt: '尔特',
    s: '斯',
    st: '斯特',
    t: '特',
    x: '克斯',
    z: '兹',
  }

  const onsetText = onsetMap[onset] ?? onsetMap[onset.slice(0, 1)] ?? ''
  const vowelText = vowelMap[nucleus] ?? vowelMap[nucleus.slice(0, 1)] ?? ''
  const codaText = codaMap[coda] ?? codaMap[coda.slice(-1)] ?? ''
  const result = `${onsetText}${vowelText}${codaText}`.replace(/^(布阿|德阿|格阿|克阿|勒阿|姆阿|普阿|斯阿|特阿|瓦阿|兹阿)/, (match) => match.slice(0, -1))

  return result || '阿'
}

function transliterateToken(token) {
  const lookupKey = normalizeLookupKey(token)
  if (!lookupKey) {
    return ''
  }

  const normalizedTokenOverride = normalizedTokenOverrides.get(lookupKey)
  if (normalizedTokenOverride) {
    return normalizedTokenOverride
  }

  if (lookupKey.endsWith('ovic') && lookupKey.length > 4) {
    return `${transliterateToken(lookupKey.slice(0, -4))}奥维奇`
  }
  if (lookupKey.endsWith('evic') && lookupKey.length > 4) {
    return `${transliterateToken(lookupKey.slice(0, -4))}耶维奇`
  }
  if (lookupKey.endsWith('ski') && lookupKey.length > 3) {
    return `${transliterateToken(lookupKey.slice(0, -3))}斯基`
  }
  if (lookupKey.endsWith('sky') && lookupKey.length > 3) {
    return `${transliterateToken(lookupKey.slice(0, -3))}斯基`
  }
  if (lookupKey.endsWith('sson') && lookupKey.length > 4) {
    return `${transliterateToken(lookupKey.slice(0, -4))}松`
  }
  if (lookupKey.endsWith('sen') && lookupKey.length > 3) {
    return `${transliterateToken(lookupKey.slice(0, -3))}森`
  }
  if (lookupKey.endsWith('son') && lookupKey.length > 3) {
    return `${transliterateToken(lookupKey.slice(0, -3))}森`
  }
  if (lookupKey.endsWith('ic') && lookupKey.length > 2) {
    return `${transliterateToken(lookupKey.slice(0, -2))}奇`
  }
  if (lookupKey.endsWith('ich') && lookupKey.length > 3) {
    return `${transliterateToken(lookupKey.slice(0, -3))}奇`
  }
  if (lookupKey.endsWith('escu') && lookupKey.length > 4) {
    return `${transliterateToken(lookupKey.slice(0, -4))}埃斯库`
  }

  const syllables = splitIntoSyllables(lookupKey)
  if (syllables.length === 0) {
    return token
  }

  return syllables.map((syllable) => transliterateSyllable(syllable)).join('')
}

function buildGenericChineseName(displayName) {
  const tokens = splitNameTokens(displayName)
  const segments = []
  let pendingConnector = ''

  for (const token of tokens) {
    const lookupKey = normalizeLookupKey(token)
    if (!lookupKey) {
      continue
    }

    if (connectorTokens[lookupKey]) {
      pendingConnector += connectorTokens[lookupKey]
      continue
    }

    const translatedToken = transliterateToken(token)
    if (!translatedToken) {
      continue
    }

    if (pendingConnector) {
      segments.push(`${pendingConnector}${translatedToken}`)
      pendingConnector = ''
      continue
    }

    segments.push(translatedToken)
  }

  if (pendingConnector) {
    segments.push(pendingConnector)
  }

  return segments.join('·')
}

export function toMainlandChinesePlayerName(displayName, teamName) {
  const normalizedDisplayName = normalizeLookupKey(displayName)
  const teamOverride = normalizedTeamSpecificOverrides[teamName]?.get(normalizedDisplayName)
  if (teamOverride) {
    return teamOverride
  }

  const fullOverride = normalizedFullNameOverrides.get(normalizedDisplayName)
  if (fullOverride) {
    return fullOverride
  }

  return buildGenericChineseName(displayName)
}
