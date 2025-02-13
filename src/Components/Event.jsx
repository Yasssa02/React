import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Event = ({ event, onLikeToggle, onBook }) => {
  const [liked, setLiked] = useState(event.like);

  // Fonction pour alterner entre Like et Dislike
  const toggleLike = () => {
    setLiked(!liked);
    onLikeToggle(event.id); // Met à jour l'état global dans Events.jsx
  };

  return (
    <Card>
      {/* Si nbTickets est 0, affiche "sold_out.png", sinon l'image normale */}
      <Card.Img 
        variant="top" 
        src={event.nbTickets === 0 ? "/images/sold_out.png" : event.img} 
        alt={event.name} 
      />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>{event.description}</Card.Text>
        <Card.Text><strong>Price:</strong> ${event.price}</Card.Text>
        <Card.Text><strong>Tickets Available:</strong> {event.nbTickets}</Card.Text>
        <Card.Text><strong>Participants:</strong> {event.nbParticipants}</Card.Text>
        <Card.Text><strong>Like:</strong> {liked ? 'Liked ❤️' : 'Not Liked 🤍'}</Card.Text>

        {/* Bouton "Book an Event", désactivé si Sold Out */}
        <Button 
          variant="primary" 
          onClick={onBook} 
          disabled={event.nbTickets === 0} 
          className="mt-2"
        >
          {event.nbTickets === 0 ? "Sold Out" : "Book an Event 🎟️"}
        </Button>

        {/* Bouton Like / Dislike */}
        <Button 
          variant={liked ? "danger" : "outline-primary"} 
          onClick={toggleLike} 
          className="mt-2 ms-2"
        >
          {liked ? "Dislike 👎" : "Like 👍"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Event;
