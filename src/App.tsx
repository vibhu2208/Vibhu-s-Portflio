import { lazy, Suspense } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const LoadingFallback = () => (
  <div style={{ 
    width: '100vw', 
    height: '100vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#0b080c',
    color: '#ffffff'
  }}>
    Loading...
  </div>
);

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense fallback={<LoadingFallback />}>
          <MainContainer>
            <Suspense fallback={<LoadingFallback />}>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
