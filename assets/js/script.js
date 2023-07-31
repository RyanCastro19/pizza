document.addEventListener("DOMContentLoaded", function () {
    let tab_link = document.querySelectorAll(".tab_link");
    let tab_content = document.querySelectorAll(".tab_content");
    var carrinho = [];
    tab_link.forEach(link => {

        link.addEventListener("click", function (event) {
            event.preventDefault();
            tab_content.forEach(content => {
                content.style.display = 'none';
            });
            //link não tem nada haver como de cima :)
            tab_link.forEach(link => {
                link.classList.remove("active");
            });
            let tab_name = this.getAttribute("data-tab");
            document.getElementById(tab_name).style.display = "block";
            this.classList.add("active");

        });
    });
    let tab_padrao = document.querySelector(".tab_link");
    tab_padrao.click();

    const pizzas = [
        {
            id: 1,
            nome: "Queijo com calebresa",
            preco: 30,
            img: "assets/img/p1.png",
        },
        {
            id: 2,
            nome: "Queijo com calebresa",
            preco: 22.99,
            img: "assets/img/p2.png",

        },
        {
            id: 3,
            nome: "Queijo com calebresa",
            preco: 22.99,
            img: "assets/img/p3.png",

        },
        {
            id: 4,
            nome: "Queijo com calebresa",
            preco: 22.99,
            img: "assets/img/p4.png",
        },
        {
            id: 5,
            nome: "Queijo com calebresa",
            preco: 22.99,
            img: "assets/img/p5.png",
        },
        {
            id: 6,
            nome: "Queijo com calebresa",
            preco: 22.99,
            img: "assets/img/p6.png",
        },

        {

            id: 7,
            nome: "Queijo com calebresa",
            preco: 22.99,
            img: "assets/img/p7.png",
        },

        {
            id: 8,
            nome: "Queijo com calebresa",
            preco: 22.99,
            img: "assets/img/p8.png",
        },


    ];

    const massas = [
        {
            id: 1,
            nome: "Macarrão",
            preco: 32.99,
            img: "assets/img/massas/massa1.png"
        },
        {
            id: 2,
            nome: "Macarrão",
            preco: 32.99,
            img: "assets/img/massas/massa2.png"
        },
        {
            id: 3,
            nome: "Macarrão",
            preco: 32.99,
            img: "assets/img/massas/massa3.png"
        },
        {
            id: 4,
            nome: "Macarrão",
            preco: 32.99,
            img: "assets/img/massas/massa4.png"
        },

    ]

    const bebidas = [
        {
            id: 1,
            nome: "Coca-cola 2L",
            preco: 9.99,
            img: "assets/img/refri/coca_2l.png",
        },
        {
            id: 2,
            nome: "Coca-cola lata",
            preco: 4.99,
            img: "assets/img/refri/coca_lata.png",
        },
        {
            id: 3,
            nome: "Fanta 2L",
            preco: 9.99,
            img: "assets/img/refri/f4.png",
        },
        {
            id: 4,
            nome: "Fanta Lata",
            preco: 5.99,
            img: "assets/img/refri/f5.png",
        },

    ];
    const sobremesas = [
        {
            id: 1,
            nome: "Pizza doce",
            preco: 57.99,
            img: "assets/img/doces/d1.png",
        },

        {
            id: 2,
            nome: "Pizza Doce",
            preco: 57.99,
            img: "assets/img/doces/d2.png",
        },
        {
            id: 3,
            nome: "Pizza Doce",
            preco: 57.99,
            img: "assets/img/doces/d3.png",
        },
        {
            id: 4,
            nome: "Pizza Doce",
            preco: 57.99,
            img: "assets/img/doces/d4.png",
        },
    ]
    for (let i in pizzas) {
        // console.log(pizzas[i])
        let area_pizza = document.querySelector(".area_pizza");
        let conteudo = "";

        conteudo += `
        <div class="caixa_estutura">
        
            <div class="card_produto">
                <div class="img_card">
                    <img src="${pizzas[i].img}" alt="">
                </div>
                <div class="nome_pizza">
                    <span>
                        ${pizzas[i].nome}
                    </span>
                </div>
                <div class="texto_card">
                   
                    <div class="btn-div">
                        <button class="btn-add" data-id="${pizzas[i].id}">Adicionar</button>
                    </div>

                </div>
            </div>     

    </div>
        `;
        area_pizza.innerHTML += conteudo;
    }

    for (let i in massas) {
        let area_massas = document.querySelector(".area_massas");
        let conteudo = "";
        conteudo += `
    <div class="caixa_estutura">
        
            <div class="card_produto">
                <div class="img_card">
                    <img src="${massas[i].img}" alt="">
                </div>
                <div class="nome_pizza">
                    <span>
                        ${massas[i].nome}
                    </span>
                </div>
                <div class="texto_card">
                    
                    <div class="btn-div">
                        <button class="btn-add" data-id="${massas[i].id}">Adicionar</button>
                    </div>

                </div>
            </div>     

    </div>
        `;
        area_massas.innerHTML += conteudo;

    }



    for (let i in bebidas) {
        let area_bebidas = document.querySelector(".area_bebidas");
        let conteudo = "";
        conteudo += `
    <div class="caixa_estutura">
        
            <div class="card_produto">
                <div class="img_card">
                    <img src="${bebidas[i].img}" alt="">
                </div>
                <div class="nome_pizza">
                    <span>
                        ${bebidas[i].nome}
                    </span>
                </div>
                <div class="texto_card">
                    
                    
                    <div class="btn-div">
                        <button class="btn-add" data-id="${bebidas[i].id}">Adicionar</button>
                    </div>

                </div>
            </div>     

    </div>
        `;
        area_bebidas.innerHTML += conteudo;

    }


    for (let i in sobremesas) {
        let area_sobremesas = document.querySelector(".area_sobremesas")
        let conteudo = "";
        conteudo += `
            <div class="caixa_estutura">
                
            <div class="card_produto">
                <div class="img_card">
                    <img src="${sobremesas[i].img}" alt="">
                </div>
                <div class="nome_pizza">
                    <span>
                        ${sobremesas[i].nome}
                    </span>
                </div>
                <div class="texto_card">
                    
                    <div class="btn-div">
                        <button class="btn-add" data-id="${sobremesas[i].id}">Adicionar</button>
                    </div>

                </div>
            </div>     

        </div>
        `;
        area_sobremesas.innerHTML += conteudo;
    }


    let modal = document.querySelector(".modal");
    modal.style.display = "none";
    let btn_add = document.querySelectorAll(".btn-add");

    btn_add.forEach(btn => {
        btn.addEventListener("click", function () {
            modal.style.display = "flex";
            let id = this.getAttribute("data-id");
            //selecionar o produto pelo id no array
            let pizza = pizzas.find(item => item.id == id);
            console.log(pizza);
            let conteudo = "";

            conteudo += `
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>${pizza.nome}</h2>
                        <button class="close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="imagem">
                            <img src="${pizza.img}">
                        </div>
                        <div class="conteudo-modal">
                            <div>
                                <h3>Ingredientes</h3>
                                <p>Calabresa, mussarela, cebola, azeitona, orégano e molho de tomate.</p>
                            </div>
                            <div class="div_tamanho">
                                <div class="titulo">
                                    Tamanho
                                </div>
                                <div>
                                    <label class="custom-radio-btn">
                                        <input type="radio" name="tamanho" value="p">
                                        <div class="button-tamanho">Pequena</div>
                                    </label>
                                    <label class="custom-radio-btn">
                                        <input type="radio" name="tamanho" value="m">
                                        <div class="button-tamanho">Média</div>
                                    </label>
                                    <label class="custom-radio-btn">
                                        <input type="radio" name="tamanho" value="g">
                                        <div class="button-tamanho">Grande</div>
                                    </label>


                                </div>
                            </div>
                            <div class="div_preco">
                                <div class="titulo">
                                    Preço
                                </div>
                                <div class="div_quantidade">
                                    <div class="preco">
                                        R$ <span class="span_preco">0,00</span>
                                    </div>
                                    <div class="buttons">
                                        <button class="btn_qtd btn_menos">-</button><input class="input_qtd"
                                            type="text" min="1"><button class="btn_qtd btn_mais">+</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button class="btn_add_cart">Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>`;

            modal.innerHTML = conteudo;

            let btn_add_cart = document.querySelector(".btn_add_cart");

            let fechar_modal = document.querySelector(".close");
            fechar_modal.addEventListener("click", function () {
                modal.style.display = "none";
            });

            let btn_menos = document.querySelector(".btn_menos");
            let btn_mais = document.querySelector(".btn_mais");
            let input_qtd = document.querySelector(".input_qtd");
            let span_preco = document.querySelector(".span_preco");
            let preco = pizza.preco;
            span_preco.innerHTML = preco.toFixed(2);
            let qtd = 1;
            input_qtd.value = qtd;

            btn_menos.addEventListener("click", function () {
                if (qtd > 1) {
                    qtd--;
                    input_qtd.value = qtd;
                    span_preco.innerHTML = (preco * qtd).toFixed(2);
                }
            });

            btn_mais.addEventListener("click", function () {
                qtd++;
                input_qtd.value = qtd;
                span_preco.innerHTML = (preco * qtd).toFixed(2);
            });

            input_qtd.addEventListener("change", function () {
                qtd = input_qtd.value;
                span_preco.innerHTML = (preco * qtd).toFixed(2);
            });

            btn_add_cart.addEventListener("click", function () {
                let tamanho = document.querySelector("input[name='tamanho']:checked");
                if (tamanho) {
                    let tamanho_selecionado = tamanho.value;
                    let item = {
                        id: pizza.id,
                        nome: pizza.nome,
                        preco: pizza.preco,
                        img: pizza.img,
                        tamanho: tamanho_selecionado,
                        qtd: qtd,
                    };
                    carrinho.push(item);
                    modal.style.display = "none";
                    console.log(carrinho);
                    atualizarCarrinho(carrinho);
                } else {
                    alert("Selecione um tamanho");
                }
            });


        });
    });

    const botaoCarrinho = document.querySelector('.icon_carrinho');
    const divCarrinho = document.querySelector('.carrinho');
    const closeCarrinho = document.querySelector('.close_carrinho');

    botaoCarrinho.addEventListener('click', () => {
        divCarrinho.classList.toggle('carrinho_aberto');
    });

    closeCarrinho.addEventListener('click', () => {
        //remove a classe carrinho_aberto
        divCarrinho.classList.remove('carrinho_aberto');
    });

    function atualizarCarrinho() {
        let tabela = document.querySelector(".tabela");
        let conteudo = "";
        let total = 0;
        
        tabela.innerHTML += conteudo;
        
        document.querySelector(".total").innerHTML = total.toFixed(2);
        let btn_remover = document.querySelectorAll(".btn_remover");
        btn_remover.forEach(btn => {
            btn.addEventListener("click", function () {
                let indice = this.getAttribute("data-indice");
                carrinho.splice(indice, 1);
                atualizarCarrinho();
            });
        });
    }


});


    
    



