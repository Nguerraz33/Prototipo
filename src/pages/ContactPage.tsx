import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Si tienes alguna pregunta sobre nuestros productos o servicios,
            no dudes en ponerte en contacto con nosotros.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-teal-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      Av. Tecnológica 123<br />
                      Ciudad Importación, CP 12345<br />
                      México
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-teal-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">
                      +123 456 7890<br />
                      +123 456 7891
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-teal-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@techhome.com<br />
                      ventas@techhome.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageCircle size={24} className="text-teal-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horario de Atención</h3>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 - 18:00<br />
                      Sábado: 10:00 - 14:00<br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-gray-200 rounded-xl shadow-md h-72 overflow-hidden">
              <div className="w-full h-full bg-center bg-cover" style={{ 
                backgroundImage: "url('https://images.pexels.com/photos/4386152/pexels-photo-4386152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              }}>
                <div className="bg-blue-800/30 w-full h-full flex items-center justify-center">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-gray-800 font-medium">Mapa interactivo disponible en sitio real</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
            
            {formStatus === 'success' ? (
              <div className="bg-green-100 border border-green-300 text-green-700 px-6 py-8 rounded-lg mb-6 text-center">
                <h3 className="text-xl font-semibold mb-2">¡Mensaje Enviado!</h3>
                <p>Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                      disabled={formStatus === 'loading'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                      disabled={formStatus === 'loading'}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Asunto</label>
                  <select 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                    disabled={formStatus === 'loading'}
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="Información de Productos">Información de Productos</option>
                    <option value="Soporte Técnico">Soporte Técnico</option>
                    <option value="Ventas">Ventas</option>
                    <option value="Devoluciones">Devoluciones</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                    disabled={formStatus === 'loading'}
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className={`flex items-center justify-center w-full py-3 px-6 rounded-lg font-medium text-white ${
                      formStatus === 'loading' 
                        ? 'bg-gray-500 cursor-wait' 
                        : 'bg-blue-800 hover:bg-blue-900'
                    } transition-colors`}
                  >
                    {formStatus === 'loading' ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;