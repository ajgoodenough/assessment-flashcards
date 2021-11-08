import React, { useEffect } from 'react';
import {useParams, Link } from "react-router-dom";
import { readDeck } from "./utils/api/index";
import CardForm from "./CardForm";

function AddCard({deck, setDeck, card}){
  const {deckId} = useParams()
  const newCard = true
  //set deck based on the deckId param from the url input
  useEffect(() => {
    const ac = new AbortController()
    readDeck(deckId).then(setDeck).catch(console.error)

    return () => ac.abort()
  }, [deckId, setDeck])

  return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
      </ol>
      <h1>{deck.name} : <span>Add Card</span></h1>
      <CardForm card={card} deck={deck} newCard={newCard}/>
    </div>
  )
}

export default AddCard;