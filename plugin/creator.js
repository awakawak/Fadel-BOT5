let handler = function (m) {
  // this.sendContact(m.chat, '62895711784010', 'Creator Tanvan', m)
  this.sendContact(m.chat, '62895711784010', 'My Owner BOT', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
