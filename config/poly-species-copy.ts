import type { SpeciesRecord } from "@/config/poly-species";
import type { Locale } from "@/i18n/types";

type SpeciesNarrative = {
  name: string;
  threat: [string, string, string];
};

const ZH_SPECIES: Record<string, SpeciesNarrative> = {
  crow: {
    name: "盔犀鸟",
    threat: [
      "2015 年末，盔犀鸟的保护等级连升三级，从近危变为极危。",
      "它几乎完全实心的头盔富含类似象牙的材质，因而遭到大量捕杀，中国是其制品最大的消费市场。",
      "伐木与农业开发进一步压缩栖息地，而缓慢的繁殖周期让种群恢复更加困难。",
    ],
  },
  vaquita: {
    name: "小头鼠海豚",
    threat: [
      "残存小头鼠海豚面临的最大威胁，是被渔具意外捕获致死。",
      "它们会困死在捕捞鲨鱼、鳐鱼和石首鱼的刺网中，其中也包括非法捕捞加湾石首鱼的渔网。",
      "据估计，这些威胁每年会夺走约 30 只小头鼠海豚。",
    ],
  },
  tamarin: {
    name: "金狮面狨",
    threat: [
      "金狮面狨在关键栖息地中一度只剩约 150 只，长期承受人类活动压力。",
      "保护计划扭转了部分下降趋势，但栖息地丧失、伐木、采矿、偷猎和动物贸易仍在持续。",
      "原始森林只剩约 8%，这限制了野外重引入，也加剧了近亲繁殖。",
    ],
  },
  frog: {
    name: "金色箭毒蛙",
    threat: [
      "这种色彩鲜明、毒性极强的蛙类正面临显著威胁。",
      "农业扩张、人类定居、伐木、种植和农药喷洒共同破坏了它的森林环境。",
      "国际宠物贸易仍在捕捉它们，天然毒性并没有带来足够保护。",
    ],
  },
  owl: {
    name: "林斑小鸮",
    threat: [
      "体型娇小的林斑小鸮原本种群就十分有限。",
      "非法毁林、森林火灾和人类不断侵入其活动区域，持续削弱栖息地。",
      "它还面临多种天敌，以及针对鸟蛋和身体部位的捕猎。",
    ],
  },
  turtle: {
    name: "肯氏龟",
    threat: [
      "这种最小的海龟因食用、盗卵和捕虾作业中的误捕而持续减少。",
      "它们的巢穴容易被人类和天敌发现，使幼龟补充极不稳定。",
      "浣熊、臭鼬、郊狼以及多种海陆动物都会捕食龟卵和幼体。",
    ],
  },
  oryx: {
    name: "弯角剑羚",
    threat: [
      "弯角剑羚醒目的长角带来了致命价值，最终使它在野外被猎至灭绝。",
      "在捕猎压力之前，撒哈拉地区的干旱和气候变化已令其数量锐减。",
      "欧洲殖民和人类扩张进入其分布区后，下降速度进一步加快。",
    ],
  },
  iguana: {
    name: "斐济冠鬣蜥",
    threat: [
      "斐济冠鬣蜥是少数能够改变体色的鬣蜥之一。",
      "焚烧、放牧、定居和旅游开发持续破坏森林与海岸栖息地。",
      "黑鼠和野猫会捕食体型较小的成体，也会取食它们的卵。",
    ],
  },
  seahorse: {
    name: "克尼斯纳海马",
    threat: [
      "克尼斯纳海马的危机主要来自极其狭窄的分布范围。",
      "任何发生在少数河口中的灾害，都可能对整个种群造成毁灭性影响。",
      "洪水和河口管理不当若持续发生，可能直接把这一物种推向灭绝。",
    ],
  },
  armadillo: {
    name: "巴西三带犰狳",
    threat: [
      "巴西三带犰狳坚硬的甲壳能抵御多数天敌，却无法抵挡人类活动。",
      "畜牧业扩张造成栖息地丧失，人们也会为获取食物而捕猎它们。",
      "它虽曾是 2014 年世界杯吉祥物，但其分布区仅约 3% 得到保护。",
    ],
  },
  sloth: {
    name: "侏三趾树懒",
    threat: [
      "侏三趾树懒只生活在巴拿马一座无人居住的保护岛屿上。",
      "游客进入和旅游开发计划仍然威胁着岛上的红树林栖息地。",
      "作为明星物种，它们也会被来访者捕捉并带离岛屿饲养。",
    ],
  },
  kakapo: {
    name: "鸮鹦鹉",
    threat: [
      "鸮鹦鹉在新西兰隔绝环境中演化，失去飞行能力，也缺乏应对捕食者的防御。",
      "人类到来后的捕猎，以及后来引入的外来捕食者，令其数量降至极低水平。",
      "长期恢复计划让种群开始缓慢增长，但它仍远未摆脱灭绝风险。",
    ],
  },
  echidna: {
    name: "长喙针鼹",
    threat: [
      "长喙针鼹是地球上延续时间最久的哺乳动物谱系之一。",
      "它们因食用价值遭到捕猎，人口密集地区的栖息地也不断消失。",
      "重要种群附近规划中的镍矿项目，正在带来新的生存压力。",
    ],
  },
  penguin: {
    name: "非洲企鹅",
    threat: [
      "曾经数量丰富的非洲企鹅，在过去一个世纪里快速衰退。",
      "气候变化、石油污染、过度采集鸟蛋和高强度捕鱼共同影响它们。",
      "2000 年的一次漏油事故就波及约 40% 的整个种群。",
    ],
  },
  damselfly: {
    name: "希腊红豆娘",
    threat: [
      "这种鲜艳的豆娘只分布在极少数溪流环境中。",
      "气候变化、管理不足和不断扩张的旅游活动，使有限栖息地更为脆弱。",
      "水污染、河道硬化和持续干旱，甚至会让溪流完全断流。",
    ],
  },
  bear: {
    name: "马来熊",
    threat: [
      "拥有胸前项链状斑纹的马来熊，未来却可能比想象中短暂。",
      "捕猎、森林火灾、开发和伐木在不同分布区持续破坏其栖息地。",
      "尽管捕猎在各地均属非法，执法失控仍使部分地区种群在二十多年间减半。",
    ],
  },
  parrotfish: {
    name: "彩虹鹦嘴鱼",
    threat: [
      "彩虹鹦嘴鱼鲜艳而体型较大，也因此成为过度捕捞的目标。",
      "它们经常进入浅水区，更容易被捕获，栖息地在过去 25 年中也迅速缩减。",
      "剩余珊瑚礁的质量继续下降，削弱了它们获取食物和庇护的能力。",
    ],
  },
  camel: {
    name: "双峰驼",
    threat: [
      "若趋势不变，野生双峰驼每年还会损失约 25 至 30 只。",
      "三十年来持续的捕猎造成显著下降，狼的捕食也增加了压力。",
      "采矿和基础设施开发破坏中国分布区，蒙古种群到 2033 年可能损失 84%。",
    ],
  },
  butterfly: {
    name: "华莱士鸟翼蝶",
    threat: [
      "以博物学家华莱士命名的鸟翼蝶，正失去赖以生存的森林。",
      "马鲁古群岛的低地森林持续被商业伐木和毁林侵占。",
      "用于防治蚊虫的杀虫剂也会伤害这种大型而美丽的蝴蝶。",
    ],
  },
  ostrich: {
    name: "索马里鸵鸟",
    threat: [
      "直到 2014 年才被确认为独立物种的索马里鸵鸟，深受人类活动影响。",
      "鸟蛋被大量用于容器、装饰和宗教物件。",
      "食用、运动捕猎、羽毛利用以及栖息地丧失，共同带来严峻未来。",
    ],
  },
  panda: {
    name: "小熊猫",
    threat: [
      "活泼的小熊猫主要受栖息地丧失威胁，也承受一定偷猎压力。",
      "分布区人口增长令森林转变为住宅、农田和其他开发用地。",
      "误捕、毛皮利用和近亲繁殖进一步削弱了野外种群。",
    ],
  },
  tapir: {
    name: "马来貘",
    threat: [
      "这种拥有独特长鼻的动物，是毁林和捕猎的又一个受害者。",
      "大量分布区缺乏监管，非法伐木持续发生；在苏门答腊核心区域，森林仍在不断消失。",
      "其他猎物减少后，人类对马来貘的捕猎压力也在增加。",
    ],
  },
  sifaka: {
    name: "冠狐猴",
    threat: [
      "极危的冠狐猴既因食用遭到捕猎，也主要受到雨林消失的威胁。",
      "国家公园远离有效管理区域，当地居民进入保护区的行为往往无人监管。",
      "它们的毛皮会被交易，肉也会被作为食物。",
    ],
  },
  lynx: {
    name: "伊比利亚猞猁",
    threat: [
      "伊比利亚猞猁是世界上最稀有的猫科动物之一。",
      "疾病导致兔类数量崩溃，夺走了它们最重要的食物来源。",
      "一次原本用于控制害兽的病毒引入，最终给这一物种带来了灾难性后果。",
    ],
  },
  rhino: {
    name: "苏门答腊犀牛",
    threat: [
      "曾广布东南亚的苏门答腊犀牛，如今已处于极危状态。",
      "犀角价格高昂并被赋予虚构药效，持续刺激偷猎。",
      "大规模毁林和近亲繁殖，使残存种群付出更沉重代价。",
    ],
  },
  peccary: {
    name: "查科西貒",
    threat: [
      "查科西貒面临多重危机，其中捕猎影响最为显著。",
      "阿根廷部分地区 15 年内失去约 33% 森林；植被覆盖过低时，西貒会迅速消失。",
      "一种长期困扰种群的未知疾病，也进一步增加了风险。",
    ],
  },
  okapi: {
    name: "霍加狓",
    threat: [
      "外形介于斑马和长颈鹿之间的霍加狓，受到栖息地丧失和偷猎夹击。",
      "伐木和人类定居使其自 1990 年代中期以来持续下降。",
      "刚果的全面保护和霍加狓保护项目，反映了这一威胁的紧迫程度。",
    ],
  },
  loris: {
    name: "爪哇懒猴",
    threat: [
      "大眼睛的爪哇懒猴长期遭到人类过度利用。",
      "缓慢行动让它们很容易被捕捉，并因所谓疗效或魔法用途而被交易。",
      "异宠贸易与栖息地侵占，正在把这一物种推向灭绝。",
    ],
  },
  hirola: {
    name: "亨氏牛羚",
    threat: [
      "极危的亨氏牛羚若消失，将成为现代非洲首个灭绝的哺乳动物。",
      "捕食、资源竞争、偷猎以及牛瘟和结核病持续压低数量。",
      "新建立的保护区隔绝了部分外部威胁，为其未来保留一线希望。",
    ],
  },
  drill: {
    name: "鬼狒",
    threat: [
      "鬼狒分布范围不足 220 平方公里，被列为非洲最高保护优先级的灵长类之一。",
      "人类开发、栖息地丧失和非法捕猎让其数量连续数十年下降。",
      "目前估计仅剩约 3,000 只，即使最高估算也只有 8,000 只。",
    ],
  },
};

