const express= require('express')
const fs = require('fs')

const app = express();

const PORT = process.env.PORT || 3000;


const jsonData = require('/home/mayank/Desktop/projects/aoos-hackathon/aircraft_parts_data.json');

const filteredData = jsonData.filter(item => item['Recycling Rate (%)'] > 60 && item['Condition']==='Used' && item['Renewable Material Content (%)']>60
) ;

const manufPotential = jsonData.filter(item=> item['Remanufacturing Potential (%)']>60 && item['Condition']==='Used') 


app.get('/recycled-data', (req, res) => {
    res.json(filteredData);
  });

app.get('/manuf-potential', (req, res) => {
    res.json(manufPotential);
    });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  }

)