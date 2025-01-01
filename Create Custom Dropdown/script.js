// Get DOM Elements
const options = document.getElementsByClassName('option');
const selectEle = document.querySelector('.select');
const optionList = document.querySelector('.option-list');
const icon = document.querySelector('.icon');
const dropdown = document.querySelector('.dropdown-select');

// Toggle dropdown visibility on click
dropdown.onclick = function () {
    optionList.classList.toggle('active');
    // Change icon direction based on dropdown state
    icon.innerHTML = optionList.classList.contains('active') ? "&#9650;" : "&#9660;";
};

// Add click event to each option
for (let op of options) {
    op.onclick = function () {
        // Update selected text
        selectEle.innerHTML = this.innerHTML;
        // Close dropdown after selection
        optionList.classList.remove('active');
        // Reset the icon
        icon.innerHTML = "&#9660;";
        // Highlight selected option (Optional)
        Array.from(options).forEach(option => option.classList.remove('selected'));
        this.classList.add('selected');
    };
}
