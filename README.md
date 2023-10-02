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

### Wireframes
| Login screen  | Register screen |  Landing screen |
| ---| ---| ---|
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

### Mockups
| Home screen  | Menu Screen | Order Screen |
| ---| ---| ---|
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

<br><br>

<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented the Coffee Express app with the following features:

### User Screens
| Login screen  | Register screen | Landing screen | Loading screen |
| ---| ---| ---| ---|
| ![Landing](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) | ![fsdaf](https://placehold.co/900x1600) |
| Home screen  | Menu Screen | Order Screen | Checkout Screen |

### Admin Screens (Web)
| Login screen  | Register screen |  Landing screen |
| ---| ---| ---|
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |
| Home screen  | Menu Screen | Order Screen |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

<br><br>

<!-- Tech stack -->
<img src="./readme/title5.svg"/>

###  Coffee Express is built using the following technologies:

- This project uses the [Flutter app development framework](https://flutter.dev/). Flutter is a cross-platform hybrid app development platform which allows us to use a single codebase for apps on mobile, desktop, and the web.
- For persistent storage (database), the app uses the [Hive](https://hivedb.dev/) package which allows the app to create a custom storage schema and save it to a local database.
- To send local push notifications, the app uses the [flutter_local_notifications](https://pub.dev/packages/flutter_local_notifications) package which supports Android, iOS, and macOS.
  - 🚨 Currently, notifications aren't working on macOS. This is a known issue that we are working to resolve!
- The app uses the font ["Work Sans"](https://fonts.google.com/specimen/Work+Sans) as its main font, and the design of the app adheres to the material design guidelines.

<br><br>

<!-- How to run -->
<img src="./readme/title6.svg"/>

> To set up Coffee Express locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

Now, you should be able to run Coffee Express locally and explore its features.
