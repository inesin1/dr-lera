export default {
    token: '6589290910:AAGx6-TZbHBzSmcm888mVZzYXXslV2ISmqo',
    chatId: '5750968020',
    sendMessage(text) {
        try {
            fetch(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${text}`)
                .then(res => {
                    console.log("Ответ: ", res)
                })
        } catch (e) {
            console.log(`Ошибка: ${e}`)
        }
    }
}