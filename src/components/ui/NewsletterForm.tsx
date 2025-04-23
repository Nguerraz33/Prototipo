import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
          className="w-full py-2 px-4 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
          required
          disabled={status === 'loading' || status === 'success'}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={`w-full py-2 px-4 rounded font-medium transition-all duration-200 ${
          status === 'loading'
            ? 'bg-gray-600 cursor-wait'
            : status === 'success'
            ? 'bg-green-600'
            : 'bg-teal-600 hover:bg-teal-700'
        }`}
      >
        {status === 'loading' ? 'Suscribiendo...' : status === 'success' ? '¡Suscrito!' : 'Suscribirse'}
      </button>
      
      {status === 'error' && (
        <p className="text-red-500 text-sm">Hubo un error. Intenta nuevamente.</p>
      )}
    </form>
  );
};

export default NewsletterForm;