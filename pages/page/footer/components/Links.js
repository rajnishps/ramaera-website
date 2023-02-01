import styled from "styled-components"

const Container = styled.div`
  display: flex;
  gap: 4rem;
  align-items: top;
`
const Div = styled.div`
  display: flex;
  padding-bottom: 220px;
  flex-direction: column;
`
const Link = styled.a`
  font-size: 10px;
  margin-bottom: 1rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
`
const Heading = styled.h3`
  font-size: 16px;
  color: white;
  margin-bottom: 2rem;
`
const SubHeading = styled.h3`
  color: white;
  margin-bottom: 1rem;
`
const SubText = styled.h3`
  color: white;
  font-weight: 100;
  font-size: 8px;
  line-height: 16px;
`
const Input = styled.input`
  margin-bottom: 1rem;
  height: 30px;
  border: 1.5px solid #ffffff;
  border-radius: 6px;
  padding-left: 1rem;
`
const Sub = styled.div`
  color: white;
  padding: 2rem;
  width: 250px;
  height: 200px;
  margin-left: 3rem;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05)
  );
`

const Links = () => {
  return (
    <Container>
      <Sub>
        <SubHeading>Subscribe</SubHeading>
        <form action="">
          <Input placeholder="Email Adddress" />
        </form>
        <SubText>
          Hello, we are Lift Media. Our goal is to translate the positive
          effects from revolutionizing how companies engage with their clients &
          their team.
        </SubText>
      </Sub>
      <Div>
        <Heading>Product</Heading>
        <Link href="#">Landing Page</Link>
        <Link href="#">Popup Builder</Link>
        <Link href="#">Web-design</Link>
        <Link href="#">Content</Link>
        <Link href="#">Integrations</Link>
      </Div>
      <Div>
        <Heading href="#">Use Cases</Heading>
        <Link href="#">Web-designers</Link>
        <Link href="#">Marketers</Link>
        <Link href="#">Small Business</Link>
        <Link href="#">Website Builder</Link>
      </Div>
      <Div>
        <Heading href="#">Resources</Heading>
        <Link href="#">Academy</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Themes</Link>
        <Link href="#">Hosting</Link>
        <Link href="#">Developers</Link>
        <Link href="#">Support</Link>
      </Div>
      <Div>
        <Heading href="#">Company</Heading>
        <Link href="#">About Us</Link>
        <Link href="#">Careers</Link>
        <Link href="#">FAQs</Link>
        <Link href="#">Teams</Link>
        <Link href="#">Contact Us</Link>
      </Div>
    </Container>
  )
}

export default Links
