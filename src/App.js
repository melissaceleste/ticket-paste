import "./App.css";
import React, { useState } from "react";
import InputContainer from "./components/InputContainer/InputContainer";
import Card from "./components/OutputContainer/Card";

function App() {
  // const [name, setName] = useState("");
  // const [firstContact, setFirstContact] = useState("");
  // const [inProgressStart, setInProgressStart] = useState("");
  // const [inProgressEnd, setInProgressEnd] = useState("");
  // const [QAStart, setQAStart] = useState("");
  // const [QAEnd, setQAEnd] = useState("");
  const [returntFromTesting, setReturntFromTesting] = useState(false);
  const [gotThroughQaAtFirstTime, setGotThroughQaAtFirstTime] = useState(false);
  //const [TestingStart, setTestingStart] = useState("");
  //const [TestingEnd, setTestingEnd] = useState("");
  const [polishingAfterQAStart, setPolishingAfterQAStart] = useState("");
  const [polishingAfterQAEnd, setPolishingAfterQAEnd] = useState("");
  const [helpNeeded, setHelpNeeded] = useState(false);
  const [polishingAfterTestingStart, setPolishingAfterTestingStart] =
    useState("");
  const [polishingAfterTestingEnd, setPolishingAfterTestingEnd] = useState("");

  const [cards, setCards] = useState([]);

  /*   function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const {
      title: titleInput,
      details: detailsTextarea,
      color: colorInput,
    } = form.elements;
    const newCard = {
      title: titleInput.value,
      details: detailsTextarea.value,
      color: colorInput.value,
    };
    setCards([newCard, ...cards]);
  } */

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const {
      name,
      firstContact,
      inProgressStart,
      inProgressEnd,
      QAStart,
      QAEnd,
      //returntFromTesting,
      TestingStart,
      TestingEnd,
      //polishingAfterQAStart,
      //polishingAfterQAEnd,
      polishingAfterTestingStart,
      polishingAfterTestingEnd,
      helpNeeded,
      gotThroughQaAtFirstTime,
    } = form.elements;
    console.log("kommt an");
    const newTicketObject = {
      name: name.value,
      firstContact: firstContact.value,
      inProgressStart: inProgressStart.value,
      inProgressEnd: inProgressEnd.value,

      QAStart: QAStart.value,
      QAEnd: QAEnd.value,

      TestingStart: TestingStart.value,
      TestingEnd: TestingEnd.value,

      polishingAfterTestingStart: polishingAfterTestingStart,
      polishingAfterTestingEnd: polishingAfterTestingEnd,
      // polishingAfterQAStart: polishingAfterQAStart,
      // polishingAfterQAEnd: polishingAfterQAEnd,

      helpNeeded: helpNeeded.checked,
      gotThroughQaAtFirstTime: gotThroughQaAtFirstTime.checked,
      // returntFromTesting: returntFromTesting.checked,
    };
    setCards([newTicketObject, ...cards]);
    console.log("cards", cards);
    console.log("newTicketObject", newTicketObject);
  };

  return (
    <div>
      <InputContainer
        /*  name={name}
        setName={setName}
        firstContact={firstContact}
        setFirstContact={setFirstContact}
        inProgressStart={inProgressStart}
        setInProgressStart={setInProgressStart}
        inProgressEnd={inProgressEnd}
        setInProgressEnd={setInProgressEnd}
        QAStart={QAStart}
        setQAStart={setQAStart}
        QAEnd={QAEnd}
        setQAEnd={setQAEnd}
        TestingStart={TestingStart}
        setTestingStart={setTestingStart}
        TestingEnd={TestingEnd}
        setTestingEnd={setTestingEnd}
        polishingAfterQAStart={polishingAfterQAStart}
        */
        setPolishingAfterQAStart={setPolishingAfterQAStart}
        //polishingAfterQAEnd={polishingAfterQAEnd}
        setPolishingAfterEnd={setPolishingAfterQAEnd}
        setPolishingAfterTestingStart={setPolishingAfterTestingStart}
        setPolishingAfterTestingEnd={setPolishingAfterTestingEnd}
        //helpNeeded={helpNeeded}
        setHelpNeeded={setHelpNeeded}
        handleSubmit={handleSubmit}
        returntFromTesting={returntFromTesting}
        setReturntFromTesting={setReturntFromTesting}
        setGotThroughQaAtFirstTime={setGotThroughQaAtFirstTime}
      />
      {cards.map((card) => (
        <Card
          name={card.name}
          firstContact={card.firstContact}
          inProgressStart={card.inProgressStart}
          inProgressEnd={card.inProgressEnd}
          QAStart={card.QAStart}
          QAEnd={card.QAEnd}
          TestingStart={card.TestingStart}
          TestingEnd={card.TestingEnd}
          //polishingAfterQAStart={card.}
          //polishingAfterQAEnd={card.}
          polishingAfterTestingStart={card.polishingAfterTestingStart}
          polishingAfterTestingEnd={card.polishingAfterTestingEnd}
          helpNeeded={card.helpNeeded}
          gotThroughQaAtFirstTime={card.gotThroughQaAtFirstTime}
        />
      ))}
    </div>
  );
}

export default App;
