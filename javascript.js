// ==================================================
// MENU HAMBÚRGUER
// ==================================================

const botaoMenu = document.getElementById("menu-toggle");
const menuPrincipal = document.getElementById("menu-principal");

if (botaoMenu && menuPrincipal) {

    botaoMenu.addEventListener("click", function () {

        const menuAberto = menuPrincipal.classList.toggle("menu-aberto");

        botaoMenu.setAttribute(
            "aria-expanded",
            String(menuAberto)
        );
        botaoMenu.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu" : "Abrir menu"
        );

    });

}


if (botaoMenu && menuPrincipal) {
    botaoMenu.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            menuPrincipal.classList.remove("menu-aberto");
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu");
        }
    });
}


// ==================================================
// CONTÊINER PRINCIPAL DA SPA
// ==================================================

const app = document.getElementById("app");


// ==================================================
// TEMPLATES DAS PÁGINAS
// ==================================================

const templates = {

    inicio: `
        <h3 id="titulo-um">O QUE É UMA ONG?</h3>

        <p>
            Você já parou para pensar em como funciona uma ONG? A sigla,
            que significa Organização Não Governamental, é uma entidade de
            caráter privado, sem fins lucrativos e independente do governo
            que se dedica a causas sociais, culturais, ambientais,
            humanitárias, educacionais, de saúde, entre outras, como por
            exemplo, a casa das Máiras.
        </p>


        <section id="importancia">

            <h3 id="titulo-dois">Importância de uma ONG</h3>

            <iframe
                src="https://www.youtube.com/embed/INY3yzFwPT0"
                width="560"
                height="315"
                title="Vídeo sobre a importância de uma ONG"
                allowfullscreen>
            </iframe>

        </section>


        <section id="sobre">

            <h3>Sobre a ONG</h3>

            <p>
                Nossa ONG trabalha para promover ações sociais e contribuir
                para o bem-estar das comunidades das Máiras, oferecendo apoio
                e desenvolvendo projetos que fazem a diferença.
            </p>

        </section>


        <section id="projetos">

            <h3 id="titulo-dois">Projetos da ONG</h3>

            <p>
                Conheça os projetos e ações desenvolvidos pela nossa ONG
                para ajudar a comunidade.
            </p>

            <details>

                <summary>
                    <strong>Projetos</strong>
                </summary>

                <ol>

                    <li>
                        <h4>
                            <em>Maira Não Pode Passar Fome</em>
                        </h4>

                        Distribuição de lanches emergenciais para Máiras que
                        dizem “não estou com fome” e cinco minutos depois
                        estão procurando comida.
                    </li>

                    <li>
                        <h4>
                            <em>Operação Maira Estudante</em>
                        </h4>

                        Ações de apoio a estudantes Máiras, com compartilhamento
                        de materiais, dicas de estudo e incentivo para não
                        desistir da faculdade na primeira atividade difícil.
                    </li>

                    <li>
                        <h4>
                            <em>Projeto Maira Digital</em>
                        </h4>

                        Inclusão digital para Máiras que ainda precisam pedir
                        ajuda para descobrir onde fica o botão de copiar e colar.
                    </li>

                    <li>
                        <h4>
                            <em>Rede de Apoio às Mairas</em>
                        </h4>

                        Espaço de acolhimento e troca de experiências entre
                        Mairas, com campanhas de solidariedade e apoio comunitário.
                    </li>

                </ol>

            </details>

        </section>


        <section id="voluntario">

            <h3>Voluntariado</h3>

            <p>
                Você pode participar de nossas ações como voluntário.
                Existem diferentes formas de colaborar.
            </p>

            <ul>

                <li>
                    <a href="açoes_sociais.html">
                        Participar das ações sociais
                    </a>
                </li>

                <li>
                    <a href="auxiliar_projetos.html">
                        Auxiliar nos projetos
                    </a>
                </li>

                <li>
                    <a href="divulgar_campanhas.html">
                        Divulgar as campanhas da ONG
                    </a>
                </li>

            </ul>

            <p>
                Quer fazer parte da nossa equipe de voluntários?
                <a href="cadastro.html">
                    Cadastre-se como voluntário
                </a>.
            </p>

        </section>


        <section id="doaçoes">

            <h3 id="titulo-dois">Campanhas de Doação</h3>

            <p>
                As doações ajudam a manter os projetos e permitem que a ONG
                continue auxiliando a comunidade das Máiras.
            </p>

            <ul>

                <li>
                    <a href="doaçao_roupa.html">
                        Doação de roupas
                    </a>
                </li>

                <li>
                    <a href="doaçao_alimento.html">
                        Doação de alimentos
                    </a>
                </li>

                <li>
                    <a href="doaçao_dinheiro.html">
                        Doação em dinheiro
                    </a>
                </li>

            </ul>

        </section>
    `,


    sobre: `
        <section id="sobre">

            <h3>Sobre a ONG</h3>

            <p>
                Nossa ONG trabalha para promover ações sociais e contribuir
                para o bem-estar das comunidades das Máiras, oferecendo apoio
                e desenvolvendo projetos que fazem a diferença.
            </p>

        </section>
    `,


    projetos: `
        <section id="projetos">

            <h3 id="titulo-dois">Projetos da ONG</h3>

            <p>
                Conheça os projetos e ações desenvolvidos pela nossa ONG
                para ajudar a comunidade.
            </p>

            <details open>

                <summary>
                    <strong>Projetos</strong>
                </summary>

                <ol>

                    <li>
                        <h4>
                            <em>Maira Não Pode Passar Fome</em>
                        </h4>

                        Distribuição de lanches emergenciais para Máiras que
                        dizem “não estou com fome” e cinco minutos depois
                        estão procurando comida.
                    </li>

                    <li>
                        <h4>
                            <em>Operação Maira Estudante</em>
                        </h4>

                        Ações de apoio a estudantes Máiras, com compartilhamento
                        de materiais, dicas de estudo e incentivo para não
                        desistir da faculdade na primeira atividade difícil.
                    </li>

                    <li>
                        <h4>
                            <em>Projeto Maira Digital</em>
                        </h4>

                        Inclusão digital para Máiras que ainda precisam pedir
                        ajuda para descobrir onde fica o botão de copiar e colar.
                    </li>

                    <li>
                        <h4>
                            <em>Rede de Apoio às Mairas</em>
                        </h4>

                        Espaço de acolhimento e troca de experiências entre
                        Mairas, com campanhas de solidariedade e apoio comunitário.
                    </li>

                </ol>

            </details>

        </section>
    `,


    voluntario: `
        <section id="voluntario">

            <h3>Voluntariado</h3>

            <p>
                Você pode participar de nossas ações como voluntário.
                Existem diferentes formas de colaborar.
            </p>

            <ul>

                <li>
                    <a href="açoes_sociais.html">
                        Participar das ações sociais
                    </a>
                </li>

                <li>
                    <a href="auxiliar_projetos.html">
                        Auxiliar nos projetos
                    </a>
                </li>

                <li>
                    <a href="divulgar_campanhas.html">
                        Divulgar as campanhas da ONG
                    </a>
                </li>

            </ul>

            <p>
                Quer fazer parte da nossa equipe de voluntários?
                <a href="cadastro.html">
                    Cadastre-se como voluntário
                </a>.
            </p>

        </section>
    `,


    doacoes: `
        <section id="doaçoes">

            <h3 id="titulo-dois">Campanhas de Doação</h3>

            <p>
                As doações ajudam a manter os projetos e permitem que a ONG
                continue auxiliando a comunidade das Máiras.
            </p>

            <ul>

                <li>
                    <a href="doaçao_roupa.html">
                        Doação de roupas
                    </a>
                </li>

                <li>
                    <a href="doaçao_alimento.html">
                        Doação de alimentos
                    </a>
                </li>

                <li>
                    <a href="doaçao_dinheiro.html">
                        Doação em dinheiro
                    </a>
                </li>

            </ul>

        </section>
    `,


    contato: `
        <section id="contato">

            <h2>Entre em contato conosco!</h2>

            <div class="contato-item">

                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                </svg>

                <p>
                    <strong>Telefone:</strong>
                    (77) 98158-4378
                </p>

            </div>


            <div class="contato-item">

                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                </svg>

                <p>
                    <strong>E-mail:</strong>
                    maira.rodrigues007@cs.cruzeirodosul.edu.br
                </p>

            </div>


            <div class="contato-item">

                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                </svg>

                <p>
                    <strong>Endereço:</strong>
                    Rua Máira Maria Maiara, 123 - Máiraisópolis/MA
                </p>

            </div>

        </section>
    `
};


