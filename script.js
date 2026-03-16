// JavaScript functionality for handling quote request form

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quoteRequestForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Collecting client inputs
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const phone = form.elements['phone'].value;
        const serviceType = form.elements['serviceType'].value;
        const propertyDetails = form.elements['propertyDetails'].value;
        const preferredDate = form.elements['preferredDate'].value;

        // Basic form validation
        if (!name || !email || !phone || !serviceType || !propertyDetails || !preferredDate) {
            errorMessage.innerHTML = 'Please fill in all fields.';
            errorMessage.style.display = 'block';
            return;
        }

        // Process the quote request (mock calculation)
        const quoteAmount = calculateQuote(serviceType, propertyDetails);

        // Here you would normally submit the data to your server, e.g., using fetch()
        // For the sake of this example, we will mimic a successful submission:
        setTimeout(function() {
            successMessage.innerHTML = `Quote request submitted! Estimated amount: $${quoteAmount}`;
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            form.reset();
        }, 1000);
    });

    function calculateQuote(serviceType, propertyDetails) {
        // Example calculation logic (can be modified)
        let baseAmount = 100;
        if (serviceType === 'premium') {
            baseAmount += 50;
        }
        return baseAmount;
    }
});
