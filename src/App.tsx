import React from 'react';
import {
  Heart,
  Brain,
  Calendar,
  BookOpen,
  MessageSquare,
  Activity,
  Download,
  ChevronRight,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Users,
  HandHeart
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">MentalX</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Download App
            </button>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Your Mental Wellbeing,
                <span className="text-blue-600"> One Tap Away</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience a revolutionary approach to mental health support with MentalX. 
                Your personal companion for psychological wellness, powered by AI and backed by experts.
              </p>
              <div className="flex space-x-4">
                <button className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
                  <Download className="mr-2 h-5 w-5" />
                  App Store
                </button>
                <button className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
                  <Download className="mr-2 h-5 w-5" />
                  Google Play
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://img.freepik.com/premium-psd/portrait-african-doctor-white-uniform_225753-17950.jpg"
                alt="Woman using MentalX app"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Brain className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold">AI-Powered Support</p>
                    <p className="text-sm text-gray-600">24/7 Assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About MentalX</h2>
              <p className="text-lg text-gray-600 mb-6">
                MentalX is a comprehensive mobile application designed to make mental health support more accessible and organized. Our platform combines automated AI assistance, professional guidance, and practical tools to help you maintain and improve your mental wellbeing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Who We Serve</h3>
                    <p className="text-gray-600">
                      From teenagers to adults, students to professionals, we support anyone facing emotional challenges, stress, or seeking to improve their mental wellness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <HandHeart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Partnership</h3>
                    <p className="text-gray-600">
                      Proudly partnered with SOS Children's Villages, the largest non-governmental organization supporting children without parental care and families at risk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800"
                alt="Diverse group of people"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-purple-600 font-semibold mb-2">Our Mission</p>
                <p className="text-gray-600">
                  Making mental health support accessible, organized, and effective for everyone, everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Comprehensive Mental Health Support
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-purple-600" />,
                title: "AI Assistant",
                description: "24/7 emotional support and guidance powered by advanced AI"
              },
              {
                icon: <Activity className="h-8 w-8 text-purple-600" />,
                title: "Habit Tracker",
                description: "Monitor and improve your daily mental wellness routines"
              },
              {
                icon: <Calendar className="h-8 w-8 text-purple-600" />,
                title: "Expert Sessions",
                description: "Book appointments with licensed psychologists"
              },
              {
                icon: <BookOpen className="h-8 w-8 text-purple-600" />,
                title: "Mental Health Library",
                description: "Access a wealth of articles and resources"
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
                title: "Daily Check-ins",
                description: "Track your mood and receive personalized insights"
              },
              {
                icon: <Heart className="h-8 w-8 text-purple-600" />,
                title: "Community Support",
                description: "Connect with others on similar wellness journeys"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Anxiety Management",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200",
                quote: "MentalX helped me develop healthy coping mechanisms for my anxiety. The daily check-ins and AI support make a real difference."
              },
              {
                name: "Michael Chen",
                role: "Stress Relief",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200",
                quote: "The habit tracking features helped me establish a proper work-life balance. I'm more productive and less stressed."
              },
              {
                name: "Emma Williams",
                role: "Depression Recovery",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200",
                quote: "Having 24/7 access to support and resources made my recovery journey much more manageable. Thank you, MentalX!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about MentalX? We're here to help you on your journey to better mental health.
              </p>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
              <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-semibold">MentalX</span>
              </div>
              <p className="text-gray-400">
                Your companion for mental wellness and psychological health.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Download App</h4>
              <div className="space-y-2">
                <button className="w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300 flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  App Store
                </button>
                <button className="w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300 flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Google Play
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MentalX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;