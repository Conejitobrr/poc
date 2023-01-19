let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (chat.audios && m.text.match(/(Compartan|compartam)/gi)) {
let vn = './media/Compartan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(Tia|tia|Tía|tía)/gi)) {
let vn = './media/Tia.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(añañin|Añañin)/gi)) {
let vn = './media/Añañin.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(Goku|goku)/gi)) {
let vn = './media/Goku.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(Saoo|saoo)/gi)) {
let vn = './media/Saoo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(tu no mete|tú no mete|Tu no mete|Tú no mete)/gi)) {
let vn = './media/Tu no mete.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(brr|Brr)/gi)) {
let vn = './media/Brr.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
 
if (chat.audios && m.text.match(/(Autoestima|autoestima)/gi)) {    
let vn = './media/Autoestima.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(Épico|Epico|epico|épico)/gi)) {
let vn = './media/Épico.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(Me doxean|me doxean)/gi)) {
let vn = './media/Me doxean.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(Jejeje|jejeje)/gi)) {
let vn = './media/Jejeje.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (chat.audios && m.text.match(/(ricolas|Ricolas)/gi)) {
let vn = './media/Ricolas.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(ohh|Ohh)/gi)) {
let vn = './media/Ohh.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(no es jueves|No es jueves)/gi)) {
let vn = './media/No es jueves.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(no digas|No digas)/gi)) {
let vn = './media/No digas.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(mis ojos|Mis ojos)/gi)) {
let vn = './media/Mis ojos.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(miercoles|miércoles|Miercoles|Miércoles)/gi)) {
let vn = './media/Miercoles.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(mff|Mff)/gi)) {
let vn = './media/Mff.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(me voy|Me voy)/gi)) {
let vn = './media/Me voy.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(mamut|Mamut)/gi)) {
let vn = './media/Mamut.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(martes|Martes)/gi)) {
let vn = './media/Martes.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(llamaba charly|Llamaba charly)/gi)) {
let vn = './media/Llamaba charly.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(linda|Linda)/gi)) {
let vn = './media/Linda.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(dime|Dime|dimelo|Dimelo|dímelo|Dímelo)/gi)) {
let vn = './media/Dime.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(coger|Coger)/gi)) {
let vn = './media/Coger.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
 
if (chat.audios && m.text.match(/(asco|Asco)/gi)) {
let vn = './media/Asco.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(yair|Yair)/gi)) {
let vn = './media/Anco.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(Ya basta|ya basta)/gi)) {
let vn = './media/Ya basta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

if (chat.audios && m.text.match(/(Telepatía|telepatía|telepatia|Telepatia)/gi)) {
let vn = './media/Telepatia.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(something|Something)/gi)) {
let vn = './media/Something.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(nose|Nose|no se|no sé|No sé|No se|No Se|No Sé)/gi)) {
let vn = './media/Nose.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(Pipipi|pipipi|PIPIPI)/gi)) {
let vn = './media/Pipipi.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(tite|Tite)/gi)) {
let vn = './media/Tite.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
if (chat.audios && m.text.match(/(bendicion|Bendicion|bendición|Bendición)/gi)) {
let vn = './media/Bendicion.mp3'
this.sendPresenceUpdate('recording', m.chat)
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
 
return !0 }
export default handler
