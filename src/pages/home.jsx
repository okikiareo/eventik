import React, { useState } from "react";
import { initiatePayment } from "../utils/swippepayment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./home.css";
import event1 from "../assets/event-1.jpg";
import event2 from "../assets/event-2.jpg";
import event3 from "../assets/event-3.jpg";
import event4 from "../assets/event-4.jpg";

const events = [
  {
    id: 1,
    title: "The Arts Festival",
    date: "10th Aug 2025 - 10:00am",
    location: "TBS, Lagos Nigeria",
    price: 50,
    image: event1,
  },
  {
    id: 2,
    title: "Music, Dance & Poetry",
    date: "12th Aug 2025 - 4:00pm",
    location: "Odua, Lagos Nigeria",
    price: 60,
    image: event2,
  },
  {
    id: 3,
    title: "Art Convention",
    date: "15th Aug 2025 - 11:00am",
    location: "Eko Hotel, Lagos",
    price: 70,
    image: event3,
  },
  {
    id: 4,
    title: "Tech & Innovation Fair",
    date: "18th Aug 2025 - 9:00am",
    location: "VI, Lagos",
    price: 100,
    image: event4,
  },
];

const Home = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleBuy = () => {
    try {
      initiatePayment("okikiareo@gmail.com", 50, {
        firstName: "Okiki",
        lastName: "Areo",
      });
      toast.info("Opening payment modal...");
    } catch (error) {
      toast.error("Payment failed to initialize.");
    }
  };

  return (
    <section className="home">
      <header className="home-header">
        <h2>Eventik Upcoming Events</h2>
        <input type="text" placeholder="Search events..." />
      </header>

      <div className="event-grid">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => setSelectedEvent(event)}
          >
            <img src={event.image} alt={event.title} />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <span>₦{event.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout/Cart modal */}
      {selectedEvent && (
        <div className="cart-modal" onClick={() => setSelectedEvent(null)}>
          <div className="cart-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedEvent.title}</h3>
            <p>{selectedEvent.date}</p>
            <p>{selectedEvent.location}</p>
            <p>₦{selectedEvent.price}</p>
            <button
              className="pay-btn"
              // onClick={() => initiatePayment(selectedEvent)}
              onClick={handleBuy}
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
