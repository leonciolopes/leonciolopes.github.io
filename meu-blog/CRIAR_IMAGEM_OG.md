# Guia: Imagem Open Graph (og-image.jpg)

## O que é?
A imagem Open Graph aparece quando seu site é compartilhado no Facebook, WhatsApp, Twitter e outras redes sociais.

## Especificações:
- **Tamanho recomendado**: 1200 x 630 pixels
- **Formato**: JPG ou PNG
- **Peso máximo**: Menos de 1MB para carregamento rápido
- **Nome do arquivo**: og-image.jpg

## Onde colocar:
Salve a imagem em: `meu-blog/public/og-image.jpg`

## Sugestões de conteúdo:
1. **Foto do Vereador Leôncio Lopes** (centralizada)
2. **Texto principal**: "Vereador Leôncio Lopes"
3. **Subtítulo**: "Mandato em Sete Lagoas - MG"
4. **Elementos visuais**:
   - Logo ou bandeira de Sete Lagoas
   - Cores: Azul (#2563eb) e branco (seguindo identidade do site)
5. **Informação adicional** (opcional):
   - "Transparência | Fiscalização | Projetos de Lei"
   - Ícones de redes sociais

## Ferramentas gratuitas para criar:
- **Canva** (canva.com): Possui templates prontos para "Open Graph Image"
- **Photopea** (photopea.com): Editor online gratuito estilo Photoshop
- **Figma** (figma.com): Design profissional, gratuito para uso pessoal

## Como criar no Canva (passo a passo):
1. Acesse canva.com e faça login
2. Clique em "Criar um design"
3. Escolha "Dimensões personalizadas": 1200 x 630 pixels
4. Adicione:
   - Background com cor azul (#2563eb) ou gradiente
   - Foto do Vereador (upload da foto-leoncio.png)
   - Texto "Vereador Leôncio Lopes" em fonte grande e legível
   - Texto "Mandato em Sete Lagoas - MG"
5. Baixe como JPG (qualidade alta)
6. Salve em: `meu-blog/public/og-image.jpg`

## Exemplo de layout:
```
┌─────────────────────────────────────────┐
│                                         │
│    [Foto Leôncio]                       │
│                                         │
│    VEREADOR LEÔNCIO LOPES               │
│    Mandato em Sete Lagoas - MG          │
│                                         │
│    Transparência • Fiscalização         │
│                                         │
└─────────────────────────────────────────┘
```

## Após criar a imagem:
A imagem já está configurada no código (index.html). Basta salvá-la em `public/og-image.jpg` e fazer o deploy!

## Teste de compartilhamento:
Depois do deploy, teste como ficará ao compartilhar:
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
