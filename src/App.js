import './App.css';
import Navigation from './components/navigation/Navigation';
import Rank from './components/Rank/Rank';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



const particlesOptions = {
  name: "Mouse Attract",
    particles: {
        number: {
            value: 180,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#ff0000",
            animation: {
                enable: true,
                speed: 5,
                sync: false,
            },
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
        },
        size: {
            value: {
                min: 1,
                max: 3,
            },
        },
        links: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 6,
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "attract",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
            },
            attract: {
                distance: 600,
                duration: 0.4,
                speed: 3,
            },
            repulse: {
                distance: 200,
            },
            push: {
                quantity: 4,
            },
            remove: {
                quantity: 2,
            },
        },
    },
    background: {
        color: "transparent",
    },
}

const returnClarifaiRequestOptions = (url) => {
    const PAT = '1b43454f514e47ed9fc75b63f48df8a7';
    const USER_ID = 'andrej044';       
    const APP_ID = 'smart-brain';
    const MODEL_ID = 'face-detection';
    const IMAGE_URL = url;

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    return requestOptions;
}


function App() {

    const [inputUrl, setInput] = useState(" ");

    const [imageUrl, setImageUrl] = useState(" ");

    const [box, setBox] = useState({});

    const getBoxFaceData = (box) => {
        const img = document.getElementById("face-recognise-img");
        const imgWidth = Number(img.width); 
        const imgHeight = Number(img.height); 

        const {bottom_row, left_col, right_col, top_row} = box.outputs[0].data.regions[0].region_info.bounding_box;
       
        setBox({
        top:top_row * imgHeight,
        left:left_col * imgWidth,
        right:imgWidth - (imgWidth * right_col),
        bottom:imgHeight - (imgHeight * bottom_row)
        })
    }

    const onInputChange = (event) => {
    setInput(event.target.value);
    }

    const onButtonSubmit = () => {
        setImageUrl(inputUrl);
        fetch("https://api.clarifai.com/v2/models/" + 'face-detection' +  "/outputs", returnClarifaiRequestOptions(inputUrl))
        .then(response => response.json())
        .then(result => console.log("hi",getBoxFaceData(result)))
        .catch(error => console.log('error', error));

    }


    const particlesInit = useCallback(async engine => {
    await loadFull(engine);
}, []);

return (
    <div className="App">
        <Particles
            className='particles'
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank/>
        <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
        <FaceRecognition imageUrl={imageUrl} box = {box}/>
    </div>
);
}

export default App;
