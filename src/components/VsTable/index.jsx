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
    const initGroup = [
        {
            name: '切尔西',
            image: Chelsea,
            selected: false, // 有无被抽中
            seq: -1, // 顺序
        },
        {
            name: '曼城',
            image: MC,
            selected: false, // 有无被抽中
            seq: -1, // 顺序
        },
        {
            name: '米兰',
            image: Milan,
            selected: false, // 有无被抽中
            seq: -1, // 顺序
        },
        {
            name: '巴黎',
            image: Paris,
            selected: false, // 有无被抽中
            seq: -1, // 顺序
        }
    ];

    const [group, setGroup] = useState(initGroup);

    const [index, setIndex] = useState(1); // 当前在抽第几个队伍
    const [isA, setIsA] = useState(true); // 当前是否抽左边

    const handleReset = () => {
        setGroup(initGroup);
        setIndex(1);
        setIsA(true);
    };

    const newHandleClick = () => {
        if (index > 4) {
            return;
        }

        // debugger;

        let choice = Math.floor(Math.random() * group.length);
        let team = group[choice];

        while (team.selected === true) {
            choice = Math.floor(Math.random() * group.length);
            team = group[choice];
        }
        // console.log('A team', team, 'index', index, 'groupA', groupA);

        const newGroup = [...group];
        newGroup[choice].selected = true;
        newGroup[choice].seq = index;
        setIndex(index + 1);
        setGroup(newGroup);
    }

    const A1 = group.find((item) => item.seq === 1)?.image || Question;
    const A2 = group.find((item) => item.seq === 3)?.image || Question;
    const B1 = group.find((item) => item.seq === 2)?.image || Question;
    const B2 = group.find((item) => item.seq === 4)?.image || Question;

    return <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="button" onClick={newHandleClick} className="button">点击抽签</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" onClick={handleReset} className="button">重抽</button>
        </div>

        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <td className='vstd'>
                            <img className={A1 == Paris ? "logo-ps" : "logo"} src={A1} />
                        </td>
                        <td className="vsTr">VS</td>
                        <td className='vstd'>
                            <img className="logo" className={B1 == Paris ? "logo-ps" : "logo"} src={B1} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="table">
                <tbody>
                    <tr>
                        <td className='vstd'>
                            <img className={A2 == Paris ? "logo-ps" : "logo"} src={A2} />
                        </td>
                        <td className="vsTr">VS</td>
                        <td className='vstd'>
                            <img className="logo" className={B2 == Paris ? "logo-ps" : "logo"} src={B2} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>;
}
