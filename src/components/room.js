import React from "react";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Row, Table } from "react-bootstrap";
import "./espacio.css";
import Space from "./space";
import { FormattedMessage } from "react-intl";
import * as d3 from "d3";

const url =
  "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

function setImageRoom(type) {
  let icon;
  if (type === "kitcken") {
    icon =
      "https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-kitchen-utensils-image_2238008.jpg";
  } else {
    icon =
      "https://png.pngtree.com/png-clipart/20190117/ourlarge/pngtree-yellow-sofa-furniture-sofa-home-improvement-sofa-yellow-backrest-png-image_415071.jpg";
  }

  return icon;
}

let aux = [];

function Room(props) {
  const [rooms, setRooms] = useState([]);
  const [detail, setDetail] = useState([]);

  function setRoomsSpace(id) {
    let filteredList = aux.filter((r) => r.homeId === id);
    setRooms(filteredList);
    pieCharGenerator(id);
  }

  function roomDetail(index) {
    let devices = rooms[index];
    devices = devices.devices;
    setDetail(devices);
  }

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("rooms") === null) {
        setRooms(["Loading..."]);
      } else {
        setRooms(localStorage.getItem("rooms"));
      }
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setRooms(res);
          localStorage.setItem("rooms", JSON.stringify(res));
          aux = res;
        });
    }
  }, []);

  function getData(id) {
    let filteredList = aux.filter((r) => r.homeId === id);
    let data = [];
    filteredList.forEach((r) => {
      data.push({ name: r.name, value: r.powerUsage.value });
    });
    console.log(data);
    return data;
  }

  // https://www.educative.io/edpresso/how-to-create-a-pie-chart-using-d3
  function pieCharGenerator(id) {
    let data = getData(id);

    var svg = d3.select("svg"),
      width = svg.attr("width"),
      height = svg.attr("height"),
      radius = 200;

    var g = svg
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var ordScale = d3
      .scaleOrdinal()
      .domain(data)
      .range(["#ffd384", "#94ebcd", "#fbaccc", "#d3e0ea", "#fa7f72"]);

    // Step 5
    var pie = d3.pie().value(function (d) {
      return d.value;
    });

    var arc = g.selectAll("arc").data(pie(data)).enter();

    // Step 6
    var path = d3.arc().outerRadius(radius).innerRadius(0);

    arc
      .append("path")
      .attr("d", path)
      .attr("fill", function (d) {
        return ordScale(d.data.name);
      })
      .on("mouseover", function (d, i) {
        showTooltip(d, i.data);
      });

    // Step 7
    var label = d3.arc().outerRadius(radius).innerRadius(0);

    function showTooltip(dd, lugar) {
      arc
        .append("text")
        .attr("transform", function (d) {
          if (d.data.name === lugar.name) {
            return "translate(" + label.centroid(d) + ")";
          }else{
            return "translate()";
          }
        })
        .text(lugar.name + " " + lugar.value)
        .style("font-family", "arial")
        .style("font-size", 15);
    }
  }

  return (
    <div>
      <Space method={setRoomsSpace} />
      <h1>
        <FormattedMessage id="Rooms" />
      </h1>
      <Row>
        {rooms.map((s, index) => (
          <Card
            style={{ width: "12rem", cursor: "pointer" }}
            key={index}
            onClick={() => roomDetail(index)}
          >
            <div className="imageParent">
              <Card.Img
                variant="top"
                src={setImageRoom(s.type)}
                className="img"
              />
            </div>

            <Card.Body>
              <Card.Title>{s.name}</Card.Title>
              <Card.Text>{s.address}</Card.Text>
            </Card.Body>
          </Card>
        ))}
        <Card style={{ width: "30rem", marginLeft: "10rem" }} key={"detalle"}>
          <Card.Body>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>
                    <FormattedMessage id="Device" />
                  </th>
                  <th>
                    <FormattedMessage id="Value" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {detail.map((device, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{device.id}</td>
                    <td>{device.name}</td>
                    <td>{device.desired.value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Row>

      <h3>
        <FormattedMessage id="Power" />
      </h3>
    </div>
  );
}

export default Room;
