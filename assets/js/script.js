document.addEventListener("DOMContentLoaded", function () {
    let tab_link = document.querySelectorAll(".tab_link");
    let tab_content = document.querySelectorAll(".tab_content");
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
            preco: {
                "p": 35,
                "m": 40,
                "g": 45,
                "gg": 50,
                "f": 60,
            },
            img: "assets/img/p1.png",
        },
        {
            id: 2,
            nome: "Queijo com calebresa",
            preco: {
                "p": 35,
                "m": 40,
                "g": 45,
                "gg": 50,
                "f": 60,
            },
            img: "assets/img/p2.png",

        },
        {
            id: 3,
            nome: "Queijo com calebresa",
            preco: {
                "p": 35,
                "m": 40,
                "g": 45,
                "gg": 50,
                "f": 60,
            },
            img: "assets/img/p3.png",

        },
        {
            id: 4,
            nome: "Queijo com calebresa",
            preco: {
                "p": 35,
                "m": 40,
                "g": 45,
                "gg": 50,
                "f": 60,
            },
            img: "assets/img/p4.png",
        },
        {
            id: 5,
            nome: "Queijo com calebresa",
            preco: {
                "p": 35,
                "m": 40,
                "g": 45,
                "gg": 50,
                "f": 60,
            },
            img: "assets/img/p5.png",
        },
        {
            id: 6,
            nome: "Queijo com calebresa",
            preco: {
                "p": 35,
                "m": 40,
                "g": 45,
                "gg": 50,
                "f": 60,
            },
            img: "assets/img/p6.png",
        },

        {

            id: 7,
            nome: "Queijo com calebresa",
            preco: {
                "p": 35,
                "m": 40,
                "g": 45,
                "gg": 50,
                "f": 60,
            },
            img: "assets/img/p7.png",
        },

        {
            id: 8,
            nome: "Queijo com calebresa",
            preco: {
                "p": 35,
                "m": 40,
                "g": 45,
                "gg": 50,
                "f": 60,
            },
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
                    <div class="qtd">
                        
                        <div class="btn_qtd">

                            <button class="btn_menos">
                                -
                            </button>
                            <input class="input_qtd" type="text" value="1">
                            <button class="btn_mais">+</button>
                        </div>
                        <div class="div_preco">
                            <span class="preco">
                                ${pizzas[i].preco.p}
                            </span>
                        </div>
                    </div>
                    <div class="tamanho_pizza">
                        <ul>
                            <li><input type="radio" name="tamanho" value="p"> <label>P</label></li>
                            <li><input type="radio"  name="tamanho" value="m" > <label>M</label></li>
                            <li><input type="radio"  name="tamanho" value="g"> <label>G</label></li>
                            <li><input type="radio"  name="tamanho" value="gg"> <label>GG</label></li>
                            <li><input type="radio"  name="tamanho" value="f"> <label>F</label></li>
                        </ul>
                    </div>
                    <div class="btn-div">
                        <button class="btn-add">Adicinar</button>
                    </div>

                </div>
            </div>     

    </div>
        `;
        const radioButtons = document.querySelectorAll(`[name="tamanho"]`);
        let precoAtual = pizzas[i].preco.p;
        radioButtons.forEach(radio => {
            radio.addEventListener("change", function () {
                const tamanhoSelecionado = this.value; // Obtém o valor do radio selecionado
                precoAtual = pizzas[i].preco[tamanhoSelecionado]; // Atualiza o preço conforme o tamanho selecionado
                const precoSpan = this.closest(".div_preco").querySelector(".preco-span");
                precoSpan.textContent = precoAtual;
            });
        });
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
                    <div class="qtd">
                        
                        <div class="btn_qtd">

                            <button class="btn_menos"  data-id-menos="${massas[i].id}">
                                -
                            </button>
                            <input class="input_qtd" type="text" value="1" data-id-input="${massas[i].id}">
                            <button class="btn_mais"  data-id-mais="${massas[i].id}">+</button>
                        </div>
                        <div class="div_preco">
                            <span class="preco">
                                ${parseFloat(massas[i].preco)}
                            </span>
                        </div>
                    </div>
                    <div class="tamanho_pizza">
                        <ul>
                            <li><input type="radio" id="p" name="tamanho" value="p"> <label for="p">P</label></li>
                            <li><input type="radio"  name="tamanho" value="m" > <label>M</label></li>
                            <li><input type="radio"  name="tamanho" value="g"> <label>G</label></li>
                            <li><input type="radio"  name="tamanho" value="gg"> <label>GG</label></li>
                            <li><input type="radio"  name="tamanho" value="f"> <label>F</label></li>
                        </ul>
                    </div>
                    <div class="btn-div">
                        <button class="btn-add">Adicinar</button>
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
                    <div class="qtd">
                        
                        <div class="btn_qtd">

                            <button class="btn_menos">
                                -
                            </button>
                            <input class="input_qtd" type="text" value="1">
                            <button class="btn_mais">+</button>
                        </div>
                        <div>
                            <span class="preco">
                                ${bebidas[i].preco}
                            </span>
                        </div>
                    </div>
                    <div class="tamanho_pizza">
                        <ul>
                            <li><input type="radio" name="tamanho" value="p"> <label>P</label></li>
                            <li><input type="radio"  name="tamanho" value="m" > <label>M</label></li>
                            <li><input type="radio"  name="tamanho" value="g"> <label>G</label></li>
                            <li><input type="radio"  name="tamanho" value="gg"> <label>GG</label></li>
                            <li><input type="radio"  name="tamanho" value="f"> <label>F</label></li>
                        </ul>
                    </div>
                    <div class="btn-div">
                        <button class="btn-add">Adicinar</button>
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
                    <div class="qtd">
                        
                        <div class="btn_qtd">

                            <button class="btn_menos">
                                -
                            </button>
                            <input class="input_qtd" type="text" value="1">
                            <button class="btn_mais">+</button>
                        </div>
                        <div>
                            <span class="preco">
                                ${sobremesas[i].preco}
                            </span>
                        </div>
                    </div>
                    <div class="tamanho_pizza">
                        <ul>
                            <li><input type="radio" name="tamanho" value="p"> <label>P</label></li>
                            <li><input type="radio"  name="tamanho" value="m" > <label>M</label></li>
                            <li><input type="radio"  name="tamanho" value="g"> <label>G</label></li>
                            <li><input type="radio"  name="tamanho" value="gg"> <label>GG</label></li>
                            <li><input type="radio"  name="tamanho" value="f"> <label>F</label></li>
                        </ul>
                    </div>
                    <div class="btn-div">
                        <button class="btn-add">Adicinar</button>
                    </div>

                </div>
            </div>     

        </div>
        `;
        area_sobremesas.innerHTML += conteudo;

    }
    let btn_mais = document.querySelectorAll(".btn_mais");
    let btn_menos = document.querySelectorAll(".btn_menos");
    let quantidade = document.querySelectorAll(".input_qtd");
    const preco_elements = document.querySelectorAll(".preco");

    function atualizaPreco(index) {
        const input = quantidade[index];
        const preco_element = preco_elements[index].textContent;
        

        const preco_unitario = parseFloat(preco_element);
        let currentValue = parseInt(input.value);

    
        // Verificar se o valor é válido (maior ou igual a 1)
        if (currentValue < 1 || isNaN(currentValue)) {
          currentValue = 1;
          input.value = currentValue;
        }
    
        const novo_valor = (preco_unitario * currentValue).toFixed(2);
        console.log(preco_element)
        preco_element.textContent = novo_valor;
      }

    quantidade.forEach((input, index) => {
        input.addEventListener('change', function () {
            // Pegar o valor atual do input
            let currentValue = parseInt(input.value);

            // Verificar se o valor é válido (maior ou igual a 1)
            if (currentValue < 1 || isNaN(currentValue)) {
                currentValue = 1;
                input.value = currentValue;
            }

            // Atualizar o valor do produto
            atualizaPreco(index, currentValue);
        });
    });

    btn_mais.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            // Pegar o input associado ao botão clicado
            const input = quantidade[index];

            // Incrementar o valor do input em um
            let currentValue = parseInt(input.value);
            input.value = currentValue + 1;

            // Atualizar o valor do produto
            atualizaPreco(index, currentValue + 1);
        });
    });

    btn_menos.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            // Pegar o input associado ao botão clicado
            const input = quantidade[index];

            // Decrementar o valor do input em um, garantindo que o valor não fique negativo
            let currentValue = parseInt(input.value);
            currentValue = currentValue > 1 ? currentValue - 1 : 1;
            input.value = currentValue;

            // Atualizar o valor do produto
            atualizaPreco(index, currentValue);
        });
    });





    // quantidade.forEach((input, index) => {
    //     input.addEventListener('change', function() {
    //       // Pegar o valor atual do input
    //       const currentValue = parseInt(input.value);

    //       // Atualizar o valor do produto
    //       atualizaPreco(index, currentValue);
    //     });
    //   });


    // btn_mais.forEach((btn, index) => {
    //     btn.addEventListener('click', function() {
    //       // Pegar o input associado ao botão clicado
    //       const input =  quantidade[index];

    //       console.log(input.value)

    //       // Incrementar o valor do input em um
    //       const currentValue = parseInt(input.value);
    //       input.value = currentValue + 1;

    //       // Atualizar o valor do produto
    //       atualizaPreco(index, currentValue + 1);
    //     });
    //   });

    //   // Adicionar um evento de clique a cada botão "btn_nos"
    //   btn_menos.forEach((btn, index) => {
    //     btn.addEventListener('click', function() {
    //       // Pegar o input associado ao botão clicado
    //       const input =  quantidade[index];
    //       // Decrementar o valor do input em um, garantindo que o valor não fique negativo
    //       const currentValue = parseInt(input.value);
    //       input.value = currentValue > 1 ? currentValue - 1 : 1;

    //       // Atualizar o valor do produto
    //       atualizaPreco(index, currentValue-1);
    //     });
    //   });
















    // function atualizaPreco(index, quantidade){
    //     const preco_element = preco_elements[index]
    //     const preco_unitario = parseFloat(preco_element.innerText);
    //     const novo_valor = (preco_unitario * quantidade).toFixed(2);
    //     preco_element.innerText = novo_valor;
    // }

});
