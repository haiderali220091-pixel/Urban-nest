import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, User, MapPin, DollarSign, Send, CheckCircle2, Building2 } from 'lucide-react';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    purpose: 'Buy Property',
    type: 'Apartment',
    location: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.city || !formData.location) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      purpose: 'Buy Property',
      type: 'Apartment',
      location: '',
      budget: '',
      message: ''
    });
    setIsSuccess(false);
  };

  return (
    <section id="enquiry" className="py-20 md:py-28 bg-white scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Lead-in Text */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold font-mono">
                Bespoke Acquisition
              </span>
              <h2 className="font-serif text-3.5xl md:text-5xl font-light text-charcoal tracking-tight mt-1.5 leading-tight">
                Submit Your <br />
                <span className="italic font-normal text-gold">Property Brief</span>
              </h2>
            </div>
            
            <p className="text-sm leading-relaxed text-charcoal/70">
              Submit your property brief directly to our private acquisitions desk. Whether acquiring, selling, or leasing luxury real estate across local or international jurisdictions, our consultants formulate optimal, custom-fit responses.
            </p>

            <div className="space-y-4 pt-4 border-t border-charcoal/10">
              <div className="rounded-xl bg-light-grey p-4 flex gap-3.5 items-start">
                <div className="rounded-full bg-gold/15 p-2 text-gold mt-0.5">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-charcoal uppercase tracking-wider">
                    Direct Partner Alignment
                  </h4>
                  <p className="text-[11px] text-charcoal/60 leading-normal mt-0.5">
                    Your brief is assigned directly to a designated licensed senior listing partner based on your target city.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-light-grey p-4 flex gap-3.5 items-start">
                <div className="rounded-full bg-gold/15 p-2 text-gold mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-charcoal uppercase tracking-wider">
                    Exclusive Off-Market Access
                  </h4>
                  <p className="text-[11px] text-charcoal/60 leading-normal mt-0.5">
                    Onboarding this brief entitles you to direct private viewings of off-market villas, offices, and plots before listings go public.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Premium Form Container inside card */}
          <div className="lg:col-span-7" id="enquiry-card-wrapper">
            <div className="rounded-3xl border border-charcoal/5 bg-light-grey/30 shadow-xl p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-beige via-gold to-beige" />

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="enquiry-form-element"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    id="property-brief-enquiry-form"
                  >
                    {/* Row 1: Name and Email */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-1" htmlFor="enq-name">
                          Full Name *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal/30">
                            <User className="h-3.5 w-3.5" />
                          </span>
                          <input
                            type="text"
                            name="name"
                            id="enq-name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Alex Mercer"
                            className="w-full rounded-lg border border-charcoal/10 bg-white py-2.5 pl-9 pr-4 text-xs font-semibold text-charcoal outline-none transition-all placeholder:text-charcoal/30 focus:border-gold focus:ring-2 focus:ring-gold/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-1" htmlFor="enq-email">
                          Email Address *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal/30">
                            <Mail className="h-3.5 w-3.5" />
                          </span>
                          <input
                            type="email"
                            name="email"
                            id="enq-email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="alex@mercer.com"
                            className="w-full rounded-lg border border-charcoal/10 bg-white py-2.5 pl-9 pr-4 text-xs font-semibold text-charcoal outline-none transition-all placeholder:text-charcoal/30 focus:border-gold focus:ring-2 focus:ring-gold/10"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Phone and City */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-1" htmlFor="enq-phone">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal/30">
                            <Phone className="h-3.5 w-3.5" />
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            id="enq-phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+92 (300) 555-0000"
                            className="w-full rounded-lg border border-charcoal/10 bg-white py-2.5 pl-9 pr-4 text-xs font-semibold text-charcoal outline-none transition-all placeholder:text-charcoal/30 focus:border-gold focus:ring-2 focus:ring-gold/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-1" htmlFor="enq-city">
                          Target City *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal/30">
                            <MapPin className="h-3.5 w-3.5" />
                          </span>
                          <input
                            type="text"
                            name="city"
                            id="enq-city"
                            required
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="e.g. Lahore, Dubai, London"
                            className="w-full rounded-lg border border-charcoal/10 bg-white py-2.5 pl-9 pr-4 text-xs font-semibold text-charcoal outline-none transition-all placeholder:text-charcoal/30 focus:border-gold focus:ring-2 focus:ring-gold/10"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Purpose and Property Type */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-1" htmlFor="enq-purpose">
                          Purpose
                        </label>
                        <select
                          name="purpose"
                          id="enq-purpose"
                          value={formData.purpose}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-charcoal/10 bg-white py-2.5 px-3 text-xs font-semibold text-charcoal outline-none transition-all focus:border-gold"
                        >
                          <option value="Buy Property">Buy Property</option>
                          <option value="Sell Property">Sell Property</option>
                          <option value="Rent Property">Rent Property</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-1" htmlFor="enq-type">
                          Property Type
                        </label>
                        <select
                          name="type"
                          id="enq-type"
                          value={formData.type}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-charcoal/10 bg-white py-2.5 px-3 text-xs font-semibold text-charcoal outline-none transition-all focus:border-gold"
                        >
                          <option value="Apartment">Apartment</option>
                          <option value="Villa">Villa</option>
                          <option value="House">House</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Plot">Plot</option>
                          <option value="Office">Office</option>
                          <option value="Shop">Shop</option>
                          <option value="Farmhouse">Farmhouse</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Preferred Location and Budget */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-1" htmlFor="enq-location">
                          Preferred Location *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal/30">
                            <MapPin className="h-3.5 w-3.5" />
                          </span>
                          <input
                            type="text"
                            name="location"
                            id="enq-location"
                            required
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="e.g. DHA Phase 6, Clifton Block 4"
                            className="w-full rounded-lg border border-charcoal/10 bg-white py-2.5 pl-9 pr-4 text-xs font-semibold text-charcoal outline-none transition-all placeholder:text-charcoal/30 focus:border-gold focus:ring-2 focus:ring-gold/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-1" htmlFor="enq-budget">
                          Budget range (USD / PKR)
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal/30">
                            <DollarSign className="h-3.5 w-3.5" />
                          </span>
                          <input
                            type="text"
                            name="budget"
                            id="enq-budget"
                            value={formData.budget}
                            onChange={handleChange}
                            placeholder="e.g. $1M - $1.5M"
                            className="w-full rounded-lg border border-charcoal/10 bg-white py-2.5 pl-9 pr-4 text-xs font-semibold text-charcoal outline-none transition-all placeholder:text-charcoal/30 focus:border-gold focus:ring-2 focus:ring-gold/10"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 5: Message */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-charcoal/60 mb-1" htmlFor="enq-message">
                        Message / Specific Checklist Details
                      </label>
                      <textarea
                        name="message"
                        id="enq-message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Detail other parameters (e.g., minimum 4 car spaces, private gym, high boundary walls, etc.)"
                        className="w-full rounded-lg border border-charcoal/10 bg-white py-2.5 px-4 text-xs font-semibold text-charcoal outline-none transition-all placeholder:text-charcoal/30 focus:border-gold focus:ring-2 focus:ring-gold/10 resize-none"
                      />
                    </div>

                    {/* Send Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-charcoal py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-gold hover:shadow-lg disabled:opacity-50 cursor-pointer"
                      id="submit-enquiry-form-btn"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Transmitting Brief...
                        </span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Enquiry
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Form Submission Success Block */
                  <motion.div
                    key="enquiry-success-view"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                    id="enquiry-success-animation-screen"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      className="rounded-full bg-gold/10 p-4 text-gold mb-6"
                    >
                      <CheckCircle2 className="h-16 w-16" />
                    </motion.div>

                    <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal tracking-tight">
                      Enquiry Received Successfully
                    </h3>
                    
                    <p className="mt-4 text-sm text-charcoal/70 max-w-md leading-relaxed">
                      Thank you! Your enquiry has been received. Our property consultant will contact you shortly.
                    </p>

                    <div className="mt-6 rounded-lg bg-white p-4 text-left text-xs text-charcoal/70 border border-charcoal/5 max-w-xs w-full space-y-1">
                      <p><strong>Lead Name:</strong> {formData.name}</p>
                      <p><strong>District Target:</strong> {formData.location}, {formData.city}</p>
                      <p><strong>Onboarding Priority:</strong> VETTED ESCROW READY</p>
                    </div>

                    <button
                      onClick={resetForm}
                      className="mt-8 rounded-lg bg-charcoal px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-gold"
                      id="reset-enquiry-view-btn"
                    >
                      Submit Another Brief
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
