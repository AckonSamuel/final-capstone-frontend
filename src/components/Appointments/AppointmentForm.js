const AppointmentForm = () => {
  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <input type="text-area" />
      <button type="submit">Create Appointment</button>
    </form>
  );
};

export default AppointmentForm;
