import styled from "styled-components";
import React from "react";
import moment from "moment";
import Moment from "moment";

function Card({
  name,
  firstContact,
  inProgressStart,
  inProgressEnd,
  QAStart,
  QAEnd,
  TestingStart,
  TestingEnd,
  //polishingAfterQAStart,
  //polishingAfterQAEnd,
  polishingAfterTestingStart,
  polishingAfterTestingEnd,
  helpNeeded,
  gotThroughQaAtFirstTime,
}) {
  /*   function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  } */

  //in Progress
  const inProgressStartMomentDateObject = moment(inProgressStart);
  const inProgressEndMomentDateObject = moment(inProgressEnd);

  var DurationInProgressInMinutes = inProgressEndMomentDateObject.diff(
    inProgressStartMomentDateObject,
    "minutes"
  );
  if (!inProgressEnd || !inProgressStart) {
    DurationInProgressInMinutes = 0;
  }

  //Testing
  const TestingEndMomentDateObject = moment(TestingEnd);
  const TestingStartMomentDateObject = moment(TestingStart);
  var DurationTestingInMinutes = TestingEndMomentDateObject.diff(
    TestingStartMomentDateObject,
    "minutes"
  );
  if (!TestingEnd || !TestingStart) {
    DurationTestingInMinutes = 0;
  }

  // Polishing after Testing
  const polishingAfterTestingEndMomentDateObject = moment(
    polishingAfterTestingEnd
  );
  const polishingAfterTestingStartMomentDateObject = moment(
    polishingAfterTestingStart
  );
  var DurationPolishingInMinutes =
    polishingAfterTestingEndMomentDateObject.diff(
      polishingAfterTestingStartMomentDateObject,
      "minutes"
    );
  if (isNaN(polishingAfterTestingEnd) || isNaN(polishingAfterTestingStart)) {
    DurationPolishingInMinutes = 0;
  }

  //QA
  const QAEndMomentDateObject = moment(QAEnd);
  const QAStartMomentDateObject = moment(QAStart);
  var DurationQAInMinutes = QAEndMomentDateObject.diff(
    QAStartMomentDateObject,
    "minutes"
  );
  if (!QAEnd || !QAStart) {
    DurationQAInMinutes = 0;
  }

  const DurationCompletly =
    DurationInProgressInMinutes +
    DurationQAInMinutes +
    DurationTestingInMinutes +
    DurationPolishingInMinutes;

  console.log("DurationInProgressInMinutes", DurationInProgressInMinutes);
  console.log("DurationQAInMinutes", DurationQAInMinutes);
  console.log("DurationTestingInMinutes", DurationTestingInMinutes);
  console.log("DurationPolishingInMinutes", DurationPolishingInMinutes);

  console.log("DurationCompletly", DurationCompletly);

  // Kreisdiagram
  const DurationInProgressInPercent =
    (DurationInProgressInMinutes * 100) / DurationCompletly;
  console.log("DurationInProgressInPercent", DurationInProgressInPercent);
  const DurationQAInPercent = (DurationQAInMinutes * 100) / DurationCompletly;
  const DurationTestingInPercent =
    (DurationTestingInMinutes * 100) / DurationCompletly;
  const DurationPolishingInPercent =
    (DurationPolishingInMinutes * 100) / DurationCompletly;

  // Balken
  const Soll = 480; //minuten - 8*60
  const DiffSollIst = Soll - DurationInProgressInMinutes;
  //beim Balken vielleicht Spielraum von 1-2 Stunden lassen, bis er rot wird

  //console.log(DiffSollIst);

  return (
    <CardContainer>
      <SublineBig>{name}</SublineBig>
      <TextNormal>{firstContact}</TextNormal>
      {!helpNeeded && <div>☆</div>}
      {!gotThroughQaAtFirstTime && <div>★</div>}
    </CardContainer>
  );
}

export default Card;

const SublineBig = styled.h1`
  color: lightgreen;
  font-size: 16px;
`;

const TextNormal = styled.span`
  color: grey;
  font-size: 14px;
`;

const CardContainer = styled.div`
  border: 1px solid pink;
`;
