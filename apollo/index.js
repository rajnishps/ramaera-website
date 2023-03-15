import { ApolloClient, InMemoryCache } from "@apollo/client"
let ACCESSTOKEN

if (typeof window !== "undefined") {
  ACCESSTOKEN = localStorage.getItem("accessToken")
}
const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  headers: {
    authorization: `Bearer ${ACCESSTOKEN}`,
  },
  cache: new InMemoryCache(),
})
export default client
