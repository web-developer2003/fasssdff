import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import logo from "./images/pdp.png";
import arrowLeft from "./images/arrow-left-line.svg";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import Homepdp from "./pages/homepdp";
import "./App.scss"
import dashboard from "./images/dashboard.svg"
import dashboardActive from "./images/dashboardactive.svg"
import chiqish from "./images/chiqish.png"
import up from "./images/up.svg"
import upactive from "./images/upactive.svg"
import settings from "./images/settings.svg"
import settingsactive from "./images/settingsactive.svg"

class App extends Component {

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
            openMenu: false,
            dashboard: false,
            settings:false,
            home:false
        }

    }

    state = {
        openMenu: false
    }

    changeActive=()=>{
        this.setState({
            dashboard:!this.setState.dashboard
        })
    }

    render() {
        return (
                <div className="container-fluid">
                    <Router>
                    <div className={this.state.openMenu ? "side-menu openMenu" : "side-menu"}>
                            <div className="d-flex">
                                {/*<a className="navbar-brand" href="#"><img src={logo} alt="#"/></a>*/}
                                <Link to="/" className="navbar-brand"><img src={logo} alt="#"/></Link>
                                <div className="arrow" onClick={()=>{this.setState({openMenu:false})}}><img src={arrowLeft} width="20px" alt=""/>
                                </div>
                            </div>
                            <div className="firstMenuBar">
                                <NavLink onClick={()=>{this.setState({dashboard:true, settings:false, home:false})}} to="/dashboard" activeStyle={{
                                    fontWeight: "bold",
                                    color: "black",
                                    borderRight:"3px solid #00B533",
                                    paddingRight:"89px",
                                    paddingTop:"6px",
                                    paddingBottom:"6px"
                                }} className="link lightGray" exact={true}><img src={this.state.dashboard ? dashboardActive : dashboard} className="menuBarImg mb-1" alt="#"/>Dashboard</NavLink>
                            </div>
                            <div className="secondMenuBar">
                                <NavLink onClick={()=>{this.setState({dashboard:false, settings:true, home:false})}} to="/settings" activeStyle={{
                                    fontWeight: "bold",
                                    color: "black",
                                    borderRight:"3px solid #00B533",
                                    paddingRight:"107px",
                                    paddingTop:"6px",
                                    paddingBottom:"6px"
                                }} className="link lightGray"><img src={this.state.settings ? settingsactive : settings} className="menuBarImg mb-1" alt="#"/>Settings</NavLink>
                            </div>
                            <div className="thirdMenuBar">
                                <NavLink onClick={()=>{this.setState({dashboard:false, settings:false, home:true})}} to="/pdpuz" activeStyle={{
                                    fontWeight: "bold",
                                    color: "black",
                                    borderRight:"3px solid #00B533",
                                    paddingRight:"69px",
                                    paddingTop:"6px",
                                    paddingBottom:"6px"
                                }} className="link lightGray"><img src={this.state.home ? upactive : up} className="menuBarImg mb-1" alt="#"/>Home pdp.uz</NavLink>
                            </div>
                            <div className="fourthMenuBar">
                                <a href="/" className="link lightGray"><img src={chiqish} alt="#" className="menuBarImg mb-1"/>Chiqish</a>
                            </div>
                    </div>
                        <Switch>
                            <Route path="/" exact  component={Dashboard} exact={true}/>
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/settings" component={Settings} />
                            <Route path="/pdpuz"  component={Homepdp}/>
                        </Switch>
                    </Router>
                </div>
        );
    }
}

export default App;