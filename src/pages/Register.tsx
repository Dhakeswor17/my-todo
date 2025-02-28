import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const Register = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const handleRegister = () => {
        if (name.trim()) {
            localStorage.setItem('todoUser', name)
            navigate('/todo')
        } else {
            alert('Please enter your name!')
        }
    }

    const continueWithoutSaving = () => {
        localStorage.removeItem('todoUser')
        navigate('/todo')
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow p-5 text-center" style={{ width: '100%', maxWidth: '500px' }}>
                <h2 className="mb-4">Register to Save Your Todos</h2>
                
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={handleRegister}>Register</button>
                </div>

                <p className="mt-3">
                    Don’t want to register?{' '}
                    <span className="text-primary text-decoration-underline" style={{ cursor: 'pointer' }} onClick={continueWithoutSaving}>
                        Continue without saving
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Register
