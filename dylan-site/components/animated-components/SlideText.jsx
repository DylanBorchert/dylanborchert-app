


const SlideText = (props) => {

 return (
    <div className="SlideTextContainer">
        <div className="SlideTextAnimation">
            <div className="SlideTextFirst">
                {props.text1 ? props.text1 : 'testtext'}
            </div>
            <div className="SlideTextSecond">
                {props.text2 ? props.text2 : 'testtext'}
            </div>
        </div>
    </div>
 );
}


export default SlideText;