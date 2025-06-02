import React from 'react';
import { FileText, Calendar, Award, Users, BookOpen, Home, Heart, Percent } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FileText size={32} />,
      title: 'Certificate Issuance',
      description: 'Birth, death, residence, income, and other essential certificates issued efficiently for village residents.'
    },
    {
      id: 2,
      icon: <Calendar size={32} />,
      title: 'Community Hall Booking',
      description: 'Book our well-equipped community hall for various events, functions, and gatherings at affordable rates.'
    },
    {
      id: 3,
      icon: <Award size={32} />,
      title: 'Scheme Registration',
      description: 'Assistance in applying for various government welfare schemes, subsidies, and benefits for eligible residents.'
    },
    {
      id: 4,
      icon: <Users size={32} />,
      title: 'Dispute Resolution',
      description: 'Traditional village-level dispute resolution mechanism to resolve conflicts amicably within the community.'
    },
    {
      id: 5,
      icon: <BookOpen size={32} />,
      title: 'Library Services',
      description: 'Access to our village library with a collection of books, newspapers, and educational resources.'
    },
    {
      id: 6,
      icon: <Home size={32} />,
      title: 'Housing Assistance',
      description: 'Guidance for government housing schemes like PMAY-G for eligible beneficiaries in the village.'
    },
    {
      id: 7,
      icon: <Heart size={32} />,
      title: 'Health Services',
      description: 'Coordination with primary health center for regular health camps and awareness programs.'
    },
    {
      id: 8,
      icon: <Percent size={32} />,
      title: 'Tax Collection',
      description: 'Collection of property tax, water charges, and other local taxes for village development.'
    }
  ];

  const schemes = [
    {
      id: 1,
      title: 'PM Kisan Samman Nidhi',
      description: 'Direct income support of ₹6,000 per year to farmer families',
      eligibility: 'All small and marginal farmers with cultivable land',
      documents: 'Aadhaar Card, Land Records, Bank Account details'
    },
    {
      id: 2,
      title: 'Pradhan Mantri Awas Yojana - Gramin',
      description: 'Financial assistance for construction of pucca houses',
      eligibility: 'Houseless families and those with kutcha/dilapidated houses',
      documents: 'Aadhaar Card, Income Certificate, Land documents'
    },
    {
      id: 3,
      title: 'Ayushman Bharat',
      description: 'Health insurance cover of ₹5 lakh per family per year',
      eligibility: 'Families identified through SECC database',
      documents: 'Aadhaar Card, Ration Card'
    },
    {
      id: 4,
      title: 'MGNREGA',
      description: 'Guarantee of 100 days of wage employment in a financial year',
      eligibility: 'Adult members of rural households willing to do unskilled manual work',
      documents: 'Job Card, Aadhaar Card, Bank Account details'
    }
  ];

  return (
    <div className="services-page">
      <HeroSection 
        title="Our Services" 
        subtitle="Comprehensive services and schemes for the welfare of our residents"
        backgroundImage="https://images.pexels.com/photos/7989770/pexels-photo-7989770.jpeg"
      />

      <section className="services-list-section">
        <div className="container">
          <div className="section-header">
            <h2>Services Offered</h2>
            <p>The Gram Panchayat is dedicated to providing efficient services to all residents</p>
          </div>
          
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard 
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="service-process-section">
        <div className="container">
          <div className="section-header">
            <h2>How to Avail Services</h2>
            <p>Simple process to access Gram Panchayat services</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Submit Application</h3>
                <p>Visit the Panchayat office or use our online portal to submit your application along with required documents.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Verification</h3>
                <p>Our team will verify your application and documents as per the service requirements.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Processing</h3>
                <p>Your request will be processed within the stipulated timeframe as per service norms.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Service Delivery</h3>
                <p>Once approved, collect your certificate/document or avail the service as applicable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="schemes-section">
        <div className="container">
          <div className="section-header">
            <h2>Government Schemes</h2>
            <p>Information about various welfare schemes available for eligible residents</p>
          </div>
          
          <div className="schemes-list">
            {schemes.map(scheme => (
              <div key={scheme.id} className="scheme-card">
                <h3>{scheme.title}</h3>
                <p className="scheme-description">{scheme.description}</p>
                <div className="scheme-details">
                  <div className="scheme-detail">
                    <h4>Eligibility:</h4>
                    <p>{scheme.eligibility}</p>
                  </div>
                  <div className="scheme-detail">
                    <h4>Required Documents:</h4>
                    <p>{scheme.documents}</p>
                  </div>
                </div>
                <button className="scheme-btn">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-hours-section">
        <div className="container">
          <div className="service-hours-content">
            <div className="service-hours-text">
              <h2>Panchayat Office Hours</h2>
              <div className="office-hours">
                <div className="hours-row">
                  <span className="day">Monday - Saturday:</span>
                  <span className="time">10:00 AM - 5:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="day">Lunch Break:</span>
                  <span className="time">1:00 PM - 2:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="day">Sunday & Public Holidays:</span>
                  <span className="time">Closed</span>
                </div>
              </div>
              <p className="note">
                * Certificate services are available from 10:00 AM to 1:00 PM only.<br />
                * Sarpanch meeting hours: Wednesday & Friday, 3:00 PM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;