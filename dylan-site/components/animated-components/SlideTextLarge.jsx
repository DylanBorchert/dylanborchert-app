


const SlideText = (props) => {

 return (
    <div className="SlideTextLargeContainer">
        <div className="SlideTextLargeAnimation">
            <div className="SlideTextLargeFirst">
                {props.text1 ? props.text1 : 'testtext'}
            </div>
            <div className="SlideTextLargeSecond">
                {props.text2 ? props.text2 : 'testtext'}
            </div>
        </div>
    </div>
 );
}


export default SlideText;