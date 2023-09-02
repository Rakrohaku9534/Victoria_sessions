import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Nyari Apa?`
  let res = await fetch(`https://api.clayzaaubert.my.id/api/anime/nhentai-search?q=${text}&apikey=${global.clayza}`)
  let json = await res.json()
  json = json.data.map((v) => `*Author:* ${v.author}\n*Index:* ${v.index}\n*Title:* ${v.title}\n*Link:* ${v.link}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.reply(m.chat, json, m)
}
handler.help = ['nhentaisearch']
handler.tags = ['anime']
handler.command = /^(nhentaisearch)$/i
handler.limit = true

export default handler