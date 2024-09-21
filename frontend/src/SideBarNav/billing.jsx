export default function Billing() {
    return (
        <div style={{
            position: 'relative',
            overflowY: 'scroll',
            height: '90vh',
        }}>
            <div>
                <img src='https://img.freepik.com/free-vector/gradient-abstract-background-with-different-shapes_23-2149110301.jpg?w=996&t=st=1726552746~exp=1726553346~hmac=bd4d624ba7d3dacaf4f9fd7fa5ed73cfecb6207652d4bf1fed1196230ce8e24a' height={200} width='100%'/>
                <div style={{
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
          }}>
            <h1>Billing</h1>
          </div>
            </div>
        </div>
    );
}