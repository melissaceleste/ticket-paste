import moment from "moment";

export default function getDiffBetweenTwoTimes(a, b, measurement) {
  const momentObjectA = moment(a);
  const momentObjectB = moment(b);
  return momentObjectB.diff(momentObjectA, measurement);
}
