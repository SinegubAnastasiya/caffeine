import { Global, BackgroundPreview, SectionInfo, Catalog, SectionDifferent, OrderSection, Feedback } from './style'
import quotes from './assets/quotes.svg'
import man from './assets/man.svg'
import left from './assets/left.svg'
import right from './assets/right.svg'

const App = () => {

  return <>
      <OrderSection>
        <div className='wrapper_order'>
          <div className='info'>
            <h2>Get a chance to have an Amazing morning</h2>
            <p>We are giving you are one time opportunity to experience a better life with coffee.</p>
            <div className='button_order'>Order Now</div>
          </div>
          <div className='wrapper_img'></div>
          
        </div>
      </OrderSection>

      <Feedback>
        <h2>Our coffee perfection feedback</h2>
        <p>Our customers has amazing things to say about us</p>

        <div className='slider'>
          <div><img src="left_arrow" alt="" /></div> 
          <img src={quotes} alt=''/>
          <div className='text'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
            <h3>Jonny Thomas</h3>
            <p className='profession'>Project Manager</p>
          </div>
          <img className="avatar" src={man} alt=''/>
          <div><img src="right_arrow" alt="" /></div> 
        </div>
      </Feedback>
    </>
}

export default App