// ==================================================
// RENDERIZAÇÃO DA SPA
// ==================================================

function renderizarPagina(pagina) {

    if (!app) {
        return;
    }


    /*
     * Limpa o conteúdo atual do contêiner
     * antes de inserir o novo conteúdo.
     */

    app.innerHTML = "";


    /*
     * Verifica se existe um template
     * correspondente à rota.
     */

    if (templates[pagina]) {

        app.innerHTML = templates[pagina];

    } else {

        app.innerHTML = templates.inicio;

    }


    /*
     * Depois que o HTML é inserido,
     * ativamos novamente os componentes
     * que dependem dos elementos criados.
     */

    configurarToast();
    configurarModal();
}


// ==================================================
// NAVEGAÇÃO SPA
// ==================================================

function navegarPara(pagina, alterarHistorico = true) {

    if (!templates[pagina]) {
        pagina = "inicio";
    }


    /*
     * Atualiza o endereço do navegador
     * sem recarregar a página.
     */

    if (alterarHistorico) {

        history.pushState(
            { pagina: pagina },
            "",
            `#${pagina}`
        );

    }


    /*
     * Renderiza o template correspondente.
     */

    renderizarPagina(pagina);


    /*
     * Volta o usuário para o início
     * do conteúdo depois da troca da rota.
     */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    /*
     * Fecha o menu no celular após
     * selecionar uma opção.
     */

    if (menuPrincipal) {
        menuPrincipal.classList.remove("menu-aberto");
    }

    if (botaoMenu) {
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    }

    const conteudoPrincipal = document.getElementById("conteudo-principal");
    if (conteudoPrincipal) {
        conteudoPrincipal.focus({ preventScroll: true });
    }
}


