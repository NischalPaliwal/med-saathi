import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from "@mui/x-charts";
import { Gauge } from '@mui/x-charts/Gauge';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
  gaugeClasses
} from '@mui/x-charts/Gauge';

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

export default function Dashboard() {
  const chartSetting = {
    xAxis: [
      {
        label: 'No. of Deaths(/ month)',
      },
    ],
    width: 500,
    height: 400,
  };

  const chartSetting_recovery_rate = {
    xAxis: [
      {
        label: 'Recovery rate disease wise',
      },
    ],
    width: 500,
    height: 400,
  };

  const dataset = [
    { month: 'Jan', 'No. of Deaths': 10 },
    { month: 'Feb', 'No. of Deaths': 20 },
    { month: 'Mar', 'No. of Deaths': 30 },
    { month: 'April', 'No. of Deaths': 10 },
    { month: 'May', 'No. of Deaths': 20 },
    { month: 'June', 'No. of Deaths': 30 },
    { month: 'July', 'No. of Deaths': 10 },
    { month: 'August', 'No. of Deaths': 20 },
    { month: 'September', 'No. of Deaths': 30 },
  ];

  const dataset_new = [
    { month: 'Jan', 'No. of Births': 10 },
    { month: 'Feb', 'No. of Births': 20 },
    { month: 'Mar', 'No. of Births': 30 },
    { month: 'April', 'No. of Births': 10 },
    { month: 'May', 'No. of Births': 20 },
    { month: 'June', 'No. of Births': 30 },
    { month: 'July', 'No. of Births': 10 },
    { month: 'August', 'No. of Births': 20 },
    { month: 'September', 'No. of Births': 30 },
  ];

  const valueFormatter = (value) => value;

  
  const data_recovery_rate = [
    { disease: 'Cold', recoveryRate: 0.8 },
    { disease: 'Injury', recoveryRate: 0.7 },
    { disease: 'Flu', recoveryRate: 0.85 },
    { disease: 'Sprain', recoveryRate: 0.9 },
    { disease: 'Fracture', recoveryRate: 0.6 },
  ];

    return (
        <div style={{
            position: 'relative',
            overflowY: 'scroll',
            height: '90vh',
        }}>
            <div style={{ marginLeft: '30px'}}>
                <h1>Dashboard</h1>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
            <div style={{
                    width: '400px', 
                    height: '400px', 
                    backgroundColor: '#ffffff', 
                    padding: '10px', 
                    overflow: 'auto', 
                    paddingTop: '15px', 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '20px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                    </LocalizationProvider>
            </div>
            <div style={{
                width: '500px',
                height: '400px',
                backgroundColor: '#ffffff',
                margin: '20px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <BarChart
                 xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }]}
                 series={[
                 { data: [100, 120, 110, 130, 140, 150, 160, 170, 180, 190, 200, 210], name: 'Inpatients' },
                 { data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160], name: 'Outpatients' },
                 { data: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420], name: 'Visitors' }
                 ]}
                 width={500}
                 height={400}
                 tooltip={{
                    formatter: (params) => {
                      return `${params.seriesName}: ${params.value}`;
                    }
                  }}
                 />
                 <div style={{
                textAlign: 'center'
                }}>
                <h3>Graphical representation of Patients, Admits and Visitors</h3>
                </div>
                </div>
                <div style={{
  width: '450px',
  height: '400px',
  backgroundColor: '#ffffff',
  margin: '20px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <PieChart
    series={[
      {
        data: [
          { id: 0, value: 10, label: 'Cold' },
          { id: 1, value: 15, label: 'Infection' },
          { id: 2, value: 20, label: 'Injury' },
          { id: 3, value: 30, label: 'Other' }
        ],
      },
    ]}
    width={400}
    height={250}
  />
  <h3 style={{ marginTop: '10px' }}>Disease Analysis</h3>
</div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row'}}>
            <div style={{
                    width: '650px',
                    height: '400px',
                    backgroundColor: '#ffffff',
                    margin: '20px',
                    marginTop: '18px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
            <BarChart
            dataset={dataset_new}
            yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[{ dataKey: 'No. of Births', label: 'New Births over the months', valueFormatter }]}
            layout="horizontal"
            {...chartSetting}
          />
                <h3 style={{ textAlign: 'center' }}>Total New Births</h3>
            </div>
            <div style={{
              width: '650px',
              height: '400px',
              backgroundColor: '#ffffff',
              margin: '20px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[{ dataKey: 'No. of Deaths', label: 'Patient Death Analysis', valueFormatter }]}
            layout="horizontal"
            {...chartSetting}
          />
            </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row'}}>
                  <div style={{
                    width: '650px',
                    height: '400px',
                    backgroundColor: '#ffffff',
                    margin: '20px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <GaugeContainer
                    width={400}
                    height={400}
                    startAngle={-110}
                    endAngle={110}
                    value={30}
                   >
                  <GaugeReferenceArc />
                  <GaugeValueArc />
                  <GaugePointer />
                  </GaugeContainer>
                  <h3 style={{ textAlign: 'center' }}>Average Test Rate - 12 patients/hr</h3>
                  </div>
                  <div style={{
                    width: '650px',
                    height: '400px',
                    backgroundColor: '#ffffff',
                    margin: '20px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Gauge
                      value={45}
                      startAngle={-110}
                      endAngle={110}
                      sx={{
                      [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 40,
                      transform: 'translate(0px, 0px)',
                      },
                      }}
                      text={
                      ({ value, valueMax }) => `${value} / ${valueMax}`
                       }
                       width={350}
                       height={350}
                      />
                      <h3 style={{ textAlign: 'center' }}>No. of Beds Available Currently</h3>
                  </div>
                </div>
                <div style={{
                display: 'flex',
                flexDirection: 'row'}}>
                  <div style={{
                    width: '1300px',
                    height: '400px',
                    backgroundColor: '#ffffff',
                    margin: '20px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <BarChart
                    dataset={data_recovery_rate}
                    yAxis={[{ scaleType: 'band', dataKey: 'disease' }] }
                    series={[{ dataKey: 'recoveryRate', label: 'Recovery Rate', valueFormatter, color: '#D70040' }] }
                    layout="horizontal"
                    {...chartSetting_recovery_rate}
                    />
                  <h3 style={{ textAlign: 'center' }}>Recovery Rate by Disease</h3>
                  </div>
                </div>
        </div>
    );
}