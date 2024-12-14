import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, MapPin, Tags } from 'lucide-react';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const events = [
    {
      id: '1',
      title: 'Hackathon 2024',
      date: 'March 15-16, 2024',
      description: '24-hour coding competition to solve real-world problems',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      category: 'hackathon',
      location: 'Tech Innovation Center',
      registrationLink: '#',
    },
    {
      id: '2',
      title: 'AI & Machine Learning Workshop',
      date: 'April 5, 2024',
      description: 'Deep dive into advanced AI and machine learning techniques',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      category: 'workshop',
      location: 'Online',
      registrationLink: '#',
    },
    {
      id: '3',
      title: 'Cybersecurity Webinar',
      date: 'May 20, 2024',
      description: 'Exploring the latest trends in cybersecurity and network protection',
      image: 'https://images.unsplash.com/photo-1614064641538-014de3EB267b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      category: 'webinar',
      location: 'Tech Conference Hall',
      registrationLink: '#',
    },
    {
      id: '4',
      title: 'Global Coding Competition',
      date: 'June 10-12, 2024',
      description: 'International coding challenge with exciting prizes',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      category: 'competition',
      location: 'Global Online Platform',
      registrationLink: '#',
    }
  ];

  const categories = ['all', 'workshop', 'hackathon', 'webinar', 'competition'];

  const filteredEvents = useMemo(() => {
    return events.filter(event => 
      (selectedCategory === 'all' || event.category === selectedCategory) &&
      (event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
       event.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Upcoming Tech Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore a world of innovation, learning, and networking through our curated tech events.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 justify-center items-center">
          {/* Search Input */}
          <div className="relative w-full max-w-md">
            <input 
              type="text" 
              placeholder="Search events..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition duration-300 flex items-center gap-2
                  ${selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                  }
                `}
              >
                <Tags size={16} />
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-white/80 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-gray-800">{event.title}</h2>
                  <p className="text-gray-600 mb-4">{event.description}</p>

                  {/* Event Metadata */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Registration Button */}
                  <a 
                    href={event.registrationLink} 
                    className="w-full block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full hover:opacity-90 transition duration-300"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-600 mb-4">No Events Found</h2>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;