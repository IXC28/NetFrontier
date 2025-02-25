const { useState } = React;

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col font-sans text-gray-800 bg-gray-100 min-h-screen">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} details={true} />
      {/* Main Content */}
      {/* Footer */}
      <footer className="bg-black text-red-500 py-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} NetFrontier - ixc2807business@gmail.com
        </p>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Page />);