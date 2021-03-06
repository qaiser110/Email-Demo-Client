
## Introduction

This repository contains the client-side code for a demo for sending emails. The backend uses Sendgrid email delivery system to send the email messages. In case Sendgrid fails to send the mail and returns an error, the backend falls back to using Mailgun for the delivery of emails.

### Pre-requisites

- [Node.js](https://nodejs.org/en/download/) should be installed

### Download and Installation

To install and run the client-side app, run these command in the terminal

Clone the repo:

`git clone https://github.com/qaiser110/Email-Demo-Client.git`

Change into the cloned directory, and install the npm and bower dependencies:

`cd Email-Demo-Client`

`npm install`

Once the dependencies are installed, run `npm start`

The client-side app should be available at http://localhost:8000/


###How to test different scenarios

The backend is designed to first try sending email using __Sendgrid__. However, __Sendgrid__ itself restricts email addresses to be unique in to, cc, and bcc fields. So the first test could be sending an email message via __Sendgrid__. The first test should be to send an email to any email address, as long as the email addresses are unique. The email should be sent successfully, and teh UI should display the message "Message sent successfully via __Sendgrid__"

The second test could be sending an email using __Mailgun__, by causing __Sendgrid__ to fail by providing duplicate email addresses, for example, using the same email address (from any of the __Mailgun__ Authorized Recipients) in to and cc fileds. 

Authorized Recipients include the following emails:

- stefano@hypothesisconsulting.com.au
- qaiser110@gmail.com
- qais110@gmail.com

The third test could involve using the same but not from of the Mailgun Authorized Recipients email address. That would fail for both Sendgrid and Mailgun, and display an error message in the UI.