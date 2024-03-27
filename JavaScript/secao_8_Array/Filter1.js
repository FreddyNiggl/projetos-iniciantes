    const produtos = [
        {nome: 'notebook', preco: 2499, fragil: true},
        {nome: 'Ipad pro', preco: 4199, fragil: false},
        {nome: 'copo de vidro', preco: 14.49, fragil: true},
        {nome: 'copo de plastico', preco: 18.99, fragil: false}
    ]

    console.log(produtos.filter(function(p) {
        return false //p.preco > 500 && p.fragil == true
    }))

    const caro = mercadoria => mercadoria.preco >= 500
    const fragil = mercadoria2 => mercadoria2.fragil 
    
    console.log(produtos.filter(caro).filter(fragil))