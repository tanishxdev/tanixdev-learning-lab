function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      {/* App frame */}
      <div className="max-w-7xl mx-auto px-6 py-10">{children}</div>
    </div>
  );
}

export default Layout;