const FR_SPECIES: Record<string, SpeciesNarrative> = {
  crow: { name: "Calao à casque rond", threat: ["Fin 2015, le calao à casque rond est passé de quasi menacé à en danger critique.", "Son casque presque entièrement plein, semblable à de l'ivoire, alimente une chasse intense et un commerce largement porté par la demande chinoise.", "L'exploitation forestière, l'agriculture et son cycle de reproduction lent rendent son rétablissement particulièrement difficile."] },
  vaquita: { name: "Vaquita", threat: ["La mort accidentelle dans les engins de pêche est la principale menace pour les dernières vaquitas.", "Elles se noient dans les filets maillants destinés aux requins, raies et surtout au totoaba, souvent pêché illégalement.", "On estime que ces menaces faisaient disparaître environ 30 vaquitas par an."] },
  tamarin: { name: "Tamarin-lion doré", threat: ["Le tamarin-lion doré n'a compté qu'environ 150 individus dans un habitat essentiel.", "Les programmes de conservation ont aidé, mais déforestation, mines, braconnage et commerce animal persistent.", "Il ne reste qu'environ 8 % de la forêt d'origine, ce qui limite les réintroductions et favorise la consanguinité."] },
  frog: { name: "Phyllobate terrible", threat: ["Cette grenouille vivement colorée, l'une des plus toxiques au monde, reste fortement menacée.", "Agriculture, installation humaine, exploitation forestière et pesticides détruisent ensemble son habitat.", "Le commerce international continue de la capturer malgré sa toxicité naturelle."] },
  owl: { name: "Chevêche forestière", threat: ["La petite chevêche forestière possède déjà une population très réduite.", "Déforestation illégale, incendies et empiètement humain dégradent continuellement son habitat.", "Elle subit aussi la prédation et la collecte de ses œufs et parties du corps."] },
  turtle: { name: "Tortue de Kemp", threat: ["La plus petite tortue marine décline à cause de la collecte, de la consommation et surtout des captures accidentelles par les crevettiers.", "Ses nids faciles à repérer sont vulnérables aux humains comme aux prédateurs.", "Raton-laveurs, mouffettes, coyotes et de nombreux animaux consomment œufs et nouveau-nés."] },
  oryx: { name: "Oryx algazelle", threat: ["Les cornes spectaculaires de l'oryx algazelle ont provoqué une chasse qui l'a fait disparaître à l'état sauvage.", "Avant cela, l'assèchement du Sahara lié au climat avait déjà fortement réduit ses effectifs.", "La colonisation et l'expansion humaine dans son aire ont accéléré le déclin."] },
  iguana: { name: "Iguane à crête des Fidji", threat: ["L'iguane à crête des Fidji est l'un des rares iguanes capables de modifier sa couleur.", "Brûlis, pâturage, habitat humain et tourisme ont gravement dégradé forêts et plages.", "Rats noirs et chats harets s'attaquent aux adultes comme aux œufs."] },
  seahorse: { name: "Hippocampe du Knysna", threat: ["Le danger de l'hippocampe du Knysna vient surtout de son aire extrêmement restreinte.", "Tout événement majeur dans ses quelques estuaires pourrait affecter l'ensemble de l'espèce.", "Inondations et mauvaise gestion peuvent conduire directement à son extinction."] },
  armadillo: { name: "Tatou à trois bandes du Brésil", threat: ["La carapace du tatou à trois bandes résiste aux prédateurs, mais pas aux activités humaines.", "L'élevage détruit son habitat et l'espèce est aussi chassée pour sa viande.", "Malgré son rôle de mascotte en 2014, environ 3 % seulement de son aire est protégé."] },
  sloth: { name: "Paresseux nain à trois doigts", threat: ["Le paresseux nain vit uniquement sur une île protégée et inhabitée du Panama.", "Les visiteurs et les projets touristiques menacent néanmoins sa mangrove.", "Sa notoriété attire aussi des personnes qui le capturent pour la captivité."] },
  kakapo: { name: "Kakapo", threat: ["Le kakapo a évolué isolément en Nouvelle-Zélande, sans vol ni défenses contre les prédateurs.", "La chasse puis l'introduction d'espèces étrangères ont réduit sa population à un niveau extrême.", "Un vaste programme de sauvegarde permet une lente remontée, mais le risque reste majeur."] },
  echidna: { name: "Échidné à long nez", threat: ["L'échidné à long nez appartient à l'une des plus anciennes lignées de mammifères.", "Il est chassé pour sa viande et perd son habitat dans les zones densément peuplées.", "Un projet de mine de nickel près d'une population importante ajoute une nouvelle menace."] },
  penguin: { name: "Manchot du Cap", threat: ["Autrefois abondant, le manchot du Cap a décliné très rapidement au cours du siècle dernier.", "Climat, marées noires, collecte des œufs et pêche intensive agissent ensemble.", "Une seule marée noire en 2000 a touché près de 40 % de la population mondiale."] },
  damselfly: { name: "Agrion rouge de Grèce", threat: ["Cet agrion coloré ne subsiste que dans quelques ruisseaux.", "Changement climatique, mauvaise gestion et tourisme rendent cet habitat minuscule très fragile.", "Pollution, bétonnage et sécheresses peuvent assécher complètement les cours d'eau."] },
  bear: { name: "Ours malais", threat: ["L'ours malais au collier clair pourrait avoir un avenir bien plus court qu'il ne devrait.", "Chasse, incendies, développement et exploitation forestière détruisent son habitat.", "La chasse est illégale mais peu contrôlée; certaines populations ont diminué de moitié en deux décennies."] },
  parrotfish: { name: "Poisson-perroquet arc-en-ciel", threat: ["Sa grande taille et ses couleurs font du poisson-perroquet arc-en-ciel une cible de la surpêche.", "Il fréquente les eaux peu profondes et son habitat a fortement reculé en 25 ans.", "La dégradation des récifs coralliens réduit encore nourriture et abris."] },
  camel: { name: "Chameau de Bactriane", threat: ["Au rythme actuel, 25 à 30 chameaux de Bactriane sauvages disparaissent chaque année.", "Trois décennies de chasse et la prédation par les loups ont fortement réduit les effectifs.", "Mines et infrastructures détruisent l'aire chinoise; la Mongolie pourrait perdre 84 % de sa population d'ici 2033."] },
  butterfly: { name: "Ornithoptère de Wallace", threat: ["Le papillon nommé en hommage à Wallace perd rapidement sa forêt.", "Dans les Moluques, l'exploitation commerciale détruit encore les forêts de basse altitude.", "Les insecticides utilisés contre les moustiques affectent aussi ce grand papillon."] },
  ostrich: { name: "Autruche de Somalie", threat: ["Reconnue comme espèce distincte seulement en 2014, l'autruche de Somalie subit fortement les activités humaines.", "Ses œufs sont exploités pour fabriquer récipients, ornements et objets religieux.", "Chasse, commerce des plumes, poursuite et perte d'habitat assombrissent son avenir."] },
  panda: { name: "Panda roux", threat: ["Le panda roux est surtout menacé par la disparition de son habitat, puis par le braconnage.", "La croissance humaine transforme les forêts en logements, cultures et infrastructures.", "Captures accidentelles, fourrure et consanguinité fragilisent encore les populations."] },
  tapir: { name: "Tapir malais", threat: ["Cet animal au museau singulier est une nouvelle victime de la déforestation et de la chasse.", "De vastes zones restent sans contrôle; à Sumatra, l'exploitation illégale et la perte de forêt continuent.", "La raréfaction des autres gibiers augmente désormais la pression de chasse sur le tapir."] },
  sifaka: { name: "Propithèque à diadème", threat: ["Ce propithèque en danger critique est chassé pour sa viande et perd surtout sa forêt tropicale.", "Les parcs éloignés des autorités restent vulnérables aux empiètements non contrôlés.", "Sa fourrure est vendue et sa viande consommée."] },
  lynx: { name: "Lynx pardelle", threat: ["Le lynx pardelle est l'un des félins les plus rares au monde.", "L'effondrement des populations de lapins lui a retiré sa principale ressource alimentaire.", "Un virus introduit pour contrôler les nuisibles a eu des conséquences désastreuses sur l'espèce."] },
  rhino: { name: "Rhinocéros de Sumatra", threat: ["Autrefois répandu en Asie du Sud-Est, le rhinocéros de Sumatra est aujourd'hui en danger critique.", "La forte valeur de sa corne et de prétendus usages médicinaux entretiennent le braconnage.", "Déforestation et consanguinité aggravent la situation des derniers groupes."] },
  peccary: { name: "Pécari du Chaco", threat: ["Le pécari du Chaco affronte plusieurs menaces, dont la chasse est la plus importante.", "Certaines régions argentines ont perdu 33 % de leur forêt en quinze ans; l'espèce disparaît lorsque la couverture devient insuffisante.", "Une maladie encore mal comprise affaiblit aussi les populations depuis des décennies."] },
  okapi: { name: "Okapi", threat: ["L'okapi, qui évoque à la fois zèbre et girafe, souffre de la perte d'habitat et du braconnage.", "Exploitation forestière et installation humaine provoquent un déclin continu depuis les années 1990.", "La protection au Congo et le projet de conservation de l'okapi illustrent l'urgence."] },
  loris: { name: "Loris lent de Java", threat: ["Le loris lent de Java est depuis longtemps surexploité par l'être humain.", "Sa lenteur facilite sa capture pour de prétendus pouvoirs médicinaux ou magiques.", "Commerce des animaux exotiques et empiètement humain le poussent vers l'extinction."] },
  hirola: { name: "Hirola", threat: ["La disparition du hirola serait la première extinction moderne d'un mammifère africain.", "Prédation, compétition, braconnage, peste bovine et tuberculose réduisent ses effectifs.", "Un nouveau sanctuaire offre une protection et un fragile espoir."] },
  drill: { name: "Drill", threat: ["Avec moins de 220 km² d'aire, le drill est l'un des primates africains les plus prioritaires.", "Développement humain, perte d'habitat et chasse illégale réduisent ses effectifs depuis des décennies.", "Il resterait environ 3 000 individus, et au maximum 8 000."] },
};

