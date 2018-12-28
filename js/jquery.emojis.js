$(function() {
	$.fn.emojiPicker.emojis = [
			{
				"id" : ":grinning_face:",
				"symbol" : "😀",
				"group" : "people",
				"keywords" : [ "face", "grin", "grinning face" ]
			},
			{
				"id" : ":beaming_face_with_smiling_eyes:",
				"symbol" : "😁",
				"group" : "people",
				"keywords" : [ "beaming face with smiling eyes", "eye", "face",
						"grin", "smile" ]
			},
			{
				"id" : ":face_with_tears_of_joy:",
				"symbol" : "😂",
				"group" : "people",
				"keywords" : [ "face", "face with tears of joy", "joy",
						"laugh", "tear" ]
			},
			{
				"id" : ":rolling_on_the_floor_laughing:",
				"symbol" : "🤣",
				"group" : "people",
				"keywords" : [ "face", "floor", "laugh", "rolling",
						"rolling on the floor laughing" ]
			},
			{
				"id" : ":grinning_face_with_big_eyes:",
				"symbol" : "😃",
				"group" : "people",
				"keywords" : [ "face", "grinning face with big eyes", "mouth",
						"open", "smile" ]
			},
			{
				"id" : ":grinning_face_with_smiling_eyes:",
				"symbol" : "😄",
				"group" : "people",
				"keywords" : [ "eye", "face",
						"grinning face with smiling eyes", "mouth", "open",
						"smile" ]
			},
			{
				"id" : ":grinning_face_with_sweat:",
				"symbol" : "😅",
				"group" : "people",
				"keywords" : [ "cold", "face", "grinning face with sweat",
						"open", "smile", "sweat" ]
			},
			{
				"id" : ":grinning_squinting_face:",
				"symbol" : "😆",
				"group" : "people",
				"keywords" : [ "face", "grinning squinting face", "laugh",
						"mouth", "satisfied", "smile" ]
			},
			{
				"id" : ":winking_face:",
				"symbol" : "😉",
				"group" : "people",
				"keywords" : [ "face", "wink", "winking face" ]
			},
			{
				"id" : ":smiling_face_with_smiling_eyes:",
				"symbol" : "😊",
				"group" : "people",
				"keywords" : [ "blush", "eye", "face", "smile",
						"smiling face with smiling eyes" ]
			},
			{
				"id" : ":face_savoring_food:",
				"symbol" : "😋",
				"group" : "people",
				"keywords" : [ "delicious", "face", "face savoring food",
						"savouring", "smile", "yum" ]
			},
			{
				"id" : ":smiling_face_with_sunglasses:",
				"symbol" : "😎",
				"group" : "people",
				"keywords" : [ "bright", "cool", "face",
						"smiling face with sunglasses", "sun", "sunglasses" ]
			},
			{
				"id" : ":smiling_face_with_heart-eyes:",
				"symbol" : "😍",
				"group" : "people",
				"keywords" : [ "eye", "face", "love", "smile",
						"smiling face with heart-eyes" ]
			},
			{
				"id" : ":face_blowing_a_kiss:",
				"symbol" : "😘",
				"group" : "people",
				"keywords" : [ "face", "face blowing a kiss", "kiss" ]
			},
			{
				"id" : ":kissing_face:",
				"symbol" : "😗",
				"group" : "people",
				"keywords" : [ "face", "kiss", "kissing face" ]
			},
			{
				"id" : ":kissing_face_with_smiling_eyes:",
				"symbol" : "😙",
				"group" : "people",
				"keywords" : [ "eye", "face", "kiss",
						"kissing face with smiling eyes", "smile" ]
			},
			{
				"id" : ":kissing_face_with_closed_eyes:",
				"symbol" : "😚",
				"group" : "people",
				"keywords" : [ "closed", "eye", "face", "kiss",
						"kissing face with closed eyes" ]
			},
			{
				"id" : ":smiling_face:",
				"symbol" : "☺️",
				"group" : "people",
				"keywords" : [ "face", "outlined", "relaxed", "smile",
						"smiling face" ]
			},
			{
				"id" : ":slightly_smiling_face:",
				"symbol" : "🙂",
				"group" : "people",
				"keywords" : [ "face", "slightly smiling face", "smile" ]
			},
			{
				"id" : ":hugging_face:",
				"symbol" : "🤗",
				"group" : "people",
				"keywords" : [ "face", "hug", "hugging" ]
			},
			{
				"id" : ":star-struck:",
				"symbol" : "🤩",
				"group" : "people",
				"keywords" : [ "eyes", "face", "grinning", "star",
						"star-struck", "" ]
			},
			{
				"id" : ":thinking_face:",
				"symbol" : "🤔",
				"group" : "people",
				"keywords" : [ "face", "thinking" ]
			},
			{
				"id" : ":face_with_raised_eyebrow:",
				"symbol" : "🤨",
				"group" : "people",
				"keywords" : [ "distrust", "face with raised eyebrow",
						"skeptic", "" ]
			},
			{
				"id" : ":neutral_face:",
				"symbol" : "😐",
				"group" : "people",
				"keywords" : [ "deadpan", "face", "neutral" ]
			},
			{
				"id" : ":expressionless_face:",
				"symbol" : "😑",
				"group" : "people",
				"keywords" : [ "expressionless", "face", "inexpressive",
						"unexpressive" ]
			},
			{
				"id" : ":face_without_mouth:",
				"symbol" : "😶",
				"group" : "people",
				"keywords" : [ "face", "face without mouth", "mouth", "quiet",
						"silent" ]
			},
			{
				"id" : ":face_with_rolling_eyes:",
				"symbol" : "🙄",
				"group" : "people",
				"keywords" : [ "eyes", "face", "face with rolling eyes",
						"rolling" ]
			},
			{
				"id" : ":smirking_face:",
				"symbol" : "😏",
				"group" : "people",
				"keywords" : [ "face", "smirk", "smirking face" ]
			},
			{
				"id" : ":persevering_face:",
				"symbol" : "😣",
				"group" : "people",
				"keywords" : [ "face", "persevere", "persevering face" ]
			},
			{
				"id" : ":sad_but_relieved_face:",
				"symbol" : "😥",
				"group" : "people",
				"keywords" : [ "disappointed", "face", "relieved",
						"sad but relieved face", "whew" ]
			},
			{
				"id" : ":face_with_open_mouth:",
				"symbol" : "😮",
				"group" : "people",
				"keywords" : [ "face", "face with open mouth", "mouth", "open",
						"sympathy" ]
			},
			{
				"id" : ":zipper-mouth_face:",
				"symbol" : "🤐",
				"group" : "people",
				"keywords" : [ "face", "mouth", "zipper", "zipper-mouth face" ]
			},
			{
				"id" : ":hushed_face:",
				"symbol" : "😯",
				"group" : "people",
				"keywords" : [ "face", "hushed", "stunned", "surprised" ]
			},
			{
				"id" : ":sleepy_face:",
				"symbol" : "😪",
				"group" : "people",
				"keywords" : [ "face", "sleep", "sleepy face" ]
			},
			{
				"id" : ":tired_face:",
				"symbol" : "😫",
				"group" : "people",
				"keywords" : [ "face", "tired" ]
			},
			{
				"id" : ":sleeping_face:",
				"symbol" : "😴",
				"group" : "people",
				"keywords" : [ "face", "sleep", "sleeping face", "zzz" ]
			},
			{
				"id" : ":relieved_face:",
				"symbol" : "😌",
				"group" : "people",
				"keywords" : [ "face", "relieved" ]
			},
			{
				"id" : ":face_with_tongue:",
				"symbol" : "😛",
				"group" : "people",
				"keywords" : [ "face", "face with tongue", "tongue" ]
			},
			{
				"id" : ":winking_face_with_tongue:",
				"symbol" : "😜",
				"group" : "people",
				"keywords" : [ "eye", "face", "joke", "tongue", "wink",
						"winking face with tongue" ]
			},
			{
				"id" : ":squinting_face_with_tongue:",
				"symbol" : "😝",
				"group" : "people",
				"keywords" : [ "eye", "face", "horrible",
						"squinting face with tongue", "taste", "tongue" ]
			},
			{
				"id" : ":drooling_face:",
				"symbol" : "🤤",
				"group" : "people",
				"keywords" : [ "drooling", "face" ]
			},
			{
				"id" : ":unamused_face:",
				"symbol" : "😒",
				"group" : "people",
				"keywords" : [ "face", "unamused", "unhappy" ]
			},
			{
				"id" : ":downcast_face_with_sweat:",
				"symbol" : "😓",
				"group" : "people",
				"keywords" : [ "cold", "downcast face with sweat", "face",
						"sweat" ]
			},
			{
				"id" : ":pensive_face:",
				"symbol" : "😔",
				"group" : "people",
				"keywords" : [ "dejected", "face", "pensive" ]
			},
			{
				"id" : ":confused_face:",
				"symbol" : "😕",
				"group" : "people",
				"keywords" : [ "confused", "face" ]
			},
			{
				"id" : ":upside-down_face:",
				"symbol" : "🙃",
				"group" : "people",
				"keywords" : [ "face", "upside-down" ]
			},
			{
				"id" : ":money-mouth_face:",
				"symbol" : "🤑",
				"group" : "people",
				"keywords" : [ "face", "money", "money-mouth face", "mouth" ]
			},
			{
				"id" : ":astonished_face:",
				"symbol" : "😲",
				"group" : "people",
				"keywords" : [ "astonished", "face", "shocked", "totally" ]
			},
			{
				"id" : ":frowning_face:",
				"symbol" : "☹",
				"group" : "people",
				"keywords" : [ "face", "frown", "frowning face" ]
			},
			{
				"id" : ":slightly_frowning_face:",
				"symbol" : "🙁",
				"group" : "people",
				"keywords" : [ "face", "frown", "slightly frowning face" ]
			},
			{
				"id" : ":confounded_face:",
				"symbol" : "😖",
				"group" : "people",
				"keywords" : [ "confounded", "face" ]
			},
			{
				"id" : ":disappointed_face:",
				"symbol" : "😞",
				"group" : "people",
				"keywords" : [ "disappointed", "face" ]
			},
			{
				"id" : ":worried_face:",
				"symbol" : "😟",
				"group" : "people",
				"keywords" : [ "face", "worried" ]
			},
			{
				"id" : ":face_with_steam_from_nose:",
				"symbol" : "😤",
				"group" : "people",
				"keywords" : [ "face", "face with steam from nose", "triumph",
						"won" ]
			},
			{
				"id" : ":crying_face:",
				"symbol" : "😢",
				"group" : "people",
				"keywords" : [ "cry", "crying face", "face", "sad", "tear" ]
			},
			{
				"id" : ":loudly_crying_face:",
				"symbol" : "😭",
				"group" : "people",
				"keywords" : [ "cry", "face", "loudly crying face", "sad",
						"sob", "tear" ]
			},
			{
				"id" : ":frowning_face_with_open_mouth:",
				"symbol" : "😦",
				"group" : "people",
				"keywords" : [ "face", "frown",
						"frowning face with open mouth", "mouth", "open" ]
			},
			{
				"id" : ":anguished_face:",
				"symbol" : "😧",
				"group" : "people",
				"keywords" : [ "anguished", "face" ]
			},
			{
				"id" : ":fearful_face:",
				"symbol" : "😨",
				"group" : "people",
				"keywords" : [ "face", "fear", "fearful", "scared" ]
			},
			{
				"id" : ":weary_face:",
				"symbol" : "😩",
				"group" : "people",
				"keywords" : [ "face", "tired", "weary" ]
			},
			{
				"id" : ":exploding_head:",
				"symbol" : "🤯",
				"group" : "people",
				"keywords" : [ "exploding head", "shocked" ]
			},
			{
				"id" : ":grimacing_face:",
				"symbol" : "😬",
				"group" : "people",
				"keywords" : [ "face", "grimace", "grimacing face" ]
			},
			{
				"id" : ":anxious_face_with_sweat:",
				"symbol" : "😰",
				"group" : "people",
				"keywords" : [ "anxious face with sweat", "blue", "cold",
						"face", "rushed", "sweat" ]
			},
			{
				"id" : ":face_screaming_in_fear:",
				"symbol" : "😱",
				"group" : "people",
				"keywords" : [ "face", "face screaming in fear", "fear",
						"munch", "scared", "scream" ]
			},
			{
				"id" : ":flushed_face:",
				"symbol" : "😳",
				"group" : "people",
				"keywords" : [ "dazed", "face", "flushed" ]
			},
			{
				"id" : ":zany_face:",
				"symbol" : "🤪",
				"group" : "people",
				"keywords" : [ "eye", "goofy", "large", "small", "zany face" ]
			},
			{
				"id" : ":dizzy_face:",
				"symbol" : "😵",
				"group" : "people",
				"keywords" : [ "dizzy", "face" ]
			},
			{
				"id" : ":pouting_face:",
				"symbol" : "😡",
				"group" : "people",
				"keywords" : [ "angry", "face", "mad", "pouting", "rage", "red" ]
			},
			{
				"id" : ":angry_face:",
				"symbol" : "😠",
				"group" : "people",
				"keywords" : [ "angry", "face", "mad" ]
			},
			{
				"id" : ":face_with_symbols_on_mouth:",
				"symbol" : "🤬",
				"group" : "people",
				"keywords" : [ "face with symbols on mouth", "swearing", "" ]
			},
			{
				"id" : ":face_with_medical_mask:",
				"symbol" : "😷",
				"group" : "people",
				"keywords" : [ "cold", "doctor", "face",
						"face with medical mask", "mask", "sick" ]
			},
			{
				"id" : ":face_with_thermometer:",
				"symbol" : "🤒",
				"group" : "people",
				"keywords" : [ "face", "face with thermometer", "ill", "sick",
						"thermometer" ]
			},
			{
				"id" : ":face_with_head-bandage:",
				"symbol" : "🤕",
				"group" : "people",
				"keywords" : [ "bandage", "face", "face with head-bandage",
						"hurt", "injury" ]
			},
			{
				"id" : ":nauseated_face:",
				"symbol" : "🤢",
				"group" : "people",
				"keywords" : [ "face", "nauseated", "vomit" ]
			},
			{
				"id" : ":face_vomiting:",
				"symbol" : "🤮",
				"group" : "people",
				"keywords" : [ "face vomiting", "sick", "vomit" ]
			},
			{
				"id" : ":sneezing_face:",
				"symbol" : "🤧",
				"group" : "people",
				"keywords" : [ "face", "gesundheit", "sneeze", "sneezing face" ]
			},
			{
				"id" : ":smiling_face_with_halo:",
				"symbol" : "😇",
				"group" : "people",
				"keywords" : [ "angel", "face", "fantasy", "halo", "innocent",
						"smiling face with halo" ]
			},
			{
				"id" : ":cowboy_hat_face:",
				"symbol" : "🤠",
				"group" : "people",
				"keywords" : [ "cowboy", "cowgirl", "face", "hat" ]
			},
			{
				"id" : ":lying_face:",
				"symbol" : "🤥",
				"group" : "people",
				"keywords" : [ "face", "lie", "lying face", "pinocchio" ]
			},
			{
				"id" : ":shushing_face:",
				"symbol" : "🤫",
				"group" : "people",
				"keywords" : [ "quiet", "shush", "shushing face" ]
			},
			{
				"id" : ":face_with_hand_over_mouth:",
				"symbol" : "🤭",
				"group" : "people",
				"keywords" : [ "face with hand over mouth", "whoops", "" ]
			},
			{
				"id" : ":face_with_monocle:",
				"symbol" : "🧐",
				"group" : "people",
				"keywords" : [ "face with monocle", "stuffy", "" ]
			},
			{
				"id" : ":nerd_face:",
				"symbol" : "🤓",
				"group" : "people",
				"keywords" : [ "face", "geek", "nerd" ]
			},
			{
				"id" : ":smiling_face_with_horns:",
				"symbol" : "😈",
				"group" : "people",
				"keywords" : [ "face", "fairy tale", "fantasy", "horns",
						"smile", "smiling face with horns" ]
			},
			{
				"id" : ":angry_face_with_horns:",
				"symbol" : "👿",
				"group" : "people",
				"keywords" : [ "angry face with horns", "demon", "devil",
						"face", "fantasy", "imp" ]
			},
			{
				"id" : ":clown_face:",
				"symbol" : "🤡",
				"group" : "people",
				"keywords" : [ "clown", "face" ]
			},
			{
				"id" : ":ogre:",
				"symbol" : "👹",
				"group" : "people",
				"keywords" : [ "creature", "face", "fairy tale", "fantasy",
						"monster", "ogre", "" ]
			},
			{
				"id" : ":goblin:",
				"symbol" : "👺",
				"group" : "people",
				"keywords" : [ "creature", "face", "fairy tale", "fantasy",
						"goblin", "monster" ]
			},
			{
				"id" : ":skull:",
				"symbol" : "💀",
				"group" : "people",
				"keywords" : [ "death", "face", "fairy tale", "monster",
						"skull" ]
			},
			{
				"id" : ":skull_and_crossbones:",
				"symbol" : "☠",
				"group" : "people",
				"keywords" : [ "crossbones", "death", "face", "monster",
						"skull", "skull and crossbones" ]
			},
			{
				"id" : ":ghost:",
				"symbol" : "👻",
				"group" : "people",
				"keywords" : [ "creature", "face", "fairy tale", "fantasy",
						"ghost", "monster" ]
			},
			{
				"id" : ":alien:",
				"symbol" : "👽",
				"group" : "people",
				"keywords" : [ "alien", "creature", "extraterrestrial", "face",
						"fantasy", "ufo" ]
			},
			{
				"id" : ":alien_monster:",
				"symbol" : "👾",
				"group" : "people",
				"keywords" : [ "alien", "creature", "extraterrestrial", "face",
						"monster", "ufo" ]
			},
			{
				"id" : ":robot_face:",
				"symbol" : "🤖",
				"group" : "people",
				"keywords" : [ "face", "monster", "robot" ]
			},
			{
				"id" : ":pile_of_poo:",
				"symbol" : "💩",
				"group" : "people",
				"keywords" : [ "dung", "face", "monster", "pile of poo", "poo",
						"poop" ]
			},
			{
				"id" : ":grinning_cat_face:",
				"symbol" : "😺",
				"group" : "people",
				"keywords" : [ "cat", "face", "grinning cat face", "mouth",
						"open", "smile" ]
			},
			{
				"id" : ":grinning_cat_face_with_smiling_eyes:",
				"symbol" : "😸",
				"group" : "people",
				"keywords" : [ "cat", "eye", "face", "grin",
						"grinning cat face with smiling eyes", "smile" ]
			},
			{
				"id" : ":cat_face_with_tears_of_joy:",
				"symbol" : "😹",
				"group" : "people",
				"keywords" : [ "cat", "cat face with tears of joy", "face",
						"joy", "tear" ]
			},
			{
				"id" : ":smiling_cat_face_with_heart-eyes:",
				"symbol" : "😻",
				"group" : "people",
				"keywords" : [ "cat", "eye", "face", "love", "smile",
						"smiling cat face with heart-eyes" ]
			},
			{
				"id" : ":cat_face_with_wry_smile:",
				"symbol" : "😼",
				"group" : "people",
				"keywords" : [ "cat", "cat face with wry smile", "face",
						"ironic", "smile", "wry" ]
			},
			{
				"id" : ":kissing_cat_face:",
				"symbol" : "😽",
				"group" : "people",
				"keywords" : [ "cat", "eye", "face", "kiss", "kissing cat face" ]
			},
			{
				"id" : ":weary_cat_face:",
				"symbol" : "🙀",
				"group" : "people",
				"keywords" : [ "cat", "face", "oh", "surprised", "weary" ]
			},
			{
				"id" : ":crying_cat_face:",
				"symbol" : "😿",
				"group" : "people",
				"keywords" : [ "cat", "cry", "crying cat face", "face", "sad",
						"tear" ]
			},
			{
				"id" : ":pouting_cat_face:",
				"symbol" : "😾",
				"group" : "people",
				"keywords" : [ "cat", "face", "pouting" ]
			},
			{
				"id" : ":see-no-evil_monkey:",
				"symbol" : "🙈",
				"group" : "people",
				"keywords" : [ "evil", "face", "forbidden", "monkey", "see",
						"see-no-evil monkey" ]
			},
			{
				"id" : ":hear-no-evil_monkey:",
				"symbol" : "🙉",
				"group" : "people",
				"keywords" : [ "evil", "face", "forbidden", "hear",
						"hear-no-evil monkey", "monkey" ]
			},
			{
				"id" : ":speak-no-evil_monkey:",
				"symbol" : "🙊",
				"group" : "people",
				"keywords" : [ "evil", "face", "forbidden", "monkey", "speak",
						"speak-no-evil monkey" ]
			},
			{
				"id" : ":baby:",
				"symbol" : "👶",
				"group" : "people",
				"keywords" : [ "baby", "young" ]
			},
			{
				"id" : ":child:",
				"symbol" : "🧒",
				"group" : "people",
				"keywords" : [ "child", "gender-neutral", "unspecified gender",
						"young" ]
			},
			{
				"id" : ":boy:",
				"symbol" : "👦",
				"group" : "people",
				"keywords" : [ "boy", "young" ]
			},
			{
				"id" : ":girl:",
				"symbol" : "👧",
				"group" : "people",
				"keywords" : [ "girl", "Virgo", "young", "zodiac" ]
			},
			{
				"id" : ":person:",
				"symbol" : "🧑",
				"group" : "people",
				"keywords" : [ "adult", "gender-neutral", "person",
						"unspecified gender" ]
			},
			{
				"id" : ":person_blond_hair:",
				"symbol" : "👱",
				"group" : "people",
				"keywords" : [ "blond", "blond-haired person",
						"person: blond hair" ]
			},
			{
				"id" : ":man:",
				"symbol" : "👨",
				"group" : "people",
				"keywords" : [ "adult", "man" ]
			},
			{
				"id" : ":man_blond_hair:",
				"symbol" : "👱‍♂️",
				"group" : "people",
				"keywords" : [ "blond", "blond-haired man", "man",
						"man: blond hair" ]
			},
			{
				"id" : ":man_beard:",
				"symbol" : "🧔",
				"group" : "people",
				"keywords" : [ "beard", "man: beard", "person", "" ]
			},
			{
				"id" : ":woman:",
				"symbol" : "👩",
				"group" : "people",
				"keywords" : [ "adult", "woman" ]
			},
			{
				"id" : ":woman_blond_hair:",
				"symbol" : "👱‍♀️",
				"group" : "people",
				"keywords" : [ "blond-haired woman", "blonde", "woman",
						"woman: blond hair" ]
			},
			{
				"id" : ":older_person:",
				"symbol" : "🧓",
				"group" : "people",
				"keywords" : [ "adult", "gender-neutral", "old",
						"older person", "unspecified gender" ]
			},
			{
				"id" : ":old_man:",
				"symbol" : "👴",
				"group" : "people",
				"keywords" : [ "adult", "man", "old" ]
			},
			{
				"id" : ":old_woman:",
				"symbol" : "👵",
				"group" : "people",
				"keywords" : [ "adult", "old", "woman" ]
			},
			{
				"id" : ":man_health_worker:",
				"symbol" : "👨‍⚕️",
				"group" : "people",
				"keywords" : [ "doctor", "healthcare", "man",
						"man health worker", "nurse", "therapist" ]
			},
			{
				"id" : ":woman_health_worker:",
				"symbol" : "👩‍⚕️",
				"group" : "people",
				"keywords" : [ "doctor", "healthcare", "nurse", "therapist",
						"woman", "woman health worker" ]
			},
			{
				"id" : ":man_student:",
				"symbol" : "👨‍🎓",
				"group" : "people",
				"keywords" : [ "graduate", "man", "student" ]
			},
			{
				"id" : ":woman_student:",
				"symbol" : "👩‍🎓",
				"group" : "people",
				"keywords" : [ "graduate", "student", "woman" ]
			},
			{
				"id" : ":man_teacher:",
				"symbol" : "👨‍🏫",
				"group" : "people",
				"keywords" : [ "instructor", "man", "professor", "teacher" ]
			},
			{
				"id" : ":woman_teacher:",
				"symbol" : "👩‍🏫",
				"group" : "people",
				"keywords" : [ "instructor", "professor", "teacher", "woman" ]
			},
			{
				"id" : ":man_judge:",
				"symbol" : "👨‍⚖️",
				"group" : "people",
				"keywords" : [ "justice", "man", "man judge", "scales" ]
			},
			{
				"id" : ":woman_judge:",
				"symbol" : "👩‍⚖️",
				"group" : "people",
				"keywords" : [ "judge", "scales", "woman" ]
			},
			{
				"id" : ":man_farmer:",
				"symbol" : "👨‍🌾",
				"group" : "people",
				"keywords" : [ "farmer", "gardener", "man", "rancher" ]
			},
			{
				"id" : ":woman_farmer:",
				"symbol" : "👩‍🌾",
				"group" : "people",
				"keywords" : [ "farmer", "gardener", "rancher", "woman" ]
			},
			{
				"id" : ":man_cook:",
				"symbol" : "👨‍🍳",
				"group" : "people",
				"keywords" : [ "chef", "cook", "man" ]
			},
			{
				"id" : ":woman_cook:",
				"symbol" : "👩‍🍳",
				"group" : "people",
				"keywords" : [ "chef", "cook", "woman" ]
			},
			{
				"id" : ":man_mechanic:",
				"symbol" : "👨‍🔧",
				"group" : "people",
				"keywords" : [ "electrician", "man", "mechanic", "plumber",
						"tradesperson" ]
			},
			{
				"id" : ":woman_mechanic:",
				"symbol" : "👩‍🔧",
				"group" : "people",
				"keywords" : [ "electrician", "mechanic", "plumber",
						"tradesperson", "woman" ]
			},
			{
				"id" : ":man_factory_worker:",
				"symbol" : "👨‍🏭",
				"group" : "people",
				"keywords" : [ "assembly", "factory", "industrial", "man",
						"worker" ]
			},
			{
				"id" : ":woman_factory_worker:",
				"symbol" : "👩‍🏭",
				"group" : "people",
				"keywords" : [ "assembly", "factory", "industrial", "woman",
						"worker" ]
			},
			{
				"id" : ":man_office_worker:",
				"symbol" : "👨‍💼",
				"group" : "people",
				"keywords" : [ "architect", "business", "man",
						"man office worker", "manager", "white-collar" ]
			},
			{
				"id" : ":woman_office_worker:",
				"symbol" : "👩‍💼",
				"group" : "people",
				"keywords" : [ "architect", "business", "manager",
						"white-collar", "woman", "woman office worker" ]
			},
			{
				"id" : ":man_scientist:",
				"symbol" : "👨‍🔬",
				"group" : "people",
				"keywords" : [ "biologist", "chemist", "engineer", "man",
						"physicist", "scientist" ]
			},
			{
				"id" : ":woman_scientist:",
				"symbol" : "👩‍🔬",
				"group" : "people",
				"keywords" : [ "biologist", "chemist", "engineer", "physicist",
						"scientist", "woman" ]
			},
			{
				"id" : ":man_technologist:",
				"symbol" : "👨‍💻",
				"group" : "people",
				"keywords" : [ "coder", "developer", "inventor", "man",
						"software", "technologist" ]
			},
			{
				"id" : ":woman_technologist:",
				"symbol" : "👩‍💻",
				"group" : "people",
				"keywords" : [ "coder", "developer", "inventor", "software",
						"technologist", "woman" ]
			},
			{
				"id" : ":man_singer:",
				"symbol" : "👨‍🎤",
				"group" : "people",
				"keywords" : [ "actor", "entertainer", "man", "rock", "singer",
						"star" ]
			},
			{
				"id" : ":woman_singer:",
				"symbol" : "👩‍🎤",
				"group" : "people",
				"keywords" : [ "actor", "entertainer", "rock", "singer",
						"star", "woman" ]
			},
			{
				"id" : ":man_artist:",
				"symbol" : "👨‍🎨",
				"group" : "people",
				"keywords" : [ "artist", "man", "palette" ]
			},
			{
				"id" : ":woman_artist:",
				"symbol" : "👩‍🎨",
				"group" : "people",
				"keywords" : [ "artist", "palette", "woman" ]
			},
			{
				"id" : ":man_pilot:",
				"symbol" : "👨‍✈️",
				"group" : "people",
				"keywords" : [ "man", "pilot", "plane" ]
			},
			{
				"id" : ":woman_pilot:",
				"symbol" : "👩‍✈️",
				"group" : "people",
				"keywords" : [ "pilot", "plane", "woman" ]
			},
			{
				"id" : ":man_astronaut:",
				"symbol" : "👨‍🚀",
				"group" : "people",
				"keywords" : [ "astronaut", "man", "rocket" ]
			},
			{
				"id" : ":woman_astronaut:",
				"symbol" : "👩‍🚀",
				"group" : "people",
				"keywords" : [ "astronaut", "rocket", "woman" ]
			},
			{
				"id" : ":man_firefighter:",
				"symbol" : "👨‍🚒",
				"group" : "people",
				"keywords" : [ "firefighter", "firetruck", "man" ]
			},
			{
				"id" : ":woman_firefighter:",
				"symbol" : "👩‍🚒",
				"group" : "people",
				"keywords" : [ "firefighter", "firetruck", "woman" ]
			},
			{
				"id" : ":police_officer:",
				"symbol" : "👮",
				"group" : "people",
				"keywords" : [ "cop", "officer", "police" ]
			},
			{
				"id" : ":man_police_officer:",
				"symbol" : "👮‍♂️",
				"group" : "people",
				"keywords" : [ "cop", "man", "officer", "police" ]
			},
			{
				"id" : ":woman_police_officer:",
				"symbol" : "👮‍♀️",
				"group" : "people",
				"keywords" : [ "cop", "officer", "police", "woman" ]
			},
			{
				"id" : ":detective:",
				"symbol" : "🕵",
				"group" : "people",
				"keywords" : [ "detective", "sleuth", "spy" ]
			},
			{
				"id" : ":man_detective:",
				"symbol" : "🕵️‍♂️",
				"group" : "people",
				"keywords" : [ "detective", "man", "sleuth", "spy" ]
			},
			{
				"id" : ":woman_detective:",
				"symbol" : "🕵️‍♀️",
				"group" : "people",
				"keywords" : [ "detective", "sleuth", "spy", "woman" ]
			},
			{
				"id" : ":guard:",
				"symbol" : "💂",
				"group" : "people",
				"keywords" : [ "guard" ]
			},
			{
				"id" : ":man_guard:",
				"symbol" : "💂‍♂️",
				"group" : "people",
				"keywords" : [ "guard", "man" ]
			},
			{
				"id" : ":woman_guard:",
				"symbol" : "💂‍♀️",
				"group" : "people",
				"keywords" : [ "guard", "woman" ]
			},
			{
				"id" : ":construction_worker:",
				"symbol" : "👷",
				"group" : "people",
				"keywords" : [ "construction", "hat", "worker" ]
			},
			{
				"id" : ":man_construction_worker:",
				"symbol" : "👷‍♂️",
				"group" : "people",
				"keywords" : [ "construction", "man", "worker" ]
			},
			{
				"id" : ":woman_construction_worker:",
				"symbol" : "👷‍♀️",
				"group" : "people",
				"keywords" : [ "construction", "woman", "worker" ]
			},
			{
				"id" : ":prince:",
				"symbol" : "🤴",
				"group" : "people",
				"keywords" : [ "prince" ]
			},
			{
				"id" : ":princess:",
				"symbol" : "👸",
				"group" : "people",
				"keywords" : [ "fairy tale", "fantasy", "princess" ]
			},
			{
				"id" : ":person_wearing_turban:",
				"symbol" : "👳",
				"group" : "people",
				"keywords" : [ "person wearing turban", "turban" ]
			},
			{
				"id" : ":man_wearing_turban:",
				"symbol" : "👳‍♂️",
				"group" : "people",
				"keywords" : [ "man", "man wearing turban", "turban" ]
			},
			{
				"id" : ":woman_wearing_turban:",
				"symbol" : "👳‍♀️",
				"group" : "people",
				"keywords" : [ "turban", "woman", "woman wearing turban" ]
			},
			{
				"id" : ":man_with_chinese_cap:",
				"symbol" : "👲",
				"group" : "people",
				"keywords" : [ "gua pi mao", "hat", "man",
						"man with Chinese cap" ]
			},
			{
				"id" : ":woman_with_headscarf:",
				"symbol" : "🧕",
				"group" : "people",
				"keywords" : [ "headscarf", "hijab", "mantilla", "tichel",
						"woman with headscarf", "" ]
			},
			{
				"id" : ":man_in_tuxedo:",
				"symbol" : "🤵",
				"group" : "people",
				"keywords" : [ "groom", "man", "man in tuxedo", "tuxedo" ]
			},
			{
				"id" : ":bride_with_veil:",
				"symbol" : "👰",
				"group" : "people",
				"keywords" : [ "bride", "bride with veil", "veil", "wedding" ]
			},
			{
				"id" : ":pregnant_woman:",
				"symbol" : "🤰",
				"group" : "people",
				"keywords" : [ "pregnant", "woman" ]
			},
			{
				"id" : ":breast-feeding:",
				"symbol" : "🤱",
				"group" : "people",
				"keywords" : [ "baby", "breast", "breast-feeding", "nursing" ]
			},
			{
				"id" : ":baby_angel:",
				"symbol" : "👼",
				"group" : "people",
				"keywords" : [ "angel", "baby", "face", "fairy tale", "fantasy" ]
			},
			{
				"id" : ":santa_claus:",
				"symbol" : "🎅",
				"group" : "people",
				"keywords" : [ "celebration", "Christmas", "claus", "father",
						"santa", "Santa Claus" ]
			},
			{
				"id" : ":mrs._claus:",
				"symbol" : "🤶",
				"group" : "people",
				"keywords" : [ "celebration", "Christmas", "claus", "mother",
						"Mrs.", "Mrs. Claus" ]
			},
			{
				"id" : ":mage:",
				"symbol" : "🧙",
				"group" : "people",
				"keywords" : [ "mage", "sorcerer", "sorceress", "witch",
						"wizard" ]
			},
			{
				"id" : ":man_mage:",
				"symbol" : "🧙‍♂️",
				"group" : "people",
				"keywords" : [ "man mage", "sorcerer", "wizard" ]
			},
			{
				"id" : ":woman_mage:",
				"symbol" : "🧙‍♀️",
				"group" : "people",
				"keywords" : [ "sorceress", "witch", "woman mage" ]
			},
			{
				"id" : ":fairy:",
				"symbol" : "🧚",
				"group" : "people",
				"keywords" : [ "fairy", "Oberon", "Puck", "Titania" ]
			},
			{
				"id" : ":man_fairy:",
				"symbol" : "🧚‍♂️",
				"group" : "people",
				"keywords" : [ "man fairy", "Oberon", "Puck" ]
			},
			{
				"id" : ":woman_fairy:",
				"symbol" : "🧚‍♀️",
				"group" : "people",
				"keywords" : [ "Titania", "woman fairy" ]
			},
			{
				"id" : ":vampire:",
				"symbol" : "🧛",
				"group" : "people",
				"keywords" : [ "Dracula", "undead", "vampire" ]
			},
			{
				"id" : ":man_vampire:",
				"symbol" : "🧛‍♂️",
				"group" : "people",
				"keywords" : [ "Dracula", "man vampire", "undead" ]
			},
			{
				"id" : ":woman_vampire:",
				"symbol" : "🧛‍♀️",
				"group" : "people",
				"keywords" : [ "undead", "woman vampire" ]
			},
			{
				"id" : ":merperson:",
				"symbol" : "🧜",
				"group" : "people",
				"keywords" : [ "mermaid", "merman", "merperson", "merwoman" ]
			},
			{
				"id" : ":merman:",
				"symbol" : "🧜‍♂️",
				"group" : "people",
				"keywords" : [ "merman", "Triton" ]
			},
			{
				"id" : ":mermaid:",
				"symbol" : "🧜‍♀️",
				"group" : "people",
				"keywords" : [ "mermaid", "merwoman" ]
			},
			{
				"id" : ":elf:",
				"symbol" : "🧝",
				"group" : "people",
				"keywords" : [ "elf", "magical", "" ]
			},
			{
				"id" : ":man_elf:",
				"symbol" : "🧝‍♂️",
				"group" : "people",
				"keywords" : [ "magical", "man elf" ]
			},
			{
				"id" : ":woman_elf:",
				"symbol" : "🧝‍♀️",
				"group" : "people",
				"keywords" : [ "magical", "woman elf" ]
			},
			{
				"id" : ":genie:",
				"symbol" : "🧞",
				"group" : "people",
				"keywords" : [ "djinn", "genie", "" ]
			},
			{
				"id" : ":man_genie:",
				"symbol" : "🧞‍♂️",
				"group" : "people",
				"keywords" : [ "djinn", "man genie" ]
			},
			{
				"id" : ":woman_genie:",
				"symbol" : "🧞‍♀️",
				"group" : "people",
				"keywords" : [ "djinn", "woman genie" ]
			},
			{
				"id" : ":zombie:",
				"symbol" : "🧟",
				"group" : "people",
				"keywords" : [ "undead", "walking dead", "zombie", "" ]
			},
			{
				"id" : ":man_zombie:",
				"symbol" : "🧟‍♂️",
				"group" : "people",
				"keywords" : [ "man zombie", "undead", "walking dead" ]
			},
			{
				"id" : ":woman_zombie:",
				"symbol" : "🧟‍♀️",
				"group" : "people",
				"keywords" : [ "undead", "walking dead", "woman zombie" ]
			},
			{
				"id" : ":person_frowning:",
				"symbol" : "🙍",
				"group" : "people",
				"keywords" : [ "frown", "gesture", "person frowning" ]
			},
			{
				"id" : ":man_frowning:",
				"symbol" : "🙍‍♂️",
				"group" : "people",
				"keywords" : [ "frowning", "gesture", "man" ]
			},
			{
				"id" : ":woman_frowning:",
				"symbol" : "🙍‍♀️",
				"group" : "people",
				"keywords" : [ "frowning", "gesture", "woman" ]
			},
			{
				"id" : ":person_pouting:",
				"symbol" : "🙎",
				"group" : "people",
				"keywords" : [ "gesture", "person pouting", "pouting" ]
			},
			{
				"id" : ":man_pouting:",
				"symbol" : "🙎‍♂️",
				"group" : "people",
				"keywords" : [ "gesture", "man", "pouting" ]
			},
			{
				"id" : ":woman_pouting:",
				"symbol" : "🙎‍♀️",
				"group" : "people",
				"keywords" : [ "gesture", "pouting", "woman" ]
			},
			{
				"id" : ":person_gesturing_no:",
				"symbol" : "🙅",
				"group" : "people",
				"keywords" : [ "forbidden", "gesture", "hand",
						"person gesturing NO", "prohibited" ]
			},
			{
				"id" : ":man_gesturing_no:",
				"symbol" : "🙅‍♂️",
				"group" : "people",
				"keywords" : [ "forbidden", "gesture", "hand", "man",
						"man gesturing NO", "prohibited" ]
			},
			{
				"id" : ":woman_gesturing_no:",
				"symbol" : "🙅‍♀️",
				"group" : "people",
				"keywords" : [ "forbidden", "gesture", "hand", "prohibited",
						"woman", "woman gesturing NO" ]
			},
			{
				"id" : ":person_gesturing_ok:",
				"symbol" : "🙆",
				"group" : "people",
				"keywords" : [ "gesture", "hand", "OK", "person gesturing OK" ]
			},
			{
				"id" : ":man_gesturing_ok:",
				"symbol" : "🙆‍♂️",
				"group" : "people",
				"keywords" : [ "gesture", "hand", "man", "man gesturing OK",
						"OK" ]
			},
			{
				"id" : ":woman_gesturing_ok:",
				"symbol" : "🙆‍♀️",
				"group" : "people",
				"keywords" : [ "gesture", "hand", "OK", "woman",
						"woman gesturing OK" ]
			},
			{
				"id" : ":person_tipping_hand:",
				"symbol" : "💁",
				"group" : "people",
				"keywords" : [ "hand", "help", "information",
						"person tipping hand", "sassy", "tipping" ]
			},
			{
				"id" : ":man_tipping_hand:",
				"symbol" : "💁‍♂️",
				"group" : "people",
				"keywords" : [ "man", "man tipping hand", "sassy",
						"tipping hand" ]
			},
			{
				"id" : ":woman_tipping_hand:",
				"symbol" : "💁‍♀️",
				"group" : "people",
				"keywords" : [ "sassy", "tipping hand", "woman",
						"woman tipping hand" ]
			},
			{
				"id" : ":person_raising_hand:",
				"symbol" : "🙋",
				"group" : "people",
				"keywords" : [ "gesture", "hand", "happy",
						"person raising hand", "raised" ]
			},
			{
				"id" : ":man_raising_hand:",
				"symbol" : "🙋‍♂️",
				"group" : "people",
				"keywords" : [ "gesture", "man", "man raising hand",
						"raising hand" ]
			},
			{
				"id" : ":woman_raising_hand:",
				"symbol" : "🙋‍♀️",
				"group" : "people",
				"keywords" : [ "gesture", "raising hand", "woman",
						"woman raising hand" ]
			},
			{
				"id" : ":person_bowing:",
				"symbol" : "🙇",
				"group" : "people",
				"keywords" : [ "apology", "bow", "gesture", "person bowing",
						"sorry" ]
			},
			{
				"id" : ":man_bowing:",
				"symbol" : "🙇‍♂️",
				"group" : "people",
				"keywords" : [ "apology", "bowing", "favor", "gesture", "man",
						"sorry" ]
			},
			{
				"id" : ":woman_bowing:",
				"symbol" : "🙇‍♀️",
				"group" : "people",
				"keywords" : [ "apology", "bowing", "favor", "gesture",
						"sorry", "woman" ]
			},
			{
				"id" : ":person_facepalming:",
				"symbol" : "🤦",
				"group" : "people",
				"keywords" : [ "disbelief", "exasperation", "face", "palm",
						"person facepalming" ]
			},
			{
				"id" : ":man_facepalming:",
				"symbol" : "🤦‍♂️",
				"group" : "people",
				"keywords" : [ "disbelief", "exasperation", "facepalm", "man",
						"man facepalming" ]
			},
			{
				"id" : ":woman_facepalming:",
				"symbol" : "🤦‍♀️",
				"group" : "people",
				"keywords" : [ "disbelief", "exasperation", "facepalm",
						"woman", "woman facepalming" ]
			},
			{
				"id" : ":person_shrugging:",
				"symbol" : "🤷",
				"group" : "people",
				"keywords" : [ "doubt", "ignorance", "indifference",
						"person shrugging", "shrug" ]
			},
			{
				"id" : ":man_shrugging:",
				"symbol" : "🤷‍♂️",
				"group" : "people",
				"keywords" : [ "doubt", "ignorance", "indifference", "man",
						"man shrugging", "shrug" ]
			},
			{
				"id" : ":woman_shrugging:",
				"symbol" : "🤷‍♀️",
				"group" : "people",
				"keywords" : [ "doubt", "ignorance", "indifference", "shrug",
						"woman", "woman shrugging" ]
			},
			{
				"id" : ":person_getting_massage:",
				"symbol" : "💆",
				"group" : "people",
				"keywords" : [ "face", "massage", "person getting massage",
						"salon" ]
			},
			{
				"id" : ":man_getting_massage:",
				"symbol" : "💆‍♂️",
				"group" : "people",
				"keywords" : [ "face", "man", "man getting massage", "massage" ]
			},
			{
				"id" : ":woman_getting_massage:",
				"symbol" : "💆‍♀️",
				"group" : "people",
				"keywords" : [ "face", "massage", "woman",
						"woman getting massage" ]
			},
			{
				"id" : ":person_getting_haircut:",
				"symbol" : "💇",
				"group" : "people",
				"keywords" : [ "barber", "beauty", "haircut", "parlor",
						"person getting haircut" ]
			},
			{
				"id" : ":man_getting_haircut:",
				"symbol" : "💇‍♂️",
				"group" : "people",
				"keywords" : [ "haircut", "man", "man getting haircut" ]
			},
			{
				"id" : ":woman_getting_haircut:",
				"symbol" : "💇‍♀️",
				"group" : "people",
				"keywords" : [ "haircut", "woman", "woman getting haircut" ]
			},
			{
				"id" : ":person_walking:",
				"symbol" : "🚶",
				"group" : "people",
				"keywords" : [ "hike", "person walking", "walk", "walking" ]
			},
			{
				"id" : ":man_walking:",
				"symbol" : "🚶‍♂️",
				"group" : "people",
				"keywords" : [ "hike", "man", "man walking", "walk" ]
			},
			{
				"id" : ":woman_walking:",
				"symbol" : "🚶‍♀️",
				"group" : "people",
				"keywords" : [ "hike", "walk", "woman", "woman walking" ]
			},
			{
				"id" : ":person_running:",
				"symbol" : "🏃",
				"group" : "people",
				"keywords" : [ "marathon", "person running", "running" ]
			},
			{
				"id" : ":man_running:",
				"symbol" : "🏃‍♂️",
				"group" : "people",
				"keywords" : [ "man", "marathon", "racing", "running" ]
			},
			{
				"id" : ":woman_running:",
				"symbol" : "🏃‍♀️",
				"group" : "people",
				"keywords" : [ "marathon", "racing", "running", "woman" ]
			},
			{
				"id" : ":woman_dancing:",
				"symbol" : "💃",
				"group" : "people",
				"keywords" : [ "dancing", "woman" ]
			},
			{
				"id" : ":man_dancing:",
				"symbol" : "🕺",
				"group" : "people",
				"keywords" : [ "dance", "man", "man dancing" ]
			},
			{
				"id" : ":people_with_bunny_ears:",
				"symbol" : "👯",
				"group" : "people",
				"keywords" : [ "bunny ear", "dancer", "partying",
						"people with bunny ears" ]
			},
			{
				"id" : ":men_with_bunny_ears:",
				"symbol" : "👯‍♂️",
				"group" : "people",
				"keywords" : [ "bunny ear", "dancer", "men",
						"men with bunny ears", "partying" ]
			},
			{
				"id" : ":women_with_bunny_ears:",
				"symbol" : "👯‍♀️",
				"group" : "people",
				"keywords" : [ "bunny ear", "dancer", "partying", "women",
						"women with bunny ears" ]
			},
			{
				"id" : ":person_in_steamy_room:",
				"symbol" : "🧖",
				"group" : "people",
				"keywords" : [ "person in steamy room", "sauna", "steam room",
						"" ]
			},
			{
				"id" : ":man_in_steamy_room:",
				"symbol" : "🧖‍♂️",
				"group" : "people",
				"keywords" : [ "man in steamy room", "sauna", "steam room" ]
			},
			{
				"id" : ":woman_in_steamy_room:",
				"symbol" : "🧖‍♀️",
				"group" : "people",
				"keywords" : [ "sauna", "steam room", "woman in steamy room" ]
			},
			{
				"id" : ":person_climbing:",
				"symbol" : "🧗",
				"group" : "people",
				"keywords" : [ "climber", "person climbing" ]
			},
			{
				"id" : ":man_climbing:",
				"symbol" : "🧗‍♂️",
				"group" : "people",
				"keywords" : [ "climber", "man climbing" ]
			},
			{
				"id" : ":woman_climbing:",
				"symbol" : "🧗‍♀️",
				"group" : "people",
				"keywords" : [ "climber", "woman climbing" ]
			},
			{
				"id" : ":person_in_lotus_position:",
				"symbol" : "🧘",
				"group" : "people",
				"keywords" : [ "meditation", "person in lotus position",
						"yoga", "" ]
			},
			{
				"id" : ":man_in_lotus_position:",
				"symbol" : "🧘‍♂️",
				"group" : "people",
				"keywords" : [ "man in lotus position", "meditation", "yoga" ]
			},
			{
				"id" : ":woman_in_lotus_position:",
				"symbol" : "🧘‍♀️",
				"group" : "people",
				"keywords" : [ "meditation", "woman in lotus position", "yoga" ]
			},
			{
				"id" : ":person_taking_bath:",
				"symbol" : "🛀",
				"group" : "people",
				"keywords" : [ "bath", "bathtub", "person taking bath" ]
			},
			{
				"id" : ":person_in_bed:",
				"symbol" : "🛌",
				"group" : "people",
				"keywords" : [ "hotel", "person in bed", "sleep" ]
			},
			{
				"id" : ":man_in_suit_levitating:",
				"symbol" : "🕴",
				"group" : "people",
				"keywords" : [ "business", "man", "man in suit levitating",
						"suit" ]
			},
			{
				"id" : ":speaking_head:",
				"symbol" : "🗣",
				"group" : "people",
				"keywords" : [ "face", "head", "silhouette", "speak",
						"speaking" ]
			},
			{
				"id" : ":bust_in_silhouette:",
				"symbol" : "👤",
				"group" : "people",
				"keywords" : [ "bust", "bust in silhouette", "silhouette" ]
			},
			{
				"id" : ":busts_in_silhouette:",
				"symbol" : "👥",
				"group" : "people",
				"keywords" : [ "bust", "busts in silhouette", "silhouette" ]
			},
			{
				"id" : ":person_fencing:",
				"symbol" : "🤺",
				"group" : "people",
				"keywords" : [ "fencer", "fencing", "person fencing", "sword" ]
			},
			{
				"id" : ":horse_racing:",
				"symbol" : "🏇",
				"group" : "people",
				"keywords" : [ "horse", "jockey", "racehorse", "racing" ]
			},
			{
				"id" : ":skier:",
				"symbol" : "⛷",
				"group" : "people",
				"keywords" : [ "ski", "skier", "snow" ]
			},
			{
				"id" : ":snowboarder:",
				"symbol" : "🏂",
				"group" : "people",
				"keywords" : [ "ski", "snow", "snowboard", "snowboarder" ]
			},
			{
				"id" : ":person_golfing:",
				"symbol" : "🏌",
				"group" : "people",
				"keywords" : [ "ball", "golf", "person golfing" ]
			},
			{
				"id" : ":man_golfing:",
				"symbol" : "🏌️‍♂️",
				"group" : "people",
				"keywords" : [ "golf", "man", "man golfing" ]
			},
			{
				"id" : ":woman_golfing:",
				"symbol" : "🏌️‍♀️",
				"group" : "people",
				"keywords" : [ "golf", "woman", "woman golfing" ]
			},
			{
				"id" : ":person_surfing:",
				"symbol" : "🏄",
				"group" : "people",
				"keywords" : [ "person surfing", "surfing" ]
			},
			{
				"id" : ":man_surfing:",
				"symbol" : "🏄‍♂️",
				"group" : "people",
				"keywords" : [ "man", "surfing" ]
			},
			{
				"id" : ":woman_surfing:",
				"symbol" : "🏄‍♀️",
				"group" : "people",
				"keywords" : [ "surfing", "woman" ]
			},
			{
				"id" : ":person_rowing_boat:",
				"symbol" : "🚣",
				"group" : "people",
				"keywords" : [ "boat", "person rowing boat", "rowboat" ]
			},
			{
				"id" : ":man_rowing_boat:",
				"symbol" : "🚣‍♂️",
				"group" : "people",
				"keywords" : [ "boat", "man", "man rowing boat", "rowboat" ]
			},
			{
				"id" : ":woman_rowing_boat:",
				"symbol" : "🚣‍♀️",
				"group" : "people",
				"keywords" : [ "boat", "rowboat", "woman", "woman rowing boat" ]
			},
			{
				"id" : ":person_swimming:",
				"symbol" : "🏊",
				"group" : "people",
				"keywords" : [ "person swimming", "swim" ]
			},
			{
				"id" : ":man_swimming:",
				"symbol" : "🏊‍♂️",
				"group" : "people",
				"keywords" : [ "man", "man swimming", "swim" ]
			},
			{
				"id" : ":woman_swimming:",
				"symbol" : "🏊‍♀️",
				"group" : "people",
				"keywords" : [ "swim", "woman", "woman swimming" ]
			},
			{
				"id" : ":person_bouncing_ball:",
				"symbol" : "⛹",
				"group" : "people",
				"keywords" : [ "ball", "person bouncing ball" ]
			},
			{
				"id" : ":man_bouncing_ball:",
				"symbol" : "⛹️‍♂️",
				"group" : "people",
				"keywords" : [ "ball", "man", "man bouncing ball" ]
			},
			{
				"id" : ":woman_bouncing_ball:",
				"symbol" : "⛹️‍♀️",
				"group" : "people",
				"keywords" : [ "ball", "woman", "woman bouncing ball" ]
			},
			{
				"id" : ":person_lifting_weights:",
				"symbol" : "🏋",
				"group" : "people",
				"keywords" : [ "lifter", "person lifting weights", "weight" ]
			},
			{
				"id" : ":man_lifting_weights:",
				"symbol" : "🏋️‍♂️",
				"group" : "people",
				"keywords" : [ "man", "man lifting weights", "weight lifter" ]
			},
			{
				"id" : ":woman_lifting_weights:",
				"symbol" : "🏋️‍♀️",
				"group" : "people",
				"keywords" : [ "weight lifter", "woman",
						"woman lifting weights" ]
			},
			{
				"id" : ":person_biking:",
				"symbol" : "🚴",
				"group" : "people",
				"keywords" : [ "bicycle", "biking", "cyclist", "person biking" ]
			},
			{
				"id" : ":man_biking:",
				"symbol" : "🚴‍♂️",
				"group" : "people",
				"keywords" : [ "bicycle", "biking", "cyclist", "man" ]
			},
			{
				"id" : ":woman_biking:",
				"symbol" : "🚴‍♀️",
				"group" : "people",
				"keywords" : [ "bicycle", "biking", "cyclist", "woman" ]
			},
			{
				"id" : ":person_mountain_biking:",
				"symbol" : "🚵",
				"group" : "people",
				"keywords" : [ "bicycle", "bicyclist", "bike", "cyclist",
						"mountain", "person mountain biking" ]
			},
			{
				"id" : ":man_mountain_biking:",
				"symbol" : "🚵‍♂️",
				"group" : "people",
				"keywords" : [ "bicycle", "bike", "cyclist", "man",
						"man mountain biking", "mountain" ]
			},
			{
				"id" : ":woman_mountain_biking:",
				"symbol" : "🚵‍♀️",
				"group" : "people",
				"keywords" : [ "bicycle", "bike", "biking", "cyclist",
						"mountain", "woman" ]
			},
			{
				"id" : ":racing_car:",
				"symbol" : "🏎",
				"group" : "people",
				"keywords" : [ "car", "racing" ]
			},
			{
				"id" : ":motorcycle:",
				"symbol" : "🏍",
				"group" : "people",
				"keywords" : [ "motorcycle", "racing" ]
			},
			{
				"id" : ":person_cartwheeling:",
				"symbol" : "🤸",
				"group" : "people",
				"keywords" : [ "cartwheel", "gymnastics", "person cartwheeling" ]
			},
			{
				"id" : ":man_cartwheeling:",
				"symbol" : "🤸‍♂️",
				"group" : "people",
				"keywords" : [ "cartwheel", "gymnastics", "man",
						"man cartwheeling" ]
			},
			{
				"id" : ":woman_cartwheeling:",
				"symbol" : "🤸‍♀️",
				"group" : "people",
				"keywords" : [ "cartwheel", "gymnastics", "woman",
						"woman cartwheeling" ]
			},
			{
				"id" : ":people_wrestling:",
				"symbol" : "🤼",
				"group" : "people",
				"keywords" : [ "people wrestling", "wrestle", "wrestler" ]
			},
			{
				"id" : ":men_wrestling:",
				"symbol" : "🤼‍♂️",
				"group" : "people",
				"keywords" : [ "men", "men wrestling", "wrestle" ]
			},
			{
				"id" : ":women_wrestling:",
				"symbol" : "🤼‍♀️",
				"group" : "people",
				"keywords" : [ "women", "women wrestling", "wrestle" ]
			},
			{
				"id" : ":person_playing_water_polo:",
				"symbol" : "🤽",
				"group" : "people",
				"keywords" : [ "person playing water polo", "polo", "water" ]
			},
			{
				"id" : ":man_playing_water_polo:",
				"symbol" : "🤽‍♂️",
				"group" : "people",
				"keywords" : [ "man", "man playing water polo", "water polo" ]
			},
			{
				"id" : ":woman_playing_water_polo:",
				"symbol" : "🤽‍♀️",
				"group" : "people",
				"keywords" : [ "water polo", "woman",
						"woman playing water polo" ]
			},
			{
				"id" : ":person_playing_handball:",
				"symbol" : "🤾",
				"group" : "people",
				"keywords" : [ "ball", "handball", "person playing handball" ]
			},
			{
				"id" : ":man_playing_handball:",
				"symbol" : "🤾‍♂️",
				"group" : "people",
				"keywords" : [ "handball", "man", "man playing handball" ]
			},
			{
				"id" : ":woman_playing_handball:",
				"symbol" : "🤾‍♀️",
				"group" : "people",
				"keywords" : [ "handball", "woman", "woman playing handball" ]
			},
			{
				"id" : ":person_juggling:",
				"symbol" : "🤹",
				"group" : "people",
				"keywords" : [ "balance", "juggle", "multitask",
						"person juggling", "skill" ]
			},
			{
				"id" : ":man_juggling:",
				"symbol" : "🤹‍♂️",
				"group" : "people",
				"keywords" : [ "juggling", "man", "multitask" ]
			},
			{
				"id" : ":woman_juggling:",
				"symbol" : "🤹‍♀️",
				"group" : "people",
				"keywords" : [ "juggling", "multitask", "woman" ]
			},
			{
				"id" : ":man_and_woman_holding_hands:",
				"symbol" : "👫",
				"group" : "people",
				"keywords" : [ "couple", "hand", "hold", "man",
						"man and woman holding hands", "woman" ]
			},
			{
				"id" : ":two_men_holding_hands:",
				"symbol" : "👬",
				"group" : "people",
				"keywords" : [ "couple", "Gemini", "man", "twins",
						"two men holding hands", "zodiac" ]
			},
			{
				"id" : ":two_women_holding_hands:",
				"symbol" : "👭",
				"group" : "people",
				"keywords" : [ "couple", "hand", "two women holding hands",
						"woman" ]
			},
			{
				"id" : ":kiss:",
				"symbol" : "💏",
				"group" : "people",
				"keywords" : [ "couple", "kiss" ]
			},
			{
				"id" : ":kiss_woman_man:",
				"symbol" : "👩‍❤️‍💋‍👨",
				"group" : "people",
				"keywords" : [ "couple", "kiss", "man", "woman" ]
			},
			{
				"id" : ":kiss_man_man:",
				"symbol" : "👨‍❤️‍💋‍👨",
				"group" : "people",
				"keywords" : [ "couple", "kiss", "man" ]
			},
			{
				"id" : ":kiss_woman_woman:",
				"symbol" : "👩‍❤️‍💋‍👩",
				"group" : "people",
				"keywords" : [ "couple", "kiss", "woman" ]
			},
			{
				"id" : ":couple_with_heart:",
				"symbol" : "💑",
				"group" : "people",
				"keywords" : [ "couple", "couple with heart", "love" ]
			},
			{
				"id" : ":couple_with_heart_woman_man:",
				"symbol" : "👩‍❤️‍👨",
				"group" : "people",
				"keywords" : [ "couple", "couple with heart", "love", "man",
						"woman" ]
			},
			{
				"id" : ":couple_with_heart_man_man:",
				"symbol" : "👨‍❤️‍👨",
				"group" : "people",
				"keywords" : [ "couple", "couple with heart", "love", "man" ]
			},
			{
				"id" : ":couple_with_heart_woman_woman:",
				"symbol" : "👩‍❤️‍👩",
				"group" : "people",
				"keywords" : [ "couple", "couple with heart", "love", "woman" ]
			},
			{
				"id" : ":family:",
				"symbol" : "👪",
				"group" : "people",
				"keywords" : [ "family" ]
			},
			{
				"id" : ":family_man_woman_boy:",
				"symbol" : "👨‍👩‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "man", "woman" ]
			},
			{
				"id" : ":family_man_woman_girl:",
				"symbol" : "👨‍👩‍👧",
				"group" : "people",
				"keywords" : [ "family", "girl", "man", "woman" ]
			},
			{
				"id" : ":family_man_woman_girl_boy:",
				"symbol" : "👨‍👩‍👧‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "girl", "man", "woman" ]
			},
			{
				"id" : ":family_man_woman_boy_boy:",
				"symbol" : "👨‍👩‍👦‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "man", "woman" ]
			},
			{
				"id" : ":family_man_woman_girl_girl:",
				"symbol" : "👨‍👩‍👧‍👧",
				"group" : "people",
				"keywords" : [ "family", "girl", "man", "woman" ]
			},
			{
				"id" : ":family_man_man_boy:",
				"symbol" : "👨‍👨‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "man" ]
			},
			{
				"id" : ":family_man_man_girl:",
				"symbol" : "👨‍👨‍👧",
				"group" : "people",
				"keywords" : [ "family", "girl", "man" ]
			},
			{
				"id" : ":family_man_man_girl_boy:",
				"symbol" : "👨‍👨‍👧‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "girl", "man" ]
			},
			{
				"id" : ":family_man_man_boy_boy:",
				"symbol" : "👨‍👨‍👦‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "man" ]
			},
			{
				"id" : ":family_man_man_girl_girl:",
				"symbol" : "👨‍👨‍👧‍👧",
				"group" : "people",
				"keywords" : [ "family", "girl", "man" ]
			},
			{
				"id" : ":family_woman_woman_boy:",
				"symbol" : "👩‍👩‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "woman" ]
			},
			{
				"id" : ":family_woman_woman_girl:",
				"symbol" : "👩‍👩‍👧",
				"group" : "people",
				"keywords" : [ "family", "girl", "woman" ]
			},
			{
				"id" : ":family_woman_woman_girl_boy:",
				"symbol" : "👩‍👩‍👧‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "girl", "woman" ]
			},
			{
				"id" : ":family_woman_woman_boy_boy:",
				"symbol" : "👩‍👩‍👦‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "woman" ]
			},
			{
				"id" : ":family_woman_woman_girl_girl:",
				"symbol" : "👩‍👩‍👧‍👧",
				"group" : "people",
				"keywords" : [ "family", "girl", "woman" ]
			},
			{
				"id" : ":family_man_boy:",
				"symbol" : "👨‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "man" ]
			},
			{
				"id" : ":family_man_boy_boy:",
				"symbol" : "👨‍👦‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "man" ]
			},
			{
				"id" : ":family_man_girl:",
				"symbol" : "👨‍👧",
				"group" : "people",
				"keywords" : [ "family", "girl", "man" ]
			},
			{
				"id" : ":family_man_girl_boy:",
				"symbol" : "👨‍👧‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "girl", "man" ]
			},
			{
				"id" : ":family_man_girl_girl:",
				"symbol" : "👨‍👧‍👧",
				"group" : "people",
				"keywords" : [ "family", "girl", "man" ]
			},
			{
				"id" : ":family_woman_boy:",
				"symbol" : "👩‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "woman" ]
			},
			{
				"id" : ":family_woman_boy_boy:",
				"symbol" : "👩‍👦‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "woman" ]
			},
			{
				"id" : ":family_woman_girl:",
				"symbol" : "👩‍👧",
				"group" : "people",
				"keywords" : [ "family", "girl", "woman" ]
			},
			{
				"id" : ":family_woman_girl_boy:",
				"symbol" : "👩‍👧‍👦",
				"group" : "people",
				"keywords" : [ "boy", "family", "girl", "woman" ]
			},
			{
				"id" : ":family_woman_girl_girl:",
				"symbol" : "👩‍👧‍👧",
				"group" : "people",
				"keywords" : [ "family", "girl", "woman" ]
			},
			{
				"id" : ":selfie:",
				"symbol" : "🤳",
				"group" : "people",
				"keywords" : [ "camera", "phone", "selfie" ]
			},
			{
				"id" : ":flexed_biceps:",
				"symbol" : "💪",
				"group" : "people",
				"keywords" : [ "biceps", "comic", "flex", "flexed biceps",
						"muscle" ]
			},
			{
				"id" : ":backhand_index_pointing_left:",
				"symbol" : "👈",
				"group" : "people",
				"keywords" : [ "backhand", "backhand index pointing left",
						"finger", "hand", "index", "point" ]
			},
			{
				"id" : ":backhand_index_pointing_right:",
				"symbol" : "👉",
				"group" : "people",
				"keywords" : [ "backhand", "backhand index pointing right",
						"finger", "hand", "index", "point" ]
			},
			{
				"id" : ":index_pointing_up:",
				"symbol" : "☝",
				"group" : "people",
				"keywords" : [ "finger", "hand", "index", "index pointing up",
						"point", "up" ]
			},
			{
				"id" : ":backhand_index_pointing_up:",
				"symbol" : "👆",
				"group" : "people",
				"keywords" : [ "backhand", "backhand index pointing up",
						"finger", "hand", "point", "up" ]
			},
			{
				"id" : ":middle_finger:",
				"symbol" : "🖕",
				"group" : "people",
				"keywords" : [ "finger", "hand", "middle finger" ]
			},
			{
				"id" : ":backhand_index_pointing_down:",
				"symbol" : "👇",
				"group" : "people",
				"keywords" : [ "backhand", "backhand index pointing down",
						"down", "finger", "hand", "point" ]
			},
			{
				"id" : ":victory_hand:",
				"symbol" : "✌",
				"group" : "people",
				"keywords" : [ "hand", "v", "victory" ]
			},
			{
				"id" : ":crossed_fingers:",
				"symbol" : "🤞",
				"group" : "people",
				"keywords" : [ "cross", "crossed fingers", "finger", "hand",
						"luck" ]
			},
			{
				"id" : ":vulcan_salute:",
				"symbol" : "🖖",
				"group" : "people",
				"keywords" : [ "finger", "hand", "spock", "vulcan",
						"vulcan salute" ]
			},
			{
				"id" : ":sign_of_the_horns:",
				"symbol" : "🤘",
				"group" : "people",
				"keywords" : [ "finger", "hand", "horns", "rock-on",
						"sign of the horns" ]
			},
			{
				"id" : ":call_me_hand:",
				"symbol" : "🤙",
				"group" : "people",
				"keywords" : [ "call", "call me hand", "hand" ]
			},
			{
				"id" : ":hand_with_fingers_splayed:",
				"symbol" : "🖐",
				"group" : "people",
				"keywords" : [ "finger", "hand", "hand with fingers splayed",
						"splayed" ]
			},
			{
				"id" : ":raised_hand:",
				"symbol" : "✋",
				"group" : "people",
				"keywords" : [ "hand", "raised hand" ]
			},
			{
				"id" : ":ok_hand:",
				"symbol" : "👌",
				"group" : "people",
				"keywords" : [ "hand", "OK" ]
			},
			{
				"id" : ":thumbs_up:",
				"symbol" : "👍",
				"group" : "people",
				"keywords" : [ "+1", "hand", "thumb", "thumbs up", "up" ]
			},
			{
				"id" : ":thumbs_down:",
				"symbol" : "👎",
				"group" : "people",
				"keywords" : [ "-1", "down", "hand", "thumb", "thumbs down" ]
			},
			{
				"id" : ":raised_fist:",
				"symbol" : "✊",
				"group" : "people",
				"keywords" : [ "clenched", "fist", "hand", "punch",
						"raised fist" ]
			},
			{
				"id" : ":oncoming_fist:",
				"symbol" : "👊",
				"group" : "people",
				"keywords" : [ "clenched", "fist", "hand", "oncoming fist",
						"punch" ]
			},
			{
				"id" : ":left-facing_fist:",
				"symbol" : "🤛",
				"group" : "people",
				"keywords" : [ "fist", "left-facing fist", "leftwards" ]
			},
			{
				"id" : ":right-facing_fist:",
				"symbol" : "🤜",
				"group" : "people",
				"keywords" : [ "fist", "right-facing fist", "rightwards" ]
			},
			{
				"id" : ":raised_back_of_hand:",
				"symbol" : "🤚",
				"group" : "people",
				"keywords" : [ "backhand", "raised", "raised back of hand" ]
			},
			{
				"id" : ":waving_hand:",
				"symbol" : "👋",
				"group" : "people",
				"keywords" : [ "hand", "wave", "waving" ]
			},
			{
				"id" : ":love-you_gesture:",
				"symbol" : "🤟",
				"group" : "people",
				"keywords" : [ "hand", "ILY", "love-you gesture" ]
			},
			{
				"id" : ":writing_hand:",
				"symbol" : "✍",
				"group" : "people",
				"keywords" : [ "hand", "write", "writing hand" ]
			},
			{
				"id" : ":clapping_hands:",
				"symbol" : "👏",
				"group" : "people",
				"keywords" : [ "clap", "clapping hands", "hand" ]
			},
			{
				"id" : ":open_hands:",
				"symbol" : "👐",
				"group" : "people",
				"keywords" : [ "hand", "open", "open hands" ]
			},
			{
				"id" : ":raising_hands:",
				"symbol" : "🙌",
				"group" : "people",
				"keywords" : [ "celebration", "gesture", "hand", "hooray",
						"raised", "raising hands" ]
			},
			{
				"id" : ":palms_up_together:",
				"symbol" : "🤲",
				"group" : "people",
				"keywords" : [ "palms up together", "prayer", "" ]
			},
			{
				"id" : ":folded_hands:",
				"symbol" : "🙏",
				"group" : "people",
				"keywords" : [ "ask", "folded hands", "hand", "please", "pray",
						"thanks" ]
			},
			{
				"id" : ":handshake:",
				"symbol" : "🤝",
				"group" : "people",
				"keywords" : [ "agreement", "hand", "handshake", "meeting",
						"shake" ]
			},
			{
				"id" : ":nail_polish:",
				"symbol" : "💅",
				"group" : "people",
				"keywords" : [ "care", "cosmetics", "manicure", "nail",
						"polish" ]
			},
			{
				"id" : ":ear:",
				"symbol" : "👂",
				"group" : "people",
				"keywords" : [ "body", "ear" ]
			},
			{
				"id" : ":nose:",
				"symbol" : "👃",
				"group" : "people",
				"keywords" : [ "body", "nose" ]
			},
			{
				"id" : ":footprints:",
				"symbol" : "👣",
				"group" : "people",
				"keywords" : [ "clothing", "footprint", "footprints", "print" ]
			},
			{
				"id" : ":eyes:",
				"symbol" : "👀",
				"group" : "people",
				"keywords" : [ "eye", "eyes", "face" ]
			},
			{
				"id" : ":eye:",
				"symbol" : "👁",
				"group" : "people",
				"keywords" : [ "body", "eye" ]
			},
			{
				"id" : ":eye_in_speech_bubble:",
				"symbol" : "👁️‍🗨️",
				"group" : "people",
				"keywords" : [ "eye", "eye in speech bubble", "speech bubble",
						"witness" ]
			},
			{
				"id" : ":brain:",
				"symbol" : "🧠",
				"group" : "people",
				"keywords" : [ "brain", "intelligent" ]
			},
			{
				"id" : ":tongue:",
				"symbol" : "👅",
				"group" : "people",
				"keywords" : [ "body", "tongue" ]
			},
			{
				"id" : ":mouth:",
				"symbol" : "👄",
				"group" : "people",
				"keywords" : [ "lips", "mouth" ]
			},
			{
				"id" : ":kiss_mark:",
				"symbol" : "💋",
				"group" : "people",
				"keywords" : [ "kiss", "kiss mark", "lips" ]
			},
			{
				"id" : ":heart_with_arrow:",
				"symbol" : "💘",
				"group" : "people",
				"keywords" : [ "arrow", "cupid", "heart with arrow" ]
			},
			{
				"id" : ":heart_with_ribbon:",
				"symbol" : "💝",
				"group" : "people",
				"keywords" : [ "heart with ribbon", "ribbon", "valentine" ]
			},
			{
				"id" : ":sparkling_heart:",
				"symbol" : "💖",
				"group" : "people",
				"keywords" : [ "excited", "sparkle", "sparkling heart" ]
			},
			{
				"id" : ":growing_heart:",
				"symbol" : "💗",
				"group" : "people",
				"keywords" : [ "excited", "growing", "growing heart",
						"nervous", "pulse" ]
			},
			{
				"id" : ":beating_heart:",
				"symbol" : "💓",
				"group" : "people",
				"keywords" : [ "beating", "beating heart", "heartbeat",
						"pulsating" ]
			},
			{
				"id" : ":revolving_hearts:",
				"symbol" : "💞",
				"group" : "people",
				"keywords" : [ "revolving", "revolving hearts" ]
			},
			{
				"id" : ":two_hearts:",
				"symbol" : "💕",
				"group" : "people",
				"keywords" : [ "love", "two hearts" ]
			},
			{
				"id" : ":love_letter:",
				"symbol" : "💌",
				"group" : "people",
				"keywords" : [ "heart", "letter", "love", "mail" ]
			},
			{
				"id" : ":heavy_heart_exclamation:",
				"symbol" : "❣",
				"group" : "people",
				"keywords" : [ "exclamation", "heavy heart exclamation",
						"mark", "punctuation" ]
			},
			{
				"id" : ":broken_heart:",
				"symbol" : "💔",
				"group" : "people",
				"keywords" : [ "break", "broken", "broken heart" ]
			},
			{
				"id" : ":red_heart:",
				"symbol" : "❤",
				"group" : "people",
				"keywords" : [ "heart", "red heart" ]
			},
			{
				"id" : ":orange_heart:",
				"symbol" : "🧡",
				"group" : "people",
				"keywords" : [ "orange", "orange heart" ]
			},
			{
				"id" : ":yellow_heart:",
				"symbol" : "💛",
				"group" : "people",
				"keywords" : [ "yellow", "yellow heart" ]
			},
			{
				"id" : ":green_heart:",
				"symbol" : "💚",
				"group" : "people",
				"keywords" : [ "green", "green heart" ]
			},
			{
				"id" : ":blue_heart:",
				"symbol" : "💙",
				"group" : "people",
				"keywords" : [ "blue", "blue heart" ]
			},
			{
				"id" : ":purple_heart:",
				"symbol" : "💜",
				"group" : "people",
				"keywords" : [ "purple", "purple heart" ]
			},
			{
				"id" : ":black_heart:",
				"symbol" : "🖤",
				"group" : "people",
				"keywords" : [ "black", "black heart", "evil", "wicked" ]
			},
			{
				"id" : ":heart_decoration:",
				"symbol" : "💟",
				"group" : "people",
				"keywords" : [ "heart", "heart decoration" ]
			},
			{
				"id" : ":zzz:",
				"symbol" : "💤",
				"group" : "people",
				"keywords" : [ "comic", "sleep", "zzz" ]
			},
			{
				"id" : ":anger_symbol:",
				"symbol" : "💢",
				"group" : "people",
				"keywords" : [ "anger symbol", "angry", "comic", "mad" ]
			},
			{
				"id" : ":bomb:",
				"symbol" : "💣",
				"group" : "people",
				"keywords" : [ "bomb", "comic" ]
			},
			{
				"id" : ":collision:",
				"symbol" : "💥",
				"group" : "people",
				"keywords" : [ "boom", "collision", "comic" ]
			},
			{
				"id" : ":sweat_droplets:",
				"symbol" : "💦",
				"group" : "people",
				"keywords" : [ "comic", "splashing", "sweat", "sweat droplets" ]
			},
			{
				"id" : ":dashing_away:",
				"symbol" : "💨",
				"group" : "people",
				"keywords" : [ "comic", "dash", "dashing away", "running" ]
			},
			{
				"id" : ":dizzy:",
				"symbol" : "💫",
				"group" : "people",
				"keywords" : [ "comic", "dizzy", "star" ]
			},
			{
				"id" : ":speech_balloon:",
				"symbol" : "💬",
				"group" : "people",
				"keywords" : [ "balloon", "bubble", "comic", "dialog", "speech" ]
			},
			{
				"id" : ":left_speech_bubble:",
				"symbol" : "🗨",
				"group" : "people",
				"keywords" : [ "dialog", "left speech bubble", "speech" ]
			},
			{
				"id" : ":right_anger_bubble:",
				"symbol" : "🗯",
				"group" : "people",
				"keywords" : [ "angry", "balloon", "bubble", "mad",
						"right anger bubble" ]
			},
			{
				"id" : ":thought_balloon:",
				"symbol" : "💭",
				"group" : "people",
				"keywords" : [ "balloon", "bubble", "comic", "thought" ]
			},
			{
				"id" : ":hole:",
				"symbol" : "🕳",
				"group" : "people",
				"keywords" : [ "hole" ]
			},
			{
				"id" : ":glasses:",
				"symbol" : "👓",
				"group" : "people",
				"keywords" : [ "clothing", "eye", "eyeglasses", "eyewear",
						"glasses" ]
			},
			{
				"id" : ":sunglasses:",
				"symbol" : "🕶",
				"group" : "people",
				"keywords" : [ "dark", "eye", "eyewear", "glasses",
						"sunglasses" ]
			},
			{
				"id" : ":necktie:",
				"symbol" : "👔",
				"group" : "people",
				"keywords" : [ "clothing", "necktie", "tie" ]
			},
			{
				"id" : ":t-shirt:",
				"symbol" : "👕",
				"group" : "people",
				"keywords" : [ "clothing", "shirt", "t-shirt", "tshirt" ]
			},
			{
				"id" : ":jeans:",
				"symbol" : "👖",
				"group" : "people",
				"keywords" : [ "clothing", "jeans", "pants", "trousers" ]
			},
			{
				"id" : ":scarf:",
				"symbol" : "🧣",
				"group" : "people",
				"keywords" : [ "neck", "scarf" ]
			},
			{
				"id" : ":gloves:",
				"symbol" : "🧤",
				"group" : "people",
				"keywords" : [ "gloves", "hand" ]
			},
			{
				"id" : ":coat:",
				"symbol" : "🧥",
				"group" : "people",
				"keywords" : [ "coat", "jacket" ]
			},
			{
				"id" : ":socks:",
				"symbol" : "🧦",
				"group" : "people",
				"keywords" : [ "socks", "stocking" ]
			},
			{
				"id" : ":dress:",
				"symbol" : "👗",
				"group" : "people",
				"keywords" : [ "clothing", "dress" ]
			},
			{
				"id" : ":kimono:",
				"symbol" : "👘",
				"group" : "people",
				"keywords" : [ "clothing", "kimono" ]
			},
			{
				"id" : ":bikini:",
				"symbol" : "👙",
				"group" : "people",
				"keywords" : [ "bikini", "clothing", "swim" ]
			},
			{
				"id" : ":woman’s_clothes:",
				"symbol" : "👚",
				"group" : "people",
				"keywords" : [ "clothing", "woman", "woman’s clothes" ]
			},
			{
				"id" : ":purse:",
				"symbol" : "👛",
				"group" : "people",
				"keywords" : [ "clothing", "coin", "purse" ]
			},
			{
				"id" : ":handbag:",
				"symbol" : "👜",
				"group" : "people",
				"keywords" : [ "bag", "clothing", "handbag", "purse" ]
			},
			{
				"id" : ":clutch_bag:",
				"symbol" : "👝",
				"group" : "people",
				"keywords" : [ "bag", "clothing", "clutch bag", "pouch" ]
			},
			{
				"id" : ":shopping_bags:",
				"symbol" : "🛍",
				"group" : "people",
				"keywords" : [ "bag", "hotel", "shopping", "shopping bags" ]
			},
			{
				"id" : ":backpack:",
				"symbol" : "🎒",
				"group" : "people",
				"keywords" : [ "backpack", "bag", "rucksack", "satchel",
						"school" ]
			},
			{
				"id" : ":man’s_shoe:",
				"symbol" : "👞",
				"group" : "people",
				"keywords" : [ "clothing", "man", "man’s shoe", "shoe" ]
			},
			{
				"id" : ":running_shoe:",
				"symbol" : "👟",
				"group" : "people",
				"keywords" : [ "athletic", "clothing", "running shoe", "shoe",
						"sneaker" ]
			},
			{
				"id" : ":high-heeled_shoe:",
				"symbol" : "👠",
				"group" : "people",
				"keywords" : [ "clothing", "heel", "high-heeled shoe", "shoe",
						"woman" ]
			},
			{
				"id" : ":woman’s_sandal:",
				"symbol" : "👡",
				"group" : "people",
				"keywords" : [ "clothing", "sandal", "shoe", "woman",
						"woman’s sandal" ]
			},
			{
				"id" : ":woman’s_boot:",
				"symbol" : "👢",
				"group" : "people",
				"keywords" : [ "boot", "clothing", "shoe", "woman",
						"woman’s boot" ]
			},
			{
				"id" : ":crown:",
				"symbol" : "👑",
				"group" : "people",
				"keywords" : [ "clothing", "crown", "king", "queen" ]
			},
			{
				"id" : ":woman’s_hat:",
				"symbol" : "👒",
				"group" : "people",
				"keywords" : [ "clothing", "hat", "woman", "woman’s hat" ]
			},
			{
				"id" : ":top_hat:",
				"symbol" : "🎩",
				"group" : "people",
				"keywords" : [ "clothing", "hat", "top", "tophat" ]
			},
			{
				"id" : ":graduation_cap:",
				"symbol" : "🎓",
				"group" : "people",
				"keywords" : [ "cap", "celebration", "clothing", "graduation",
						"hat" ]
			},
			{
				"id" : ":billed_cap:",
				"symbol" : "🧢",
				"group" : "people",
				"keywords" : [ "baseball cap", "billed cap" ]
			},
			{
				"id" : ":rescue_worker’s_helmet:",
				"symbol" : "⛑",
				"group" : "people",
				"keywords" : [ "aid", "cross", "face", "hat", "helmet",
						"rescue worker’s helmet" ]
			},
			{
				"id" : ":prayer_beads:",
				"symbol" : "📿",
				"group" : "people",
				"keywords" : [ "beads", "clothing", "necklace", "prayer",
						"religion" ]
			},
			{
				"id" : ":lipstick:",
				"symbol" : "💄",
				"group" : "people",
				"keywords" : [ "cosmetics", "lipstick", "makeup" ]
			},
			{
				"id" : ":ring:",
				"symbol" : "💍",
				"group" : "people",
				"keywords" : [ "diamond", "ring" ]
			},
			{
				"id" : ":gem_stone:",
				"symbol" : "💎",
				"group" : "people",
				"keywords" : [ "diamond", "gem", "gem stone", "jewel" ]
			},
			{
				"id" : ":monkey_face:",
				"symbol" : "🐵",
				"group" : "nature",
				"keywords" : [ "face", "monkey" ]
			},
			{
				"id" : ":monkey:",
				"symbol" : "🐒",
				"group" : "nature",
				"keywords" : [ "monkey" ]
			},
			{
				"id" : ":gorilla:",
				"symbol" : "🦍",
				"group" : "nature",
				"keywords" : [ "gorilla" ]
			},
			{
				"id" : ":dog_face:",
				"symbol" : "🐶",
				"group" : "nature",
				"keywords" : [ "dog", "face", "pet" ]
			},
			{
				"id" : ":dog:",
				"symbol" : "🐕",
				"group" : "nature",
				"keywords" : [ "dog", "pet" ]
			},
			{
				"id" : ":poodle:",
				"symbol" : "🐩",
				"group" : "nature",
				"keywords" : [ "dog", "poodle" ]
			},
			{
				"id" : ":wolf_face:",
				"symbol" : "🐺",
				"group" : "nature",
				"keywords" : [ "face", "wolf" ]
			},
			{
				"id" : ":fox_face:",
				"symbol" : "🦊",
				"group" : "nature",
				"keywords" : [ "face", "fox" ]
			},
			{
				"id" : ":cat_face:",
				"symbol" : "🐱",
				"group" : "nature",
				"keywords" : [ "cat", "face", "pet" ]
			},
			{
				"id" : ":cat:",
				"symbol" : "🐈",
				"group" : "nature",
				"keywords" : [ "cat", "pet" ]
			},
			{
				"id" : ":lion_face:",
				"symbol" : "🦁",
				"group" : "nature",
				"keywords" : [ "face", "Leo", "lion", "zodiac" ]
			},
			{
				"id" : ":tiger_face:",
				"symbol" : "🐯",
				"group" : "nature",
				"keywords" : [ "face", "tiger" ]
			},
			{
				"id" : ":tiger:",
				"symbol" : "🐅",
				"group" : "nature",
				"keywords" : [ "tiger" ]
			},
			{
				"id" : ":leopard:",
				"symbol" : "🐆",
				"group" : "nature",
				"keywords" : [ "leopard" ]
			},
			{
				"id" : ":horse_face:",
				"symbol" : "🐴",
				"group" : "nature",
				"keywords" : [ "face", "horse" ]
			},
			{
				"id" : ":horse:",
				"symbol" : "🐎",
				"group" : "nature",
				"keywords" : [ "equestrian", "horse", "racehorse", "racing" ]
			},
			{
				"id" : ":unicorn_face:",
				"symbol" : "🦄",
				"group" : "nature",
				"keywords" : [ "face", "unicorn" ]
			},
			{
				"id" : ":zebra:",
				"symbol" : "🦓",
				"group" : "nature",
				"keywords" : [ "stripe", "zebra" ]
			},
			{
				"id" : ":deer:",
				"symbol" : "🦌",
				"group" : "nature",
				"keywords" : [ "deer" ]
			},
			{
				"id" : ":cow_face:",
				"symbol" : "🐮",
				"group" : "nature",
				"keywords" : [ "cow", "face" ]
			},
			{
				"id" : ":ox:",
				"symbol" : "🐂",
				"group" : "nature",
				"keywords" : [ "bull", "ox", "Taurus", "zodiac" ]
			},
			{
				"id" : ":water_buffalo:",
				"symbol" : "🐃",
				"group" : "nature",
				"keywords" : [ "buffalo", "water" ]
			},
			{
				"id" : ":cow:",
				"symbol" : "🐄",
				"group" : "nature",
				"keywords" : [ "cow" ]
			},
			{
				"id" : ":pig_face:",
				"symbol" : "🐷",
				"group" : "nature",
				"keywords" : [ "face", "pig" ]
			},
			{
				"id" : ":pig:",
				"symbol" : "🐖",
				"group" : "nature",
				"keywords" : [ "pig", "sow" ]
			},
			{
				"id" : ":boar:",
				"symbol" : "🐗",
				"group" : "nature",
				"keywords" : [ "boar", "pig" ]
			},
			{
				"id" : ":pig_nose:",
				"symbol" : "🐽",
				"group" : "nature",
				"keywords" : [ "face", "nose", "pig" ]
			},
			{
				"id" : ":ram:",
				"symbol" : "🐏",
				"group" : "nature",
				"keywords" : [ "Aries", "male", "ram", "sheep", "zodiac" ]
			},
			{
				"id" : ":ewe:",
				"symbol" : "🐑",
				"group" : "nature",
				"keywords" : [ "ewe", "female", "sheep" ]
			},
			{
				"id" : ":goat:",
				"symbol" : "🐐",
				"group" : "nature",
				"keywords" : [ "Capricorn", "goat", "zodiac" ]
			},
			{
				"id" : ":camel:",
				"symbol" : "🐪",
				"group" : "nature",
				"keywords" : [ "camel", "dromedary", "hump" ]
			},
			{
				"id" : ":two-hump_camel:",
				"symbol" : "🐫",
				"group" : "nature",
				"keywords" : [ "bactrian", "camel", "hump", "two-hump camel" ]
			},
			{
				"id" : ":giraffe:",
				"symbol" : "🦒",
				"group" : "nature",
				"keywords" : [ "giraffe", "spots" ]
			},
			{
				"id" : ":elephant:",
				"symbol" : "🐘",
				"group" : "nature",
				"keywords" : [ "elephant" ]
			},
			{
				"id" : ":rhinoceros:",
				"symbol" : "🦏",
				"group" : "nature",
				"keywords" : [ "rhinoceros" ]
			},
			{
				"id" : ":mouse_face:",
				"symbol" : "🐭",
				"group" : "nature",
				"keywords" : [ "face", "mouse" ]
			},
			{
				"id" : ":mouse:",
				"symbol" : "🐁",
				"group" : "nature",
				"keywords" : [ "mouse" ]
			},
			{
				"id" : ":rat:",
				"symbol" : "🐀",
				"group" : "nature",
				"keywords" : [ "rat" ]
			},
			{
				"id" : ":hamster_face:",
				"symbol" : "🐹",
				"group" : "nature",
				"keywords" : [ "face", "hamster", "pet" ]
			},
			{
				"id" : ":rabbit_face:",
				"symbol" : "🐰",
				"group" : "nature",
				"keywords" : [ "bunny", "face", "pet", "rabbit" ]
			},
			{
				"id" : ":rabbit:",
				"symbol" : "🐇",
				"group" : "nature",
				"keywords" : [ "bunny", "pet", "rabbit" ]
			},
			{
				"id" : ":chipmunk:",
				"symbol" : "🐿",
				"group" : "nature",
				"keywords" : [ "chipmunk", "squirrel" ]
			},
			{
				"id" : ":hedgehog:",
				"symbol" : "🦔",
				"group" : "nature",
				"keywords" : [ "hedgehog", "spiny" ]
			},
			{
				"id" : ":bat:",
				"symbol" : "🦇",
				"group" : "nature",
				"keywords" : [ "bat", "vampire" ]
			},
			{
				"id" : ":bear_face:",
				"symbol" : "🐻",
				"group" : "nature",
				"keywords" : [ "bear", "face" ]
			},
			{
				"id" : ":koala:",
				"symbol" : "🐨",
				"group" : "nature",
				"keywords" : [ "bear", "koala" ]
			},
			{
				"id" : ":panda_face:",
				"symbol" : "🐼",
				"group" : "nature",
				"keywords" : [ "face", "panda" ]
			},
			{
				"id" : ":paw_prints:",
				"symbol" : "🐾",
				"group" : "nature",
				"keywords" : [ "feet", "paw", "paw prints", "print" ]
			},
			{
				"id" : ":turkey:",
				"symbol" : "🦃",
				"group" : "nature",
				"keywords" : [ "bird", "turkey" ]
			},
			{
				"id" : ":chicken:",
				"symbol" : "🐔",
				"group" : "nature",
				"keywords" : [ "bird", "chicken" ]
			},
			{
				"id" : ":rooster:",
				"symbol" : "🐓",
				"group" : "nature",
				"keywords" : [ "bird", "rooster" ]
			},
			{
				"id" : ":hatching_chick:",
				"symbol" : "🐣",
				"group" : "nature",
				"keywords" : [ "baby", "bird", "chick", "hatching" ]
			},
			{
				"id" : ":baby_chick:",
				"symbol" : "🐤",
				"group" : "nature",
				"keywords" : [ "baby", "bird", "chick" ]
			},
			{
				"id" : ":front-facing_baby_chick:",
				"symbol" : "🐥",
				"group" : "nature",
				"keywords" : [ "baby", "bird", "chick",
						"front-facing baby chick" ]
			},
			{
				"id" : ":bird:",
				"symbol" : "🐦",
				"group" : "nature",
				"keywords" : [ "bird" ]
			},
			{
				"id" : ":penguin:",
				"symbol" : "🐧",
				"group" : "nature",
				"keywords" : [ "bird", "penguin" ]
			},
			{
				"id" : ":dove:",
				"symbol" : "🕊",
				"group" : "nature",
				"keywords" : [ "bird", "dove", "fly", "peace" ]
			},
			{
				"id" : ":eagle:",
				"symbol" : "🦅",
				"group" : "nature",
				"keywords" : [ "bird", "eagle" ]
			},
			{
				"id" : ":duck:",
				"symbol" : "🦆",
				"group" : "nature",
				"keywords" : [ "bird", "duck" ]
			},
			{
				"id" : ":owl:",
				"symbol" : "🦉",
				"group" : "nature",
				"keywords" : [ "bird", "owl", "wise" ]
			},
			{
				"id" : ":frog_face:",
				"symbol" : "🐸",
				"group" : "nature",
				"keywords" : [ "face", "frog" ]
			},
			{
				"id" : ":crocodile:",
				"symbol" : "🐊",
				"group" : "nature",
				"keywords" : [ "crocodile" ]
			},
			{
				"id" : ":turtle:",
				"symbol" : "🐢",
				"group" : "nature",
				"keywords" : [ "terrapin", "tortoise", "turtle" ]
			},
			{
				"id" : ":lizard:",
				"symbol" : "🦎",
				"group" : "nature",
				"keywords" : [ "lizard", "reptile" ]
			},
			{
				"id" : ":snake:",
				"symbol" : "🐍",
				"group" : "nature",
				"keywords" : [ "bearer", "Ophiuchus", "serpent", "snake",
						"zodiac" ]
			},
			{
				"id" : ":dragon_face:",
				"symbol" : "🐲",
				"group" : "nature",
				"keywords" : [ "dragon", "face", "fairy tale" ]
			},
			{
				"id" : ":dragon:",
				"symbol" : "🐉",
				"group" : "nature",
				"keywords" : [ "dragon", "fairy tale" ]
			},
			{
				"id" : ":sauropod:",
				"symbol" : "🦕",
				"group" : "nature",
				"keywords" : [ "brachiosaurus", "brontosaurus", "diplodocus",
						"sauropod" ]
			},
			{
				"id" : ":t-rex:",
				"symbol" : "🦖",
				"group" : "nature",
				"keywords" : [ "T-Rex", "Tyrannosaurus Rex" ]
			},
			{
				"id" : ":spouting_whale:",
				"symbol" : "🐳",
				"group" : "nature",
				"keywords" : [ "face", "spouting", "whale" ]
			},
			{
				"id" : ":whale:",
				"symbol" : "🐋",
				"group" : "nature",
				"keywords" : [ "whale" ]
			},
			{
				"id" : ":dolphin:",
				"symbol" : "🐬",
				"group" : "nature",
				"keywords" : [ "dolphin", "flipper" ]
			},
			{
				"id" : ":fish:",
				"symbol" : "🐟",
				"group" : "nature",
				"keywords" : [ "fish", "Pisces", "zodiac" ]
			},
			{
				"id" : ":tropical_fish:",
				"symbol" : "🐠",
				"group" : "nature",
				"keywords" : [ "fish", "tropical" ]
			},
			{
				"id" : ":blowfish:",
				"symbol" : "🐡",
				"group" : "nature",
				"keywords" : [ "blowfish", "fish" ]
			},
			{
				"id" : ":shark:",
				"symbol" : "🦈",
				"group" : "nature",
				"keywords" : [ "fish", "shark" ]
			},
			{
				"id" : ":octopus:",
				"symbol" : "🐙",
				"group" : "nature",
				"keywords" : [ "octopus" ]
			},
			{
				"id" : ":spiral_shell:",
				"symbol" : "🐚",
				"group" : "nature",
				"keywords" : [ "shell", "spiral" ]
			},
			{
				"id" : ":crab:",
				"symbol" : "🦀",
				"group" : "nature",
				"keywords" : [ "Cancer", "crab", "zodiac" ]
			},
			{
				"id" : ":shrimp:",
				"symbol" : "🦐",
				"group" : "nature",
				"keywords" : [ "food", "shellfish", "shrimp", "small" ]
			},
			{
				"id" : ":squid:",
				"symbol" : "🦑",
				"group" : "nature",
				"keywords" : [ "food", "molusc", "squid" ]
			},
			{
				"id" : ":snail:",
				"symbol" : "🐌",
				"group" : "nature",
				"keywords" : [ "snail" ]
			},
			{
				"id" : ":butterfly:",
				"symbol" : "🦋",
				"group" : "nature",
				"keywords" : [ "butterfly", "insect", "pretty" ]
			},
			{
				"id" : ":bug:",
				"symbol" : "🐛",
				"group" : "nature",
				"keywords" : [ "bug", "insect" ]
			},
			{
				"id" : ":ant:",
				"symbol" : "🐜",
				"group" : "nature",
				"keywords" : [ "ant", "insect" ]
			},
			{
				"id" : ":honeybee:",
				"symbol" : "🐝",
				"group" : "nature",
				"keywords" : [ "bee", "honeybee", "insect" ]
			},
			{
				"id" : ":lady_beetle:",
				"symbol" : "🐞",
				"group" : "nature",
				"keywords" : [ "beetle", "insect", "lady beetle", "ladybird",
						"ladybug" ]
			},
			{
				"id" : ":cricket:",
				"symbol" : "🦗",
				"group" : "nature",
				"keywords" : [ "cricket", "grasshopper", "" ]
			},
			{
				"id" : ":spider:",
				"symbol" : "🕷",
				"group" : "nature",
				"keywords" : [ "insect", "spider" ]
			},
			{
				"id" : ":spider_web:",
				"symbol" : "🕸",
				"group" : "nature",
				"keywords" : [ "spider", "web" ]
			},
			{
				"id" : ":scorpion:",
				"symbol" : "🦂",
				"group" : "nature",
				"keywords" : [ "scorpio", "Scorpio", "scorpion", "zodiac" ]
			},
			{
				"id" : ":bouquet:",
				"symbol" : "💐",
				"group" : "nature",
				"keywords" : [ "bouquet", "flower" ]
			},
			{
				"id" : ":cherry_blossom:",
				"symbol" : "🌸",
				"group" : "nature",
				"keywords" : [ "blossom", "cherry", "flower" ]
			},
			{
				"id" : ":white_flower:",
				"symbol" : "💮",
				"group" : "nature",
				"keywords" : [ "flower", "white flower" ]
			},
			{
				"id" : ":rosette:",
				"symbol" : "🏵",
				"group" : "nature",
				"keywords" : [ "plant", "rosette" ]
			},
			{
				"id" : ":rose:",
				"symbol" : "🌹",
				"group" : "nature",
				"keywords" : [ "flower", "rose" ]
			},
			{
				"id" : ":wilted_flower:",
				"symbol" : "🥀",
				"group" : "nature",
				"keywords" : [ "flower", "wilted" ]
			},
			{
				"id" : ":hibiscus:",
				"symbol" : "🌺",
				"group" : "nature",
				"keywords" : [ "flower", "hibiscus" ]
			},
			{
				"id" : ":sunflower:",
				"symbol" : "🌻",
				"group" : "nature",
				"keywords" : [ "flower", "sun", "sunflower" ]
			},
			{
				"id" : ":blossom:",
				"symbol" : "🌼",
				"group" : "nature",
				"keywords" : [ "blossom", "flower" ]
			},
			{
				"id" : ":tulip:",
				"symbol" : "🌷",
				"group" : "nature",
				"keywords" : [ "flower", "tulip" ]
			},
			{
				"id" : ":seedling:",
				"symbol" : "🌱",
				"group" : "nature",
				"keywords" : [ "seedling", "young" ]
			},
			{
				"id" : ":evergreen_tree:",
				"symbol" : "🌲",
				"group" : "nature",
				"keywords" : [ "evergreen tree", "tree" ]
			},
			{
				"id" : ":deciduous_tree:",
				"symbol" : "🌳",
				"group" : "nature",
				"keywords" : [ "deciduous", "shedding", "tree" ]
			},
			{
				"id" : ":palm_tree:",
				"symbol" : "🌴",
				"group" : "nature",
				"keywords" : [ "palm", "tree" ]
			},
			{
				"id" : ":cactus:",
				"symbol" : "🌵",
				"group" : "nature",
				"keywords" : [ "cactus", "plant" ]
			},
			{
				"id" : ":sheaf_of_rice:",
				"symbol" : "🌾",
				"group" : "nature",
				"keywords" : [ "ear", "grain", "rice", "sheaf of rice" ]
			},
			{
				"id" : ":herb:",
				"symbol" : "🌿",
				"group" : "nature",
				"keywords" : [ "herb", "leaf" ]
			},
			{
				"id" : ":shamrock:",
				"symbol" : "☘",
				"group" : "nature",
				"keywords" : [ "plant", "shamrock" ]
			},
			{
				"id" : ":four_leaf_clover:",
				"symbol" : "🍀",
				"group" : "nature",
				"keywords" : [ "4", "clover", "four", "four-leaf clover",
						"leaf" ]
			},
			{
				"id" : ":maple_leaf:",
				"symbol" : "🍁",
				"group" : "nature",
				"keywords" : [ "falling", "leaf", "maple" ]
			},
			{
				"id" : ":fallen_leaf:",
				"symbol" : "🍂",
				"group" : "nature",
				"keywords" : [ "fallen leaf", "falling", "leaf" ]
			},
			{
				"id" : ":leaf_fluttering_in_wind:",
				"symbol" : "🍃",
				"group" : "nature",
				"keywords" : [ "blow", "flutter", "leaf",
						"leaf fluttering in wind", "wind" ]
			},
			{
				"id" : ":grapes:",
				"symbol" : "🍇",
				"group" : "food",
				"keywords" : [ "fruit", "grape", "grapes" ]
			},
			{
				"id" : ":melon:",
				"symbol" : "🍈",
				"group" : "food",
				"keywords" : [ "fruit", "melon" ]
			},
			{
				"id" : ":watermelon:",
				"symbol" : "🍉",
				"group" : "food",
				"keywords" : [ "fruit", "watermelon" ]
			},
			{
				"id" : ":tangerine:",
				"symbol" : "🍊",
				"group" : "food",
				"keywords" : [ "fruit", "orange", "tangerine" ]
			},
			{
				"id" : ":lemon:",
				"symbol" : "🍋",
				"group" : "food",
				"keywords" : [ "citrus", "fruit", "lemon" ]
			},
			{
				"id" : ":banana:",
				"symbol" : "🍌",
				"group" : "food",
				"keywords" : [ "banana", "fruit" ]
			},
			{
				"id" : ":pineapple:",
				"symbol" : "🍍",
				"group" : "food",
				"keywords" : [ "fruit", "pineapple" ]
			},
			{
				"id" : ":red_apple:",
				"symbol" : "🍎",
				"group" : "food",
				"keywords" : [ "apple", "fruit", "red" ]
			},
			{
				"id" : ":green_apple:",
				"symbol" : "🍏",
				"group" : "food",
				"keywords" : [ "apple", "fruit", "green" ]
			},
			{
				"id" : ":pear:",
				"symbol" : "🍐",
				"group" : "food",
				"keywords" : [ "fruit", "pear" ]
			},
			{
				"id" : ":peach:",
				"symbol" : "🍑",
				"group" : "food",
				"keywords" : [ "fruit", "peach" ]
			},
			{
				"id" : ":cherries:",
				"symbol" : "🍒",
				"group" : "food",
				"keywords" : [ "berries", "cherries", "cherry", "fruit", "red" ]
			},
			{
				"id" : ":strawberry:",
				"symbol" : "🍓",
				"group" : "food",
				"keywords" : [ "berry", "fruit", "strawberry" ]
			},
			{
				"id" : ":kiwi_fruit:",
				"symbol" : "🥝",
				"group" : "food",
				"keywords" : [ "food", "fruit", "kiwi" ]
			},
			{
				"id" : ":tomato:",
				"symbol" : "🍅",
				"group" : "food",
				"keywords" : [ "fruit", "tomato", "vegetable" ]
			},
			{
				"id" : ":coconut:",
				"symbol" : "🥥",
				"group" : "food",
				"keywords" : [ "coconut", "palm", "piña colada" ]
			},
			{
				"id" : ":avocado:",
				"symbol" : "🥑",
				"group" : "food",
				"keywords" : [ "avocado", "food", "fruit" ]
			},
			{
				"id" : ":eggplant:",
				"symbol" : "🍆",
				"group" : "food",
				"keywords" : [ "aubergine", "eggplant", "vegetable" ]
			},
			{
				"id" : ":potato:",
				"symbol" : "🥔",
				"group" : "food",
				"keywords" : [ "food", "potato", "vegetable" ]
			},
			{
				"id" : ":carrot:",
				"symbol" : "🥕",
				"group" : "food",
				"keywords" : [ "carrot", "food", "vegetable" ]
			},
			{
				"id" : ":ear_of_corn:",
				"symbol" : "🌽",
				"group" : "food",
				"keywords" : [ "corn", "ear", "ear of corn", "maize", "maze" ]
			},
			{
				"id" : ":hot_pepper:",
				"symbol" : "🌶",
				"group" : "food",
				"keywords" : [ "hot", "pepper" ]
			},
			{
				"id" : ":cucumber:",
				"symbol" : "🥒",
				"group" : "food",
				"keywords" : [ "cucumber", "food", "pickle", "vegetable" ]
			},
			{
				"id" : ":broccoli:",
				"symbol" : "🥦",
				"group" : "food",
				"keywords" : [ "broccoli", "wild cabbage" ]
			},
			{
				"id" : ":mushroom:",
				"symbol" : "🍄",
				"group" : "food",
				"keywords" : [ "mushroom", "toadstool" ]
			},
			{
				"id" : ":peanuts:",
				"symbol" : "🥜",
				"group" : "food",
				"keywords" : [ "food", "nut", "peanut", "peanuts", "vegetable" ]
			},
			{
				"id" : ":chestnut:",
				"symbol" : "🌰",
				"group" : "food",
				"keywords" : [ "chestnut", "plant" ]
			},
			{
				"id" : ":bread:",
				"symbol" : "🍞",
				"group" : "food",
				"keywords" : [ "bread", "loaf" ]
			},
			{
				"id" : ":croissant:",
				"symbol" : "🥐",
				"group" : "food",
				"keywords" : [ "bread", "crescent roll", "croissant", "food",
						"french" ]
			},
			{
				"id" : ":baguette_bread:",
				"symbol" : "🥖",
				"group" : "food",
				"keywords" : [ "baguette", "bread", "food", "french" ]
			},
			{
				"id" : ":pretzel:",
				"symbol" : "🥨",
				"group" : "food",
				"keywords" : [ "pretzel", "twisted", "" ]
			},
			{
				"id" : ":pancakes:",
				"symbol" : "🥞",
				"group" : "food",
				"keywords" : [ "crêpe", "food", "hotcake", "pancake",
						"pancakes" ]
			},
			{
				"id" : ":cheese_wedge:",
				"symbol" : "🧀",
				"group" : "food",
				"keywords" : [ "cheese", "cheese wedge" ]
			},
			{
				"id" : ":meat_on_bone:",
				"symbol" : "🍖",
				"group" : "food",
				"keywords" : [ "bone", "meat", "meat on bone" ]
			},
			{
				"id" : ":poultry_leg:",
				"symbol" : "🍗",
				"group" : "food",
				"keywords" : [ "bone", "chicken", "drumstick", "leg", "poultry" ]
			},
			{
				"id" : ":cut_of_meat:",
				"symbol" : "🥩",
				"group" : "food",
				"keywords" : [ "chop", "cut of meat", "lambchop", "porkchop",
						"steak" ]
			},
			{
				"id" : ":bacon:",
				"symbol" : "🥓",
				"group" : "food",
				"keywords" : [ "bacon", "food", "meat" ]
			},
			{
				"id" : ":hamburger:",
				"symbol" : "🍔",
				"group" : "food",
				"keywords" : [ "burger", "hamburger" ]
			},
			{
				"id" : ":french_fries:",
				"symbol" : "🍟",
				"group" : "food",
				"keywords" : [ "french", "fries" ]
			},
			{
				"id" : ":pizza:",
				"symbol" : "🍕",
				"group" : "food",
				"keywords" : [ "cheese", "pizza", "slice" ]
			},
			{
				"id" : ":hot_dog:",
				"symbol" : "🌭",
				"group" : "food",
				"keywords" : [ "frankfurter", "hot dog", "hotdog", "sausage" ]
			},
			{
				"id" : ":sandwich:",
				"symbol" : "🥪",
				"group" : "food",
				"keywords" : [ "bread", "sandwich" ]
			},
			{
				"id" : ":taco:",
				"symbol" : "🌮",
				"group" : "food",
				"keywords" : [ "mexican", "taco" ]
			},
			{
				"id" : ":burrito:",
				"symbol" : "🌯",
				"group" : "food",
				"keywords" : [ "burrito", "mexican", "wrap" ]
			},
			{
				"id" : ":stuffed_flatbread:",
				"symbol" : "🥙",
				"group" : "food",
				"keywords" : [ "falafel", "flatbread", "food", "gyro", "kebab",
						"stuffed" ]
			},
			{
				"id" : ":egg:",
				"symbol" : "🥚",
				"group" : "food",
				"keywords" : [ "egg", "food" ]
			},
			{
				"id" : ":cooking:",
				"symbol" : "🍳",
				"group" : "food",
				"keywords" : [ "cooking", "egg", "frying", "pan" ]
			},
			{
				"id" : ":shallow_pan_of_food:",
				"symbol" : "🥘",
				"group" : "food",
				"keywords" : [ "casserole", "food", "paella", "pan", "shallow",
						"shallow pan of food" ]
			},
			{
				"id" : ":pot_of_food:",
				"symbol" : "🍲",
				"group" : "food",
				"keywords" : [ "pot", "pot of food", "stew" ]
			},
			{
				"id" : ":bowl_with_spoon:",
				"symbol" : "🥣",
				"group" : "food",
				"keywords" : [ "bowl with spoon", "breakfast", "cereal",
						"congee", "" ]
			},
			{
				"id" : ":green_salad:",
				"symbol" : "🥗",
				"group" : "food",
				"keywords" : [ "food", "green", "salad" ]
			},
			{
				"id" : ":popcorn:",
				"symbol" : "🍿",
				"group" : "food",
				"keywords" : [ "popcorn" ]
			},
			{
				"id" : ":canned_food:",
				"symbol" : "🥫",
				"group" : "food",
				"keywords" : [ "can", "canned food" ]
			},
			{
				"id" : ":bento_box:",
				"symbol" : "🍱",
				"group" : "food",
				"keywords" : [ "bento", "box" ]
			},
			{
				"id" : ":rice_cracker:",
				"symbol" : "🍘",
				"group" : "food",
				"keywords" : [ "cracker", "rice" ]
			},
			{
				"id" : ":rice_ball:",
				"symbol" : "🍙",
				"group" : "food",
				"keywords" : [ "ball", "Japanese", "rice" ]
			},
			{
				"id" : ":cooked_rice:",
				"symbol" : "🍚",
				"group" : "food",
				"keywords" : [ "cooked", "rice" ]
			},
			{
				"id" : ":curry_rice:",
				"symbol" : "🍛",
				"group" : "food",
				"keywords" : [ "curry", "rice" ]
			},
			{
				"id" : ":steaming_bowl:",
				"symbol" : "🍜",
				"group" : "food",
				"keywords" : [ "bowl", "noodle", "ramen", "steaming" ]
			},
			{
				"id" : ":spaghetti:",
				"symbol" : "🍝",
				"group" : "food",
				"keywords" : [ "pasta", "spaghetti" ]
			},
			{
				"id" : ":roasted_sweet_potato:",
				"symbol" : "🍠",
				"group" : "food",
				"keywords" : [ "potato", "roasted", "sweet" ]
			},
			{
				"id" : ":oden:",
				"symbol" : "🍢",
				"group" : "food",
				"keywords" : [ "kebab", "oden", "seafood", "skewer", "stick" ]
			},
			{
				"id" : ":sushi:",
				"symbol" : "🍣",
				"group" : "food",
				"keywords" : [ "sushi" ]
			},
			{
				"id" : ":fried_shrimp:",
				"symbol" : "🍤",
				"group" : "food",
				"keywords" : [ "fried", "prawn", "shrimp", "tempura" ]
			},
			{
				"id" : ":fish_cake_with_swirl:",
				"symbol" : "🍥",
				"group" : "food",
				"keywords" : [ "cake", "fish", "fish cake with swirl",
						"pastry", "swirl" ]
			},
			{
				"id" : ":dango:",
				"symbol" : "🍡",
				"group" : "food",
				"keywords" : [ "dango", "dessert", "Japanese", "skewer",
						"stick", "sweet" ]
			},
			{
				"id" : ":dumpling:",
				"symbol" : "🥟",
				"group" : "food",
				"keywords" : [ "dumpling", "empanada", "gyōza", "jiaozi",
						"pierogi", "potsticker" ]
			},
			{
				"id" : ":fortune_cookie:",
				"symbol" : "🥠",
				"group" : "food",
				"keywords" : [ "fortune cookie", "prophecy" ]
			},
			{
				"id" : ":takeout_box:",
				"symbol" : "🥡",
				"group" : "food",
				"keywords" : [ "oyster pail", "takeout box" ]
			},
			{
				"id" : ":soft_ice_cream:",
				"symbol" : "🍦",
				"group" : "food",
				"keywords" : [ "cream", "dessert", "ice", "icecream", "soft",
						"sweet" ]
			},
			{
				"id" : ":shaved_ice:",
				"symbol" : "🍧",
				"group" : "food",
				"keywords" : [ "dessert", "ice", "shaved", "sweet" ]
			},
			{
				"id" : ":ice_cream:",
				"symbol" : "🍨",
				"group" : "food",
				"keywords" : [ "cream", "dessert", "ice", "sweet" ]
			},
			{
				"id" : ":doughnut:",
				"symbol" : "🍩",
				"group" : "food",
				"keywords" : [ "dessert", "donut", "doughnut", "sweet" ]
			},
			{
				"id" : ":cookie:",
				"symbol" : "🍪",
				"group" : "food",
				"keywords" : [ "cookie", "dessert", "sweet" ]
			},
			{
				"id" : ":birthday_cake:",
				"symbol" : "🎂",
				"group" : "food",
				"keywords" : [ "birthday", "cake", "celebration", "dessert",
						"pastry", "sweet" ]
			},
			{
				"id" : ":shortcake:",
				"symbol" : "🍰",
				"group" : "food",
				"keywords" : [ "cake", "dessert", "pastry", "shortcake",
						"slice", "sweet" ]
			},
			{
				"id" : ":pie:",
				"symbol" : "🥧",
				"group" : "food",
				"keywords" : [ "filling", "pastry", "pie", "" ]
			},
			{
				"id" : ":chocolate_bar:",
				"symbol" : "🍫",
				"group" : "food",
				"keywords" : [ "bar", "chocolate", "dessert", "sweet" ]
			},
			{
				"id" : ":candy:",
				"symbol" : "🍬",
				"group" : "food",
				"keywords" : [ "candy", "dessert", "sweet" ]
			},
			{
				"id" : ":lollipop:",
				"symbol" : "🍭",
				"group" : "food",
				"keywords" : [ "candy", "dessert", "lollipop", "sweet" ]
			},
			{
				"id" : ":custard:",
				"symbol" : "🍮",
				"group" : "food",
				"keywords" : [ "custard", "dessert", "pudding", "sweet" ]
			},
			{
				"id" : ":honey_pot:",
				"symbol" : "🍯",
				"group" : "food",
				"keywords" : [ "honey", "honeypot", "pot", "sweet" ]
			},
			{
				"id" : ":baby_bottle:",
				"symbol" : "🍼",
				"group" : "food",
				"keywords" : [ "baby", "bottle", "drink", "milk" ]
			},
			{
				"id" : ":glass_of_milk:",
				"symbol" : "🥛",
				"group" : "food",
				"keywords" : [ "drink", "glass", "glass of milk", "milk" ]
			},
			{
				"id" : ":hot_beverage:",
				"symbol" : "☕",
				"group" : "food",
				"keywords" : [ "beverage", "coffee", "drink", "hot",
						"steaming", "tea" ]
			},
			{
				"id" : ":teacup_without_handle:",
				"symbol" : "🍵",
				"group" : "food",
				"keywords" : [ "beverage", "cup", "drink", "tea", "teacup",
						"teacup without handle" ]
			},
			{
				"id" : ":sake:",
				"symbol" : "🍶",
				"group" : "food",
				"keywords" : [ "bar", "beverage", "bottle", "cup", "drink",
						"sake" ]
			},
			{
				"id" : ":bottle_with_popping_cork:",
				"symbol" : "🍾",
				"group" : "food",
				"keywords" : [ "bar", "bottle", "bottle with popping cork",
						"cork", "drink", "popping" ]
			},
			{
				"id" : ":wine_glass:",
				"symbol" : "🍷",
				"group" : "food",
				"keywords" : [ "bar", "beverage", "drink", "glass", "wine" ]
			},
			{
				"id" : ":cocktail_glass:",
				"symbol" : "🍸",
				"group" : "food",
				"keywords" : [ "bar", "cocktail", "drink", "glass" ]
			},
			{
				"id" : ":tropical_drink:",
				"symbol" : "🍹",
				"group" : "food",
				"keywords" : [ "bar", "drink", "tropical" ]
			},
			{
				"id" : ":beer_mug:",
				"symbol" : "🍺",
				"group" : "food",
				"keywords" : [ "bar", "beer", "drink", "mug" ]
			},
			{
				"id" : ":clinking_beer_mugs:",
				"symbol" : "🍻",
				"group" : "food",
				"keywords" : [ "bar", "beer", "clink", "clinking beer mugs",
						"drink", "mug" ]
			},
			{
				"id" : ":clinking_glasses:",
				"symbol" : "🥂",
				"group" : "food",
				"keywords" : [ "celebrate", "clink", "clinking glasses",
						"drink", "glass" ]
			},
			{
				"id" : ":tumbler_glass:",
				"symbol" : "🥃",
				"group" : "food",
				"keywords" : [ "glass", "liquor", "shot", "tumbler", "whisky" ]
			},
			{
				"id" : ":cup_with_straw:",
				"symbol" : "🥤",
				"group" : "food",
				"keywords" : [ "cup with straw", "juice", "soda", "" ]
			},
			{
				"id" : ":chopsticks:",
				"symbol" : "🥢",
				"group" : "food",
				"keywords" : [ "chopsticks", "hashi", "" ]
			},
			{
				"id" : ":fork_and_knife_with_plate:",
				"symbol" : "🍽",
				"group" : "food",
				"keywords" : [ "cooking", "fork", "fork and knife with plate",
						"knife", "plate" ]
			},
			{
				"id" : ":fork_and_knife:",
				"symbol" : "🍴",
				"group" : "food",
				"keywords" : [ "cooking", "cutlery", "fork", "fork and knife",
						"knife" ]
			},
			{
				"id" : ":spoon:",
				"symbol" : "🥄",
				"group" : "food",
				"keywords" : [ "spoon", "tableware" ]
			},
			{
				"id" : ":kitchen_knife:",
				"symbol" : "🔪",
				"group" : "food",
				"keywords" : [ "cooking", "hocho", "kitchen knife", "knife",
						"tool", "weapon" ]
			},
			{
				"id" : ":amphora:",
				"symbol" : "🏺",
				"group" : "food",
				"keywords" : [ "amphora", "Aquarius", "cooking", "drink",
						"jug", "zodiac" ]
			},
			{
				"id" : ":globe_showing_europe-africa:",
				"symbol" : "🌍",
				"group" : "travel",
				"keywords" : [ "Africa", "earth", "Europe", "globe",
						"globe showing Europe-Africa", "world" ]
			},
			{
				"id" : ":globe_showing_americas:",
				"symbol" : "🌎",
				"group" : "travel",
				"keywords" : [ "Americas", "earth", "globe",
						"globe showing Americas", "world" ]
			},
			{
				"id" : ":globe_showing_asia-australia:",
				"symbol" : "🌏",
				"group" : "travel",
				"keywords" : [ "Asia", "Australia", "earth", "globe",
						"globe showing Asia-Australia", "world" ]
			},
			{
				"id" : ":globe_with_meridians:",
				"symbol" : "🌐",
				"group" : "travel",
				"keywords" : [ "earth", "globe", "globe with meridians",
						"meridians", "world" ]
			},
			{
				"id" : ":world_map:",
				"symbol" : "🗺",
				"group" : "travel",
				"keywords" : [ "map", "world" ]
			},
			{
				"id" : ":map_of_japan:",
				"symbol" : "🗾",
				"group" : "travel",
				"keywords" : [ "Japan", "map", "map of Japan" ]
			},
			{
				"id" : ":snow-capped_mountain:",
				"symbol" : "🏔",
				"group" : "travel",
				"keywords" : [ "cold", "mountain", "snow",
						"snow-capped mountain" ]
			},
			{
				"id" : ":mountain:",
				"symbol" : "⛰",
				"group" : "travel",
				"keywords" : [ "mountain" ]
			},
			{
				"id" : ":volcano:",
				"symbol" : "🌋",
				"group" : "travel",
				"keywords" : [ "eruption", "mountain", "volcano" ]
			},
			{
				"id" : ":mount_fuji:",
				"symbol" : "🗻",
				"group" : "travel",
				"keywords" : [ "fuji", "mount fuji", "mountain" ]
			},
			{
				"id" : ":camping:",
				"symbol" : "🏕",
				"group" : "travel",
				"keywords" : [ "camping" ]
			},
			{
				"id" : ":beach_with_umbrella:",
				"symbol" : "🏖",
				"group" : "travel",
				"keywords" : [ "beach", "beach with umbrella", "umbrella" ]
			},
			{
				"id" : ":desert:",
				"symbol" : "🏜",
				"group" : "travel",
				"keywords" : [ "desert" ]
			},
			{
				"id" : ":desert_island:",
				"symbol" : "🏝",
				"group" : "travel",
				"keywords" : [ "desert", "island" ]
			},
			{
				"id" : ":national_park:",
				"symbol" : "🏞",
				"group" : "travel",
				"keywords" : [ "national park", "park" ]
			},
			{
				"id" : ":stadium:",
				"symbol" : "🏟",
				"group" : "travel",
				"keywords" : [ "stadium" ]
			},
			{
				"id" : ":classical_building:",
				"symbol" : "🏛",
				"group" : "travel",
				"keywords" : [ "classical", "classical building" ]
			},
			{
				"id" : ":building_construction:",
				"symbol" : "🏗",
				"group" : "travel",
				"keywords" : [ "building construction", "construction" ]
			},
			{
				"id" : ":houses:",
				"symbol" : "🏘",
				"group" : "travel",
				"keywords" : [ "houses" ]
			},
			{
				"id" : ":derelict_house:",
				"symbol" : "🏚",
				"group" : "travel",
				"keywords" : [ "derelict", "house" ]
			},
			{
				"id" : ":house:",
				"symbol" : "🏠",
				"group" : "travel",
				"keywords" : [ "home", "house" ]
			},
			{
				"id" : ":house_with_garden:",
				"symbol" : "🏡",
				"group" : "travel",
				"keywords" : [ "garden", "home", "house", "house with garden" ]
			},
			{
				"id" : ":office_building:",
				"symbol" : "🏢",
				"group" : "travel",
				"keywords" : [ "building", "office building" ]
			},
			{
				"id" : ":japanese_post_office:",
				"symbol" : "🏣",
				"group" : "travel",
				"keywords" : [ "Japanese", "Japanese post office", "post" ]
			},
			{
				"id" : ":post_office:",
				"symbol" : "🏤",
				"group" : "travel",
				"keywords" : [ "European", "post", "post office" ]
			},
			{
				"id" : ":hospital:",
				"symbol" : "🏥",
				"group" : "travel",
				"keywords" : [ "doctor", "hospital", "medicine" ]
			},
			{
				"id" : ":bank:",
				"symbol" : "🏦",
				"group" : "travel",
				"keywords" : [ "bank", "building" ]
			},
			{
				"id" : ":hotel:",
				"symbol" : "🏨",
				"group" : "travel",
				"keywords" : [ "building", "hotel" ]
			},
			{
				"id" : ":love_hotel:",
				"symbol" : "🏩",
				"group" : "travel",
				"keywords" : [ "hotel", "love" ]
			},
			{
				"id" : ":convenience_store:",
				"symbol" : "🏪",
				"group" : "travel",
				"keywords" : [ "convenience", "store" ]
			},
			{
				"id" : ":school:",
				"symbol" : "🏫",
				"group" : "travel",
				"keywords" : [ "building", "school" ]
			},
			{
				"id" : ":department_store:",
				"symbol" : "🏬",
				"group" : "travel",
				"keywords" : [ "department", "store" ]
			},
			{
				"id" : ":factory:",
				"symbol" : "🏭",
				"group" : "travel",
				"keywords" : [ "building", "factory" ]
			},
			{
				"id" : ":japanese_castle:",
				"symbol" : "🏯",
				"group" : "travel",
				"keywords" : [ "castle", "Japanese" ]
			},
			{
				"id" : ":castle:",
				"symbol" : "🏰",
				"group" : "travel",
				"keywords" : [ "castle", "European" ]
			},
			{
				"id" : ":wedding:",
				"symbol" : "💒",
				"group" : "travel",
				"keywords" : [ "chapel", "romance", "wedding" ]
			},
			{
				"id" : ":tokyo_tower:",
				"symbol" : "🗼",
				"group" : "travel",
				"keywords" : [ "Tokyo", "tower" ]
			},
			{
				"id" : ":statue_of_liberty:",
				"symbol" : "🗽",
				"group" : "travel",
				"keywords" : [ "liberty", "statue", "Statue of Liberty" ]
			},
			{
				"id" : ":church:",
				"symbol" : "⛪",
				"group" : "travel",
				"keywords" : [ "Christian", "church", "cross", "religion" ]
			},
			{
				"id" : ":mosque:",
				"symbol" : "🕌",
				"group" : "travel",
				"keywords" : [ "islam", "mosque", "Muslim", "religion" ]
			},
			{
				"id" : ":synagogue:",
				"symbol" : "🕍",
				"group" : "travel",
				"keywords" : [ "Jew", "Jewish", "religion", "synagogue",
						"temple" ]
			},
			{
				"id" : ":shinto_shrine:",
				"symbol" : "⛩",
				"group" : "travel",
				"keywords" : [ "religion", "shinto", "shrine" ]
			},
			{
				"id" : ":kaaba:",
				"symbol" : "🕋",
				"group" : "travel",
				"keywords" : [ "islam", "kaaba", "Muslim", "religion" ]
			},
			{
				"id" : ":fountain:",
				"symbol" : "⛲",
				"group" : "travel",
				"keywords" : [ "fountain" ]
			},
			{
				"id" : ":tent:",
				"symbol" : "⛺",
				"group" : "travel",
				"keywords" : [ "camping", "tent" ]
			},
			{
				"id" : ":foggy:",
				"symbol" : "🌁",
				"group" : "travel",
				"keywords" : [ "fog", "foggy" ]
			},
			{
				"id" : ":night_with_stars:",
				"symbol" : "🌃",
				"group" : "travel",
				"keywords" : [ "night", "night with stars", "star" ]
			},
			{
				"id" : ":cityscape:",
				"symbol" : "🏙",
				"group" : "travel",
				"keywords" : [ "city", "cityscape" ]
			},
			{
				"id" : ":sunrise_over_mountains:",
				"symbol" : "🌄",
				"group" : "travel",
				"keywords" : [ "morning", "mountain", "sun", "sunrise",
						"sunrise over mountains" ]
			},
			{
				"id" : ":sunrise:",
				"symbol" : "🌅",
				"group" : "travel",
				"keywords" : [ "morning", "sun", "sunrise" ]
			},
			{
				"id" : ":cityscape_at_dusk:",
				"symbol" : "🌆",
				"group" : "travel",
				"keywords" : [ "city", "cityscape at dusk", "dusk", "evening",
						"landscape", "sunset" ]
			},
			{
				"id" : ":sunset:",
				"symbol" : "🌇",
				"group" : "travel",
				"keywords" : [ "dusk", "sun", "sunset" ]
			},
			{
				"id" : ":bridge_at_night:",
				"symbol" : "🌉",
				"group" : "travel",
				"keywords" : [ "bridge", "bridge at night", "night" ]
			},
			{
				"id" : ":hot_springs:",
				"symbol" : "♨",
				"group" : "travel",
				"keywords" : [ "hot", "hotsprings", "springs", "steaming" ]
			},
			{
				"id" : ":milky_way:",
				"symbol" : "🌌",
				"group" : "travel",
				"keywords" : [ "milky way", "space" ]
			},
			{
				"id" : ":carousel_horse:",
				"symbol" : "🎠",
				"group" : "travel",
				"keywords" : [ "carousel", "horse" ]
			},
			{
				"id" : ":ferris_wheel:",
				"symbol" : "🎡",
				"group" : "travel",
				"keywords" : [ "amusement park", "ferris", "wheel" ]
			},
			{
				"id" : ":roller_coaster:",
				"symbol" : "🎢",
				"group" : "travel",
				"keywords" : [ "amusement park", "coaster", "roller" ]
			},
			{
				"id" : ":barber_pole:",
				"symbol" : "💈",
				"group" : "travel",
				"keywords" : [ "barber", "haircut", "pole" ]
			},
			{
				"id" : ":circus_tent:",
				"symbol" : "🎪",
				"group" : "travel",
				"keywords" : [ "circus", "tent" ]
			},
			{
				"id" : ":locomotive:",
				"symbol" : "🚂",
				"group" : "travel",
				"keywords" : [ "engine", "locomotive", "railway", "steam",
						"train" ]
			},
			{
				"id" : ":railway_car:",
				"symbol" : "🚃",
				"group" : "travel",
				"keywords" : [ "car", "electric", "railway", "train", "tram",
						"trolleybus" ]
			},
			{
				"id" : ":high-speed_train:",
				"symbol" : "🚄",
				"group" : "travel",
				"keywords" : [ "high-speed train", "railway", "shinkansen",
						"speed", "train" ]
			},
			{
				"id" : ":bullet_train:",
				"symbol" : "🚅",
				"group" : "travel",
				"keywords" : [ "bullet", "railway", "shinkansen", "speed",
						"train" ]
			},
			{
				"id" : ":train:",
				"symbol" : "🚆",
				"group" : "travel",
				"keywords" : [ "railway", "train" ]
			},
			{
				"id" : ":metro:",
				"symbol" : "🚇",
				"group" : "travel",
				"keywords" : [ "metro", "subway" ]
			},
			{
				"id" : ":light_rail:",
				"symbol" : "🚈",
				"group" : "travel",
				"keywords" : [ "light rail", "railway" ]
			},
			{
				"id" : ":station:",
				"symbol" : "🚉",
				"group" : "travel",
				"keywords" : [ "railway", "station", "train" ]
			},
			{
				"id" : ":tram:",
				"symbol" : "🚊",
				"group" : "travel",
				"keywords" : [ "tram", "trolleybus" ]
			},
			{
				"id" : ":monorail:",
				"symbol" : "🚝",
				"group" : "travel",
				"keywords" : [ "monorail", "vehicle" ]
			},
			{
				"id" : ":mountain_railway:",
				"symbol" : "🚞",
				"group" : "travel",
				"keywords" : [ "car", "mountain", "railway" ]
			},
			{
				"id" : ":tram_car:",
				"symbol" : "🚋",
				"group" : "travel",
				"keywords" : [ "car", "tram", "trolleybus" ]
			},
			{
				"id" : ":bus:",
				"symbol" : "🚌",
				"group" : "travel",
				"keywords" : [ "bus", "vehicle" ]
			},
			{
				"id" : ":oncoming_bus:",
				"symbol" : "🚍",
				"group" : "travel",
				"keywords" : [ "bus", "oncoming" ]
			},
			{
				"id" : ":trolleybus:",
				"symbol" : "🚎",
				"group" : "travel",
				"keywords" : [ "bus", "tram", "trolley", "trolleybus" ]
			},
			{
				"id" : ":minibus:",
				"symbol" : "🚐",
				"group" : "travel",
				"keywords" : [ "bus", "minibus" ]
			},
			{
				"id" : ":ambulance:",
				"symbol" : "🚑",
				"group" : "travel",
				"keywords" : [ "ambulance", "vehicle" ]
			},
			{
				"id" : ":fire_engine:",
				"symbol" : "🚒",
				"group" : "travel",
				"keywords" : [ "engine", "fire", "truck" ]
			},
			{
				"id" : ":police_car:",
				"symbol" : "🚓",
				"group" : "travel",
				"keywords" : [ "car", "patrol", "police" ]
			},
			{
				"id" : ":oncoming_police_car:",
				"symbol" : "🚔",
				"group" : "travel",
				"keywords" : [ "car", "oncoming", "police" ]
			},
			{
				"id" : ":taxi:",
				"symbol" : "🚕",
				"group" : "travel",
				"keywords" : [ "taxi", "vehicle" ]
			},
			{
				"id" : ":oncoming_taxi:",
				"symbol" : "🚖",
				"group" : "travel",
				"keywords" : [ "oncoming", "taxi" ]
			},
			{
				"id" : ":automobile:",
				"symbol" : "🚗",
				"group" : "travel",
				"keywords" : [ "automobile", "car" ]
			},
			{
				"id" : ":oncoming_automobile:",
				"symbol" : "🚘",
				"group" : "travel",
				"keywords" : [ "automobile", "car", "oncoming" ]
			},
			{
				"id" : ":sport_utility_vehicle:",
				"symbol" : "🚙",
				"group" : "travel",
				"keywords" : [ "recreational", "sport utility",
						"sport utility vehicle" ]
			},
			{
				"id" : ":delivery_truck:",
				"symbol" : "🚚",
				"group" : "travel",
				"keywords" : [ "delivery", "truck" ]
			},
			{
				"id" : ":articulated_lorry:",
				"symbol" : "🚛",
				"group" : "travel",
				"keywords" : [ "articulated lorry", "lorry", "semi", "truck" ]
			},
			{
				"id" : ":tractor:",
				"symbol" : "🚜",
				"group" : "travel",
				"keywords" : [ "tractor", "vehicle" ]
			},
			{
				"id" : ":bicycle:",
				"symbol" : "🚲",
				"group" : "travel",
				"keywords" : [ "bicycle", "bike" ]
			},
			{
				"id" : ":kick_scooter:",
				"symbol" : "🛴",
				"group" : "travel",
				"keywords" : [ "kick", "scooter" ]
			},
			{
				"id" : ":motor_scooter:",
				"symbol" : "🛵",
				"group" : "travel",
				"keywords" : [ "motor", "scooter" ]
			},
			{
				"id" : ":bus_stop:",
				"symbol" : "🚏",
				"group" : "travel",
				"keywords" : [ "bus", "busstop", "stop" ]
			},
			{
				"id" : ":motorway:",
				"symbol" : "🛣",
				"group" : "travel",
				"keywords" : [ "highway", "motorway", "road" ]
			},
			{
				"id" : ":railway_track:",
				"symbol" : "🛤",
				"group" : "travel",
				"keywords" : [ "railway", "railway track", "train" ]
			},
			{
				"id" : ":oil_drum:",
				"symbol" : "🛢",
				"group" : "travel",
				"keywords" : [ "drum", "oil" ]
			},
			{
				"id" : ":fuel_pump:",
				"symbol" : "⛽",
				"group" : "travel",
				"keywords" : [ "diesel", "fuel", "fuelpump", "gas", "pump",
						"station" ]
			},
			{
				"id" : ":police_car_light:",
				"symbol" : "🚨",
				"group" : "travel",
				"keywords" : [ "beacon", "car", "light", "police", "revolving" ]
			},
			{
				"id" : ":horizontal_traffic_light:",
				"symbol" : "🚥",
				"group" : "travel",
				"keywords" : [ "horizontal traffic light", "light", "signal",
						"traffic" ]
			},
			{
				"id" : ":vertical_traffic_light:",
				"symbol" : "🚦",
				"group" : "travel",
				"keywords" : [ "light", "signal", "traffic",
						"vertical traffic light" ]
			},
			{
				"id" : ":stop_sign:",
				"symbol" : "🛑",
				"group" : "travel",
				"keywords" : [ "octagonal", "sign", "stop" ]
			},
			{
				"id" : ":construction:",
				"symbol" : "🚧",
				"group" : "travel",
				"keywords" : [ "barrier", "construction" ]
			},
			{
				"id" : ":anchor:",
				"symbol" : "⚓",
				"group" : "travel",
				"keywords" : [ "anchor", "ship", "tool" ]
			},
			{
				"id" : ":sailboat:",
				"symbol" : "⛵",
				"group" : "travel",
				"keywords" : [ "boat", "resort", "sailboat", "sea", "yacht" ]
			},
			{
				"id" : ":canoe:",
				"symbol" : "🛶",
				"group" : "travel",
				"keywords" : [ "boat", "canoe" ]
			},
			{
				"id" : ":speedboat:",
				"symbol" : "🚤",
				"group" : "travel",
				"keywords" : [ "boat", "speedboat" ]
			},
			{
				"id" : ":passenger_ship:",
				"symbol" : "🛳",
				"group" : "travel",
				"keywords" : [ "passenger", "ship" ]
			},
			{
				"id" : ":ferry:",
				"symbol" : "⛴",
				"group" : "travel",
				"keywords" : [ "boat", "ferry", "passenger" ]
			},
			{
				"id" : ":motor_boat:",
				"symbol" : "🛥",
				"group" : "travel",
				"keywords" : [ "boat", "motor boat", "motorboat" ]
			},
			{
				"id" : ":ship:",
				"symbol" : "🚢",
				"group" : "travel",
				"keywords" : [ "boat", "passenger", "ship" ]
			},
			{
				"id" : ":airplane:",
				"symbol" : "✈",
				"group" : "travel",
				"keywords" : [ "aeroplane", "airplane" ]
			},
			{
				"id" : ":small_airplane:",
				"symbol" : "🛩",
				"group" : "travel",
				"keywords" : [ "aeroplane", "airplane", "small airplane" ]
			},
			{
				"id" : ":airplane_departure:",
				"symbol" : "🛫",
				"group" : "travel",
				"keywords" : [ "aeroplane", "airplane", "check-in",
						"departure", "departures" ]
			},
			{
				"id" : ":airplane_arrival:",
				"symbol" : "🛬",
				"group" : "travel",
				"keywords" : [ "aeroplane", "airplane", "airplane arrival",
						"arrivals", "arriving", "landing" ]
			},
			{
				"id" : ":seat:",
				"symbol" : "💺",
				"group" : "travel",
				"keywords" : [ "chair", "seat" ]
			},
			{
				"id" : ":helicopter:",
				"symbol" : "🚁",
				"group" : "travel",
				"keywords" : [ "helicopter", "vehicle" ]
			},
			{
				"id" : ":suspension_railway:",
				"symbol" : "🚟",
				"group" : "travel",
				"keywords" : [ "railway", "suspension" ]
			},
			{
				"id" : ":mountain_cableway:",
				"symbol" : "🚠",
				"group" : "travel",
				"keywords" : [ "cable", "gondola", "mountain",
						"mountain cableway" ]
			},
			{
				"id" : ":aerial_tramway:",
				"symbol" : "🚡",
				"group" : "travel",
				"keywords" : [ "aerial", "cable", "car", "gondola", "tramway" ]
			},
			{
				"id" : ":satellite:",
				"symbol" : "🛰",
				"group" : "travel",
				"keywords" : [ "satellite", "space" ]
			},
			{
				"id" : ":rocket:",
				"symbol" : "🚀",
				"group" : "travel",
				"keywords" : [ "rocket", "space" ]
			},
			{
				"id" : ":flying_saucer:",
				"symbol" : "🛸",
				"group" : "travel",
				"keywords" : [ "flying saucer", "UFO" ]
			},
			{
				"id" : ":bellhop_bell:",
				"symbol" : "🛎",
				"group" : "travel",
				"keywords" : [ "bell", "bellhop", "hotel" ]
			},
			{
				"id" : ":hourglass_done:",
				"symbol" : "⌛",
				"group" : "travel",
				"keywords" : [ "hourglass done", "sand", "timer" ]
			},
			{
				"id" : ":hourglass_not_done:",
				"symbol" : "⏳",
				"group" : "travel",
				"keywords" : [ "hourglass", "hourglass not done", "sand",
						"timer" ]
			},
			{
				"id" : ":watch:",
				"symbol" : "⌚",
				"group" : "travel",
				"keywords" : [ "clock", "watch" ]
			},
			{
				"id" : ":alarm_clock:",
				"symbol" : "⏰",
				"group" : "travel",
				"keywords" : [ "alarm", "clock" ]
			},
			{
				"id" : ":stopwatch:",
				"symbol" : "⏱",
				"group" : "travel",
				"keywords" : [ "clock", "stopwatch" ]
			},
			{
				"id" : ":timer_clock:",
				"symbol" : "⏲",
				"group" : "travel",
				"keywords" : [ "clock", "timer" ]
			},
			{
				"id" : ":mantelpiece_clock:",
				"symbol" : "🕰",
				"group" : "travel",
				"keywords" : [ "clock", "mantelpiece clock" ]
			},
			{
				"id" : ":twelve_o’clock:",
				"symbol" : "🕛",
				"group" : "travel",
				"keywords" : [ "00", "12", "12:00", "clock", "o’clock",
						"twelve" ]
			},
			{
				"id" : ":twelve-thirty:",
				"symbol" : "🕧",
				"group" : "travel",
				"keywords" : [ "12", "12:30", "clock", "thirty", "twelve",
						"twelve-thirty" ]
			},
			{
				"id" : ":one_o’clock:",
				"symbol" : "🕐",
				"group" : "travel",
				"keywords" : [ "00", "1", "1:00", "clock", "o’clock", "one" ]
			},
			{
				"id" : ":one-thirty:",
				"symbol" : "🕜",
				"group" : "travel",
				"keywords" : [ "1", "1:30", "clock", "one", "one-thirty",
						"thirty" ]
			},
			{
				"id" : ":two_o’clock:",
				"symbol" : "🕑",
				"group" : "travel",
				"keywords" : [ "00", "2", "2:00", "clock", "o’clock", "two" ]
			},
			{
				"id" : ":two-thirty:",
				"symbol" : "🕝",
				"group" : "travel",
				"keywords" : [ "2", "2:30", "clock", "thirty", "two",
						"two-thirty" ]
			},
			{
				"id" : ":three_o’clock:",
				"symbol" : "🕒",
				"group" : "travel",
				"keywords" : [ "00", "3", "3:00", "clock", "o’clock", "three" ]
			},
			{
				"id" : ":three-thirty:",
				"symbol" : "🕞",
				"group" : "travel",
				"keywords" : [ "3", "3:30", "clock", "thirty", "three",
						"three-thirty" ]
			},
			{
				"id" : ":four_o’clock:",
				"symbol" : "🕓",
				"group" : "travel",
				"keywords" : [ "00", "4", "4:00", "clock", "four", "o’clock" ]
			},
			{
				"id" : ":four-thirty:",
				"symbol" : "🕟",
				"group" : "travel",
				"keywords" : [ "4", "4:30", "clock", "four", "four-thirty",
						"thirty" ]
			},
			{
				"id" : ":five_o’clock:",
				"symbol" : "🕔",
				"group" : "travel",
				"keywords" : [ "00", "5", "5:00", "clock", "five", "o’clock" ]
			},
			{
				"id" : ":five-thirty:",
				"symbol" : "🕠",
				"group" : "travel",
				"keywords" : [ "5", "5:30", "clock", "five", "five-thirty",
						"thirty" ]
			},
			{
				"id" : ":six_o’clock:",
				"symbol" : "🕕",
				"group" : "travel",
				"keywords" : [ "00", "6", "6:00", "clock", "o’clock", "six" ]
			},
			{
				"id" : ":six-thirty:",
				"symbol" : "🕡",
				"group" : "travel",
				"keywords" : [ "6", "6:30", "clock", "six", "six-thirty",
						"thirty" ]
			},
			{
				"id" : ":seven_o’clock:",
				"symbol" : "🕖",
				"group" : "travel",
				"keywords" : [ "00", "7", "7:00", "clock", "o’clock", "seven" ]
			},
			{
				"id" : ":seven-thirty:",
				"symbol" : "🕢",
				"group" : "travel",
				"keywords" : [ "7", "7:30", "clock", "seven", "seven-thirty",
						"thirty" ]
			},
			{
				"id" : ":eight_o’clock:",
				"symbol" : "🕗",
				"group" : "travel",
				"keywords" : [ "00", "8", "8:00", "clock", "eight", "o’clock" ]
			},
			{
				"id" : ":eight-thirty:",
				"symbol" : "🕣",
				"group" : "travel",
				"keywords" : [ "8", "8:30", "clock", "eight", "eight-thirty",
						"thirty" ]
			},
			{
				"id" : ":nine_o’clock:",
				"symbol" : "🕘",
				"group" : "travel",
				"keywords" : [ "00", "9", "9:00", "clock", "nine", "o’clock" ]
			},
			{
				"id" : ":nine-thirty:",
				"symbol" : "🕤",
				"group" : "travel",
				"keywords" : [ "9", "9:30", "clock", "nine", "nine-thirty",
						"thirty" ]
			},
			{
				"id" : ":ten_o’clock:",
				"symbol" : "🕙",
				"group" : "travel",
				"keywords" : [ "00", "10", "10:00", "clock", "o’clock", "ten" ]
			},
			{
				"id" : ":ten-thirty:",
				"symbol" : "🕥",
				"group" : "travel",
				"keywords" : [ "10", "10:30", "clock", "ten", "ten-thirty",
						"thirty" ]
			},
			{
				"id" : ":eleven_o’clock:",
				"symbol" : "🕚",
				"group" : "travel",
				"keywords" : [ "00", "11", "11:00", "clock", "eleven",
						"o’clock" ]
			},
			{
				"id" : ":eleven-thirty:",
				"symbol" : "🕦",
				"group" : "travel",
				"keywords" : [ "11", "11:30", "clock", "eleven",
						"eleven-thirty", "thirty" ]
			},
			{
				"id" : ":new_moon:",
				"symbol" : "🌑",
				"group" : "travel",
				"keywords" : [ "dark", "moon", "new moon" ]
			},
			{
				"id" : ":waxing_crescent_moon:",
				"symbol" : "🌒",
				"group" : "travel",
				"keywords" : [ "crescent", "moon", "waxing" ]
			},
			{
				"id" : ":first_quarter_moon:",
				"symbol" : "🌓",
				"group" : "travel",
				"keywords" : [ "first quarter moon", "moon", "quarter" ]
			},
			{
				"id" : ":waxing_gibbous_moon:",
				"symbol" : "🌔",
				"group" : "travel",
				"keywords" : [ "gibbous", "moon", "waxing" ]
			},
			{
				"id" : ":full_moon:",
				"symbol" : "🌕",
				"group" : "travel",
				"keywords" : [ "full", "moon" ]
			},
			{
				"id" : ":waning_gibbous_moon:",
				"symbol" : "🌖",
				"group" : "travel",
				"keywords" : [ "gibbous", "moon", "waning" ]
			},
			{
				"id" : ":last_quarter_moon:",
				"symbol" : "🌗",
				"group" : "travel",
				"keywords" : [ "last quarter moon", "moon", "quarter" ]
			},
			{
				"id" : ":waning_crescent_moon:",
				"symbol" : "🌘",
				"group" : "travel",
				"keywords" : [ "crescent", "moon", "waning" ]
			},
			{
				"id" : ":crescent_moon:",
				"symbol" : "🌙",
				"group" : "travel",
				"keywords" : [ "crescent", "moon" ]
			},
			{
				"id" : ":new_moon_face:",
				"symbol" : "🌚",
				"group" : "travel",
				"keywords" : [ "face", "moon", "new moon face" ]
			},
			{
				"id" : ":first_quarter_moon_face:",
				"symbol" : "🌛",
				"group" : "travel",
				"keywords" : [ "face", "first quarter moon face", "moon",
						"quarter" ]
			},
			{
				"id" : ":last_quarter_moon_face:",
				"symbol" : "🌜",
				"group" : "travel",
				"keywords" : [ "face", "last quarter moon face", "moon",
						"quarter" ]
			},
			{
				"id" : ":thermometer:",
				"symbol" : "🌡",
				"group" : "travel",
				"keywords" : [ "thermometer", "weather" ]
			},
			{
				"id" : ":sun:",
				"symbol" : "☀",
				"group" : "travel",
				"keywords" : [ "bright", "rays", "sun", "sunny" ]
			},
			{
				"id" : ":full_moon_face:",
				"symbol" : "🌝",
				"group" : "travel",
				"keywords" : [ "bright", "face", "full", "moon" ]
			},
			{
				"id" : ":sun_with_face:",
				"symbol" : "🌞",
				"group" : "travel",
				"keywords" : [ "bright", "face", "sun", "sun with face" ]
			},
			{
				"id" : ":star:",
				"symbol" : "⭐",
				"group" : "travel",
				"keywords" : [ "star" ]
			},
			{
				"id" : ":glowing_star:",
				"symbol" : "🌟",
				"group" : "travel",
				"keywords" : [ "glittery", "glow", "glowing star", "shining",
						"sparkle", "star" ]
			},
			{
				"id" : ":shooting_star:",
				"symbol" : "🌠",
				"group" : "travel",
				"keywords" : [ "falling", "shooting", "star" ]
			},
			{
				"id" : ":cloud:",
				"symbol" : "☁",
				"group" : "travel",
				"keywords" : [ "cloud", "weather" ]
			},
			{
				"id" : ":sun_behind_cloud:",
				"symbol" : "⛅",
				"group" : "travel",
				"keywords" : [ "cloud", "sun", "sun behind cloud" ]
			},
			{
				"id" : ":cloud_with_lightning_and_rain:",
				"symbol" : "⛈",
				"group" : "travel",
				"keywords" : [ "cloud", "cloud with lightning and rain",
						"rain", "thunder" ]
			},
			{
				"id" : ":sun_behind_small_cloud:",
				"symbol" : "🌤",
				"group" : "travel",
				"keywords" : [ "cloud", "sun", "sun behind small cloud" ]
			},
			{
				"id" : ":sun_behind_large_cloud:",
				"symbol" : "🌥",
				"group" : "travel",
				"keywords" : [ "cloud", "sun", "sun behind large cloud" ]
			},
			{
				"id" : ":sun_behind_rain_cloud:",
				"symbol" : "🌦",
				"group" : "travel",
				"keywords" : [ "cloud", "rain", "sun", "sun behind rain cloud" ]
			},
			{
				"id" : ":cloud_with_rain:",
				"symbol" : "🌧",
				"group" : "travel",
				"keywords" : [ "cloud", "cloud with rain", "rain" ]
			},
			{
				"id" : ":cloud_with_snow:",
				"symbol" : "🌨",
				"group" : "travel",
				"keywords" : [ "cloud", "cloud with snow", "cold", "snow" ]
			},
			{
				"id" : ":cloud_with_lightning:",
				"symbol" : "🌩",
				"group" : "travel",
				"keywords" : [ "cloud", "cloud with lightning", "lightning" ]
			},
			{
				"id" : ":tornado:",
				"symbol" : "🌪",
				"group" : "travel",
				"keywords" : [ "cloud", "tornado", "whirlwind" ]
			},
			{
				"id" : ":fog:",
				"symbol" : "🌫",
				"group" : "travel",
				"keywords" : [ "cloud", "fog" ]
			},
			{
				"id" : ":wind_face:",
				"symbol" : "🌬",
				"group" : "travel",
				"keywords" : [ "blow", "cloud", "face", "wind" ]
			},
			{
				"id" : ":cyclone:",
				"symbol" : "🌀",
				"group" : "travel",
				"keywords" : [ "cyclone", "dizzy", "hurricane", "twister",
						"typhoon" ]
			},
			{
				"id" : ":rainbow:",
				"symbol" : "🌈",
				"group" : "travel",
				"keywords" : [ "rain", "rainbow" ]
			},
			{
				"id" : ":closed_umbrella:",
				"symbol" : "🌂",
				"group" : "travel",
				"keywords" : [ "closed umbrella", "clothing", "rain",
						"umbrella" ]
			},
			{
				"id" : ":umbrella:",
				"symbol" : "☂",
				"group" : "travel",
				"keywords" : [ "clothing", "rain", "umbrella" ]
			},
			{
				"id" : ":umbrella_with_rain_drops:",
				"symbol" : "☔",
				"group" : "travel",
				"keywords" : [ "clothing", "drop", "rain", "umbrella",
						"umbrella with rain drops" ]
			},
			{
				"id" : ":umbrella_on_ground:",
				"symbol" : "⛱",
				"group" : "travel",
				"keywords" : [ "rain", "sun", "umbrella", "umbrella on ground" ]
			},
			{
				"id" : ":high_voltage:",
				"symbol" : "⚡",
				"group" : "travel",
				"keywords" : [ "danger", "electric", "high voltage",
						"lightning", "voltage", "zap" ]
			},
			{
				"id" : ":snowflake:",
				"symbol" : "❄",
				"group" : "travel",
				"keywords" : [ "cold", "snow", "snowflake" ]
			},
			{
				"id" : ":snowman:",
				"symbol" : "☃",
				"group" : "travel",
				"keywords" : [ "cold", "snow", "snowman" ]
			},
			{
				"id" : ":snowman_without_snow:",
				"symbol" : "⛄",
				"group" : "travel",
				"keywords" : [ "cold", "snow", "snowman",
						"snowman without snow" ]
			},
			{
				"id" : ":comet:",
				"symbol" : "☄",
				"group" : "travel",
				"keywords" : [ "comet", "space" ]
			},
			{
				"id" : ":fire:",
				"symbol" : "🔥",
				"group" : "travel",
				"keywords" : [ "fire", "flame", "tool" ]
			},
			{
				"id" : ":droplet:",
				"symbol" : "💧",
				"group" : "travel",
				"keywords" : [ "cold", "comic", "drop", "droplet", "sweat" ]
			},
			{
				"id" : ":water_wave:",
				"symbol" : "🌊",
				"group" : "travel",
				"keywords" : [ "ocean", "water", "wave" ]
			},
			{
				"id" : ":jack-o-lantern:",
				"symbol" : "🎃",
				"group" : "activities",
				"keywords" : [ "celebration", "halloween", "jack",
						"jack-o-lantern", "lantern" ]
			},
			{
				"id" : ":christmas_tree:",
				"symbol" : "🎄",
				"group" : "activities",
				"keywords" : [ "celebration", "Christmas", "tree" ]
			},
			{
				"id" : ":fireworks:",
				"symbol" : "🎆",
				"group" : "activities",
				"keywords" : [ "celebration", "fireworks" ]
			},
			{
				"id" : ":sparkler:",
				"symbol" : "🎇",
				"group" : "activities",
				"keywords" : [ "celebration", "fireworks", "sparkle",
						"sparkler" ]
			},
			{
				"id" : ":sparkles:",
				"symbol" : "✨",
				"group" : "activities",
				"keywords" : [ "sparkle", "sparkles", "star" ]
			},
			{
				"id" : ":balloon:",
				"symbol" : "🎈",
				"group" : "activities",
				"keywords" : [ "balloon", "celebration" ]
			},
			{
				"id" : ":party_popper:",
				"symbol" : "🎉",
				"group" : "activities",
				"keywords" : [ "celebration", "party", "popper", "tada" ]
			},
			{
				"id" : ":confetti_ball:",
				"symbol" : "🎊",
				"group" : "activities",
				"keywords" : [ "ball", "celebration", "confetti" ]
			},
			{
				"id" : ":tanabata_tree:",
				"symbol" : "🎋",
				"group" : "activities",
				"keywords" : [ "banner", "celebration", "Japanese",
						"tanabata tree", "tree" ]
			},
			{
				"id" : ":pine_decoration:",
				"symbol" : "🎍",
				"group" : "activities",
				"keywords" : [ "bamboo", "celebration", "Japanese", "pine",
						"pine decoration" ]
			},
			{
				"id" : ":japanese_dolls:",
				"symbol" : "🎎",
				"group" : "activities",
				"keywords" : [ "celebration", "doll", "festival", "Japanese",
						"Japanese dolls" ]
			},
			{
				"id" : ":carp_streamer:",
				"symbol" : "🎏",
				"group" : "activities",
				"keywords" : [ "carp", "celebration", "streamer" ]
			},
			{
				"id" : ":wind_chime:",
				"symbol" : "🎐",
				"group" : "activities",
				"keywords" : [ "bell", "celebration", "chime", "wind" ]
			},
			{
				"id" : ":moon_viewing_ceremony:",
				"symbol" : "🎑",
				"group" : "activities",
				"keywords" : [ "celebration", "ceremony", "moon",
						"moon viewing ceremony" ]
			},
			{
				"id" : ":ribbon:",
				"symbol" : "🎀",
				"group" : "activities",
				"keywords" : [ "celebration", "ribbon" ]
			},
			{
				"id" : ":wrapped_gift:",
				"symbol" : "🎁",
				"group" : "activities",
				"keywords" : [ "box", "celebration", "gift", "present",
						"wrapped" ]
			},
			{
				"id" : ":reminder_ribbon:",
				"symbol" : "🎗",
				"group" : "activities",
				"keywords" : [ "celebration", "reminder", "ribbon" ]
			},
			{
				"id" : ":admission_tickets:",
				"symbol" : "🎟",
				"group" : "activities",
				"keywords" : [ "admission", "admission tickets", "ticket" ]
			},
			{
				"id" : ":ticket:",
				"symbol" : "🎫",
				"group" : "activities",
				"keywords" : [ "admission", "ticket" ]
			},
			{
				"id" : ":military_medal:",
				"symbol" : "🎖",
				"group" : "activities",
				"keywords" : [ "celebration", "medal", "military" ]
			},
			{
				"id" : ":trophy:",
				"symbol" : "🏆",
				"group" : "activities",
				"keywords" : [ "prize", "trophy" ]
			},
			{
				"id" : ":sports_medal:",
				"symbol" : "🏅",
				"group" : "activities",
				"keywords" : [ "medal", "sports medal" ]
			},
			{
				"id" : ":1st_place_medal:",
				"symbol" : "🥇",
				"group" : "activities",
				"keywords" : [ "1st place medal", "first", "gold", "medal" ]
			},
			{
				"id" : ":2nd_place_medal:",
				"symbol" : "🥈",
				"group" : "activities",
				"keywords" : [ "2nd place medal", "medal", "second", "silver" ]
			},
			{
				"id" : ":3rd_place_medal:",
				"symbol" : "🥉",
				"group" : "activities",
				"keywords" : [ "3rd place medal", "bronze", "medal", "third" ]
			},
			{
				"id" : ":soccer_ball:",
				"symbol" : "⚽",
				"group" : "activities",
				"keywords" : [ "ball", "football", "soccer" ]
			},
			{
				"id" : ":baseball:",
				"symbol" : "⚾",
				"group" : "activities",
				"keywords" : [ "ball", "baseball" ]
			},
			{
				"id" : ":basketball:",
				"symbol" : "🏀",
				"group" : "activities",
				"keywords" : [ "ball", "basketball", "hoop" ]
			},
			{
				"id" : ":volleyball:",
				"symbol" : "🏐",
				"group" : "activities",
				"keywords" : [ "ball", "game", "volleyball" ]
			},
			{
				"id" : ":american_football:",
				"symbol" : "🏈",
				"group" : "activities",
				"keywords" : [ "american", "ball", "football" ]
			},
			{
				"id" : ":rugby_football:",
				"symbol" : "🏉",
				"group" : "activities",
				"keywords" : [ "ball", "football", "rugby" ]
			},
			{
				"id" : ":tennis:",
				"symbol" : "🎾",
				"group" : "activities",
				"keywords" : [ "ball", "racquet", "tennis" ]
			},
			{
				"id" : ":bowling:",
				"symbol" : "🎳",
				"group" : "activities",
				"keywords" : [ "ball", "bowling", "game" ]
			},
			{
				"id" : ":cricket_game:",
				"symbol" : "🏏",
				"group" : "activities",
				"keywords" : [ "ball", "bat", "cricket game", "game" ]
			},
			{
				"id" : ":field_hockey:",
				"symbol" : "🏑",
				"group" : "activities",
				"keywords" : [ "ball", "field", "game", "hockey", "stick" ]
			},
			{
				"id" : ":ice_hockey:",
				"symbol" : "🏒",
				"group" : "activities",
				"keywords" : [ "game", "hockey", "ice", "puck", "stick" ]
			},
			{
				"id" : ":ping_pong:",
				"symbol" : "🏓",
				"group" : "activities",
				"keywords" : [ "ball", "bat", "game", "paddle", "ping pong",
						"table tennis" ]
			},
			{
				"id" : ":badminton:",
				"symbol" : "🏸",
				"group" : "activities",
				"keywords" : [ "badminton", "birdie", "game", "racquet",
						"shuttlecock" ]
			},
			{
				"id" : ":boxing_glove:",
				"symbol" : "🥊",
				"group" : "activities",
				"keywords" : [ "boxing", "glove" ]
			},
			{
				"id" : ":martial_arts_uniform:",
				"symbol" : "🥋",
				"group" : "activities",
				"keywords" : [ "judo", "karate", "martial arts",
						"martial arts uniform", "taekwondo", "uniform" ]
			},
			{
				"id" : ":goal_net:",
				"symbol" : "🥅",
				"group" : "activities",
				"keywords" : [ "goal", "net" ]
			},
			{
				"id" : ":flag_in_hole:",
				"symbol" : "⛳",
				"group" : "activities",
				"keywords" : [ "flag in hole", "golf", "hole" ]
			},
			{
				"id" : ":ice_skate:",
				"symbol" : "⛸",
				"group" : "activities",
				"keywords" : [ "ice", "skate" ]
			},
			{
				"id" : ":fishing_pole:",
				"symbol" : "🎣",
				"group" : "activities",
				"keywords" : [ "fish", "fishing pole", "pole" ]
			},
			{
				"id" : ":running_shirt:",
				"symbol" : "🎽",
				"group" : "activities",
				"keywords" : [ "athletics", "running", "sash", "shirt" ]
			},
			{
				"id" : ":skis:",
				"symbol" : "🎿",
				"group" : "activities",
				"keywords" : [ "ski", "skis", "snow" ]
			},
			{
				"id" : ":sled:",
				"symbol" : "🛷",
				"group" : "activities",
				"keywords" : [ "sled", "sledge", "sleigh", "" ]
			},
			{
				"id" : ":curling_stone:",
				"symbol" : "🥌",
				"group" : "activities",
				"keywords" : [ "curling stone", "game", "rock" ]
			},
			{
				"id" : ":direct_hit:",
				"symbol" : "🎯",
				"group" : "activities",
				"keywords" : [ "bullseye", "dart", "direct hit", "game", "hit",
						"target" ]
			},
			{
				"id" : ":pool_8_ball:",
				"symbol" : "🎱",
				"group" : "activities",
				"keywords" : [ "8", "ball", "billiard", "eight", "game",
						"pool 8 ball" ]
			},
			{
				"id" : ":crystal_ball:",
				"symbol" : "🔮",
				"group" : "activities",
				"keywords" : [ "ball", "crystal", "fairy tale", "fantasy",
						"fortune", "tool" ]
			},
			{
				"id" : ":video_game:",
				"symbol" : "🎮",
				"group" : "activities",
				"keywords" : [ "controller", "game", "video game" ]
			},
			{
				"id" : ":joystick:",
				"symbol" : "🕹",
				"group" : "activities",
				"keywords" : [ "game", "joystick", "video game" ]
			},
			{
				"id" : ":slot_machine:",
				"symbol" : "🎰",
				"group" : "activities",
				"keywords" : [ "game", "slot", "slot machine" ]
			},
			{
				"id" : ":game_die:",
				"symbol" : "🎲",
				"group" : "activities",
				"keywords" : [ "dice", "die", "game" ]
			},
			{
				"id" : ":spade_suit:",
				"symbol" : "♠",
				"group" : "activities",
				"keywords" : [ "card", "game", "spade suit" ]
			},
			{
				"id" : ":heart_suit:",
				"symbol" : "♥",
				"group" : "activities",
				"keywords" : [ "card", "game", "heart suit" ]
			},
			{
				"id" : ":diamond_suit:",
				"symbol" : "♦",
				"group" : "activities",
				"keywords" : [ "card", "diamond suit", "game" ]
			},
			{
				"id" : ":club_suit:",
				"symbol" : "♣",
				"group" : "activities",
				"keywords" : [ "card", "club suit", "game" ]
			},
			{
				"id" : ":joker:",
				"symbol" : "🃏",
				"group" : "activities",
				"keywords" : [ "card", "game", "joker", "wildcard" ]
			},
			{
				"id" : ":mahjong_red_dragon:",
				"symbol" : "🀄",
				"group" : "activities",
				"keywords" : [ "game", "mahjong", "mahjong red dragon", "red" ]
			},
			{
				"id" : ":flower_playing_cards:",
				"symbol" : "🎴",
				"group" : "activities",
				"keywords" : [ "card", "flower", "flower playing cards",
						"game", "Japanese", "playing" ]
			},
			{
				"id" : ":performing_arts:",
				"symbol" : "🎭",
				"group" : "activities",
				"keywords" : [ "art", "mask", "performing", "performing arts",
						"theater", "theatre" ]
			},
			{
				"id" : ":framed_picture:",
				"symbol" : "🖼",
				"group" : "activities",
				"keywords" : [ "art", "frame", "framed picture", "museum",
						"painting", "picture" ]
			},
			{
				"id" : ":artist_palette:",
				"symbol" : "🎨",
				"group" : "activities",
				"keywords" : [ "art", "artist palette", "museum", "painting",
						"palette" ]
			},
			{
				"id" : ":muted_speaker:",
				"symbol" : "🔇",
				"group" : "objects",
				"keywords" : [ "mute", "muted speaker", "quiet", "silent",
						"speaker" ]
			},
			{
				"id" : ":speaker_low_volume:",
				"symbol" : "🔈",
				"group" : "objects",
				"keywords" : [ "soft", "speaker low volume" ]
			},
			{
				"id" : ":speaker_medium_volume:",
				"symbol" : "🔉",
				"group" : "objects",
				"keywords" : [ "medium", "speaker medium volume" ]
			},
			{
				"id" : ":speaker_high_volume:",
				"symbol" : "🔊",
				"group" : "objects",
				"keywords" : [ "loud", "speaker high volume" ]
			},
			{
				"id" : ":loudspeaker:",
				"symbol" : "📢",
				"group" : "objects",
				"keywords" : [ "loud", "loudspeaker", "public address" ]
			},
			{
				"id" : ":megaphone:",
				"symbol" : "📣",
				"group" : "objects",
				"keywords" : [ "cheering", "megaphone" ]
			},
			{
				"id" : ":postal_horn:",
				"symbol" : "📯",
				"group" : "objects",
				"keywords" : [ "horn", "post", "postal" ]
			},
			{
				"id" : ":bell:",
				"symbol" : "🔔",
				"group" : "objects",
				"keywords" : [ "bell" ]
			},
			{
				"id" : ":bell_with_slash:",
				"symbol" : "🔕",
				"group" : "objects",
				"keywords" : [ "bell", "bell with slash", "forbidden", "mute",
						"quiet", "silent" ]
			},
			{
				"id" : ":musical_score:",
				"symbol" : "🎼",
				"group" : "objects",
				"keywords" : [ "music", "musical score", "score" ]
			},
			{
				"id" : ":musical_note:",
				"symbol" : "🎵",
				"group" : "objects",
				"keywords" : [ "music", "musical note", "note" ]
			},
			{
				"id" : ":musical_notes:",
				"symbol" : "🎶",
				"group" : "objects",
				"keywords" : [ "music", "musical notes", "note", "notes" ]
			},
			{
				"id" : ":studio_microphone:",
				"symbol" : "🎙",
				"group" : "objects",
				"keywords" : [ "mic", "microphone", "music", "studio" ]
			},
			{
				"id" : ":level_slider:",
				"symbol" : "🎚",
				"group" : "objects",
				"keywords" : [ "level", "music", "slider" ]
			},
			{
				"id" : ":control_knobs:",
				"symbol" : "🎛",
				"group" : "objects",
				"keywords" : [ "control", "knobs", "music" ]
			},
			{
				"id" : ":microphone:",
				"symbol" : "🎤",
				"group" : "objects",
				"keywords" : [ "karaoke", "mic", "microphone" ]
			},
			{
				"id" : ":headphone:",
				"symbol" : "🎧",
				"group" : "objects",
				"keywords" : [ "earbud", "headphone" ]
			},
			{
				"id" : ":radio:",
				"symbol" : "📻",
				"group" : "objects",
				"keywords" : [ "radio", "video" ]
			},
			{
				"id" : ":saxophone:",
				"symbol" : "🎷",
				"group" : "objects",
				"keywords" : [ "instrument", "music", "sax", "saxophone" ]
			},
			{
				"id" : ":guitar:",
				"symbol" : "🎸",
				"group" : "objects",
				"keywords" : [ "guitar", "instrument", "music" ]
			},
			{
				"id" : ":musical_keyboard:",
				"symbol" : "🎹",
				"group" : "objects",
				"keywords" : [ "instrument", "keyboard", "music",
						"musical keyboard", "piano" ]
			},
			{
				"id" : ":trumpet:",
				"symbol" : "🎺",
				"group" : "objects",
				"keywords" : [ "instrument", "music", "trumpet" ]
			},
			{
				"id" : ":violin:",
				"symbol" : "🎻",
				"group" : "objects",
				"keywords" : [ "instrument", "music", "violin" ]
			},
			{
				"id" : ":drum:",
				"symbol" : "🥁",
				"group" : "objects",
				"keywords" : [ "drum", "drumsticks", "music" ]
			},
			{
				"id" : ":mobile_phone:",
				"symbol" : "📱",
				"group" : "objects",
				"keywords" : [ "cell", "mobile", "phone", "telephone" ]
			},
			{
				"id" : ":mobile_phone_with_arrow:",
				"symbol" : "📲",
				"group" : "objects",
				"keywords" : [ "arrow", "cell", "mobile",
						"mobile phone with arrow", "phone", "receive" ]
			},
			{
				"id" : ":telephone:",
				"symbol" : "☎",
				"group" : "objects",
				"keywords" : [ "phone", "telephone" ]
			},
			{
				"id" : ":telephone_receiver:",
				"symbol" : "📞",
				"group" : "objects",
				"keywords" : [ "phone", "receiver", "telephone" ]
			},
			{
				"id" : ":pager:",
				"symbol" : "📟",
				"group" : "objects",
				"keywords" : [ "pager" ]
			},
			{
				"id" : ":fax_machine:",
				"symbol" : "📠",
				"group" : "objects",
				"keywords" : [ "fax", "fax machine" ]
			},
			{
				"id" : ":battery:",
				"symbol" : "🔋",
				"group" : "objects",
				"keywords" : [ "battery" ]
			},
			{
				"id" : ":electric_plug:",
				"symbol" : "🔌",
				"group" : "objects",
				"keywords" : [ "electric", "electricity", "plug" ]
			},
			{
				"id" : ":laptop_computer:",
				"symbol" : "💻",
				"group" : "objects",
				"keywords" : [ "computer", "laptop computer", "pc", "personal" ]
			},
			{
				"id" : ":desktop_computer:",
				"symbol" : "🖥",
				"group" : "objects",
				"keywords" : [ "computer", "desktop" ]
			},
			{
				"id" : ":printer:",
				"symbol" : "🖨",
				"group" : "objects",
				"keywords" : [ "computer", "printer" ]
			},
			{
				"id" : ":keyboard:",
				"symbol" : "⌨",
				"group" : "objects",
				"keywords" : [ "computer", "keyboard" ]
			},
			{
				"id" : ":computer_mouse:",
				"symbol" : "🖱",
				"group" : "objects",
				"keywords" : [ "computer", "computer mouse" ]
			},
			{
				"id" : ":trackball:",
				"symbol" : "🖲",
				"group" : "objects",
				"keywords" : [ "computer", "trackball" ]
			},
			{
				"id" : ":computer_disk:",
				"symbol" : "💽",
				"group" : "objects",
				"keywords" : [ "computer", "disk", "minidisk", "optical" ]
			},
			{
				"id" : ":floppy_disk:",
				"symbol" : "💾",
				"group" : "objects",
				"keywords" : [ "computer", "disk", "floppy" ]
			},
			{
				"id" : ":optical_disk:",
				"symbol" : "💿",
				"group" : "objects",
				"keywords" : [ "cd", "computer", "disk", "optical" ]
			},
			{
				"id" : ":dvd:",
				"symbol" : "📀",
				"group" : "objects",
				"keywords" : [ "blu-ray", "computer", "disk", "dvd", "optical" ]
			},
			{
				"id" : ":movie_camera:",
				"symbol" : "🎥",
				"group" : "objects",
				"keywords" : [ "camera", "cinema", "movie" ]
			},
			{
				"id" : ":film_frames:",
				"symbol" : "🎞",
				"group" : "objects",
				"keywords" : [ "cinema", "film", "frames", "movie" ]
			},
			{
				"id" : ":film_projector:",
				"symbol" : "📽",
				"group" : "objects",
				"keywords" : [ "cinema", "film", "movie", "projector", "video" ]
			},
			{
				"id" : ":clapper_board:",
				"symbol" : "🎬",
				"group" : "objects",
				"keywords" : [ "clapper", "clapper board", "movie" ]
			},
			{
				"id" : ":television:",
				"symbol" : "📺",
				"group" : "objects",
				"keywords" : [ "television", "tv", "video" ]
			},
			{
				"id" : ":camera:",
				"symbol" : "📷",
				"group" : "objects",
				"keywords" : [ "camera", "video" ]
			},
			{
				"id" : ":camera_with_flash:",
				"symbol" : "📸",
				"group" : "objects",
				"keywords" : [ "camera", "camera with flash", "flash", "video" ]
			},
			{
				"id" : ":video_camera:",
				"symbol" : "📹",
				"group" : "objects",
				"keywords" : [ "camera", "video" ]
			},
			{
				"id" : ":videocassette:",
				"symbol" : "📼",
				"group" : "objects",
				"keywords" : [ "tape", "vhs", "video", "videocassette" ]
			},
			{
				"id" : ":magnifying_glass_tilted_left:",
				"symbol" : "🔍",
				"group" : "objects",
				"keywords" : [ "glass", "magnifying",
						"magnifying glass tilted left", "search", "tool" ]
			},
			{
				"id" : ":magnifying_glass_tilted_right:",
				"symbol" : "🔎",
				"group" : "objects",
				"keywords" : [ "glass", "magnifying",
						"magnifying glass tilted right", "search", "tool" ]
			},
			{
				"id" : ":candle:",
				"symbol" : "🕯",
				"group" : "objects",
				"keywords" : [ "candle", "light" ]
			},
			{
				"id" : ":light_bulb:",
				"symbol" : "💡",
				"group" : "objects",
				"keywords" : [ "bulb", "comic", "electric", "idea", "light" ]
			},
			{
				"id" : ":flashlight:",
				"symbol" : "🔦",
				"group" : "objects",
				"keywords" : [ "electric", "flashlight", "light", "tool",
						"torch" ]
			},
			{
				"id" : ":red_paper_lantern:",
				"symbol" : "🏮",
				"group" : "objects",
				"keywords" : [ "bar", "lantern", "light", "red",
						"red paper lantern" ]
			},
			{
				"id" : ":notebook_with_decorative_cover:",
				"symbol" : "📔",
				"group" : "objects",
				"keywords" : [ "book", "cover", "decorated", "notebook",
						"notebook with decorative cover" ]
			},
			{
				"id" : ":closed_book:",
				"symbol" : "📕",
				"group" : "objects",
				"keywords" : [ "book", "closed" ]
			},
			{
				"id" : ":open_book:",
				"symbol" : "📖",
				"group" : "objects",
				"keywords" : [ "book", "open" ]
			},
			{
				"id" : ":green_book:",
				"symbol" : "📗",
				"group" : "objects",
				"keywords" : [ "book", "green" ]
			},
			{
				"id" : ":blue_book:",
				"symbol" : "📘",
				"group" : "objects",
				"keywords" : [ "blue", "book" ]
			},
			{
				"id" : ":orange_book:",
				"symbol" : "📙",
				"group" : "objects",
				"keywords" : [ "book", "orange" ]
			},
			{
				"id" : ":books:",
				"symbol" : "📚",
				"group" : "objects",
				"keywords" : [ "book", "books" ]
			},
			{
				"id" : ":notebook:",
				"symbol" : "📓",
				"group" : "objects",
				"keywords" : [ "notebook" ]
			},
			{
				"id" : ":ledger:",
				"symbol" : "📒",
				"group" : "objects",
				"keywords" : [ "ledger", "notebook" ]
			},
			{
				"id" : ":page_with_curl:",
				"symbol" : "📃",
				"group" : "objects",
				"keywords" : [ "curl", "document", "page", "page with curl" ]
			},
			{
				"id" : ":scroll:",
				"symbol" : "📜",
				"group" : "objects",
				"keywords" : [ "paper", "scroll" ]
			},
			{
				"id" : ":page_facing_up:",
				"symbol" : "📄",
				"group" : "objects",
				"keywords" : [ "document", "page", "page facing up" ]
			},
			{
				"id" : ":newspaper:",
				"symbol" : "📰",
				"group" : "objects",
				"keywords" : [ "news", "newspaper", "paper" ]
			},
			{
				"id" : ":rolled-up_newspaper:",
				"symbol" : "🗞",
				"group" : "objects",
				"keywords" : [ "news", "newspaper", "paper", "rolled",
						"rolled-up newspaper" ]
			},
			{
				"id" : ":bookmark_tabs:",
				"symbol" : "📑",
				"group" : "objects",
				"keywords" : [ "bookmark", "mark", "marker", "tabs" ]
			},
			{
				"id" : ":bookmark:",
				"symbol" : "🔖",
				"group" : "objects",
				"keywords" : [ "bookmark", "mark" ]
			},
			{
				"id" : ":label:",
				"symbol" : "🏷",
				"group" : "objects",
				"keywords" : [ "label" ]
			},
			{
				"id" : ":money_bag:",
				"symbol" : "💰",
				"group" : "objects",
				"keywords" : [ "bag", "dollar", "money", "moneybag" ]
			},
			{
				"id" : ":yen_banknote:",
				"symbol" : "💴",
				"group" : "objects",
				"keywords" : [ "banknote", "bill", "currency", "money", "note",
						"yen" ]
			},
			{
				"id" : ":dollar_banknote:",
				"symbol" : "💵",
				"group" : "objects",
				"keywords" : [ "banknote", "bill", "currency", "dollar",
						"money", "note" ]
			},
			{
				"id" : ":euro_banknote:",
				"symbol" : "💶",
				"group" : "objects",
				"keywords" : [ "banknote", "bill", "currency", "euro", "money",
						"note" ]
			},
			{
				"id" : ":pound_banknote:",
				"symbol" : "💷",
				"group" : "objects",
				"keywords" : [ "banknote", "bill", "currency", "money", "note",
						"pound" ]
			},
			{
				"id" : ":money_with_wings:",
				"symbol" : "💸",
				"group" : "objects",
				"keywords" : [ "banknote", "bill", "fly", "money",
						"money with wings", "wings" ]
			},
			{
				"id" : ":credit_card:",
				"symbol" : "💳",
				"group" : "objects",
				"keywords" : [ "card", "credit", "money" ]
			},
			{
				"id" : ":chart_increasing_with_yen:",
				"symbol" : "💹",
				"group" : "objects",
				"keywords" : [ "chart", "chart increasing with yen", "graph",
						"growth", "money", "yen" ]
			},
			{
				"id" : ":currency_exchange:",
				"symbol" : "💱",
				"group" : "objects",
				"keywords" : [ "bank", "currency", "exchange", "money" ]
			},
			{
				"id" : ":heavy_dollar_sign:",
				"symbol" : "💲",
				"group" : "objects",
				"keywords" : [ "currency", "dollar", "heavy dollar sign",
						"money" ]
			},
			{
				"id" : ":envelope:",
				"symbol" : "✉",
				"group" : "objects",
				"keywords" : [ "email", "envelope", "letter" ]
			},
			{
				"id" : ":e-mail:",
				"symbol" : "📧",
				"group" : "objects",
				"keywords" : [ "e-mail", "email", "letter", "mail" ]
			},
			{
				"id" : ":incoming_envelope:",
				"symbol" : "📨",
				"group" : "objects",
				"keywords" : [ "e-mail", "email", "envelope", "incoming",
						"letter", "receive" ]
			},
			{
				"id" : ":envelope_with_arrow:",
				"symbol" : "📩",
				"group" : "objects",
				"keywords" : [ "arrow", "e-mail", "email", "envelope",
						"envelope with arrow", "outgoing" ]
			},
			{
				"id" : ":outbox_tray:",
				"symbol" : "📤",
				"group" : "objects",
				"keywords" : [ "box", "letter", "mail", "outbox", "sent",
						"tray" ]
			},
			{
				"id" : ":inbox_tray:",
				"symbol" : "📥",
				"group" : "objects",
				"keywords" : [ "box", "inbox", "letter", "mail", "receive",
						"tray" ]
			},
			{
				"id" : ":package:",
				"symbol" : "📦",
				"group" : "objects",
				"keywords" : [ "box", "package", "parcel" ]
			},
			{
				"id" : ":closed_mailbox_with_raised_flag:",
				"symbol" : "📫",
				"group" : "objects",
				"keywords" : [ "closed", "closed mailbox with raised flag",
						"mail", "mailbox", "postbox" ]
			},
			{
				"id" : ":closed_mailbox_with_lowered_flag:",
				"symbol" : "📪",
				"group" : "objects",
				"keywords" : [ "closed", "closed mailbox with lowered flag",
						"lowered", "mail", "mailbox", "postbox" ]
			},
			{
				"id" : ":open_mailbox_with_raised_flag:",
				"symbol" : "📬",
				"group" : "objects",
				"keywords" : [ "mail", "mailbox", "open",
						"open mailbox with raised flag", "postbox" ]
			},
			{
				"id" : ":open_mailbox_with_lowered_flag:",
				"symbol" : "📭",
				"group" : "objects",
				"keywords" : [ "lowered", "mail", "mailbox", "open",
						"open mailbox with lowered flag", "postbox" ]
			},
			{
				"id" : ":postbox:",
				"symbol" : "📮",
				"group" : "objects",
				"keywords" : [ "mail", "mailbox", "postbox" ]
			},
			{
				"id" : ":ballot_box_with_ballot:",
				"symbol" : "🗳",
				"group" : "objects",
				"keywords" : [ "ballot", "ballot box with ballot", "box" ]
			},
			{
				"id" : ":pencil:",
				"symbol" : "✏",
				"group" : "objects",
				"keywords" : [ "pencil" ]
			},
			{
				"id" : ":black_nib:",
				"symbol" : "✒",
				"group" : "objects",
				"keywords" : [ "black nib", "nib", "pen" ]
			},
			{
				"id" : ":fountain_pen:",
				"symbol" : "🖋",
				"group" : "objects",
				"keywords" : [ "fountain", "pen" ]
			},
			{
				"id" : ":pen:",
				"symbol" : "🖊",
				"group" : "objects",
				"keywords" : [ "ballpoint", "pen" ]
			},
			{
				"id" : ":paintbrush:",
				"symbol" : "🖌",
				"group" : "objects",
				"keywords" : [ "paintbrush", "painting" ]
			},
			{
				"id" : ":crayon:",
				"symbol" : "🖍",
				"group" : "objects",
				"keywords" : [ "crayon" ]
			},
			{
				"id" : ":memo:",
				"symbol" : "📝",
				"group" : "objects",
				"keywords" : [ "memo", "pencil" ]
			},
			{
				"id" : ":briefcase:",
				"symbol" : "💼",
				"group" : "objects",
				"keywords" : [ "briefcase" ]
			},
			{
				"id" : ":file_folder:",
				"symbol" : "📁",
				"group" : "objects",
				"keywords" : [ "file", "folder" ]
			},
			{
				"id" : ":open_file_folder:",
				"symbol" : "📂",
				"group" : "objects",
				"keywords" : [ "file", "folder", "open" ]
			},
			{
				"id" : ":card_index_dividers:",
				"symbol" : "🗂",
				"group" : "objects",
				"keywords" : [ "card", "dividers", "index" ]
			},
			{
				"id" : ":calendar:",
				"symbol" : "📅",
				"group" : "objects",
				"keywords" : [ "calendar", "date" ]
			},
			{
				"id" : ":tear-off_calendar:",
				"symbol" : "📆",
				"group" : "objects",
				"keywords" : [ "calendar", "tear-off calendar" ]
			},
			{
				"id" : ":spiral_notepad:",
				"symbol" : "🗒",
				"group" : "objects",
				"keywords" : [ "note", "pad", "spiral", "spiral notepad" ]
			},
			{
				"id" : ":spiral_calendar:",
				"symbol" : "🗓",
				"group" : "objects",
				"keywords" : [ "calendar", "pad", "spiral" ]
			},
			{
				"id" : ":card_index:",
				"symbol" : "📇",
				"group" : "objects",
				"keywords" : [ "card", "index", "rolodex" ]
			},
			{
				"id" : ":chart_increasing:",
				"symbol" : "📈",
				"group" : "objects",
				"keywords" : [ "chart", "chart increasing", "graph", "growth",
						"trend", "upward" ]
			},
			{
				"id" : ":chart_decreasing:",
				"symbol" : "📉",
				"group" : "objects",
				"keywords" : [ "chart", "chart decreasing", "down", "graph",
						"trend" ]
			},
			{
				"id" : ":bar_chart:",
				"symbol" : "📊",
				"group" : "objects",
				"keywords" : [ "bar", "chart", "graph" ]
			},
			{
				"id" : ":clipboard:",
				"symbol" : "📋",
				"group" : "objects",
				"keywords" : [ "clipboard" ]
			},
			{
				"id" : ":pushpin:",
				"symbol" : "📌",
				"group" : "objects",
				"keywords" : [ "pin", "pushpin" ]
			},
			{
				"id" : ":round_pushpin:",
				"symbol" : "📍",
				"group" : "objects",
				"keywords" : [ "pin", "pushpin", "round pushpin" ]
			},
			{
				"id" : ":paperclip:",
				"symbol" : "📎",
				"group" : "objects",
				"keywords" : [ "paperclip" ]
			},
			{
				"id" : ":linked_paperclips:",
				"symbol" : "🖇",
				"group" : "objects",
				"keywords" : [ "link", "linked paperclips", "paperclip" ]
			},
			{
				"id" : ":straight_ruler:",
				"symbol" : "📏",
				"group" : "objects",
				"keywords" : [ "ruler", "straight edge", "straight ruler" ]
			},
			{
				"id" : ":triangular_ruler:",
				"symbol" : "📐",
				"group" : "objects",
				"keywords" : [ "ruler", "set", "triangle", "triangular ruler" ]
			},
			{
				"id" : ":scissors:",
				"symbol" : "✂",
				"group" : "objects",
				"keywords" : [ "cutting", "scissors", "tool" ]
			},
			{
				"id" : ":card_file_box:",
				"symbol" : "🗃",
				"group" : "objects",
				"keywords" : [ "box", "card", "file" ]
			},
			{
				"id" : ":file_cabinet:",
				"symbol" : "🗄",
				"group" : "objects",
				"keywords" : [ "cabinet", "file", "filing" ]
			},
			{
				"id" : ":wastebasket:",
				"symbol" : "🗑",
				"group" : "objects",
				"keywords" : [ "wastebasket" ]
			},
			{
				"id" : ":locked:",
				"symbol" : "🔒",
				"group" : "objects",
				"keywords" : [ "closed", "locked" ]
			},
			{
				"id" : ":unlocked:",
				"symbol" : "🔓",
				"group" : "objects",
				"keywords" : [ "lock", "open", "unlock", "unlocked" ]
			},
			{
				"id" : ":locked_with_pen:",
				"symbol" : "🔏",
				"group" : "objects",
				"keywords" : [ "ink", "lock", "locked with pen", "nib", "pen",
						"privacy" ]
			},
			{
				"id" : ":locked_with_key:",
				"symbol" : "🔐",
				"group" : "objects",
				"keywords" : [ "closed", "key", "lock", "locked with key",
						"secure" ]
			},
			{
				"id" : ":key:",
				"symbol" : "🔑",
				"group" : "objects",
				"keywords" : [ "key", "lock", "password" ]
			},
			{
				"id" : ":old_key:",
				"symbol" : "🗝",
				"group" : "objects",
				"keywords" : [ "clue", "key", "lock", "old" ]
			},
			{
				"id" : ":hammer:",
				"symbol" : "🔨",
				"group" : "objects",
				"keywords" : [ "hammer", "tool" ]
			},
			{
				"id" : ":pick:",
				"symbol" : "⛏",
				"group" : "objects",
				"keywords" : [ "mining", "pick", "tool" ]
			},
			{
				"id" : ":hammer_and_pick:",
				"symbol" : "⚒",
				"group" : "objects",
				"keywords" : [ "hammer", "hammer and pick", "pick", "tool" ]
			},
			{
				"id" : ":hammer_and_wrench:",
				"symbol" : "🛠",
				"group" : "objects",
				"keywords" : [ "hammer", "hammer and wrench", "spanner",
						"tool", "wrench" ]
			},
			{
				"id" : ":dagger:",
				"symbol" : "🗡",
				"group" : "objects",
				"keywords" : [ "dagger", "knife", "weapon" ]
			},
			{
				"id" : ":crossed_swords:",
				"symbol" : "⚔",
				"group" : "objects",
				"keywords" : [ "crossed", "swords", "weapon" ]
			},
			{
				"id" : ":pistol:",
				"symbol" : "🔫",
				"group" : "objects",
				"keywords" : [ "gun", "handgun", "pistol", "revolver", "tool",
						"weapon" ]
			},
			{
				"id" : ":bow_and_arrow:",
				"symbol" : "🏹",
				"group" : "objects",
				"keywords" : [ "archer", "arrow", "bow", "bow and arrow",
						"Sagittarius", "zodiac" ]
			},
			{
				"id" : ":shield:",
				"symbol" : "🛡",
				"group" : "objects",
				"keywords" : [ "shield", "weapon" ]
			},
			{
				"id" : ":wrench:",
				"symbol" : "🔧",
				"group" : "objects",
				"keywords" : [ "spanner", "tool", "wrench" ]
			},
			{
				"id" : ":nut_and_bolt:",
				"symbol" : "🔩",
				"group" : "objects",
				"keywords" : [ "bolt", "nut", "nut and bolt", "tool" ]
			},
			{
				"id" : ":gear:",
				"symbol" : "⚙",
				"group" : "objects",
				"keywords" : [ "cog", "cogwheel", "gear", "tool" ]
			},
			{
				"id" : ":clamp:",
				"symbol" : "🗜",
				"group" : "objects",
				"keywords" : [ "clamp", "compress", "tool", "vice" ]
			},
			{
				"id" : ":balance_scale:",
				"symbol" : "⚖",
				"group" : "objects",
				"keywords" : [ "balance", "justice", "Libra", "scale", "zodiac" ]
			},
			{
				"id" : ":link:",
				"symbol" : "🔗",
				"group" : "objects",
				"keywords" : [ "link" ]
			},
			{
				"id" : ":chains:",
				"symbol" : "⛓",
				"group" : "objects",
				"keywords" : [ "chain", "chains" ]
			},
			{
				"id" : ":alembic:",
				"symbol" : "⚗",
				"group" : "objects",
				"keywords" : [ "alembic", "chemistry", "tool" ]
			},
			{
				"id" : ":microscope:",
				"symbol" : "🔬",
				"group" : "objects",
				"keywords" : [ "microscope", "science", "tool" ]
			},
			{
				"id" : ":telescope:",
				"symbol" : "🔭",
				"group" : "objects",
				"keywords" : [ "science", "telescope", "tool" ]
			},
			{
				"id" : ":satellite_antenna:",
				"symbol" : "📡",
				"group" : "objects",
				"keywords" : [ "antenna", "dish", "satellite" ]
			},
			{
				"id" : ":syringe:",
				"symbol" : "💉",
				"group" : "objects",
				"keywords" : [ "medicine", "needle", "shot", "sick", "syringe" ]
			},
			{
				"id" : ":pill:",
				"symbol" : "💊",
				"group" : "objects",
				"keywords" : [ "doctor", "medicine", "pill", "sick" ]
			},
			{
				"id" : ":door:",
				"symbol" : "🚪",
				"group" : "objects",
				"keywords" : [ "door" ]
			},
			{
				"id" : ":bed:",
				"symbol" : "🛏",
				"group" : "objects",
				"keywords" : [ "bed", "hotel", "sleep" ]
			},
			{
				"id" : ":couch_and_lamp:",
				"symbol" : "🛋",
				"group" : "objects",
				"keywords" : [ "couch", "couch and lamp", "hotel", "lamp" ]
			},
			{
				"id" : ":toilet:",
				"symbol" : "🚽",
				"group" : "objects",
				"keywords" : [ "toilet" ]
			},
			{
				"id" : ":shower:",
				"symbol" : "🚿",
				"group" : "objects",
				"keywords" : [ "shower", "water" ]
			},
			{
				"id" : ":bathtub:",
				"symbol" : "🛁",
				"group" : "objects",
				"keywords" : [ "bath", "bathtub" ]
			},
			{
				"id" : ":shopping_cart:",
				"symbol" : "🛒",
				"group" : "objects",
				"keywords" : [ "cart", "shopping", "trolley" ]
			},
			{
				"id" : ":cigarette:",
				"symbol" : "🚬",
				"group" : "objects",
				"keywords" : [ "cigarette", "smoking" ]
			},
			{
				"id" : ":coffin:",
				"symbol" : "⚰",
				"group" : "objects",
				"keywords" : [ "coffin", "death" ]
			},
			{
				"id" : ":funeral_urn:",
				"symbol" : "⚱",
				"group" : "objects",
				"keywords" : [ "ashes", "death", "funeral", "urn" ]
			},
			{
				"id" : ":moai:",
				"symbol" : "🗿",
				"group" : "objects",
				"keywords" : [ "face", "moai", "moyai", "statue" ]
			},
			{
				"id" : ":atm_sign:",
				"symbol" : "🏧",
				"group" : "symbols",
				"keywords" : [ "atm", "ATM sign", "automated", "bank", "teller" ]
			},
			{
				"id" : ":litter_in_bin_sign:",
				"symbol" : "🚮",
				"group" : "symbols",
				"keywords" : [ "litter", "litter bin", "litter in bin sign" ]
			},
			{
				"id" : ":potable_water:",
				"symbol" : "🚰",
				"group" : "symbols",
				"keywords" : [ "drinking", "potable", "water" ]
			},
			{
				"id" : ":wheelchair_symbol:",
				"symbol" : "♿",
				"group" : "symbols",
				"keywords" : [ "access", "wheelchair symbol" ]
			},
			{
				"id" : ":men’s_room:",
				"symbol" : "🚹",
				"group" : "symbols",
				"keywords" : [ "lavatory", "man", "men’s room", "restroom",
						"wc" ]
			},
			{
				"id" : ":women’s_room:",
				"symbol" : "🚺",
				"group" : "symbols",
				"keywords" : [ "lavatory", "restroom", "wc", "woman",
						"women’s room" ]
			},
			{
				"id" : ":restroom:",
				"symbol" : "🚻",
				"group" : "symbols",
				"keywords" : [ "lavatory", "restroom", "WC" ]
			},
			{
				"id" : ":baby_symbol:",
				"symbol" : "🚼",
				"group" : "symbols",
				"keywords" : [ "baby", "baby symbol", "changing" ]
			},
			{
				"id" : ":water_closet:",
				"symbol" : "🚾",
				"group" : "symbols",
				"keywords" : [ "closet", "lavatory", "restroom", "water", "wc" ]
			},
			{
				"id" : ":passport_control:",
				"symbol" : "🛂",
				"group" : "symbols",
				"keywords" : [ "control", "passport" ]
			},
			{
				"id" : ":customs:",
				"symbol" : "🛃",
				"group" : "symbols",
				"keywords" : [ "customs" ]
			},
			{
				"id" : ":baggage_claim:",
				"symbol" : "🛄",
				"group" : "symbols",
				"keywords" : [ "baggage", "claim" ]
			},
			{
				"id" : ":left_luggage:",
				"symbol" : "🛅",
				"group" : "symbols",
				"keywords" : [ "baggage", "left luggage", "locker", "luggage" ]
			},
			{
				"id" : ":warning:",
				"symbol" : "⚠",
				"group" : "symbols",
				"keywords" : [ "warning" ]
			},
			{
				"id" : ":children_crossing:",
				"symbol" : "🚸",
				"group" : "symbols",
				"keywords" : [ "child", "children crossing", "crossing",
						"pedestrian", "traffic" ]
			},
			{
				"id" : ":no_entry:",
				"symbol" : "⛔",
				"group" : "symbols",
				"keywords" : [ "entry", "forbidden", "no", "not", "prohibited",
						"traffic" ]
			},
			{
				"id" : ":prohibited:",
				"symbol" : "🚫",
				"group" : "symbols",
				"keywords" : [ "entry", "forbidden", "no", "not", "prohibited" ]
			},
			{
				"id" : ":no_bicycles:",
				"symbol" : "🚳",
				"group" : "symbols",
				"keywords" : [ "bicycle", "bike", "forbidden", "no",
						"no bicycles", "prohibited" ]
			},
			{
				"id" : ":no_smoking:",
				"symbol" : "🚭",
				"group" : "symbols",
				"keywords" : [ "forbidden", "no", "not", "prohibited",
						"smoking" ]
			},
			{
				"id" : ":no_littering:",
				"symbol" : "🚯",
				"group" : "symbols",
				"keywords" : [ "forbidden", "litter", "no", "no littering",
						"not", "prohibited" ]
			},
			{
				"id" : ":non-potable_water:",
				"symbol" : "🚱",
				"group" : "symbols",
				"keywords" : [ "non-drinking", "non-potable", "water" ]
			},
			{
				"id" : ":no_pedestrians:",
				"symbol" : "🚷",
				"group" : "symbols",
				"keywords" : [ "forbidden", "no", "no pedestrians", "not",
						"pedestrian", "prohibited" ]
			},
			{
				"id" : ":no_mobile_phones:",
				"symbol" : "📵",
				"group" : "symbols",
				"keywords" : [ "cell", "forbidden", "mobile", "no",
						"no mobile phones", "phone" ]
			},
			{
				"id" : ":no_one_under_eighteen:",
				"symbol" : "🔞",
				"group" : "symbols",
				"keywords" : [ "18", "age restriction", "eighteen",
						"no one under eighteen", "prohibited", "underage" ]
			},
			{
				"id" : ":radioactive:",
				"symbol" : "☢",
				"group" : "symbols",
				"keywords" : [ "radioactive", "sign" ]
			},
			{
				"id" : ":biohazard:",
				"symbol" : "☣",
				"group" : "symbols",
				"keywords" : [ "biohazard", "sign" ]
			},
			{
				"id" : ":up_arrow:",
				"symbol" : "⬆",
				"group" : "symbols",
				"keywords" : [ "arrow", "cardinal", "direction", "north",
						"up arrow" ]
			},
			{
				"id" : ":up-right_arrow:",
				"symbol" : "↗",
				"group" : "symbols",
				"keywords" : [ "arrow", "direction", "intercardinal",
						"northeast", "up-right arrow" ]
			},
			{
				"id" : ":right_arrow:",
				"symbol" : "➡",
				"group" : "symbols",
				"keywords" : [ "arrow", "cardinal", "direction", "east",
						"right arrow" ]
			},
			{
				"id" : ":down-right_arrow:",
				"symbol" : "↘",
				"group" : "symbols",
				"keywords" : [ "arrow", "direction", "down-right arrow",
						"intercardinal", "southeast" ]
			},
			{
				"id" : ":down_arrow:",
				"symbol" : "⬇",
				"group" : "symbols",
				"keywords" : [ "arrow", "cardinal", "direction", "down",
						"south" ]
			},
			{
				"id" : ":down-left_arrow:",
				"symbol" : "↙",
				"group" : "symbols",
				"keywords" : [ "arrow", "direction", "down-left arrow",
						"intercardinal", "southwest" ]
			},
			{
				"id" : ":left_arrow:",
				"symbol" : "⬅",
				"group" : "symbols",
				"keywords" : [ "arrow", "cardinal", "direction", "left arrow",
						"west" ]
			},
			{
				"id" : ":up-left_arrow:",
				"symbol" : "↖",
				"group" : "symbols",
				"keywords" : [ "arrow", "direction", "intercardinal",
						"northwest", "up-left arrow" ]
			},
			{
				"id" : ":up-down_arrow:",
				"symbol" : "↕",
				"group" : "symbols",
				"keywords" : [ "arrow", "up-down arrow" ]
			},
			{
				"id" : ":left-right_arrow:",
				"symbol" : "↔",
				"group" : "symbols",
				"keywords" : [ "arrow", "left-right arrow" ]
			},
			{
				"id" : ":right_arrow_curving_left:",
				"symbol" : "↩",
				"group" : "symbols",
				"keywords" : [ "arrow", "right arrow curving left" ]
			},
			{
				"id" : ":left_arrow_curving_right:",
				"symbol" : "↪",
				"group" : "symbols",
				"keywords" : [ "arrow", "left arrow curving right" ]
			},
			{
				"id" : ":right_arrow_curving_up:",
				"symbol" : "⤴",
				"group" : "symbols",
				"keywords" : [ "arrow", "right arrow curving up" ]
			},
			{
				"id" : ":right_arrow_curving_down:",
				"symbol" : "⤵",
				"group" : "symbols",
				"keywords" : [ "arrow", "down", "right arrow curving down" ]
			},
			{
				"id" : ":clockwise_vertical_arrows:",
				"symbol" : "🔃",
				"group" : "symbols",
				"keywords" : [ "arrow", "clockwise",
						"clockwise vertical arrows", "reload" ]
			},
			{
				"id" : ":counterclockwise_arrows_button:",
				"symbol" : "🔄",
				"group" : "symbols",
				"keywords" : [ "anticlockwise", "arrow", "counterclockwise",
						"counterclockwise arrows button", "withershins" ]
			},
			{
				"id" : ":back_arrow:",
				"symbol" : "🔙",
				"group" : "symbols",
				"keywords" : [ "arrow", "back", "BACK arrow" ]
			},
			{
				"id" : ":end_arrow:",
				"symbol" : "🔚",
				"group" : "symbols",
				"keywords" : [ "arrow", "end", "END arrow" ]
			},
			{
				"id" : ":on!_arrow:",
				"symbol" : "🔛",
				"group" : "symbols",
				"keywords" : [ "arrow", "mark", "on", "ON! arrow" ]
			},
			{
				"id" : ":soon_arrow:",
				"symbol" : "🔜",
				"group" : "symbols",
				"keywords" : [ "arrow", "soon", "SOON arrow" ]
			},
			{
				"id" : ":top_arrow:",
				"symbol" : "🔝",
				"group" : "symbols",
				"keywords" : [ "arrow", "top", "TOP arrow", "up" ]
			},
			{
				"id" : ":place_of_worship:",
				"symbol" : "🛐",
				"group" : "symbols",
				"keywords" : [ "place of worship", "religion", "worship" ]
			},
			{
				"id" : ":atom_symbol:",
				"symbol" : "⚛",
				"group" : "symbols",
				"keywords" : [ "atheist", "atom", "atom symbol" ]
			},
			{
				"id" : ":om:",
				"symbol" : "🕉",
				"group" : "symbols",
				"keywords" : [ "Hindu", "om", "religion" ]
			},
			{
				"id" : ":star_of_david:",
				"symbol" : "✡",
				"group" : "symbols",
				"keywords" : [ "David", "Jew", "Jewish", "religion", "star",
						"star of David" ]
			},
			{
				"id" : ":wheel_of_dharma:",
				"symbol" : "☸",
				"group" : "symbols",
				"keywords" : [ "Buddhist", "dharma", "religion", "wheel",
						"wheel of dharma" ]
			},
			{
				"id" : ":yin_yang:",
				"symbol" : "☯",
				"group" : "symbols",
				"keywords" : [ "religion", "tao", "taoist", "yang", "yin" ]
			},
			{
				"id" : ":latin_cross:",
				"symbol" : "✝",
				"group" : "symbols",
				"keywords" : [ "Christian", "cross", "latin cross", "religion" ]
			},
			{
				"id" : ":orthodox_cross:",
				"symbol" : "☦",
				"group" : "symbols",
				"keywords" : [ "Christian", "cross", "orthodox cross",
						"religion" ]
			},
			{
				"id" : ":star_and_crescent:",
				"symbol" : "☪",
				"group" : "symbols",
				"keywords" : [ "islam", "Muslim", "religion",
						"star and crescent" ]
			},
			{
				"id" : ":peace_symbol:",
				"symbol" : "☮",
				"group" : "symbols",
				"keywords" : [ "peace", "peace symbol" ]
			},
			{
				"id" : ":menorah:",
				"symbol" : "🕎",
				"group" : "symbols",
				"keywords" : [ "candelabrum", "candlestick", "menorah",
						"religion" ]
			},
			{
				"id" : ":dotted_six-pointed_star:",
				"symbol" : "🔯",
				"group" : "symbols",
				"keywords" : [ "dotted six-pointed star", "fortune", "star" ]
			},
			{
				"id" : ":aries:",
				"symbol" : "♈",
				"group" : "symbols",
				"keywords" : [ "Aries", "ram", "zodiac" ]
			},
			{
				"id" : ":taurus:",
				"symbol" : "♉",
				"group" : "symbols",
				"keywords" : [ "bull", "ox", "Taurus", "zodiac" ]
			},
			{
				"id" : ":gemini:",
				"symbol" : "♊",
				"group" : "symbols",
				"keywords" : [ "Gemini", "twins", "zodiac" ]
			},
			{
				"id" : ":cancer:",
				"symbol" : "♋",
				"group" : "symbols",
				"keywords" : [ "Cancer", "crab", "zodiac" ]
			},
			{
				"id" : ":leo:",
				"symbol" : "♌",
				"group" : "symbols",
				"keywords" : [ "Leo", "lion", "zodiac" ]
			},
			{
				"id" : ":virgo:",
				"symbol" : "♍",
				"group" : "symbols",
				"keywords" : [ "Virgo", "zodiac" ]
			},
			{
				"id" : ":libra:",
				"symbol" : "♎",
				"group" : "symbols",
				"keywords" : [ "balance", "justice", "Libra", "scales",
						"zodiac" ]
			},
			{
				"id" : ":scorpio:",
				"symbol" : "♏",
				"group" : "symbols",
				"keywords" : [ "Scorpio", "scorpion", "scorpius", "zodiac" ]
			},
			{
				"id" : ":sagittarius:",
				"symbol" : "♐",
				"group" : "symbols",
				"keywords" : [ "archer", "Sagittarius", "zodiac" ]
			},
			{
				"id" : ":capricorn:",
				"symbol" : "♑",
				"group" : "symbols",
				"keywords" : [ "Capricorn", "goat", "zodiac" ]
			},
			{
				"id" : ":aquarius:",
				"symbol" : "♒",
				"group" : "symbols",
				"keywords" : [ "Aquarius", "bearer", "water", "zodiac" ]
			},
			{
				"id" : ":pisces:",
				"symbol" : "♓",
				"group" : "symbols",
				"keywords" : [ "fish", "Pisces", "zodiac" ]
			},
			{
				"id" : ":ophiuchus:",
				"symbol" : "⛎",
				"group" : "symbols",
				"keywords" : [ "bearer", "Ophiuchus", "serpent", "snake",
						"zodiac" ]
			},
			{
				"id" : ":shuffle_tracks_button:",
				"symbol" : "🔀",
				"group" : "symbols",
				"keywords" : [ "arrow", "crossed", "shuffle tracks button" ]
			},
			{
				"id" : ":repeat_button:",
				"symbol" : "🔁",
				"group" : "symbols",
				"keywords" : [ "arrow", "clockwise", "repeat", "repeat button" ]
			},
			{
				"id" : ":repeat_single_button:",
				"symbol" : "🔂",
				"group" : "symbols",
				"keywords" : [ "arrow", "clockwise", "once",
						"repeat single button" ]
			},
			{
				"id" : ":play_button:",
				"symbol" : "▶",
				"group" : "symbols",
				"keywords" : [ "arrow", "play", "play button", "right",
						"triangle" ]
			},
			{
				"id" : ":fast-forward_button:",
				"symbol" : "⏩",
				"group" : "symbols",
				"keywords" : [ "arrow", "double", "fast",
						"fast-forward button", "forward" ]
			},
			{
				"id" : ":next_track_button:",
				"symbol" : "⏭",
				"group" : "symbols",
				"keywords" : [ "arrow", "next scene", "next track",
						"next track button", "triangle" ]
			},
			{
				"id" : ":play_or_pause_button:",
				"symbol" : "⏯",
				"group" : "symbols",
				"keywords" : [ "arrow", "pause", "play",
						"play or pause button", "right", "triangle" ]
			},
			{
				"id" : ":reverse_button:",
				"symbol" : "◀",
				"group" : "symbols",
				"keywords" : [ "arrow", "left", "reverse", "reverse button",
						"triangle" ]
			},
			{
				"id" : ":fast_reverse_button:",
				"symbol" : "⏪",
				"group" : "symbols",
				"keywords" : [ "arrow", "double", "fast reverse button",
						"rewind" ]
			},
			{
				"id" : ":last_track_button:",
				"symbol" : "⏮",
				"group" : "symbols",
				"keywords" : [ "arrow", "last track button", "previous scene",
						"previous track", "triangle" ]
			},
			{
				"id" : ":upwards_button:",
				"symbol" : "🔼",
				"group" : "symbols",
				"keywords" : [ "arrow", "button", "red", "upwards button" ]
			},
			{
				"id" : ":fast_up_button:",
				"symbol" : "⏫",
				"group" : "symbols",
				"keywords" : [ "arrow", "double", "fast up button" ]
			},
			{
				"id" : ":downwards_button:",
				"symbol" : "🔽",
				"group" : "symbols",
				"keywords" : [ "arrow", "button", "down", "downwards button",
						"red" ]
			},
			{
				"id" : ":fast_down_button:",
				"symbol" : "⏬",
				"group" : "symbols",
				"keywords" : [ "arrow", "double", "down", "fast down button" ]
			},
			{
				"id" : ":pause_button:",
				"symbol" : "⏸",
				"group" : "symbols",
				"keywords" : [ "bar", "double", "pause", "pause button",
						"vertical" ]
			},
			{
				"id" : ":stop_button:",
				"symbol" : "⏹",
				"group" : "symbols",
				"keywords" : [ "square", "stop", "stop button" ]
			},
			{
				"id" : ":record_button:",
				"symbol" : "⏺",
				"group" : "symbols",
				"keywords" : [ "circle", "record", "record button" ]
			},
			{
				"id" : ":eject_button:",
				"symbol" : "⏏",
				"group" : "symbols",
				"keywords" : [ "eject", "eject button" ]
			},
			{
				"id" : ":cinema:",
				"symbol" : "🎦",
				"group" : "symbols",
				"keywords" : [ "camera", "cinema", "film", "movie" ]
			},
			{
				"id" : ":dim_button:",
				"symbol" : "🔅",
				"group" : "symbols",
				"keywords" : [ "brightness", "dim", "dim button", "low" ]
			},
			{
				"id" : ":bright_button:",
				"symbol" : "🔆",
				"group" : "symbols",
				"keywords" : [ "bright", "bright button", "brightness" ]
			},
			{
				"id" : ":antenna_bars:",
				"symbol" : "📶",
				"group" : "symbols",
				"keywords" : [ "antenna", "antenna bars", "bar", "cell",
						"mobile", "phone" ]
			},
			{
				"id" : ":vibration_mode:",
				"symbol" : "📳",
				"group" : "symbols",
				"keywords" : [ "cell", "mobile", "mode", "phone", "telephone",
						"vibration" ]
			},
			{
				"id" : ":mobile_phone_off:",
				"symbol" : "📴",
				"group" : "symbols",
				"keywords" : [ "cell", "mobile", "off", "phone", "telephone" ]
			},
			{
				"id" : ":female_sign:",
				"symbol" : "♀",
				"group" : "symbols",
				"keywords" : [ "female sign", "woman" ]
			},
			{
				"id" : ":male_sign:",
				"symbol" : "♂",
				"group" : "symbols",
				"keywords" : [ "male sign", "man" ]
			},
			{
				"id" : ":medical_symbol:",
				"symbol" : "⚕",
				"group" : "symbols",
				"keywords" : [ "aesculapius", "medical symbol", "medicine",
						"staff" ]
			},
			{
				"id" : ":recycling_symbol:",
				"symbol" : "♻",
				"group" : "symbols",
				"keywords" : [ "recycle", "recycling symbol" ]
			},
			{
				"id" : ":fleur-de-lis:",
				"symbol" : "⚜",
				"group" : "symbols",
				"keywords" : [ "fleur-de-lis" ]
			},
			{
				"id" : ":trident_emblem:",
				"symbol" : "🔱",
				"group" : "symbols",
				"keywords" : [ "anchor", "emblem", "ship", "tool", "trident" ]
			},
			{
				"id" : ":name_badge:",
				"symbol" : "📛",
				"group" : "symbols",
				"keywords" : [ "badge", "name" ]
			},
			{
				"id" : ":japanese_symbol_for_beginner:",
				"symbol" : "🔰",
				"group" : "symbols",
				"keywords" : [ "beginner", "chevron", "Japanese",
						"Japanese symbol for beginner", "leaf" ]
			},
			{
				"id" : ":heavy_large_circle:",
				"symbol" : "⭕",
				"group" : "symbols",
				"keywords" : [ "circle", "heavy large circle", "o" ]
			},
			{
				"id" : ":white_heavy_check_mark:",
				"symbol" : "✅",
				"group" : "symbols",
				"keywords" : [ "check", "mark", "white heavy check mark" ]
			},
			{
				"id" : ":ballot_box_with_check:",
				"symbol" : "☑",
				"group" : "symbols",
				"keywords" : [ "ballot", "ballot box with check", "box",
						"check" ]
			},
			{
				"id" : ":heavy_check_mark:",
				"symbol" : "✔",
				"group" : "symbols",
				"keywords" : [ "check", "heavy check mark", "mark" ]
			},
			{
				"id" : ":heavy_multiplication_x:",
				"symbol" : "✖",
				"group" : "symbols",
				"keywords" : [ "cancel", "heavy multiplication x",
						"multiplication", "multiply", "x" ]
			},
			{
				"id" : ":cross_mark:",
				"symbol" : "❌",
				"group" : "symbols",
				"keywords" : [ "cancel", "cross mark", "mark",
						"multiplication", "multiply", "x" ]
			},
			{
				"id" : ":cross_mark_button:",
				"symbol" : "❎",
				"group" : "symbols",
				"keywords" : [ "cross mark button", "mark", "square" ]
			},
			{
				"id" : ":heavy_plus_sign:",
				"symbol" : "➕",
				"group" : "symbols",
				"keywords" : [ "heavy plus sign", "math", "plus" ]
			},
			{
				"id" : ":heavy_minus_sign:",
				"symbol" : "➖",
				"group" : "symbols",
				"keywords" : [ "heavy minus sign", "math", "minus" ]
			},
			{
				"id" : ":heavy_division_sign:",
				"symbol" : "➗",
				"group" : "symbols",
				"keywords" : [ "division", "heavy division sign", "math" ]
			},
			{
				"id" : ":curly_loop:",
				"symbol" : "➰",
				"group" : "symbols",
				"keywords" : [ "curl", "curly loop", "loop" ]
			},
			{
				"id" : ":double_curly_loop:",
				"symbol" : "➿",
				"group" : "symbols",
				"keywords" : [ "curl", "double", "double curly loop", "loop" ]
			},
			{
				"id" : ":part_alternation_mark:",
				"symbol" : "〽",
				"group" : "symbols",
				"keywords" : [ "mark", "part", "part alternation mark" ]
			},
			{
				"id" : ":eight-spoked_asterisk:",
				"symbol" : "✳",
				"group" : "symbols",
				"keywords" : [ "asterisk", "eight-spoked asterisk" ]
			},
			{
				"id" : ":eight-pointed_star:",
				"symbol" : "✴",
				"group" : "symbols",
				"keywords" : [ "eight-pointed star", "star" ]
			},
			{
				"id" : ":sparkle:",
				"symbol" : "❇",
				"group" : "symbols",
				"keywords" : [ "sparkle" ]
			},
			{
				"id" : ":double_exclamation_mark:",
				"symbol" : "‼",
				"group" : "symbols",
				"keywords" : [ "bangbang", "double exclamation mark",
						"exclamation", "mark", "punctuation" ]
			},
			{
				"id" : ":exclamation_question_mark:",
				"symbol" : "⁉",
				"group" : "symbols",
				"keywords" : [ "exclamation", "interrobang", "mark",
						"punctuation", "question" ]
			},
			{
				"id" : ":question_mark:",
				"symbol" : "❓",
				"group" : "symbols",
				"keywords" : [ "mark", "punctuation", "question" ]
			},
			{
				"id" : ":white_question_mark:",
				"symbol" : "❔",
				"group" : "symbols",
				"keywords" : [ "mark", "outlined", "punctuation", "question",
						"white question mark" ]
			},
			{
				"id" : ":white_exclamation_mark:",
				"symbol" : "❕",
				"group" : "symbols",
				"keywords" : [ "exclamation", "mark", "outlined",
						"punctuation", "white exclamation mark" ]
			},
			{
				"id" : ":exclamation_mark:",
				"symbol" : "❗",
				"group" : "symbols",
				"keywords" : [ "exclamation", "mark", "punctuation" ]
			},
			{
				"id" : ":wavy_dash:",
				"symbol" : "〰",
				"group" : "symbols",
				"keywords" : [ "dash", "punctuation", "wavy" ]
			},
			{
				"id" : ":copyright:",
				"symbol" : "©",
				"group" : "symbols",
				"keywords" : [ "copyright" ]
			},
			{
				"id" : ":registered:",
				"symbol" : "®",
				"group" : "symbols",
				"keywords" : [ "registered" ]
			},
			{
				"id" : ":trade_mark:",
				"symbol" : "™",
				"group" : "symbols",
				"keywords" : [ "mark", "tm", "trade mark", "trademark" ]
			},
			{
				"id" : ":keycap_#:",
				"symbol" : "#️⃣",
				"group" : "symbols",
				"keywords" : [ "keycap" ]
			},
			{
				"id" : ":keycap_*:",
				"symbol" : "*️⃣",
				"group" : "symbols",
				"keywords" : [ "keycap" ]
			},
			{
				"id" : ":keycap_0:",
				"symbol" : "0️⃣",
				"group" : "symbols",
				"keywords" : [ "keycap" ]
			},
			{
				"id" : ":keycap_1:",
				"symbol" : "1️⃣",
				"group" : "symbols",
				"keywords" : [ "keycap" ]
			},
			{
				"id" : ":keycap_2:",
				"symbol" : "2️⃣",
				"group" : "symbols",
				"keywords" : [ "keycap" ]
			},
			{
				"id" : ":keycap_3:",
				"symbol" : "3️⃣",
				"group" : "symbols",
				"keywords" : [ "keycap" ]
			},
			{
				"id" : ":keycap_4:",
				"symbol" : "4️⃣",
				"group" : "symbols",
				"keywords" : [ "keycap" ]
			},
			{
				"id" : ":keycap_5:",
				"symbol" : "5️⃣",
				"group" : "symbols",
				"keywords" : [ "keycap" ]
			},
			{
				"id" : ":keycap_6:",
				"symbol" : "6️⃣",
				"group" : "symbols",
				"keywords" : [ "keycap" ]
			},
			{
				"id" : ":keycap_7:",
				"symbol" : "7️⃣",
				"group" : "symbols",
				"keywords" : [ "keycap" ]
			},
			{
				"id" : ":keycap_8:",
				"symbol" : "8️⃣",
				"group" : "symbols",
				"keywords" : [ "keycap" ]
			},
			{
				"id" : ":keycap_9:",
				"symbol" : "9️⃣",
				"group" : "symbols",
				"keywords" : [ "keycap" ]
			},
			{
				"id" : ":keycap_10:",
				"symbol" : "🔟",
				"group" : "symbols",
				"keywords" : [ "keycap" ]
			},
			{
				"id" : ":hundred_points:",
				"symbol" : "💯",
				"group" : "symbols",
				"keywords" : [ "100", "full", "hundred", "hundred points",
						"score" ]
			},
			{
				"id" : ":input_latin_uppercase:",
				"symbol" : "🔠",
				"group" : "symbols",
				"keywords" : [ "ABCD", "input", "latin", "letters", "uppercase" ]
			},
			{
				"id" : ":input_latin_lowercase:",
				"symbol" : "🔡",
				"group" : "symbols",
				"keywords" : [ "abcd", "input", "latin", "letters", "lowercase" ]
			},
			{
				"id" : ":input_numbers:",
				"symbol" : "🔢",
				"group" : "symbols",
				"keywords" : [ "1234", "input", "numbers" ]
			},
			{
				"id" : ":input_symbols:",
				"symbol" : "🔣",
				"group" : "symbols",
				"keywords" : [ "〒♪&%", "input", "input symbols" ]
			},
			{
				"id" : ":input_latin_letters:",
				"symbol" : "🔤",
				"group" : "symbols",
				"keywords" : [ "abc", "alphabet", "input", "latin", "letters" ]
			},
			{
				"id" : ":a_button_(blood_type):",
				"symbol" : "🅰",
				"group" : "symbols",
				"keywords" : [ "a", "A button (blood type)", "blood type" ]
			},
			{
				"id" : ":ab_button_(blood_type):",
				"symbol" : "🆎",
				"group" : "symbols",
				"keywords" : [ "ab", "AB button (blood type)", "blood type" ]
			},
			{
				"id" : ":b_button_(blood_type):",
				"symbol" : "🅱",
				"group" : "symbols",
				"keywords" : [ "b", "B button (blood type)", "blood type" ]
			},
			{
				"id" : ":cl_button:",
				"symbol" : "🆑",
				"group" : "symbols",
				"keywords" : [ "cl", "CL button" ]
			},
			{
				"id" : ":cool_button:",
				"symbol" : "🆒",
				"group" : "symbols",
				"keywords" : [ "cool", "COOL button" ]
			},
			{
				"id" : ":free_button:",
				"symbol" : "🆓",
				"group" : "symbols",
				"keywords" : [ "free", "FREE button" ]
			},
			{
				"id" : ":information:",
				"symbol" : "ℹ",
				"group" : "symbols",
				"keywords" : [ "i", "information" ]
			},
			{
				"id" : ":id_button:",
				"symbol" : "🆔",
				"group" : "symbols",
				"keywords" : [ "id", "ID button", "identity" ]
			},
			{
				"id" : ":circled_m:",
				"symbol" : "Ⓜ",
				"group" : "symbols",
				"keywords" : [ "circle", "circled M", "m" ]
			},
			{
				"id" : ":new_button:",
				"symbol" : "🆕",
				"group" : "symbols",
				"keywords" : [ "new", "NEW button" ]
			},
			{
				"id" : ":ng_button:",
				"symbol" : "🆖",
				"group" : "symbols",
				"keywords" : [ "ng", "NG button" ]
			},
			{
				"id" : ":o_button_(blood_type):",
				"symbol" : "🅾",
				"group" : "symbols",
				"keywords" : [ "blood type", "o", "O button (blood type)" ]
			},
			{
				"id" : ":ok_button:",
				"symbol" : "🆗",
				"group" : "symbols",
				"keywords" : [ "OK", "OK button" ]
			},
			{
				"id" : ":p_button:",
				"symbol" : "🅿",
				"group" : "symbols",
				"keywords" : [ "P button", "parking" ]
			},
			{
				"id" : ":sos_button:",
				"symbol" : "🆘",
				"group" : "symbols",
				"keywords" : [ "help", "sos", "SOS button" ]
			},
			{
				"id" : ":up!_button:",
				"symbol" : "🆙",
				"group" : "symbols",
				"keywords" : [ "mark", "up", "UP! button" ]
			},
			{
				"id" : ":vs_button:",
				"symbol" : "🆚",
				"group" : "symbols",
				"keywords" : [ "versus", "vs", "VS button" ]
			},
			{
				"id" : ":japanese_“here”_button:",
				"symbol" : "🈁",
				"group" : "symbols",
				"keywords" : [ "“here”", "Japanese", "Japanese “here” button",
						"katakana", "ココ" ]
			},
			{
				"id" : ":japanese_“service_charge”_button:",
				"symbol" : "🈂",
				"group" : "symbols",
				"keywords" : [ "“service charge”", "Japanese",
						"Japanese “service charge” button", "katakana", "サ" ]
			},
			{
				"id" : ":japanese_“monthly_amount”_button:",
				"symbol" : "🈷",
				"group" : "symbols",
				"keywords" : [ "“monthly amount”", "ideograph", "Japanese",
						"Japanese “monthly amount” button", "月" ]
			},
			{
				"id" : ":japanese_“not_free_of_charge”_button:",
				"symbol" : "🈶",
				"group" : "symbols",
				"keywords" : [ "“not free of charge”", "ideograph", "Japanese",
						"Japanese “not free of charge” button", "有" ]
			},
			{
				"id" : ":japanese_“reserved”_button:",
				"symbol" : "🈯",
				"group" : "symbols",
				"keywords" : [ "“reserved”", "ideograph", "Japanese",
						"Japanese “reserved” button", "指" ]
			},
			{
				"id" : ":japanese_“bargain”_button:",
				"symbol" : "🉐",
				"group" : "symbols",
				"keywords" : [ "“bargain”", "ideograph", "Japanese",
						"Japanese “bargain” button", "得" ]
			},
			{
				"id" : ":japanese_“discount”_button:",
				"symbol" : "🈹",
				"group" : "symbols",
				"keywords" : [ "“discount”", "ideograph", "Japanese",
						"Japanese “discount” button", "割" ]
			},
			{
				"id" : ":japanese_“free_of_charge”_button:",
				"symbol" : "🈚",
				"group" : "symbols",
				"keywords" : [ "“free of charge”", "ideograph", "Japanese",
						"Japanese “free of charge” button", "無" ]
			},
			{
				"id" : ":japanese_“prohibited”_button:",
				"symbol" : "🈲",
				"group" : "symbols",
				"keywords" : [ "“prohibited”", "ideograph", "Japanese",
						"Japanese “prohibited” button", "禁" ]
			},
			{
				"id" : ":japanese_“acceptable”_button:",
				"symbol" : "🉑",
				"group" : "symbols",
				"keywords" : [ "“acceptable”", "ideograph", "Japanese",
						"Japanese “acceptable” button", "可" ]
			},
			{
				"id" : ":japanese_“application”_button:",
				"symbol" : "🈸",
				"group" : "symbols",
				"keywords" : [ "“application”", "ideograph", "Japanese",
						"Japanese “application” button", "申" ]
			},
			{
				"id" : ":japanese_“passing_grade”_button:",
				"symbol" : "🈴",
				"group" : "symbols",
				"keywords" : [ "“passing grade”", "ideograph", "Japanese",
						"Japanese “passing grade” button", "合" ]
			},
			{
				"id" : ":japanese_“vacancy”_button:",
				"symbol" : "🈳",
				"group" : "symbols",
				"keywords" : [ "“vacancy”", "ideograph", "Japanese",
						"Japanese “vacancy” button", "空" ]
			},
			{
				"id" : ":japanese_“congratulations”_button:",
				"symbol" : "㊗",
				"group" : "symbols",
				"keywords" : [ "“congratulations”", "ideograph", "Japanese",
						"Japanese “congratulations” button", "祝" ]
			},
			{
				"id" : ":japanese_“secret”_button:",
				"symbol" : "㊙",
				"group" : "symbols",
				"keywords" : [ "“secret”", "ideograph", "Japanese",
						"Japanese “secret” button", "秘" ]
			},
			{
				"id" : ":japanese_“open_for_business”_button:",
				"symbol" : "🈺",
				"group" : "symbols",
				"keywords" : [ "“open for business”", "ideograph", "Japanese",
						"Japanese “open for business” button", "営" ]
			},
			{
				"id" : ":japanese_“no_vacancy”_button:",
				"symbol" : "🈵",
				"group" : "symbols",
				"keywords" : [ "“no vacancy”", "ideograph", "Japanese",
						"Japanese “no vacancy” button", "満" ]
			},
			{
				"id" : ":red_circle:",
				"symbol" : "🔴",
				"group" : "symbols",
				"keywords" : [ "circle", "geometric", "red" ]
			},
			{
				"id" : ":blue_circle:",
				"symbol" : "🔵",
				"group" : "symbols",
				"keywords" : [ "blue", "circle", "geometric" ]
			},
			{
				"id" : ":white_circle:",
				"symbol" : "⚪",
				"group" : "symbols",
				"keywords" : [ "circle", "geometric", "white circle" ]
			},
			{
				"id" : ":black_circle:",
				"symbol" : "⚫",
				"group" : "symbols",
				"keywords" : [ "black circle", "circle", "geometric" ]
			},
			{
				"id" : ":white_large_square:",
				"symbol" : "⬜",
				"group" : "symbols",
				"keywords" : [ "geometric", "square", "white large square" ]
			},
			{
				"id" : ":black_large_square:",
				"symbol" : "⬛",
				"group" : "symbols",
				"keywords" : [ "black large square", "geometric", "square" ]
			},
			{
				"id" : ":black_medium_square:",
				"symbol" : "◼",
				"group" : "symbols",
				"keywords" : [ "black medium square", "geometric", "square" ]
			},
			{
				"id" : ":white_medium_square:",
				"symbol" : "◻",
				"group" : "symbols",
				"keywords" : [ "geometric", "square", "white medium square" ]
			},
			{
				"id" : ":white_medium-small_square:",
				"symbol" : "◽",
				"group" : "symbols",
				"keywords" : [ "geometric", "square",
						"white medium-small square" ]
			},
			{
				"id" : ":black_medium-small_square:",
				"symbol" : "◾",
				"group" : "symbols",
				"keywords" : [ "black medium-small square", "geometric",
						"square" ]
			},
			{
				"id" : ":white_small_square:",
				"symbol" : "▫",
				"group" : "symbols",
				"keywords" : [ "geometric", "square", "white small square" ]
			},
			{
				"id" : ":black_small_square:",
				"symbol" : "▪",
				"group" : "symbols",
				"keywords" : [ "black small square", "geometric", "square" ]
			},
			{
				"id" : ":large_orange_diamond:",
				"symbol" : "🔶",
				"group" : "symbols",
				"keywords" : [ "diamond", "geometric", "large orange diamond",
						"orange" ]
			},
			{
				"id" : ":large_blue_diamond:",
				"symbol" : "🔷",
				"group" : "symbols",
				"keywords" : [ "blue", "diamond", "geometric",
						"large blue diamond" ]
			},
			{
				"id" : ":small_orange_diamond:",
				"symbol" : "🔸",
				"group" : "symbols",
				"keywords" : [ "diamond", "geometric", "orange",
						"small orange diamond" ]
			},
			{
				"id" : ":small_blue_diamond:",
				"symbol" : "🔹",
				"group" : "symbols",
				"keywords" : [ "blue", "diamond", "geometric",
						"small blue diamond" ]
			},
			{
				"id" : ":red_triangle_pointed_up:",
				"symbol" : "🔺",
				"group" : "symbols",
				"keywords" : [ "geometric", "red", "red triangle pointed up" ]
			},
			{
				"id" : ":red_triangle_pointed_down:",
				"symbol" : "🔻",
				"group" : "symbols",
				"keywords" : [ "down", "geometric", "red",
						"red triangle pointed down" ]
			},
			{
				"id" : ":diamond_with_a_dot:",
				"symbol" : "💠",
				"group" : "symbols",
				"keywords" : [ "comic", "diamond", "diamond with a dot",
						"geometric", "inside" ]
			},
			{
				"id" : ":radio_button:",
				"symbol" : "🔘",
				"group" : "symbols",
				"keywords" : [ "button", "geometric", "radio" ]
			},
			{
				"id" : ":black_square_button:",
				"symbol" : "🔲",
				"group" : "symbols",
				"keywords" : [ "black square button", "button", "geometric",
						"square" ]
			},
			{
				"id" : ":white_square_button:",
				"symbol" : "🔳",
				"group" : "symbols",
				"keywords" : [ "button", "geometric", "outlined", "square",
						"white square button" ]
			},
			{
				"id" : ":chequered_flag:",
				"symbol" : "🏁",
				"group" : "flags",
				"keywords" : [ "checkered", "chequered", "chequered flag",
						"racing" ]
			},
			{
				"id" : ":triangular_flag:",
				"symbol" : "🚩",
				"group" : "flags",
				"keywords" : [ "post", "triangular flag" ]
			},
			{
				"id" : ":crossed_flags:",
				"symbol" : "🎌",
				"group" : "flags",
				"keywords" : [ "celebration", "cross", "crossed",
						"crossed flags", "Japanese" ]
			}, {
				"id" : ":black_flag:",
				"symbol" : "🏴",
				"group" : "flags",
				"keywords" : [ "black flag", "waving" ]
			}, {
				"id" : ":white_flag:",
				"symbol" : "🏳",
				"group" : "flags",
				"keywords" : [ "waving", "white flag" ]
			}, {
				"id" : ":rainbow_flag:",
				"symbol" : "🏳️‍🌈",
				"group" : "flags",
				"keywords" : [ "rainbow", "rainbow flag" ]
			}, {
				"id" : ":flag_ascension_island:",
				"symbol" : "🇦🇨",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_andorra:",
				"symbol" : "🇦🇩",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_united_arab_emirates:",
				"symbol" : "🇦🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_afghanistan:",
				"symbol" : "🇦🇫",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_antigua_barbuda:",
				"symbol" : "🇦🇬",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_anguilla:",
				"symbol" : "🇦🇮",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_albania:",
				"symbol" : "🇦🇱",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_armenia:",
				"symbol" : "🇦🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_angola:",
				"symbol" : "🇦🇴",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_antarctica:",
				"symbol" : "🇦🇶",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_argentina:",
				"symbol" : "🇦🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_american_samoa:",
				"symbol" : "🇦🇸",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_austria:",
				"symbol" : "🇦🇹",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_australia:",
				"symbol" : "🇦🇺",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_aruba:",
				"symbol" : "🇦🇼",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_åland_islands:",
				"symbol" : "🇦🇽",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_azerbaijan:",
				"symbol" : "🇦🇿",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_bosnia_&_herzegovina:",
				"symbol" : "🇧🇦",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_barbados:",
				"symbol" : "🇧🇧",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_bangladesh:",
				"symbol" : "🇧🇩",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_belgium:",
				"symbol" : "🇧🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_burkina_faso:",
				"symbol" : "🇧🇫",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_bulgaria:",
				"symbol" : "🇧🇬",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_bahrain:",
				"symbol" : "🇧🇭",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_burundi:",
				"symbol" : "🇧🇮",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_benin:",
				"symbol" : "🇧🇯",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_st._barthélemy:",
				"symbol" : "🇧🇱",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_bermuda:",
				"symbol" : "🇧🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_brunei:",
				"symbol" : "🇧🇳",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_bolivia:",
				"symbol" : "🇧🇴",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_caribbean_netherlands:",
				"symbol" : "🇧🇶",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_brazil:",
				"symbol" : "🇧🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_bahamas:",
				"symbol" : "🇧🇸",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_bhutan:",
				"symbol" : "🇧🇹",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_bouvet_island:",
				"symbol" : "🇧🇻",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_botswana:",
				"symbol" : "🇧🇼",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_belarus:",
				"symbol" : "🇧🇾",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_belize:",
				"symbol" : "🇧🇿",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_canada:",
				"symbol" : "🇨🇦",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_cocos_(keeling)_islands:",
				"symbol" : "🇨🇨",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_congo_-_kinshasa:",
				"symbol" : "🇨🇩",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_central_african_republic:",
				"symbol" : "🇨🇫",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_congo_-_brazzaville:",
				"symbol" : "🇨🇬",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_switzerland:",
				"symbol" : "🇨🇭",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_côte_d’ivoire:",
				"symbol" : "🇨🇮",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_cook_islands:",
				"symbol" : "🇨🇰",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_chile:",
				"symbol" : "🇨🇱",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_cameroon:",
				"symbol" : "🇨🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_china:",
				"symbol" : "🇨🇳",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_colombia:",
				"symbol" : "🇨🇴",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_clipperton_island:",
				"symbol" : "🇨🇵",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_costa_rica:",
				"symbol" : "🇨🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_cuba:",
				"symbol" : "🇨🇺",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_cape_verde:",
				"symbol" : "🇨🇻",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_curaçao:",
				"symbol" : "🇨🇼",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_christmas_island:",
				"symbol" : "🇨🇽",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_cyprus:",
				"symbol" : "🇨🇾",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_czechia:",
				"symbol" : "🇨🇿",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_germany:",
				"symbol" : "🇩🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_diego_garcia:",
				"symbol" : "🇩🇬",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_djibouti:",
				"symbol" : "🇩🇯",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_denmark:",
				"symbol" : "🇩🇰",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_dominica:",
				"symbol" : "🇩🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_dominican_republic:",
				"symbol" : "🇩🇴",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_algeria:",
				"symbol" : "🇩🇿",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_ceuta_&_melilla:",
				"symbol" : "🇪🇦",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_ecuador:",
				"symbol" : "🇪🇨",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_estonia:",
				"symbol" : "🇪🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_egypt:",
				"symbol" : "🇪🇬",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_western_sahara:",
				"symbol" : "🇪🇭",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_eritrea:",
				"symbol" : "🇪🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_spain:",
				"symbol" : "🇪🇸",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_ethiopia:",
				"symbol" : "🇪🇹",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_european_union:",
				"symbol" : "🇪🇺",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_finland:",
				"symbol" : "🇫🇮",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_fiji:",
				"symbol" : "🇫🇯",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_falkland_islands:",
				"symbol" : "🇫🇰",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_micronesia:",
				"symbol" : "🇫🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_faroe_islands:",
				"symbol" : "🇫🇴",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_france:",
				"symbol" : "🇫🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_gabon:",
				"symbol" : "🇬🇦",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_united_kingdom:",
				"symbol" : "🇬🇧",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_grenada:",
				"symbol" : "🇬🇩",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_georgia:",
				"symbol" : "🇬🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_french_guiana:",
				"symbol" : "🇬🇫",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_guernsey:",
				"symbol" : "🇬🇬",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_ghana:",
				"symbol" : "🇬🇭",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_gibraltar:",
				"symbol" : "🇬🇮",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_greenland:",
				"symbol" : "🇬🇱",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_gambia:",
				"symbol" : "🇬🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_guinea:",
				"symbol" : "🇬🇳",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_guadeloupe:",
				"symbol" : "🇬🇵",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_equatorial_guinea:",
				"symbol" : "🇬🇶",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_greece:",
				"symbol" : "🇬🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_south_georgia_&_south_sandwich_islands:",
				"symbol" : "🇬🇸",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_guatemala:",
				"symbol" : "🇬🇹",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_guam:",
				"symbol" : "🇬🇺",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_guinea-bissau:",
				"symbol" : "🇬🇼",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_guyana:",
				"symbol" : "🇬🇾",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_hong_kong_sar_china:",
				"symbol" : "🇭🇰",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_heard_&_mcdonald_islands:",
				"symbol" : "🇭🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_honduras:",
				"symbol" : "🇭🇳",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_croatia:",
				"symbol" : "🇭🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_haiti:",
				"symbol" : "🇭🇹",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_hungary:",
				"symbol" : "🇭🇺",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_canary_islands:",
				"symbol" : "🇮🇨",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_indonesia:",
				"symbol" : "🇮🇩",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_ireland:",
				"symbol" : "🇮🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_israel:",
				"symbol" : "🇮🇱",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_isle_of_man:",
				"symbol" : "🇮🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_india:",
				"symbol" : "🇮🇳",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_british_indian_ocean_territory:",
				"symbol" : "🇮🇴",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_iraq:",
				"symbol" : "🇮🇶",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_iran:",
				"symbol" : "🇮🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_iceland:",
				"symbol" : "🇮🇸",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_italy:",
				"symbol" : "🇮🇹",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_jersey:",
				"symbol" : "🇯🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_jamaica:",
				"symbol" : "🇯🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_jordan:",
				"symbol" : "🇯🇴",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_japan:",
				"symbol" : "🇯🇵",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_kenya:",
				"symbol" : "🇰🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_kyrgyzstan:",
				"symbol" : "🇰🇬",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_cambodia:",
				"symbol" : "🇰🇭",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_kiribati:",
				"symbol" : "🇰🇮",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_comoros:",
				"symbol" : "🇰🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_st._kitts_&_nevis:",
				"symbol" : "🇰🇳",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_north_korea:",
				"symbol" : "🇰🇵",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_south_korea:",
				"symbol" : "🇰🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_kuwait:",
				"symbol" : "🇰🇼",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_cayman_islands:",
				"symbol" : "🇰🇾",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_kazakhstan:",
				"symbol" : "🇰🇿",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_laos:",
				"symbol" : "🇱🇦",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_lebanon:",
				"symbol" : "🇱🇧",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_st._lucia:",
				"symbol" : "🇱🇨",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_liechtenstein:",
				"symbol" : "🇱🇮",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_sri_lanka:",
				"symbol" : "🇱🇰",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_liberia:",
				"symbol" : "🇱🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_lesotho:",
				"symbol" : "🇱🇸",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_lithuania:",
				"symbol" : "🇱🇹",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_luxembourg:",
				"symbol" : "🇱🇺",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_latvia:",
				"symbol" : "🇱🇻",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_libya:",
				"symbol" : "🇱🇾",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_morocco:",
				"symbol" : "🇲🇦",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_monaco:",
				"symbol" : "🇲🇨",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_moldova:",
				"symbol" : "🇲🇩",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_montenegro:",
				"symbol" : "🇲🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_st._martin:",
				"symbol" : "🇲🇫",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_madagascar:",
				"symbol" : "🇲🇬",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_marshall_islands:",
				"symbol" : "🇲🇭",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_macedonia:",
				"symbol" : "🇲🇰",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_mali:",
				"symbol" : "🇲🇱",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_myanmar_(burma):",
				"symbol" : "🇲🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_mongolia:",
				"symbol" : "🇲🇳",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_macau_sar_china:",
				"symbol" : "🇲🇴",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_northern_mariana_islands:",
				"symbol" : "🇲🇵",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_martinique:",
				"symbol" : "🇲🇶",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_mauritania:",
				"symbol" : "🇲🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_montserrat:",
				"symbol" : "🇲🇸",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_malta:",
				"symbol" : "🇲🇹",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_mauritius:",
				"symbol" : "🇲🇺",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_maldives:",
				"symbol" : "🇲🇻",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_malawi:",
				"symbol" : "🇲🇼",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_mexico:",
				"symbol" : "🇲🇽",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_malaysia:",
				"symbol" : "🇲🇾",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_mozambique:",
				"symbol" : "🇲🇿",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_namibia:",
				"symbol" : "🇳🇦",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_new_caledonia:",
				"symbol" : "🇳🇨",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_niger:",
				"symbol" : "🇳🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_norfolk_island:",
				"symbol" : "🇳🇫",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_nigeria:",
				"symbol" : "🇳🇬",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_nicaragua:",
				"symbol" : "🇳🇮",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_netherlands:",
				"symbol" : "🇳🇱",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_norway:",
				"symbol" : "🇳🇴",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_nepal:",
				"symbol" : "🇳🇵",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_nauru:",
				"symbol" : "🇳🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_niue:",
				"symbol" : "🇳🇺",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_new_zealand:",
				"symbol" : "🇳🇿",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_oman:",
				"symbol" : "🇴🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_panama:",
				"symbol" : "🇵🇦",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_peru:",
				"symbol" : "🇵🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_french_polynesia:",
				"symbol" : "🇵🇫",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_papua_new_guinea:",
				"symbol" : "🇵🇬",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_philippines:",
				"symbol" : "🇵🇭",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_pakistan:",
				"symbol" : "🇵🇰",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_poland:",
				"symbol" : "🇵🇱",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_st._pierre_&_miquelon:",
				"symbol" : "🇵🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_pitcairn_islands:",
				"symbol" : "🇵🇳",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_puerto_rico:",
				"symbol" : "🇵🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_palestinian_territories:",
				"symbol" : "🇵🇸",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_portugal:",
				"symbol" : "🇵🇹",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_palau:",
				"symbol" : "🇵🇼",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_paraguay:",
				"symbol" : "🇵🇾",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_qatar:",
				"symbol" : "🇶🇦",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_réunion:",
				"symbol" : "🇷🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_romania:",
				"symbol" : "🇷🇴",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_serbia:",
				"symbol" : "🇷🇸",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_russia:",
				"symbol" : "🇷🇺",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_rwanda:",
				"symbol" : "🇷🇼",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_saudi_arabia:",
				"symbol" : "🇸🇦",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_solomon_islands:",
				"symbol" : "🇸🇧",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_seychelles:",
				"symbol" : "🇸🇨",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_sudan:",
				"symbol" : "🇸🇩",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_sweden:",
				"symbol" : "🇸🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_singapore:",
				"symbol" : "🇸🇬",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_st._helena:",
				"symbol" : "🇸🇭",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_slovenia:",
				"symbol" : "🇸🇮",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_svalbard_&_jan_mayen:",
				"symbol" : "🇸🇯",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_slovakia:",
				"symbol" : "🇸🇰",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_sierra_leone:",
				"symbol" : "🇸🇱",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_san_marino:",
				"symbol" : "🇸🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_senegal:",
				"symbol" : "🇸🇳",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_somalia:",
				"symbol" : "🇸🇴",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_suriname:",
				"symbol" : "🇸🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_south_sudan:",
				"symbol" : "🇸🇸",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_são_tomé_&_príncipe:",
				"symbol" : "🇸🇹",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_el_salvador:",
				"symbol" : "🇸🇻",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_sint_maarten:",
				"symbol" : "🇸🇽",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_syria:",
				"symbol" : "🇸🇾",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_swaziland:",
				"symbol" : "🇸🇿",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_tristan_da_cunha:",
				"symbol" : "🇹🇦",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_turks_&_caicos_islands:",
				"symbol" : "🇹🇨",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_chad:",
				"symbol" : "🇹🇩",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_french_southern_territories:",
				"symbol" : "🇹🇫",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_togo:",
				"symbol" : "🇹🇬",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_thailand:",
				"symbol" : "🇹🇭",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_tajikistan:",
				"symbol" : "🇹🇯",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_tokelau:",
				"symbol" : "🇹🇰",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_timor-leste:",
				"symbol" : "🇹🇱",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_turkmenistan:",
				"symbol" : "🇹🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_tunisia:",
				"symbol" : "🇹🇳",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_tonga:",
				"symbol" : "🇹🇴",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_turkey:",
				"symbol" : "🇹🇷",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_trinidad_&_tobago:",
				"symbol" : "🇹🇹",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_tuvalu:",
				"symbol" : "🇹🇻",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_taiwan:",
				"symbol" : "🇹🇼",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_tanzania:",
				"symbol" : "🇹🇿",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_ukraine:",
				"symbol" : "🇺🇦",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_uganda:",
				"symbol" : "🇺🇬",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_u.s._outlying_islands:",
				"symbol" : "🇺🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_united_nations:",
				"symbol" : "🇺🇳",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_united_states:",
				"symbol" : "🇺🇸",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_uruguay:",
				"symbol" : "🇺🇾",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_uzbekistan:",
				"symbol" : "🇺🇿",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_vatican_city:",
				"symbol" : "🇻🇦",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_st._vincent_&_grenadines:",
				"symbol" : "🇻🇨",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_venezuela:",
				"symbol" : "🇻🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_british_virgin_islands:",
				"symbol" : "🇻🇬",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_u.s._virgin_islands:",
				"symbol" : "🇻🇮",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_vietnam:",
				"symbol" : "🇻🇳",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_vanuatu:",
				"symbol" : "🇻🇺",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_wallis_&_futuna:",
				"symbol" : "🇼🇫",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_samoa:",
				"symbol" : "🇼🇸",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_kosovo:",
				"symbol" : "🇽🇰",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_yemen:",
				"symbol" : "🇾🇪",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_mayotte:",
				"symbol" : "🇾🇹",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_south_africa:",
				"symbol" : "🇿🇦",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_zambia:",
				"symbol" : "🇿🇲",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_zimbabwe:",
				"symbol" : "🇿🇼",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_england:",
				"symbol" : "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_scotland:",
				"symbol" : "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
				"group" : "flags",
				"keywords" : [ "flag" ]
			}, {
				"id" : ":flag_wales:",
				"symbol" : "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
				"group" : "flags",
				"keywords" : [ "flag" ]
			} ]
});