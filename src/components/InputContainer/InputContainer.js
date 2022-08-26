import styled from "styled-components";
import React, { useState } from "react";

function InputContainer({
  /*  name,
  setName,
  firstContact,
  setFirstContact,
  inProgressStart,
  setInProgressStart,
  inProgressEnd,
  setInProgressEnd,
  QAStart,
  setQAStart,
  QAEnd,
  setQAEnd,
  TestingStart,
  setTestingStart,
  TestingEnd,
  setTestingEnd,
  polishingAfterQAStart, */
  setPolishingAfterQAStart,
  //polishingAfterQAEnd,
  setPolishingAfterQAEnd,
  setPolishingAfterTestingStart,
  setPolishingAfterTestingEnd,
  //helpNeeded,
  setHelpNeeded,
  handleSubmit,
  returntFromTesting,
  setReturntFromTesting,
  setGotThroughQaAtFirstTime,
}) {
  // console.log("firstContact", firstContact);
  const [needsPolishingAfterQA, setNeedsPolishingAfterQA] = useState(false);
  return (
    <div>
      <SublineBig>Neues Ticket</SublineBig>
      {/* vielleicht hier nur svg mit plus */}
      <form onSubmit={handleSubmit}>
        <InputText
          /* onChange={(event) => {
            setName(event.target.value);
          }} */
          name="name"
          type="text"
          placeholder="Ticket-Name"
        ></InputText>
        <InputText
          /*  onChange={(event) => {
            setFirstContact(event.target.value);
          }} */
          name="firstContact"
          type="datetime-local"
          placeholder="Erster Kontakt"
        ></InputText>
        <div>
          <TextNormal>IN PROGRESS</TextNormal>
          <div>
            <InputDate
              /* onChange={(event) => {
                setInProgressStart(event.target.value);
              }} */
              name="inProgressStart"
              type="datetime-local"
              placeholder="Start"
            ></InputDate>
            <InputDate
              /* onChange={(event) => {
                setInProgressEnd(event.target.value);
              }} */
              name="inProgressEnd"
              type="datetime-local"
              placeholder="Ende"
            ></InputDate>
          </div>
        </div>
        <div>
          <TextNormal>TESTING</TextNormal>
          <br></br>
          <div>
            <InputDate
              /*  onChange={(event) => {
                setTestingStart(event.target.value);
              }} */
              name="TestingStart"
              type="datetime-local"
              placeholder="Start"
            ></InputDate>
            <InputDate
              /*  onChange={(event) => {
                setTestingEnd(event.target.value);
              }} */
              name="TestingEnd"
              type="datetime-local"
              placeholder="Ende"
            ></InputDate>
          </div>
        </div>
        <TextNormal>Kam aus Testing zurück?</TextNormal>
        <input
          type="checkbox"
          name="returntFromTesting"
          onChange={() => {
            setReturntFromTesting(true);
          }}
        ></input>
        {returntFromTesting && (
          <div>
            <InputDate
              onChange={(event) => {
                setPolishingAfterTestingStart(event.target.value);
              }}
              name="polishingAfterTestingStart"
              type="datetime-local"
              placeholder="Start"
            ></InputDate>
            <InputDate
              onChange={(event) => {
                setPolishingAfterTestingEnd(event.target.value);
              }}
              name="polishingAfterTestingEnd"
              type="datetime-local"
              placeholder="Ende"
            ></InputDate>
          </div>
        )}
        <div>
          <TextNormal>QA</TextNormal>
          <div>
            <InputDate
              /*  onChange={(event) => {
                setQAStart(event.target.value);
              }} */
              name="QAStart"
              type="datetime-local"
              placeholder="Start"
            ></InputDate>
            <InputDate
              /*  onChange={(event) => {
                setQAEnd(event.target.value);
              }} */
              name="QAEnd"
              type="datetime-local"
              placeholder="Ende"
            ></InputDate>
          </div>
        </div>
        <div>
          <TextNormal>Kam durch QA im ersten Anlauf durch?</TextNormal>
          <input type="checkbox" name="gotThroughQaAtFirstTime"></input>
        </div>
        {/* brauch ich das unbedingt oder kann ich auch einfach alles unter QA lassen? */}
        {/*  <div>
          <TextNormal>Kam aus QA zurück?</TextNormal>
          <input
            type="checkbox"
            name="needsPolishingAfterQA"
            onChange={() => {
              setGotThroughQaAtFirstTime(true);
            }}
          ></input>
        </div>
        {needsPolishingAfterQA && (
          <div>
            <TextNormal>POLISHING AFTER QA</TextNormal>
            <div>
              <InputDate
                onChange={(event) => {
                  setPolishingAfterQAStart(event.target.value);
                }}
                name="polishingAfterQAStart"
                type="datetime-local"
                placeholder="Start"
              ></InputDate>
              <InputDate
                onChange={(event) => {
                  setPolishingAfterQAEnd(event.target.value);
                }}
                name="polishingAfterQAEnd"
                type="datetime-local"
                placeholder="Ende"
              ></InputDate>
            </div>
          </div>
        )} */}

        <div>
          <TextNormal>HELP NEEDED?</TextNormal>
          <div>
            <input
              type="checkbox"
              name="helpNeeded"
              onChange={() => {
                setHelpNeeded(true);
              }}
            ></input>
          </div>
        </div>
        <SubmitButton type="submit">SPEICHERN</SubmitButton>
      </form>
    </div>
  );
}

export default InputContainer;

const SublineBig = styled.h1`
  color: lightgreen;
  font-size: 16px;
`;

const TextNormal = styled.span`
  color: grey;
  font-size: 14px;
`;

const InputText = styled.input`
  color: grey;
`;

const InputDate = styled.input`
  color: grey;
`;

const SubmitButton = styled.button`
  text-decoration: none;
  border: 1px solid lightgreen;
  color: lightgreen;
  background-color: transparent;
`;

//Nacharbeiten nach Testing als Zeit aufnehmen oder einfach nur als Boolean?
// und dann stattdessen Gesamtzeit von Testing und Rejected
// Polishing wäre dann wirklich nur rein QA

// oder Polishing streichen und rejected ist = testing. Somit Rejected optional machen
// QA umfasst dann auch Polishing als Nacharbeit
