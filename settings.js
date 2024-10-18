const fs = require('fs');
const chalk = require('chalk');

/*
	* Create By Naze
	* Follow https://github.com/nazedev
	* Whatsapp : wa.me/6282113821188
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ['6285751464398']
global.packname = '𝘉𝘖𝘛 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 𝗕𝗬'
global.author = '𝙞𝙩𝙯𝙣𝙪𝙨𝙖'
global.botname = '𝑛𝑢𝑠𝑎-𝑏𝑜𝑡'
global.listv = ['👉🏻','>','✔️','◕','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'
global.pairing_code = true

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://telegra.ph/file/fe4843a1261fc414542c4.jpg',
	thumbnail: fs.readFileSync('./src/media/naze.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://youtube.com/c/Nazedev',
	gh: 'https://www.facebook.com/itz.nusa?mibextid=ZbWKwL',
	gc: 'https://chat.whatsapp.com/J7G9OViSojiLlLjmhGbUln',
	ch: '120363250409960161@newsletter',
}

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	owner: 'ｆｉｔｕｒ ｉｎｉ Ｋｈｕｓｕｓ Ｏｗｎｅｒ ｂｏｔ!',
	admin: 'Ｆｉｔｕｒ ｉｎｉ Ｋｈｕｓｕｓ Ａｄｍｉｎ!',
	botAdmin: 'Ｂｏｔ Ｂｕｋａｎ Ａｄｍｉｎ!',
	group: ' Ｇｕｎａｋａｎ Ｄｉ Ｇｒｏｕｐ!',
	private: 'Ｇｕｎａｋａｎ Ｄｉ Ｐｒｉｖａｔ Ｃｈａｔ!',
	prem: 'Ｋｈｕｓｕｓ Ｕｓｅｒ Ｐｒｅｍｉｕｍ!',
	wait: 'ｔｕｎｇｇｕ ｙａ',
	error: 'ｍａａｆ ｔｅｒｊａｄｉ ｋｅｓａｌａｈａｎ!:( ',
	done: 'ｄｏｎｅ✔️'
}

global.APIs = {
	zaynn: 'https://api.zaynn.my.id/api',
}
global.APIKeys = {
	'https://api.zaynn.my.id/api': 'Najedev',
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
