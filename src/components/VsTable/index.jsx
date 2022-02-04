import React, {useState} from 'react';
import "./index.css"
import Question from "../../assets/images/question.jpg"
import Paris from "../../assets/images/PSG.png"
import Milan from "../../assets/images/AC.png"
import NF from "../../assets/images/NF.png"
import MC from "../../assets/images/MC.png"
import Crystal from "../../assets/images/CP.png"
import Porto from "../../assets/images/Porto.png"
import Chelsea from "../../assets/images/Chelsea.png"
import Barcelona from "../../assets/images/Barcelona.png"

export default function VsTable() {
    const [pre,cur] = useState([])
    const [A1, newA1] = useState(Question)
    const [A2, newA2] = useState(Question)
    const [A3, newA3] = useState(Question)
    const [A4, newA4] = useState(Question)
    const [B1, newB1] = useState(Question)
    const [B2, newB2] = useState(Question)
    const [B3, newB3] = useState(Question)
    const [B4, newB4] = useState(Question)

    const items =[Paris, Milan, NF, MC]
    const items2 = [Crystal, Porto, Chelsea, Barcelona]

    const handleClick=()=>{
        let result = [];
        let arr = [1, 2, 3, 4];

        let count = arr.length;
        for (let i = 0; i < 4; i++) {
            let index = ~~(Math.random() * count) + i;
            if (result.includes(arr[index])) {
                continue;
            }
            result[i] = arr[index];
            arr[index] = arr[i];
            count--;           
        }
            newA1(items[result[0]-1])
            newA2(items[result[1]-1])
            newA3(items[result[2]-1])
            newA4(items[result[3]-1])
            cur(result)
    }


    const handleClick2 = () => {
        let result = [];
        let arr = [1, 2, 3, 4];

        let count = arr.length;
        for (let i = 0; i < 4; i++) {
            let index = ~~(Math.random() * count) + i;
            if (result.includes(arr[index])) {
                continue;
            }
            result[i] = arr[index];
            arr[index] = arr[i];
            count--;           
        }
        
            newB1(items2[result[0]-1])
            newB2(items2[result[1]-1])
            newB3(items2[result[2]-1])
            newB4(items2[result[3]-1])           
    }

    return <>
        <div className="feature-box col-lg-3 vs-table">
            <button type="button" className="btn btn-primary start-btn" onClick={handleClick}>点击抽签1号池</button>      
        </div>
        <div className="feature-box col-lg-6 vs-table">
            <table className="table table-borderles">
                <tbody>
                    <tr>                          
                        <td>
                            <img className={A1==Paris?"logo-ps":"logo"} src={A1} />
                        </td>
                        <td className="vsTr">VS</td>
                        <td className="vsTr">
                            <img className="logo" src={B1} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="table table-borderles">
                <tbody>
                    <tr>
                        <td>
                            <img className={A2==Paris?"logo-ps":"logo"} src={A2} />
                        </td>
                        <td className="vsTr">VS</td>
                        <td className="vsTr">
                            <img className="logo" src={B2} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="table table-borderles">
                <tbody>
                    <tr>
                        <td>
                            <img className={A3==Paris?"logo-ps":"logo"} src={A3} />
                        </td>
                        <td className="vsTr">VS</td>
                        <td className="vsTr">
                            <img className="logo" src={B3} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="table table-borderles">
                <tbody>
                    <tr>
                        <td>
                            <img className={A4==Paris?"logo-ps":"logo"} src={A4} />
                        </td>
                        <td className="vsTr">VS</td>
                        <td className="vsTr">
                            <img className="logo" src={B4} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="feature-box col-lg-3 vs-table">
            <button type="button" className="btn btn-primary start-btn" onClick={handleClick2}>点击抽签2号池</button>
        </div>
    </>;
}
