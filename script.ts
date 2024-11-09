document.addEventListener("DOMContentLoaded", () => {
    const skillsButton = document.getElementById('skillsButton') as HTMLButtonElement;
    const skillsSection = document.getElementById('skillsSection') as HTMLElement;

    if (skillsButton && skillsSection) {
        skillsButton.addEventListener('click', () => {
            skillsSection.classList.toggle('hidden');
        });
    }

    // If you have additional interactions, you can add them here
});