function submitForm(event) {
  event.preventDefault(); // Prevent form submission from reloading the page

  // Retrieve the input values from the form fields
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const streetAddress = document.getElementById('streetAddress').value;
  const city = document.getElementById('city').value;
  const postalCode = document.getElementById('postalCode').value;
  const country = document.getElementById('country').value;
  const spm = document.getElementById('spm').value;
  const diploma = document.getElementById('diploma').value;
  const degree = document.getElementById('degree').value;
  const phoneNo = document.getElementById('phoneNo').value;

  const textarea = document.getElementById('experience');
  const inputText = textarea.value;

  const linesArray = inputText.split(/\r?\n/);

  // Get the profile picture file input
  const pictureInput = document.getElementById('picture');
  let profilePictureURL = '';

  if (pictureInput.files.length > 0) {
    const pictureFile = pictureInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      // Store the image data URL in a variable
      profilePictureURL = event.target.result;

      // Store the form data in local storage
      const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        streetAddress: streetAddress,
        city: city,
        postalCode: postalCode,
        country: country,
        spm: spm,
        diploma: diploma,
        degree: degree,
        work: linesArray,
        phoneNo: phoneNo,
        profilePicture: profilePictureURL, // Add the profile picture URL to the form data
      };

      localStorage.setItem('formData', JSON.stringify(formData));

      // Navigate to the display_data.html page
      window.location.href = 'display_data.html';
    };

    reader.readAsDataURL(pictureFile); // Read the selected image file as a data URL
  } else {
    // If no image is selected, proceed without the profile picture
    // Store the form data in local storage
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      streetAddress: streetAddress,
      city: city,
      postalCode: postalCode,
      country: country,
      spm: spm,
      diploma: diploma,
      degree: degree,
      work: linesArray,
      phoneNo: phoneNo,
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    // Navigate to the display_data.html page
    window.location.href = 'display_data.html';
  }
}
