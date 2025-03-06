import React, { useEffect } from "react";
import { Row, Col, Container, Alert, Button } from "react-bootstrap";
import Event from "./Event";
import useEventStore from "../ZustandStores/useEventStore"; // Assurez-vous que le chemin est correct

const Events = () => {
  const { events, fetchEvents, deleteEventObject, updateEventObject, fetchEventById } = useEventStore();

  // Charger les événements depuis le store au montage du composant
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  // Réserver un événement (book)
  const bookEvent = (eventId) => {
    updateEventObject({
      ...events.find((event) => event.id === eventId),
      nbTickets: Math.max(0, events.find((event) => event.id === eventId).nbTickets - 1),
      nbParticipants: events.find((event) => event.id === eventId).nbParticipants + 1,
    });
  };

  // Gérer Like/Dislike
  const toggleLike = (eventId) => {
    updateEventObject({
      ...events.find((event) => event.id === eventId),
      like: !events.find((event) => event.id === eventId).like,
    });
  };

  return (
    <Container className="mt-4">
      {/* Message de Bienvenue */}
      <Alert variant="success">
        <h4>Bienvenue sur notre plateforme d'événements!</h4>
        <p>Nous avons des événements passionnants à venir. Réservez votre place dès maintenant!</p>
      </Alert>

      <Row className="g-4">
        {events.length > 0 ? (
          events.map((event) => (
            <Col key={event.id} xs={12} sm={6} md={4} lg={3}>
              <Event 
                event={event} 
                onBook={() => bookEvent(event.id)} 
                onLikeToggle={() => toggleLike(event.id)} 
              />
              <Button variant="danger" className="mt-2" onClick={() => deleteEventObject(event.id)}>
                Supprimer
              </Button>
              <Button 
                variant="primary" 
                className="mt-2" 
                onClick={() => fetchEventById(event.id)}
              >
                Voir Détails
              </Button>
            </Col>
          ))
        ) : (
          <p>Aucun événement disponible.</p>
        )}
      </Row>
    </Container>
  );
};

export default Events;
