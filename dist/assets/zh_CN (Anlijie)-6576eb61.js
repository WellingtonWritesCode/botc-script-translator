const e=[{id:"acrobat",name:"马戏演员",ability:"每个夜晚*，如果一名与你相邻的存活玩家中毒/醉酒，并且他属于善良阵营，你死亡。",firstNightReminder:null,otherNightReminder:"如果一名与马戏演员相邻的存活玩家中毒/醉酒，并且他属于善良阵营，马戏演员玩家死亡。",remindersGlobal:null,reminders:"意外死亡"},{id:"alchemist",name:"炼金术师",ability:"你拥有一个不在游戏中的爪牙身份的技能。",firstNightReminder:"向炼金术师展示一个不在游戏中的爪牙身份标志，将炼金术师的身份替换为该身份，并放置炼金术师标记。",otherNightReminder:null,remindersGlobal:"炼金术师",reminders:null},{id:"alhadikhia",name:"血肉囚笼",ability:"每个夜晚*，选择三名玩家（他们彼此互知），他们私下决定自己今晚是生是死，如果全部选择了生，他们全部死亡。",firstNightReminder:null,otherNightReminder:"血肉囚笼选择三名玩家。唤醒第一名玩家，点头代表选择生，摇头代表选择死，让他闭上眼睛然后唤醒下一名玩家，如此反复。如果三名玩家都选择生，三名玩家都死亡。",remindersGlobal:null,reminders:"1,2,3,选择死,选择生"},{id:"amnesiac",name:"追忆者",ability:"你不知道你的技能是什么。直到你猜中为止。你每个白天都可以向说书人猜测一次。",firstNightReminder:"决定追忆者的技能。如果追忆者的技能会让他在今晚醒来，唤醒他并执行其技能。",otherNightReminder:"如果追忆者的技能会让他在今晚醒来，唤醒他并执行其技能。",remindersGlobal:null,reminders:"?"},{id:"angel",name:"天使",ability:"对新玩家的死亡负最大责任的玩家可能会遭遇一些不好的事情。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"apprentice",name:"学徒",ability:"在你的第一个夜晚，如果你属于善良阵营，获得一个村民身份的技能。如果你属于邪恶阵营，获得一个爪牙身份的技能。",firstNightReminder:"向学徒展示一个村民或爪牙标记。在魔典中，用那个身份标记代替学徒的身份标记，并在该身份旁放置曾是学徒标记。",otherNightReminder:null,remindersGlobal:null,reminders:"曾是学徒"},{id:"artist",name:"艺术家",ability:"整局游戏限一次，白天，拜访说书人并询问一个“是/否”的问题。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"无技能"},{id:"assassin",name:"刺客",ability:"整局游戏限一次，夜晚*，选择一名玩家，将他杀害。即使你因为某些原因不能这么做。",firstNightReminder:null,otherNightReminder:"刺客指向一名玩家或不使用技能。如果刺客选择了玩家，那名玩家死亡。",remindersGlobal:null,reminders:"无技能,被杀害"},{id:"atheist",name:"无神论者",ability:"说书人可以打破游戏规则。当说书人被处决时，善良阵营获胜，即使你已经死亡。[无邪恶玩家]",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"balloonist",name:"热气球驾驶员",ability:"每个夜晚，你得知一名玩家。你得知的玩家均是不同身份类型。直到你每个身份类型都得知了一次。[+1外来者]",firstNightReminder:"选择一种尚未被气球驾驶员知晓的身份类型，并告知其一个符合该类型的玩家。在该玩家旁边标记已被知晓。",otherNightReminder:"选择一种尚未被气球驾驶员知晓的身份类型，并告知其一个符合该类型的玩家。在该玩家旁边标记已被知晓。如果所有类型均已被知晓或无该种类型，气球驾驶员不会醒来。",remindersGlobal:null,reminders:"知晓外来者,知晓恶魔,知晓旅行者,知晓村民,知晓爪牙"},{id:"barber",name:"理发师",ability:"如果你死亡，恶魔在当晚可以选择两名玩家交换身份。（不可以交换自己以外的其他恶魔）",firstNightReminder:null,otherNightReminder:"如果理发师今天死亡，唤醒恶魔，告知他理发师死了。恶魔可以选择不使用理发师技能，或指向两名玩家，交换这两名玩家的身份标记。然后依次唤醒两名玩家，并向他展示“你是”卡和对应的身份标志，但不告知身份改变的原因。",remindersGlobal:null,reminders:"今晚理发"},{id:"barista",name:"咖啡师",ability:"每个夜晚，选择一名玩家与一项效果，持续到下个黄昏: 1)必定获取正确信息。2)技能生效两次。他知道你选择了什么。",firstNightReminder:"咖啡师指向一名玩家，随后将咖啡师指向的玩家唤醒，告知他咖啡师选择的是什么效果。",otherNightReminder:"咖啡师指向一名玩家，随后将咖啡师指向的玩家唤醒，告知他咖啡师选择的是什么效果。",remindersGlobal:null,reminders:"技能发动两次,清醒&健康"},{id:"baron",name:"男爵",ability:"本局游戏存在额外的外来者。[+2外来者]",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"beggar",name:"乞丐",ability:"你必须使用投票标记才能投票。死亡的玩家可以将自己的投票标记交给你，你得知他的阵营。你不会中毒或醉酒。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"bishop",name:"主教",ability:"只有说书人可以发起提名。每天，都会有至少一名与你阵营不同的玩家被提名。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"提名善良方,提名邪恶方"},{id:"bonecollector",name:"寻骨者",ability:"整局游戏限一次，夜晚*，选择一名死亡的玩家，他恢复他的技能直到下个黄昏。",firstNightReminder:null,otherNightReminder:"寻骨者指向一名死亡玩家或选择不使用技能。放置寻回技能标记作为提示，该玩家当晚可能会因此醒来并使用技能。",remindersGlobal:null,reminders:"寻回技能,无技能"},{id:"boomdandy",name:"炸弹客",ability:"当你被处决时，杀害若干玩家直到剩下3名玩家存活。1分钟后，所有玩家互相投票，票数最多的玩家死亡。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"bountyhunter",name:"赏金猎人",ability:"游戏开始时，你得知一名邪恶玩家。如果该玩家死亡，当晚，你再得知一名其他邪恶玩家。[一位村民加入邪恶阵营]",firstNightReminder:"指向一名邪恶玩家。唤醒加入邪恶阵营的村民告知他已转变为邪恶阵营。",otherNightReminder:"如果之前被知晓的邪恶玩家已经死亡，指向另一名邪恶玩家。",remindersGlobal:null,reminders:"被知晓"},{id:"buddhist",name:"佛祖",ability:"在每一天的前2分钟，老玩家禁止发言。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"bureaucrat",name:"官员",ability:"每个夜晚，选择一名其他玩家，明天他的一票视为三票。",firstNightReminder:"官员指向一名玩家。将三票标记放在那名玩家的身份标志旁。",otherNightReminder:"官员指向一名玩家。将三票标记放在那名玩家的身份标志旁。",remindersGlobal:null,reminders:"三票"},{id:"butcher",name:"刽子手",ability:"每个白天，在第一次处决后，你可以再次发起提名。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"butler",name:"家仆",ability:"每个夜晚，选择一名其他玩家，明天当他投票时，你才能投票。",firstNightReminder:"家仆指向一名玩家。在那名玩家的身份标志旁放置主人标记。",otherNightReminder:"家仆指向一名玩家。在那名玩家的身份标志旁放置主人标记。",remindersGlobal:null,reminders:"主人"},{id:"cannibal",name:"食人族",ability:"你拥有最近被处决而死的玩家的技能。如果该玩家属于邪恶阵营，你中毒直到下一个善良玩家被处决。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"中毒,食髓知味"},{id:"cerenovus",name:"洗脑师",ability:"每个夜晚，选择一名玩家和一个善良身份，明天他将对“他是这个身份”疯狂，如果他不这么做，他可能会被处决。",firstNightReminder:"洗脑师指向一名玩家和一个身份列表上的身份。唤醒那名玩家，告知他被洗脑，以及他被洗脑的身份是什么。如果该玩家下个白天没有对他是该身份疯狂，你可以处决他。",otherNightReminder:"洗脑师指向一名玩家和一个身份列表上的身份。唤醒那名玩家，告知他被洗脑，以及他被洗脑的身份是什么。如果该玩家下个白天没有对他是该身份疯狂，你可以处决他。",remindersGlobal:null,reminders:"被洗脑"},{id:"chambermaid",name:"女佣",ability:"每个夜晚，选择两名其他存活玩家，你得知今晚他们当中有多少名由于自身的技能被唤醒。",firstNightReminder:"女佣指向两名玩家。告知她这些玩家中有几名因为他们的技能在今晚被唤醒。",otherNightReminder:"女佣指向两名玩家。告知她这些玩家中有几名因为他们的技能在今晚被唤醒。",remindersGlobal:null,reminders:null},{id:"chef",name:"厨师",ability:"游戏开始时，你会得知有多少对邪恶玩家为邻座。",firstNightReminder:"唤醒厨师，并告知厨师场上有多少对邪恶玩家为邻座。",otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"choirboy",name:"唱诗班",ability:"如果国王死亡，当晚，你得知恶魔是谁。[+国王]",firstNightReminder:null,otherNightReminder:"如果国王被恶魔杀害, 唤醒唱诗班并指向恶魔玩家。",remindersGlobal:null,reminders:null},{id:"clockmaker",name:"钟表匠",ability:"游戏开始时，你得知恶魔距他最近的爪牙之间的距离。",firstNightReminder:"唤醒钟表匠并告知他恶魔距他最近的爪牙相隔几名玩家。",otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"courtier",name:"侍臣",ability:"整局游戏限一次，夜晚，选择一个身份，如果该身份在场，使对应的玩家醉酒三天三夜。",firstNightReminder:"侍臣不使用技能，或指向身份列表上的一个身份，如果那个身份在场，在对应的玩家的身份标志旁放置醉酒3标记。",otherNightReminder:null,remindersGlobal:null,reminders:"无技能,醉酒1,醉酒2,醉酒3"},{id:"cultleader",name:"秘教领袖",ability:"每个夜晚，你的阵营变得与一名相邻的存活玩家相同。如果所有善良玩家都加入了你的教派，你的阵营获胜。",firstNightReminder:"如果秘教领袖改变了阵营, 给出大拇指朝上的信号代表他属于善良阵营，大拇指朝下代表他属于邪恶阵营。",otherNightReminder:"如果秘教领袖改变了阵营, 给出大拇指朝上的信号代表他属于善良阵营，大拇指朝下代表他属于邪恶阵营。",remindersGlobal:null,reminders:null},{id:"damsel",name:"少女",ability:"爪牙知道你在游戏中。整局游戏限一次，一名爪牙可以公开猜测你是谁，如果他猜对了，你的阵营落败。",firstNightReminder:"唤醒所有爪牙, 向他们展示“这个身份选择了你”卡和少女身份标志。",otherNightReminder:"如果少女被猎人选中, 唤醒少女, 向他们展示“你是”卡和一个不在游戏中的村民身份标志。",remindersGlobal:null,reminders:"爪牙已猜测"},{id:"deusexfiasco",name:"Deus ex Fiasco",ability:'Once per game, the Storyteller will make a "mistake", correct it and publicly admit to it.',firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"Whoops"},{id:"deviant",name:"怪咖",ability:"如果你在白天表现的很搞笑，你不能被流放。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"devilsadvocate",name:"律师",ability:"每个夜晚，选择一名存活玩家(需与上一夜不同)，明天，当他被处决时，他不会死亡。",firstNightReminder:"律师指向一名存活玩家，该玩家下个白天被处决时不会死亡。",otherNightReminder:"律师指向一名与前一晚不同的存活玩家，该玩家下个白天被处决时不会死亡。",remindersGlobal:null,reminders:"不会被处决"},{id:"djinn",name:"神灵",ability:"采用神灵特殊规则，所有玩家都知道这条规则是什么。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"doomsayer",name:"末日使者",ability:"如果有4名以上玩家存活，每名玩家限一次，你可以公开要求说书人杀死一名与他阵营相同的玩家。.",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"dreamer",name:"入梦人",ability:"每个夜晚，选择一名其他玩家，你得知一个善良身份与一个邪恶身份，其中一个是他的真实身份。",firstNightReminder:"入梦人指向一名玩家。向入梦人展示一个善良身份标记和一个邪恶身份标记，其中一个是他指向的玩家的真实身份。",otherNightReminder:"入梦人指向一名玩家。向入梦人展示一个善良身份标记和一个邪恶身份标记，其中一个是他指向的玩家的真实身份。",remindersGlobal:null,reminders:null},{id:"drunk",name:"酒鬼",ability:"你不知道你是酒鬼，你以为你是一个村民身份，但其实你不是。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:"醉酒",reminders:null},{id:"duchess",name:"女伯爵",ability:"每个白天，3名玩家可以来拜访你。当晚*，你告知这些玩家他们之中有几名玩家属于邪恶阵营，一名玩家获取错误信息。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"empath",name:"神使",ability:"每个夜晚，你得知与你相邻的存活玩家中有多少名属于邪恶阵营。",firstNightReminder:"唤醒神使，并告知神使他相邻的存活玩家有多少名属于邪恶阵营。",otherNightReminder:"唤醒神使，并告知神使他相邻的存活玩家有多少名属于邪恶阵营。",remindersGlobal:null,reminders:null},{id:"engineer",name:"工程师",ability:"整局游戏限一次，夜晚，选择一个爪牙或恶魔身份，该身份出现在游戏中。",firstNightReminder:"工程师不发动技能, 或指向身份表格中一个爪牙或恶魔身份。如果工程师选择了一个身份, 将恶魔或爪牙替换为他选择的身份，然后唤醒被改变身份的玩家，并展示“你是”卡片，然后展示工程师选中的身份标记。",otherNightReminder:"工程师不发动技能, 或指向身份表格中一个爪牙或恶魔身份。如果工程师选择了一个身份, 将恶魔或爪牙替换为他选择的身份，然后唤醒被改变身份的玩家，并展示“你是”卡片，然后展示工程师选中的身份标记。",remindersGlobal:null,reminders:"无技能"},{id:"eviltwin",name:"黑白双子",ability:"你与一名对立阵营的玩家互知。如果其中的善良玩家被处决，邪恶阵营获胜。当两个双子均存活时，善良阵营不能获胜。",firstNightReminder:"唤醒黑白双子和他的双胞胎，两人互相确认。展示双方的身份标记给对方查看。",otherNightReminder:null,remindersGlobal:null,reminders:"双胞胎"},{id:"exorcist",name:"驱魔师",ability:"每个夜晚*，选择一名玩家（需与上一夜不同）如果你选中了恶魔，他在今晚不会被唤醒，并得知你是谁。",firstNightReminder:null,otherNightReminder:"驱魔师指向一名和上一夜不同的玩家。如果那名玩家是恶魔，将他唤醒，然后展示驱魔师的身份标志，并指向驱魔师。恶魔今晚不会被唤醒。",remindersGlobal:null,reminders:"被选择"},{id:"fanggu",name:"染魂",ability:"每个夜晚*，选择一名玩家，将他杀害。当染魂第一次杀死外来者时，他变为一个邪恶的染魂，你死亡。[+1外来者]",firstNightReminder:null,otherNightReminder:"染魂指向一名玩家，将他杀害。如果那名玩家是一名外来者且没有其他染魂，染魂代替那名玩家死去。唤醒新的染魂，向他展示“你是”卡和染魂的身份标志并给出向下的大拇指。",remindersGlobal:null,reminders:"已侵染,被杀害"},{id:"farmer",name:"农夫",ability:"当你在夜晚死亡时，一名善良的存活玩家变为农夫。",firstNightReminder:null,otherNightReminder:"如果农夫在今晚死亡, 选择一名其他善良玩家并将他变为农夫. 唤醒他, 展示“你是”卡片与农夫身份。",remindersGlobal:null,reminders:null},{id:"fearmonger",name:"恐惧之灵",ability:"每个夜晚，选择一名玩家，如果你提名并且处决了他，他的阵营落败。当你改变技能目标时，所有玩家都会得知。",firstNightReminder:"恐惧之灵指向一名玩家，在该玩家的身份标志旁放置复仇标记，并宣布一名新的玩家已经被恐惧之灵选中。",otherNightReminder:"恐惧之灵指向一名玩家，在该玩家的身份标志旁放置复仇标记，并宣布一名新的玩家已经被恐惧之灵选中。",remindersGlobal:null,reminders:"复仇"},{id:"fibbin",name:"菲宾",ability:"整局游戏限一次，使一名善良阵营的玩家可能获取错误信息。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"fiddler",name:"提琴手",ability:"整局游戏限一次，恶魔秘密选择一名对立阵营的玩家，所有玩家投票选择其中一名玩家获胜。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"fisherman",name:"渔夫",ability:"整局游戏限一次，白天，让说书人给予你一条可以帮助你的阵营获胜的建议。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"无技能"},{id:"flowergirl",name:"花艺师",ability:"每个夜晚*，你得知恶魔在白天是否进行了投票。",firstNightReminder:null,otherNightReminder:"唤醒花艺师，并告知花艺师白天恶魔是否投票。当恶魔投票时，标记恶魔已投票，否则在黄昏时标记恶魔未投票。",remindersGlobal:null,reminders:"恶魔已投票,恶魔未投票"},{id:"fool",name:"小丑",ability:"当你第一次死亡时，你不会死亡。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"无技能"},{id:"fortuneteller",name:"预言家",ability:"每个夜晚，你选择两名玩家，并得知他们两人中是否有恶魔。有一名善良玩家，你的技能始终会把他误认为恶魔。",firstNightReminder:"预言家指向两名玩家，告知他这两名玩家中是否有恶魔。",otherNightReminder:"预言家指向两名玩家，告知他这两名玩家中是否有恶魔。",remindersGlobal:null,reminders:"错误信息"},{id:"gambler",name:"赌徒",ability:"每个夜晚*，选择一名玩家并猜测他的身份，当你猜测错误时，你死亡。",firstNightReminder:null,otherNightReminder:"赌徒指向一名玩家和一个身份列表上的身份。如果那名玩家不是该身份，赌徒死亡。",remindersGlobal:null,reminders:"死亡"},{id:"gangster",name:"歹徒",ability:"每个白天，你可以杀害一名你两侧最近的活着的玩家，但需要另一侧的玩家同意。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"general",name:"上将",ability:"每个夜晚，你得知说书人认为当前哪个阵营优势更大。",firstNightReminder:"如果你觉得善良方占据优势，向上将展示向上的大拇指, 如果你觉得邪恶方占据优势，向上将展示向下的大拇指，如果你觉得双方均势，指向侧面。",otherNightReminder:"如果你觉得善良方占据优势，向上将展示向上的大拇指, 如果你觉得邪恶方占据优势，向上将展示向下的大拇指，如果你觉得双方均势，指向侧面。",remindersGlobal:null,reminders:null},{id:"goblin",name:"哥布林",ability:"白天，你可以公开声称自己是哥布林，如果你在当天因为提名而被处决，你的阵营获胜。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"已声明"},{id:"godfather",name:"教父",ability:"游戏开始时，你得知本局存在的外来者身份。当一名外来者在白天死亡时，当晚，你选择一名玩家，将他杀害。[±1外来者]",firstNightReminder:"唤醒教父并向他展示所有在场的外来者身份标记。",otherNightReminder:"如果上个白天有外来者死亡，唤醒教父并让其选择一名玩家，那名玩家被杀害。",remindersGlobal:null,reminders:"死亡,白天死亡"},{id:"golem",name:"魔像",ability:"整局游戏你只能提名一次。被你提名的玩家如果不是恶魔，他死亡。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"不可提名"},{id:"goon",name:"暴徒",ability:"每个夜晚，当第一次有玩家选择你作为技能目标时，他醉酒直到下个黄昏。然后你加入他的阵营。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"醉酒"},{id:"gossip",name:"散谣者",ability:"每个白天，你可以做出一项公开声明。如果声明正确，一名玩家在今晚死亡。",firstNightReminder:null,otherNightReminder:"如果散谣者白天的公开声明正确，选择一名今晚未被保护的玩家，那名玩家死亡。",remindersGlobal:null,reminders:"死亡"},{id:"grandmother",name:"祖母",ability:"游戏开始时，你得知一名善良玩家与他的身份，当恶魔杀害他时，你死亡。",firstNightReminder:"唤醒祖母并展示一个善良身份标志，然后指向该身份对应的玩家。",otherNightReminder:"当孙子被恶魔杀害时，祖母死亡。",remindersGlobal:null,reminders:"孙子"},{id:"gunslinger",name:"枪手",ability:"每个白天，当第一次投票结束后，你可以选择一名投票的玩家，那名玩家死亡。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"harlot",name:"妓女",ability:"每个夜晚*，选择一名存活玩家，如果他同意，你得知他的身份，但是你们可能死亡。",firstNightReminder:null,otherNightReminder:"妓女指向一名玩家，将他唤醒，那名玩家通过点头摇头选择同意或拒绝。如果他同意，将他的身份标记展示给妓女看。然后说书人可以决定两名玩家是否会一起死去。",remindersGlobal:null,reminders:"死亡"},{id:"harpy",name:"Harpy",ability:"Each night, choose 2 players: tomorrow, the 1st player is mad that the 2nd is evil, or both might die.",firstNightReminder:"Wake the Harpy; they point at one player, then another. Wake the 1st player the Harpy pointed to, show them the 'This character has selected you' card, show them the Harpy token, then point at the 2nd player the Harpy pointed to.",otherNightReminder:"Wake the Harpy; they point at one player, then another. Wake the 1st player the Harpy pointed to, show them the 'This character has selected you' card, show them the Harpy token, then point at the 2nd player the Harpy pointed to.",remindersGlobal:null,reminders:"Mad, 2nd"},{id:"hellslibrarian",name:"地狱图书管理员",ability:"当说书人要求安静时，还在说话的玩家可能会遭遇一些不好的事情。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"heretic",name:"异教徒",ability:"对调双方的胜利条件，即使你已经死亡。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"highpriestess",name:"High Priestess",ability:"Each night, learn which player the Storyteller believes you should talk to most.",firstNightReminder:"Point to a player.",otherNightReminder:"Point to a player.",remindersGlobal:null,reminders:null},{id:"huntsman",name:"猎人",ability:"整局游戏限一次，夜晚，选择一名存活玩家，如果她是少女，将她变为一名不在游戏中的村民。[+少女]",firstNightReminder:"猎人不发动技能，或指向一名玩家。 如果他指向了少女， 展示“你是”卡片与一个不在游戏中的村民身份。",otherNightReminder:"猎人不发动技能，或指向一名玩家。 如果他指向了少女， 展示“你是”卡片与一个不在游戏中的村民身份。",remindersGlobal:null,reminders:"无技能"},{id:"imp",name:"小恶魔",ability:"每个夜晚*，选择一名玩家，将他杀害。当你杀害自己时，一名爪牙变为新的小恶魔。",firstNightReminder:null,otherNightReminder:"小恶魔指向一名玩家，那名玩家被杀害。如果小恶魔指向自己，将一名爪牙变为小恶魔，并唤醒他，然后向他展示“你是”卡和小恶魔的身份标志。",remindersGlobal:null,reminders:"被杀害"},{id:"innkeeper",name:"旅店老板",ability:"每个夜晚*，选择两名玩家，他们在今晚不会死亡，但其中一名会醉酒，直到下个黄昏。",firstNightReminder:null,otherNightReminder:"移除先前的被保护标记和醉酒标记。旅店老板指向两名玩家。为那两名玩家放置被保护标记，其中一名放置醉酒标记。",remindersGlobal:null,reminders:"被保护,醉酒"},{id:"investigator",name:"调查员",ability:"游戏开始时，你会得知两名玩家其中一名的爪牙身份。",firstNightReminder:"唤醒调查员，并向调查员展示一个在场的爪牙身份标志。然后指向两名玩家，其中一名是该身份。",otherNightReminder:null,remindersGlobal:null,reminders:"对应爪牙,非对应"},{id:"judge",name:"法官",ability:"整局游戏限一次，在一次其他玩家发起的提名投票结束后，你可以强制执行处决或否决已经通过的投票。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"无技能"},{id:"juggler",name:"杂技演员",ability:"第一天白天，公开猜测至多五名玩家的身份，当晚，你将会得知猜对了多少个。",firstNightReminder:null,otherNightReminder:"如果杂耍演员在第一天猜测了身份，告知他放置的正确标记的总数量。",remindersGlobal:null,reminders:"正确"},{id:"king",name:"国王",ability:"每个夜晚，如果死亡玩家数超过了存活玩家数，你得知一个存活的身份。恶魔知道你是谁。",firstNightReminder:"唤醒恶魔并向他展示“这个角色选中了你”卡，然后展示国王的身份标志并指向国王玩家。",otherNightReminder:"如果死亡的玩家数超过了存活的玩家数, 展示一名存活玩家的身份标志。",remindersGlobal:null,reminders:null},{id:"klutz",name:"笨蛋",ability:"当你得知你死亡时，公开选择一名活着的玩家，如果他属于邪恶阵营，你的阵营落败。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"knight",name:"Knight",ability:"You start knowing 2 players that are not the Demon.",firstNightReminder:"Point to 2 non-Demon players.",otherNightReminder:null,remindersGlobal:null,reminders:"Know, Know"},{id:"legion",name:"军团",ability:"每个夜晚*，可能有一名玩家被杀害。如果只有邪恶玩家投票，处决会失败。你同时被视为爪牙。[半数以上玩家为军团]",firstNightReminder:null,otherNightReminder:"说书人可以选择一名玩家，将他杀害",remindersGlobal:null,reminders:"将死之人,被杀害"},{id:"leviathan",name:"利维坦",ability:"如果超过一名善良阵营玩家被处决，邪恶阵营获胜。所有玩家都知道你在游戏中。第五个白天结束时，邪恶阵营获胜。",firstNightReminder:"放置第一天标记。告知玩家利维坦在游戏中，现在是第一天。",otherNightReminder:"将天数标记更换为下一天。",remindersGlobal:null,reminders:"善良玩家被处决,第一天,第三天,第二天,第五天,第四天"},{id:"librarian",name:"图书馆员",ability:"游戏开始时，你会得知两名玩家其中一名的外来者身份，或得知本局没有外来者。",firstNightReminder:"唤醒图书馆员，并向图书馆员展示一个在场的外来者身份标志。然后指向两名玩家，其中一名是该身份。",otherNightReminder:null,remindersGlobal:null,reminders:"对应外来者,非对应"},{id:"lilmonsta",name:"罪孽之种",ability:"每个夜晚，爪牙们选择谁来保管罪孽之种，该玩家被视为恶魔。每个夜晚*，一名玩家被杀害。[+1爪牙]",firstNightReminder:"同时唤醒所有爪牙，让他们通过指向来投票决定谁来保管罪孽之种。",otherNightReminder:"同时唤醒所有爪牙，让他们通过指向来投票决定谁来保管罪孽之种。说书人选择一名玩家杀害。",remindersGlobal:"恶魔寄生,被杀害",reminders:null},{id:"lleech",name:"噬脑魔",ability:"每个夜晚*，选择一名玩家，将他杀害。游戏开始时，你选择一名活着的玩家，他中毒。当他死亡时，你死亡，他存活时，你不能死亡。",firstNightReminder:"噬脑魔指向一名玩家，在他旁边放置中毒&宿主标记。",otherNightReminder:"噬脑魔指向一名玩家将他杀害。",remindersGlobal:null,reminders:"中毒&宿主,被杀害"},{id:"lunatic",name:"狂人",ability:"你以为你是恶魔，但其实你不是。恶魔知道你是谁，以及你在每晚选择了谁。",firstNightReminder:"当多于7名玩家时，告知狂人等同于本局爪牙数的爪牙，向狂人展示3个善良身份标记。如果狂人收到的恶魔身份在第一夜就会被唤醒，允许狂人执行行动，并放置攻击标记。唤醒恶魔，告知他是真的恶魔，并告知他谁是狂人。如果狂人攻击了一名玩家，告知恶魔狂人攻击了哪些玩家，然后移除这些标记。",otherNightReminder:"允许狂人执行恶魔行动，放置攻击标记。如果狂人攻击了一名玩家，告知恶魔狂人攻击了哪些玩家，然后移除这些标记。",remindersGlobal:null,reminders:"攻击1,攻击2,攻击3"},{id:"lycanthrope",name:"狼人",ability:"每个夜晚*，选择一名存活玩家，如果他属于善良阵营，他死亡，并且今晚不会再有其他玩家死亡。",firstNightReminder:null,otherNightReminder:"狼人指向一名玩家，如果该玩家属于善良阵营，他死亡，并且今晚不会再有其他玩家死亡。",remindersGlobal:null,reminders:"狼人杀害"},{id:"magician",name:"魔术师",ability:"恶魔会把你误认为爪牙，爪牙们会把你误认为恶魔。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"marionette",name:"傀儡",ability:"你认为你是一个善良身份，但其实你不是。恶魔知道你是谁。[傀儡与恶魔相邻]",firstNightReminder:"选择一名与恶魔相邻的善良玩家并放置傀儡的提示标志，唤醒恶魔并告知他谁是傀儡",otherNightReminder:null,remindersGlobal:"傀儡",reminders:null},{id:"mastermind",name:"主谋",ability:"当恶魔死于处决导致游戏结束时，再多进行一天游戏。当这一天有玩家被处决时，该玩家的阵营落败。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"mathematician",name:"数学家",ability:"每个夜晚，你得知有多少玩家的技能因为其他玩家的技能未正常生效。(从拂晓开始算起)",firstNightReminder:"唤醒数学家并告知有几名玩家的技能受其他玩家影响而未正常生效。",otherNightReminder:"唤醒数学家并告知有几名玩家的技能受其他玩家影响而未正常生效。",remindersGlobal:null,reminders:"未正常生效"},{id:"matron",name:"宿管",ability:"每天限三次，令两名玩家交换位置。玩家们不允许离开座位私聊。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"mayor",name:"镇长",ability:"当剩下三名玩家存活，且当天没有玩家被处决时，你的阵营获胜。当你在夜晚死亡时，可能有其他玩家代替你死亡。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"mezepheles",name:"言灵师",ability:"游戏开始时，说书人告知你一个词语。第一名说出该词语的善良玩家，在当晚加入邪恶阵营。",firstNightReminder:"向言灵师展示秘密词语。",otherNightReminder:"唤醒第一名说出言灵师秘密词语的善良玩家，向他展示“你是”卡，并给出大拇指朝下的手势。",remindersGlobal:null,reminders:"无技能,融入邪恶"},{id:"minstrel",name:"吟游诗人",ability:"当爪牙被处决时，除了旅行者之外的所有玩家醉酒到明天的黄昏。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"所有人醉酒"},{id:"monk",name:"僧侣",ability:"每个夜晚*，选择一名其他玩家，使他在今晚免受恶魔侵害。",firstNightReminder:null,otherNightReminder:"僧侣指向一名其他玩家。标记那名玩家为被保护状态。",remindersGlobal:null,reminders:"被保护"},{id:"moonchild",name:"月之子",ability:"当你得知你死亡时，公开选择一名活着的玩家，如果他属于善良阵营，今晚，他死亡。",firstNightReminder:null,otherNightReminder:"如果月之子今天使用了他的技能选择了一名玩家，并且该玩家属于善良阵营，他死亡。",remindersGlobal:null,reminders:"死亡"},{id:"mutant",name:"变种人",ability:"当你对“我是外来者”疯狂时，你可能会被处决。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"nightwatchman",name:"守夜人",ability:"整局游戏限一次，夜晚，选择一名玩家，那名玩家得知你是谁。",firstNightReminder:"守夜人可以指向一名玩家，唤醒那名玩家, 并向他展示“这个角色选中了你”卡，然后展示守夜人的身份标志并指向守夜人玩家。",otherNightReminder:"守夜人可以指向一名玩家，唤醒那名玩家, 并向他展示“这个角色选中了你”卡，然后展示守夜人的身份标志并指向守夜人玩家。",remindersGlobal:null,reminders:"无技能"},{id:"noble",name:"贵族",ability:"游戏开始时，你得知三名玩家，他们之中有且只有一名属于邪恶阵营。",firstNightReminder:"唤醒贵族并指向三名玩家，其中有且仅有一名是邪恶玩家，并为这三名玩家放置被知晓标记。",otherNightReminder:null,remindersGlobal:null,reminders:"被知晓"},{id:"nodashii",name:"蚀魂魔",ability:"每个夜晚*，选择一名玩家，将他杀害。与你相邻的村民中毒。",firstNightReminder:null,otherNightReminder:"蚀魂魔指向一名玩家，将他杀害。",remindersGlobal:null,reminders:"中毒,被杀害"},{id:"oracle",name:"祭司",ability:"每个夜晚*，你得知死去的玩家中有多少名属于邪恶阵营。",firstNightReminder:null,otherNightReminder:"唤醒祭司，并告知祭司有多少名死亡的邪恶玩家。",remindersGlobal:null,reminders:null},{id:"organgrinder",name:"Organ Grinder",ability:"All players keep their eyes closed when voting & the vote tally is secret. Votes for you only count if you vote.",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"About to die"},{id:"pacifist",name:"调停者",ability:"善良阵营的玩家被处决时，可能不会死亡。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"philosopher",name:"哲学家",ability:"整局游戏限一次，夜晚，选择一个善良身份，获取他的技能，如果有玩家为该身份，他醉酒。",firstNightReminder:"哲学家指向身份列表的一个身份或不使用技能。如果选择了身份，将一个不在场的身份与哲学家替换，或在在场的对应身份旁放置醉酒标记。",otherNightReminder:"哲学家指向身份列表的一个身份或不使用技能。如果选择了身份，将一个不在场的身份与哲学家替换，或在在场的对应身份旁放置醉酒标记。",remindersGlobal:"曾是哲学家,醉酒",reminders:null},{id:"pithag",name:"魔女",ability:"每个夜晚*，选择一名玩家和一个身份，他变为该身份(如不存在)。如果你创造了一个恶魔，当晚所有恶魔将随机行动。",firstNightReminder:null,otherNightReminder:"魔女指向一名玩家和一个身份表格上的身份。如果该身份不在场，唤醒那名玩家并向他展示“你是”卡和这个身份标志，但不告知他原因，并将他的身份标记替换。如果那个身份在场，则无事发生。",remindersGlobal:null,reminders:null},{id:"pixie",name:"精灵",ability:"游戏开始时，你得知一个本局存在的村民身份，当你对“我是该身份”疯狂时，你将在他死亡时获得他的技能。",firstNightReminder:"向精灵展示一个在游戏中的村民身份标志。",otherNightReminder:null,remindersGlobal:null,reminders:"疯狂,获取技能"},{id:"po",name:"“迷迭香”",ability:"每个夜晚*，你可以选择一名玩家，将他杀害。如果你上次放弃了选择，你这次改为选择三名。",firstNightReminder:null,otherNightReminder:"“迷迭香”指向一名玩家或不使用技能，如果“迷迭香”指向了一名玩家，将他杀害。如果“迷迭香”上一次放弃了选择，改为选择三名玩家。",remindersGlobal:null,reminders:"三次杀害,被杀害"},{id:"poisoner",name:"毒师",ability:"每个夜晚，选择一名玩家，他中毒，直到下个黄昏。",firstNightReminder:"毒师指向一名玩家。在那名玩家的身份标志旁放置中毒标记。",otherNightReminder:"上一名中毒玩家恢复健康。毒师指向一名玩家。在那名玩家的身份标志旁放置中毒标记。",remindersGlobal:null,reminders:"中毒"},{id:"politician",name:"政治家",ability:"如果你是对你的阵营落败负最大责任的人，你改变阵营并获胜，即使你已经死亡。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"poppygrower",name:"罂粟农",ability:"恶魔与爪牙们不互知。如果你死亡，他们在当晚得知彼此是谁。",firstNightReminder:"不要让恶魔和爪牙们之间彼此互知。",otherNightReminder:"如果罂粟农已经死亡，使恶魔和爪牙们彼此之间互相知晓。",remindersGlobal:null,reminders:"邪恶苏醒"},{id:"preacher",name:"传教士",ability:"每个夜晚，选择一名玩家，当你选中了爪牙时，他会得知自己被选中。被你选中的爪牙失去技能。",firstNightReminder:"传教士选择一名玩家，如果选中了爪牙, 唤醒爪牙并向他展示“这个角色选中了你”卡，然后展示传教士的身份标志。",otherNightReminder:"传教士选择一名玩家，如果选中了爪牙, 唤醒爪牙并向他展示“这个角色选中了你”卡，然后展示传教士的身份标志。",remindersGlobal:null,reminders:"布道"},{id:"professor",name:"教授",ability:"整局游戏限一次，夜晚*，选择一名死亡的玩家，如果他是村民，将他复活。",firstNightReminder:null,otherNightReminder:"教授不使用技能或指向一名玩家。如果那名玩家在教授视角内已经死亡，实际上也已死亡，并且他是一名村民，那名玩家被复活。",remindersGlobal:null,reminders:"复活,无技能"},{id:"psychopath",name:"杀人狂",ability:"每个白天，在提名前，你可以公开选择一名玩家，将他杀害。当你被处决时，进行一次石头剪刀布，只有输了你才会被处决。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"pukka",name:"疫魔",ability:"每个夜晚，选择一名玩家，他中毒。先前已经中毒的玩家死亡并恢复健康。",firstNightReminder:"疫魔指向一名玩家，该玩家中毒。",otherNightReminder:"疫魔指向一名玩家，该玩家中毒。先前已中毒的玩家被杀害。",remindersGlobal:null,reminders:"中毒,被杀害"},{id:"puzzlemaster",name:"解谜大师",ability:"一名玩家醉酒，即使你死了。整局游戏限一次，猜测他是谁，如果你猜对了，得知恶魔是谁，否则得知错误信息。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"已解密,醉酒"},{id:"ravenkeeper",name:"养鸦人",ability:"当你在夜晚死亡时，选择一名玩家，得知他的身份。",firstNightReminder:null,otherNightReminder:"当养鸦人在夜晚死亡时，唤醒他并让他指向一名玩家。展示那名玩家的身份标记。",remindersGlobal:null,reminders:null},{id:"recluse",name:"隐士",ability:"你可能被视为一名邪恶的爪牙或恶魔。即使你已经死亡。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"revolutionary",name:"革命家",ability:"指定两名阵营相同且彼此相邻的玩家。整局游戏限一次，他们可能被视为其他身份/阵营。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"riot",name:"暴乱",ability:"被提名的玩家死亡，但是可以立刻再度发起提名（第三天必须这么做），第三个白天结束时，邪恶阵营获胜。[所有的爪牙变为暴乱]",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"sage",name:"贤者",ability:"当恶魔杀害你时，你得知两名玩家，其中一名是恶魔。",firstNightReminder:null,otherNightReminder:"当贤者被恶魔杀害时，唤醒贤者并指向两名玩家，其中一名是恶魔。",remindersGlobal:null,reminders:null},{id:"sailor",name:"水手",ability:"你不会死亡。每个夜晚，选择一名存活玩家，你和他其中一名醉酒，直到下个黄昏。",firstNightReminder:"水手指向一名存活玩家。在水手或那名玩家的身份标志旁放置醉酒标记。",otherNightReminder:"原本的醉酒玩家恢复清醒，水手指向一名存活玩家，在水手或那名玩家的身份标志旁放置醉酒标记。",remindersGlobal:null,reminders:"醉酒"},{id:"saint",name:"圣徒",ability:"当你被处决时，你的阵营落败。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"savant",name:"学者",ability:"每个白天，拜访说书人并获取两条信息，其中一条是正确的，一条是错误的。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"scapegoat",name:"替罪羊",ability:"如果一名阵营与你相同的玩家将要被处决，你可能代替他被处决。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"scarletwoman",name:"荡妇",ability:"当存活玩家大于5人且恶魔死亡时(不包括旅行者)，你成为新的恶魔。",firstNightReminder:null,otherNightReminder:"如果荡妇变成了恶魔，唤醒荡妇，告知她成为了哪个恶魔。",remindersGlobal:null,reminders:"恶魔"},{id:"seamstress",name:"裁缝",ability:"整局游戏限一次，夜晚，选择两名其他玩家，得知他们是否属于同阵营。",firstNightReminder:"裁缝指向两名玩家或不使用技能，如果指向了两名玩家，告知他这两名玩家是否为同一阵营。",otherNightReminder:"裁缝指向两名玩家或不使用技能，如果指向了两名玩家，告知他这两名玩家是否为同一阵营。",remindersGlobal:null,reminders:"无技能"},{id:"sentinel",name:"哨兵",ability:"本局游戏可能±1外来者。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"shabaloth",name:"憎恶",ability:"每个夜晚*，选择两名玩家，将他们杀害。你上一晚选择的玩家可能会因反刍而复活。",firstNightReminder:null,otherNightReminder:"前一晚憎恶选择的玩家之一可能会复活。憎恶指向两名玩家，这两名玩家死亡。",remindersGlobal:null,reminders:"复活,被杀害"},{id:"slayer",name:"杀手",ability:"整局游戏限一次，白天，你可以公开选择一名玩家，如果他是恶魔，他死亡。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"无技能"},{id:"snakecharmer",name:"耍蛇人",ability:"每个夜晚，选择一名存活玩家，当你选中一名恶魔时，交换你和他的身份以及阵营，然后，他中毒。",firstNightReminder:"耍蛇人指向一名玩家，如果那名玩家是恶魔，交换恶魔和耍蛇人的身份和阵营。依次唤醒并向他展示“你是”卡和新的身份标志与阵营。新的耍蛇人中毒。",otherNightReminder:"耍蛇人指向一名玩家，如果那名玩家是恶魔，交换恶魔和耍蛇人的身份和阵营。依次唤醒并向他展示“你是”卡和新的身份标志与阵营。新的耍蛇人中毒。",remindersGlobal:null,reminders:"中毒"},{id:"snitch",name:"告密者",ability:"游戏开始时，爪牙得知三个不在游戏中的身份。",firstNightReminder:"在爪牙们得知恶魔是谁后，向他们三个不在场身份标志。展示这些身份可能彼此相同或不同，也可以和给恶魔展示的身份相同或不同。",otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"soldier",name:"军人",ability:"你免受恶魔侵害。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"spiritofivory",name:"圣洁之魂",ability:"整局游戏不会出现超过1名的额外邪恶玩家。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"spy",name:"间谍",ability:"每个夜晚，你查看魔典。你可能被视为一名善良的村民或外来者，即使你已经死亡。",firstNightReminder:"间谍查看魔典，不限制观看时长。",otherNightReminder:"间谍查看魔典，不限制观看时长。",remindersGlobal:null,reminders:null},{id:"steward",name:"Steward",ability:"You start knowing 1 good player.",firstNightReminder:"Point to 1 good player.",otherNightReminder:null,remindersGlobal:null,reminders:"Know"},{id:"stormcatcher",name:"风暴主宰",ability:"游戏开始时，选择一个善良身份，如果该身份在游戏中，对应玩家只能因为处决而死亡，但是邪恶阵营知道他是谁。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"sweetheart",name:"意中人",ability:"当你死亡时，一名玩家醉酒。",firstNightReminder:null,otherNightReminder:"如果意中人死亡，选择一名玩家醉酒。",remindersGlobal:null,reminders:"醉酒"},{id:"tealady",name:"茶女",ability:"如果与你相邻的存活玩家属于善良阵营，他们不会死亡。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"不会死亡"},{id:"thief",name:"盗贼",ability:"每个夜晚，选择一名其他玩家，明天他的票视为负数。",firstNightReminder:"盗贼指向一名玩家。将负票标记放在那名玩家的身份标志旁。",otherNightReminder:"盗贼指向一名玩家。将负票标记放在那名玩家的身份标志旁。",remindersGlobal:null,reminders:"负票"},{id:"tinker",name:"修补匠",ability:"你随时可能死亡。",firstNightReminder:null,otherNightReminder:"修补匠随时可能死亡。",remindersGlobal:null,reminders:"死亡"},{id:"towncrier",name:"传令员",ability:"每个夜晚*，你得知爪牙在白天是否发起了提名。",firstNightReminder:null,otherNightReminder:"唤醒传令员，并告知传令员白天爪牙是否发起了提名。当爪牙提名时，标记爪牙已提名，否则在黄昏时标记爪牙未提名。",remindersGlobal:null,reminders:"爪牙已提名,爪牙未提名"},{id:"toymaker",name:"玩具匠人",ability:"恶魔可以选择在夜晚放弃杀害，并且整局游戏至少要放弃一次。恶魔和爪牙正常获取开局信息。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"undertaker",name:"送葬者",ability:"每个夜晚*，你得知今天被处决的玩家的身份。",firstNightReminder:null,otherNightReminder:"如果有玩家今天被处决，唤醒送葬者，并向送葬者展示那个玩家的身份标记。",remindersGlobal:null,reminders:"被处决"},{id:"vigormortis",name:"巫妖",ability:"每个夜晚*，选择一名玩家，将他杀害。被你杀害的爪牙保留技能，并且一名与他相邻的村民中毒。[-1外来者]",firstNightReminder:null,otherNightReminder:"巫妖指向一名玩家，将他杀害。如果该玩家是爪牙，保留技能，并且该爪牙的一名相邻村民会中毒。",remindersGlobal:null,reminders:"中毒,保留技能,被杀害"},{id:"virgin",name:"处女",ability:"当你第一次被提名时，如果提名你的玩家是村民，他立刻被处决。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:"无技能"},{id:"vizier",name:"Vizier",ability:"All players know who you are. You can not die during the day. If good voted, you may choose to execute immediately.",firstNightReminder:"Announce 'The Vizier is in play' and state which player they are.",otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"vortox",name:"混沌",ability:"每个夜晚*，选择一名玩家，将他杀害。村民的技能必定获取错误信息。每个白天，如果没有玩家被处决，邪恶阵营获胜。",firstNightReminder:null,otherNightReminder:"混沌指向一名玩家，将他杀害。",remindersGlobal:null,reminders:"被杀害"},{id:"voudon",name:"巫毒师",ability:"只有你和死亡的玩家可以在提名中投票，这不会消耗投票标记。取消投票达半才能处决的限制。",firstNightReminder:null,otherNightReminder:null,remindersGlobal:null,reminders:null},{id:"washerwoman",name:"洗衣妇",ability:"游戏开始时，你得知两名玩家其中一名的村民身份。",firstNightReminder:"唤醒洗衣妇，并向洗衣妇展示一个在场的村民身份标志。然后指向两名玩家，其中一名是该身份。",otherNightReminder:null,remindersGlobal:null,reminders:"对应村民,非对应"},{id:"widow",name:"寡妇",ability:"在你的第一个夜晚，你查看魔典并选择一名玩家，使他中毒。一名善良玩家会得知本局存在寡妇。",firstNightReminder:"寡妇查看魔典。然后指向一名玩家，他中毒。然后唤醒一名善良玩家，告知他本局存在寡妇。",otherNightReminder:null,remindersGlobal:"已被知晓",reminders:"中毒"},{id:"witch",name:"女巫",ability:"每个夜晚，选择一名玩家，下个白天，当他发起提名时，他死亡。场上剩下三名玩家存活时，你失去该技能。",firstNightReminder:"女巫指向一名玩家。那名玩家在下个白天发起提名时会死去。",otherNightReminder:"如果有四名或更多玩家存活，女巫指向一名玩家。那名玩家在下个白天发起提名时会死去。",remindersGlobal:null,reminders:"被诅咒"},{id:"zombuul",name:"僵尸",ability:"每个夜晚*，当白天没有玩家死亡时，选择一名玩家，将他杀害。当你第一次死亡时，你仍然活着，但被视为死亡。",firstNightReminder:null,otherNightReminder:"如果没有人在白天死亡，僵尸选择一名玩家杀害",remindersGlobal:null,reminders:"白天死亡,被杀害"}];export{e as default};
