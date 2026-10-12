# Extensão Canil (Elementor V4) — Plano

Status: **pausado, aguardando insumos**
Referência de funcionalidade: extensão Atomik (Chrome, ID `chnaggkppkkmbimlmdpcdhnomagbkbjc`).
Regra: recriar do zero só as funções úteis. Nada de copiar código do Atomik.

## Objetivo
Parar de redesenhar página de canil a cada cliente (Claude Design → Elementor → ajuste).
A estrutura é ~90% igual; muda nome, raça, fotos, WhatsApp e cores.

## Ordem de construção
1. **Biblioteca de seções** (base, ~80% do valor) — kit `st-*` do Elementor V4, 2 variações cada:
   Hero · Linhagem/pais · Ninhadas disponíveis · Galeria · Como funciona a reserva ·
   Garantias/contrato · Depoimentos · Sobre o criador · FAQ · CTA WhatsApp · Rodapé · Links da bio.
   Placeholders: `{{canil}}`, `{{raca}}`, `{{cidade}}`, `{{whatsapp}}`, `{{instagram}}`, `{{registro}}`.
   Copy padrão do Copy Master já embutida.
   Tudo também em JSON importável pelo Elementor ("Importar modelo") — plano B se a extensão quebrar.
2. **Ficha do cliente** na extensão: nome, raça, cidade, WhatsApp, cores, registro (CBKC/Sobraci), Instagram, fotos. Salva por cliente.
3. **Botão "Montar página"** no editor: escolhe plano (Vitrine Profissional / Sob Medida / Autoridade) e insere as seções preenchidas.
4. **Utilidades:** link WhatsApp com mensagem por raça; checklist pré-publicação (SEO, peso de imagem, alt, telefone clicável); troca rápida de copy por bloco.

## Risco
Elementor V4 ainda muda a estrutura interna → injeção direta no editor pode quebrar em updates. Mitigação: biblioteca também em JSON.

## Insumos pendentes (Gustavo)
- [ ] Página de canil entregue e aprovada, exportada do Elementor (Salvar como modelo → Exportar JSON).
- [ ] `manifest.json` do Atomik (só para entender o mecanismo de inserção).
- [ ] Pasta da extensão Atomik zipada, para análise de arquitetura:
      `%LOCALAPPDATA%\Google\Chrome\User Data\Default\Extensions\chnaggkppkkmbimlmdpcdhnomagbkbjc\<versão>\`
- [ ] Prints da tela de modelos de seção do Atomik (fluxo de uso).
