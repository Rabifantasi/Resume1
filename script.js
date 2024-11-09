document.addEventListener("DOMContentLoaded", function () {
    var skillsButton = document.getElementById('skillsButton');
    var skillsSection = document.getElementById('skillsSection');
    if (skillsButton && skillsSection) {
        skillsButton.addEventListener('click', function () {
            skillsSection.classList.toggle('hidden');
        });
    }
    // If you have additional interactions, you can add them here
});
