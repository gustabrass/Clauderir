---
name: edicao-youtube
description: Edição de vídeos do canal do Gustavo no FilmCraft (via MCP), no estilo "editado por gente, não por IA": corte de pausas longas, áudio limpo, capítulos, notas na tela e chamadas (Instagram, inscreva-se, like) em momentos certos. Use quando o usuário pedir para editar vídeo do YouTube, montar a edição no FilmCraft, deixar o vídeo mais dinâmico, ou gerar capítulos/legenda de um vídeo gravado.
---

# Edição YouTube — estilo limpo

## Princípio (vale para tudo)

A edição tem que parecer feita por um editor cuidadoso, nunca por IA. **Proibido:** legenda palavra por palavra pulando na tela, emoji na tela, zoom a cada frase, efeito sonoro de "whoosh", transição chamativa, B-roll de banco genérico, texto animado letra a letra, música alta. Todo elemento na tela precisa de um motivo de conteúdo.

## Modos

| | LONGO (padrão) | FECHADO |
|---|---|---|
| Vídeo | Gravação de 40–90 min, tutorial completo | 8–15 min, um assunto ("criar página no Claude Design e levar pro Elementor") |
| Cortes | Só pausas longas (ver `cortar-silencio`) | Pausas + falsos começos, repetições e trechos de espera (renderização, upload) |
| Zoom | Só nos marcadores que o Gustavo deixar | Zoom no ponto da tela em cada passo importante |
| Chamadas | 3 no vídeo todo | 2 no vídeo todo |
| Abertura | Começa direto no conteúdo | Gancho: a melhor frase/resultado nos primeiros 15 s, depois "vamos lá" |

## Ferramentas

- **FilmCraft via MCP** (servidor `filmcraft`, modo bridge, app aberto com `--control 9876`). Não decorar nomes de comando: rodar `command_list` com `filter` (ex.: `marker`, `gain`, `scale`, `import`) para achar o id certo, depois `command_run`/`command_batch`. Conferir com `render_frame`. Errou → `edit.undo`.
- **auto-editor** para detectar pausas (parâmetros na skill `cortar-silencio`).
- **faster-whisper** (`pip install faster-whisper`, modelo `medium` ou `large-v3`, `language="pt"`) para transcrição: gera capítulos, notas na tela e o SRT.
- **Overlays prontos** em `edicao/overlays/`: `cta-instagram.png`, `cta-inscreva-se.png`, `cta-like.png` (1920×1080, fundo transparente, card no canto inferior esquerdo com margem de 96 px).

## Fluxo — modo LONGO

1. **Cortar pausas:** auto-editor → XML (FCP7) → importar no FilmCraft.
2. **Áudio (maior ganho de qualidade sem cara de edição):**
   - DeNoise leve na trilha de voz (só se houver ruído audível).
   - Compressor suave + normalizar a voz para **-14 LUFS** integrado (pico máx. -1 dBTP).
   - Sem música de fundo no modo LONGO.
3. **Transcrever** o vídeo já cortado (faster-whisper) e salvar `video.srt` ao lado do vídeo.
4. **Capítulos:** dividir por mudança de assunto (mínimo 3 min cada, títulos em forma de pergunta quando possível). Colocar um marcador no FilmCraft em cada início de capítulo e gerar o bloco de capítulos com tempos reais para a descrição.
5. **Card de capítulo** (opcional, só se o capítulo mudar de etapa grande): texto simples no canto superior esquerdo, 3 s, entra e sai com dissolve de 6 frames. Ex.: "Parte 2 — Montando no Elementor". Fonte sans pesada, branca em caixa preta.
6. **Notas na tela:** só para informação que a pessoa precisa anotar ou copiar: atalho de teclado, valor, nome de plugin, link, configuração. Detectar na transcrição frases como "anota", "importante", "o atalho é", "o link tá", números e nomes de ferramenta. Caixa preta no canto inferior esquerdo, 4–6 s, mesma fonte. Máximo 1 a cada ~5 min.
7. **Chamadas (CTAs)**, dissolve de 6 frames na entrada e saída, 5 s na tela, nunca em cima de outra nota:
   - `cta-instagram.png`: entre 3 e 5 min, logo depois do primeiro momento de valor (não no começo).
   - `cta-like.png`: logo depois do primeiro resultado visível (a página ficou pronta, o erro foi resolvido) — normalmente entre 35% e 50% do vídeo.
   - `cta-inscreva-se.png`: perto do fim, antes do encerramento (não nos últimos 20 s, que são da tela final).
8. **Zoom:** só onde houver marcador do Gustavo (ele marca na revisão). Zoom de 100% → 140–160% centralizado na região indicada, com transição de 10 frames, segurar enquanto ele explica, voltar.
9. **Exportar** e entregar junto: `video.srt` (subir no YouTube como legenda — ajuda busca e IA), bloco de capítulos com tempos, lista do que foi inserido e onde.

## Fluxo — modo FECHADO

Tudo do LONGO, mais:
- Cortar falsos começos e repetições (comparar frases repetidas na transcrição; manter a última versão, que costuma ser a boa).
- Acelerar ou cortar esperas (carregamento, renderização) para no máximo 2 s, com nota "acelerado" se a espera for parte do processo.
- Zoom no ponto da tela em cada passo importante (máximo 1 a cada 30–40 s).
- Gancho de abertura: escolher na transcrição a frase de resultado mais forte (≤ 15 s) e colocar no início, seguida do começo normal.
- Música de fundo opcional, instrumental, a -30 LUFS abaixo da voz, só na abertura e no encerramento.

## Regras de checagem antes de exportar

- Nenhum elemento colado na borda (margem de 96 px em 1080p).
- Nenhum CTA ou nota cobrindo a área da tela onde a ação está acontecendo.
- Ouvir 3 trechos aleatórios: voz sem corte de sílaba, volume constante.
- Contar elementos inseridos: LONGO ≤ 3 CTAs, notas ≤ 1 a cada 5 min.
- Mostrar `render_frame` de cada CTA e nota ao Gustavo antes de exportar.
