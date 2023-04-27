import React from 'react'

export const Login = () => {
    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong">
                                <div className="card-body p-5 text-center">

                                    {/* <h3 className="mb-5">Sign in</h3> */}

                                    <div className="form mb-4">
                                        {/* <label className="form-label" htmlFor="typeEmailX-2">Email</label> */}
                                        <input placeholder='Correo' type="email" id="typeEmailX-2" className="border-input form-control form-control-lg" />
                                       
                                    </div>

                                    <div className="form-outline mb-4">
                                        {/* <label className="form-label" htmlFor="typePasswordX-2">Password</label> */}
                                        <input placeholder='Contraseña' type="password" id="typePasswordX-2" className="border-input form-control form-control-lg" />
                                    </div>

                                   
                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                        <label className="form-check-label" htmlFor="form1Example3">Recuerdame</label>
                                    </div>

                                    <button className="btn btn-primary btn-lg btn-block border-boton" type="submit">Iniciar Sesión</button>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