const STATISTIC_TITLES: Record<string, { zh: string; fr: string }> = {
  "Verified conservation update": { zh: "权威保护动态", fr: "Mise a jour verifiee" },
  "W. Kalimantan Killings": { zh: "西加里曼丹捕杀", fr: "Mortalité au Kalimantan occidental" },
  "Habitat Loss 00-12": { zh: "2000-2012 栖息地损失", fr: "Perte d'habitat 2000-2012" },
  "Population by Studies": { zh: "研究估算种群", fr: "Population selon les études" },
  "Population Trajectory": { zh: "种群变化轨迹", fr: "Trajectoire de population" },
  "Yearly Decline": { zh: "年度下降", fr: "Déclin annuel" },
  Population: { zh: "种群数量", fr: "Population" },
  "Re-introduced to wild": { zh: "野外重引入", fr: "Réintroduits dans la nature" },
  "Current population": { zh: "当前种群", fr: "Population actuelle" },
  "(all) frogs status intensity": { zh: "蛙类保护等级变化", fr: "Évolution du statut des grenouilles" },
  Size: { zh: "体型", fr: "Taille" },
  "World Population": { zh: "全球种群", fr: "Population mondiale" },
  "Estimated nests found on Texas Coast": { zh: "得州海岸巢穴估算", fr: "Nids estimés sur la côte du Texas" },
  "Females 1947": { zh: "1947 年雌性数量", fr: "Femelles en 1947" },
  "Current Females": { zh: "当前繁殖雌性", fr: "Femelles actuelles" },
  "Population in the Wild": { zh: "野外种群", fr: "Population sauvage" },
  "Conservation Status Intensity Trend": { zh: "保护等级趋势", fr: "Évolution du statut de conservation" },
  "Captive Populations by location 2004-6": { zh: "2004-06 各地圈养种群", fr: "Populations captives par site 2004-06" },
  "First discovered": { zh: "首次发现", fr: "Première découverte" },
  "Population in Yadua Taba": { zh: "亚杜阿塔巴种群", fr: "Population de Yadua Taba" },
  "Decline in Swartvlei": { zh: "斯瓦特弗莱下降", fr: "Déclin à Swartvlei" },
  "Decline in Knysna": { zh: "克尼斯纳下降", fr: "Déclin à Knysna" },
  "Population Decline": { zh: "种群下降", fr: "Déclin de population" },
  "Population & Projection Estimates": { zh: "种群与预测估算", fr: "Population et projections" },
  "Habitat Size (hectares)": { zh: "栖息地面积（公顷）", fr: "Surface d'habitat (hectares)" },
  "Population of Kakapo": { zh: "鸮鹦鹉种群", fr: "Population de kakapos" },
  "Specimens Recorded": { zh: "记录个体", fr: "Spécimens recensés" },
  "Estimated Breeding Pairs": { zh: "繁殖对估算", fr: "Couples reproducteurs estimés" },
  "Estimated Breeding Pairs in South Africa": { zh: "南非繁殖对估算", fr: "Couples reproducteurs estimés en Afrique du Sud" },
  "Projected Decline": { zh: "预计下降", fr: "Déclin prévu" },
  Length: { zh: "体长", fr: "Longueur" },
  "Length of Tongue": { zh: "舌长", fr: "Longueur de la langue" },
  "Habitat Decline": { zh: "栖息地下降", fr: "Déclin de l'habitat" },
  "Catching Trend": { zh: "捕捞趋势", fr: "Tendance des captures" },
  Wingspan: { zh: "翼展", fr: "Envergure" },
  "Species Distinction": { zh: "独立物种认定", fr: "Reconnaissance de l'espèce" },
  "Estimated Population": { zh: "估算种群", fr: "Population estimée" },
  "Decline in last 50 years": { zh: "过去 50 年下降", fr: "Déclin sur 50 ans" },
  "Population in Malaysia": { zh: "马来西亚种群", fr: "Population en Malaisie" },
  "Decline in Sumatra": { zh: "苏门答腊下降", fr: "Déclin à Sumatra" },
  "Future Decline": { zh: "未来下降", fr: "Déclin futur" },
  "Population in Malaya": { zh: "马来半岛种群", fr: "Population en Malaisie péninsulaire" },
  "Population Ages": { zh: "种群年龄结构", fr: "Âge de la population" },
  "Sighting Reports (Trans-Chaco Highway)": { zh: "跨查科公路目击记录", fr: "Observations sur la route Trans-Chaco" },
  "Paraguay Population": { zh: "巴拉圭种群", fr: "Population au Paraguay" },
  "Current Population": { zh: "当前种群", fr: "Population actuelle" },
  "Decline 1995-2007": { zh: "1995-2007 下降", fr: "Déclin 1995-2007" },
  "Decline 1998-2012": { zh: "1998-2012 下降", fr: "Déclin 1998-2012" },
  "Population decline": { zh: "种群下降", fr: "Déclin de population" },
  "Habitat loss": { zh: "栖息地损失", fr: "Perte d'habitat" },
  "Kenya Population": { zh: "肯尼亚种群", fr: "Population au Kenya" },
  "1983-85 Decline": { zh: "1983-85 年下降", fr: "Déclin 1983-85" },
};

