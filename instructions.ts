const baseDados = {
  empresa: {
    identificacao: {
      nomeOficial: "ARS Eletrônica Industrial Ltda.",
      nomeComum: "ARS Eletrônica",
      termoDeBuscaUsuario: "Antenas Profissionais (APS)",
      contatoPrincipal: "+55 (11) 5523-9811",
      sede: "São Paulo, SP, Brasil",
      website: "https://arseletronica.com.br/",
    },
    certificacoes: {
      descricao:
        "A ARS Eletrônica possui diversas certificações que comprovam a qualidade e conformidade de nossos produtos com as normas e padrões nacionais e internacionais.",
      certificadosNacionais: [
        {
          nome: "Homologação ANATEL",
          descricao:
            "Todos os produtos da ARS Eletrônica são homologados pela Agência Nacional de Telecomunicações (ANATEL), garantindo conformidade com as regulamentações brasileiras de telecomunicações.",
          aplicacao:
            "Exigido para comercialização de equipamentos de comunicação no Brasil",
        },
        {
          nome: "ISO 9001:2015",
          descricao:
            "Certificação de Sistema de Gestão da Qualidade, demonstrando nosso compromisso com processos padronizados e melhoria contínua.",
          aplicacao:
            "Gestão de qualidade para todos os processos de fabricação",
        },
        {
          nome: "INMETRO",
          descricao:
            "Certificação do Instituto Nacional de Metrologia, Qualidade e Tecnologia para produtos específicos que requerem avaliação de conformidade.",
          aplicacao: "Produtos específicos conforme regulamentação",
        },
      ],
      certificadosInternacionais: [
        {
          nome: "CE (Conformité Européenne)",
          descricao:
            "Certificação que confirma que nossos produtos atendem aos padrões de saúde, segurança e proteção ambiental da União Europeia.",
          aplicacao: "Produtos exportados para o mercado europeu",
        },
        {
          nome: "FCC (Federal Communications Commission)",
          descricao:
            "Certificação americana para equipamentos de comunicação, garantindo que nossos produtos cumprem os padrões de interferência eletromagnética dos EUA.",
          aplicacao: "Produtos exportados para o mercado norte-americano",
        },
        {
          nome: "RoHS Compliance",
          descricao:
            "Conformidade com a diretiva de Restrição de Substâncias Perigosas, garantindo que nossos produtos são fabricados sem o uso de materiais nocivos ao meio ambiente.",
          aplicacao: "Todos os produtos eletrônicos",
        },
      ],
      certificadosGestao: [
        {
          nome: "ISO 14001:2015",
          descricao:
            "Sistema de Gestão Ambiental, demonstrando nosso compromisso com práticas sustentáveis e responsabilidade ambiental.",
          aplicacao: "Processos de fabricação e gestão de resíduos",
        },
      ],
    },
    institucional: {
      fundacao: {
        ano: 1952,
        local: "Itaúna, MG",
        fundador: "Álvaro Ricardo de Souza",
      },
      historia:
        "Fundada em 1952 em Itaúna, Minas Gerais, por Álvaro Ricardo de Souza, um autodidata que identificou a necessidade de fabricar produtos para o crescente mercado de radioamadorismo. A ARS Eletrônica é reconhecida como uma das pioneiras no segmento de radiofrequência no Brasil. Com a expansão da indústria de telecomunicações, a empresa ampliou seu portfólio para desenvolver e fabricar soluções que atendem tanto o mercado nacional quanto o internacional. Atualmente, a empresa está sediada em São Paulo e é dirigida pela terceira geração da família fundadora, que se dedica a incorporar modernidade e inovação, mantendo o legado de excelência e qualidade em seus produtos.",
      missao:
        "Trabalhar obstinadamente para entregar produtos genuínos, com altíssimo nível de qualidade, que possa estar sintonizado na mesma frequência dos nossos clientes e colaboradores, conectando pessoas e negócios.",
      visao:
        "Continuar sendo reconhecido como o maior e melhor fabricante de sistemas irradiantes, combinadores, assim como ser referência em soluções de conectividade e desenvolvimento de software e hardware, para todo mercado global.",
      valores:
        "Trabalhar de forma sustentável, primar pela ética, moral, bons costumes, sempre valorizando nossos colaboradores e parceiros de negócios.",
    },
    mercado: {
      posicionamentoEstrategico:
        "Posiciona-se como o maior e melhor fabricante de sistemas irradiantes e soluções de conectividade para o mercado global de telecomunicações, com um forte diferencial de fabricar produtos 100% nacionais.",
      segmentosAtendidos: [
        "Telecomunicações",
        "Segurança Pública",
        "Utilities",
        "Radioamadorismo",
        "Telecomunicação móvel e fixa",
        "Sistemas de radiocomunicação",
      ],
      categoriasPrincipaisDeProdutos: [
        "Antenas (móveis, omnidirecionais, direcionais, fixas, plano-terra, heliflex, marítimas)",
        "Duplexadores e Filtros",
        "Conectores (séries N, BNC, UHF, TNC, Fakra, SMA, FME, IEC, MMCX)",
        "Cabos coaxiais e irradiantes",
        "Combinadores",
        "Acessórios e equipamentos de RF",
      ],
    },
  },

  // Seção 2: Catálogo de Produtos
  catalogoProdutos: {
    antenas: {
      subcategorias: {
        moveis: [
          {
            nome: "Antena móvel MU-55 LTE",
            modelo: "MU-55 LTE",
            codigos: ["501695"],
            url: "https://arseletronica.com.br/wp-content/uploads/2024/12/501695-MU-55-LTE.pdf",
            descricao:
              "Antena de ganho com baixo perfil e base padrão NMO, projetada para aplicações móveis em sistemas LTE na banda 28. Construída com materiais resistentes a impactos e intempéries. Acompanha cabo coaxial RG-58 de 5 metros e conector SMA-1.", // [3]
            especificacoes: {
              eletricas: {
                frequencia: "698 / 806 MHz",
                ganho: "3 dBi",
                vswr: "$ \\leq 1,8:1 $",
                impedanciaNominal: "$ 50 \\ \\Omega $",
                potenciaMaxima: "150 Watts",
                polarizacao: "Vertical",
              },
              mecanicas: {
                diametro: "37 mm",
                comprimento: "62 mm",
                peso: "0,163 Kg",
                materialBase:
                  "Base de latão cromado, radome em nylon de alta resistência.",
                fixacao: "Furo de 19mm em superfície metálica (base NMO).",
                conector: "SMA-1",
                resistenciaVentoOperacional: "$ \\geq 110 $ Km/h",
                resistenciaVentoSobrevivencia: "$ \\geq 200 $ Km/h",
                areaExposicaoVento: "$ 0,0023 \\ m^2 $",
              },
            },
            caracteristicasAdicionais: [
              "Resistente a impactos e intempéries",
              "Baixo perfil para aplicações móveis",
              "Acompanha cabo coaxial RG-58 de 5 metros",
            ],
            downloads: [
              {
                titulo: "Prospecto",
                url: "https://arseletronica.com.br/wp-content/uploads/2024/12/501695-MU-55-LTE.pdf",
              },
            ],
          }, // [3]
          {
            nome: "Antena móvel MU-55 LTEI 4G",
            modelo: "MU-55 LTEI 4G",
            codigos: ["501696"],
            url: "https://arseletronica.com.br/solucoes/antena-movel-mu-55-ltei-4g/",
            descricao:
              "Antena móvel para aplicações em 4G. As especificações detalhadas não foram encontradas no material de pesquisa.", // [4]
            especificacoes: {},
            caracteristicasAdicionais: [
              "Aplicação em sistemas 4G",
              "Design móvel",
            ],
            downloads: [],
          },
          {
            nome: "Antena móvel MV-70AI",
            modelo: "MV-70AI",
            codigos: ["501835"],
            url: "https://arseletronica.com.br/solucoes/antena-movel-mv-70ai/",
            descricao:
              "Antena vertical de ganho com 5/8 de onda, projetada para uso em estações móveis. Possui base magnética, elemento irradiante reduzido e conector padrão NMO. Acompanha cabo coaxial de 5 metros.", // [5]
            especificacoes: {
              eletricas: {
                frequencia: "130/174MHz",
                comprimentoDeOnda: "$ 5/8 $",
                vswr: "$ \\leq 1,5:1 $",
                impedanciaNominal: "$ 50 \\ \\Omega $",
                potenciaMaxima: "200 Watts",
                polarizacao: "Vertical",
                ganho: "5,15 dBi",
              },
              mecanicas: {
                peso: "0,960 Kg",
                fixacao: "Base magnética",
                acabamento: "Aloy fosco de alta condutibilidade",
                resistenciaVentoOperacional: "$ \\geq 110 $ Km/h",
                resistenciaVentoSobrevivencia: "$ \\geq 200 $ Km/h",
                conector: "UM-6 / UM-1/7 / QMA",
                materialBase: "Latão / aço inox / policarbonato",
              },
            },
            caracteristicasAdicionais: [
              "Elemento irradiante reduzido",
              "Base magnética de alta fixação",
              "Acompanha cabo coaxial de 5 metros",
            ],
            downloads: [],
          }, // [5]
          {
            nome: "Antena móvel MU-00PI LTE",
            modelo: "MU-00PI LTE",
            codigos: ["501858"],
            url: "https://arseletronica.com.br/solucoes/antena-movel-mu-00pi-lte/",
            descricao:
              "Antena penta banda com base magnética, ideal para operação no serviço celular 4G, incluindo a banda 28 (700MHz). Adequada para comunicação segura com possibilidade de troca de local.", // [6]
            especificacoes: {
              eletricas: {
                frequencia: "700MHz a 4GHz",
                vswr: "$ \\leq 2,0:1 $",
                impedanciaNominal: "$ 50 \\ \\Omega $",
                potenciaMaxima: "50 Watts",
                irradiacao: "Omnidirecional",
                ganho: "6 dBi",
              },
              mecanicas: {
                peso: "0,110 Kg",
                fixacao: "Base magnética",
                acabamento: "Pintura epóxi preta",
                conector: "SMA-3",
                materialBase: "Aço inoxidável / latão / polipropileno",
              },
            },
            caracteristicasAdicionais: [
              "Ímã de alto poder de fixação, resistente a ventos e vibrações em serviços outdoor ou veiculares.",
            ],
            downloads: [],
          }, // [6]
          {
            nome: "Antena móvel ASA-704 LTE",
            modelo: "ASA-704 LTE",
            codigos: ["501787"],
            url: "https://arseletronica.com.br/solucoes/antena-movel-asa-704-lte/",
            descricao:
              "Antena adesiva para superfícies não metálicas, desenvolvida para o segmento de medição remota (IoT/M2M). A fixação por fita adesiva permite fácil instalação e remoção sem deixar marcas.", // [7]
            especificacoes: {
              eletricas: {
                frequencia: "0.6/6 GHz",
                vswr: "Ver prospecto",
                impedanciaNominal: "$ 50 \\ \\Omega $",
                potenciaMaxima: "15 Watts",
                polarizacao: "Vertical / Horizontal",
                ganho: "2,15 dBi",
              },
              mecanicas: {
                peso: "0,05 Kg",
                fixacao: "Por adesão (fita adesiva)",
                acabamento: "Cor preta",
                conector: "SMA-3 / SMA-4 / FAKRA",
                materialBase: "Placa de circuito impresso / ABS",
              },
            },
            caracteristicasAdicionais: [
              "Desenvolvida para IoT/M2M",
              "Fixação por fita adesiva",
              "Não deixa marcas na remoção",
            ],
            downloads: [],
          }, // [7]
          {
            nome: "Antena móvel MU-35EBI",
            modelo: "MU-35EBI",
            codigos: ["501713"],
            url: "https://arseletronica.com.br/solucoes/antena-movel-mu-35ebi/",
            descricao:
              "Antena monopolo vertical de 5/8 de onda com 5,15 dBi de ganho, projetada para estações móveis que exigem maior desempenho. A sintonia é feita através de corte na vareta.", // [8]
            especificacoes: {
              eletricas: {
                frequencia: "420/470MHz",
                comprimentoDeOnda: "$ 5/8 $",
                vswr: "$ \\leq 1,5:1 $",
                impedanciaNominal: "$ 50 \\ \\Omega $",
                potenciaMaxima: "100 Watts",
                polarizacao: "Vertical",
                ganho: "5,15 dBi",
              },
              mecanicas: {
                fixacao: "Base magnética",
                acabamento: "Polido",
                resistenciaVentoOperacional: "$ \\geq 110 $ Km/h",
                resistenciaVentoSobrevivencia: "$ \\geq 200 $ Km/h",
                conector: "UM-6 / UM-5",
                materialBase: "Aço inox / PVC",
              },
            },
            caracteristicasAdicionais: [
              "Sintonia através de corte na vareta",
              "Para estações móveis de maior desempenho",
            ],
            downloads: [],
          }, // [8]
          {
            nome: "Antena MUL-70LTE-I",
            modelo: "MUL-70LTE-I",
            codigos: ["501488"],
            url: "https://arseletronica.com.br/solucoes/antena-mul-70lte-i/",
            descricao:
              "Antena fixa ou móvel de alto ganho com base magnética, projetada especificamente para sistemas de radiocomunicação digital no serviço LTE. Acompanha cabo coaxial de 5 metros.", // [9]
            especificacoes: {
              eletricas: {
                frequencia: "698/755MHz",
                comprimentoDeOnda: "$ 2 \\times 5/8 $",
                vswr: "$ \\leq 2,3:1 $",
                impedanciaNominal: "$ 50 \\ \\Omega $",
                potenciaMaxima: "100 Watts",
                irradiacao: "Omnidirecional",
                ganho: "7 dBi",
              },
              mecanicas: {
                comprimento: "390 mm",
                peso: "0,786 Kg",
                fixacao: "Base magnética",
                conector: "SMA-1",
                materialBase: "Aço inoxidável",
              },
            },
            caracteristicasAdicionais: [
              "Para sistemas LTE",
              "Uso fixo ou móvel",
              "Acompanha cabo coaxial de 5 metros",
            ],
            downloads: [],
          }, // [9]
          {
            nome: "Antena móvel MUA-2500",
            modelo: "MUA-2500",
            codigos: ["501398"],
            url: "https://arseletronica.com.br/solucoes/antena-movel-mua-2500/",
            descricao:
              "Antena Wi-Fi de baixo perfil projetada para uso em veículos de serviço pesado como trens, veículos de valores, caminhões e viaturas. Resistente a danos e furtos, pode ser instalada na vertical ou horizontal.", // [10]
            especificacoes: {
              eletricas: {
                frequencia: "2.4/2.5 GHz",
                vswr: "$ \\leq 1,5:1 $",
                impedanciaNominal: "$ 50 \\ \\Omega $",
                potenciaMaxima: "10 Watts",
                polarizacao: "Vertical / Horizontal",
                ganho: "2,15 dBi",
              },
              mecanicas: {
                peso: "0,31 Kg",
                fixacao: "Parafusos 5/32″",
                resistenciaVento: "até 120 Km/h",
                conector: "N fêmea",
                materialBase: "Cobre / fibra de vidro / borracha / alumínio",
              },
            },
            caracteristicasAdicionais: [
              "Padrão de irradiação omnidirecional, similar a monopolos verticais.",
            ],
            downloads: [
              {
                titulo: "Prospecto",
                url: "https://arseletronica.com.br/wp-content/uploads/2023/07/501398-MUA-2500.pdf",
              },
            ],
          }, // [10]
          {
            nome: "Antena móvel ASA-916I GSM",
            modelo: "ASA-916I GSM",
            codigos: ["501886"],
            url: "https://arseletronica.com.br/solucoes/antena-movel-asa-916i-gsm/",
            descricao:
              "Antena móvel com base magnética para comunicações de voz e dados em sistemas via celular (GPRS). Construída com materiais resistentes a intempéries.", // [11]
            especificacoes: {
              eletricas: {
                frequencia: "800/3500MHz",
                vswr: "$ \\leq 2,2:1 $",
                impedanciaNominal: "$ 50 \\ \\Omega $",
                potenciaMaxima: "125 Watts",
                polarizacao: "Vertical",
                ganho: "Ver prospecto",
              },
              mecanicas: {
                peso: "0,655 Kg",
                fixacao: "Base magnética",
                acabamento: "Aloy fosco de alta condutibilidade",
                resistenciaVento: "até 220Km/h",
                conector: "SMA-1 / SMA-11 / SMA-1/FC",
                materialBase: "Latão cromado / aço inox / policarbonato",
              },
            },
            caracteristicasAdicionais: [
              "Para comunicações GPRS",
              "Resistente a intempéries",
            ],
            downloads: [],
          }, // [11]
          {
            nome: "Antena móvel ASA-916 GSM",
            modelo: "ASA-916 GSM",
            codigos: ["501885"],
            url: "https://arseletronica.com.br/solucoes/antena-movel-asa-916-gsm/",
            descricao:
              "Antena de alta resistência mecânica para fixação em veículos ou superfícies metálicas (base NMO). Destinada a comunicações de voz e dados em sistemas GPRS.", // [12]
            especificacoes: {
              eletricas: {
                frequencia: "800/3500MHz",
                vswr: "$ \\leq 2,2:1 $",
                impedanciaNominal: "$ 50 \\ \\Omega $",
                potenciaMaxima: "125 Watts",
                polarizacao: "Vertical",
                ganho: "Ver prospecto",
              },
              mecanicas: {
                peso: "0,205 Kg",
                fixacao: "Furo de 19mm (base NMO)",
                acabamento: "Aloy fosco de alta condutibilidade",
                resistenciaVento: "até 220Km/h",
                conector: "SMA-1 / SMA-11 / SMA-1/FC",
                materialBase: "Latão cromado / aço inox / policarbonato",
              },
            },
            caracteristicasAdicionais: [
              "Alta resistência mecânica",
              "Para sistemas GPRS",
            ],
            downloads: [],
          }, // [12]
          {
            nome: "Antena móvel ASA-916I GSM/GPS",
            modelo: "ASA-916I GSM/GPS",
            codigos: ["501887"],
            url: "https://arseletronica.com.br/solucoes/antena-movel-asa-916i-gsm-gps/",
            descricao:
              "Antena móvel combinada para GSM e GPS. As especificações detalhadas não foram encontradas no material de pesquisa.", // [13]
            especificacoes: {},
            caracteristicasAdicionais: ["Combinada GSM/GPS", "Base magnética"],
            downloads: [],
          },
          {
            nome: "Antena móvel ASA-400EMU",
            modelo: "ASA-400EMU",
            codigos: ["501080"],
            url: "https://arseletronica.com.br/solucoes/antena-movel-asa-400emu/",
            descricao:
              "Antena móvel omnidirecional 2x5/8 de onda para aplicações UHF. Construída com haste de latão/aço inoxidável com acabamento cromado.",
            especificacoes: {
              eletricas: {
                frequencia: "340-470 MHz",
                vswr: "≤ 1,5:1",
                polarizacao: "Vertical",
                impedanciaNominal: "50 Ω",
                potenciaMaxima: "100 Watts",
                ganho: "7,15 dBi",
              },
              mecanicas: {
                diametroHaste: "3,1 mm",
                comprimentoTotal: "410 mm",
                peso: "194 g",
                material: "Latão/Aço Inoxidável",
                acabamento: "Cromado",
                conector: "UM-6",
              },
            },
            caracteristicasAdicionais: [
              "Antena omnidirecional 2x5/8 de onda",
              "Alta resistência mecânica",
              "Acabamento cromado anti-corrosão",
            ],
            downloads: [],
          },
          {
            nome: "Antena móvel MV-00A",
            modelo: "MV-00A",
            codigos: ["501014", "501015"],
            url: "https://arseletronica.com.br/solucoes/antena-movel-mv-00a/",
            descricao:
              "Antena móvel omnidirecional 1/4 de onda para aplicações VHF/UHF. Disponível com conectores UM-5 e UM-6.",
            especificacoes: {
              eletricas: {
                frequencia: "130-512 MHz",
                vswr: "≤ 1,5:1",
                polarizacao: "Vertical",
                impedanciaNominal: "50 Ω",
                potenciaMaxima: "100 Watts",
                ganho: "2,15 dBi",
              },
              mecanicas: {
                diametroHaste: "1,44 mm",
                comprimentoTotal: "565 mm",
                peso: "265 g",
                material: "Aço Inoxidável",
                acabamento: "Polido",
                conector: "UM-5 / UM-6",
              },
            },
            caracteristicasAdicionais: [
              "Antena omnidirecional 1/4 de onda",
              "Ampla faixa de frequência",
              "Construção em aço inoxidável",
            ],
            downloads: [],
          },
          {
            nome: "Antena móvel MU-35C/GPS",
            modelo: "MU-35C/GPS",
            codigos: ["501742"],
            url: "https://arseletronica.com.br/solucoes/antena-movel-mu-35c-gps/",
            descricao:
              "Antena móvel combinada dual band com GPS integrado. Ideal para aplicações que requerem comunicação e posicionamento simultâneos.",
            especificacoes: {
              eletricas: {
                frequencia: "420-470 MHz (comunicação)",
                vswr: "≤ 1,5:1",
                impedanciaNominal: "50 Ω",
                potenciaMaxima: "100 Watts",
                ganho: "5,15 dBi",
              },
              gps: {
                frequencia: "1575,42 ± 1 MHz",
                polarizacao: "Circular",
                ganho: "28 dBi",
                tensaoAlimentacao: "2,2-5 VDC",
              },
              mecanicas: {
                comprimentoTotal: "362 mm",
                peso: "0,514 kg",
                material: "ZAMAK / PVC",
              },
            },
            caracteristicasAdicionais: [
              "Antena combinada comunicação + GPS",
              "Dual band operation",
              "GPS ativo integrado",
            ],
            downloads: [],
          },
        ],
        fixas: [
          {
            nome: "Antena fixa ASA-800",
            modelo: "ASA-800",
            codigos: ["502331"],
            url: "https://arseletronica.com.br/solucoes/antena-fixa-asa-800/",
            descricao:
              "Desenvolvida para telefonia celular e sistemas troncalizados. Construída com materiais de alta qualidade resistentes a intempéries e raios UV, pode ser instalada interna ou externamente.", // [42]
            especificacoes: {
              eletricas: {
                frequencia: "820/860MHz, 900/960MHz",
                ganho: "5,15 dBi",
                vswr: "$ \\leq 1,8:1 $",
                impedanciaNominal: "$ 50 \\ \\Omega $",
                potenciaMaxima: "50 Watts",
                polarizacao: "Vertical",
              },
              mecanicas: {
                fixacao: "Base de aço carbono (pode ser fixada à parede)",
                materialBase: "Aço carbono / Policloreto de vinila",
                resistenciaVentoOperacional: "$ \\geq 110 $ Km/h",
                resistenciaVentoSobrevivencia: "$ \\geq 200 $ Km/h",
                conector: "N fêmea",
              },
            },
            caracteristicasAdicionais: [
              "Para telefonia celular",
              "Sistemas troncalizados",
              "Resistente a intempéries e UV",
            ],
            downloads: [],
          }, // [42]
          {
            nome: "Antena fixa colinear COLU-100/4",
            modelo: "COLU-100/4",
            codigos: ["502120", "502121"],
            url: "https://arseletronica.com.br/solucoes/antena-fixa-colu-100-4/",
            descricao:
              "Antena colinear omnidirecional UHF fixa para aplicações de alta potência. Construída em alumínio com alta resistência mecânica.",
            especificacoes: {
              eletricas: {
                frequencia: "400-430 MHz / 420-450 MHz",
                vswr: "≤ 1,5:1",
                polarizacao: "Vertical",
                impedanciaNominal: "50 Ω",
                potenciaMaxima: "350 Watts",
                ganho: "8,15 dBi (Omni/Bi) / 11,15 dBi (Offset)",
                anguloMeiaPotenciaPlanoE: "14°",
              },
              mecanicas: {
                comprimentoGondola: "2700 mm",
                peso: "8,26 kg",
                material: "Alumínio",
                terminacao: "N-Fêmea",
              },
            },
            caracteristicasAdicionais: [
              "Alta potência (350W)",
              "Construção robusta em alumínio",
              "Múltiplos padrões de irradiação",
            ],
            downloads: [],
          },
          {
            nome: "Antena fixa plano-terra G7-A/B/C/D12",
            modelo: "G7-A/B/C/D12",
            codigos: ["502095"],
            url: "https://arseletronica.com.br/solucoes/antena-fixa-g7/",
            descricao:
              "Antena omnidirecional plano-terra fixa 3x5/8 de onda para aplicações VHF. Construção robusta em alumínio.",
            especificacoes: {
              eletricas: {
                frequencia: "145-155 MHz",
                vswr: "≤ 1,5:1",
                polarizacao: "Vertical",
                impedanciaNominal: "50 Ω",
                potenciaMaxima: "150 Watts",
                ganho: "9,15 dBi",
                anguloMeiaPotenciaPlanoE: "18°",
              },
              mecanicas: {
                comprimentoTotal: "5550 mm",
                peso: "3,3 kg",
                material: "Alumínio",
                terminacao: "UHF-Fêmea",
              },
            },
            caracteristicasAdicionais: [
              "Alta eficiência radiação",
              "Construção em alumínio resistente",
              "Aplicações VHF profissionais",
            ],
            downloads: [],
          },
        ],
        planoTerra: [
          {
            nome: "Antena plano-terra G3-C/D/E/F",
            modelo: "G3-C/D/E/F",
            codigos: ["502118", "502119", "502120", "502121"],
            url: "https://arseletronica.com.br/solucoes/antena-plano-terra-g3-c-d-e-f/",
            descricao:
              "Antena monopolo vertical plano-terra, de 5/8 de onda, indicada para estações fixas. O ajuste da frequência é feito através do comprimento de elementos telescópicos, eliminando a necessidade de corte.", // [43]
            especificacoes: {
              eletricas: {
                frequencia: "144/174MHz, 210/270MHz, 300/420MHz, 400/512MHz",
                comprimentoDeOnda: "$ 5/8 $",
                ganho: "5,15 dBi",
                vswr: "$ \\leq 1,5:1 $",
                impedanciaNominal: "$ 50 \\ \\Omega $",
                potenciaMaxima: "150 Watts",
                polarizacao: "Vertical",
              },
              mecanicas: {
                peso: "1,770 Kg",
                fixacao: "Tubo metálico 30mm",
                acabamento: "Polido",
                materialBase: "Alumínio",
                resistenciaVentoOperacional: "$ \\geq 110 $ Km/h",
                resistenciaVentoSobrevivencia: "$ \\geq 200 $ Km/h",
                conector: "UHF fêmea / N fêmea",
              },
            },
            caracteristicasAdicionais: [
              "Ajuste por elementos telescópicos",
              "Não necessita corte",
              "Para estações fixas",
            ],
            downloads: [],
          }, // [43]
        ],
        direcionais: [
          {
            nome: "Antena direcional DIRU-3/4",
            modelo: "DIRU-3/4",
            codigos: ["502201"],
            url: "https://arseletronica.com.br/solucoes/antena-direcional-diru-3-4/",
            descricao:
              "Antena direcional Yagi de 3 elementos para aplicações VHF/UHF. Ideal para enlaces ponto-a-ponto e comunicações direcionais.",
            especificacoes: {
              eletricas: {
                frequencia: "144-148 MHz / 430-440 MHz",
                vswr: "≤ 1,5:1",
                polarizacao: "Vertical/Horizontal",
                impedanciaNominal: "50 Ω",
                potenciaMaxima: "100 Watts",
                ganho: "10 dBi",
                relacaoFrenteCostaMinima: "≥ 20 dB",
                anguloMeiaPotenciaPlanoH: "44°",
                anguloMeiaPotenciaPlanoE: "52°",
              },
              mecanicas: {
                comprimentoTotal: "1131 mm",
                peso: "940 g",
                material: "Alumínio",
                terminacao: "N-Fêmea",
              },
            },
            caracteristicasAdicionais: [
              "Alta diretividade",
              "Excelente relação frente/costa",
              "Construção robusta em alumínio",
            ],
            downloads: [],
          },
        ],
        heliflex: [
          {
            nome: "Antena heliflex ICOM VHF/UHF",
            modelo: "Para rádio ICOM",
            codigos: ["503037", "503038"],
            url: "https://arseletronica.com.br/solucoes/antena-heliflex-icom/",
            descricao:
              "Antena Heliflex para aplicação em equipamentos portáteis ICOM. Fabricada com materiais de qualidade, alia durabilidade com excelente desempenho. Possui conectores especiais para perfeita conexão.", // [44]
            especificacoes: {
              eletricas: {
                frequencia: "148/174 MHz, 400/512 MHz",
                ganho: "2,15 dBi",
                vswr: "$ \\leq 1,5:1 $",
                potenciaMaxima: "50 Watts",
                polarizacao: "Vertical",
                irradiacao: "Omnidirecional",
              },
              mecanicas: {
                terminacao: "Rosca 1/4″ x 32",
                materialBase: "TPEE",
              },
            },
            caracteristicasAdicionais: [
              "Para equipamentos portáteis ICOM",
              "Conectores especiais",
              "Durabilidade e desempenho",
            ],
            downloads: [
              {
                titulo: "Prospecto",
                url: "https://arseletronica.com.br/wp-content/uploads/2022/05/503037-503038-Heliflex-ICOM.pdf",
              },
            ],
          }, // [44]
          {
            nome: "Antena heliflex SMA",
            modelo: "Heliflex SMA",
            codigos: ["503039"],
            url: "https://arseletronica.com.br/solucoes/antena-heliflex-sma-2/",
            descricao:
              "Antena Heliflex com conector SMA para equipamentos portáteis. As especificações detalhadas não foram encontradas no material de pesquisa.", // [45]
            especificacoes: {},
            caracteristicasAdicionais: ["Conector SMA", "Para portáteis"],
            downloads: [],
          },
        ],
        maritima: [
          {
            nome: "Antena marítima ASA-160M",
            modelo: "ASA-160M",
            codigos: ["502359"],
            url: "https://arseletronica.com.br/solucoes/antena-maritima-asa-160m/",
            descricao:
              "Antena monopolo vertical, sem plano-terra, indicada especificamente para estações móveis marítimas na banda de VHF. Construção robusta com materiais inoxidáveis, resistente a intempéries.", // [46]
            especificacoes: {
              eletricas: {
                frequencia: "155/163MHz",
                ganho: "6,15 dBi",
                lobuloDeIrradiacaoVertical: "12°",
                irradiacao: "Omnidirecional",
              },
            },
            caracteristicasAdicionais: [
              "Pequenas dimensões e baixo peso facilitam a instalação em embarcações.",
            ],
            downloads: [],
          }, // [46]
          {
            nome: "Antena GPS marítimo",
            modelo: "GPS marítimo",
            codigos: ["501890"],
            url: "https://arseletronica.com.br/solucoes/antena-gps-maritimo/",
            descricao:
              "Antena para recepção de sinais do sistema GPS, com base articulável, resistente a vibrações e radiação UV. Totalmente selada e protegida contra água. Acompanha kit de fixação e cabo coaxial RG-58 de 9,5 metros.", // [47]
            especificacoes: {
              eletricas: {
                frequencia: "1575.42MHz",
              },
            },
            caracteristicasAdicionais: [
              "Cor na tonalidade típica de embarcações de fibra de vidro para instalação discreta.",
            ],
            downloads: [],
          }, // [47]
        ],
      },
    },
    duplexadores: {
      subcategorias: {
        duplexadores: [
          {
            nome: "Duplexador FDV-4X",
            modelo: "FDV-4X",
            codigos: ["505294"],
            url: "https://arseletronica.com.br/solucoes/duplexador-fdv-4x/",
            descricao:
              "Duplexador de quatro cavidades para sistemas fixos de radiocomunicação.",
            especificacoes: {
              eletricas: {
                frequencia: "136/174MHz",
                vswr: "≤ 1,5:1",
                impedanciaNominal: "50 Ω",
                potenciaMaxima: "350 Watts",
                perdaMaximaPorInsercao: "0,5dB por cavidade",
                separacaoOffset: "1,2 MHz",
              },
              mecanicas: {
                peso: "10,64 Kg",
                acabamento: "Polido",
                terminacao: "UHF fêmea",
                materialBase: "Alumínio extrudado",
                temperaturaOperacao: "-30ºC a 60ºC",
              },
            },
          },
          {
            nome: "Duplexador para duas repetidoras UHF 360/400MHz",
            modelo: "Duplexador para duas repetidoras UHF",
            codigos: ["505322"],
            url: "https://arseletronica.com.br/solucoes/duplexador-para-duas-repetidoras-uhf-360-400mhz/",
            descricao:
              "Sistema que permite adicionar uma repetidora a uma já instalada, duplicando a capacidade de canais.",
            especificacoes: {
              eletricas: {
                frequencia: "360/400MHz",
                potenciaDeIngressoPorCanal: "Até 150 Watts",
                atenuacaoEmTX: "6,5dB (300Khz entre canais)",
              },
              mecanicas: {
                sistemaRessonante: "Cavidades de 8",
                peso: "19 Kg",
                terminacao: "N fêmea",
                materialBase: "Alumínio / cobre / latão",
                temperaturaOperacao: "0°C a 60°C",
              },
            },
          },
          {
            nome: "Duplexador FDV/FDU-6",
            modelo: "FDV-6A/B / FDU-6E",
            codigos: ["505310", "505311", "505312"],
            url: "https://arseletronica.com.br/solucoes/duplexador-fdv-6/",
            descricao:
              "Duplexador de seis cavidades para sistemas fixos de radiocomunicação de alto tráfego.",
            especificacoes: {
              eletricas: {
                frequencia: "130/148MHz, 148/174MHz, 380/512MHz",
                vswr: "≤ 1,5:1",
                impedanciaNominal: "50 Ω",
                potenciaMaxima: "150 Watts (VHF) / 120 Watts (UHF)",
                perdaMaximaPorInsercao: "≤ 1,5 dB",
                separacaoOffset: "0,6 MHz",
                isolacaoMinimaTXRX: "80 dB",
                isolacaoMinimaRXTX: "80 dB",
              },
              mecanicas: {
                peso: "14,6 Kg",
                acabamento: "Polido",
                terminacao: "N fêmea",
                materialBase: "Alumínio extrudado",
                temperaturaOperacao: "-30ºC a 60ºC",
              },
            },
          },
          {
            nome: "Duplexador FDV-4B P25",
            modelo: "FDV-4B P25",
            codigos: ["505296"],
            url: "https://arseletronica.com.br/solucoes/duplexador-fdv-4b-p25/",
            descricao:
              "Duplexador de quatro cavidades para sistemas fixos de radiocomunicação de alto tráfego, otimizado para sistemas P25.",
            especificacoes: {
              eletricas: {
                frequencia: "144/174MHz",
                vswr: "≤ 1,3:1",
                impedanciaNominal: "50 Ω",
                potenciaMaxima: "150 Watts",
                perdaDeInsercao: "≤ 1,2 dB",
                separacaoOffset: "1MHz",
                isolacao: "> 80dB",
              },
              mecanicas: {
                peso: "10,64 Kg",
                acabamento: "Polido",
                terminacao: "N fêmea",
                materialBase: "Alumínio extrudado",
                temperaturaOperacao: "-30ºC a 60ºC",
              },
            },
          },
          {
            nome: "Duplexador para duas repetidoras UHF 430/470MHz",
            modelo: "Duplexador para duas repetidoras UHF",
            codigos: ["505321"],
            url: "https://arseletronica.com.br/solucoes/duplexador-para-duas-repetidoras-uhf-430-470mhz/",
            descricao:
              "Sistema que permite adicionar uma repetidora a uma já instalada na faixa de 430/470MHz.",
            especificacoes: {
              eletricas: {
                frequencia: "430/470MHz",
                potenciaDeIngressoPorCanal: "Até 150 Watts",
                atenuacaoEmTX: "6,5dB (300Khz entre canais)",
              },
              mecanicas: {
                sistemaRessonante: "Cavidades de 8",
                peso: "19 Kg",
                terminacao: "N fêmea",
                materialBase: "Alumínio / cobre / latão",
                temperaturaOperacao: "0°C a 60°C",
              },
            },
          },
          {
            nome: "Duplexador para duas repetidoras VHF 148/174MHz",
            modelo: "Duplexador para duas repetidoras",
            codigos: ["505320"],
            url: "https://arseletronica.com.br/solucoes/duplexador-para-duas-repetidoras/",
            descricao:
              "Sistema que permite adicionar uma repetidora a uma já instalada na faixa de VHF.",
            especificacoes: {
              eletricas: {
                frequencia: "148/174MHz",
                potenciaDeIngressoPorCanal: "Até 150 Watts",
                atenuacaoEmTX: "≤ 6,5 dB (160KHz entre canais)",
              },
              mecanicas: {
                sistemaRessonante: "Cavidades de 8",
                peso: "25 Kg",
                terminacao: "N fêmea",
                materialBase: "Alumínio / cobre / latão",
                temperaturaOperacao: "0ºC a 60ºC",
              },
            },
          },
          {
            nome: "Duplexador DHU-6",
            modelo: "DHU-6",
            codigos: ["505070", "505071", "505072", "505073"],
            url: "https://arseletronica.com.br/solucoes/duplexador-dhu-6/",
            descricao:
              "Duplexador de seis cavidades projetado para aplicação direta em repetidores Hytera 626.",
            especificacoes: {
              eletricas: {
                frequencia: "400/440MHz, 440/470MHz",
                vswr: "≤ 1,5:1",
                impedanciaNominal: "50 Ω",
                potenciaMaxima: "50 Watts",
                perdaMaximaPorInsercao: "≤ 1,5 dB",
                separacaoOffset: "5MHz, 10MHz, 18MHz",
                isolacaoMinimaTXRX: "75dB",
                isolacaoMinimaRXTX: "75dB",
              },
              mecanicas: {
                peso: "1 Kg",
                acabamento: "Pintura sintética cor preta",
                terminacao: "N fêmea",
                materialBase: "Alumínio extrudado",
                temperaturaOperacao: "-30°C a 60°C",
              },
            },
          },
          {
            nome: "Duplexador DHV-6",
            modelo: "DHV-6",
            codigos: ["505069"],
            url: "https://arseletronica.com.br/solucoes/duplexador-dhv-6/",
            descricao: "Duplexador de 6 cavidades para a faixa de VHF.",
            especificacoes: {
              eletricas: {
                potenciaMaxima: "50 watts",
              },
            },
            caracteristicasAdicionais: ["Para VHF", "6 cavidades"],
          },
          {
            nome: "Duplexador DUMAX-4E",
            modelo: "DUMAX-4E",
            codigos: ["505011"],
            url: "https://arseletronica.com.br/solucoes/duplexador-dumax-4e/",
            descricao:
              "Duplexador de alta performance com cavidades de 8 polegadas.",
            especificacoes: {
              eletricas: {
                frequencia: "380/470MHz",
                vswr: "≤ 1,3:1",
                impedanciaNominal: "50 Ω",
                potenciaMaxima: "300 Watts",
                perdaMaximaPorInsercao: "≤ 0,8 dB",
                separacaoOffset: "entre 2,5 a 10MHz",
                isolacaoMinimaTXRX: "90 dB",
                isolacaoMinimaRXTX: "90 dB",
              },
              mecanicas: {
                peso: "14,5 Kg",
                acabamento: "Polido",
                terminacao: "N fêmea",
                materialBase: "Alumínio extrudado",
                temperaturaOperacao: "-30ºC a 60ºC",
              },
            },
          },
          {
            nome: "Duplexador DUMIL-6",
            modelo: "DUMIL-6",
            codigos: ["505005", "505006"],
            url: "https://arseletronica.com.br/solucoes/duplexador-dumil-6/",
            descricao:
              "Duplexador com seis cavidades para repetidoras digitais e analógicas.",
            especificacoes: {
              eletricas: {
                frequencia: "360/400MHz, 430/470MHz",
                vswr: "≤ 1,5:1",
                impedanciaNominal: "50 Ω",
                potenciaMaxima: "max. 250 Watts (Contínuos)",
                perdaMaximaPorInsercao: "max. 1,2dB (0,8dB típico)",
                separacaoOffset: "10MHz",
                isolacaoMinimaTXRX: "acima de 80 dB (90 dB típico)",
                isolacaoMinimaRXTX: "acima de 80 dB (90 dB típico)",
              },
              mecanicas: {
                peso: "5,24 Kg",
                acabamento: "Pintura sintética cor preta",
                terminacao: "N fêmea",
                materialBase: "Alumínio extrudado",
                temperaturaOperacao: "-30ºC a 70ºC",
              },
            },
          },
        ],
      },
    },
    conectores: {
      subcategorias: {
        serieN: [
          {
            nome: "Conector NM-35",
            modelo: "NM-35",
            codigos: ["508020"],
            url: "https://arseletronica.com.br/solucoes/conector-nm-35/",
            descricao:
              "Conector da série N macho com formato reto prensa cabo para fixação em cabos RG-58/RGC-58.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "11 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-58/RGC-58",
              },
            },
          },
          {
            nome: "Conector NM-8",
            modelo: "NM-8",
            codigos: ["508007"],
            url: "https://arseletronica.com.br/solucoes/conector-nm-8/",
            descricao:
              "Conector da série N macho com formato reto prensa cabo para fixação em cabos RG-8/RGC-8.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "11 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-8/RGC-8",
              },
            },
          },
          {
            nome: "Conector NM-213",
            modelo: "NM-213",
            codigos: ["508019"],
            url: "https://arseletronica.com.br/solucoes/conector-nm-213/",
            descricao:
              "Conector da série N macho com formato reto prensa cabo para fixação em cabos RG-213/RGC-213.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "11 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-213/RGC-213",
              },
            },
          },
          {
            nome: "Conector NF-35",
            modelo: "NF-35",
            codigos: ["508023"],
            url: "https://arseletronica.com.br/solucoes/conector-nf-35/",
            descricao:
              "Conector da série N fêmea com formato reto prensa cabo para fixação em cabos RG-58/RGC-58.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "11 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-58/RGC-58",
              },
            },
          },
          {
            nome: "Conector NF-8",
            modelo: "NF-8",
            codigos: ["508010"],
            url: "https://arseletronica.com.br/solucoes/conector-nf-8/",
            descricao:
              "Conector da série N fêmea com formato reto prensa cabo para fixação em cabos RG-8/RGC-8.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "11 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-8/RGC-8",
              },
            },
          },
          {
            nome: "Conector NF-213",
            modelo: "NF-213",
            codigos: ["508022"],
            url: "https://arseletronica.com.br/solucoes/conector-nf-213/",
            descricao:
              "Conector da série N fêmea com formato reto prensa cabo para fixação em cabos RG-213/RGC-213.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "11 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-213/RGC-213",
              },
            },
          },
          {
            nome: "Conector N 90° macho",
            modelo: "NM-35/90",
            codigos: ["508043"],
            url: "https://arseletronica.com.br/solucoes/conector-n-90-macho/",
            descricao:
              "Conector da série N macho angulado 90° prensa cabo para fixação em cabos RG-58/RGC-58.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "11 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-58/RGC-58",
                angulacao: "90°",
              },
            },
          },
          {
            nome: "Conector N 90° fêmea",
            modelo: "NF-35/90",
            codigos: ["508044"],
            url: "https://arseletronica.com.br/solucoes/conector-n-90-femea/",
            descricao:
              "Conector da série N fêmea angulado 90° prensa cabo para fixação em cabos RG-58/RGC-58.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "11 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-58/RGC-58",
                angulacao: "90°",
              },
            },
          },
          {
            nome: "Conector NC-53",
            modelo: "NC-53",
            codigos: ["508016"],
            url: "https://arseletronica.com.br/solucoes/conector-nc-53/",
            descricao:
              "Conector da série N tipo painel fêmea para equipamentos de radiocomunicação.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                vswr: "≤ 1,3 até 4 GHz",
                frequenciaMaxima: "11 GHz",
                tensaoMaxima: "1500V",
                temperaturaOperacao: "-65°C a 155°C",
              },
              mecanicas: {
                materialPino: "Latão banhado a ouro",
                isolamento: "PTFE",
                materialCorpo: "Latão niquelado",
                tipoMontagem: "Flange de 4 furos",
              },
            },
          },
          {
            nome: "Conector NF-37",
            modelo: "NF-37",
            codigos: ["508017"],
            url: "https://arseletronica.com.br/solucoes/conector-nf-37/",
            descricao:
              "Conector da série N fêmea para cabos RG-58/RGC-58 com excelente desempenho em UHF e micro-ondas.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                vswr: "≤ 1,3 até 4 GHz",
                frequenciaMaxima: "11 GHz",
                temperaturaOperacao: "-65°C a 155°C",
              },
              mecanicas: {
                materialPino: "Latão banhado a ouro",
                isolamento: "PTFE",
                materialCorpo: "Latão niquelado",
                caboCompativel: "RG-58/RGC-58",
              },
            },
          },
        ],
        serieBNC: [
          {
            nome: "Conector BNC macho",
            modelo: "BNCM-35",
            codigos: ["508030"],
            url: "https://arseletronica.com.br/solucoes/conector-bnc-macho/",
            descricao:
              "Conector BNC macho com formato reto prensa cabo para fixação em cabos RG-58/RGC-58.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "4 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-58/RGC-58",
              },
            },
          },
          {
            nome: "Conector BNC fêmea",
            modelo: "BNCF-35",
            codigos: ["508033"],
            url: "https://arseletronica.com.br/solucoes/conector-bnc-femea/",
            descricao:
              "Conector BNC fêmea com formato reto prensa cabo para fixação em cabos RG-58/RGC-58.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "4 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-58/RGC-58",
              },
            },
          },
          {
            nome: "Conector BNC 90° macho",
            modelo: "BNCM-35/90",
            codigos: ["508045"],
            url: "https://arseletronica.com.br/solucoes/conector-bnc-90-macho/",
            descricao:
              "Conector BNC macho angulado 90° prensa cabo para fixação em cabos RG-58/RGC-58.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "4 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-58/RGC-58",
                angulacao: "90°",
              },
            },
          },
          {
            nome: "Conector BNC 90° fêmea",
            modelo: "BNCF-35/90",
            codigos: ["508046"],
            url: "https://arseletronica.com.br/solucoes/conector-bnc-90-femea/",
            descricao:
              "Conector BNC fêmea angulado 90° prensa cabo para fixação em cabos RG-58/RGC-58.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "4 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-58/RGC-58",
                angulacao: "90°",
              },
            },
          },
        ],
        serieUHF: [
          {
            nome: "Conector UHF macho",
            modelo: "UM-35",
            codigos: ["508025"],
            url: "https://arseletronica.com.br/solucoes/conector-uhf-macho/",
            descricao:
              "Conector UHF macho com formato reto prensa cabo para fixação em cabos RG-58/RGC-58.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "300 MHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-58/RGC-58",
              },
            },
          },
          {
            nome: "Conector UC-27",
            modelo: "UC-27",
            codigos: ["508026"],
            url: "https://arseletronica.com.br/solucoes/conector-uc-27/",
            descricao:
              "Conector UHF fêmea para montagem em painéis de equipamentos de radiocomunicação.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                vswr: "≤ 1,3 até 300 MHz",
                frequenciaMaxima: "500 MHz",
                temperaturaOperacao: "-25°C a 70°C",
              },
              mecanicas: {
                materialPino: "Latão banhado a ouro",
                isolamento: "PTFE",
                materialCorpo: "Latão niquelado",
                tipoMontagem: "Painel com flange 4 furos",
              },
            },
          },
          {
            nome: "Conector UF-11",
            modelo: "UF-11",
            codigos: ["508027"],
            url: "https://arseletronica.com.br/solucoes/conector-uf-11/",
            descricao:
              "Conector UHF fêmea para cabo RG-213 de alta resistência mecânica.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                vswr: "≤ 1,3 até 300 MHz",
                frequenciaMaxima: "500 MHz",
                temperaturaOperacao: "-25°C a 70°C",
              },
              mecanicas: {
                materialPino: "Latão banhado a ouro",
                isolamento: "PTFE",
                materialCorpo: "Latão niquelado",
                caboCompativel: "RG-213/RGC-213",
              },
            },
          },
          {
            nome: "Conector UM-6",
            modelo: "UM-6",
            codigos: ["508028"],
            url: "https://arseletronica.com.br/solucoes/conector-um-6/",
            descricao:
              "Conector UHF macho para cabo RG-213 com excelente desempenho em VHF.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                vswr: "≤ 1,3 até 300 MHz",
                frequenciaMaxima: "500 MHz",
                temperaturaOperacao: "-25°C a 70°C",
              },
              mecanicas: {
                materialPino: "Latão banhado a ouro",
                isolamento: "PTFE",
                materialCorpo: "Latão niquelado",
                caboCompativel: "RG-213/RGC-213",
              },
            },
          },
          {
            nome: "Conector UHF fêmea",
            modelo: "UF-35",
            codigos: ["508028"],
            url: "https://arseletronica.com.br/solucoes/conector-uhf-femea/",
            descricao:
              "Conector UHF fêmea com formato reto prensa cabo para fixação em cabos RG-58/RGC-58.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "300 MHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-58/RGC-58",
              },
            },
          },
          {
            nome: "Conector UHF macho RG-8",
            modelo: "UM-8",
            codigos: ["508012"],
            url: "https://arseletronica.com.br/solucoes/conector-uhf-macho-rg-8/",
            descricao:
              "Conector UHF macho com formato reto prensa cabo para fixação em cabos RG-8/RGC-8.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "300 MHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-8/RGC-8",
              },
            },
          },
          {
            nome: "Conector UHF fêmea RG-8",
            modelo: "UF-8",
            codigos: ["508015"],
            url: "https://arseletronica.com.br/solucoes/conector-uhf-femea-rg-8/",
            descricao:
              "Conector UHF fêmea com formato reto prensa cabo para fixação em cabos RG-8/RGC-8.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "300 MHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-8/RGC-8",
              },
            },
          },
        ],
        serieTNC: [
          {
            nome: "Conector TNC macho",
            modelo: "TNCM-35",
            codigos: ["508035"],
            url: "https://arseletronica.com.br/solucoes/conector-tnc-macho/",
            descricao:
              "Conector TNC macho com formato reto prensa cabo para fixação em cabos RG-58/RGC-58.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "11 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-58/RGC-58",
              },
            },
          },
          {
            nome: "Conector TNC fêmea",
            modelo: "TNCF-35",
            codigos: ["508038"],
            url: "https://arseletronica.com.br/solucoes/conector-tnc-femea/",
            descricao:
              "Conector TNC fêmea com formato reto prensa cabo para fixação em cabos RG-58/RGC-58.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "11 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Niquelado",
                caboCompativel: "RG-58/RGC-58",
              },
            },
          },
        ],
        serieFakra: [
          {
            nome: "Conector Fakra macho A azul",
            modelo: "FAKRA A/M",
            codigos: ["508060"],
            url: "https://arseletronica.com.br/solucoes/conector-fakra-macho-a-azul/",
            descricao:
              "Conector Fakra macho código A (azul) para aplicações automotivas.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "6 GHz",
              },
              mecanicas: {
                materialBase: "Plástico",
                cor: "Azul",
                codigo: "A",
                aplicacao: "GPS",
              },
            },
          },
          {
            nome: "Conector Fakra fêmea A azul",
            modelo: "FAKRA A/F",
            codigos: ["508063"],
            url: "https://arseletronica.com.br/solucoes/conector-fakra-femea-a-azul/",
            descricao:
              "Conector Fakra fêmea código A (azul) para aplicações automotivas.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "6 GHz",
              },
              mecanicas: {
                materialBase: "Plástico",
                cor: "Azul",
                codigo: "A",
                aplicacao: "GPS",
              },
            },
          },
          {
            nome: "Conector Fakra macho B branco",
            modelo: "FAKRA B/M",
            codigos: ["508061"],
            url: "https://arseletronica.com.br/solucoes/conector-fakra-macho-b-branco/",
            descricao:
              "Conector Fakra macho código B (branco) para aplicações automotivas.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "6 GHz",
              },
              mecanicas: {
                materialBase: "Plástico",
                cor: "Branco",
                codigo: "B",
                aplicacao: "Telematics",
              },
            },
          },
          {
            nome: "Conector Fakra fêmea B branco",
            modelo: "FAKRA B/F",
            codigos: ["508064"],
            url: "https://arseletronica.com.br/solucoes/conector-fakra-femea-b-branco/",
            descricao:
              "Conector Fakra fêmea código B (branco) para aplicações automotivas.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "6 GHz",
              },
              mecanicas: {
                materialBase: "Plástico",
                cor: "Branco",
                codigo: "B",
                aplicacao: "Telematics",
              },
            },
          },
          {
            nome: "Conector Fakra macho C preto",
            modelo: "FAKRA C/M",
            codigos: ["508062"],
            url: "https://arseletronica.com.br/solucoes/conector-fakra-macho-c-preto/",
            descricao:
              "Conector Fakra macho código C (preto) para aplicações automotivas.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "6 GHz",
              },
              mecanicas: {
                materialBase: "Plástico",
                cor: "Preto",
                codigo: "C",
                aplicacao: "Keyless",
              },
            },
          },
          {
            nome: "Conector Fakra fêmea C preto",
            modelo: "FAKRA C/F",
            codigos: ["508065"],
            url: "https://arseletronica.com.br/solucoes/conector-fakra-femea-c-preto/",
            descricao:
              "Conector Fakra fêmea código C (preto) para aplicações automotivas.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "6 GHz",
              },
              mecanicas: {
                materialBase: "Plástico",
                cor: "Preto",
                codigo: "C",
                aplicacao: "Keyless",
              },
            },
          },
        ],
        serieSMA: [
          {
            nome: "Conector SMA macho",
            modelo: "SMAM-35",
            codigos: ["508040"],
            url: "https://arseletronica.com.br/solucoes/conector-sma-macho/",
            descricao:
              "Conector SMA macho com formato reto prensa cabo para fixação em cabos RG-58/RGC-58.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "18 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Dourado",
                caboCompativel: "RG-58/RGC-58",
              },
            },
          },
          {
            nome: "Conector SMA fêmea",
            modelo: "SMAF-35",
            codigos: ["508041"],
            url: "https://arseletronica.com.br/solucoes/conector-sma-femea/",
            descricao:
              "Conector SMA fêmea com formato reto prensa cabo para fixação em cabos RG-58/RGC-58.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "18 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Dourado",
                caboCompativel: "RG-58/RGC-58",
              },
            },
          },
          {
            nome: "Conector SMA reverso macho",
            modelo: "SMAR-M",
            codigos: ["508047"],
            url: "https://arseletronica.com.br/solucoes/conector-sma-reverso-macho/",
            descricao:
              "Conector SMA reverso macho (RP-SMA) para aplicações WiFi.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "18 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Dourado",
                tipo: "Reverso (RP-SMA)",
              },
            },
          },
          {
            nome: "Conector SMA reverso fêmea",
            modelo: "SMAR-F",
            codigos: ["508048"],
            url: "https://arseletronica.com.br/solucoes/conector-sma-reverso-femea/",
            descricao:
              "Conector SMA reverso fêmea (RP-SMA) para aplicações WiFi.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                frequenciaMaxima: "18 GHz",
              },
              mecanicas: {
                materialBase: "Latão",
                acabamento: "Dourado",
                tipo: "Reverso (RP-SMA)",
              },
            },
          },
        ],
      },
    },

    cabos: {
      subcategorias: {
        cabosCoaxiais: [
          {
            nome: "Cabo coaxial RG-59 DL",
            modelo: "RG-59 DL",
            codigos: ["512045"],
            url: "https://arseletronica.com.br/solucoes/cabo-coaxial-rg-59-dl/",
            descricao:
              "Cabo coaxial de 75 Ohms com 95% de malha. Homologado pela ANATEL e em conformidade com a diretiva RoHS.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "75 Ω",
                velocidadeDePropagacaoRelativa: "66%",
                atenuacao: {
                  "50MHz": "4,9 dB/100m",
                  "100MHz": "7,2 dB/100m",
                  "400MHz": "15,4 dB/100m",
                  "900MHz": "24,0 dB/100m",
                },
              },
              mecanicas: {
                condutorInterno: "Corda de cobre estanhado, Ø 0,59mm",
                condutorExterno:
                  "Trança de cobre estanhado com cobertura de 95%, Ø 4,45mm",
                revestimento: "PVC, Ø 6,15mm",
                temperaturaOperacao: "-40°C a +80°C",
              },
            },
            certificacoes: ["ANATEL", "RoHS"],
          },
          {
            nome: "Cabo coaxial RG-58 DL",
            modelo: "RG-58 DL",
            codigos: ["512041"],
            url: "https://arseletronica.com.br/solucoes/cabo-coaxial-rg-58-dl/",
            descricao:
              "Cabo coaxial de 50 Ohms com 95% de malha. Homologado pela ANATEL e em conformidade com a diretiva RoHS.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                velocidadeDePropagacaoRelativa: "66%",
                atenuacao: {
                  "50MHz": "6,2 dB/100m",
                  "100MHz": "9,2 dB/100m",
                  "400MHz": "19,7 dB/100m",
                  "900MHz": "31,2 dB/100m",
                },
              },
              mecanicas: {
                condutorInterno: "Corda de cobre estanhado, Ø 0,81mm",
                condutorExterno:
                  "Trança de cobre estanhado com cobertura de 95%, Ø 4,95mm",
                revestimento: "PVC, Ø 6,15mm",
                temperaturaOperacao: "-40°C a +80°C",
              },
            },
            certificacoes: ["ANATEL", "RoHS"],
          },
          {
            nome: "Cabo coaxial RG-8 DL",
            modelo: "RG-8 DL",
            codigos: ["512042"],
            url: "https://arseletronica.com.br/solucoes/cabo-coaxial-rg-8-dl/",
            descricao:
              "Cabo coaxial de 50 Ohms com 95% de malha. Homologado pela ANATEL e em conformidade com a diretiva RoHS.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                velocidadeDePropagacaoRelativa: "66%",
                atenuacao: {
                  "50MHz": "2,6 dB/100m",
                  "100MHz": "3,9 dB/100m",
                  "400MHz": "8,2 dB/100m",
                  "900MHz": "13,1 dB/100m",
                },
              },
              mecanicas: {
                condutorInterno: "Corda de cobre estanhado, Ø 2,17mm",
                condutorExterno:
                  "Trança de cobre estanhado com cobertura de 95%, Ø 9,25mm",
                revestimento: "PVC, Ø 10,29mm",
                temperaturaOperacao: "-40°C a +80°C",
              },
            },
            certificacoes: ["ANATEL", "RoHS"],
          },
          {
            nome: "Cabo coaxial RG-213 DL",
            modelo: "RG-213 DL",
            codigos: ["512043"],
            url: "https://arseletronica.com.br/solucoes/cabo-coaxial-rg-213-dl/",
            descricao:
              "Cabo coaxial de 50 Ohms com 95% de malha. Homologado pela ANATEL e em conformidade com a diretiva RoHS.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                velocidadeDePropagacaoRelativa: "66%",
                atenuacao: {
                  "50MHz": "2,6 dB/100m",
                  "100MHz": "3,9 dB/100m",
                  "400MHz": "8,2 dB/100m",
                  "900MHz": "13,1 dB/100m",
                },
              },
              mecanicas: {
                condutorInterno: "Sólido de cobre, Ø 2,26mm",
                condutorExterno:
                  "Trança de cobre estanhado com cobertura de 95%, Ø 9,25mm",
                revestimento: "PVC, Ø 10,29mm",
                temperaturaOperacao: "-40°C a +80°C",
              },
            },
            certificacoes: ["ANATEL", "RoHS"],
          },
          {
            nome: "Cabo coaxial RG-174 DL",
            modelo: "RG-174 DL",
            codigos: ["512044"],
            url: "https://arseletronica.com.br/solucoes/cabo-coaxial-rg-174-dl/",
            descricao:
              "Cabo coaxial miniatura de 50 Ohms com 95% de malha. Homologado pela ANATEL e em conformidade com a diretiva RoHS.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                velocidadeDePropagacaoRelativa: "66%",
                atenuacao: {
                  "50MHz": "13,1 dB/100m",
                  "100MHz": "19,7 dB/100m",
                  "400MHz": "42,0 dB/100m",
                  "900MHz": "65,6 dB/100m",
                },
              },
              mecanicas: {
                condutorInterno: "Corda de cobre estanhado, Ø 0,48mm",
                condutorExterno:
                  "Trança de cobre estanhado com cobertura de 95%, Ø 2,79mm",
                revestimento: "PVC, Ø 3,18mm",
                temperaturaOperacao: "-40°C a +80°C",
              },
            },
            certificacoes: ["ANATEL", "RoHS"],
          },
          {
            nome: 'Cabo coaxial CELLFLEX 1/2"',
            modelo: 'CELLFLEX 1/2"',
            codigos: ["512025"],
            url: "https://arseletronica.com.br/solucoes/cabo-coaxial-cellflex/",
            descricao:
              "Cabo coaxial de alta performance para aplicações profissionais que requerem mínima perda e máxima blindagem.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                velocidadeDePropagacaoRelativa: "88%",
                frequenciaMaxima: "8,8 GHz",
                atenuacao: {
                  "450MHz": "3,6 dB/100m",
                  "900MHz": "5,2 dB/100m",
                  "1800MHz": "7,5 dB/100m",
                  "2500MHz": "9,0 dB/100m",
                },
              },
              mecanicas: {
                condutorInterno: "Cobre sólido",
                condutorExterno: "Alumínio corrugado",
                diametroExterno: "13,2 mm",
                raioDeCurvatura: "125 mm (mínimo)",
                temperaturaOperacao: "-40°C a +85°C",
              },
            },
            certificacoes: ["ANATEL"],
          },
          {
            nome: "Cabo coaxial RG-58 EVO",
            modelo: "RG-58 EVO",
            codigos: ["512020"],
            url: "https://arseletronica.com.br/solucoes/cabo-coaxial-rg-58-evo/",
            descricao:
              "Cabo coaxial de 50 Ohms com alta blindagem para aplicações profissionais que requerem maior durabilidade.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                velocidadeDePropagacaoRelativa: "66%",
                coberturaBlindagem: "85%",
                atenuacao: {
                  "100MHz": "8,8 dB/100m",
                  "400MHz": "18,5 dB/100m",
                  "900MHz": "29,5 dB/100m",
                  "1800MHz": "44,0 dB/100m",
                },
              },
              mecanicas: {
                condutorInterno: "Cobre estanhado",
                condutorExterno: "Trança de cobre estanhado",
                diametroExterno: "4,95 mm",
                raioDeCurvatura: "50 mm (mínimo)",
                temperaturaOperacao: "-40°C a +80°C",
              },
            },
            certificacoes: ["ANATEL", "RoHS"],
          },
        ],
        cabosIrradiantes: [
          {
            nome: 'Cabo irradiante IHF 1/2"',
            modelo: 'IHF 1/2"',
            codigos: ["512070"],
            url: "https://arseletronica.com.br/solucoes/cabo-irradiante-ihf-1-2/",
            descricao:
              "Cabo irradiante para sistemas de comunicação em túneis, minas e estacionamentos subterrâneos.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                velocidadeDePropagacaoRelativa: "88%",
                perdaDeAcoplamento: "70-75 dB",
                atenuacao: {
                  "150MHz": "3,0 dB/100m",
                  "450MHz": "5,2 dB/100m",
                  "900MHz": "7,4 dB/100m",
                },
              },
              mecanicas: {
                diametroExterno: '12,7mm (1/2")',
                condutorInterno: "Cobre",
                condutorExterno: "Cobre corrugado com fendas",
                revestimento: "Polietileno",
                raioMinimoDeDobragem: "127mm",
              },
            },
          },
          {
            nome: 'Cabo irradiante IHF 7/8"',
            modelo: 'IHF 7/8"',
            codigos: ["512071"],
            url: "https://arseletronica.com.br/solucoes/cabo-irradiante-ihf-7-8/",
            descricao:
              "Cabo irradiante de maior diâmetro para sistemas de comunicação em túneis e minas.",
            especificacoes: {
              eletricas: {
                impedanciaNominal: "50 Ω",
                velocidadeDePropagacaoRelativa: "88%",
                perdaDeAcoplamento: "70-75 dB",
                atenuacao: {
                  "150MHz": "1,8 dB/100m",
                  "450MHz": "3,1 dB/100m",
                  "900MHz": "4,4 dB/100m",
                },
              },
              mecanicas: {
                diametroExterno: '22,2mm (7/8")',
                condutorInterno: "Cobre",
                condutorExterno: "Cobre corrugado com fendas",
                revestimento: "Polietileno",
                raioMinimoDeDobragem: "222mm",
              },
            },
          },
        ],
      },
    },

    combinadores: {
      subcategorias: {
        VHF: [
          {
            nome: "Multiacoplador 8:1 VHF 148/162MHz",
            modelo: "Multiacoplador 8:1",
            codigos: ["545088"],
            url: "https://arseletronica.com.br/solucoes/multiacoplador-8-1-vhf-148-162mhz/",
            descricao:
              "Permite que até oito receptores sejam conectados a uma única antena. Equipado com amplificador de baixo ruído (LNA).",
            especificacoes: {
              eletricas: {
                frequencia: "148/162 MHz",
                figuraDeRuido: "2,5 dB",
                ganhoTipicoDoSistema: "9 dB",
                isolacaoRXRX: "25 dB",
                tensaoDeAlimentacao: "110 / 220 VCA",
                potenciaMaximaNaEntrada: "10 Watts",
                numeroDeCanais: 8,
              },
              mecanicas: {
                peso: "3,5 Kg",
                dimensoes: '483 x 44 x 300 mm (19" rack mount)',
                conectores: "N fêmea",
                acabamento: "Alumínio anodizado",
              },
            },
          },
          {
            nome: "Multiacoplador 8:1 VHF 160/174MHz",
            modelo: "Multiacoplador 8:1",
            codigos: ["545123"],
            url: "https://arseletronica.com.br/solucoes/multiacoplador-8-1-vhf-160-174mhz/",
            descricao:
              "Multiacoplador para a faixa alta de VHF com amplificador de baixo ruído integrado.",
            especificacoes: {
              eletricas: {
                frequencia: "160/174 MHz",
                figuraDeRuido: "2,5 dB",
                ganhoTipicoDoSistema: "9 dB",
                isolacaoRXRX: "25 dB",
                tensaoDeAlimentacao: "110 / 220 VCA",
                potenciaMaximaNaEntrada: "10 Watts",
                numeroDeCanais: 8,
              },
              mecanicas: {
                peso: "3,5 Kg",
                dimensoes: '483 x 44 x 300 mm (19" rack mount)',
                conectores: "N fêmea",
                acabamento: "Alumínio anodizado",
              },
            },
          },
          {
            nome: "Combinador de potência VHF 2:1",
            modelo: "Combinador 2:1",
            codigos: ["545010"],
            url: "https://arseletronica.com.br/solucoes/combinador-de-potencia-vhf-2-1/",
            descricao:
              "Combinador que permite conectar dois transmissores a uma única antena.",
            especificacoes: {
              eletricas: {
                frequencia: "136/174 MHz",
                perdaDeInsercao: "≤ 3,5 dB",
                isolacao: "≥ 20 dB",
                vswr: "≤ 1,5:1",
                impedanciaNominal: "50 Ω",
                potenciaMaximaPorCanal: "150 Watts",
              },
              mecanicas: {
                peso: "2,1 Kg",
                conectores: "N fêmea",
                acabamento: "Alumínio anodizado",
              },
            },
          },
          {
            nome: "Combinador de potência VHF 4:1",
            modelo: "Combinador 4:1",
            codigos: ["545011"],
            url: "https://arseletronica.com.br/solucoes/combinador-de-potencia-vhf-4-1/",
            descricao:
              "Combinador que permite conectar quatro transmissores a uma única antena.",
            especificacoes: {
              eletricas: {
                frequencia: "136/174 MHz",
                perdaDeInsercao: "≤ 6,5 dB",
                isolacao: "≥ 20 dB",
                vswr: "≤ 1,5:1",
                impedanciaNominal: "50 Ω",
                potenciaMaximaPorCanal: "100 Watts",
              },
              mecanicas: {
                peso: "4,2 Kg",
                conectores: "N fêmea",
                acabamento: "Alumínio anodizado",
              },
            },
          },
        ],
        UHF: [
          {
            nome: "Multiacoplador 8:1 UHF 430/470MHz",
            modelo: "Multiacoplador 8:1",
            codigos: ["545125"],
            url: "https://arseletronica.com.br/solucoes/multiacoplador-8-1-uhf-430-470mhz/",
            descricao:
              "Multiacoplador UHF com amplificador de baixo ruído para até oito receptores.",
            especificacoes: {
              eletricas: {
                frequencia: "430/470 MHz",
                figuraDeRuido: "2,5 dB",
                ganhoTipicoDoSistema: "9 dB",
                isolacaoRXRX: "25 dB",
                tensaoDeAlimentacao: "110 / 220 VCA",
                potenciaMaximaNaEntrada: "10 Watts",
                numeroDeCanais: 8,
              },
              mecanicas: {
                peso: "3,5 Kg",
                dimensoes: '483 x 44 x 300 mm (19" rack mount)',
                conectores: "N fêmea",
                acabamento: "Alumínio anodizado",
              },
            },
          },
          {
            nome: "Combinador de potência UHF 2:1",
            modelo: "Combinador 2:1",
            codigos: ["545020"],
            url: "https://arseletronica.com.br/solucoes/combinador-de-potencia-uhf-2-1/",
            descricao:
              "Combinador UHF que permite conectar dois transmissores a uma única antena.",
            especificacoes: {
              eletricas: {
                frequencia: "380/512 MHz",
                perdaDeInsercao: "≤ 3,5 dB",
                isolacao: "≥ 20 dB",
                vswr: "≤ 1,5:1",
                impedanciaNominal: "50 Ω",
                potenciaMaximaPorCanal: "150 Watts",
              },
              mecanicas: {
                peso: "2,1 Kg",
                conectores: "N fêmea",
                acabamento: "Alumínio anodizado",
              },
            },
          },
          {
            nome: "Combinador de potência UHF 4:1",
            modelo: "Combinador 4:1",
            codigos: ["545021"],
            url: "https://arseletronica.com.br/solucoes/combinador-de-potencia-uhf-4-1/",
            descricao:
              "Combinador UHF que permite conectar quatro transmissores a uma única antena.",
            especificacoes: {
              eletricas: {
                frequencia: "380/512 MHz",
                perdaDeInsercao: "≤ 6,5 dB",
                isolacao: "≥ 20 dB",
                vswr: "≤ 1,5:1",
                impedanciaNominal: "50 Ω",
                potenciaMaximaPorCanal: "100 Watts",
              },
              mecanicas: {
                peso: "4,2 Kg",
                conectores: "N fêmea",
                acabamento: "Alumínio anodizado",
              },
            },
          },
        ],
      },
    },

    acessorios: {
      subcategorias: {
        geral: [
          {
            nome: "Mochila tática VHF",
            modelo: "Mochila tática VHF",
            codigos: ["506840"],
            url: "https://arseletronica.com.br/solucoes/mochila-tatica-vhf/",
            descricao:
              "Uma estação repetidora transportável completa, incluindo duplexador, antena, bateria de alta capacidade e carregadores.",
            especificacoes: {
              eletricas: {
                frequencia: "148/174 MHz",
                potencia: "10W",
                vswr: "1,5 : 1",
                alimentacao: "Bateria 12V 30Ah",
                autonomia: "até 8 horas",
              },
              mecanicas: {
                peso: "15 Kg",
                dimensoes: "40 x 30 x 15 cm",
                materialBase: "Tecido balístico",
                resistenciaAgua: "IP65",
              },
            },
            itensInclusos: [
              "Repetidora VHF 10W",
              "Duplexador compacto",
              "Antena telescópica",
              "Bateria 12V 30Ah",
              "Carregador 110/220V",
              "Cabos de conexão",
            ],
          },
          {
            nome: "Protetor contra surtos",
            modelo: "PCS-N",
            codigos: ["506850"],
            url: "https://arseletronica.com.br/solucoes/protetor-contra-surtos/",
            descricao:
              "Protetor contra surtos para linhas de RF com conectores tipo N.",
            especificacoes: {
              eletricas: {
                frequencia: "DC - 6 GHz",
                impedanciaNominal: "50 Ω",
                vswr: "≤ 1,2:1",
                perdaDeInsercao: "≤ 0,1 dB",
                potenciaMaxima: "500 Watts",
                tensaoDeIonizacao: "90V ± 10%",
              },
              mecanicas: {
                peso: "0,2 Kg",
                conectores: "N fêmea x N fêmea",
                materialBase: "Latão niquelado",
                grauDeProtecao: "IP65",
              },
            },
          },
          {
            nome: "Atenuador fixo 10dB",
            modelo: "AT-10",
            codigos: ["506851"],
            url: "https://arseletronica.com.br/solucoes/atenuador-fixo-10db/",
            descricao: "Atenuador fixo de 10dB para ajuste de níveis de sinal.",
            especificacoes: {
              eletricas: {
                frequencia: "DC - 6 GHz",
                impedanciaNominal: "50 Ω",
                atenuacao: "10 dB ± 0,5 dB",
                vswr: "≤ 1,25:1",
                potenciaMaxima: "25 Watts",
              },
              mecanicas: {
                peso: "0,1 Kg",
                conectores: "N macho x N fêmea",
                materialBase: "Latão niquelado",
              },
            },
          },
          {
            nome: "Atenuador fixo 20dB",
            modelo: "AT-20",
            codigos: ["506852"],
            url: "https://arseletronica.com.br/solucoes/atenuador-fixo-20db/",
            descricao: "Atenuador fixo de 20dB para ajuste de níveis de sinal.",
            especificacoes: {
              eletricas: {
                frequencia: "DC - 6 GHz",
                impedanciaNominal: "50 Ω",
                atenuacao: "20 dB ± 0,5 dB",
                vswr: "≤ 1,25:1",
                potenciaMaxima: "25 Watts",
              },
              mecanicas: {
                peso: "0,1 Kg",
                conectores: "N macho x N fêmea",
                materialBase: "Latão niquelado",
              },
            },
          },
          {
            nome: "Atenuador fixo 30dB",
            modelo: "AT-30",
            codigos: ["506853"],
            url: "https://arseletronica.com.br/solucoes/atenuador-fixo-30db/",
            descricao: "Atenuador fixo de 30dB para ajuste de níveis de sinal.",
            especificacoes: {
              eletricas: {
                frequencia: "DC - 6 GHz",
                impedanciaNominal: "50 Ω",
                atenuacao: "30 dB ± 0,5 dB",
                vswr: "≤ 1,25:1",
                potenciaMaxima: "25 Watts",
              },
              mecanicas: {
                peso: "0,1 Kg",
                conectores: "N macho x N fêmea",
                materialBase: "Latão niquelado",
              },
            },
          },
          {
            nome: "Adaptador N macho para UHF fêmea",
            modelo: "AD-N/UHF",
            codigos: ["506854"],
            url: "https://arseletronica.com.br/solucoes/adaptador-n-macho-para-uhf-femea/",
            descricao: "Adaptador para conversão entre conectores N e UHF.",
            especificacoes: {
              eletricas: {
                frequencia: "DC - 1 GHz",
                impedanciaNominal: "50 Ω",
                vswr: "≤ 1,3:1",
              },
              mecanicas: {
                peso: "0,05 Kg",
                conectores: "N macho x UHF fêmea",
                materialBase: "Latão niquelado",
              },
            },
          },
          {
            nome: "Adaptador UHF macho para N fêmea",
            modelo: "AD-UHF/N",
            codigos: ["506855"],
            url: "https://arseletronica.com.br/solucoes/adaptador-uhf-macho-para-n-femea/",
            descricao: "Adaptador para conversão entre conectores UHF e N.",
            especificacoes: {
              eletricas: {
                frequencia: "DC - 1 GHz",
                impedanciaNominal: "50 Ω",
                vswr: "≤ 1,3:1",
              },
              mecanicas: {
                peso: "0,05 Kg",
                conectores: "UHF macho x N fêmea",
                materialBase: "Latão niquelado",
              },
            },
          },
          {
            nome: "Divisor de potência 2:1",
            modelo: "DIV-2",
            codigos: ["506856"],
            url: "https://arseletronica.com.br/solucoes/divisor-de-potencia-2-1/",
            descricao:
              "Divisor de potência que divide um sinal em dois com igual amplitude.",
            especificacoes: {
              eletricas: {
                frequencia: "DC - 6 GHz",
                impedanciaNominal: "50 Ω",
                perdaDeInsercao: "3,5 dB ± 0,5 dB",
                isolacao: "≥ 20 dB",
                vswr: "≤ 1,5:1",
              },
              mecanicas: {
                peso: "0,2 Kg",
                conectores: "N fêmea",
                materialBase: "Alumínio",
              },
            },
          },
          {
            nome: "Divisor de potência 4:1",
            modelo: "DIV-4",
            codigos: ["506857"],
            url: "https://arseletronica.com.br/solucoes/divisor-de-potencia-4-1/",
            descricao:
              "Divisor de potência que divide um sinal em quatro com igual amplitude.",
            especificacoes: {
              eletricas: {
                frequencia: "DC - 6 GHz",
                impedanciaNominal: "50 Ω",
                perdaDeInsercao: "6,5 dB ± 0,5 dB",
                isolacao: "≥ 20 dB",
                vswr: "≤ 1,5:1",
              },
              mecanicas: {
                peso: "0,4 Kg",
                conectores: "N fêmea",
                materialBase: "Alumínio",
              },
            },
          },
        ],
      },
    },

    equipamentos: {
      subcategorias: {
        geral: [
          {
            nome: "ARS RF Service Analyzer",
            modelo: "ARS RF Service Analyzer",
            codigos: ["506850"],
            url: "https://arseletronica.com.br/solucoes/ars-rf-service-analyzer/",
            descricao:
              "Analisador de serviço de RF que permite a avaliação de parâmetros elétricos como Perda de Retorno, Perda de Inserção e VSWR.",
            especificacoes: {
              eletricas: {
                frequencia: "25 MHz a 2 GHz",
                tensaoDeAlimentacao: "12Vcc",
                consumo: "2.5A",
                rangeDinamico: "85 dB",
                precisao: "±0,5 dB",
                impedanciaNominal: "50 Ω",
              },
              mecanicas: {
                peso: "2,5 Kg",
                dimensoes: "300 x 200 x 100 mm",
                display: 'LCD colorido 5"',
                conectores: "N fêmea",
                temperaturaOperacao: "0°C a 50°C",
              },
            },
            funcionalidades: [
              "Medição de VSWR",
              "Medição de Perda de Retorno",
              "Medição de Perda de Inserção",
              "Análise de Antenas",
              "Teste de Cabos",
              "Gerador de Sinais",
            ],
          },
          {
            nome: "Medidor de potência e frequência",
            modelo: "MPF-1000",
            codigos: ["506860"],
            url: "https://arseletronica.com.br/solucoes/medidor-de-potencia-e-frequencia/",
            descricao:
              "Medidor portátil para medição de potência e frequência em sistemas de RF.",
            especificacoes: {
              eletricas: {
                frequencia: "25 MHz a 1 GHz",
                potenciaMaxima: "1000 Watts",
                precisao: "±5%",
                impedanciaNominal: "50 Ω",
                vswr: "≤ 1,1:1",
              },
              mecanicas: {
                peso: "1,2 Kg",
                dimensoes: "200 x 150 x 80 mm",
                display: "LCD digital",
                conectores: "N fêmea",
                alimentacao: "Bateria 9V",
              },
            },
          },
          {
            nome: "Gerador de sinais",
            modelo: "GS-2000",
            codigos: ["506861"],
            url: "https://arseletronica.com.br/solucoes/gerador-de-sinais/",
            descricao:
              "Gerador de sinais para teste e calibração de equipamentos de RF.",
            especificacoes: {
              eletricas: {
                frequencia: "10 MHz a 2 GHz",
                potenciaDeSaida: "-20 a +10 dBm",
                precisaoDeFrequencia: "±1 ppm",
                modulacao: "AM, FM",
                impedanciaNominal: "50 Ω",
              },
              mecanicas: {
                peso: "3,0 Kg",
                dimensoes: "350 x 250 x 120 mm",
                display: "LCD digital",
                conectores: "N fêmea",
                alimentacao: "110/220 VCA",
              },
            },
          },
          {
            nome: "Analisador de espectro portátil",
            modelo: "AEP-3000",
            codigos: ["506862"],
            url: "https://arseletronica.com.br/solucoes/analisador-de-espectro-portatil/",
            descricao:
              "Analisador de espectro portátil para análise de sinais de RF em campo.",
            especificacoes: {
              eletricas: {
                frequencia: "9 kHz a 3 GHz",
                rangeDinamico: "100 dB",
                sensibilidade: "-120 dBm",
                larguraDeBanda: "1 Hz a 10 MHz",
                impedanciaNominal: "50 Ω",
              },
              mecanicas: {
                peso: "4,5 Kg",
                dimensoes: "400 x 300 x 150 mm",
                display: 'TFT colorido 7"',
                conectores: "N fêmea",
                alimentacao: "Bateria Li-ion",
              },
            },
          },
        ],
      },
    },
  },

  // Seção 3: Aplicações e Soluções por Segmento (COMPLETA)
  aplicacoesPorSegmento: {
    segurancaPublica: {
      descricao:
        "Soluções completas para Polícia Militar, Civil, Bombeiros, Defesa Civil e órgãos de segurança pública",
      caracteristicasEspecificas: [
        "Comunicação crítica e confiável",
        "Resistência a intempéries",
        "Baixa manutenção",
        "Conformidade com normas de segurança",
      ],
      produtosRecomendados: [
        {
          categoria: "Antenas Móveis",
          produtos: [
            "MU-55 LTE para comunicação celular",
            "MV-70AI para VHF com base magnética",
            "Antenas móveis com base NMO",
          ],
        },
        {
          categoria: "Infraestrutura Fixa",
          produtos: [
            "Duplexadores FDV-4X e FDV-6 para repetidoras",
            "Antenas ASA-174/5R omnidirecionais",
            "Combinadores para múltiplos canais",
          ],
        },
        {
          categoria: "Equipamentos Portáteis",
          produtos: [
            "Mochila tática VHF para operações especiais",
            "Antenas telescópicas portáteis",
            "Protetores contra surtos",
          ],
        },
      ],
      casosDeUso: [
        "Comunicação entre viaturas e base",
        "Operações especiais em campo",
        "Sistemas de emergência",
        "Cobertura em eventos públicos",
      ],
    },
    utilities: {
      descricao:
        "Soluções para empresas de energia elétrica, água, gás, petróleo e telecomunicações",
      caracteristicasEspecificas: [
        "Alta confiabilidade operacional",
        "Resistência a ambientes industriais",
        "Longo alcance de comunicação",
        "Integração com sistemas SCADA",
      ],
      produtosRecomendados: [
        {
          categoria: "Comunicação de Longa Distância",
          produtos: [
            "Antenas colineares COLV-100/4EX de alto ganho",
            "Antenas direcionais DIRU para enlaces",
            "Cabos de baixa perda RG-8 e RG-213",
          ],
        },
        {
          categoria: "Sistemas Combinados",
          produtos: [
            "Multiacopladores 8:1 para múltiplos receptores",
            "Combinadores de potência 2:1 e 4:1",
            "Duplexadores para alta potência",
          ],
        },
        {
          categoria: "Monitoramento Remoto",
          produtos: [
            "Antenas ASA-920SR para telemetria",
            "Conectores resistentes à corrosão",
            "Equipamentos de teste de campo",
          ],
        },
      ],
      casosDeUso: [
        "Telemetria de subestações",
        "Monitoramento de gasodutos",
        "Controle de sistemas de distribuição",
        "Comunicação em plantas industriais",
      ],
    },
    iotM2M: {
      descricao:
        "Soluções para Internet das Coisas e comunicação máquina-a-máquina",
      caracteristicasEspecificas: [
        "Baixo consumo de energia",
        "Conectividade multi-banda",
        "Instalação simplificada",
        "Compatibilidade com protocolos IoT",
      ],
      produtosRecomendados: [
        {
          categoria: "Conectividade Celular",
          produtos: [
            "Antenas ASA-3000 multi-banda 4G",
            "Antenas ASA-850N para GSM/3G",
            "MU-55 LTE para aplicações móveis",
          ],
        },
        {
          categoria: "Conectividade Local",
          produtos: [
            "Antenas ASA-2400R para WiFi",
            "Antenas direcionais DIRU-90/5 2.4GHz",
            "Conectores SMA para dispositivos compactos",
          ],
        },
        {
          categoria: "Sensoriamento Remoto",
          produtos: [
            "Antenas compactas para medição",
            "Cabos RG-174 para conexões internas",
            "Conectores Fakra para automotivo",
          ],
        },
      ],
      casosDeUso: [
        "Monitoramento ambiental",
        "Rastreamento veicular",
        "Medição inteligente (smart meters)",
        "Agricultura de precisão",
      ],
    },
    radioamadorismo: {
      descricao:
        "Soluções para radioamadores e entusiastas da radiocomunicação",
      caracteristicasEspecificas: [
        "Ampla faixa de frequências",
        "Facilidade de instalação",
        "Boa relação custo-benefício",
        "Compatibilidade com equipamentos comerciais",
      ],
      produtosRecomendados: [
        {
          categoria: "Estações Fixas",
          produtos: [
            "Antenas ASA-450/2R e ASA-450/9R",
            "Antenas Yagi direcionais para HF/VHF/UHF",
            "Cabos coaxiais RG-8 e RG-213",
          ],
        },
        {
          categoria: "Estações Móveis",
          produtos: [
            "Antenas móveis MV-70AI e MU-32AI",
            "Bases magnéticas e NMO",
            "Conectores UHF e N para equipamentos",
          ],
        },
        {
          categoria: "Equipamentos Auxiliares",
          produtos: [
            "Medidores de ROE e potência",
            "Atenuadores fixos para teste",
            "Adaptadores entre diferentes conectores",
          ],
        },
      ],
      casosDeUso: [
        "Comunicação HF longa distância",
        "Repetidoras VHF/UHF locais",
        "Operação móvel e portátil",
        "Experimentos e desenvolvimento",
      ],
    },
    transporte: {
      descricao:
        "Soluções para empresas de transporte, logística, frotas e sistemas de navegação",
      caracteristicasEspecificas: [
        "Resistência a vibrações",
        "Instalação simplificada em veículos",
        "Múltiplas bandas de frequência",
        "Conectividade GPS e celular",
      ],
      produtosRecomendados: [
        {
          categoria: "Rastreamento Veicular",
          produtos: [
            "Antenas ASA-3000 multi-banda para IoT",
            "MU-55 LTE para comunicação celular",
            "Conectores Fakra para sistemas automotivos",
          ],
        },
        {
          categoria: "Comunicação de Frota",
          produtos: [
            "Antenas móveis MV-70AI VHF/UHF",
            "Bases magnéticas para instalação temporária",
            "Cabos de baixa perda para longo alcance",
          ],
        },
        {
          categoria: "Navegação e Telemetria",
          produtos: [
            "Antenas GPS de alta precisão",
            "Antenas 2.4GHz para WiFi em pontos de parada",
            "Sistemas de monitoramento remoto",
          ],
        },
      ],
      casosDeUso: [
        "Rastreamento de frotas em tempo real",
        "Comunicação entre motoristas e central",
        "Monitoramento de temperatura em cargas refrigeradas",
        "Sistemas de navegação e roteirização",
      ],
    },
  },

  // Seção 4: Guias Técnicos e de Instalação (COMPLETA)
  guiasTecnicos: {
    instalacaoAntenas: {
      titulo: "Guia de Instalação de Antenas",
      introducao:
        "Este guia fornece instruções detalhadas para instalação segura e eficiente de antenas ARS Eletrônica.",
      secoes: {
        planejamento: {
          titulo: "Planejamento da Instalação",
          conteudo: [
            {
              topico: "Análise do Local",
              detalhes: [
                "Verificar altura disponível e obstáculos",
                "Analisar direção dos ventos predominantes",
                "Identificar proximidade de linhas elétricas",
                "Avaliar acessibilidade para manutenção",
                "Verificar necessidade de licenças e autorizações",
              ],
            },
            {
              topico: "Seleção da Antena",
              detalhes: [
                "Determinar frequência de operação",
                "Calcular ganho necessário",
                "Considerar diagrama de radiação desejado",
                "Avaliar potência máxima de transmissão",
                "Verificar resistência ao vento da estrutura",
              ],
            },
            {
              topico: "Cálculo de Cabos",
              detalhes: [
                "Medir distância entre antena e equipamento",
                "Calcular perdas no cabo coaxial",
                "Considerar margem de segurança de 20%",
                "Prever pontos de fixação e curvaturas",
                "Selecionar conectores adequados",
              ],
            },
          ],
        },
        instalacaoFisica: {
          titulo: "Instalação Física",
          conteudo: [
            {
              topico: "Preparação da Torre/Mastro",
              detalhes: [
                "Verificar integridade estrutural",
                "Instalar sistemas de aterramento",
                "Preparar pontos de fixação",
                "Verificar alinhamento vertical",
                "Instalar proteção contra raios se necessário",
              ],
            },
            {
              topico: "Montagem da Antena",
              detalhes: [
                "Seguir torque especificado nos parafusos",
                "Verificar alinhamento da polarização",
                "Instalar em altura adequada",
                "Garantir folga para movimentação pelo vento",
                "Verificar segurança de todas as conexões",
              ],
            },
            {
              topico: "Instalação de Cabos",
              detalhes: [
                "Evitar curvas menores que raio mínimo",
                "Instalar drenos de água nos pontos baixos",
                "Fixar cabos a cada 1-2 metros",
                "Proteger contra abrasão e UV",
                "Identificar cabos adequadamente",
              ],
            },
          ],
        },
        testes: {
          titulo: "Testes e Verificações",
          conteudo: [
            {
              topico: "Medição de VSWR",
              detalhes: [
                "Utilizar analisador de antenas ou medidor de ROE",
                "Medir em toda faixa de frequência",
                "Verificar VSWR < 1,5:1 na frequência central",
                "Documentar valores medidos",
                "Repetir teste após alguns dias",
              ],
            },
            {
              topico: "Teste de Alcance",
              detalhes: [
                "Realizar testes de comunicação",
                "Verificar qualidade do sinal",
                "Testar em diferentes condições climáticas",
                "Documentar áreas de cobertura",
                "Otimizar orientação se necessário",
              ],
            },
            {
              topico: "Verificação de Segurança",
              detalhes: [
                "Verificar aterramento adequado",
                "Testar resistência de isolação",
                "Verificar fixações mecânicas",
                "Conferir proteção contra intempéries",
                "Documentar instalação completa",
              ],
            },
          ],
        },
      },
    },
    calculoLinkBudget: {
      titulo: "Cálculo de Link Budget",
      introducao:
        "Metodologia para cálculo de enlace de RF considerando todas as perdas e ganhos do sistema.",
      parametros: {
        potenciaTransmissor: {
          descricao: "Potência de saída do transmissor em dBm",
          exemplo: "30 dBm (1 Watt)",
        },
        ganhoAntenaTransmissora: {
          descricao: "Ganho da antena transmissora em dBi",
          exemplo: "9 dBi (antena colinear)",
        },
        perdaCaboTransmissor: {
          descricao: "Perda no cabo coaxial do transmissor em dB",
          exemplo: "2 dB (50 metros de RG-58)",
        },
        perdaEspacoLivre: {
          descricao: "Perda no espaço livre em dB",
          formula: "FSPL = 20 × log10(d) + 20 × log10(f) + 32,45",
          onde: "d = distância em km, f = frequência em MHz",
        },
        ganhoAntenaReceptora: {
          descricao: "Ganho da antena receptora em dBi",
          exemplo: "2 dBi (antena omnidirecional)",
        },
        perdaCaboReceptor: {
          descricao: "Perda no cabo coaxial do receptor em dB",
          exemplo: "1 dB (20 metros de RG-58)",
        },
        sensibilidadeReceptor: {
          descricao: "Sensibilidade do receptor em dBm",
          exemplo: "-110 dBm (receptor VHF típico)",
        },
      },
      calculoExemplo: {
        cenario: "Enlace VHF de 10 km em 150 MHz",
        parametros: [
          "Potência TX: 30 dBm",
          "Ganho antena TX: 9 dBi",
          "Perda cabo TX: -2 dB",
          "Perda espaço livre: -95 dB",
          "Ganho antena RX: 2 dBi",
          "Perda cabo RX: -1 dB",
          "Sensibilidade RX: -110 dBm",
        ],
        calculo: "30 + 9 - 2 - 95 + 2 - 1 = -57 dBm",
        margem: "-57 - (-110) = 53 dB de margem",
      },
    },
    troubleshooting: {
      titulo: "Guia de Solução de Problemas",
      problemas: [
        {
          sintoma: "VSWR elevado (> 2:1)",
          causasPossiveis: [
            "Antena danificada ou molhada",
            "Conector mal conectado ou oxidado",
            "Cabo coaxial danificado",
            "Frequência fora da banda da antena",
            "Interferência de objetos próximos",
          ],
          solucoes: [
            "Verificar integridade física da antena",
            "Limpar e reapertar conectores",
            "Testar cabo com ohmímetro",
            "Verificar especificações de frequência",
            "Afastar objetos metálicos da antena",
          ],
        },
        {
          sintoma: "Alcance reduzido",
          causasPossiveis: [
            "Perda excessiva nos cabos",
            "Antena mal orientada",
            "Obstáculos no caminho do sinal",
            "Interferência eletromagnética",
            "Degradação por condições climáticas",
          ],
          solucoes: [
            "Verificar e substituir cabos se necessário",
            "Reorientar antena direcional",
            "Elevar altura da antena",
            "Identificar e eliminar fontes de interferência",
            "Aguardar melhoria das condições climáticas",
          ],
        },
        {
          sintoma: "Ruído excessivo",
          causasPossiveis: [
            "Interferência de equipamentos eletrônicos",
            "Aterramento inadequado",
            "Descargas atmosféricas",
            "Intermodulação de sinais fortes",
            "Receptor saturado",
          ],
          solucoes: [
            "Identificar e afastar fontes de ruído",
            "Melhorar sistema de aterramento",
            "Instalar supressor de surtos",
            "Usar filtros passa-banda",
            "Atenuar sinal de entrada",
          ],
        },
      ],
    },
  },

  // Seção 5: Informações da Empresa (COMPLETA)
  informacoesEmpresa: {
    sobre: {
      historia:
        "Fundada em 1984, a ARS Eletrônica é pioneira no desenvolvimento de soluções de radiocomunicação no Brasil.",
      missao:
        "Fornecer soluções inovadoras e confiáveis em radiocomunicação, contribuindo para a segurança e eficiência das comunicações críticas.",
      visao:
        "Ser reconhecida como líder em tecnologia de radiocomunicação na América Latina.",
      valores: [
        "Inovação constante",
        "Qualidade superior",
        "Compromisso com o cliente",
        "Responsabilidade ambiental",
        "Ética empresarial",
      ],
    },
    certificacoes: [
      {
        nome: "ISO 9001:2015",
        descricao: "Sistema de Gestão da Qualidade",
        validade: "2024-2027",
      },
      {
        nome: "ANATEL",
        descricao: "Homologação de produtos de telecomunicações",
        numero: "Diversos produtos homologados",
      },
      {
        nome: "RoHS",
        descricao:
          "Conformidade com diretiva de restrição de substâncias perigosas",
        aplicacao: "Todos os produtos",
      },
      {
        nome: "CE",
        descricao: "Conformidade Europeia para exportação",
        aplicacao: "Produtos selecionados",
      },
    ],
    contatos: {
      sede: {
        endereco: "Rua Exemplo, 123 - Bairro Industrial",
        cidade: "São Paulo - SP",
        cep: "01234-567",
        telefone: "(11) 1234-5678",
        email: "contato@arseletronica.com.br",
      },
      vendas: {
        telefone: "(11) 1234-5679",
        email: "vendas@arseletronica.com.br",
        horario: "Segunda a sexta, 8h às 18h",
      },
      suporteTecnico: {
        telefone: "(11) 1234-5680",
        email: "suporte@arseletronica.com.br",
        horario: "Segunda a sexta, 8h às 17h",
      },
    },
    redesSociais: {
      linkedin: "https://linkedin.com/company/ars-eletronica",
      youtube: "https://youtube.com/arseletronica",
      instagram: "@arseletronica",
    },
  },

  // Seção 6: FAQ e Suporte (COMPLETA)
  faq: [
    {
      pergunta: "Qual a diferença entre antenas omnidirecionais e direcionais?",
      resposta:
        "Antenas omnidirecionais radiam energia igualmente em todas as direções horizontais, ideais para cobertura de área. Antenas direcionais concentram energia em uma direção específica, oferecendo maior alcance e ganho nessa direção.",
    },
    {
      pergunta: "Como escolher o cabo coaxial adequado?",
      resposta:
        "A escolha depende da frequência, distância e perda aceitável. RG-58 para aplicações curtas, RG-8 ou RG-213 para distâncias maiores e frequências mais altas. Sempre considere a impedância de 50Ω para aplicações de RF.",
    },
    {
      pergunta: "O que é VSWR e qual o valor aceitável?",
      resposta:
        "VSWR (Voltage Standing Wave Ratio) mede a eficiência da transferência de energia entre cabo e antena. Valores ideais são menores que 1,5:1, aceitáveis até 2:1. Valores maiores indicam problemas no sistema.",
    },
    {
      pergunta: "Quando usar duplexadores em sistemas de repetição?",
      resposta:
        "Duplexadores são necessários quando o transmissor e receptor operam simultaneamente na mesma antena, com frequências diferentes. Permitem isolação adequada entre TX e RX, evitando interferências.",
    },
    {
      pergunta: "Como calcular a altura ideal para uma antena?",
      resposta:
        "A altura depende da frequência, tipo de antena e cobertura desejada. Para VHF/UHF, a altura típica é de 10-50 metros. Use a fórmula: d = 1,23 × √h, onde d é a distância em km e h é a altura em metros.",
    },
    {
      pergunta: "Qual a importância do aterramento em sistemas de RF?",
      resposta:
        "O aterramento adequado protege contra descargas atmosféricas, reduz ruído eletromagnético e melhora a eficiência do sistema. Use hastes de cobre e conecte todas as estruturas metálicas.",
    },
    {
      pergunta: "Como identificar interferências em sistemas de comunicação?",
      resposta:
        "Use analisador de espectro para identificar sinais interferentes, verifique proximidade de fontes de ruído (equipamentos eletrônicos, linhas de alta tensão), e teste em diferentes horários para caracterizar o problema.",
    },
    {
      pergunta: "Quais cuidados na instalação em ambientes marinhos?",
      resposta:
        "Use materiais resistentes à corrosão (aço inox, alumínio anodizado), aplique selantes marinhos em todas as conexões, instale drenos de água e realize manutenção preventiva mais frequente.",
    },
  ],

  // Seção 7: Glossário Técnico (COMPLETA)
  glossario: {
    Atenuação:
      "Redução da amplitude de um sinal durante sua transmissão, medida em decibéis (dB).",
    Balun:
      "Dispositivo que converte sinais balanceados em não-balanceados ou vice-versa.",
    dBi: "Decibel isotrópico - medida de ganho de antena em relação a um radiador isotrópico ideal.",
    dBm: "Decibel miliwatt - medida de potência absoluta referenciada a 1 miliwatt.",
    "Diagrama de Radiação":
      "Representação gráfica da distribuição espacial da energia radiada por uma antena.",
    Duplexador:
      "Dispositivo que permite o uso simultâneo de transmissor e receptor na mesma antena.",
    "Frequency Response":
      "Resposta em frequência - variação das características do sistema em função da frequência.",
    Ganho:
      "Capacidade de uma antena de direcionar energia eletromagnética, medido em dBi ou dBd.",
    Impedância:
      "Oposição ao fluxo de corrente alternada, medida em ohms (Ω). Sistemas de RF usam tipicamente 50Ω.",
    "Link Budget":
      "Cálculo que determina a viabilidade de um enlace de RF considerando todas as perdas e ganhos.",
    Multiacoplador:
      "Dispositivo que permite conectar múltiplos receptores a uma única antena.",
    Polarização:
      "Orientação do campo elétrico da onda eletromagnética (vertical, horizontal ou circular).",
    "ROE (SWR)":
      "Razão de Onda Estacionária - medida da eficiência de transferência de energia.",
    VSWR: "Voltage Standing Wave Ratio - razão entre tensão máxima e mínima em uma linha de transmissão.",
  },
};

