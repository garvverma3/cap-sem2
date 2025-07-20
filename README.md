


## ⚡ Getting Started

### 1. **Clone the repository**
```sh
git clone https://github.com/garvverma3/exercise-nexus-guide.git
cd exercise-nexus-guide
```

### 2. **Install dependencies**
```sh
npm install
```

### 3. **Set up environment variables**
Create a `.env` file in the root directory:

- Get your Clerk publishable key from your [Clerk dashboard](https://dashboard.clerk.com/).
- `.env` is git-ignored for security.

### 4. **Start the development server**
```sh
npm run dev
```
- Open the local URL shown in the terminal (e.g., http://localhost:8080/).

---

## 🔐 Authentication (Clerk)

- **ClerkProvider** wraps the app in `src/main.jsx`, using the publishable key from `.env`.
- **Navbar** shows:
  - **Sign In/Sign Up** buttons when logged out (modal popups).
  - **UserButton** (profile, sign out) when logged in.
- **Protecting Routes:** Use Clerk’s `useUser` and `RedirectToSignIn` in any component to require authentication.

**Example:**
```jsx
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';
function ProtectedPage() {
  const { isSignedIn } = useUser();
  if (!isSignedIn) return <RedirectToSignIn />;
  return <div>Secret content</div>;
}
```

---

## 🧑‍💻 Development Notes

- **Consistent naming** and clear, concise comments.
- **No AI or template fingerprints**—code is humanized and iteratively improved.
- **.env** is git-ignored for security.
- **ESLint** and **Prettier** ensure code style and quality.

---

## 💡 Extending the Project

- **Add new pages:** Create a new file in `src/pages/` and add a route.
- **Protect routes:** Use Clerk’s hooks/components as shown above.
- **Add features:** Use React’s component structure and Tailwind for rapid development.

---

## 📝 Author

Made by **Garv Verma**  
Email: [garv.verma2024@nst.rishihood.edu.in](mailto:garv.verma2024@nst.rishihood.edu.in)

---

## 🧩 Troubleshooting

- **Vite CSS error:** Ensure `@import` for Google Fonts is the very first line in `src/index.css`.
- **.env not working:** Restart the dev server after editing `.env`.
- **Port in use:** Vite will auto-switch to another port (e.g., 8081).

---

## 🙋 Common Interview Talking Points

- **Why Clerk?**  
  Clerk offers a modern, secure, and developer-friendly authentication solution. It’s easy to integrate, supports social logins, and provides a great user experience out of the box.

- **How are environment variables managed?**  
  Sensitive keys (like Clerk’s publishable key) are stored in a `.env` file, which is git-ignored for security. Vite exposes these as `import.meta.env.VITE_*` in the code.

- **How is the codebase structured for scalability?**  
  Components are modular and reusable. Pages are separated for clarity. Styling is handled with Tailwind, making it easy to maintain and extend.

- **How do you ensure code quality?**  
  The project uses ESLint and Prettier for consistent code style, and follows best practices for naming, structure, and documentation.

---

**Good luck in your interview! If you have any questions or need a walkthrough, feel free to reach out.**
