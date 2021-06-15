import React from 'react'

// class Home extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h1>Hello, this is the home page.</h1>
//             </div>
//         )
//     }
// }

// export default Home

function Home(props) {
    return (
        <div id="root">
            <h1>Hello, this is the{this.props} page.</h1>
        </div>        
    );
}

ReactDOM.render(
    element,
    document.getElementById('root')
)