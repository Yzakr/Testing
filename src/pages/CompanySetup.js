import React, { useState } from "react";
import Divisions from "../components/Divisions";
import TableOne from "../components/TableOne";
import TableTwo from "../components/TableTwo";
import TableThree from "../components/TableThree";
import "../App.css";
/* import CsvParse from "@vtex/react-csv-parse"; */
import { useHistory } from "react-router-dom";
import { postCompany} from '../api/company';

function CompanySetup() {
  const history = useHistory();
  const [CSVData, setCSVData] = useState([]);
  const [company, setCompany] = useState("");

   const handleChange = e => {
      setCompany(prevCompany => ({ ...prevCompany, [e.target.name]: e.target.value }))
      console.log(company)
   }

  const showPreview = (e) => {
    var src = URL.createObjectURL(e.target.files[0]);
    var preview = document.getElementById("logo-preview");
    preview.src = src;
    preview.style.display = "block";
    preview.style.width = "auto";
    preview.style.height = "40px";
  };

  const handleData = (data) => {
    setCSVData(data);
    console.log(CSVData);
  };

  const handleSubmit = async (e) => {
    console.log(company)
    let resp1 = await postCompany(company);
    resp1 !== undefined && resp1.status === 200 ? history.push("/initiative-setup"):alert("Name not available")
    history.push("/initiative-setup")
  };

  const keys = ["Name", "Role", "Area", "Location"];

  return (
    <div className="general__background">
      <div className="general__container">
        {/* COMPANY SETUP SECTION */}
        <Divisions divTitle="Company Setup" divNumber="1" />
        <section className="flex__container">
          <div className="col__20">{/* Any Info */}</div>
          <div className="col__25">
            <h3>Company Name</h3>
            <small>Type your company name</small>
            <br />
            <br />
            <input
              type="text"
              placeholder="Type Here"
              className="dark__input medium__input"
              required
              name="name" onChange={handleChange}
            />
          </div>
          <div className="col__50">
            <img id="file-ip-1-preview" />

            <h4>Upload your company logo</h4>
            <p>
              · Recommended resolution (72 ppi) <br />
              · Horizontal logo format, preferably <br />
              · Accepted formats (preferably backgroundless png) <br />
              <br />
            </p>
            <input
              id="browse__img"
              method="GET"
              type="file"
              accept="image/png, image/jpeg"
              className="hide__input"
              formEncType="multipart/form-data"
              name="logo" onChange={showPreview}
            />
            <label htmlFor="browse__img" className="btn gray__btn medium__btn">
              Browse
            </label>
          </div>
        </section>
        {/* RESOURCES SECTION */}
        <Divisions divNumber="2" /> <br />
        <section className="flex__container">
          <div className="col__20">
            <h2>Resources</h2>
            <br />

            <p>
              Please enter the resources (people) who may participate in your
              software development initiatives. You may either enter data
              manually or allow the system to connect with your Human Resources
              system to importall data.
            </p>
          </div>
          <div className="col__75">
            <TableOne data={CSVData} />
            {/*<CsvParse
              keys={keys}
              onDataUploaded={handleData}
              render={(onChange) => <input type="file" className="file__input" onChange={onChange} />}
            /> */}
            <button className="red__btn sync__btn">
              <i className="fas fa-sync"></i> Sync System
            </button>
          </div>
        </section>
        {/* FINANCIAL VARIABLES SECTION */}
        <Divisions divNumber="3" /> <br />
        <section className="flex__container">
          <div className="col__20">
            <h2>Financial Variables </h2>
            <br />

            <p>
              Please enter the following values. These variables may be
              different from one organization to another and will be used to
              show business indicators.
            </p>
          </div>
          <div className="col__75">
          <div className="tableTwo">
            <div className="col__50">
               <ul className="tableTwo__list">
                  <li>
                     Discount Rate &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">The rate of return used to discount future cash flows back to their present value.</span>
                     </i>
                     <span className="currency__input"><input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100.00" step="0.01" name="discountRate" onChange={handleChange}/> %</span>
                  </li>
                  <li>
                     Capital Cost &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">The expenses incurred on the acquisition, construction, or enhancement of significant fixed assets.</span>
                     </i>
                     <span className="currency__input"><input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100.00" step="0.01" name="capitalCost" onChange={handleChange}/> %</span>
                  </li>
                  <li>
                     Tax Rate &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">The percentage at which the company is taxed.</span>
                     </i>
                     <span className="currency__input"><input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100.00" step="0.01" name="taxRate" onChange={handleChange}/> %</span>
                  </li>
                  <li>
                     Break-Even &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">The point at which total cost and total revenue are equal.</span>
                     </i>
                     <span className="currency__input"><input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100.00" step="0.01" name="breakEven" onChange={handleChange}/> %</span>
                  </li>
               </ul>
            </div>
            <div className="col__50">
               <ul className="tableTwo__list">
                  <h3>Costs:</h3>
                  <li>
                     <i>Cloud</i> &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">All costs related to the Cloud and its components.</span>
                     </i>
                     <span className="currency__input">$ <input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100000000.00" step="0.01" name="costCloud" onChange={handleChange}/></span>
                  </li>
                  <li>
                     <i>Tools</i> &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">All costs incurred in DevOps tools. This may include support from third parties and a financial cost of adoption.</span>
                     </i>
                     <span className="currency__input">$ <input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100000000.00" step="0.01" name="costHR" onChange={handleChange}/></span>
                  </li>
                  <li>
                     <i>HR</i> &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">All DevOps-related Human Resources costs. This may include employees (payroll and benefits) and contractors.</span>
                     </i>
                     <span className="currency__input">$ <input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100000000.00" step="0.01" name="costTools" onChange={handleChange}/></span>
                  </li>
                  <li>
                     <i>Cultural Adoption</i> &nbsp;<i className="fas fa-info-circle info__btn">
                        <span className="info__btn--hover">All costs related to the adoption of a DevOps culture. This may include training, events, rewards, and other elements.</span>
                     </i>
                     <span className="currency__input">$ <input className="anti__input" type="number" placeholder="Type Here" required min="0.00" max="100000000.00" step="0.01" name="costCulturalAdoption" onChange={handleChange}/></span>
                  </li>

               </ul>
            </div>
         </div>
          </div>
        </section>
        {/* SERVICES AND APPLICATIONS SECTION */}
        <Divisions divNumber="4" /> <br />
        <section className="flex__container">
          <div className="col__20">
            <h2>Services / Applications </h2>
            <br />

            <p>
              Please enter the IT services or applications that may be related
              to your software development initiatives.
            </p>
          </div>
          <div className="col__40">
            <TableThree />
            <button className="red__btn sync__btn">+</button>
          </div>
          <div className="col__30">{/* ANY INFO */}</div>
        </section>
        <section className="flex__container textAlign__center">
          <a className="red__btn medium__btn" onClick={() => handleSubmit()}>
            Next
          </a>
        </section>
      </div>
    </div>
  );
}

export default CompanySetup;
