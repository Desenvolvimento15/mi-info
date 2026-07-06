/* ═══════════════════════════════════════════
   MI BRASIL – HUB DIGITAL DE INFORMAÇÕES
   script.js – SPA Engine + Data
════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const DATA = {
  themes: [
    {
      id: "atendimento-consumo",
      title: "Atendimento e Informações Financeiras",
      color: "#002D72",
      icon: "bag",
      description: "Informações sobre atendimento ao cliente, trocas, devoluções e seus direitos nas compras.",
      modules: [
        {
          id: "regras-seguranca",
          icon: "shield",
          title: "Aviso de regras de segurança sobre transações financeiras",
          description: "Informações e orientações de segurança para transações financeiras.",
          general: {
            title: "Regras de Segurança",
            customHtml: `
<div class="privacy-policy">
    <h1>AVISO DE REGRAS DE SEGURANÇA SOBRE TRANSAÇÕES FINANCEIRAS</h1>
    <p><strong>Rede de Lojas MiBrasil</strong><br>Última atualização: abril de 2026 (v.1)</p>
    <p>A Rede de Lojas Mibrasil é comprometida com a proteção da segurança financeira das Lojas e dos seus CLIENTES, possuindo rígidas políticas internas a serem seguidas pelos seus colaboradores / prestadores de serviços, visando a prevenção a fraudes e a preservação da excelência de atendimento, tudo em observância às legislações aplicáveis e princípios de conduta ética.</p>
    <p>Este AVISO contém informações sobre regras de segurança referentes às transações financeiras realizadas por CLIENTES da Rede de Lojas Mibrasil, no ato de pagamento de produtos, tais como, operações com cartão de crédito ou débito, PIX e outros meios eletrônicos de pagamento.</p>

    <h2>Para os fins desse aviso, considera-se:</h2>
    <ul>
        <li><strong>Titular do meio de pagamento eletrônico (TITULAR):</strong> a pessoa física ou jurídica titular da conta bancária vinculada ao pix ou aplicativos de pagamento, de cartões de crédito ou débito (físicos ou virtuais), de aplicativos ou outros meios virtuais de pagamentos, assim como o proprietário do smartphone ou outros aparelhos eletrônicos nos quais tais aplicativos ou cartões virtuais estejam instalados.</li>
        <li><strong>Clientes da Rede de Lojas Mibrasil (CLIENTE):</strong> pessoas físicas e/ou representantes de pessoas jurídicas que (i) compareçam presencialmente ou façam contatos com a lojas da Rede Mibrasil com o intuito de informações e/ou compra de produtos; (ii) concluam a compra de produtos mediante a utilização de meios de pagamento aceitos pela loja, que sejam de titularidade do próprio CLIENTE ou de terceiro que o tenha autorizado, sob exclusiva responsabilidade do titular.</li>
    </ul>

    <h2>INFORMAÇÕES IMPORTANTES AOS CLIENTES:</h2>
    <ol>
        <li>Os Titulares dos meios de pagamento eletrônico são responsáveis pela guarda e posse de tais meios, assim como pela privacidade de senhas / logins de acesso, de modo a prevenir e evitar fraudes que possam vir a causar prejuízos tanto aos próprios TITULARES quanto aos comerciantes em geral, devendo seguir todas as obrigações contratuais e orientações de segurança assumidas junto as suas respectivas instituições financeiras, operadoras de cartões e demais prestadores de serviços financeiros.</li>
        <li>A posse de cartões /aplicativos/ demais meios de pagamentos eletrônicos, com a ciência de senhas ou demais meios de acesso que viabilizem a conclusão do pagamento da compra pelo CLIENTE serão consideradas, pela Rede de Lojas Mibrasil, como autorização de uso dadas a este pelo TITULAR do meio de pagamento utilizado.</li>
        <li>A Rede de Lojas Mibrasil não é responsável pelo uso desautorizado e/ou ilegal e/ou fora dos limites autorizados por terceiros que estejam em posse de cartões, aplicativos e demais meios de pagamento eletrônicos, logins e/ou senhas de acesso de TITULARES e utilizem tais meios para realizar o pagamento de compras de produtos junto as lojas da Rede Mibrasil.</li>
        <li>Os colaboradores da Rede de Lojas Mibrasil, seguindo regras de políticas internas de segurança e compliance, podem vir a solicitar dados pessoais e apresentação de documentos de identificação dos CLIENTES, bem como de dados pessoais, documentos de identificação e/ou de comprovante de autorização dos TITULARES, no momento do pagamento da compra. A conclusão da compra em tais situações somente ocorrerá após a devida apresentação dos dados e/ou documentos solicitados.</li>
        <li>O tratamento dos dados pessoais eventualmente solicitados conforme item 4 deste AVISO se dará em observância às regras da Lei Geral de Proteção de Dados (LGPD) e de acordo com os termos do Aviso de Privacidade da Loja da Rede Mibrasil na qual o atendimento seja prestado. Consulte o Aviso de Privacidade.</li>
        <li>Se, após ler este AVISO, restar qualquer dúvida, comentário e/ou sugestão, solicitamos que, por favor, procure o Colaborador responsável pela Loja da Rede Mibrasil na qual o Sr(a). se encontra.</li>
    </ol>
</div>
            `,
          },
        },
        {
          id: "contatos-procon",
          icon: "phone",
          title: "Contatos do procon",
          description: "Telefones e canais de contato dos órgãos de defesa do consumidor.",
          general: {
            title: "Contatos Úteis do Procon",
            customHtml: `
<div class="privacy-policy">
    <h1>Contatos do Procon</h1>
    <p>O Procon é o órgão responsável por proteger e defender os direitos dos consumidores. Caso necessite de orientação ou queira registrar uma reclamação, disponibilizamos as informações abaixo:</p>
    <ul>
        <li><strong>Atendimento Local:</strong> Consulte o Procon do seu estado para informações sobre atendimentos presenciais específicos e endereços das unidades.</li>
        <li><strong>Documentação Necessária:</strong> Ao entrar em contato, tenha sempre em mãos a nota fiscal da compra e seus documentos de identificação pessoal.</li>
        <li><strong>Atendimento Online:</strong> Acesse o site consumidor.gov.br para registro e resolução de reclamações de forma online e oficial.</li>
        <li><strong>Informação na Loja:</strong> Lembre-se que todas as nossas unidades possuem os contatos telefônicos do Procon local expostos visivelmente nos caixas.</li>
    </ul>
</div>
            `,
          },
        },
        {
          id: "codigo-defesa",
          icon: "file",
          title: "Exemplar do código de defesa consumidor",
          description: "Direitos e garantias estabelecidos pelo CDC.",
          general: {
            title: "Código de Defesa do Consumidor",
            customHtml: `
<div class="privacy-policy" style="text-align: center; padding: 40px 20px;">
    <h1 style="text-align: center;">Exemplar do Código de Defesa do Consumidor</h1>
    <p style="margin-bottom: 30px; font-size: 1rem; color: var(--color-text-muted);">Clique no botão abaixo para acessar a versão digital e atualizada do Código de Defesa do Consumidor (CDC) diretamente do portal do Governo Federal.</p>
    <a href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #002D72, #001f52); color: #fff; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 1.1rem; box-shadow: 0 4px 10px rgba(0,0,0,0.15); transition: transform 0.2s;">
        Acessar o Código de Defesa do Consumidor
    </a>
</div>
            `,
          },
        },
      ],
    },

    {
      id: "privacidade-lgpd",
      title: "Privacidade e LGPD",
      color: "#2ECC71",
      icon: "lock",
      description:
        "Informações sobre proteção de dados, privacidade e seus direitos sob a Lei Geral de Proteção de Dados.",
      modules: [
        {
          id: "aviso-privacidade",
          icon: "file",
          title: "Aviso de privacidade de dados",
          description: "Política de privacidade e proteção de dados pessoais.",
          general: {
            title: "Aviso de Privacidade",
            customHtml: `
<div class="privacy-policy">
    <h1>Aviso de Privacidade</h1>
    <p><strong>Última atualização: novembro de 2025 (v.2)</strong></p>

    <p>A loja online MiBrasil, disponível no site www.mibrasil.com.br, é representada pela seguinte empresa, responsável pelo tratamento de dados objeto deste Aviso de Privacidade:</p>

    <p><strong>IZU COMÉRCIO DE ELETRÔNICOS LTDA. (“IZU”)</strong>, pessoa jurídica de direito privado, inscrita no CNPJ/MF sob o nº 34.744.895/0003-52. Av. Embaixador Bilac Pinto, 1005, Sala 02 Colina das Palmeiras – CEP 37.538-650 Santa Rita do Sapucaí/MG</p>

    <p>A IZU está comprometida com a privacidade e a proteção dos dados pessoais de seus Usuários. Este Aviso de Privacidade (“Aviso”) informa de forma clara como é realizado o tratamento dos dados pessoais coletados, as hipóteses legais que autorizam esse tratamento, as finalidades da coleta e os direitos que o Usuário, como titular de dados, possui.</p>

    <p>A atualização deste Aviso faz parte do compromisso da Lojista em alinhar suas práticas à legislação brasileira aplicável, em especial à Lei Geral de Proteção de Dados Pessoais – LGPD (Lei nº 13.709/18), bem como ao Marco Civil da Internet (Lei nº 12.965/14) e seu regulamento.</p>

    <h2>1. DEFINIÇÕES E TERMOS UTILIZADOS NESTE AVISO</h2>
    <p>Para facilitar a leitura e compreensão deste Aviso, segue abaixo os principais termos usados neste documento, conforme definidos pela LGPD:</p>
    <ul>
        <li><strong>a) Dado pessoal:</strong> qualquer informação que identifique ou possa identificar uma pessoa natural;</li>
        <li><strong>b) Banco de dados:</strong> conjunto organizado de dados pessoais, armazenados de forma física ou eletrônica, em um ou mais locais;</li>
        <li><strong>c) Titular:</strong> pessoa natural a quem os dados pessoais se referem;</li>
        <li><strong>d) Tratamento:</strong> qualquer operação realizada com dados pessoais, tais como coleta, uso, armazenamento, compartilhamento, eliminação ou modificação;</li>
        <li><strong>e) Consentimento:</strong> manifestação livre, informada e clara pela qual o titular concorda com o tratamento de seus dados para uma finalidade determinada;</li>
        <li><strong>f) Controlador:</strong> pessoa natural ou jurídica a quem competem as decisões referentes ao tratamento de dados pessoais;</li>
        <li><strong>g) Operador:</strong> pessoa natural ou jurídica que realiza o tratamento de dados pessoais em nome do controlador;</li>
        <li><strong>h) Encarregado (DPO):</strong> pessoa indicada pelo controlador para atuar como canal de comunicação entre o controlador, os titulares e a ANPD.</li>
    </ul>

    <h2>2. DADOS PESSOAIS COLETADOS PELA IZU</h2>
    <p>A IZU poderá coletar e tratar diferentes categorias de dados pessoais, de acordo com a interação do usuário com o site www.mibrasil.com.br</p>
    <ul>
        <li><strong>a) Dados de Navegação:</strong> Durante a navegação, poderão ser registrados as seguintes informações: Endereço de IP (Internet Protocol), Sistema operacional do dispositivo, Tipo e versão do navegador, opções habilitadas e plug-ins instalados, Geolocalização e Páginas acessadas (com respectivas datas e horários);<br><em>Observação: essas informações não são compartilhadas com terceiros.</em></li>
        <li><strong>b) Dados de Cadastro:</strong> Ao criar uma conta no site www.mibrasil.com.br, serão solicitados: Nome completo, Data de nascimento, CPF, Endereço completo, E-mail e telefones;</li>
        <li><strong>c) Dados de Compra:</strong> Ao comprar no site www.mibrasil.com.br, a IZU coletará as seguintes informações: Detalhes e valores dos produtos adquiridos na compra, Forma de pagamento, Informações sobre documentos de identificação, Nome e endereço para entrega dos produtos.</li>
        <li><strong>d) Dados de Atendimento (SAC):</strong> Ao contatar o Serviço de Atendimento ao Cliente, poderão ser solicitados dados como: nome completo, CPF, número do pedido, telefone e e-mail, a fim de viabilizar o atendimento adequado.</li>
        <li><strong>e) Dados para Suporte Técnico (DL Comércio de Eletrônicos LTDA.):</strong> A IZU disponibiliza em seu site www.mibrasil.com.br meios de contato com a distribuidora DL, que poderá solicitar: Nome, CPF, telefone, modelo e número de série/IMEI do produto, fotos e endereço completo.<br><em>Observação: esses dados são tratados diretamente pela DL, e não pela IZU. Para mais informações, consulte o Aviso de Privacidade – DL.</em></li>
        <li><strong>f) Dados para Ações de Publicidade:</strong> Ao inscrever-se no pop-up “Promoções e Lançamentos”, o usuário autoriza o envio de newsletters com ofertas e comunicações personalizadas. Para isso, poderão ser coletados: nome, e-mail e telefone (WhatsApp).<br><em>Observação: O descadastro pode ser solicitado a qualquer momento por meio do link disponível no contato recebido</em></li>
        <li><strong>g) Dados para Campanhas e Programas:</strong> Ao aderir a campanhas ou programas específicos, poderão ser coletados dados pessoais adicionais. Cada iniciativa contará com regras de privacidade próprias, que devem ser consultadas previamente pelo titular.</li>
        <li><strong>h) Dados para Pesquisa de Satisfação:</strong> Após a realização de uma compra, a IZU poderá enviar um e-mail contendo um link para que o cliente avalie o desempenho da loja.<br><em>Observação: O preenchimento é opcional e, caso o cliente prefira, poderá solicitar a exclusão de sua participação, deixando de receber esse tipo de mensagem em futuras compras.</em></li>
    </ul>

    <h2>3. COMO SÃO TRATADOS SEUS DADOS PESSOAIS</h2>
    <div class="table-responsive">
        <table class="privacy-table">
            <thead>
                <tr>
                    <th>Categoria dos Dados Pessoais</th>
                    <th>Finalidade</th>
                    <th>Hipótese Legal</th>
                    <th>Prazo de Retenção</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dados de Navegação</td>
                    <td>Mensurar a performance da plataforma e aprimorar a funcionalidade do site, melhorar a experiência do usuário, realizar análises e gerar estatísticas</td>
                    <td>Cumprimento de obrigação legal (Art. 7º, inc. II, LGPD)</td>
                    <td>Pelo período de 6 meses (conforme Art.15 da Lei nº 12.965/14)</td>
                </tr>
                <tr>
                    <td>Dados de Cadastro</td>
                    <td>Identificação do Usuário, criação de conta e viabilizar as compras</td>
                    <td>Consentimento do titular (art.7º, inc. I, LGPD)</td>
                    <td>Até a revogação do consentimento pelo titular</td>
                </tr>
                <tr>
                    <td>Dados de Compra</td>
                    <td>Prestar atendimento ao cliente, atendendo solicitações, reclamações e fornecer suporte ao cliente</td>
                    <td>Para coleta: Execução de contrato (art. 7º, inc. V, LGPD)<br>Para retenção: Cumprimento de obrigação legal (art.7º, inc. II, LGPD)</td>
                    <td>5 anos após a compra (Art. 173 do CTN)</td>
                </tr>
                <tr>
                    <td>Dados para Suporte Técnico (DL)</td>
                    <td>Prestação de serviços de Suporte Técnico dos aparelhos adquiridos na IZU</td>
                    <td>Para coleta: Execução de contrato (art. 7º, inc. V, LGPD)<br>Para retenção: Cumprimento de obrigação legal (art. 7º, inc. II, LGPD)</td>
                    <td>Enquanto durar a relação contratual + 5 anos após o término (Art. 27, CDC).</td>
                </tr>
                <tr>
                    <td>Dados da seção “Trabalhe Conosco”</td>
                    <td>Avaliar candidatos e conduzir processos seletivos para vagas disponíveis ou futuras.</td>
                    <td>Para coleta: Procedimentos preliminares relacionados a contrato de trabalho (art. 7º, V, LGPD)<br>Para retenção: Consentimento do titular (art.7º, inc. I, LGPD)</td>
                    <td>Pelo tempo necessário para cumprir sua finalidade, salvo revogação do consentimento pelo titular</td>
                </tr>
                <tr>
                    <td>Dados para Ações de Publicidade</td>
                    <td>Envio de comunicações de marketing e conteúdos personalizados</td>
                    <td>Consentimento do titular (art.7º, inc. I, LGPD)</td>
                    <td>Até a revogação do consentimento pelo titular</td>
                </tr>
                <tr>
                    <td>Dados para Campanhas e Programas</td>
                    <td>Gestão de promoções, sorteios e descontos</td>
                    <td>Para coleta: Consentimento do titular (art.7º, inc. I, LGPD)<br>Para retenção: Cumprimento de obrigação legal (art.7º, inc. II, LGPD)</td>
                    <td>Enquanto durar a campanha ou programa + 5 anos após o término (Art. 27, CDC).</td>
                </tr>
                <tr>
                    <td>Dados para Pesquisa de Satisfação</td>
                    <td>Avaliar a experiência do cliente, identificar melhorias e apoiar decisões de negócio</td>
                    <td>Legítimo interesse (art. 7º, IX, LGPD)</td>
                    <td>Pelo tempo necessário para análise e consolidação dos resultados, salvo revogação do consentimento pelo titular</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h2>4. COMPARTILHAMENTO DOS DADOS</h2>
    <p>A IZU não comercializa, transfere ou utiliza dados pessoais de usuários(as) para finalidades distintas das previstas neste documento. O compartilhamento de dados ocorre exclusivamente quando necessário para a execução das atividades da empresa e sempre em conformidade com as finalidades aqui estabelecidas. Essas hipóteses podem incluir:</p>
    <ul>
        <li><strong>Gerenciamento e operação do comércio eletrônico:</strong> parceria com empresas especializadas para manter a funcionalidade e eficiência da plataforma.</li>
        <li><strong>Prevenção de fraudes:</strong> validação de transações realizadas com seu nome de usuário e senha, por meio de parceiros antifraude, reduzindo riscos de operações indevidas.</li>
        <li><strong>Processamento de pagamentos:</strong> envio de informações aos facilitadores de pagamento, conforme a forma de pagamento escolhida, para viabilizar a transação.</li>
        <li><strong>Logística e entrega:</strong> fornecimento de dados às transportadoras e empresas de entrega para garantir que o pedido chegue corretamente ao destino.</li>
        <li><strong>Ações de publicidade:</strong> mediante consentimento prévio, compartilhamento de informações com parceiros responsáveis pelo envio segmentado e automatizado de comunicações promocionais.</li>
        <li><strong>Atendimento de pós-venda e suporte ao cliente:</strong> compartilhamento de informações com parceiros, quando necessário para auxiliar na resolução de problemas relacionado ao produto adquirido ou a assuntos afins.</li>
        <li><strong>Autoridades e órgãos competentes:</strong> quando houver obrigação legal ou regulatória, inclusive para cumprimento de ordens judiciais ou atendimento a solicitações oficiais.</li>
    </ul>
    <p>Sempre que houver compartilhamento, adotamos os melhores esforços para garantir que:</p>
    <ul>
        <li>Apenas as informações estritamente necessárias sejam repassadas;</li>
        <li>Os parceiros e prestadores de serviços da IZU adotam padrões de segurança e privacidade alinhados aos da empresa, preservando, sempre que possível, a integridade e a confidencialidade dos dados.</li>
    </ul>

    <h2>5. TRATAMENTO DE DADOS DE CRIANÇAS E ADOLESCENTES</h2>
    <p>A IZU não coleta dados pessoais de crianças e adolescentes (indivíduos com menos de 18 anos), e não direciona suas campanhas de marketing ou publicidade para esse público. Caso sejam identificados, adotaremos medidas para exclusão imediata.</p>

    <h2>6. TRANSFERÊNCIA INTERNACIONAL DE DADOS</h2>
    <p>Alguns parceiros da IZU utilizam ambientes de armazenamento em nuvem que podem incluir servidores localizados fora do Brasil. Nesses casos, os dados pessoais são mantidos com níveis adequados de proteção, em conformidade com a LGPD e com padrões de segurança e privacidade compatíveis com aqueles estabelecidos neste Aviso.</p>

    <h2>7. USO DE COOKIES</h2>
    <p>Para oferecer uma melhor experiência de navegação no site www.mibrasil.com.br e disponibilizar serviços personalizados, a IZU utiliza cookies. Você pode desabilitar essa funcionalidade diretamente nas configurações do seu navegador; no entanto, algumas funções e recursos do site poderão ficar indisponíveis ou apresentar limitações. Para mais informações sobre o uso de cookies, consulte Aviso de Cookies.</p>

    <h2>8. SEGURANÇA DOS DADOS PESSOAIS</h2>
    <p>A IZU adota medidas de segurança técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados, bem como contra situações de destruição, perda, alteração, comunicação ou difusão indevida.</p>
    <p>O tratamento das informações pessoais segue as diretrizes da Política de Segurança da Informação da empresa. O acesso a esses dados é restrito a uma equipe devidamente capacitada, vinculada a compromissos de confidencialidade e responsável por assegurar a proteção contínua das informações.</p>
    <p>A IZU não se responsabiliza por danos, prejuízos ou perda de informações decorrentes de ações de terceiros, bem como nos casos de eventos fortuitos ou situações de força maior fora de seu controle.</p>
    <p>Em caso de violação de segurança envolvendo dados pessoais que possa afetar significativamente o titular, a IZU compromete-se a comunicar prontamente o titular e adotar medidas para mitigar possíveis impactos, conforme a legislação aplicável.</p>
    <p>Além disso, a IZU revisa e atualiza periodicamente suas políticas e procedimentos de segurança para assegurar a proteção contínua dos dados pessoais.</p>

    <h2>9. DIREITOS DO TITULARES</h2>
    <p>Enquanto titular dos seus dados pessoais, o Usuário possui os seguintes direitos, que podem ser exercidos a qualquer momento:</p>
    <ul>
        <li>Confirmação da existência de tratamento;</li>
        <li>Acesso aos dados pessoais;</li>
        <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto nesta Lei;</li>
        <li>Portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da ANPD;</li>
        <li>Revogação do consentimento e consequente eliminação dos dados pessoais tratados, exceto nas hipóteses previstas no art. 16 da LGPD;</li>
        <li>Informação das entidades públicas e privadas com as quais o controlador compartilhou seus dados;</li>
        <li>Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;</li>
        <li>Solicitação de revisão por intervenção humana de decisões tomadas exclusivamente com base em tratamento automatizado, incluindo definição de perfis.</li>
    </ul>
    <p>Caso deseje exercer qualquer um desses direitos, entre em contato com a IZU pelos canais indicados ao final deste Aviso. Para sua segurança e evitar fraudes, poderemos solicitar um documento de identificação e, se necessário, outras informações para autenticar sua solicitação e garantir a proteção dos seus dados.</p>
    <p>Após a comprovação da sua identidade, a IZU se compromete a responder à sua solicitação no menor prazo possível, respeitando o prazo máximo de 15 (quinze) dias, conforme previsto na LGPD.</p>

    <h2>10. COMENTÁRIOS, DÚVIDAS E SUGESTÕES</h2>
    <p>Se, após ler este Aviso, você tiver qualquer dúvida, comentário ou sugestão sobre as práticas de privacidade e proteção de dados pessoais, ou se desejar exercer qualquer um dos seus direitos relacionados ao tratamento de dados pessoais, entre em contato com o Encarregado pelo Tratamento de Dados (DPO), através do seguinte e-mail dpo@mibrasil.com.br – Rafael Palma de Araujo</p>
    <p>Atenção: As comunicações do DPO são realizadas exclusivamente por este canal oficial. Desconsidere qualquer contato em nome do DPO proveniente de outros endereços de e-mail, como medida de segurança contra fraudes e comunicações indevidas.</p>
    <p>Ressaltamos que este canal de comunicação é exclusivo para questões relacionadas à privacidade e ao tratamento de dados pessoais dos clientes do Rede de Lojas MiBrasil (XIAOMI STORE).</p>
    <p>Para assuntos referentes a produtos e suporte técnico, por favor, utilize os canais disponíveis em Contatos | Xiaomi Brasil Loja Oficial</p>

    <h2>11. ALTERAÇÕES DO AVISO</h2>
    <p>A Lojista poderá alterar este Aviso de Privacidade a qualquer momento, visando refletir mudanças legislativas, regulatórias, tecnológicas ou operacionais. Para se manter a par de eventuais mudanças das práticas de privacidade da IZU relativas aos seus dados pessoais, é recomendável que você consulte periodicamente a versão mais atualizada desse Aviso.</p>
</div>
`
          },
        },
      ],
    },
    {
      id: "atendimento-prioritario",
      title: "Atendimento Prioritário",
      color: "#9B59B6",
      icon: "user",
      description: "Regras e legislações que garantem atendimento preferencial a pessoas com necessidades especiais.",
      modules: [
        {
          id: "quem-tem-direito",
          icon: "user",
          title: "Quem Tem Direito",
          description: "Pessoas que têm prioridade no atendimento.",
          general: {
            title: "Direito ao Atendimento Prioritário",
            text: "A Lei Federal 10.048/2000 garante atendimento prioritário a pessoas com necessidades especiais em estabelecimentos comerciais.",
            items: [
              "Pessoas com deficiência física, mental, auditiva ou visual",
              "Idosos com 60 anos ou mais (Estatuto do Idoso)",
              "Gestantes, lactantes e mulheres com bebê de colo",
              "Pessoas com crianças de colo",
            ],
          },
        },
        {
          id: "filas",
          icon: "list",
          title: "Filas Preferenciais",
          description: "Como funciona o sistema de filas e senhas.",
          general: {
            title: "Funcionamento das Filas",
            text: "Todas as nossas unidades possuem sistema de senhas e filas preferenciais devidamente sinalizadas.",
            items: [
              "Caixas e guichês preferenciais identificados",
              "Sistema de senha prioritária em todas as unidades",
              "Atendimento imediato sem necessidade de senha em casos de urgência",
              "Colaboradores treinados para identificar necessidades especiais",
            ],
          },
        },
        {
          id: "legislacao-federal",
          icon: "file",
          title: "Legislação Federal",
          description: "Leis federais sobre atendimento prioritário.",
          general: {
            title: "Base Legal Federal",
            text: "O atendimento prioritário no Brasil é regulado por um conjunto de leis federais que estabelecem direitos e obrigações.",
            items: [
              "Lei 10.048/2000: atendimento prioritário",
              "Lei 10.741/2003: Estatuto do Idoso",
              "Lei 13.146/2015: Lei Brasileira de Inclusão",
              "Decreto 3.298/1999: Política Nacional para Deficiência",
            ],
          },
        },
        {
          id: "acessibilidade",
          icon: "map-pin",
          title: "Acessibilidade",
          description: "Estrutura e recursos de acessibilidade nas lojas.",
          general: {
            title: "Acessibilidade nas Unidades",
            text: "Nossas lojas são projetadas para garantir acessibilidade plena a todos os clientes.",
            items: [
              "Rampas de acesso e piso tátil",
              "Vagas de estacionamento reservadas",
              "Sanitários adaptados",
              "Sinalização em Braille e em Libras",
            ],
          },
        },
        {
          id: "regras-unidade",
          icon: "info",
          title: "Regras da Unidade",
          description: "Procedimentos específicos de cada loja.",
          general: {
            title: "Regras Locais de Atendimento",
            text: "Cada unidade pode possuir procedimentos específicos complementares à legislação federal e estadual.",
            items: [
              "Consulte a sinalização interna da loja",
              "Solicite assistência a qualquer colaborador",
              "Canais de ouvidoria disponíveis na loja",
              "Feedback contribui para melhoria contínua",
            ],
          },
        },
      ],
    },

    {
      id: "outras-informacoes",
      title: "Outras Informações",
      color: "#78909C",
      icon: "plus-circle",
      description: "Informações gerais sobre serviços, comodidades e canais da loja.",
      modules: [
        {
          id: "ambiente-filmado",
          icon: "camera",
          title: "Ambiente Sendo Filmado",
          description: "Aviso sobre monitoramento de segurança por câmeras.",
          general: {
            title: "Ambiente Sendo Filmado",
            text: "O estabelecimento possui monitoramento por câmeras para sua segurança e proteção do patrimônio.",
            items: [
              "As imagens são confidenciais",
              "Acesso restrito à equipe de segurança autorizada",
              "Tratamento de dados em conformidade com a LGPD",
              "Gravações armazenadas por tempo determinado"
            ],
          },
        },
        {
          id: "proibido-fumar",
          icon: "alert",
          title: "Proibido Fumar",
          description: "Regras sobre ambientes livres de tabaco.",
          general: {
            title: "Proibido Fumar",
            text: "É proibido fumar em todas as áreas internas e fechadas do estabelecimento, conforme legislação vigente.",
            items: [
              "Ambiente livre de tabaco",
              "Proibição abrange cigarros convencionais, eletrônicos e vaporizadores",
              "Respeite a sinalização do local",
              "Avisos visíveis nas entradas e corredores"
            ],
          },
        },
        {
          id: "proibido-capacete",
          icon: "shield",
          title: "Proibido Uso de Capacete",
          description: "Medida de segurança para identificação visual.",
          general: {
            title: "Proibido Uso de Capacete",
            text: "Para a segurança de todos, é obrigatória a retirada de capacetes e coberturas que ocultem a face ao entrar no estabelecimento.",
            items: [
              "Obrigatória a identificação visual",
              "Aplica-se a todos os clientes e entregadores",
              "Medida de prevenção de segurança pública",
              "Conforme legislação estadual/municipal vigente"
            ],
          },
        },
        {
          id: "sonegar-crime",
          icon: "file",
          title: "Sonegar é Crime",
          description: "Aviso legal sobre a emissão de cupons e notas fiscais.",
          general: {
            title: "Sonegar é Crime",
            text: "A sonegação fiscal é crime. Exija sempre o seu documento fiscal no momento da compra.",
            items: [
              "Direito do consumidor e dever do estabelecimento",
              "Auxilia na garantia e troca de produtos",
              "Aviso obrigatório conforme a Lei",
              "Denúncias podem ser feitas aos órgãos competentes"
            ],
          },
        },
        {
          id: "sacolas-plasticas",
          icon: "bag",
          title: "Placa sobre Sacolas Plásticas",
          description: "Informações sobre a distribuição de sacolas plásticas.",
          general: {
            title: "Fornecimento de Sacolas Plásticas",
            text: "De acordo com a legislação, adotamos medidas para redução do uso de sacolas plásticas convencionais, incentivando o uso de sacolas retornáveis.",
            items: [
              "Incentivo a práticas sustentáveis e ecológicas",
              "Disponibilização de opções recicláveis ou biodegradáveis",
              "Possibilidade de cobrança conforme lei local",
              "Traga a sua sacola retornável!"
            ],
          },
        },
        {
          id: "descarte-eletronicos",
          icon: "refresh",
          title: "Descarte de Equipamentos Eletrônicos",
          description: "Orientações sobre descarte correto de lixo eletrônico.",
          general: {
            title: "Descarte Consciente de Eletrônicos",
            text: "Oferecemos pontos de coleta para o descarte adequado de aparelhos eletrônicos, baterias e pilhas em conformidade com a Política Nacional de Resíduos Sólidos.",
            items: [
              "Logística reversa e preservação ambiental",
              "Descarte seguro de baterias de lítio e componentes tóxicos",
              "Pontos de coleta identificados nas lojas físicas",
              "Proteção do meio ambiente"
            ],
          },
        },
        {
          id: "emissao-nf",
          icon: "file",
          title: "Emissão de NF",
          description: "Regras sobre a obrigatoriedade da emissão de Notas Fiscais.",
          general: {
            title: "Emissão de Nota Fiscal",
            text: "A Nota Fiscal é emitida eletronicamente e é o seu comprovante legal da operação de compra.",
            items: [
              "Emissão automática nos caixas",
              "Necessária para acionar garantias",
              "Disponível o envio do DANFE por e-mail",
              "Verifique a inclusão do seu CPF/CNPJ"
            ],
          },
        },
        {
          id: "vedacao-discriminacao",
          icon: "user",
          title: "Vedação de Discriminação",
          description: "Aviso de que a discriminação é crime.",
          general: {
            title: "Discriminação é Crime",
            text: "É expressamente proibida qualquer forma de discriminação em nosso estabelecimento. Todos têm direito a tratamento igualitário.",
            items: [
              "Proibida discriminação por raça, cor, etnia ou religião",
              "Proibida discriminação por orientação sexual ou identidade de gênero",
              "Cumprimento integral da legislação de direitos humanos",
              "Canais de denúncia disponíveis (Disque 100)"
            ],
          },
        },
      ],
    },
  ],

  states: [
    { code: "AC", name: "Acre" },
    { code: "AL", name: "Alagoas" },
    { code: "AP", name: "Amapá" },
    { code: "AM", name: "Amazonas" },
    { code: "BA", name: "Bahia" },
    { code: "CE", name: "Ceará" },
    { code: "DF", name: "Distrito Federal" },
    { code: "ES", name: "Espírito Santo" },
    { code: "GO", name: "Goiás" },
    { code: "MA", name: "Maranhão" },
    { code: "MT", name: "Mato Grosso" },
    { code: "MS", name: "Mato Grosso do Sul" },
    { code: "MG", name: "Minas Gerais" },
    { code: "PA", name: "Pará" },
    { code: "PB", name: "Paraíba" },
    { code: "PR", name: "Paraná" },
    { code: "PE", name: "Pernambuco" },
    { code: "PI", name: "Piauí" },
    { code: "RJ", name: "Rio de Janeiro" },
    { code: "RN", name: "Rio Grande do Norte" },
    { code: "RS", name: "Rio Grande do Sul" },
    { code: "RO", name: "Rondônia" },
    { code: "RR", name: "Roraima" },
    { code: "SC", name: "Santa Catarina" },
    { code: "SP", name: "São Paulo" },
    { code: "SE", name: "Sergipe" },
    { code: "TO", name: "Tocantins" },
  ],

  stateContent: {
    SP: {
      name: "Estado de São Paulo",
      laws: [
        {
          title: "Lei Estadual nº 15.175/2013",
          desc: "Dispõe sobre a obrigatoriedade de atendimento prioritário e dá outras providências para o Estado de SP.",
        },
        {
          title: "Lei Estadual nº 10.177/1998",
          desc: "Lei de Proteção ao Consumidor do Estado de São Paulo.",
        },
        {
          title: "Decreto nº 66.373/2021",
          desc: "Regulamenta a LGPD no âmbito estadual.",
        },
      ],
      procon: "PROCON-SP: 151 | www.procon.sp.gov.br",
      extra: "Município de São Paulo: Lei Municipal nº 14.485/2007 – Dispõe sobre o atendimento preferencial às pessoas que especifica.",
    },
    MG: {
      name: "Estado de Minas Gerais",
      laws: [
        {
          title: "Lei Estadual nº 13.466/2000",
          desc: "Dispõe sobre a proteção ao consumidor no Estado de Minas Gerais.",
        },
        {
          title: "Lei Estadual nº 15.175/2004",
          desc: "Regula o atendimento prioritário em estabelecimentos estaduais.",
        },
      ],
      procon: "PROCON-MG: 3916-9220 | www.procon.mg.gov.br",
      extra: "",
    },
    RJ: {
      name: "Estado do Rio de Janeiro",
      laws: [
        {
          title: "Lei Estadual nº 5.687/2010",
          desc: "Estabelece normas de proteção e defesa do consumidor no Estado do RJ.",
        },
        {
          title: "Lei Estadual nº 4.611/2005",
          desc: "Dispõe sobre o atendimento prioritário a pessoas com necessidades especiais.",
        },
      ],
      procon: "PROCON-RJ: 151 | www.procon.rj.gov.br",
      extra: "",
    },
    PR: {
      name: "Estado do Paraná",
      laws: [
        {
          title: "Lei Estadual nº 14.861/2005",
          desc: "Institui o Código Estadual do Consumidor.",
        },
        {
          title: "Lei Estadual nº 15.229/2006",
          desc: "Dispõe sobre atendimento prioritário no Paraná.",
        },
      ],
      procon: "PROCON-PR: (41) 3313-6565 | www.procon.pr.gov.br",
      extra: "",
    },
    SC: {
      name: "Estado de Santa Catarina",
      laws: [
        {
          title: "Lei Estadual nº 13.339/2005",
          desc: "Código Estadual do Consumidor de Santa Catarina.",
        },
      ],
      procon: "PROCON-SC: (48) 3665-3027 | www.procon.sc.gov.br",
      extra: "",
    },
    RS: {
      name: "Estado do Rio Grande do Sul",
      laws: [
        {
          title: "Lei Estadual nº 11.800/2002",
          desc: "Institui o Código Estadual de Proteção e Defesa do Consumidor do RS.",
        },
      ],
      procon: "PROCON-RS: 151 | www.procon.rs.gov.br",
      extra: "",
    },
  },

  cities: {
    SP: [
      "São Paulo",
      "Campinas",
      "Guarulhos",
      "Santo André",
      "Sorocaba",
      "São Bernardo do Campo",
    ],
    MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora"],
    RJ: ["Rio de Janeiro", "Niterói", "Duque de Caxias", "Nova Iguaçu"],
    PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa"],
    SC: ["Florianópolis", "Joinville", "Blumenau", "Chapecó"],
    RS: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Santa Maria"],
  },

  units: {
    "São Paulo": [
      "MI Brasil Centro",
      "MI Brasil Paulista",
      "MI Brasil Moema",
      "MI Brasil Pinheiros",
    ],
    Campinas: ["MI Brasil Campinas Shopping", "MI Brasil Campinas Norte"],
    Guarulhos: ["MI Brasil Guarulhos Centro", "MI Brasil Cumbica"],
    "Santo André": ["MI Brasil Santo André Plaza"],
    Sorocaba: ["MI Brasil Sorocaba Shopping"],
    "São Bernardo do Campo": ["MI Brasil SBC"],
    "Belo Horizonte": [
      "MI Brasil BH Centro",
      "MI Brasil Savassi",
      "MI Brasil Buritis",
    ],
    Uberlândia: ["MI Brasil Uberlândia Centro"],
    Contagem: ["MI Brasil Contagem"],
    "Juiz de Fora": ["MI Brasil JF Shopping"],
    "Rio de Janeiro": [
      "MI Brasil Centro RJ",
      "MI Brasil Barra da Tijuca",
      "MI Brasil Tijuca",
    ],
    Niterói: ["MI Brasil Niterói Centro"],
    "Duque de Caxias": ["MI Brasil Duque de Caxias"],
    "Nova Iguaçu": ["MI Brasil Nova Iguaçu Shopping"],
    Curitiba: [
      "MI Brasil Curitiba Centro",
      "MI Brasil Água Verde",
      "MI Brasil Batel",
    ],
    Londrina: ["MI Brasil Londrina Norte", "MI Brasil Londrina Sul"],
    Maringá: ["MI Brasil Maringá Shopping"],
    "Ponta Grossa": ["MI Brasil Ponta Grossa"],
    Florianópolis: ["MI Brasil Floripa Centro", "MI Brasil Beiramar"],
    Joinville: ["MI Brasil Joinville Norte", "MI Brasil Joinville Sul"],
    Blumenau: ["MI Brasil Blumenau Centro"],
    Chapecó: ["MI Brasil Chapecó"],
    "Porto Alegre": [
      "MI Brasil POA Centro",
      "MI Brasil POA Moinhos",
      "MI Brasil POA Sul",
    ],
    "Caxias do Sul": ["MI Brasil Caxias Shopping"],
    Pelotas: ["MI Brasil Pelotas"],
    "Santa Maria": ["MI Brasil Santa Maria Centro"],
  },

  unitInfo: {
    default: {
      hours: "Segunda a Sábado: 9h às 21h | Domingo: 11h às 19h",
      phone: "0800 707 0000",
      address: "Consulte endereço completo no app ou site oficial.",
      manager: "Gerência disponível de segunda a sexta, das 9h às 18h.",
      parking: "Estacionamento gratuito por 2h com compra acima de R$ 50.",
    },
  },

  contacts: [
    {
      icon: "phone",
      label: "SAC",
      value: "0800 707 0000",
      desc: "Gratuito · 24 horas por dia",
    },
    {
      icon: "chat",
      label: "Chat Online",
      value: "mibrasil.com.br/chat",
      desc: "Seg a Sáb, 8h às 20h",
    },
    {
      icon: "file",
      label: "E-mail",
      value: "sac@mibrasil.com.br",
      desc: "Resposta em até 48h úteis",
    },
    {
      icon: "shield",
      label: "Ouvidoria",
      value: "0800 707 0001",
      desc: "Para casos não resolvidos pelo SAC",
    },
    {
      icon: "lock",
      label: "DPO / LGPD",
      value: "dpo@mibrasil.com.br",
      desc: "Proteção de dados pessoais",
    },
    {
      icon: "bell",
      label: "Emergências",
      value: "190 · 192 · 193",
      desc: "Polícia · SAMU · Bombeiros",
    },
  ],
};

/* ─────────────────────────────────────────
   APP STATE
───────────────────────────────────────── */
const State = {
  currentScreen: 'home',
  history: [],
  currentThemeId: null,
  currentModuleId: null,
  searchDebounce: null
};

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function $(id) { return document.getElementById(id); }

function svgUse(id, cls = '') {
  return `<svg class="${cls}" aria-hidden="true"><use href="#icon-${id}"/></svg>`;
}

function createRipple(e, el) {
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2;
  const x = (e.clientX || rect.left + rect.width / 2) - rect.left - size / 2;
  const y = (e.clientY || rect.top + rect.height / 2) - rect.top - size / 2;
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
  el.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}

function getTheme(id) {
  return DATA.themes.find(t => t.id === id);
}

function getModule(themeId, moduleId) {
  const theme = getTheme(themeId);
  return theme ? theme.modules.find(m => m.id === moduleId) : null;
}

/* ─────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────── */
function navigateTo(screenId, pushHistory = true) {
  const current = document.querySelector('.screen.active');
  const next = $(`screen-${screenId}`);
  if (!next || current === next) return;

  if (pushHistory && State.currentScreen) {
    State.history.push(State.currentScreen);
  }

  if (current) current.classList.remove('active');
  next.classList.add('active');

  State.currentScreen = screenId;

  const scrollEl = next.querySelector('.screen-scroll');
  if (scrollEl) {
    // Force reflow so CSS animation re-triggers on same screen
    void scrollEl.offsetWidth;
    scrollEl.scrollTop = 0;
  }

  updateBottomNav(screenId);
  updateDrawerNav(screenId);
}

