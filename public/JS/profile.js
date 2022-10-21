const e = require("express");

const newFormHandler = async (event) => {
    event.preventDefault();
  
    // const name = document.querySelector('#project-name').value.trim();
    // const needed_funding = document.querySelector('#project-funding').value.trim();
    // const description = document.querySelector('#project-desc').value.trim();
    const email = document.querySelector('.email').value.trim();

    if (email) {
      const response = await fetch(`/api/users`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };