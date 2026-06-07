import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler from "./components/ThemeToggler";

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icons: "📦" },
    { id: "ref", label: "ref Props", icons: "🔗" },
    { id: "children", label: "children Props", icons: "🤱" },
    { id: "complex", label: "complex Props", icons: "🧩" },
    { id: "theme", label: "theme Props", icons: "🎨" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-colors ${isDark ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              className={`px-4 py-2 rounded-lg font-medium bg-blue-600 text-white mr-2 mt-2   hover:bg-blue-800`}
              key={section.id}
            >
              <span className="mr-2">{section.icons}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const isDark = true;

  return (
    <div className={`mih-h-screen bg-gray-800`}>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors ${isDark ? "text-white" : "text-gray-800"}`}
        >
          <h1 className="text-5xl font-bold mb-4">React props explained</h1>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            React props explained
          </p>
        </header>

        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ComplexProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <RefProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ThemeToggler />
          </div>
        </div>
        <footer
          className={`mt-12 text-center pb-8 transition-colors ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          <p className="text-sm">
            Made with ❤️ using Bun, vite, React and Tailwind Css
          </p>
        </footer>
      </div>
    </div>
  );
}

const App = () => {
  return <AppContent />;
};

export default App;
