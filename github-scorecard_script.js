// Agent Readiness Scorecard - Interactive JavaScript

class ScorecardManager {
    constructor() {
        this.totalScore = 0;
        this.totalDisplay = document.getElementById('totalScore');
        this.checkboxes = document.querySelectorAll('.criteria-checkbox');
        this.init();
    }

    init() {
        this.checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', (e) => this.handleCheckboxClick(e));
        });
    }

    handleCheckboxClick(event) {
        const checkbox = event.target;
        const item = checkbox.closest('.criteria-item');
        const points = parseInt(item.dataset.points);
        const category = checkbox.closest('.category-section');
        const isExclusive = category.dataset.exclusive === 'true';

        if (checkbox.classList.contains('checked')) {
            // Uncheck
            this.uncheckBox(checkbox, points);
        } else {
            // Check - first handle exclusive categories
            if (isExclusive) {
                this.clearCategorySelection(category);
            }
            this.checkBox(checkbox, points);
        }

        this.updateTotalDisplay();
    }

    checkBox(checkbox, points) {
        checkbox.classList.add('checked');
        checkbox.innerHTML = '✓';
        this.totalScore += points;
    }

    uncheckBox(checkbox, points) {
        checkbox.classList.remove('checked');
        checkbox.innerHTML = '';
        this.totalScore -= points;
    }

    clearCategorySelection(category) {
        const categoryCheckboxes = category.querySelectorAll('.criteria-checkbox.checked');
        categoryCheckboxes.forEach(cb => {
            const item = cb.closest('.criteria-item');
            const points = parseInt(item.dataset.points);
            this.uncheckBox(cb, points);
        });
    }

    updateTotalDisplay() {
        this.totalDisplay.textContent = `Total: ${this.totalScore} / 100 Points`;
        this.updateTotalDisplayColor();
    }

    updateTotalDisplayColor() {
        // Optional: Change color based on score
        if (this.totalScore >= 90) {
            this.totalDisplay.style.borderColor = 'rgba(5, 150, 105, 0.5)';
            this.totalDisplay.style.background = 'rgba(5, 150, 105, 0.2)';
        } else if (this.totalScore >= 70) {
            this.totalDisplay.style.borderColor = 'rgba(8, 145, 178, 0.5)';
            this.totalDisplay.style.background = 'rgba(8, 145, 178, 0.2)';
        } else if (this.totalScore >= 50) {
            this.totalDisplay.style.borderColor = 'rgba(234, 88, 12, 0.5)';
            this.totalDisplay.style.background = 'rgba(234, 88, 12, 0.2)';
        } else {
            this.totalDisplay.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            this.totalDisplay.style.background = 'rgba(255, 255, 255, 0.15)';
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ScorecardManager();
});