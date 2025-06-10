document.addEventListener('DOMContentLoaded', function() {
  // Modal functionality
  const modal = document.getElementById("ticketModal");
  const btn = document.getElementById("openModal");
  const span = document.getElementsByClassName("close")[0];
  
  btn.onclick = function() {
      modal.style.display = "block";
  }
  
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  
  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-button");
  
  tabButtons.forEach(button => {
      button.addEventListener("click", function() {
          // Remove active class from all buttons and contents
          tabButtons.forEach(btn => btn.classList.remove("active"));
          document.querySelectorAll(".tab-content").forEach(content => {
              content.classList.remove("active");
          });
          
          // Add active class to clicked button and corresponding content
          this.classList.add("active");
          const tabId = this.getAttribute("data-tab");
          document.getElementById(tabId).classList.add("active");
      });
  });
});




document.addEventListener('DOMContentLoaded', function() {
  // ... código existente para o primeiro modal ...

  // Botão Garantir ingresso
  const garantirBtn = document.querySelector('.garantir-btn');
  const garantirModal = document.getElementById("garantirModal");
  const closeGarantir = garantirModal.querySelector(".close");

  // Transformar o h2 em botão
  const h2Garantir = document.querySelector('h2:contains("Garantir ingresso")');
  if (h2Garantir) {
      h2Garantir.outerHTML = '<button class="garantir-btn">Garantir ingresso</button>';
  }

  // Abrir modal Garantir ingresso
  document.addEventListener('click', function(e) {
      if (e.target.classList.contains('garantir-btn')) {
          garantirModal.style.display = "block";
      }
  });

  // Fechar modal Garantir ingresso
  closeGarantir.onclick = function() {
      garantirModal.style.display = "none";
  }

  // Fechar ao clicar fora
  window.onclick = function(event) {
      if (event.target == garantirModal) {
          garantirModal.style.display = "none";
      }
  }
});






// Adicionar isso junto aos outros event listeners
document.querySelector('.descricao-btn').addEventListener('click', function() {
    // Exemplo: rolar até a descrição do evento
    document.querySelector('.event-info-container').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // Ou pode abrir um modal com mais detalhes
    // alert("Mostrar descrição detalhada do evento");
});



// Abrir modal do The Town quando clicar no item correspondente
document.querySelectorAll('.ticket-item').forEach(item => {
    item.addEventListener('click', function() {
        if (this.querySelector('h4').textContent.includes('The Town')) {
            document.getElementById('theTownModal').style.display = 'block';
        }
    });
});

// Fechar modal do The Town
document.querySelector('.town-close').onclick = function() {
    document.getElementById('theTownModal').style.display = 'none';
}

// Fechar ao clicar fora
window.onclick = function(event) {
    if (event.target == document.getElementById('theTownModal')) {
        document.getElementById('theTownModal').style.display = 'none';
    }
}

// Botão Descrição do Evento - rolar para a descrição
document.querySelector('.town-descricao').addEventListener('click', function() {
    document.querySelector('#theTownModal .event-info-container').scrollIntoView({ 
        behavior: 'smooth' 
    });
});



// Fechar modal do The Town e voltar para página anterior
document.querySelector('.town-close').onclick = function() {
    document.getElementById('theTownModal').style.display = 'none';
    window.history.back(); // Esta linha faz voltar para a página anterior
}

