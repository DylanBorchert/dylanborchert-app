


const FlipText = (props) => {

 return (
    <div className="flip-box">
        <div className="flip-box-inner">
            <div className="flip-box-front">
                {props.text1 ? props.text1 : 'testtext'}
            </div>
            <div className="flip-box-back">
                {props.text2 ? props.text2 : 'testtext'}
            </div>
        </div>
    </div>
 );
}


export default FlipText;