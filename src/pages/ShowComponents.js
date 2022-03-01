import React from 'react'
import { Button } from '../components/Button';
import Divisions from '../components/Divisions';
import TableOne from '../components/TableOne';
import TableTwo from '../components/TableTwo';
import TableFour from '../components/TableFour';
import TableFive from '../components/TableFive';
import TableSix from '../components/TableSix';
import TableSeven from '../components/TableSeven';
import TableEight from '../components/TableEight';
import SearchBox from '../components/SearchBox';
import ToolchainTable from '../components/ToolchainTable';
import SlaCard from '../components/SlaCard';
import TechnicalSlaCard from '../components/TechnicalSlaCard';
import TimeframeCard from '../components/TimeframeCard';
import '../App.css';


function ShowComponents() {
   return (
      <div className="prueba__dashboard">
         
         Buttons <br /><br />
         <Button
            to='/'
            className='btn'
            buttonStyle='red__btn'
            buttonSize='large__btn'
         >
            GET STARTED
         </Button><br /><br />
         <Button
            to='/'
            className='btn'
            buttonStyle='red__btn'
            buttonSize='medium__btn'
         >
            GET STARTED
         </Button><br /><br />
         <Button
            to='/'
            className='btn'
            buttonStyle='red__btn'
            buttonSize='small__btn'
         >
            GET STARTED
         </Button><br /><br />
         <Button
            to='/'
            className='btn'
            buttonStyle='gray__btn'
            buttonSize='small__btn'
         >
            GET STARTED
         </Button><br /><br />
         <Button
            to='/'
            className='btn'
            buttonStyle='null__btn'
         >
            +
         </Button><br /><br /><br />

         Divisions <br />
         <Divisions 
            divTitle="Company Setup"
            divNumber="1"
            divSubTitle="Resources"
            divDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sunt placeat asperiores perferendis quaerat quisquam praesentium tenetur perspiciatis."
         /> <br /><br /><br />

         Tables <br />
         <TableOne/><br />
         <TableTwo/><br />
         <TableFour/><br />
         <TableFive/><br />
         <TableSix/><br />
         <TableSeven/><br />
         <TableEight/><br /><br />

         Search Box <br /><br />
         <SearchBox /><br /><br /><br />

         Toolchain Table <br /><br />
         <ToolchainTable /><br /><br />

         Cards <br /><br />
         <SlaCard 
            slaTitle="CODE"
         /> <br />
         <TechnicalSlaCard 
            techSlaTitle="CODE"
            successfulSla="125"
            failedSla="45"
         /> <br />
         <TimeframeCard 
            timeFrameTitle="Release Average Lead Time"
            timeFrameSub1="1 hh 7 mm"
            timeFrameSub2="Solved: 3"
         /> <br />

         
      </div>
   )
}

export default ShowComponents;
