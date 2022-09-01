import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Nose.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendFile(m.chat, vn, 'Nose.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}
handler.customPrefix = /nose|Nose|no se|no sé|No sé|No se|No Se|No Sé/
handler.command = (nose|Nose|no se|no sé|No sé|No se|No Se|No Sé|NOSE?$)/
export default handler
