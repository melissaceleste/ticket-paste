import styled from "styled-components";
import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import moment from "moment";
import getDiffBetweenTwoTimes from "../../services/getDiffBetweenTwoTimes";

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
  //in Progress
  var DurationInProgressInMinutes = getDiffBetweenTwoTimes(
    inProgressStart,
    inProgressEnd,
    "minutes"
  );
  if (!inProgressEnd || !inProgressStart) {
    DurationInProgressInMinutes = 0;
  }

  //Testing
  var DurationTestingInMinutes = getDiffBetweenTwoTimes(
    TestingStart,
    TestingEnd,
    "minutes"
  );
  if (!TestingEnd || !TestingStart) {
    DurationTestingInMinutes = 0;
  }

  // Polishing after Testing
  var DurationPolishingInMinutes = getDiffBetweenTwoTimes(
    polishingAfterTestingStart,
    polishingAfterTestingEnd,
    "minutes"
  );
  if (isNaN(polishingAfterTestingEnd) || isNaN(polishingAfterTestingStart)) {
    DurationPolishingInMinutes = 0;
  }

  //QA
  var DurationQAInMinutes = getDiffBetweenTwoTimes(QAStart, QAEnd, "minutes");
  if (!QAEnd || !QAStart) {
    DurationQAInMinutes = 0;
  }

  const DurationCompletly =
    DurationInProgressInMinutes +
    DurationQAInMinutes +
    DurationTestingInMinutes +
    DurationPolishingInMinutes;

  // Kreisdiagram
  const DurationInProgressInPercent =
    (DurationInProgressInMinutes * 100) / DurationCompletly;
  const DurationQAInPercent = (DurationQAInMinutes * 100) / DurationCompletly;
  const DurationTestingInPercent =
    (DurationTestingInMinutes * 100) / DurationCompletly;
  const DurationPolishingInPercent =
    (DurationPolishingInMinutes * 100) / DurationCompletly;

  // Balken
  const Soll = 480; //minuten - 8*60
  const DiffSollIst = Soll - DurationInProgressInMinutes;
  //beim Balken vielleicht Spielraum von 1-2 Stunden lassen, bis er rot wird

  const firstContactInLocalDateFormat = moment
    .utc()
    .local(firstContact)
    .format("DD.MM.YYYY");

  const dataForPieChart = [
    {
      title: "IN PROGRESS",
      value: DurationInProgressInMinutes,
      color: "#ffc2e2",
    },
    { title: "QA", value: DurationQAInMinutes, color: "#f4fdb1" },
    {
      title: "TESTING",
      value: DurationTestingInMinutes,
      color: "#d9ffd8",
    },
    {
      title: "POLISHING",
      value: DurationPolishingInMinutes,
      color: "#bbbaff",
    },
  ];

  return (
    <CardContainer>
      <SublineBig>{name}</SublineBig>
      <PieChart
        style={{ height: "100px" }}
        lineWidth={25}
        rounded
        data={dataForPieChart}
        label={({ dataEntry }) => dataEntry.title}
        labelStyle={(index) => ({
          fill: dataForPieChart[index].color,
          fontSize: "15px",
          fontFamily: "sans-serif",
        })}
        radius={42}
        labelPosition={112}
      />
      <FurtherInformation>
        <TextNormal>{firstContactInLocalDateFormat}</TextNormal>
        {!helpNeeded && <div>☆</div>}
        {!gotThroughQaAtFirstTime && <div>★</div>}
      </FurtherInformation>
      <ProgressCharInner
        DurationInProgressInMinutes={DurationInProgressInMinutes}
      ></ProgressCharInner>
      <ProgressCharOuter></ProgressCharOuter>
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

const FurtherInformation = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-evenly;
`;

const ProgressCharInner = styled.div`
  width: ${(props) => props.DurationInProgressInMinutes + "px"};
  height: 10px;
  background-color: #7fff00;
`;

const ProgressCharOuter = styled.div`
  width: 480px;
  height: 10px;
  background-color: #d3d3d3;
`;

const CardContainer = styled.div`
  border: 1px solid pink;
  margin: 10px;
  width: 600px;
`;

// polishing nur testing oder auch qa? -> sonst umbennen
// Nacht rausrechnen?
// server
// deployen
