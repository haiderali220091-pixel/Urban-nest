import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Phone, Mail, User, CheckCircle2 } from 'lucide-react';

interface BookConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPurpose?: string;
}

export default function BookConsultationModal({ isOpen, onClose, initialPurpose = 'Buy Property' }: BookConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    purpose: initialPurpose,
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
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      alert('Please fill out all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate premium submission sequence
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
      date: '',
      time: '',
      purpose: 'Buy Property',
      message: ''
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl md:max-w-xl"
            id="booking-modal-content"
          >
            {/* Top gold accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-beige via-gold to-beige" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-1.5 text-charcoal/60 hover:bg-light-grey hover:text-charcoal transition-all"
              aria-label="Close modal"
              id="close-booking-modal-btn"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSuccess ? (
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-semibold text-charcoal tracking-tight" id="modal-title">
                    Schedule Private Consultation
                  </h3>
                  <p className="mt-1 text-sm text-charcoal/60">
                    Connect with our premier advisors to discuss your real estate objectives.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" id="consultation-form">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1" htmlFor="book-name">
                      Full Name *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal/40">
                        <User className="h-4 w-4" />
                      </span>
                      <input
                        type="text"
                        name="name"
                        id="book-name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Johnathan Doe"
                        className="w-full rounded-lg border border-charcoal/10 bg-light-grey/50 py-2.5 pl-10 pr-4 text-sm text-charcoal outline-none transition-all placeholder:text-charcoal/40 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/10"
                      />
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1" htmlFor="book-email">
                        Email Address *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal/40">
                          <Mail className="h-4 w-4" />
                        </span>
                        <input
                          type="email"
                          name="email"
                          id="book-email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full rounded-lg border border-charcoal/10 bg-light-grey/50 py-2.5 pl-10 pr-4 text-sm text-charcoal outline-none transition-all placeholder:text-charcoal/40 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1" htmlFor="book-phone">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal/40">
                          <Phone className="h-4 w-4" />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          id="book-phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full rounded-lg border border-charcoal/10 bg-light-grey/50 py-2.5 pl-10 pr-4 text-sm text-charcoal outline-none transition-all placeholder:text-charcoal/40 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1" htmlFor="book-date">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal/40">
                          <Calendar className="h-4 w-4" />
                        </span>
                        <input
                          type="date"
                          name="date"
                          id="book-date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-charcoal/10 bg-light-grey/50 py-2.5 pl-10 pr-4 text-sm text-charcoal outline-none transition-all focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1" htmlFor="book-time">
                        Preferred Time *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal/40">
                          <Clock className="h-4 w-4" />
                        </span>
                        <select
                          name="time"
                          id="book-time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-charcoal/10 bg-light-grey/50 py-2.5 pl-10 pr-4 text-sm text-charcoal outline-none transition-all focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/10"
                        >
                          <option value="">Select Time Slot</option>
                          <option value="09:00 AM - 10:30 AM">09:00 AM - 10:30 AM</option>
                          <option value="11:00 AM - 12:30 PM">11:00 AM - 12:30 PM</option>
                          <option value="02:00 PM - 03:30 PM">02:00 PM - 03:30 PM</option>
                          <option value="04:00 PM - 05:30 PM">04:00 PM - 05:30 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Purpose Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1" htmlFor="book-purpose">
                      Consultation Purpose
                    </label>
                    <select
                      name="purpose"
                      id="book-purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-charcoal/10 bg-light-grey/50 py-2.5 px-4 text-sm text-charcoal outline-none transition-all focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/10"
                    >
                      <option value="Buy Property">Acquiring / Buying Property</option>
                      <option value="Sell Property">Selling Existing Property</option>
                      <option value="Rent Property">Leasing / Renting Property</option>
                      <option value="Investment Advisory">High-Yield Investment Advisory</option>
                      <option value="Portfolio Audit">Portfolio Evaluation & Audit</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1" htmlFor="book-message">
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      name="message"
                      id="book-message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your interest (e.g. searching for 5-bed villa in Karachi Clifton...)"
                      className="w-full rounded-lg border border-charcoal/10 bg-light-grey/50 py-2.5 px-4 text-sm text-charcoal outline-none transition-all placeholder:text-charcoal/40 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/10 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full overflow-hidden rounded-lg bg-charcoal py-3 text-center text-sm font-semibold text-white transition-all hover:bg-gold hover:shadow-lg disabled:opacity-50"
                    id="confirm-booking-btn"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Securing Premium Slot...
                      </span>
                    ) : (
                      'Confirm Private Consultation'
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Success Animation Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-8 text-center md:p-12"
                id="booking-success-view"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="rounded-full bg-gold/10 p-4 text-gold mb-6"
                >
                  <CheckCircle2 className="h-16 w-16" />
                </motion.div>

                <h3 className="font-display text-2xl font-semibold text-charcoal tracking-tight">
                  Consultation Request Confirmed
                </h3>
                <p className="mt-3 text-sm text-charcoal/70 max-w-sm">
                  Thank you, <span className="font-semibold text-charcoal">{formData.name}</span>! Your request has been secured for <span className="font-semibold text-charcoal">{formData.date}</span> at <span className="font-semibold text-charcoal">{formData.time}</span>.
                </p>
                <div className="mt-6 rounded-lg bg-light-grey p-4 text-left text-xs text-charcoal/70 space-y-1 w-full max-w-xs border border-charcoal/5">
                  <p><strong>Purpose:</strong> {formData.purpose}</p>
                  <p><strong>Registry Email:</strong> {formData.email}</p>
                  <p><strong>Direct Hotline:</strong> {formData.phone}</p>
                </div>

                <p className="mt-6 text-xs text-charcoal/40">
                  Our private client advisory will contact you in the next 1-2 hours to finalize details.
                </p>

                <button
                  onClick={resetForm}
                  className="mt-8 rounded-lg bg-charcoal px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gold"
                  id="success-dismiss-btn"
                >
                  Return to Exploration
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
