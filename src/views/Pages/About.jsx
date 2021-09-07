import React from "react";
import Nav from "../../components/Navbars/Navbar";
import "./imgcss.css";
import { Box } from "@material-ui/core";
import logo from "/Users/hataiphatsrijitjam/Zdecor/z-decor/src/views/Pages/02pic_page1.png";
import logo2 from "/Users/hataiphatsrijitjam/Zdecor/z-decor/src/views/Pages/04pic_page1.png";
import Button from "@material-ui/core/Button";

function About() {
  return (
    <div className="img">
      <div className="img">
        <Box>
          <Nav />
          <h1 className="aboutFont">
            แต่งบ้านและคอนโด <br /> On Budget <br /> ตามสไตล์คุณ
          </h1>
        </Box>
      </div>
      <div className="img2">
        <img className="aboutImg" src={logo} />
        <h1 className="aboutText">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam{" "}
          <br />
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat{" "}
          <br />
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation{" "}
          <br />
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo <br />
          consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate{" "}
          <br />
          velit esse molestie consequat, vel illum dolore eu feugiat nulla{" "}
          <br />
          facilisis at vero eros et
        </h1>
      </div>
      <div className="img3">
        <h1 className="aboutOneStopText">
          One Stop <br /> Service
        </h1>
        <h1 className="aboutText">
          บริการตกแต่งภายใน <br /> ออนไลน์แบบครบวงจร <br /> ในราคาที่เข้าถึงได้{" "}
          <br /> สะดวกรวดเร็ว ตกแต่ง <br />
          ทั้งบ้านและคอนโด <br />
          แบบพร้อมเข้าอยู่ด้วย
          <br /> ดีไซน์ที่ช่วยค้นหาความ <br />
          เป็นตัวคุณ
        </h1>
        <Button
          style={{
            backgroundColor: "#02b4b9",
            color: "#FFF",
            display: "block",
            marginLeft: "150px"
          }}
          variant="contained"
        >
          Find your style
        </Button>
        <img
          className="aboutOneStopImg"
          style={{ width: "1130px", height: "768px" }}
          src={logo2}
        />
      </div>
      <div
        style={{ backgroundColor: "#02b4b9", height: "50px", padding: "20px" }}
      >
        <center>
          {" "}
          <h1 style={{ color: "#FFF", fontSize: "20px" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing
          </h1>
        </center>
      </div>
    </div>
  );
}

export default About;
