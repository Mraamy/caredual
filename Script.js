function vote(duelName) {
      alert("You voted for: " + duelName);
      launchConfetti();
    }

    function launchConfetti() {
      const duration = 1000;
      const end = Date.now() + duration;
      (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    }

    function filterDuels() {
      const value = document.getElementById('theme').value;
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        const theme = card.getAttribute('data-theme');
        card.style.display = (value === 'all' || value === theme) ? 'flex' : 'none';
      });

    }
