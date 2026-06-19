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
      description:
        "Informações sobre atendimento ao cliente, trocas, devoluções e seus direitos nas compras.",
      modules: [
        {
          id: "trocas-devolucoes",
          icon: "refresh",
          title: "•	AVISO DE REGRAS DE SEGURANÇA SOBRE TRANSAÇÕES FINANCEIRAS",
          description:
            "Políticas e procedimentos para trocas e devoluções de produtos.",
          general: {
            title: "Trocas e Devoluções – Informações Nacionais",
            text: "Conheça as regras nacionais para trocas e devoluções de produtos em todas as nossas unidades, conforme o Código de Defesa do Consumidor.",
            items: [
              "Prazo de 7 dias para desistência (compras online)",
              "Vício aparente: 30 dias (produtos não duráveis)",
              "Vício aparente: 90 dias (produtos duráveis)",
              "Nota fiscal necessária para qualquer troca",
            ],
          },
        },
        {
          id: "atendimento-cliente",
          icon: "user",
          title: "Atendimento ao Cliente",
          description: "Canais e padrões de atendimento ao consumidor.",
          general: {
            title: "Padrão de Atendimento Nacional",
            text: "Nosso compromisso é oferecer atendimento ágil, respeitoso e eficiente em todas as unidades do Brasil.",
            items: [
              "Atendimento presencial em todas as unidades",
              "SAC 0800 disponível 24h",
              "Resposta a e-mails em até 48h úteis",
              "Chat online de segunda a sábado, 8h às 20h",
            ],
          },
        },
        {
          id: "prazo-entrega",
          icon: "clock",
          title: "Prazo de Entrega",
          description: "Informações sobre prazos e rastreamento de pedidos.",
          general: {
            title: "Prazos de Entrega",
            text: "Os prazos de entrega variam conforme a modalidade escolhida e a região de destino.",
            items: [
              "Entrega expressa: até 2 dias úteis (capitais)",
              "Entrega padrão: 3 a 7 dias úteis",
              "Retirada na loja: disponível no mesmo dia",
              "Rastreamento disponível em tempo real pelo app",
            ],
          },
        },
        {
          id: "reclamacoes",
          icon: "alert",
          title: "Reclamações",
          description: "Como registrar e acompanhar reclamações.",
          general: {
            title: "Canal de Reclamações",
            text: "Registre sua reclamação pelos canais oficiais. Nosso time entra em contato em até 5 dias úteis.",
            items: [
              "SAC: 0800 707 0000",
              "Ouvidoria: disponível para casos não resolvidos",
              "Procon: em caso de não resolução em 30 dias",
              "Reclame Aqui: @mibrasiloficial",
            ],
          },
        },
        {
          id: "garantia",
          icon: "shield",
          title: "Garantia do Produto",
          description: "Informações sobre garantia legal e contratual.",
          general: {
            title: "Garantias",
            text: "Todo produto possui garantia legal prevista pelo CDC, além de garantia contratual oferecida pelo fabricante.",
            items: [
              "Garantia legal: 90 dias (produtos duráveis)",
              "Garantia contratual: conforme certificado do fabricante",
              "Extensão de garantia disponível para compra",
              "Assistência técnica autorizada em todas as capitais",
            ],
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
          id: "coleta-dados",
          icon: "file",
          title: "Coleta de Dados",
          description: "Quais dados coletamos e como utilizamos.",
          general: {
            title: "Coleta e Uso de Dados",
            text: "Coletamos apenas os dados necessários para oferecer nossos serviços com qualidade, segurança e personalização.",
            items: [
              "Dados de identificação (nome, CPF, e-mail)",
              "Histórico de compras e preferências",
              "Dados de navegação em plataformas digitais",
              "Consentimento explícito para marketing",
            ],
          },
        },
        {
          id: "cameras",
          icon: "camera",
          title: "Monitoramento por Câmeras",
          description: "Uso de câmeras de segurança nas dependências da loja.",
          general: {
            title: "Câmeras de Segurança",
            text: "Nossas lojas utilizam câmeras de videomonitoramento para garantir a segurança de clientes, colaboradores e patrimônio.",
            items: [
              "Câmeras em operação 24 horas",
              "Gravações armazenadas por 30 dias",
              "Acesso restrito a equipe de segurança autorizada",
              "Uso exclusivo para fins de segurança",
            ],
          },
        },
        {
          id: "direitos-lgpd",
          icon: "user",
          title: "Seus Direitos (LGPD)",
          description: "Conheça seus direitos garantidos pela Lei 13.709/2018.",
          general: {
            title: "Direitos do Titular de Dados",
            text: "A LGPD garante ao titular dos dados uma série de direitos em relação ao tratamento de suas informações.",
            items: [
              "Acesso aos dados pessoais armazenados",
              "Correção de dados incompletos ou desatualizados",
              "Eliminação de dados desnecessários",
              "Portabilidade dos dados a outro fornecedor",
            ],
          },
        },
        {
          id: "cookies",
          icon: "wifi",
          title: "Cookies e Rastreamento",
          description:
            "Como utilizamos cookies em nossas plataformas digitais.",
          general: {
            title: "Política de Cookies",
            text: "Utilizamos cookies para melhorar sua experiência de navegação e personalizar conteúdos e ofertas.",
            items: [
              "Cookies essenciais: necessários para o funcionamento",
              "Cookies analíticos: para melhorar a experiência",
              "Cookies de marketing: para personalização de ofertas",
              "Você pode gerenciar suas preferências a qualquer momento",
            ],
          },
        },
        {
          id: "dpo",
          icon: "phone",
          title: "Contato do DPO",
          description: "Canal para questões relacionadas à proteção de dados.",
          general: {
            title: "Encarregado de Dados (DPO)",
            text: "Nosso Encarregado de Proteção de Dados (DPO) está disponível para esclarecer dúvidas e receber solicitações.",
            items: [
              "E-mail: dpo@mibrasil.com.br",
              "Prazo de resposta: até 15 dias úteis",
              "Solicitações de exclusão: até 30 dias",
              "Relatório de impacto disponível mediante solicitação",
            ],
          },
        },
      ],
    },
    {
      id: "atendimento-prioritario",
      title: "Atendimento Prioritário",
      color: "#9B59B6",
      icon: "user",
      description:
        "Regras e legislações que garantem atendimento preferencial a pessoas com necessidades especiais.",
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
      description:
        "Informações gerais sobre serviços, comodidades e canais da loja.",
      modules: [
        {
          id: "nota-fiscal",
          icon: "file",
          title: "Nota Fiscal",
          description: "Como solicitar e utilizar sua nota fiscal.",
          general: {
            title: "Nota Fiscal",
            text: "A nota fiscal é um documento obrigatório em toda compra e é essencial para garantir seus direitos como consumidor.",
            items: [
              "Emitida automaticamente em todas as compras",
              "Disponível em formato físico e eletrônico (NF-e)",
              "Necessária para trocas, devoluções e garantia",
              "Consulte sua NF-e em nfe.fazenda.gov.br",
            ],
          },
        },
        {
          id: "meios-pagamento",
          icon: "credit-card",
          title: "Meios de Pagamento",
          description: "Formas de pagamento aceitas em nossas lojas.",
          general: {
            title: "Pagamentos Aceitos",
            text: "Aceitamos diversas formas de pagamento para oferecer comodidade e flexibilidade aos nossos clientes.",
            items: [
              "Cartão de crédito: até 12x sem juros",
              "Cartão de débito e débito automático",
              "Pix: desconto especial de 5%",
              "Dinheiro e vale-presente",
            ],
          },
        },
        {
          id: "estacionamento",
          icon: "map-pin",
          title: "Estacionamento",
          description: "Informações sobre estacionamento das unidades.",
          general: {
            title: "Estacionamento",
            text: "Diversas unidades possuem estacionamento próprio ou conveniado para facilitar sua visita.",
            items: [
              "Vagas para clientes: gratuitas por 2h com compra",
              "Vagas para PcD: reservadas próximas à entrada",
              "Vagas para idosos: sinalizadas e reservadas",
              "Consulte disponibilidade em sua unidade local",
            ],
          },
        },
        {
          id: "wifi",
          icon: "wifi",
          title: "Wi-Fi da Loja",
          description: "Acesso à internet gratuita em nossas lojas.",
          general: {
            title: "Wi-Fi Gratuito",
            text: "Oferecemos Wi-Fi gratuito em nossas lojas para proporcionar uma experiência de compra mais conectada.",
            items: [
              "Rede: MI_BRASIL_GUEST",
              "Sem senha: abertura por cadastro simples",
              "Velocidade: até 50 Mbps",
              "Uso exclusivo para navegação pessoal",
            ],
          },
        },
        {
          id: "canais-oficiais",
          icon: "chat",
          title: "Canais Oficiais",
          description: "Canais digitais e físicos de atendimento.",
          general: {
            title: "Canais Oficiais MI Brasil",
            text: "Utilize apenas os canais oficiais para garantir segurança e qualidade no atendimento.",
            items: [
              "Site: www.mibrasil.com.br",
              "App: MI Brasil (iOS e Android)",
              "SAC: 0800 707 0000 (gratuito)",
              "Instagram: @mibrasiloficial",
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
      extra:
        "Município de São Paulo: Lei Municipal nº 14.485/2007 – Dispõe sobre o atendimento preferencial às pessoas que especifica.",
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
  container.innerHTML = `
    <h2 class="card-section-title">${general.title}</h2>
    <p class="card-text">${general.text}</p>
    <div class="check-list">
      ${general.items.map(item => `
        <div class="check-item">
          <div class="check-icon">${svgUse('check')}</div>
          <span>${item}</span>
        </div>
      `).join('')}
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
        keywords: `${theme.title} ${mod.title} ${mod.description} ${mod.general.items.join(' ')}`.toLowerCase()
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
        <div style="width:36px;height:36px;background:${t.color};border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
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
