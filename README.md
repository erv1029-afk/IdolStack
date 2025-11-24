# IdolStack 🎶✨

A full-stack MERN-style application celebrating K‑pop idols and groups through interactive cards, calendars, and expressive UI design. Users can explore idols, track events, and connect directly to official group content.

---

## 🚀 Technologies Used

- **Frontend:** React, React Router, React Hooks (state management), CSS (custom styling, gradients, responsive layouts)
- **Backend:** Node.js, Express.js (RESTful API with CRUD routes)
- **Database:** MongoDB (native driver for queries, inserts, updates, deletes)
- **API Integration:** Native Fetch (async/await, error handling)
- **Version Control:** Git & GitHub (30+ commits demonstrating iterative development)
- **Other Tools:** ESLint for code consistency, npm for package management

---

## 🧩 Approach Taken

1. **Frontend:**  
   - Modular React components (`ArtistCard`, `GroupCard`, `CalendarView`, etc.)  
   - Four distinct pages (`Home`, `Calendar`, `Groups`, `About`) with navigation via React Router.  
   - State managed with React Hooks (`useState`, `useEffect`).  

2. **Backend:**  
   - RESTful API built with Express.  
   - CRUD routes for idols (`/api/idols`) and groups.  
   - MongoDB native driver used for database operations (no ODM layer).  

3. **Integration:**  
   - Frontend fetches data directly from backend API.  
   - Error handling with `try/catch` and fallback UI states.  

4. **Design & UX:**  
   - Gradient backgrounds, playful icons, and photocard-style components.  
   - Group PCs styled with unique colors and linked to official YouTube channels.  

---

## 📖 Usage Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/idolstack.git
   cd idolstack
 2. Install dependencies: 
npm install
3. 	Run the backend server:
cd backend
node server/server.js
4. 	Run the frontend:
cd frontend
npm run dev
5. 	Visit the app locally at:
http://locahost:5173

⚠️ Unsolved Problems
- Some idol images (e.g., V/Taehyung) require careful naming alignment between file paths and schema entries.
- YouTube handle links (@groupname) occasionally redirect incorrectly; channel ID URLs are more reliable.
- Calendar events are currently static; dynamic event creation and editing are planned.

🌟 Future Enhancements
- Authentication (user login, bias list personalization).
- Dynamic event creation (add birthdays, comebacks, fan events).
- Mobile-first responsive redesign.
- Integration with external K‑pop APIs for live updates.
- Deployment to cloud (Heroku/Render for backend, Netlify/Vercel for frontend).

🔗 Deployment Links
Once deployed, links will be added here:
- Frontend: https://idolstack.netlify.app/
- Backend API: https://idolstack-backend.onrender.com/


👩‍💻 Author
Built by Emily Van Tries — creative technologist and full-stack developer in training.