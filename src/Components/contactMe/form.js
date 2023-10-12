import Header from '../Header/header';
import './form.css';
import Footer from '../Footer/footer'





const contactMe = () => {
  return (
    <div>
        <Header />
        <div className='form'>
          <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows={6} placeholder='Type your message here'></textarea>
            <button className='btn'>Submit</button>
          </form>

        <Footer />
        </div>
    </div>
  )
}

export default contactMe