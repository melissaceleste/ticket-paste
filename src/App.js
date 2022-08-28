import "./App.css";
import React, { useState } from "react";
import InputContainer from "./components/InputContainer/InputContainer";
import Card from "./components/OutputContainer/Card";
import styled from "styled-components";

function App() {
  const [returntFromTesting, setReturntFromTesting] = useState(false);
  const [gotThroughQaAtFirstTime, setGotThroughQaAtFirstTime] = useState(false);
  const [polishingAfterQAStart, setPolishingAfterQAStart] = useState("");
  const [polishingAfterQAEnd, setPolishingAfterQAEnd] = useState("");
  const [helpNeeded, setHelpNeeded] = useState(false);
  const [polishingAfterTestingStart, setPolishingAfterTestingStart] =
    useState("");
  const [polishingAfterTestingEnd, setPolishingAfterTestingEnd] = useState("");

  const [cards, setCards] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const {
      name,
      inProgressStart,
      inProgressEnd,
      QAStart,
      QAEnd,
      TestingStart,
      TestingEnd,
      polishingAfterTestingStart,
      polishingAfterTestingEnd,
      helpNeeded,
      gotThroughQaAtFirstTime,
    } = form.elements;
    console.log("kommt an");
    const newTicketObject = {
      name: name.value,
      inProgressStart: inProgressStart.value,
      inProgressEnd: inProgressEnd.value,

      QAStart: QAStart.value,
      QAEnd: QAEnd.value,

      TestingStart: TestingStart.value,
      TestingEnd: TestingEnd.value,

      polishingAfterTestingStart: polishingAfterTestingStart,
      polishingAfterTestingEnd: polishingAfterTestingEnd,

      helpNeeded: helpNeeded.checked,
      gotThroughQaAtFirstTime: gotThroughQaAtFirstTime.checked,
    };
    setCards([newTicketObject, ...cards]);
    console.log("cards", cards);
    console.log("newTicketObject", newTicketObject);
  };

  return (
    <div>
      <InputContainer
        setPolishingAfterQAStart={setPolishingAfterQAStart}
        setPolishingAfterEnd={setPolishingAfterQAEnd}
        setPolishingAfterTestingStart={setPolishingAfterTestingStart}
        setPolishingAfterTestingEnd={setPolishingAfterTestingEnd}
        setHelpNeeded={setHelpNeeded}
        handleSubmit={handleSubmit}
        returntFromTesting={returntFromTesting}
        setReturntFromTesting={setReturntFromTesting}
        setGotThroughQaAtFirstTime={setGotThroughQaAtFirstTime}
      />
      <TicketContainer>
        {cards.map((card) => (
          <Card
            name={card.name}
            firstContact={card.inProgressStart}
            inProgressStart={card.inProgressStart}
            inProgressEnd={card.inProgressEnd}
            QAStart={card.QAStart}
            QAEnd={card.QAEnd}
            TestingStart={card.TestingStart}
            TestingEnd={card.TestingEnd}
            polishingAfterTestingStart={card.polishingAfterTestingStart}
            polishingAfterTestingEnd={card.polishingAfterTestingEnd}
            helpNeeded={card.helpNeeded}
            gotThroughQaAtFirstTime={card.gotThroughQaAtFirstTime}
          />
        ))}
      </TicketContainer>
    </div>
  );
}

export default App;

const TicketContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 7%;
`;

// polishing nur testing oder auch qa? -> sonst umbennen
// Nacht rausrechnen?
// server
//beim Balken vielleicht Spielraum von 1-2 Stunden lassen, bis er rot wird
// x für deleten des tickets

//Nacharbeiten nach Testing als Zeit aufnehmen oder einfach nur als Boolean?
// und dann stattdessen Gesamtzeit von Testing und Rejected
// Polishing wäre dann wirklich nur rein QA

// oder Polishing streichen und rejected ist = testing. Somit Rejected optional machen
// QA umfasst dann auch Polishing als Nacharbeit
