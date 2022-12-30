window.addEventListener("load", function(){
    // Declara variáveis a serem usadas no código
let mEstatisticas = "", hEstatisticas = "";
let mHabilidade = "", hHabilidade = "", selecionado = "";
let mContato = "", hContato = "";

// Criar array com todas as habilidades
const habilidades = [
    ["WhatsApp","25D366","whatsapp"],
    ["Telegram","2CA5E0","telegram"],
    ["Gmail","D14836","gmail"],
    ["Messenger","00B2FF","messenger"],
    ["Discord","5865F2","discord"],
    ["Line","00C300","line"],
    ["Slack","4A154B","slack"],
    ["ProtonMail","8B89CC","protonmail"],
    ["Microsoft_Outlook","0078D4","microsoft-outlook"],
    ["Facebook","1877F2","facebook"],
    ["Instagram","E4405F","instagram"],
    ["Twitter","1DA1F2","twitter"],
    ["LinkedIn","0077B5","linkedin"],
    ["Pinterest","BD081C","pinterest"],
    ["Reddit","FF4500","reddit"],
    ["GitHub","100000","github"],
    ["TikTok","000000","tiktok"],
    ["GitLab","330F63","gitlab"],
    ["Bitbucket","330F63","bitbucket"],
    ["XDA_Developers","F59812","xda-developers"],
    ["Stack_Overflow","FE7A16","stack-overflow"],
    ["Rocket.Chat","F5455C","rocket.chat"],
    ["Medium","12100E","medium"],
    ["dev.to","0A0A0A","dev.to"],
    ["Hashnode","2962FF","hashnode"],
    ["Blogger","FF5722","blogger"],
    ["RSS","FFA500","rss"],
    ["WordPress","006E93","wordpress"],
    ["Woo_Commerce","96588A","woo"],
    ["YouTube","FF0000","youtube"],
    ["Twitch","9146FF","twitch"],
    ["YouTube_Gaming","FF0000","youtube-gaming"],
    ["Facebook_Gaming","005FED","facebook-gaming"],
    ["Crunchyroll","F47521","crunchyroll"],
    ["Netflix","E50914","netflix"],
    ["VS_Code","007ACC","visual-studio-code"],
    ["IntelliJ IDEA","20232A","intellij-idea"],
    ["Adobe_Dreamweaver","FF61F6","adobe-dreamweaver"],
    ["Xamarin","3498DB","xamarin"],
    ["Python","3776AB","python"],
    ["HTML","239120","html5"],
    ["CSS","239120","css3"],
    [".NET","5C2D91",".net"],
    ["JavaScript","F7DF1E","javascript"],
    ["Node.js","43853D","node.js"],
    ["Javascript","323330","javascript"],
    ["TypeScript","007ACC","typescript"],
    ["HTML5","E34F26","html5"],
    ["CSS3","1572B6","css3"],
    ["Saas","CC6699","sass"],
    ["Python","14354C","python"],
    ["C","00599C","c"],
    ["C%2B%2B","00599C","c%2B%2B"],
    ["C%23","239120","c-sharp"],
    ["Java","ED8B00","java"],
    ["PHP","777BB4","php"],
    ["PHP_myAdmin","6C78AF","phpmyadmin"],
    ["R","276DC3","r"],
    ["Swift","FA7343","swift"],
    ["Kotlin","0095D5","kotlin"],
    ["Go","00ADD8","go"],
    ["Ruby","CC342D","ruby"],
    ["Scala","DC322F","scala"],
    ["Rust","000000","rust"],
    ["Dart","0175C2","dart"],
    ["Lua","2C2D72","lua"],
    ["Perl","39457E","perl"],
    ["Elixir","4B275F","elixir"],
    ["Markdown","000000","markdown"],
    ["Shell_Script","121011","gnu-bash"],
    ["Express.js","404D59","express"],
    ["Gatsby","663399","gatsby"],
    ["React","20232A","react"],
    ["React_Native","20232A","react"],
    ["Svelte","4A4A55","svelte"],
    ["Vue.js","35495E","vue.js"],
    ["Angular","DD0031","angular"],
    ["AngularJS","E23237","angularjs"],
    ["Tailwind_CSS","38B2AC","tailwind-css"],
    ["Bootstrap","563D7C","bootstrap"],
    ["styled","DB7093","styled-components"],
    ["Material_UI","007FFF","mui"],
    ["Redux","593D88","redux"],
    ["React_Router","CA4245","react-router"],
    ["jQuery","0769AD","jquery"],
    ["Django","092E20","django"],
    ["Opencv","5C3EE8","opencv"],
    ["OpenAI","412991","openai"],
    ["OpenVPN","EA7E20","opencvpn"],
    ["Ruby_on_Rails","CC0000","ruby-on-rails"],
    ["Laravel","FF2D20","laravel"],
    ["Spring","6DB33F","spring"],
    ["Flask","000000","flask"],
    ["Flutter","02569B","flutter"],
    ["MySQL","00000F","mysql"],
    ["PostgreSQL","316192","postgresql"],
    ["MariaDB","01529E","mariadb"],
    ["MongoDB","4EA94B","mongodb"],
    ["SQLite","07405E","sqlite"],
    ["Firebase","F29D0C","firebase"],
    ["Microsoft_SQL_Server","CC2927","microsoft-sql-server"],
    ["Microsoft_Exchange","0078D4","microsoft-exchange"],
    ["Oracle_Database","F80000","oracle"],
    ["Redis","D9281A","redis"],
    ["Unity","100000","unity"],
    ["Digital_Ocean","0080FF","digitalocean"],
    ["Vultr","007BFC","vultr"],
    ["Netlify","00C7B7","netlify"],
    ["Heroku","430098","heroku"],
    ["Amazon_AWS","232F3E","amazon-aws"],
    ["Google_Cloud","4285F4","google-cloud"],
    ["Microsoft_Azure","0089D6","microsoft-azure"],
    ["Microsoft_Excel","217346","microsoft-excel"],
    ["Microsoft_PowerPoint","B7472A","microsoft-powerpoint"],
    ["Microsoft_Access","A4373A","microsoft-access"],
    ["Microsoft_SQL_Server","CC2927","microsoft-sql-server"],
    ["Microsoft_Office","D83B01","microsoft-office"],
    ["Microsoft_SharePoint","0078D4","microsoft-sharepoint"],
    ["Microsoft_Word","2B579A","microsoft-word"],
    ["Microsoft_Visio","3955A3","microsoft-visio"],
    ["Microsoft_OneNote","7719AA","microsoft-onenote"],
    ["Microsoft_Office_365","D83B01","microsoft-office"],
    ["SAP","0FAAFF","sap"],
    ["CircleCI","343434","circleci"],
    ["Apache","CA2136","apache"],
    ["Nginx","009639","nginx"],
    ["Travis","E4D766","travis"],
    ["Jenkins","D33833","jenkins"],
    ["Docker","2496ED","docker"],
    ["Podman","892CA0","podman"],
    ["Kubernetes","326DE6","kubernetes"],
    ["VirtualBox","183A61","virtualbox"],
    ["QEMU","FF6600","qemu"],
    ["VMWare","607078","vmware"],
    ["Proxmox","E57000","proxmox"],
    ["Hyper_V","017AD7","microsoft"],
    ["Vagrant","2966CE","vagrant"],
    ["Ansible","EE0000","ansible"],
    ["Chef","EF9600","chef"],
    ["Puppet","FFAD19","puppet"],
    ["Terraform","7B42BC","terraform"],
    ["Packer","1DAEFF","packer"],
    ["OpenStack","EA2046","openstack"],
    ["Prometheus","E6522C","prometheus"],
    ["Elastic","005571","elastic"],
    ["Elastic_Cloud","005571","elastic-cloud"],
    ["Consul","F24C53","consul"],
    ["Istio","516BAA","istio"],
    ["Vault","FFFFFF","vault"],
    ["Git","E34F26","git"],
    ["Windows","017AD7","windows"],
    ["Linux","E34F26","linux"],
    ["Mac_OS","20232A","apple"],
    ["PlayStation","003791","playstation"],
    ["Xbox","107C10","xbox"],
    ["Nintendo_Switch","E60012","nintendo-switch"],
    ["Steam","000000","steam"],
    ["Counter_Strike","000000","counter-strike"],
    ["Itch.io","FA5C5C","itch.io"],
    ["Stadia","CD2640","stadia"],
    ["Nintendo_3DS","D12228","nintendo-3ds"],
    ["Moodle","0F9D58","google-classroom"],
    ["Google_ClassRoom","0F9D58","google-classroom"],
    ["Zoom","2D8CFF","zoom"],
    ["Meet","00897B","google-meet"],
    ["Teams","6264A7","microsoft-teams"],
    ["CodeSandbox","151515","codesandbox"],
    ["CodePen","000000","codepen"]
]

// Colocar as habilidades em ordem alfabética
habilidades.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
});

