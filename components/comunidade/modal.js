    // Script atualizado para garantir o funcionamento correto do modal
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const modalInfo = document.getElementById("modal-info");
    const closeBtn = document.getElementsByClassName("close")[0];

    function openModal(card) {
        const cardImg = card.querySelector('img');
        const visibleInfo = card.querySelector('.bee-info').innerHTML;
        const hiddenInfo = card.querySelector('.hidden-info').innerHTML;
        
        modalImg.src = cardImg.src;
        modalImg.alt = cardImg.alt;
        
        modalInfo.innerHTML = `
            ${visibleInfo}
            <div class="modal-metadata">
                ${hiddenInfo}
            </div>
        `;
        
        modal.style.display = "block";
        document.body.style.overflow = 'hidden'; // Previne rolagem do fundo
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = ''; // Restaura a rolagem
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = ''; // Restaura a rolagem
        }
    }
    function toggleFilter() {
        document.getElementById("filterDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.filter-icon') && !event.target.matches('.fa-filter')) {
            var dropdowns = document.getElementsByClassName("filter-dropdown");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }