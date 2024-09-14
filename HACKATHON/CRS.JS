function showDepartments() {
    const educationLevel = document.getElementById('education-level').value;
    const departmentSelect = document.getElementById('department');
    const departmentGroup = document.getElementById('department-group');

    // Clear existing options
    departmentSelect.innerHTML = '';

    const departments = {
        '12th': ['Arts', 'Commerce', 'Science'],
        'graduation': ['Engineering']
    };

    // Populate department options based on educational level
    if (departments[educationLevel]) {
        let options = `<option value="" disabled selected>Select your department</option>`;
        departments[educationLevel].forEach(dept => {
            options += `<option value="${dept.toLowerCase()}">${dept}</option>`;
        });
        departmentSelect.innerHTML = options;
        departmentGroup.style.display = 'block';
    }
}

function showRecommendations() {
    const department = document.getElementById('department').value;
    const recommendationSection = document.getElementById('career-recommendation');
    const recommendationsList = document.getElementById('recommendations-list');

    const recommendations = {
        'arts': ['Journalism', 'Psychology', 'History Researcher'],
        'commerce': ['Chartered Accountant', 'Banking & Finance', 'Business Analyst'],
        'science': ['Doctor', 'Pharmacist', 'Research Scientist'],
        'engineering': ['Software Engineer', 'Mechanical Engineer', 'Electrical Engineer']
    };

    // Display recommendations based on the selected department
    if (recommendations[department]) {
        let listItems = '';
        recommendations[department].forEach(career => {
            listItems += `<li class="list-group-item">${career}</li>`;
        });
        recommendationsList.innerHTML = listItems;
        recommendationSection.style.display = 'block';
    }
}



  