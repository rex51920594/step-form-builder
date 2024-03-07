import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormList from "./page/FormList";
import { CssBaseline, ThemeProvider } from '@mui/material'; // reset all default css
import { ColorModeContext, useMode } from './styles/theme';
import { SidebarMenu, Team, TopBar } from "./page";
const App = () => {
  const [theme, coloMode] = useMode();
  return (
    <ColorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        {/* Rest CSS */}
        <CssBaseline />

        <BrowserRouter>
          <main className="app">

            <SidebarMenu />

            <section className="content">
              <TopBar />

              <Routes>
                <Route path="/" element={<FormList />} />

                <Route path="/form-list" element={<Team />} />
              </Routes>

            </section>

          </main>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )

}

export default App