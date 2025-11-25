# Guia Completo: Otimização SEO Implementada

## ✅ O que foi feito:

### 1. Meta Tags no index.html
- **Title e Description** otimizados com palavras-chave locais
- **Open Graph** (Facebook/WhatsApp): title, description, image, locale
- **Twitter Cards**: compatível com compartilhamento no Twitter/X
- **Canonical URL**: evita conteúdo duplicado
- **Language**: html lang="pt-BR" para idioma português

### 2. Dados Estruturados JSON-LD
Implementados schemas do Schema.org:
- **Person Schema**: Vereador Leôncio Lopes com jobTitle, worksFor (Câmara Municipal)
- **WebSite Schema**: Informações do site com potentialAction (SearchAction)
- **Event Schema**: Cada evento tem schema próprio com data, local, organizador

### 3. Sitemap.xml
Arquivo em `public/sitemap.xml` com todas as rotas:
- Homepage (prioridade 1.0)
- Sobre (prioridade 0.8)
- Mandato (prioridade 0.9)
- Pautas, Projetos de Lei, Fiscalizações (0.8)
- Eventos (0.7)
- Contato (0.6)

### 4. Robots.txt
Arquivo em `public/robots.txt`:
- Permite crawling de todos os bots (User-agent: *)
- Referencia sitemap.xml

### 5. Meta Tags Dinâmicas (react-helmet-async)
Cada página tem title e description específicos:
- **HomePage**: "Mandato em Sete Lagoas - MG"
- **SobrePage**: Trajetória e valores
- **MandatoPage**: Pautas e fiscalizações
- **EventoDetalhe**: Meta tags dinâmicas por evento
- **ContatoPage**: Informações de contato

### 6. Prerendering (react-snap)
Configurado no package.json:
- Gera HTML estático de todas as páginas principais
- Melhora indexação para SPAs (Single Page Applications)
- Rotas incluídas: /, /sobre, /mandato, /mandato/*, /eventos, /contato

### 7. Otimização de Imagens
- **Loading lazy** em imagens de galeria (carregamento sob demanda)
- **Loading eager** na foto principal do Sobre (prioridade)
- Componente ImageWithCaption com atributo loading

---

## 📋 Próximos Passos (recomendado):

### 1. Criar Imagem Open Graph
📄 Consulte o arquivo: `CRIAR_IMAGEM_OG.md`
- Criar imagem 1200x630px com foto do vereador
- Salvar como `public/og-image.jpg`
- Usar Canva, Photopea ou Figma

### 2. Configurar Google Search Console
**Após fazer deploy:**
1. Acesse: https://search.google.com/search-console
2. Adicione a propriedade: https://leonciolopes2528.github.io/
3. Verifique propriedade (método: Meta tag HTML já está no código)
4. Envie o sitemap: https://leonciolopes2528.github.io/sitemap.xml
5. Monitore:
   - Páginas indexadas
   - Consultas de pesquisa
   - Cliques e impressões
   - Problemas de rastreamento

### 3. Configurar Google Analytics (opcional)
Para rastrear visitantes:
1. Crie conta em: https://analytics.google.com/
2. Obtenha o código de rastreamento (GA4)
3. Adicione no `index.html` dentro do `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 4. Melhorar Conteúdo Textual
Adicionar mais texto nas páginas com palavras-chave:
- "Vereador Sete Lagoas"
- "Fiscalização Câmara Municipal"
- "Projetos de Lei Sete Lagoas MG"
- "Mandato transparente"
- "Audiências públicas Sete Lagoas"

### 5. Link Building Local
Conseguir links de:
- Site oficial da Câmara Municipal de Sete Lagoas
- Jornais e portais locais (Sete Dias, SeteLagoas.com.br)
- Associações de bairro
- Redes sociais (bio do Instagram, Facebook)

### 6. Otimizar Imagens WebP/AVIF (futuro)
Converter imagens para formatos modernos:
- WebP: ~30% menor que JPEG
- AVIF: ~50% menor que JPEG
- Usar ferramenta: Squoosh (squoosh.app)

### 7. Performance (Core Web Vitals)
Monitorar no Google Search Console:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 🔍 Como Testar:

### Testar Meta Tags:
1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
   - Cole a URL: https://leonciolopes2528.github.io/
   - Veja preview do compartilhamento

2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator

3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### Testar Dados Estruturados:
1. **Rich Results Test**: https://search.google.com/test/rich-results
   - Cole a URL do site
   - Verifica se Google consegue ler JSON-LD

2. **Schema Markup Validator**: https://validator.schema.org/
   - Cole o código JSON-LD
   - Valida sintaxe Schema.org

### Testar Performance:
1. **PageSpeed Insights**: https://pagespeed.web.dev/
   - Analisa velocidade mobile e desktop
   - Dá sugestões de melhoria

2. **Lighthouse** (Chrome DevTools):
   - F12 → Lighthouse tab
   - Gera relatório completo (SEO, Performance, Accessibility)

---

## 📊 Métricas de Sucesso:

### Curto Prazo (1-2 semanas):
- [ ] Site indexado no Google ("site:leonciolopes2528.github.io")
- [ ] Sitemap processado no Search Console
- [ ] Páginas principais aparecendo na busca

### Médio Prazo (1-3 meses):
- [ ] Ranking nas primeiras páginas para "Vereador Leôncio Lopes"
- [ ] Aparecimento em buscas locais "vereador Sete Lagoas"
- [ ] Rich snippets aparecendo (eventos, pessoa)

### Longo Prazo (3-6 meses):
- [ ] Top 3 para nome do vereador
- [ ] Tráfego orgânico crescente
- [ ] CTR (Click-Through Rate) acima de 5%

---

## 🚀 Deploy:

Para aplicar todas as otimizações em produção:

```powershell
cd meu-blog
npm run deploy
```

Isso irá:
1. Executar build do Vite
2. Copiar index.html → 404.html (para rotas do GitHub Pages)
3. Executar react-snap (gerar HTML estático)
4. Fazer deploy no GitHub Pages

---

## 📱 Redes Sociais:

### Atualizar Bio/Descrição:
Incluir link do site em:
- **Instagram**: @leonciolopes2528
  - Bio: "Vereador em Sete Lagoas 🏛️ | Site: leonciolopes2528.github.io"
  
- **Facebook**: /leonciolopes2528
  - Adicionar site na seção "Informações"

### Stories/Posts:
Divulgar o site com:
- QR Code do site
- Print das funcionalidades (pautas, fiscalizações)
- "Conheça meu site oficial: [link]"

---

## ⚠️ Importante:

### Conteúdo Regular:
Para manter bom ranking:
- Atualizar eventos regularmente
- Adicionar novas pautas e projetos de lei
- Publicar fiscalizações recentes
- Manter informações sempre atualizadas

### Evitar:
- ❌ Copiar conteúdo de outros sites (plágio penaliza)
- ❌ Texto escondido ou invisível
- ❌ Palavras-chave em excesso (keyword stuffing)
- ❌ Links quebrados ou páginas 404
- ❌ Site fora do ar ou lento

---

## 📞 Suporte:

Dúvidas sobre SEO? Recursos úteis:
- Google Search Central: https://developers.google.com/search
- Moz Beginner's Guide: https://moz.com/beginners-guide-to-seo
- Search Engine Journal: https://www.searchenginejournal.com/

**Sucesso com o site! 🎉**
