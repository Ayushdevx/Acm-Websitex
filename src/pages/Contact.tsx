import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import Card from '../components/shared/Card';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Address',
      content: 'VIT Chennai Campus, Vandalur-Kelambakkam Road, Chennai - 600127',
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-600" />,
      title: 'Phone',
      content: '+91 123 456 7890',
    },
    {
      icon: <Mail className="h-6 w-6 text-pink-600" />,
      title: 'Email',
      content: 'acm@vit.ac.in',
    },
    {
      icon: <Globe className="h-6 w-6 text-green-600" />,
      title: 'Social Media',
      content: 'Follow us on Instagram, LinkedIn, and Twitter',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <div className="flex items-start space-x-4">
                    {info.icon}
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;