// Criar array com redes sociais
const rsociais = [
    ["Facebook","1877F2","facebook"],
    ["Instagram","E4405F","instagram"],
    ["LinkedIn","0077B5","linkedin"],
    ["Twitter","1DA1F2","twitter"],
    ["CodeSandbox","151515","codesandbox"],
    ["CodePen","000000","codepen"],
    ["Dev.TO","0A0A0A","dev.to"],
    ["Hashnode","2962FF","hashnode"],
    ["Stack_Overflow","FE7A16","stack-overflow"],
    ["YouTube","FF0000","youtube"],
    ["Reddit","FF4500","reddit"],
    ["Website","FFFFFF","icloud"]
]

// Colocar as redes sociais em ordem alfabética
rsociais.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
});

// Montar a tag de seleção das habilidades
const menuHabilidades = document.getElementById("habilidades");
habilidades.forEach(item => {
    const opcao = document.createElement("option");
    let texto = item[0];
    // Substituir os _ por espaço
    texto = texto.replace(/_/g," ");
    // Substituir %23, por #
    texto = texto.replace(/%23/g,"#");
    // Substituir %2B por +
    texto = texto.replace(/%2B/g,"+");
    // Definindo o texto para o nome da habilidade
    opcao.textContent = texto;
    // Definindo o value para o código markdown
    opcao.value = `![${item[0]}](https://img.shields.io/badge/${item[0]}-${item[1]}?logo=${item[2]}&logoColor=white)`;
    menuHabilidades.appendChild(opcao);
});