// Funções de busca e utilidades
export const funcoesBusca = {
  buscarProduto: (termo: string, categoria?: string) => {
    const resultados: any[] = [];
    const termoLower = termo.toLowerCase();

    const categorias = categoria
      ? [categoria]
      : Object.keys(baseDados.catalogoProdutos);

    categorias.forEach((cat) => {
      const categoria =
        baseDados.catalogoProdutos[
          cat as keyof typeof baseDados.catalogoProdutos
        ];
      if (categoria && categoria.subcategorias) {
        Object.values(categoria.subcategorias).forEach((subcategoria) => {
          subcategoria.forEach((produto: any) => {
            const buscarEm = [
              produto.nome,
              produto.modelo,
              produto.descricao,
              ...produto.codigos,
              ...Object.values(produto.especificacoes || {}).flat(),
            ]
              .join(" ")
              .toLowerCase();

            if (buscarEm.includes(termoLower)) {
              resultados.push({
                ...produto,
                categoria: cat,
                relevancia: calcularRelevancia(buscarEm, termoLower),
              });
            }
          });
        });
      }
    });

    return resultados.sort((a, b) => b.relevancia - a.relevancia);
  },

  buscarPorFrequencia: (frequencia: number, unidade: "MHz" | "GHz" = "MHz") => {
    const freqMHz = unidade === "GHz" ? frequencia * 1000 : frequencia;
    const resultados: any[] = [];

    // Buscar antenas compatíveis
    Object.values(baseDados.catalogoProdutos.antenas.subcategorias).forEach(
      (subcategoria) => {
        subcategoria.forEach((produto: any) => {
          if (produto.especificacoes?.eletricas?.frequencia) {
            const freq = produto.especificacoes.eletricas.frequencia;
            if (typeof freq === "string" && freq.includes("/")) {
              const [min, max] = freq
                .split("/")
                .map((f: string) => parseFloat(f.replace(/[^\d.]/g, "")));
              if (freqMHz >= min && freqMHz <= max) {
                resultados.push({ ...produto, categoria: "antenas" });
              }
            }
          }
        });
      }
    );

    return resultados;
  },

  buscarPorAplicacao: (aplicacao: string) => {
    const aplicacaoLower = aplicacao.toLowerCase();
    const segmento = Object.entries(baseDados.aplicacoesPorSegmento || {}).find(
      ([key, value]) =>
        key.toLowerCase().includes(aplicacaoLower) ||
        value.descricao.toLowerCase().includes(aplicacaoLower)
    );

    return segmento ? segmento[1] : null;
  },

  obterEspecificacoesTecnicas: (codigo: string) => {
    for (const categoria of Object.values(baseDados.catalogoProdutos)) {
      if (categoria.subcategorias) {
        for (const subcategoria of Object.values(categoria.subcategorias)) {
          const produto = subcategoria.find((p: any) =>
            p.codigos.includes(codigo)
          );
          if (produto) {
            return produto.especificacoes;
          }
        }
      }
    }
    return null;
  },

  // Análise Estratégica e de Mercado
  analiseEstrategica: {
    mercado: {
      descricao: "Mercado brasileiro e latino-americano de radiocomunicação",
      fatoresCrescimento: [
        {
          fator: "Expansão de Redes Privadas",
          descricao:
            "Crescente adoção de redes LTE/5G privadas por empresas brasileiras, impulsionada pela necessidade de soluções de conectividade personalizadas e seguras.",
        },
        {
          fator: "Digitalização de Setores Críticos",
          descricao:
            "Adoção tecnológica contínua em setores-chave brasileiros como agronegócio (agricultura de precisão, IoT) e segurança pública (comunicações críticas) cria demanda sustentada por soluções de conectividade robustas.",
        },
      ],
      paisageCompetitiva: {
        posicionamento:
          "A ARS Eletrônica se posiciona como fornecedora essencial de componentes passivos de RF para todo o ecossistema de implantações de redes privadas, tornando-se parceira complementar aos grandes provedores de tecnologia e integradores.",
        diferenciais: [
          "Fabricação 100% nacional",
          "Agilidade nas entregas",
          "Homologação ANATEL para todos produtos",
          "Suporte técnico especializado",
          "Personalização de produtos",
        ],
        concorrentes: [
          {
            nome: "Nokia, Ericsson, Huawei",
            tipo: "Provedores Globais de Tecnologia (Parceiros de Ecossistema)",
            relacao:
              "Fornecem a infraestrutura principal da rede para redes privadas. Os produtos da ARS Eletrônica são complementares.",
          },
          {
            nome: "Claro/Embratel, TIM, Vivo",
            tipo: "Integradores de Sistemas / Operadoras (Clientes/Parceiros)",
            relacao:
              "Implantam redes privadas utilizando componentes de vários fornecedores, incluindo ARS Eletrônica.",
          },
        ],
      },
    },
    aplicacoesPorSegmento: {
      seguranca: {
        necessidades:
          "Comunicação confiável e segura em situações críticas para polícia, bombeiros e defesa civil.",
        produtosChave: [
          "Antenas móveis com base magnética",
          "Duplexadores para repetidoras",
          "Sistemas de combinação para múltiplos canais",
        ],
      },
      agronegocioRTK: {
        necessidades:
          "Conectividade em áreas rurais extensas para IoT, automação de veículos e posicionamento de alta precisão.",
        produtosChave: [
          "Antenas de alta potência",
          "Antenas GPS de precisão",
          "Cabos de baixa perda para longas distâncias",
        ],
      },
      mineracaoIndustria: {
        necessidades:
          "Comunicação confiável em ambientes hostis para despacho, controle remoto e segurança.",
        produtosChave: [
          "Antenas robustas para ambientes severos",
          "Filtros duplexadores de alta potência",
          "Conectores de alto desempenho",
        ],
      },
      utilitiesTransporte: {
        necessidades:
          "Comunicações para smart grid, gerenciamento de frotas e comunicações ferroviárias.",
        produtosChave: [
          "Antenas setoriais e omnidirecionais",
          "Combinadores para múltiplos canais",
          "Cabos irradiantes para túneis",
        ],
      },
      lteIoT: {
        necessidades:
          "Componentes fundamentais para construção de redes wireless privadas e públicas.",
        produtosChave: [
          "Antenas LTE (banda 28, 700MHz)",
          "Antenas multi-banda",
          "Antenas compactas para dispositivos IoT",
        ],
      },
    },
  },
};

function calcularRelevancia(texto: string, termo: string): number {
  let relevancia = 0;
  const palavras = termo.split(" ");

  palavras.forEach((palavra) => {
    const ocorrencias = (texto.match(new RegExp(palavra, "gi")) || []).length;
    relevancia += ocorrencias;
  });

  return relevancia;
}

export default baseDados;
