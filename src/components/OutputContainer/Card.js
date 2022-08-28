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
      <FurtherInformation>
        <SublineBig>{name}</SublineBig>
        <TextNormal>{firstContactInLocalDateFormat}</TextNormal>
        {!helpNeeded && <div>☆</div>}
        {!gotThroughQaAtFirstTime && <div>★</div>}
      </FurtherInformation>
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
  margin: 0;
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
  position: relative;
  top: 12px;
  right: -12px;
`;

const ProgressCharOuter = styled.div`
  margin: 0 10px 10px;
  width: 480px;
  height: 10px;
  padding: 1px;
  border: 1px solid lightgrey;
`;

const CardContainer = styled.div`
  margin: 10px 0;
  width: 500px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 1px 6px 11px 9px #eee;
  padding: 10px;
`;

// polishing nur testing oder auch qa? -> sonst umbennen
// Nacht rausrechnen?
// server
//beim Balken vielleicht Spielraum von 1-2 Stunden lassen, bis er rot wird
