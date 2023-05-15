
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'
import ModalForm from './components/ModalForm'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

function App() {
    const [showModal, setShowModal] = React.useState(false)
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            email: "",
            destination: ""
        }
    )
    // const [submitted, setSubmitted] = React.useState(false)
    const [state, handleSubmit] = useForm('xjvdzarn');
    React.useEffect(() => {
        setTimeout(() => {
            setShowModal(true)
        }, 4000)
    }, [])

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
    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    console.log(formData)

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     console.log(formData)
    //     setSubmitted(true)
    //     setTimeout(closeModal, 1000)
    // }
    function closeModal() {
        setShowModal(false)
    }
    return (
        <>
            <Navbar />
            {showModal && <ModalForm
                handleSubmit={handleSubmit}
                firstName={formData.firstName}
                email={formData.email}
                destination={formData.destination}
                handleChange={handleChange}
                closeModal={closeModal}
                submitted={state.succeeded}
                errors={state.errors}
                submitting={state.submitting}
                ValidationError={ValidationError}

            />}
            <main className='cards-list'>
                {cards}
            </main>

        </>
    )
}

export default App