// Montar a tag de seleção das formas de contato
const menuRedesSociais = document.getElementById("rsociais");
rsociais.forEach(item => {
    const opcao = document.createElement("option");
    let texto = item[0];
    // Substituir os _ por espaço
    texto = texto.replace(/_/g," ");
    // Substituir %23, por #
    texto = texto.replace(/%23/g,"#");
    // Substituir %2B por +
    texto = texto.replace(/%2B/g,"+");
    // Definindo o texto para o nome da habilidade
    opcao.textContent = texto;
    // Definindo o value para o código markdown
    opcao.value = `![${item[0]}](https://img.shields.io/badge/${item[0]}-${item[1]}?logo=${item[2]}&logoColor=white)`;
    menuRedesSociais.appendChild(opcao);
});

// Verifica as estatísticas que foram selecionadas
let perfil = document.getElementById("perfil");
// Ajusta código de acordo com o que foi selecionado
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener("change", function(){
        if(perfil.value !== ""){
            if(checkbox.id === "linguagens"){
                if(checkbox.checked){
                    mEstatisticas += `[![Linguagens mais usadas](https://github-readme-stats.vercel.app/api/top-langs/?username=${perfil.value})](https://github.com/anuraghazra/github-readme-stats))]\n\n`;
                    hEstatisticas += `<p><a href="https://github.com/anuraghazra/github-readme-stats"><img alt="Linguagens mais usadas" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${perfil.value}"></a></p>`;
                } else {
                    mEstatisticas = mEstatisticas.replace(`[![Linguagens mais usadas](https://github-readme-stats.vercel.app/api/top-langs/?username=${perfil.value})](https://github.com/anuraghazra/github-readme-stats))]\n\n`,"");
                    hEstatisticas = hEstatisticas.replace(`<p><a href="https://github.com/anuraghazra/github-readme-stats"><img alt="Linguagens mais usadas" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${perfil.value}"></a></p>`,"");
                }        
            } else if (checkbox.id === "estatisticas"){
                if(checkbox.checked){
                    mEstatisticas += `![GitHub stats](https://github-readme-stats.vercel.app/api?username=${perfil.value}&show_icons=true)\n\n`;
                    hEstatisticas += `<p><img alt="GitHub stats" src="https://github-readme-stats.vercel.app/api?username=${perfil.value}&show_icons=true"></p>`;
                } else {
                    mEstatisticas = mEstatisticas.replace(`![GitHub stats](https://github-readme-stats.vercel.app/api?username=${perfil.value}&show_icons=true)\n\n`,"");
                    hEstatisticas = hEstatisticas.replace(`<p><img alt="GitHub stats" src="https://github-readme-stats.vercel.app/api?username=${perfil.value}&show_icons=true"></p>`,"");
                }
            } else if (checkbox.id === "atividade"){
                if(checkbox.checked){
                    mEstatisticas += `![Gráfico de Atividade no GitHub](https://metrics.lecoq.io/${perfil.value})\n\n`;
                    hEstatisticas += `<img alt="Gráfico de Atividade no GitHub" src="https://metrics.lecoq.io/${perfil.value}">`;
                } else {
                    mEstatisticas = mEstatisticas.replace(`![Gráfico de Atividade no GitHub](https://metrics.lecoq.io/${perfil.value})\n\n`,"");
                    hEstatisticas = hEstatisticas.replace(`<img alt="Gráfico de Atividade no GitHub" src="https://metrics.lecoq.io/${perfil.value}">`,"");
                }
            } else if (checkbox.id === "contribuicoes"){
                if(checkbox.checked){
                    mEstatisticas += `![Estatísticas de atividade no GitHub](https://streak-stats.demolab.com/?user=${perfil.value})\n\n`;
                    hEstatisticas += `<img alt="Estatísticas de atividade no GitHub" src="https://streak-stats.demolab.com/?user=${perfil.value}">`;
                } else {
                    mEstatisticas = mEstatisticas.replace(`![Estatísticas de atividade no GitHub](https://streak-stats.demolab.com/?user=${perfil.value})\n\n`,"");
                    hEstatisticas = hEstatisticas.replace(`<img alt="Estatísticas de atividade no GitHub" src="https://streak-stats.demolab.com/?user=${perfil.value}">`,"");
                }
            }
            gPagina();
        }    
    });
});