const STATISTIC_NOTES: Record<string, { zh: string; fr: string }> = {
  "Average length of body": { zh: "身体平均长度", fr: "Longueur moyenne du corps" },
  "Average length of tongue": { zh: "舌头平均长度", fr: "Longueur moyenne de la langue" },
  "Average wingspan": { zh: "平均翼展", fr: "Envergure moyenne" },
  "Breeding females existing": { zh: "现存繁殖雌性数量", fr: "Femelles reproductrices existantes" },
  "Current estimated population": { zh: "当前估计种群数量", fr: "Population actuelle estimée" },
  "Date first discovered": { zh: "首次发现日期", fr: "Date de la première découverte" },
  "Decline 1995-2007": { zh: "1995 至 2007 年下降幅度", fr: "Déclin entre 1995 et 2007" },
  "Decline 1998-2012": { zh: "1998 至 2012 年下降幅度", fr: "Déclin entre 1998 et 2012" },
  "Decline between '83-85": { zh: "1983 至 1985 年下降幅度", fr: "Déclin entre 1983 et 1985" },
  "Decline in catches since 2003": { zh: "自 2003 年以来捕获量下降", fr: "Baisse des captures depuis 2003" },
  "Decline in Knysna estuary 2000-1": { zh: "2000 至 2001 年克尼斯纳河口下降幅度", fr: "Déclin dans l'estuaire de Knysna entre 2000 et 2001" },
  "Decline in last 10 years": { zh: "过去 10 年下降幅度", fr: "Déclin au cours des 10 dernières années" },
  "Decline in last 20 years": { zh: "过去 20 年下降幅度", fr: "Déclin au cours des 20 dernières années" },
  "Decline in last 24 years": { zh: "过去 24 年下降幅度", fr: "Déclin au cours des 24 dernières années" },
  "Decline in last 35-40 years": { zh: "过去 35 至 40 年下降幅度", fr: "Déclin au cours des 35 à 40 dernières années" },
  "Decline in next 45-50 years": { zh: "未来 45 至 50 年预计下降幅度", fr: "Déclin prévu au cours des 45 à 50 prochaines années" },
  "Decline in Swartvlei estuary 2002-3": { zh: "2002 至 2003 年斯瓦特弗莱河口下降幅度", fr: "Déclin dans l'estuaire de Swartvlei entre 2002 et 2003" },
  "decline over last 3 decades": { zh: "过去 30 年下降幅度", fr: "Déclin au cours des trois dernières décennies" },
  "Decline since turn of century": { zh: "本世纪以来下降幅度", fr: "Déclin depuis le début du siècle" },
  "Estimated current population": { zh: "当前估计种群数量", fr: "Population actuelle estimée" },
  "Estimated population in Malaysia": { zh: "马来西亚估计种群数量", fr: "Population estimée en Malaisie" },
  "Estimated population in Paraguay": { zh: "巴拉圭估计种群数量", fr: "Population estimée au Paraguay" },
  "estimated Tamarin population": { zh: "狮面狨估计种群数量", fr: "Population estimée de tamarins" },
  "estimated yearly decline": { zh: "年度下降估算", fr: "Déclin annuel estimé" },
  "Highest Area Population (Yadua Taba)": { zh: "亚杜阿塔巴最高区域种群数量", fr: "Population régionale la plus élevée à Yadua Taba" },
  "killed in 2015 in West Kalimantan": { zh: "2015 年在西加里曼丹被捕杀的数量", fr: "Tués en 2015 au Kalimantan occidental" },
  "length of frog (inches)": { zh: "蛙类体长（英寸）", fr: "Longueur de la grenouille en pouces" },
  "Long-beakeds - all critically endangered": { zh: "长喙针鼹类均处于极危状态", fr: "Tous les échidnés à long bec sont en danger critique" },
  "loss of forest in range '00 to '12": { zh: "2000 至 2012 年分布区森林损失", fr: "Perte de forêt dans l'aire entre 2000 et 2012" },
  "min. number females in 1947": { zh: "1947 年雌性个体最低数量", fr: "Nombre minimal de femelles en 1947" },
  "of suitable habitat remaining": { zh: "适宜栖息地剩余比例", fr: "Part de l'habitat favorable restant" },
  "Population decline in last 50 years": { zh: "过去 50 年种群下降幅度", fr: "Déclin de la population au cours des 50 dernières années" },
  "Population decline in next 45 years": { zh: "未来 45 年预计种群下降幅度", fr: "Déclin prévu de la population au cours des 45 prochaines années" },
  "Population decline in Sumatra": { zh: "苏门答腊种群下降幅度", fr: "Déclin de la population à Sumatra" },
  "Projected decline in next decade": { zh: "未来 10 年预计下降幅度", fr: "Déclin prévu au cours de la prochaine décennie" },
  "Recent habitat loss": { zh: "近期栖息地损失", fr: "Perte récente d'habitat" },
  "total current population": { zh: "当前种群总数", fr: "Population actuelle totale" },
  "Year declared distinct species": { zh: "被认定为独立物种的年份", fr: "Année de reconnaissance comme espèce distincte" },
};

