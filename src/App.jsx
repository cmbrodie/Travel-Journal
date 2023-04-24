
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {
    const cards = data.map(card => {
        return <Card

            key={card.id}
            // title={card.title}
            // location={card.location}
            // googleMapsUrl={card.googleMapsUrl}
            // startDate={card.startDate}
            // endDate={card.endDate}
            // description={card.description}
            // imageUrl={card.imageUrl}
            //SHORTHAND using SPREAD operator:
            {...card}

        />
    })

    return (
        <>
            <Navbar />
            <main className='cards-list'>
                {cards}
            </main>

        </>
    )
}

export default App
