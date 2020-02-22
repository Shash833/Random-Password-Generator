# Random Password 

## Introduction
This website was formed to create a randomly generated password based on a selection of criteria on types of characters to be used. To create the website, a Javascript file with code formulated to generate a random password was linked to the HTML file. 

This was created for the User who wished to use a secure password. The User also provided an acceptance criteria for the website which was followed. 

The "Password Generator" website can be veiwed with the following link: https://shash833.github.io/Random-Password-Generator/.

### Acceptance Criteria:

~~~
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
~~~

When the "Generate Password" button on the website is clicked, a series of 'confirm' boxes with questions regarding the criteria appear for the user to select from as shown below: 

![Confirm box image](/assets/README_images/prompt-img.png)

 The following questions were used: 
* Do you want lower case letters?
* Do you want upper case letters?
* Do you want numbers?
* Do you want special symbols?
------
~~~
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
~~~
As above, a 'prompt' box will appear prompting the user to select the length of their password. If the chosen length is less then 8 or greater then 128, they will be advised of the length criteria as shown below. After this alert, the user will be prompted again.
![Confirm box image](/assets/README_images/length-criteria-img.png)

---------
~~~
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
~~~

After the user has selected their desired character types and password length through the 'confirm' and 'prompt' boxes, their selection can be validated through a 'confirm' box which will list their choices (as shown below). The user also has a choice to change their mind and cancel their selection, which will re-run the function and present them with the password criteria questions again. 

![Confirm box image](/assets/README_images/validate-img.png)


The user must also select at least one character type, if not they will be presented with the 'alert' shown below and will be presented with the series password criteria questions again.

![Confirm box image](/assets/README_images/no-selection-img.png)

---------
~~~~
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
~~~~

After the user has selected their password criteria and validated it, the password will be generated and presented as below:

![Confirm box image](/assets/README_images/password-img.png)

---------