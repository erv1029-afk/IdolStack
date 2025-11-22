import CalendarView from "../components/CalendarView";

const Calendar = () => {
  return (
    <section className="calendar-page">
      <header>
        <h1>📅 Idol Calendar</h1>
        <p>Track comebacks, birthdays, and fan events in one expressive view.</p>
      </header>

      <CalendarView />

      <footer>
        <small>Powered by your bias picks and global idol data 💫</small>
      </footer>
    </section>
  );
};

export default Calendar;