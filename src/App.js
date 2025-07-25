import React, { useState } from 'react'; // Import useState
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import ContactForm from './components/ContactForm';
import ContactInfoDisplay from './components/ContactInfoDisplay'; // Import the new component

// --- Create these placeholder components for now ---
function RatesAndFeesSection() {
  return (
    <section style={{ padding: '60px 40px', textAlign: 'center' }}>
      <h2>Rates & Fees</h2>
      <p>Information about our rates and fees will go here.</p>
    </section>
  );
}

function GettingStartedSection() {
  return (
    <section style={{ padding: '60px 40px', textAlign: 'center' }}>
      <h2>Getting Started</h2>
      <p>Here's how you can begin your journey with us.</p>
    </section>
  );
}

// Modify this section to manage form visibility
function ContactUsSection() {
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const handleStartForm = () => {
    setShowForm(true);
  };

  return (
    <>
      {showForm ? (
        <ContactForm /> // Show the multi-step form
      ) : (
        <ContactInfoDisplay onStartForm={handleStartForm} /> // Show initial contact info with button
      )}
    </>
  );
}
// --- End placeholder components ---


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ServicesSection />
                </>
              }
            />
            <Route path="/our-team" element={<TeamSection />} />
            <Route path="/rates-fees" element={<RatesAndFeesSection />} />
            <Route path="/getting-started" element={<GettingStartedSection />} />
            <Route path="/contact-us" element={<ContactUsSection />} />
            <Route path="*" element={<h2 style={{padding: '50px', textAlign: 'center'}}>Page Not Found</h2>} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;