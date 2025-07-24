import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, Route
import './App.css'; // Your existing App.css
import Header from './components/Header'; // Assuming components are in a 'components' folder
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';

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

function ContactUsSection() {
  return (
    <section style={{ padding: '60px 40px', textAlign: 'center' }}>
      <h2>Contact Us</h2>
      <p>Reach out to us for more information.</p>
      {/* You'll add a contact form and details here later */}
    </section>
  );
}
// --- End placeholder components ---


function App() {
  return (
    <BrowserRouter> {/* Wrap your entire app with BrowserRouter */}
      <div className="App">
        <Header /> {/* Header will be present on all pages */}
        <main>
          <Routes> {/* Define your routes here */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ServicesSection />
                  {/* You might choose to put ServicesSection on the Home page too, or make it a separate route */}
                </>
              }
            />
            <Route path="/our-team" element={<TeamSection />} />
            <Route path="/rates-fees" element={<RatesAndFeesSection />} />
            <Route path="/getting-started" element={<GettingStartedSection />} />
            <Route path="/contact-us" element={<ContactUsSection />} />
            {/* Add a fallback route for 404 Not Found if desired */}
            <Route path="*" element={<h2 style={{padding: '50px', textAlign: 'center'}}>Page Not Found</h2>} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;