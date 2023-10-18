<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> A web app that fosters collaboration between non-profits and volunteers, simplifying communication, scheduling, and appreciation.
>
> VolunTea harmonizes non-profits with their volunteers, streamlining communication, scheduling and recognition. Administrators manage opportunities and nurture a community. Volunteers find purpose through this hub, where they can showcase skills, connect and create a fulfilling volunteer experience.

### Admin Stories

- As an administrator, I want to be able to create a profile about our organization to showcase our mission, impact, and projects.
- As an administrator, I want to be able to create opportunities, so that volunteers can sign up for.
- As an administrator, I want to be able to accept or reject a volunteer’s application for a particular opportunity.
- As an administrator, I want to be able to communicate with volunteers through messages, so I can send and receive notifications.
- As an administrator, I want to be able to recognize our volunteers and certify them for their engagements and contributions.

### Volunteer Stories

- As a volunteer, I want to be able to sign up using an organization’s code, so I can be a member of its community.
- As a volunteer, I want to be able to edit my profile, so that my information and new skills are up-to-date.
- As a volunteer, I want to be able to browse through volunteering opportunities, so I can sign up in case I’m interested.
- As a volunteer, I want to be able to receive notifications and reminders about upcoming shifts and events. 
- As a volunteer, I want to be able to receive a certificate that shows my contribution as proof of my volunteer work


<br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

> VolunTea is designed using wireframes and mockups, iterating on the design until reaching the ideal layout for easy navigation and a seamless user experience.

### Mockups
| Chats Screen  | Projects screen |  Project Details screen |
| ---| ---| ---|
| ![Landing](./readme/demo/mockups/chats.png) | ![fsdaf](./readme/demo/mockups/projects.png) | ![fsdaf](./readme/demo/mockups/details.png) |

<br><br>

<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the mockups as a guide, VolunTea app was implemented with the following features:

### Admin Screens
| Content Screen  | Applicants screen | Members screen | Messages screen |
| ---| ---| ---| ---|
| ![Landing](./readme/app/admin-content(a).jpeg) | ![fsdaf](./readme/app/applicants.jpeg) | ![fsdaf](./readme/app/members.jpeg) | ![fsdaf](./readme/app/messasges%20(1).jpeg) |



### Volunteer Screens
| Login screen  | Register screen |  Personal Info |
| ---| ---| ---|
| ![Landing](./readme/app/login.jpeg) | ![fsdaf](./readme/app/signup-admin.jpeg) | ![fsdaf](./readme/app/personal-info.jpeg) |
| Content Screen  | Notifications |  Landing screen |
| ![Landing](./readme/app/vol-notif.jpg) | ![fsdaf](./readme/app/notifications.jpeg) | ![fsdaf](./readme/app/application.jpeg) |
| Landing Screen |
| ![Landing](./readme/app/voluntea-organization.png) |


<br><br>

<!-- Tech stack -->
<img src="./readme/title5.svg"/>

###  VolunTea is built using the following technologies:

- This project uses the [Laravel app development framework](https://laravel.com/). It is a free and open-source web framework, intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.
- This project uses the [React JavaScript library](https://reactjs.org/). It is a free and open-source front-end JavaScript library for building user interfaces or UI components.
- [Firebase](https://firebase.google.com/) is used for live chat and notifications. It is a platform developed by Google for creating mobile and web applications.
- For icons, [react-icons](https://react-icons.github.io/react-icons/) is used. It is a collection of open source icons.

<!-- How to run -->
<img src="./readme/title6.svg"/>

> To set up VolunTea locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/zaynabnour-alghosh/VOLUNTEA.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
2. Install Composer packages
   ```sh
   composer install
   ```
2. Create a .env file
   ```sh
   cp .env.example .env
   ```
2. Migrate tables to the database
   ```sh
   php artisan migrate
   ```
2. Start the server
   ```sh
   php artisan serve
   ```
2. Run the app
   ```sh
   npm start
   ```
Now, you should be able to run VolunTea and explore its features.
