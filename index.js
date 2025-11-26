// Kiwify Webhook Endpoint (Node.js + Express)
//--------------------------------------------------
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Endpoint para receber Webhooks da Kiwify
app.post('/webhook/kiwify', async (req, res) => {
  try {
    const event = req.body;

    console.log('===========================');
    console.log('📩 Webhook recebido da Kiwify');
    console.log(JSON.stringify(event, null, 2));
    console.log('===========================');

    // Exemplo de tratamento de eventos
    switch (event.event) {
      case 'purchase_approved':
        console.log('✔️ Pagamento aprovado!');
        // TODO: Libere o acesso ao produto, atualize DB, etc.
        break;

      case 'purchase_refunded':
        console.log('⚠️ Compra reembolsada');
        // TODO: Remover acesso, registrar, etc.
        break;

      case 'subscription_renewed':
        console.log('🔄 Assinatura renovada');
        break;

      case 'subscription_canceled':
        console.log('❌ Assinatura cancelada');
        break;

      default:
        console.log('Evento não tratado:', event.event);
    }

    // Sempre responda 200 OK
    res.sendStatus(200);
  } catch (err) {
    console.error('Erro ao processar webhook:', err);
    res.sendStatus(500);
  }
});

// Porta
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Webhook rodando na porta ${port}`));
console.log("-> Carregando versão nova do arquivo index.js");

