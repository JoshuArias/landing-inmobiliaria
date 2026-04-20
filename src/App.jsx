import './App.css'
import Hero from './components/Hero'
import LeadForm from './components/LeadForm'
import Benefits from './components/Benefits'
import heroImage from '../design-reference/house-isolated-field.jpg'

function App() {
  return (
    <main className="site-shell">
      <Hero
        image={heroImage}
        title="Encuentra tu hogar ideal"
        subtitle="Las mejores propiedades en las ubicaciones más exclusivas"
      />
      <LeadForm />
      <Benefits />
    </main>
  )
}

export default App
