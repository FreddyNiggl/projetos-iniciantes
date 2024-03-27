const funs = []

for (i = 0; i < 10; i++) {
    funs.push(function() {
        console.log(i)
    })
}

funs [1]()
funs [8]()