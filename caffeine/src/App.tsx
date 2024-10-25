// import Header from './components/Header/Header';
import { Global, BackgroundPreview, SectionInfo, Catalog, SectionDifferent, OrderSection, Feedback } from './style';
import quotes from './assets/quotes.svg';
import man from './assets/man.svg';
import coffee from './assets/cupOfCoffee.svg';
import left from './assets/left.svg';
import right from './assets/right.svg';

const App = () => {

  return <>
      <BackgroundPreview>
        {/* <Header /> */}

        <p>We’ve got your morning covered with</p>
        <h1>Coffee</h1>
        <p>
          It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.
        </p>
        <button>Order now</button>
      </BackgroundPreview>

      <SectionInfo>
        <div className='content'>
            <h2>Discover the best coffee</h2>
            <p>
            Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. 
            Having a cup of coffee is good, but having a cup of real coffee is greater. 
            There is no doubt that you will enjoy this coffee more than others you have ever tasted.
            </p>
            <button>Learn More</button>
        </div>
        <img className='img_coffee' src={coffee} alt="coffee" width={500} height={484} />
      </SectionInfo>


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
