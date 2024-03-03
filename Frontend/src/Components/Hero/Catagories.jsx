import React from 'react';
import desktop from '../../assets/Img/desktop.png';
import laptop from '../../assets/Img/laptop.png';
import mouse from '../../assets/Img/mouse.png';
import keyboard from '../../assets/Img/keyboard.png';
import monitor from '../../assets/Img/monitor.png';
import printer from '../../assets/Img/printer.png';
import phone from '../../assets/Img/phone.png';
import headphone from '../../assets/Img/headphone.png';
import camera from '../../assets/Img/camera.png';
import watch from '../../assets/Img/watch.png';
import { Link } from 'react-router-dom';

function Catagories({updateFilterValue}) {

    return (
    <div className='Catagories'>
        <h4 className='text-center fw-bold m-0 mb-1'>Catagories</h4>
        <ul>
            {
                catagories.map((catagoriesItem, index) =>{
                    const {img, title} = catagoriesItem;

                    return(
                        <Link to='/Products' key={index} className='link'>
                            <button
                                value={title}
                                onClick={updateFilterValue}
                                type="button" 
                                name="category" 
                                id="category" 
                            >
                                <img src={img} alt={title} />
                                {title}
                            </button>
                        </Link>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Catagories;


const catagories = [
    {
        id : 1,
        img : desktop,
        title : 'Computer'
    },
    {
        id : 2,
        img : laptop,
        title : 'Laptop'
    },
    {
        id : 3,
        img : mouse,
        title : 'Mouse'
    },
    {
        id : 1,
        img : keyboard,
        title : 'Keyboard'
    },
    {
        id : 1,
        img : monitor,
        title : 'Monitor'
    },
    {
        id : 1,
        img : printer,
        title : 'Printer'
    },
    {
        id : 1,
        img : phone,
        title : 'Mobile'
    },
    {
        id : 1,
        img : headphone,
        title : 'headphone'
    },
    {
        id : 1,
        img : camera,
        title : 'Camera'
    },
    {
        id : 1,
        img : watch,
        title : 'Watch'
    }
];