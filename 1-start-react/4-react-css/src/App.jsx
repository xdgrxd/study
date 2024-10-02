import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 8;
  const m = true;

  const redTitle = true;

  return (
    <>
      {/* GLOBAL CSS */}
      {/* GLOBAL CSS */}
      {/* GLOBAL CSS */}
      <h1>React with CSS</h1>

      {/* COMPONENT CSS */}
      {/* COMPONENT CSS */}
      {/* COMPONENT CSS */}
      <MyComponent />

      {/* INLINE CSS */}
      {/* INLINE CSS */}
      {/* INLINE CSS */}
      <p style={{color: "purple", background: "yellow", fontWeight: "bolder", borderTop: "5px solid pink"}}>This element has been styled by inline css.</p>

      {/* DYNAMIC INLINE CSS */}
      {/* DYNAMIC INLINE CSS */}
      {/* DYNAMIC INLINE CSS */}
      <h2 style={n < 10 && m ? {color: "blue", backgroundColor: "orange"} : {color: "orange", backgroundColor: "blue"}}>Dynamic CSS</h2>

      {/* DYNAMIC CLASSES */}
      {/* DYNAMIC CLASSES */}
      {/* DYNAMIC CLASSES */}
      <h2 className={redTitle ? "red-title" : "title"}>This title has dynamic class</h2>

      {/* CSS MODULES (SCOPED) */}
      {/* CSS MODULES (SCOPED) */}
      {/* CSS MODULES (SCOPED) */}
      <Title/>
    </>
  );
}

export default App;
