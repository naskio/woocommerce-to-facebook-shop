// import * as dfd from "danfojs/src/index";
import { DataFrame } from "danfojs/src/index";


export const demo = () => {
    // const df = new dfd.DataFrame(
    const df = new DataFrame(
        {pig: [20, 18, 489, 675, 1776], horse: [4, 25, 281, 600, 1900]},
        {index: [1990, 1997, 2003, 2009, 2014]}
    );
    df.head().print()
}