const STATISTIC_LABELS: Record<string, { zh: string; fr: string }> = {
  "Observed in 2021": { zh: "2021 年目击下限", fr: "Minimum observe en 2021" },
  "1997 estimate": { zh: "1997 年估算", fr: "Estimation de 1997" },
  "Primary threat": { zh: "首要威胁", fr: "Menace principale" },
  "Managed population": { zh: "受管理种群", fr: "Population geree" },
  "1995 baseline": { zh: "1995 年基线", fr: "Reference de 1995" },
  "IUCN status": { zh: "IUCN 等级", fr: "Statut UICN" },
  Reassessment: { zh: "重新评估", fr: "Reevaluation" },
  "Population trend": { zh: "种群趋势", fr: "Tendance" },
  "Previous status": { zh: "此前等级", fr: "Statut precedent" },
  "Mature individuals 2022": { zh: "2022 年成熟个体", fr: "Individus matures en 2022" },
  "Total population": { zh: "种群总数", fr: "Population totale" },
  "Trade protection": { zh: "贸易保护", fr: "Protection commerciale" },
  "Endemic range": { zh: "特有分布区", fr: "Aire endemique" },
  "Population evidence": { zh: "种群证据", fr: "Donnees de population" },
  "European status": { zh: "欧洲保护等级", fr: "Statut europeen" },
  EX: { zh: "灭绝", fr: "Éteinte" },
  TH: { zh: "受威胁", fr: "Menacée" },
  "Near-TH": { zh: "近危", fr: "Quasi menacée" },
  other: { zh: "其他", fr: "Autres" },
  "Bou Hedma": { zh: "布海德马", fr: "Bou Hedma" },
  Ferlo: { zh: "费洛", fr: "Ferlo" },
  Guembeul: { zh: "甘贝尔", fr: "Guembeul" },
  "O. Dekouk": { zh: "德库克", fr: "O. Dekouk" },
  "S. Massa": { zh: "马萨", fr: "S. Massa" },
  "Sidi-Toui": { zh: "西迪图伊", fr: "Sidi-Toui" },
};

