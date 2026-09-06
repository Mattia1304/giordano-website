export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-dark-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-title text-gold-500 mb-12">Begin Your Journey</h2>
        <form className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="First Name" className="w-full bg-dark-800 border border-gold-500/20 px-4 py-3 text-white focus:outline-none focus:border-gold-500" />
            <input type="text" placeholder="Last Name" className="w-full bg-dark-800 border border-gold-500/20 px-4 py-3 text-white focus:outline-none focus:border-gold-500" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full bg-dark-800 border border-gold-500/20 px-4 py-3 text-white focus:outline-none focus:border-gold-500" />
          <textarea rows={4} placeholder="Tell us about your project" className="w-full bg-dark-800 border border-gold-500/20 px-4 py-3 text-white focus:outline-none focus:border-gold-500"></textarea>
          <button className="w-full bg-gold-500 text-dark-900 font-title font-bold uppercase tracking-widest py-4 hover:bg-gold-600 transition-colors">
            Request Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
