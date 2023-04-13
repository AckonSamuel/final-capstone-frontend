import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAppointments, cancelAppointment } from "../../redux/actionThunk";
import classes from "./Reservations.module.css";
const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.appointments.appointments);

  useEffect(() => {
    dispatch(getAppointments());
  }, [dispatch]);

  const cancelReservationHandler = (e) => {
    dispatch(cancelAppointment(e.target.id));
  };

  return (
    <div className={classes.reserve_container}>
      <h1 className={classes.header}>My Reservation</h1>
      {reservations ? (
        reservations.map((reserve) => (
          <div key={reserve.id} id={reserve.id} className={classes.card}>
            <p>{reserve.description}</p>
            <div className={classes.date_time}>
              <p>{reserve.date}</p>
              <p>
                Duration: {reserve.time_from} - {reserve.time_to}
              </p>
            </div>
            <button
              type="button"
              id={reserve.id}
              onClick={cancelReservationHandler}
              className={classes.btn}
            >
              Cancel
            </button>
          </div>
        ))
      ) : (
        <h1 className={classes.header}>No Reservations Made</h1>
      )}
    </div>
  );
};

export default Reservations;
