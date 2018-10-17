$(function () {
    /*倒计时*/
    const time = '2018/10/22,8:20:00'
    // showCountDown(time, 'countDown')

    function showCountDown(v, d) {
        let div = document.getElementById(d)
        div = $(div)
        let end = new Date(v)

        let s1 = setInterval(function () {
            let now = new Date()
            let time = (end.getTime() - now.getTime()) / 1000
            if (time < 0) {
                clearInterval(s1)
                return alert('活动已经结束，请等待下次活动！')
            }

            let day1 = parseInt(time / (60 * 60 * 24))
            let hour = parseInt(time / (60 * 60) % 24)
            let minure = parseInt(time / 60 % 60)
            let second = parseInt(time % 60)

            day1 = addO(day1)
            hour = addO(hour)
            minure = addO(minure)
            second = addO(second)

            div.find('span.day1').text(day1).end()
                .find('span.hour').text(hour).end()
                .find('span.minure').text(minure).end()
                .find('span.second').text(second)
        }, 50)

        function addO(v) {
            return v < 10 ? '0' + v : v
        }
    }
})