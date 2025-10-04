import { useEffect, useState } from "react";
import "../style.css";

export default function Calculator() {
  const elements = [
    7,
    8,
    9,
    "+",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "x",
    "AC",
    0,
    "=",
    "/",
  ];
  const math = ["+", "x", "-", "/"];
  const operators = ["AC", "="];

  const [isLoading, setIsLoading] = useState(true);

  const [values, setValues] = useState("0");
  const [SatateOperators, setOperators] = useState("");
  const [Sum, setSum] = useState("");

  const [oldNb, setOldNb] = useState("");

  const [screen, setScreen] = useState("");

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  function handelMath(ele) {
    if(SatateOperators == ele){
      if(Sum)
    setOldNb(Sum)
    setOperators(ele);
    setScreen(ele);
    setValues('')
    }
    else{
    setOldNb(values);
    setOperators(ele);
    setScreen(ele);
    setValues("");
    }
    console.log('ele is:'+ele)
  }
  console.log('the state operator is:'+SatateOperators)

  function handelOperator(ele) {
    if (ele == "AC") {
      setValues("0");
      setOldNb("");
      setSum("");
      setOperators('')
    } else if (ele == "=") {
      if (SatateOperators == "+") {
        let sum = Number(values) + Number(oldNb);
        setSum(sum);
        setValues(sum);
        setOldNb("");
      } else if (SatateOperators == "-") {
        let sum = Number(oldNb) - Number(values);
        if (Number(oldNb) - Number(values) == 0) {
          setSum("0");
          setValues("0");
          setOldNb("");
          setOperators("");
        } else {
          setSum(sum);
          setValues(sum);
          setOldNb("");
          setOperators("");
        }
      } else if (SatateOperators == "x") {
        let sum = Number(values) * Number(oldNb);
         if (Number(oldNb) * Number(values) == 0) {
          setSum("0");
          setValues("0");
          setOldNb("");
          setOperators("");
        } else {
          setSum(sum);
          setValues(sum);
          setOldNb("");
          setOperators("");
        }
      } else if (SatateOperators == "/") {
        let sum = Number(values) / Number(oldNb);
          if (Number(oldNb) / Number(values) == 0) {
          setSum("0");
          setValues("kalb?");
          setOldNb("");
          setOperators("");
        } else {
          setSum(sum);
          setValues(sum);
          setOldNb("");
          setOperators("");
        }
      }
    }
  }

  console.log("the old nb is: " + oldNb);
  // console.log("te new nb is: " + newNb);
  console.log("the sum is: " + Sum);

  return (
    <>
      {isLoading ? (
        <div className="center">
          <img src="https://media1.tenor.com/m/IZLUFPIQoIIAAAAC/loading-dog.gif"></img>
        </div>
      ) : (
        <div className="center">
         < h1 style={{textAlign:"center",fontFamily:"fantasy",fontSize:'40px' }}>classic one expression calculator</h1>
          <div className="calculator">
            <div className="screen">{values ? values : screen}</div>
            <div className="btns-flex">
              {elements.map((ele, key) =>
                math.includes(ele) ? (
                  <button className="operators" onClick={() => handelMath(ele)}>
                    {ele}
                  </button>
                ) : operators.includes(ele) ? (
                  <button
                    className="operators"
                    onClick={() => handelOperator(ele)}
                  >
                    {ele}
                  </button>
                ) : (
                  <button
                    key={key}
                    onClick={() =>
                      setValues((prev) =>
                        prev === "0" ? ele : `${prev}${ele}`
                      )
                    }
                  >
                    {ele}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
