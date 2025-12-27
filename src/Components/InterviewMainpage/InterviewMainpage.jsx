import React, { useState } from "react";

import emptyOvertime from "../../assets/emptyOvertime.png";

import style from "./InterviewMainpage.module.css";
import Priorities from "./Priorities";
import { Refferals } from "./Refferals";

export default function InterviewMainpage() {
  const[openNewHire,setOpenNewHire]=useState(false)
  return (
    <div className={style.interviewMainpage}>
      <div className={style.image}>
        <img src={emptyOvertime} alt="emptyOvertime" />
      </div>
      <div className={style.content}>
        <div className={style.greet}>
          <div>Good Afternoon</div>
          <div>it's Monday, 28 sep</div>
        </div>
        <div className={style.priorities}>
          <Priorities />
        </div>
        <div className={style.refferals}>
          <Refferals />
        </div>
        <div className={style.birthday}>
          <div className={style.birthdaytitle}>
            <img></img>
            <p>Birthday Buddies (1)</p>
            <p className={style.days}>Next 7 days</p>
          </div>
          <div className={style.cards1}>
            <div className={style.cards}>Buddie 1</div>
            <div className={style.cards}>Buddie 2</div>
            <div className={style.cards}>Buddie 3</div>{" "}
            <div className={style.cards}>Buddie 4</div>{" "}
          </div>
        </div>
        <div className={style.work}>
          <div className={style.worktitle}>
            <img></img>
            <p>Work Anniversaries (6)</p>
            <p className={style.days}>Next 7 days</p>
          </div>
          <div className={style.cards2}>
            <div className={style.cards}>Buddie 1 Anniversary</div>
            <div className={style.cards}>Buddie 2 Anniversary</div>
            <div className={style.cards}>Buddie 3 Anniversary</div>{" "}
            <div className={style.cards}>Buddie 4 Anniversary</div>{" "}
            <div className={style.cards}>Buddie 5 Anniversary</div>{" "}
            <div className={style.cards}>Buddie 6 Anniversary</div>{" "}
          </div>
        </div>
        <div className={style.hires} onClick={()=>{setOpenNewHire((prev)=>!prev)}}>
          <div className={style.newhires}>
            <p>New Hires (0)</p>
          </div>
                  {openNewHire && <div  className={style.newhireSpace}>No New Hires</div>}

        </div>
      </div>
      <div className={style.image}>
        <img src={emptyOvertime} alt="emptyOvertime" />
      </div>
    </div>
  );
}
