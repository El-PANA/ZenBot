let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
let os = require('os')
  await conn.send3Button(m.chat, `
*┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰*
*┃🪐H O L A   U S U A R I O🪐*
*┃*
*┃⚡ESΓΔDO DEL BOΓ⚡*
*┃*
*┃* *[🔋] Bᴀᴛᴇʀɪᴀ:* *${conn.battery ? `${conn.battery.value}%* *${conn.battery.live ? '🔌 Cᴀʀɢᴀɴᴅᴏ...*' : '⚡ Dᴇsᴄᴏɴᴇᴄᴛᴀᴅᴏ*'}` : 'Dᴇsᴄᴏɴᴏᴄɪᴅᴏ*'}
*┃➥❖ [Bᴏᴛ Aᴄᴛɪᴠᴏ✅]*
*┃➥❖ [Bᴏᴛ Usᴏ Pᴜʙʟɪᴄᴏ✅]*
*┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰*
`.trim(), '*©Cᴏᴍᴘᴀɴʏ Zᴇɴ Bᴏᴛ*', '🀄ＭＥＮＵ🀄', `${usedPrefix}menu`, '⚜  ＭＥＮＵ ＳＩＭＰＬＥ ⚜', `${usedPrefix}menusimple`, '🔆 ＭＥＮＵ ＡＵＤＩＯＳ🔆', `${usedPrefix}menuaudios`)
}
handler.command = /^(estado|status|estate|state|stado|stats)$/i

handler.exp = 0

module.exports = handler