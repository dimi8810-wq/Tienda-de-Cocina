// main.js
document.addEventListener('DOMContentLoaded', function() {
    const recipeButtons = document.querySelectorAll('.recipe-button');

    recipeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const recipeId = this.dataset.recipeId;
            fetchRecipeDetails(recipeId);
        });
    });

    function fetchRecipeDetails(id) {
        // Simulate fetching recipe details
        const recipeDetails = {
            1: 'Receta de Pasta: Ingredientes y pasos para preparar una deliciosa pasta.',
            2: 'Receta de Ensalada: Ingredientes y pasos para preparar una fresca ensalada.',
            3: 'Receta de Postre: Ingredientes y pasos para preparar un exquisito postre.'
        };

        const details = recipeDetails[id] || 'Receta no encontrada.';
        displayRecipeDetails(details);
    }

    function displayRecipeDetails(details) {
        const detailsContainer = document.getElementById('recipe-details');
        detailsContainer.textContent = details;
    }
});