// Limpa todo o conteúdo da página
const limpar = document.getElementById("limpaTudo");
limpar.addEventListener("click", function(){
    document.querySelectorAll("input:not([type=button]),select,checkbox").forEach(control => {
        if(control.type === "checkbox"){
            control.checked = false;
        } else {
            control.value = "";
            mEstatisticas = "", hEstatisticas = "";
            mHabilidade = "", hHabilidade = "";
        }
    });
    gPagina();
});

// Gerenciar habilidades
// Adicionar habilidade
const addHabilidade = document.getElementById("addHabilidade");
addHabilidade.addEventListener("click", function(){
    const selHabilidades = document.getElementById("habilidades");
    selecionado = selHabilidades.value;
    // Como o valor já está no padrão markdown, basta enviar ele direto
    mHabilidade += selecionado;
    // Para chegar no valor html, preciso primeiro desmembrar o markdown
    // usando uma expressão regular
    const regex = /!\[(.*)\]\((.*)\)/;
    let conteudo = selecionado.match(regex);
    let oAlt = conteudo[1];
    let aUrl = conteudo[2];
    // Uma vez desmembrado, monto a expressão para o html
    hHabilidade = hHabilidade.concat(`<img alt="${oAlt}" src="${aUrl}">`);
    gPagina();
})

// Remove habilidade
const remHabilidade = document.getElementById("remHabilidade");
remHabilidade.addEventListener("click", function(){
    const selHabilidades = document.getElementById("habilidades");
    selecionado = selHabilidades.value;
    // Como o valor já está no padrão markdown, basta enviar ele direto
    mHabilidade = mHabilidade.replace(selecionado,"");
    // Para chegar no valor html, preciso primeiro desmembrar o markdown
    // usando uma expressão regular
    const regex = /!\[(.*)\]\((.*)\)/;
    let conteudo = selecionado.match(regex);
    // Identifica o conteúdo para alt e da url da imagem
    let oAlt = conteudo[1];
    let aUrl = conteudo[2];
    // Uma vez desmembrado, monto a expressão para o html
    hHabilidade = hHabilidade.replace(`<img alt="${oAlt}" src="${aUrl}">`,"");
    gPagina();
})

