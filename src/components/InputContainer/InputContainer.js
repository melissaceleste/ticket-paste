import styled from "styled-components";
import React, { useState } from "react";

function InputContainer({
  setPolishingAfterQAStart,
  setPolishingAfterQAEnd,
  setPolishingAfterTestingStart,
  setPolishingAfterTestingEnd,
  setHelpNeeded,
  handleSubmit,
  returntFromTesting,
  setReturntFromTesting,
  setGotThroughQaAtFirstTime,
}) {
  const [needsPolishingAfterQA, setNeedsPolishingAfterQA] = useState(false);
  const [addNewTicket, setAddNewTicket] = useState(false);
  return (
    <div>
      <SublineBig
        onClick={() => {
          setAddNewTicket(true);
        }}
      >
        NEUES TICKET +
      </SublineBig>
      {/* vielleicht hier nur svg mit plus */}
      {addNewTicket && (
        <Form onSubmit={handleSubmit}>
          <Row>
            <InputText
              name="name"
              type="text"
              placeholder="Ticket-Name"
            ></InputText>
          </Row>
          <Row>
            <SublineSmall>IN PROGRESS</SublineSmall>
            <div>
              <InputDate
                name="inProgressStart"
                type="datetime-local"
                placeholder="Start"
              ></InputDate>
              <InputDate
                name="inProgressEnd"
                type="datetime-local"
                placeholder="Ende"
              ></InputDate>
            </div>
          </Row>
          <Row>
            <SublineSmall>TESTING</SublineSmall>
            <br></br>
            <div>
              <InputDate
                name="TestingStart"
                type="datetime-local"
                placeholder="Start"
              ></InputDate>
              <InputDate
                name="TestingEnd"
                type="datetime-local"
                placeholder="Ende"
              ></InputDate>
            </div>
          </Row>
          <Row>
            <TextNormal>Kam aus Testing zurück?</TextNormal>
            <InputCheckbox
              type="checkbox"
              name="returntFromTesting"
              onChange={() => {
                setReturntFromTesting(true);
              }}
            ></InputCheckbox>
            {returntFromTesting && (
              <>
                <br></br>
                <SublineSmall>POLISHING AFTER TESTING</SublineSmall>
                <br></br>
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
              </>
            )}
          </Row>
          <Row>
            <SublineSmall>QA</SublineSmall>
            <div>
              <InputDate
                name="QAStart"
                type="datetime-local"
                placeholder="Start"
              ></InputDate>
              <InputDate
                name="QAEnd"
                type="datetime-local"
                placeholder="Ende"
              ></InputDate>
            </div>
          </Row>
          <Row>
            <TextNormal>Kam durch QA im ersten Anlauf durch?</TextNormal>
            <InputCheckbox
              type="checkbox"
              name="gotThroughQaAtFirstTime"
            ></InputCheckbox>
          </Row>
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

          <Row>
            <TextNormal>Wurde Hilfe gebraucht?</TextNormal>
            <InputCheckbox
              type="checkbox"
              name="helpNeeded"
              onChange={() => {
                setHelpNeeded(true);
              }}
            ></InputCheckbox>
          </Row>
          <SubmitButton type="submit">SPEICHERN</SubmitButton>
        </Form>
      )}
    </div>
  );
}

export default InputContainer;

const SublineBig = styled.h1`
  margin-top: 20px;
  color: lightgreen;
  font-size: 16px;
`;

const SublineSmall = styled.span`
  color: grey;
  font-size: 14px;
`;

const TextNormal = styled.span`
  color: lightgrey;
  font-size: 13px;
`;

const InputCheckbox = styled.input`
  input[type="checkbox"] {
    /* ...existing styles */
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em pink;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
`;

const InputText = styled.input`
  color: lightgrey;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1 px solid lightgrey;
`;

const InputDate = styled.input`
  color: lightgrey;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1 px solid lightgrey;
  &:first-child {
    margin-right: 8px;
  }
`;

const SubmitButton = styled.button`
  text-decoration: none;
  border: 1px solid lightgreen;
  color: lightgreen;
  background-color: transparent;
`;

const Row = styled.div`
  margin: 10px 0;
`;

const Form = styled.form`
  border: 1px solid lightgreen;
  padding: 10px;
`;

//Nacharbeiten nach Testing als Zeit aufnehmen oder einfach nur als Boolean?
// und dann stattdessen Gesamtzeit von Testing und Rejected
// Polishing wäre dann wirklich nur rein QA

// oder Polishing streichen und rejected ist = testing. Somit Rejected optional machen
// QA umfasst dann auch Polishing als Nacharbeit
