Point Blank - Official Website Netlify Status
Welcome to the Point Blank official website repository! This project serves as the landing page for Point Blank, showcasing our achievements, initiatives, and much more.

Quick Links
Previous Website: GitHub | Live Landing Page
Issues to Get Started: GitHub Issues
Staging Branch Deploy : Staging Deployment
Getting Started
Follow the steps below to set up the project locally:

1. Clone the Repository
git clone https://github.com/pbdsce/pbwebsite.git
cd pbwebsite
2. Install Dependencies
Install all required dependencies using your preferred package manager:

npm install
# or
yarn install
# or
pnpm install
# or
bun install
3. Set Up Firebase Configuration
To connect the project to Firebase, you need a .env.local file in the root directory.

Create the .env.local file:
REACT_APP_FIREBASE_API_KEY=xxx
REACT_APP_FIREBASE_AUTH_DOMAIN=xxx
REACT_APP_FIREBASE_PROJECT_ID=xxx
REACT_APP_FIREBASE_STORAGE_BUCKET=xxx
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxx
REACT_APP_FIREBASE_APP_ID=xxx
Note: Replace the xxx values with the Firebase configuration keys.
Contact one of the maintainers to obtain the Firebase config details.

4. Run the Development Server
Start the development server with one of the following commands:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
The application will be accessible at http://localhost:3000.

Contributing
Fork this repository.
Create a new branch for your feature or bug fix:
git checkout -b feature/<feature-name>
Make your changes and commit them:
git commit -m "Add feature: <feature-description>"
Push your branch and submit a Pull Request to the main repository:
git push origin feature/<feature-name>
Check the Issues page for tasks you can pick up!

Contact
If you have any questions or need assistance, feel free to reach out to the maintainers.

Let’s build something amazing! 🚀

