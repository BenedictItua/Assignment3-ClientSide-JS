// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    
    // Get references to the buttons and forms
    const pickupBtn = document.getElementById('pickupBtn');
    const deliveryBtn = document.getElementById('deliveryBtn');
    const pickupForm = document.getElementById('pickupForm');
    const deliveryForm = document.getElementById('deliveryForm');

    // Hide both forms initially
    pickupForm.style.display = 'none';
    deliveryForm.style.display = 'none';

    // Add event listener to the Pickup button
    pickupBtn.addEventListener('click', () => {
        // Display the Pickup form and hide the Delivery form
        pickupForm.style.display = 'block';
        deliveryForm.style.display = 'none';
    });

    // Add event listener to the Delivery button
    deliveryBtn.addEventListener('click', () => {
        // Display the Delivery form and hide the Pickup form
        deliveryForm.style.display = 'block';
        pickupForm.style.display = 'none';
    });

    // Add event listener to the Submit Order button in Pickup form
    document.getElementById('submitOrderBtn').addEventListener('click', function (e) {
        // Prevent the default form submission
        e.preventDefault();
        // Show a success message
        alert('Order Submitted Successfully!');
        // Reset the entire page
        location.reload();
    });

    // Add event listener to the Submit Order button in Delivery form
    document.getElementById('submitOrderBtnDelivery').addEventListener('click', function (e) {
        // Prevent the default form submission
        e.preventDefault();
        // Show a success message
        alert('Order Submitted Successfully!');
        // Reset the entire page
        location.reload();
    });
});
