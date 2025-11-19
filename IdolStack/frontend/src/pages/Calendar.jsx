import CalendarView from "../components/CalendarView";
import IdolList from "../components/IdolList";

const Calendar = () => {
  return (
    <section className="calendar-page">
      <header>
        <h1>📅 Idol Calendar</h1>
        <p>Track comebacks, birthdays, and fan events in one expressive view.</p>
      </header>

      <CalendarView />

      <aside>
        <h2>Featured Idols</h2>
        <IdolList />
      </aside>

      <footer>
        <small>Powered by your bias picks and global idol data 💫</small>
      </footer>
    </section>
  );
};

export default Calendar;