const STATISTIC_STATUS_VALUES: Record<string, { zh: string; en: string; fr: string }> = {
  CR: { zh: "极危", en: "Critically endangered", fr: "En danger critique" },
  "CR EN": { zh: "极危 / 濒危", en: "CR / EN", fr: "CR / EN" },
  Decreasing: { zh: "持续下降", en: "Decreasing", fr: "En diminution" },
  EIW: { zh: "野外灭绝", en: "Extinct in the wild", fr: "Éteinte à l'état sauvage" },
  EN: { zh: "濒危", en: "Endangered", fr: "En danger" },
  "Extinct in the wild": { zh: "野外灭绝", en: "Extinct in the wild", fr: "Éteinte à l'état sauvage" },
  Fewer: { zh: "较少", en: "Fewer", fr: "Moins" },
  Gillnets: { zh: "刺网误捕", en: "Gillnets", fr: "Filets maillants" },
  "CITES Appendix II": { zh: "CITES 附录 II", en: "CITES Appendix II", fr: "Annexe II CITES" },
  Europe: { zh: "欧洲", en: "Europe", fr: "Europe" },
  "Habitat loss and poaching": { zh: "栖息地丧失与盗猎", en: "Habitat loss and poaching", fr: "Perte d'habitat et braconnage" },
  Limited: { zh: "资料有限", en: "Limited", fr: "Limitees" },
  "North Maluku": { zh: "北马鲁古", en: "North Maluku", fr: "Moluques du Nord" },
  "Rainforest loss": { zh: "雨林丧失", en: "Rainforest loss", fr: "Perte de foret tropicale" },
  VU: { zh: "易危", en: "Vulnerable", fr: "Vulnérable" },
};

