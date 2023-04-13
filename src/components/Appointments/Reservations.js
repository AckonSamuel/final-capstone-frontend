import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAppointments, cancelAppointment } from "../../redux/actionThunk";

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
    <div style={{ margin: "5% auto" }}>
      <h1>My Reservation</h1>
      {reservations ? (
        reservations.map((reserve) => (
          <div key={reserve.id} id={reserve.id}>
            <p>{reserve.description}</p>
            <p>{reserve.date}</p>
            <p>{reserve.time_from}</p>
            <p>{reserve.time_to}</p>
            <p>{reserve.cancelled}</p>
            <button
              type="button"
              id={reserve.id}
              onClick={cancelReservationHandler}
            >
              Cancel
            </button>
          </div>
        ))
      ) : (
        <h1>No Reservations Made</h1>
      )}
    </div>
  );
};

export default Reservations;
