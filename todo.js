import React from "react";
import ReactDOM from "react-dom";
import { Timer } from "./components/timer";

const contactList = [
    {
        name: "sara",
        tel: "123456789",
        address: "israel",
        category: "family"
    },
    {
        name: "rivka",
        tel: "123456789",
        address: "israel",
        category: "work"
    },
    {
        name: "rachel",
        tel: "123456789",
        address: "israel",
        category: "class"
    },
    {
        name: "leah",
        tel: "123456789",
        address: "israel",
        category: "family"
    },
    {
        name: "rina",
        tel: "123456789",
        address: "israel",
        category: "work"
    },
    {
        name: "bina",
        tel: "123456789",
        address: "israel",
        category: "class"
    }
];
const Line = (props) => {

    return (
        <div>
            <p>{props.line.name} - {props.line.tel} - {props.line.address} - {props.line.category}</p>
                </div >
                )
}
const App = () => {
    return (
        <div style={{ margin: '10%' }}>
                    <Timer />
                    <br />
                    <br />
                    <h1>My Contact</h1>
                    <br />
                    {contactList.map(line => <Line key={line.name} line={line}/>)}
            {/* <p>{contactList[0].name} - {contactList[0].tel} - {contactList[0].address} - {contactList[0].category}</p>
            <p>{contactList[1].name} - {contactList[1].tel} - {contactList[1].address} - {contactList[1].category}</p>
            <p>{contactList[2].name} - {contactList[2].tel} - {contactList[2].address} - {contactList[2].category}</p>
            <p>{contactList[3].name} - {contactList[3].tel} - {contactList[3].address} - {contactList[3].category}</p>
            <p>{contactList[4].name} - {contactList[4].tel} - {contactList[4].address} - {contactList[4].category}</p>
            <p>{contactList[5].name} - {contactList[5].tel} - {contactList[5].address} - {contactList[5].category}</p> */}

        </div>
                    )
                    };
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
