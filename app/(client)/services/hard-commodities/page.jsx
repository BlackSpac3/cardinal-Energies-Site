"use client";

import Image from "next/image";
import { assets } from "@assets/assets";
import Product from "@components/service_components/Product";
import Link from "next/link";

const CommodityTradingPage = () => {
  return (
    <div className="commodity-trading-page">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .commodity-trading-page {
          
          background: #FAFAFA;
          overflow-x: hidden;
        }
        
        .display-text {
          font-family: 'Playfair Display', serif;
        }
        
        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(165deg, #0A0E27 0%, #1a1f3a 50%, #2a3050 100%);
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 100%;
          height: 150%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
          animation: pulse 8s ease-in-out infinite;
        }
        
        .hero-section::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 80%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.06) 0%, transparent 70%);
          animation: pulse 10s ease-in-out infinite reverse;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1) translateY(0); opacity: 1; }
          50% { transform: scale(1.1) translateY(-20px); opacity: 0.8; }
        }
        
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.3;
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
          padding: 6rem 3rem;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50px;
          color: #D4AF37;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 2rem;
          animation: slideDown 0.8s ease-out;
        }
        
        .hero-title {
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 900;
          line-height: 1.1;
          color: #FFFFFF;
          margin-bottom: 1.5rem;
          animation: slideUp 0.8s ease-out 0.2s both;
        }
        
        .hero-accent {
          background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          display: inline-block;
        }
        
        .hero-accent::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #D4AF37, transparent);
          animation: expandWidth 1s ease-out 0.8s both;
        }
        
        .hero-description {
          font-size: 1.125rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.75);
          max-width: 600px;
          margin-bottom: 2.5rem;
          animation: slideUp 0.8s ease-out 0.4s both;
        }
        
        .hero-stats {
          display: flex;
          gap: 3rem;
          margin-bottom: 2.5rem;
          animation: slideUp 0.8s ease-out 0.6s both;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        
        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #D4AF37;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .cta-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%);
          color: #0A0E27;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: slideUp 0.8s ease-out 0.8s both;
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #FFD700 0%, #D4AF37 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(212, 175, 55, 0.4);
        }
        
        .cta-button:hover::before {
          opacity: 1;
        }
        
        .cta-button span {
          position: relative;
          z-index: 1;
        }
        
        .hero-image-container {
          position: relative;
          height: 600px;
          animation: slideLeft 1s ease-out 0.4s both;
        }
        
        .hero-image-wrapper {
          position: relative;
          height: 100%;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }
        
        .hero-image-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, transparent 50%);
          z-index: 1;
          pointer-events: none;
        }
        
        .hero-image-wrapper:hover {
          transform: scale(1.02);
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        /* Overview Section */
        .overview-section {
          position: relative;
          padding: 8rem 3rem;
          background: #FFFFFF;
        }
        
        .section-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(212, 175, 55, 0.1);
          color: #D4AF37;
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border-radius: 50px;
          margin-bottom: 1.5rem;
        }
        
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #0A0E27;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .section-description {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #4A5568;
          max-width: 900px;
          margin: 0 auto;
        }
        
        /* Pricing Section */
        .pricing-section {
          padding: 6rem 3rem;
          background: linear-gradient(to bottom, #FAFAFA 0%, #F7F7F7 100%);
        }
        
        .pricing-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        
        .pricing-image {
          position: relative;
          height: 500px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        
        .pricing-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.75rem;
          font-weight: 700;
          color: #0A0E27;
          margin-bottom: 2rem;
          line-height: 1.2;
        }
        
        .pricing-text {
          font-size: 1.0625rem;
          line-height: 1.8;
          color: #4A5568;
          margin-bottom: 1.5rem;
        }
        
        .price-highlight {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          margin: 1.5rem 0;
        }
        
        /* Shipping Terms */
        .shipping-section {
          padding: 6rem 3rem;
          background: #FFFFFF;
        }
        
        .terms-grid {
          max-width: 1200px;
          margin: 3rem auto 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        
        .term-card {
          position: relative;
          padding: 2.5rem;
          background: #FAFAFA;
          border-left: 4px solid transparent;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .term-card:hover {
          background: #FFFFFF;
          border-left-color: #D4AF37;
          transform: translateX(8px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        
        .term-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }
        
        .term-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0A0E27;
          margin-bottom: 1rem;
        }
        
        .term-card p {
          font-size: 1rem;
          line-height: 1.7;
          color: #4A5568;
        }
        
        /* Payment Section */
        .payment-section {
          padding: 6rem 3rem;
          background: linear-gradient(135deg, #0A0E27 0%, #1a1f3a 100%);
          position: relative;
          overflow: hidden;
        }
        
        .payment-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent);
        }
        
        .payment-grid {
          max-width: 1000px;
          margin: 3rem auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .payment-card {
          position: relative;
          padding: 3rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .payment-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #D4AF37, #FFD700);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        
        .payment-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(212, 175, 55, 0.3);
        }
        
        .payment-card:hover::after {
          transform: scaleX(1);
        }
        
        .payment-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .payment-card h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #FFFFFF;
        }
        
        .whatsapp-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: transparent;
          border: 2px solid #D4AF37;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 1rem;
          border-radius: 50px;
          margin-top: 3rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .whatsapp-button:hover {
          background: #D4AF37;
          color: #0A0E27;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3);
        }
        
        /* Other Products */
        .products-section {
          padding: 6rem 3rem;
          background: #FAFAFA;
        }
        
        .products-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #0A0E27;
          margin-bottom: 3rem;
        }
        
        /* Animations */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        /* Metal Cards */
        .metal-card {
          position: relative;
          padding: 2.5rem;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .metal-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 2px;
          background: linear-gradient(135deg, #D4AF37, transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .metal-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .metal-card:hover::after {
          opacity: 1;
        }
        
        .metal-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          margin-bottom: 1.5rem;
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .hero-content,
          .pricing-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .hero-image-container {
            height: 400px;
          }
          
          .terms-grid {
            grid-template-columns: 1fr;
          }
          
          .payment-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
        }
        
        @media (max-width: 640px) {
          .hero-content {
            padding: 4rem 1.5rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .overview-section,
          .pricing-section,
          .shipping-section,
          .payment-section,
          .products-section {
            padding: 4rem 1.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div>
            <div className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Premium Hard Commodity Trading
            </div>
            
            <h1 className="hero-title display-text">
              Hard Commodities <br />
              <span className="hero-accent">Trade Desk.</span>
            </h1>
            
            <p className="hero-description">
              Your gateway to premium metals trading. We facilitate secure transactions in gold, silver, 
              copper, and other precious metals with unmatched expertise, transparent pricing, and global 
              delivery capabilities across five continents.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">MT Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.99%</div>
                <div className="stat-label">Purity Grade</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
            
            <Link href="/contact-us">
              <button className="cta-button">
                <span>Start Trading</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
          
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <Image
                src={assets.hc}
                alt="Premium Hard Commodities - Gold, Silver, Copper"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-badge">Overview</div>
          
          <h2 className="section-title">
            Powering Global Industries with Premium Hard Commodities
          </h2>
          
          <p className="section-description">
            We operate at the intersection of traditional commodity trading and modern financial technology. 
            Our hard commodities trading desk connects refineries, manufacturers, institutional buyers, and 
            investors worldwide. Specializing in precious metals (gold, silver, platinum, palladium) and 
            industrial metals (copper, aluminum, zinc, nickel), we maintain the highest standards of quality 
            assurance, provenance tracking, and compliance with international standards including LBMA and LME. 
            Our vertically integrated approach ensures transparency from mining to delivery, backed by comprehensive 
            insurance and secure logistics partnerships. We offer certified bullion, industrial-grade metals, and 
            custom alloys, with monthly capacities exceeding 500 metric tons.
          </p>
        </div>
      </section>

      {/* Commodities Showcase */}
      <section style={{ padding: '6rem 3rem', background: 'linear-gradient(to bottom, #FFFFFF 0%, #FAFAFA 100%)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-badge">Our Commodities</div>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Premium Metals Portfolio</h2>
            <p className="section-description" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Industry-leading quality standards across precious and industrial metals
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Gold Card */}
            <div className="metal-card">
              <div className="metal-icon" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0A0E27" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0A0E27', marginBottom: '0.5rem' }}>Gold</h3>
              <p style={{ fontSize: '0.875rem', color: '#D4AF37', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                99.99% Purity
              </p>
              <p style={{ fontSize: '1rem', color: '#4A5568', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                24K gold bars, coins, and certified bullion. LBMA-certified with full provenance tracking.
              </p>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#D4AF37' }}>
                From $65,000/kg
              </div>
            </div>

            {/* Silver Card */}
            <div className="metal-card">
              <div className="metal-icon" style={{ background: 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 100%)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0A0E27" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v12M6 12h12"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0A0E27', marginBottom: '0.5rem' }}>Silver</h3>
              <p style={{ fontSize: '0.875rem', color: '#71717A', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                99.9% Purity
              </p>
              <p style={{ fontSize: '1rem', color: '#4A5568', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Investment-grade silver bars and industrial silver. LBMA Good Delivery certified.
              </p>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#71717A' }}>
                From $850/kg
              </div>
            </div>

            {/* Copper Card */}
            <div className="metal-card">
              <div className="metal-icon" style={{ background: 'linear-gradient(135deg, #B87333 0%, #D4A574 100%)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0A0E27" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0A0E27', marginBottom: '0.5rem' }}>Copper</h3>
              <p style={{ fontSize: '0.875rem', color: '#B87333', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Grade A Cathode
              </p>
              <p style={{ fontSize: '1rem', color: '#4A5568', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                LME-registered copper cathodes (99.99% purity). Industrial-grade for manufacturing.
              </p>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#B87333' }}>
                From $9,200/MT
              </div>
            </div>

            {/* Platinum Card */}
            <div className="metal-card">
              <div className="metal-icon" style={{ background: 'linear-gradient(135deg, #E5E4E2 0%, #FFFFFF 100%)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0A0E27" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0A0E27', marginBottom: '0.5rem' }}>Platinum</h3>
              <p style={{ fontSize: '0.875rem', color: '#71717A', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                99.95% Purity
              </p>
              <p style={{ fontSize: '1rem', color: '#4A5568', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                LPPM-certified platinum bars for investment and industrial applications.
              </p>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#71717A' }}>
                On Request
              </div>
            </div>

            {/* Aluminum Card */}
            <div className="metal-card">
              <div className="metal-icon" style={{ background: 'linear-gradient(135deg, #A8A9AD 0%, #C9CACE 100%)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0A0E27" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 21V9"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0A0E27', marginBottom: '0.5rem' }}>Aluminum</h3>
              <p style={{ fontSize: '0.875rem', color: '#71717A', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Primary Grade
              </p>
              <p style={{ fontSize: '1rem', color: '#4A5568', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                LME-registered primary aluminum ingots. High-purity for aerospace and automotive.
              </p>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#71717A' }}>
                On Request
              </div>
            </div>

            {/* Zinc Card */}
            <div className="metal-card">
              <div className="metal-icon" style={{ background: 'linear-gradient(135deg, #7D7F7D 0%, #9EA0A0 100%)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0A0E27" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0A0E27', marginBottom: '0.5rem' }}>Zinc</h3>
              <p style={{ fontSize: '0.875rem', color: '#71717A', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Special High Grade
              </p>
              <p style={{ fontSize: '1rem', color: '#4A5568', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                LME-approved zinc ingots. Ideal for galvanizing and alloy production.
              </p>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#71717A' }}>
                On Request
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-image">
            <Image
              src={assets.hc2}
              alt="Premium Hard Commodities Metals"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          <div className="pricing-content">
            <h2>Transparent & Competitive Pricing</h2>
            
            <p className="pricing-text">
              Our pricing reflects real-time market rates from major exchanges including LBMA (London Bullion Market Association) 
              and LME (London Metal Exchange), with competitive margins based on order volume, delivery location, and certification requirements.
            </p>
            
            <div className="price-highlight">Market-Aligned Rates</div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p className="pricing-text" style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: '#D4AF37' }}>Gold (24K):</strong> Starting at $65,000 per kilogram
              </p>
              <p className="pricing-text" style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: '#C0C0C0' }}>Silver (99.9%):</strong> Starting at $850 per kilogram
              </p>
              <p className="pricing-text" style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: '#B87333' }}>Copper Cathode:</strong> Starting at $9,200 per metric ton
              </p>
            </div>
            
            <p className="pricing-text">
              Prices are subject to daily market fluctuations and include quality certifications, assay reports, 
              and compliance documentation. For personalized quotes on platinum, palladium, aluminum, or other metals, 
              please contact our trading desk for current rates and terms.
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Terms */}
      <section className="shipping-section">
        <div style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-badge">Shipping Terms</div>
          <h2 className="section-title">Flexible Delivery Options</h2>
        </div>
        
        <div className="terms-grid">
          <div className="term-card">
            <div className="term-icon">
              <svg width="24" height="24" viewBox="0 -1.02 20.037 20.037">
                <path fill="#D4AF37" d="M16.62,10H20a1,1,0,0,1,1,1v1l-2.76,7.35a1,1,0,0,1-.93.65H5.5a1,1,0,0,1-1-.76l-1.5-6A1,1,0,0,1,4,12H15l.72-1.45a1,1,0,0,1,.9-.55Z"/>
              </svg>
            </div>
            <h3>CIF (Cost, Insurance, and Freight)</h3>
            <p>
              We cover the cost of the metals, comprehensive insurance, and freight to the destination port. 
              The buyer assumes responsibility for customs clearance and any costs after the goods arrive at the destination port.
            </p>
          </div>
          
          <div className="term-card">
            <div className="term-icon">
              <svg fill="#D4AF37" width="24" height="24" viewBox="0 0 100 100">
                <circle cx="63.27" cy="63.66" r="5.25"/>
                <path d="m41.94 25.34a22.45 22.45 0 0 0 0 44.88h1v-17.79c0-1.33 1-3 2.35-3h19c0-.74.07-1.25.07-1.65a22.52 22.52 0 0 0 -22.42-22.44z"/>
              </svg>
            </div>
            <h3>DDP (Delivered Duty Paid)</h3>
            <p>
              We handle delivery, customs clearance, and payment of duties and taxes to the final destination.
            </p>
          </div>
          
          <div className="term-card">
            <div className="term-icon">
              <svg fill="#D4AF37" width="24" height="24" viewBox="0 0 128 128">
                <path d="M97.4,59.6c-0.1-0.3-0.4-0.4-0.6-0.5l-11.6-3.2l-4.7-14.1c-0.1-0.4-0.5-0.7-0.9-0.7H70v-9h5.5v-2H69h-9h-7.5v2H59v9H48.5c-0.4,0-0.8,0.3-0.9,0.7l-4.7,14.1L31.2,59c-0.3,0.1-0.5,0.3-0.6,0.5c-0.1,0.3-0.1,0.5,0,0.8l14.5,37c0.1,0.4,0.5,0.6,0.9,0.6h36c0.4,0,0.8-0.3,0.9-0.6l14.5-37C97.5,60.1,97.5,59.8,97.4,59.6z"/>
              </svg>
            </div>
            <h3>FOB (Free on Board)</h3>
            <p>
              We deliver the metals to the specified port of shipment with full documentation and certification. 
              The buyer assumes risk and costs once the goods are loaded onto the vessel.
            </p>
          </div>
          
          <div className="term-card">
            <div className="term-icon">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#D4AF37" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
              </svg>
            </div>
            <h3>FCA (Free Carrier) / DIS (Delivery in Store)</h3>
            <p>
              We deliver the metals to a carrier or a named secure facility with complete chain-of-custody documentation. 
              The buyer assumes responsibility once the goods are handed over.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="payment-section">
        <div style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-badge" style={{ background: 'rgba(212, 175, 55, 0.15)', color: '#FFD700' }}>
            Payment Terms
          </div>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>
            Secure Payment Options
          </h2>
        </div>
        
        <div className="payment-grid">
          <div className="payment-card">
            <div className="payment-icon">
              <Image
                src={assets.cash_against_documents}
                alt="Cash Against Documents"
                width={80}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h3>Cash Against Documents</h3>
          </div>
          
          <div className="payment-card">
            <div className="payment-icon">
              <Image
                src={assets.cash_advance}
                alt="Cash in Advance"
                width={80}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h3>Cash in Advance</h3>
          </div>
          
          <div className="payment-card">
            <div className="payment-icon">
              <Image
                src={assets.letter_of_credit_icon}
                alt="Confirmed Letter of Credit"
                width={80}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h3>Confirmed Letter of Credit</h3>
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Link href="https://wa.me/qr/TZZR633XX3TAD1" target="_blank" rel="noopener noreferrer">
            <button className="whatsapp-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message Us on WhatsApp
            </button>
          </Link>
        </div>
      </section>

      {/* Other Products */}
      <section className="products-section">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2>Other Commodities</h2>
          <Product eliminate={"Hard Commodities"} />
        </div>
      </section>
    </div>
  );
};

export default CommodityTradingPage;