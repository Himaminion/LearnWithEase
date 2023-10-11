import './ResetPasswordpage.css'
const ResetPasswordpage = () => {
    return (
        <div>
    
        
        <div id='container'>
        <div id='top-container'>
        <div><h1>N2A</h1></div>
        </div>
            <div id='right-container'>
            <div id="labeldiv">
                <label htmlFor="new" >New Password:</label>
                <label htmlFor="confirm">Confirm Password:</label>
            </div>
            <div id="textdiv">
                <input
                    id="new"
                    type="text"
                />
                <input
                    id="confirm"
                    type="text" />  
            </div>
            </div>
            <div id="bottom-container">
            <button>Confirm</button>
            </div>
        </div>
        
        </div>
                );
}; 
export default ResetPasswordpage;
