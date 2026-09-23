import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: 'Email',
    value: 'imanuelladaniel@gmail.com',
    href: 'mailto:imanuelladaniel@gmail.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/imanuella-daniel',
    href: 'https://linkedin.com/in/imanuella-daniel',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/Imanuella-Daniel',
    href: 'https://github.com/Imanuella-Daniel',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+62 852-5460-6988',
    href: 'https://wa.me/6285254606988',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/imanuelladaniel@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: "Pesan Baru dari Portfolio"
        })
      });

      if (response.ok) {
        setSent(true);
      } else {
        alert("Gagal mengirim pesan, silakan coba lagi.");
      }
    } catch (error) {
      alert("Gagal mengirim pesan, pastikan koneksi internet Anda stabil.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle = {
    width: '100%',
    background: '#131720',
    border: '1px solid #232b3a',
    borderRadius: 8,
    padding: '11px 14px',
    color: '#e1e8f4',
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.15s',
    boxSizing: 'border-box' as const,
    fontFamily: 'Inter, sans-serif',
  };

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 100px' }}>

      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2dd4bf', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Kontak</div>
        <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, color: '#e1e8f4', margin: '0 0 14px 0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Ayo Terhubung
        </h1>

        <div style={{ width: 40, height: 3, background: '#2dd4bf', borderRadius: 2 }} />
      </div>
      <div className="contact-grid" style={{ gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'stretch' }}>
        {/* Left: Contact info */}
        <div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 20, fontWeight: 700, color: '#e1e8f4', margin: '0 0 20px 0' }}>Informasi Kontak</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {contactInfo.map(item => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '14px 16px',
                  background: '#131720',
                  border: '1px solid #232b3a',
                  borderRadius: 10,
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(45,212,191,0.35)'; e.currentTarget.style.background = 'rgba(45,212,191,0.03)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#232b3a'; e.currentTarget.style.background = '#131720'; }}
              >
                <div style={{ color: '#2dd4bf', width: 20, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ color: '#5e6e86', fontSize: 11, marginBottom: 2 }}>{item.label}</div>
                  <div style={{ color: '#e1e8f4', fontSize: 13, fontWeight: 500 }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* CV section */}
          <div style={{ background: 'linear-gradient(135deg, #0d3d38 0%, #131720 100%)', border: '1px solid rgba(45,212,191,0.2)', borderRadius: 12, padding: '22px 20px' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', color: '#e1e8f4', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Lihat &amp; Unduh CV Saya</div>
            <p style={{ color: '#5e6e86', fontSize: 13, lineHeight: 1.6, margin: '0 0 16px 0' }}>Lihat CV saya untuk mengetahui pengalaman, pendidikan, keterampilan, dan proyek yang pernah saya kerjakan.</p>
            <a
              href="/src/assets/CV_Imanuella Daniel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 20px', background: '#2dd4bf', color: '#0c0e13',
                borderRadius: 7, fontWeight: 700, fontSize: 13, textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Lihat CV →
            </a>
          </div>
        </div>

        {/* Right: Contact form */}
        <div style={{ height: '100%' }}>
          <div style={{ background: '#131720', border: '1px solid #232b3a', borderRadius: 12, padding: '32px 28px', height: '100%', boxSizing: 'border-box' }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 20, fontWeight: 700, color: '#e1e8f4', margin: '0 0 22px 0' }}>Kirim Pesan</h2>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✉️</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', color: '#e1e8f4', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Pesan Terkirim!</div>
                <p style={{ color: '#5e6e86', fontSize: 14, lineHeight: 1.6, margin: '0 0 20px 0' }}>Terima kasih sudah menghubungi saya. Saya akan membalas dalam 1–2 hari kerja.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  style={{ background: 'rgba(45,212,191,0.1)', border: '1px solid rgba(45,212,191,0.25)', color: '#2dd4bf', borderRadius: 7, padding: '8px 18px', fontSize: 13, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
                >
                  Kirim Pesan Lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', color: '#8a9ab5', fontSize: 12, marginBottom: 6, fontWeight: 500 }}>Nama Anda</label>
                    <input
                      required
                      type="text"
                      placeholder="Nama lengkap"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(45,212,191,0.5)')}
                      onBlur={e => (e.target.style.borderColor = '#232b3a')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#8a9ab5', fontSize: 12, marginBottom: 6, fontWeight: 500 }}>Alamat Email</label>
                    <input
                      required
                      type="email"
                      placeholder="email@perusahaan.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(45,212,191,0.5)')}
                      onBlur={e => (e.target.style.borderColor = '#232b3a')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#8a9ab5', fontSize: 12, marginBottom: 6, fontWeight: 500 }}>Pesan</label>
                    <textarea
                      required
                      placeholder="Ceritakan tentang kesempatan atau proyek yang ingin Anda diskusikan..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(45,212,191,0.5)')}
                      onBlur={e => (e.target.style.borderColor = '#232b3a')}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      padding: '12px 24px',
                      background: submitting ? '#115e59' : '#2dd4bf',
                      color: submitting ? '#8a9ab5' : '#0c0e13',
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: 14,
                      border: 'none',
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      transition: 'opacity 0.15s, background 0.2s',
                      fontFamily: 'Inter, sans-serif',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                    }}
                    onMouseEnter={e => { if(!submitting) e.currentTarget.style.opacity = '0.85' }}
                    onMouseLeave={e => { if(!submitting) e.currentTarget.style.opacity = '1' }}
                  >
                    {submitting ? 'Mengirim...' : 'Kirim Pesan'}
                    {!submitting && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
