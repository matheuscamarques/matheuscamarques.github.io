(function() {
  // Constantes globais do site.
  // Atualize aqui telefone, WhatsApp e e-mail quando necessário.
  window.SITE_CONSTANTS = {
    phoneE164: '+5541987399548',
    whatsappUrl: 'https://wa.me/+5541987399548',
    email: '' // opcional: adicione aqui se/quando for usar
  };

  // Assim que o DOM estiver pronto, ajusta todos os links de WhatsApp
  // para usarem os valores acima. Isso centraliza o número em um só lugar.
  document.addEventListener('DOMContentLoaded', function() {
    if (!window.SITE_CONSTANTS) return;

    var whatsappUrl = window.SITE_CONSTANTS.whatsappUrl;
    if (!whatsappUrl) return;

    var links = document.querySelectorAll('a[href^="https://wa.me/"]');

    links.forEach(function(link) {
      // Atualiza o href do link
      link.href = whatsappUrl;

      // Se o link usa o handler gtagSendEvent no onclick inline,
      // reescrevemos para garantir que use a URL centralizada.
      if (typeof gtagSendEvent === 'function') {
        // Sempre sobrescreve o onclick para garantir consistência
        link.onclick = function() {
          return gtagSendEvent(whatsappUrl);
        };
      }
    });
  });
})();
