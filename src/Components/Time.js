

function Time () {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let time = `${hours}: ${minutes}: ${seconds}`

    return time
}

export default Time
