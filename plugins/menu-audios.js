const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*ミ💖 𝙷𝙾𝙻𝙰 _${name}_ 💖彡*

*<𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒/>*
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)*

° ඬ⃟🔊 _Quien es tu sempai botsito 7w7_
° ඬ⃟🔊 _Te diagnostico con gay_
° ඬ⃟🔊 _A nadie le importa_
° ඬ⃟🔊 _Fiesta del admin_
° ඬ⃟🔊 _Fiesta del administrador_ 
° ඬ⃟🔊 _Vivan los novios_
° ඬ⃟🔊 _Feliz cumpleaños_
° ඬ⃟🔊 _Noche de paz_
° ඬ⃟🔊 _Buenos dias_
° ඬ⃟🔊 _Buenos tardes_
° ඬ⃟🔊 _Buenos noches_
° ඬ⃟🔊 _Audio hentai_
° ඬ⃟🔊 _Chica lgante_
° ඬ⃟🔊 _Feliz navidad_
° ඬ⃟🔊 _Vete a la vrg_
° ඬ⃟🔊 _Pasa pack Bot_
° ඬ⃟🔊 _Atencion grupo_
° ඬ⃟🔊 _Marica quien_
° ඬ⃟🔊 _Murio el grupo_
° ඬ⃟🔊 _Oh me vengo_
° ඬ⃟🔊 _tio que rico_
° ඬ⃟🔊 _Viernes_
° ඬ⃟🔊 _Baneado_
° ඬ⃟🔊 _Sexo_
° ඬ⃟🔊 _Hola_
° ඬ⃟🔊 _Un pato_
° ඬ⃟🔊 _Nyanpasu_
° ඬ⃟🔊 _Te amo_
° ඬ⃟🔊 _Yamete_
° ඬ⃟🔊 _Bañate_
° ඬ⃟🔊 _Es puto_
° ඬ⃟🔊 _La biblia_
° ඬ⃟🔊 _Onichan_
° ඬ⃟🔊 _Mierda de Bot_
° ඬ⃟🔊 _Siuuu_
° ඬ⃟🔊 _Rawr_
° ඬ⃟🔊 _UwU_
° ඬ⃟🔊 _:c_
° ඬ⃟🔊 _a_

  *𝕺𝖙𝖗𝖔𝖘*

° ඬ⃟🔊 _manco_
° ඬ⃟🔊 _Asco_
° ඬ⃟🔊 _Brr_
° ඬ⃟🔊 _Coger_
° ඬ⃟🔊 _Dime_
° ඬ⃟🔊 _Dolor_
° ඬ⃟🔊 _Goku_
° ඬ⃟🔊 _Jejeje_
° ඬ⃟🔊 _Linda_
° ඬ⃟🔊 _Llamaba charly_
° ඬ⃟🔊 _Mamut_
° ඬ⃟🔊 _Martes_
° ඬ⃟🔊 _Me doxean_
° ඬ⃟🔊 _Épico_
° ඬ⃟🔊 _Me voy_
° ඬ⃟🔊 _Miercoles_
° ඬ⃟🔊 _Mff_
° ඬ⃟🔊 _Mis ojos_
° ඬ⃟🔊 _No digas_
° ඬ⃟🔊 _No es jueves_
° ඬ⃟🔊 _Ohh_
° ඬ⃟🔊 _Ricolas_
° ඬ⃟🔊 _Saoo_
° ඬ⃟🔊 _Telepatia_
° ඬ⃟🔊 _Tu no mete_
° ඬ⃟🔊 _Ya basta_
° ඬ⃟🔊 _Épico_

`.trim()
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
export default  handler
