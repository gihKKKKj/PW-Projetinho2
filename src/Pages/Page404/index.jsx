import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Container from '../../Components/container'

function Page404() {
  return (
    <>
      <Header />
      <Container>
        <h2>Página não encontrada</h2>
        <p>Erro 404 – O conteúdo que você procura não existe.</p>
      </Container>
      <Footer />
    </>
  )
}

export default Page404
