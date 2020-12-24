import React, {Component} from 'react';
import arrowRight from "../images/arrow-right-line.svg";
import userLogo from "../images/user.png";
import notificationLogo from "../images/notification.png";
import calendarLogo from "../images/calendar.png";
import LineChart from "../lineChart/lineChart";
import LineChart2 from "../lineChart/lineChart2";
import PieChart from "../pieChart/pieChart";
import PieChart2 from "../pieChart/pieChart2";
import PieChart3 from "../pieChart/pieChart3";
import plus from "../images/+.png";
import "../App.scss"

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teachers: [
                {
                    fullName: "Alisher Davlatov",
                    students: 300,
                    courses: 3,
                    daromad: "8,300,000",
                    berildi: "3,000,000",
                    qoldi: "5,3000,000"
                },
                {
                    fullName: "Nizom Muhammadov",
                    students: 300,
                    courses: 3,
                    daromad: "8,300,000",
                    berildi: "5,300,000",
                    qoldi: "3,000,000"
                },
                {
                    fullName: "Dilshod Mirsoatov",
                    students: 300,
                    courses: 3,
                    daromad: "8,000,000",
                    berildi: "5,000,000",
                    qoldi: "3,000,000"
                },
                {
                    fullName: "Muhammad Jumayev",
                    students: 300,
                    courses: 3,
                    daromad: "8,300,000",
                    berildi: "5,300,000",
                    qoldi: "3,000,000"
                },
                {
                    fullName: "Farux Nurmatov",
                    students: 300,
                    courses: 3,
                    daromad: "8,300,000",
                    berildi: "5,300,000",
                    qoldi: "3,000,000"
                }
            ],
        }

    }


    render() {
        return (
            <div>
                <div className="row rows">
                    <div className="d-block">
                        <div className="arrowDiv">
                            <div className="arrow" onClick={()=>{this.setState({openMenu:true})}}><img src={arrowRight} width="20px"
                                                                                                       alt=""/></div>
                        </div>
                        <div className="rightcomps">
                            <div className="ceo">
                                <p>Odilbek Mirzayev</p>
                            </div>
                            <div className="user">
                                <a href="#">
                                    <img src={userLogo} alt="#"/>
                                </a>
                            </div>
                            <div className="notification">
                                <a href="#">
                                    <img src={notificationLogo} alt="#"/>
                                </a>
                            </div>
                        </div>
                        <h1 className="title">Direktor Dashboard</h1>
                    </div>
                </div>
                <div className="row rows firstRow">
                    <div className="cards">
                        <div className="displayflex">
                            <p><b>Ro'yxatdan o'tganlar<br/> talabalar soni</b></p>
                            <div className="calendar1">
                                <a href="#">
                                    <img src={calendarLogo} alt="#"/>
                                </a>
                            </div>
                        </div>
                        <div className="extrainfo">
                            <p className="studentCount ml-0">620</p>
                            <p className="add"><span className="text-success">+5 ta</span><br/><span
                                className="lightGray">in this month</span></p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="displayflex">
                            <p><b>Aktiv <br/> talabalar soni</b></p>
                            <div className="calendar2">
                                <a href="#">
                                    <img src={calendarLogo} alt="#"/>
                                </a>
                            </div>
                        </div>
                        <div className="extrainfo">
                            <p className="studentCount ml-0 text-success">120</p>
                            <p className="add"><span className="text-success">+34 ta</span><br/><span
                                className="lightGray">in this month</span></p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="displayflex">
                            <p><b>Bitirgan <br/> talabalar soni</b></p>
                            <div className="calendar3">
                                <a href="#">
                                    <img src={calendarLogo} alt="#"/>
                                </a>
                            </div>
                        </div>
                        <div className="extrainfo">
                            <p className="studentCount text-warning ml-0">120</p>
                            <p className="add"><span className="text-warning">+34 ta</span><br/><span
                                className="lightGray">in this month</span></p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="displayflex">
                            <p><b>To'xtab qolgan <br/> talabalar soni</b></p>
                            <div className="calendar4">
                                <a href="#">
                                    <img src={calendarLogo} alt="#"/>
                                </a>
                            </div>
                        </div>
                        <div className="extrainfo">
                            <p className="studentCount text-danger ml-0">20</p>
                            <p className="add"><span className="text-danger">+14 ta</span><br/><span
                                className="lightGray">in this month</span></p>
                        </div>
                    </div>
                </div>
                <div className="row linechartRow rows">
                    <div className="p-0 realPul">
                        <div className="displayflex marginTop">
                            <p className="mb-0"><b>Umumiy tushum. <br/>Barcha tiplar bo'yicha</b></p>

                            <select name="Real pul turi" className="form-control w-25 h-0 rounded-0"
                                    id="currency">
                                <option>Real pul turi</option>
                                <option value="UZS">UZS</option>
                                <option value="USD">USD</option>
                                <option value="RUBL">RUBL</option>
                            </select>
                            <div className="d-flexonresponse">
                                <p className="date"><b>Sentabr.2020</b></p>
                                <div className="ml-4 realPulCalendar">
                                    <a href="#">
                                        <img src={calendarLogo} alt="#"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="displayflexreal displayflex">
                            <div className="components">
                                <div className="notRounded">
                                    <a href="#">BARCHASI</a>
                                </div>
                                <div className="rounded50">
                                    <a href="#">REAL PUL</a>
                                </div>
                                <div className="notRounded">
                                    <a href="#">NO REAL PUL</a>
                                </div>
                            </div>
                            <p className="margin55"><span className="bigFont"><b>450.000.000 USZ</b></span> <br/>
                                <span className="float-right">This month: <span
                                    className="text-success"><b>+12,000,000</b></span></span></p>
                        </div>
                        <div className="lineChart">
                            <div className="displayflex">
                                <p><b>Tushumlar <br/> kategoriyalar boyicha</b></p>
                                <div className="displayflex">
                                    <div className="firstDot"></div>
                                    <p><b>Real pul <br/> </b><span
                                        className="lightGray">Payme, Yandex</span>
                                    </p>
                                </div>
                                <div className="displayflex">
                                    <div className="secondDot"></div>
                                    <p><b>No real pul <br/></b><span className="lightGray">Vaucher, Cashback</span>
                                    </p>
                                </div>
                                <div className="d-flexonresponse">
                                    <p><b>Sentabr.2020</b></p>
                                    <div className="realPulCalendar">
                                        <a href="#">
                                            <img src={calendarLogo} alt="#"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <LineChart/>
                        </div>
                        <div className="lineChart2">
                            <div className="displayflex">
                                <p><b>Sotib olgan va <br/> ro'yxatdan otganlar</b></p>
                                <div className="displayflex">
                                    <div className="secondDot"></div>
                                    <p><b>Sotib olingan</b></p>
                                </div>
                                <div className="displayflex">
                                    <div className="firstDot"></div>
                                    <p><b>Royxatdan otgan</b></p>
                                </div>
                                <div className="d-flexonresponse">
                                    <p><b>Sentabr.2020</b></p>
                                    <div className="ml-3 realPulCalendar">
                                        <a href="#">
                                            <img src={calendarLogo} alt="#"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <LineChart2/>
                        </div>
                    </div>
                    <div className="charts">
                        <div className="firstChart">
                            <div className="displayflex">
                                <p><b>Sotib olingan va <br/> ro'yxatdan o'tganlar nisbati</b></p>
                                <div className="cal">
                                    <a href="#">
                                        <img src={calendarLogo} alt="#"/>
                                    </a>
                                </div>
                            </div>
                            <div className="margin105">
                                <PieChart/>
                            </div>
                        </div>
                        <div className="secondChart">
                            <div className="displayflex">
                                <p><b>Pullar <br/> kurslar kesimida</b></p>
                                <div className="cal">
                                    <a href="#">
                                        <img src={calendarLogo} alt="#"/>
                                    </a>
                                </div>
                            </div>
                            <div className="margin105">
                                <PieChart2/>
                            </div>
                        </div>
                        <div className="thirdChart">
                            <div className="displayflex">
                                <p><b>Talabalar <br/> kurslar kesimida</b></p>
                                <div className="cal">
                                    <a href="#">
                                        <img src={calendarLogo} alt="#"/>
                                    </a>
                                </div>
                            </div>
                            <div className="margin105">
                                <PieChart3/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row rows tableRow">
                    <div className="head">
                        <div className="displayflex">
                            <p><b>Mentor <br/>ishlab topgan pul</b></p>
                            <p className="pdate"><b>Sentabr.2020</b></p>
                            <div className="lastCal">
                                <a href="#">
                                    <img src={calendarLogo} alt="#"/>
                                </a>
                            </div>
                        </div>
                        <table className="table table-responsive">
                            <thead>
                            <tr>
                                <th>Mentor Ismi</th>
                                <th>O'quvchi</th>
                                <th>Kurslari</th>
                                <th>Daromad</th>
                                <th>Berildi</th>
                                <th>Qoldi</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.teachers.map((item, index) =>
                                    <tr key={index}>
                                        <td><b>{item.fullName}</b></td>
                                        <td>{item.students}</td>
                                        <td>{item.courses}</td>
                                        <td>{item.daromad}</td>
                                        <td className="text-success">{item.berildi}</td>
                                        <td className="text-danger">{item.qoldi}</td>
                                        <td><a data-toggle="collapse" className="collapsed" href="#first"><img
                                            src={plus} alt="#"/></a></td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;