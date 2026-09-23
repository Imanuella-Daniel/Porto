import React from 'react';

const C = {
  bg: '#0c0e13',
  surface: '#131720',
  elevated: '#1a2033',
  border: '#232b3a',
  fg: '#e1e8f4',
  muted: '#5e6e86',
  accent: '#2dd4bf',
  accentDim: '#0d3d38',
};

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: C.elevated, overflow: 'hidden' }}>
      <div style={{ height: 26, background: '#1c2335', display: 'flex', alignItems: 'center', padding: '0 10px', gap: 7, flexShrink: 0, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: 'flex', gap: 5 }}>
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#28ca41' }} />
        </div>
        <div style={{ flex: 1, height: 15, background: C.border, borderRadius: 10, display: 'flex', alignItems: 'center', padding: '0 8px' }}>
          <span style={{ color: C.muted, fontSize: 8, fontFamily: 'JetBrains Mono, monospace' }}>{url}</span>
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

function LibraryHomeMock() {
  const books = [
    { bg: '#1e3a5f', title: 'Clean Code' }, { bg: '#3a1e5f', title: 'Design Patterns' },
    { bg: '#1e5f3a', title: 'Pragmatic Prog.' }, { bg: '#5f3a1e', title: 'Refactoring' },
    { bg: '#1e5f5f', title: 'DDIA' }, { bg: '#5f1e3a', title: 'SICP' },
  ];
  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ height: 32, background: C.surface, borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', padding: '0 12px', justifyContent: 'space-between', flexShrink: 0 }}>
        <span style={{ color: C.accent, fontWeight: 700, fontSize: 11, fontFamily: 'Outfit, sans-serif' }}>LibraTrack</span>
        <div style={{ display: 'flex', gap: 10, color: C.muted, fontSize: 9 }}>
          <span>Catalog</span><span>My Books</span><span style={{ color: C.accent }}>Login</span>
        </div>
      </div>
      <div style={{ background: `linear-gradient(135deg, ${C.accentDim} 0%, ${C.surface} 100%)`, padding: '14px 12px 12px', borderBottom: `1px solid ${C.border}`, flexShrink: 0 }}>
        <div style={{ color: C.fg, fontSize: 14, fontWeight: 700, fontFamily: 'Outfit, sans-serif', marginBottom: 3 }}>Find Your Next Book</div>
        <div style={{ color: C.muted, fontSize: 9, marginBottom: 10 }}>Access thousands of books in our digital catalog</div>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ flex: 1, height: 22, background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 4, display: 'flex', alignItems: 'center', padding: '0 8px' }}>
            <span style={{ color: C.muted, fontSize: 8 }}>🔍  Search books, authors, ISBN...</span>
          </div>
          <div style={{ padding: '0 10px', height: 22, background: C.accent, borderRadius: 4, display: 'flex', alignItems: 'center', color: C.bg, fontWeight: 700, fontSize: 8, flexShrink: 0 }}>Search</div>
        </div>
      </div>
      <div style={{ padding: '10px 12px', flex: 1 }}>
        <div style={{ color: C.muted, fontSize: 8, marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Featured Collection</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 6 }}>
          {books.map(b => (
            <div key={b.title} style={{ background: b.bg, borderRadius: 4, aspectRatio: '2/3', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '3px 4px', overflow: 'hidden' }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 6, fontWeight: 600, lineHeight: 1.2 }}>{b.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LibraryCatalogMock() {
  const filters = ['All', 'Fiction', 'Science', 'Technology', 'History'];
  const books = ['Clean Code', 'The Pragmatic Programmer', 'Design Patterns', 'Refactoring', 'DDIA', 'SICP'];
  const colors = ['#1e3a5f', '#3a1e5f', '#1e5f3a', '#5f3a1e', '#1e5f5f', '#3d5f1e'];
  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ width: 90, background: C.surface, borderRight: `1px solid ${C.border}`, padding: '10px 8px', flexShrink: 0 }}>
        <div style={{ color: C.muted, fontSize: 8, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Filters</div>
        {filters.map((f, i) => (
          <div key={f} style={{ padding: '5px 8px', borderRadius: 4, fontSize: 9, color: i === 0 ? C.bg : C.muted, background: i === 0 ? C.accent : 'transparent', marginBottom: 2 }}>{f}</div>
        ))}
        <div style={{ marginTop: 12, color: C.muted, fontSize: 8, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Year</div>
        {['2024', '2023', '2022'].map(y => (
          <div key={y} style={{ padding: '4px 8px', fontSize: 9, color: C.muted, display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, border: `1px solid ${C.border}` }} />{y}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: '10px 10px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
          {books.map((b, i) => (
            <div key={b} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
              <div style={{ height: 50, background: colors[i], display: 'flex', alignItems: 'flex-end', padding: '4px 6px' }}>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 6, fontWeight: 600 }}>{b}</div>
              </div>
              <div style={{ padding: '5px 6px' }}>
                <div style={{ color: C.fg, fontSize: 8, fontWeight: 600, marginBottom: 2, lineHeight: 1.2 }}>{b}</div>
                <div style={{ color: C.accent, fontSize: 7 }}>Available</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LibraryLoginMock() {
  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: '20px 24px', width: '60%' }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ color: C.accent, fontWeight: 700, fontSize: 14, fontFamily: 'Outfit, sans-serif', marginBottom: 2 }}>LibraTrack</div>
          <div style={{ color: C.muted, fontSize: 9 }}>Sign in to your account</div>
        </div>
        {[{ label: 'Email Address', placeholder: 'you@gmail.com', type: 'email' }, { label: 'Password', placeholder: '••••••••', type: 'password' }].map(f => (
          <div key={f.label} style={{ marginBottom: 10 }}>
            <div style={{ color: C.muted, fontSize: 8, marginBottom: 4 }}>{f.label}</div>
            <div style={{ height: 22, background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 4, display: 'flex', alignItems: 'center', padding: '0 8px' }}>
              <span style={{ color: C.muted, fontSize: 8 }}>{f.placeholder}</span>
            </div>
          </div>
        ))}
        <div style={{ height: 24, background: C.accent, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.bg, fontWeight: 700, fontSize: 9, cursor: 'pointer', marginTop: 4 }}>
          Sign In
        </div>
        <div style={{ textAlign: 'center', marginTop: 10, color: C.muted, fontSize: 8 }}>
          New member? <span style={{ color: C.accent }}>Register here</span>
        </div>
      </div>
    </div>
  );
}

function LibraryAdminMock() {
  const stats = [{ label: 'Books', val: '1,247' }, { label: 'Members', val: '389' }, { label: 'Borrowed', val: '84' }, { label: 'Overdue', val: '12' }];
  const rows = [
    { name: 'Sarah L.', book: 'Clean Code', date: 'Dec 15' },
    { name: 'John M.', book: 'Design Patterns', date: 'Dec 18' },
    { name: 'Amy K.', book: 'The Pragmatic Prog.', date: 'Dec 20' },
    { name: 'Tom R.', book: 'Refactoring', date: 'Dec 22' },
  ];
  return (
    <div style={{ height: '100%', display: 'flex', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ width: 90, background: C.surface, borderRight: `1px solid ${C.border}`, padding: '10px 0', flexShrink: 0 }}>
        <div style={{ padding: '0 10px', marginBottom: 14 }}>
          <div style={{ color: C.accent, fontWeight: 700, fontSize: 11, fontFamily: 'Outfit, sans-serif' }}>LibraTrack</div>
          <div style={{ color: C.muted, fontSize: 7 }}>Admin Panel</div>
        </div>
        {['Dashboard', 'Books', 'Members', 'Borrowings', 'Reports'].map((item, i) => (
          <div key={item} style={{ padding: '6px 10px', fontSize: 9, color: i === 0 ? C.bg : C.muted, background: i === 0 ? C.accent : 'transparent', marginBottom: 1 }}>{item}</div>
        ))}
      </div>
      <div style={{ flex: 1, padding: '10px 12px', background: C.bg, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginBottom: 10 }}>
          {stats.map(s => (
            <div key={s.label} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6, padding: '7px 8px' }}>
              <div style={{ color: C.muted, fontSize: 7, marginBottom: 3 }}>{s.label}</div>
              <div style={{ color: C.fg, fontWeight: 700, fontSize: 14, fontFamily: 'Outfit, sans-serif' }}>{s.val}</div>
            </div>
          ))}
        </div>
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ padding: '7px 10px', borderBottom: `1px solid ${C.border}`, color: C.fg, fontWeight: 600, fontSize: 9 }}>Recent Borrowings</div>
          {rows.map((r, i) => (
            <div key={i} style={{ display: 'flex', padding: '5px 10px', borderBottom: i < rows.length - 1 ? `1px solid ${C.border}` : 'none', fontSize: 8 }}>
              <span style={{ flex: 1, color: C.fg }}>{r.name}</span>
              <span style={{ flex: 2, color: C.muted }}>{r.book}</span>
              <span style={{ color: C.accent }}>Due {r.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LibraryMemberMock() {
  const books = [
    { title: 'Clean Code', author: 'Robert Martin', due: 'Dec 15', status: 'On Time' },
    { title: 'Design Patterns', author: 'GoF', due: 'Dec 10', status: 'Overdue' },
    { title: 'DDIA', author: 'Martin Kleppmann', due: 'Dec 28', status: 'On Time' },
  ];
  return (
    <div style={{ height: '100%', background: C.bg, fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: '10px 12px', flexShrink: 0 }}>
        <div style={{ color: C.fg, fontWeight: 600, fontSize: 11, fontFamily: 'Outfit, sans-serif' }}>Welcome, Sarah</div>
        <div style={{ color: C.muted, fontSize: 8 }}>Member since January 2024 · ID: LIB-0391</div>
      </div>
      <div style={{ flex: 1, padding: '10px 12px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 10 }}>
          {[{ label: 'Borrowed', val: '3' }, { label: 'Returned', val: '18' }, { label: 'Fines', val: 'RP 0' }].map(s => (
            <div key={s.label} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 5, padding: '6px 8px', textAlign: 'center' }}>
              <div style={{ color: C.fg, fontWeight: 700, fontSize: 14, fontFamily: 'Outfit, sans-serif' }}>{s.val}</div>
              <div style={{ color: C.muted, fontSize: 7 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ color: C.muted, fontSize: 8, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Currently Borrowed</div>
        {books.map((b, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '6px 8px', background: C.surface, border: `1px solid ${C.border}`, borderRadius: 5, marginBottom: 4 }}>
            <div style={{ width: 24, height: 34, background: ['#1e3a5f', '#5f1e3a', '#1e5f5f'][i], borderRadius: 2, marginRight: 8, flexShrink: 0 }} />
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <div style={{ color: C.fg, fontSize: 8, fontWeight: 600, marginBottom: 2 }}>{b.title}</div>
              <div style={{ color: C.muted, fontSize: 7 }}>Due: {b.due}</div>
            </div>
            <div style={{ fontSize: 7, padding: '2px 6px', borderRadius: 10, background: b.status === 'Overdue' ? 'rgba(239,68,68,0.15)' : 'rgba(45,212,191,0.1)', color: b.status === 'Overdue' ? '#ef4444' : C.accent }}>
              {b.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LibraryDetailMock() {
  return (
    <div style={{ height: '100%', background: C.bg, fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <div style={{ color: C.accent, fontSize: 9, cursor: 'pointer' }}>← Back to Catalog</div>
      </div>
      <div style={{ flex: 1, padding: '12px', display: 'flex', gap: 12, overflow: 'hidden' }}>
        <div style={{ width: 70, height: 100, background: '#1e3a5f', borderRadius: 4, flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 6 }}>
          <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 7, fontWeight: 600 }}>Clean Code</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: C.fg, fontSize: 13, fontWeight: 700, fontFamily: 'Outfit, sans-serif', marginBottom: 2 }}>Clean Code</div>
          <div style={{ color: C.muted, fontSize: 9, marginBottom: 8 }}>Robert C. Martin · 464 pages · 2008</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5, marginBottom: 10 }}>
            {[{ k: 'Genre', v: 'Technology' }, { k: 'Status', v: 'Available' }, { k: 'Copies', v: '3 of 3' }, { k: 'ISBN', v: '978-0-13-468599' }].map(({ k, v }) => (
              <div key={k}>
                <div style={{ color: C.muted, fontSize: 7 }}>{k}</div>
                <div style={{ color: k === 'Status' ? C.accent : C.fg, fontSize: 9, fontWeight: 500 }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{ height: 22, background: C.accent, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.bg, fontWeight: 700, fontSize: 9, cursor: 'pointer' }}>
            Borrow This Book
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskFlowMock() {
  const columns = [
    { title: 'To Do', color: C.muted, tasks: ['Research API endpoints', 'Write unit tests', 'Update README'] },
    { title: 'In Progress', color: '#f59e0b', tasks: ['Build auth module', 'Design DB schema'] },
    { title: 'Done', color: '#22c55e', tasks: ['Setup project', 'Configure CI/CD', 'Initial wireframes'] },
  ];
  return (
    <div style={{ height: '100%', background: C.bg, fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <span style={{ color: C.fg, fontWeight: 700, fontSize: 11, fontFamily: 'Outfit, sans-serif' }}>TaskFlow</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ fontSize: 8, color: C.muted }}>Project: Alpha Sprint</div>
          <div style={{ height: 16, padding: '0 8px', background: C.accent, borderRadius: 10, display: 'flex', alignItems: 'center', color: C.bg, fontSize: 7, fontWeight: 700 }}>+ Add Task</div>
        </div>
      </div>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, padding: '10px 10px', overflow: 'hidden' }}>
        {columns.map(col => (
          <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: col.color }} />
              <span style={{ color: C.fg, fontSize: 9, fontWeight: 600 }}>{col.title}</span>
              <span style={{ color: C.muted, fontSize: 8 }}>({col.tasks.length})</span>
            </div>
            {col.tasks.map(task => (
              <div key={task} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 5, padding: '7px 8px' }}>
                <div style={{ color: C.fg, fontSize: 8, lineHeight: 1.3 }}>{task}</div>
                <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
                  <div style={{ width: 14, height: 14, borderRadius: '50%', background: C.elevated, border: `1px solid ${C.border}` }} />
                  <div style={{ height: 4, borderRadius: 10, background: col.color + '40', flex: 1, marginTop: 5 }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ShopEaseMock() {
  const products = [
    { name: 'Wireless Headphones', price: 'Rp 450,000', color: '#dbeafe' },
    { name: 'Smart Watch Series 5', price: 'Rp 1,200,000', color: '#fce7f3' },
    { name: 'USB-C Hub 7-in-1', price: 'Rp 280,000', color: '#d1fae5' },
    { name: 'Mechanical Keyboard', price: 'Rp 890,000', color: '#fef3c7' },
    { name: 'Laptop Stand', price: 'Rp 180,000', color: '#ede9fe' },
    { name: 'LED Desk Lamp', price: 'Rp 220,000', color: '#fce7f3' },
  ];
  return (
    <div style={{ height: '100%', background: '#f8fafc', fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#1e293b', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <span style={{ color: '#38bdf8', fontWeight: 700, fontSize: 11, fontFamily: 'Outfit, sans-serif' }}>ShopEase</span>
        <div style={{ display: 'flex', gap: 10 }}>
          <span style={{ color: '#94a3b8', fontSize: 8 }}>Electronics</span><span style={{ color: '#94a3b8', fontSize: 8 }}>Accessories</span>
          <div style={{ background: '#38bdf8', borderRadius: 10, width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#0c0e13', fontWeight: 700 }}>3</div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '8px 10px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
          {products.map(p => (
            <div key={p.name} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 6, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <div style={{ height: 44, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>📦</div>
              <div style={{ padding: '5px 6px' }}>
                <div style={{ color: '#1e293b', fontSize: 7, fontWeight: 600, marginBottom: 2, lineHeight: 1.2 }}>{p.name}</div>
                <div style={{ color: '#0ea5e9', fontSize: 8, fontWeight: 700 }}>{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DataBoardMock() {
  const kpis = [{ label: 'Revenue', val: 'Rp 48.2M' }, { label: 'Orders', val: '1,284' }, { label: 'Customers', val: '3,920' }, { label: 'Growth', val: '+18.4%' }];
  const bars = [65, 80, 55, 90, 70, 85, 95, 72, 60, 78, 88, 92];
  return (
    <div style={{ height: '100%', background: C.bg, fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <span style={{ color: C.fg, fontWeight: 700, fontSize: 11, fontFamily: 'Outfit, sans-serif' }}>DataBoard</span>
        <select style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 4, color: C.muted, fontSize: 8, padding: '2px 6px' }}>
          <option>Last 12 Months</option>
        </select>
      </div>
      <div style={{ flex: 1, padding: '8px 10px', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
          {kpis.map(k => (
            <div key={k.label} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 5, padding: '6px 8px' }}>
              <div style={{ color: C.muted, fontSize: 7, marginBottom: 2 }}>{k.label}</div>
              <div style={{ color: k.label === 'Growth' ? C.accent : C.fg, fontWeight: 700, fontSize: 11, fontFamily: 'Outfit, sans-serif' }}>{k.val}</div>
            </div>
          ))}
        </div>
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 5, padding: '8px 10px', flex: 1 }}>
          <div style={{ color: C.muted, fontSize: 8, marginBottom: 8 }}>Monthly Revenue</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 60 }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <div style={{ width: '100%', background: i === bars.length - 1 ? C.accent : C.accent + '55', borderRadius: '2px 2px 0 0', height: `${h}%`, transition: 'height 0.3s' }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map(m => (
              <div key={m} style={{ fontSize: 7, color: C.muted, flex: 1, textAlign: 'center' }}>{m}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MedInfoMock() {
  const patients = [
    { id: 'P-001', name: 'Andi Wijaya', age: 34, status: 'Active', next: 'Dec 14' },
    { id: 'P-002', name: 'Budi Santoso', age: 52, status: 'Follow-up', next: 'Dec 16' },
    { id: 'P-003', name: 'Citra Dewi', age: 28, status: 'Active', next: 'Dec 18' },
    { id: 'P-004', name: 'Dian Pratama', age: 45, status: 'Scheduled', next: 'Dec 20' },
  ];
  return (
    <div style={{ height: '100%', background: C.bg, fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <span style={{ color: C.fg, fontWeight: 700, fontSize: 11, fontFamily: 'Outfit, sans-serif' }}>MedInfo</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <div style={{ height: 18, padding: '0 8px', background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ color: C.muted, fontSize: 8 }}>🔍 Search patients...</span>
          </div>
          <div style={{ height: 18, padding: '0 8px', background: C.accent, borderRadius: 4, display: 'flex', alignItems: 'center', color: C.bg, fontSize: 7, fontWeight: 700 }}>+ Register</div>
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 0.5fr 0.8fr 0.7fr', padding: '5px 12px', borderBottom: `1px solid ${C.border}`, color: C.muted, fontSize: 7, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          <span>Patient ID</span><span>Name</span><span>Age</span><span>Status</span><span>Next Visit</span>
        </div>
        {patients.map((p, i) => (
          <div key={p.id} style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 0.5fr 0.8fr 0.7fr', padding: '7px 12px', borderBottom: `1px solid ${C.border}30`, fontSize: 8, background: i % 2 === 0 ? 'transparent' : C.surface + '40' }}>
            <span style={{ color: C.accent, fontFamily: 'JetBrains Mono, monospace', fontSize: 7 }}>{p.id}</span>
            <span style={{ color: C.fg }}>{p.name}</span>
            <span style={{ color: C.muted }}>{p.age}</span>
            <span style={{ color: p.status === 'Active' ? '#22c55e' : p.status === 'Follow-up' ? '#f59e0b' : C.muted, fontSize: 7 }}>{p.status}</span>
            <span style={{ color: C.muted }}>{p.next}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeatherMock() {
  const forecast = [
    { day: 'Mon', icon: '⛅', h: '31°', l: '24°' },
    { day: 'Tue', icon: '🌧️', h: '28°', l: '22°' },
    { day: 'Wed', icon: '☀️', h: '33°', l: '25°' },
    { day: 'Thu', icon: '⛅', h: '30°', l: '23°' },
    { day: 'Fri', icon: '🌧️', h: '27°', l: '21°' },
  ];
  return (
    <div style={{ height: '100%', fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg, #0c1a3d 0%, #1a2a5e 50%, #0c0e13 100%)' }}>
      <div style={{ padding: '10px 12px 6px', flexShrink: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ color: C.accent, fontSize: 10, fontWeight: 600 }}>WeatherPulse</div>
            <div style={{ color: C.fg, fontSize: 11, fontWeight: 500, marginTop: 2 }}>📍 Yogyakarta, Indonesia</div>
          </div>
          <div style={{ height: 18, padding: '0 8px', background: 'rgba(255,255,255,0.1)', borderRadius: 10, display: 'flex', alignItems: 'center', fontSize: 8, color: C.fg }}>°C / °F</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
          <div style={{ fontSize: 36, lineHeight: 1 }}>⛅</div>
          <div>
            <div style={{ color: C.fg, fontSize: 32, fontWeight: 700, fontFamily: 'Outfit, sans-serif', lineHeight: 1 }}>29°C</div>
            <div style={{ color: '#93c5fd', fontSize: 9 }}>Partly Cloudy · Feels like 32°C</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          {[{ icon: '💧', val: '78%', label: 'Humidity' }, { icon: '💨', val: '14 km/h', label: 'Wind' }, { icon: '👁️', val: '10 km', label: 'Visibility' }].map(d => (
            <div key={d.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 10 }}>{d.icon}</div>
              <div style={{ color: C.fg, fontSize: 8, fontWeight: 600 }}>{d.val}</div>
              <div style={{ color: C.muted, fontSize: 7 }}>{d.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '0 8px', flex: 1, padding: '8px 4px 4px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ color: C.muted, fontSize: 7, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6, paddingLeft: 4 }}>5-Day Forecast</div>
        <div style={{ display: 'flex', gap: 4 }}>
          {forecast.map(f => (
            <div key={f.day} style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 6, padding: '6px 4px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ color: C.muted, fontSize: 7, marginBottom: 3 }}>{f.day}</div>
              <div style={{ fontSize: 14, marginBottom: 3 }}>{f.icon}</div>
              <div style={{ color: C.fg, fontSize: 8, fontWeight: 600 }}>{f.h}</div>
              <div style={{ color: C.muted, fontSize: 7 }}>{f.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const urlMap: Record<string, string> = {
  'library-home': 'localhost/libratrack',
  'library-catalog': 'localhost/libratrack/catalog',
  'library-login': 'localhost/libratrack/login',
  'library-admin': 'localhost/libratrack/admin/dashboard',
  'library-member': 'localhost/libratrack/member/dashboard',
  'library-detail': 'localhost/libratrack/catalog/clean-code',
  'taskflow-board': 'localhost/taskflow/board/alpha-sprint',
  'shopease-grid': 'localhost/shopease/electronics',
  'databoard-dash': 'localhost/databoard/analytics',
  'medinfo-list': 'localhost/medinfo/patients',
  'weather-app': 'localhost/weatherpulse',
};

const componentMap: Record<string, React.FC> = {
  'library-home': LibraryHomeMock,
  'library-catalog': LibraryCatalogMock,
  'library-login': LibraryLoginMock,
  'library-admin': LibraryAdminMock,
  'library-member': LibraryMemberMock,
  'library-detail': LibraryDetailMock,
  'taskflow-board': TaskFlowMock,
  'shopease-grid': ShopEaseMock,
  'databoard-dash': DataBoardMock,
  'medinfo-list': MedInfoMock,
  'weather-app': WeatherMock,
};

interface MockScreenshotProps {
  type: string;
}

export default function MockScreenshot({ type }: MockScreenshotProps) {
  const url = urlMap[type] || 'localhost:3000';
  const Content = componentMap[type];
  return (
    <BrowserFrame url={url}>
      {Content ? <Content /> : (
        <div style={{ height: '100%', background: C.surface, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: C.muted, fontSize: 11 }}>Screenshot Preview</span>
        </div>
      )}
    </BrowserFrame>
  );
}