function goBack() {
  if (State.history.length === 0) {
    navigateTo('home', false);
    return;
  }
  const prev = State.history.pop();
  navigateTo(prev, false);
}

function updateBottomNav(screenId) {
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    const nav = btn.dataset.nav;
    const active = (nav === screenId) ||
      (nav === 'home' && (screenId === 'theme' || screenId === 'content'));
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-current', active ? 'page' : 'false');
  });
}

function updateDrawerNav(screenId) {
  document.querySelectorAll('.drawer-nav-item').forEach(btn => {
    const s = btn.dataset.screen;
    const active = s === screenId || (s === 'home' && screenId === 'theme') || (s === 'home' && screenId === 'content');
    btn.classList.toggle('active', active);
  });
}

/* ─────────────────────────────────────────
   DRAWER
───────────────────────────────────────── */
function openDrawer() {
  const drawer = $('drawer');
  const overlay = $('drawer-overlay');
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  overlay.classList.add('visible');
  $('hamburger-btn') && $('hamburger-btn').setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  $('drawer-close-btn').focus();
}

function closeDrawer() {
  const drawer = $('drawer');
  const overlay = $('drawer-overlay');
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  overlay.classList.remove('visible');
  $('hamburger-btn') && $('hamburger-btn').setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* ─────────────────────────────────────────
   RENDER: HOME GRID
───────────────────────────────────────── */
function renderHomeGrid() {
  const grid = $('home-grid');
  if (!grid) return;
  grid.innerHTML = DATA.themes.map(theme => `
    <button
      class="home-card"
      style="background: linear-gradient(135deg, ${theme.color}ee, ${theme.color})"
      data-theme="${theme.id}"
      role="listitem"
      aria-label="${theme.title}"
    >
      <span class="home-card-icon">${svgUse(theme.icon)}</span>
      <span class="home-card-title">${theme.title}</span>
    </button>
  `).join('');

  grid.querySelectorAll('.home-card').forEach(card => {
    card.addEventListener('click', e => {
      createRipple(e, card);
      setTimeout(() => openTheme(card.dataset.theme), 120);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openTheme(card.dataset.theme);
      }
    });
  });
}

