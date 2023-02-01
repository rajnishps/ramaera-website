import styled from "styled-components"

const MapContainer = styled.div`
  display: flex;
  padding-bottom: 140px;
  align-items: center;
  flex-direction: column;
  width: 20vw;
  margin-left: 2rem;
  margin-bottom: 100px;
`
const Image = styled.img`
  height: 200px;
`
const Map = () => {
  return (
    <MapContainer>
      <Image src="/content/map.png" />
    </MapContainer>
  )
}

export default Map
