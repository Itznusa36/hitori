const fs = require('fs');
const chalk = require('chalk');

/*
	* Create By Naze
	* Follow https://github.com/nazedev
	* Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ['6282192834347','6288224258693'] //['6285174340858','6281356484612','6282113821188','573504775430']
global.packname = 'bot wa nusa'
global.author = 'itznusa'
global.botname = 'itznusa'
global.listprefix = ['+','!','.']
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
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
	gh: 'https://www.tiktok.com/@itz.nusa?_t=ZS-8tR4glLhBPr&_r=1',
	gc: 'https://chat.whatsapp.com/In1PE2MTQB23O70zvUUfyb',
	ch: '120363250409960161@newsletter',
}

global.limit = {
	free: 20,
	premium: 999,
	vip: 9999
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key0: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: 'Fitur Khusus Owner!',
	admin: 'Fitur Khusus Admin!',
	botAdmin: 'Bot bukan lah Admin!',
	group: 'gunain Di Group!',
	private: 'Gunain Di Privat Chat!',
	limit: 'Limit lu dah Habis!',
	prem: 'Khusus penguna Premium!',
	wait: 'memuat',
	error: 'terjadi kesalahan!',
	done: 'selesai'
}

global.APIs = {
	hitori: 'https://my.hitori.pw/api',
}
global.APIKeys = {
	'https://my.hitori.pw/api': 'htrkey-awokawok',
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
