const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function() {
    console.log('executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 50000)

//setImmediate
//setInterval

const regrinha = new schedule.RecurrenceRule()
regrinha.dayOfWeek = [new schedule.Range(1, 5)]
regrinha.hour = 20
regrinha.second = 10

const tarefa2 = schedule.scheduleJob(regrinha, function() {
    console.log("executando a segunda tarefa!", new Date().getSeconds())
})