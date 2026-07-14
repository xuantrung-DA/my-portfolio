import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import GoldButton from "../components/ui/GoldButton";
import { personalInfo } from "../data/portfolio";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope size={20} />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: <FaMapMarkerAlt size={20} />,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
  {
    icon: <FaPhone size={20} />,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
];

const socials = [
  {
    icon: <FaGithub size={22} />,
    label: "GitHub",
    url: personalInfo.socials.github,
  },
  {
    icon: <FaLinkedinIn size={22} />,
    label: "LinkedIn",
    url: personalInfo.socials.linkedin,
  },
  {
    icon: <FaFacebookF size={22} />,
    label: "Facebook",
    url: personalInfo.socials.facebook,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success state
    // TODO: Integrate with Formspree, EmailJS, or custom backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-32 bg-bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionTitle
            title="Get In Touch"
            subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Info Cards */}
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card gold className="!p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-text-muted text-xs tracking-widest uppercase mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-text-primary hover:text-gold transition-colors text-sm"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-text-primary text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="text-text-muted text-xs tracking-widest uppercase mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-xl border border-border bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold/50 hover:bg-gold/5 hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] transition-all duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <Card gold className="!p-8 md:!p-10">
                <h3 className="font-heading text-2xl text-text-primary mb-8">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-text-muted text-xs tracking-widest uppercase mb-2 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-bg-tertiary border border-border rounded-lg text-text-primary text-sm placeholder-text-muted focus:border-gold/50 focus:outline-none focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-text-muted text-xs tracking-widest uppercase mb-2 block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-bg-tertiary border border-border rounded-lg text-text-primary text-sm placeholder-text-muted focus:border-gold/50 focus:outline-none focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-text-muted text-xs tracking-widest uppercase mb-2 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-bg-tertiary border border-border rounded-lg text-text-primary text-sm placeholder-text-muted focus:border-gold/50 focus:outline-none focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div>
                    <label className="text-text-muted text-xs tracking-widest uppercase mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 bg-bg-tertiary border border-border rounded-lg text-text-primary text-sm placeholder-text-muted focus:border-gold/50 focus:outline-none focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  {/* Submit Button */}
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-4 rounded-lg bg-gold/10 border border-gold/30"
                    >
                      <p className="text-gold text-sm font-semibold">
                        ✓ Message sent successfully!
                      </p>
                    </motion.div>
                  ) : (
                    <GoldButton
                      onClick={() => {}}
                      icon={<FaPaperPlane />}
                      className="w-full justify-center"
                    >
                      Send Message
                    </GoldButton>
                  )}
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
