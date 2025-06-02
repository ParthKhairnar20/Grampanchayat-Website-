import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventCard';
import { Calendar, Search } from 'lucide-react';
import '../styles/Events.css';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const events = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
      title: 'Blood Donation Camp',
      date: 'May 15, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'Village Community Hall',
      description: 'Join us for the annual blood donation camp organized in association with District Hospital.',
      category: 'health'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
      title: 'Farmers Training Program',
      date: 'June 2, 2025',
      time: '10:00 AM - 1:00 PM',
      location: 'Agricultural Extension Center',
      description: 'Learn about modern farming techniques and government schemes for farmers.',
      category: 'agriculture'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
      title: 'Village Cleanliness Drive',
      date: 'June 10, 2025',
      time: '7:00 AM - 11:00 AM',
      location: 'Village Square',
      description: 'Community initiative to clean our village and promote proper waste management practices.',
      category: 'environment'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg',
      title: 'Women Empowerment Workshop',
      date: 'June 18, 2025',
      time: '11:00 AM - 2:00 PM',
      location: 'Panchayat Meeting Hall',
      description: 'Workshop focused on skill development and entrepreneurship opportunities for women.',
      category: 'social'
    },
    {
      id: 5,
      image: 'https://media.istockphoto.com/id/486596345/photo/emergency-medical-camp-at-babughat-kolkata-india.jpg?s=2048x2048&w=is&k=20&c=1nZBZgaMQUHOfcNjpnHvdM9QEy3vhTONqkIZAMRSYtY=',
      title: 'Free Health Check-up Camp',
      date: 'July 5, 2025',
      time: '9:00 AM - 3:00 PM',
      location: 'Primary Health Center',
      description: 'Comprehensive health check-up including eye examination, blood pressure, and diabetes screening.',
      category: 'health'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg',
      title: "Children's Day Celebration",
      date: 'November 14, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'Village School Ground',
      description: "Fun activities, games, and cultural programs for children on the occasion of Children's Day.",
      category: 'culture'
    }
  ];

  const categories = ['all', ...new Set(events.map(event => event.category))];

  const filteredEvents = events
    .filter(event => filterCategory === 'all' || event.category === filterCategory)
    .filter(event => 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="events-page">
      <HeroSection 
        title="Village Events" 
        subtitle="Stay updated with all the activities happening in ShreeRampur"
        backgroundImage="https://images.pexels.com/photos/7516340/pexels-photo-7516340.jpeg"
      />

      <section className="events-list-section">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <p>Be a part of our community gatherings and activities</p>
          </div>

          <div className="events-filter">
            <div className="search-container">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search events..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="category-filter">
              {categories.map((category, index) => (
                <button 
                  key={index} 
                  className={`filter-btn ${filterCategory === category ? 'active' : ''}`}
                  onClick={() => setFilterCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="events-grid">
              {filteredEvents.map(event => (
                <EventCard 
                  key={event.id}
                  image={event.image}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                />
              ))}
            </div>
          ) : (
            <div className="no-events">
              <Calendar size={48} />
              <h3>No events found</h3>
              <p>Try changing your search criteria or check back later for new events.</p>
            </div>
          )}
        </div>
      </section>

      <section className="event-calendar-section">
        <div className="container">
          <div className="section-header">
            <h2>Annual Village Events</h2>
            <p>Mark your calendars for these recurring annual events</p>
          </div>

          <div className="annual-events">
            <div className="annual-event">
              <div className="event-month">January</div>
              <div className="event-info">
                <h3>Republic Day Celebration</h3>
                <p>January 26 | Village Square</p>
              </div>
            </div>

            <div className="annual-event">
              <div className="event-month">March</div>
              <div className="event-info">
                <h3>Holi Festival Gathering</h3>
                <p>March (as per calendar) | Community Ground</p>
              </div>
            </div>

            <div className="annual-event">
              <div className="event-month">August</div>
              <div className="event-info">
                <h3>Independence Day Celebration</h3>
                <p>August 15 | School Ground</p>
              </div>
            </div>

            <div className="annual-event">
              <div className="event-month">October</div>
              <div className="event-info">
                <h3>Village Sports Tournament</h3>
                <p>October 2-10 | Sports Ground</p>
              </div>
            </div>

            <div className="annual-event">
              <div className="event-month">October-November</div>
              <div className="event-info">
                <h3>Diwali Community Celebration</h3>
                <p>As per calendar | Village Center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="event-proposal-section">
        <div className="container">
          <div className="proposal-content">
            <div className="proposal-text">
              <h2>Have an Event Idea?</h2>
              <p>
                We welcome community-driven events and initiatives. If you have an idea for an event
                that can benefit our village, please share it with us.
              </p>
              <button className="btn-primary">Propose an Event</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;