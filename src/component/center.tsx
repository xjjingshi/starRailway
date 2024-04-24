import React from "react"
import { connect} from 'react-redux'

const Center =  (props:any) => {
    
    const { count, addNum, subNun} = props
    return <div className="content-center">

        <div>
            当前值 {count}
        </div>
        <div>
            <button onClick={()=> {
                addNum()
            }}>加</button>
        </div>
        <div>
            <button onClick={()=> {
               subNun()
            }}>减</button>
        </div>


    </div>
}

const mapDispatchToProps = (dispatch:any) => {

    return {
        addNum : ()=> {
            dispatch({type:'add'})
        },
        subNun: () => {
            dispatch({type: 'sub'})
        }
    }
}

export default connect((state)=> state, mapDispatchToProps)(Center)