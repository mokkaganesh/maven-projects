from telegram import Updater
updater=Updater(token='token')
dispatcher=updater.dispatcher

def start(bot,update):
    bot.sendMessage(chat_id=update.message.chat_id,text="I'm a bot, please talk to me!")