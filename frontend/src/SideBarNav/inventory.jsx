import { DataGrid } from '@mui/x-data-grid';

export default function Inventory() {
  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 100 },
    { field: 'details', headerName: 'Details', width: 200 },
    { field: 'stockCondition', headerName: 'Stock Condition', width: 150 },
  ];

  const rows = [
    {
      id: 1,
      name: "Gloves",
      quantity: 500,
      details: "Latex, size M",
      stockCondition: "In Stock",
    },
    {
      id: 2,
      name: "Syringes",
      quantity: 200,
      details: "10ml, sterile",
      stockCondition: "Low Stock",
    },
    {
      id: 3,
      name: "Bandages",
      quantity: 1000,
      details: "Assorted sizes",
      stockCondition: "In Stock",
    },
    {
      id: 4,
      name: "Defibrillator",
      quantity: 2,
      details: "Portable, with batteries",
      stockCondition: "Out of Stock",
    },
    {
      id: 5,
      name: "Scalpels",
      quantity: 50,
      details: "Sterile, assorted sizes",
      stockCondition: "In Stock",
    },
    {
      id: 6,
      name: "Stethoscopes",
      quantity: 20,
      details: "Digital, with carrying case",
      stockCondition: "In Stock",
    },
    {
      id: 7,
      name: "Tourniquets",
      quantity: 30,
      details: "Latex-free, assorted sizes",
      stockCondition: "Low Stock",
    },
    {
      id: 8,
      name: "Oxygen Tanks",
      quantity: 10,
      details: "Portable, with regulator",
      stockCondition: "In Stock",
    },
    {
      id: 9,
      name: "Wheelchairs",
      quantity: 5,
      details: "Foldable, with footrests",
      stockCondition: "In Stock",
    },
    {
      id: 10,
      name: "Crutches",
      quantity: 20,
      details: "Adjustable, with pads",
      stockCondition: "In Stock",
    },
    {
      id: 11,
      name: "Blood Pressure Monitors",
      quantity: 15,
      details: "Digital, with cuff",
      stockCondition: "In Stock",
    },
    {
      id: 12,
      name: "Thermometers",
      quantity: 50,
      details: "Digital, oral",
      stockCondition: "In Stock",
    },
    {
      id: 13,
      name: "Gauze Pads",
      quantity: 1000,
      details: "Assorted sizes, sterile",
      stockCondition: "In Stock",
    },
    {
      id: 14,
      name: "Medical Gloves",
      quantity: 200,
      details: "Latex, powdered",
      stockCondition: "In Stock",
    },
    {
      id: 15,
      name: "Face Masks",
      quantity: 500,
      details: "Surgical, disposable",
      stockCondition: "In Stock",
    },
    {
      id: 16,
      name: "Surgical Sutures",
      quantity: 100,
      details: "Assorted sizes, sterile",
      stockCondition: "In Stock",
    },
    {
      id: 17,
      name: "Medical Scissors",
      quantity: 20,
      details: "Sterile, curved",
      stockCondition: "In Stock",
    },
    {
      id: 18,
      name: "Tape",
      quantity: 50,
      details: "Medical, hypoallergenic",
      stockCondition: "In Stock",
    },
    {
      id: 19,
      name: "Cotton Balls",
      quantity: 1000,
      details: "Sterile, assorted sizes",
      stockCondition: "In Stock",
    },
    {
      id: 20,
      name: "Q-Tips",
      quantity: 500,
      details: "Sterile, assorted sizes",
      stockCondition: "In Stock",
    },
  ];


  return (
    <div
      style={{
        position: 'relative',
        overflowY: 'scroll',
        height: '90vh',
      }}
    >
      <div>
        <img
          src="https://img.freepik.com/free-vector/background-pixel-rain-abstract_23-2148361453.jpg?w=996&t=st=1726552683~exp=1726553283~hmac=040cd65358d6c8643c60b590bf1f03631af1ba005d9e4de4f5ec9febfe61cbfa"
          height={200}
          width="100%"
        />
        <div
          style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          paddingLeft: '30px',
          marginTop: '60px',
          alignItems: 'flex-start',
          color: 'white',
          }}
        >
          <h1>Inventory</h1>
        </div>
        <div
          style={{
            margin: '30px'
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
}