import { useReducer } from "react";

const initialState = {
  events: [],
  loading: false,
};

function calendarReducer(state, action) {
  switch (action.type) {
    case "LOAD_EVENTS":
      return { ...state, loading: true };
    case "SET_EVENTS":
      return { events: action.payload, loading: false };
    default:
      return state;
  }
}

const sectionStyle = {
  backgroundColor: "#f0f8ff",
  padding: "2rem",
  fontFamily: "Inter, sans-serif",
  minHeight: "100vh",
  color: "#333",
};

const headingStyle = {
  fontSize: "2rem",
  marginBottom: "1rem",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  backgroundColor: "#4a90e2",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginBottom: "1rem",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
};

const listItemStyle = {
  marginBottom: "0.75rem",
  fontSize: "1rem",
};

const CalendarView = () => {
  const [state, dispatch] = useReducer(calendarReducer, initialState);

 const loadEvents = () => {
  dispatch({ type: "LOAD_EVENTS" });
  setTimeout(() => {
    dispatch({
      type: "SET_EVENTS",
      payload: [
        // 🎂 November Birthdays
        { date: "2025-11-07", name: "Hongjoong's Birthday 🎂 (ATEEZ)" },
        { date: "2025-11-15", name: "Jake's Birthday 🎂 (ENHYPEN)" },
        { date: "2025-11-21", name: "Liz's Birthday 🎂 (IVE)" },
        { date: "2025-11-26", name: "Wooyoung's Birthday 🎂 (ATEEZ)" },
        { date: "2025-11-28", name: "Juria's Birthday 🎂 (XG)" },

        // 🎤 November Events
        { date: "2025-11-14", name: "xikers @ KGMA Incheon 🎤" },
        { date: "2025-11-15", name: "Stray Kids @ KGMA Incheon 🎤" },
        { date: "2025-11-17", name: "aespa 5th Anniversary Celebration ✨" },
        { date: "2025-11-21", name: "Stray Kids 'DO IT' Release + Music Bank 🔥" },
        { date: "2025-11-22", name: "BLACKPINK World Tour: Bulacan 🇵🇭" },
        { date: "2025-11-22", name: "xikers @ Dream Concert Abu Dhabi 🌍" },
        { date: "2025-11-28", name: "BLACKPINK World Tour: Singapore 🇸🇬" },

        // 🎂 December Birthdays
        { date: "2025-12-04", name: "Seokjin's Birthday 🎂 (BTS)" },
        { date: "2025-12-04", name: "Hyunwoo's Birthday 🎂 (xikers)" },
        { date: "2025-12-06", name: "Cocona's Birthday 🎂 (XG)" },
        { date: "2025-12-08", name: "Sunghoon's Birthday 🎂 (ENHYPEN)" },
        { date: "2025-12-09", name: "Ni-ki's Birthday 🎂 (ENHYPEN)" },
        { date: "2025-12-18", name: "Harvey's Birthday 🎂 (XG)" },
        { date: "2025-12-30", name: "Taehyung's Birthday 🎂 (BTS)" },

        // 🎤 December Events
        { date: "2025-12-03", name: "aespa Winter Birthday Fan Party 🎉" },
        { date: "2025-12-06", name: "xikers @ Asia Artist Awards Taiwan 🏆" },
        { date: "2025-12-07", name: "xikers @ ACON Festival 🎶" },
        { date: "2025-12-15", name: "BLACKPINK Comeback 🔥" },
      ],
    });
  }, 1000);
};
  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>📅 Idol Calendar</h2>
      <button onClick={loadEvents} style={buttonStyle}>
        Load Events
      </button>

      {state.loading ? (
        <p>Loading events...</p>
      ) : (
        <ul style={listStyle}>
          {state.events.map((event, i) => (
            <li key={i} style={listItemStyle}>
              <strong>{event.date}</strong>: {event.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CalendarView;