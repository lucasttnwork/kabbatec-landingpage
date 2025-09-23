# Playwright MCP Server - Configuração para Cursor

Este documento explica como configurar e usar o servidor Playwright MCP no Cursor para automação de navegador e testes.

## ✅ Instalação Automática (Recomendada)

### Opção 1: Configuração por Workspace (Automática)
**✅ Esta configuração já foi criada automaticamente!**

O Cursor detecta automaticamente servidores MCP configurados no arquivo `.cursor/.mcp.json` do workspace:

1. **Arquivo criado**: `.cursor/.mcp.json`
2. **Servidor configurado**: `playwright`
3. **Cursor detecta automaticamente** ao abrir o workspace

**Para usar:**
1. Reinicie o Cursor (se já estava aberto)
2. O servidor `playwright` aparecerá automaticamente na aba MCP
3. Pronto para usar!

### Opção 2: Instalação Manual via Cursor Settings (Alternativa)
Se a configuração automática não funcionar:

1. Abra o Cursor
2. Vá para `Settings` → `MCP` → `Add new MCP Server`
3. Preencha os seguintes campos:
   - **Name**: `playwright`
   - **Type**: `command`
   - **Command**: `npx`
   - **Arguments**: `@playwright/mcp@latest --host 0.0.0.0 --port 8931`

### Opção 2: Instalação via Botão (se disponível)
Se o botão de instalação automática estiver disponível no Cursor:
1. Clique no botão de instalação do Playwright MCP
2. Confirme a instalação
3. O servidor será configurado automaticamente

## 🔧 Configuração Manual

### 1. Arquivos de Configuração
O projeto já inclui os seguintes arquivos de configuração:

- `playwright-mcp-config.json` - Configuração otimizada do servidor MCP
- Scripts no `package.json` para facilitar o uso

### 2. Scripts Disponíveis
```bash
# Iniciar servidor MCP com interface gráfica
npm run mcp:start

# Iniciar servidor MCP em modo headless
npm run mcp:headless
```

### 3. Configuração Manual Detalhada
Se precisar configurar manualmente no Cursor:

1. **Configuração Básica** (funciona na maioria dos casos):
   ```json
   {
     "mcpServers": {
       "playwright": {
         "command": "npx",
         "args": [
           "@playwright/mcp@latest"
         ]
       }
     }
   }
   ```

2. **Configuração Avançada** (com arquivo de configuração):
   ```json
   {
     "mcpServers": {
       "playwright": {
         "command": "npx",
         "args": [
           "@playwright/mcp@latest",
           "--config",
           "playwright-mcp-config.json"
         ]
       }
     }
   }
   ```

## 🛠️ Recursos Disponíveis

O Playwright MCP oferece as seguintes funcionalidades:

### Core Automation
- **browser_click** - Clicar em elementos
- **browser_type** - Digitar texto
- **browser_navigate** - Navegar para URLs
- **browser_snapshot** - Capturar snapshot da página
- **browser_take_screenshot** - Tirar screenshot
- **browser_fill_form** - Preencher formulários
- **browser_wait_for** - Aguardar elementos

### Tab Management
- **browser_tabs** - Gerenciar abas do navegador

### Advanced Features
- **browser_install** - Instalar navegadores
- **browser_pdf_save** - Salvar como PDF
- **browser_mouse_click_xy** - Clicar em coordenadas específicas

## ⚙️ Configuração do Projeto

### Navegadores Instalados
✅ Chromium, Firefox, WebKit já estão instalados via `npx playwright install`

### Configurações Otimizadas
- Navegador padrão: Chromium
- Viewport: 1280x720
- Modo: Headless (desabilitado para interatividade)
- Recursos avançados: Habilitados (tabs, install, pdf, vision)

## 🚀 Como Usar

### 1. Iniciar o Servidor
```bash
npm run mcp:start
```

### 2. No Cursor
Após configurar o servidor MCP no Cursor, você pode:
- Usar comandos como `@playwright browser_navigate https://example.com`
- Interagir com elementos da página através de comandos naturais
- Automatizar tarefas de navegação e teste

### 3. Exemplo de Uso
```bash
# Navegar para uma URL
@playwright browser_navigate https://kabbatec.com

# Clicar em um botão
@playwright browser_click "Clique aqui para começar"

# Preencher um formulário
@playwright browser_fill_form [{"name": "email", "value": "test@example.com"}]

# Capturar snapshot
@playwright browser_snapshot
```

## 🔍 Solução de Problemas

