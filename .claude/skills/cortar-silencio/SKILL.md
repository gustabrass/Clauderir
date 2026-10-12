---
name: cortar-silencio
description: Corta só as pausas longas de vídeos de tutorial/gravação de tela (sem picotar a fala) usando auto-editor. Use quando o usuário pedir para cortar silêncio, remover pausas, deixar o vídeo mais dinâmico ou "tirar os silêncios" de um vídeo.
---

# Cortar silêncio (vídeo de tutorial)

Objetivo: remover apenas pausas longas. Pausa curta de respiração e de raciocínio fica. Nada de jump cut agressivo, porque em gravação de tela o "silêncio" muitas vezes é o momento em que a pessoa está clicando/digitando.

## Parâmetros padrão (validados)

| Parâmetro | Valor | Efeito |
|---|---|---|
| `threshold` | `4%` | O que fica abaixo disso é considerado silêncio |
| `mincut` | `0.8s` | Só corta pausas de 0,8 s ou mais. Pausas menores ficam intactas |
| `margin` | `0.2s,0.3s` | Mantém 0,2 s antes e 0,3 s depois de cada fala. Toda pausa longa vira ~0,5 s, sem cortar sílaba |

Resultado no teste: vídeo de 12 s com pausa de 0,4 s e pausa de 2,5 s → a pausa de 0,4 s ficou e a de 2,5 s virou 0,5 s (12 s → 10 s).

## Passo a passo

1. Garantir as ferramentas: `ffmpeg -version` e `auto-editor --version`. Se faltar o auto-editor: `pip install auto-editor` (na primeira execução ele baixa o binário sozinho).
2. Ver duração e tamanho do original: `ffprobe -v error -show_entries format=duration -of csv=p=0 "VIDEO"`.
3. **Padrão: exportar linha do tempo para revisão** (não re-renderiza, é rápido e o usuário pode desfazer cortes de tela):
   ```
   auto-editor "VIDEO" --edit "audio:threshold=4%,mincut=0.8s" --margin "0.2s,0.3s" --export premiere -o "VIDEO_cortes.xml" --no-open
   ```
   Outros editores: `--export resolve` (DaVinci), `--export final-cut-pro`, `--export shotcut`.
   O XML aponta para o vídeo original; não mover o arquivo de lugar antes de abrir.
4. **Se o usuário quiser o vídeo pronto direto:**
   ```
   auto-editor "VIDEO" --edit "audio:threshold=4%,mincut=0.8s" --margin "0.2s,0.3s" -o "VIDEO_sem_silencio.mp4" --no-open
   ```
5. Reportar: duração antes, duração depois, minutos removidos.

## Ajustes conforme o resultado

- Ainda picotado → `mincut=1.2s` ou `--margin "0.3s,0.4s"`.
- Sobrou pausa demais → `mincut=0.6s`.
- Ruído de fundo/ar-condicionado faz pausa não ser detectada → `threshold=6%`.
- Voz muito baixa sendo cortada → `threshold=2%`.
- Para visualizar antes de decidir: `auto-editor "VIDEO" --edit "audio:threshold=4%,mincut=0.8s" --margin "0.2s,0.3s" --preview` (mostra quanto será cortado sem gerar arquivo).

## Regras

- Nunca sobrescrever o original. Sempre gerar arquivo novo ao lado.
- Vídeos grandes (GB): rodar na máquina do usuário, não subir para a nuvem.
