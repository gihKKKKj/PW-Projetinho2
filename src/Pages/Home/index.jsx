import Header from '../../components/header'
import Footer from '../../components/footer'
import Container from '../../components/container'
import { Link } from "react-router-dom"
import styles from './home.module.css'

function Home() {
    return (
        <>
            <Header />

            <Container>
                <section className={styles.Home}>
                <div className='apresentacao'>
                    <p>
                        Olá, nós somos <br />
                        <span>Giovanna e Hillary</span> <br />
                        Devs Full Stack
                    </p>
                    <Link to="/sobre" className='btn btn-red'>
                        Saiba mais sobre nós!
                    </Link>
                </div>
                <figure>
                    <img className='img-home' src="/dog.svg" alt="Imagem da home" />
                </figure>
                </section>
            </Container>

            <Footer />
        </>
    )
}
export default Home 
