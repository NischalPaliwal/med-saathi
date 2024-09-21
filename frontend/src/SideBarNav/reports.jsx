// import React from 'react';
import { Button, Card, CardBody, CardHeader, CardFooter, Table } from 'reactstrap';

const Reports = () => {
  const tests = [
    {
      id: 1,
      testName: 'Complete Blood Count (CBC)',
      result: 'Normal',
      referenceRange: '10,000 - 20,000 cells/μL',
      units: 'cells/μL',
    },
    {
      id: 2,
      testName: 'Blood Urea Nitrogen (BUN)',
      result: '15',
      referenceRange: '7-20 mg/dL',
      units: 'mg/dL',
    },
    {
      id: 3,
      testName: 'Creatinine',
      result: '0.8',
      referenceRange: '0.5-1.1 mg/dL',
      units: 'mg/dL',
    },
    {
      id: 4,
      testName: 'Electrolyte Panel',
      result: 'Normal',
      referenceRange: '135-145 mmol/L',
      units: 'mmol/L',
    },
    {
      id: 5,
      testName: 'Glucose',
      result: '90',
      referenceRange: '70-100 mg/dL',
      units: 'mg/dL',
    },
    {
      id: 6,
      testName: 'Hemoglobin A1c (HbA1c)',
      result: '5.5',
      referenceRange: '4-6%',
      units: '%',
    },
    {
      id: 7,
      testName: 'Lipid Profile',
      result: 'Normal',
      referenceRange: '120-200 mg/dL',
      units: 'mg/dL',
    },
    {
      id: 8,
      testName: 'Thyroid-Stimulating Hormone (TSH)',
      result: '2.5',
      referenceRange: '0.5-5.0 μIU/mL',
      units: 'μIU/mL',
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader >
              <h1>Lab Reports</h1>
            </CardHeader>
            <CardBody>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                  <th>Test Name</th><br/><br/>
                  <th>Result</th><br/><br/>
                  <th>Reference Range</th><br/><br/>
                  <th>Units</th><br/><br/>
                  </tr>
                </thead>
                <tbody>
                  {tests.map((test) => (
                    <tr key={test.id}>
                      <td>{test.testName}</td><br/><br/><br/>
                      <td>{test.result}</td><br/><br/><br/>
                      <td>{test.referenceRange}</td><br/><br/><br/>
                      <td>{test.units}</td><br/><br/><br/>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
            <CardFooter>
                <div className='buttons'>
              <Button style={{ width: '150px', height: '50px', backgroundColor: '#2379f9', borderColor: '#ffffff', color: 'white' }} >
                Download Report
              </Button>
              <Button style={{ width: '150px', height: '50px', backgroundColor: '#2379f9', borderColor: '#ffffff', color: 'white' }} >
                Print Report
              </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;