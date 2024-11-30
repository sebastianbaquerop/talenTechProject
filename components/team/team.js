document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const role = card.getAttribute('data-role');
        card.style.boxShadow = `0 10px 20px ${role === 'Líder de Proyecto' ? '#788ba9' : 
                                           role === 'Diseñador' ? '#1abc9c' : 
                                           role === 'QA' ? '#f1c40f' : '#3498db'}`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0)';
    });
});