// Gerencia formas de contato
// Adiciona forma de contato
const addContato = document.getElementById("addRsociais");
addContato.addEventListener("click", function(){
    // Identifica os componentes
    const selContato = document.getElementById("rsociais");
    const selId = document.getElementById("id");
    // Caso um deles não esteja preenchido, não faz nada
    if(selContato.value.trim() !== "" && selId.value.trim() !== ""){
        // Armazena o valor de cada um deles
        let fContato = selContato.value, cId = selId.value;
        // Identifica o nome da forma de fContato, extraindo ele do markdown
        const regex = /!\[(.*)\]/;
        let oContato = fContato.match(regex);
        let itemContato = oContato[1];
        // Identifica o conteúdo para alt e da url da imagem
        const regex2 = /!\[(.*)\]\((.*)\)/;
        let conteudo = fContato.match(regex2);
        let oAlt = conteudo[1];
        let aUrl = conteudo[2];
        // Trata cada forma individualmente
        switch (itemContato){
            case "CodePen":
                mContato += `[${fContato}](https://codepen.io/${cId})`;
                hContato += `<a href="https://codepen.io/${cId})"><img alt="${oAlt}" src="${aUrl}"></a>`;
                break;
            case "CodeSandbox":
                mContato += `[${fContato}](https://codesandbox.io/u/${cId})`;
                hContato += `<a href="https://codesandbox.io/u/${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`;
                break;
            case "Dev.TO":
                mContato += `[${fContato}](https://dev.to/${cId})`;
                hContato += `<a href="https://dev.to/${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`;
                break;
            case "Facebook":
                mContato += `[${fContato}](https://www.facebook.com/${cId})`;
                hContato += `<a href="https://www.facebook.com/${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`;
                break;
            case "Hashnode":
                mContato += `[${fContato}](https://hashnode.com/@${cId})`;
                hContato += `<a href="https://hashnode.com/@${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`;
                break;
            case "Instagram":
                mContato += `[${fContato}](https://www.instagram.com/${cId}/)`;
                hContato += `<a href="https://www.instagram.com/${cId}/"><img alt="${oAlt}" src="${aUrl}"></a>`;
                break;
            case "LinkedIn":
                mContato += `[${fContato}](https://www.linkedin.com/in/${cId}/)`;
                hContato += `<a href="https://www.linkedin.com/in/${cId}/"><img alt="${oAlt}" src="${aUrl}"></a>`;
                break;
            case "Reddit":
                mContato += `[${fContato}](https://www.reddit.com/user/${cId})`;
                hContato += `<a href="https://www.reddit.com/user/${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`;
                break;
            case "Stack_Overflow":
                mContato += `[${fContato}](https://stackoverflow.com/users/${cId})`;
                hContato += `<a href="https://stackoverflow.com/users/${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`;
                break;
            case "Twitter":
                mContato += `[${fContato}](https://twitter.com/${cId})`;
                hContato += `<a href="https://twitter.com/${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`;
                break;
            case "Website":
                mContato += `[${fContato}](${cId})`;
                hContato += `<a href="${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`;
                break;
            case "YouTube":
                mContato += `[${fContato}](https://www.youtube.com/channel/${cId})`;
                hContato += `<a href="https://www.youtube.com/channel/${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`;
                break;
        }
    }
    gPagina();
})
// Remove forma de contato
const remContato = document.getElementById("remRsociais");
remContato.addEventListener("click", function(){
    // Identifica os componentes
    const selContato = document.getElementById("rsociais");
    const selId = document.getElementById("id");
    // Caso um deles não esteja preenchido, não faz nada
    if(selContato.value !== "" && selId.value !== ""){
        // Armazena o valor de cada um deles
        let fContato = selContato.value, cId = selId.value;
        // Identifica o nome da forma de fContato, extraindo ele do markdown
        const regex = /!\[(.*)\]/;
        let oContato = fContato.match(regex);
        let itemContato = oContato[1];
        // Identifica o conteúdo para alt e da url da imagem
        const regex2 = /!\[(.*)\]\((.*)\)/;
        let conteudo = fContato.match(regex2);
        let oAlt = conteudo[1];
        let aUrl = conteudo[2];
        // Trata cada forma individualmente
        switch (itemContato){
            case "CodePen":
                mContato = mContato.replace(`[${fContato}](https://codepen.io/${cId})`,"");
                hContato = hContato.replace(`<a href="https://codepen.io/${cId})"><img alt="${oAlt}" src="${aUrl}"></a>`,"");
                break;
            case "CodeSandbox":
                mContato = mContato.replace(`[${fContato}](https://codesandbox.io/u/${cId})`,"");
                hContato = hContato.replace(`<a href="https://codesandbox.io/u/${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`,"");
                break;
            case "Dev.TO":
                mContato = mContato.replace(`[${fContato}](https://dev.to/${cId})`,"");
                hContato = hContato.replace(`<a href="https://dev.to/${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`,"");
                break;
            case "Facebook":
                mContato = mContato.replace(`[${fContato}](https://www.facebook.com/${cId})`,"");
                hContato = hContato.replace(`<a href="https://www.facebook.com/${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`,"");
                break;
            case "Hashnode":
                mContato = mContato.replace(`[${fContato}](https://hashnode.com/@${cId})`,"");
                hContato = hContato.replace(`<a href="https://hashnode.com/@${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`,"");
                break;
            case "Instagram":
                mContato = mContato.replace(`[${fContato}](https://www.instagram.com/${cId}/)`,"");
                hContato = hContato.replace(`<a href="https://www.instagram.com/${cId}/"><img alt="${oAlt}" src="${aUrl}"></a>`,"");
                break;
            case "LinkedIn":
                mContato = mContato.replace(`[${fContato}](https://www.linkedin.com/in/${cId}/)`,"");
                hContato = hContato.replace(`<a href="https://www.linkedin.com/in/${cId}/"><img alt="${oAlt}" src="${aUrl}"></a>`,"");
                break;
            case "Reddit":
                mContato = mContato.replace(`[${fContato}](https://www.reddit.com/user/${cId})`,"");
                hContato = hContato.replace(`<a href="https://www.reddit.com/user/${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`,"");
                break;
            case "Stack Overflow":
                mContato = mContato.replace(`[${fContato}](https://stackoverflow.com/users/${cId})`,"");
                hContato = hContato.replace(`<a href="https://stackoverflow.com/users/${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`,"");
                break;
            case "Twitter":
                mContato = mContato.replace(`[${fContato}](https://twitter.com/${cId})`,"");
                hContato = hContato.replace(`<a href="https://twitter.com/${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`,"");
                break;
            case "Website":
                mContato = mContato.replace(`[${fContato}](${cId})`,"");
                hContato = hContato.replace(`<a href="${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`,"");
                break;
            case "YouTube":
                mContato = mContato.replace(`[${fContato}](https://www.youtube.com/channel/${cId})`,"");
                hContato = hContato.replace(`<a href="https://www.youtube.com/channel/${cId}"><img alt="${oAlt}" src="${aUrl}"></a>`,"");
                break;
        }
    }
    gPagina();
})

