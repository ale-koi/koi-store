import { NavLink } from "react-router-dom"


const OrderPlaced = () => {

    
    return (
        <div className='order-placed' style={{width: '100%', minHeight: '100vh', display:"flex", justifyContent: "center", alignItems:"center", }}>
            <div id='orderPlaced' style={{display:"flex", justifyContent:"space-evenly", flexDirection:"column",  width: "50%", alignItems:"center", height:300}}>
                <h1 style={{fontFamily: 'dongle', fontSize:75}}>Processing order! （｀＾´）ノ</h1>
            </div>
            <NavLink to="/"><button>Go back Home</button></NavLink>
        </div>

    )
}


export default OrderPlaced