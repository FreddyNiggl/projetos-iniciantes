/*function pessoa() {
    this.idade = 0

    setInterval(function()  {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new pessoa*/

//E possivel travar o valor de THIS ou usando BIND ou travando em uma constante

function pessoa() {
    this.idade = 0

    const self = this
    setInterval(function()  {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa