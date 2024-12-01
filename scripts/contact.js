// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const form = document.querySelector('#contact-page form');
const contactPage = document.getElementById('contact-page');

form.onsubmit = function () {
  const thanksMsg = document.createElement('p');
  thanksMsg.innerHTML = 'Thank you for your message!';
  thanksMsg.style.fontSize = '24px';
  contactPage.innerHTML = '';
  contactPage.appendChild(thanksMsg);
};