/* ─────────────────────────────────────────
   RENDER: THEME SCREEN
───────────────────────────────────────── */
function openTheme(themeId) {
  const theme = getTheme(themeId);
  if (!theme) return;
  State.currentThemeId = themeId;

  if (themeId === 'atendimento-prioritario' || themeId === 'privacidade-lgpd') {
    navigateTo(themeId);
    return;
  }

  // Header color
  $('theme-header').style.background = theme.color;

  // Hero
  $('theme-hero-icon').innerHTML = `
    <div style="width:64px;height:64px;background:${theme.color};border-radius:50%;display:flex;align-items:center;justify-content:center">
      ${svgUse(theme.icon)}
    </div>`;
  $('theme-hero-title').textContent = theme.title;
  $('theme-hero-desc').textContent = theme.description;

  // Modules list
  const list = $('modules-list');
  list.innerHTML = theme.modules.map(mod => `
    <button class="module-card" data-module="${mod.id}" role="listitem" aria-label="${mod.title}">
      <div class="module-icon-wrap" style="background:${theme.color}">
        ${svgUse(mod.icon)}
      </div>
      <div class="module-info">
        <div class="module-title">${mod.title}</div>
        <div class="module-desc">${mod.description}</div>
      </div>
      <span class="module-arrow">${svgUse('arrow-right', 'module-arrow')}</span>
    </button>
  `).join('');

  list.querySelectorAll('.module-card').forEach(card => {
    card.addEventListener('click', e => {
      createRipple(e, card);
      setTimeout(() => openContent(themeId, card.dataset.module), 100);
    });
  });

  navigateTo('theme');
}

