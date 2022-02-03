import React from 'react';
import Paris from "../../assets/images/PSG.png"
import Milan from "../../assets/images/AC.png"
import NF from "../../assets/images/NF.png"
import MC from "../../assets/images/MC.png"
import Crystal from "../../assets/images/CP.png"
import Porto from "../../assets/images/Porto.png"
import Chelsea from "../../assets/images/Chelsea.png"
import Barcelona from "../../assets/images/Barcelona.png"
import Question from "../../assets/images/question.jpg"
import Uefa from "../../assets/images/uefa.png"
import "./index.css"

export default function Content() {
  return <div>
      <div className="container-fluid">
            <div className="row">
              <div className="feature-box col-lg-6">
                <div className="card" style={{width: "25rem"}}>
                  <div className="card-header" >
                    Pot 1
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <img className="logo" src={Paris}/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PARIS SAINT-GERMAIN F.C.
                    </li>
                    <li className="list-group-item">
                      <img className="logo-ac" src={Milan} />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A.C. MILAN
                    </li>
                    <li className="list-group-item">
                      <img className="logo-nf" src={NF} />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOTTINGHAM FOREST F.C.
                    </li>
                    <li className="list-group-item">
                      <img className="logo-mc" src={MC} />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MANCHESTER CITY F.C.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="feature-box col-lg-6">
                <div className="card" style={{width: "25rem"}}>
                  <div className="card-header" >
                    Pot 2
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <img className="logo-mc" src={Crystal} />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CRYSTAL PALACE F.C.
                    </li>
                    <li className="list-group-item">
                      <img className="logo-ac" src={Porto} />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F.C. PORTO
                    </li>
                    <li className="list-group-item">
                      <img className="logo-mc" src={Chelsea} />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CHELSEA F.C.
                    </li>
                    <li className="list-group-item">
                      <img className="logo-mc" src={Barcelona} />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F.C. BARCELONA
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="feature-box-btn col-lg-6">
                <button type="button" className="btn btn-primary start-btn">点击抽签1号池</button>
              </div>
              <div className="feature-box-btn col-lg-6">
                <button type="button" className="btn btn-primary start-btn">点击抽签2号池</button>
              </div>
            </div>
            <div className="row">
              <div className="feature-box col-lg-12">
                <img id="icon" src={Uefa} />
              </div>
            </div>
            <div className="row">
              <div className="feature-box col-lg-12 vs-table">
                <table className="table table-borderles">
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td>
                        <img className="logo" src={Question} />
                      </td>
                      <td>VS</td>
                      <td><img className="logo" src={Question}  /></td>
                    </tr>
                  </tbody>
                </table>
                <table className="table table-borderles">
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td>
                        <img className="logo" src={Question}  />
                      </td>
                      <td>VS</td>
                      <td><img className="logo" src={Question}  /></td>
                    </tr>
                  </tbody>
                </table>
                <table className="table table-borderles">
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td>
                        <img className="logo" src={Question}  />
                      </td>
                      <td>VS</td>
                      <td><img className="logo" src={Question}  /></td>
                    </tr>
                  </tbody>
                </table>
                <table className="table table-borderles">
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td>
                        <img className="logo" src={Question}  />
                      </td>
                      <td>VS</td>
                      <td><img className="logo" src={Question}  /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
  </div>;
}