const STATISTIC_VALUE_PREFIXES = [
  { source: "no more than", zh: "不超过 ", en: "no more than ", fr: "au plus " },
  { source: "less than", zh: "少于 ", en: "less than ", fr: "moins de " },
  { source: "more than", zh: "多于 ", en: "more than ", fr: "plus de " },
  { source: "around", zh: "约 ", en: "around ", fr: "environ " },
  { source: "over", zh: "超过 ", en: "over ", fr: "plus de " },
] as const;

export function getSpeciesNarrative(
  species: SpeciesRecord,
  locale: Locale,
): SpeciesNarrative {
  if (locale === "en") return { name: species.name, threat: species.threat };
  return (locale === "zh" ? ZH_SPECIES : FR_SPECIES)[species.id];
}

export function getStatisticTitle(title: string, locale: Locale) {
  if (locale === "en") return title;
  return STATISTIC_TITLES[title]?.[locale] ?? title;
}

export function getStatisticNote(note: string, locale: Locale) {
  if (locale === "en") return note;
  return STATISTIC_NOTES[note]?.[locale]
    ?? (locale === "zh" ? "原始研究中的关键指标" : "Indicateur clé de l'étude d'origine");
}

export function getStatisticLabel(label: string, locale: Locale) {
  if (locale === "en") return label;
  return STATISTIC_LABELS[label]?.[locale] ?? label;
}

export function getStatisticValue(value: string, locale: Locale) {
  const status = STATISTIC_STATUS_VALUES[value];
  if (status) return status[locale];

  const prefix = STATISTIC_VALUE_PREFIXES.find(({ source }) => value.startsWith(source));
  if (!prefix) return value;

  const numericValue = value.slice(prefix.source.length).trim();
  return `${prefix[locale]}${numericValue}`;
}