/* ─────────────────────────────────────────
   RENDER: CONTENT SCREEN
───────────────────────────────────────── */
function openContent(themeId, moduleId) {
  const theme = getTheme(themeId);
  const mod = getModule(themeId, moduleId);
  if (!theme || !mod) return;
  State.currentModuleId = moduleId;

  // Hero
  const heroIcon = $('content-hero-icon');
  heroIcon.style.background = theme.color;
  heroIcon.innerHTML = svgUse(mod.icon);
  $('content-hero-title').textContent = mod.title;
  $('content-hero-desc').textContent = mod.description;

  // Reset tabs
  switchTab('general');

  // Hide tabs for specific modules
  const tabsContainer = document.querySelector('.tabs-container');
  if (tabsContainer) {
    const hiddenTabsModules = ['aviso-privacidade', 'regras-seguranca', 'contatos-procon', 'codigo-defesa'];
    tabsContainer.style.display = hiddenTabsModules.includes(moduleId) ? 'none' : '';
  }

  // General content
  renderGeneralContent(mod.general);

  // Reset state selects
  const stateSelect = $('state-select');
  stateSelect.value = '';
  $('state-content').innerHTML = '';

  const cityStateSelect = $('city-state-select');
  cityStateSelect.value = '';
  $('city-select-wrapper').style.display = 'none';
  $('unit-select-wrapper').style.display = 'none';
  $('city-content').innerHTML = '';

  navigateTo('content');
}

