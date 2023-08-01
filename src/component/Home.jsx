import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addProfile } from '../redux/Action/Action';
import { Link, useNavigate } from 'react-router-dom'

const Home = ({ addProfile }) => {
    const [productData, setProductData] = useState({
        fullname: '',
        contact: '',
        email: '',
        gender: '',
        dob: '',
        languages: [],
        nationality: '',
        image: null,
    });
    const history = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'fullname' && !/^[A-Za-z\s]+$/.test(value)) {
            setProductData((prevState) => ({
                ...prevState,
                [name]: '',
            }));
            return;
        }
        if (name === 'contact' && !/^\d+$/.test(value)) {

            setProductData((prevState) => ({
                ...prevState,
                [name]: '',
            }));
            return;
        }
        setProductData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setProductData((prevState) => ({
            ...prevState,
            languages: checked
                ? [...prevState.languages, id]
                : prevState.languages.filter((language) => language !== id),
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {

            setProductData((prevState) => ({
                ...prevState,
                image: reader.result,
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const areAllFieldsFilled = () => {
        const { fullname, contact, email, gender, dob, languages, nationality, image } = productData;
        return (
            fullname.trim() !== '' &&
            contact.trim() !== '' &&
            email.trim() !== '' &&
            gender !== '' &&
            dob !== '' &&
            languages.length > 0 &&
            nationality !== '' &&
            image !== null
        );
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        addProfile(productData);
        console.log(productData)
        setProductData({
            fullname: '',
            contact: '',
            email: '',
            gender: '',
            dob: '',
            languages: [],
            nationality: '',
            image: null,
        });
        history("/")
    };
    return (
        <>
            <div className="shadow p-3">

                <div className="row">
                    <div className="col text-center">
                        <p className="h2 ">--Create Profile--</p>
                    </div>
                    <div className="col text-center">
                        <Link to='/'>
                            <button type="button" className="btn btn-dark">Show Profile</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="box rounded shadow p-4 mt-5">
                    <form>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Full Name.</label>
                                    <input type="text" className="form-control" name="fullname" value={productData.fullname} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Contact No.</label>
                                    <input type="text" className="form-control" name="contact" value={productData.contact} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email id.</label>
                                    <input type="email" className="form-control" name="email" value={productData.email} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Gender.</label>
                                    <div className="form-check">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={productData.gender === 'male'} onChange={handleInputChange} />
                                            <label className="form-check-label" htmlFor="Gender">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={productData.gender === 'female'} onChange={handleInputChange} />
                                            <label className="form-check-label" htmlFor="Gender">Female</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">DOB.</label>
                                    <input type="date" className="form-control" id="date" name="dob" value={productData.dob} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Languages.</label>
                                    <div className="form-check">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="English" value="English" onChange={handleCheckboxChange} checked={productData.languages.includes('English')} />
                                            <label className="form-check-label" htmlFor="inlineCheckbox1">English</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="Hindi" value="Hindi" onChange={handleCheckboxChange} checked={productData.languages.includes('Hindi')} />
                                            <label className="form-check-label" htmlFor="inlineCheckbox2">Hindi</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="Gujarati" value="Gujarati" onChange={handleCheckboxChange} checked={productData.languages.includes('Gujarati')} />
                                            <label className="form-check-label" htmlFor="inlineCheckbox2">Gujarati</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Nationality.</label>
                                    <select className="form-select" aria-label="Default select example" name="nationality" value={productData.nationality} onChange={handleInputChange}>
                                        <option value="">select our Nationality</option>
                                        <option value="Indians">Indians</option>
                                        <option value="Americans">Americans</option>
                                        <option value="Australians">Australians</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">choose a image.</label>
                                    <input className="form-control" type="file" id="image" onChange={handleFileChange} />
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button type="submit" className="btn btnbc btn-outline-dark rounded-pill mt-3" onClick={handleSubmit}
                                disabled={!areAllFieldsFilled()}>Submit</button>
                            {!areAllFieldsFilled() && ""}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default connect(null, { addProfile })(Home);







