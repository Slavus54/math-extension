let operations = ['+', '-']
let percent = 20

let range = document.getElementById('size-range')

range.addEventListener('input', e => {
    percent = e.target.value
})

document.getElementById('gen-btn').addEventListener('click', () => {
    let label = document.getElementById('task-label')
    let length = Math.floor(percent / 5)
    let multiplier = 2
    let result = ''

    for (let i = 0; i < length; i++) {
        let pos = i + 1
        let current = pos % 2 === 0 ? Math.floor(Math.random()*10**multiplier) : ' ' + operations[parseInt(operations.length * Math.random())] + ' '

        result += i === 0 ? '' : current
    }

    label.textContent = result
})