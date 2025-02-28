import styles from './style';
import {  Navbar,Billing,CardDeal,Business,Clients,CTA,Stats,Footer,Testimonials,Hero} from './components';



const App = () => (
          <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <NavBar />
              </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
              <Navbar />
              <Billing />
              <CardDeal />
              <Business />
              <Clients />
              <CTA />
              <Stats />
              <Footer />
              <Testimonials />
              <Hero />
              </div>
            </div>
        </div>    
);

export default App