function renderGeneralContent(general) {
  const container = $('general-content');

  if (general.customHtml) {
    container.innerHTML = general.customHtml;
    return;
  }

  container.innerHTML = `
    <h2 class="card-section-title">${general.title}</h2>
    <p class="card-text">${general.text}</p>
    <div class="check-list">
      ${general.items ? general.items.map(item => `
        <div class="check-item">
          <div class="check-icon">${svgUse('check')}</div>
          <span>${item}</span>
        </div>
      `).join('') : ''}
    </div>
    <div class="alert-card">
      ${svgUse('alert', 'alert-icon')}
      <p>Em caso de dúvidas ou descumprimento, entre em contato com nossos canais oficiais.</p>
    </div>
  `;
}

/* ─────────────────────────────────────────
   TABS
───────────────────────────────────────── */
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const active = btn.dataset.tab === tabId;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active);
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-panel-${tabId}`);
  });
}

/* ─────────────────────────────────────────
   STATE SELECT
───────────────────────────────────────── */
function populateStateSelects() {
  const opts = DATA.states.map(s => `<option value="${s.code}">${s.name} (${s.code})</option>`).join('');
  $('state-select').innerHTML = `<option value="">Selecione seu estado</option>${opts}`;
  $('city-state-select').innerHTML = `<option value="">Selecione o estado</option>${opts}`;
}

function renderStateContent(code) {
  const container = $('state-content');
  const info = DATA.stateContent[code];
  if (!info) {
    container.innerHTML = `
      <div class="state-block">
        <p class="card-text">Informações estaduais para <strong>${code}</strong> em atualização. Consulte o PROCON do seu estado para orientações locais.</p>
      </div>`;
    return;
  }

  container.innerHTML = `
    <div class="state-block">
      <h3 class="state-block-title">${info.name}</h3>
      ${info.laws.map(law => `
        <div class="law-item">
          <div class="law-title">${law.title} <span class="local-badge">${svgUse('map-pin')} Aplicável</span></div>
          <div class="law-desc">${law.desc}</div>
        </div>
      `).join('')}
      ${info.extra ? `<p class="card-text" style="margin-top:12px">${info.extra}</p>` : ''}
    </div>
    <div class="alert-card">
      ${svgUse('phone', 'alert-icon')}
      <p>${info.procon}</p>
    </div>
  `;
}

/* ─────────────────────────────────────────
   CITY & UNIT SELECT
───────────────────────────────────────── */
function populateCitySelect(stateCode) {
  const cities = DATA.cities[stateCode] || [];
  const citySelect = $('city-select');
  citySelect.innerHTML = `<option value="">Selecione a cidade</option>` +
    cities.map(c => `<option value="${c}">${c}</option>`).join('');

  $('city-select-wrapper').style.display = cities.length ? 'block' : 'none';
  $('unit-select-wrapper').style.display = 'none';
  $('city-content').innerHTML = '';
}

function populateUnitSelect(city) {
  const units = DATA.units[city] || [];
  const unitSelect = $('unit-select');
  unitSelect.innerHTML = `<option value="">Selecione a loja</option>` +
    units.map(u => `<option value="${u}">${u}</option>`).join('');
  $('unit-select-wrapper').style.display = units.length ? 'block' : 'none';
  $('city-content').innerHTML = '';
}

function renderUnitContent(unitName) {
  const info = DATA.unitInfo.default;
  $('city-content').innerHTML = `
    <h3 class="state-block-title" style="margin-bottom:14px">${unitName}</h3>
    <div class="unit-info-grid">
      <div class="unit-info-item">
        <div class="unit-info-icon">${svgUse('clock')}</div>
        <div>
          <div class="unit-info-label">Horário de Funcionamento</div>
          <div class="unit-info-value">${info.hours}</div>
        </div>
      </div>
      <div class="unit-info-item">
        <div class="unit-info-icon">${svgUse('phone')}</div>
        <div>
          <div class="unit-info-label">Telefone</div>
          <div class="unit-info-value">${info.phone}</div>
        </div>
      </div>
      <div class="unit-info-item">
        <div class="unit-info-icon">${svgUse('map-pin')}</div>
        <div>
          <div class="unit-info-label">Endereço</div>
          <div class="unit-info-value">${info.address}</div>
        </div>
      </div>
      <div class="unit-info-item">
        <div class="unit-info-icon">${svgUse('user')}</div>
        <div>
          <div class="unit-info-label">Gerência</div>
          <div class="unit-info-value">${info.manager}</div>
        </div>
      </div>
      <div class="unit-info-item">
        <div class="unit-info-icon">${svgUse('map-pin')}</div>
        <div>
          <div class="unit-info-label">Estacionamento</div>
          <div class="unit-info-value">${info.parking}</div>
        </div>
      </div>
    </div>
    <div class="alert-card" style="margin-top:14px">
      ${svgUse('alert', 'alert-icon')}
      <p>Informações desta unidade atualizadas centralmente. Em caso de divergência, fale com a gerência local.</p>
    </div>
  `;
}

/* ─────────────────────────────────────────
   SEARCH
───────────────────────────────────────── */
function buildSearchIndex() {
  const index = [];
  DATA.themes.forEach(theme => {
    theme.modules.forEach(mod => {
      index.push({
        themeId: theme.id,
        moduleId: mod.id,
        themeTitle: theme.title,
        themeColor: theme.color,
        title: mod.title,
        summary: mod.description,
        keywords: `${theme.title} ${mod.title} ${mod.description} ${mod.general.items ? mod.general.items.join(' ') : ''}`.toLowerCase()
      });
    });
  });
  return index;
}

const SEARCH_INDEX = buildSearchIndex();

function populateFilterSelect() {
  const sel = $('filter-select');
  sel.innerHTML = `<option value="">Todos os temas</option>` +
    DATA.themes.map(t => `<option value="${t.id}">${t.title}</option>`).join('');
}

function performSearch() {
  const query = $('search-input').value.trim().toLowerCase();
  const filterTheme = $('filter-select').value;
  const container = $('search-results');

  let results = SEARCH_INDEX;
  if (filterTheme) results = results.filter(r => r.themeId === filterTheme);
  if (query.length >= 2) results = results.filter(r => r.keywords.includes(query));

  if (results.length === 0) {
    container.innerHTML = `
      <div class="search-empty">
        ${svgUse('search')}
        <p>Nenhum resultado encontrado.</p>
        <p class="search-empty-tip">Tente outros termos ou limpe os filtros.</p>
      </div>`;
    return;
  }

  container.innerHTML = results.map(r => `
    <button
      class="search-result-card"
      data-theme="${r.themeId}"
      data-module="${r.moduleId}"
      aria-label="${r.title} – ${r.themeTitle}"
    >
      <span class="result-color-dot" style="background:${r.themeColor}"></span>
      <div class="result-info">
        <div class="result-category">${r.themeTitle}</div>
        <div class="result-title">${highlight(r.title, query)}</div>
        <div class="result-summary">${r.summary}</div>
      </div>
      ${svgUse('arrow-right', 'result-arrow')}
    </button>
  `).join('');

  container.querySelectorAll('.search-result-card').forEach(card => {
    card.addEventListener('click', () => {
      State.history = ['search'];
      openTheme(card.dataset.theme);
      setTimeout(() => openContent(card.dataset.theme, card.dataset.module), 350);
    });
  });
}

function highlight(text, query) {
  if (!query || query.length < 2) return text;
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:#FFF176;border-radius:2px;padding:0 1px">$1</mark>');
}

function showInitialSearch() {
  const container = $('search-results');
  const themes = DATA.themes.slice(0, 4);
  container.innerHTML = `
    <p style="font-size:0.78rem;color:#6B7280;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">Temas em destaque</p>
    ${themes.map(t => `
      <button class="search-theme-card" data-theme="${t.id}">
        <div class="search-theme-icon-wrap" style="background:${t.color}">
          ${svgUse(t.icon)}
        </div>
        <div style="flex:1;text-align:left">
          <div style="font-size:.87rem;font-weight:600;color:#1F2937">${t.title}</div>
          <div style="font-size:.74rem;color:#6B7280;margin-top:2px">${t.modules.length} módulos disponíveis</div>
        </div>
        ${svgUse('arrow-right', 'result-arrow')}
      </button>
    `).join('')}
  `;
  container.querySelectorAll('.search-theme-card').forEach(card => {
    card.addEventListener('click', () => {
      State.history = ['search'];
      openTheme(card.dataset.theme);
    });
  });
}

/* ─────────────────────────────────────────
   CONTACT SCREEN
───────────────────────────────────────── */
function renderContacts() {
  const container = $('contact-cards');
  if (!container) return;
  container.innerHTML = DATA.contacts.map(c => `
    <button class="contact-card" aria-label="${c.label}: ${c.value}">
      <div class="contact-card-icon">${svgUse(c.icon)}</div>
      <div class="contact-card-info">
        <div class="contact-card-label">${c.label}</div>
        <div class="contact-card-value">${c.value}</div>
        <div class="contact-card-desc">${c.desc}</div>
      </div>
      ${svgUse('arrow-right', 'result-arrow')}
    </button>
  `).join('');
}

/* ─────────────────────────────────────────
   EVENT LISTENERS
───────────────────────────────────────── */
function bindEvents() {

  // Hamburger buttons
  ['hamburger-btn', 'hamburger-btn-search'].forEach(id => {
    const btn = $(id);
    if (btn) btn.addEventListener('click', openDrawer);
  });

  // Drawer close
  $('drawer-close-btn').addEventListener('click', closeDrawer);
  $('drawer-overlay').addEventListener('click', closeDrawer);

  // Drawer nav items
  document.querySelectorAll('.drawer-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const screen = btn.dataset.screen;
      closeDrawer();
      if (screen === 'themes-drawer') {
        navigateTo('home');
      } else if (screen === 'about') {
        State.history.push(State.currentScreen);
        navigateTo('about', false);
      } else {
        navigateTo(screen);
      }
    });
  });

  // Bottom nav
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = btn.dataset.nav;
      State.history = [];
      navigateTo(nav, false);
      if (nav === 'search') showInitialSearch();
    });
  });

  // Back buttons
  $('theme-back-btn').addEventListener('click', goBack);
  $('content-back-btn').addEventListener('click', goBack);
  $('contact-back-btn').addEventListener('click', goBack);
  $('about-back-btn').addEventListener('click', goBack);
  $('atendimento-back-btn').addEventListener('click', goBack);
  $('privacidade-back-btn').addEventListener('click', goBack);

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // State select (content screen)
  $('state-select').addEventListener('change', e => {
    const code = e.target.value;
    if (code) renderStateContent(code);
    else $('state-content').innerHTML = '';
  });

  // City-state select
  $('city-state-select').addEventListener('change', e => {
    const code = e.target.value;
    if (code) populateCitySelect(code);
    else {
      $('city-select-wrapper').style.display = 'none';
      $('unit-select-wrapper').style.display = 'none';
      $('city-content').innerHTML = '';
    }
  });

  // City select
  $('city-select').addEventListener('change', e => {
    const city = e.target.value;
    if (city) populateUnitSelect(city);
    else {
      $('unit-select-wrapper').style.display = 'none';
      $('city-content').innerHTML = '';
    }
  });

  // Unit select
  $('unit-select').addEventListener('change', e => {
    const unit = e.target.value;
    if (unit) renderUnitContent(unit);
    else $('city-content').innerHTML = '';
  });

  // Search input
  $('search-input').addEventListener('input', () => {
    clearTimeout(State.searchDebounce);
    State.searchDebounce = setTimeout(performSearch, 280);
  });

  // Filter select
  $('filter-select').addEventListener('change', performSearch);

  // Atendimento Prioritario Logic
  function toggleElemento(el) {
      const content = el.nextElementSibling;
      const seta = el.querySelector('.seta');
      const expanded = el.getAttribute('aria-expanded') === 'true';
      content.style.display = expanded ? 'none' : 'block';
      el.setAttribute('aria-expanded', !expanded);
      seta.classList.toggle('ativa', !expanded);
  }

  function aplicarListenersAtendimento() {
      document.querySelectorAll('#estadosContainerAtendimento .estados-question, #estadosContainerAtendimento .cidade-question').forEach(el => {
          el.onclick = () => toggleElemento(el);
          el.onkeydown = (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleElemento(el);
              }
          };
      });
  }

  aplicarListenersAtendimento();

  const searchAtendimento = $('searchInputAtendimento');
  if (searchAtendimento) {
      searchAtendimento.addEventListener('input', () => {
          const termo = searchAtendimento.value.toLowerCase().trim();
          const estados = document.querySelectorAll('#estadosContainerAtendimento .estados-item');

          if (termo === '') {
              estados.forEach(estado => {
                  estado.style.display = 'block';
                  const estadoQuestion = estado.querySelector('.estados-question');
                  const estadoAnswer = estado.querySelector('.estados-answer');
                  const seta = estadoQuestion.querySelector('.seta');

                  estadoAnswer.style.display = 'none';
                  estadoQuestion.setAttribute('aria-expanded', false);
                  if(seta) seta.classList.remove('ativa');

                  estado.querySelectorAll('.cidade').forEach(cidade => {
                      cidade.style.display = 'block';
                  });
              });
          } else {
              estados.forEach(estado => {
                  const nomeEstado = estado.dataset.estado.toLowerCase();
                  const cidades = estado.querySelectorAll('.cidade');
                  let estadoVisivel = false;

                  cidades.forEach(cidade => {
                      const nomeCidade = cidade.dataset.cidade.toLowerCase();
                      const corresponde = nomeCidade.includes(termo) || nomeEstado.includes(termo);
                      cidade.style.display = corresponde ? 'block' : 'none';
                      if (corresponde) estadoVisivel = true;
                  });

                  estado.style.display = estadoVisivel ? 'block' : 'none';
                  const estadoQuestion = estado.querySelector('.estados-question');
                  const estadoAnswer = estado.querySelector('.estados-answer');
                  const seta = estadoQuestion.querySelector('.seta');

                  estadoAnswer.style.display = estadoVisivel ? 'block' : 'none';
                  estadoQuestion.setAttribute('aria-expanded', estadoVisivel);
                  if(seta) seta.classList.toggle('ativa', estadoVisivel);
              });
          }
          aplicarListenersAtendimento();
      });
  }

  // ─── PRIVACIDADE E LGPD – Busca por shopping/cidade/estado ──────────────
  const PRIV_DATA = [
    // ── ZURY ─────────────────────────────────────────────────────────────
    { shopping: 'Shopping Center Norte',   cidade: 'São Paulo',          estado: 'São Paulo',       uf: 'SP', aviso: 'Zury', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-zury', label: 'Aviso de Privacidade – Zury' },
    { shopping: 'Shopping Aricanduva',     cidade: 'São Paulo',          estado: 'São Paulo',       uf: 'SP', aviso: 'Zury', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-zury', label: 'Aviso de Privacidade – Zury' },
    { shopping: 'Shopping Vitória',        cidade: 'Serra',              estado: 'Espírito Santo',  uf: 'ES', aviso: 'Zury', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-zury', label: 'Aviso de Privacidade – Zury' },
    { shopping: 'Shopping Campo Grande',   cidade: 'Rio de Janeiro',     estado: 'Rio de Janeiro',  uf: 'RJ', aviso: 'Zury', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-zury', label: 'Aviso de Privacidade – Zury' },
    { shopping: 'Shopping Vila Velha',     cidade: 'Vila Velha',         estado: 'Espírito Santo',  uf: 'ES', aviso: 'Zury', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-zury', label: 'Aviso de Privacidade – Zury' },
    { shopping: 'Shopping União de Osasco',cidade: 'Osasco',             estado: 'São Paulo',       uf: 'SP', aviso: 'Zury', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-zury', label: 'Aviso de Privacidade – Zury' },

    // ── AWA ──────────────────────────────────────────────────────────────
    { shopping: 'Shopping Ibirapuera',             cidade: 'São Paulo',          estado: 'São Paulo',        uf: 'SP', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Shopping Recife',                 cidade: 'Recife',             estado: 'Pernambuco',       uf: 'PE', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'North Shopping Fortaleza',        cidade: 'Fortaleza',          estado: 'Ceará',            uf: 'CE', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Iguatemi Bosque Fortaleza',       cidade: 'Fortaleza',          estado: 'Ceará',            uf: 'CE', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Shopping Iguatemi Porto Alegre',  cidade: 'Porto Alegre',       estado: 'Rio Grande do Sul', uf: 'RS', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Shopping Estação BH',             cidade: 'Belo Horizonte',     estado: 'Minas Gerais',     uf: 'MG', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Shopping Parangaba',              cidade: 'Fortaleza',          estado: 'Ceará',            uf: 'CE', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'ParkShopping Brasília',           cidade: 'Brasília',           estado: 'Distrito Federal', uf: 'DF', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Grand Plaza Shopping',            cidade: 'Santo André',        estado: 'São Paulo',        uf: 'SP', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Shopping Pátio Maceió',           cidade: 'Maceió',             estado: 'Alagoas',          uf: 'AL', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Maceió Shopping',                 cidade: 'Maceió',             estado: 'Alagoas',          uf: 'AL', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Shopping da Ilha',                cidade: 'São Luís',           estado: 'Maranhão',         uf: 'MA', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Litoral Plaza Shopping',          cidade: 'Caucaia',            estado: 'Ceará',            uf: 'CE', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Boulevard Shopping Belém',        cidade: 'Belém',              estado: 'Pará',             uf: 'PA', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Shopping Tacaruna',               cidade: 'Recife',             estado: 'Pernambuco',       uf: 'PE', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Midway Mall',                     cidade: 'Natal',              estado: 'Rio Grande do Norte', uf: 'RN', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Shopping Jardins',                cidade: 'Aracaju',            estado: 'Sergipe',          uf: 'SE', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Shopping Rio Poty',               cidade: 'Teresina',           estado: 'Piauí',            uf: 'PI', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Manaíra Shopping',                cidade: 'João Pessoa',        estado: 'Paraíba',          uf: 'PB', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Partage Shopping',                cidade: 'Campina Grande',     estado: 'Paraíba',          uf: 'PB', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Sumaúma Park Shopping',           cidade: 'Manaus',             estado: 'Amazonas',         uf: 'AM', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },
    { shopping: 'Manauara Shopping',               cidade: 'Manaus',             estado: 'Amazonas',         uf: 'AM', aviso: 'awa', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-awa', label: 'Aviso de Privacidade – awa' },

    // ── GIFU ─────────────────────────────────────────────────────────────
    { shopping: 'Morumbi Shopping',                       cidade: 'São Paulo',           estado: 'São Paulo',  uf: 'SP', aviso: 'Gifu', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-gifu', label: 'Aviso de Privacidade – Gifu' },
    { shopping: 'Shopping Eldorado',                      cidade: 'São Paulo',           estado: 'São Paulo',  uf: 'SP', aviso: 'Gifu', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-gifu', label: 'Aviso de Privacidade – Gifu' },
    { shopping: 'Salvador Shopping',                      cidade: 'Salvador',            estado: 'Bahia',      uf: 'BA', aviso: 'Gifu', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-gifu', label: 'Aviso de Privacidade – Gifu' },
    { shopping: 'Shopping da Bahia',                      cidade: 'Salvador',            estado: 'Bahia',      uf: 'BA', aviso: 'Gifu', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-gifu', label: 'Aviso de Privacidade – Gifu' },
    { shopping: 'Shopping Metrópole',                     cidade: 'São Bernardo do Campo', estado: 'São Paulo', uf: 'SP', aviso: 'Gifu', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-gifu', label: 'Aviso de Privacidade – Gifu' },
    { shopping: 'Shopping Interlagos',                    cidade: 'São Paulo',           estado: 'São Paulo',  uf: 'SP', aviso: 'Gifu', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-gifu', label: 'Aviso de Privacidade – Gifu' },
    { shopping: 'Boulevard Shopping Feira de Santana',    cidade: 'Feira de Santana',    estado: 'Bahia',      uf: 'BA', aviso: 'Gifu', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-gifu', label: 'Aviso de Privacidade – Gifu' },
    { shopping: 'Novo Shopping Center Ribeirão Preto',    cidade: 'Ribeirão Preto',      estado: 'São Paulo',  uf: 'SP', aviso: 'Gifu', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-gifu', label: 'Aviso de Privacidade – Gifu' },
    { shopping: 'Shopping Tamboré',                       cidade: 'Santana de Parnaíba', estado: 'São Paulo',  uf: 'SP', aviso: 'Gifu', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-gifu', label: 'Aviso de Privacidade – Gifu' },
    { shopping: 'Maxi Shopping Jundiaí',                  cidade: 'Jundiaí',             estado: 'São Paulo',  uf: 'SP', aviso: 'Gifu', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-gifu', label: 'Aviso de Privacidade – Gifu' },
    { shopping: 'Mogi Shopping',                          cidade: 'Mogi das Cruzes',     estado: 'São Paulo',  uf: 'SP', aviso: 'Gifu', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-gifu', label: 'Aviso de Privacidade – Gifu' },
    { shopping: 'Taubaté Shopping',                       cidade: 'Taubaté',             estado: 'São Paulo',  uf: 'SP', aviso: 'Gifu', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-gifu', label: 'Aviso de Privacidade – Gifu' },

    // ── FUKUI ────────────────────────────────────────────────────────────
    { shopping: 'Barra Shopping',        cidade: 'Rio de Janeiro', estado: 'Rio de Janeiro', uf: 'RJ', aviso: 'fukui', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-fukui', label: 'Aviso de Privacidade – fukui' },
    { shopping: 'Norte Shopping',        cidade: 'Rio de Janeiro', estado: 'Rio de Janeiro', uf: 'RJ', aviso: 'fukui', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-fukui', label: 'Aviso de Privacidade – fukui' },
    { shopping: 'Plaza Shopping Niterói',cidade: 'Niterói',        estado: 'Rio de Janeiro', uf: 'RJ', aviso: 'fukui', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-fukui', label: 'Aviso de Privacidade – fukui' },

    // ── AOMORI ───────────────────────────────────────────────────────────
    { shopping: 'Bangú Shopping',        cidade: 'Rio de Janeiro', estado: 'Rio de Janeiro', uf: 'RJ', aviso: 'aomori', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-aomori', label: 'Aviso de Privacidade – aomori' },
    { shopping: 'Madureira Shopping',    cidade: 'Rio de Janeiro', estado: 'Rio de Janeiro', uf: 'RJ', aviso: 'aomori', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-aomori', label: 'Aviso de Privacidade – aomori' },
    { shopping: 'Carioca Shopping',      cidade: 'Rio de Janeiro', estado: 'Rio de Janeiro', uf: 'RJ', aviso: 'aomori', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-aomori', label: 'Aviso de Privacidade – aomori' },
    { shopping: 'Shopping Grande Rio',   cidade: 'Duque de Caxias',estado: 'Rio de Janeiro', uf: 'RJ', aviso: 'aomori', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-aomori', label: 'Aviso de Privacidade – aomori' },
    { shopping: 'Shopping Nova Iguaçu',  cidade: 'Nova Iguaçu',   estado: 'Rio de Janeiro', uf: 'RJ', aviso: 'aomori', url: 'https://www.mibrasil.com.br/aviso-de-privacidade-aomori', label: 'Aviso de Privacidade – aomori' },
  ];


  function privHighlight(text, query) {
    if (!query) return text;
    const esc = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp(`(${esc})`, 'gi'),
      '<mark class="priv-highlight">$1</mark>');
  }

  function renderPrivResults(query) {
    const elEmpty    = $('privResultsEmpty');
    const elResults  = $('privResultsList');
    const elNoResult = $('privNoResults');
    const q = (query || '').toLowerCase().trim();

    if (!q) {
      elEmpty.style.display   = '';
      elResults.style.display = 'none';
      elNoResult.style.display = 'none';
      return;
    }

    const matches = PRIV_DATA.filter(d =>
      d.shopping.toLowerCase().includes(q) ||
      d.cidade.toLowerCase().includes(q)   ||
      d.estado.toLowerCase().includes(q)   ||
      d.aviso.toLowerCase().includes(q)    ||
      d.uf.toLowerCase().includes(q)
    );

    if (!matches.length) {
      elEmpty.style.display   = 'none';
      elResults.style.display = 'none';
      elNoResult.style.display = '';
      return;
    }

    elEmpty.style.display   = 'none';
    elNoResult.style.display = 'none';
    elResults.style.display  = 'flex';

    elResults.innerHTML = `
      <p class="priv-result-count">${matches.length} resultado${matches.length > 1 ? 's' : ''} encontrado${matches.length > 1 ? 's' : ''}</p>
      ${matches.map((d, i) => `
        <div class="priv-card" style="animation-delay:${i * 0.05}s">
          <div class="priv-card-header">
            <span class="priv-card-badge priv-badge-uf">${d.uf}</span>
            <div class="priv-card-names">
              <div class="priv-card-shopping">${privHighlight(d.shopping, q)}</div>
              <div class="priv-card-location">${privHighlight(d.cidade, q)} · ${privHighlight(d.estado, q)}</div>
            </div>
          </div>
          <a href="${d.url}" target="_blank" rel="noopener" class="priv-card-link">
            <svg class="priv-card-link-ico" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Aviso de Privacidade
          </a>
        </div>
      `).join('')}
    `;
  }

  const privSearchInput = $('searchInputPrivacidade');
  const privClearBtn    = $('privSearchClearBtn');

  if (privSearchInput) {
    privSearchInput.addEventListener('input', () => {
      const q = privSearchInput.value;
      privClearBtn.style.display = q ? '' : 'none';
      renderPrivResults(q);
    });
  }

  if (privClearBtn) {
    privClearBtn.addEventListener('click', () => {
      privSearchInput.value = '';
      privClearBtn.style.display = 'none';
      renderPrivResults('');
      privSearchInput.focus();
    });
  }


  // Keyboard: Escape closes drawer
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Swipe-to-go-back (basic touch gesture)
  let touchStartX = 0;
  document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 80 && touchStartX < 40 && State.history.length) goBack();
  }, { passive: true });
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
function init() {
  renderHomeGrid();
  populateStateSelects();
  populateFilterSelect();
  renderContacts();
  showInitialSearch();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);
