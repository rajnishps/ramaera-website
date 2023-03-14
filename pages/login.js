import Navbar from "../components/Navbar/Navbar";
import PageLayout from "../components/PageLayout/PageLayout";
import PageWidth from "../components/Width/PageWidth";
import LoginForm from "./page/Login/LoginForm";

const login = () => {
  return (
    <>
      <PageLayout mheight="100vh" height="120vh">
        <Navbar />
        <div style={{ height: "200px" }}></div>
        <PageWidth full scale={"95%"} width="1500px" position="relative">
          <LoginForm />
        </PageWidth>
      </PageLayout>
    </>
  );
};

export default login;
