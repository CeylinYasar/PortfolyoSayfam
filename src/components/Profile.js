import React from "react";
import styled from "styled-components";
import {
  SCProfile,
  SCTitle2,
  SCInformation,
  SCBasic,
  SCTitle3,
  SCAbout,
  SCIcerik,
  SCTd1,
  SCTd2,
  SCTitle4,
  SCAciklama1,
} from "../css/Profilecss";

function Profile() {
  return (
    <SCProfile id="profile">
      <SCTitle2>Profile</SCTitle2>
      <SCInformation>
        <SCBasic>
          <SCIcerik>
            <SCTitle3>Basic Information</SCTitle3>
            <table>
              <tbody>
                <tr>
                  <SCTd1>Date of Birth</SCTd1>
                  <SCTd2>29.05.1997</SCTd2>
                </tr>
                <tr>
                  <SCTd1>City of Residence</SCTd1>
                  <SCTd2>Ankara</SCTd2>
                </tr>
                <tr>
                  <SCTd1>Education Status</SCTd1>
                  <SCTd2>University of Kocaeli/Industrial Engineering</SCTd2>
                </tr>
                <tr>
                  <SCTd1>Preferred Role</SCTd1>
                  <SCTd2>Full-Stack Developer</SCTd2>
                </tr>
              </tbody>
            </table>
          </SCIcerik>
          {/* <div>
            <div>Date of Birth</div>
            <div>29/05/1997</div>
          </div>
          <div>
            <div>City of Residence</div>
            <div>Ankara</div>
          </div>
          <div>
            <div>Education Status</div>
            <div>University of Kocaeli/Industrial Engineering</div>
          </div>
          <div>
            <div>Preferred Role</div>
            <div>Full-Stack Developer</div>
          </div> */}
        </SCBasic>
        <SCAbout>
          <SCTitle4>About Me</SCTitle4>
          <SCAciklama1>
            I studied industrial engineering at Kocaeli University. I graduated
            in 2020. I worked as a material planning engineer in a panel company
            for 1 year.I decided to focus on the software developer.
          </SCAciklama1>
          <SCAciklama1>
            I am an investigative , curious and attention to detail person. I
            have the competence to create great products with these features.
          </SCAciklama1>
        </SCAbout>
      </SCInformation>
    </SCProfile>
  );
}

export default Profile;
