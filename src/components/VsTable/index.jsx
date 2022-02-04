import React, { useState } from 'react';
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
    const initGroupA = [
        {
            name: '曼城',
            image: MC,
            group: 'a', // 小组赛分组
            selected: false, // 有无被抽中
            banqu: 'up', // 指上半区,
            seq: -1, // 顺序
        },
        {
            name: '诺丁汉森林',
            image: NF,
            group: 'b', // 小组赛分组
            selected: false, // 有无被抽中
            banqu: 'up', // 指上半区,
            seq: -1, // 顺序
        },
        {
            name: '米兰',
            image: Milan,
            group: 'c', // 小组赛分组
            selected: false, // 有无被抽中
            banqu: 'down', // 指下半区
            seq: -1, // 顺序
        },
        {
            name: '巴黎',
            image: Paris,
            group: 'd', // 小组赛分组
            selected: false, // 有无被抽中
            banqu: 'down', // 指下半区
            seq: -1, // 顺序
        }
    ];

    const initGroupB = [
        {
            name: '切尔西',
            image: Chelsea,
            group: 'a', // 小组赛分组
            selected: false, // 有无被抽中
            banqu: 'up', // 指上半区
            seq: -1, // 顺序
        },
        {
            name: '波尔图',
            image: Porto,
            group: 'b', // 小组赛分组
            selected: false, // 有无被抽中
            banqu: 'up', // 指上半区
            seq: -1, // 顺序
        },
        {
            name: '巴萨',
            image: Barcelona,
            group: 'c', // 小组赛分组
            selected: false, // 有无被抽中
            banqu: 'down', // 指下半区
            seq: -1, // 顺序
        },
        {
            name: '水晶宫',
            image: Crystal,
            group: 'd', // 小组赛分组
            selected: false, // 有无被抽中
            banqu: 'down', // 指下半区
            seq: -1, // 顺序
        }
    ];

    const [groupA, setGroupA] = useState(initGroupA);
    const [groupB, setGroupB] = useState(initGroupB);

    const [index, setIndex] = useState(1); // 当前在抽第几组
    const [isA, setIsA] = useState(true); // 当前是否抽小组第一

    const handleReset = () => {
        setGroupA(initGroupA);
        setGroupB(initGroupB);
        setIndex(1);
        setIsA(true);
    };

    const newHandleClick = () => {
        if(index > groupA.length) {
            return;
        }
        // debugger;
        if (isA) {
            let choice = Math.floor(Math.random() * groupA.length);
            let team = groupA[choice];

            while (team.selected === true) {
                choice = Math.floor(Math.random() * groupA.length);
                team = groupA[choice];
            }
            console.log('A team', team, 'index', index, 'groupA', groupA);


            const newGroup = [...groupA];
            newGroup[choice].selected = true;
            newGroup[choice].seq = index;
            setGroupA(newGroup);
        } else {
            let choice = Math.floor(Math.random() * groupB.length);
            let team = groupB[choice];
            let opponent = groupA[index];

            while (team.selected === true ||
                team?.group === opponent?.group // 判断同组
            ) {
                choice = Math.floor(Math.random() * groupB.length);
                team = groupB[choice];
            }
            console.log('B team', team, 'index', index, 'groupB', groupB);

            const newGroup = [...groupB];
            newGroup[choice].selected = true;
            newGroup[choice].seq = index;
            setIndex(index + 1); // 两支都抽完了
            setGroupB(newGroup);
        }

        setIsA(!isA);
    }

    const A1 = groupA.find((item) => item.seq === 1)?.image || Question;
    const A2 = groupA.find((item) => item.seq === 2)?.image || Question;
    const A3 = groupA.find((item) => item.seq === 3)?.image || Question;
    const A4 = groupA.find((item) => item.seq === 4)?.image || Question;
    const B1 = groupB.find((item) => item.seq === 1)?.image || Question;
    const B2 = groupB.find((item) => item.seq === 2)?.image || Question;
    const B3 = groupB.find((item) => item.seq === 3)?.image || Question;
    const B4 = groupB.find((item) => item.seq === 4)?.image || Question;

    return <>
        <div className="feature-box col-lg-3 vs-table">
            <button type="button" className="btn btn-primary start-btn" onClick={handleReset}>重抽</button>
        </div>
        <div className="feature-box col-lg-6 vs-table">
            <table className="table table-borderles">
                <tbody>
                    <tr>
                        <td>
                            <img className={A1 == Paris ? "logo-ps" : "logo"} src={A1} />
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
                            <img className={A2 == Paris ? "logo-ps" : "logo"} src={A2} />
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
                            <img className={A3 == Paris ? "logo-ps" : "logo"} src={A3} />
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
                            <img className={A4 == Paris ? "logo-ps" : "logo"} src={A4} />
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
            <button type="button" className="btn btn-primary start-btn" onClick={newHandleClick}>点击抽签</button>
        </div>
    </>;
}
