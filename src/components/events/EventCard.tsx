import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Event } from '../../types';
import Card from '../shared/Card';
import Button from '../shared/Button';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card className="flex flex-col h-full">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="flex-1">
        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-2">
          {event.category}
        </span>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{event.date}</span>
        </div>
        <p className="text-gray-600 mb-4">{event.description}</p>
      </div>
      {event.registrationLink && (
        <Button
          variant="primary"
          icon={<ExternalLink className="h-4 w-4" />}
          onClick={() => window.open(event.registrationLink, '_blank')}
        >
          Register Now
        </Button>
      )}
    </Card>
  );
};

export default EventCard;