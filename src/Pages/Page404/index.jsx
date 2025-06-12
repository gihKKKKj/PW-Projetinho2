import Header from '../../components/header'
import Footer from '../../components/footer'
import Container from '../../components/container'

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
