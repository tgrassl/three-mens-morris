export const copyToClipboard = (str: string) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject("The Clipboard API is not available.");
};

export const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const emojis: string[] = [
  "😄",
  "😃",
  "😀",
  "😊",
  "☺",
  "😉",
  "😍",
  "😘",
  "😚",
  "😗",
  "😙",
  "😜",
  "😝",
  "😛",
  "😳",
  "😁",
  "😔",
  "😌",
  "😒",
  "😞",
  "😣",
  "😢",
  "😂",
  "😭",
  "😪",
  "😥",
  "😰",
  "😅",
  "😓",
  "😩",
  "😫",
  "😨",
  "😱",
  "😠",
  "😡",
  "😤",
  "😖",
  "😆",
  "😋",
  "😷",
  "😎",
  "😴",
  "😵",
  "😲",
  "😟",
  "😦",
  "😧",
  "😈",
  "👿",
  "😮",
  "😬",
  "😐",
  "😕",
  "😯",
  "😶",
  "😇",
  "😏",
  "😑",
  "👲",
  "👳",
  "👮",
  "👷",
  "💂",
  "👶",
  "👦",
  "👧",
  "👨",
  "👩",
  "👴",
  "👵",
  "👱",
  "👼",
  "👸",
  "😺",
  "😸",
  "😻",
  "😽",
  "😼",
  "🙀",
  "😿",
  "😹",
  "😾",
  "👹",
  "👺",
  "🙈",
  "🙉",
  "🙊",
  "💀",
  "👽",
  "💩",
  "🔥",
  "✨",
  "🌟",
  "💫",
  "💥",
  "💢",
  "💦",
  "💧",
  "💤",
  "💨",
  "👂",
  "👀",
  "👃",
  "👅",
  "👄",
  "👍",
  "👎",
  "👌",
  "👊",
  "✊",
  "✌",
  "👋",
  "✋",
  "👐",
  "👆",
  "👇",
  "👉",
  "👈",
  "🙌",
  "🙏",
  "☝",
  "👏",
  "💪",
  "🚶",
  "🏃",
  "💃",
  "👫",
  "👪",
  "👬",
  "👭",
  "💏",
  "💑",
  "👯",
  "🙆",
  "🙅",
  "💁",
  "🙋",
  "💆",
  "💇",
  "💅",
  "👰",
  "🙎",
  "🙍",
  "🙇",
  "🎩",
  "👑",
  "👒",
  "👟",
  "👞",
  "👡",
  "👠",
  "👢",
  "👕",
  "👔",
  "👚",
  "👗",
  "🎽",
  "👖",
  "👘",
  "👙",
  "💼",
  "👜",
  "👝",
  "👛",
  "👓",
  "🎀",
  "🌂",
  "💄",
  "💛",
  "💙",
  "💜",
  "💚",
  "❤",
  "💔",
  "💗",
  "💓",
  "💕",
  "💖",
  "💞",
  "💘",
  "💌",
  "💋",
  "💍",
  "💎",
  "👤",
  "👥",
  "💬",
  "👣",
  "💭",
  "🐶",
  "🐺",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🐸",
  "🐯",
  "🐨",
  "🐻",
  "🐷",
  "🐽",
  "🐮",
  "🐗",
  "🐵",
  "🐒",
  "🐴",
  "🐑",
  "🐘",
  "🐼",
  "🐧",
  "🐦",
  "🐤",
  "🐥",
  "🐣",
  "🐔",
  "🐍",
  "🐢",
  "🐛",
  "🐝",
  "🐜",
  "🐞",
  "🐌",
  "🐙",
  "🐚",
  "🐠",
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🐄",
  "🐏",
  "🐀",
  "🐃",
  "🐅",
  "🐇",
  "🐉",
  "🐎",
  "🐐",
  "🐓",
  "🐕",
  "🐖",
  "🐁",
  "🐂",
  "🐲",
  "🐡",
  "🐊",
  "🐫",
  "🐪",
  "🐆",
  "🐈",
  "🐩",
  "🐾",
  "💐",
  "🌸",
  "🌷",
  "🍀",
  "🌹",
  "🌻",
  "🌺",
  "🍁",
  "🍃",
  "🍂",
  "🌿",
  "🌾",
  "🍄",
  "🌵",
  "🌴",
  "🌲",
  "🌳",
  "🌰",
  "🌱",
  "🌼",
  "🌐",
  "🌞",
  "🌝",
  "🌚",
  "🌑",
  "🌒",
  "🌓",
  "🌔",
  "🌕",
  "🌖",
  "🌗",
  "🌘",
  "🌜",
  "🌛",
  "🌙",
  "🌍",
  "🌎",
  "🌏",
  "🌋",
  "🌌",
  "🌠",
  "⭐",
  "☀",
  "⛅",
  "☁",
  "⚡",
  "☔",
  "❄",
  "⛄",
  "🌀",
  "🌁",
  "🌈",
  "🌊",
  "🎍",
  "💝",
  "🎎",
  "🎒",
  "🎓",
  "🎏",
  "🎆",
  "🎇",
  "🎐",
  "🎑",
  "🎃",
  "👻",
  "🎅",
  "🎄",
  "🎁",
  "🎋",
  "🎉",
  "🎊",
  "🎈",
  "🎌",
  "🔮",
  "🎥",
  "📷",
  "📹",
  "📼",
  "💿",
  "📀",
  "💽",
  "💾",
  "💻",
  "📱",
  "☎",
  "📞",
  "📟",
  "📠",
  "📡",
  "📺",
  "📻",
  "⏳",
  "⌛",
  "⏰",
  "⌚",
  "🔒",
  "🔑",
  "🔎",
  "💡",
  "🔦",
  "🔆",
  "🔅",
  "🔌",
  "🔋",
  "🔍",
  "🛁",
  "🛀",
  "🚿",
  "🚽",
  "🔧",
  "🔩",
  "🔨",
  "🚪",
  "🚬",
  "💣",
  "🔫",
  "🔪",
  "💊",
  "💉",
  "💰",
  "💴",
  "💵",
  "💷",
  "💶",
  "💳",
  "💸",
  "📲",
  "📧",
  "📯",
  "📫",
  "📪",
  "📬",
  "📭",
  "📮",
  "📦",
  "📝",
  "📄",
  "📃",
  "📑",
  "📊",
  "📈",
  "📉",
  "📜",
  "📋",
  "📅",
  "📆",
  "📇",
  "📁",
  "📂",
  "✂",
  "📌",
  "📎",
  "✒",
  "✏",
  "📏",
  "📐",
  "📕",
  "📗",
  "📘",
  "📙",
  "📓",
  "📔",
  "📒",
  "📚",
  "📖",
  "🔖",
  "📛",
  "🔬",
  "🔭",
  "📰",
  "🎨",
  "🎬",
  "🎤",
  "🎧",
  "🎼",
  "🎵",
  "🎶",
  "🎹",
  "🎻",
  "🎺",
  "🎷",
  "🎸",
  "👾",
  "🎮",
  "🃏",
  "🎴",
  "🀄",
  "🎲",
  "🎯",
  "🏈",
  "🏀",
  "⚽",
  "⚾",
  "🎾",
  "🎱",
  "🏉",
  "🎳",
  "⛳",
  "🚵",
  "🚴",
  "🏁",
  "🏇",
  "🏆",
  "🎿",
  "🏂",
  "🏊",
  "🏄",
  "🎣",
  "☕",
  "🍵",
  "🍶",
  "🍼",
  "🍺",
  "🍻",
  "🍸",
  "🍹",
  "🍷",
  "🍴",
  "🍕",
  "🍔",
  "🍟",
  "🍗",
  "🍖",
  "🍝",
  "🍛",
  "🍤",
  "🍱",
  "🍣",
  "🍥",
  "🍙",
  "🍘",
  "🍚",
  "🍜",
  "🍲",
  "🍢",
  "🍡",
  "🍳",
  "🍞",
  "🍩",
  "🍮",
  "🍦",
  "🍨",
  "🍧",
  "🎂",
  "🍰",
  "🍪",
  "🍫",
  "🍬",
  "🍭",
  "🍯",
  "🍎",
  "🍏",
  "🍊",
  "🍋",
  "🍒",
  "🍇",
  "🍉",
  "🍓",
  "🍑",
  "🍈",
  "🍌",
  "🍐",
  "🍍",
  "🍠",
  "🍆",
  "🍅",
  "🌽",
  "🏠",
  "🏡",
  "🏫",
  "🏢",
  "🏣",
  "🏥",
  "🏦",
  "🏪",
  "🏩",
  "🏨",
  "💒",
  "⛪",
  "🏬",
  "🏤",
  "🌇",
  "🌆",
  "🏯",
  "🏰",
  "⛺",
  "🏭",
  "🗼",
  "🗾",
  "🗻",
  "🌄",
  "🌅",
  "🌃",
  "🗽",
  "🌉",
  "🎠",
  "🎡",
  "⛲",
  "🎢",
  "🚢",
  "⛵",
  "🚤",
  "🚣",
  "⚓",
  "🚀",
  "✈",
  "💺",
  "🚁",
  "🚂",
  "🚊",
  "🚉",
  "🚞",
  "🚆",
  "🚄",
  "🚅",
  "🚈",
  "🚇",
  "🚝",
  "🚋",
  "🚃",
  "🚎",
  "🚌",
  "🚍",
  "🚙",
  "🚘",
  "🚗",
  "🚕",
  "🚖",
  "🚛",
  "🚚",
  "🚨",
  "🚓",
  "🚔",
  "🚒",
  "🚑",
  "🚐",
  "🚲",
  "🚡",
  "🚟",
  "🚠",
  "🚜",
  "💈",
  "🚏",
  "🎫",
  "🚦",
  "🚥",
  "🚧",
  "🔰",
  "🏮",
  "🎰",
  "♨",
  "🗿",
  "🎪",
  "🎭",
  "📍",
  "🚩",
  "✳",
  "❇",
  "✴",
  "💟",
  "💠",
  "♠",
  "♥",
  "♣",
  "♦",
  "💮",
  "💯",
];

export const getRandomEmoji = (): string =>
  emojis[Math.floor(Math.random() * emojis.length)];