// ==================================================
// LINKS DA NAVEGAÇÃO
// ==================================================

const linksNavegacao = document.querySelectorAll(
    '.menu-principal a[href^="#"]'
);


linksNavegacao.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();


        let pagina = link
            .getAttribute("href")
            .substring(1);


        /*
         * O ID usado no HTML é "doaçoes",
         * mas a variável de rota pode ser
         * escrita sem caracteres especiais.
         */

        if (pagina === "doaçoes") {
            pagina = "doacoes";
        }


        navegarPara(pagina);

    });

});


// ==================================================
// BOTÕES VOLTAR E AVANÇAR DO NAVEGADOR
// ==================================================

window.addEventListener("popstate", function () {

    let pagina = window.location.hash.substring(1);


    if (pagina === "doaçoes") {
        pagina = "doacoes";
    }


    if (!pagina) {
        pagina = "inicio";
    }


    navegarPara(pagina, false);

});


// ==================================================
// TOAST
// ==================================================

function configurarToast() {

    const botaoToast = document.getElementById("mostrar-toast");
    const toast = document.getElementById("toast");


    if (!botaoToast || !toast) {
        return;
    }


    botaoToast.addEventListener("click", function () {

        toast.classList.add("mostrar");


        setTimeout(function () {

            toast.classList.remove("mostrar");

        }, 3000);

    });

}


// ==================================================
// MODAL
// ==================================================

function configurarModal() {

    const botaoModal = document.getElementById("abrir-modal");
    const modal = document.getElementById("modal");
    const fecharModal = document.getElementById("fechar-modal");

    if (!botaoModal || !modal || !fecharModal) {
        return;
    }

    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    const tituloModal = modal.querySelector("h2, h3, [id*='titulo']");
    if (tituloModal) {
        if (!tituloModal.id) {
            tituloModal.id = "titulo-modal";
        }
        modal.setAttribute("aria-labelledby", tituloModal.id);
    }

    let ultimoFoco = null;

    function fechar() {
        modal.classList.remove("mostrar");
        if (ultimoFoco) {
            ultimoFoco.focus();
        }
    }

    botaoModal.addEventListener("click", function () {
        ultimoFoco = document.activeElement;
        modal.classList.add("mostrar");
        fecharModal.focus();
    });

    fecharModal.addEventListener("click", fechar);

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            fechar();
        }
    });

    modal.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            fechar();
            return;
        }

        if (event.key === "Tab") {
            const elementosFocaveis = modal.querySelectorAll(
                'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            if (!elementosFocaveis.length) {
                event.preventDefault();
                return;
            }

            const primeiro = elementosFocaveis[0];
            const ultimo = elementosFocaveis[elementosFocaveis.length - 1];

            if (event.shiftKey && document.activeElement === primeiro) {
                event.preventDefault();
                ultimo.focus();
            } else if (!event.shiftKey && document.activeElement === ultimo) {
                event.preventDefault();
                primeiro.focus();
            }
        }
    });
}


// ==================================================
// SWEETALERT2 - FORMULÁRIO
// ==================================================

function configurarSweetAlertFormulario() {

    const formulario = document.getElementById("form-cadastro");

    if (!formulario) {
        return;
    }

    formulario.querySelectorAll("input, select, textarea").forEach(function (campo) {
        campo.addEventListener("input", function () {
            campo.setAttribute("aria-invalid", String(!campo.checkValidity()));
        });
        campo.addEventListener("change", function () {
            campo.setAttribute("aria-invalid", String(!campo.checkValidity()));
        });
    });

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        formulario.querySelectorAll("input, select, textarea").forEach(function (campo) {
            campo.setAttribute("aria-invalid", String(!campo.checkValidity()));
        });

        if (!formulario.checkValidity()) {

            formulario.reportValidity();

            if (typeof Swal !== "undefined") {
                Swal.fire({
                    title: "Verifique o formulário",
                    text: "Preencha corretamente os campos obrigatórios.",
                    icon: "warning",
                    confirmButtonText: "Entendi"
                });
            }

            return;
        }

        if (typeof Swal !== "undefined") {
            Swal.fire({
                title: "Cadastro realizado!",
                text: "Seu cadastro de voluntário foi enviado com sucesso.",
                icon: "success",
                confirmButtonText: "OK"
            });
        }
    });
}


// ==================================================
// INICIALIZAÇÃO DA SPA
// ==================================================

let paginaInicial = window.location.hash.substring(1);


if (paginaInicial === "doaçoes") {
    paginaInicial = "doacoes";
}


if (!paginaInicial || !templates[paginaInicial]) {
    paginaInicial = "inicio";
}


renderizarPagina(paginaInicial);
configurarSweetAlertFormulario();