// Add this JavaScript to make your contact form work
// Place it before the closing </body> tag in your HTML

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to your server or email service
    // For example, to use Formspree, you would add action="https://formspree.io/f/your-form-id" to your form tag
    
    // For now, let's just log it
    console.log('Form submitted:', {name, email, subject, message});
    
    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    this.reset();
  });