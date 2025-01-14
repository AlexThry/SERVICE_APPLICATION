import BlurryShapesBackground from '../components/BlurryShapesBackground';
import Auth from '../features/Auth';
import Shape from '../objects/Shape';

function AuthPage() {
    const shape1: Shape = {type: 'circle', height: 400, width: 600, color: '#BC50DC', blur: 90, top: 400, left: 300, rotation: 38}
    const shape2: Shape = {type: 'circle', height: 300, width: 500, color: '#3F9AF4', blur: 70, top: 100, left: 800, rotation: -40}
    const shape3: Shape = {type: 'circle', height: 400, width: 500, color: '#FF7817', blur: 80, top: -100, left: 100, rotation: -10}
    return (
        <>
            <div className="flex flex-col items-center overflow-hidden">
                <BlurryShapesBackground shapes={[shape1, shape2, shape3]}/>
                <div className="mt-32">
                    <h1 className='text-5xl font-bold mb-8 text-white mix-blend-difference'>Welcome !</h1>
                    <Auth/>
                </div>
            </div>
        </>
    );
}

export default AuthPage;