// Gerar as páginas html e markdown
const gerar = document.getElementById("gerPagina");
gerar.addEventListener("click",function(){
    gPagina();
})

// Função para gerar as páginas
function gPagina(){
        // Lê conteúdo do formulário
        const resMarkdown = document.getElementById("markdown");
        let mTexto = "## Olá, eu sou o ";
        const nome = document.getElementById("nome");
        let resNome = document.getElementById("resNome");
        const subtitulo = document.getElementById("subtitulo");
        let resSubtitulo = document.getElementById("resSubtitulo");
        const sobre = document.getElementById("sobre");
        const habilidades = document.getElementById("habilidades");
        const imagem = document.getElementById("imagem");
        const resContato = document.getElementById("resContato");
    
        // Escreve conteúdos na página
        resNome.innerHTML = `Olá, eu sou o ${nome.value} <g-emoji class="g-emoji" alias="wave" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png">👋</g-emoji>!`;
        mTexto += nome.value + " ![Abanando](https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png)!\n\n";
        resSubtitulo.innerHTML = subtitulo.value;
        mTexto += "### " + subtitulo.value + "\n\n";
            if(imagem.value !== ""){
                resImagem.innerHTML = `<img src="${imagem.value}">`;
                mTexto += "![Imagem](" + imagem.value + ")\n\n";        
            }
        resSobre.innerHTML = sobre.value;
        mTexto += sobre.value + "\n\n";
        resContato.innerHTML = `<h3>Formas de Contato:</h3><p>${hContato}</p>`;
        mTexto += "### Entre em contato:\n\n" + mContato;
        resHabilidades.innerHTML = `<h3>Minhas habilidades:</h3>${hHabilidade}`;
        mTexto += "\n\n### Habilidades:\n\n" + mHabilidade;
        resEstatisticas.innerHTML = `<h3>Estatísticas:</h3>${hEstatisticas}`;
        mTexto += "\n\n### Estatísticas:\n\n"
        // Adiciona as estatísticas ao markdown
        mTexto += mEstatisticas;
        // Escreve o conteúdo em markdown na textarea
        resMarkdown.value = mTexto;
        // Ajusta o tamanho da textarea para mostrar todo o conteúdo
        resMarkdown.style.height = resMarkdown.scrollHeight + "px";    
}

// Copiar Markdown
const cpMk = document.getElementById("copiaMd");
cpMk.addEventListener("click", function(){
    const codigoMd = document.getElementById("markdown");
    navigator.clipboard.writeText(codigoMd.value);
});
})
