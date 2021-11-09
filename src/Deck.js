import React from "react";
import { useEffect } from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import { readDeck, deleteDeck, deleteCard } from "./utils/api";

function Deck({deck, setDeck}) {
  const history = useHistory();
  const {deckId} = useParams();


}

export default Deck;