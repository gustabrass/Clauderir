# Prompt — Cenas de OBS para gravar vídeos do YouTube (identidade STIRVA)

Você vai criar um kit de cenas para o OBS Studio que eu uso para GRAVAR vídeos do YouTube (não é para live, live eu já tenho). Eu sou o Gustavo, o canal é sobre landing page, carrossel, web design e Elementor/Claude. Os vídeos são gravações longas (40–90 min) de tela com a minha câmera, com pouca edição depois.

## Regra principal
O kit tem que ser "liga e grava": nada que eu precise editar antes de cada gravação. Sem título de aula, sem nome de episódio, sem número, sem data, sem texto que muda. Só moldura, fundo e posição da câmera e da tela. Visual limpo, nada exagerado, nada animado (no máximo uma animação muito sutil e opcional no fundo da cena de abertura). Sem personagens/mascotes: o canal é ligado a mim, ao meu rosto.

## Identidade visual (STIRVA)
- Verde-limão `#C8F04A` (cor principal), preto `#111111`, off-white `#F2EFE8`, vermelho carimbo `#D92D20` (uso raro).
- Fundo característico: verde-limão com grade fina (linhas pretas a ~7% de opacidade, quadrados de 40 px).
- Tipografia: Archivo (peso 900, condensada) para palavras de destaque; Instrument Serif itálico como contraponto; Caveat para anotação manuscrita. Inter para textos pequenos.
- Elementos: cards pretos com cantos arredondados (raio ~22 px), pílulas com borda preta, wordmark "STIRVA" em caixa alta espaçada.
- Uso da marca: discreto. O wordmark pode aparecer pequeno em uma borda, nunca competindo com a tela gravada.

## Cenas (1920×1080, 16:9)
1. **Só tela**: captura de tela ocupando quase tudo, dentro de uma moldura fina sobre o fundo verde-limão com grade (margem pequena para a tela ficar o maior possível e legível).
2. **Tela + câmera (padrão, a que mais vou usar)**: tela grande e câmera em um card no canto INFERIOR DIREITO (não usar o inferior esquerdo: lá entram os cards de "siga no Instagram/inscreva-se/like" na edição, com margem de 96 px). A câmera não pode cobrir área útil da tela; reduzir um pouco a tela para caber a câmera ao lado, em vez de sobrepor.
3. **Tela + câmera lado a lado**: câmera em coluna à direita (~30% da largura, recorte vertical do meu rosto/tronco) e tela à esquerda (~70%). Para explicações em que meu rosto importa.
4. **Câmera cheia**: só eu falando, câmera ocupando o quadro, com uma moldura leve da identidade. Para abertura, opinião e fechamento.
5. **Câmera + espaço lateral**: eu de um lado e um card vazio do outro (preto ou off-white), para eu mostrar algo na tela de um segundo monitor/navegador recortado ou um print.
6. **Abertura curta / "já volto"**: tela de espera com fundo da identidade e a frase fixa "já volto" (ou sem texto), para pausas durante a gravação.
7. **Encerramento**: fundo da identidade com espaço reservado para a tela final do YouTube (dois cards de vídeo e o botão de inscrição nas posições/tamanhos exatos do end screen do YouTube), sem texto que muda.

## Entregáveis
1. **Molduras em PNG com transparência** (1920×1080) para cada cena: fundo + moldura, com os "buracos" exatos onde entram a tela e a câmera. Me diga as coordenadas (x, y, largura, altura) de cada buraco.
2. **Alternativa em HTML** (Browser Source do OBS) para as mesmas molduras, com fontes do Google Fonts, caso eu queira ajustar depois. Sem dependência de nada online além das fontes.
3. **Coleção de cenas do OBS para importar** (arquivo `.json` em Cena → Coleção de cenas → Importar), já com as fontes de captura (Captura de tela, Dispositivo de captura de vídeo, Áudio do microfone) posicionadas e cortadas nos buracos certos, usando caminhos relativos ou com instruções claras para eu apontar os PNGs.
4. **Configuração de gravação para YouTube** (não live), passo a passo em português, nos menus do OBS em português:
   - Gravação em **MP4 híbrido** (ou MKV com remux automático), para não perder o arquivo se o OBS travar.
   - Encoder NVIDIA NVENC (tenho placa NVIDIA), controle de taxa CQP ~20, 1920×1080, 30 fps (60 se a tela tiver muito movimento).
   - Áudio 48 kHz; microfone numa trilha separada da trilha de áudio do sistema (trilhas 1 e 2).
   - Filtros do microfone: supressão de ruído (RNNoise), noise gate leve, compressor, limitador em -1 dB. Valores exatos.
   - Atalho de teclado para **marcador de capítulo** (recurso do MP4 híbrido do OBS): eu aperto durante a gravação nos pontos em que quero zoom ou mudança de assunto, e a edição usa esses marcadores.
   - Atalhos para trocar entre as cenas 1, 2, 3 e 4 sem tirar a mão do teclado.
5. **Guia curto em português** (1 página): como importar, como apontar câmera e tela, como testar, e quando usar cada cena.

## Restrições técnicas
- Tudo legível no celular: a tela gravada é o conteúdo, então a moldura nunca pode diminuir demais a tela. Na cena 2, a tela deve ter pelo menos ~78% da largura.
- Margem de segurança: nada importante a menos de 64 px da borda.
- Nada colado no canto inferior esquerdo (reservado para os cards da edição).
- Respeitar a área da tela final do YouTube na cena de encerramento.
- Arquivos com nomes simples, em português, sem acento (ex.: `cena-2-tela-camera.png`).

Antes de gerar tudo, me mostre uma prévia visual das 7 cenas lado a lado (com placeholders "TELA" e "CÂMERA" nos buracos) para eu aprovar. Depois gere os arquivos finais.
