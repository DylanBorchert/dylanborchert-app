

const SlideTextSmall = (props) => {

 return (
    <div className="SlideTextContainerSmall">
        <div className="SlideTextAnimationSmall">
            <div className="SlideTextFirstSmall">
                {props.text1 ? props.text1 : 'testtext'}
            </div>
            <div className="SlideTextSecondSmall">
                {props.text2 ? props.text2 : 'testtext'}
            </div>
        </div>
    </div>
 );
}


export default SlideTextSmall;