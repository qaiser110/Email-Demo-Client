
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
