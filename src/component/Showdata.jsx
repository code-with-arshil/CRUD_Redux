import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProfile } from '../redux/Action/Action';
import LoadingBar from 'react-top-loading-bar'
const Showdata = () => {
    const [progress, setProgress] = useState(100)
    const getdata = useSelector((state) => state.profiles.profiles)
    const dispatch = useDispatch()
    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress()}
            />
            <div className="shadow p-3">

                <div className="row">
                    <div className="col text-center">
                        <p className="h2 ">--Show Profile--</p>
                    </div>
                    <div className="col text-center">
                        <Link to='/createprofile'>
                            <button type="button" className="btn btn-primary">Create Profile</button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="container">

                <div className="box rounded shadow p-4 mt-5">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Profile</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Contact No</th>
                                    <th scope="col">Email id</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Languages</th>
                                    <th scope="col">Nationality</th>
                                    <th scope="col">functionality</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getdata.length === 0 ? (
                                    <tr>
                                        <td className="h2 text-center" colSpan="10">No data available</td>
                                    </tr>
                                ) : (
                                    getdata.map((eachData, index) => (
                                        <tr key={eachData.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td><img src={eachData.image} className="avatar" /></td>
                                            <td>{eachData.fullname}</td>
                                            <td>{eachData.contact}</td>
                                            <td>{eachData.email}</td>
                                            <td>{eachData.gender}</td>
                                            <td>{eachData.dob}</td>
                                            <td>{eachData.languages.join(" , ")}</td>
                                            <td>{eachData.nationality}</td>
                                            <td>
                                                <Link to={`/updateprofile/${index}`}> <button type="button" className="btn btn-outline-success">Edit</button></Link>
                                                <button type="button" className="btn btn-outline-danger ms-2" onClick={() => dispatch(deleteProfile(index))}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showdata