### Problema: MCP não aparece no Cursor
1. **Verifique se o servidor está rodando**:
   ```bash
   netstat -an | findstr :8931
   ```
   Deve mostrar `LISTENING` na porta 8931.

2. **Reinicie o Cursor** após adicionar a configuração.

3. **Tente configurações diferentes**:
   - Use apenas: `npx @playwright/mcp@latest`
   - Use: `npx @playwright/mcp@latest --host 0.0.0.0 --port 8931`

4. **Verifique os logs do Cursor** para erros.

5. **Certifique-se de que o servidor MCP está rodando** antes de abrir o Cursor:
   ```bash
   npm run mcp:start
   ```

### Erro: "Browser not installed"
```bash
npx playwright install
```

### Erro: "Port already in use"
Altere a porta na configuração:
```json
{
  "server": {
    "port": 8932
  }
}
```

### Erro: "Permission denied"
Execute com privilégios adequados ou desabilite sandbox:
```bash
npx @playwright/mcp@latest --no-sandbox
```

### Erro: "Connection refused"
1. Certifique-se de que o servidor MCP está rodando
2. Verifique se não há firewall bloqueando a porta 8931
3. Tente usar `localhost` em vez de `0.0.0.0`

## 📁 Arquivos de Configuração

### .cursor/.mcp.json (Configuração Principal)
- **Arquivo principal** que o Cursor detecta automaticamente
- Configuração do servidor Playwright MCP para este workspace
- Localização: `.cursor/.mcp.json`

### playwright-mcp-config.json
- Configurações otimizadas para desenvolvimento
- Suporte a múltiplas funcionalidades
- Configuração de rede e segurança

### Configuração Atual no .cursor/.mcp.json
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest",
        "--host",
        "localhost",
        "--port",
        "8931",
        "--no-sandbox"
      ]
    }
  }
}
```

### playwright.config.ts
- Configuração existente do Playwright para testes
- Compatível com o servidor MCP

## 🔄 Atualizações

Para atualizar o Playwright MCP:
```bash
npm update @playwright/mcp
```

Para verificar a versão atual:
```bash
npx @playwright/mcp@latest --version
```

## 📚 Referências

- [Documentação oficial do Playwright MCP](https://github.com/microsoft/playwright-mcp)
- [Guia de instalação no Cursor](#cursor)
- [Lista completa de ferramentas](#tools)

## ✅ **Verificação da Instalação**

### 1. Verificar se o arquivo de configuração foi criado
Execute no terminal:
```bash
dir .cursor
```
Deve mostrar a pasta `.cursor` e o arquivo `.mcp.json` dentro dela.

### 2. Verificar o conteúdo do arquivo de configuração
```bash
type .cursor\.mcp.json
```
Deve mostrar a configuração do Playwright MCP.

### 3. Verificar se o servidor está rodando
Execute no terminal:
```bash
netstat -an | findstr :8931
```
Deve mostrar `LISTENING` na porta 8931.

### 4. Iniciar o servidor (se necessário)
```bash
# Para uso geral
npm run mcp:start

# Para uso específico com Cursor
npm run mcp:cursor
```

### 5. Verificar no Cursor
1. **Reinicie o Cursor** (se já estava aberto)
2. Vá para qualquer aba do chat
3. O servidor `playwright` deve aparecer automaticamente na seção MCP
4. Se não aparecer, vá para `Settings` → `MCP` e verifique

### 6. Testar no Cursor
Após o servidor aparecer, teste com:
```
@playwright browser_navigate https://example.com
@playwright browser_snapshot
```

## 🎯 **Status da Instalação**
- ✅ **Servidor MCP instalado**: `@playwright/mcp v0.0.39`
- ✅ **Navegadores instalados**: Chromium, Firefox, WebKit
- ✅ **Configuração por workspace**: `.cursor/.mcp.json` criado
- ✅ **Servidor rodando na porta 8931**
- ✅ **Configurações otimizadas criadas**
- ✅ **Documentação completa disponível**

## 🚀 **Como Usar Agora**

1. **Reinicie o Cursor** (feche e reabra)
2. O servidor `playwright` aparecerá automaticamente
3. Use comandos como:
   ```bash
   @playwright browser_navigate https://kabbatec.com
   @playwright browser_snapshot
   @playwright browser_take_screenshot
   ```

**Se o MCP ainda não aparecer no Cursor, consulte a seção "Problema: MCP não aparece no Cursor" em Solução de Problemas.**
