import styled from "styled-components"

const MapContainer = styled.a`
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
  border: 3px solid #959595;
  border-radius: 20px;
`
const Map = () => {
  return (
    <MapContainer href="https://goo.gl/maps/CM2s4itnMDStmHVv8" target="_blank">
      <Image src="/content/map1.png" />
    </MapContainer>
  )
}

export default Map
